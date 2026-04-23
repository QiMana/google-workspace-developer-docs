---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete
root: workspace
fetched_at: 2026-04-23T15:25:04.468Z
---

# Method: spaces.members.delete

## Page Summary

- Deletes a specified membership from a Google Chat space, allowing removal of human users or Chat apps.
- Requires specific OAuth scopes depending on the type of membership being deleted and whether admin privileges are used.
- Supports app and user authentication, with an option for administrator approval in Developer Preview for app authentication.
- Uses a `DELETE` request with the membership's resource name specified in the path.
- Provides an optional `useAdminAccess` query parameter to utilize administrator privileges when deleting human memberships.

Deletes a membership. For an example, see [Remove a user or a Google Chat app from a space](https://developers.google.com/workspace/chat/delete-members).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope:
	- `https://www.googleapis.com/auth/chat.app.memberships`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.memberships`
		- `https://www.googleapis.com/auth/chat.memberships.app` (to remove the calling app from the space)
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `useAdminAccess` is `true`, and the following authorization scope is used:
		- `https://www.googleapis.com/auth/chat.admin.memberships`

App authentication is not supported for the following use cases:

- Removing a Google Group from a space.
- Removing a Chat app from a space.

To delete memberships for space managers, the requester must be a space manager. If you're using [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) the Chat app must be the space creator.

### HTTP request

`DELETE https://chat.googleapis.com/v1/{name=spaces/*/members/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the membership to delete. Chat apps can delete human users' or their own memberships. Chat apps can't delete other apps' memberships.</p><p>When deleting a human membership, requires the <code>chat.memberships</code> scope with <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a> or the <code>chat.memberships.app</code> scope with <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a> and the <code>spaces/{space}/members/{member}</code> format. You can use the email as an alias for <code>{member}</code>. For example, <code>spaces/{space}/members/example@gmail.com</code> where <code>example@gmail.com</code> is the email of the Google Chat user.</p><p>When deleting an app membership, requires the <code>chat.memberships.app</code> scope and <code>spaces/{space}/members/app</code> format.</p><p>Format: <code>spaces/{space}/members/{member}</code> or <code>spaces/{space}/members/app</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.memberships</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p><p>Deleting app memberships in a space isn't supported using admin access.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.admin.memberships`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.app`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
