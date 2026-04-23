---
source: https://developers.google.com/workspace/chat/list-reactions
root: workspace
fetched_at: 2026-04-23T15:25:28.130Z
---

# List reactions for a message

## Page Summary

- This guide explains how to use the `list()` method to retrieve reactions (e.g., 👍, 🚲, 🌞) for messages in Google Chat using the Google Chat API.
- Before you begin, ensure you have a Google Workspace account, set up a Google Cloud project, enable the Google Chat API, and install the Node.js Cloud Client Library.
- To list reactions, call the `ListReactions()` method, providing the message's resource name and specifying the necessary authorization scope.
- You'll need the space ID and message ID to construct the resource name for the `ListReactions()` method call.
- The Chat API returns a paginated list of reactions for the specified message.

This guide explains how to use the [`list()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListReactions) method on the `Reaction` resource of the Google Chat API to list reactions for a message—like 👍, 🚲, and 🌞.

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

## List reactions

To list the reactions for a message, pass the following in your request:

- Specify the `chat.messages.reactions.readonly`, `chat.messages.reactions`, `chat.messages.readonly`, or `chat.messages` authorization scope.
- Call the [`ListReactions()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListReactions) method, passing the `parent` as the resource name of the message.

The following example lists reactions for a specified message:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.messages.reactions.readonly',
];

// This sample shows how to list reactions to a message with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME and MESSAGE_NAME here.
    parent: 'spaces/SPACE_NAME/messages/MESSAGE_NAME',
  };

  // Make the request
  const pageResult = chatClient.listReactionsAsync(request);

  // Handle the response. Iterating over pageResult will yield results
  // and resolve additional pages automatically.
  for await (const response of pageResult) {
    console.log(response);
  }
}

await main();
```

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MESSAGE_NAME`: the ID from the message's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID from the response body returned after creating a message asynchronously with the Chat API, or with the [custom name](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) assigned to the message at creation.

The Chat API returns a [paginated list of reactions](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#listreactionsresponse).

## Related topics

- [Add a reaction to a message](https://developers.google.com/workspace/chat/create-reactions).
- [Delete a reaction from a message](https://developers.google.com/workspace/chat/delete-reactions).
