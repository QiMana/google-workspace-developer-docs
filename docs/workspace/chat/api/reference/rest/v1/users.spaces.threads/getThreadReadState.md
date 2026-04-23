---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.spaces.threads/getThreadReadState
root: workspace
fetched_at: 2026-04-23T15:25:09.896Z
---

# Method: users.spaces.threads.getThreadReadState

## Page Summary

- Retrieves a user's read state within a specific thread, indicating read and unread messages.
- Requires user authentication and uses a specific HTTP GET request format with path parameters.
- The request body should be empty, while a successful response includes a `ThreadReadState` object.
- Authorisation is necessary, using specific OAuth scopes related to read state permissions.

Returns details about a user's read state within a thread, used to identify read and unread messages. For an example, see [Get details about a user's thread read state](https://developers.google.com/workspace/chat/get-thread-read-state).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.readstate.readonly`
- `https://www.googleapis.com/auth/chat.users.readstate`

### HTTP request

`GET https://chat.googleapis.com/v1/{name=users/*/spaces/*/threads/*/threadReadState}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the thread read state to retrieve.</p><p>Only supports getting read state for the calling user.</p><p>To refer to the calling user, set one of the following:</p><ul><li><p>The <code>me</code> alias. For example, <code>users/me/spaces/{space}/threads/{thread}/threadReadState</code>.</p></li><li><p>Their Workspace email address. For example, <code>users/user@example.com/spaces/{space}/threads/{thread}/threadReadState</code>.</p></li><li><p>Their user id. For example, <code>users/123456789/spaces/{space}/threads/{thread}/threadReadState</code>.</p></li></ul><p>Format: users/{user}/spaces/{space}/threads/{thread}/threadReadState</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.users.readstate`
- `https://www.googleapis.com/auth/chat.users.readstate.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
