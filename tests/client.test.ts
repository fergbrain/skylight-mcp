import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import { SkylightClient } from "../src/api/client.js";
import type { Config } from "../src/config.js";
import { readStateFile, writeStateFileAtomic } from "../src/api/token-store.js";

const BASE = "https://app.ourskylight.com";

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

const config: Config = {
  email: "user@example.com",
  password: "secret",
  authType: "bearer",
  frameId: "frame-1",
  timezone: "America/New_York",
};

let tmpDir: string;
let statePath: string;

beforeEach(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "skylight-client-"));
  statePath = path.join(tmpDir, "state.json");
  process.env.SKYLIGHT_STATE_FILE = statePath;
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  fs.rmSync(tmpDir, { recursive: true, force: true });
  delete process.env.SKYLIGHT_STATE_FILE;
});

describe("SkylightClient token persistence", () => {
  it("refreshes an expired persisted token instead of logging in, then persists the rotation", async () => {
    // Seed an expired access token plus a valid refresh token.
    writeStateFileAtomic(statePath, {
      schemaVersion: 1,
      email: config.email,
      accessToken: "stale-access",
      refreshToken: "r1",
      accessExpiresAt: Date.now() - 1000,
      rotatedAt: Date.now() - 10_000,
    });

    const fetchMock = vi.fn(async (input: string | URL | Request, init?: RequestInit) => {
      const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;

      if (url === `${BASE}/oauth/token`) {
        const body = init?.body instanceof URLSearchParams ? init.body : new URLSearchParams(String(init?.body ?? ""));
        expect(body.get("grant_type")).toBe("refresh_token");
        expect(body.get("refresh_token")).toBe("r1");
        return jsonResponse(200, { access_token: "a2", refresh_token: "r2", expires_in: 7200 });
      }
      if (url === `${BASE}/api/plus_access`) {
        return new Response("", { status: 200 });
      }
      if (url.startsWith(`${BASE}/api/frames/frame-1/chores`)) {
        const headers = new Headers(init?.headers);
        expect(headers.get("authorization")).toBe("Bearer a2");
        return jsonResponse(200, { data: [] });
      }
      // Any auth/login endpoint hit means we wrongly did a full login.
      throw new Error(`Unexpected fetch call (should have refreshed, not logged in): ${url}`);
    });
    vi.stubGlobal("fetch", fetchMock);

    const client = new SkylightClient(config);
    await client.get("/api/frames/{frameId}/chores");

    // Rotated tokens were persisted.
    const persisted = readStateFile(statePath);
    expect(persisted?.accessToken).toBe("a2");
    expect(persisted?.refreshToken).toBe("r2");

    // A second request reuses the fresh token — no second refresh.
    await client.get("/api/frames/{frameId}/chores");
    const refreshCalls = fetchMock.mock.calls.filter(
      ([u]) => (typeof u === "string" ? u : (u as URL).toString()) === `${BASE}/oauth/token`
    );
    expect(refreshCalls).toHaveLength(1);
  });

  it("ignores persisted tokens that belong to a different account", async () => {
    writeStateFileAtomic(statePath, {
      schemaVersion: 1,
      email: "someone-else@example.com",
      accessToken: "other-access",
      refreshToken: "other-refresh",
      rotatedAt: Date.now(),
    });

    let loggedIn = false;
    const fetchMock = vi.fn(async (input: string | URL | Request) => {
      const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
      // Reaching the login flow proves the foreign refresh token was ignored.
      if (url.includes("/oauth/authorize")) {
        loggedIn = true;
        throw new Error("login-flow-reached");
      }
      if (url === `${BASE}/oauth/token` && !loggedIn) {
        throw new Error("used a foreign refresh token");
      }
      throw new Error(`stop: ${url}`);
    });
    vi.stubGlobal("fetch", fetchMock);

    const client = new SkylightClient(config);
    await expect(client.get("/api/frames/{frameId}/chores")).rejects.toThrow();
    expect(loggedIn).toBe(true);
  });
});
