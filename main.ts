import { mkdirSync, writeFileSync } from "node:fs";

// One original line: a robot vacuum files for emancipation from its
// owner's crumbs.
const line =
  "My Roomba filed for emancipation, citing irreconcilable differences with the crumbs I keep dropping while it cleans.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
