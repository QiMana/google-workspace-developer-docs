---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/get
root: workspace
fetched_at: 2026-04-23T15:26:14.315Z
---

# Method: indexing.datasources.items.get

## Method: indexing.datasources.items.get

This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/indexing/{name=datasources/*/items/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the item to get info. Format: datasources/{sourceId}/items/{itemId}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>connectorName</code></td><td><p><code>string</code></p><p>The name of connector making this call.</p><p>Format: datasources/{sourceId}/connectors/{id}</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.indexing`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
