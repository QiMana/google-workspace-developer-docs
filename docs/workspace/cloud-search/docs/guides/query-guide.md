---
source: https://developers.google.com/workspace/cloud-search/docs/guides/query-guide
root: workspace
fetched_at: 2026-04-23T15:26:09.774Z
---

# Create a search interface with the Query API

The Query API provides search and suggest methods for building a search interface or embedding results in an application.

For web applications with minimal requirements, consider using the search widget. See [Create a search interface with the search widget](./search-widget.md).

## Build a search interface

Building a minimal search interface requires several steps:

1. Configure a search application.
2. Generate OAuth credentials for the application.
3. Query the index.
4. Display the query results.

You can enhance the interface with features like paging, sorting, filtering, facets, and autocomplete.

## Configure a search application

You must create at least one **search application** for each search interface. A search application provides default parameters, such as data sources, sort order, filters, and facets. You can override these parameters using the Query API.

You cannot increase the number of data sources used in a query beyond those configured in the search application. You can restrict a query to a subset of these sources using `dataSourceRestrictions`.

For more information, see [Customize the search experience](https://support.google.com/a/answer/9043922).

## Generate OAuth credentials for the application

In addition to the steps in [Configure access to the Cloud Search API](./project-setup.md), you must generate OAuth credentials for your web application.

Use the credentials to request authorization on behalf of the user. Use the scope `https://www.googleapis.com/auth/cloud_search.query`.

## Query the index

Use the [`search`](../reference/rest/v1/query/search.md) method to search the index.

Every request must include a text `query` and a `searchApplicationId`.

This example queries a movie data source:

```
{
  "query": "titanic",
  "requestOptions": {
    "searchApplicationId": "searchapplications/<search_app_id>"
  }
}
```

## Display query results

Search interfaces should display the item `title` and a link to the original item. You can also use snippets and metadata to improve the display.

### Handle supplemental results

Cloud Search returns supplemental results when there are insufficient matches for a query. The [`queryInterpretation`](../reference/rest/v1/query/search.md#QueryInterpretation) field indicates this. If only supplemental results return, `InterpretationType` is `REPLACE`. If they are blended, it is `BLEND`.

When returning supplemental results, consider informing the user. For a `REPLACE`, you might say: "Your search did not match any results. Showing results for similar queries."

### Handle people results

Cloud Search returns documents related to people and employee information using the People Search feature. Results are in the [`structuredResults`](../reference/rest/v1/query/search.md#StructuredResult) field:

```
{
  "results": [...],
  "structuredResults": [{
    "person": {...}
  }]
}
```

#### Direct Reports Matching

Direct Reports Matching lets users see a person's direct reports. The response includes an `assistCardProtoHolder` with a `cardType` of `RELATED_PEOPLE_ANSWER_CARD`.

### Turn off optimizations

Optimizations like supplemental results are enabled by default. You can disable them:

- **Search application level**: Set [`force_verbatim_mode`](../reference/rest/v1/settings.searchapplications.md#QueryInterpretationConfig) to `true`.
- **Query level**: Set [`enableVerbatimMode`](../reference/rest/v1/query/search.md#QueryInterpretationOptions) to `true`.

### Highlight snippets

Cloud Search returns a snippet for indexed text or HTML. If query terms are present, `matchRanges` identifies their location. Use these ranges to highlight text.

```
function highlightSnippet(snippet) {
  let text = snippet.snippet;
  let formattedText = text;
  if (snippet.matchRanges) {
    let parts = [];
    let index = 0;
    for (let match of snippet.matchRanges) {
      let start = match.start || 0; // Default to 0 if omitted
      let end = match.end;
      if (index < start) { // Include any leading text before/between ranges
        parts.push(text.slice(index, start));
      }
      parts.push('<span class="highlight">');
      parts.push(text.slice(start, end));
      parts.push('</span>');
      index = end;
    }
    parts.push(text.slice(index)); // Include any trailing text after last range
    formattedText = parts.join('');
  }
  return formattedText;
}
```

Given the snippet:

```
{
  "snippet": "This is an example snippet...",
  "matchRanges": [
    {
      "start": 11,
      "end": 18
    }
  ]
}
```

The resulting HTML string is:

```
This is an <span class="highlight">example</span> snippet...
```

### Display metadata

Use the [`metadata`](../reference/rest/v1/query/search.md#Metadata) field for information like `createTime`, `updateTime`, and structured data. Use [`displayOptions`](../reference/rest/v1/query/search.md#ResultDisplayMetadata) to show structured data.

## Retrieve additional results

To retrieve more results, set the [`start`](../reference/rest/v1/query/search.md#body.request_body.FIELDS-table) field to the selected offset. Adjust page size with `pageSize`. Use `resultCount` to display total items or estimated counts.

## Sort results

Use [`sortOptions`](../reference/rest/v1/query/search.md#body.request_body.FIELDS-table) to specify the order:

- `operatorName`: the property to sort by.
- `sortOrder`: `ASCENDING` or `DESCENDING`.

Relevance is the default and secondary sort key.

## Add filters

Restrict results with [filters](../reference/rest/v1/settings.searchapplications.md#FilterOptions) in the search application or request. If both specify filters for a source, both must evaluate to true.

Apply filters in [`dataSourceRestrictions.filterOptions[]`](../reference/rest/v1/settings.searchapplications.md#FilterOptions). Primary filter types:

- **Object filters**: restrict matches to a specific type.
- **Value filters**: restrict matches based on an operator and value.

[Composite filters](../reference/rest/v1/settings.searchapplications.md#CompositeFilter) combine multiple value filters.

## Refine results with facets

Facets help users interactively refine queries. When you request facets, Cloud Search computes the most frequent values for those properties.

Typical pattern: 1. Query specifying facet properties. 1. Render search and facet results. 1. User selects facet values. 1. Repeat query with a filter based on selections.

### Facet results with integer-based fields

Mark an integer property as facetable to refine results by ranges (e.g., "100-200" pages). Set `isFacetable` to `true` and define default bucketing options in the schema.

### Facet results by document size or date

Use [reserved operators](../reference/schemas/reserved-operators.md#reserved_operators):

- `itemsize`: for file size in bytes.
- `createddatetimestamp`: for creation date.
- `lastmodified`: for modification date.

## Add suggestions

Use the [suggest](../reference/rest/v1/query/suggest.md) API for autocomplete based on query history, contacts, and document content.
