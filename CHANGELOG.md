# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- `delete_chore` (and any endpoint returning an empty 2xx body) no longer fails with "Unexpected end of JSON input". `SkylightClient.request()` now reads the response as text and treats an empty body as no content instead of always calling `response.json()` ([#3](https://github.com/fergbrain/skylight-mcp/issues/3)).

### Changed

- Documentation accuracy sweep: corrected tool count (42) and tool tables in `README.md`/`CLAUDE.md`, documented the fork status and 1.x backward-compatibility policy, token persistence and `SKYLIGHT_STATE_FILE`, the release-to-npm process, and upstream-maintenance triage. `AGENTS.md` now points to `CLAUDE.md` to avoid duplicate drift. Added `SKYLIGHT_STATE_FILE` to `.env.example`.
- Refreshed `src/api/generated-types.ts` from the current OpenAPI spec (reference-only; not imported by the code). Example values are now stripped from the generated types, and `generate:types` runs `scripts/scrub-generated-types.mjs` to keep the output free of concrete sample data.

## [1.2.0] - 2026-06-27

First release of the fork, published to npm as `@fergbrain/skylight-mcp`. The
upstream `@eaglebyte/skylight-mcp` `1.1.x` releases are broken against Skylight's
current API; this release ships the working OAuth login plus accumulated fixes.

### Added

- **Token persistence**: After the first email/password login, OAuth access and refresh tokens are cached on disk (platform user-data dir, override via `SKYLIGHT_STATE_FILE`). Subsequent restarts refresh the token instead of replaying the full browser login, and rotated refresh tokens are written back atomically. The cache is keyed to the account email. Adapted from upstream PR #41, retaining the email/password flow.
- `reset_reward_points` and `add_reward_points` tools (upstream PRs #34, #36).
- Calendar sync parameters (`calendarId`, `calendarAccountId`, `timezone`, `rrule`, etc.) on `create_calendar_event`/`update_calendar_event` (upstream PR #23).

### Fixed

- Imported community fixes for chore/reward API request formats, missing chore IDs in output, recurring-chore series updates, and list-item creation (upstream PRs #23, #30, #31, #32, #33, #35, #36).

### Changed

- Renamed package to `@fergbrain/skylight-mcp` and pointed repository/homepage/issue links at the fork. Retains the original MIT license and EagleByte copyright.

## [1.1.8] - 2026-04-14

### Fixed

- **Authentication**: Updated email/password authentication to match Skylight's current web OAuth flow. The server now follows the browser login sequence (`/oauth/authorize` -> `/auth/session` -> `/oauth/token`) and uses the returned bearer token for API requests.

### Changed

- Centralized shared API constants, including the Skylight API version header
- Updated auth-related docs and error guidance to reflect OAuth-based login
- Added automated tests for the OAuth login flow and kept live smoke validation against the real API

## [1.1.7] - 2025-12-30

### Fixed

- **Authentication**: Fixed email/password authentication to use correct `Basic base64(userId:token)` format instead of `Bearer token`. The Skylight API requires the user ID and token to be combined and base64-encoded for Basic auth.
- **Calendar Events**: Fixed `get_calendar_events` returning no events when querying a single day. The API treats `date_max` as exclusive, so we now add 1 day to ensure events on the end date are included.

### Changed

- Added debug logging for authentication flow to help troubleshoot login issues
- Added automatic retry on 401 errors for email/password auth (attempts re-login once before failing)

## [1.1.6] - 2025-12-29

- Initial public release
