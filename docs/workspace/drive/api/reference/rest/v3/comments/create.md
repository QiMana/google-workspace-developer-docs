---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/comments/create
root: workspace
fetched_at: 2026-04-23T15:28:00.830Z
---

# Method: comments.create

## Method: comments.create

Creates a comment on a file. For more information, see [Manage comments and replies](../../../../guides/manage-comments.md).

Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](../../../../guides/fields-parameter.md).

### HTTP request

`POST https://www.googleapis.com/drive/v3/files/{fileId}/comments`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
