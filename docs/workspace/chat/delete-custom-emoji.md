---
source: https://developers.google.com/workspace/chat/delete-custom-emoji
root: workspace
fetched_at: 2026-04-23T15:25:22.180Z
---

# Delete a custom emoji

This guide explains how to use the [`delete`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.DeleteCustomEmoji) method on the [`CustomEmoji`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.CustomEmoji) resource of the Google Chat API to delete a custom emoji in a Google Workspace organization.

By default, users can only delete custom emoji they created. [Emoji managers](https://support.google.com/a/answer/12850085) assigned by the administrator can delete any custom emoji in the organization.

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

## Delete a custom emoji

To delete a custom emoji with [user authentication](./authenticate-authorize-chat-user.md), pass the following in your request:

- Specify the `chat.customemojis` authorization scope.
- Call the [`DeleteCustomEmoji()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.DeleteCustomEmoji) method.
	- In the request body, set `name` to the resource name of the custom emoji to delete.

The following example deletes a custom emoji.

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.customemojis',
];

// This sample shows how to delete a custom emoji with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // TODO(developer): Replace EMOJI_NAME here.
    name: 'customEmojis/EMOJI_NAME',
  };

  // Make the request
  const response = await chatClient.deleteCustomEmoji(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace the following:

- `EMOJI_NAME`: the unique name for your custom emoji, in the [`emoji_name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.CustomEmoji.FIELDS.string.google.chat.v1.CustomEmoji.emoji_name) field. You can obtain the ID by calling the [`ListCustomEmoji`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListCustomEmoji) method, or from the response body returned after creating a custom emoji asynchronously with the Chat API.

## Related topics

- [Create a custom emoji](./create-custom-emoji.md)
- [Get details about a custom emoji](./get-custom-emoji.md)
- [List custom emojis in an organization](./list-custom-emojis.md)
