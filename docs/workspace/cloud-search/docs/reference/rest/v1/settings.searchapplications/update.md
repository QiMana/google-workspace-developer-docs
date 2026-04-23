---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.searchapplications/update
root: workspace
fetched_at: 2026-04-23T15:26:19.084Z
---

# Method: settings.searchapplications.update

## Method: settings.searchapplications.update

Updates a search application.

**Note:** This API requires an admin account to execute.

### HTTP request

`PUT https://cloudsearch.googleapis.com/v1/settings/{searchApplication.name=searchapplications/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>searchApplication.name</code></td><td><p><code>string</code></p><p>The name of the Search Application.</p><p>Format: searchapplications/{applicationId}.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Only applies to <a href="https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch"><code>settings.searchapplications.patch</code></a>.</p><p>Update mask to control which fields to update. Example field paths: <code>searchApplication.name</code>, <code>searchApplication.displayName</code>.</p><ul><li>If <code>updateMask</code> is non-empty, then only the fields specified in the <code>updateMask</code> are updated.</li><li>If you specify a field in the <code>updateMask</code>, but don't specify its value in the <code>searchApplication</code>, then that field is cleared.</li><li>If the <code>updateMask</code> is not present or empty or has the value <code>*</code>, then all fields are updated.</li></ul></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains an instance of `Operation`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.query`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
