---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/files/export
root: workspace
fetched_at: 2026-04-23T15:28:03.844Z
---

# Method: files.export

Exports a Google Workspace document to the requested MIME type and returns exported byte content. For more information, see [Download and export files](../../../../guides/manage-downloads.md).

Note that the exported content is limited to 10 MB.

### HTTP request

`GET https://www.googleapis.com/drive/v3/files/{fileId}/export`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>Required. The MIME type of the format requested for this export. For a list of supported MIME types, see <a href="https://developers.google.com/workspace/drive/api/guides/ref-export-formats">Export MIME types for Google Workspace documents</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, this method returns the file content as bytes.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
