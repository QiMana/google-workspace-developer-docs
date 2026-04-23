# Markdown pipeline

The target is not merely "HTML stripped into Markdown." The target is a markdown archive that reads cleanly, preserves code examples, and stays close to the authorial structure of the Google docs pages.

## Quality bar

The conversion strategy is deliberately inspired by Obsidian Clipper:

- use a content extractor that understands article structure
- standardize code blocks before markdown conversion
- preserve code fence languages
- remove chrome, not content

That is why this repo uses `defuddle/node` instead of a Turndown-only pipeline.

## Pipeline stages

1. Fetch raw HTML for the canonical page URL.
   - reject non-HTML assets from the markdown pass and record them in `measurements/scrape-failures.json`
2. Parse the document with `linkedom`.
3. Isolate the article node.
4. Apply Google DevSite cleanup:
   - remove breadcrumbs
   - remove "Send feedback" chrome
   - remove page-rating and footer controls
   - remove copy buttons, scripts, styles, SVG icons, and other UI-only elements
   - unwrap tab panels into readable stacked sections
   - force closed `details` blocks open before conversion
5. Hand the cleaned article document to `defuddle/node` with markdown output enabled.
6. Post-process the markdown lightly:
   - normalize blank lines
   - strip obvious UI leftovers
   - add source metadata and a top-level title
   - fall back to plain-text markdown for odd verification-style pages that do not expose a real article body but still return `200 text/html`
7. Write one markdown file per canonical URL under `docs/`.
8. Keep the run going if a single page fails and record the failure instead of aborting the entire export.

## Why Playwright is still present

Bulk scraping does not need a browser if the docs are already server-rendered, and Google DevSite mostly is. But Playwright is still included for two reasons:

- fallback rendering when raw HTML is insufficient for a page
- parity checks against the rendered page when a conversion regression is suspected

That keeps the main pass fast without losing a browser-grade escape hatch.

## Output shape

Each page is written to a path derived from the upstream URL:

- `/workspace` -> `docs/workspace/index.md`
- `/workspace/guides/get-started` -> `docs/workspace/guides/get-started.md`
- `/apps-script/guides/logging` -> `docs/apps-script/guides/logging.md`

`manifest.json` records the generated files and their source URLs.
