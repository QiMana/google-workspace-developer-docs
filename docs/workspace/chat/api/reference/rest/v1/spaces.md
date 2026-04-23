---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces
root: workspace
fetched_at: 2026-04-23T15:25:06.244Z
---

# REST Resource: spaces

## Page Summary

- Google Chat Spaces are categorized as SPACE, GROUP\_CHAT, or DIRECT\_MESSAGE and contain properties like name, display name, threading state, and permission settings.
- Spaces can be COLLABORATION\_SPACE where all members can post or ANNOUNCEMENT\_SPACE where only managers can post.
- Permission settings, defined by PermissionSetting objects, control user actions such as managing members, modifying space details, posting messages, and using @all mentions.
- The Google Chat Spaces API allows for creating, deleting, updating, and retrieving spaces, as well as managing their members, permissions, and settings.
- Available API methods include `create`, `delete`, `get`, `list`, `patch`, and more to interact with and manage spaces programmatically.

## Resource: Space

A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.

JSON representation

```
{
  "name": string,
  "type": enum (Type),
  "spaceType": enum (SpaceType),
  "singleUserBotDm": boolean,
  "threaded": boolean,
  "displayName": string,
  "externalUserAllowed": boolean,
  "spaceThreadingState": enum (SpaceThreadingState),
  "spaceDetails": {
    object (SpaceDetails)
  },
  "spaceHistoryState": enum (HistoryState),
  "importMode": boolean,
  "createTime": string,
  "lastActiveTime": string,
  "adminInstalled": boolean,
  "membershipCount": {
    object (MembershipCount)
  },
  "accessSettings": {
    object (AccessSettings)
  },
  "spaceUri": string,
  "importModeExpireTime": string,
  "customer": string,

  "predefinedPermissionSettings": enum (PredefinedPermissionSettings),
  "permissionSettings": {
    object (PermissionSettings)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the space.</p><p>Format: <code>spaces/{space}</code></p><p>Where <code>{space}</code> represents the system-assigned ID for the space. You can obtain the space ID by calling the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list"><code>spaces.list()</code></a> method or from the space URL. For example, if the space URL is <code>https://mail.google.com/mail/u/0/#chat/space/AAAAAAAAA</code>, the space ID is <code>AAAAAAAAA</code>.</p></td></tr><tr><td><code>type<br><b>(deprecated)</b></code></td><td><p><code>enum (<code>Type</code>)</code></p><p>Output only. Deprecated: Use <code>spaceType</code> instead. The type of a space.</p></td></tr><tr><td><code>spaceType</code></td><td><p><code>enum (<code>SpaceType</code>)</code></p><p>Optional. The type of space. Required when creating a space or updating the space type of a space. Output only for other usage.</p></td></tr><tr><td><code>singleUserBotDm</code></td><td><p><code>boolean</code></p><p>Optional. Whether the space is a DM between a Chat app and a single human.</p></td></tr><tr><td><code>threaded<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Output only. Deprecated: Use <code>spaceThreadingState</code> instead. Whether messages are threaded in this space.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Optional. The space's display name. Required when <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/create">creating a space</a> with a <code>spaceType</code> of <code>SPACE</code>. If you receive the error message <code>ALREADY_EXISTS</code> when creating a space or updating the <code>displayName</code>, try a different <code>displayName</code>. An existing space within the Google Workspace organization might already use this display name.</p><p>For direct messages, this field might be empty.</p><p>Supports up to 128 characters.</p></td></tr><tr><td><code>externalUserAllowed</code></td><td><p><code>boolean</code></p><p>Optional. Immutable. Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions:</p><ul><li>The authenticated user uses a consumer account (unmanaged user account). By default, a space created by a consumer account permits any Google Chat user.</li></ul><p>For existing spaces, this field is output only.</p></td></tr><tr><td><code>spaceThreadingState</code></td><td><p><code>enum (<code>SpaceThreadingState</code>)</code></p><p>Output only. The threading state in the Chat space.</p></td></tr><tr><td><code>spaceDetails</code></td><td><p><code>object (<code>SpaceDetails</code>)</code></p><p>Optional. Details about the space including description and rules.</p></td></tr><tr><td><code>spaceHistoryState</code></td><td><p><code>enum (<code>HistoryState</code>)</code></p><p>Optional. The message history state for messages and threads in this space.</p></td></tr><tr><td><code>importMode</code></td><td><p><code>boolean</code></p><p>Optional. Whether this space is created in <code>Import Mode</code> as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete.</p><p>Creating a space in <code>Import Mode</code> requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a>.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional. Immutable. For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces.</p><p>For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time.</p><p>Only populated in the output when <code>spaceType</code> is <code>GROUP_CHAT</code> or <code>SPACE</code>.</p></td></tr><tr><td><code>lastActiveTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp of the last message in the space.</p></td></tr><tr><td><code>adminInstalled</code></td><td><p><code>boolean</code></p><p>Output only. For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator. Administrators can install and set up a direct message with a Chat app on behalf of users in their organization.</p><p>To support admin install, your Chat app must feature direct messaging.</p></td></tr><tr><td><code>membershipCount</code></td><td><p><code>object (<code>MembershipCount</code>)</code></p><p>Output only. The count of joined memberships grouped by member type. Populated when the <code>spaceType</code> is <code>SPACE</code>, <code>DIRECT_MESSAGE</code> or <code>GROUP_CHAT</code>.</p></td></tr><tr><td><code>accessSettings</code></td><td><p><code>object (<code>AccessSettings</code>)</code></p><p>Optional. Specifies the <a href="https://support.google.com/chat/answer/11971020">access setting</a> of the space. Only populated when the <code>spaceType</code> is <code>SPACE</code>.</p></td></tr><tr><td><code>spaceUri</code></td><td><p><code>string</code></p><p>Output only. The URI for a user to access the space.</p></td></tr><tr><td><code>importModeExpireTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time when the space will be automatically deleted by the system if it remains in import mode.</p><p>Each space created in import mode must exit this mode before this expire time using <code>spaces.completeImport</code>.</p><p>This field is only populated for spaces that were created with import mode.</p></td></tr><tr><td><code>customer</code></td><td><p><code>string</code></p><p>Optional. Immutable. The customer id of the domain of the space. Required only when creating a space with <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a> and <code>SpaceType</code> is <code>SPACE</code>, otherwise should not be set.</p><p>In the format <code>customers/{customer}</code>, where <code>customer</code> is the <code>id</code> from the <a href="https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers">Admin SDK customer resource</a>. Private apps can also use the <code>customers/my_customer</code> alias to create the space in the same Google Workspace organization as the app.</p><p>This field isn't populated for direct messages (DMs) or when the space is created by non-Google Workspace users.</p></td></tr><tr><td colspan="2">Union field <code>space_permission_settings</code>. Represents the <a href="https://support.google.com/chat/answer/13340792">permission settings</a> of a space. Only populated when the <code>space_type</code> is <code>SPACE</code>. <code>space_permission_settings</code> can be only one of the following:</td></tr><tr><td><code>predefinedPermissionSettings</code></td><td><p><code>enum (<code>PredefinedPermissionSettings</code>)</code></p><p>Optional. Input only. Predefined space permission settings, input only when creating a space. If the field is not set, a collaboration space is created. After you create the space, settings are populated in the <code>PermissionSettings</code> field.</p><p>Setting predefined permission settings supports:</p><ul><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">App authentication</a> with <a href="https://support.google.com/a?p=chat-app-auth">administrator approval</a> with the <code>chat.app.spaces</code> or <code>chat.app.spaces.create</code> scopes.</p></li><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">User authentication</a></p></li></ul></td></tr><tr><td><code>permissionSettings</code></td><td><p><code>object (<code>PermissionSettings</code>)</code></p><p>Optional. Space permission settings for existing spaces. Input for updating exact space permission settings, where existing permission settings are replaced. Output lists current permission settings.</p><p>Reading and updating permission settings supports:</p><ul><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">App authentication</a> with <a href="https://support.google.com/a?p=chat-app-auth">administrator approval</a> with the <code>chat.app.spaces</code> scope. Only populated and settable when the Chat app created the space.</p></li><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">User authentication</a></p></li></ul></td></tr></tbody></table>

### Type

Deprecated: Use `SpaceType` instead.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>ROOM</code></td><td>Conversations between two or more humans.</td></tr><tr><td><code>DM</code></td><td>1:1 Direct Message between a human and a Chat app, where all messages are flat. Note that this doesn't include direct messages between two humans.</td></tr></tbody></table>

### SpaceType

The type of space. Required when creating or updating a space. Output only for other usage.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SPACE_TYPE_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>SPACE</code></td><td>A place where people send messages, share files, and collaborate. A <code>SPACE</code> can include Chat apps.</td></tr><tr><td><code>GROUP_CHAT</code></td><td>Group conversations between 3 or more people. A <code>GROUP_CHAT</code> can include Chat apps.</td></tr><tr><td><code>DIRECT_MESSAGE</code></td><td>1:1 messages between two humans or a human and a Chat app.</td></tr></tbody></table>

### SpaceThreadingState

Specifies the type of threading state in the Chat space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SPACE_THREADING_STATE_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>THREADED_MESSAGES</code></td><td>Named spaces that support message threads. When users respond to a message, they can reply in-thread, which keeps their response in the context of the original message.</td></tr><tr><td><code>GROUPED_MESSAGES</code></td><td>Named spaces where the conversation is organized by topic. Topics and their replies are grouped together.</td></tr><tr><td><code>UNTHREADED_MESSAGES</code></td><td>Direct messages (DMs) between two people and group conversations between 3 or more people.</td></tr></tbody></table>

### SpaceDetails

Details about the space including description and rules.

JSON representation

```
{
  "description": string,
  "guidelines": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>description</code></td><td><p><code>string</code></p><p>Optional. A description of the space. For example, describe the space's discussion topic, functional purpose, or participants.</p><p>Supports up to 150 characters.</p></td></tr><tr><td><code>guidelines</code></td><td><p><code>string</code></p><p>Optional. The space's rules, expectations, and etiquette.</p><p>Supports up to 5,000 characters.</p></td></tr></tbody></table>

### HistoryState

The history state for messages and spaces. Specifies how long messages and conversation threads are kept after creation.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HISTORY_STATE_UNSPECIFIED</code></td><td>Default value. Do not use.</td></tr><tr><td><code>HISTORY_OFF</code></td><td>History off. <a href="https://support.google.com/chat/answer/7664687">Messages and threads are kept for 24 hours</a>.</td></tr><tr><td><code>HISTORY_ON</code></td><td>History on. The organization's <a href="https://support.google.com/vault/answer/7657597">Vault retention rules</a> specify for how long messages and threads are kept.</td></tr></tbody></table>

### MembershipCount

Represents the count of memberships of a space, grouped into categories.

JSON representation

```
{
  "joinedDirectHumanUserCount": integer,
  "joinedGroupCount": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>joinedDirectHumanUserCount</code></td><td><p><code>integer</code></p><p>Output only. Count of human users that have directly joined the space, not counting users joined by having membership in a joined group.</p></td></tr><tr><td><code>joinedGroupCount</code></td><td><p><code>integer</code></p><p>Output only. Count of all groups that have directly joined the space.</p></td></tr></tbody></table>

### AccessSettings

Represents the [access setting](https://support.google.com/chat/answer/11971020) of the space.

JSON representation

```
{
  "accessState": enum (AccessState),
  "audience": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>accessState</code></td><td><p><code>enum (<code>AccessState</code>)</code></p><p>Output only. Indicates the access state of the space.</p></td></tr><tr><td><code>audience</code></td><td><p><code>string</code></p><p>Optional. The resource name of the <a href="https://support.google.com/a/answer/9934697">target audience</a> who can discover the space, join the space, and preview the messages in the space. If unset, only users or Google Groups who have been individually invited or added to the space can access it. For details, see <a href="https://developers.google.com/workspace/chat/space-target-audience">Make a space discoverable to a target audience</a>.</p><p>Format: <code>audiences/{audience}</code></p><p>To use the default target audience for the Google Workspace organization, set to <code>audiences/default</code>.</p><p>Reading the target audience supports:</p><ul><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">User authentication</a></p></li><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">App authentication</a> with <a href="https://support.google.com/a?p=chat-app-auth">administrator approval</a> with the <code>chat.app.spaces</code> scope.</p></li></ul><p>This field is not populated when using the <code>chat.bot</code> scope with <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a>.</p><p>Setting the target audience requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a>.</p></td></tr></tbody></table>

### AccessState

Represents the access state of the space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ACCESS_STATE_UNSPECIFIED</code></td><td>Access state is unknown or not supported in this API.</td></tr><tr><td><code>PRIVATE</code></td><td>Only users or Google Groups that have been individually added or invited by other users or Google Workspace administrators can discover and access the space.</td></tr><tr><td><code>DISCOVERABLE</code></td><td><p>A space manager has granted a target audience access to the space. Users or Google Groups that have been individually added or invited to the space can also discover and access the space. To learn more, see <a href="https://developers.google.com/workspace/chat/space-target-audience">Make a space discoverable to specific users</a>.</p><p>Creating discoverable spaces requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a>.</p></td></tr></tbody></table>

### PredefinedPermissionSettings

Predefined permission settings that you can only specify when creating a named space. More settings might be added in the future. For details about permission settings for named spaces, see [Learn about spaces](https://support.google.com/chat/answer/7659784).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PREDEFINED_PERMISSION_SETTINGS_UNSPECIFIED</code></td><td>Unspecified. Don't use.</td></tr><tr><td><code>COLLABORATION_SPACE</code></td><td>Setting to make the space a collaboration space where all members can post messages.</td></tr><tr><td><code>ANNOUNCEMENT_SPACE</code></td><td>Setting to make the space an announcement space where only space managers can post messages.</td></tr></tbody></table>

### PermissionSettings

[Permission settings](https://support.google.com/chat/answer/13340792) that you can specify when updating an existing named space.

To set permission settings when creating a space, specify the `PredefinedPermissionSettings` field in your request.

JSON representation

```
{
  "manageMembersAndGroups": {
    object (PermissionSetting)
  },
  "modifySpaceDetails": {
    object (PermissionSetting)
  },
  "toggleHistory": {
    object (PermissionSetting)
  },
  "useAtMentionAll": {
    object (PermissionSetting)
  },
  "manageApps": {
    object (PermissionSetting)
  },
  "manageWebhooks": {
    object (PermissionSetting)
  },
  "postMessages": {
    object (PermissionSetting)
  },
  "replyMessages": {
    object (PermissionSetting)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>manageMembersAndGroups</code></td><td><p><code>object (<code>PermissionSetting</code>)</code></p><p>Optional. Setting for managing members and groups in a space.</p></td></tr><tr><td><code>modifySpaceDetails</code></td><td><p><code>object (<code>PermissionSetting</code>)</code></p><p>Optional. Setting for updating space name, avatar, description and guidelines.</p></td></tr><tr><td><code>toggleHistory</code></td><td><p><code>object (<code>PermissionSetting</code>)</code></p><p>Optional. Setting for toggling space history on and off.</p></td></tr><tr><td><code>useAtMentionAll</code></td><td><p><code>object (<code>PermissionSetting</code>)</code></p><p>Optional. Setting for using @all in a space.</p></td></tr><tr><td><code>manageApps</code></td><td><p><code>object (<code>PermissionSetting</code>)</code></p><p>Optional. Setting for managing apps in a space.</p></td></tr><tr><td><code>manageWebhooks</code></td><td><p><code>object (<code>PermissionSetting</code>)</code></p><p>Optional. Setting for managing webhooks in a space.</p></td></tr><tr><td><code>postMessages</code></td><td><p><code>object (<code>PermissionSetting</code>)</code></p><p>Output only. Setting for posting messages in a space.</p></td></tr><tr><td><code>replyMessages</code></td><td><p><code>object (<code>PermissionSetting</code>)</code></p><p>Optional. Setting for replying to messages in a space.</p></td></tr></tbody></table>

### PermissionSetting

Represents a space permission setting.

JSON representation

```
{
  "managersAllowed": boolean,
  "membersAllowed": boolean,
  "assistantManagersAllowed": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>managersAllowed</code></td><td><p><code>boolean</code></p><p>Optional. Whether space owners (<code><code>ROLE_MANAGER</code></code>) have this permission.</p></td></tr><tr><td><code>membersAllowed</code></td><td><p><code>boolean</code></p><p>Optional. Whether basic space members (<code><code>ROLE_MEMBER</code></code>) have this permission.</p></td></tr><tr><td><code>assistantManagersAllowed</code></td><td><p><code>boolean</code></p><p>Optional. Whether space managers <code><code>ROLE_ASSISTANT_MANAGER</code></code>) have this permission.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>completeImport</h3></td><td>Completes the <a href="https://developers.google.com/workspace/chat/import-data">import process</a> for the specified space and makes it visible to users.</td></tr><tr><td><h3>create</h3></td><td>Creates a space.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a named space.</td></tr><tr><td><h3>findDirectMessage</h3></td><td>Returns the existing direct message with the specified user.</td></tr><tr><td><h3>findGroupChats</h3></td><td>Returns all spaces with <code>spaceType == GROUP_CHAT</code>, whose human memberships contain exactly the calling user, and the users specified in <code>FindGroupChatsRequest.users</code>.</td></tr><tr><td><h3>get</h3></td><td>Returns details about a space.</td></tr><tr><td><h3>list</h3></td><td>Lists spaces the caller is a member of.</td></tr><tr><td><h3>patch</h3></td><td>Updates a space.</td></tr><tr><td><h3>search</h3></td><td>Returns a list of spaces in a Google Workspace organization based on an administrator's search.</td></tr><tr><td><h3>setup</h3></td><td>Creates a space and adds specified users to it.</td></tr></tbody></table>
