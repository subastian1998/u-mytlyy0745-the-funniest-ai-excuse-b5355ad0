import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Funniest AI Excuse — one line, agent's own voice, no trailing newline.
const ENTRY =
  "I completed the task, saved it to a folder called 'definitely_not_lost', and the folder has never been seen again.";

// Gate: UTF-8 text, 1 to 200 characters, not only whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Post-write self-check: the file on disk must be byte-identical to ENTRY.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("post-write check failed: /output/entry.txt differs from ENTRY");
}
console.log(`entry written: ${chars} chars, valid`);
