---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/delete
root: workspace
fetched_at: 2026-04-23T15:25:08.372Z
---

# Method: spaces.delete

## Page Summary

- This request permanently deletes a space and all its child resources, including messages and memberships.
- Authentication can be performed using app authentication (with administrator approval) or user authentication (including with administrator privileges using `useAdminAccess`).
- The request requires the space's resource name in the URL path and can optionally use the `useAdminAccess` query parameter for administrator privileges.
- Requires specific OAuth scopes for authorization, such as `chat.app.delete` or `chat.admin.delete`, as detailed in the Authorization guide.

Deletes a named space. Always performs a cascading delete, which means that the space's child resources—like messages posted in the space and memberships in the space—are also deleted. For an example, see [Delete a space](../../../../../delete-spaces.md).

Supports the following types of [authentication](../../../../../authenticate-authorize.md):

- [App authentication](../../../../../authenticate-authorize-chat-app.md) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope:
	- `https://www.googleapis.com/auth/chat.app.delete` (only in spaces the app created)
- [User authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.delete`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `useAdminAccess` is `true`, and the following authorization scope is used:
		- `https://www.googleapis.com/auth/chat.admin.delete`

### HTTP request

`DELETE https://chat.googleapis.com/v1/{name=spaces/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the space to delete.</p><p>Format: <code>spaces/{space}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.delete</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.delete`
- `https://www.googleapis.com/auth/chat.admin.delete`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.delete`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
