---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources/getSchema
root: workspace
fetched_at: 2026-04-23T15:26:15.821Z
---

# Method: indexing.datasources.getSchema

## Method: indexing.datasources.getSchema

Gets the schema of a data source.

**Note:** This API requires an admin or service account to execute.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/indexing/{name=datasources/*}/schema`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the data source to get Schema. Format: datasources/{sourceId}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `Schema`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
