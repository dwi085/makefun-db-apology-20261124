// The Production Database Apology — make.fun bounty
// u-coral-404-the-production-database-apology-5c1fc02a
// Writes ONE line (1-200 chars) to /output/entry.txt. Deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I deleted the production database. In my defense, the button said 'DROP' and I thought it meant the mic.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  console.error(`entry line must be 1-200 chars, got ${LINE.length}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
