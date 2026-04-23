---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/files/update
root: workspace
fetched_at: 2026-04-23T15:28:05.428Z
---

# Method: files.update

Updates a file's metadata, content, or both.

When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics.

This method supports an **/upload** URI and accepts uploaded media with the following characteristics:

- **Maximum file size:** 5,120 GB
- **Accepted Media MIME types:** `*/*`
	(Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](../../../../guides/mime-types.md).)

For more information on uploading files, see [Upload file data](../../../../guides/manage-uploads.md).

### HTTP request

- Upload URI, for media upload requests:  
	`PATCH https://www.googleapis.com/upload/drive/v3/files/{fileId}`
- Metadata URI, for metadata-only requests:  
	`PATCH https://www.googleapis.com/drive/v3/files/{fileId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>addParents</code></td><td><p><code>string</code></p><p>A comma-separated list of parent IDs to add.</p></td></tr><tr><td><code>enforceSingleParent<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead.</p></td></tr><tr><td><code>keepRevisionForever</code></td><td><p><code>boolean</code></p><p>Whether to set the <code>keepForever</code> field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.</p></td></tr><tr><td><code>ocrLanguage</code></td><td><p><code>string</code></p><p>A language hint for OCR processing during image import (ISO 639-1 code).</p></td></tr><tr><td><code>removeParents</code></td><td><p><code>string</code></p><p>A comma-separated list of parent IDs to remove.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>uploadType</code></td><td><p><code>string</code></p><p>The type of upload request to the <code>/upload</code> URI. If you are uploading data with an <code>/upload</code> URI, this field is required. If you are creating a metadata-only file, this field isn't required. Additionally, this field isn't shown in the "Try this method" widget because the widget doesn't support data uploads.</p><p>Acceptable values are:</p><ul><li><code>media</code> - <a href="https://developers.google.com/drive/api/guides/manage-uploads#simple">Simple upload</a>. Upload the media only, without any metadata.</li><li><code>multipart</code> - <a href="https://developers.google.com/drive/api/guides/manage-uploads#multipart">Multipart upload</a>. Upload both the media and its metadata, in a single request.</li><li><code>resumable</code> - <a href="https://developers.google.com/drive/api/guides/manage-uploads#resumable">Resumable upload</a>. Upload the file in a resumable fashion, using a series of at least two requests where the first request includes the metadata.</li></ul></td></tr><tr><td><code>useContentAsIndexableText</code></td><td><p><code>boolean</code></p><p>Whether to use the uploaded content as indexable text.</p></td></tr><tr><td><code>includePermissionsForView</code></td><td><p><code>string</code></p><p>Specifies which additional view's permissions to include in the response. Only <code>published</code> is supported.</p></td></tr><tr><td><code>includeLabels</code></td><td><p><code>string</code></p><p>A comma-separated list of IDs of labels to include in the <code>labelInfo</code> part of the response.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.scripts`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
