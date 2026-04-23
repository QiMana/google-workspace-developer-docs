---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/findDirectMessage
root: workspace
fetched_at: 2026-04-23T15:25:08.166Z
---

# Method: spaces.findDirectMessage

## Page Summary

- Retrieves the existing direct message with a specified user or Chat app, returning a 404 error if none is found.
- Supports both app authentication and user authentication for finding direct messages.
- Requires providing the resource name of the user in the `name` query parameter using specific formats.
- Uses a `GET` HTTP request to the `https://chat.googleapis.com/v1/spaces:findDirectMessage` endpoint with gRPC Transcoding syntax.
- Needs authorization with specific OAuth scopes like `chat.spaces`, `chat.spaces.readonly`, or `chat.bot`.

Returns the existing direct message with the specified user. If no direct message space is found, returns a `404 NOT_FOUND` error. For an example, see [Find a direct message](https://developers.google.com/chat/api/guides/v1/spaces/find-direct-message).

With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), returns the direct message space between the specified user and the calling Chat app.

With [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), returns the direct message space between the specified user and the authenticated user.

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.bot`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.spaces`

### HTTP request

`GET https://chat.googleapis.com/v1/spaces:findDirectMessage`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the user to find direct message with.</p><p>Format: <code>users/{user}</code>, where <code>{user}</code> is either the <code>id</code> for the <a href="https://developers.google.com/people/api/rest/v1/people">person</a> from the People API, or the <code>id</code> for the <a href="https://developers.google.com/admin-sdk/directory/reference/rest/v1/users">user</a> in the Directory API. For example, if the People API profile ID is <code>123456789</code>, you can find a direct message with that person by using <code>users/123456789</code> as the <code>name</code>. When <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticated as a user</a>, you can use the email as an alias for <code>{user}</code>. For example, <code>users/example@gmail.com</code> where <code>example@gmail.com</code> is the email of the Google Chat user.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.readonly`
- `https://www.googleapis.com/auth/chat.bot`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
