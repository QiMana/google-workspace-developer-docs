---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.spaces.spaceNotificationSetting
root: workspace
fetched_at: 2026-04-23T15:25:10.100Z
---

# REST Resource: users.spaces.spaceNotificationSetting

## Page Summary

- SpaceNotificationSetting allows you to manage a user's notification settings within a Google Chat space.
- You can configure notification triggers for various events like @mentions, new threads, and followed threads using NotificationSetting.
- MuteSetting enables you to mute or unmute all notifications for a space, overriding the NotificationSetting.
- This feature is currently in Developer Preview and accessible through the Google Workspace Developer Preview Program.
- Use the `get` and `patch` methods to retrieve and update space notification settings respectively.

## Resource: SpaceNotificationSetting

The notification setting of a user in a space.

JSON representation

```
{
  "name": string,
  "notificationSetting": enum (NotificationSetting),
  "muteSetting": enum (MuteSetting)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the space notification setting. Format: <code>users/{user}/spaces/{space}/spaceNotificationSetting</code>.</p></td></tr><tr><td><code>notificationSetting</code></td><td><p><code>enum (<code>NotificationSetting</code>)</code></p><p>The notification setting.</p></td></tr><tr><td><code>muteSetting</code></td><td><p><code>enum (<code>MuteSetting</code>)</code></p><p>The space notification mute setting.</p></td></tr></tbody></table>

## NotificationSetting

The notification setting types. Other types might be supported in the future.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NOTIFICATION_SETTING_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>ALL</code></td><td>Notifications are triggered by @mentions, followed threads, first message of new threads. All new threads are automatically followed, unless manually unfollowed by the user.</td></tr><tr><td><code>MAIN_CONVERSATIONS</code></td><td>The notification is triggered by @mentions, followed threads, first message of new threads. Not available for 1:1 direct messages.</td></tr><tr><td><code>FOR_YOU</code></td><td>The notification is triggered by @mentions, followed threads. Not available for 1:1 direct messages.</td></tr><tr><td><code>OFF</code></td><td>Notification is off.</td></tr></tbody></table>

## MuteSetting

The space notification mute setting types.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>MUTE_SETTING_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>UNMUTED</code></td><td>The user will receive notifications for the space based on the notification setting.</td></tr><tr><td><code>MUTED</code></td><td>The user will not receive any notifications for the space, regardless of the notification setting.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets the space notification setting.</td></tr><tr><td><h3>patch</h3></td><td>Updates the space notification setting.</td></tr></tbody></table>
