import { afterEach, beforeEach, describe, expect, it } from "vitest";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import {
  getDefaultStatePath,
  readStateFile,
  writeStateFileAtomic,
  type StoredTokens,
} from "../src/api/token-store.js";

let tmpDir: string;
let statePath: string;

beforeEach(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "skylight-state-"));
  statePath = path.join(tmpDir, "state.json");
});

afterEach(() => {
  fs.rmSync(tmpDir, { recursive: true, force: true });
  delete process.env.SKYLIGHT_STATE_FILE;
});

describe("token-store", () => {
  const tokens: StoredTokens = {
    schemaVersion: 1,
    email: "user@example.com",
    accessToken: "access-123",
    refreshToken: "refresh-123",
    accessExpiresAt: 1_900_000_000_000,
    rotatedAt: 1_800_000_000_000,
  };

  it("writes then reads tokens round-trip", () => {
    writeStateFileAtomic(statePath, tokens);
    expect(readStateFile(statePath)).toEqual(tokens);
  });

  it("creates parent directories and writes a 0600 file on POSIX", () => {
    const nested = path.join(tmpDir, "a", "b", "state.json");
    writeStateFileAtomic(nested, tokens);
    expect(fs.existsSync(nested)).toBe(true);
    if (process.platform !== "win32") {
      expect(fs.statSync(nested).mode & 0o777).toBe(0o600);
    }
  });

  it("returns null when the file is missing", () => {
    expect(readStateFile(path.join(tmpDir, "nope.json"))).toBeNull();
  });

  it("returns null for malformed JSON", () => {
    fs.writeFileSync(statePath, "{ not json");
    expect(readStateFile(statePath)).toBeNull();
  });

  it("returns null when required fields are missing", () => {
    fs.writeFileSync(statePath, JSON.stringify({ schemaVersion: 1, accessToken: "x" }));
    expect(readStateFile(statePath)).toBeNull();
  });

  it("defaults optional fields when absent", () => {
    fs.writeFileSync(
      statePath,
      JSON.stringify({ accessToken: "a", refreshToken: "r" })
    );
    const result = readStateFile(statePath);
    expect(result?.accessToken).toBe("a");
    expect(result?.refreshToken).toBe("r");
    expect(result?.email).toBeUndefined();
    expect(result?.accessExpiresAt).toBeUndefined();
    expect(typeof result?.rotatedAt).toBe("number");
  });

  it("honors the SKYLIGHT_STATE_FILE override", () => {
    process.env.SKYLIGHT_STATE_FILE = statePath;
    expect(getDefaultStatePath()).toBe(statePath);
  });

  it("falls back to a platform user-data dir without an override", () => {
    delete process.env.SKYLIGHT_STATE_FILE;
    const resolved = getDefaultStatePath();
    expect(resolved.endsWith(path.join("skylight-mcp", "state.json"))).toBe(true);
  });
});
