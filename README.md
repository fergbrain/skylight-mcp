# Skylight MCP Server

An MCP (Model Context Protocol) server for the Skylight Calendar API. Enables AI assistants like Claude to interact with your Skylight family calendar, chores, lists, and more.

> **Fork notice:** This is a maintained fork of [TheEagleByte/skylight-mcp](https://github.com/TheEagleByte/skylight-mcp), published to npm as [`@fergbrain/skylight-mcp`](https://www.npmjs.com/package/@fergbrain/skylight-mcp). It carries the updated OAuth login (the upstream `1.1.x` releases are broken against Skylight's current API), several merged community fixes, and on-disk token persistence.

## Features

- **Calendar**: Query calendar events ("What's on my calendar today?")
- **Chores**: View and create chores ("Add emptying dishwasher to chores")
- **Lists**: View grocery and to-do lists ("What's on the grocery list?")
- **Tasks**: Add items to the task box ("Add XYZ to my task list")
- **Family**: View family members and devices
- **Rewards**: Check reward points and available rewards

## Quick Start

### Installation

#### Option 1: npm package (Recommended)

**mcp.json:**
```json
{
  "mcpServers": {
    "skylight": {
      "command": "npx",
      "args": ["@fergbrain/skylight-mcp"],
      "env": {
        "SKYLIGHT_EMAIL": "your_email@example.com",
        "SKYLIGHT_PASSWORD": "your_password",
        "SKYLIGHT_FRAME_ID": "your_frame_id"
      }
    }
  }
}
```

**Claude Code:**
```bash
claude mcp add skylight npx @fergbrain/skylight-mcp \
  -e SKYLIGHT_EMAIL=your_email@example.com \
  -e SKYLIGHT_PASSWORD=your_password \
  -e SKYLIGHT_FRAME_ID=your_frame_id
```

#### Option 2: From source

```bash
git clone https://github.com/fergbrain/skylight-mcp.git
cd skylight-mcp && npm install && npm run build
```

Then use in mcp.json:
```json
{
  "mcpServers": {
    "skylight": {
      "command": "node",
      "args": ["/path/to/skylight-mcp/dist/index.js"],
      "env": {
        "SKYLIGHT_EMAIL": "your_email@example.com",
        "SKYLIGHT_PASSWORD": "your_password",
        "SKYLIGHT_FRAME_ID": "your_frame_id"
      }
    }
  }
}
```

### Instructions for AI

Copy this into your AI's custom instructions or system prompt:

> You have access to the Skylight MCP server. Skylight is a smart family calendar display that shows calendars, chores, grocery lists, meals, and rewards. Use the Skylight tools to help manage family schedules and organization.
>
> Tips:
> - Call `get_family_members` before assigning chores to get member names
> - Grocery items default to the main grocery list if no list specified
> - Dates accept "today", "tomorrow", day names, or YYYY-MM-DD format
> - Some tools (rewards, meals, photos) require Skylight Plus subscription

## Prerequisites

- Node.js 18+
- A Skylight account (the base calendar/chores/lists/tasks tools work on any account; a **Skylight Plus** subscription unlocks the rewards, meals, and photos tools)
- Your Skylight Frame ID (see [Finding your Frame ID](#finding-your-frame-id))

## Authentication

The MCP server supports two authentication methods:

### Option 1: Email/Password (Recommended)

Use your Skylight account credentials. The server automatically follows Skylight's web OAuth login flow and manages the returned bearer token for you.

```env
SKYLIGHT_EMAIL=your_email@example.com
SKYLIGHT_PASSWORD=your_password
SKYLIGHT_FRAME_ID=your_frame_id
```

### Option 2: Manual Token (Legacy)

Capture a bearer or basic token from Skylight traffic using a proxy tool.

```env
SKYLIGHT_TOKEN=your_token_here
SKYLIGHT_FRAME_ID=your_frame_id
SKYLIGHT_AUTH_TYPE=bearer
```

### Finding your Frame ID

You still need to find your frame ID (the household identifier):

1. Use a proxy tool ([Proxyman](https://proxyman.io/), [Charles](https://www.charlesproxy.com/), or [mitmproxy](https://mitmproxy.org/))
2. Capture any API request from the Skylight app
3. Look at the URL path: `/api/frames/{frameId}/...`
4. Example: `/api/frames/abc123/chores` → frame ID is `abc123`

## Configuration

| Variable | Required | Description |
|----------|----------|-------------|
| `SKYLIGHT_EMAIL` | Option 1 | Your Skylight account email |
| `SKYLIGHT_PASSWORD` | Option 1 | Your Skylight account password |
| `SKYLIGHT_TOKEN` | Option 2 | Your captured API token (if not using email/password) |
| `SKYLIGHT_AUTH_TYPE` | No | `bearer` (default) or `basic` (for manual token) |
| `SKYLIGHT_FRAME_ID` | Yes | Your household frame ID |
| `SKYLIGHT_TIMEZONE` | No | Default timezone (default: `America/New_York`) |
| `SKYLIGHT_STATE_FILE` | No | Override path for the persisted token cache (see below) |

### Auth Notes

- Email/password auth no longer uses the legacy `/api/sessions` token flow.
- The server now reproduces the Skylight web login flow and exchanges the resulting authorization code for a bearer token.
- Manual token auth still works if you prefer to provide a captured token directly.

### Token Persistence

After the first email/password login, the server caches the OAuth access and
refresh tokens on disk so subsequent restarts **refresh** instead of replaying
the full browser login. Skylight rotates refresh tokens on every use, so each
rotated token is written back atomically.

- Default location: `~/Library/Application Support/skylight-mcp/state.json` (macOS),
  `%APPDATA%\skylight-mcp\state.json` (Windows),
  `$XDG_DATA_HOME/skylight-mcp/state.json` (Linux, default `~/.local/share/...`).
- Override the path with `SKYLIGHT_STATE_FILE`.
- The cache is keyed to your account email; tokens from a different account are
  ignored. Delete the file to force a fresh login. Manual `SKYLIGHT_TOKEN` auth
  does not use the cache.

### Example .env file:

```env
# Email/password auth (recommended)
SKYLIGHT_EMAIL=your_email@example.com
SKYLIGHT_PASSWORD=your_password
SKYLIGHT_FRAME_ID=your_frame_id
SKYLIGHT_TIMEZONE=America/New_York
```

## Available Tools

42 tools total — 23 base (always available) and 19 that require Skylight Plus.

### Base Tools

**Calendar**

| Tool | Description |
|------|-------------|
| `get_calendar_events` | Get calendar events for a date range |
| `get_source_calendars` | List connected calendar sources (Google, iCloud, etc.) |
| `create_calendar_event` | Create an event (supports calendar sync parameters) |
| `update_calendar_event` | Update an existing event |
| `delete_calendar_event` | Delete an event |

**Chores**

| Tool | Description |
|------|-------------|
| `get_chores` | Get chores with optional filters (date, assignee, status) |
| `create_chore` | Create a new chore with optional recurrence |
| `update_chore` | Update a chore (optionally the whole recurring series) |
| `delete_chore` | Delete a chore (optionally the recurring series) |

**Lists**

| Tool | Description |
|------|-------------|
| `get_lists` | Get all available lists |
| `get_list_items` | Get items from a specific list |
| `create_list` | Create a new list |
| `update_list` | Update a list |
| `delete_list` | Delete a list |
| `create_list_item` | Add an item to a list |
| `update_list_item` | Update a list item |
| `delete_list_item` | Delete a list item |

**Tasks**

| Tool | Description |
|------|-------------|
| `create_task` | Add a task to the task box |

**Family**

| Tool | Description |
|------|-------------|
| `get_family_members` | Get family member profiles |
| `get_frame_info` | Get household/frame information |
| `get_devices` | List Skylight devices |

**Misc**

| Tool | Description |
|------|-------------|
| `get_avatars` | List available avatars |
| `get_colors` | List available colors |

### Plus-Only Tools

Require an active Skylight Plus subscription; not registered for non-Plus accounts.

**Rewards**

| Tool | Description |
|------|-------------|
| `get_rewards` | Get available rewards |
| `get_reward_points` | Get reward points balance |
| `create_reward` | Create a reward |
| `update_reward` | Update a reward |
| `delete_reward` | Delete a reward |
| `redeem_reward` | Redeem a reward for a family member |
| `unredeem_reward` | Reverse a reward redemption |
| `add_reward_points` | Add or subtract points for a family member |
| `reset_reward_points` | Reset a family member's point balance to zero |

**Meals**

| Tool | Description |
|------|-------------|
| `get_meal_categories` | List meal/recipe categories |
| `get_recipes` | List recipes |
| `get_recipe` | Get a single recipe |
| `create_recipe` | Create a recipe |
| `update_recipe` | Update a recipe |
| `delete_recipe` | Delete a recipe |
| `add_recipe_to_grocery_list` | Add a recipe's ingredients to a grocery list |
| `get_meal_sittings` | List planned meal sittings |
| `create_meal_sitting` | Plan a meal sitting |

**Photos**

| Tool | Description |
|------|-------------|
| `get_albums` | List photo albums |

## Example Queries

Once configured, you can ask Claude things like:

- "What's on my calendar today?"
- "What chores do I need to do this week?"
- "Add 'take out trash' to my chores for tomorrow"
- "What's on the grocery list?"
- "Add milk to my task list"
- "Who are the family members on Skylight?"
- "How many reward points does each person have?"

## Development

```bash
# Run in development mode (with hot reload)
npm run dev

# Run tests in watch mode for TDD
npm run test:watch

# Run the full test suite once
npm run test:run

# Type check
npm run typecheck

# Full local verification
npm run verify
```

## API Documentation

This MCP server is built on top of the reverse-engineered Skylight API. The API endpoints were documented using the [skylight-api](https://github.com/TheEagleByte/skylight-api) project, which converts browser network traffic (HAR files) into an OpenAPI specification.

**API Resources:**
- [Interactive API Docs (Swagger UI)](https://theeaglebyte.github.io/skylight-api/swagger.html)
- [API Reference (ReDoc)](https://theeaglebyte.github.io/skylight-api/redoc.html)
- [OpenAPI Specification](https://theeaglebyte.github.io/skylight-api/openapi/openapi.yaml)

If you discover new API endpoints or find issues with the current documentation, please contribute to the [skylight-api](https://github.com/TheEagleByte/skylight-api) repository.

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository** and create a feature branch
2. **Write or update a test first** for behavior changes and bug fixes
3. **Make your changes** with clear, descriptive commits
4. **Run verification** (`npm run verify`) before submitting
5. **Open a pull request** with a description of your changes

### Development Setup

```bash
git clone https://github.com/fergbrain/skylight-mcp.git
cd skylight-mcp
npm install
npm run dev  # Start with hot reload
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the TDD workflow and upstream PR import notes.

### Areas for Contribution

- Adding support for new Skylight API endpoints
- Improving error handling and edge cases
- Enhancing documentation
- Writing additional tests

## Issues & Support

- **Bug reports**: [Open an issue](https://github.com/fergbrain/skylight-mcp/issues/new) with steps to reproduce
- **Feature requests**: [Open an issue](https://github.com/fergbrain/skylight-mcp/issues/new) describing the use case
- **Questions**: [Start a discussion](https://github.com/fergbrain/skylight-mcp/discussions) or open an issue

Please include relevant details like your Node.js version, error messages, and configuration (with sensitive values redacted).

## License

MIT

## Disclaimer

This is an unofficial integration. The Skylight API is reverse-engineered and may change without notice. Use at your own risk.
