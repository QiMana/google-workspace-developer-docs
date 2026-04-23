---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.spaces/updateSpaceReadState
root: workspace
fetched_at: 2026-04-23T15:25:09.958Z
---

# Method: users.spaces.updateSpaceReadState

## Page Summary

- This API updates a user's read state within a Google Chat space, marking messages as read or unread.
- It requires user authentication and the `chat.users.readstate` OAuth scope for authorization.
- The request uses the PATCH method and specifies the space read state resource name in the URL path.
- You can control which fields to update using the `updateMask` query parameter, such as setting the `lastReadTime` to mark a space as read.
- The request and response bodies utilize the `SpaceReadState` object to represent the user's read state information.

Updates a user's read state within a space, used to identify read and unread messages. For an example, see [Update a user's space read state](../../../../../update-space-read-state.md).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with the [authorization scope](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.readstate`

### HTTP request

`PATCH https://chat.googleapis.com/v1/{spaceReadState.name=users/*/spaces/*/spaceReadState}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spaceReadState.name</code></td><td><p><code>string</code></p><p>Resource name of the space read state.</p><p>Format: <code>users/{user}/spaces/{space}/spaceReadState</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. The field paths to update. Currently supported field paths:</p><ul><li><code>lastReadTime</code></li></ul><p>When the <code>lastReadTime</code> is before the latest message create time, the space appears as unread in the UI.</p><p>To mark the space as read, set <code>lastReadTime</code> to any value later (larger) than the latest message create time. The <code>lastReadTime</code> is coerced to match the latest message create time. Note that the space read state only affects the read state of messages that are visible in the space's top-level conversation. Replies in threads are unaffected by this timestamp, and instead rely on the thread read state.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.readstate`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
