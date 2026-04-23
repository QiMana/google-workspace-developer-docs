---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/query/suggest
root: workspace
fetched_at: 2026-04-23T15:26:17.299Z
---

# Method: query.suggest

Provides suggestions for autocompleting the query.

**Note:** This API requires a standard end user account to execute. A service account can't perform query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/workspace/cloud-search/docs/guides/delegation/).

### HTTP request

`POST https://cloudsearch.googleapis.com/v1/query/suggest`

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
  "dataSourceRestrictions": [
    {
      object (DataSourceRestriction)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requestOptions</code></td><td><p><code>object (<code>RequestOptions</code>)</code></p><p>Request options, such as the search application and user timezone.</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Partial query for which autocomplete suggestions will be shown. For example, if the query is "sea", then the server might return "season", "search", "seagull" and so on.</p></td></tr><tr><td><code>dataSourceRestrictions[]</code></td><td><p><code>object (<code>DataSourceRestriction</code>)</code></p><p>The sources to use for suggestions. If not specified, the data sources are taken from the current search application.</p><p>NOTE: Suggestions are only supported for the following sources:</p><ul><li>Third-party data sources</li><li>PredefinedSource.PERSON</li><li>PredefinedSource.GOOGLE_DRIVE</li></ul></td></tr></tbody></table>

### Response body

Response of the suggest API.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "suggestResults": [
    {
      object (SuggestResult)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>suggestResults[]</code></td><td><p><code>object (<code>SuggestResult</code>)</code></p><p>List of suggestions.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.query`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## SuggestResult

One suggestion result.

JSON representation

```
{
  "suggestedQuery": string,
  "source": {
    object (Source)
  },

  "querySuggestion": {
    object (QuerySuggestion)
  },
  "peopleSuggestion": {
    object (PeopleSuggestion)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>suggestedQuery</code></td><td><p><code>string</code></p><p>The suggested query that will be used for search, when the user clicks on the suggestion</p></td></tr><tr><td><code>source</code></td><td><p><code>object (<code>Source</code>)</code></p><p>The source of the suggestion.</p></td></tr><tr><td colspan="2">Union field <code>suggestion</code>. Contains additional metadata about the suggested query. It also indicates the type of the suggested query. For e.g. if PeopleSuggestion is present, it indicates that suggested_query is a person suggestion. <code>suggestion</code> can be only one of the following:</td></tr><tr><td><code>querySuggestion</code></td><td><p><code>object (<code>QuerySuggestion</code>)</code></p><p>This field will be present if the suggested query is a word/phrase completion.</p></td></tr><tr><td><code>peopleSuggestion</code></td><td><p><code>object (<code>PeopleSuggestion</code>)</code></p><p>This is present when the suggestion indicates a person. It contains more information about the person - like their email id, name etc.</p></td></tr></tbody></table>

## QuerySuggestion

This type has no fields.

This field does not contain anything as of now and is just used as an indicator that the suggest result was a phrase completion.

## PeopleSuggestion

This field contains information about the person being suggested.

JSON representation

```
{
  "person": {
    object (Person)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>person</code></td><td><p><code>object (<code>Person</code>)</code></p><p>Suggested person. All fields of the person object might not be populated.</p></td></tr></tbody></table>
