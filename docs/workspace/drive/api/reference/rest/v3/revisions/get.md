---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/revisions/get
root: workspace
fetched_at: 2026-04-23T15:28:06.868Z
---

# Method: revisions.get

Gets a revision's metadata or content by ID. For more information, see [Manage file revisions](../../../../guides/manage-revisions.md).

### HTTP request

`GET https://www.googleapis.com/drive/v3/files/{fileId}/revisions/{revisionId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr><tr><td><code>revisionId</code></td><td><p><code>string</code></p><p>The ID of the revision.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>acknowledgeAbuse</code></td><td><p><code>boolean</code></p><p>Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the <code>alt</code> parameter is set to <code>media</code> and the user is the owner of the file or an organizer of the shared drive in which the file resides.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.photos.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
