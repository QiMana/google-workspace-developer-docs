import { parseHTML } from "linkedom";

import { DEFAULT_CRAWL_CONCURRENCY, FETCH_HEADERS, type IncludedRoot } from "./config";
import { classifyIncludedRoot, isInScope, normalizeUrl, rootKey } from "./url";

export type MeasuredPage = {
  url: string;
  root: string;
  title: string;
};

export type ScopeMeasurement = {
  label: string;
  generatedAt: string;
  sourceHost: string;
  includedRoots: string[];
  countingRule: string;
  totalHtmlPages: number;
  countsByRoot: Record<string, number>;
  brokenCandidates: {
    total: number;
    byRoot: Record<string, number>;
  };
  notes: string[];
  pages: MeasuredPage[];
};

type FetchResult = {
  requestedUrl: string;
  finalUrl: string | null;
  root: IncludedRoot | null;
  title: string;
  status: number;
  contentType: string | null;
  isHtmlPage: boolean;
  links: string[];
};

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

function extractLinks(html: string, baseUrl: string): { links: string[]; title: string } {
  const { document } = parseHTML(html);
  const title = document.querySelector("title")?.textContent?.replace(/\s+/g, " ").trim() ?? "";
  const seen = new Set<string>();

  for (const anchor of Array.from(document.querySelectorAll("a[href]"))) {
    const href = anchor.getAttribute("href");
    if (!href) continue;
    const normalized = normalizeUrl(new URL(href, baseUrl).toString());
    if (!normalized || !isInScope(normalized)) continue;
    seen.add(normalized);
  }

  return {
    links: Array.from(seen).sort(),
    title,
  };
}

async function fetchPage(url: string): Promise<FetchResult> {
  const response = await fetch(url, {
    redirect: "follow",
    headers: FETCH_HEADERS,
  });

  const finalUrl = normalizeUrl(response.url || url);
  const root = finalUrl ? classifyIncludedRoot(finalUrl) : null;
  const contentType = response.headers.get("content-type");
  const isHtmlPage = response.status === 200 && Boolean(contentType?.includes("text/html")) && Boolean(root);

  if (!isHtmlPage || !finalUrl || !root) {
    return {
      requestedUrl: url,
      finalUrl,
      root,
      title: "",
      status: response.status,
      contentType,
      isHtmlPage: false,
      links: [],
    };
  }

  const html = await response.text();
  const { links, title } = extractLinks(html, finalUrl);

  return {
    requestedUrl: url,
    finalUrl,
    root,
    title,
    status: response.status,
    contentType,
    isHtmlPage: true,
    links,
  };
}

export async function measureScope(options?: {
  concurrency?: number;
  log?: (message: string) => void;
}): Promise<ScopeMeasurement> {
  const concurrency = options?.concurrency ?? DEFAULT_CRAWL_CONCURRENCY;
  const log = options?.log ?? (() => {});

  const seeds = ["/workspace", "/apps-script", "/events"]
    .map((path) => normalizeUrl(`https://developers.google.com${path}`))
    .filter((url): url is string => Boolean(url));

  const seen = new Set<string>(seeds);
  const confirmed = new Map<string, MeasuredPage>();
  const brokenByRoot = new Map<string, Set<string>>();

  let frontier = seeds;
  let wave = 0;

  while (frontier.length > 0) {
    wave += 1;
    log(`wave ${wave}: checking ${frontier.length} URLs`);
    const nextFrontier: string[] = [];

    for (const batch of chunk(frontier, concurrency)) {
      const results = await Promise.all(batch.map((url) => fetchPage(url)));

      for (const result of results) {
        if (result.isHtmlPage && result.finalUrl && result.root) {
          const pageRoot = rootKey(result.root);
          confirmed.set(result.finalUrl, {
            url: result.finalUrl,
            root: pageRoot,
            title: result.title,
          });

          for (const link of result.links) {
            if (seen.has(link)) continue;
            seen.add(link);
            nextFrontier.push(link);
          }
          continue;
        }

        const brokenRoot = result.finalUrl ? classifyIncludedRoot(result.finalUrl) : classifyIncludedRoot(result.requestedUrl);
        if (!brokenRoot) continue;
        const key = rootKey(brokenRoot);
        if (!brokenByRoot.has(key)) {
          brokenByRoot.set(key, new Set<string>());
        }
        brokenByRoot.get(key)!.add(result.finalUrl ?? result.requestedUrl);
      }
    }

    frontier = nextFrontier;
  }

  const countsByRoot: Record<string, number> = {};
  for (const page of confirmed.values()) {
    countsByRoot[page.root] = (countsByRoot[page.root] ?? 0) + 1;
  }

  const brokenCounts: Record<string, number> = {};
  let brokenTotal = 0;
  for (const [root, urls] of brokenByRoot.entries()) {
    brokenCounts[root] = urls.size;
    brokenTotal += urls.size;
  }

  const pages = Array.from(confirmed.values()).sort((left, right) => left.url.localeCompare(right.url));

  return {
    label: `${new Date().toISOString().slice(0, 10)} expanded Google Workspace developer corpus`,
    generatedAt: new Date().toISOString(),
    sourceHost: "https://developers.google.com",
    includedRoots: ["/workspace", "/apps-script", "/events"],
    countingRule: "Count only canonical in-scope URLs that return HTTP 200 and text/html.",
    totalHtmlPages: pages.length,
    countsByRoot,
    brokenCandidates: {
      total: brokenTotal,
      byRoot: brokenCounts,
    },
    notes: [
      "Pages are discovered by crawling the in-scope link graph to convergence.",
      "Broken candidates are linked in-scope URLs that did not resolve to a live HTML page during this measurement run.",
      "Compare this generated manifest against the checked-in verified snapshot before replacing measurements/current-scope.json."
    ],
    pages,
  };
}
