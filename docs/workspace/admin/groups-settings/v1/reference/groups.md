---
source: https://developers.google.com/workspace/admin/groups-settings/v1/reference/groups
root: workspace
fetched_at: 2026-04-23T15:23:57.729Z
---

# Groups

A Groups resource is the root data class for the Groups Settings API. Each Groups resource is associated with a collection of settings.

For more information, see a list of [methods](#methods) for this resource.

## Resource representations

A Groups resource includes metadata with a summary of a specified group's settings. These settings manage the group's access, notifications, discussion archiving, message moderation, and customize your account's user groups.

By default, the Groups resource data is returned in the JSON data format.

### Atom

```
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:apps="http://schemas.google.com/apps/2006" xmlns:gd="http://schemas.google.com/g/2005">
  <id>
    string
  </id>
  <title>
    Groups Resource Entry
  </title>
  <content type="text">
    string
  </content>
  <>
    <name>
      Google
    </name>
  </>
  <apps:email>
    string
  </apps:email>
  <apps:name>
    string
  </apps:name>
  <apps:description>
    string
  </apps:description>
  <apps:whoCanJoin>
    string
  </apps:whoCanJoin>
  <apps:whoCanViewMembership>
    string
  </apps:whoCanViewMembership>
  <apps:whoCanViewGroup>
    string
  </apps:whoCanViewGroup>
  <apps:whoCanInvite>
    string
  </apps:whoCanInvite>
  <apps:whoCanAdd>
    string
  </apps:whoCanAdd>
  <apps:allowExternalMembers>
    string
  </apps:allowExternalMembers>
  <apps:whoCanPostMessage>
    string
  </apps:whoCanPostMessage>
  <apps:allowWebPosting>
    string
  </apps:allowWebPosting>
  <apps:primaryLanguage>
    string
  </apps:primaryLanguage>
  <apps:maxMessageBytes>
    integer
  </apps:maxMessageBytes>
  <apps:isArchived>
    string
  </apps:isArchived>
  <apps:archiveOnly>
    string
  </apps:archiveOnly>
  <apps:messageModerationLevel>
    string
  </apps:messageModerationLevel>
  <apps:spamModerationLevel>
    string
  </apps:spamModerationLevel>
  <apps:replyTo>
    string
  </apps:replyTo>
  <apps:customReplyTo>
    string
  </apps:customReplyTo>
  <apps:includeCustomFooter>
    string
  </apps:includeCustomFooter>
  <apps:customFooterText>
    string
  </apps:customFooterText>
  <apps:sendMessageDenyNotification>
    string
  </apps:sendMessageDenyNotification>
  <apps:defaultMessageDenyNotificationText>
    string
  </apps:defaultMessageDenyNotificationText>
  <apps:showInGroupDirectory>
    string
  </apps:showInGroupDirectory>
  <apps:allowGoogleCommunication>
    string
  </apps:allowGoogleCommunication>
  <apps:membersCanPostAsTheGroup>
    string
  </apps:membersCanPostAsTheGroup>
  <apps:messageDisplayFont>
    string
  </apps:messageDisplayFont>
  <apps:includeInGlobalAddressList>
    string
  </apps:includeInGlobalAddressList>
  <apps:whoCanLeaveGroup>
    string
  </apps:whoCanLeaveGroup>
  <apps:whoCanContactOwner>
    string
  </apps:whoCanContactOwner>
  <apps:whoCanAddReferences>
    string
  </apps:whoCanAddReferences>
  <apps:whoCanAssignTopics>
    string
  </apps:whoCanAssignTopics>
  <apps:whoCanUnassignTopic>
    string
  </apps:whoCanUnassignTopic>
  <apps:whoCanTakeTopics>
    string
  </apps:whoCanTakeTopics>
  <apps:whoCanMarkDuplicate>
    string
  </apps:whoCanMarkDuplicate>
  <apps:whoCanMarkNoResponseNeeded>
    string
  </apps:whoCanMarkNoResponseNeeded>
  <apps:whoCanMarkFavoriteReplyOnAnyTopic>
    string
  </apps:whoCanMarkFavoriteReplyOnAnyTopic>
  <apps:whoCanMarkFavoriteReplyOnOwnTopic>
    string
  </apps:whoCanMarkFavoriteReplyOnOwnTopic>
  <apps:whoCanUnmarkFavoriteReplyOnAnyTopic>
    string
  </apps:whoCanUnmarkFavoriteReplyOnAnyTopic>
  <apps:whoCanEnterFreeFormTags>
    string
  </apps:whoCanEnterFreeFormTags>
  <apps:whoCanModifyTagsAndCategories>
    string
  </apps:whoCanModifyTagsAndCategories>
  <apps:favoriteRepliesOnTop>
    string
  </apps:favoriteRepliesOnTop>
  <apps:whoCanApproveMembers>
    string
  </apps:whoCanApproveMembers>
  <apps:whoCanBanUsers>
    string
  </apps:whoCanBanUsers>
  <apps:whoCanModifyMembers>
    string
  </apps:whoCanModifyMembers>
  <apps:whoCanApproveMessages>
    string
  </apps:whoCanApproveMessages>
  <apps:whoCanDeleteAnyPost>
    string
  </apps:whoCanDeleteAnyPost>
  <apps:whoCanDeleteTopics>
    string
  </apps:whoCanDeleteTopics>
  <apps:whoCanLockTopics>
    string
  </apps:whoCanLockTopics>
  <apps:whoCanMoveTopicsIn>
    string
  </apps:whoCanMoveTopicsIn>
  <apps:whoCanMoveTopicsOut>
    string
  </apps:whoCanMoveTopicsOut>
  <apps:whoCanPostAnnouncements>
    string
  </apps:whoCanPostAnnouncements>
  <apps:whoCanHideAbuse>
    string
  </apps:whoCanHideAbuse>
  <apps:whoCanMakeTopicsSticky>
    string
  </apps:whoCanMakeTopicsSticky>
  <apps:whoCanModerateMembers>
    string
  </apps:whoCanModerateMembers>
  <apps:whoCanModerateContent>
    string
  </apps:whoCanModerateContent>
  <apps:whoCanAssistContent>
    string
  </apps:whoCanAssistContent>
  <apps:customRolesEnabledForSettingsToBeMerged>
    string
  </apps:customRolesEnabledForSettingsToBeMerged>
  <apps:enableCollaborativeInbox>
    string
  </apps:enableCollaborativeInbox>
  <apps:whoCanDiscoverGroup>
    string
  </apps:whoCanDiscoverGroup>
  <apps:defaultSender>
    string
  </apps:defaultSender>
</entry>
```

The following table shows the Groups resources:

| Property name | Value | Description |
| --- | --- | --- |
| `entry` | `object` | A Group resource |
| `entry/xmlns` | `string` | Schema for Atom format |
| `entry/xmlns:apps` | `string` | Schema for Google Workspace I/O format |
| `entry/xmlns:gd` | `string` | Schema for Google Data protocol |
| `entry/id` | `object` | Unique identifier for a Group resource |
| `entry/title` | `object` | Title of the API's Atom entry, which is `Groups Resource Entry` |
| `entry/content` | `object` | Content type of Atom entry |
| `entry/content/type` | `string` | Content type of the Atom feed, which is `text` |
| `entry/author` | `object` | Author tag for Atom entry |
| `entry/author/name` | `object` | Name of the author, which is `Google` |
| `entry/apps:email` | `object` | The group's email address. This property can be updated using the [Directory API](../../../directory/v1/guides/manage-groups.md). |
| `entry/apps:name` | `object` | The group name. A group's name has a maximum of 75 characters. |
| `entry/apps:description` | `object` | The description of the group. This property value can be an empty string if no group description has been entered. If entered, the maximum group description is no more than 4,096 characters. |
| `entry/apps:whoCanJoin` | `object` | Permission to join group. Possible values are: - `ANYONE_CAN_JOIN`: Any internet user, both inside and outside your domain, can join the group. - `ALL_IN_DOMAIN_CAN_JOIN`: Anyone in the account domain can join. This includes accounts with multiple domains. - `INVITED_CAN_JOIN`: Candidates for membership can be invited to join. - `CAN_REQUEST_TO_JOIN`: Non members can request an invitation to join. |
| `entry/apps:whoCanViewMembership` | `object` | Permissions to view membership. Possible values are: - `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in the account can view the group members list. 	If a group already has external members, those members can still send email to this group. - `ALL_MEMBERS_CAN_VIEW`: The group members can view the group members list. - `ALL_MANAGERS_CAN_VIEW`: The group managers can view group members list. |
| `entry/apps:whoCanViewGroup` | `object` | Permissions to view group messages. Possible values are: - `ANYONE_CAN_VIEW`: Any internet user can view the group's messages. - `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in your account can view this group's messages. - `ALL_MEMBERS_CAN_VIEW`: All group members can view the group's messages. - `ALL_MANAGERS_CAN_VIEW`: Any group manager can view this group's messages. - `ALL_OWNERS_CAN_VIEW`: Any group owner can view this group's messages. |
| `entry/apps:whoCanInvite` | `object` | **Deprecated**. This is merged into the `whoCanModerateMembers` setting. Permissions to invite new members. Possible values are: - `ALL_MEMBERS_CAN_INVITE`: Managers and members can invite a new member candidate. - `ALL_MANAGERS_CAN_INVITE`: Only managers can invite a new member. This includes the group's owner. - `ALL_OWNERS_CAN_INVITE`: Only owners can invite a new member. - `NONE_CAN_INVITE`: No one can invite a new member candidate. |
| `entry/apps:whoCanAdd` | `object` | **Deprecated**. This is merged into the `whoCanModerateMembers` setting. Permissions to directly add new members. Possible values are: - `ALL_MEMBERS_CAN_ADD`: Managers and members can directly add new members. - `ALL_MANAGERS_CAN_ADD`: Only managers can directly add new members. This includes the group's owner. - `ALL_OWNERS_CAN_ADD`: Only owners can directly add new members. - `NONE_CAN_ADD`: No one can directly add new members. |
| `entry/apps:allowExternalMembers` | `object` | Identifies whether members external to your organization can join the group. Possible values are: - `true`: Google Workspace users external to your organization can become members of this group. - `false`: Users not belonging to the organization are not allowed to become members of this group. |
| `entry/apps:whoCanPostMessage` | `object` | Permissions to post messages. Possible values are: - `NONE_CAN_POST`: The group is disabled and archived. No one can post a message to this group. 	- When archiveOnly is `false`, updating `whoCanPostMessage` to `NONE_CAN_POST`, results in an error. 		- If archiveOnly is reverted from `true` to `false`, `whoCanPostMessages` is set to `ALL_MANAGERS_CAN_POST`. - `ALL_MANAGERS_CAN_POST`: Managers, including group owners, can post messages. - `ALL_MEMBERS_CAN_POST`: Any group member can post a message. - `ALL_OWNERS_CAN_POST`: Only group owners can post a message. - `ALL_IN_DOMAIN_CAN_POST`: Anyone in the account can post a message. - `ANYONE_CAN_POST`: Any internet user who outside your account can access your Google Groups service and post a message. |
| `entry/apps:allowWebPosting` | `object` | Allows posting from web. Possible values are: - `true`: Allows any member to post to the group forum. - `false`: Members only use Gmail to communicate with the group. |
| `entry/apps:primaryLanguage` | `object` | The primary language for the group. Use the language tags in the [Supported languages](#supported-languages) table. |
| `entry/apps:maxMessageBytes` | `object` | **Deprecated**. The maximum size of a message is 25 MB. |
| `entry/apps:isArchived` | `object` | Allows the Group contents to be archived. Possible values are: - `true`: Archive messages sent to the group. - `false`: Do not keep an archive of messages sent to this group. If `false`, previously archived messages remain in the archive. |
| `entry/apps:archiveOnly` | `object` | Allows the group to be archived only. Possible values are: - `true`: Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browsable and searchable. 	- If `true`, the `whoCanPostMessage` property is set to `NONE_CAN_POST`. 		- If reverted from `true` to `false`, whoCanPostMessages is set to `ALL_MANAGERS_CAN_POST`. - `false`: The group is active and can receive messages. 	- When `false`, updating `whoCanPostMessage` to `NONE_CAN_POST`, results in an error. |
| `entry/apps:messageModerationLevel` | `object` | Moderation level of incoming messages. Possible values are: - `MODERATE_ALL_MESSAGES`: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group. - `MODERATE_NON_MEMBERS`: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group. - `MODERATE_NEW_MEMBERS`: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group. - `MODERATE_NONE`: No moderator approval is required. Messages are delivered directly to the group. |
| `entry/apps:spamModerationLevel` | `object` | Specifies moderation levels for messages detected as spam. Possible values are: - `ALLOW`: Post the message to the group. - `MODERATE`: Send the message to the moderation queue. This is the default. - `SILENTLY_MODERATE`: Send the message to the moderation queue, but do not send notification to moderators. - `REJECT`: Immediately reject the message. |
| `entry/apps:replyTo` | `object` | Specifies who the default reply should go to. Possible values are: - `REPLY_TO_CUSTOM`: For replies to messages, use the group's custom email address. 	When the group's `ReplyTo` property is set to `REPLY_TO_CUSTOM`, the `customReplyTo` property holds the custom email address used when replying to a message. If the group's `ReplyTo` property is set to `REPLY_TO_CUSTOM`, the `customReplyTo` property must have a value. Otherwise an error is returned. - `REPLY_TO_SENDER`: The reply sent to author of message. - `REPLY_TO_LIST`: This reply message is sent to the group. - `REPLY_TO_OWNER`: The reply is sent to the owners of the group. This doesn't include the group's managers. - `REPLY_TO_IGNORE`: Group users individually decide where the message reply is sent. - `REPLY_TO_MANAGERS`: This reply message is sent to the group's managers, which includes all managers and the group owner. |
| `entry/apps:customReplyTo` | `object` | An email address used when replying to a message if the `replyTo` property is set to `REPLY_TO_CUSTOM`. This address is defined by an account administrator. - When the group's `ReplyTo` property is set to `REPLY_TO_CUSTOM`, the `customReplyTo` property holds a custom email address used when replying to a message. - If the group's `ReplyTo` property is set to `REPLY_TO_CUSTOM`, the `customReplyTo` property must have a text value or an error is returned. |
| `entry/apps:sendMessageDenyNotification` | `object` | Allows a member to be notified if the member's message to the group is denied by the group owner. Possible values are: - `true`: When a message is rejected, send the deny message notification to the message author. 	The `defaultMessageDenyNotificationText` property is dependent on the `sendMessageDenyNotification` property being `true`. - `false`: When a message is rejected, no notification is sent. |
| `entry/apps:defaultMessageDenyNotificationText` | `object` | When a message is rejected, this is text for the rejection notification sent to the message's author. By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. |
| `entry/apps:showInGroupDirectory` | `object` | **Deprecated**. This is merged into the `whoCanDiscoverGroup` setting. Allows the group to be visible in the Groups Directory. Possible values are: - `true`: All groups in the account are listed in the Groups directory. - `false`: All groups in the account are not listed in the directory. |
| `entry/apps:allowGoogleCommunication` | `object` | **Deprecated**. Allows Google to contact administrator of the group. - `true`: Allow Google to contact managers of this group. Occasionally Google may send updates on the latest features, ask for input on new features, or ask for permission to highlight your group. - `false`: Google can not contact managers of this group. |
| `entry/apps:membersCanPostAsTheGroup` | `object` | Enables members to post messages as the group. Possible values are: - `true`: Group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. - `false`: Members can not post in behalf of the group's email address. |
| `entry/apps:messageDisplayFont` | `object` | **Deprecated**. The default message display font always has a value of `DEFAULT_FONT`. |
| `entry/apps:includeInGlobalAddressList` | `object` | Enables the group to be included in the Global Address List. For more information, see the [help center](https://support.google.com/a/bin/answer.py?answer=166870). Possible values are: - `true`: Group is included in the Global Address List. - `false`: Group is not included in the Global Address List. |
| `entry/apps:whoCanLeaveGroup` | `object` | Specifies who can leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE` |
| `entry/apps:whoCanContactOwner` | `object` | Specifies who can contact the group owner. Possible values are: - `ALL_IN_DOMAIN_CAN_CONTACT` - `ALL_MANAGERS_CAN_CONTACT` - `ALL_MEMBERS_CAN_CONTACT` - `ANYONE_CAN_CONTACT` |
| `entry/apps:whoCanAddReferences` | `object` | **Deprecated**. This functionality is no longer supported in the Google Groups UI. The value is always `NONE`. |
| `entry/apps:whoCanAssignTopics` | `object` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Specifies who can assign topics in a forum to another user. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanUnassignTopic` | `object` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Specifies who can unassign any topic in a forum. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanTakeTopics` | `object` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Specifies who can take topics in a forum. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanMarkDuplicate` | `object` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Specifies who can mark a topic as a duplicate of another topic. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanMarkNoResponseNeeded` | `object` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Specifies who can mark a topic as not needing a response. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanEnterFreeFormTags` | `object` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Specifies who can enter free form tags for topics in a forum. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanModifyTagsAndCategories` | `object` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Specifies who can change tags and categories. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanApproveMembers` | `object` | **Deprecated**. This is merged into the `whoCanModerateMembers` setting. Specifies who can approve members who ask to join groups. Possible values are: - `ALL_MEMBERS_CAN_APPROVE` - `ALL_MANAGERS_CAN_APPROVE` - `ALL_OWNERS_CAN_APPROVE` - `NONE_CAN_APPROVE` |
| `entry/apps:whoCanBanUsers` | `object` | **Deprecated**. This is merged into the `whoCanModerateMembers` setting. Specifies who can deny membership to users. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanModifyMembers` | `object` | **Deprecated**. This is merged into the `whoCanModerateMembers` setting. Specifies who can change group members' roles. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanApproveMessages` | `object` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can approve pending messages in the moderation queue. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanDeleteAnyPost` | `object` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can delete replies to topics. (Authors can always delete their own posts). Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanDeleteTopics` | `object` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can delete topics. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanLockTopics` | `object` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can prevent users from posting replies to topics. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanMoveTopicsIn` | `object` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can move topics into the group or forum. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanMoveTopicsOut` | `object` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can move topics out of the group or forum. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanPostAnnouncements` | `object` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can post announcements, a special topic type. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanHideAbuse` | `object` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can hide posts by reporting them as abuse. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanMakeTopicsSticky` | `object` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can make topics appear at the top of the topic list. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanModerateMembers` | `object` | Specifies who can manage members. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanModerateContent` | `object` | Specifies who can moderate content. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:whoCanAssistContent` | `object` | Specifies who can moderate metadata. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `entry/apps:customRolesEnabledForSettingsToBeMerged` | `object` | Specifies whether the group has a custom role that's included in one of the settings being merged. This field is read-only and `UPDATE` and `PATCH` requests to it are ignored. Possible values are: - `true` - `false` |
| `entry/apps:enableCollaborativeInbox` | `object` | Specifies whether a collaborative inbox will remain turned on for the group. Possible values are: - `true` - `false` |
| `entry/apps:whoCanDiscoverGroup` | `object` | Specifies the set of users for whom this group is discoverable. Possible values are: - `ANYONE_CAN_DISCOVER` - `ALL_IN_DOMAIN_CAN_DISCOVER` - `ALL_MEMBERS_CAN_DISCOVER` |
| `entry/apps:defaultSender` | `object` | Default sender for members who can post messages as the group. Possible values are: - `DEFAULT_SELF` - `GROUP` |

### JSON

```
{
  "kind": "groupsSettings#groups",
  "email": string,
  "name": string,
  "description": string,
  "whoCanJoin": string,
  "whoCanViewMembership": string,
  "whoCanViewGroup": string,
  "whoCanInvite": string,
  "whoCanAdd": string,
  "allowExternalMembers": string,
  "whoCanPostMessage": string,
  "allowWebPosting": string,
  "primaryLanguage": string,
  "maxMessageBytes": integer,
  "isArchived": string,
  "archiveOnly": string,
  "messageModerationLevel": string,
  "spamModerationLevel": string,
  "replyTo": string,
  "customReplyTo": string,
  "includeCustomFooter": string,
  "customFooterText": string,
  "sendMessageDenyNotification": string,
  "defaultMessageDenyNotificationText": string,
  "showInGroupDirectory": string,
  "allowGoogleCommunication": string,
  "membersCanPostAsTheGroup": string,
  "messageDisplayFont": string,
  "includeInGlobalAddressList": string,
  "whoCanLeaveGroup": string,
  "whoCanContactOwner": string,
  "whoCanAddReferences": string,
  "whoCanAssignTopics": string,
  "whoCanUnassignTopic": string,
  "whoCanTakeTopics": string,
  "whoCanMarkDuplicate": string,
  "whoCanMarkNoResponseNeeded": string,
  "whoCanMarkFavoriteReplyOnAnyTopic": string,
  "whoCanMarkFavoriteReplyOnOwnTopic": string,
  "whoCanUnmarkFavoriteReplyOnAnyTopic": string,
  "whoCanEnterFreeFormTags": string,
  "whoCanModifyTagsAndCategories": string,
  "favoriteRepliesOnTop": string,
  "whoCanApproveMembers": string,
  "whoCanBanUsers": string,
  "whoCanModifyMembers": string,
  "whoCanApproveMessages": string,
  "whoCanDeleteAnyPost": string,
  "whoCanDeleteTopics": string,
  "whoCanLockTopics": string,
  "whoCanMoveTopicsIn": string,
  "whoCanMoveTopicsOut": string,
  "whoCanPostAnnouncements": string,
  "whoCanHideAbuse": string,
  "whoCanMakeTopicsSticky": string,
  "whoCanModerateMembers": string,
  "whoCanModerateContent": string,
  "whoCanAssistContent": string,
  "customRolesEnabledForSettingsToBeMerged": string,
  "enableCollaborativeInbox": string,
  "whoCanDiscoverGroup": string,
  "defaultSender": string
}
```

The following table shows the Groups resources:

| Property name | Value | Description |
| --- | --- | --- |
| `kind` | `string` | The type of the resource. It is always `groupsSettings#groups`. |
| `email` | `string` | The group's email address. This property can be updated using the [Directory API](../../../directory/v1/guides/manage-groups.md). |
| `name` | `string` | Name of the group, which has a maximum size of 75 characters. |
| `description` | `string` | Description of the group. This property value can be an empty string if no group description has been entered. If entered, the maximum group description is no more than 4,096 characters. |
| `whoCanJoin` | `string` | Permission to join group. Possible values are: - `ANYONE_CAN_JOIN`: Any internet user, both inside and outside your domain, can join the group. - `ALL_IN_DOMAIN_CAN_JOIN`: Anyone in the account domain can join. This includes accounts with multiple domains. - `INVITED_CAN_JOIN`: Candidates for membership can be invited to join. - `CAN_REQUEST_TO_JOIN`: Non members can request an invitation to join. |
| `whoCanViewMembership` | `string` | Permissions to view membership. Possible values are: - `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in the account can view the group members list. 	If a group already has external members, those members can still send email to this group. - `ALL_MEMBERS_CAN_VIEW`: The group members can view the group members list. - `ALL_MANAGERS_CAN_VIEW`: The group managers can view group members list. |
| `whoCanViewGroup` | `string` | Permissions to view group messages. Possible values are: - `ANYONE_CAN_VIEW`: Any internet user can view the group's messages. - `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in your account can view this group's messages. - `ALL_MEMBERS_CAN_VIEW`: All group members can view the group's messages. - `ALL_MANAGERS_CAN_VIEW`: Any group manager can view this group's messages. |
| `whoCanInvite` | `string` | **Deprecated**. This is merged into the `whoCanModerateMembers` setting. Permissions to invite new members. Possible values are: - `ALL_MEMBERS_CAN_INVITE`: Managers and members can invite a new member candidate. - `ALL_MANAGERS_CAN_INVITE`: Only managers can invite a new member. This includes the group's owner. - `ALL_OWNERS_CAN_INVITE`: Only owners can invite a new member. - `NONE_CAN_INVITE`: No one can invite a new member candidate. |
| `whoCanAdd` | `string` | **Deprecated**. This is merged into the `whoCanModerateMembers` setting. Permissions to add members. Possible values are: - `ALL_MEMBERS_CAN_ADD`: Managers and members can directly add new members. - `ALL_MANAGERS_CAN_ADD`: Only managers can directly add new members. this includes the group's owner. - `ALL_OWNERS_CAN_ADD`: Only owners can directly add new members. - `NONE_CAN_ADD`: No one can directly add new members. |
| `allowExternalMembers` | `string` | Identifies whether members external to your organization can join the group. Possible values are: - `true`: Google Workspace users external to your organization can become members of this group. - `false`: Users not belonging to the organization are not allowed to become members of this group. |
| `whoCanPostMessage` | `string` | Permissions to post messages. Possible values are: - `NONE_CAN_POST`: The group is disabled and archived. No one can post a message to this group. 	- When `archiveOnly` is `false`, updating `whoCanPostMessage` to `NONE_CAN_POST`, results in an error. 		- If `archiveOnly` is reverted from `true` to `false`, `whoCanPostMessages` is set to `ALL_MANAGERS_CAN_POST`. - `ALL_MANAGERS_CAN_POST`: Managers, including group owners, can post messages. - `ALL_MEMBERS_CAN_POST`: Any group member can post a message. - `ALL_OWNERS_CAN_POST`: Only group owners can post a message. - `ALL_IN_DOMAIN_CAN_POST`: Anyone in the account can post a message. - `ANYONE_CAN_POST`: Any internet user who outside your account can access your Google Groups service and post a message. |
| `allowWebPosting` | `string` | Allows posting from web. Possible values are: - `true`: Allows any member to post to the group forum. - `false`: Members only use Gmail to communicate with the group. |
| `primaryLanguage` | `string` | The primary language for the group. Use the language tags in the [Supported languages](#supported-languages) table. |
| `maxMessageBytes` | `integer` | **Deprecated**. The maximum size of a message is 25 MB. |
| `isArchived` | `string` | Allows the Group contents to be archived. Possible values are: - `true`: Archive messages sent to the group. - `false`: Do not keep an archive of messages sent to this group. If `false`, previously archived messages remain in the archive. |
| `archiveOnly` | `string` | Allows the group to be archived only. Possible values are: - `true`: Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browsable and searchable. 	- If `true`, the `whoCanPostMessage` property is set to `NONE_CAN_POST`. 		- If reverted from `true` to `false`, whoCanPostMessages is set to `ALL_MANAGERS_CAN_POST`. - `false`: The group is active and can receive messages. 	- When `false`, updating `whoCanPostMessage` to `NONE_CAN_POST`, results in an error. |
| `messageModerationLevel` | `string` | Moderation level of incoming messages. Possible values are: - `MODERATE_ALL_MESSAGES`: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group. - `MODERATE_NON_MEMBERS`: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group. - `MODERATE_NEW_MEMBERS`: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group. - `MODERATE_NONE`: No moderator approval is required. Messages are delivered directly to the group. |
| `spamModerationLevel` | `string` | Specifies moderation levels for messages detected as spam. Possible values are: - `ALLOW`: Post the message to the group. - `MODERATE`: Send the message to the moderation queue. This is the default. - `SILENTLY_MODERATE`: Send the message to the moderation queue, but do not send notification to moderators. - `REJECT`: Immediately reject the message. |
| `replyTo` | `string` | Specifies who receives the default reply. Possible values are: - `REPLY_TO_CUSTOM`: For replies to messages, use the group's custom email address. 	When the group's `ReplyTo` property is set to `REPLY_TO_CUSTOM`, the `customReplyTo` property holds the custom email address used when replying to a message. If the group's `ReplyTo` property is set to `REPLY_TO_CUSTOM`, the `customReplyTo` property must have a value. Otherwise an error is returned. - `REPLY_TO_SENDER`: The reply sent to author of message. - `REPLY_TO_LIST`: This reply message is sent to the group. - `REPLY_TO_OWNER`: The reply is sent to the owner(s) of the group. This does not include the group's managers. - `REPLY_TO_IGNORE`: Group users individually decide where the message reply is sent. - `REPLY_TO_MANAGERS`: This reply message is sent to the group's managers, which includes all managers and the group owner. |
| `customReplyTo` | `string` | An email address used when replying to a message if the `replyTo` property is set to `REPLY_TO_CUSTOM`. This address is defined by an account administrator. - When the group's `ReplyTo` property is set to `REPLY_TO_CUSTOM`, the `customReplyTo` property holds a custom email address used when replying to a message. - If the group's `ReplyTo` property is set to `REPLY_TO_CUSTOM`, the `customReplyTo` property must have a text value or an error is returned. |
| `sendMessageDenyNotification` | `string` | Allows a member to be notified if the member's message to the group is denied by the group owner. Possible values are: - `true`: When a message is rejected, send the deny message notification to the message author. 	The `defaultMessageDenyNotificationText` property is dependent on the `sendMessageDenyNotification` property being `true`. - `false`: When a message is rejected, no notification is sent. |
| `defaultMessageDenyNotificationText` | `string` | When a message is rejected, this is text for the rejection notification sent to the message's author. By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. |
| `showInGroupDirectory` | `string` | **Deprecated**. This is merged into the `whoCanDiscoverGroup` setting. Allows the group to be visible in the Groups Directory. Possible values are: - `true`: All groups in the account are listed in the Groups directory. - `false`: All groups in the account are not listed in the directory. |
| `allowGoogleCommunication` | `string` | **Deprecated**. Allows Google to contact administrator of the group. - `true`: Allow Google to contact managers of this group. Occasionally Google may send updates on the latest features, ask for input on new features, or ask for permission to highlight your group. - `false`: Google can not contact managers of this group. |
| `membersCanPostAsTheGroup` | `string` | Enables members to post messages as the group. Possible values are: - `true`: Group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. - `false`: Members can not post in behalf of the group's email address. |
| `messageDisplayFont` | `string` | **Deprecated**. The default message display font always has a value of `DEFAULT_FONT`. |
| `includeInGlobalAddressList` | `string` | Enables the group to be included in the Global Address List. For more information, see the [help center](https://support.google.com/a/bin/answer.py?answer=166870). Possible values are: - `true`: Group is included in the Global Address List. - `false`: Group is not included in the Global Address List. |
| `whoCanLeaveGroup` | `string` | Permission to leave the group. Possible values are: - `ALL_MANAGERS_CAN_LEAVE` - `ALL_MEMBERS_CAN_LEAVE` - `NONE_CAN_LEAVE` |
| `whoCanContactOwner` | `string` | Permission to contact owner of the group via web UI. Possible values are: - `ALL_IN_DOMAIN_CAN_CONTACT` - `ALL_MANAGERS_CAN_CONTACT` - `ALL_MEMBERS_CAN_CONTACT` - `ANYONE_CAN_CONTACT` |
| `whoCanAddReferences` | `string` | **Deprecated.** This functionality is no longer supported in the Google Groups UI. The value is always "NONE". |
| `whoCanAssignTopics` | `string` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Permission to assign topics in a forum to another user. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `whoCanUnassignTopic` | `string` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Permission to unassign any topic in a forum. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `whoCanTakeTopics` | `string` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Permission to take topics in a forum. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `whoCanMarkDuplicate` | `string` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Permission to mark a topic as a duplicate of another topic. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `whoCanMarkNoResponseNeeded` | `string` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Permission to mark a topic as not needing a response. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `whoCanEnterFreeFormTags` | `string` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Permission to enter free form tags for topics in a forum. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `whoCanModifyTagsAndCategories` | `string` | **Deprecated**. This is merged into the `whoCanAssistContent` setting. Permission to change tags and categories. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `whoCanApproveMembers` | `string` | **Deprecated**. This is merged into the `whoCanModerateMembers` setting. Specifies who can approve members who ask to join groups. Possible values are: - `ALL_MEMBERS_CAN_APPROVE` - `ALL_MANAGERS_CAN_APPROVE` - `ALL_OWNERS_CAN_APPROVE` - `NONE_CAN_APPROVE` |
| `whoCanBanUsers` | `string` | **Deprecated**. This is merged into the `whoCanModerateMembers` setting. Specifies who can deny membership to users. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanModifyMembers` | `string` | **Deprecated**. This is merged into the `whoCanModerateMembers` setting. Specifies who can change group members' roles. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanApproveMessages` | `string` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can approve pending messages in the moderation queue. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanDeleteAnyPost` | `string` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can delete replies to topics. (Authors can always delete their own posts). Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanDeleteTopics` | `string` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can delete topics. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanLockTopics` | `string` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can prevent users from posting replies to topics. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanMoveTopicsIn` | `string` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can move topics into the group or forum. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanMoveTopicsOut` | `string` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can move topics out of the group or forum. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanPostAnnouncements` | `string` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can post announcements, a special topic type. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanHideAbuse` | `string` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can hide posts by reporting them as abuse. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanMakeTopicsSticky` | `string` | **Deprecated**. This is merged into the `whoCanModerateContent` setting. Specifies who can make topics appear at the top of the topic list. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanModerateMembers` | `string` | Specifies who can manage members. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanModerateContent` | `string` | Specifies who can moderate content. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `OWNERS_ONLY` - `NONE` |
| `whoCanAssistContent` | `string` | Specifies who can moderate metadata. Possible values are: - `ALL_MEMBERS` - `OWNERS_AND_MANAGERS` - `MANAGERS_ONLY` - `OWNERS_ONLY` - `NONE` |
| `customRolesEnabledForSettingsToBeMerged` | `string` | Specifies whether the group has a custom role that's included in one of the settings being merged. This field is read-only and `UPDATE` and `PATCH` requests to it are ignored. Possible values are: - `true` - `false` |
| `enableCollaborativeInbox` | `string` | Specifies whether a collaborative inbox will remain turned on for the group. Possible values are: - `true` - `false` |
| `whoCanDiscoverGroup` | `string` | Specifies the set of users for whom this group is discoverable. Possible values are: - `ANYONE_CAN_DISCOVER` - `ALL_IN_DOMAIN_CAN_DISCOVER` - `ALL_MEMBERS_CAN_DISCOVER` |
| `defaultSender` | `string` | Default sender for members who can post messages as the group. Possible values are: - `DEFAULT_SELF` - `GROUP` |

## Methods

The [groupsSettings.groups.get](#groupsSettings-groups-get) and [groupsSettings.groups.update](#groupsSettings-groups-update) methods operate on a specified [Groups Resource](#groups).

[get](./groups/get.md)

Retrieves a group's settings identified by the group email address.

[update](./groups/update.md)

Updates an existing group's settings, which is identified by the group email address.

[patch](./groups/patch.md)

Updates an existing resource. This method supports patch semantics.

## Supported languages

The following language codes are supported for a group's `primaryLanguage` field.

| aa   ab   af   am   ar   as   ay   az   ba   be   bg   bh   bi   bn   bo   br   bs   ca   co   cs   cy   da   de   dz   el   en   en-GB   en-US-pseudo   en\_US   eo   es   et   eu   fa   fi   fj   fo   fr | fr-CA   fy   ga   gd   gl   gn   gu   ha   hi   hr   hu   hy   ia   id   ie   ik   is   it   iu   iw   ja   jw   ka   kk   kl   km   kn   ko   ks   ku   ky   la   ln   lo   lt   lv   mg   mi | mk   ml   mn   mo   mr   ms   mt   my   na   ne   nl   nn   no   oc   om   or   pa   pl   ps   pt-BR   pt-PT   qu   rm   rn   ro   ru   rw   sa   sd   sg   sh   si   sk   sl   sm   sn   so   sq | sr   ss   st   su   sv   sw   ta   te   tg   th   ti   tk   tl   tn   to   tr   ts   tt   tw   ug   uk   ur   uz   vi   vo   wo   xh   xx-bork   xx-elmer   xx-hacker   xx-klingon   xx-piglatin   yi   yo   za   zh-CN   zh-TW   zu |
| --- | --- | --- | --- |
