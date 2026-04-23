---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2beta/labels.revisions.permissions/batchUpdate
root: workspace
fetched_at: 2026-04-23T15:28:16.561Z
---

# Method: labels.revisions.permissions.batchUpdate

Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### HTTP request

`POST https://drivelabels.googleapis.com/v2beta/{parent=labels/*/revisions/*}/permissions:batchUpdate`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "requests": [
    {
      object (UpdateLabelPermissionRequest)
    }
  ],
  "useAdminAccess": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requests[]</code></td><td><p><code>object (<code>UpdateLabelPermissionRequest</code>)</code></p><p>Required. The request message specifying the resources to update.</p></td></tr><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Set to <code>true</code> in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the useAdminAccess field in the UpdateLabelPermissionRequest messages must either be empty or match this field.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains an instance of `BatchUpdateLabelPermissionsResponse`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
