---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.savedQueries/list
root: workspace
fetched_at: 2026-04-23T15:32:07.884Z
---

# Method: matters.savedQueries.list

Lists the saved queries in a matter.

### HTTP request

`GET https://vault.googleapis.com/v1/matters/{matterId}/savedQueries`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The ID of the matter to get the saved queries for.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of saved queries to return.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The pagination token as returned in the previous response. An empty token means start from the beginning.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Definition of the response for method ListSaveQuery.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "savedQueries": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>savedQueries[]</code></td><td><p>List of saved queries.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Page token to retrieve the next page of results in the list. If this is empty, then there are no more saved queries to list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/ediscovery.readonly`
- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
