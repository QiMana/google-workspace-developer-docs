---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/files/insert
root: workspace
fetched_at: 2026-04-23T15:27:53.442Z
---

# Method: files.insert

Inserts a new file.

This method supports an **/upload** URI and accepts uploaded media with the following characteristics:

- **Maximum file size:** 5,120 GB
- **Accepted Media MIME types:**`*/*`

Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded.

For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads).

Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`.

Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"title": "cat.jpg"` in the metadata.

Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.

### HTTP request

- Upload URI, for media upload requests:  
	`POST https://www.googleapis.com/upload/drive/v2/files`
- Metadata URI, for metadata-only requests:  
	`POST https://www.googleapis.com/drive/v2/files`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>convert</code></td><td><p><code>boolean</code></p><p>Whether to convert this file to the corresponding Docs Editors format.</p></td></tr><tr><td><code>enforceSingleParent<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Creating files in multiple folders is no longer supported.</p></td></tr><tr><td><code>ocr</code></td><td><p><code>boolean</code></p><p>Whether to attempt OCR on.jpg,.png,.gif, or.pdf uploads.</p></td></tr><tr><td><code>ocrLanguage</code></td><td><p><code>string</code></p><p>If ocr is true, hints at the language to use. Valid values are BCP 47 codes.</p></td></tr><tr><td><code>pinned</code></td><td><p><code>boolean</code></p><p>Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>timedTextLanguage</code></td><td><p><code>string</code></p><p>The language of the timed text.</p></td></tr><tr><td><code>timedTextTrackName</code></td><td><p><code>string</code></p><p>The timed text track name.</p></td></tr><tr><td><code>uploadType</code></td><td><p><code>string</code></p><p>The type of upload request to the <code>/upload</code> URI. If you are uploading data with an <code>/upload</code> URI, this field is required. If you are creating a metadata-only file, this field isn't required. Additionally, this field isn't shown in the "Try this method" widget because the widget doesn't support data uploads.</p><p>Acceptable values are:</p><ul><li><code>media</code> - <a href="https://developers.google.com/drive/api/guides/manage-uploads#simple">Simple upload</a>. Upload the media only, without any metadata.</li><li><code>multipart</code> - <a href="https://developers.google.com/drive/api/guides/manage-uploads#multipart">Multipart upload</a>. Upload both the media and its metadata, in a single request.</li><li><code>resumable</code> - <a href="https://developers.google.com/drive/api/guides/manage-uploads#resumable">Resumable upload</a>. Upload the file in a resumable fashion, using a series of at least two requests where the first request includes the metadata.</li></ul></td></tr><tr><td><code>useContentAsIndexableText</code></td><td><p><code>boolean</code></p><p>Whether to use the content as indexable text.</p></td></tr><tr><td><code>visibility</code></td><td><p><code>enum (<code>Visibility</code>)</code></p><p>The visibility of the new file. Permissions are still inherited from parent folders. This parameter is only relevant when <code>convert=false</code>.</p></td></tr><tr><td><code>includePermissionsForView</code></td><td><p><code>string</code></p><p>Specifies which additional view's permissions to include in the response. Only <code>published</code> is supported.</p></td></tr><tr><td><code>includeLabels</code></td><td><p><code>string</code></p><p>A comma-separated list of IDs of labels to include in the <code>labelInfo</code> part of the response.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.apps.readonly`
- `           https://www.googleapis.com/auth/drive.file`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
