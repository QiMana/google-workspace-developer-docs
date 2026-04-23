---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.spaces.spaceNotificationSetting/patch
root: workspace
fetched_at: 2026-04-23T15:25:10.558Z
---

# Method: users.spaces.spaceNotificationSetting.patch

## Page Summary

- This feature updates space notification state settings in Google Chat, allowing users to customize their notification preferences.
- Users can modify notification settings and mute settings for specific spaces.
- Requires user authentication and authorization with the `chat.users.spacesettings` scope.
- Developers can access this feature as part of the Google Workspace Developer Preview Program.
- Utilizes a PATCH request and gRPC Transcoding syntax for updating space notification settings.

Updates the space notification setting. For an example, see [Update the caller's space notification setting](https://developers.google.com/workspace/chat/update-space-notification-setting).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.spacesettings`

### HTTP request

`PATCH https://chat.googleapis.com/v1/{spaceNotificationSetting.name=users/*/spaces/*/spaceNotificationSetting}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spaceNotificationSetting.name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the space notification setting. Format: <code>users/{user}/spaces/{space}/spaceNotificationSetting</code>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. Supported field paths:</p><ul><li><p><code>notificationSetting</code></p></li><li><p><code>muteSetting</code></p></li></ul></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.spacesettings`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
