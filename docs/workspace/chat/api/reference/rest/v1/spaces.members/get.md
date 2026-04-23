---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get
root: workspace
fetched_at: 2026-04-23T15:25:06.310Z
---

# Method: spaces.members.get

## Page Summary

- Returns detailed information about a specific Google Chat membership within a space.
- Supports both app and user authentication, with an option for user authentication to leverage administrator privileges.
- Requires providing the membership's resource name in the request path, allowing the use of email aliases for member identification.
- Optionally accepts a query parameter to utilize the user's Google Workspace administrator privileges for the request.
- Needs authorization with specific OAuth scopes related to Chat memberships and administration.

Returns details about a membership. For an example, see [Get details about a user's or Google Chat app's membership](../../../../../get-members.md).

Supports the following types of [authentication](../../../../../authenticate-authorize.md):

- [App authentication](../../../../../authenticate-authorize-chat-app.md) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.bot`
		- `https://www.googleapis.com/auth/chat.app.memberships` (requires [administrator approval](https://support.google.com/a?p=chat-app-auth))
- [User authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.memberships.readonly`
		- `https://www.googleapis.com/auth/chat.memberships`
		- User authentication grants administrator privileges when an administrator account authenticates, `useAdminAccess` is `true`, and one of the following authorization scopes is used:
		- `https://www.googleapis.com/auth/chat.admin.memberships.readonly`
				- `https://www.googleapis.com/auth/chat.admin.memberships`

### HTTP request

`GET https://chat.googleapis.com/v1/{name=spaces/*/members/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the membership to retrieve.</p><p>To get the app's own membership <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">by using user authentication</a>, you can optionally use <code>spaces/{space}/members/app</code>.</p><p>Format: <code>spaces/{space}/members/{member}</code> or <code>spaces/{space}/members/app</code></p><p>You can use the user's email as an alias for <code>{member}</code>. For example, <code>spaces/{space}/members/example@gmail.com</code> where <code>example@gmail.com</code> is the email of the Google Chat user.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.memberships</code> or <code>chat.admin.memberships.readonly</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scopes</a>.</p><p>Getting app memberships in a space isn't supported when using admin access.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.admin.memberships`
- `https://www.googleapis.com/auth/chat.admin.memberships.readonly`
- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.readonly`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
