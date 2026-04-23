---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/debug.identitysources.items/listForunmappedidentity
root: workspace
fetched_at: 2026-04-23T15:26:13.648Z
---

# Method: debug.identitysources.items.listForunmappedidentity

Lists names of items associated with an unmapped identity.

**Note:** This API requires an admin account to execute.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/debug/{parent=identitysources/*}/items:forunmappedidentity`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>The name of the identity source, in the following format: identitysources/{sourceId}}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The nextPageToken value returned from a previous List request, if any.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of items to fetch in a request. Defaults to 100.</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr><tr><td colspan="2"><p>Union parameter <code>identity_id</code>.</p><p><code>identity_id</code> can be only one of the following:</p></td></tr><tr><td><code>userResourceName</code></td><td><p><code>string</code></p></td></tr><tr><td><code>groupResourceName</code></td><td><p><code>string</code></p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "itemNames": [
    string
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>itemNames[]</code></td><td><p><code>string</code></p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results, or empty if there are no more results in the list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.debug`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
