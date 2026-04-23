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

This guide explains how to use the [`create()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.CreateReaction) method on the `Reaction` resource of the Google Chat API to add a reaction to a message—like 👍, 🚲, and 🌞.

The [`Reaction` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions) represents an emoji that people can use to react to a message, such as 👍, 🚲, and 🌞.

## Prerequisites

### Node.js

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Node.js [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=nodejs#cloud-client-libraries).
		- [Create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
	For guidance, complete the steps for setting up your environment in this [quickstart](https://developers.google.com/workspace/chat/api/guides/quickstart/nodejs#set-up-environment).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) that supports user authentication.

## Add a reaction to a message

To create a reaction to a message, pass the following in your request:

- Specify the `chat.messages.reactions.create`, `chat.messages.reactions`, or `chat.messages` authorization scope.
- Call the [`CreateReaction()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.CreateReaction) method, passing the `parent` as the resource name of the message to react to, and the `reaction` as a an instance of [`Reaction`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Reaction) in which the `unicode` field is a standard emoji represented by a unicode string.

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

- `SPACE_NAME`: the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MESSAGE_NAME`: the ID from the message's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID from the response body returned after creating a message asynchronously with the Chat API, or with the [custom name](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) assigned to the message at creation.

The Chat API returns an instance of [`Reaction`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Reaction) that details the reaction that's created.

## Related topics

- [Delete a reaction from a message](https://developers.google.com/workspace/chat/delete-reactions).
- [List reactions for a message](https://developers.google.com/workspace/chat/list-reactions).
