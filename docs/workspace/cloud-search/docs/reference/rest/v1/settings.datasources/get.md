---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.datasources/get
root: workspace
fetched_at: 2026-04-23T15:26:17.773Z
---

# Method: settings.datasources.get

## Method: settings.datasources.get

Gets a datasource.

**Note:** This API requires an admin account to execute.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/settings/{name=datasources/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the datasource resource. Format: datasources/{sourceId}.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
