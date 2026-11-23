import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One emoji, nothing else: U+1F60A SMILING FACE WITH SMILING EYES —
// the warmest classic smile, the one most likely to make a stranger smile.
const EMOJI = "😊";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI);
