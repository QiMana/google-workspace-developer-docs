---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/revisions/update
root: workspace
fetched_at: 2026-04-23T15:28:06.746Z
---

# Method: revisions.update

Updates a revision with patch semantics. For more information, see [Manage file revisions](../../../../guides/manage-revisions.md).

### HTTP request

`PATCH https://www.googleapis.com/drive/v3/files/{fileId}/revisions/{revisionId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr><tr><td><code>revisionId</code></td><td><p><code>string</code></p><p>The ID of the revision.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
