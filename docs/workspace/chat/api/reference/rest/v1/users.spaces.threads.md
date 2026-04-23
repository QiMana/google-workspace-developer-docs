---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.spaces.threads
root: workspace
fetched_at: 2026-04-23T15:25:09.721Z
---

# REST Resource: users.spaces.threads

## Page Summary

- ThreadReadState resource indicates a user's read status within a specific thread, helping to distinguish between read and unread messages.
- It is represented in JSON format with `name` and `lastReadTime` fields, specifying the resource name and the timestamp of the last read message.
- You can retrieve details about a user's ThreadReadState using the `getThreadReadState` method to identify read and unread messages within a thread.

## Resource: ThreadReadState

A user's read state within a thread, used to identify read and unread messages.

JSON representation

```
{
  "name": string,
  "lastReadTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name of the thread read state.</p><p>Format: <code>users/{user}/spaces/{space}/threads/{thread}/threadReadState</code></p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>getThreadReadState</h3></td><td>Returns details about a user's read state within a thread, used to identify read and unread messages.</td></tr></tbody></table>
