---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds/list
root: workspace
fetched_at: 2026-04-23T15:32:07.599Z
---

# Method: matters.holds.list

Lists the holds in a matter.

### HTTP request

`GET https://vault.googleapis.com/v1/matters/{matterId}/holds`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as <strong>pageSize</strong> = 100.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The pagination token as returned in the response. An empty token means start from the beginning.</p></td></tr><tr><td><code>view</code></td><td><p><code>enum (<code>HoldView</code>)</code></p><p>The amount of detail to return for a hold.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The holds for a matter.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "holds": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>holds[]</code></td><td><p>The list of holds.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Page token to retrieve the next page of results in the list. If this is empty, then there are no more holds to list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/ediscovery.readonly`
- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
