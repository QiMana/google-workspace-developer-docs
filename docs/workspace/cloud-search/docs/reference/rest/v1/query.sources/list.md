---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/query.sources/list
root: workspace
fetched_at: 2026-04-23T15:26:17.192Z
---

# Method: query.sources.list

Returns list of sources that user can use for Search and Suggest APIs.

**Note:** This API requires a standard end user account to execute. A service account can't perform query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](../../../../guides/delegation.md).

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/query/sources`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>requestOptions</code></td><td><p><code>object (<code>RequestOptions</code>)</code></p><p>Request options, such as the search application and user timezone.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Number of sources to return in the response.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

List sources response.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "sources": [
    {
      object (QuerySource)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sources[]</code></td><td><p><code>object (<code>QuerySource</code>)</code></p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.query`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## QuerySource

List of sources that the user can search using the query API.

JSON representation

```
{
  "source": {
    object (Source)
  },
  "shortName": string,
  "displayName": string,
  "operators": [
    {
      object (QueryOperator)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>source</code></td><td><p><code>object (<code>Source</code>)</code></p><p>The name of the source</p></td></tr><tr><td><code>shortName</code></td><td><p><code>string</code></p><p>A short name or alias for the source. This value can be used with the 'source' operator.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Display name of the data source.</p></td></tr><tr><td><code>operators[]</code></td><td><p><code>object (<code>QueryOperator</code>)</code></p><p>List of all operators applicable for this source.</p></td></tr></tbody></table>

## QueryOperator

The definition of a operator that can be used in a Search/query.suggest request.

JSON representation

```
{
  "operatorName": string,
  "lessThanOperatorName": string,
  "greaterThanOperatorName": string,
  "type": enum (QueryOperator.Type),
  "displayName": string,
  "isSortable": boolean,
  "isFacetable": boolean,
  "isReturnable": boolean,
  "isRepeatable": boolean,
  "isSuggestable": boolean,
  "enumValues": [
    string
  ],
  "objectType": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>The name of the operator.</p></td></tr><tr><td><code>lessThanOperatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name that can be used to isolate the property using the less-than operator.</p></td></tr><tr><td><code>greaterThanOperatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name that can be used to isolate the property using the greater-than operator.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>QueryOperator.Type</code>)</code></p><p>The type of the operator.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Display name of the operator</p></td></tr><tr><td><code>isSortable</code></td><td><p><code>boolean</code></p><p>Can this operator be used to sort results.</p></td></tr><tr><td><code>isFacetable</code></td><td><p><code>boolean</code></p><p>Can this operator be used to get facets.</p></td></tr><tr><td><code>isReturnable</code></td><td><p><code>boolean</code></p><p>Will the property associated with this facet be returned as part of search results.</p></td></tr><tr><td><code>isRepeatable</code></td><td><p><code>boolean</code></p><p>Indicates if multiple values can be set for this property.</p></td></tr><tr><td><code>isSuggestable</code></td><td><p><code>boolean</code></p><p>Can get suggestions for this field.</p></td></tr><tr><td><code>enumValues[]</code></td><td><p><code>string</code></p><p>Potential list of values for the opeatror field. This field is only filled when we can safely enumerate all the possible values of this operator.</p></td></tr><tr><td><code>objectType</code></td><td><p><code>string</code></p><p>The name of the object corresponding to the operator. This field is only filled for schema-specific operators, and is unset for common operators.</p></td></tr></tbody></table>

## QueryOperator.Type

The type of the property referred by the operator.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN</code></td><td>Invalid value.</td></tr><tr><td><code>INTEGER</code></td><td></td></tr><tr><td><code>DOUBLE</code></td><td></td></tr><tr><td><code>BOOLEAN</code></td><td></td></tr><tr><td><code>ENUM</code></td><td></td></tr><tr><td><code>DATE</code></td><td></td></tr><tr><td><code>TEXT</code></td><td></td></tr><tr><td><code>HTML</code></td><td></td></tr></tbody></table>
