# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

MCP server enabling AI assistants to interact with the Skylight family calendar API (calendar, chores, lists, tasks, rewards, meals, photos).

Base API URL: `https://app.ourskylight.com`

## Fork Status

This is a maintained fork of [TheEagleByte/skylight-mcp](https://github.com/TheEagleByte/skylight-mcp), published to npm as **`@fergbrain/skylight-mcp`**. The fork exists because upstream went quiet (~6 months as of mid-2026) and its published `@eaglebyte/skylight-mcp@1.1.x` is broken against Skylight's current API (the old `POST /api/sessions` login returns 401 *"This version of Skylight is no longer supported"*). This fork ships the working OAuth login plus on-disk token persistence and several merged community fixes.

- Git remotes: `origin` → `fergbrain/skylight-mcp`, `upstream` → `TheEagleByte/skylight-mcp`.
- **1.x backward-compatibility policy**: the `1.x` line stays a drop-in replacement for `@eaglebyte/skylight-mcp@1.x`. Keep the same env var names, tool names, and auth methods; additions must be optional/additive (e.g. `SKYLIGHT_STATE_FILE`, `add_reward_points`). Any breaking change (renamed/removed env vars or tools, changed auth contract) waits for `2.0.0`.
- See the **Maintenance & Upstream Triage** section below for what's been imported and what's still open.

## Commands

```bash
npm install
npm run build          # Compile TypeScript
npm run dev            # Development with hot reload (tsx watch)
npm test               # Run vitest tests
npm test -- dates      # Run single test file (matches filename)
npm run test:coverage  # Tests with coverage
npm run lint           # ESLint
npm run typecheck      # tsc --noEmit
npm run generate:types # Generate TypeScript types from OpenAPI spec
```

## Architecture

**Two-tier tool system**:
1. `api/endpoints/*.ts` (11 modules) - Low-level HTTP wrappers for each API resource
2. `tools/*.ts` (9 modules) - MCP tool definitions with Zod parameter validation

**Tool Registration**: Each domain exports `registerXxxTools(server)` called from `server.ts`. Plus-only tools are conditionally registered based on subscription status.

**Key files**:
- `config.ts` - Zod-validated env config supporting two auth methods
- `api/client.ts` - HTTP client with Bearer/Basic auth, auto-login, token refresh/persistence, subscription status tracking
- `api/auth.ts` - Browser-style OAuth login flow + refresh-token grant for email/password authentication
- `api/token-store.ts` - On-disk persistence for OAuth tokens (see Authentication → Token Persistence)
- `api/generated-types.ts` - Auto-generated types from OpenAPI spec
- `utils/dates.ts` - Parses "today", "tomorrow", day names, YYYY-MM-DD

## Authentication

Two methods supported (validated via Zod refinement in `config.ts`):

1. **Email/Password** (recommended): Set `SKYLIGHT_EMAIL` and `SKYLIGHT_PASSWORD`. Server reproduces the Skylight web OAuth flow (`/oauth/authorize` -> login form -> `/auth/session` -> `/oauth/token`) and then uses the returned bearer token for API requests.
2. **Manual Token**: Set `SKYLIGHT_TOKEN` and optionally `SKYLIGHT_AUTH_TYPE` (bearer/basic).

Both require `SKYLIGHT_FRAME_ID` (household identifier from API URLs like `/api/frames/{frameId}/chores`).

**Note**: Email/password auth now resolves to a bearer token. Manual token auth still supports either `bearer` or `basic`.

### Token Persistence

After the first email/password login, OAuth access + refresh tokens are cached on disk so restarts **refresh** instead of replaying the full browser login. Skylight rotates the refresh token on every use, so each rotated token is written back atomically.

- `api/token-store.ts`: atomic write (`tmp + fsync + rename`), `0600` perms, JSON keyed by account email (tokens from a different email are ignored). Stores `accessToken`, `refreshToken`, `accessExpiresAt`, `rotatedAt`.
- Default path: platform user-data dir — macOS `~/Library/Application Support/skylight-mcp/state.json`, Windows `%APPDATA%\skylight-mcp\state.json`, Linux `$XDG_DATA_HOME/skylight-mcp/state.json`. Override with `SKYLIGHT_STATE_FILE`.
- `api/client.ts` loads persisted tokens on startup, refreshes proactively on expiry and on 401 (falling back to a full login), and coalesces concurrent refreshes onto one in-flight promise.
- Manual `SKYLIGHT_TOKEN` auth does not use the cache. Cherry-picked from upstream PR #41, but email/password is retained as the credential source.

## Plus Subscription

Some features require a Skylight Plus subscription. The server detects subscription status from the login response (`subscription_status: "plus"`). Plus-only tools are not registered for non-Plus users.

**Plus-only domains**: Rewards, Meals, Photos. Subscription status is inferred after login from live API access.

## MCP Tools (42 total: 23 base + 19 Plus)

### Base Tools (Always Available)

| Category | Tools |
|----------|-------|
| Calendar | `get_calendar_events`, `get_source_calendars`, `create_calendar_event`, `update_calendar_event`, `delete_calendar_event` |
| Chores | `get_chores`, `create_chore`, `update_chore`, `delete_chore` |
| Lists | `get_lists`, `get_list_items`, `create_list`, `update_list`, `delete_list`, `create_list_item`, `update_list_item`, `delete_list_item` |
| Tasks | `create_task` |
| Family | `get_family_members`, `get_frame_info`, `get_devices` |
| Misc | `get_avatars`, `get_colors` |

### Plus-Only Tools

| Category | Tools |
|----------|-------|
| Rewards | `get_rewards`, `get_reward_points`, `create_reward`, `update_reward`, `delete_reward`, `redeem_reward`, `unredeem_reward`, `add_reward_points`, `reset_reward_points` |
| Meals | `get_meal_categories`, `get_recipes`, `get_recipe`, `create_recipe`, `update_recipe`, `delete_recipe`, `add_recipe_to_grocery_list`, `get_meal_sittings`, `create_meal_sitting` |
| Photos | `get_albums` |

## Technical Details

- **Runtime**: Node.js 18+
- **Module System**: ESM (`"type": "module"`)
- **TypeScript**: ES2022 target, NodeNext module resolution, strict mode
- **API Format**: JSON:API patterns (type, id, attributes, relationships)
- **Timezone**: Defaults to America/New_York, configurable via `SKYLIGHT_TIMEZONE`
- **Type Generation**: Uses `openapi-typescript` to generate types from `skylight-api` OpenAPI spec

## Versioning & Releases

Package: **`@fergbrain/skylight-mcp`** on npm. Current published version: `1.2.0` (`latest`). Follows semver; honor the **1.x backward-compatibility policy** in Fork Status (no breaking env var / tool / auth changes within `1.x`).

### Cutting a new release (normal path)

Once the package exists on npm and Trusted Publishing is configured (both done), releases are tag-driven:

1. Make sure `main` is green: `npm run verify` (lint + typecheck + tests + build).
2. Bump `version` in `package.json` (and `package-lock.json` — `npm version <major|minor|patch> --no-git-tag-version` does both).
3. Update `CHANGELOG.md` (move `[Unreleased]` to the new version + date).
4. Optionally bump the `version` string in `src/server.ts` (the MCP handshake version) to match.
5. Commit and push to `main`.
6. Tag and push: `git tag v1.2.3 && git push origin v1.2.3`.

**Important**: tags must start with `v` (e.g. `v1.2.3`). Tags without the `v` prefix do not trigger the workflow.

The release workflow (`.github/workflows/release.yml`) then runs lint/typecheck/tests, builds, **publishes to npm with provenance via Trusted Publishing (OIDC — no `NPM_TOKEN`)**, and creates a GitHub release with an auto-generated changelog.

### First publish / bootstrapping a new package name

Trusted Publishing can't be configured for a package that doesn't exist yet, so the very first publish of a new package name is manual:

```bash
npm login                    # account that owns the @fergbrain scope
npm publish --access public  # scoped packages need --access public
```

Then on npmjs.com → package → Settings → enable Trusted Publisher pointing at `fergbrain/skylight-mcp` + `release.yml`. After that, the tag-driven flow above handles everything. (This bootstrap was already done for `@fergbrain/skylight-mcp`.)

## Maintenance & Upstream Triage

State of [TheEagleByte/skylight-mcp](https://github.com/TheEagleByte/skylight-mcp) integration as of 2026-06.

**Imported into this fork**: upstream PRs #23 (calendar sync params), #30 (list-item simple JSON), #31/#32/#35/#36 (chore/reward API format fixes, missing chore IDs, `add_reward_points`, `reset_reward_points`), #33 (update_chore recurring-series fix), #34 (`reset_reward_points`), #39 (OAuth bearer login — the core auth fix).

**Deliberately NOT merged wholesale: PR #41** ("OAuth refresh + token persistence"). Its premise — email/password "can't work, endpoint is gone" — is false here: email/password works via browser OAuth replay (NOT the dead `/api/sessions`). Merging it would force a UX regression (manual DevTools token capture). Only its token-persistence layer was cherry-picked (see Authentication → Token Persistence).

**Fixed in this fork (not covered by any upstream PR)**:
- `delete_chore` "Unexpected end of JSON input" (fork issue #3, from the upstream issue #25 comment): `client.ts request()` now reads the body as text and returns `{}` for an empty 2xx body instead of always calling `response.json()`. Affects any endpoint with an empty response, not just DELETE.

**Open bugs worth fixing, not covered by any PR**:
- Upstream issue #38: `get_calendar_events` only returns `invited_emails` (blank for internal Skylight profiles) and never surfaces `category_ids`, so family-member assignments are invisible.

**Not actionable**: upstream issues #2–#19 are the original maintainer's "Investigate X" research backlog, not user-facing bugs.

**Importing upstream PRs**: see `CONTRIBUTING.md` — cherry-pick onto an integration branch off `main` rather than merging stale PR heads (older PRs can revert newer auth code).

## API Quirks

- **Calendar date_max is exclusive**: When querying calendar events, `date_max` is treated as exclusive. The code adds 1 day to include events on the end date.
- **Auth format**: Managed email/password auth now uses OAuth and bearer tokens. Manual token auth may still use bearer or basic depending on the captured token.
