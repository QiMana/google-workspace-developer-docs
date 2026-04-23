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

- [RPC reference](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space)
- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)

For example usage, see:

- [Create a space](https://developers.google.com/workspace/chat/create-spaces)
- [Set up a space](https://developers.google.com/workspace/chat/set-up-spaces)
- [Get a space](https://developers.google.com/workspace/chat/get-spaces)
- [List spaces](https://developers.google.com/workspace/chat/list-spaces)
- [Update a space](https://developers.google.com/workspace/chat/update-spaces)
- [Delete a space](https://developers.google.com/workspace/chat/delete-spaces)
- [Find a direct message (DM)](https://developers.google.com/workspace/chat/find-direct-message-in-spaces)

*Members*

*Members* are users and Chat apps that have joined or are invited to a space.

Resource reference:

- [RPC reference](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Membership)
- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members)

For example usage, see:

- [Create a membership](https://developers.google.com/workspace/chat/create-members)
- [Get a membership](https://developers.google.com/workspace/chat/get-members)
- [List memberships](https://developers.google.com/workspace/chat/list-members)
- [Update a membership](https://developers.google.com/workspace/chat/update-members)
- [Delete a membership](https://developers.google.com/workspace/chat/delete-members)

*Messages*

*Messages* include [text](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages) and [card](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards) communications posted in spaces. Messages can have files attached to them. People can react to messages by appending emoji to them.

Resource reference:

- [RPC reference](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message)
- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)

For example usage, see:

- [Create a message](https://developers.google.com/workspace/chat/create-messages)
- [Get a message](https://developers.google.com/workspace/chat/get-messages)
- [List messages](https://developers.google.com/workspace/chat/list-messages)
- [Update a message](https://developers.google.com/workspace/chat/update-messages)
- [Delete a message](https://developers.google.com/workspace/chat/delete-messages)

*Reactions*

*Reactions* represent the emoji people use to react to a message, such as 👍, 🚲, and 🌞.

Resource reference:

- [RPC reference](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Reaction)
- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions)

For example usage, see:

- [Create a reaction](https://developers.google.com/workspace/chat/create-reactions)
- [List reactions](https://developers.google.com/workspace/chat/list-reactions)
- [Delete a reaction](https://developers.google.com/workspace/chat/delete-reactions)

*Custom emoji*

*Custom emoji* represent custom emoji created and shared within the organization in Google Chat. Custom emoji can be included in the content of a message or used to react to a message.

Resource reference:

- [RPC reference](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.CustomEmoji)
- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis)

For example usage, see:

- [Create a custom emoji](https://developers.google.com/workspace/chat/create-custom-emoji)
- [Delete a custom emoji](https://developers.google.com/workspace/chat/delete-custom-emoji)
- [Get details about a custom emoji](https://developers.google.com/workspace/chat/get-custom-emoji)
- [List custom emojis in an organization](https://developers.google.com/workspace/chat/list-custom-emojis)

*Sections*

*Sections* are ways for users to group their conversations and customize the list of spaces displayed in the Google Chat navigation panel. There are predefined system sections and user-defined custom sections.

Resource reference:

- [RPC reference](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Section)
- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/users.sections)

For example usage, see:

- [Create a section](https://developers.google.com/workspace/chat/create-section)
- [Update a section](https://developers.google.com/workspace/chat/update-section)
- [Delete a section](https://developers.google.com/workspace/chat/delete-section)
- [Change the position of a section](https://developers.google.com/workspace/chat/position-section)
- [List sections](https://developers.google.com/workspace/chat/list-sections)
- [List spaces in a section](https://developers.google.com/workspace/chat/list-section-items)
- [Move a space to a different section](https://developers.google.com/workspace/chat/move-section-item)

*Media and attachments*

*Media* represents a file uploaded to Google Chat, like images, videos, and documents.

Media resource reference (Unavailable in RPC):

- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/media)

*Attachments* are instances of media (files) attached to messages.

Resource reference:

- [RPC reference](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Attachment)
- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments)

For example usage, see:

- [Upload media as an attachment](https://developers.google.com/workspace/chat/upload-media-attachments)
- [Download media as an attachment](https://developers.google.com/workspace/chat/download-media-attachments)
- [Get an attachment](https://developers.google.com/workspace/chat/get-media-attachments)

*Space events*

*Space events* represent changes to a space or its child resources, including its members, messages, and reactions.

Resource reference:

- [RPC reference](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceEvent)
- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents)

For example usage, see:

- [Get space read state](https://developers.google.com/workspace/chat/get-space-read-state)
- [Update space read state](https://developers.google.com/workspace/chat/update-space-read-state)
- [Get thread read state](https://developers.google.com/workspace/chat/get-thread-read-state)

*User read states*

*User read states* are singleton resources that represent details about a specified user's last read message in a Google Chat space or a message thread.

Space read state resource reference:

- [RPC reference](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceReadState)
- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/users.spaces)

Thread read state resource reference:

- [RPC reference](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ThreadReadState)
- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/users.spaces.threads)

For example usage, see:

- [Get space read state](https://developers.google.com/workspace/chat/get-space-read-state)
- [Update space read state](https://developers.google.com/workspace/chat/update-space-read-state)
- [Get thread read state](https://developers.google.com/workspace/chat/get-thread-read-state)

*User space notification settings*

*User space notification settings* are singleton resources that represent a specified user notification settings in a Google Chat space.

Resource reference:

- [RPC reference](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceNotificationSetting)
- [REST reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/users.spaces.spaceNotificationSetting)

### Authentication

Calling the Chat API requires authentication. Each Chat API method requires either [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) (to perform actions or access data on behalf of a user) or [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) (to perform actions or access data as a Chat app). Some methods support both user authentication and app authentication.

To learn more about authentication in Chat, see [Authentication overview](https://developers.google.com/workspace/chat/authenticate-authorize).

### Client libraries

The recommended way for most developers to call the Google Chat API is with our officially supported [Cloud Client Libraries](https://developers.google.com/workspace/chat/libraries) for your preferred language, like Python, Java, or Node.js.

If you're coding with Google Apps Script, use the [Advanced Chat service](https://developers.google.com/apps-script/advanced/chat) instead of installing a client library.

## Build Chat apps

The Chat API lets you build Google Chat apps that bring your services and resources right into Google Chat. You can build Chat apps to do any of the following:

- Retrieve information based on structured or free text queries entered by the user.
- Generate incident reports or other artifacts, using information provided by the user.
- Enhance team collaboration, such as providing "team memory" or scheduling resources.

You can design your Chat app using several different architecture styles, including the following:

- **Interactive apps**: Respond to user interaction, such as @mentions or slash commands, and present information or guide users through a workflow with cards and dialogs.
- **Command-line apps or webhooks**: Send proactive messages, such as alarms or notifications, from another system into a space. Users can't directly interact with this type of app.
- **Event-driven apps**: Subscribe to and react to activity in a Chat space, such as a new member joining. In response to an event, the app can send a message or perform another action.

For details about designing your Chat app, see [Choose a Google Chat app architecture](https://developers.google.com/workspace/chat/structure).

## Related topics

- [Explore Google Chat app samples](https://developers.google.com/workspace/chat/samples).
- [Build interactive Google Chat apps](https://developers.google.com/workspace/chat/interact-users-overview).
- [Choose a Google Chat app architecture](https://developers.google.com/workspace/chat/structure).

| ![](https://fonts.gstatic.com/s/i/productlogos/youtube/v9/192px.svg) | Want to see the Google Chat API in action?  The Google Workspace Developers channel offers videos about tips, tricks, and the latest features. |
| --- | --- |
