---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.searchapplications/delete
root: workspace
fetched_at: 2026-04-23T15:26:18.735Z
---

# Method: settings.searchapplications.delete

## Method: settings.searchapplications.delete

Deletes a search application.

**Note:** This API requires an admin account to execute.

### HTTP request

`DELETE https://cloudsearch.googleapis.com/v1/settings/{name=searchapplications/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the search application to be deleted.</p><p>Format: applications/{applicationId}.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `Operation`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.query`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
