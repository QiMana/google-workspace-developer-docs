---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/permissions/getIdForEmail
root: workspace
fetched_at: 2026-04-23T15:27:55.994Z
---

# Method: permissions.getIdForEmail

Returns the permission ID for an email address.

### HTTP request

`GET https://www.googleapis.com/drive/v2/permissionIds/{email}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>The email address for which to return a permission ID</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

An ID for a user or group as seen in Permission items.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>drive#permissionId</code>.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The permission ID.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.apps.readonly`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.photos.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
