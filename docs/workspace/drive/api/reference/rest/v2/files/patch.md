---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/files/patch
root: workspace
fetched_at: 2026-04-23T15:27:53.639Z
---

# Method: files.patch

Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.

### HTTP request

`PATCH https://www.googleapis.com/drive/v2/files/{fileId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file to update.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>addParents</code></td><td><p><code>string</code></p><p>Comma-separated list of parent IDs to add.</p></td></tr><tr><td><code>convert<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: This parameter has no function.</p></td></tr><tr><td><code>enforceSingleParent<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Adding files to multiple folders is no longer supported. Use <code>shortcuts</code> instead.</p></td></tr><tr><td><code>modifiedDateBehavior</code></td><td><p><code>enum (<code>ModifiedDateBehavior</code>)</code></p><p>Determines the behavior in which <code>modifiedDate</code> is updated. This overrides <code>setModifiedDate</code>.</p></td></tr><tr><td><code>newRevision</code></td><td><p><code>boolean</code></p><p>Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the <a href="https://support.google.com/drive/answer/2409045">Drive Help Center</a>. Note that this field is ignored if there is no payload in the request.</p></td></tr><tr><td><code>ocr</code></td><td><p><code>boolean</code></p><p>Whether to attempt OCR on.jpg,.png,.gif, or.pdf uploads.</p></td></tr><tr><td><code>ocrLanguage</code></td><td><p><code>string</code></p><p>If ocr is true, hints at the language to use. Valid values are BCP 47 codes.</p></td></tr><tr><td><code>pinned</code></td><td><p><code>boolean</code></p><p>Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request.</p></td></tr><tr><td><code>removeParents</code></td><td><p><code>string</code></p><p>Comma-separated list of parent IDs to remove.</p></td></tr><tr><td><code>setModifiedDate</code></td><td><p><code>boolean</code></p><p>Whether to set the modified date using the value supplied in the request body. Setting this field to <code>true</code> is equivalent to <code>modifiedDateBehavior=fromBodyOrNow</code>, and <code>false</code> is equivalent to <code>modifiedDateBehavior=now</code>. To prevent any changes to the modified date set <code>modifiedDateBehavior=noChange</code>.</p></td></tr><tr><td><code>supportsAllDrives</code></td><td><p><code>boolean</code></p><p>Whether the requesting application supports both My Drives and shared drives.</p></td></tr><tr><td><code>supportsTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Deprecated: Use <code>supportsAllDrives</code> instead.</p></td></tr><tr><td><code>timedTextLanguage</code></td><td><p><code>string</code></p><p>The language of the timed text.</p></td></tr><tr><td><code>timedTextTrackName</code></td><td><p><code>string</code></p><p>The timed text track name.</p></td></tr><tr><td><code>updateViewedDate</code></td><td><p><code>boolean</code></p><p>Whether to update the view date after successfully updating the file.</p></td></tr><tr><td><code>useContentAsIndexableText</code></td><td><p><code>boolean</code></p><p>Whether to use the content as indexable text.</p></td></tr><tr><td><code>includePermissionsForView</code></td><td><p><code>string</code></p><p>Specifies which additional view's permissions to include in the response. Only <code>published</code> is supported.</p></td></tr><tr><td><code>includeLabels</code></td><td><p><code>string</code></p><p>A comma-separated list of IDs of labels to include in the <code>labelInfo</code> part of the response.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/docs`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.appdata`
- `           https://www.googleapis.com/auth/drive.apps.readonly`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.scripts`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
