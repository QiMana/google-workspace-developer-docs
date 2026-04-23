---
source: https://developers.google.com/workspace/keep/api/reference/rest/v1/notes.permissions/batchCreate
root: workspace
fetched_at: 2026-04-23T15:30:08.852Z
---

# Method: notes.permissions.batchCreate

Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.

### HTTP request

`POST https://keep.googleapis.com/v1/{parent=notes/*}/permissions:batchCreate`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>The parent resource shared by all Permissions being created. Format: <code>notes/{note}</code> If this is set, the parent field in the CreatePermission messages must either be empty or match this field.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "requests": [
    {
      object (CreatePermissionRequest)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requests[]</code></td><td><p><code>object (<code>CreatePermissionRequest</code>)</code></p><p>The request message specifying the resources to create.</p></td></tr></tbody></table>

### Response body

The response for creating permissions on a note.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "permissions": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>permissions[]</code></td><td><p>Permissions created.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/keep`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## CreatePermissionRequest

The request to add a single permission on the note.

JSON representation

```
{
  "parent": string,
  "permission": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent note where this permission will be created. Format: <code>notes/{note}</code></p></td></tr><tr><td><code>permission</code></td><td><p>Required. The permission to create. One of Permission.email, User.email or Group.email must be supplied.</p></td></tr></tbody></table>
