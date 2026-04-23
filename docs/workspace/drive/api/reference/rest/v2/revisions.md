---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/revisions
root: workspace
fetched_at: 2026-04-23T15:27:58.506Z
---

# REST Resource: revisions

## Resource: Revision

A revision of a file.

Some resource methods (such as `revisions.update`) require a `revisionId`. Use the `revisions.list` method to retrieve the ID for a revision.

JSON representation

```
{
  "exportLinks": {
    string: string,
    ...
  },
  "id": string,
  "mimeType": string,
  "kind": string,
  "published": boolean,
  "etag": string,
  "pinned": boolean,
  "md5Checksum": string,
  "modifiedDate": string,
  "lastModifyingUserName": string,
  "downloadUrl": string,
  "publishAuto": boolean,
  "publishedOutsideDomain": boolean,
  "publishedLink": string,
  "fileSize": string,
  "originalFilename": string,
  "lastModifyingUser": {
    object (User)
  },
  "selfLink": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>exportLinks</code></td><td><p><code>map (key: string, value: string)</code></p><p>Output only. Links for exporting Docs Editors files to specific formats.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Output only. The ID of the revision.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>Output only. The MIME type of the revision.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. This is always <code>drive#revision</code>.</p></td></tr><tr><td><code>published</code></td><td><p><code>boolean</code></p><p>Whether this revision is published. This is only populated and can only be modified for Docs Editors files.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>Output only. The ETag of the revision.</p></td></tr><tr><td><code>pinned</code></td><td><p><code>boolean</code></p><p>Whether this revision is pinned to prevent automatic purging. If not set, the revision is automatically purged 30 days after newer content is uploaded. This field can only be modified on files with content stored in Drive, excluding Docs Editors files. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter. Pinned revisions are stored indefinitely using additional storage quota, up to a maximum of 200 revisions.</p></td></tr><tr><td><code>md5Checksum</code></td><td><p><code>string</code></p><p>Output only. An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive.</p></td></tr><tr><td><code>modifiedDate</code></td><td><p><code>string</code></p><p>Output only. Last time this revision was modified (formatted RFC 3339 timestamp).</p></td></tr><tr><td><code>lastModifyingUserName</code></td><td><p><code>string</code></p><p>Output only. Name of the last user to modify this revision.</p></td></tr><tr><td><code>downloadUrl</code></td><td><p><code>string</code></p><p>Output only. Short term download URL for the file. This will only be populated on files with content stored in Drive.</p></td></tr><tr><td><code>publishAuto</code></td><td><p><code>boolean</code></p><p>Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Docs Editors files.</p></td></tr><tr><td><code>publishedOutsideDomain</code></td><td><p><code>boolean</code></p><p>Whether this revision is published outside the domain. This is only populated and can only be modified for Docs Editors files.</p></td></tr><tr><td><code>publishedLink</code></td><td><p><code>string</code></p><p>Output only. A link to the published revision. This is only populated for Docs Editors files.</p></td></tr><tr><td><code>fileSize</code></td><td><p><code>string (int64 format)</code></p><p>Output only. The size of the revision in bytes. This will only be populated on files with content stored in Drive.</p></td></tr><tr><td><code>originalFilename</code></td><td><p><code>string</code></p><p>Output only. The original filename when this revision was created. This will only be populated on files with content stored in Drive.</p></td></tr><tr><td><code>lastModifyingUser</code></td><td><p><code>object (<code>User</code>)</code></p><p>Output only. The last user to modify this revision. This field is only populated when the last modification was performed by a signed-in user.</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>Output only. A link back to this revision.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Permanently deletes a file version.</td></tr><tr><td><h3>get</h3></td><td>Gets a specific revision.</td></tr><tr><td><h3>list</h3></td><td>Lists a file's revisions.</td></tr><tr><td><h3>patch</h3></td><td>Updates a revision.</td></tr><tr><td><h3>update</h3></td><td>Updates a revision.</td></tr></tbody></table>
