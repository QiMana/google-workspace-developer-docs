---
source: https://developers.google.com/workspace/admin/groups-settings/manage
root: workspace
fetched_at: 2026-04-23T15:23:56.593Z
---

# Retrieve & update settings for Google Groups

To update and retrieve settings for Google Groups, authenticate each API request and include an API key. For details, see [Create access credentials](../../guides/create-credentials.md). For more information, see [Learn about authentication & authorization](../../guides/auth-overview.md).

## Update all settings for a group

To update a group's settings, include the `Authorization` header and API key in the following `PUT` HTTP request:

```
PUT https://www.googleapis.com/groups/v1/groups/GROUP_ID
```

Replace `GROUP_ID` with the ID for the group—for example, the following updates the salesgroup@example.com group settings:

```
PUT https://www.googleapis.com/groups/v1/groups/salesgroup@example.com
```

The request body is in the JSON format. The following example shows all possible settings:

```
{
 "kind": "groupsSettings#groups",
 "email": "salesgroup@example.com",
 "name": "Sales Group",
 "description": "This is the sales group",
 "whoCanAdd": "ALL_MANAGERS_CAN_ADD",
 "whoCanJoin": "INVITED_CAN_JOIN",
 "whoCanViewMembership": "ALL_IN_DOMAIN_CAN_VIEW",
 "whoCanViewGroup": "ALL_IN_DOMAIN_CAN_VIEW",
 "whoCanInvite": "ALL_MANAGERS_CAN_INVITE",
 "allowExternalMembers": "false",
 "whoCanPostMessage": "ALL_IN_DOMAIN_CAN_POST",
 "allowWebPosting": "true",
 "primaryLanguage": "en",
 "maxMessageBytes": 10240,
 "isArchived": "true",
 "archiveOnly": "false",
 "messageModerationLevel": "MODERATE_NONE",
 "spamModerationLevel": "ALLOW",
 "replyTo": "REPLY_TO_IGNORE",
 "customReplyTo": "sales@example.com",
 "includeCustomFooter": "true",
 "customFooterText": "This messages is from the Sales Group at example.com",
 "sendMessageDenyNotification": "true",
 "defaultMessageDenyNotificationText": "Your Message has been denied.",
 "showInGroupDirectory": "false",
 "allowGoogleCommunication": "false",
 "membersCanPostAsTheGroup": "false",
 "messageDisplayFont": "DEFAULT_FONT",
 "includeInGlobalAddressList": "false",
 "whoCanLeaveGroup": "ALL_MEMBERS_CAN_LEAVE",
 "whoCanContactOwner": "ALL_IN_DOMAIN_CAN_CONTACT",
 "whoCanAddReferences": "ALL_MEMBERS",
 "whoCanAssignTopics": "NONE",
 "whoCanUnassignTopic": "NONE",
 "whoCanTakeTopics": "NONE",
 "whoCanMarkDuplicate": "NONE",
 "whoCanMarkNoResponseNeeded": "NONE",
 "whoCanMarkFavoriteReplyOnAnyTopic": "NONE",
 "whoCanMarkFavoriteReplyOnOwnTopic": "NONE",
 "whoCanUnmarkFavoriteReplyOnAnyTopic": "NONE",
 "whoCanEnterFreeFormTags": "NONE",
 "whoCanModifyTagsAndCategories": "NONE",
 "favoriteRepliesOnTop": "false",
 "whoCanApproveMembers": "ALL_MANAGERS_CAN_APPROVE",
 "whoCanBanUsers": "OWNERS_AND_MANAGERS",
 "whoCanModifyMembers": "OWNERS_AND_MANAGERS",
 "whoCanApproveMessages": "OWNERS_ONLY",
 "whoCanDeleteAnyPost": "OWNERS_AND_MANAGERS",
 "whoCanDeleteTopics": "OWNERS_AND_MANAGERS",
 "whoCanLockTopics": "OWNERS_AND_MANAGERS",
 "whoCanMoveTopicsIn": "NONE",
 "whoCanMoveTopicsOut": "NONE",
 "whoCanPostAnnouncements": "NONE",
 "whoCanHideAbuse": "OWNERS_AND_MANAGERS",
 "whoCanMakeTopicsSticky": "OWNERS_AND_MANAGERS",
 "whoCanModerateMembers": "OWNERS_AND_MANAGERS",
 "whoCanModerateContent": "OWNERS_ONLY",
 "whoCanAssistContent": "ALL_MEMBERS",
 "customRolesEnabledForSettingsToBeMerged": "false",
 "enableCollaborativeInbox": "false",
 "whoCanDiscoverGroup": "ALL_IN_DOMAIN_CAN_DISCOVER",
 "defaultSender": "DEFAULT_SELF"
}
```

A successful response returns a `200` HTTP status code. Along with the status code, the response returns the updated group settings. For more information about these settings, see the [API reference](./v1/reference.md).

The following example shows the JSON response:

```
{
 "kind": "groupsSettings#groups",
 "email": "salesgroup@example.com",
 "name": "Sales Group",
 "description": "This is the sales group",
 "whoCanAdd": "ALL_MANAGERS_CAN_ADD",
 "whoCanJoin": "INVITED_CAN_JOIN",
 "whoCanViewMembership": "ALL_IN_DOMAIN_CAN_VIEW",
 "whoCanViewGroup": "ALL_IN_DOMAIN_CAN_VIEW",
 "whoCanInvite": "ALL_MANAGERS_CAN_INVITE",
 "allowExternalMembers": "false",
 "whoCanPostMessage": "ALL_IN_DOMAIN_CAN_POST",
 "allowWebPosting": "true",
 "primaryLanguage": "en",
 "maxMessageBytes": 10240,
 "isArchived": "true",
 "archiveOnly": "false",
 "messageModerationLevel": "MODERATE_NONE",
 "spamModerationLevel": "ALLOW",
 "replyTo": "REPLY_TO_IGNORE",
 "customReplyTo": "sales@example.com",
 "includeCustomFooter": "true",
 "customFooterText": "This messages is from the Sales Group at example.com",
 "sendMessageDenyNotification": "true",
 "defaultMessageDenyNotificationText": "Your Message has been denied.",
 "showInGroupDirectory": "false",
 "allowGoogleCommunication": "false",
 "membersCanPostAsTheGroup": "false",
 "messageDisplayFont": "DEFAULT_FONT",
 "includeInGlobalAddressList": "false",
 "whoCanLeaveGroup": "ALL_MEMBERS_CAN_LEAVE",
 "whoCanContactOwner": "ALL_IN_DOMAIN_CAN_CONTACT",
 "whoCanAddReferences": "ALL_MEMBERS",
 "whoCanAssignTopics": "NONE",
 "whoCanUnassignTopic": "NONE",
 "whoCanTakeTopics": "NONE",
 "whoCanMarkDuplicate": "NONE",
 "whoCanMarkNoResponseNeeded": "NONE",
 "whoCanMarkFavoriteReplyOnAnyTopic": "NONE",
 "whoCanMarkFavoriteReplyOnOwnTopic": "NONE",
 "whoCanUnmarkFavoriteReplyOnAnyTopic": "NONE",
 "whoCanEnterFreeFormTags": "NONE",
 "whoCanModifyTagsAndCategories": "NONE",
 "favoriteRepliesOnTop": "false",
 "whoCanApproveMembers": "ALL_MANAGERS_CAN_APPROVE",
 "whoCanBanUsers": "OWNERS_AND_MANAGERS",
 "whoCanModifyMembers": "OWNERS_AND_MANAGERS",
 "whoCanApproveMessages": "OWNERS_ONLY",
 "whoCanDeleteAnyPost": "OWNERS_AND_MANAGERS",
 "whoCanDeleteTopics": "OWNERS_AND_MANAGERS",
 "whoCanLockTopics": "OWNERS_AND_MANAGERS",
 "whoCanMoveTopicsIn": "NONE",
 "whoCanMoveTopicsOut": "NONE",
 "whoCanPostAnnouncements": "NONE",
 "whoCanHideAbuse": "OWNERS_AND_MANAGERS",
 "whoCanMakeTopicsSticky": "OWNERS_AND_MANAGERS",
 "whoCanModerateMembers": "OWNERS_AND_MANAGERS",
 "whoCanModerateContent": "OWNERS_ONLY",
 "whoCanAssistContent": "ALL_MEMBERS",
 "customRolesEnabledForSettingsToBeMerged": "false",
 "enableCollaborativeInbox": "false",
 "whoCanDiscoverGroup": "ALL_IN_DOMAIN_CAN_DISCOVER",
 "defaultSender": "DEFAULT_SELF"
}
```

## Update some settings for a group

If you want to update a subset of these settings, use the `PATCH` HTTP request for a partial update.

```
PATCH https://www.googleapis.com/groups/v1/groups/GROUP_ID
```

## Retrieve settings for a group

To retrieve a group's settings, include the `Authorization` header in the following `GET` HTTP request:

```
GET https://www.googleapis.com/groups/v1/groups/groupUniqueId
```

The following example retrieves the salesgroup@example.com group settings:

```
GET https://www.googleapis.com/groups/v1/groups/salesgroup@example.com
```

A successful response returns a `200` HTTP status code. Along with the status code, the response returns the salesgroup@example.com group's settings. For more information about these settings, see the [API reference](./v1/reference.md).

The following example shows the JSON response:

```
{
 "kind": "groupsSettings#groups",
 "email": "salesgroup@example.com",
 "name": "Sales Group",
 "description": "This is the sales group",
 "whoCanAdd": "ALL_MANAGERS_CAN_ADD",
 "whoCanJoin": "INVITED_CAN_JOIN",
 "whoCanViewMembership": "ALL_IN_DOMAIN_CAN_VIEW",
 "whoCanViewGroup": "ALL_IN_DOMAIN_CAN_VIEW",
 "whoCanInvite": "ALL_MANAGERS_CAN_INVITE",
 "allowExternalMembers": "false",
 "whoCanPostMessage": "ALL_IN_DOMAIN_CAN_POST",
 "allowWebPosting": "true",
 "primaryLanguage": "en",
 "maxMessageBytes": 10240,
 "isArchived": "true",
 "archiveOnly": "false",
 "messageModerationLevel": "MODERATE_NONE",
 "spamModerationLevel": "ALLOW",
 "replyTo": "REPLY_TO_IGNORE",
 "customReplyTo": "sales@example.com",
 "includeCustomFooter": "true",
 "customFooterText": "This messages is from the Sales Group at example.com",
 "sendMessageDenyNotification": "true",
 "defaultMessageDenyNotificationText": "Your Message has been denied.",
 "showInGroupDirectory": "false",
 "allowGoogleCommunication": "false",
 "membersCanPostAsTheGroup": "false",
 "messageDisplayFont": "DEFAULT_FONT",
 "includeInGlobalAddressList": "false",
 "whoCanLeaveGroup": "ALL_MEMBERS_CAN_LEAVE",
 "whoCanContactOwner": "ALL_IN_DOMAIN_CAN_CONTACT",
 "whoCanAddReferences": "ALL_MEMBERS",
 "whoCanAssignTopics": "NONE",
 "whoCanUnassignTopic": "NONE",
 "whoCanTakeTopics": "NONE",
 "whoCanMarkDuplicate": "NONE",
 "whoCanMarkNoResponseNeeded": "NONE",
 "whoCanMarkFavoriteReplyOnAnyTopic": "NONE",
 "whoCanMarkFavoriteReplyOnOwnTopic": "NONE",
 "whoCanUnmarkFavoriteReplyOnAnyTopic": "NONE",
 "whoCanEnterFreeFormTags": "NONE",
 "whoCanModifyTagsAndCategories": "NONE",
 "favoriteRepliesOnTop": "false",
 "whoCanApproveMembers": "ALL_MANAGERS_CAN_APPROVE",
 "whoCanBanUsers": "OWNERS_AND_MANAGERS",
 "whoCanModifyMembers": "OWNERS_AND_MANAGERS",
 "whoCanApproveMessages": "OWNERS_ONLY",
 "whoCanDeleteAnyPost": "OWNERS_AND_MANAGERS",
 "whoCanDeleteTopics": "OWNERS_AND_MANAGERS",
 "whoCanLockTopics": "OWNERS_AND_MANAGERS",
 "whoCanMoveTopicsIn": "NONE",
 "whoCanMoveTopicsOut": "NONE",
 "whoCanPostAnnouncements": "NONE",
 "whoCanHideAbuse": "OWNERS_AND_MANAGERS",
 "whoCanMakeTopicsSticky": "OWNERS_AND_MANAGERS",
 "whoCanModerateMembers": "OWNERS_AND_MANAGERS",
 "whoCanModerateContent": "OWNERS_ONLY",
 "whoCanAssistContent": "ALL_MEMBERS",
 "customRolesEnabledForSettingsToBeMerged": "false",
 "enableCollaborativeInbox": "false",
 "whoCanDiscoverGroup": "ALL_IN_DOMAIN_CAN_DISCOVER",
 "defaultSender": "DEFAULT_SELF"
}
```
