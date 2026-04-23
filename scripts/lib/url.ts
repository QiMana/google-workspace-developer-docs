import { INCLUDED_ROOTS, ROOT_URL, type IncludedRoot } from "./config";

export function normalizeUrl(rawUrl: string): string | null {
  try {
    const url = new URL(rawUrl, ROOT_URL);
    if (url.origin !== ROOT_URL) return null;
    url.hash = "";
    url.search = "";
    url.pathname = url.pathname.replace(/\/+$/, "") || "/";
    return url.toString();
  } catch {
    return null;
  }
}

export function classifyIncludedRoot(url: string): IncludedRoot | null {
  const normalized = normalizeUrl(url);
  if (!normalized) return null;
  const pathname = new URL(normalized).pathname;

  for (const root of INCLUDED_ROOTS) {
    if (pathname === root || pathname.startsWith(`${root}/`)) {
      return root;
    }
  }

  return null;
}

export function isInScope(url: string): boolean {
  return classifyIncludedRoot(url) !== null;
}

export function rootKey(root: IncludedRoot): string {
  return root.replace(/^\//, "");
}

export function relativeMarkdownPath(url: string): string {
  const normalized = normalizeUrl(url);
  if (!normalized) {
    throw new Error(`Cannot derive markdown path for invalid URL: ${url}`);
  }

  const pathname = new URL(normalized).pathname;
  const trimmed = pathname.replace(/^\/+|\/+$/g, "");

  if (!trimmed) {
    return "index.md";
  }

  const segments = trimmed.split("/");
  if (segments.length === 1) {
    return `${segments[0]}/index.md`;
  }

  return `${trimmed}.md`;
}
