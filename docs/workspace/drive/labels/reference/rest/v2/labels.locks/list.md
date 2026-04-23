---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels.locks/list
root: workspace
fetched_at: 2026-04-23T15:28:08.726Z
---

# Method: labels.locks.list

Lists the label locks on a label.

### HTTP request

`GET https://drivelabels.googleapis.com/v2/{parent=labels/*}/locks`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. Label on which locks are applied. Format: <code>labels/{label}</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of locks to return per page. Default: 100. Max: 200.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token of the page to return.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `ListLabelLocksResponse`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.labels.readonly`
- `           https://www.googleapis.com/auth/drive.admin.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
