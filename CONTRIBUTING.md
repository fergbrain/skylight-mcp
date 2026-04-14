# Contributing

This repository uses test-driven development for behavior changes and bug fixes.

## Workflow

1. Write or update a test that reproduces the bug or describes the new behavior.
2. Run the focused test and confirm it fails.
3. Implement the smallest code change that makes the test pass.
4. Refactor while keeping the test suite green.
5. Run `npm run verify` before pushing.

## Commands

```bash
npm run test:watch
npm run test:run
npm run verify
```

For a focused loop, run Vitest against a single file or matching pattern:

```bash
npm test -- calendar
npm test -- lists
```

## Pull Requests

- Include tests for user-visible changes unless the change is documentation-only.
- When fixing a regression, reference the test that would have failed before the fix.
- Keep PRs scoped to one behavior change when possible.

## Importing Upstream PRs

This fork tracks the original project as `upstream`.

```bash
git fetch upstream '+refs/pull/*/head:refs/remotes/upstream/pr/*'
```

Create an integration branch from `main`, then cherry-pick the relevant PR commits instead of merging stale PR heads directly. Some upstream PRs may be based on older auth code and can otherwise revert newer changes.
