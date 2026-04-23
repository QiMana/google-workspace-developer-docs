---
source: https://developers.google.com/workspace/chat/delete-custom-emoji
root: workspace
fetched_at: 2026-04-23T15:25:22.180Z
---

# Delete a custom emoji

This guide explains how to use the [`delete`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.DeleteCustomEmoji) method on the [`CustomEmoji`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.CustomEmoji) resource of the Google Chat API to delete a custom emoji in a Google Workspace organization.

By default, users can only delete custom emoji they created. [Emoji managers](https://support.google.com/a/answer/12850085) assigned by the administrator can delete any custom emoji in the organization.

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

## Delete a custom emoji

To delete a custom emoji with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.customemojis` authorization scope.
- Call the [`DeleteCustomEmoji()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.DeleteCustomEmoji) method.
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

- `EMOJI_NAME`: the unique name for your custom emoji, in the [`emoji_name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.CustomEmoji.FIELDS.string.google.chat.v1.CustomEmoji.emoji_name) field. You can obtain the ID by calling the [`ListCustomEmoji`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListCustomEmoji) method, or from the response body returned after creating a custom emoji asynchronously with the Chat API.

## Related topics

- [Create a custom emoji](https://developers.google.com/workspace/chat/create-custom-emoji)
- [Get details about a custom emoji](https://developers.google.com/workspace/chat/get-custom-emoji)
- [List custom emojis in an organization](https://developers.google.com/workspace/chat/list-custom-emojis)
