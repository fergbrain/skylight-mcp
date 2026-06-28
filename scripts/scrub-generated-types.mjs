#!/usr/bin/env node
/**
 * Scrub PII from the generated OpenAPI types.
 *
 * The Skylight OpenAPI spec is produced from real HAR captures, so
 * `openapi-typescript` bakes captured values into the output as:
 *   1. JSDoc `@example` comment blocks (names, emails, calendar URLs, tokens), and
 *   2. string-literal union types synthesized from sampled values
 *      (e.g. `label?: "Mom" | "Jakob" | "Madeleine"` — real family names as TYPES).
 *
 * `generated-types.ts` is reference-only (not imported by the code), so we don't
 * need any of those concrete values. This strips them generically — no hardcoded
 * names — leaving only the structural types. Run automatically after
 * `openapi-typescript` in the `generate:types` npm script.
 */
import { readFileSync, writeFileSync } from "node:fs";

const file = process.argv[2] ?? "src/api/generated-types.ts";
let src = readFileSync(file, "utf8");

// 1) Remove all block comments (JSDoc, incl. multi-line @example blocks).
src = src.replace(/[ \t]*\/\*[\s\S]*?\*\/\n?/g, "");

// 2) Collapse value-position string-literal types/unions to `string`.
//    Matches lines like `  key?: "a" | "b" | "c";` (value is quoted string(s)).
//    Does NOT touch object keys (`"application/json": {`) or `operations["id"]` refs.
src = src
  .split("\n")
  .map((line) => {
    const m = line.match(/^(\s*)([A-Za-z0-9_]+\??):\s*"[^"]*"(\s*\|\s*"[^"]*")*;\s*$/);
    return m ? `${m[1]}${m[2]}: string;` : line;
  })
  .join("\n");

writeFileSync(file, src);
console.log(`[scrub] cleaned ${file}`);
