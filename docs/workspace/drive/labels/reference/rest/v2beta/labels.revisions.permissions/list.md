---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2beta/labels.revisions.permissions/list
root: workspace
fetched_at: 2026-04-23T15:28:17.626Z
---

# Method: labels.revisions.permissions.list

Lists a Label's permissions.

### HTTP request

`GET https://drivelabels.googleapis.com/v2beta/{parent=labels/*/revisions/*}/permissions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Set to <code>true</code> in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of permissions to return per page. Default: 50. Max: 200.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token of the page to return.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `ListLabelPermissionsResponse`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.labels.readonly`
- `           https://www.googleapis.com/auth/drive.admin.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
