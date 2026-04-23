---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/delete
root: workspace
fetched_at: 2026-04-23T15:26:14.131Z
---

# Method: indexing.datasources.items.delete

## Method: indexing.datasources.items.delete

Deletes for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### HTTP request

`DELETE https://cloudsearch.googleapis.com/v1/indexing/{name=datasources/*/items/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The name of the item to delete. Format: datasources/{sourceId}/items/{itemId}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>version</code></td><td><p><code>string (bytes format)</code></p><p>Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering.</p><p>Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes.</p><p>For information on how item version affects the deletion process, refer to <a href="https://developers.google.com/workspace/cloud-search/docs/guides/operations">Handle revisions after manual deletes</a>.</p><p>A base64-encoded string.</p></td></tr><tr><td><code>connectorName</code></td><td><p><code>string</code></p><p>The name of connector making this call.</p><p>Format: datasources/{sourceId}/connectors/{id}</p></td></tr><tr><td><code>mode</code></td><td><p><code>enum (<code>RequestMode.Mode</code>)</code></p><p>Required. The RequestMode for this request.</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `Operation`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.indexing`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
