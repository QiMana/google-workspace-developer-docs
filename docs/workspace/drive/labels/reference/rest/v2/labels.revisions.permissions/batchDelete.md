---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels.revisions.permissions/batchDelete
root: workspace
fetched_at: 2026-04-23T15:28:10.885Z
---

# Method: labels.revisions.permissions.batchDelete

Deletes label permissions. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

### HTTP request

`POST https://drivelabels.googleapis.com/v2/{parent=labels/*/revisions/*}/permissions:batchDelete`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent label resource name shared by all permissions being deleted. Format: <code>labels/{label}</code>. If this is set, the parent field in the <code>UpdateLabelPermissionRequest</code> messages must either be empty or match this field.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "requests": [
    {
      object (DeleteLabelPermissionRequest)
    }
  ],
  "useAdminAccess": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requests[]</code></td><td><p><code>object (<code>DeleteLabelPermissionRequest</code>)</code></p><p>Required. The request message specifying the resources to update.</p></td></tr><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Set to <code>true</code> in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. If this is set, the <code>useAdminAccess</code> field in the <code>DeleteLabelPermissionRequest</code> messages must either be empty or match this field.</p></td></tr></tbody></table>

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
