---
source: https://developers.google.com/workspace/chat/overview
root: workspace
fetched_at: 2026-04-23T15:25:30.644Z
---

# Develop with Google Chat

## Page Summary

- Google Chat apps integrate services directly into chats, enabling users to access information and take action without leaving the conversation.
- These apps support various functionalities, including workflow management, data collection, and interactive elements like dialogs and slash commands.
- Choose from interactive, non-interactive, or event-driven architectures to build apps that cater to your specific needs and use cases.
- Google Chat apps can be built using various platforms like AppSheet, Google Apps Script, and Dialogflow.
- Access to user data beyond basic identity requires authentication and user consent, ensuring privacy and security.

This page provides an overview of the Google Chat API and Google Chat apps.

## Google Chat API overview

The Chat API consists of [gRPC services or REST resources and methods](https://cloud.google.com/apis/docs/client-libraries-explained) that grant access to Chat, including spaces, space members, messages, message reactions, message attachments, space events, and user read states.

### Concepts

The following section defines the services, resources, and methods for the Chat API:

*Spaces*

*Spaces* are places where people and apps can converse and share files. There are several types of spaces. Direct messages (DMs) are 1:1 conversations between two users or a user and a Chat app. Group chats are conversations between three or more users and Chat apps. Named spaces are persistent places where people send messages, share files, and collaborate.

Resource reference:

- [RPC reference](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space)
- [REST reference](./api/reference/rest/v1/spaces.md)

For example usage, see:

- [Create a space](./create-spaces.md)
- [Set up a space](./set-up-spaces.md)
- [Get a space](./get-spaces.md)
- [List spaces](./list-spaces.md)
- [Update a space](./update-spaces.md)
- [Delete a space](./delete-spaces.md)
- [Find a direct message (DM)](./find-direct-message-in-spaces.md)

*Members*

*Members* are users and Chat apps that have joined or are invited to a space.

Resource reference:

- [RPC reference](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Membership)
- [REST reference](./api/reference/rest/v1/spaces.members.md)

For example usage, see:

- [Create a membership](./create-members.md)
- [Get a membership](./get-members.md)
- [List memberships](./list-members.md)
- [Update a membership](./update-members.md)
- [Delete a membership](./delete-members.md)

*Messages*

*Messages* include [text](./api/reference/rest/v1/spaces.messages.md) and [card](./api/reference/rest/v1/cards.md) communications posted in spaces. Messages can have files attached to them. People can react to messages by appending emoji to them.

Resource reference:

- [RPC reference](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Message)
- [REST reference](./api/reference/rest/v1/spaces.messages.md)

For example usage, see:

- [Create a message](./create-messages.md)
- [Get a message](./get-messages.md)
- [List messages](./list-messages.md)
- [Update a message](./update-messages.md)
- [Delete a message](./delete-messages.md)

*Reactions*

*Reactions* represent the emoji people use to react to a message, such as 👍, 🚲, and 🌞.

Resource reference:

- [RPC reference](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Reaction)
- [REST reference](./api/reference/rest/v1/spaces.messages.reactions.md)

For example usage, see:

- [Create a reaction](./create-reactions.md)
- [List reactions](./list-reactions.md)
- [Delete a reaction](./delete-reactions.md)

*Custom emoji*

*Custom emoji* represent custom emoji created and shared within the organization in Google Chat. Custom emoji can be included in the content of a message or used to react to a message.

Resource reference:

- [RPC reference](./api/reference/rpc/google.chat.v1.md#google.chat.v1.CustomEmoji)
- [REST reference](./api/reference/rest/v1/customEmojis.md)

For example usage, see:

- [Create a custom emoji](./create-custom-emoji.md)
- [Delete a custom emoji](./delete-custom-emoji.md)
- [Get details about a custom emoji](./get-custom-emoji.md)
- [List custom emojis in an organization](./list-custom-emojis.md)

*Sections*

*Sections* are ways for users to group their conversations and customize the list of spaces displayed in the Google Chat navigation panel. There are predefined system sections and user-defined custom sections.

Resource reference:

- [RPC reference](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Section)
- [REST reference](./api/reference/rest/v1/users.sections.md)

For example usage, see:

- [Create a section](./create-section.md)
- [Update a section](./update-section.md)
- [Delete a section](./delete-section.md)
- [Change the position of a section](./position-section.md)
- [List sections](./list-sections.md)
- [List spaces in a section](./list-section-items.md)
- [Move a space to a different section](./move-section-item.md)

*Media and attachments*

*Media* represents a file uploaded to Google Chat, like images, videos, and documents.

Media resource reference (Unavailable in RPC):

- [REST reference](./api/reference/rest/v1/media.md)

*Attachments* are instances of media (files) attached to messages.

Resource reference:

- [RPC reference](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Attachment)
- [REST reference](./api/reference/rest/v1/spaces.messages.attachments.md)

For example usage, see:

- [Upload media as an attachment](./upload-media-attachments.md)
- [Download media as an attachment](./download-media-attachments.md)
- [Get an attachment](./get-media-attachments.md)

*Space events*

*Space events* represent changes to a space or its child resources, including its members, messages, and reactions.

Resource reference:

- [RPC reference](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceEvent)
- [REST reference](./api/reference/rest/v1/spaces.spaceEvents.md)

For example usage, see:

- [Get space read state](./get-space-read-state.md)
- [Update space read state](./update-space-read-state.md)
- [Get thread read state](./get-thread-read-state.md)

*User read states*

*User read states* are singleton resources that represent details about a specified user's last read message in a Google Chat space or a message thread.

Space read state resource reference:

- [RPC reference](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceReadState)
- [REST reference](./api/reference/rest/v1/users.spaces.md)

Thread read state resource reference:

- [RPC reference](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ThreadReadState)
- [REST reference](./api/reference/rest/v1/users.spaces.threads.md)

For example usage, see:

- [Get space read state](./get-space-read-state.md)
- [Update space read state](./update-space-read-state.md)
- [Get thread read state](./get-thread-read-state.md)

*User space notification settings*

*User space notification settings* are singleton resources that represent a specified user notification settings in a Google Chat space.

Resource reference:

- [RPC reference](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceNotificationSetting)
- [REST reference](./api/reference/rest/v1/users.spaces.spaceNotificationSetting.md)

### Authentication

Calling the Chat API requires authentication. Each Chat API method requires either [user authentication](./authenticate-authorize-chat-user.md) (to perform actions or access data on behalf of a user) or [app authentication](./authenticate-authorize-chat-app.md) (to perform actions or access data as a Chat app). Some methods support both user authentication and app authentication.

To learn more about authentication in Chat, see [Authentication overview](./authenticate-authorize.md).

### Client libraries

The recommended way for most developers to call the Google Chat API is with our officially supported [Cloud Client Libraries](./libraries.md) for your preferred language, like Python, Java, or Node.js.

If you're coding with Google Apps Script, use the [Advanced Chat service](../../apps-script/advanced/chat.md) instead of installing a client library.

## Build Chat apps

The Chat API lets you build Google Chat apps that bring your services and resources right into Google Chat. You can build Chat apps to do any of the following:

- Retrieve information based on structured or free text queries entered by the user.
- Generate incident reports or other artifacts, using information provided by the user.
- Enhance team collaboration, such as providing "team memory" or scheduling resources.

You can design your Chat app using several different architecture styles, including the following:

- **Interactive apps**: Respond to user interaction, such as @mentions or slash commands, and present information or guide users through a workflow with cards and dialogs.
- **Command-line apps or webhooks**: Send proactive messages, such as alarms or notifications, from another system into a space. Users can't directly interact with this type of app.
- **Event-driven apps**: Subscribe to and react to activity in a Chat space, such as a new member joining. In response to an event, the app can send a message or perform another action.

For details about designing your Chat app, see [Choose a Google Chat app architecture](./structure.md).

## Related topics

- [Explore Google Chat app samples](./samples.md).
- [Build interactive Google Chat apps](./interact-users-overview.md).
- [Choose a Google Chat app architecture](./structure.md).

| ![](https://fonts.gstatic.com/s/i/productlogos/youtube/v9/192px.svg) | Want to see the Google Chat API in action?  The Google Workspace Developers channel offers videos about tips, tricks, and the latest features. |
| --- | --- |
