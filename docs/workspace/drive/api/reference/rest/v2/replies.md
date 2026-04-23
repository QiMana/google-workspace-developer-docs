---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/replies
root: workspace
fetched_at: 2026-04-23T15:27:56.910Z
---

# REST Resource: replies

## Resource: CommentReply

A reply to a comment on a file in Google Drive.

JSON representation

```
{
  "replyId": string,
  "kind": string,
  "createdDate": string,
  "modifiedDate": string,
  "verb": string,
  "author": {
    object (User)
  },
  "deleted": boolean,
  "htmlContent": string,
  "content": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>replyId</code></td><td><p><code>string</code></p><p>The ID of the reply.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always drive#commentReply.</p></td></tr><tr><td><code>createdDate</code></td><td><p><code>string</code></p><p>The date when this reply was first created.</p></td></tr><tr><td><code>modifiedDate</code></td><td><p><code>string</code></p><p>The date when this reply was last modified.</p></td></tr><tr><td><code>verb</code></td><td><p><code>string</code></p><p>The action this reply performed to the parent comment. When creating a new reply this is the action to be perform tSo the parent comment. Possible values are:</p><ul><li><code>resolve</code> - To resolve a comment.</li><li><code>reopen</code> - To reopen (un-resolve) a comment.</li></ul></td></tr><tr><td><code>author</code></td><td><p><code>object (<code>User</code>)</code></p><p>The user who wrote this reply.</p></td></tr><tr><td><code>deleted</code></td><td><p><code>boolean</code></p><p>Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed.</p></td></tr><tr><td><code>htmlContent</code></td><td><p><code>string</code></p><p>HTML formatted content for this reply.</p></td></tr><tr><td><code>content</code></td><td><p><code>string</code></p><p>The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen).</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a reply.</td></tr><tr><td><h3>get</h3></td><td>Gets a reply.</td></tr><tr><td><h3>insert</h3></td><td>Creates a new reply to the given comment.</td></tr><tr><td><h3>list</h3></td><td>Lists all of the replies to a comment.</td></tr><tr><td><h3>patch</h3></td><td>Updates an existing reply.</td></tr><tr><td><h3>update</h3></td><td>Updates an existing reply.</td></tr></tbody></table>
