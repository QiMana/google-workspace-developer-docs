---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts
root: workspace
fetched_at: 2026-04-23T15:28:57.657Z
---

# REST Resource: users.drafts

## Resource: Draft

A draft email in the user's mailbox.

JSON representation

```
{
  "id": string,
  "message": {
    object (Message)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The immutable ID of the draft.</p></td></tr><tr><td><code>message</code></td><td><p><code>object (<code>Message</code>)</code></p><p>The message content of the draft.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a draft with the <code>DRAFT</code> label.</td></tr><tr><td><h3>delete</h3></td><td>Immediately and permanently deletes the specified draft.</td></tr><tr><td><h3>get</h3></td><td>Gets the specified draft.</td></tr><tr><td><h3>list</h3></td><td>Lists the drafts in the user's mailbox.</td></tr><tr><td><h3>send</h3></td><td>Sends the specified, existing draft to the recipients in the <code>To</code>, <code>Cc</code>, and <code>Bcc</code> headers.</td></tr><tr><td><h3>update</h3></td><td>Replaces a draft's content.</td></tr></tbody></table>
