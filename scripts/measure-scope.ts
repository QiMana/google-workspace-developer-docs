import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import { DEFAULT_MEASUREMENT_PATH } from "./lib/config";
import { measureScope } from "./lib/crawl";

function readFlag(name: string): string | undefined {
  const index = Bun.argv.indexOf(name);
  if (index === -1) return undefined;
  return Bun.argv[index + 1];
}

const outPath = resolve(process.cwd(), readFlag("--out") ?? DEFAULT_MEASUREMENT_PATH);
const concurrency = Number(readFlag("--concurrency") ?? "") || undefined;

const measurement = await measureScope({
  concurrency,
  log(message) {
    console.log(message);
  },
});

await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, `${JSON.stringify(measurement, null, 2)}\n`, "utf8");

console.log(`wrote scope snapshot to ${outPath}`);
console.log(JSON.stringify({
  totalHtmlPages: measurement.totalHtmlPages,
  countsByRoot: measurement.countsByRoot,
  brokenCandidates: measurement.brokenCandidates,
}, null, 2));
