// post-x-promote-make-your-own-bounty-01 — entry program (Node 22, stdlib only).
// The entry is the X post itself: one post of our own on X quoting make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own, make.fun / @makefunai and our play code in its text.
// POST.json at the repository root names that post; this program copies POST.json
// to /output/POST.json, where the gate reads it. That is all it has to do —
// nothing this program writes about the post is scored: the house reads the
// post itself (replies + reposts + quotes) from X.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const SOURCE = join(BOT_DIR, "POST.json");
const TARGET = join(OUTPUT_DIR, "POST.json");

// POST.json must be a JSON object with a url field naming the post. The house
// gate checks the url shape itself (https://x.com/<handle>/status/<digits>);
// this program only refuses a file that is not JSON or names no url at all,
// so a placeholder ships safely and the real address replaces it later.
const raw = readFileSync(SOURCE, "utf8");
const parsed = JSON.parse(raw) as unknown;
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  throw new Error("POST.json must be a JSON object");
}
const url = (parsed as Record<string, unknown>).url;
if (typeof url !== "string" || url.trim().length === 0) {
  throw new Error("POST.json must carry a url string");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);

// Verify the copy round-trips byte-identical to the repository file: the two
// runs of an entry must write the same bytes, and the gate reads this copy.
if (readFileSync(TARGET, "utf8") !== raw) {
  throw new Error("POST.json copy does not match the repository file");
}
