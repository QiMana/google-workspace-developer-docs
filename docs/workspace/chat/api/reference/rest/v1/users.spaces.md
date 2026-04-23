---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.spaces
root: workspace
fetched_at: 2026-04-23T15:25:10.164Z
---

# REST Resource: users.spaces

## Page Summary

- `SpaceReadState` tracks a user's read progress within a Google Chat space, indicating which messages are read and unread.
- It's represented in JSON format with a `name` field (identifying the user and space) and an optional `lastReadTime` field (indicating the last read message or user-defined position).
- You can retrieve and update a user's `SpaceReadState` using the `getSpaceReadState` and `updateSpaceReadState` methods, respectively, allowing developers to manage read receipts and user progress within Chat spaces.

## Resource: SpaceReadState

A user's read state within a space, used to identify read and unread messages.

JSON representation

```
{
  "name": string,
  "lastReadTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name of the space read state.</p><p>Format: <code>users/{user}/spaces/{space}/spaceReadState</code></p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>getSpaceReadState</h3></td><td>Returns details about a user's read state within a space, used to identify read and unread messages.</td></tr><tr><td><h3>updateSpaceReadState</h3></td><td>Updates a user's read state within a space, used to identify read and unread messages.</td></tr></tbody></table>
