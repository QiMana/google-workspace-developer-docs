---
source: https://developers.google.com/workspace/chat/get-space-notification-setting
root: workspace
fetched_at: 2026-04-23T15:25:26.691Z
---

# Get a user's space notification settings

This guide explains how to use the [`get()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetSpaceNotificationSetting) method on the `SpaceNotificationSetting` resource of the Google Chat API to get a user's space notification settings.

The [`SpaceNotificationSetting` resource](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceNotificationSetting) is a singleton resource that represents details about a specified user's space notification settings.

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

## Get the calling user's space notification settings

To get details about a user's space notification settings, include the following in your request:

- Specify the `chat.users.spacesettings` authorization scope.
- Call the [`GetSpaceNotificationSetting()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetSpaceNotificationSetting) method, passing the `name` of the space notification settings to get which includes a user ID or alias and a space ID. You can only get notification settings for the calling user. To specify the settings, use one of the following:
	- The `me` alias. For example, `users/me/spaces/SPACE_ID/spaceNotificationSetting`.
		- The calling user's Google Workspace email address. For example, `users/user@example.com/spaces/SPACE_ID/spaceNotificationSetting`.
		- The calling user's user ID. For example, `users/USER/spaces/SPACE/spaceNotificationSetting`.

The following example gets the calling user's space notification settings:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.users.spacesettings',
];

// This sample shows how to get the space notification setting for the calling
// user
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s), replace the SPACE_NAME with an actual space
  // name.
  const request = {
    name: 'users/me/spaces/SPACE_NAME/spaceNotificationSetting',
  };

  // Make the request
  const response = await chatClient.getSpaceNotificationSetting(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace `SPACE_ID` with the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

The Google Chat API gets the specified space notification settings and returns an instance of [`SpaceNotificationSetting`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceNotificationSetting).

## Related topics

- [Update the calling user's space notification setting](./update-space-notification-setting.md).
