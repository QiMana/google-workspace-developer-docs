# Scope methodology

This repo treats the Google Workspace developer corpus as a bounded subset of `https://developers.google.com`, not as an unbounded crawl of every page on the host.

## Included roots

- `/workspace`
- `/apps-script`
- `/events`

These extra roots are included because they are part of the Workspace developer experience exposed through the Workspace docs surface, even though they are not all nested under `/workspace`.

## Excluded surfaces

- other `developers.google.com` roots that are not part of the Workspace corpus
- external Google properties such as `admin.google.com` and `script.google.com`
- external domains such as YouTube, blogs, X, GitHub, and codelabs
- non-HTML assets

## Exact counting rule

Count a page if and only if all of the following are true:

1. its canonical final URL is on `https://developers.google.com`
2. the canonical final URL is under one of the included roots
3. the HTTP response is `200`
4. the response content type is HTML

Everything else is excluded from the corpus count, even if it is linked by an in-scope page.

## Measurement algorithm

1. Seed the crawl with the included roots.
2. Fetch each in-scope page and follow redirects.
3. Normalize URLs by dropping query strings and fragments, forcing the host to `developers.google.com`, and removing trailing slashes.
4. Extract links from the fetched HTML.
5. Keep only newly discovered links whose normalized URLs stay under the included roots.
6. Repeat until a full crawl wave discovers no new in-scope URLs.
7. Recheck any linked in-scope candidates that were not counted as live HTML pages and record their status.

This yields an exact count for the chosen scope, not a spot-check estimate.

## Current snapshot

The `2026-04-23` snapshot resolved to:

- `/workspace`: `4,518`
- `/apps-script`: `984`
- `/events`: `2`
- total: `5,504`

Broken in-scope candidates at measurement time:

- `/workspace`: `102`
- off-prefix included roots: `3`
- total: `105`

## Current checked-in archive

The repo's current `docs/` tree is generated from the machine-resolved export target, not directly from the verified `5,504`-page snapshot above.

The `2026-04-23` checked-in archive currently contains:

- `/workspace`: `4,258`
- `/apps-script`: `993`
- `/events`: `20`
- total: `5,271`

Four export-target URLs were excluded during scraping because they were not HTML pages that belong in a markdown docs archive:

- `https://developers.google.com/workspace/calendar/___attribution` -> `404`
- `https://developers.google.com/workspace/classroom/assets/Classroom_addons_Posts_migration_guide.pdf` -> `application/pdf`
- `https://developers.google.com/workspace/classroom/assets/classroom_add_ons_test_plan.pdf` -> `application/pdf`
- `https://developers.google.com/workspace/meet/hardware/testdata_lsusb_output.txt` -> `text/plain`

Use these files together when reasoning about the checked-in archive:

- [`../measurements/export-target.json`](../measurements/export-target.json)
- [`../measurements/scrape-failures.json`](../measurements/scrape-failures.json)
- [`../manifest.json`](../manifest.json)

## Re-measuring in future

Run:

```bash
bun install
bun run measure-scope
```

That writes a fresh candidate manifest to `measurements/generated-scope.json`.

The checked-in `measurements/current-scope.json` remains the authoritative verified snapshot for the current repo because the exact `5,504` count was established from stricter root-by-root verification. The generated manifest is the starting point for the next refresh, not something to replace the verified snapshot blindly.
