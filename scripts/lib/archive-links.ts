import { readFile, writeFile } from "node:fs/promises";
import { posix, resolve } from "node:path";

import { FETCH_HEADERS } from "./config";
import { normalizeUrl } from "./url";

type ArchivePage = {
  url: string;
  file: string;
};

type RewriteSummary = {
  changedFiles: number;
  unchangedFiles: number;
  resolvedAliases: number;
  unresolvedAliases: number;
};

function findBalancedParen(text: string, openIndex: number): number {
  let depth = 0;

  for (let index = openIndex; index < text.length; index += 1) {
    const char = text[index];

    if (char === "\\") {
      index += 1;
      continue;
    }

    if (char === "(") {
      depth += 1;
      continue;
    }

    if (char === ")") {
      depth -= 1;
      if (depth === 0) {
        return index;
      }
    }
  }

  return -1;
}

function resolveDestinationUrl(destination: string, sourceUrl: string): URL | null {
  const trimmed = destination.trim();
  if (!trimmed || trimmed.startsWith("#")) {
    return null;
  }

  const parseCandidate = trimmed.replace(/\\([()])/g, "$1");

  try {
    return new URL(parseCandidate, sourceUrl);
  } catch {
    return null;
  }
}

function collectMarkdownDestinations(markdown: string, sourceUrl: string): URL[] {
  const destinations: URL[] = [];
  let cursor = 0;

  while (cursor < markdown.length) {
    const openBracket = markdown.indexOf("[", cursor);
    if (openBracket === -1) {
      break;
    }

    if (openBracket > 0 && markdown[openBracket - 1] === "!") {
      cursor = openBracket + 1;
      continue;
    }

    let labelEnd = openBracket + 1;
    while (labelEnd < markdown.length - 1) {
      if (markdown[labelEnd] === "]" && markdown[labelEnd + 1] === "(" && markdown[labelEnd - 1] !== "\\") {
        break;
      }
      labelEnd += 1;
    }

    if (labelEnd >= markdown.length - 1 || markdown[labelEnd + 1] !== "(") {
      cursor = openBracket + 1;
      continue;
    }

    const destinationOpen = labelEnd + 1;
    const destinationClose = findBalancedParen(markdown, destinationOpen);
    if (destinationClose === -1) {
      cursor = destinationOpen + 1;
      continue;
    }

    const rawDestination = markdown.slice(destinationOpen + 1, destinationClose);
    const resolved = resolveDestinationUrl(rawDestination, sourceUrl);
    if (resolved) {
      destinations.push(resolved);
    }

    cursor = destinationClose;
  }

  return destinations;
}

function rewriteDestination(
  destination: string,
  sourceUrl: string,
  sourceFile: string,
  archiveFilesByUrl: Map<string, string>,
): string | null {
  const resolved = resolveDestinationUrl(destination, sourceUrl);
  if (!resolved) {
    return null;
  }

  const normalized = normalizeUrl(resolved.toString());
  if (!normalized) {
    return null;
  }

  const targetFile = archiveFilesByUrl.get(normalized);
  if (!targetFile) {
    return null;
  }

  const sourceDir = posix.dirname(sourceFile);
  let relativeTarget = posix.relative(sourceDir, targetFile);
  if (!relativeTarget && resolved.hash) {
    return resolved.hash;
  }
  if (!relativeTarget) {
    return null;
  }

  if (!relativeTarget.startsWith(".") && !relativeTarget.startsWith("/")) {
    relativeTarget = `./${relativeTarget}`;
  }

  return `${relativeTarget}${resolved.hash}`;
}

export function rewriteArchiveMarkdownLinks(
  markdown: string,
  sourceUrl: string,
  sourceFile: string,
  archiveFilesByUrl: Map<string, string>,
): string {
  let rewritten = "";
  let cursor = 0;

  while (cursor < markdown.length) {
    const openBracket = markdown.indexOf("[", cursor);
    if (openBracket === -1) {
      rewritten += markdown.slice(cursor);
      break;
    }

    if (openBracket > 0 && markdown[openBracket - 1] === "!") {
      rewritten += markdown.slice(cursor, openBracket + 1);
      cursor = openBracket + 1;
      continue;
    }

    let labelEnd = openBracket + 1;
    while (labelEnd < markdown.length - 1) {
      if (markdown[labelEnd] === "]" && markdown[labelEnd + 1] === "(" && markdown[labelEnd - 1] !== "\\") {
        break;
      }
      labelEnd += 1;
    }

    if (labelEnd >= markdown.length - 1 || markdown[labelEnd + 1] !== "(") {
      rewritten += markdown.slice(cursor, openBracket + 1);
      cursor = openBracket + 1;
      continue;
    }

    const destinationOpen = labelEnd + 1;
    const destinationClose = findBalancedParen(markdown, destinationOpen);
    if (destinationClose === -1) {
      rewritten += markdown.slice(cursor, destinationOpen + 1);
      cursor = destinationOpen + 1;
      continue;
    }

    const rawDestination = markdown.slice(destinationOpen + 1, destinationClose);
    const nextDestination =
      rewriteDestination(rawDestination, sourceUrl, sourceFile, archiveFilesByUrl) ?? rawDestination;

    rewritten += markdown.slice(cursor, destinationOpen + 1);
    rewritten += nextDestination;
    cursor = destinationClose;
  }

  return rewritten;
}

async function mapLimit<T, R>(
  items: T[],
  concurrency: number,
  mapper: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
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

async function resolveArchiveAliases(
  unresolvedUrls: string[],
  archiveFilesByUrl: Map<string, string>,
): Promise<{ aliases: Map<string, string>; unresolvedCount: number }> {
  const uniqueUnresolved = Array.from(new Set(unresolvedUrls));

  const resolvedPairs = await mapLimit(uniqueUnresolved, 12, async (url) => {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: FETCH_HEADERS,
      });

      const finalUrl = normalizeUrl(response.url);
      if (!finalUrl) {
        return null;
      }

      const targetFile = archiveFilesByUrl.get(finalUrl);
      if (!targetFile) {
        return null;
      }

      return { from: url, to: targetFile };
    } catch {
      return null;
    }
  });

  const aliases = new Map<string, string>();
  let unresolvedCount = 0;

  for (const result of resolvedPairs) {
    if (!result) {
      unresolvedCount += 1;
      continue;
    }
    aliases.set(result.from, result.to);
  }

  return {
    aliases,
    unresolvedCount,
  };
}

export async function rewriteArchiveLinksOnDisk(
  repoRoot: string,
  pages: ArchivePage[],
): Promise<RewriteSummary> {
  const archiveFilesByUrl = new Map<string, string>();
  for (const page of pages) {
    const normalized = normalizeUrl(page.url);
    if (!normalized) continue;
    archiveFilesByUrl.set(normalized, page.file);
  }

  const unresolvedUrls: string[] = [];
  for (const page of pages) {
    const absolutePath = resolve(repoRoot, page.file);
    const markdown = await readFile(absolutePath, "utf8");
    const destinations = collectMarkdownDestinations(markdown, page.url);

    for (const destination of destinations) {
      const normalized = normalizeUrl(destination.toString());
      if (!normalized) continue;
      if (archiveFilesByUrl.has(normalized)) continue;
      unresolvedUrls.push(normalized);
    }
  }

  const aliasResolution = await resolveArchiveAliases(unresolvedUrls, archiveFilesByUrl);
  for (const [aliasUrl, targetFile] of aliasResolution.aliases) {
    archiveFilesByUrl.set(aliasUrl, targetFile);
  }

  let changedFiles = 0;
  let unchangedFiles = 0;

  for (const page of pages) {
    const absolutePath = resolve(repoRoot, page.file);
    const original = await readFile(absolutePath, "utf8");
    const rewritten = rewriteArchiveMarkdownLinks(original, page.url, page.file, archiveFilesByUrl);

    if (rewritten === original) {
      unchangedFiles += 1;
      continue;
    }

    await writeFile(absolutePath, rewritten, "utf8");
    changedFiles += 1;
  }

  return {
    changedFiles,
    unchangedFiles,
    resolvedAliases: aliasResolution.aliases.size,
    unresolvedAliases: aliasResolution.unresolvedCount,
  };
}
