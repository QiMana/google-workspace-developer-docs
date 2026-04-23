---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources/updateSchema
root: workspace
fetched_at: 2026-04-23T15:26:15.760Z
---

# Method: indexing.datasources.updateSchema

Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema.

**Note:** This API requires an admin or service account to execute.

### HTTP request

`PUT https://cloudsearch.googleapis.com/v1/indexing/{name=datasources/*}/schema`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the data source to update Schema. Format: datasources/{sourceId}</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "validateOnly": boolean,
  "schema": {
    object (Schema)
  },
  "debugOptions": {
    object (DebugOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>validateOnly</code></td><td><p><code>boolean</code></p><p>If true, the schema will be checked for validity, but will not be registered with the data source, even if valid.</p></td></tr><tr><td><code>schema</code></td><td><p><code>object (<code>Schema</code>)</code></p><p>The new schema for the source.</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains an instance of `Operation`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
