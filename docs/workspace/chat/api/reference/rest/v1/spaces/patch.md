---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/patch
root: workspace
fetched_at: 2026-04-23T15:25:09.305Z
---

# Method: spaces.patch

## Page Summary

- Updates a Google Chat space's details, including display name, description, space type, history settings, access settings, and permission settings.
- Requires specific authentication and authorization, including app authentication with administrator approval or user authentication, potentially with administrator privileges.
- Supports partial updates using the `updateMask` query parameter to specify the fields to be modified.
- Provides options for using administrator privileges with the `useAdminAccess` query parameter, but some fields and functionalities are not supported in this mode.
- Uses the PATCH HTTP method and gRPC Transcoding syntax for the request URL.

Updates a space. For an example, see [Update a space](https://developers.google.com/workspace/chat/update-spaces).

If you're updating the `displayName` field and receive the error message `ALREADY_EXISTS`, try a different display name.. An existing space within the Google Workspace organization might already use this display name.

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.app.spaces`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `useAdminAccess` is `true`, and the following authorization scopes is used:
		- `https://www.googleapis.com/auth/chat.admin.spaces`

App authentication has the following limitations:

- To update either `space.predefined_permission_settings` or `space.permission_settings`, the app must be the space creator.
- Updating the `space.access_settings.audience` is not supported for app authentication.

### HTTP request

`PATCH https://chat.googleapis.com/v1/{space.name=spaces/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>space.name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the space.</p><p>Format: <code>spaces/{space}</code></p><p>Where <code>{space}</code> represents the system-assigned ID for the space. You can obtain the space ID by calling the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list"><code>spaces.list()</code></a> method or from the space URL. For example, if the space URL is <code>https://mail.google.com/mail/u/0/#chat/space/AAAAAAAAA</code>, the space ID is <code>AAAAAAAAA</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. The updated field paths, comma separated if there are multiple.</p><p>You can update the following fields for a space:</p><p><code>spaceDetails</code>: Updates the space's description and guidelines. You must pass both description and guidelines in the update request as . If you only want to update one of the fields, pass the existing value for the other field.</p><p><code>displayName</code>: Only supports updating the display name for spaces where <code>spaceType</code> field is <code>SPACE</code>. If you receive the error message <code>ALREADY_EXISTS</code>, try a different value. An existing space within the Google Workspace organization might already use this display name.</p><p><code>spaceType</code>: Only supports changing a <code>GROUP_CHAT</code> space type to <code>SPACE</code>. Include <code>displayName</code> together with <code>spaceType</code> in the update mask and ensure that the specified space has a non-empty display name and the <code>SPACE</code> space type. Including the <code>spaceType</code> mask and the <code>SPACE</code> type in the specified space when updating the display name is optional if the existing space already has the <code>SPACE</code> type. Trying to update the space type in other ways results in an invalid argument error. <code>spaceType</code> is not supported with <code>useAdminAccess</code>.</p><p><code>spaceHistoryState</code>: Updates <a href="https://support.google.com/chat/answer/7664687">space history settings</a> by turning history on or off for the space. Only supported if history settings are enabled for the Google Workspace organization. To update the space history state, you must omit all other field masks in your request. <code>spaceHistoryState</code> is not supported with <code>useAdminAccess</code>.</p><p><code>accessSettings.audience</code>: Updates the <a href="https://support.google.com/chat/answer/11971020">access setting</a> of who can discover the space, join the space, and preview the messages in named space where <code>spaceType</code> field is <code>SPACE</code>. If the existing space has a target audience, you can remove the audience and restrict space access by omitting a value for this field mask. To update access settings for a space, the authenticating user must be a space manager and omit all other field masks in your request. You can't update this field if the space is in <a href="https://developers.google.com/workspace/chat/import-data-overview">import mode</a>. To learn more, see <a href="https://developers.google.com/workspace/chat/space-target-audience">Make a space discoverable to specific users</a>. <code>accessSettings.audience</code> is not supported with <code>useAdminAccess</code>.</p><p><code>permissionSettings</code>: Supports changing the <a href="https://support.google.com/chat/answer/13340792">permission settings</a> of a space. When updating permission settings, you can only specify <code>permissionSettings</code> field masks; you cannot update other field masks at the same time. The supported field masks include:</p><ul><li><code>permissionSettings.manageMembersAndGroups</code></li><li><code>permissionSettings.modifySpaceDetails</code></li><li><code>permissionSettings.toggleHistory</code></li><li><code>permissionSettings.useAtMentionAll</code></li><li><code>permissionSettings.manageApps</code></li><li><code>permissionSettings.manageWebhooks</code></li><li><code>permissionSettings.replyMessages</code></li></ul></td></tr><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.spaces</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p><p>Some <code>FieldMask</code> values are not supported using admin access. For details, see the description of <code>updateMask</code>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.spaces`
- `https://www.googleapis.com/auth/chat.admin.spaces`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.spaces`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
