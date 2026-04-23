---
source: https://developers.google.com/workspace/chat/delete-reactions
root: workspace
fetched_at: 2026-04-23T15:25:22.803Z
---

# Delete a reaction from a message

## Page Summary

- This guide explains how to delete reactions (emojis like 👍, 🚲, 🌞) from Google Chat messages using the `delete()` method.
- Deleting a reaction does not delete the original message itself.
- You'll need a Google Workspace account and Node.js to use the Google Chat API for deleting reactions.
- The guide provides a code sample and instructions to set up your environment and authenticate for using the API.
- To successfully delete a reaction, you need to provide the specific name of the reaction resource in your API request.

This guide explains how to use the [`delete()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.DeleteReaction) method on the `Reaction` resource of the Google Chat API to delete a reaction from a message—like 👍, 🚲, and 🌞. Deleting a reaction doesn't delete the message.

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

## Delete a reaction

To delete a reaction from a message, pass the following in your request:

- Specify the `chat.messages.reactions` or the `chat.messages` authorization scope.
- Call the [`DeleteReaction()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.DeleteReaction) method, passing the `name` as the resource name of the reaction to delete.

The following example deletes the 😀 reaction from a message:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.messages.reactions',
];

// This sample shows how to delete a reaction to a message with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME, MESSAGE_NAME, and REACTION_NAME here
    name: 'spaces/SPACE_NAME/messages/MESSAGE_NAME/reactions/REACTION_NAME',
  };

  // Make the request
  const response = await chatClient.deleteReaction(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MESSAGE_NAME`: the ID from the message's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID from the response body returned after creating a message asynchronously with the Chat API, or with the [custom name](./create-messages.md#name_a_created_message) assigned to the message at creation.
- `REACTION_NAME`: the ID from the reaction's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Reaction.FIELDS.string.google.chat.v1.Reaction.name). You can obtain the ID by calling the [`ListReactions()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListReactions) method, or from the response body returned after creating a reaction asynchronously with the Chat API.

If successful, the response body is empty, which indicates that the reaction is deleted.

## Related topics

- [Add a reaction to a message](./create-reactions.md).
- [List reactions for a message](./list-reactions.md).
