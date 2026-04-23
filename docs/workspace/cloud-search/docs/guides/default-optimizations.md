---
source: https://developers.google.com/workspace/cloud-search/docs/guides/default-optimizations
root: workspace
fetched_at: 2026-04-23T15:26:08.244Z
---

# Compensate for default expansions, interpretations, and optimizations

Google Cloud Search has several default expansions, interpretations, and optimizations that affect search results. If you see unexpected search results, refer to this guide before contacting Cloud Search support.

In this document, user queries are shown in brackets (like `[query]`) and system interpretations are shown in quotes (like `"interpretation"`).

The query results in this document are illustrative examples of behavior and provide insight into how expansions, interpretations, and optimizations work; actual results might vary.

## Default expansions

Suppose a user searches for `[Joe’s PDFs]`, but some results contain highlighted words like `"documents"` instead of `"PDFs"`. This happens because Cloud Search expands the query to include synonyms and word stems, similar to Google Search. This expansion helps retrieve documents that match the idea and intent of the query. Ranking algorithms then ensure the best matches appear at the top.

When a user searches for `[Joe’s PDFs]`, Cloud Search might supply these additional words:

- For `[Joe’s]`, it might match `"joe"` (stem expansion) and `"joes"` (synonym based on punctuation).
- For `[PDFs]`, it might match `"documents"` (synonym expansion) and `"pdf"` (stem expansion).

Default synonyms aren't always bidirectional. For example, a search for `[phishing]` might match `"phish"`, but a search for `[phish]` might not match `"phishing"`.

### Expansions for hyphenated and underscored words

Cloud Search treats hyphenated words and their non-hyphenated equivalents differently, such as `[walk-in closet]` and `[walk in closet]`. It also applies different optimizations for hyphenated and underscored words, like `[walk-in]` and `[walk_in]`.

### Compensate for default expansions

Cloud Search doesn't guarantee any specific expansion. To ensure bidirectional synonyms or domain-specific expansions, create your own synonyms. For more information, see [Define synonyms](https://developers.google.com/workspace/cloud-search/docs/guides/synonyms).

## Default interpretations

Cloud Search provides natural-language interpretation based on your data source schema. For more information, see [Structure your schema for optimal query interpretation](https://developers.google.com/workspace/cloud-search/docs/guides/query-interpretation).

### Disable natural-language interpretations

To disable natural-language interpretations for a specific query, set [`QueryInterpretationOptions.disableNlInterpretation`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/query/search#queryinterpretationoptions) to `true` in the search request.

## Default optimizations

Cloud Search provides these default optimizations:

- Spelling correction blending: For the query `[corpoate benefits]`, Cloud Search matches `"corpoate"` and the correct spelling, `"corporate"`.
- Supplemental results: For queries with few or no results, Cloud Search uses a permissive set of related terms. For more information, see [Handle supplemental results](https://developers.google.com/workspace/cloud-search/docs/guides/query-guide#display_query_results).

## Normalize documents and queries

Normalizing standardizes words or phrases before or after a query. To ensure consistent responses, consider these normalization steps:

- To normalize documents:
	1. Choose a canonical spelling for critical words in your repositories.
		2. Correct spellings in source documents or during indexing to match the canonical form.
- To normalize queries:
	1. Intercept user queries before sending them to Cloud Search.
		2. Rewrite words in queries to match the most common spelling in the indexed data source.
		3. Send the rewritten query to Cloud Search.

## Disable expansions, interpretations, and optimizations

To disable these features for a specific query, set [`QueryInterpretationOptions.enableVerbatimMode`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/query/search#queryinterpretationoptions) to `true` in the search request.
