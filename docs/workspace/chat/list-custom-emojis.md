---
source: https://developers.google.com/workspace/chat/list-custom-emojis
root: workspace
fetched_at: 2026-04-23T15:25:27.762Z
---

# List custom emojis in an organization

This guide explains how to use the [`list`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListCustomEmojis) method on the [`CustomEmoji`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.CustomEmoji) resource of the Google Chat API to list custom emoji visible to the authenticated user in a Google Workspace organization.

Custom emojis are only available for Google Workspace accounts, and your administrator must turn custom emoji on for your organization. For more information, see [Learn about custom emoji in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

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

## List custom emoji in an organization

To list custom emoji in an organization with [user authentication](./authenticate-authorize-chat-user.md), pass the following in your request:

- Specify the `chat.customemojis` authorization scope.
- Call the [`ListCustomEmojis`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListCustomEmojis) method.

The following example list custom emoji in an organization.

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.customemojis',
];

// This sample shows how to get custom emoji with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Optional. Replace FILTER here
    filter: 'FILTER',
  };

  // Make the request
  const pageResult = await chatClient.listCustomEmojisAsync(request);

  // Handle the response. Iterating over pageResult will yield results and
  // resolve additional pages automatically.
  for await (const response of pageResult) {
    console.log(response);
  }
}

await main();
```

To run this sample, replace the following:

- `FILTER`: Optional, the filter to apply to the list request.

## Related topics

- [Create a custom emoji](./create-custom-emoji.md)
- [Delete a custom emoji](./delete-custom-emoji.md)
- [Get details about a custom emoji](./get-custom-emoji.md)
