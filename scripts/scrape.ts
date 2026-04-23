import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

import { chromium } from "@playwright/test";

import {
  DEFAULT_DOCS_DIR,
  DEFAULT_MANIFEST_PATH,
  DEFAULT_MEASUREMENT_PATH,
  DEFAULT_SCRAPE_CONCURRENCY,
  FETCH_HEADERS,
} from "./lib/config";
import { rewriteArchiveLinksOnDisk } from "./lib/archive-links";
import { type ScopeMeasurement } from "./lib/crawl";
import { convertGoogleDevsiteToMarkdown } from "./lib/markdown";
import { relativeMarkdownPath } from "./lib/url";

type ManifestPage = {
  url: string;
  title: string;
  root: string;
  file: string;
};

type FailedPage = {
  url: string;
  error: string;
};

function readFlag(name: string): string | undefined {
  const index = Bun.argv.indexOf(name);
  if (index === -1) return undefined;
  return Bun.argv[index + 1];
}

function readFlags(name: string): string[] {
  const values: string[] = [];
  for (let index = 0; index < Bun.argv.length; index += 1) {
    if (Bun.argv[index] === name && Bun.argv[index + 1]) {
      values.push(Bun.argv[index + 1]!);
    }
  }
  return values;
}

function hasFlag(name: string): boolean {
  return Bun.argv.includes(name);
}

async function fetchRenderedHtml(url: string): Promise<string> {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForTimeout(750);
    return await page.content();
  } finally {
    await browser.close();
  }
}

async function fetchHtml(url: string): Promise<string> {
  const response = await fetch(url, {
    redirect: "follow",
    headers: FETCH_HEADERS,
  });

  const contentType = response.headers.get("content-type");
  if (response.status !== 200 || !contentType?.includes("text/html")) {
    throw new Error(`Expected HTML 200 for ${url}, got ${response.status} ${contentType ?? "<none>"}`);
  }

  return response.text();
}

async function mapLimit<T, R>(items: T[], concurrency: number, mapper: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const results = new Array<R>(items.length);
  let nextIndex = 0;

  async function worker(): Promise<void> {
    while (true) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      if (currentIndex >= items.length) {
        return;
      }
      results[currentIndex] = await mapper(items[currentIndex]!, currentIndex);
    }
  }

  const workers = Array.from({ length: Math.max(1, Math.min(concurrency, items.length)) }, () => worker());
  await Promise.all(workers);
  return results;
}

const measurementPath = resolve(process.cwd(), readFlag("--measurement") ?? DEFAULT_MEASUREMENT_PATH);
const docsDir = resolve(process.cwd(), readFlag("--docs-dir") ?? DEFAULT_DOCS_DIR);
const manifestPath = resolve(process.cwd(), readFlag("--manifest") ?? DEFAULT_MANIFEST_PATH);
const failuresPath = resolve(process.cwd(), readFlag("--failures") ?? "measurements/scrape-failures.json");
const limit = Number(readFlag("--limit") ?? "") || undefined;
const overwrite = hasFlag("--overwrite");
const fresh = hasFlag("--fresh");
const concurrency = Number(readFlag("--concurrency") ?? "") || DEFAULT_SCRAPE_CONCURRENCY;
const manualUrls = readFlags("--url");

let pagesToScrape: Array<{ url: string; title: string; root: string }>;

if (manualUrls.length > 0) {
  pagesToScrape = manualUrls.map((url) => ({ url, title: "", root: "" }));
} else {
  const measurement = JSON.parse(await readFile(measurementPath, "utf8")) as ScopeMeasurement;
  if (!Array.isArray(measurement.pages) || measurement.pages.length === 0) {
    throw new Error(
      `Measurement at ${measurementPath} does not include page records. Run bun run measure-scope first or pass one or more --url flags.`
    );
  }
  pagesToScrape = limit ? measurement.pages.slice(0, limit) : measurement.pages;
}

if (fresh) {
  await rm(docsDir, { recursive: true, force: true });
}
await mkdir(docsDir, { recursive: true });

const failures: FailedPage[] = [];

const manifestPages = await mapLimit(pagesToScrape, concurrency, async (page, index) => {
  const relativePath = relativeMarkdownPath(page.url);
  const outputPath = join(docsDir, relativePath);

  try {
    if (!overwrite) {
      const existing = Bun.file(outputPath);
      if (await existing.exists()) {
        return {
          url: page.url,
          title: page.title,
          root: page.root,
          file: `docs/${relativePath}`,
        } satisfies ManifestPage;
      }
    }

    console.log(`[${index + 1}/${pagesToScrape.length}] ${page.url}`);
    let html = await fetchHtml(page.url);
    let converted;

    try {
      converted = await convertGoogleDevsiteToMarkdown(page.url, html);
    } catch (error) {
      console.warn(`raw-html conversion failed for ${page.url}, retrying with Playwright render`);
      html = await fetchRenderedHtml(page.url);
      converted = await convertGoogleDevsiteToMarkdown(page.url, html);
    }

    const markdown = `---\nsource: ${page.url}\nroot: ${converted.root}\nfetched_at: ${new Date().toISOString()}\n---\n\n# ${converted.title}\n\n${converted.markdown}\n`;

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, markdown, "utf8");

    return {
      url: page.url,
      title: converted.title,
      root: converted.root,
      file: `docs/${relativePath}`,
    } satisfies ManifestPage;
  } catch (error) {
    const message = error instanceof Error ? error.stack ?? error.message : String(error);
    failures.push({
      url: page.url,
      error: message,
    });
    console.error(`failed to scrape ${page.url}\n${message}`);
    return null;
  }
});

const successfulPages = manifestPages.filter((page): page is ManifestPage => page !== null);
successfulPages.sort((left, right) => left.url.localeCompare(right.url));

await mkdir(dirname(manifestPath), { recursive: true });
await writeFile(
  manifestPath,
  `${JSON.stringify({
    source: "https://developers.google.com",
    generatedAt: new Date().toISOString(),
    pageCount: successfulPages.length,
    pages: successfulPages,
  }, null, 2)}\n`,
  "utf8",
);

await mkdir(dirname(failuresPath), { recursive: true });
await writeFile(
  failuresPath,
  `${JSON.stringify({
    source: "https://developers.google.com",
    generatedAt: new Date().toISOString(),
    attemptedCount: pagesToScrape.length,
    successCount: successfulPages.length,
    failureCount: failures.length,
    failures,
  }, null, 2)}\n`,
  "utf8",
);

const linkRewrite = await rewriteArchiveLinksOnDisk(process.cwd(), successfulPages);

console.log(`wrote ${successfulPages.length} markdown files to ${docsDir}`);
console.log(`rewrote internal archive links in ${linkRewrite.changedFiles} files`);
console.log(`resolved ${linkRewrite.resolvedAliases} redirect aliases`);
console.log(`left ${linkRewrite.unresolvedAliases} internal aliases unresolved`);
if (failures.length > 0) {
  console.log(`recorded ${failures.length} scrape failures in ${failuresPath}`);
}
