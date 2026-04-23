---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.spaces/getSpaceReadState
root: workspace
fetched_at: 2026-04-23T15:25:10.026Z
---

# Method: users.spaces.getSpaceReadState

## Page Summary

- This document explains how to retrieve a user's read state within a Google Chat space, indicating read and unread messages.
- You can retrieve read state information for the calling user using their user ID, email address, or the "me" alias.
- The request requires specific authorization scopes (`chat.users.readstate` or `chat.users.readstate.readonly`) for access.
- A successful response returns a `SpaceReadState` object containing details of the user's read state in the specified space.
- Refer to the provided links for a practical example and further details on authentication and authorization.

Returns details about a user's read state within a space, used to identify read and unread messages. For an example, see [Get details about a user's space read state](../../../../../get-space-read-state.md).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following [authorization scopes](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.readstate.readonly`
- `https://www.googleapis.com/auth/chat.users.readstate`

### HTTP request

`GET https://chat.googleapis.com/v1/{name=users/*/spaces/*/spaceReadState}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the space read state to retrieve.</p><p>Only supports getting read state for the calling user.</p><p>To refer to the calling user, set one of the following:</p><ul><li><p>The <code>me</code> alias. For example, <code>users/me/spaces/{space}/spaceReadState</code>.</p></li><li><p>Their Workspace email address. For example, <code>users/user@example.com/spaces/{space}/spaceReadState</code>.</p></li><li><p>Their user id. For example, <code>users/123456789/spaces/{space}/spaceReadState</code>.</p></li></ul><p>Format: users/{user}/spaces/{space}/spaceReadState</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.users.readstate`
- `https://www.googleapis.com/auth/chat.users.readstate.readonly`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
