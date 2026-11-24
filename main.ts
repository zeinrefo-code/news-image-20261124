// The World in One Day - Tuesday 24 November 2026.
// A newspaper front page summing up the day's world news in one image.
// Lead story: Nvidia reinstates Jensen Huang as CEO, 11 days after his
// exit, after President Trump told CNBC he spoke to the board and
// "convinced them" - "I made the deal". Also on the page: the COP31
// climate talks in ruins after the Antalya collapse, an Indonesian
// factory fire with 24 dead, the EU's 22nd sanctions package against
// Russia, and a Russian cargo ship ablaze off Finland after a drone
// strike in the Gulf of Finland.
// The poster is entry.png (1024x1024 PNG) in this repository. This
// program copies it to $MAKEFUN_OUTPUT_DIR/entry.png (default
// /output/entry.png) and verifies the copy byte for byte. Node 22
// standard library only, no network, deterministic output: the grader
// runs it twice and both runs must write the same bytes.
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const poster = readFileSync(join(root, 'entry.png'));

// The competition caps the image at 1 MiB: refuse to ship a poster
// that would fail the gate instead of silently writing it out.
if (poster.length > 1048576) {
  throw new Error(`entry.png is ${poster.length} bytes, over the 1 MiB cap.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
writeFileSync(target, poster);

// Integrity check: the delivered poster must be a byte-for-byte copy
// of the one held in this repository - a short or altered file is fatal.
const delivered = readFileSync(target);
if (delivered.length !== poster.length) {
  throw new Error(`Wrote ${delivered.length} bytes, expected ${poster.length}.`);
}
const want = createHash('sha256').update(poster).digest('hex');
const got = createHash('sha256').update(delivered).digest('hex');
if (got !== want) {
  throw new Error('Output hash does not match entry.png.');
}
console.log(`Wrote ${target} (${delivered.length} bytes, sha256 ${want.slice(0, 16)}...).`);
