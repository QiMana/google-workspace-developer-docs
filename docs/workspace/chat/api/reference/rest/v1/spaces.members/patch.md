---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/patch
root: workspace
fetched_at: 2026-04-23T15:25:06.372Z
---

# Method: spaces.members.patch

## Page Summary

- This method updates a Google Chat membership, allowing you to modify aspects like user roles within a space.
- It supports both app and user authentication, with an option for administrator privileges using `useAdminAccess`.
- Requires specifying fields to update with `updateMask` and includes optional use of administrator privileges.
- You need appropriate OAuth scopes such as `chat.app.memberships` or `chat.admin.memberships` for authorization.

Updates a membership. For an example, see [Update a user's membership in a space](https://developers.google.com/workspace/chat/update-members).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope:
	- `https://www.googleapis.com/auth/chat.app.memberships` (only in spaces the app created)
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.memberships`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `useAdminAccess` is `true`, and the following authorization scope is used:
		- `https://www.googleapis.com/auth/chat.admin.memberships`

### HTTP request

`PATCH https://chat.googleapis.com/v1/{membership.name=spaces/*/members/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>membership.name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the membership, assigned by the server.</p><p>Format: <code>spaces/{space}/members/{member}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. The field paths to update. Separate multiple values with commas or use <code>*</code> to update all field paths.</p><p>Currently supported field paths:</p><ul><li><code>role</code></li></ul></td></tr><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.memberships</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.admin.memberships`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.memberships`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
