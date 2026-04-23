---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/files/copy
root: workspace
fetched_at: 2026-04-23T15:27:52.819Z
---

# Method: files.copy

Creates a copy of the specified file.

### HTTP request

`POST https://www.googleapis.com/drive/v2/files/{fileId}/copy`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file to copy.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>convert</code></td><td><p><code>boolean</code></p><p>Whether to convert this file to the corresponding Docs Editors format.</p></td></tr><tr><td><code>enforceSingleParent<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead.</p></td></tr><tr><td><code>ocr</code></td><td><p><code>boolean</code></p><p>Whether to attempt OCR on.jpg,.png,.gif, or.pdf uploads.</p></td></tr><tr><td><code>ocrLanguage</code></td><td><p><code>string</code></p><p>If <code>ocr</code> is true, hints at the language to use. Valid values are BCP 47 codes.</p></td></tr><tr><td><code>pinned</code></td><td><p><code>boolean</code></p><p>Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>timedTextLanguage</code></td><td><p><code>string</code></p><p>The language of the timed text.</p></td></tr><tr><td><code>timedTextTrackName</code></td><td><p><code>string</code></p><p>The timed text track name.</p></td></tr><tr><td><code>visibility</code></td><td><p><code>enum (<code>Visibility</code>)</code></p><p>The visibility of the new file. Permissions are still inherited from parent folders. This parameter is only relevant when the source is not a Google Doc file and when <code>convert=false</code>.</p></td></tr><tr><td><code>includePermissionsForView</code></td><td><p><code>string</code></p><p>Specifies which additional view's permissions to include in the response. Only <code>published</code> is supported.</p></td></tr><tr><td><code>includeLabels</code></td><td><p><code>string</code></p><p>A comma-separated list of IDs of labels to include in the <code>labelInfo</code> part of the response.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.apps.readonly`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.photos.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
