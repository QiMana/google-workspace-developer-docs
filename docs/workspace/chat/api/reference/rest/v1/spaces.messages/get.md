---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/get
root: workspace
fetched_at: 2026-04-23T15:25:07.240Z
---

# Method: spaces.messages.get

## Page Summary

- Returns detailed information about a specific message within a space.
- Requires providing the message's resource name using the format `spaces/{space}/messages/{message}`.
- Supports both app and user authentication methods for accessing message details.
- The response includes a `Message` object containing the message data if the request is successful.
- Requires specific authorization scopes like `chat.bot`, `chat.messages`, or `chat.messages.readonly`.

Returns details about a message. For an example, see [Get details about a message](https://developers.google.com/workspace/chat/get-messages).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.bot`: When using this authorization scope, this method returns details about a message the Chat app has access to, like direct messages and [slash commands](https://developers.google.com/workspace/chat/slash-commands) that invoke the Chat app.
		- `https://www.googleapis.com/auth/chat.app.messages.readonly` with [administrator approval](https://support.google.com/a?p=chat-app-auth). When using this authentication scope, this method returns details about a public message in a space.
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.messages.readonly`
		- `https://www.googleapis.com/auth/chat.messages`

Note: Might return a message from a blocked member or space.

### HTTP request

`GET https://chat.googleapis.com/v1/{name=spaces/*/messages/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the message.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p><p>If you've set a custom ID for your message, you can use the value from the <code>clientAssignedMessageId</code> field for <code>{message}</code>. For details, see <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">Name a message</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.readonly`
- `https://www.googleapis.com/auth/chat.app.messages.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
