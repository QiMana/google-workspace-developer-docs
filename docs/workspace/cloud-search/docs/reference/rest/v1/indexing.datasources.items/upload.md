---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/upload
root: workspace
fetched_at: 2026-04-23T15:26:15.498Z
---

# Method: indexing.datasources.items.upload

Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content within an `index` request.

This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### HTTP request

`POST https://cloudsearch.googleapis.com/v1/indexing/{name=datasources/*/items/*}:upload`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the Item to start a resumable upload. Format: datasources/{sourceId}/items/{itemId}. The maximum length is 1536 bytes.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "connectorName": string,
  "debugOptions": {
    object (DebugOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>connectorName</code></td><td><p><code>string</code></p><p>The name of connector making this call.</p><p>Format: datasources/{sourceId}/connectors/{id}</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.indexing`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
