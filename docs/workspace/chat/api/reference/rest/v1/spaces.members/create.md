---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/create
root: workspace
fetched_at: 2026-04-23T15:25:04.588Z
---

# Method: spaces.members.create

## Page Summary

- Creates memberships for the calling Chat app, a user, or a Google Group in a specified space.
- Supports app authentication (with admin approval in Developer Preview) and user authentication (with optional admin access).
- To use administrator privileges, set the `useAdminAccess` query parameter to `true` and ensure the user has the required permissions and scope.
- Requires specific OAuth scopes for authorization, such as `chat.app.memberships` or `chat.admin.memberships`.
- If the member has auto-accept turned off, an invitation is sent; otherwise, they are directly added to the space.

Creates a membership for the calling Chat app, a user, or a Google Group. Creating memberships for other Chat apps isn't supported. When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space.

Supports the following types of [authentication](../../../../../authenticate-authorize.md):

- [App authentication](../../../../../authenticate-authorize-chat-app.md) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope:
	- `https://www.googleapis.com/auth/chat.app.memberships`
- [User authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.memberships`
		- `https://www.googleapis.com/auth/chat.memberships.app` (to add the calling app to the space)
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `useAdminAccess` is `true`, and the following authorization scope is used:
		- `https://www.googleapis.com/auth/chat.admin.memberships`

App authentication is not supported for the following use cases:

- Inviting users external to the Workspace organization that owns the space.
- Adding a Google Group to a space.
- Adding a Chat app to a space.

For example usage, see:

- [Invite or add a user to a space](../../../../../create-members.md#create-user-membership).
- [Invite or add a Google Group to a space](../../../../../create-members.md#create-group-membership).
- [Add the Chat app to a space](../../../../../create-members.md#create-membership-calling-api).

### HTTP request

`POST https://chat.googleapis.com/v1/{parent=spaces/*}/members`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The resource name of the space for which to create the membership.</p><p>Format: spaces/{space}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.memberships</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p><p>Creating app memberships or creating memberships for users outside the administrator's Google Workspace organization isn't supported using admin access.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.admin.memberships`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.app`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
