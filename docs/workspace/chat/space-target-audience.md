---
source: https://developers.google.com/workspace/chat/space-target-audience
root: workspace
fetched_at: 2026-04-23T15:25:33.906Z
---

# Make a Google Chat space discoverable to specific users in a Google Workspace organization

## Page Summary

- This page guides Google Workspace admins on how to use the Google Chat API to share named spaces with specific users within their organization.
- Target audiences are used to control which users can discover and join a space, replacing the need to invite individuals.
- To share a space, the `AccessSettings` object in the Chat API request should contain the target audience ID within the `audience` field.
- Prerequisites include a Business or Enterprise Google Workspace account with super admin privileges, an available target audience, and user authentication when calling the Chat API.
- Admins can get the target audience ID from the Google Admin console under Directory > Target Audiences, then locate it within the URL of the specific target audience page.

This page explains how to use the Google Chat API to share a Google Chat space with specific users in a Google Workspace organization, so that they can discover and join the space.

To specify the users in your organization that can discover and join a space, you create target audiences. A *target audience* is a group of people—such as specific departments or the entire organization—that you can share a Chat space with, to improve the space's awareness and shareability. Target audiences also let you manage and customize space memberships rather than needing to invite individual users to a space. For more information, see [About target audiences](https://support.google.com/a/answer/9934697).

You can only make named spaces discoverable to target audiences. You can't share other space types, such as direct messages or group conversations, with target audiences.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/). Your account must have the [super administrator role](https://support.google.com/a/answer/2405986?sjid=1448018578843125834-NC#super_admin) for your Google Workspace organization.
- A target audience that's available for access in Chat. To create a target audience, see [Create a target audience](https://support.google.com/a/answer/9935192). To make an existing target audience available to Chat spaces, see [Set up space access for Chat](https://support.google.com/a/answer/12129901).
- You must call Google Chat API, with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).

## Get the target audience ID

To get the ID of a target audience, do the following:

1. In the Google Admin console, go to **Menu \> Directory \> Target audiences**.
	[Go to Target audiences](https://admin.google.com/ac/targetaudiences)
2. In the **Target audiences** table, click the **Name** field of the target audience.
3. Find the target audience ID in the URL for the page. The URL format is `https://admin.google.com/ac/targetaudiences/TARGET_AUDIENCE_ID`, where `TARGET_AUDIENCE_ID` is the alphanumeric ID for your target audience.

In the next section, you use the target audience ID to either create a discoverable space or update an existing space to make it discoverable to the target audience.

## Specify the target audience in your Chat API request

To create a space for a specific target audience, use the [`create()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/create) or [`setup()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/setup) method on the `Space` resource. To make an existing space discoverable, use the [`update()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/patch) method on the `Space` resource. Because only named spaces can be shared with target audiences, the space type (represented in the `spaceType` field) must be `SPACE`.

To make a space discoverable to your target audience, include the [`AccessSettings`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#accesssettings) object in the `Space` resource as part of your Chat API request. In the object, specify `audience` field:

```
"accessSettings": {
  "audience": "audiences/TARGET_AUDIENCE_ID"
}
```

Replace `TARGET_AUDIENCE_ID` with the ID of the target audience that you obtained in the previous section. To use the default Chat space share settings for your Google Workspace organization, replace with `default`.

For details on creating or updating spaces using the Chat API, see the following guides:

- [Create a space](https://developers.google.com/workspace/chat/create-spaces)
- [Set up a space](https://developers.google.com/workspace/chat/set-up-spaces)
- [Update a space](https://developers.google.com/workspace/chat/update-spaces)
