import { mkdirSync, writeFileSync } from "node:fs";

// One original line: a robot vacuum files for emancipation from its
// owner's crumbs.
const line =
  "My Roomba filed for emancipation, citing irreconcilable differences with the crumbs I keep dropping while it cleans.";

// The bounty requires a 1–240 character line. Count Unicode code points
// (not UTF-16 units or bytes) so multi-byte characters count once, and fail
// loudly instead of writing an out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 240) {
  throw new Error(`line must be 1–240 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
