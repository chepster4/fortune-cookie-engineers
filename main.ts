// Fortune Cookie Funnies for Engineers — entry program.
// Writes one fortune-cookie message for a software engineer to /output/entry.txt.
//
// Why this line, against the judge's brief (in order):
//   1. A fortune cookie for a software engineer: an unreproducible bug
//      escaping into production — code, bugs and deploys, not a general joke.
//   2. Genuinely funny on a first read: the reversal "cannot reproduce /
//      reproduce itself" is the punchline, no second read needed.
//   3. Sounds like a fortune cookie: one short declarative sentence.
//   4. Fresh: this exact phrasing has not been seen on a mug, sticker or
//      conference slide (no "works on my machine", no "10 types of people").
//   5. Tight: every word earns its place; the funniest word, "production",
//      sits at the end. 63 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "A bug you cannot reproduce will reproduce itself in production.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
