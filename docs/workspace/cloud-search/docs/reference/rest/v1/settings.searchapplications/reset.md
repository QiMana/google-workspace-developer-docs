---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.searchapplications/reset
root: workspace
fetched_at: 2026-04-23T15:26:18.671Z
---

# Method: settings.searchapplications.reset

Resets a search application to default settings. This will return an empty response.

**Note:** This API requires an admin account to execute.

### HTTP request

`POST https://cloudsearch.googleapis.com/v1/settings/{name=searchapplications/*}:reset`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the search application to be reset.</p><p>Format: applications/{applicationId}.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "debugOptions": {
    object (DebugOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains an instance of `Operation`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.query`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
