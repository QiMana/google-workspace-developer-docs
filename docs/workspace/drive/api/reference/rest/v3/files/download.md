---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/files/download
root: workspace
fetched_at: 2026-04-23T15:28:04.465Z
---

# Method: files.download

Downloads the content of a file. For more information, see [Download and export files](../../../../guides/manage-downloads.md).

Operations are valid for 24 hours from the time of creation.

### HTTP request

`POST https://www.googleapis.com/drive/v3/files/{fileId}/download`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the file to download.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>Optional. The MIME type the file should be downloaded as. This field can only be set when downloading Google Workspace documents. For a list of supported MIME types, see <a href="https://developers.google.com/workspace/drive/api/guides/ref-export-formats">Export MIME types for Google Workspace documents</a>. If not set, a Google Workspace document is downloaded with a default MIME type. The default MIME type might change in the future.</p></td></tr><tr><td><code>revisionId</code></td><td><p><code>string</code></p><p>Optional. The revision ID of the file to download. This field can only be set when downloading blob files, Google Docs, and Google Sheets. Returns <code>INVALID_ARGUMENT</code> if downloading a specific revision on the file is unsupported.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `Operation`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
