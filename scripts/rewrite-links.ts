import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { rewriteArchiveLinksOnDisk } from "./lib/archive-links";

type ManifestPage = {
  url: string;
  file: string;
};

type Manifest = {
  pageCount: number;
  pages: ManifestPage[];
};

function readFlag(name: string): string | undefined {
  const index = Bun.argv.indexOf(name);
  if (index === -1) return undefined;
  return Bun.argv[index + 1];
}

const manifestPath = resolve(process.cwd(), readFlag("--manifest") ?? "manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8")) as Manifest;

if (!Array.isArray(manifest.pages) || manifest.pages.length === 0) {
  throw new Error(`Manifest at ${manifestPath} does not include any pages.`);
}

const summary = await rewriteArchiveLinksOnDisk(process.cwd(), manifest.pages);

console.log(`rewrote internal archive links in ${summary.changedFiles} files`);
console.log(`left ${summary.unchangedFiles} files unchanged`);
console.log(`resolved ${summary.resolvedAliases} redirect aliases`);
console.log(`left ${summary.unresolvedAliases} internal aliases unresolved`);
