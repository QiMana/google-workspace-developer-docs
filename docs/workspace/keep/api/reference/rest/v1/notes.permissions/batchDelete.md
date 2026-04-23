---
source: https://developers.google.com/workspace/keep/api/reference/rest/v1/notes.permissions/batchDelete
root: workspace
fetched_at: 2026-04-23T15:30:08.918Z
---

# Method: notes.permissions.batchDelete

Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.

### HTTP request

`POST https://keep.googleapis.com/v1/{parent=notes/*}/permissions:batchDelete`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>The parent resource shared by all permissions being deleted. Format: <code>notes/{note}</code> If this is set, the parent of all of the permissions specified in the DeletePermissionRequest messages must match this field.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "names": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>names[]</code></td><td><p><code>string</code></p><p>Required. The names of the permissions to delete. Format: <code>notes/{note}/permissions/{permission}</code></p></td></tr></tbody></table>

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/keep`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
