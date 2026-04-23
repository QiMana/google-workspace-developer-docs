---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2beta/labels.revisions.permissions/create
root: workspace
fetched_at: 2026-04-23T15:28:17.413Z
---

# Method: labels.revisions.permissions.create

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### HTTP request

`POST https://drivelabels.googleapis.com/v2beta/{parent=labels/*/revisions/*}/permissions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent Label resource name on the Label Permission is created. Format: labels/{label}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Set to <code>true</code> in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `LabelPermission`.

### Response body

If successful, the response body contains a newly created instance of `LabelPermission`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
