import { getConfig, usesEmailAuth, type Config } from "../config.js";
import { login, refreshAccessToken, type AuthResult } from "./auth.js";
import { SKYLIGHT_API_VERSION, SKYLIGHT_BASE_URL } from "./constants.js";
import { getDefaultStatePath, readStateFile, writeStateFileAtomic } from "./token-store.js";
import {
  AuthenticationError,
  NotFoundError,
  RateLimitError,
  SkylightError,
} from "../utils/errors.js";

/**
 * Skylight subscription status types
 */
export type SubscriptionStatus = "plus" | "free" | "trial" | null;

export interface RequestOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  params?: Record<string, string | boolean | number | undefined>;
  body?: unknown;
}

/**
 * Skylight API Client
 * Handles authentication and HTTP requests to the Skylight API
 */
/** Refresh the access token this many ms before it actually expires. */
const TOKEN_EXPIRY_BUFFER_MS = 60_000;

export class SkylightClient {
  private config: Config;
  private resolvedToken: string | null = null;
  private refreshToken: string | null = null;
  private accessExpiresAt: number | null = null;
  private statePath: string = getDefaultStatePath();
  private stateLoaded = false;
  private authPromise: Promise<string> | null = null;
  private subscriptionStatus: SubscriptionStatus = null;

  constructor(config?: Config) {
    this.config = config ?? getConfig();
  }

  /**
   * Get the authentication credentials.
   * Manual-token auth uses the configured token directly. Email/password auth
   * resolves an OAuth bearer token, reusing persisted/refreshed tokens where
   * possible instead of replaying the full browser login on every start.
   */
  private async getCredentials(): Promise<{ token: string }> {
    if (!usesEmailAuth(this.config)) {
      return { token: this.config.token! };
    }

    return { token: await this.resolveEmailToken() };
  }

  /**
   * Resolve a usable access token for email/password auth.
   * Concurrent callers coalesce onto a single in-flight resolution so we never
   * fire two refresh/login flows in parallel and clobber each other's tokens.
   */
  private async resolveEmailToken(forceRefresh = false): Promise<string> {
    this.loadPersistedState();

    if (!forceRefresh && this.resolvedToken && !this.isAccessExpired()) {
      return this.resolvedToken;
    }

    if (this.authPromise) {
      return this.authPromise;
    }

    this.authPromise = this.acquireToken(forceRefresh).finally(() => {
      this.authPromise = null;
    });
    return this.authPromise;
  }

  /**
   * Acquire a token by refreshing when possible, otherwise by full login.
   * Falls back to a full login if a refresh attempt fails.
   */
  private async acquireToken(forceRefresh: boolean): Promise<string> {
    if (this.refreshToken && (forceRefresh || !this.resolvedToken || this.isAccessExpired())) {
      try {
        console.error("[client] Refreshing Skylight access token...");
        this.applyAuthResult(await refreshAccessToken(this.refreshToken));
        return this.resolvedToken!;
      } catch (err) {
        console.error(
          `[client] Token refresh failed (${(err as Error).message}); falling back to full login.`
        );
        this.clearTokens();
      }
    }

    if (!forceRefresh && this.resolvedToken && !this.isAccessExpired()) {
      return this.resolvedToken;
    }

    return this.performLogin();
  }

  /**
   * Perform a full email/password login and persist the resulting tokens.
   */
  private async performLogin(): Promise<string> {
    const { email, password } = this.config;
    if (!email || !password) {
      throw new AuthenticationError("Email and password are required for login");
    }

    console.error("Logging in to Skylight...");
    const result = await login(email, password);
    this.applyAuthResult(result);
    console.error(`Logged in as ${result.email}${result.subscriptionStatus ? ` (${result.subscriptionStatus})` : ""}`);
    return result.token;
  }

  /**
   * Adopt the tokens from a login or refresh, updating in-memory state and the
   * persisted state file so a later process start can refresh instead of login.
   */
  private applyAuthResult(result: AuthResult): void {
    this.resolvedToken = result.token;
    if (result.refreshToken) {
      this.refreshToken = result.refreshToken;
    }
    this.accessExpiresAt =
      typeof result.expiresIn === "number" ? Date.now() + result.expiresIn * 1000 : null;
    if (result.subscriptionStatus) {
      this.subscriptionStatus = result.subscriptionStatus as SubscriptionStatus;
    }
    this.persistState();
  }

  /** True when we know the access token has expired (within a safety buffer). */
  private isAccessExpired(): boolean {
    // Unknown expiry → assume valid and rely on the 401 → refresh path.
    if (this.accessExpiresAt === null) {
      return false;
    }
    return Date.now() >= this.accessExpiresAt - TOKEN_EXPIRY_BUFFER_MS;
  }

  private clearTokens(): void {
    this.resolvedToken = null;
    this.refreshToken = null;
    this.accessExpiresAt = null;
  }

  /** Load persisted tokens once, ignoring state from a different account. */
  private loadPersistedState(): void {
    if (this.stateLoaded) {
      return;
    }
    this.stateLoaded = true;

    const stored = readStateFile(this.statePath);
    if (!stored) {
      return;
    }
    if (stored.email && this.config.email && stored.email !== this.config.email) {
      console.error("[client] Persisted tokens belong to a different account; ignoring.");
      return;
    }

    this.resolvedToken = stored.accessToken;
    this.refreshToken = stored.refreshToken;
    this.accessExpiresAt = stored.accessExpiresAt ?? null;
    console.error("[client] Loaded persisted Skylight tokens.");
  }

  /** Persist current tokens; best-effort, never throws into the request path. */
  private persistState(): void {
    if (!this.resolvedToken || !this.refreshToken) {
      return;
    }
    try {
      writeStateFileAtomic(this.statePath, {
        schemaVersion: 1,
        email: this.config.email,
        accessToken: this.resolvedToken,
        refreshToken: this.refreshToken,
        accessExpiresAt: this.accessExpiresAt ?? undefined,
        rotatedAt: Date.now(),
      });
    } catch (err) {
      console.error(`[token-store] Failed to persist tokens: ${(err as Error).message}`);
    }
  }

  /**
   * Build the Authorization header
   * Email/password auth now resolves to an OAuth bearer token.
   * Manual token auth still respects the configured auth type.
   */
  private async getAuthHeader(): Promise<string> {
    const { token } = await this.getCredentials();

    if (usesEmailAuth(this.config)) {
      return `Bearer ${token}`;
    }

    // For manual token config, respect the authType setting
    if (this.config.authType === "basic") {
      return `Basic ${token}`;
    }
    return `Bearer ${token}`;
  }

  /**
   * Build URL with query parameters
   */
  private buildUrl(endpoint: string, params?: Record<string, string | boolean | number | undefined>): string {
    const url = new URL(endpoint, SKYLIGHT_BASE_URL);

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value !== undefined) {
          url.searchParams.set(key, String(value));
        }
      }
    }

    return url.toString();
  }

  /**
   * Handle API response errors
   */
  private async handleResponseError(response: Response, url: string): Promise<never> {
    const status = response.status;

    if (status === 401) {
      // Clear cached credentials on auth failure
      this.resolvedToken = null;
      console.error(`[client] 401 Unauthorized for ${url}`);

      if (usesEmailAuth(this.config)) {
        throw new AuthenticationError(
          "API request returned 401. This may indicate your frame ID is incorrect or doesn't belong to this account. " +
            "Please verify your SKYLIGHT_FRAME_ID environment variable."
        );
      }
      throw new AuthenticationError();
    }

    if (status === 404) {
      throw new NotFoundError("Resource");
    }

    if (status === 429) {
      const retryAfter = response.headers.get("Retry-After");
      throw new RateLimitError(retryAfter ? parseInt(retryAfter, 10) : undefined);
    }

    // Try to get error details from response
    let errorMessage = `HTTP ${status}`;
    try {
      const errorBody = await response.text();
      if (errorBody) {
        errorMessage += `: ${errorBody.slice(0, 200)}`;
      }
    } catch {
      // Ignore parse errors
    }

    throw new SkylightError(errorMessage, "HTTP_ERROR", status, status >= 500);
  }

  /**
   * Make an authenticated request to the Skylight API
   */
  async request<T>(endpoint: string, options: RequestOptions = {}, isRetry = false): Promise<T> {
    const { method = "GET", params, body } = options;

    // Replace {frameId} placeholder with actual frame ID
    const resolvedEndpoint = endpoint.replace("{frameId}", this.config.frameId);
    const url = this.buildUrl(resolvedEndpoint, params);

    console.error(`[client] ${method} ${url}`);

    const headers: Record<string, string> = {
      Authorization: await this.getAuthHeader(),
      Accept: "application/json",
      "User-Agent": "SkylightMobile (web)",
      "Skylight-Api-Version": SKYLIGHT_API_VERSION,
    };

    if (body) {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    console.error(`[client] Response: ${response.status}`);

    if (!response.ok) {
      // For email/password auth, refresh (or re-login) once on 401, then retry.
      if (response.status === 401 && usesEmailAuth(this.config) && !isRetry) {
        console.error("[client] Got 401, refreshing credentials...");
        await this.resolveEmailToken(true);
        return this.request<T>(endpoint, options, true);
      }
      await this.handleResponseError(response, url);
    }

    // Handle 304 Not Modified
    if (response.status === 304) {
      return {} as T;
    }

    return response.json() as Promise<T>;
  }

  /**
   * GET request helper
   */
  async get<T>(endpoint: string, params?: Record<string, string | boolean | number | undefined>): Promise<T> {
    return this.request<T>(endpoint, { method: "GET", params });
  }

  /**
   * POST request helper
   */
  async post<T>(endpoint: string, body: unknown): Promise<T> {
    return this.request<T>(endpoint, { method: "POST", body });
  }

  /**
   * Get the frame ID from config
   */
  get frameId(): string {
    return this.config.frameId;
  }

  /**
   * Get the timezone from config
   */
  get timezone(): string {
    return this.config.timezone;
  }

  /**
   * Check if user has Plus subscription
   */
  hasPlus(): boolean {
    return this.subscriptionStatus === "plus";
  }

  /**
   * Get the subscription status
   */
  getSubscriptionStatus(): SubscriptionStatus {
    return this.subscriptionStatus;
  }

  /**
   * Initialize the client (triggers login if using email/password auth)
   */
  async initialize(): Promise<void> {
    await this.getCredentials();
  }
}

// Singleton instance
let clientInstance: SkylightClient | null = null;

export function getClient(): SkylightClient {
  if (!clientInstance) {
    clientInstance = new SkylightClient();
  }
  return clientInstance;
}

/**
 * Initialize the client singleton and return it
 * This triggers login if using email/password auth
 */
export async function initializeClient(): Promise<SkylightClient> {
  const client = getClient();
  await client.initialize();
  return client;
}
