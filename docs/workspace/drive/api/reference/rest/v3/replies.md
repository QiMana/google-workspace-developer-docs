---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/replies
root: workspace
fetched_at: 2026-04-23T15:28:05.128Z
---

# REST Resource: replies

## Resource: Reply

A reply to a comment on a file.

Some resource methods (such as `replies.update`) require a `replyId`. Use the `replies.list` method to retrieve the ID for a reply.

JSON representation

```
{
  "mentionedEmailAddresses": [
    string
  ],
  "id": string,
  "kind": string,
  "createdTime": string,
  "modifiedTime": string,
  "action": string,
  "author": {
    object (User)
  },
  "deleted": boolean,
  "htmlContent": string,
  "content": string,
  "assigneeEmailAddress": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>mentionedEmailAddresses[]</code></td><td><p><code>string</code></p><p>Output only. A list of email addresses for users mentioned in this comment. If no users are mentioned, the list is empty.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Output only. The ID of the reply.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. Identifies what kind of resource this is. Value: the fixed string <code>"drive#reply"</code>.</p></td></tr><tr><td><code>createdTime</code></td><td><p><code>string</code></p><p>Output only. The time at which the reply was created (<a href="https://datatracker.ietf.org/doc/html/rfc3339">RFC 3339 date-time</a>).</p></td></tr><tr><td><code>modifiedTime</code></td><td><p><code>string</code></p><p>Output only. The last time the reply was modified (<a href="https://datatracker.ietf.org/doc/html/rfc3339">RFC 3339 date-time</a>).</p></td></tr><tr><td><code>action</code></td><td><p><code>string</code></p><p>The action the reply performed to the parent comment. The supported values are:</p><ul><li><code>resolve</code></li><li><code>reopen</code></li></ul></td></tr><tr><td><code>author</code></td><td><p><code>object (<code>User</code>)</code></p><p>Output only. The author of the reply. The author's email address and permission ID won't be populated.</p></td></tr><tr><td><code>deleted</code></td><td><p><code>boolean</code></p><p>Output only. Whether the reply has been deleted. A deleted reply has no content.</p></td></tr><tr><td><code>htmlContent</code></td><td><p><code>string</code></p><p>Output only. The content of the reply with HTML formatting.</p></td></tr><tr><td><code>content</code></td><td><p><code>string</code></p><p>The plain text content of the reply. This field is used for setting the content, while <code>htmlContent</code> should be displayed. This field is required by the <code>create</code> method if no <code>action</code> value is specified.</p></td></tr><tr><td><code>assigneeEmailAddress</code></td><td><p><code>string</code></p><p>Output only. The email address of the user assigned to this comment. If no user is assigned, the field is unset.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a reply to a comment.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a reply.</td></tr><tr><td><h3>get</h3></td><td>Gets a reply by ID.</td></tr><tr><td><h3>list</h3></td><td>Lists a comment's replies.</td></tr><tr><td><h3>update</h3></td><td>Updates a reply with patch semantics.</td></tr></tbody></table>
