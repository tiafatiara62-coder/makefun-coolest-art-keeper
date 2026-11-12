// coolest-art-01 entry (Node 22, standard library only): the art is the
// entry.png beside this file — "The Keeper Who Relights the Stars", an
// ukiyo-e print of a lone keeper in a small boat reaching up with a long
// brass pole to relight a fading star above a dark indigo sea — and the
// program copies it to /output/entry.png. The gate takes a whole PNG or
// JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
