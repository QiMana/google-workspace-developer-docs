---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters/list
root: workspace
fetched_at: 2026-04-23T15:32:08.693Z
---

# Method: matters.list

Lists matters the requestor has access to.

### HTTP request

`GET https://vault.googleapis.com/v1/matters`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The number of matters to return in the response. Default and maximum are 100.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The pagination token as returned in the response.</p></td></tr><tr><td><code>view</code></td><td><p><code>enum (<code>MatterView</code>)</code></p><p>Specifies how much information about the matter to return in response.</p></td></tr><tr><td><code>state</code></td><td><p>If set, lists only matters with the specified state. The default lists matters of all states.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Provides the list of matters.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "matters": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>matters[]</code></td><td><p>List of matters.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Page token to retrieve the next page of results in the list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/ediscovery.readonly`
- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
