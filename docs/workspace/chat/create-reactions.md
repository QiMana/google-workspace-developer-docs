---
source: https://developers.google.com/workspace/chat/create-reactions
root: workspace
fetched_at: 2026-04-23T15:25:18.940Z
---

# Add a reaction to a message

## Page Summary

- This guide demonstrates how to add emoji reactions (👍, 🚲, 🌞) to Google Chat messages using the `create()` method of the Google Chat API.
- It requires a Google Workspace account, a configured Google Cloud project with the Chat API enabled, and the Node.js Cloud Client Library.
- To add a reaction, call the `CreateReaction()` method, providing the message's resource name and the desired emoji's unicode representation.
- A sample Node.js code snippet is included, illustrating the process of creating a reaction using user credentials.
- You need to replace placeholders for space and message names within the code with your specific values to execute the sample successfully.

This guide explains how to use the [`create()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateReaction) method on the `Reaction` resource of the Google Chat API to add a reaction to a message—like 👍, 🚲, and 🌞.

The [`Reaction` resource](./api/reference/rest/v1/spaces.messages.reactions.md) represents an emoji that people can use to react to a message, such as 👍, 🚲, and 🌞.

## Prerequisites

### Node.js

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- Install the Node.js [Cloud Client Library](./libraries.md#cloud-client-libraries).
		- [Create OAuth client ID credentials](./authenticate-authorize-chat-user.md#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
	For guidance, complete the steps for setting up your environment in this [quickstart](./api/guides/quickstart/nodejs.md#set-up-environment).
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports user authentication.

## Add a reaction to a message

To create a reaction to a message, pass the following in your request:

- Specify the `chat.messages.reactions.create`, `chat.messages.reactions`, or `chat.messages` authorization scope.
- Call the [`CreateReaction()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateReaction) method, passing the `parent` as the resource name of the message to react to, and the `reaction` as a an instance of [`Reaction`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Reaction) in which the `unicode` field is a standard emoji represented by a unicode string.

The following example reacts to a message with the 😀 emoji:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.messages.reactions.create',
];

// This sample shows how to create reaction to a message with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME and MESSAGE_NAME here.
    parent: 'spaces/SPACE_NAME/messages/MESSAGE_NAME',
    reaction: {
      // A standard emoji represented by a unicode string.
      emoji: {unicode: '😀'},
    },
  };

  // Make the request
  const response = await chatClient.createReaction(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MESSAGE_NAME`: the ID from the message's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID from the response body returned after creating a message asynchronously with the Chat API, or with the [custom name](./create-messages.md#name_a_created_message) assigned to the message at creation.

The Chat API returns an instance of [`Reaction`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Reaction) that details the reaction that's created.

## Related topics

- [Delete a reaction from a message](./delete-reactions.md).
- [List reactions for a message](./list-reactions.md).
