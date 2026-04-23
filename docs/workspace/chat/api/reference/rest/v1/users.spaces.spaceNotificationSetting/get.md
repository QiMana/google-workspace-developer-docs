---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.spaces.spaceNotificationSetting/get
root: workspace
fetched_at: 2026-04-23T15:25:10.479Z
---

# Method: users.spaces.spaceNotificationSetting.get

## Page Summary

- Retrieves the notification settings for a specific Google Chat space for the authenticated user.
- Requires providing the user and space identifiers in the request URL.
- Returns a `SpaceNotificationSetting` object containing the space's notification configuration details upon successful execution.
- Needs authorization with the `https://www.googleapis.com/auth/chat.users.spacesettings` scope for access.
- Available as part of the Google Workspace Developer Preview Program.

Gets the space notification setting. For an example, see [Get the caller's space notification setting](../../../../../get-space-notification-setting.md).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with the [authorization scope](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.spacesettings`

### HTTP request

`GET https://chat.googleapis.com/v1/{name=users/*/spaces/*/spaceNotificationSetting}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Format: users/{user}/spaces/{space}/spaceNotificationSetting</p><ul><li><code>users/me/spaces/{space}/spaceNotificationSetting</code>, OR</li><li><code>users/user@example.com/spaces/{space}/spaceNotificationSetting</code>, OR</li><li><code>users/123456789/spaces/{space}/spaceNotificationSetting</code>. Note: Only the caller's user id or email is allowed in the path.</li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.spacesettings`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
