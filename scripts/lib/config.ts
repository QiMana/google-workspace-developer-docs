export const ROOT_URL = "https://developers.google.com";

export const INCLUDED_ROOTS = ["/workspace", "/apps-script", "/events"] as const;

export type IncludedRoot = (typeof INCLUDED_ROOTS)[number];

export const DEFAULT_MEASUREMENT_PATH = "measurements/generated-scope.json";
export const DEFAULT_DOCS_DIR = "docs";
export const DEFAULT_MANIFEST_PATH = "manifest.json";

export const DEFAULT_CRAWL_CONCURRENCY = 12;
export const DEFAULT_SCRAPE_CONCURRENCY = 8;

export const FETCH_HEADERS = {
  "accept-language": "en",
  "user-agent": "google-workspace-developer-docs-mirror/0.1.0 (+https://github.com/QiMana/google-workspace-developer-docs)",
};
