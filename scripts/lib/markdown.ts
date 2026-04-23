import { parseHTML } from "linkedom";
import { Defuddle } from "defuddle/node";

import { classifyIncludedRoot, rootKey } from "./url";

type ConvertedPage = {
  title: string;
  root: string;
  markdown: string;
};

const DROP_SELECTORS = [
  "button",
  "script",
  "style",
  "noscript",
  "svg",
  "devsite-page-rating",
  ".devsite-page-rating",
  ".devsite-breadcrumbs",
  "[aria-label='Breadcrumb']",
  ".devsite-content-footer",
  ".devsite-page-feedback",
  ".devsite-article-meta",
  ".devsite-code-buttons",
  ".devsite-page-action",
  "devsite-feedback",
  "devsite-book-nav",
  "nav",
];

const DROP_EXACT_TEXT = new Set([
  "Send feedback",
  "Stay organized with collections",
  "Save and categorize content based on your preferences.",
  "outlined_flag",
]);

const TITLE_NOISE_PATTERNS = [
  /\s+Stay organized with collections\s+Save and categorize content based on your preferences\.\s*/g,
];

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function stripUiTextNodes(root: Element): void {
  for (const element of Array.from(root.querySelectorAll("*"))) {
    const text = element.textContent?.replace(/\s+/g, " ").trim();
    if (!text) continue;
    if (DROP_EXACT_TEXT.has(text)) {
      element.remove();
    }
  }
}

function unwrapTabbedSections(root: Element, document: Document): void {
  for (const tabList of Array.from(root.querySelectorAll("[role='tablist']"))) {
    const labels = Array.from(tabList.querySelectorAll("[role='tab']")).map((tab) =>
      tab.textContent?.replace(/\s+/g, " ").trim() ?? ""
    );

    const container = tabList.parentElement;
    if (!container) continue;

    const panels = Array.from(container.querySelectorAll("[role='tabpanel']"));
    if (labels.length === 0 || panels.length === 0) continue;

    const replacement = document.createElement("section");
    replacement.setAttribute("data-archive-tabs", "true");

    for (const [index, panel] of panels.entries()) {
      const heading = document.createElement("h3");
      heading.textContent = labels[index] || `Tab ${index + 1}`;
      replacement.appendChild(heading);
      replacement.appendChild(panel.cloneNode(true));
    }

    container.replaceWith(replacement);
  }
}

function normalizeArticle(article: Element, document: Document): Element {
  const clone = article.cloneNode(true) as Element;
  clone.querySelectorAll(DROP_SELECTORS.join(",")).forEach((node) => node.remove());

  for (const headingAnchor of Array.from(clone.querySelectorAll("h1 a[href^='#'], h2 a[href^='#'], h3 a[href^='#'], h4 a[href^='#'], h5 a[href^='#'], h6 a[href^='#']"))) {
    headingAnchor.remove();
  }

  for (const details of Array.from(clone.querySelectorAll("details"))) {
    details.setAttribute("open", "open");
  }

  unwrapTabbedSections(clone, document);
  stripUiTextNodes(clone);
  return clone;
}

function cleanMarkdown(markdown: string): string {
  let cleaned = markdown
    .replaceAll("\u00a0", " ")
    .replace(/^!\[Spark icon\]\([^)]+\)\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^Page Summary\s*$/gm, "")
    .replace(/^Home\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  for (const pattern of TITLE_NOISE_PATTERNS) {
    cleaned = cleaned.replace(pattern, " ");
  }

  return cleaned.trim();
}

function cleanTitle(text: string): string {
  let cleaned = text.replace(/\s+/g, " ").replace(/\s+\|\s+Google for Developers$/, "").trim();
  for (const pattern of TITLE_NOISE_PATTERNS) {
    cleaned = cleaned.replace(pattern, " ");
  }
  return cleaned.replace(/\s{2,}/g, " ").trim();
}

export async function convertGoogleDevsiteToMarkdown(url: string, html: string): Promise<ConvertedPage> {
  const { document } = parseHTML(html);
  const article = document.querySelector("article") ?? document.querySelector("main");
  if (!article) {
    throw new Error(`No article or main element found for ${url}`);
  }

  const articleHeading = article.querySelector("h1, h2")?.textContent?.replace(/\s+/g, " ").trim() ?? "";
  const pageTitle = document.querySelector("title")?.textContent?.replace(/\s+/g, " ").trim() || url;
  const cleanedArticle = normalizeArticle(article, document);
  const isolatedHtml = `<!doctype html><html lang="en"><head><title>${escapeHtml(pageTitle)}</title></head><body><article>${cleanedArticle.innerHTML}</article></body></html>`;
  const isolated = parseHTML(isolatedHtml);
  const result = await Defuddle(isolated.document, url, {
    markdown: true,
    contentSelector: "article",
    language: "en",
    useAsync: false,
  });

  const root = classifyIncludedRoot(url);
  if (!root) {
    throw new Error(`Cannot classify in-scope root for ${url}`);
  }

  const title = cleanTitle(articleHeading || result.title || pageTitle);
  const body = cleanMarkdown(result.content);

  return {
    title,
    root: rootKey(root),
    markdown: body,
  };
}
