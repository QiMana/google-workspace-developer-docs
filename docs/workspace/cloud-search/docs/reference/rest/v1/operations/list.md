---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/operations/list
root: workspace
fetched_at: 2026-04-23T15:26:16.017Z
---

# Method: operations.list

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/{name=operations/**}/lro`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the operation's parent resource.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>filter</code></td><td><p><code>string</code></p><p>The standard list filter.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The standard list page size.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The standard list page token.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The response message for `Operations.ListOperations`.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "operations": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operations[]</code></td><td><p>A list of operations that matches the specified filter in the request.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The standard List next-page token.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.indexing`
- `https://www.googleapis.com/auth/cloud_search.debug`
- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
- `https://www.googleapis.com/auth/cloud_search.settings.query`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
