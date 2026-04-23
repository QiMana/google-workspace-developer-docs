---
source: https://developers.google.com/workspace/chat/find-direct-message-in-spaces
root: workspace
fetched_at: 2026-04-23T15:25:23.249Z
---

# Find a direct message (DM) space

## Page Summary

- This guide focuses on utilizing the `findDirectMessage()` method within the Google Chat API to retrieve information about direct messages (DMs).
- Authentication can be performed using either app authentication (for Chat app access to DMs) or user authentication (for authenticated user access to DMs).
- To find a DM, you need to call the `FindDirectMessage()` method, providing the user's name, and utilize the appropriate authorization scope based on the authentication method.
- The response from the Chat API will contain a `Space` object providing detailed information about the specified DM.

This guide explains how to use the [`findDirectMessage()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.FindDirectMessage) method on the `Space` resource of the Google Chat API to get details about a direct message (DM) space.

The [`Space` resource](./api/reference/rest/v1/spaces.md) represents a place where people and Chat apps can send messages, share files, and collaborate. There are several types of spaces:

- Direct messages (DMs) are conversations between two users or a user and a Chat app.
- Group chats are conversations between three or more users and Chat apps.
- Named spaces are persistent places where people send messages, share files, and collaborate.

When a Google Workspace administrator [installs a Chat app for their entire Google Workspace organization](https://support.google.com/a/answer/172482), Google Chat creates a DM between the installed Chat app and each user in the organization.

Authenticating with [app authentication](./authenticate-authorize-chat-app.md) lets a Chat app get DMs that the Chat app has access to in Google Chat (for example, DMs it's a member of). Authenticating with [user authentication](./authenticate-authorize-chat-user.md) returns DMs that the authenticated user has access to.

## Prerequisites

### Node.js

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- Install the Node.js [Cloud Client Library](./libraries.md#cloud-client-libraries).
		- Create access credentials based on how you want to authenticate in your Google Chat API request:
		- To authenticate as a Chat user, [create OAuth client ID credentials](./authenticate-authorize-chat-user.md) and save the credentials as a JSON file named `credentials.json` to your local directory.
				- To authenticate as the Chat app, [create service account credentials](./authenticate-authorize-chat-app.md) and save the credentials as a JSON file named `credentials.json`.
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.

## Find a direct message

To find a direct message in Google Chat, pass the following in your request:

- With [app authentication](./authenticate-authorize-chat-app.md), specify the `chat.bot` authorization scope. With [user authentication](./authenticate-authorize-chat-user.md), specify the `chat.spaces.readonly` or `chat.spaces` authorization scope.
- Call the [`FindDirectMessage()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.FindDirectMessage), method passing the `name` of the other user in the DM to return. With [user authentication](./authenticate-authorize-chat-user.md), this method returns a DM between the calling user and the specified user. With [app authentication](./authenticate-authorize-chat-app.md), this method returns a DM between the calling app and the specified user.
- To add a human user as a space member, specify `users/{user}`, where `{user}` is either the `{person_id}` for the [`person`](https://developers.google.com/people/api/rest/v1/people) from the People API, or the ID of a [`user`](../admin/directory/reference/rest/v1/users.md) in the Directory API. For example, if the People API person `resourceName` is `people/123456789`, you can add the user to the space by including a membership with `users/123456789` as the `member.name`.

### Find a direct message with user authentication

Here's how to find a direct message with [user authentication](./authenticate-authorize-chat-user.md):

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.spaces.readonly',
];

// This sample shows how to find a Direct Message space with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace USER_NAME here
    name: 'users/USER_NAME',
  };

  // Make the request
  const response = await chatClient.findDirectMessage(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace `USER_NAME` with the ID from the user's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.User.FIELDS.string.google.chat.v1.User.name) field.

The Chat API returns an instance of [`Space`](./api/reference/rpc/google.chat.v1.md#space) that details the specified DM.

### Find a direct message with app authentication

Here's how to find a direct message with [app authentication](./authenticate-authorize-chat-app.md):

### Node.js

```
import {createClientWithAppCredentials} from './authentication-utils.js';

// This sample shows how to find a Direct Message space with app credential
async function main() {
  // Create a client
  const chatClient = createClientWithAppCredentials();

  // Initialize request argument(s)
  const request = {
    // Replace USER_NAME here
    name: 'users/USER_NAME',
  };

  // Make the request
  const response = await chatClient.findDirectMessage(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace `USER_NAME` with the ID from the user's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.User.FIELDS.string.google.chat.v1.User.name) field.

The Chat API returns an instance of [`Space`](./api/reference/rpc/google.chat.v1.md#space) that details the specified DM.

## Related topics

- [Create a space](./create-spaces.md).
- [Set up a space](./set-up-spaces.md).
- [Get details about a space](./get-spaces.md).
- [List spaces](./list-spaces.md).
- [Update a space](./update-spaces.md).
- [Delete a space](./delete-spaces.md).
