---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/comments/insert
root: workspace
fetched_at: 2026-04-23T15:27:50.591Z
---

# Method: comments.insert

## Method: comments.insert

Creates a new comment on the given file.

### HTTP request

`POST https://www.googleapis.com/drive/v2/files/{fileId}/comments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
