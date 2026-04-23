---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/children/get
root: workspace
fetched_at: 2026-04-23T15:27:51.177Z
---

# Method: children.get

Gets a specific child reference.

### HTTP request

`GET https://www.googleapis.com/drive/v2/files/{folderId}/children/{childId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>folderId</code></td><td><p><code>string</code></p><p>The ID of the folder.</p></td></tr><tr><td><code>childId</code></td><td><p><code>string</code></p><p>The ID of the child.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.photos.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
