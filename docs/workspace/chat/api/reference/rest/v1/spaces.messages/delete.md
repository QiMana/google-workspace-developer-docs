---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete
root: workspace
fetched_at: 2026-04-23T15:25:06.876Z
---

# Method: spaces.messages.delete

## Page Summary

- This method enables you to delete messages and optionally their replies using an HTTP DELETE request.
- It supports both app and user authentication, with app authentication limiting deletion to messages created by the app.
- You can specify whether to force delete threaded replies with the `force` query parameter when using user authentication.
- The request requires specifying the message's resource name in the URL path and an empty request body.
- Authorization is required using one of the specified OAuth scopes.

Deletes a message. For an example, see [Delete a message](https://developers.google.com/workspace/chat/delete-messages).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.bot`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.messages`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

When using app authentication, requests can only delete messages created by the calling Chat app.

### HTTP request

`DELETE https://chat.googleapis.com/v1/{name=spaces/*/messages/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the message.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p><p>If you've set a custom ID for your message, you can use the value from the <code>clientAssignedMessageId</code> field for <code>{message}</code>. For details, see <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">Name a message</a>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>force</code></td><td><p><code>boolean</code></p><p>Optional. When <code>true</code>, deleting a message also deletes its threaded replies. When <code>false</code>, if a message has threaded replies, deletion fails.</p><p>Only applies when <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticating as a user</a>. Has no effect when <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">authenticating as a Chat app</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
