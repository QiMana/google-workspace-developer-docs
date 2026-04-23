---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/query/search
root: workspace
fetched_at: 2026-04-23T15:26:16.940Z
---

# Method: query.search

The Cloud Search query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party.

**Note:** This API requires a standard end user account to execute. A service account can't perform query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/workspace/cloud-search/docs/guides/delegation/).

### HTTP request

`POST https://cloudsearch.googleapis.com/v1/query/search`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "requestOptions": {
    object (RequestOptions)
  },
  "query": string,
  "pageSize": integer,
  "start": integer,
  "dataSourceRestrictions": [
    {
      object (DataSourceRestriction)
    }
  ],
  "facetOptions": [
    {
      object (FacetOptions)
    }
  ],
  "sortOptions": {
    object (SortOptions)
  },
  "queryInterpretationOptions": {
    object (QueryInterpretationOptions)
  },
  "contextAttributes": [
    {
      object (ContextAttribute)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requestOptions</code></td><td><p><code>object (<code>RequestOptions</code>)</code></p><p>Request options, such as the search application and user timezone.</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>The raw query string. See supported search operators in the <a href="https://support.google.com/cloudsearch/answer/6172299">Narrow your search with operators</a></p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of search results to return in one page. Valid values are between 1 and 100, inclusive. Default value is 10. Minimum value is 50 when results beyond 2000 are requested.</p></td></tr><tr><td><code>start</code></td><td><p><code>integer</code></p><p>Starting index of the results.</p></td></tr><tr><td><code>dataSourceRestrictions[]</code></td><td><p><code>object (<code>DataSourceRestriction</code>)</code></p><p>The sources to use for querying. If not specified, all data sources from the current search application are used.</p></td></tr><tr><td><code>facetOptions[]</code></td><td><p><code>object (<code>FacetOptions</code>)</code></p></td></tr><tr><td><code>sortOptions</code></td><td><p><code>object (<code>SortOptions</code>)</code></p><p>The options for sorting the search results</p></td></tr><tr><td><code>queryInterpretationOptions</code></td><td><p><code>object (<code>QueryInterpretationOptions</code>)</code></p><p>options to interpret the user query.</p></td></tr><tr><td><code>contextAttributes[]</code></td><td><p><code>object (<code>ContextAttribute</code>)</code></p><p>Context attributes for the request which will be used to adjust ranking of search results. The maximum number of elements is 10.</p></td></tr></tbody></table>

### Response body

The search API response. NEXT id: 19

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "queryInterpretation": {
    object (QueryInterpretation)
  },
  "results": [
    {
      object (SearchResult)
    }
  ],
  "structuredResults": [
    {
      object (StructuredResult)
    }
  ],
  "spellResults": [
    {
      object (SpellResult)
    }
  ],
  "facetResults": [
    {
      object (FacetResult)
    }
  ],
  "hasMoreResults": boolean,
  "debugInfo": {
    object (ResponseDebugInfo)
  },
  "errorInfo": {
    object (ErrorInfo)
  },
  "resultCounts": {
    object (ResultCounts)
  },

  "resultCountEstimate": string,
  "resultCountExact": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>queryInterpretation</code></td><td><p><code>object (<code>QueryInterpretation</code>)</code></p><p>query interpretation result for user query. Empty if query interpretation is disabled.</p></td></tr><tr><td><code>results[]</code></td><td><p><code>object (<code>SearchResult</code>)</code></p><p>Results from a search query.</p></td></tr><tr><td><code>structuredResults[]</code></td><td><p><code>object (<code>StructuredResult</code>)</code></p><p>Structured results for the user query. These results are not counted against the pageSize.</p></td></tr><tr><td><code>spellResults[]</code></td><td><p><code>object (<code>SpellResult</code>)</code></p><p>Suggested spelling for the query.</p></td></tr><tr><td><code>facetResults[]</code></td><td><p><code>object (<code>FacetResult</code>)</code></p><p>Repeated facet results.</p></td></tr><tr><td><code>hasMoreResults</code></td><td><p><code>boolean</code></p><p>Whether there are more search results matching the query.</p></td></tr><tr><td><code>debugInfo</code></td><td><p><code>object (<code>ResponseDebugInfo</code>)</code></p><p>Debugging information about the response.</p></td></tr><tr><td><code>errorInfo</code></td><td><p><code>object (<code>ErrorInfo</code>)</code></p><p>Error information about the response.</p></td></tr><tr><td><code>resultCounts</code></td><td><p><code>object (<code>ResultCounts</code>)</code></p><p>Expanded result count information.</p></td></tr><tr><td colspan="2"><p>Union field <code>result_count</code>. The total result count across all requested data sources. Omitted if predefined sources are included in the set of data sources queried. Result counts might be returned as an estimate, instead of exact, under the following circumstances:</p><ul><li><p>When the query has more than 2 terms in a phrase, such as "result count exact" in quotes.</p></li><li><p>When the number of unique search result ACLs to evaluate are too large to compute within a reasonable latency.</p></li></ul><p>In the rare case when the system is unable to search through all documents, rerun the query. <code>result_count</code> can be only one of the following:</p></td></tr><tr><td><code>resultCountEstimate</code></td><td><p><code>string (int64 format)</code></p><p>The estimated result count for this query.</p></td></tr><tr><td><code>resultCountExact</code></td><td><p><code>string (int64 format)</code></p><p>The exact result count for this query.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.query`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## QueryInterpretationOptions

options to interpret user query.

JSON representation

```
{
  "disableNlInterpretation": boolean,
  "enableVerbatimMode": boolean,
  "disableSupplementalResults": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>disableNlInterpretation</code></td><td><p><code>boolean</code></p><p>Flag to disable natural language (NL) interpretation of queries. Default is false, Set to true to disable natural language interpretation. NL interpretation only applies to predefined datasources.</p></td></tr><tr><td><code>enableVerbatimMode</code></td><td><p><code>boolean</code></p><p>Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental result retrieval, and usage of synonyms including custom ones. Nl interpretation will be disabled if either one of the two flags is true.</p></td></tr><tr><td><code>disableSupplementalResults</code></td><td><p><code>boolean</code></p><p>Use this flag to disable supplemental results for a query. Supplemental results setting chosen at SearchApplication level will take precedence if set to True.</p></td></tr></tbody></table>

## QueryInterpretation

JSON representation

```
{
  "interpretedQuery": string,
  "interpretationType": enum (QueryInterpretation.InterpretationType),
  "reason": enum (QueryInterpretation.Reason),
  "interpretedQueryActualResultCount": integer,
  "interpretedQueryEstimatedResultCount": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>interpretedQuery</code></td><td><p><code>string</code></p><p>The interpretation of the query used in search. For example, queries with natural language intent like "email from john" will be interpreted as "from:john source:mail". This field will not be filled when the reason is NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY.</p></td></tr><tr><td><code>interpretationType</code></td><td><p><code>enum (<code>QueryInterpretation.InterpretationType</code>)</code></p></td></tr><tr><td><code>reason</code></td><td><p><code>enum (<code>QueryInterpretation.Reason</code>)</code></p><p>The reason for interpretation of the query. This field will not be UNSPECIFIED if the interpretation type is not NONE.</p></td></tr><tr><td><code>interpretedQueryActualResultCount</code></td><td><p><code>integer</code></p><p>The actual number of results returned by the interpreted query.</p></td></tr><tr><td><code>interpretedQueryEstimatedResultCount</code></td><td><p><code>string (int64 format)</code></p><p>The estimated number of results returned by the interpreted query.</p></td></tr></tbody></table>

## QueryInterpretation.InterpretationType

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NONE</code></td><td>Neither the natural language interpretation, nor a broader version of the query is used to fetch the search results.</td></tr><tr><td><code>BLEND</code></td><td>The results from original query are blended with other results. The reason for blending these other results with the results from original query is populated in the 'reason' field below.</td></tr><tr><td><code>REPLACE</code></td><td>The results from original query are replaced. The reason for replacing the results from original query is populated in the 'reason' field below.</td></tr></tbody></table>

## QueryInterpretation.Reason

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED</code></td><td></td></tr><tr><td><code>QUERY_HAS_NATURAL_LANGUAGE_INTENT</code></td><td>Natural language interpretation of the query is used to fetch the search results.</td></tr><tr><td><code>NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY</code></td><td>query and document terms similarity is used to selectively broaden the query to retrieve additional search results since enough results were not found for the user query. Interpreted query will be empty for this case.</td></tr></tbody></table>

## SearchResult

Results containing indexed information for a document. Next id: 16

JSON representation

```
{
  "title": string,
  "url": string,
  "snippet": {
    object (Snippet)
  },
  "metadata": {
    object (Metadata)
  },
  "clusteredResults": [
    {
      object (SearchResult)
    }
  ],
  "debugInfo": {
    object (ResultDebugInfo)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>title of the search result.</p></td></tr><tr><td><code>url</code></td><td><p><code>string</code></p><p>The URL of the search result. The URL contains a Google redirect to the actual item. This URL is signed and shouldn't be changed.</p></td></tr><tr><td><code>snippet</code></td><td><p><code>object (<code>Snippet</code>)</code></p><p>The concatenation of all snippets (summaries) available for this result.</p></td></tr><tr><td><code>clusteredResults[]</code></td><td><p><code>object (<code>SearchResult</code>)</code></p><p>If source is clustered, provide list of clustered results. There will only be one level of clustered results. If current source is not enabled for clustering, this field will be empty.</p></td></tr><tr><td><code>debugInfo</code></td><td><p><code>object (<code>ResultDebugInfo</code>)</code></p><p>Debugging information about this search result.</p></td></tr></tbody></table>

## Snippet

Snippet of the search result, which summarizes the content of the resulting page.

JSON representation

```
{
  "snippet": string,
  "matchRanges": [
    {
      object (MatchRange)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>snippet</code></td><td><p><code>string</code></p><p>The snippet of the document. May contain escaped HTML character that should be unescaped prior to rendering.</p></td></tr><tr><td><code>matchRanges[]</code></td><td><p><code>object (<code>MatchRange</code>)</code></p><p>The matched ranges in the snippet.</p></td></tr></tbody></table>

## MatchRange

Matched range of a snippet \[start, end).

JSON representation

```
{
  "start": integer,
  "end": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>start</code></td><td><p><code>integer</code></p><p>Starting position of the match in the snippet.</p></td></tr><tr><td><code>end</code></td><td><p><code>integer</code></p><p>End of the match in the snippet.</p></td></tr></tbody></table>

## Metadata

JSON representation

```
{
  "source": {
    object (Source)
  },
  "mimeType": string,
  "thumbnailUrl": string,
  "owner": {
    object (Person)
  },
  "createTime": string,
  "updateTime": string,
  "fields": [
    {
      object (NamedProperty)
    }
  ],
  "displayOptions": {
    object (ResultDisplayMetadata)
  },
  "objectType": string
}
```

## ResultDisplayMetadata

JSON representation

```
{
  "objectTypeLabel": string,
  "metalines": [
    {
      object (ResultDisplayMetadata.ResultDisplayLine)
    }
  ]
}
```

## ResultDisplayMetadata.ResultDisplayLine

JSON representation

```
{
  "fields": [
    {
      object (ResultDisplayMetadata.ResultDisplayField)
    }
  ]
}
```

## ResultDisplayMetadata.ResultDisplayField

JSON representation

```
{
  "label": string,
  "operatorName": string,
  "property": {
    object (NamedProperty)
  }
}
```

## ResultDebugInfo

Debugging information about the result.

JSON representation

```
{
  "formattedDebugInfo": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>formattedDebugInfo</code></td><td><p><code>string</code></p><p>General debug info formatted for display.</p></td></tr></tbody></table>

## StructuredResult

Structured results that are returned as part of search request.

JSON representation

```
{

  "person": {
    object (Person)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>structured_result</code>.</p><p><code>structured_result</code> can be only one of the following:</p></td></tr><tr><td><code>person</code></td><td><p><code>object (<code>Person</code>)</code></p><p>Representation of a person</p></td></tr></tbody></table>

## SpellResult

JSON representation

```
{
  "suggestedQuery": string,
  "suggestionType": enum (SpellResult.SuggestionType),
  "suggestedQueryHtml": {
    object (SafeHtmlProto)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>suggestedQuery</code></td><td><p><code>string</code></p><p>The suggested spelling of the query.</p></td></tr><tr><td><code>suggestionType</code></td><td><p><code>enum (<code>SpellResult.SuggestionType</code>)</code></p><p>suggestion triggered for the current query.</p></td></tr><tr><td><code>suggestedQueryHtml</code></td><td><p><code>object (<code>SafeHtmlProto</code>)</code></p><p>The sanitized HTML representing the spell corrected query that can be used in the UI. This usually has language-specific tags to mark up parts of the query that are spell checked.</p></td></tr></tbody></table>

## SpellResult.SuggestionType

The type of suggestion triggered for the query.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SUGGESTION_TYPE_UNSPECIFIED</code></td><td>Default spell check type</td></tr><tr><td><code>NON_EMPTY_RESULTS_SPELL_SUGGESTION</code></td><td>Spell suggestion without any results changed. The results are still shown for the original query (which has non zero / results) with a suggestion for spelling that would have results.</td></tr><tr><td><code>ZERO_RESULTS_FULL_PAGE_REPLACEMENT</code></td><td>Spell suggestion triggered when original query has no results. When the original query has no results, and spell suggestion has results we trigger results for the spell corrected query.</td></tr></tbody></table>

## SafeHtmlProto

IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests.

JSON representation

```
{
  "privateDoNotAccessOrElseSafeHtmlWrappedValue": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>privateDoNotAccessOrElseSafeHtmlWrappedValue</code></td><td><p><code>string</code></p><p>IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of.proto file for programming language packages with which to create or read this message.</p></td></tr></tbody></table>

## FacetResult

Source specific facet response

JSON representation

```
{
  "sourceName": string,
  "objectType": string,
  "operatorName": string,
  "buckets": [
    {
      object (FacetBucket)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sourceName</code></td><td><p><code>string</code></p><p>Source name for which facet results are returned. Will not be empty.</p></td></tr><tr><td><code>objectType</code></td><td><p><code>string</code></p><p>Object type for which facet results are returned. Can be empty.</p></td></tr><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions</p></td></tr><tr><td><code>buckets[]</code></td><td><p><code>object (<code>FacetBucket</code>)</code></p><p>FacetBuckets for values in response containing at least a single result with the corresponding filter.</p></td></tr></tbody></table>

## FacetBucket

A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object.

JSON representation

```
{
  "count": integer,
  "percentage": integer,
  "filter": {
    object (Filter)
  },

  "value": {
    object (Value)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>count</code></td><td><p><code>integer</code></p><p>Number of results that match the bucket value. Counts are only returned for searches when count accuracy is ensured. Cloud Search does not guarantee facet counts for any query and facet counts might be present only intermittently, even for identical queries. Do not build dependencies on facet count existence; instead use facet ount percentages which are always returned.</p></td></tr><tr><td><code>percentage</code></td><td><p><code>integer</code></p><p>Percent of results that match the bucket value. The returned value is between (0-100], and is rounded down to an integer if fractional. If the value is not explicitly returned, it represents a percentage value that rounds to 0. Percentages are returned for all searches, but are an estimate. Because percentages are always returned, you should render percentages instead of counts.</p></td></tr><tr><td><code>filter</code></td><td><p><code>object (<code>Filter</code>)</code></p><p>Filter to be passed in the search request if the corresponding bucket is selected.</p></td></tr><tr><td colspan="2">Union field <code>bucket_value</code>. The range or value of the bucket that is faceted <code>bucket_value</code> can be only one of the following:</td></tr><tr><td><code>value</code></td><td><p><code>object (<code>Value</code>)</code></p></td></tr></tbody></table>

## ResponseDebugInfo

Debugging information about the response.

JSON representation

```
{
  "formattedDebugInfo": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>formattedDebugInfo</code></td><td><p><code>string</code></p><p>General debug info formatted for display.</p></td></tr></tbody></table>

## ErrorInfo

Error information about the response.

JSON representation

```
{
  "errorMessages": [
    {
      object (ErrorMessage)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>errorMessages[]</code></td><td><p><code>object (<code>ErrorMessage</code>)</code></p></td></tr></tbody></table>

## ErrorMessage

Error message per source response.

JSON representation

```
{
  "source": {
    object (Source)
  },
  "errorMessage": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>source</code></td><td><p><code>object (<code>Source</code>)</code></p></td></tr><tr><td><code>errorMessage</code></td><td><p><code>string</code></p></td></tr></tbody></table>

## ResultCounts

Result count information

JSON representation

```
{
  "sourceResultCounts": [
    {
      object (SourceResultCount)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sourceResultCounts[]</code></td><td><p><code>object (<code>SourceResultCount</code>)</code></p><p>Result count information for each source with results.</p></td></tr></tbody></table>

## SourceResultCount

Per source result count information.

JSON representation

```
{
  "source": {
    object (Source)
  },
  "hasMoreResults": boolean,

  "resultCountEstimate": string,
  "resultCountExact": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>source</code></td><td><p><code>object (<code>Source</code>)</code></p><p>The source the result count information is associated with.</p></td></tr><tr><td><code>hasMoreResults</code></td><td><p><code>boolean</code></p><p>Whether there are more search results for this source.</p></td></tr><tr><td colspan="2"><p>Union field <code>result_count</code>.</p><p><code>result_count</code> can be only one of the following:</p></td></tr><tr><td><code>resultCountEstimate</code></td><td><p><code>string (int64 format)</code></p><p>The estimated result count for this source.</p></td></tr><tr><td><code>resultCountExact</code></td><td><p><code>string (int64 format)</code></p><p>The exact result count for this source.</p></td></tr></tbody></table>
