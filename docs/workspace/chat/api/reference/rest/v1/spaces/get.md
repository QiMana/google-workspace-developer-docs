---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/get
root: workspace
fetched_at: 2026-04-23T15:25:09.368Z
---

# Method: spaces.get

## Page Summary

- Returns detailed information about a Google Chat space, including its properties and settings.
- Requires a specific HTTP request structure using the space's resource name as a path parameter.
- Offers optional use of administrator privileges via a query parameter for authorized users.
- Supports various authentication methods, including app and user authentication with specific OAuth scopes for authorization.
- Provides a comprehensive response containing details about the space upon successful execution.

Returns details about a space. For an example, see [Get details about a space](../../../../../get-spaces.md).

Supports the following types of [authentication](../../../../../authenticate-authorize.md):

- [App authentication](../../../../../authenticate-authorize-chat-app.md) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.bot`
		- `https://www.googleapis.com/auth/chat.app.spaces` with [administrator approval](https://support.google.com/a?p=chat-app-auth)
- [User authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.spaces`
		- User authentication grants administrator privileges when an administrator account authenticates, `useAdminAccess` is `true`, and one of the following authorization scopes is used:
		- `https://www.googleapis.com/auth/chat.admin.spaces.readonly`
				- `https://www.googleapis.com/auth/chat.admin.spaces`

App authentication has the following limitations:

- `space.access_settings` is only populated when using the `chat.app.spaces` scope.
- `space.predefind_permission_settings` and `space.permission_settings` are only populated when using the `chat.app.spaces` scope, and only for spaces the app created.

### HTTP request

`GET https://chat.googleapis.com/v1/{name=spaces/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the space, in the form <code>spaces/{space}</code>.</p><p>Format: <code>spaces/{space}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.spaces</code> or <code>chat.admin.spaces.readonly</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scopes</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.admin.spaces`
- `https://www.googleapis.com/auth/chat.admin.spaces.readonly`
- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.readonly`
- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.app.spaces`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
