---
source: https://developers.google.com/workspace/chat/release-notes
root: workspace
fetched_at: 2026-04-23T15:25:31.954Z
---

# Google Chat API release notes

To get the latest product updates delivered to you, add the URL of this page to your [feed reader](https://wikipedia.org/wiki/Comparison_of_feed_aggregators), or add the feed URL directly: `https://developers.google.com/feeds/chat-release-notes.xml`.

This page contains release notes for features and updates to the Chat API. We recommend that Chat API developers periodically check this list for any new announcements.

## April 22, 2026

Feature

**[Developer Preview](../preview.md)**: The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for Google Chat is now available in developer preview. MCP is an open protocol that enables seamless integration between AI applications and your Chat conversations. By configuring the Chat MCP server, you enable AI agents to securely list messages and take actions, such as sending messages in your spaces.

For example, you can ask your AI agent: *"What's the latest update in the 'Project X' space?"*

To get started with the Chat MCP server, see the following documentation:

- [Set up the Chat MCP server](./api/guides/configure-mcp-server.md)
- [Chat MCP tool reference](./api/reference/mcp.md)

To find more available MCP servers, see [Model Context Protocol (MCP) servers in Google Workspace](../guides/configure-mcp-servers.md).

## April 15, 2026

Feature

**Generally Available**: Chat apps can find existing group conversations with specific members using the [`FindGroupChats`](./api/reference/rest/v1/spaces/findGroupChats.md) method. For more information, see [Find a group chat](./find-group-chats.md).

## April 10, 2026

Feature

**Developer Preview**: You can now configure and respond to **message actions** in Google Chat. Message actions let users invoke your Chat app from the message context menu. This feature is available for both [Google Chat apps](./commands.md#respond-message-action) and [Google Workspace Add-ons that extend Google Chat](../add-ons/chat/commands.md#respond-message-action) through the [Developer Preview Program](../preview.md).

## April 01, 2026

Feature

**Generally Available:** Generally available - You can now call the Chat API to create and manage custom sections and organize conversations into a personalized view.

For more information, see the following guides:

- [Create a custom section](./create-section.md)
- [Delete a custom section](./delete-section.md)
- [List custom sections](./list-sections.md)
- [Update a custom section](./update-section.md)
- [Position a custom section](./position-section.md)
- [List custom section items](./list-section-items.md)
- [Move a custom section item](./move-section-item.md)

## March 31, 2026

Feature

**Generally available**: The following Chat API methods support [app authentication with administrator approval](./authenticate-authorize-chat-app.md):

- [Get a message](./get-messages.md#get-message-app-auth)
- [List messages](./list-messages.md#list-messages-app-auth)
- [Get a space event](./get-space-event.md#get-space-event-app-auth)
- [List space events](./list-space-events.md#list-space-events-app-auth)

Additionally, Chat apps can now call the following methods in the Google Workspace Events API using [app authentication with administrator approval](./authenticate-authorize-chat-app.md):

- [Subscribe to Chat space events](../events/guides/create-subscription.md#app-auth)
- [Update or renew a subscription](../events/guides/update-subscription.md#update-app-auth)
- [Reactivate a subscription](../events/guides/reactivate-subscription.md#reactivate-app-auth)

## March 19, 2026

Feature

**Generally available**: Chat apps can now format text with block quotes. For details, see [Format your messages](./format-messages.md#format-texts).

## March 10, 2026

Feature

**Developer Preview**: Chat apps can now create messages containing [cards](./api/reference/rest/v1/cards.md) on behalf of users with [user authentication](./authenticate-authorize-chat-user.md). Additionally, apps can asynchronously update the cards in these messages without requiring user interaction. For more information, see [Create and update interactive cards](./create-update-interactive-cards.md).

## February 13, 2026

Feature

**Generally Available:** You can now dynamically populate dropdown menus in Google Chat apps from Google Workspace or external data sources, with an autocomplete functionality. To learn how, see [Design interactive cards and dialogs](./design-interactive-card-dialog.md#dynamic-dropdown-menu).

## February 09, 2026

Feature

**Generally Available:** When [sending a message with app authentication](./create-messages.md#send-message-app), Google Chat API now supports mentioning users who haven't joined a Chat space or are members of a [space that is in import mode](./import-data.md). Previously, only [sending a message with user authentication](./create-messages.md#send-message-user) was supported. To learn how, see [Mention users in a text message](./format-messages.md#messages-@mention).

## February 03, 2026

Feature

**Developer Preview**: You can now build Google Chat apps as Google Workspace add-ons that use [Cloud Pub/Sub](https://cloud.google.com/pubsub/docs/) to receive messages. This architecture is useful if your Chat app is behind a firewall. For details, see [Build a Chat app that uses Pub/Sub](../add-ons/chat/quickstart-pubsub.md).

## January 14, 2026

Feature

**Generally Available**: You can now convert your interactive event-driven Chat apps to Google Workspace Add-ons that extends Chat.

By converting, your Google Chat app can use the Google Workspace Add-ons framework, opening up new possibilities for integration and features within Google Chat and across Google Workspace. For example, instead of two distributions — one Google Chat app and one Google Workspace add-on — you can distribute a single Google Workspace add-on through Google Workspace Marketplace that extends Chat apps alongside other Google Workspace host applications, like Gmail, Calendar, and Docs.

To learn more, see [Convert an interactive Google Chat app to a Google Workspace add-on](../add-ons/chat/convert.md).

## January 07, 2026

Other

The [Google Chat platform samples gallery](./samples.md) now lets you find samples by products, language, and sample type. The gallery also features the following new samples for building Chat apps:

- [Agent2Agent agents](../add-ons/chat/quickstart-a2a-agent.md)
- [ADK AI agents](../add-ons/chat/quickstart-adk-agent.md)
- [Dialogflow ES](../add-ons/chat/quickstart-dialogflow-es.md)
- [Dialogflow CX](../add-ons/chat/quickstart-dialogflow-cx.md)

## December 14, 2025

Feature

**Developer Preview**: You can now dynamically populate drop-down menus in Google Chat apps with data from Google Workspace or external data sources, with an autocomplete functionality. To learn more, see [Add interactive UI elements to cards](./design-interactive-card-dialog.md#dynamic-dropdown-menu).

## December 11, 2025

Feature

**Developer Preview**: You can now call the Chat API to create and manage [custom sections](https://support.google.com/chat/answer/16059854) and organize conversations in a personalized view:

- Create section ([RPC](./api/reference/rpc/google.chat.v1.md#createsectionrequest), [REST](./api/reference/rest/v1/users.sections/create.md))
- Delete section ([RPC](./api/reference/rpc/google.chat.v1.md#deletesectionrequest), [REST](./api/reference/rest/v1/users.sections/delete.md))
- List sections ([RPC](./api/reference/rpc/google.chat.v1.md#listsectionsrequest), [REST](./api/reference/rest/v1/users.sections/list.md))
- Update section ([RPC](./api/reference/rpc/google.chat.v1.md#updatesectionrequest), [REST](./api/reference/rest/v1/users.sections/patch.md))
- Position section ([RPC](./api/reference/rpc/google.chat.v1.md#positionsectionrequest), [REST](./api/reference/rest/v1/users.sections/position.md))
- List section items ([RPC](./api/reference/rpc/google.chat.v1.md#listsectionitemsrequest), [REST](./api/reference/rest/v1/users.sections.items/list.md))
- Move section items ([RPC](./api/reference/rpc/google.chat.v1.md#movesectionitemrequest), [REST](./api/reference/rest/v1/users.sections.items/move.md))

To learn more, see `Section` ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Section), [REST](./api/reference/rest/v1/users.sections.md)) and `SectionItem` ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SectionItem), [REST](./api/reference/rest/v1/SectionItem.md)) in the Chat API documentation.

## December 09, 2025

Announcement

**Generally available**: The Chat API now supports reading rich links to Gmail threads in Chat messages that appear as chips. To learn more, see [`RichLinkType`](./api/reference/rest/v1/spaces.messages.md#richlinktype) in the Chat API reference documentation.

## October 30, 2025

Feature

**Developer Preview**: Chat apps can find existing group conversations with specific members using [`FindGroupChats`](./api/reference/rest/v1/spaces/findGroupChats.md).

## October 22, 2025

Announcement

**Generally available**: When sending [private messages](./create-messages.md#private), Chat apps can now include interactive [accessory widgets](./create-messages.md#add-accessory-widgets).

Feature

**Generally available**: We're enhancing membership roles in Chat spaces by introducing a new membership role type. In the Chat UI, existing space managers are now owners and a new manager role is added.

Previously, there were three membership role types in Chat API. `MEMBERSHIP_ROLE_UNSPECIFIED`, which meant a user wasn't a member but could be invited. `ROLE_MEMBER`, which meant a user was a member of the space. And `ROLE_MANAGER`, which meant a user was a space manager.

Now, in the Chat UI, `ROLE_MANAGER` users are called owners; this is a cosmetic change so permissions and the API enum remain the same. To help space owners administer spaces, we're introducing `ROLE_ASSISTANT_MANAGER` which is called manager in the UI. Possible membership roles include:

- `MEMBERSHIP_ROLE_UNSPECIFIED`: Default value. For users: they aren't a member of the space, but can be invited. For Google Groups: they're always assigned this role.
- `ROLE_MEMBER`: A member of the space. In the Chat UI, this role is called **Member**. Members have basic permissions, like reading messages in a space. Managers and Owners can grant them additional permissions, like adding or removing members, editing space details, and turning history on and off.
- `ROLE_ASSISTANT_MANAGER`: A space manager. In the Chat UI, this role is called **Manager**. By default, managers have permission to make other members managers, delete messages, and change space permissions.
- `ROLE_MANAGER`: A space owner. In the Chat UI, this role is called **Owner**. Owners have the broadest set of permissions, including permission to make other members owners or delete the space.

To learn more, see [Update a user's membership in a Google Chat space](./update-members.md) and [`MembershipRole`](https://developers.google.com//workspace/chat/api/reference/rest/v1/spaces.members#membershiprole) in the Chat API reference documentation.

## September 22, 2025

Announcement

**Generally available**: You can now [format text with Markdown](./format-messages.md#markdown), including lists and code blocks, in your Chat apps.

## September 18, 2025

Feature

**Developer Preview**: The following Chat API methods support [app authentication with administrator approval](./authenticate-authorize-chat-app.md) when called with `chat.app.*` authorization scopes:

- [Get a Chat space event](./get-space-event.md#get-space-event-app-auth).
- [List Chat space events](./list-space-events.md#list-space-events-app-auth).

Additionally, Chat apps can now call the following methods in the Google Workspace Events API using [app authentication with administrator approval](./authenticate-authorize-chat-app.md) with `chat.app.*` authorization scopes:

- [Subscribe to Chat space events](../events/guides/create-subscription.md#app-auth)
- [Update or renew a subscription](../events/guides/update-subscription.md#update-app-auth)
- [Reactivate a subscription](../events/guides/reactivate-subscription.md#reactivate-app-auth)

## September 12, 2025

Feature

**Generally available**: Increased per-space quota limits for writing messages and reactions with the Chat API:

- When [importing data to Google Chat](./import-data.md), the per-space quota limit for writing messages with `spaces.messages.create` increases from 60 to 600 per minute.
- When writing reactions with `spaces.messages.reactions.create`, the per-space quota limit increases from 60 to 300 per minute.

To learn more, see the Chat API's [per-space quotas](./limits.md#space-quotas).

## September 10, 2025

Feature

**Generally available**: You can now design your Chat app to include a carousel, which is a layout that rotates and displays a list of cards in a slideshow format, with buttons navigating to the previous or next carousel card. For details, see [Carousel](./api/reference/rest/v1/cards.md#carousel).

## August 18, 2025

Feature

**Developer Preview**: The following Chat API methods support [app authentication with administrator approval](./authenticate-authorize-chat-app.md):

- [Get a message as a Chat app with administrator approval using `chat.app.messages.readonly` scope](./get-messages.md#get-message-app-auth).
- [List messages with a Chat app with administrator approval using `chat.app.messages.readonly` scope](./list-messages.md#list-messages-app-auth).

## August 12, 2025

Feature

**Generally available**: You can now call the Chat API to create messages that quote other messages, or to update messages to remove quotes. To learn more, see [Quote a message](./create-messages.md#quote-a-message).

## July 25, 2025

Feature

**Generally Available**: The following Chat API methods support [app authentication](./authenticate-authorize-chat-app.md) using a new type of authentication scope, `https://www.googleapis.com/auth/chat.app.*`:

- [Create a named space as a Chat app](./create-spaces.md#create-named-app-auth) with `https://www.googleapis.com/auth/chat.app.spaces` or `https://www.googleapis.com/auth/chat.app.spaces.create`.
- [Update a space as a Chat app](./update-spaces.md#update-space-app-auth) with `https://www.googleapis.com/auth/chat.app.spaces`.
- [Delete a named space as a Chat app](./delete-spaces.md#delete-named-app-auth) with `https://www.googleapis.com/auth/chat.app.delete`.
- [Get details about a space as a Chat app](./get-spaces.md#get-space) with `https://www.googleapis.com/auth/chat.app.spaces`.
- [Invite or add a user to a space as a Chat app](./create-members.md#create-user-membership-app-auth) with `https://www.googleapis.com/auth/chat.app.memberships`.
- [Update a membership as a Chat app](./update-members.md#update-membership) with `https://www.googleapis.com/auth/chat.app.memberships`.
- [Remove a member from a space](./delete-members.md#delete-membership-app-auth) with `https://www.googleapis.com/auth/chat.app.memberships`.

To learn more, see [Types of required authentication](./authenticate-authorize.md#types-required) and [Authenticate as a Chat app](./authenticate-authorize-chat-app.md).

Feature

**Generally Available**: Chat apps can now create ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateSpace), [REST](./api/reference/rest/v1/spaces/create.md)), update ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.UpdateSpace), [REST](./api/reference/rest/v1/spaces/patch.md)), and get details about ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetSpace), [REST](./api/reference/rest/v1/spaces/get.md)) Chat space [permission settings](./api/reference/rest/v1/spaces.md#Space.PredefinedPermissionSettings) by calling the corresponding method in Chat API using app authentication with the `https://www.googleapis.com/auth/chat.app.spaces` or `https://www.googleapis.com/auth/chat.app.spaces.create` authentication scope, including creating announcement spaces.

## July 22, 2025

Feature

You can now read the metadata for Meet, Huddle, and Calendar chips using message annotations. Use the [`RichLinkMetadata`](./api/reference/rest/v1/spaces.messages.md) object to read information about the chip.

## July 09, 2025

Feature

**Generally available**: You can now build Google Chat apps as Google Workspace add-ons. For details, see [Extend Google Chat](../add-ons/chat.md).

## June 10, 2025

Feature

**[Developer Preview](../preview.md)**: Chat apps can now [format text with markdown](./format-messages.md#format-texts), including lists and code blocks.

## April 30, 2025

Announcement

**Generally available**: You can now call the Chat API to create, delete, and view custom emoji in organizations where creating custom emoji is enabled. You can now include or react with custom emoji in messages.

- [Learn about including custom emoji in Chat messages](./format-messages.md#messages-emoji)
- [Learn more about enabling custom emoji](https://support.google.com/chat/answer/12800149)

## March 13, 2025

Announcement

The Google Workspace Events API `v1beta` endpoint will be decommissioned for Google Chat and Google Meet events on April 30, 2025. To subscribe to Chat or Meet events, use the generally available [`v1` endpoint](../events/reference/rest/v1.md).

## March 07, 2025

Feature

**Generally Available:** You can now call the Chat API to get or update a user's notification settings for a Chat space. For details, see the following guides:

- [Get a user's space notification settings](./get-space-notification-setting.md)
- [Update a user's space notification settings](./update-space-notification-setting.md)

## March 05, 2025

Feature

**Generally available**: Chat apps can respond to quick commands. To use quick commands, users select the command from the message reply area in a Chat space. To learn more, see [Respond to Google Chat app commands](./commands.md).

## March 03, 2025

Feature

Google Chat API now supports mentioning users who haven't joined a Chat space or are members of a [space that is in import mode](./import-data.md) when [sending a message with user authentication](./create-messages.md#send-message-user). To learn how, see [Mention users in a text message](./format-messages.md#messages-@mention).

## February 18, 2025

Change

**Generally available:** When a user deletes a message sent by a Chat app, the [`DeletionType`](./api/reference/rest/v1/spaces.messages.md#deletiontype) of the Chat API `Message` resource is set to `SPACE_MEMBER`. Previously, the `DeletionType` was set to `CREATOR`.

## December 18, 2024

Feature

**Developer Preview:** Quick commands are a new way for users to invoke and interact with a Chat app directly without typing a slash command. For details, see [Respond to quick commands as a Google Chat app](./commands.md).

## December 16, 2024

Feature

**Developer Preview:** You can now design your Chat app to include a carousel, which is a layout that rotates and displays a list of cards in a slideshow format, with buttons navigating to the previous or next carousel card. For details, see [Carousel](./api/reference/rest/v1/cards.md#carousel).

Feature

**Developer Preview**: Chat apps can now create ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateSpace), [REST](./api/reference/rest/v1/spaces/create.md)), update ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.UpdateSpace), [REST](./api/reference/rest/v1/spaces/patch.md)), and get details about ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetSpace), [REST](./api/reference/rest/v1/spaces/get.md)) Chat space [permission settings](./api/reference/rest/v1/spaces.md#Space.PredefinedPermissionSettings) by calling the corresponding method in Chat API using app authentication with the `https://www.googleapis.com/auth/chat.app.spaces` or `https://www.googleapis.com/auth/chat.app.spaces.create` authentication scope, including creating announcement spaces.

To learn more about Chat app authentication, see [Types of required authentication](./authenticate-authorize.md#types-required) and [Authenticate as a Chat app](./authenticate-authorize-chat-app.md).

## December 05, 2024

Announcement

**Developer Preview**: You can now build Google Chat apps as Google Workspace Add-ons. For details, see [Extend Google Chat](../add-ons/chat.md).

## December 03, 2024

Change

Chat apps now have 90 days to complete the import of data. Previously, Chat apps had 30 days. To learn more, see [Import data to Google Chat](./import-data.md).

## November 05, 2024

Feature

**Generally Available**: If you're migrating to Google Chat from other messaging platforms, you can now create a group chat in [import mode](./import-data.md#create-space) using the [`spaces.create`](./api/reference/rest/v1/spaces/create.md) method.

## November 04, 2024

Feature

**Developer Preview**: You can now use a read-only scope (`https://www.googleapis.com/auth/chat.customemojis.readonly`) to [`get`](./api/reference/rest/v1/customEmojis/get.md) or [`list`](./api/reference/rest/v1/customEmojis/list.md) custom emoji.

## October 30, 2024

Feature

**Developer Preview**: You can now call the Chat API to get or update a user's space notification settings. To learn more, see the [`spaceNotificationSetting` reference documentation](./api/reference/rest/v1/users.spaces.spaceNotificationSetting.md).

## October 24, 2024

Feature

**Generally Available**: The following widgets are now available for building card-based user interfaces:

- [Chip](./api/reference/rest/v1/cards.md#Message.ChipList)
- [Overflow Menu](./api/reference/rest/v1/cards.md#Message.OverflowMenu)
- [Material Buttons](./api/reference/rest/v1/cards.md#Message.Type)
- [Collapsible Text paragraph](./api/reference/rest/v1/cards.md#textparagraph)
- [Customizable control button of collapsible Section](./api/reference/rest/v1/cards.md#Message.Section_1)

Chat apps can use these widgets in card messages, homepages, and dialogs. For examples, see [Design an interactive card or dialog](./design-interactive-card-dialog.md).

## October 10, 2024

Feature

**Developer Preview**: When [creating custom emoji is turned on](https://support.google.com/chat/answer/12800149) for a Workspace organization, you can now call Chat API to manage custom emoji:

- Create custom emoji ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateCustomEmoji), [REST](./api/reference/rest/v1/customEmojis/create.md))
- Delete custom emoji ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.DeleteCustomEmoji), [REST](./api/reference/rest/v1/customEmojis/delete.md))
- Get custom emoji ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetCustomEmoji), [REST](./api/reference/rest/v1/customEmojis/get.md))
- List custom emoji ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListCustomEmojis), [REST](./api/reference/rest/v1/customEmojis/list.md))

To learn more, see `CustomEmoji` ([RPC](./api/reference/rpc/google.chat.v1.md#google.chat.v1.CustomEmoji), [REST](./api/reference/rest/v1/customEmojis.md)) in the Chat API documentation.

## October 02, 2024

Feature

**Generally available:** You can now call the Chat API to create [announcement spaces](https://support.google.com/chat/answer/7659784), and read and update the [permission settings](https://support.google.com/chat/answer/13340792) of a space. For more information, see the following reference documentation:

- [`PredefinedPermmissionSettings`](./api/reference/rest/v1/spaces.md#predefinedpermissionsettings) field for the `Spaces` resource
- [`PermissionSettings`](./api/reference/rest/v1/spaces.md#permissionsettings) field for the `Spaces` resource

## September 30, 2024

Feature

**Developer Preview**: The following Chat API methods support app authentication using a new type of authentication scope, `https://www.googleapis.com/auth/chat.app.*`:

- [Create a named space as a Chat app](./create-spaces.md#create-named-app-auth) with `https://www.googleapis.com/auth/chat.app.spaces` or `https://www.googleapis.com/auth/chat.app.spaces.create`.
- [Update a space as a Chat app](./update-spaces.md#update-space-app-auth) with `https://www.googleapis.com/auth/chat.app.spaces`.
- [Delete a named space as a Chat app](./delete-spaces.md#delete-named-app-auth) with `https://www.googleapis.com/auth/chat.app.delete`.
- [Get details about a space as a Chat app](./get-spaces.md#get-space) with `https://www.googleapis.com/auth/chat.app.spaces`.
- [Invite or add a user to a space as a Chat app](./create-members.md#create-user-membership-app-auth) with `https://www.googleapis.com/auth/chat.app.memberships`.
- [Update a membership as a Chat app](./update-members.md#update-membership) with `https://www.googleapis.com/auth/chat.app.memberships`.
- [Remove a member from a space](./delete-members.md#delete-membership-app-auth) with `https://www.googleapis.com/auth/chat.app.memberships`.

To learn more, see [Types of required authentication](./authenticate-authorize.md#types-required) and [Authenticate as a Chat app](./authenticate-authorize-chat-app.md).

## September 11, 2024

Feature

**Generally Available**: The `chatSpaceLinkData` object has been added to the `RichLinkMetaData` field of the [`spaces.messages`](https://developers.google.com//workspace/chat/api/reference/rest/v1/spaces.messages) resource. This lets you add a smart chip to your message that points to a Chat space in any field that supports formatted text.

Feature

**Generally Available:** Google Workspace administrators can now call the Google Chat API to manage and search Google Chat spaces across their organization. This functionality lets them manage spaces at scale and automate common or repeatable tasks, such as the following:

- [Search](./search-manage-admin.md) spaces based on specified criteria
- [List members](./list-members.md) of a space
- [Add members](./create-members.md) to and [remove members](./delete-members.md) from a space
- Get details about a [member](./get-members.md) and a [space](./get-spaces.md)
- [Update](./update-spaces.md) or [delete](./delete-spaces.md) a space
- [Update a user's membership](./update-members.md)

For more information about managing spaces, read the documentation at [Manage Google Chat spaces as a Google Workspace administrator](./admin-overview.md).

For more information about searching spaces, read the documentation at [Search for and manage Google Chat spaces for your Google Workspace organization](./search-manage-admin.md).

## September 10, 2024

Feature

**Developer Preview**: If you're migrating to Google Chat from other messaging platforms, you can now create a group chat in [import mode](./import-data.md#create-space) using the [`spaces.create`](./api/reference/rest/v1/spaces/create.md) method.

## August 16, 2024

Libraries

**Generally Available**: You can now call Chat API using Cloud Client Libraries in addition to the already available Google API Client Libraries.

Benefits of Cloud Client Libraries include:

- Idiomatic code that follows your preferred language's natural conventions and styles.
- Consistent style across client libraries.
- Handling the low-level details of server communication, including authentication, pagination, long-running operations, streams, and retries.
- Installable using package management tools like `npm` and `pip`.
- Improved performance in some cases, thanks to gRPC.

Additionally, our Chat API reference documentation now features a [RPC reference](./api/reference/rpc.md) arranged by services and their methods in addition to our existing [REST reference](./api/reference/rest.md) arranged by resource hierarchies and their methods.

To learn more, see [Install client libraries](./libraries.md).

## August 07, 2024

Feature

**Developer Preview**: The following widgets are now available for building card-based user interfaces:

- [Chip](./api/reference/rest/v1/cards.md#Message.ChipList)
- [Overflow Menu](./api/reference/rest/v1/cards.md#Message.OverflowMenu)
- [Material Buttons](./api/reference/rest/v1/cards.md#Message.Type)
- [Collapsible Text paragraph](./api/reference/rest/v1/cards.md#textparagraph)
- [Customizable control button of collapsible Section](./api/reference/rest/v1/cards.md#Message.Section_1)

Chat apps can use these widgets in card messages, homepages, and dialogs. For examples, see [Design an interactive card or dialog](./design-interactive-card-dialog.md).

## July 08, 2024

Feature

**Generally Available:** You can now import a space from other messaging platforms, and allow external users to join that Chat space. For more information, see the [`externalUserAllowed` option](./api/reference/rest/v1/spaces.md#Space.FIELDS.external_user_allowed).

Feature

**Generally Available**: When building Chat apps using Google Cloud Functions, Cloud Run, or any system that supports authentication via ID tokens, you can now [Authenticate requests using Cloud Functions or Cloud Run](./verify-requests-from-chat.md#verify-cloud-function) or [Authenticate requests with an App URL ID Token](./verify-requests-from-chat.md#verify-app-url) to verify that the requests to your app came from Google Chat.

## July 03, 2024

Feature

**Generally Available**: You can now call the Chat API to [Make a Google Chat space discoverable to specific users in a Google Workspace organization](./space-target-audience.md) using the [`accessSettings`](./api/reference/rest/v1/spaces.md#Space.FIELDS.access_settings) field on the `Space` resource. You can read the URI of the space using the [`spaceUri`](./api/reference/rest/v1/spaces.md#Space.FIELDS.space_uri) field.

## June 28, 2024

Feature

**(Generally Available)**: [Dialogflow CX Chat apps](./build-dialogflow-chat-app-natural-language.md) can open dialogs and receive data inputted by users in card messages and dialogs.

## June 26, 2024

Feature

**(Developer Preview)**: You can now use the Chat API to create announcement spaces, plus read and update the permission settings of a space. For more information, see the [`PredefinedPermissionSettings`](./api/reference/rest/v1/spaces.md#Space.FIELDS.predefined_permission_settings) and [`PermissionSettings`](./api/reference/rest/v1/spaces.md#Space.PermissionSettings) fields.

## June 25, 2024

Feature

**(Generally Available):** You can now add a Google Group to a Chat space using the [`spaces.members.create`](./api/reference/rest/v1/spaces.members/create.md) method or the [`spaces.setup`](./api/reference/rest/v1/spaces/setup.md) method. You can remove a Google Group from a space using the [`spaces.members.delete`](./api/reference/rest/v1/spaces.members/delete.md) method.

## June 24, 2024

Feature

Google Chat apps can now create a subscription to receive events for all Chat spaces where the user is a member. To target all spaces for a user, set the subscription's `targetResource` field to `//chat.googleapis.com/spaces/-`. To learn more, see [Subscribe to Google Chat events](../events/guides/events-chat.md#supported_target_resources).

## June 18, 2024

Feature

**(Developer Preview)**: If you're a domain administrator or a delegated administrator, you can now include the `useAdminAccess` parameter when you call the Chat API with your administrator privileges with the following methods to manage Chat spaces and memberships in your Workspace organization:

- [Get a space](./api/reference/rest/v1/spaces/get.md)
- [Update a space](./api/reference/rest/v1/spaces/patch.md)
- [Get a member](./api/reference/rest/v1/spaces.members/get.md)
- [Update a member](./api/reference/rest/v1/spaces.members/patch.md)

To learn more, see [Authenticate and authorize using administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges).

## May 22, 2024

Feature

**(Developer Preview)**: If you're a domain administrator or a delegated administrator, you can now include the `useAdminAccess` parameter when you call the Chat API with your administrator privileges to manage Chat spaces and memberships in your organization. The following API methods are supported:

- [Search spaces](./api/reference/rest/v1/spaces/search.md)
- [Delete spaces](./api/reference/rest/v1/spaces/delete.md)
- [List memberships](./api/reference/rest/v1/spaces.members/list.md)
- [Create memberships](./api/reference/rest/v1/spaces.members/create.md)
- [Delete memberships](./api/reference/rest/v1/spaces.members/delete.md)

To learn more, see [Authenticate and authorize using administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges).

## May 21, 2024

Change

**(Developer Preview)**: [Dialogflow CX Chat apps](./build-dialogflow-chat-app-natural-language.md) can open dialogs and receive data inputted by users in card messages and dialogs.

## April 25, 2024

Feature

**(Generally available):** You can now get and update a user's read state in a space, and get a user's read state in a message thread. User read states are singleton resources that represent details about a specified user's last read message.

The [`users.spaces` resource](./api/reference/rest/v1/users.spaces.md) represents a user's read state in a space. The [`users.spaces.threads` resource](./api/reference/rest/v1/users.spaces.threads.md) represents a user's read state in a message thread.

User read states support the following methods:

- [Get space read state](./get-space-read-state.md) to return details about a user's read state within a space.
- [Update space read state](./update-space-read-state.md) to update a user's read state within a space.
- [Get thread read state](./get-thread-read-state.md) to return details about a user's read state within a thread.

## April 24, 2024

Feature

**(Generally Available):** Build a Chat app that understands and responds with natural language using a direct integration between Dialogflow CX and Google Chat API. To learn how, see [Build a Dialogflow CX Google Chat app](./build-dialogflow-chat-app-natural-language.md).

## April 23, 2024

Feature

**(Generally available)**: Your Chat app can now send an app home card message to a user. This message is a customizable card message that a Chat app sends to a user when they open a direct message with the Chat app.

For details, see [Send an app home card message for a Google Chat app](./send-app-home-card-message.md).

## April 22, 2024

Feature

**(Generally Available)**: Google Chat apps now support Google Apps Script's Card Service. If you've built your Chat app using Apps Script, you can use Card Service to build user interfaces such as card messages and dialogs. For more information, see the [Card Service reference documentation](../../apps-script/reference/card-service.md).

## April 18, 2024

Feature

**(Generally available)**: You can now update a human user's membership in a Chat space to change their role between regular member and space manager using the [`spaces.members.patch`](./api/reference/rest/v1/spaces.members/patch.md) method. To learn more, see [Update a user's membership in a Google Chat space](./update-members.md).

## April 08, 2024

Feature

(**Developer Preview**): You can now import a space from other messaging platforms, and allow external users to join that space. For more information, see the [`externalUserAllowed` option](./api/reference/rest/v1/spaces.md#Space.FIELDS.external_user_allowed).

## March 28, 2024

Announcement

**(Generally available)**: Google Chat apps can get, list, and subscribe to events. To receive events, you can do the following:

- Use the `get()` and `list()` methods on the `spaces.spaceEvents` resource of the Google Chat API.
- Create subscriptions to events about users and spaces using Google Workspace Events API.

To learn more, see [Work with events from Google Chat](./events-overview.md).

Announcement

Events about deleted messages are now supported (Event type: `google.workspace.chat.message.v1.deleted`).

## March 20, 2024

Feature

**(Generally available)**: Google Chat apps can now use accessory widgets, which are interactive widgets that appear at the bottom of a message. For details, see [Send a message](./create-messages.md#add-accessory-widgets).

## March 13, 2024

Feature

**(Developer Preview)**: You can now `get` or `list` events about a Google Chat space. For example, you can track periodic resource changes, such as monthly reports of new or changed members in a space, or fetch events that are missing from subscriptions using the Google Workspace Events API.

The following types of space events are supported:

- A message is created or updated.
- A member is added, updated, or removed.
- The space is updated.

For more information, see the following:

- [Work with events from Google Chat](./events-overview.md).
- [Get details about an event in a space](./get-space-event.md).
- [List events from a space](./list-space-events.md).

## March 05, 2024

Feature

**(Developer Preview)**: Build a Chat app that understands and responds with natural language using a direct integration between Dialogflow CX and Google Chat API. To learn how, see [Build a Dialogflow CX Google Chat app](./build-dialogflow-chat-app-natural-language.md).

## March 04, 2024

Feature

**(Generally available)**: The `formattedText` field on the [`Message`](./api/reference/rest/v1/spaces.messages.md) resource includes the markup syntax for bulleted list text formatting. For more information, see [Format a text message](./format-messages.md#format-texts).

## February 20, 2024

Feature

**(Developer Preview)**: Google Chat apps now support Google Apps Script's Card Service. If you've built your Chat app using Apps Script, you can use Card Service to build user interfaces such as card messages and dialogs. For more information, see the [Card Service reference documentation](../../apps-script/reference/card-service.md).

## January 17, 2024

Feature

**(Developer Preview):** Chat apps can now subscribe to events about users. The following event types are supported:

- New memberships
- Updated memberships
- Deleted memberships
- Multiple memberships have changed

For details, see [Subscribe to Google Chat events](../events/guides/events-chat.md) in the Google Workspace Events API documentation.

Feature

**(Developer Preview)**: You can [make a Chat space discoverable to a target audience](./space-target-audience.md) instead of inviting users individually.

## January 10, 2024

Feature

**(Generally available)**: [Import data from your other messaging platforms into Google Chat](./import-data-overview.md). You can import existing messages, attachments, reactions, memberships, and space entities from your other messaging platforms to corresponding Chat API resources. You can import this data by creating Chat spaces in import mode and importing data into those spaces.

Feature

**(Generally available)**: You can now migrate historical memberships when you import data into Google Chat.

## January 08, 2024

Feature

**(Developer Preview)**: Chat apps can now add interactive buttons to the bottom of messages. For details, see the [reference documentation](./api/reference/rest/v1/spaces.messages.md#Message.FIELDS.accessory_widgets).

## January 05, 2024

Feature

Chat apps can now send messages privately in spaces with multiple people. For details, see [Send private messages to Google Chat users](./create-messages.md).

## December 14, 2023

Announcement

We've published a comprehensive tutorial and code sample showing how to build a Chat app using generative AI and a database, [Manage projects with Google Chat, Vertex AI, and Firestore](../add-ons/samples/tutorial-project-management.md).

## December 13, 2023

Feature

(**Generally available**): The [Card Builder Tool](https://addons.gsuite.google.com/uikit/builder) is now available to help you [design and preview card messages](./create-messages.md#create) in Google Chat apps.

## December 08, 2023

Change

The Google Chat API [`spaces.list()` method](./api/reference/rest/v1/spaces/list.md) now supports app authentication for query filters.

## December 06, 2023

Feature

[Developer Preview](../preview.md): You can now get and update a user's read state in a space, and get a user's read state in a message thread. User read states are singleton resources that represent details about a specified user's last read message.

The [`users.spaces` resource](./api/reference/rest/v1/users.spaces.md) represents a user's read state in a space. The [`users.spaces.threads` resource](./api/reference/rest/v1/users.spaces.threads.md) represents a user's read state in a message thread.

User read states support the following methods:

- [Get space read state](./api/reference/rest/v1/users.spaces/getSpaceReadState.md) to return details about a user's read state within a space.
- [Update space read state](./api/reference/rest/v1/users.spaces/updateSpaceReadState.md) to update a user's read state within a space.
- [Get thread read state](./api/reference/rest/v1/users.spaces.threads/getThreadReadState.md) to return details about a user's read state within a thread.

## November 30, 2023

Feature

**(Generally available)**: You can now retrieve Google Groups that are members of a Google Chat space using `ListMemberships` (with the `showGroups` option) and `GetMembership`. If you try to [add a member](./api/reference/rest/v1/spaces.members/create.md) to a Chat space while this member is already part of a Google Group in the same space, it triggers an `already exists` error (HTTP status code `409`).

## November 28, 2023

Feature

**(Developer Preview):** Your Chat app can now send an [app home card message](./send-app-home-card-message.md) to a user. This message is a customizable card message that a Chat app sends to a user when they open a direct message with the Chat app.

## November 15, 2023

Change

**(Generally available)**: [Google Material Design 3 styles](https://m3.material.io/styles), including [icons](https://fonts.google.com/icons), are available for cards in Chat apps.

## November 06, 2023

Feature

**(Generally available)**: You can now call the Chat API from Apps Script with the Advanced Chat Service. To learn how, see [Advanced Chat Service](../../apps-script/advanced/chat.md) in the Apps Script reference documentation.

We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides:

- [Authenticate as an app](./authenticate-authorize-chat-app.md)
- [Authenticate as a user](./authenticate-authorize-chat-user.md)
- [Try it - Respond to Incidents](../add-ons/samples/tutorial-incident-response-user-auth.md)

## November 03, 2023

Announcement

Users can now install Google Chat apps from app listing pages on the Google Workspace Marketplace. For details, see [Publish Google Chat apps](../marketplace/how-to-publish.md#use-install-apps).

## October 30, 2023

Feature

**(Developer Preview)**: Google Chat apps can now subscribe to the following types of events about message reactions:

- New reactions
- Removed reactions
- Multiple reactions have changed.

For details, see [Subscribe to Google Chat events](../events/guides/events-chat.md).

## October 24, 2023

Feature

**(Developer Preview):** You can now migrate historical memberships when you [import data into Google Chat](./import-data.md#historical_memberships).

## October 17, 2023

Feature

**(Generally available)**: Multiselect menus for cards and dialogs are now generally available. Multiselect menus let users select Google Workspace users and spaces, or select items from external data sources. For details, see [Selection input](./design-interactive-card-dialog.md#multiselect-menu).

## October 03, 2023

Announcement

**(Developer Preview):** Google Chat apps can now monitor and receive events about Google Chat spaces. The following event types are supported:

- New messages
- Updated messages
- New members
- Updated members
- Removed members
- Updated space
- Deleted space

To receive events, Chat apps create subscriptions using the Google Workspace Events API. To learn more, see the [Google Workspace Events API overview](../events.md).

## September 28, 2023

Feature

You can now use the `formattedText` field to [view the text formatting sent in a message](./format-messages.md#view_text_formatting_sent_in_a_message).

## September 15, 2023

Feature

**[Developer Preview](../preview.md)**: You can now update a human user's membership in a Chat space. For example, you can use the [`spaces.members.patch` method](./api/reference/rest/v1/spaces.members/patch.md) to update membership roles from `member` to `manager` and from `manager` to `member`.

## August 08, 2023

Announcement

Google Chat users outside of Google Workspace organizations can now install and use public Google Chat apps. To learn about how users discover and use Chat apps, see [Publish Google Chat apps](../marketplace/how-to-publish.md).

## July 28, 2023

Feature

Google Chat apps that [authenticate as a user](./authenticate-authorize-chat-user.md) can now reference users with their email address. The following Chat API methods support using email addresses to reference users:

- [Set up a space](./api/reference/rest/v1/spaces/setup.md)
- [Find a direct message](./api/reference/rest/v1/spaces/findDirectMessage.md)
- [Create a membership](./api/reference/rest/v1/spaces.members/create.md)
- [Get a membership](./api/reference/rest/v1/spaces.members/get.md)
- [Delete a membership](./api/reference/rest/v1/spaces.members/delete.md)

Chat apps can also use email addresses to @mention users. To learn more, see [Mention users in a message](./format-messages.md#messages-@mention).

## July 13, 2023

Feature

You can now specify [no divider between card sections](./api/reference/rest/v1/cards.md#dividerstyle).

## July 10, 2023

Feature

Multiselect menus are now available in [Developer Preview](../preview.md). Multiselect menus help users input static and dynamic data for Google Chat apps. To learn more, see the [Selection input widget documentation](./design-interactive-card-dialog.md#multiselect-menu).

## June 07, 2023

Feature

**Developer Preview**: Available as part of the [Google Workspace Developer Preview Program](../preview.md), which grants early access to certain features.

[Import data from your other messaging platforms](./import-data-overview.md) into Google Chat. You can import existing messages, attachments, reactions, memberships, and space entities from your other messaging platforms to corresponding Chat API resources. You can import this data by creating Chat spaces in import mode and importing data into those spaces.

## May 25, 2023

Announcement

You can [authenticate and authorize users' credentials](./authenticate-authorize-chat-user.md) to access the Chat API by using OAuth 2.0. Authenticating and authorizing with user credentials lets Chat apps access user data and perform operations on the authenticated user's behalf. When an app performs an action with user authentication (such as creating a space), Google Chat might display an attribution message that tells users the name of the app that performed the action for the user who authorized it.

[Oauth 2.0 scopes](./authenticate-authorize.md#scopes) are available for you to request and your users to consent to.

[Quotas and limits](./limits.md) are applied to the Chat API.

The following methods are available:

- [Create a message](./api/reference/rest/v1/spaces.messages/create.md)
- [Delete a message](./api/reference/rest/v1/spaces.messages/delete.md)
- [Get a message](./api/reference/rest/v1/spaces.messages/get.md)
- [Update a message](./api/reference/rest/v1/spaces.messages/update.md)
- [List messages](./api/reference/rest/v1/spaces.messages/list.md)
- [Create a reaction](./api/reference/rest/v1/spaces.messages.reactions/create.md)
- [Delete a reaction](./api/reference/rest/v1/spaces.messages.reactions/delete.md)
- [List reactions](./api/reference/rest/v1/spaces.messages.reactions/list.md)
- [Create a membership](./api/reference/rest/v1/spaces.members/create.md)
- [Delete a membership](./api/reference/rest/v1/spaces.members/delete.md)
- [Get a membership](./api/reference/rest/v1/spaces.members/get.md)
- [List memberships](./api/reference/rest/v1/spaces.members/list.md)
- [Create a space](./api/reference/rest/v1/spaces/create.md)
- [Delete a space](./api/reference/rest/v1/spaces/delete.md)
- [Get a space](./api/reference/rest/v1/spaces/get.md)
- [Find a direct message](./api/reference/rest/v1/spaces/findDirectMessage.md)
- [List spaces](./api/reference/rest/v1/spaces/list.md)
- [Update a space](./api/reference/rest/v1/spaces/patch.md)
- [Set up a space](./api/reference/rest/v1/spaces/setup.md) (create and populate)
- [Download media](./api/reference/rest/v1/media/download.md)
- [Upload media](./api/reference/rest/v1/media/upload.md)

## March 06, 2023

Feature

You can now design your Chat app to include checkboxes, radio buttons, switches, or a dropdown menu in your Chat app. For more information, see [`SelectionInput` widget](./design-interactive-card-dialog.md).

## January 18, 2023

Feature

Chat apps can now receive and respond to user-submitted information in cards and dialogs. For more information, see [Process information inputted by users](./read-form-data.md).

## January 17, 2023

Change

[Buttons](./api/reference/rest/v1/cards.md#button) can now include text and an icon. Previously, only an icon or only text was allowed in buttons.

## June 28, 2022

Deprecated

[Cards v1](./api/reference/rest/v1/cards-v1.md) is deprecated. Instead, use [Cards v2](./api/reference/rest/v1/cards.md).

## June 16, 2022

Feature

On the web, Google Chat cards now match [Google Material Design](https://material.io/). The Material Design cards feature aesthetic enhancements that improve usability and render faster.

## May 15, 2022

Feature

**Developer Preview**: Available as part of the [Google Workspace Developer Preview Program](../preview.md), which grants early access to certain features.

On mobile devices, Google Chat [cards](./api/reference/rest/v1/cards.md) now match [Google Material Design](https://material.io/). The Material Design cards feature aesthetic enhancements that improve usability and render faster.
