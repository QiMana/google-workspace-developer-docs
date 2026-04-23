---
source: https://developers.google.com/workspace/chat/get-thread-read-state
root: workspace
fetched_at: 2026-04-23T15:25:26.757Z
---

# Get details about a user's thread read state

## Page Summary

- This guide explains how to use the `get()` method to retrieve a user's read state within a Google Chat message thread using the Google Chat API.
- The `ThreadReadState` resource provides details about a user's last read message in a thread.
- To get the thread read state, you need a Google Workspace account, a configured Google Cloud project with the Google Chat API enabled, and the Node.js Cloud Client Library installed.
- You must use the `chat.users.readstate` or `chat.users.readstate.readonly` authorization scope and call the `GetThreadReadState()` method, specifying the thread read state's name.
- The API returns a `ThreadReadState` instance containing the user's read state information.

This guide explains how to use the [`get()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetThreadReadState) method on the `ThreadReadState` resource of the Google Chat API to get details about a user's read state within a message thread. To get the read state of a message in a space, see [Get details about a user's space read state](./get-space-read-state.md).

The [`ThreadReadState` resource](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ThreadReadState) is a singleton resource that represents details about a specified user's last read message in a Google Chat message thread.

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

## Get the calling user's thread read state

To get details about a user's read state within a message thread, include the following in your request:

- Specify the `chat.users.readstate` or `chat.users.readstate.readonly` authorization scope.
- Call the [`GetThreadReadState()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetThreadReadState) method, passing the `name` of the thread read state to get which includes a user ID or alias and a space ID. Getting thread read state only supports getting the read state of the calling user, which can be specified by setting one of the following:
	- The `me` alias. For example, `users/me/spaces/SPACE/threads/THREAD/threadReadState`.
		- The calling user's Workspace email address. For example, `users/user@example.com/spaces/SPACE/threads/THREAD/threadReadState`.
		- The calling user's user ID. For example, `users/USER/spaces/SPACE/threads/THREAD/threadReadState`.

The following example gets the calling user's thread read state:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.users.readstate.readonly',
];

// This sample shows how to get the thread read state for a space and calling
// user
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME and THREAD_NAME here
    name: 'users/me/spaces/SPACE_NAME/threads/THREAD_NAME/threadReadState',
  };

  // Make the request
  const response = await chatClient.getThreadReadState(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `THREAD_NAME`: the ID from the thread's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Thread.FIELDS.string.google.chat.v1.Thread.name). You can obtain the ID from the response body returned after creating a message asynchronously with the Chat API, or with the [custom name](./create-messages.md#name_a_created_message) assigned to the message at creation.

The Google Chat API gets the specified thread read state and returns an instance of [`ThreadReadState`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ThreadReadState).

## Related topics

- [Update the calling user's space read state](./update-space-read-state.md).
- [Get the calling user's space read state](./get-space-read-state.md).
