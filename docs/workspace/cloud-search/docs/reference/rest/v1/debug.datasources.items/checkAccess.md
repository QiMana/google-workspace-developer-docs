---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/debug.datasources.items/checkAccess
root: workspace
fetched_at: 2026-04-23T15:26:13.737Z
---

# Method: debug.datasources.items.checkAccess

Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported.

**Note:** This API requires an admin account to execute.

### HTTP request

`POST https://cloudsearch.googleapis.com/v1/debug/{name=datasources/*/items/*}:checkAccess`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Item name, format: datasources/{sourceId}/items/{itemId}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `Principal`.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "hasAccess": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>hasAccess</code></td><td><p><code>boolean</code></p><p>Returns true if principal has access. Returns false otherwise.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.debug`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
