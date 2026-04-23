---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/create
root: workspace
fetched_at: 2026-04-23T15:25:08.244Z
---

# Method: spaces.create

## Page Summary

- Creates a space in Google Chat, which can be a named space or a group chat, supporting app and user authentication.
- When using app authentication, the space.customer field is required and no members are added in Import mode; otherwise, the calling user becomes a member.
- Uses the `POST https://chat.googleapis.com/v1/spaces` HTTP request to create a space and requires specific OAuth scopes for authorization.
- The request body should contain a Space object and the response, if successful, will contain the newly created Space object.
- If the displayName already exists, an `ALREADY_EXISTS` error will be returned, suggesting to try a different displayName.

Creates a space. Can be used to create a named space, or a group chat in `Import mode`. For an example, see [Create a space](../../../../../create-spaces.md).

Supports the following types of [authentication](../../../../../authenticate-authorize.md):

- [App authentication](../../../../../authenticate-authorize-chat-app.md) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.app.spaces.create`
		- `https://www.googleapis.com/auth/chat.app.spaces`
- [User authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces.create`
		- `https://www.googleapis.com/auth/chat.spaces`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

When authenticating as an app, the `space.customer` field must be set in the request.

When authenticating as an app, the Chat app is added as a member of the space. However, unlike human authentication, the Chat app is not added as a space manager. By default, the Chat app can be removed from the space by all space members. To allow only space managers to remove the app from a space, set `space.permission_settings.manage_apps` to `managersAllowed`.

Space membership upon creation depends on whether the space is created in `Import mode`:

- **Import mode:** No members are created.
- **All other modes:** The calling user is added as a member. This is:
	- The app itself when using app authentication.
		- The human user when using user authentication.

If you receive the error message `ALREADY_EXISTS` when creating a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name.

### HTTP request

`POST https://chat.googleapis.com/v1/spaces`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>requestId</code></td><td><p><code>string</code></p><p>Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.spaces.create`
- `https://www.googleapis.com/auth/chat.app.spaces`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.create`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
