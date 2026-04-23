---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads
root: workspace
fetched_at: 2026-04-23T15:29:05.165Z
---

# REST Resource: users.threads

## Resource: Thread

A collection of messages representing a conversation.

JSON representation

```
{
  "id": string,
  "snippet": string,
  "historyId": string,
  "messages": [
    {
      object (Message)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique ID of the thread.</p></td></tr><tr><td><code>snippet</code></td><td><p><code>string</code></p><p>A short part of the message text.</p></td></tr><tr><td><code>historyId</code></td><td><p><code>string</code></p><p>The ID of the last history record that modified this thread.</p></td></tr><tr><td><code>messages[]</code></td><td><p><code>object (<code>Message</code>)</code></p><p>The list of messages in the thread.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Immediately and permanently deletes the specified thread.</td></tr><tr><td><h3>get</h3></td><td>Gets the specified thread.</td></tr><tr><td><h3>list</h3></td><td>Lists the threads in the user's mailbox.</td></tr><tr><td><h3>modify</h3></td><td>Modifies the labels applied to the thread.</td></tr><tr><td><h3>trash</h3></td><td>Moves the specified thread to the trash.</td></tr><tr><td><h3>untrash</h3></td><td>Removes the specified thread from the trash.</td></tr></tbody></table>
