---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/revisions
root: workspace
fetched_at: 2026-04-23T15:28:06.496Z
---

# REST Resource: revisions

## Resource: Revision

The metadata for a revision to a file.

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
  "keepForever": boolean,
  "md5Checksum": string,
  "modifiedTime": string,
  "publishAuto": boolean,
  "publishedOutsideDomain": boolean,
  "publishedLink": string,
  "size": string,
  "originalFilename": string,
  "lastModifyingUser": {
    object (User)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>exportLinks</code></td><td><p><code>map (key: string, value: string)</code></p><p>Output only. Links for exporting Docs Editors files to specific formats.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Output only. The ID of the revision.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>Output only. The MIME type of the revision.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. Identifies what kind of resource this is. Value: the fixed string <code>"drive#revision"</code>.</p></td></tr><tr><td><code>published</code></td><td><p><code>boolean</code></p><p>Whether this revision is published. This is only applicable to Docs Editors files.</p></td></tr><tr><td><code>keepForever</code></td><td><p><code>boolean</code></p><p>Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file.</p><p>This field is only applicable to files with binary content in Drive.</p></td></tr><tr><td><code>md5Checksum</code></td><td><p><code>string</code></p><p>Output only. The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.</p></td></tr><tr><td><code>modifiedTime</code></td><td><p><code>string</code></p><p>Output only. The last time the revision was modified (RFC 3339 date-time).</p></td></tr><tr><td><code>publishAuto</code></td><td><p><code>boolean</code></p><p>Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.</p></td></tr><tr><td><code>publishedOutsideDomain</code></td><td><p><code>boolean</code></p><p>Whether this revision is published outside the domain. This is only applicable to Docs Editors files.</p></td></tr><tr><td><code>publishedLink</code></td><td><p><code>string</code></p><p>Output only. A link to the published revision. This is only populated for Docs Editors files.</p></td></tr><tr><td><code>size</code></td><td><p><code>string (int64 format)</code></p><p>Output only. The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.</p></td></tr><tr><td><code>originalFilename</code></td><td><p><code>string</code></p><p>Output only. The original filename used to create this revision. This is only applicable to files with binary content in Drive.</p></td></tr><tr><td><code>lastModifyingUser</code></td><td><p><code>object (<code>User</code>)</code></p><p>Output only. The last user to modify this revision. This field is only populated when the last modification was performed by a signed-in user.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Permanently deletes a file version.</td></tr><tr><td><h3>get</h3></td><td>Gets a revision's metadata or content by ID.</td></tr><tr><td><h3>list</h3></td><td>Lists a file's revisions.</td></tr><tr><td><h3>update</h3></td><td>Updates a revision with patch semantics.</td></tr></tbody></table>
