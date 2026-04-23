---
source: https://developers.google.com/workspace/chat/update-space-read-state
root: workspace
fetched_at: 2026-04-23T15:25:39.356Z
---

# Update a user's space read state

## Page Summary

- This guide explains how to use the `update()` method to mark Google Chat spaces as read or unread.
- The `SpaceReadState` resource stores a user's last read message details in a space.
- To update read state, use the `UpdateSpaceReadState()` method with the `lastReadTime` field.
- You need a Google Workspace account and a configured Google Chat API to use this functionality.
- Node.js code samples and related topics are provided for practical implementation.

This guide explains how to use the [`update()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.UpdateSpaceReadState) method on the `SpaceReadState` resource of the Google Chat API to mark spaces as read or unread.

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

## Update the calling user's space read state

To update a user's read state within a space, include the following in your request:

- Specify the `chat.users.readstate` authorization scope.
- Call the [`UpdateSpaceReadState()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.UpdateSpaceReadState) method.
- Pass `updateMask` with the value `lastReadTime`.
- Pass `spaceReadState` as an instance of [`SpaceReadState`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceReadState) with the following:
	- The `name` field set to the space read state to update, which includes a user ID or alias and a space ID. Updating space read state only supports updating the read state of the calling user, which can be specified by setting one of the following:
		- The `me` alias. For example, `users/me/spaces/SPACE/spaceReadState`.
				- The calling user's Workspace email address. For example, `users/user@example.com/spaces/SPACE/spaceReadState`.
				- The calling user's user ID. For example, `users/USER/spaces/SPACE/spaceReadState`.
		- The `lastReadTime` field set to the updated value of the time when the user's space read state was updated. Usually this corresponds with either the timestamp of the last read message, or a timestamp specified by the user to mark the last read position in a space. When the `lastReadTime` is before the latest message create time, the space appears as unread in the UI. To mark the space as read, set `lastReadTime` to any value later (larger) than the latest message create time. The `lastReadTime` is coerced to match the latest message create time. Note that the space read state only affects the read state of messages that are visible in the space's top-level conversation. Replies in threads are unaffected by this timestamp, and instead rely on the thread read state.

The following example updates the calling user's space read state:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.users.readstate',
];

// This sample shows how to update a space read state for the calling user
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const timestamp = new Date('2000-01-01').getTime();
  const request = {
    spaceReadState: {
      // Replace SPACE_NAME here
      name: 'users/me/spaces/SPACE_NAME/spaceReadState',
      lastReadTime: {
        seconds: Math.floor(timestamp / 1000),
        nanos: (timestamp % 1000) * 1000000,
      },
    },
    updateMask: {
      // The field paths to update.
      paths: ['last_read_time'],
    },
  };

  // Make the request
  const response = await chatClient.updateSpaceReadState(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace `SPACE_NAME` with the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

The Google Chat API updates the specified space read state and returns an instance of [`SpaceReadState`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceReadState).

## Related topics

- [Get the calling user's space read state](./get-space-read-state.md).
- [Get the calling user's thread read state](./get-thread-read-state.md).
