---
source: https://developers.google.com/workspace/chat/get-space-read-state
root: workspace
fetched_at: 2026-04-23T15:25:26.825Z
---

# Get details about a user's space read state

## Page Summary

- This guide explains how to use the `get()` method to retrieve a user's read state within a Google Chat space using the Google Chat API.
- You need a Google Workspace account and a configured Google Cloud project with the Google Chat API enabled to use this functionality.
- The guide provides instructions and code samples (Node.js) to retrieve the calling user's space read state using the `GetSpaceReadState()` method.
- To get the read state, you need to specify the appropriate authorization scope and provide the space name in the request.
- For message-specific read states within a thread, refer to the separate guide on getting thread read states.

This guide explains how to use the [`get()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetSpaceReadState) method on the `SpaceReadState` resource of the Google Chat API to get details about a user's read state within a space. To get the read state of a message in a message thread, see [Get details about a user's thread read state](./get-thread-read-state.md).

The [`SpaceReadState` resource](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceReadState) is a singleton resource that represents details about a specified user's last read message in a Google Chat space.

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

## Get the calling user's space read state

To get details about a user's read state within a space, include the following in your request:

- Specify the `chat.users.readstate` or `chat.users.readstate.readonly` authorization scope.
- Call the [`GetSpaceReadState()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetSpaceReadState) method, passing the `name` of the space read state to get which includes a user ID or alias and a space ID. Getting space read state only supports getting the read state of the calling user, which can be specified by setting one of the following:
	- The `me` alias. For example, `users/me/spaces/SPACE/spaceReadState`.
		- The calling user's Workspace email address. For example, `users/user@example.com/spaces/SPACE/spaceReadState`.
		- The calling user's user ID. For example, `users/USER/spaces/SPACE/spaceReadState`.

The following example gets the calling user's space read state:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.users.readstate.readonly',
];

// This sample shows how to get the space read state for the calling user
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME here
    name: 'users/me/spaces/SPACE_NAME/spaceReadState',
  };

  // Make the request
  const response = await chatClient.getSpaceReadState(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace `SPACE_NAME` with the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

The Google Chat API gets the specified space read state and returns an instance of [`SpaceReadState`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceReadState).

## Related topics

- [Update the calling user's space read state](./update-space-read-state.md).
- [Get the calling user's thread read state](./get-thread-read-state.md).
