---
source: https://developers.google.com/workspace/chat/list-custom-emojis
root: workspace
fetched_at: 2026-04-23T15:25:27.762Z
---

# List custom emojis in an organization

This guide explains how to use the [`list`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListCustomEmojis) method on the [`CustomEmoji`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.CustomEmoji) resource of the Google Chat API to list custom emoji visible to the authenticated user in a Google Workspace organization.

Custom emojis are only available for Google Workspace accounts, and your administrator must turn custom emoji on for your organization. For more information, see [Learn about custom emoji in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

## Prerequisites

### Node.js

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Node.js [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=nodejs#cloud-client-libraries).
		- Create access credentials based on how you want to authenticate in your Google Chat API request:
		- To authenticate as a Chat user, [create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and save the credentials as a JSON file named `credentials.json` to your local directory.
				- To authenticate as the Chat app, [create service account credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and save the credentials as a JSON file named `credentials.json`.
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.

## List custom emoji in an organization

To list custom emoji in an organization with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.customemojis` authorization scope.
- Call the [`ListCustomEmojis`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListCustomEmojis) method.

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

- [Create a custom emoji](https://developers.google.com/workspace/chat/create-custom-emoji)
- [Delete a custom emoji](https://developers.google.com/workspace/chat/delete-custom-emoji)
- [Get details about a custom emoji](https://developers.google.com/workspace/chat/get-custom-emoji)
