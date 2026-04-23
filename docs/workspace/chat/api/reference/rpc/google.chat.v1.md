---
source: https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1
root: workspace
fetched_at: 2026-04-23T15:25:17.964Z
---

# Package google.chat.v1

## Page Summary

- The Google Chat API allows developers to build apps and integrations that interact with Google Chat spaces and messages.
- Developers can use the API to create, update, and delete spaces, messages, memberships, and reactions.
- Authentication is required and can be app-based or user-based, with varying authorization scopes.
- The API offers functionalities like custom emojis, direct messaging, and media attachments.
- Comprehensive documentation and examples are provided for developers to utilize the API effectively.

## Index

- `ChatService` (interface)
- `AccessoryWidget` (message)
- `ActionResponse` (message)
- `ActionResponse.ResponseType` (enum)
- `ActionResponse.SelectionItems` (message)
- `ActionResponse.UpdatedWidget` (message)
- `ActionStatus` (message)
- `Annotation` (message)
- `AnnotationType` (enum)
- `AppCommandMetadata` (message)
- `AppCommandMetadata.AppCommandType` (enum)
- `AttachedGif` (message)
- `Attachment` (message)
- `Attachment.Source` (enum)
- `AttachmentDataRef` (message)
- `CalendarEventLinkData` (message)
- `CardWithId` (message)
- `ChatSpaceLinkData` (message)
- `CompleteImportSpaceRequest` (message)
- `CompleteImportSpaceResponse` (message)
- `ContextualAddOnMarkup` (message)
- `ContextualAddOnMarkup.Card` (message)
- `ContextualAddOnMarkup.Card.CardAction` (message)
- `ContextualAddOnMarkup.Card.CardHeader` (message)
- `ContextualAddOnMarkup.Card.CardHeader.ImageStyle` (enum)
- `ContextualAddOnMarkup.Card.Section` (message)
- `CreateCustomEmojiRequest` (message)
- `CreateMembershipRequest` (message)
- `CreateMessageRequest` (message)
- `CreateMessageRequest.MessageReplyOption` (enum)
- `CreateReactionRequest` (message)
- `CreateSectionRequest` (message)
- `CreateSpaceRequest` (message)
- `CustomEmoji` (message)
- `CustomEmoji.CustomEmojiPayload` (message)
- `CustomEmojiMetadata` (message)
- `DeleteCustomEmojiRequest` (message)
- `DeleteMembershipRequest` (message)
- `DeleteMessageRequest` (message)
- `DeleteReactionRequest` (message)
- `DeleteSectionRequest` (message)
- `DeleteSpaceRequest` (message)
- `DeletionMetadata` (message)
- `DeletionMetadata.DeletionType` (enum)
- `Dialog` (message)
- `DialogAction` (message)
- `DriveDataRef` (message)
- `DriveLinkData` (message)
- `Emoji` (message)
- `EmojiReactionSummary` (message)
- `FindDirectMessageRequest` (message)
- `FindGroupChatsRequest` (message)
- `FindGroupChatsResponse` (message)
- `ForwardedMetadata` (message)
- `GetAttachmentRequest` (message)
- `GetCustomEmojiRequest` (message)
- `GetMembershipRequest` (message)
- `GetMessageRequest` (message)
- `GetSpaceEventRequest` (message)
- `GetSpaceNotificationSettingRequest` (message)
- `GetSpaceReadStateRequest` (message)
- `GetSpaceRequest` (message)
- `GetThreadReadStateRequest` (message)
- `Group` (message)
- `HistoryState` (enum)
- `ListCustomEmojisRequest` (message)
- `ListCustomEmojisResponse` (message)
- `ListMembershipsRequest` (message)
- `ListMembershipsResponse` (message)
- `ListMessagesRequest` (message)
- `ListMessagesResponse` (message)
- `ListReactionsRequest` (message)
- `ListReactionsResponse` (message)
- `ListSectionItemsRequest` (message)
- `ListSectionItemsResponse` (message)
- `ListSectionsRequest` (message)
- `ListSectionsResponse` (message)
- `ListSpaceEventsRequest` (message)
- `ListSpaceEventsResponse` (message)
- `ListSpacesRequest` (message)
- `ListSpacesResponse` (message)
- `MatchedUrl` (message)
- `MeetSpaceLinkData` (message)
- `MeetSpaceLinkData.HuddleStatus` (enum)
- `MeetSpaceLinkData.Type` (enum)
- `Membership` (message)
- `Membership.MembershipRole` (enum)
- `Membership.MembershipState` (enum)
- `MembershipBatchCreatedEventData` (message)
- `MembershipBatchDeletedEventData` (message)
- `MembershipBatchUpdatedEventData` (message)
- `MembershipCreatedEventData` (message)
- `MembershipDeletedEventData` (message)
- `MembershipUpdatedEventData` (message)
- `Message` (message)
- `MessageBatchCreatedEventData` (message)
- `MessageBatchDeletedEventData` (message)
- `MessageBatchUpdatedEventData` (message)
- `MessageCreatedEventData` (message)
- `MessageDeletedEventData` (message)
- `MessageUpdatedEventData` (message)
- `MoveSectionItemRequest` (message)
- `MoveSectionItemResponse` (message)
- `PositionSectionRequest` (message)
- `PositionSectionRequest.Position` (enum)
- `PositionSectionResponse` (message)
- `QuotedMessageMetadata` (message)
- `QuotedMessageMetadata.QuoteType` (enum)
- `QuotedMessageSnapshot` (message)
- `Reaction` (message)
- `ReactionBatchCreatedEventData` (message)
- `ReactionBatchDeletedEventData` (message)
- `ReactionCreatedEventData` (message)
- `ReactionDeletedEventData` (message)
- `ReplaceMessageCardsRequest` (message)
- `ReplaceMessageCardsResponse` (message)
- `RichLinkMetadata` (message)
- `RichLinkMetadata.RichLinkType` (enum)
- `SearchSpacesRequest` (message)
- `SearchSpacesResponse` (message)
- `Section` (message)
- `Section.SectionType` (enum)
- `SectionItem` (message)
- `SetUpSpaceRequest` (message)
- `SlashCommand` (message)
- `SlashCommandMetadata` (message)
- `SlashCommandMetadata.Type` (enum)
- `Space` (message)
- `Space.AccessSettings` (message)
- `Space.AccessSettings.AccessState` (enum)
- `Space.MembershipCount` (message)
- `Space.PermissionSetting` (message)
- `Space.PermissionSettings` (message)
- `Space.PredefinedPermissionSettings` (enum)
- `Space.SpaceDetails` (message)
- `Space.SpaceThreadingState` (enum)
- `Space.SpaceType` (enum)
- `Space.Type` (enum)
- `SpaceBatchUpdatedEventData` (message)
- `SpaceEvent` (message)
- `SpaceNotificationSetting` (message)
- `SpaceNotificationSetting.MuteSetting` (enum)
- `SpaceNotificationSetting.NotificationSetting` (enum)
- `SpaceReadState` (message)
- `SpaceUpdatedEventData` (message)
- `SpaceView` (enum)
- `Thread` (message)
- `ThreadReadState` (message)
- `UpdateMembershipRequest` (message)
- `UpdateMessageRequest` (message)
- `UpdateSectionRequest` (message)
- `UpdateSpaceNotificationSettingRequest` (message)
- `UpdateSpaceReadStateRequest` (message)
- `UpdateSpaceRequest` (message)
- `User` (message)
- `User.Type` (enum)
- `UserMentionMetadata` (message)
- `UserMentionMetadata.Type` (enum)
- `WidgetMarkup` (message)
- `WidgetMarkup.Button` (message)
- `WidgetMarkup.FormAction` (message)
- `WidgetMarkup.FormAction.ActionParameter` (message)
- `WidgetMarkup.Icon` (enum)
- `WidgetMarkup.Image` (message)
- `WidgetMarkup.ImageButton` (message)
- `WidgetMarkup.KeyValue` (message)
- `WidgetMarkup.OnClick` (message)
- `WidgetMarkup.OpenLink` (message)
- `WidgetMarkup.TextButton` (message)
- `WidgetMarkup.TextParagraph` (message)

## ChatService

Enables developers to build Chat apps and integrations on Google Chat Platform.

CompleteImportSpace

``   rpc CompleteImportSpace(`CompleteImportSpaceRequest`) returns (`CompleteImportSpaceResponse`)  ``

Completes the [import process](https://developers.google.com/workspace/chat/import-data) for the specified space and makes it visible to users.

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and domain-wide delegation with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.import`

For more information, see [Authorize Google Chat apps to import data](https://developers.google.com/workspace/chat/authorize-import).

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.import`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

CreateCustomEmoji

``   rpc CreateCustomEmoji(`CreateCustomEmojiRequest`) returns (`CustomEmoji`)  ``

Creates a custom emoji.

Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.customemojis`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.customemojis`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

CreateMembership

``   rpc CreateMembership(`CreateMembershipRequest`) returns (`Membership`)  ``

Creates a membership for the calling Chat app, a user, or a Google Group. Creating memberships for other Chat apps isn't supported. When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space.

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope:
	- `https://www.googleapis.com/auth/chat.app.memberships`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.memberships`
		- `https://www.googleapis.com/auth/chat.memberships.app` (to add the calling app to the space)
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used:
		- `https://www.googleapis.com/auth/chat.admin.memberships`

App authentication is not supported for the following use cases:

- Inviting users external to the Workspace organization that owns the space.
- Adding a Google Group to a space.
- Adding a Chat app to a space.

For example usage, see:

- [Invite or add a user to a space](https://developers.google.com/workspace/chat/create-members#create-user-membership).
- [Invite or add a Google Group to a space](https://developers.google.com/workspace/chat/create-members#create-group-membership).
- [Add the Chat app to a space](https://developers.google.com/workspace/chat/create-members#create-membership-calling-api).

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.admin.memberships`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.app`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

CreateMessage

``   rpc CreateMessage(`CreateMessageRequest`) returns (`Message`)  ``

Creates a message in a Google Chat space. For an example, see [Send a message](https://developers.google.com/workspace/chat/create-messages).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.bot`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.messages.create`
		- `https://www.googleapis.com/auth/chat.messages`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

Chat attributes the message sender differently depending on the type of authentication that you use in your request.

The following image shows how Chat attributes a message when you use app authentication. Chat displays the Chat app as the message sender. The content of the message can contain text (`text`), cards (`cardsV2`), and accessory widgets (`accessoryWidgets`).

![Message sent with app authentication](https://developers.google.com/workspace/chat/images/message-app-auth.svg)

The following image shows how Chat attributes a message when you use user authentication. Chat displays the user as the message sender and attributes the Chat app to the message by displaying its name. The content of message can only contain text (`text`).

![Message sent with user authentication](https://developers.google.com/workspace/chat/images/message-user-auth.svg)

The maximum message size, including the message contents, is 32,000 bytes.

For [webhook](https://developers.google.com/workspace/chat/quickstart/webhooks) requests, the response doesn't contain the full message. The response only populates the `name` and `thread.name` fields in addition to the information that was in the request.

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.create`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

CreateReaction

``   rpc CreateReaction(`CreateReactionRequest`) returns (`Reaction`)  ``

Creates a reaction and adds it to a message. For an example, see [Add a reaction to a message](https://developers.google.com/workspace/chat/create-reactions).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.messages.reactions.create`
- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages.reactions.create`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

CreateSection

``   rpc CreateSection(`CreateSectionRequest`) returns (`Section`)  ``

Creates a section in Google Chat. Sections help users group conversations and customize the list of spaces displayed in Chat navigation panel. Only sections of type `CUSTOM_SECTION` can be created. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.sections`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

CreateSpace

``   rpc CreateSpace(`CreateSpaceRequest`) returns (`Space`)  ``

Creates a space. Can be used to create a named space, or a group chat in `Import mode`. For an example, see [Create a space](https://developers.google.com/workspace/chat/create-spaces).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.app.spaces.create`
		- `https://www.googleapis.com/auth/chat.app.spaces`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces.create`
		- `https://www.googleapis.com/auth/chat.spaces`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

When authenticating as an app, the `space.customer` field must be set in the request.

When authenticating as an app, the Chat app is added as a member of the space. However, unlike human authentication, the Chat app is not added as a space manager. By default, the Chat app can be removed from the space by all space members. To allow only space managers to remove the app from a space, set `space.permission_settings.manage_apps` to `managers_allowed`.

Space membership upon creation depends on whether the space is created in `Import mode`:

- **Import mode:** No members are created.
- **All other modes:** The calling user is added as a member. This is:
	- The app itself when using app authentication.
		- The human user when using user authentication.

If you receive the error message `ALREADY_EXISTS` when creating a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name.

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.spaces.create`
- `https://www.googleapis.com/auth/chat.app.spaces`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.create`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

DeleteCustomEmoji

``   rpc DeleteCustomEmoji(`DeleteCustomEmojiRequest`) returns (`Empty`)  ``

Deletes a custom emoji. By default, users can only delete custom emoji they created. [Emoji managers](https://support.google.com/a/answer/12850085) assigned by the administrator can delete any custom emoji in the organization. See [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149).

Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.customemojis`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.customemojis`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

DeleteMembership

``   rpc DeleteMembership(`DeleteMembershipRequest`) returns (`Membership`)  ``

Deletes a membership. For an example, see [Remove a user or a Google Chat app from a space](https://developers.google.com/workspace/chat/delete-members).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope:
	- `https://www.googleapis.com/auth/chat.app.memberships`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.memberships`
		- `https://www.googleapis.com/auth/chat.memberships.app` (to remove the calling app from the space)
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used:
		- `https://www.googleapis.com/auth/chat.admin.memberships`

App authentication is not supported for the following use cases:

- Removing a Google Group from a space.
- Removing a Chat app from a space.

To delete memberships for space managers, the requester must be a space manager. If you're using [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) the Chat app must be the space creator.

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.admin.memberships`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.app`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

DeleteMessage

``   rpc DeleteMessage(`DeleteMessageRequest`) returns (`Empty`)  ``

Deletes a message. For an example, see [Delete a message](https://developers.google.com/workspace/chat/delete-messages).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.bot`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.messages`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

When using app authentication, requests can only delete messages created by the calling Chat app.

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

DeleteReaction

``   rpc DeleteReaction(`DeleteReactionRequest`) returns (`Empty`)  ``

Deletes a reaction to a message. For an example, see [Delete a reaction](https://developers.google.com/workspace/chat/delete-reactions).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.reactions`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

DeleteSection

``   rpc DeleteSection(`DeleteSectionRequest`) returns (`Empty`)  ``

Deletes a section of type `CUSTOM_SECTION`.

If the section contains items, such as spaces, the items are moved to Google Chat's default sections and are not deleted.

For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.sections`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

DeleteSpace

``   rpc DeleteSpace(`DeleteSpaceRequest`) returns (`Empty`)  ``

Deletes a named space. Always performs a cascading delete, which means that the space's child resources—like messages posted in the space and memberships in the space—are also deleted. For an example, see [Delete a space](https://developers.google.com/workspace/chat/delete-spaces).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope:
	- `https://www.googleapis.com/auth/chat.app.delete` (only in spaces the app created)
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.delete`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used:
		- `https://www.googleapis.com/auth/chat.admin.delete`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.delete`
- `https://www.googleapis.com/auth/chat.admin.delete`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.delete`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

FindDirectMessage

``   rpc FindDirectMessage(`FindDirectMessageRequest`) returns (`Space`)  ``

Returns the existing direct message with the specified user. If no direct message space is found, returns a `404 NOT_FOUND` error. For an example, see [Find a direct message](https://developers.google.com/chat/api/guides/v1/spaces/find-direct-message).

With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), returns the direct message space between the specified user and the calling Chat app.

With [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), returns the direct message space between the specified user and the authenticated user.

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.bot`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.spaces`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.readonly`
- `https://www.googleapis.com/auth/chat.bot`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

FindGroupChats

``   rpc FindGroupChats(`FindGroupChatsRequest`) returns (`FindGroupChatsResponse`)  ``

Returns all spaces with `spaceType == GROUP_CHAT`, whose human memberships contain exactly the calling user, and the users specified in `FindGroupChatsRequest.users`. Only members that have joined the conversation are supported. For an example, see [Find group chats](https://developers.google.com/workspace/chat/find-group-chats).

If the calling user blocks, or is blocked by, some users, and no spaces with the entire specified set of users are found, this method returns spaces that don't include the blocked or blocking users.

The specified set of users must contain only human (non-app) memberships. A request that contains non-human users doesn't return any spaces.

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.memberships.readonly`
- `https://www.googleapis.com/auth/chat.memberships`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

GetAttachment

``   rpc GetAttachment(`GetAttachmentRequest`) returns (`Attachment`)  ``

Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/workspace/chat/api/reference/rest/v1/media/download). For an example, see [Get metadata about a message attachment](https://developers.google.com/workspace/chat/get-media-attachments).

Requires [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.bot`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.bot`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

GetCustomEmoji

``   rpc GetCustomEmoji(`GetCustomEmojiRequest`) returns (`CustomEmoji`)  ``

Returns details about a custom emoji.

Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.customemojis.readonly`
- `https://www.googleapis.com/auth/chat.customemojis`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.customemojis`
- `https://www.googleapis.com/auth/chat.customemojis.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

GetMembership

``   rpc GetMembership(`GetMembershipRequest`) returns (`Membership`)  ``

Returns details about a membership. For an example, see [Get details about a user's or Google Chat app's membership](https://developers.google.com/workspace/chat/get-members).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.bot`
		- `https://www.googleapis.com/auth/chat.app.memberships` (requires [administrator approval](https://support.google.com/a?p=chat-app-auth))
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.memberships.readonly`
		- `https://www.googleapis.com/auth/chat.memberships`
		- User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used:
		- `https://www.googleapis.com/auth/chat.admin.memberships.readonly`
				- `https://www.googleapis.com/auth/chat.admin.memberships`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.admin.memberships`
- `https://www.googleapis.com/auth/chat.admin.memberships.readonly`
- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

GetMessage

``   rpc GetMessage(`GetMessageRequest`) returns (`Message`)  ``

Returns details about a message. For an example, see [Get details about a message](https://developers.google.com/workspace/chat/get-messages).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.bot`: When using this authorization scope, this method returns details about a message the Chat app has access to, like direct messages and [slash commands](https://developers.google.com/workspace/chat/slash-commands) that invoke the Chat app.
		- `https://www.googleapis.com/auth/chat.app.messages.readonly` with [administrator approval](https://support.google.com/a?p=chat-app-auth). When using this authentication scope, this method returns details about a public message in a space.
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.messages.readonly`
		- `https://www.googleapis.com/auth/chat.messages`

Note: Might return a message from a blocked member or space.

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.readonly`
- `https://www.googleapis.com/auth/chat.app.messages.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

GetSpace

``   rpc GetSpace(`GetSpaceRequest`) returns (`Space`)  ``

Returns details about a space. For an example, see [Get details about a space](https://developers.google.com/workspace/chat/get-spaces).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.bot`
		- `https://www.googleapis.com/auth/chat.app.spaces` with [administrator approval](https://support.google.com/a?p=chat-app-auth)
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.spaces`
		- User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used:
		- `https://www.googleapis.com/auth/chat.admin.spaces.readonly`
				- `https://www.googleapis.com/auth/chat.admin.spaces`

App authentication has the following limitations:

- `space.access_settings` is only populated when using the `chat.app.spaces` scope.
- `space.predefind_permission_settings` and `space.permission_settings` are only populated when using the `chat.app.spaces` scope, and only for spaces the app created.

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.admin.spaces`
- `https://www.googleapis.com/auth/chat.admin.spaces.readonly`
- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.readonly`
- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.app.spaces`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

GetSpaceEvent

``   rpc GetSpaceEvent(`GetSpaceEventRequest`) returns (`SpaceEvent`)  ``

Returns an event from a Google Chat space. The [event payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the resource that changed. For example, if you request an event about a new message but the message was later updated, the server returns the updated `Message` resource in the event payload.

Note: The `permissionSettings` field is not returned in the Space object of the Space event data for this request.

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize) with an [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes) appropriate for reading the requested data:

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.app.spaces`
		- `https://www.googleapis.com/auth/chat.app.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.app.messages.readonly`
		- `https://www.googleapis.com/auth/chat.app.memberships`
		- `https://www.googleapis.com/auth/chat.app.memberships.readonly`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.spaces`
		- `https://www.googleapis.com/auth/chat.messages.readonly`
		- `https://www.googleapis.com/auth/chat.messages`
		- `https://www.googleapis.com/auth/chat.messages.reactions.readonly`
		- `https://www.googleapis.com/auth/chat.messages.reactions`
		- `https://www.googleapis.com/auth/chat.memberships.readonly`
		- `https://www.googleapis.com/auth/chat.memberships`

To get an event, the authenticated caller must be a member of the space.

For an example, see [Get details about an event from a Google Chat space](https://developers.google.com/workspace/chat/get-space-event).

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.app.memberships.readonly`
- `https://www.googleapis.com/auth/chat.app.messages.readonly`
- `https://www.googleapis.com/auth/chat.app.spaces`
- `https://www.googleapis.com/auth/chat.app.spaces.readonly`
- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.readonly`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.readonly`
- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.readonly`
- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages.reactions.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

GetSpaceNotificationSetting

``   rpc GetSpaceNotificationSetting(`GetSpaceNotificationSettingRequest`) returns (`SpaceNotificationSetting`)  ``

Gets the space notification setting. For an example, see [Get the caller's space notification setting](https://developers.google.com/workspace/chat/get-space-notification-setting).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.spacesettings`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.spacesettings`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

GetSpaceReadState

``   rpc GetSpaceReadState(`GetSpaceReadStateRequest`) returns (`SpaceReadState`)  ``

Returns details about a user's read state within a space, used to identify read and unread messages. For an example, see [Get details about a user's space read state](https://developers.google.com/workspace/chat/get-space-read-state).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.readstate.readonly`
- `https://www.googleapis.com/auth/chat.users.readstate`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.users.readstate`
- `https://www.googleapis.com/auth/chat.users.readstate.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

GetThreadReadState

``   rpc GetThreadReadState(`GetThreadReadStateRequest`) returns (`ThreadReadState`)  ``

Returns details about a user's read state within a thread, used to identify read and unread messages. For an example, see [Get details about a user's thread read state](https://developers.google.com/workspace/chat/get-thread-read-state).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.readstate.readonly`
- `https://www.googleapis.com/auth/chat.users.readstate`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.users.readstate`
- `https://www.googleapis.com/auth/chat.users.readstate.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

ListCustomEmojis

``   rpc ListCustomEmojis(`ListCustomEmojisRequest`) returns (`ListCustomEmojisResponse`)  ``

Lists custom emojis visible to the authenticated user.

Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.customemojis.readonly`
- `https://www.googleapis.com/auth/chat.customemojis`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.customemojis`
- `https://www.googleapis.com/auth/chat.customemojis.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

ListMemberships

``   rpc ListMemberships(`ListMembershipsRequest`) returns (`ListMembershipsResponse`)  ``

Lists memberships in a space. For an example, see [List users and Google Chat apps in a space](https://developers.google.com/workspace/chat/list-members). Listing memberships with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) lists memberships in spaces that the authenticated user has access to.

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.bot`
		- `https://www.googleapis.com/auth/chat.app.memberships` (requires [administrator approval](https://support.google.com/a?p=chat-app-auth))
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.memberships.readonly`
		- `https://www.googleapis.com/auth/chat.memberships`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used:
		- `https://www.googleapis.com/auth/chat.admin.memberships.readonly`
				- `https://www.googleapis.com/auth/chat.admin.memberships`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.admin.memberships`
- `https://www.googleapis.com/auth/chat.admin.memberships.readonly`
- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

ListMessages

``   rpc ListMessages(`ListMessagesRequest`) returns (`ListMessagesResponse`)  ``

Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. System messages, like those announcing new space members, aren't included. If you list messages from a space with no messages, the response is an empty object. When using a REST/HTTP interface, the response contains an empty JSON object, `{}`. For an example, see [List messages](https://developers.google.com/workspace/chat/api/guides/v1/messages/list).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.app.messages.readonly`. When using this authentication scope, this method only returns public messages in a space. It doesn't include private messages.
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.messages.readonly`
		- `https://www.googleapis.com/auth/chat.messages`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.readonly`
- `https://www.googleapis.com/auth/chat.app.messages.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

ListReactions

``   rpc ListReactions(`ListReactionsRequest`) returns (`ListReactionsResponse`)  ``

Lists reactions to a message. For an example, see [List reactions for a message](https://developers.google.com/workspace/chat/list-reactions).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.messages.reactions.readonly`
- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages.readonly`
- `https://www.googleapis.com/auth/chat.messages`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.readonly`
- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages.reactions.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

ListSectionItems

``   rpc ListSectionItems(`ListSectionItemsRequest`) returns (`ListSectionItemsResponse`)  ``

Lists items in a section.

Only spaces can be section items. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`
- `https://www.googleapis.com/auth/chat.users.sections.readonly`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.users.sections`
- `https://www.googleapis.com/auth/chat.users.sections.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

ListSections

``   rpc ListSections(`ListSectionsRequest`) returns (`ListSectionsResponse`)  ``

Lists sections available to the Chat user. Sections help users group their conversations and customize the list of spaces displayed in Chat navigation panel. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`
- `https://www.googleapis.com/auth/chat.users.sections.readonly`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.users.sections`
- `https://www.googleapis.com/auth/chat.users.sections.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

ListSpaceEvents

``   rpc ListSpaceEvents(`ListSpaceEventsRequest`) returns (`ListSpaceEventsResponse`)  ``

Lists events from a Google Chat space. For each event, the [payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the Chat resource. For example, if you list events about new space members, the server returns `Membership` resources that contain the latest membership details. If new members were removed during the requested period, the event payload contains an empty `Membership` resource.

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize) with an [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes) appropriate for reading the requested data:

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.app.spaces`
		- `https://www.googleapis.com/auth/chat.app.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.app.messages.readonly`
		- `https://www.googleapis.com/auth/chat.app.memberships`
		- `https://www.googleapis.com/auth/chat.app.memberships.readonly`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.spaces`
		- `https://www.googleapis.com/auth/chat.messages.readonly`
		- `https://www.googleapis.com/auth/chat.messages`
		- `https://www.googleapis.com/auth/chat.messages.reactions.readonly`
		- `https://www.googleapis.com/auth/chat.messages.reactions`
		- `https://www.googleapis.com/auth/chat.memberships.readonly`
		- `https://www.googleapis.com/auth/chat.memberships`

To list events, the authenticated caller must be a member of the space.

For an example, see [List events from a Google Chat space](https://developers.google.com/workspace/chat/list-space-events).

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.app.memberships.readonly`
- `https://www.googleapis.com/auth/chat.app.messages.readonly`
- `https://www.googleapis.com/auth/chat.app.spaces`
- `https://www.googleapis.com/auth/chat.app.spaces.readonly`
- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.readonly`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.readonly`
- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.readonly`
- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages.reactions.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

ListSpaces

``   rpc ListSpaces(`ListSpacesRequest`) returns (`ListSpacesResponse`)  ``

Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an example, see [List spaces](https://developers.google.com/workspace/chat/list-spaces).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.bot`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.spaces`

To list all named spaces by Google Workspace organization, use the [`spaces.search()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search) method using Workspace administrator privileges instead.

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.readonly`
- `https://www.googleapis.com/auth/chat.bot`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

MoveSectionItem

``   rpc MoveSectionItem(`MoveSectionItemRequest`) returns (`MoveSectionItemResponse`)  ``

Moves an item from one section to another. For example, if a section contains spaces, this method can be used to move a space to a different section. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.sections`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

PositionSection

``   rpc PositionSection(`PositionSectionRequest`) returns (`PositionSectionResponse`)  ``

Changes the sort order of a section. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.sections`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

ReplaceMessageCards

``   rpc ReplaceMessageCards(`ReplaceMessageCardsRequest`) returns (`ReplaceMessageCardsResponse`)  ``

Replaces the cards included in a message.

A Chat app can only replace cards on a human-created message if the message already contains cards, and the cards were created by the app.

If the app replaces the cards with an empty list, the cards are removed. After removing the cards, the app cannot add cards back to the message.

Requires [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.bot`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.bot`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

SearchSpaces

``   rpc SearchSpaces(`SearchSpacesRequest`) returns (`SearchSpacesResponse`)  ``

Returns a list of spaces in a Google Workspace organization based on an administrator's search. In the request, set `use_admin_access` to `true`. For an example, see [Search for and manage spaces](https://developers.google.com/workspace/chat/search-manage-admin).

Requires [user authentication with administrator privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges) and one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.admin.spaces.readonly`
- `https://www.googleapis.com/auth/chat.admin.spaces`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.admin.spaces`
- `https://www.googleapis.com/auth/chat.admin.spaces.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

SetUpSpace

``   rpc SetUpSpace(`SetUpSpaceRequest`) returns (`Space`)  ``

Creates a space and adds specified users to it. The calling user is automatically added to the space, and shouldn't be specified as a membership in the request. For an example, see [Set up a space with initial members](https://developers.google.com/workspace/chat/set-up-spaces).

To specify the human members to add, add memberships with the appropriate `membership.member.name`. To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`.

To specify the Google groups to add, add memberships with the appropriate `membership.group_member.name`. To add or invite a Google group, use `groups/{group}`, where `{group}` is the `id` for the group from the Cloud Identity Groups API. For example, you can use [Cloud Identity Groups lookup API](https://cloud.google.com/identity/docs/reference/rest/v1/groups/lookup) to retrieve the ID `123456789` for group email `group@example.com`, then you can add the group to the space by setting the `membership.group_member.name` to `groups/123456789`. Group email is not supported, and Google groups can only be added as members in named spaces.

For a named space or group chat, if the caller blocks, or is blocked by some members, or doesn't have permission to add some members, then those members aren't added to the created space.

To create a direct message (DM) between the calling user and another human user, specify exactly one membership to represent the human user. If one user blocks the other, the request fails and the DM isn't created.

To create a DM between the calling user and the calling app, set `Space.singleUserBotDm` to `true` and don't specify any memberships. You can only use this method to set up a DM with the calling app. To add the calling app as a member of a space or an existing DM between two human users, see [Invite or add a user or app to a space](https://developers.google.com/workspace/chat/create-members).

If a DM already exists between two users, even when one user blocks the other at the time a request is made, then the existing DM is returned.

Spaces with threaded replies aren't supported. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name.

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.spaces.create`
- `https://www.googleapis.com/auth/chat.spaces`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.create`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

UpdateMembership

``   rpc UpdateMembership(`UpdateMembershipRequest`) returns (`Membership`)  ``

Updates a membership. For an example, see [Update a user's membership in a space](https://developers.google.com/workspace/chat/update-members).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope:
	- `https://www.googleapis.com/auth/chat.app.memberships` (only in spaces the app created)
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.memberships`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used:
		- `https://www.googleapis.com/auth/chat.admin.memberships`

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.admin.memberships`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.memberships`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

UpdateMessage

``   rpc UpdateMessage(`UpdateMessageRequest`) returns (`Message`)  ``

Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/workspace/chat/update-messages).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.bot`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.messages`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

When using app authentication, requests can only update messages created by the calling Chat app.

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

UpdateSection

``   rpc UpdateSection(`UpdateSectionRequest`) returns (`Section`)  ``

Updates a section. Only sections of type `CUSTOM_SECTION` can be updated. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.sections`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

UpdateSpace

``   rpc UpdateSpace(`UpdateSpaceRequest`) returns (`Space`)  ``

Updates a space. For an example, see [Update a space](https://developers.google.com/workspace/chat/update-spaces).

If you're updating the `displayName` field and receive the error message `ALREADY_EXISTS`, try a different display name.. An existing space within the Google Workspace organization might already use this display name.

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.app.spaces`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scopes is used:
		- `https://www.googleapis.com/auth/chat.admin.spaces`

App authentication has the following limitations:

- To update either `space.predefined_permission_settings` or `space.permission_settings`, the app must be the space creator.
- Updating the `space.access_settings.audience` is not supported for app authentication.

Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.app.spaces`
- `https://www.googleapis.com/auth/chat.admin.spaces`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.spaces`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

UpdateSpaceNotificationSetting

``   rpc UpdateSpaceNotificationSetting(`UpdateSpaceNotificationSettingRequest`) returns (`SpaceNotificationSetting`)  ``

Updates the space notification setting. For an example, see [Update the caller's space notification setting](https://developers.google.com/workspace/chat/update-space-notification-setting).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.spacesettings`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.spacesettings`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

UpdateSpaceReadState

``   rpc UpdateSpaceReadState(`UpdateSpaceReadStateRequest`) returns (`SpaceReadState`)  ``

Updates a user's read state within a space, used to identify read and unread messages. For an example, see [Update a user's space read state](https://developers.google.com/workspace/chat/update-space-read-state).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.readstate`

Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.readstate`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

## AccessoryWidget

One or more interactive widgets that appear at the bottom of a message. For details, see [Add interactive widgets at the bottom of a message](https://developers.google.com/workspace/chat/create-messages#add-accessory-widgets).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>action</code>. The type of action. <code>action</code> can be only one of the following:</td></tr><tr><td><code>button_list</code></td><td><p><code>ButtonList</code></p><p>A list of buttons.</p></td></tr></tbody></table>

## ActionResponse

Parameters that a Chat app can use to configure how its response is posted.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>ResponseType</code></p><p>Input only. The type of Chat app response.</p></td></tr><tr><td><code>url</code></td><td><p><code>string</code></p><p>Input only. URL for users to authenticate or configure. (Only for <code>REQUEST_CONFIG</code> response types.)</p></td></tr><tr><td><code>dialog_action</code></td><td><p><code>DialogAction</code></p><p>Input only. A response to an interaction event related to a <a href="https://developers.google.com/workspace/chat/dialogs">dialog</a>. Must be accompanied by <code>ResponseType.Dialog</code>.</p></td></tr><tr><td><code>updated_widget</code></td><td><p><code>UpdatedWidget</code></p><p>Input only. The response of the updated widget.</p></td></tr></tbody></table>

## ResponseType

The type of Chat app response.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Default type that's handled as <code>NEW_MESSAGE</code>.</td></tr><tr><td><code>NEW_MESSAGE</code></td><td>Post as a new message in the topic.</td></tr><tr><td><code>UPDATE_MESSAGE</code></td><td>Update the Chat app's message. This is only permitted on a <code>CARD_CLICKED</code> event where the message sender type is <code>BOT</code>.</td></tr><tr><td><code>UPDATE_USER_MESSAGE_CARDS</code></td><td>Update the cards on a user's message. This is only permitted as a response to a <code>MESSAGE</code> event with a matched url, or a <code>CARD_CLICKED</code> event where the message sender type is <code>HUMAN</code>. Text is ignored.</td></tr><tr><td><code>REQUEST_CONFIG</code></td><td>Privately ask the user for additional authentication or configuration.</td></tr><tr><td><code>DIALOG</code></td><td>Presents a <a href="https://developers.google.com/workspace/chat/dialogs">dialog</a>.</td></tr><tr><td><code>UPDATE_WIDGET</code></td><td>Widget text autocomplete options query.</td></tr></tbody></table>

## SelectionItems

List of widget autocomplete results.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td><p><code>SelectionItem</code></p><p>An array of the SelectionItem objects.</p></td></tr></tbody></table>

## UpdatedWidget

For `selectionInput` widgets, returns autocomplete suggestions for a multiselect menu.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>widget</code></td><td><p><code>string</code></p><p>The ID of the updated widget. The ID must match the one for the widget that triggered the update request.</p></td></tr><tr><td colspan="2">Union field <code>updated_widget</code>. The widget updated in response to a user action. <code>updated_widget</code> can be only one of the following:</td></tr><tr><td><code>suggestions</code></td><td><p><code>SelectionItems</code></p><p>List of widget autocomplete results</p></td></tr></tbody></table>

## ActionStatus

Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/workspace/chat/dialogs).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>status_code</code></td><td><p><code>Code</code></p><p>The status code.</p></td></tr><tr><td><code>user_facing_message</code></td><td><p><code>string</code></p><p>The message to send users about the status of their request. If unset, a generic message based on the <code>status_code</code> is sent.</p></td></tr></tbody></table>

## Annotation

Output only. Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace resources like Google Docs or Sheets with `start_index` and `length` of 0. To add basic formatting to a text message, see [Format text messages](https://developers.google.com/workspace/chat/format-messages).

Example plain-text message body:

```
Hello @FooBot how are you!"
```

The corresponding annotations metadata:

```
"annotations":[{
  "type":"USER_MENTION",
  "startIndex":6,
  "length":7,
  "userMention": {
    "user": {
      "name":"users/{user}",
      "displayName":"FooBot",
      "avatarUrl":"https://goo.gl/aeDtrS",
      "type":"BOT"
    },
    "type":"MENTION"
   }
}]
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>AnnotationType</code></p><p>The type of this annotation.</p></td></tr><tr><td><code>length</code></td><td><p><code>int32</code></p><p>Length of the substring in the plain-text message body this annotation corresponds to. If not present, indicates a length of 0.</p></td></tr><tr><td><code>start_index</code></td><td><p><code>int32</code></p><p>Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.</p></td></tr></tbody></table>

## AnnotationType

Type of the annotation.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ANNOTATION_TYPE_UNSPECIFIED</code></td><td>Default value for the enum. Don't use.</td></tr><tr><td><code>USER_MENTION</code></td><td>A user is mentioned.</td></tr><tr><td><code>SLASH_COMMAND</code></td><td>A slash command is invoked.</td></tr><tr><td><code>RICH_LINK</code></td><td>A rich link annotation.</td></tr><tr><td><code>CUSTOM_EMOJI</code></td><td>A custom emoji annotation.</td></tr></tbody></table>

## AttachedGif

A GIF image that's specified by a URL.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>uri</code></td><td><p><code>string</code></p><p>Output only. The URL that hosts the GIF image.</p></td></tr></tbody></table>

## Attachment

An attachment in Google Chat.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the attachment.</p><p>Format: <code>spaces/{space}/messages/{message}/attachments/{attachment}</code>.</p></td></tr><tr><td><code>content_name</code></td><td><p><code>string</code></p><p>Output only. The original file name for the content, not the full path.</p></td></tr><tr><td><code>content_type</code></td><td><p><code>string</code></p><p>Output only. The content type (MIME type) of the file.</p></td></tr><tr><td><code>thumbnail_uri</code></td><td><p><code>string</code></p><p>Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content.</p></td></tr><tr><td><code>download_uri</code></td><td><p><code>string</code></p><p>Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content.</p></td></tr><tr><td><code>source</code></td><td><p><code>Source</code></p><p>Output only. The source of the attachment.</p></td></tr><tr><td colspan="2">Union field <code>data_ref</code>. The data reference to the attachment. <code>data_ref</code> can be only one of the following:</td></tr><tr><td><code>attachment_data_ref</code></td><td><p><code>AttachmentDataRef</code></p><p>Optional. A reference to the attachment data. This field is used to create or update messages with attachments, or with the media API to download the attachment data.</p></td></tr><tr><td><code>drive_data_ref</code></td><td><p><code>DriveDataRef</code></p><p>Output only. A reference to the Google Drive attachment. This field is used with the Google Drive API.</p></td></tr></tbody></table>

## Source

The source of the attachment.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SOURCE_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>DRIVE_FILE</code></td><td>The file is a Google Drive file.</td></tr><tr><td><code>UPLOADED_CONTENT</code></td><td>The file is uploaded to Chat.</td></tr></tbody></table>

## AttachmentDataRef

A reference to the attachment data.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>resource_name</code></td><td><p><code>string</code></p><p>Optional. The resource name of the attachment data. This field is used with the media API to download the attachment data.</p></td></tr><tr><td><code>attachment_upload_token</code></td><td><p><code>string</code></p><p>Optional. Opaque token containing a reference to an uploaded attachment. Treated by clients as an opaque string and used to create or update Chat messages with attachments.</p></td></tr></tbody></table>

## CalendarEventLinkData

Data for Calendar event links.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>calendar_id</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/workspace/calendar/api/v3/reference/calendars">Calendar identifier</a> of the linked Calendar.</p></td></tr><tr><td><code>event_id</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/workspace/calendar/api/v3/reference/events">Event identifier</a> of the linked Calendar event.</p></td></tr></tbody></table>

## CardWithId

A [card](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards) in a Google Chat message.

Chat apps can create cards with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). As part of the [Developer Preview Program](https://developers.google.com/workspace/preview), if your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), it can create card messages. If your Chat app is not part of Developer Preview Program, it can't create cards with user authentication.

To learn how to create a message that contains cards, see [Send a message](https://developers.google.com/workspace/chat/create-messages).

Design and preview cards with the Card Builder.

[Open the Card Builder](https://addons.gsuite.google.com/uikit/builder)

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>card_id</code></td><td><p><code>string</code></p><p>Required if the message contains multiple cards. A unique identifier for a card in a message.</p></td></tr><tr><td><code>card</code></td><td><p><code>Card</code></p><p>A card. Maximum size is 32 KB.</p></td></tr></tbody></table>

## ChatSpaceLinkData

Data for Chat space links.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space</code></td><td><p><code>string</code></p><p>The space of the linked Chat space resource.</p><p>Format: <code>spaces/{space}</code></p></td></tr><tr><td><code>thread</code></td><td><p><code>string</code></p><p>The thread of the linked Chat space resource.</p><p>Format: <code>spaces/{space}/threads/{thread}</code></p></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>The message of the linked Chat space resource.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p></td></tr></tbody></table>

## CompleteImportSpaceRequest

Request message for completing the import process for a space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the import mode space.</p><p>Format: <code>spaces/{space}</code></p></td></tr></tbody></table>

## CompleteImportSpaceResponse

Response message for completing the import process for a space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space</code></td><td><p><code>Space</code></p><p>The import mode space.</p></td></tr></tbody></table>

## ContextualAddOnMarkup

This type has no fields.

The markup for developers to specify the contents of a contextual AddOn.

## Card

A card is a UI element that can contain UI widgets such as text and images.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>header</code></td><td><p><code>CardHeader</code></p><p>The header of the card. A header usually contains a title and an image.</p></td></tr><tr><td><code>sections[]</code></td><td><p><code>Section</code></p><p>Sections are separated by a line divider.</p></td></tr><tr><td><code>card_actions[]</code></td><td><p><code>CardAction</code></p><p>The actions of this card.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>Name of the card.</p></td></tr></tbody></table>

## CardAction

A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser.

Not supported by Google Chat apps.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>action_label</code></td><td><p><code>string</code></p><p>The label used to be displayed in the action menu item.</p></td></tr><tr><td><code>on_click</code></td><td><p><code>OnClick</code></p><p>The onclick action for this action item.</p></td></tr></tbody></table>

## CardHeader

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each takes up one line. If only the title is specified, it takes up both lines.</p></td></tr><tr><td><code>subtitle</code></td><td><p><code>string</code></p><p>The subtitle of the card header.</p></td></tr><tr><td><code>image_style</code></td><td><p><code>ImageStyle</code></p><p>The image's type (for example, square border or circular border).</p></td></tr><tr><td><code>image_url</code></td><td><p><code>string</code></p><p>The URL of the image in the card header.</p></td></tr></tbody></table>

## ImageStyle

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>IMAGE_STYLE_UNSPECIFIED</code></td><td></td></tr><tr><td><code>IMAGE</code></td><td>Square border.</td></tr></tbody></table>

## Section

A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there's currently no need for layout properties (for example, float).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>header</code></td><td><p><code>string</code></p><p>The header of the section. Formatted text is supported. For more information about formatting text, see <a href="https://developers.google.com/workspace/chat/format-messages#card-formatting">Formatting text in Google Chat apps</a> and <a href="https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting">Formatting text in Google Workspace Add-ons</a>.</p></td></tr><tr><td><code>widgets[]</code></td><td><p><code>WidgetMarkup</code></p><p>A section must contain at least one widget.</p></td></tr></tbody></table>

## CreateCustomEmojiRequest

A request to create a custom emoji.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>custom_emoji</code></td><td><p><code>CustomEmoji</code></p><p>Required. The custom emoji to create.</p></td></tr></tbody></table>

## CreateMembershipRequest

Request message for creating a membership.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The resource name of the space for which to create the membership.</p><p>Format: spaces/{space}</p></td></tr><tr><td><code>membership</code></td><td><p><code>Membership</code></p><p>Required. The membership relation to create.</p><p>The <code>memberType</code> field must contain a user with the <code>user.name</code> and <code>user.type</code> fields populated. The server will assign a resource name and overwrite anything specified.</p><p>When a Chat app creates a membership relation for a human user, it must use certain authorization scopes and set specific values for certain fields:</p><ul><li><p>When <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticating as a user</a>, the <code>chat.memberships</code> authorization scope is required.</p></li><li><p>When <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">authenticating as an app</a>, the <code>chat.app.memberships</code> authorization scope is required.</p></li><li><p>Set <code>user.type</code> to <code>HUMAN</code>, and set <code>user.name</code> with format <code>users/{user}</code>, where <code>{user}</code> can be the email address for the user. For users in the same Workspace organization <code>{user}</code> can also be the <code>id</code> of the <a href="https://developers.google.com/people/api/rest/v1/people">person</a> from the People API, or the <code>id</code> for the user in the Directory API. For example, if the People API Person profile ID for <code>user@example.com</code> is <code>123456789</code>, you can add the user to the space by setting the <code>membership.member.name</code> to <code>users/user@example.com</code> or <code>users/123456789</code>.</p></li></ul><p>Inviting users external to the Workspace organization that owns the space requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a>.</p><p>When a Chat app creates a membership relation for itself, it must <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticate as a user</a> and use the <code>chat.memberships.app</code> scope, set <code>user.type</code> to <code>BOT</code>, and set <code>user.name</code> to <code>users/app</code>.</p></td></tr><tr><td><code>use_admin_access</code></td><td><p><code>bool</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.memberships</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p><p>Creating app memberships or creating memberships for users outside the administrator's Google Workspace organization isn't supported using admin access.</p></td></tr></tbody></table>

## CreateMessageRequest

Creates a message.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The resource name of the space in which to create a message.</p><p>Format: <code>spaces/{space}</code></p></td></tr><tr><td><code>message</code></td><td><p><code>Message</code></p><p>Required. Message body.</p></td></tr><tr><td><code>thread_key<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Optional. Deprecated: Use <code>thread.thread_key</code> instead. ID for the thread. Supports up to 4000 characters. To start or add to a thread, create a message and specify a <code>threadKey</code> or the <code>thread.name</code>. For example usage, see <a href="https://developers.google.com/workspace/chat/create-messages#create-message-thread">Start or reply to a message thread</a>.</p></td></tr><tr><td><code>request_id</code></td><td><p><code>string</code></p><p>Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.</p></td></tr><tr><td><code>message_reply_option</code></td><td><p><code>MessageReplyOption</code></p><p>Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.</p><p>When <a href="https://developers.google.com/workspace/chat/receive-respond-interactions">responding to user interactions</a>, this field is ignored. For interactions within a thread, the reply is created in the same thread. Otherwise, the reply is created as a new thread.</p></td></tr><tr><td><code>message_id</code></td><td><p><code>string</code></p><p>Optional. A custom ID for a message. Lets Chat apps get, update, or delete a message without needing to store the system-assigned ID in the message's resource name (represented in the message <code>name</code> field).</p><p>The value for this field must meet the following requirements:</p><ul><li>Begins with <code>client-</code>. For example, <code>client-custom-name</code> is a valid custom ID, but <code>custom-name</code> is not.</li><li>Contains up to 63 characters and only lowercase letters, numbers, and hyphens.</li><li>Is unique within a space. A Chat app can't use the same custom ID for different messages.</li></ul><p>For details, see <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">Name a message</a>.</p></td></tr></tbody></table>

## MessageReplyOption

Specifies how to reply to a message. More states might be added in the future.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>MESSAGE_REPLY_OPTION_UNSPECIFIED</code></td><td>Default. Starts a new thread. Using this option ignores any <code>thread ID</code> or <code><code>thread_key</code></code> that's included.</td></tr><tr><td><code>REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD</code></td><td>Creates the message as a reply to the thread specified by <code>thread ID</code> or <code><code>thread_key</code></code>. If it fails, the message starts a new thread instead.</td></tr><tr><td><code>REPLY_MESSAGE_OR_FAIL</code></td><td>Creates the message as a reply to the thread specified by <code>thread ID</code> or <code><code>thread_key</code></code>. If a new <code>thread_key</code> is used, a new thread is created. If the message creation fails, a <code>NOT_FOUND</code> error is returned instead.</td></tr></tbody></table>

## CreateReactionRequest

Creates a reaction to a message.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The message where the reaction is created.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p></td></tr><tr><td><code>reaction</code></td><td><p><code>Reaction</code></p><p>Required. The reaction to create.</p></td></tr></tbody></table>

## CreateSectionRequest

Request message for creating a section.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent resource name where the section is created.</p><p>Format: <code>users/{user}</code></p></td></tr><tr><td><code>section</code></td><td><p><code>Section</code></p><p>Required. The section to create.</p></td></tr></tbody></table>

## CreateSpaceRequest

A request to create a named space with no members.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space</code></td><td><p><code>Space</code></p><p>Required. The <code>displayName</code> and <code>spaceType</code> fields must be populated. Only <code>SpaceType.SPACE</code> and <code>SpaceType.GROUP_CHAT</code> are supported. <code>SpaceType.GROUP_CHAT</code> can only be used if <code>importMode</code> is set to true.</p><p>If you receive the error message <code>ALREADY_EXISTS</code>, try a different <code>displayName</code>. An existing space within the Google Workspace organization might already use this display name.</p><p>The space <code>name</code> is assigned on the server so anything specified in this field will be ignored.</p></td></tr><tr><td><code>request_id</code></td><td><p><code>string</code></p><p>Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.</p></td></tr></tbody></table>

## CustomEmoji

Represents a [custom emoji](https://support.google.com/chat/answer/12800149).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the custom emoji, assigned by the server.</p><p>Format: <code>customEmojis/{customEmoji}</code></p></td></tr><tr><td><code>uid</code></td><td><p><code>string</code></p><p>Output only. Unique key for the custom emoji resource.</p></td></tr><tr><td><code>emoji_name</code></td><td><p><code>string</code></p><p>Optional. Immutable. User-provided name for the custom emoji, which is unique within the organization.</p><p>Required when the custom emoji is created, output only otherwise.</p><p>Emoji names must start and end with colons, must be lowercase and can only contain alphanumeric characters, hyphens, and underscores. Hyphens and underscores should be used to separate words and cannot be used consecutively.</p><p>Example: <code>:valid-emoji-name:</code></p></td></tr><tr><td><code>temporary_image_uri</code></td><td><p><code>string</code></p><p>Output only. A temporary image URL for the custom emoji, valid for at least 10 minutes. Note that this is not populated in the response when the custom emoji is created.</p></td></tr><tr><td><code>payload</code></td><td><p><code>CustomEmojiPayload</code></p><p>Optional. Input only. Payload data. Required when the custom emoji is created.</p></td></tr></tbody></table>

## CustomEmojiPayload

Payload data for the custom emoji.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>file_content</code></td><td><p><code>bytes</code></p><p>Required. Input only. The image used for the custom emoji.</p><p>The payload must be under 256 KB and the dimension of the image must be square and between 64 and 500 pixels. The restrictions are subject to change.</p></td></tr><tr><td><code>filename</code></td><td><p><code>string</code></p><p>Required. Input only. The image file name.</p><p>Supported file extensions: <code>.png</code>, <code>.jpg</code>, <code>.gif</code>.</p></td></tr></tbody></table>

## DeleteCustomEmojiRequest

Request for deleting a custom emoji.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the custom emoji to delete.</p><p>Format: <code>customEmojis/{customEmoji}</code></p><p>You can use the emoji name as an alias for <code>{customEmoji}</code>. For example, <code>customEmojis/:example-emoji:</code> where <code>:example-emoji:</code> is the emoji name for a custom emoji.</p></td></tr></tbody></table>

## DeleteMembershipRequest

Request to delete a membership in a space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the membership to delete. Chat apps can delete human users' or their own memberships. Chat apps can't delete other apps' memberships.</p><p>When deleting a human membership, requires the <code>chat.memberships</code> scope with <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a> or the <code>chat.memberships.app</code> scope with <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a> and the <code>spaces/{space}/members/{member}</code> format. You can use the email as an alias for <code>{member}</code>. For example, <code>spaces/{space}/members/example@gmail.com</code> where <code>example@gmail.com</code> is the email of the Google Chat user.</p><p>When deleting an app membership, requires the <code>chat.memberships.app</code> scope and <code>spaces/{space}/members/app</code> format.</p><p>Format: <code>spaces/{space}/members/{member}</code> or <code>spaces/{space}/members/app</code>.</p></td></tr><tr><td><code>use_admin_access</code></td><td><p><code>bool</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.memberships</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p><p>Deleting app memberships in a space isn't supported using admin access.</p></td></tr></tbody></table>

## DeleteMessageRequest

Request to delete a message.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the message.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p><p>If you've set a custom ID for your message, you can use the value from the <code>clientAssignedMessageId</code> field for <code>{message}</code>. For details, see <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">Name a message</a>.</p></td></tr><tr><td><code>force</code></td><td><p><code>bool</code></p><p>Optional. When <code>true</code>, deleting a message also deletes its threaded replies. When <code>false</code>, if a message has threaded replies, deletion fails.</p><p>Only applies when <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticating as a user</a>. Has no effect when <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">authenticating as a Chat app</a>.</p></td></tr></tbody></table>

## DeleteReactionRequest

Deletes a reaction to a message.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Name of the reaction to delete.</p><p>Format: <code>spaces/{space}/messages/{message}/reactions/{reaction}</code></p></td></tr></tbody></table>

## DeleteSectionRequest

Request message for deleting a section.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The name of the section to delete.</p><p>Format: <code>users/{user}/sections/{section}</code></p></td></tr></tbody></table>

## DeleteSpaceRequest

Request for deleting a space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the space to delete.</p><p>Format: <code>spaces/{space}</code></p></td></tr><tr><td><code>use_admin_access</code></td><td><p><code>bool</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.delete</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p></td></tr></tbody></table>

## Dialog

Wrapper around the card body of the dialog.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>body</code></td><td><p><code>Card</code></p><p>Input only. Body of the dialog, which is rendered in a modal. Google Chat apps don't support the following card entities: <code>DateTimePicker</code>, <code>OnChangeAction</code>.</p></td></tr></tbody></table>

## DialogAction

Contains a [dialog](https://developers.google.com/workspace/chat/dialogs) and request status code.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>action_status</code></td><td><p><code>ActionStatus</code></p><p>Input only. Status for a request to either invoke or submit a <a href="https://developers.google.com/workspace/chat/dialogs">dialog</a>. Displays a status and message to users, if necessary. For example, in case of an error or success.</p></td></tr><tr><td colspan="2">Union field <code>action</code>. Action to perform. <code>action</code> can be only one of the following:</td></tr><tr><td><code>dialog</code></td><td><p><code>Dialog</code></p><p>Input only. <a href="https://developers.google.com/workspace/chat/dialogs">Dialog</a> for the request.</p></td></tr></tbody></table>

## DriveDataRef

A reference to the data of a drive attachment.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>drive_file_id</code></td><td><p><code>string</code></p><p>The ID for the drive file. Use with the Drive API.</p></td></tr></tbody></table>

## DriveLinkData

Data for Google Drive links.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>drive_data_ref</code></td><td><p><code>DriveDataRef</code></p><p>A <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments#drivedataref">DriveDataRef</a> which references a Google Drive file.</p></td></tr><tr><td><code>mime_type</code></td><td><p><code>string</code></p><p>The mime type of the linked Google Drive resource.</p></td></tr></tbody></table>

## Emoji

An emoji that is used as a reaction to a message.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>content</code>. Required. The content of the emoji. <code>content</code> can be only one of the following:</td></tr><tr><td><code>unicode</code></td><td><p><code>string</code></p><p>Optional. A basic emoji represented by a unicode string.</p></td></tr><tr><td><code>custom_emoji</code></td><td><p><code>CustomEmoji</code></p><p>A custom emoji.</p></td></tr></tbody></table>

## EmojiReactionSummary

The number of people who reacted to a message with a specific emoji.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>emoji</code></td><td><p><code>Emoji</code></p><p>Output only. Emoji associated with the reactions.</p></td></tr><tr><td><code>reaction_count</code></td><td><p><code>int32</code></p><p>Output only. The total number of reactions using the associated emoji.</p></td></tr></tbody></table>

## FindDirectMessageRequest

A request to get direct message space based on the user resource.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the user to find direct message with.</p><p>Format: <code>users/{user}</code>, where <code>{user}</code> is either the <code>id</code> for the <a href="https://developers.google.com/people/api/rest/v1/people">person</a> from the People API, or the <code>id</code> for the <a href="https://developers.google.com/admin-sdk/directory/reference/rest/v1/users">user</a> in the Directory API. For example, if the People API profile ID is <code>123456789</code>, you can find a direct message with that person by using <code>users/123456789</code> as the <code>name</code>. When <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticated as a user</a>, you can use the email as an alias for <code>{user}</code>. For example, <code>users/example@gmail.com</code> where <code>example@gmail.com</code> is the email of the Google Chat user.</p></td></tr></tbody></table>

## FindGroupChatsRequest

A request to get group chat spaces based on user resources.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>users[]</code></td><td><p><code>string</code></p><p>Optional. Resource names of all human users in group chat with the calling user. Chat apps can't be included in the request.</p><p>The maximum number of users that can be specified in a single request is <code>49</code>.</p><p>Format: <code>users/{user}</code>, where <code>{user}</code> is either the <code>id</code> for the <a href="https://developers.google.com/people/api/rest/v1/people">person</a> from the People API, or the <code>id</code> for the <a href="https://developers.google.com/admin-sdk/directory/reference/rest/v1/users">user</a> in the Directory API. For example, to find all group chats with the calling user and two other users, with People API profile IDs <code>123456789</code> and <code>987654321</code>, you can use <code>users/123456789</code> and <code>users/987654321</code>. You can also use the email as an alias for <code>{user}</code>. For example, <code>users/example@gmail.com</code> where <code>example@gmail.com</code> is the email of the Google Chat user.</p></td></tr><tr><td><code>page_size</code></td><td><p><code>int32</code></p><p>Optional. The maximum number of spaces to return. The service might return fewer than this value.</p><p>If unspecified, at most 10 spaces are returned.</p><p>The maximum value is 30. If you use a value more than 30, it's automatically changed to 30.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>page_token</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous call to find group chats. Provide this parameter to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the token. Passing different values may lead to unexpected results.</p></td></tr><tr><td><code>space_view</code></td><td><p><code>SpaceView</code></p><p>Requested space view type. If unset, defaults to <code>SPACE_VIEW_RESOURCE_NAME_ONLY</code>. Requests that specify <code>SPACE_VIEW_EXPANDED</code> must include scopes that allow reading space data, for example, <a href="https://www.googleapis.com/auth/chat.spaces">https://www.googleapis.com/auth/chat.spaces</a> or <a href="https://www.googleapis.com/auth/chat.spaces.readonly">https://www.googleapis.com/auth/chat.spaces.readonly</a>.</p></td></tr></tbody></table>

## FindGroupChatsResponse

A response containing group chat spaces with exactly the calling user and the requested users.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spaces[]</code></td><td><p><code>Space</code></p><p>List of spaces in the requested (or first) page.</p></td></tr><tr><td><code>next_page_token</code></td><td><p><code>string</code></p><p>A token that you can send as <code>pageToken</code> to retrieve the next page of results. If empty, there are no subsequent pages.</p></td></tr></tbody></table>

## GetAttachmentRequest

Request to get an attachment.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the attachment, in the form <code>spaces/{space}/messages/{message}/attachments/{attachment}</code>.</p></td></tr></tbody></table>

## GetCustomEmojiRequest

A request to return a single custom emoji.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the custom emoji.</p><p>Format: <code>customEmojis/{customEmoji}</code></p><p>You can use the emoji name as an alias for <code>{customEmoji}</code>. For example, <code>customEmojis/:example-emoji:</code> where <code>:example-emoji:</code> is the emoji name for a custom emoji.</p></td></tr></tbody></table>

## GetMembershipRequest

Request to get a membership of a space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the membership to retrieve.</p><p>To get the app's own membership <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">by using user authentication</a>, you can optionally use <code>spaces/{space}/members/app</code>.</p><p>Format: <code>spaces/{space}/members/{member}</code> or <code>spaces/{space}/members/app</code></p><p>You can use the user's email as an alias for <code>{member}</code>. For example, <code>spaces/{space}/members/example@gmail.com</code> where <code>example@gmail.com</code> is the email of the Google Chat user.</p></td></tr><tr><td><code>use_admin_access</code></td><td><p><code>bool</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.memberships</code> or <code>chat.admin.memberships.readonly</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scopes</a>.</p><p>Getting app memberships in a space isn't supported when using admin access.</p></td></tr></tbody></table>

## GetMessageRequest

Request to get a message.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the message.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p><p>If you've set a custom ID for your message, you can use the value from the <code>clientAssignedMessageId</code> field for <code>{message}</code>. For details, see <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">Name a message</a>.</p></td></tr></tbody></table>

## GetSpaceEventRequest

Request message for getting a space event.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the space event.</p><p>Format: <code>spaces/{space}/spaceEvents/{spaceEvent}</code></p></td></tr></tbody></table>

## GetSpaceNotificationSettingRequest

Request message to get space notification setting. Only supports getting notification setting for the calling user.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Format: users/{user}/spaces/{space}/spaceNotificationSetting</p><ul><li><code>users/me/spaces/{space}/spaceNotificationSetting</code>, OR</li><li><code>users/user@example.com/spaces/{space}/spaceNotificationSetting</code>, OR</li><li><code>users/123456789/spaces/{space}/spaceNotificationSetting</code>. Note: Only the caller's user id or email is allowed in the path.</li></ul></td></tr></tbody></table>

## GetSpaceReadStateRequest

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the space read state to retrieve.</p><p>Only supports getting read state for the calling user.</p><p>To refer to the calling user, set one of the following:</p><ul><li><p>The <code>me</code> alias. For example, <code>users/me/spaces/{space}/spaceReadState</code>.</p></li><li><p>Their Workspace email address. For example, <code>users/user@example.com/spaces/{space}/spaceReadState</code>.</p></li><li><p>Their user id. For example, <code>users/123456789/spaces/{space}/spaceReadState</code>.</p></li></ul><p>Format: users/{user}/spaces/{space}/spaceReadState</p></td></tr></tbody></table>

## GetSpaceRequest

A request to return a single space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the space, in the form <code>spaces/{space}</code>.</p><p>Format: <code>spaces/{space}</code></p></td></tr><tr><td><code>use_admin_access</code></td><td><p><code>bool</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.spaces</code> or <code>chat.admin.spaces.readonly</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scopes</a>.</p></td></tr></tbody></table>

## GetThreadReadStateRequest

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the thread read state to retrieve.</p><p>Only supports getting read state for the calling user.</p><p>To refer to the calling user, set one of the following:</p><ul><li><p>The <code>me</code> alias. For example, <code>users/me/spaces/{space}/threads/{thread}/threadReadState</code>.</p></li><li><p>Their Workspace email address. For example, <code>users/user@example.com/spaces/{space}/threads/{thread}/threadReadState</code>.</p></li><li><p>Their user id. For example, <code>users/123456789/spaces/{space}/threads/{thread}/threadReadState</code>.</p></li></ul><p>Format: users/{user}/spaces/{space}/threads/{thread}/threadReadState</p></td></tr></tbody></table>

## Group

A Google Group in Google Chat.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name for a Google Group.</p><p>Represents a <a href="https://cloud.google.com/identity/docs/reference/rest/v1/groups">group</a> in Cloud Identity Groups API.</p><p>Format: groups/{group}</p></td></tr></tbody></table>

## HistoryState

The history state for messages and spaces. Specifies how long messages and conversation threads are kept after creation.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HISTORY_STATE_UNSPECIFIED</code></td><td>Default value. Do not use.</td></tr><tr><td><code>HISTORY_OFF</code></td><td>History off. <a href="https://support.google.com/chat/answer/7664687">Messages and threads are kept for 24 hours</a>.</td></tr><tr><td><code>HISTORY_ON</code></td><td>History on. The organization's <a href="https://support.google.com/vault/answer/7657597">Vault retention rules</a> specify for how long messages and threads are kept.</td></tr></tbody></table>

## ListCustomEmojisRequest

A request to return a list of custom emojis.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>page_size</code></td><td><p><code>int32</code></p><p>Optional. The maximum number of custom emojis returned. The service can return fewer custom emojis than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.</p></td></tr><tr><td><code>page_token</code></td><td><p><code>string</code></p><p>Optional. (If resuming from a previous query.)</p><p>A page token received from a previous list custom emoji call. Provide this to retrieve the subsequent page.</p><p>When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>Supports filtering by creator.</p><p>To filter by creator, you must specify a valid value. Currently only <code>creator("users/me")</code> and <code>NOT creator("users/me")</code> are accepted to filter custom emojis by whether they were created by the calling user or not.</p><p>For example, the following query returns custom emojis created by the caller:</p><div><pre><code>creator("users/me")</code></pre></div><p>Invalid queries are rejected with an <code>INVALID_ARGUMENT</code> error.</p></td></tr></tbody></table>

## ListCustomEmojisResponse

A response to list custom emojis.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>custom_emojis[]</code></td><td><p><code>CustomEmoji</code></p><p>Unordered list. List of custom emojis.</p></td></tr><tr><td><code>next_page_token</code></td><td><p><code>string</code></p><p>A token that you can send as <code>pageToken</code> to retrieve the next page of results. If empty, there are no subsequent pages.</p></td></tr></tbody></table>

## ListMembershipsRequest

Request message for listing memberships.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The resource name of the space for which to fetch a membership list.</p><p>Format: spaces/{space}</p></td></tr><tr><td><code>page_size</code></td><td><p><code>int32</code></p><p>Optional. The maximum number of memberships to return. The service might return fewer than this value.</p><p>If unspecified, at most 100 memberships are returned.</p><p>The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>page_token</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>You can filter memberships by a member's role (<a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members#membershiprole"><code>role</code></a>) and type (<a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/User#type"><code>member.type</code></a>).</p><p>To filter by role, set <code>role</code> to <code>ROLE_MEMBER</code> or <code>ROLE_MANAGER</code>.</p><p>To filter by type, set <code>member.type</code> to <code>HUMAN</code> or <code>BOT</code>. You can also filter for <code>member.type</code> using the <code>!=</code> operator.</p><p>To filter by both role and type, use the <code>AND</code> operator. To filter by either role or type, use the <code>OR</code> operator.</p><p>Either <code>member.type = "HUMAN"</code> or <code>member.type != "BOT"</code> is required when <code>use_admin_access</code> is set to true. Other member type filters will be rejected.</p><p>For example, the following queries are valid:</p><div><pre><code>role = "ROLE_MANAGER" OR role = "ROLE_MEMBER"
member.type = "HUMAN" AND role = "ROLE_MANAGER"

member.type != "BOT"</code></pre></div><p>The following queries are invalid:</p><div><pre><code>member.type = "HUMAN" AND member.type = "BOT"
role = "ROLE_MANAGER" AND role = "ROLE_MEMBER"</code></pre></div><p>Invalid queries are rejected by the server with an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>show_groups</code></td><td><p><code>bool</code></p><p>Optional. When <code>true</code>, also returns memberships associated with a <code>Google Group</code>, in addition to other types of memberships. If a <code>filter</code> is set, <code>Google Group</code> memberships that don't match the filter criteria aren't returned.</p></td></tr><tr><td><code>show_invited</code></td><td><p><code>bool</code></p><p>Optional. When <code>true</code>, also returns memberships associated with <code>invited</code> members, in addition to other types of memberships. If a filter is set, <code>invited</code> memberships that don't match the filter criteria aren't returned.</p><p>Currently requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a>.</p></td></tr><tr><td><code>use_admin_access</code></td><td><p><code>bool</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires either the <code>chat.admin.memberships.readonly</code> or <code>chat.admin.memberships</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p><p>Listing app memberships in a space isn't supported when using admin access.</p></td></tr></tbody></table>

## ListMembershipsResponse

Response to list memberships of the space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>memberships[]</code></td><td><p><code>Membership</code></p><p>Unordered list. List of memberships in the requested (or first) page.</p></td></tr><tr><td><code>next_page_token</code></td><td><p><code>string</code></p><p>A token that you can send as <code>pageToken</code> to retrieve the next page of results. If empty, there are no subsequent pages.</p></td></tr></tbody></table>

## ListMessagesRequest

Lists messages in the specified space, that the user is a member of.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The resource name of the space to list messages from.</p><p>Format: <code>spaces/{space}</code></p></td></tr><tr><td><code>page_size</code></td><td><p><code>int32</code></p><p>Optional. The maximum number of messages returned. The service might return fewer messages than this value.</p><p>If unspecified, at most 25 are returned.</p><p>The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>page_token</code></td><td><p><code>string</code></p><p>Optional. A page token received from a previous list messages call. Provide this parameter to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>You can filter messages by date (<code>create_time</code>) and thread (<code>thread.name</code>).</p><p>To filter messages by the date they were created, specify the <code>create_time</code> with a timestamp in <a href="https://www.rfc-editor.org/rfc/rfc3339">RFC-3339</a> format and double quotation marks. For example, <code>"2023-04-21T11:30:00-04:00"</code>. You can use the greater than operator <code>></code> to list messages that were created after a timestamp, or the less than operator <code><</code> to list messages that were created before a timestamp. To filter messages within a time interval, use the <code>AND</code> operator between two timestamps.</p><p>To filter by thread, specify the <code>thread.name</code>, formatted as <code>spaces/{space}/threads/{thread}</code>. You can only specify one <code>thread.name</code> per query.</p><p>To filter by both thread and date, use the <code>AND</code> operator in your query.</p><p>For example, the following queries are valid:</p><div><pre><code>create_time > "2012-04-21T11:30:00-04:00"

create_time > "2012-04-21T11:30:00-04:00" AND
  thread.name = spaces/AAAAAAAAAAA/threads/123

create_time > "2012-04-21T11:30:00+00:00" AND

create_time < "2013-01-01T00:00:00+00:00" AND
  thread.name = spaces/AAAAAAAAAAA/threads/123

thread.name = spaces/AAAAAAAAAAA/threads/123</code></pre></div><p>Invalid queries are rejected by the server with an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>order_by</code></td><td><p><code>string</code></p><p>Optional. How the list of messages is ordered. Specify a value to order by an ordering operation. Valid ordering operation values are as follows:</p><ul><li><p><code>ASC</code> for ascending.</p></li><li><p><code>DESC</code> for descending.</p></li></ul><p>The default ordering is <code>create_time ASC</code>.</p></td></tr><tr><td><code>show_deleted</code></td><td><p><code>bool</code></p><p>Optional. Whether to include deleted messages. Deleted messages include deleted time and metadata about their deletion, but message content is unavailable.</p></td></tr></tbody></table>

## ListMessagesResponse

Response message for listing messages.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messages[]</code></td><td><p><code>Message</code></p><p>List of messages.</p></td></tr><tr><td><code>next_page_token</code></td><td><p><code>string</code></p><p>You can send a token as <code>pageToken</code> to retrieve the next page of results. If empty, there are no subsequent pages.</p></td></tr></tbody></table>

## ListReactionsRequest

Lists reactions to a message.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The message users reacted to.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p></td></tr><tr><td><code>page_size</code></td><td><p><code>int32</code></p><p>Optional. The maximum number of reactions returned. The service can return fewer reactions than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.</p></td></tr><tr><td><code>page_token</code></td><td><p><code>string</code></p><p>Optional. (If resuming from a previous query.)</p><p>A page token received from a previous list reactions call. Provide this to retrieve the subsequent page.</p><p>When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>You can filter reactions by <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/Emoji">emoji</a> (either <code>emoji.unicode</code> or <code>emoji.custom_emoji.uid</code>) and <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/User">user</a> (<code>user.name</code>).</p><p>To filter reactions for multiple emojis or users, join similar fields with the <code>OR</code> operator, such as <code>emoji.unicode = "🙂" OR emoji.unicode =
                  "👍"</code> and <code>user.name = "users/AAAAAA" OR user.name = "users/BBBBBB"</code>.</p><p>To filter reactions by emoji and user, use the <code>AND</code> operator, such as <code>emoji.unicode = "🙂" AND user.name = "users/AAAAAA"</code>.</p><p>If your query uses both <code>AND</code> and <code>OR</code>, group them with parentheses.</p><p>For example, the following queries are valid:</p><div><pre><code>user.name = "users/{user}"
emoji.unicode = "🙂"
emoji.custom_emoji.uid = "{uid}"
emoji.unicode = "🙂" OR emoji.unicode = "👍"
emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}"
emoji.unicode = "🙂" AND user.name = "users/{user}"
(emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}")
AND user.name = "users/{user}"</code></pre></div><p>The following queries are invalid:</p><div><pre><code>emoji.unicode = "🙂" AND emoji.unicode = "👍"
emoji.unicode = "🙂" AND emoji.custom_emoji.uid = "{uid}"
emoji.unicode = "🙂" OR user.name = "users/{user}"
emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" OR
user.name = "users/{user}"
emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}"
AND user.name = "users/{user}"</code></pre></div><p>Invalid queries are rejected with an <code>INVALID_ARGUMENT</code> error.</p></td></tr></tbody></table>

## ListReactionsResponse

Response to a list reactions request.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reactions[]</code></td><td><p><code>Reaction</code></p><p>List of reactions in the requested (or first) page.</p></td></tr><tr><td><code>next_page_token</code></td><td><p><code>string</code></p><p>Continuation token to retrieve the next page of results. It's empty for the last page of results.</p></td></tr></tbody></table>

## ListSectionItemsRequest

Request message for listing section items.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent, which is the section resource name that owns this collection of section items. Only supports listing section items for the calling user.</p><p>When you're filtering by space, use the wildcard <code>-</code> to search across all sections. For example, <code>users/{user}/sections/-</code>.</p><p>Format: <code>users/{user}/sections/{section}</code></p></td></tr><tr><td><code>page_size</code></td><td><p><code>int32</code></p><p>Optional. The maximum number of section items to return. The service may return fewer than this value.</p><p>If unspecified, at most 10 section items will be returned.</p><p>The maximum value is 100. If you use a value more than 100, it's automatically changed to 100.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>page_token</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous list section items call. Provide this to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>Currently only supports filtering by space.</p><p>For example, <code>space = spaces/{space}</code>.</p><p>Invalid queries are rejected with an <code>INVALID_ARGUMENT</code> error.</p></td></tr></tbody></table>

## ListSectionItemsResponse

Response message for listing section items.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>section_items[]</code></td><td><p><code>SectionItem</code></p><p>The section items from the specified section.</p></td></tr><tr><td><code>next_page_token</code></td><td><p><code>string</code></p><p>A token, which can be sent as <code>page_token</code> to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

## ListSectionsRequest

Request message for listing sections.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent, which is the user resource name that owns this collection of sections. Only supports listing sections for the calling user. To refer to the calling user, set one of the following:</p><ul><li><p>The <code>me</code> alias. For example, <code>users/me</code>.</p></li><li><p>Their Workspace email address. For example, <code>users/user@example.com</code>.</p></li><li><p>Their user id. For example, <code>users/123456789</code>.</p></li></ul><p>Format: <code>users/{user}</code></p></td></tr><tr><td><code>page_size</code></td><td><p><code>int32</code></p><p>Optional. The maximum number of sections to return. The service may return fewer than this value.</p><p>If unspecified, at most 10 sections will be returned.</p><p>The maximum value is 100. If you use a value more than 100, it's automatically changed to 100.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>page_token</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous list sections call. Provide this to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr></tbody></table>

## ListSectionsResponse

Response message for listing sections.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sections[]</code></td><td><p><code>Section</code></p><p>The sections from the specified user.</p></td></tr><tr><td><code>next_page_token</code></td><td><p><code>string</code></p><p>A token, which can be sent as <code>page_token</code> to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

## ListSpaceEventsRequest

Request message for listing space events.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. Resource name of the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces">Google Chat space</a> where the events occurred.</p><p>Format: <code>spaces/{space}</code>.</p></td></tr><tr><td><code>page_size</code></td><td><p><code>int32</code></p><p>Optional. The maximum number of space events returned. The service might return fewer than this value.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>page_token</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous list space events call. Provide this to retrieve the subsequent page.</p><p>When paginating, all other parameters provided to list space events must match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Required. A query filter.</p><p>You must specify at least one event type (<code>event_type</code>) using the has <code>:</code> operator. To filter by multiple event types, use the <code>OR</code> operator. Omit batch event types in your filter. The request automatically returns any related batch events. For example, if you filter by new reactions (<code>google.workspace.chat.reaction.v1.created</code>), the server also returns batch new reactions events (<code>google.workspace.chat.reaction.v1.batchCreated</code>). For a list of supported event types, see the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.event_type"><code>SpaceEvents</code> reference documentation</a>.</p><p>Optionally, you can also filter by start time (<code>start_time</code>) and end time (<code>end_time</code>):</p><ul><li><code>start_time</code>: Exclusive timestamp from which to start listing space events. You can list events that occurred up to 28 days ago. If unspecified, lists space events from the past 28 days.</li><li><code>end_time</code>: Inclusive timestamp until which space events are listed. If unspecified, lists events up to the time of the request.</li></ul><p>To specify a start or end time, use the equals <code>=</code> operator and format in <a href="https://www.rfc-editor.org/rfc/rfc3339">RFC-3339</a>. To filter by both <code>start_time</code> and <code>end_time</code>, use the <code>AND</code> operator.</p><p>For example, the following queries are valid:</p><div><pre><code>start_time="2023-08-23T19:20:33+00:00" AND
end_time="2023-08-23T19:21:54+00:00"</code></pre></div><div><pre><code>start_time="2023-08-23T19:20:33+00:00" AND
(event_types:"google.workspace.chat.space.v1.updated" OR
event_types:"google.workspace.chat.message.v1.created")</code></pre></div><p>The following queries are invalid:</p><div><pre><code>start_time="2023-08-23T19:20:33+00:00" OR
end_time="2023-08-23T19:21:54+00:00"</code></pre></div><div><pre><code>event_types:"google.workspace.chat.space.v1.updated" AND
event_types:"google.workspace.chat.message.v1.created"</code></pre></div><p>Invalid queries are rejected by the server with an <code>INVALID_ARGUMENT</code> error.</p></td></tr></tbody></table>

## ListSpaceEventsResponse

Response message for listing space events.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space_events[]</code></td><td><p><code>SpaceEvent</code></p><p>Results are returned in chronological order (oldest event first). Note: The <code>permissionSettings</code> field is not returned in the Space object for list requests.</p></td></tr><tr><td><code>next_page_token</code></td><td><p><code>string</code></p><p>Continuation token used to fetch more events. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

## ListSpacesRequest

A request to list the spaces the caller is a member of.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>page_size</code></td><td><p><code>int32</code></p><p>Optional. The maximum number of spaces to return. The service might return fewer than this value.</p><p>If unspecified, at most 100 spaces are returned.</p><p>The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>page_token</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page.</p><p>When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>You can filter spaces by the space type (<a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype"><code>space_type</code></a>).</p><p>To filter by space type, you must specify valid enum value, such as <code>SPACE</code> or <code>GROUP_CHAT</code> (the <code>space_type</code> can't be <code>SPACE_TYPE_UNSPECIFIED</code>). To query for multiple space types, use the <code>OR</code> operator.</p><p>For example, the following queries are valid:</p><div><pre><code>space_type = "SPACE"
spaceType = "GROUP_CHAT" OR spaceType = "DIRECT_MESSAGE"</code></pre></div><p>Invalid queries are rejected by the server with an <code>INVALID_ARGUMENT</code> error.</p></td></tr></tbody></table>

## ListSpacesResponse

The response for a list spaces request.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spaces[]</code></td><td><p><code>Space</code></p><p>List of spaces in the requested (or first) page. Note: The <code>permissionSettings</code> field is not returned in the Space object for list requests.</p></td></tr><tr><td><code>next_page_token</code></td><td><p><code>string</code></p><p>You can send a token as <code>pageToken</code> to retrieve the next page of results. If empty, there are no subsequent pages.</p></td></tr></tbody></table>

## MatchedUrl

A matched URL in a Chat message. Chat apps can preview matched URLs. For more information, see [Preview links](https://developers.google.com/chat/how-tos/preview-links).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>url</code></td><td><p><code>string</code></p><p>Output only. The URL that was matched.</p></td></tr></tbody></table>

## MeetSpaceLinkData

Data for Meet space links.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>meeting_code</code></td><td><p><code>string</code></p><p>Meeting code of the linked Meet space.</p></td></tr><tr><td><code>type</code></td><td><p><code>Type</code></p><p>Indicates the type of the Meet space.</p></td></tr><tr><td><code>huddle_status</code></td><td><p><code>HuddleStatus</code></p><p>Optional. Output only. If the Meet is a Huddle, indicates the status of the huddle. Otherwise, this is unset.</p></td></tr></tbody></table>

## HuddleStatus

The status of the huddle

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HUDDLE_STATUS_UNSPECIFIED</code></td><td>Default value for the enum. Don't use.</td></tr><tr><td><code>STARTED</code></td><td>The huddle has started.</td></tr><tr><td><code>ENDED</code></td><td>The huddle has ended. In this case the Meet space URI and identifiers will no longer be valid.</td></tr><tr><td><code>MISSED</code></td><td>The huddle has been missed. In this case the Meet space URI and identifiers will no longer be valid.</td></tr></tbody></table>

## Type

The type of the Meet space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Default value for the enum. Don't use.</td></tr><tr><td><code>MEETING</code></td><td>The Meet space is a meeting.</td></tr><tr><td><code>HUDDLE</code></td><td>The Meet space is a huddle.</td></tr></tbody></table>

## Membership

Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the membership, assigned by the server.</p><p>Format: <code>spaces/{space}/members/{member}</code></p></td></tr><tr><td><code>state</code></td><td><p><code>MembershipState</code></p><p>Output only. State of the membership.</p></td></tr><tr><td><code>role</code></td><td><p><code>MembershipRole</code></p><p>Optional. User's role within a Chat space, which determines their permitted actions in the space.</p><p>This field can only be used as input in <code>UpdateMembership</code>.</p></td></tr><tr><td colspan="2">Union field <code>memberType</code>. Member associated with this membership. Other member types might be supported in the future. <code>memberType</code> can be only one of the following:</td></tr><tr><td><code>member</code></td><td><p><code>User</code></p><p>Optional. The Google Chat user or app the membership corresponds to. If your Chat app <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticates as a user</a>, the output populates the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/User">user</a> <code>name</code> and <code>type</code>.</p></td></tr><tr><td><code>group_member</code></td><td><p><code>Group</code></p><p>Optional. The Google Group the membership corresponds to.</p><p>Reading or mutating memberships for Google Groups requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a>.</p></td></tr></tbody></table>

## MembershipRole

Represents a user's permitted actions in a Chat space. More enum values might be added in the future.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>MEMBERSHIP_ROLE_UNSPECIFIED</code></td><td>Default value. For <code>users</code>: they aren't a member of the space, but can be invited. For <code>Google Groups</code>: they're always assigned this role (other enum values might be used in the future).</td></tr><tr><td><code>ROLE_MEMBER</code></td><td><p>A member of the space. In the Chat UI, this role is called Member.</p><p>The user has basic permissions, like sending messages to the space. Managers and owners can grant members additional permissions in a space, including:</p><ul><li>Add or remove members.</li><li>Modify space details.</li><li>Turn history on or off.</li><li>Mention everyone in the space with <code>@all</code>.</li><li>Manage Chat apps and webhooks installed in the space.</li></ul><p>In direct messages and unnamed group conversations, everyone has this role.</p></td></tr><tr><td><code>ROLE_MANAGER</code></td><td><p>A space owner. In the Chat UI, this role is called Owner.</p><p>The user has the complete set of space permissions to manage the space, including:</p><ul><li>Change the role of other members in the space to member, manager, or owner.</li><li>Delete the space.</li></ul><p>Only supported in <code>SpaceType.SPACE</code> (named spaces).</p><p>To learn more, see <a href="https://support.google.com/chat/answer/11833441">Learn more about your role as a space owner or manager</a>.</p></td></tr><tr><td><code>ROLE_ASSISTANT_MANAGER</code></td><td><p>A space manager. In the Chat UI, this role is called Manager.</p><p>The user has all basic permissions of <code>ROLE_MEMBER</code>, and can be granted a subset of administrative permissions by an owner. By default, managers have all the permissions of an owner except for the ability to:</p><ul><li>Delete the space.</li><li>Make another space member an owner.</li><li>Change an owner's role.</li></ul><p>By default, managers permissions include but aren't limited to:</p><ul><li>Make another member a manager.</li><li>Delete messages in the space.</li><li>Manage space permissions.</li><li>Receive notifications for requests to join the space if the manager has the "manage members" permission in the space settings.</li><li>Make a space discoverable.</li></ul><p>Only supported in <code>SpaceType.SPACE</code> (named spaces).</p><p>To learn more, see <a href="https://support.google.com/chat/answer/13340792">Manage space settings</a>.</p></td></tr></tbody></table>

## MembershipState

Specifies the member's relationship with a space. Other membership states might be supported in the future.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>MEMBERSHIP_STATE_UNSPECIFIED</code></td><td>Default value. Don't use.</td></tr><tr><td><code>JOINED</code></td><td>The user is added to the space, and can participate in the space.</td></tr><tr><td><code>INVITED</code></td><td>The user is invited to join the space, but hasn't joined it.</td></tr><tr><td><code>NOT_A_MEMBER</code></td><td>The user doesn't belong to the space and doesn't have a pending invitation to join the space.</td></tr></tbody></table>

## MembershipBatchCreatedEventData

Event payload for multiple new memberships.

Event type: `google.workspace.chat.membership.v1.batchCreated`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>memberships[]</code></td><td><p><code>MembershipCreatedEventData</code></p><p>A list of new memberships.</p></td></tr></tbody></table>

## MembershipBatchDeletedEventData

Event payload for multiple deleted memberships.

Event type: `google.workspace.chat.membership.v1.batchDeleted`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>memberships[]</code></td><td><p><code>MembershipDeletedEventData</code></p><p>A list of deleted memberships.</p></td></tr></tbody></table>

## MembershipBatchUpdatedEventData

Event payload for multiple updated memberships.

Event type: `google.workspace.chat.membership.v1.batchUpdated`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>memberships[]</code></td><td><p><code>MembershipUpdatedEventData</code></p><p>A list of updated memberships.</p></td></tr></tbody></table>

## MembershipCreatedEventData

Event payload for a new membership.

Event type: `google.workspace.chat.membership.v1.created`.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>membership</code></td><td><p><code>Membership</code></p><p>The new membership.</p></td></tr></tbody></table>

## MembershipDeletedEventData

Event payload for a deleted membership.

Event type: `google.workspace.chat.membership.v1.deleted`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>membership</code></td><td><p><code>Membership</code></p><p>The deleted membership. Only the <code>name</code> and <code>state</code> fields are populated.</p></td></tr></tbody></table>

## MembershipUpdatedEventData

Event payload for an updated membership.

Event type: `google.workspace.chat.membership.v1.updated`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>membership</code></td><td><p><code>Membership</code></p><p>The updated membership.</p></td></tr></tbody></table>

## Message

A message in a Google Chat space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the message.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p><p>Where <code>{space}</code> is the ID of the space where the message is posted and <code>{message}</code> is a system-assigned ID for the message. For example, <code>spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB</code>.</p><p>If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing <code>{message}</code> with the value from the <code>clientAssignedMessageId</code> field. For example, <code>spaces/AAAAAAAAAAA/messages/client-custom-name</code>. For details, see <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">Name a message</a>.</p></td></tr><tr><td><code>sender</code></td><td><p><code>User</code></p><p>Output only. The user who created the message. If your Chat app <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticates as a user</a>, the output populates the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/User">user</a> <code>name</code> and <code>type</code>.</p></td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><p>Optional. Plain-text body of the message. The first link to an image, video, or web page generates a <a href="https://developers.google.com/workspace/chat/preview-links">preview chip</a>. You can also <a href="https://developers.google.com/workspace/chat/format-messages#messages-@mention">@mention a Google Chat user</a>, or everyone in the space.</p><p>To learn about creating text messages, see <a href="https://developers.google.com/workspace/chat/create-messages">Send a message</a>.</p></td></tr><tr><td><code>formatted_text</code></td><td><p><code>string</code></p><p>Output only. Contains the message <code>text</code> with markups added to communicate formatting. This field might not capture all formatting visible in the UI, but includes the following:</p><ul><li><p><a href="https://developers.google.com/workspace/chat/format-messages">Markup syntax</a> for bold, italic, strikethrough, monospace, monospace block, bulleted list, and block quote.</p></li><li><p><a href="https://developers.google.com/workspace/chat/format-messages#messages-@mention">User mentions</a> using the format <code><users/{user}></code>.</p></li><li><p>Custom hyperlinks using the format <code><{url}|{rendered_text}></code> where the first string is the URL and the second is the rendered text—for example, <code><http://example.com|custom text></code>.</p></li><li><p>Custom emoji using the format <code>:{emoji_name}:</code>—for example, <code>:smile:</code>. This doesn't apply to Unicode emoji, such as <code>U+1F600</code> for a grinning face emoji.</p></li><li><p>Bullet list items using asterisks (<code>*</code>)—for example, <code>* item</code>.</p></li></ul><p>For more information, see <a href="https://developers.google.com/workspace/chat/format-messages#view_text_formatting_sent_in_a_message">View text formatting sent in a message</a></p></td></tr><tr><td><code>cards[]<br><b>(deprecated)</b></code></td><td><p><code>Card</code></p><p>Deprecated: Use <code>cards_v2</code> instead.</p><p>Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. <code>cards</code> and <code>cards_v2</code> can have a maximum size of 32 KB.</p></td></tr><tr><td><code>cards_v2[]</code></td><td><p><code>CardWithId</code></p><p>Optional. An array of <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/cards">cards</a>.</p><p>Chat apps can create cards with <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a>. As part of the <a href="https://developers.google.com/workspace/preview">Developer Preview Program</a>, if your Chat app <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticates as a user</a>, it can create card messages. If your Chat app is not part of Developer Preview Program, it can't create cards with user authentication.</p><p>To learn how to create a message that contains cards, see <a href="https://developers.google.com/workspace/chat/create-messages">Send a message</a>.</p><p>Design and preview cards with the Card Builder.</p><a href="https://addons.gsuite.google.com/uikit/builder">Open the Card Builder</a></td></tr><tr><td><code>annotations[]</code></td><td><p><code>Annotation</code></p><p>Output only. Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace resources like Google Docs or Sheets with <code>start_index</code> and <code>length</code> of 0.</p></td></tr><tr><td><code>thread</code></td><td><p><code>Thread</code></p><p>The thread the message belongs to. For example usage, see <a href="https://developers.google.com/workspace/chat/create-messages#create-message-thread">Start or reply to a message thread</a>.</p></td></tr><tr><td><code>space</code></td><td><p><code>Space</code></p><p>Output only. If your Chat app <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">authenticates as a user</a>, the output only populates the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces">space</a> <code>name</code>.</p></td></tr><tr><td><code>fallback_text</code></td><td><p><code>string</code></p><p>Optional. A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications.</p></td></tr><tr><td><code>action_response</code></td><td><p><code>ActionResponse</code></p><p>Input only. Parameters that a Chat app can use to configure how its response is posted.</p></td></tr><tr><td><code>argument_text</code></td><td><p><code>string</code></p><p>Output only. Plain-text body of the message with all Chat app mentions stripped out.</p></td></tr><tr><td><code>slash_command</code></td><td><p><code>SlashCommand</code></p><p>Output only. Slash command information, if applicable.</p></td></tr><tr><td><code>attachment[]</code></td><td><p><code>Attachment</code></p><p>Optional. User-uploaded attachment.</p></td></tr><tr><td><code>matched_url</code></td><td><p><code>MatchedUrl</code></p><p>Output only. A URL in <code>spaces.messages.text</code> that matches a link preview pattern. For more information, see <a href="https://developers.google.com/workspace/chat/preview-links">Preview links</a>.</p></td></tr><tr><td><code>thread_reply</code></td><td><p><code>bool</code></p><p>Output only. When <code>true</code>, the message is a response in a reply thread. When <code>false</code>, the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies.</p><p>If the space doesn't support reply in threads, this field is always <code>false</code>.</p></td></tr><tr><td><code>client_assigned_message_id</code></td><td><p><code>string</code></p><p>Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/create#body.QUERY_PARAMETERS.message_id"><code>messageId</code></a> field when you create the message. For details, see <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">Name a message</a>.</p></td></tr><tr><td><code>emoji_reaction_summaries[]</code></td><td><p><code>EmojiReactionSummary</code></p><p>Output only. The list of emoji reaction summaries on the message.</p></td></tr><tr><td><code>private_message_viewer</code></td><td><p><code>User</code></p><p>Optional. Immutable. Input for creating a message, otherwise output only. The user that can view the message. When set, the message is private and only visible to the specified user and the Chat app. To include this field in your request, you must call the Chat API using <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a> and omit the following:</p><ul><li><a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments">Attachments</a></li><li><a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages#Message.AccessoryWidget">Accessory widgets</a></li></ul><p>For details, see <a href="https://developers.google.com/workspace/chat/create-messages#private">Send a message privately</a>.</p></td></tr><tr><td><code>attached_gifs[]</code></td><td><p><code>AttachedGif</code></p><p>Output only. GIF images that are attached to the message.</p></td></tr><tr><td><code>accessory_widgets[]</code></td><td><p><code>AccessoryWidget</code></p><p>Optional. One or more interactive widgets that appear at the bottom of a message. You can add accessory widgets to messages that contain text, cards, or both text and cards. Not supported for messages that contain dialogs. For details, see <a href="https://developers.google.com/workspace/chat/create-messages#add-accessory-widgets">Add interactive widgets at the bottom of a message</a>.</p><p>Creating a message with accessory widgets requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a>.</p></td></tr></tbody></table>

## MessageBatchCreatedEventData

Event payload for multiple new messages.

Event type: `google.workspace.chat.message.v1.batchCreated`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messages[]</code></td><td><p><code>MessageCreatedEventData</code></p><p>A list of new messages.</p></td></tr></tbody></table>

## MessageBatchDeletedEventData

Event payload for multiple deleted messages.

Event type: `google.workspace.chat.message.v1.batchDeleted`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messages[]</code></td><td><p><code>MessageDeletedEventData</code></p><p>A list of deleted messages.</p></td></tr></tbody></table>

## MessageBatchUpdatedEventData

Event payload for multiple updated messages.

Event type: `google.workspace.chat.message.v1.batchUpdated`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messages[]</code></td><td><p><code>MessageUpdatedEventData</code></p><p>A list of updated messages.</p></td></tr></tbody></table>

## MessageCreatedEventData

Event payload for a new message.

Event type: `google.workspace.chat.message.v1.created`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>Message</code></p><p>The new message.</p></td></tr></tbody></table>

## MessageDeletedEventData

Event payload for a deleted message.

Event type: `google.workspace.chat.message.v1.deleted`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>Message</code></p><p>The deleted message. Only the <code>name</code>, <code>createTime</code>, and <code>deletionMetadata</code> fields are populated.</p></td></tr></tbody></table>

## MessageUpdatedEventData

Event payload for an updated message.

Event type: `google.workspace.chat.message.v1.updated`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>Message</code></p><p>The updated message.</p></td></tr></tbody></table>

## MoveSectionItemRequest

Request message for moving a section item across sections.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the section item to move.</p><p>Format: <code>users/{user}/sections/{section}/items/{item}</code></p></td></tr><tr><td><code>target_section</code></td><td><p><code>string</code></p><p>Required. The resource name of the section to move the section item to.</p><p>Format: <code>users/{user}/sections/{section}</code></p></td></tr></tbody></table>

## MoveSectionItemResponse

Response message for moving a section item.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>section_item</code></td><td><p><code>SectionItem</code></p><p>The updated section item.</p></td></tr></tbody></table>

## PositionSectionRequest

Request message for positioning a section.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the section to position.</p><p>Format: <code>users/{user}/sections/{section}</code></p></td></tr><tr><td colspan="2">Union field <code>position</code>. Required. The new position of the section. <code>position</code> can be only one of the following:</td></tr><tr><td><code>sort_order</code></td><td><p><code>int32</code></p><p>Optional. The absolute position of the section in the list of sections. The position must be greater than 0. If the position is greater than the number of sections, the section will be appended to the end of the list. This operation inserts the section at the given position and shifts the original section at that position, and those below it, to the next position.</p></td></tr><tr><td><code>relative_position</code></td><td><p><code>Position</code></p><p>Optional. The relative position of the section in the list of sections.</p></td></tr></tbody></table>

## Position

The position of the section.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>POSITION_UNSPECIFIED</code></td><td>Unspecified position.</td></tr><tr><td><code>START</code></td><td>Start of the list of sections.</td></tr><tr><td><code>END</code></td><td>End of the list of sections.</td></tr></tbody></table>

## PositionSectionResponse

Response message for positioning a section.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>section</code></td><td><p><code>Section</code></p><p>The updated section.</p></td></tr></tbody></table>

## QuotedMessageSnapshot

Provides a snapshot of the content of the quoted message at the time of quoting or forwarding

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sender</code></td><td><p><code>string</code></p><p>Output only. The quoted message's author name. Populated for both REPLY & FORWARD quote types.</p></td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><p>Output only. Snapshot of the quoted message's text content.</p></td></tr><tr><td><code>formatted_text</code></td><td><p><code>string</code></p><p>Output only. Contains the quoted message <code>text</code> with markups added to support rich formatting like hyperlinks,custom emojis, markup, etc. Populated only for FORWARD quote type.</p></td></tr><tr><td><code>annotations[]</code></td><td><p><code>Annotation</code></p><p>Output only. Annotations parsed from the text body of the quoted message. Populated only for FORWARD quote type.</p></td></tr><tr><td><code>attachments[]</code></td><td><p><code>Attachment</code></p><p>Output only. Attachments that were part of the quoted message. These are copies of the quoted message's attachment metadata. Populated only for FORWARD quote type.</p></td></tr></tbody></table>

## Reaction

A reaction to a message.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the reaction.</p><p>Format: <code>spaces/{space}/messages/{message}/reactions/{reaction}</code></p></td></tr><tr><td><code>user</code></td><td><p><code>User</code></p><p>Output only. The user who created the reaction.</p></td></tr><tr><td><code>emoji</code></td><td><p><code>Emoji</code></p><p>Required. The emoji used in the reaction.</p></td></tr></tbody></table>

## ReactionBatchCreatedEventData

Event payload for multiple new reactions.

Event type: `google.workspace.chat.reaction.v1.batchCreated`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reactions[]</code></td><td><p><code>ReactionCreatedEventData</code></p><p>A list of new reactions.</p></td></tr></tbody></table>

## ReactionBatchDeletedEventData

Event payload for multiple deleted reactions.

Event type: `google.workspace.chat.reaction.v1.batchDeleted`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reactions[]</code></td><td><p><code>ReactionDeletedEventData</code></p><p>A list of deleted reactions.</p></td></tr></tbody></table>

## ReactionCreatedEventData

Event payload for a new reaction.

Event type: `google.workspace.chat.reaction.v1.created`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reaction</code></td><td><p><code>Reaction</code></p><p>The new reaction.</p></td></tr></tbody></table>

## ReactionDeletedEventData

Event payload for a deleted reaction.

Type: `google.workspace.chat.reaction.v1.deleted`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reaction</code></td><td><p><code>Reaction</code></p><p>The deleted reaction.</p></td></tr></tbody></table>

## ReplaceMessageCardsRequest

Request message for ReplaceMessageCards API method.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the message.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p></td></tr><tr><td><code>cards_v2[]</code></td><td><p><code>CardWithId</code></p><p>Optional. An array of <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/cards">cards</a> to be included in the message. These cards will replace the existing cards of the message. If empty, the original cards included in the message will be cleared.</p></td></tr></tbody></table>

## ReplaceMessageCardsResponse

This type has no fields.

Response message for ReplaceMessageCards API.

## SearchSpacesRequest

Request to search for a list of spaces based on a query.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>use_admin_access</code></td><td><p><code>bool</code></p><p>When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires either the <code>chat.admin.spaces.readonly</code> or <code>chat.admin.spaces</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p><p>This method currently only supports admin access, thus only <code>true</code> is accepted for this field.</p></td></tr><tr><td><code>page_size</code></td><td><p><code>int32</code></p><p>The maximum number of spaces to return. The service may return fewer than this value.</p><p>If unspecified, at most 100 spaces are returned.</p><p>The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.</p></td></tr><tr><td><code>page_token</code></td><td><p><code>string</code></p><p>A token, received from the previous search spaces call. Provide this parameter to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Required. A search query.</p><p>You can search by using the following parameters:</p><ul><li><code>create_time</code></li><li><code>customer</code></li><li><code>display_name</code></li><li><code>external_user_allowed</code></li><li><code>last_active_time</code></li><li><code>space_history_state</code></li><li><code>space_type</code></li></ul><p><code>create_time</code> and <code>last_active_time</code> accept a timestamp in <a href="https://www.rfc-editor.org/rfc/rfc3339">RFC-3339</a> format and the supported comparison operators are: <code>=</code>, <code><</code>, <code>></code>, <code><=</code>, <code>>=</code>.</p><p><code>customer</code> is required and is used to indicate which customer to fetch spaces from. <code>customers/my_customer</code> is the only supported value.</p><p><code>display_name</code> only accepts the <code>HAS</code> (<code>:</code>) operator. The text to match is first tokenized into tokens and each token is prefix-matched case-insensitively and independently as a substring anywhere in the space's <code>display_name</code>. For example, <code>Fun Eve</code> matches <code>Fun event</code> or <code>The
                  evening was fun</code>, but not <code>notFun event</code> or <code>even</code>.</p><p><code>external_user_allowed</code> accepts either <code>true</code> or <code>false</code>.</p><p><code>space_history_state</code> only accepts values from the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space.HistoryState"><code>historyState</code></a> field of a <code>space</code> resource.</p><p><code>space_type</code> is required and the only valid value is <code>SPACE</code>.</p><p>Across different fields, only <code>AND</code> operators are supported. A valid example is <code>space_type = "SPACE" AND display_name:"Hello"</code> and an invalid example is <code>space_type = "SPACE" OR display_name:"Hello"</code>.</p><p>Among the same field, <code>space_type</code> doesn't support <code>AND</code> or <code>OR</code> operators. <code>display_name</code>, 'space_history_state', and 'external_user_allowed' only support <code>OR</code> operators. <code>last_active_time</code> and <code>create_time</code> support both <code>AND</code> and <code>OR</code> operators. <code>AND</code> can only be used to represent an interval, such as <code>last_active_time
                  < "2022-01-01T00:00:00+00:00" AND last_active_time >
                  "2023-01-01T00:00:00+00:00"</code>.</p><p>The following example queries are valid:</p><div><pre><code>customer = "customers/my_customer" AND space_type = "SPACE"

customer = "customers/my_customer" AND space_type = "SPACE" AND
display_name:"Hello World"

customer = "customers/my_customer" AND space_type = "SPACE" AND
(last_active_time < "2020-01-01T00:00:00+00:00" OR last_active_time >
"2022-01-01T00:00:00+00:00")

customer = "customers/my_customer" AND space_type = "SPACE" AND
(display_name:"Hello World" OR display_name:"Fun event") AND
(last_active_time > "2020-01-01T00:00:00+00:00" AND last_active_time <
"2022-01-01T00:00:00+00:00")

customer = "customers/my_customer" AND space_type = "SPACE" AND
(create_time > "2019-01-01T00:00:00+00:00" AND create_time <
"2020-01-01T00:00:00+00:00") AND (external_user_allowed = "true") AND
(space_history_state = "HISTORY_ON" OR space_history_state = "HISTORY_OFF")</code></pre></div></td></tr><tr><td><code>order_by</code></td><td><p><code>string</code></p><p>Optional. How the list of spaces is ordered.</p><p>Supported attributes to order by are:</p><ul><li><code>membership_count.joined_direct_human_user_count</code> — Denotes the count of human users that have directly joined a space.</li><li><code>last_active_time</code> — Denotes the time when last eligible item is added to any topic of this space.</li><li><code>create_time</code> — Denotes the time of the space creation.</li></ul><p>Valid ordering operation values are:</p><ul><li><p><code>ASC</code> for ascending. Default value.</p></li><li><p><code>DESC</code> for descending.</p></li></ul><p>The supported syntax are:</p><ul><li><code>membership_count.joined_direct_human_user_count DESC</code></li><li><code>membership_count.joined_direct_human_user_count ASC</code></li><li><code>last_active_time DESC</code></li><li><code>last_active_time ASC</code></li><li><code>create_time DESC</code></li><li><code>create_time ASC</code></li></ul></td></tr></tbody></table>

## SearchSpacesResponse

Response with a list of spaces corresponding to the search spaces request.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spaces[]</code></td><td><p><code>Space</code></p><p>A page of the requested spaces.</p></td></tr><tr><td><code>next_page_token</code></td><td><p><code>string</code></p><p>A token that can be used to retrieve the next page. If this field is empty, there are no subsequent pages.</p></td></tr><tr><td><code>total_size</code></td><td><p><code>int32</code></p><p>The total number of spaces that match the query, across all pages. If the result is over 10,000 spaces, this value is an estimate.</p></td></tr></tbody></table>

## Section

Represents a [section](https://support.google.com/chat/answer/16059854) in Google Chat. Sections help users organize their spaces. There are two types of sections:

1. **System Sections:** These are predefined sections managed by Google Chat. Their resource names are fixed, and they cannot be created, deleted, or have their `display_name` modified. Examples include:
	- `users/{user}/sections/default-direct-messages`
		- `users/{user}/sections/default-spaces`
		- `users/{user}/sections/default-apps`
2. **Custom Sections:** These are sections created and managed by the user. Creating a custom section using `CreateSection` **requires** a `display_name`. Custom sections can be updated using `UpdateSection` and deleted using `DeleteSection`.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the section.</p><p>For system sections, the section ID is a constant string:</p><ul><li>DEFAULT_DIRECT_MESSAGES: <code>users/{user}/sections/default-direct-messages</code></li><li>DEFAULT_SPACES: <code>users/{user}/sections/default-spaces</code></li><li>DEFAULT_APPS: <code>users/{user}/sections/default-apps</code></li></ul><p>Format: <code>users/{user}/sections/{section}</code></p></td></tr><tr><td><code>display_name</code></td><td><p><code>string</code></p><p>Optional. The section's display name. Only populated for sections of type <code>CUSTOM_SECTION</code>. Supports up to 80 characters. Required when creating a <code>CUSTOM_SECTION</code>.</p></td></tr><tr><td><code>sort_order</code></td><td><p><code>int32</code></p><p>Output only. The order of the section in relation to other sections. Sections with a lower <code>sort_order</code> value appear before sections with a higher value.</p></td></tr><tr><td><code>type</code></td><td><p><code>SectionType</code></p><p>Required. The type of the section.</p></td></tr></tbody></table>

## SectionType

Section types.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SECTION_TYPE_UNSPECIFIED</code></td><td>Unspecified section type.</td></tr><tr><td><code>CUSTOM_SECTION</code></td><td>Custom section.</td></tr><tr><td><code>DEFAULT_DIRECT_MESSAGES</code></td><td>Default section containing <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype">DIRECT_MESSAGE</a> between two human users or <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype">GROUP_CHAT</a> spaces that don't belong to any custom section.</td></tr><tr><td><code>DEFAULT_SPACES</code></td><td>Default spaces that don't belong to any custom section.</td></tr><tr><td><code>DEFAULT_APPS</code></td><td>Default section containing a user's installed apps.</td></tr></tbody></table>

## SectionItem

A user's defined section item. This is used to represent section items, such as spaces, grouped under a section.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the section item.</p><p>Format: <code>users/{user}/sections/{section}/items/{item}</code></p></td></tr><tr><td colspan="2">Union field <code>item</code>. Required. The section item. <code>item</code> can be only one of the following:</td></tr><tr><td><code>space</code></td><td><p><code>string</code></p><p>Optional. The space resource name.</p><p>Format: <code>spaces/{space}</code></p></td></tr></tbody></table>

## SetUpSpaceRequest

Request to create a space and add specified users to it.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space</code></td><td><p><code>Space</code></p><p>Required. The <code>Space.spaceType</code> field is required.</p><p>To create a space, set <code>Space.spaceType</code> to <code>SPACE</code> and set <code>Space.displayName</code>. If you receive the error message <code>ALREADY_EXISTS</code> when setting up a space, try a different <code>displayName</code>. An existing space within the Google Workspace organization might already use this display name.</p><p>To create a group chat, set <code>Space.spaceType</code> to <code>GROUP_CHAT</code>. Don't set <code>Space.displayName</code>.</p><p>To create a 1:1 conversation between humans, set <code>Space.spaceType</code> to <code>DIRECT_MESSAGE</code> and set <code>Space.singleUserBotDm</code> to <code>false</code>. Don't set <code>Space.displayName</code> or <code>Space.spaceDetails</code>.</p><p>To create an 1:1 conversation between a human and the calling Chat app, set <code>Space.spaceType</code> to <code>DIRECT_MESSAGE</code> and <code>Space.singleUserBotDm</code> to <code>true</code>. Don't set <code>Space.displayName</code> or <code>Space.spaceDetails</code>.</p><p>If a <code>DIRECT_MESSAGE</code> space already exists, that space is returned instead of creating a new space.</p></td></tr><tr><td><code>request_id</code></td><td><p><code>string</code></p><p>Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.</p></td></tr><tr><td><code>memberships[]</code></td><td><p><code>Membership</code></p><p>Optional. The Google Chat users or groups to invite to join the space. Omit the calling user, as they are added automatically.</p><p>The set currently allows up to 49 memberships (in addition to the caller).</p><p>For human membership, the <code>Membership.member</code> field must contain a <code>user</code> with <code>name</code> populated (format: <code>users/{user}</code>) and <code>type</code> set to <code>User.Type.HUMAN</code>. You can only add human users when setting up a space (adding Chat apps is only supported for direct message setup with the calling app). You can also add members using the user's email as an alias for {user}. For example, the <code>user.name</code> can be <code>users/example@gmail.com</code>. To invite Gmail users or users from external Google Workspace domains, user's email must be used for <code>{user}</code>.</p><p>For Google group membership, the <code>Membership.group_member</code> field must contain a <code>group</code> with <code>name</code> populated (format <code>groups/{group}</code>). You can only add Google groups when setting <code>Space.spaceType</code> to <code>SPACE</code>.</p><p>Optional when setting <code>Space.spaceType</code> to <code>SPACE</code>.</p><p>Required when setting <code>Space.spaceType</code> to <code>GROUP_CHAT</code>, along with at least two memberships.</p><p>Required when setting <code>Space.spaceType</code> to <code>DIRECT_MESSAGE</code> with a human user, along with exactly one membership.</p><p>Must be empty when creating a 1:1 conversation between a human and the calling Chat app (when setting <code>Space.spaceType</code> to <code>DIRECT_MESSAGE</code> and <code>Space.singleUserBotDm</code> to <code>true</code>).</p></td></tr></tbody></table>

## SlashCommand

Metadata about a [slash command](https://developers.google.com/workspace/chat/commands) in Google Chat.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>command_id</code></td><td><p><code>int64</code></p><p>The ID of the slash command.</p></td></tr></tbody></table>

## Space

A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the space.</p><p>Format: <code>spaces/{space}</code></p><p>Where <code>{space}</code> represents the system-assigned ID for the space. You can obtain the space ID by calling the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list"><code>spaces.list()</code></a> method or from the space URL. For example, if the space URL is <code>https://mail.google.com/mail/u/0/#chat/space/AAAAAAAAA</code>, the space ID is <code>AAAAAAAAA</code>.</p></td></tr><tr><td><code>type<br><b>(deprecated)</b></code></td><td><p><code>Type</code></p><p>Output only. Deprecated: Use <code>space_type</code> instead. The type of a space.</p></td></tr><tr><td><code>space_type</code></td><td><p><code>SpaceType</code></p><p>Optional. The type of space. Required when creating a space or updating the space type of a space. Output only for other usage.</p></td></tr><tr><td><code>single_user_bot_dm</code></td><td><p><code>bool</code></p><p>Optional. Whether the space is a DM between a Chat app and a single human.</p></td></tr><tr><td><code>threaded<br><b>(deprecated)</b></code></td><td><p><code>bool</code></p><p>Output only. Deprecated: Use <code>spaceThreadingState</code> instead. Whether messages are threaded in this space.</p></td></tr><tr><td><code>display_name</code></td><td><p><code>string</code></p><p>Optional. The space's display name. Required when <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/create">creating a space</a> with a <code>spaceType</code> of <code>SPACE</code>. If you receive the error message <code>ALREADY_EXISTS</code> when creating a space or updating the <code>displayName</code>, try a different <code>displayName</code>. An existing space within the Google Workspace organization might already use this display name.</p><p>For direct messages, this field might be empty.</p><p>Supports up to 128 characters.</p></td></tr><tr><td><code>external_user_allowed</code></td><td><p><code>bool</code></p><p>Optional. Immutable. Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions:</p><ul><li>The authenticated user uses a consumer account (unmanaged user account). By default, a space created by a consumer account permits any Google Chat user.</li></ul><p>For existing spaces, this field is output only.</p></td></tr><tr><td><code>space_threading_state</code></td><td><p><code>SpaceThreadingState</code></p><p>Output only. The threading state in the Chat space.</p></td></tr><tr><td><code>space_details</code></td><td><p><code>SpaceDetails</code></p><p>Optional. Details about the space including description and rules.</p></td></tr><tr><td><code>space_history_state</code></td><td><p><code>HistoryState</code></p><p>Optional. The message history state for messages and threads in this space.</p></td></tr><tr><td><code>import_mode</code></td><td><p><code>bool</code></p><p>Optional. Whether this space is created in <code>Import Mode</code> as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete.</p><p>Creating a space in <code>Import Mode</code> requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a>.</p></td></tr><tr><td><code>admin_installed</code></td><td><p><code>bool</code></p><p>Output only. For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator. Administrators can install and set up a direct message with a Chat app on behalf of users in their organization.</p><p>To support admin install, your Chat app must feature direct messaging.</p></td></tr><tr><td><code>membership_count</code></td><td><p><code>MembershipCount</code></p><p>Output only. The count of joined memberships grouped by member type. Populated when the <code>space_type</code> is <code>SPACE</code>, <code>DIRECT_MESSAGE</code> or <code>GROUP_CHAT</code>.</p></td></tr><tr><td><code>access_settings</code></td><td><p><code>AccessSettings</code></p><p>Optional. Specifies the <a href="https://support.google.com/chat/answer/11971020">access setting</a> of the space. Only populated when the <code>space_type</code> is <code>SPACE</code>.</p></td></tr><tr><td><code>space_uri</code></td><td><p><code>string</code></p><p>Output only. The URI for a user to access the space.</p></td></tr><tr><td><code>customer</code></td><td><p><code>string</code></p><p>Optional. Immutable. The customer id of the domain of the space. Required only when creating a space with <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a> and <code>SpaceType</code> is <code>SPACE</code>, otherwise should not be set.</p><p>In the format <code>customers/{customer}</code>, where <code>customer</code> is the <code>id</code> from the <a href="https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers">Admin SDK customer resource</a>. Private apps can also use the <code>customers/my_customer</code> alias to create the space in the same Google Workspace organization as the app.</p><p>This field isn't populated for direct messages (DMs) or when the space is created by non-Google Workspace users.</p></td></tr><tr><td colspan="2">Union field <code>space_permission_settings</code>. Represents the <a href="https://support.google.com/chat/answer/13340792">permission settings</a> of a space. Only populated when the <code>space_type</code> is <code>SPACE</code>. <code>space_permission_settings</code> can be only one of the following:</td></tr><tr><td><code>predefined_permission_settings</code></td><td><p><code>PredefinedPermissionSettings</code></p><p>Optional. Input only. Predefined space permission settings, input only when creating a space. If the field is not set, a collaboration space is created. After you create the space, settings are populated in the <code>PermissionSettings</code> field.</p><p>Setting predefined permission settings supports:</p><ul><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">App authentication</a> with <a href="https://support.google.com/a?p=chat-app-auth">administrator approval</a> with the <code>chat.app.spaces</code> or <code>chat.app.spaces.create</code> scopes.</p></li><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">User authentication</a></p></li></ul></td></tr><tr><td><code>permission_settings</code></td><td><p><code>PermissionSettings</code></p><p>Optional. Space permission settings for existing spaces. Input for updating exact space permission settings, where existing permission settings are replaced. Output lists current permission settings.</p><p>Reading and updating permission settings supports:</p><ul><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">App authentication</a> with <a href="https://support.google.com/a?p=chat-app-auth">administrator approval</a> with the <code>chat.app.spaces</code> scope. Only populated and settable when the Chat app created the space.</p></li><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">User authentication</a></p></li></ul></td></tr></tbody></table>

## AccessSettings

Represents the [access setting](https://support.google.com/chat/answer/11971020) of the space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>access_state</code></td><td><p><code>AccessState</code></p><p>Output only. Indicates the access state of the space.</p></td></tr><tr><td><code>audience</code></td><td><p><code>string</code></p><p>Optional. The resource name of the <a href="https://support.google.com/a/answer/9934697">target audience</a> who can discover the space, join the space, and preview the messages in the space. If unset, only users or Google Groups who have been individually invited or added to the space can access it. For details, see <a href="https://developers.google.com/workspace/chat/space-target-audience">Make a space discoverable to a target audience</a>.</p><p>Format: <code>audiences/{audience}</code></p><p>To use the default target audience for the Google Workspace organization, set to <code>audiences/default</code>.</p><p>Reading the target audience supports:</p><ul><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">User authentication</a></p></li><li><p><a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">App authentication</a> with <a href="https://support.google.com/a?p=chat-app-auth">administrator approval</a> with the <code>chat.app.spaces</code> scope.</p></li></ul><p>This field is not populated when using the <code>chat.bot</code> scope with <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-app">app authentication</a>.</p><p>Setting the target audience requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a>.</p></td></tr></tbody></table>

## AccessState

Represents the access state of the space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ACCESS_STATE_UNSPECIFIED</code></td><td>Access state is unknown or not supported in this API.</td></tr><tr><td><code>PRIVATE</code></td><td>Only users or Google Groups that have been individually added or invited by other users or Google Workspace administrators can discover and access the space.</td></tr><tr><td><code>DISCOVERABLE</code></td><td><p>A space manager has granted a target audience access to the space. Users or Google Groups that have been individually added or invited to the space can also discover and access the space. To learn more, see <a href="https://developers.google.com/workspace/chat/space-target-audience">Make a space discoverable to specific users</a>.</p><p>Creating discoverable spaces requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a>.</p></td></tr></tbody></table>

## MembershipCount

Represents the count of memberships of a space, grouped into categories.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>joined_direct_human_user_count</code></td><td><p><code>int32</code></p><p>Output only. Count of human users that have directly joined the space, not counting users joined by having membership in a joined group.</p></td></tr><tr><td><code>joined_group_count</code></td><td><p><code>int32</code></p><p>Output only. Count of all groups that have directly joined the space.</p></td></tr></tbody></table>

## PermissionSetting

Represents a space permission setting.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>managers_allowed</code></td><td><p><code>bool</code></p><p>Optional. Whether space owners (<code><code>ROLE_MANAGER</code></code>) have this permission.</p></td></tr><tr><td><code>members_allowed</code></td><td><p><code>bool</code></p><p>Optional. Whether basic space members (<code><code>ROLE_MEMBER</code></code>) have this permission.</p></td></tr><tr><td><code>assistant_managers_allowed</code></td><td><p><code>bool</code></p><p>Optional. Whether space managers <code><code>ROLE_ASSISTANT_MANAGER</code></code>) have this permission.</p></td></tr></tbody></table>

## PermissionSettings

[Permission settings](https://support.google.com/chat/answer/13340792) that you can specify when updating an existing named space.

To set permission settings when creating a space, specify the `PredefinedPermissionSettings` field in your request.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>manage_members_and_groups</code></td><td><p><code>PermissionSetting</code></p><p>Optional. Setting for managing members and groups in a space.</p></td></tr><tr><td><code>modify_space_details</code></td><td><p><code>PermissionSetting</code></p><p>Optional. Setting for updating space name, avatar, description and guidelines.</p></td></tr><tr><td><code>toggle_history</code></td><td><p><code>PermissionSetting</code></p><p>Optional. Setting for toggling space history on and off.</p></td></tr><tr><td><code>use_at_mention_all</code></td><td><p><code>PermissionSetting</code></p><p>Optional. Setting for using @all in a space.</p></td></tr><tr><td><code>manage_apps</code></td><td><p><code>PermissionSetting</code></p><p>Optional. Setting for managing apps in a space.</p></td></tr><tr><td><code>manage_webhooks</code></td><td><p><code>PermissionSetting</code></p><p>Optional. Setting for managing webhooks in a space.</p></td></tr><tr><td><code>post_messages</code></td><td><p><code>PermissionSetting</code></p><p>Output only. Setting for posting messages in a space.</p></td></tr><tr><td><code>reply_messages</code></td><td><p><code>PermissionSetting</code></p><p>Optional. Setting for replying to messages in a space.</p></td></tr></tbody></table>

## PredefinedPermissionSettings

Predefined permission settings that you can only specify when creating a named space. More settings might be added in the future. For details about permission settings for named spaces, see [Learn about spaces](https://support.google.com/chat/answer/7659784).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PREDEFINED_PERMISSION_SETTINGS_UNSPECIFIED</code></td><td>Unspecified. Don't use.</td></tr><tr><td><code>COLLABORATION_SPACE</code></td><td>Setting to make the space a collaboration space where all members can post messages.</td></tr><tr><td><code>ANNOUNCEMENT_SPACE</code></td><td>Setting to make the space an announcement space where only space managers can post messages.</td></tr></tbody></table>

## SpaceDetails

Details about the space including description and rules.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>description</code></td><td><p><code>string</code></p><p>Optional. A description of the space. For example, describe the space's discussion topic, functional purpose, or participants.</p><p>Supports up to 150 characters.</p></td></tr><tr><td><code>guidelines</code></td><td><p><code>string</code></p><p>Optional. The space's rules, expectations, and etiquette.</p><p>Supports up to 5,000 characters.</p></td></tr></tbody></table>

## SpaceThreadingState

Specifies the type of threading state in the Chat space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SPACE_THREADING_STATE_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>THREADED_MESSAGES</code></td><td>Named spaces that support message threads. When users respond to a message, they can reply in-thread, which keeps their response in the context of the original message.</td></tr><tr><td><code>GROUPED_MESSAGES</code></td><td>Named spaces where the conversation is organized by topic. Topics and their replies are grouped together.</td></tr><tr><td><code>UNTHREADED_MESSAGES</code></td><td>Direct messages (DMs) between two people and group conversations between 3 or more people.</td></tr></tbody></table>

## SpaceType

The type of space. Required when creating or updating a space. Output only for other usage.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SPACE_TYPE_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>SPACE</code></td><td>A place where people send messages, share files, and collaborate. A <code>SPACE</code> can include Chat apps.</td></tr><tr><td><code>GROUP_CHAT</code></td><td>Group conversations between 3 or more people. A <code>GROUP_CHAT</code> can include Chat apps.</td></tr><tr><td><code>DIRECT_MESSAGE</code></td><td>1:1 messages between two humans or a human and a Chat app.</td></tr></tbody></table>

## Type

Deprecated: Use `SpaceType` instead.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>ROOM</code></td><td>Conversations between two or more humans.</td></tr><tr><td><code>DM</code></td><td>1:1 Direct Message between a human and a Chat app, where all messages are flat. Note that this doesn't include direct messages between two humans.</td></tr></tbody></table>

## SpaceBatchUpdatedEventData

Event payload for multiple updates to a space.

Event type: `google.workspace.chat.space.v1.batchUpdated`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spaces[]</code></td><td><p><code>SpaceUpdatedEventData</code></p><p>A list of updated spaces.</p></td></tr></tbody></table>

## SpaceEvent

An event that represents a change or activity in a Google Chat space. To learn more, see [Work with events from Google Chat](https://developers.google.com/workspace/chat/events-overview).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name of the space event.</p><p>Format: <code>spaces/{space}/spaceEvents/{spaceEvent}</code></p></td></tr><tr><td><code>event_type</code></td><td><p><code>string</code></p><p>Type of space event. Each event type has a batch version, which represents multiple instances of the event type that occur in a short period of time. For <code>spaceEvents.list()</code> requests, omit batch event types in your query filter. By default, the server returns both event type and its batch version.</p><p>Supported event types for <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages">messages</a>:</p><ul><li>New message: <code>google.workspace.chat.message.v1.created</code></li><li>Updated message: <code>google.workspace.chat.message.v1.updated</code></li><li>Deleted message: <code>google.workspace.chat.message.v1.deleted</code></li><li>Multiple new messages: <code>google.workspace.chat.message.v1.batchCreated</code></li><li>Multiple updated messages: <code>google.workspace.chat.message.v1.batchUpdated</code></li><li>Multiple deleted messages: <code>google.workspace.chat.message.v1.batchDeleted</code></li></ul><p>Supported event types for <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members">memberships</a>:</p><ul><li>New membership: <code>google.workspace.chat.membership.v1.created</code></li><li>Updated membership: <code>google.workspace.chat.membership.v1.updated</code></li><li>Deleted membership: <code>google.workspace.chat.membership.v1.deleted</code></li><li>Multiple new memberships: <code>google.workspace.chat.membership.v1.batchCreated</code></li><li>Multiple updated memberships: <code>google.workspace.chat.membership.v1.batchUpdated</code></li><li>Multiple deleted memberships: <code>google.workspace.chat.membership.v1.batchDeleted</code></li></ul><p>Supported event types for <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions">reactions</a>:</p><ul><li>New reaction: <code>google.workspace.chat.reaction.v1.created</code></li><li>Deleted reaction: <code>google.workspace.chat.reaction.v1.deleted</code></li><li>Multiple new reactions: <code>google.workspace.chat.reaction.v1.batchCreated</code></li><li>Multiple deleted reactions: <code>google.workspace.chat.reaction.v1.batchDeleted</code></li></ul><p>Supported event types about the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces">space</a>:</p><ul><li>Updated space: <code>google.workspace.chat.space.v1.updated</code></li><li>Multiple space updates: <code>google.workspace.chat.space.v1.batchUpdated</code></li></ul></td></tr><tr><td colspan="2"><p>Union field <code>payload</code>.</p><p><code>payload</code> can be only one of the following:</p></td></tr><tr><td><code>message_created_event_data</code></td><td><p><code>MessageCreatedEventData</code></p><p>Event payload for a new message.</p><p>Event type: <code>google.workspace.chat.message.v1.created</code></p></td></tr><tr><td><code>message_updated_event_data</code></td><td><p><code>MessageUpdatedEventData</code></p><p>Event payload for an updated message.</p><p>Event type: <code>google.workspace.chat.message.v1.updated</code></p></td></tr><tr><td><code>message_deleted_event_data</code></td><td><p><code>MessageDeletedEventData</code></p><p>Event payload for a deleted message.</p><p>Event type: <code>google.workspace.chat.message.v1.deleted</code></p></td></tr><tr><td><code>message_batch_created_event_data</code></td><td><p><code>MessageBatchCreatedEventData</code></p><p>Event payload for multiple new messages.</p><p>Event type: <code>google.workspace.chat.message.v1.batchCreated</code></p></td></tr><tr><td><code>message_batch_updated_event_data</code></td><td><p><code>MessageBatchUpdatedEventData</code></p><p>Event payload for multiple updated messages.</p><p>Event type: <code>google.workspace.chat.message.v1.batchUpdated</code></p></td></tr><tr><td><code>message_batch_deleted_event_data</code></td><td><p><code>MessageBatchDeletedEventData</code></p><p>Event payload for multiple deleted messages.</p><p>Event type: <code>google.workspace.chat.message.v1.batchDeleted</code></p></td></tr><tr><td><code>space_updated_event_data</code></td><td><p><code>SpaceUpdatedEventData</code></p><p>Event payload for a space update.</p><p>Event type: <code>google.workspace.chat.space.v1.updated</code></p></td></tr><tr><td><code>space_batch_updated_event_data</code></td><td><p><code>SpaceBatchUpdatedEventData</code></p><p>Event payload for multiple updates to a space.</p><p>Event type: <code>google.workspace.chat.space.v1.batchUpdated</code></p></td></tr><tr><td><code>membership_created_event_data</code></td><td><p><code>MembershipCreatedEventData</code></p><p>Event payload for a new membership.</p><p>Event type: <code>google.workspace.chat.membership.v1.created</code></p></td></tr><tr><td><code>membership_updated_event_data</code></td><td><p><code>MembershipUpdatedEventData</code></p><p>Event payload for an updated membership.</p><p>Event type: <code>google.workspace.chat.membership.v1.updated</code></p></td></tr><tr><td><code>membership_deleted_event_data</code></td><td><p><code>MembershipDeletedEventData</code></p><p>Event payload for a deleted membership.</p><p>Event type: <code>google.workspace.chat.membership.v1.deleted</code></p></td></tr><tr><td><code>membership_batch_created_event_data</code></td><td><p><code>MembershipBatchCreatedEventData</code></p><p>Event payload for multiple new memberships.</p><p>Event type: <code>google.workspace.chat.membership.v1.batchCreated</code></p></td></tr><tr><td><code>membership_batch_updated_event_data</code></td><td><p><code>MembershipBatchUpdatedEventData</code></p><p>Event payload for multiple updated memberships.</p><p>Event type: <code>google.workspace.chat.membership.v1.batchUpdated</code></p></td></tr><tr><td><code>membership_batch_deleted_event_data</code></td><td><p><code>MembershipBatchDeletedEventData</code></p><p>Event payload for multiple deleted memberships.</p><p>Event type: <code>google.workspace.chat.membership.v1.batchDeleted</code></p></td></tr><tr><td><code>reaction_created_event_data</code></td><td><p><code>ReactionCreatedEventData</code></p><p>Event payload for a new reaction.</p><p>Event type: <code>google.workspace.chat.reaction.v1.created</code></p></td></tr><tr><td><code>reaction_deleted_event_data</code></td><td><p><code>ReactionDeletedEventData</code></p><p>Event payload for a deleted reaction.</p><p>Event type: <code>google.workspace.chat.reaction.v1.deleted</code></p></td></tr><tr><td><code>reaction_batch_created_event_data</code></td><td><p><code>ReactionBatchCreatedEventData</code></p><p>Event payload for multiple new reactions.</p><p>Event type: <code>google.workspace.chat.reaction.v1.batchCreated</code></p></td></tr><tr><td><code>reaction_batch_deleted_event_data</code></td><td><p><code>ReactionBatchDeletedEventData</code></p><p>Event payload for multiple deleted reactions.</p><p>Event type: <code>google.workspace.chat.reaction.v1.batchDeleted</code></p></td></tr></tbody></table>

## SpaceNotificationSetting

The notification setting of a user in a space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the space notification setting. Format: <code>users/{user}/spaces/{space}/spaceNotificationSetting</code>.</p></td></tr><tr><td><code>notification_setting</code></td><td><p><code>NotificationSetting</code></p><p>The notification setting.</p></td></tr><tr><td><code>mute_setting</code></td><td><p><code>MuteSetting</code></p><p>The space notification mute setting.</p></td></tr></tbody></table>

## MuteSetting

The space notification mute setting types.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>MUTE_SETTING_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>UNMUTED</code></td><td>The user will receive notifications for the space based on the notification setting.</td></tr><tr><td><code>MUTED</code></td><td>The user will not receive any notifications for the space, regardless of the notification setting.</td></tr></tbody></table>

## NotificationSetting

The notification setting types. Other types might be supported in the future.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NOTIFICATION_SETTING_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>ALL</code></td><td>Notifications are triggered by @mentions, followed threads, first message of new threads. All new threads are automatically followed, unless manually unfollowed by the user.</td></tr><tr><td><code>MAIN_CONVERSATIONS</code></td><td>The notification is triggered by @mentions, followed threads, first message of new threads. Not available for 1:1 direct messages.</td></tr><tr><td><code>FOR_YOU</code></td><td>The notification is triggered by @mentions, followed threads. Not available for 1:1 direct messages.</td></tr><tr><td><code>OFF</code></td><td>Notification is off.</td></tr></tbody></table>

## SpaceReadState

A user's read state within a space, used to identify read and unread messages.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name of the space read state.</p><p>Format: <code>users/{user}/spaces/{space}/spaceReadState</code></p></td></tr></tbody></table>

## SpaceUpdatedEventData

Event payload for an updated space.

Event type: `google.workspace.chat.space.v1.updated`

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space</code></td><td><p><code>Space</code></p><p>The updated space.</p></td></tr></tbody></table>

## SpaceView

A view that specifies which fields should be populated on the [`Space`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) resource. To ensure compatibility with future releases, we recommend that your code account for additional values.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SPACE_VIEW_UNSPECIFIED</code></td><td>The default / unset value.</td></tr><tr><td><code>SPACE_VIEW_RESOURCE_NAME_ONLY</code></td><td>Populates only the Space resource name.</td></tr><tr><td><code>SPACE_VIEW_EXPANDED</code></td><td>Populates Space resource fields. Note: the <code>permissionSettings</code> field will not be populated. Requests that specify SPACE_VIEW_EXPANDED must include scopes that allow reading space data, for example, <a href="https://www.googleapis.com/auth/chat.spaces">https://www.googleapis.com/auth/chat.spaces</a> or <a href="https://www.googleapis.com/auth/chat.spaces.readonly">https://www.googleapis.com/auth/chat.spaces.readonly</a>.</td></tr></tbody></table>

## Thread

A thread in a Google Chat space. For example usage, see [Start or reply to a message thread](https://developers.google.com/workspace/chat/create-messages#create-message-thread).

If you specify a thread when creating a message, you can set the [`messageReplyOption`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/create#messagereplyoption) field to determine what happens if no matching thread is found.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the thread.</p><p>Example: <code>spaces/{space}/threads/{thread}</code></p></td></tr><tr><td><code>thread_key</code></td><td><p><code>string</code></p><p>Optional. Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters.</p><p>This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread <code>name</code> field instead.</p></td></tr></tbody></table>

## ThreadReadState

A user's read state within a thread, used to identify read and unread messages.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name of the thread read state.</p><p>Format: <code>users/{user}/spaces/{space}/threads/{thread}/threadReadState</code></p></td></tr></tbody></table>

## UpdateMembershipRequest

Request message for updating a membership.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>membership</code></td><td><p><code>Membership</code></p><p>Required. The membership to update. Only fields specified by <code>update_mask</code> are updated.</p></td></tr><tr><td><code>update_mask</code></td><td><p><code>FieldMask</code></p><p>Required. The field paths to update. Separate multiple values with commas or use <code>*</code> to update all field paths.</p><p>Currently supported field paths:</p><ul><li><code>role</code></li></ul></td></tr><tr><td><code>use_admin_access</code></td><td><p><code>bool</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.memberships</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p></td></tr></tbody></table>

## UpdateMessageRequest

Request to update a message.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>Message</code></p><p>Required. Message with fields updated.</p></td></tr><tr><td><code>update_mask</code></td><td><p><code>FieldMask</code></p><p>Required. The field paths to update. Separate multiple values with commas or use <code>*</code> to update all field paths.</p><p>Currently supported field paths:</p><ul><li><p><code>text</code></p></li><li><p><code>attachment</code></p></li><li><p><code>cards</code> (Requires <a href="https://developers.google.com/chat/api/guides/auth/service-accounts">app authentication</a>.)</p></li><li><p><code>cards_v2</code> (Requires <a href="https://developers.google.com/chat/api/guides/auth/service-accounts">app authentication</a>.)</p></li><li><p><code>accessory_widgets</code> (Requires <a href="https://developers.google.com/chat/api/guides/auth/service-accounts">app authentication</a>.)</p></li><li><p><code>quoted_message_metadata</code> (Only allows removal of the quoted message.)</p></li></ul></td></tr><tr><td><code>allow_missing</code></td><td><p><code>bool</code></p><p>Optional. If <code>true</code> and the message isn't found, a new message is created and <code>updateMask</code> is ignored. The specified message ID must be <a href="https://developers.google.com/workspace/chat/create-messages#name_a_created_message">client-assigned</a> or the request fails.</p></td></tr></tbody></table>

## UpdateSectionRequest

Request message for updating a section.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>section</code></td><td><p><code>Section</code></p><p>Required. The section to update.</p></td></tr><tr><td><code>update_mask</code></td><td><p><code>FieldMask</code></p><p>Required. The mask to specify which fields to update.</p><p>Currently supported field paths:</p><ul><li><code>display_name</code></li></ul></td></tr></tbody></table>

## UpdateSpaceNotificationSettingRequest

Request to update the space notification settings. Only supports updating notification setting for the calling user.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space_notification_setting</code></td><td><p><code>SpaceNotificationSetting</code></p><p>Required. The resource name for the space notification settings must be populated in the form of <code>users/{user}/spaces/{space}/spaceNotificationSetting</code>. Only fields specified by <code>update_mask</code> are updated.</p></td></tr><tr><td><code>update_mask</code></td><td><p><code>FieldMask</code></p><p>Required. Supported field paths:</p><ul><li><p><code>notification_setting</code></p></li><li><p><code>mute_setting</code></p></li></ul></td></tr></tbody></table>

## UpdateSpaceReadStateRequest

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space_read_state</code></td><td><p><code>SpaceReadState</code></p><p>Required. The space read state and fields to update.</p><p>Only supports updating read state for the calling user.</p><p>To refer to the calling user, set one of the following:</p><ul><li><p>The <code>me</code> alias. For example, <code>users/me/spaces/{space}/spaceReadState</code>.</p></li><li><p>Their Workspace email address. For example, <code>users/user@example.com/spaces/{space}/spaceReadState</code>.</p></li><li><p>Their user id. For example, <code>users/123456789/spaces/{space}/spaceReadState</code>.</p></li></ul><p>Format: users/{user}/spaces/{space}/spaceReadState</p></td></tr><tr><td><code>update_mask</code></td><td><p><code>FieldMask</code></p><p>Required. The field paths to update. Currently supported field paths:</p><ul><li><code>last_read_time</code></li></ul><p>When the <code>last_read_time</code> is before the latest message create time, the space appears as unread in the UI.</p><p>To mark the space as read, set <code>last_read_time</code> to any value later (larger) than the latest message create time. The <code>last_read_time</code> is coerced to match the latest message create time. Note that the space read state only affects the read state of messages that are visible in the space's top-level conversation. Replies in threads are unaffected by this timestamp, and instead rely on the thread read state.</p></td></tr></tbody></table>

## UpdateSpaceRequest

A request to update a single space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>space</code></td><td><p><code>Space</code></p><p>Required. Space with fields to be updated. <code>Space.name</code> must be populated in the form of <code>spaces/{space}</code>. Only fields specified by <code>update_mask</code> are updated.</p></td></tr><tr><td><code>update_mask</code></td><td><p><code>FieldMask</code></p><p>Required. The updated field paths, comma separated if there are multiple.</p><p>You can update the following fields for a space:</p><p><code>space_details</code>: Updates the space's description and guidelines. You must pass both description and guidelines in the update request as <code><code>SpaceDetails</code></code>. If you only want to update one of the fields, pass the existing value for the other field.</p><p><code>display_name</code>: Only supports updating the display name for spaces where <code>spaceType</code> field is <code>SPACE</code>. If you receive the error message <code>ALREADY_EXISTS</code>, try a different value. An existing space within the Google Workspace organization might already use this display name.</p><p><code>space_type</code>: Only supports changing a <code>GROUP_CHAT</code> space type to <code>SPACE</code>. Include <code>display_name</code> together with <code>space_type</code> in the update mask and ensure that the specified space has a non-empty display name and the <code>SPACE</code> space type. Including the <code>space_type</code> mask and the <code>SPACE</code> type in the specified space when updating the display name is optional if the existing space already has the <code>SPACE</code> type. Trying to update the space type in other ways results in an invalid argument error. <code>space_type</code> is not supported with <code>useAdminAccess</code>.</p><p><code>space_history_state</code>: Updates <a href="https://support.google.com/chat/answer/7664687">space history settings</a> by turning history on or off for the space. Only supported if history settings are enabled for the Google Workspace organization. To update the space history state, you must omit all other field masks in your request. <code>space_history_state</code> is not supported with <code>useAdminAccess</code>.</p><p><code>access_settings.audience</code>: Updates the <a href="https://support.google.com/chat/answer/11971020">access setting</a> of who can discover the space, join the space, and preview the messages in named space where <code>spaceType</code> field is <code>SPACE</code>. If the existing space has a target audience, you can remove the audience and restrict space access by omitting a value for this field mask. To update access settings for a space, the authenticating user must be a space manager and omit all other field masks in your request. You can't update this field if the space is in <a href="https://developers.google.com/workspace/chat/import-data-overview">import mode</a>. To learn more, see <a href="https://developers.google.com/workspace/chat/space-target-audience">Make a space discoverable to specific users</a>. <code>access_settings.audience</code> is not supported with <code>useAdminAccess</code>.</p><p><code>permission_settings</code>: Supports changing the <a href="https://support.google.com/chat/answer/13340792">permission settings</a> of a space. When updating permission settings, you can only specify <code>permissionSettings</code> field masks; you cannot update other field masks at the same time. The supported field masks include:</p><ul><li><code>permission_settings.manageMembersAndGroups</code></li><li><code>permission_settings.modifySpaceDetails</code></li><li><code>permission_settings.toggleHistory</code></li><li><code>permission_settings.useAtMentionAll</code></li><li><code>permission_settings.manageApps</code></li><li><code>permission_settings.manageWebhooks</code></li><li><code>permission_settings.replyMessages</code></li></ul></td></tr><tr><td><code>use_admin_access</code></td><td><p><code>bool</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires the <code>chat.admin.spaces</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p><p>Some <code>FieldMask</code> values are not supported using admin access. For details, see the description of <code>update_mask</code>.</p></td></tr></tbody></table>

## User

A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output for a `User` resource only populates the user's `name` and `type`.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name for a Google Chat <code>user</code>.</p><p>Format: <code>users/{user}</code>. <code>users/app</code> can be used as an alias for the calling app <code>bot</code> user.</p><p>For <code>human users</code>, <code>{user}</code> is the same user identifier as:</p><ul><li><p>the <code>id</code> for the <a href="https://developers.google.com/people/api/rest/v1/people">Person</a> in the People API. For example, <code>users/123456789</code> in Chat API represents the same person as the <code>123456789</code> Person profile ID in People API.</p></li><li><p>the <code>id</code> for a <a href="https://developers.google.com/admin-sdk/directory/reference/rest/v1/users">user</a> in the Admin SDK Directory API.</p></li><li><p>the user's email address can be used as an alias for <code>{user}</code> in API requests. For example, if the People API Person profile ID for <code>user@example.com</code> is <code>123456789</code>, you can use <code>users/user@example.com</code> as an alias to reference <code>users/123456789</code>. Only the canonical resource name (for example <code>users/123456789</code>) will be returned from the API.</p></li></ul></td></tr><tr><td><code>display_name</code></td><td><p><code>string</code></p><p>Output only. The user's display name.</p></td></tr><tr><td><code>domain_id</code></td><td><p><code>string</code></p><p>Unique identifier of the user's Google Workspace domain.</p></td></tr><tr><td><code>type</code></td><td><p><code>Type</code></p><p>User type.</p></td></tr><tr><td><code>is_anonymous</code></td><td><p><code>bool</code></p><p>Output only. When <code>true</code>, the user is deleted or their profile is not visible.</p></td></tr></tbody></table>

## Type

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Default value for the enum. DO NOT USE.</td></tr><tr><td><code>HUMAN</code></td><td>Human user.</td></tr><tr><td><code>BOT</code></td><td>Chat app user.</td></tr></tbody></table>

## WidgetMarkup

A widget is a UI element that presents text and images.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>buttons[]</code></td><td><p><code>Button</code></p><p>A list of buttons. Buttons is also <code>oneof data</code> and only one of these fields should be set.</p></td></tr><tr><td colspan="2">Union field <code>data</code>. A <code>WidgetMarkup</code> can only have one of the following items. You can use multiple <code>WidgetMarkup</code> fields to display more items. <code>data</code> can be only one of the following:</td></tr><tr><td><code>text_paragraph</code></td><td><p><code>TextParagraph</code></p><p>Display a text paragraph in this widget.</p></td></tr><tr><td><code>image</code></td><td><p><code>Image</code></p><p>Display an image in this widget.</p></td></tr><tr><td><code>key_value</code></td><td><p><code>KeyValue</code></p><p>Display a key value item in this widget.</p></td></tr></tbody></table>

## Button

A button. Can be a text button or an image button.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>type</code>.</p><p><code>type</code> can be only one of the following:</p></td></tr><tr><td><code>text_button</code></td><td><p><code>TextButton</code></p><p>A button with text and <code>onclick</code> action.</p></td></tr><tr><td><code>image_button</code></td><td><p><code>ImageButton</code></p><p>A button with image and <code>onclick</code> action.</p></td></tr></tbody></table>

## FormAction

A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>action_method_name</code></td><td><p><code>string</code></p><p>The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. You can use the same method name for several elements that trigger a common behavior.</p></td></tr><tr><td><code>parameters[]</code></td><td><p><code>ActionParameter</code></p><p>List of action parameters.</p></td></tr></tbody></table>

## ActionParameter

List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>key</code></td><td><p><code>string</code></p><p>The name of the parameter for the action script.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>The value of the parameter.</p></td></tr></tbody></table>

## Icon

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ICON_UNSPECIFIED</code></td><td></td></tr><tr><td><code>AIRPLANE</code></td><td></td></tr><tr><td><code>BOOKMARK</code></td><td></td></tr><tr><td><code>BUS</code></td><td></td></tr><tr><td><code>CAR</code></td><td></td></tr><tr><td><code>CLOCK</code></td><td></td></tr><tr><td><code>CONFIRMATION_NUMBER_ICON</code></td><td></td></tr><tr><td><code>DOLLAR</code></td><td></td></tr><tr><td><code>DESCRIPTION</code></td><td></td></tr><tr><td><code>EMAIL</code></td><td></td></tr><tr><td><code>EVENT_PERFORMER</code></td><td></td></tr><tr><td><code>EVENT_SEAT</code></td><td></td></tr><tr><td><code>FLIGHT_ARRIVAL</code></td><td></td></tr><tr><td><code>FLIGHT_DEPARTURE</code></td><td></td></tr><tr><td><code>HOTEL</code></td><td></td></tr><tr><td><code>HOTEL_ROOM_TYPE</code></td><td></td></tr><tr><td><code>INVITE</code></td><td></td></tr><tr><td><code>MAP_PIN</code></td><td></td></tr><tr><td><code>MEMBERSHIP</code></td><td></td></tr><tr><td><code>MULTIPLE_PEOPLE</code></td><td></td></tr><tr><td><code>OFFER</code></td><td></td></tr><tr><td><code>PERSON</code></td><td></td></tr><tr><td><code>PHONE</code></td><td></td></tr><tr><td><code>RESTAURANT_ICON</code></td><td></td></tr><tr><td><code>SHOPPING_CART</code></td><td></td></tr><tr><td><code>STAR</code></td><td></td></tr><tr><td><code>STORE</code></td><td></td></tr><tr><td><code>TICKET</code></td><td></td></tr><tr><td><code>TRAIN</code></td><td></td></tr><tr><td><code>VIDEO_CAMERA</code></td><td></td></tr><tr><td><code>VIDEO_PLAY</code></td><td></td></tr></tbody></table>

## Image

An image that's specified by a URL and can have an `onclick` action.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>image_url</code></td><td><p><code>string</code></p><p>The URL of the image.</p></td></tr><tr><td><code>on_click</code></td><td><p><code>OnClick</code></p><p>The <code>onclick</code> action.</p></td></tr><tr><td><code>aspect_ratio</code></td><td><p><code>double</code></p><p>The aspect ratio of this image (width and height). This field lets you reserve the right height for the image while waiting for it to load. It's not meant to override the built-in aspect ratio of the image. If unset, the server fills it by prefetching the image.</p></td></tr></tbody></table>

## ImageButton

An image button with an `onclick` action.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>on_click</code></td><td><p><code>OnClick</code></p><p>The <code>onclick</code> action.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of this <code>image_button</code> that's used for accessibility. Default value is provided if this name isn't specified.</p></td></tr><tr><td colspan="2">Union field <code>icons</code>. The icon can be specified by an <code>Icon</code> <code>enum</code> or a URL. <code>icons</code> can be only one of the following:</td></tr><tr><td><code>icon</code></td><td><p><code>Icon</code></p><p>The icon specified by an <code>enum</code> that indices to an icon provided by Chat API.</p></td></tr><tr><td><code>icon_url</code></td><td><p><code>string</code></p><p>The icon specified by a URL.</p></td></tr></tbody></table>

## KeyValue

A UI element contains a key (label) and a value (content). This element can also contain some actions such as `onclick` button.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>top_label</code></td><td><p><code>string</code></p><p>The text of the top label. Formatted text supported. For more information about formatting text, see <a href="https://developers.google.com/workspace/chat/format-messages#card-formatting">Formatting text in Google Chat apps</a> and <a href="https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting">Formatting text in Google Workspace Add-ons</a>.</p></td></tr><tr><td><code>content</code></td><td><p><code>string</code></p><p>The text of the content. Formatted text supported and always required. For more information about formatting text, see <a href="https://developers.google.com/workspace/chat/format-messages#card-formatting">Formatting text in Google Chat apps</a> and <a href="https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting">Formatting text in Google Workspace Add-ons</a>.</p></td></tr><tr><td><code>content_multiline</code></td><td><p><code>bool</code></p><p>If the content should be multiline.</p></td></tr><tr><td><code>bottom_label</code></td><td><p><code>string</code></p><p>The text of the bottom label. Formatted text supported. For more information about formatting text, see <a href="https://developers.google.com/workspace/chat/format-messages#card-formatting">Formatting text in Google Chat apps</a> and <a href="https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting">Formatting text in Google Workspace Add-ons</a>.</p></td></tr><tr><td><code>on_click</code></td><td><p><code>OnClick</code></p><p>The <code>onclick</code> action. Only the top label, bottom label, and content region are clickable.</p></td></tr><tr><td colspan="2">Union field <code>icons</code>. At least one of icons, <code>top_label</code> and <code>bottom_label</code> must be defined. <code>icons</code> can be only one of the following:</td></tr><tr><td><code>icon</code></td><td><p><code>Icon</code></p><p>An enum value that's replaced by the Chat API with the corresponding icon image.</p></td></tr><tr><td><code>icon_url</code></td><td><p><code>string</code></p><p>The icon specified by a URL.</p></td></tr><tr><td colspan="2">Union field <code>control</code>. A control widget. You can set either <code>button</code> or <code>switch_widget</code>, but not both. <code>control</code> can be only one of the following:</td></tr><tr><td><code>button</code></td><td><p><code>Button</code></p><p>A button that can be clicked to trigger an action.</p></td></tr></tbody></table>

## OnClick

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>data</code>.</p><p><code>data</code> can be only one of the following:</p></td></tr><tr><td><code>action</code></td><td><p><code>FormAction</code></p><p>A form action is triggered by this <code>onclick</code> action if specified.</p></td></tr><tr><td><code>open_link</code></td><td><p><code>OpenLink</code></p><p>This <code>onclick</code> action triggers an open link action if specified.</p></td></tr></tbody></table>

## OpenLink

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>url</code></td><td><p><code>string</code></p><p>The URL to open.</p></td></tr></tbody></table>

## TextButton

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p><p>The text of the button.</p></td></tr><tr><td><code>on_click</code></td><td><p><code>OnClick</code></p><p>The <code>onclick</code> action of the button.</p></td></tr></tbody></table>

## TextParagraph

A paragraph of text. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p></td></tr></tbody></table>
