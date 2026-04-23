---
source: https://developers.google.com/workspace/chat/create-custom-emoji
root: workspace
fetched_at: 2026-04-23T15:25:18.743Z
---

# Create a custom emoji

This guide explains how to use the [`create`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateCustomEmoji) method on the [`CustomEmoji`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.CustomEmoji) resource of the Google Chat API to create a new custom emoji in a Google Workspace organization.

Custom emojis are only available for Google Workspace accounts, and your administrator must turn custom emoji on for your organization. For more information, see [Learn about custom emoji in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085).

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

## Create a custom emoji

To create a custom emoji with [user authentication](./authenticate-authorize-chat-user.md), pass the following in your request:

- Specify the `chat.customemojis` authorization scope.
- Call the [`CreateCustomEmoji`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateCustomEmoji) method.
- In the request body, provide a `CustomEmoji` resource, setting the `emojiName` (a unique identifier you choose for the emoji) and `payload` (image content you choose for the emoji).

The following example creates a custom emoji:

### Node.js

```
import fs from 'node:fs';
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.customemojis',
];

// This sample shows how to create custom emoji with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // TODO(developer) Replace FILENAME here.
  const filename = 'FILENAME';
  // Read custom emoji file content into a base64 encoded string.
  const fileContent = fs.readFileSync(filename, {encoding: 'base64'});

  // Initialize request argument(s)
  const request = {
    custom_emoji: {
      // TODO(developer): Replace EMOJI_NAME here.
      emoji_name: 'EMOJI_NAME',
      payload: {
        file_content: fileContent,
        filename,
      },
    },
  };

  // Make the request
  const response = await chatClient.createCustomEmoji(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace the following:

- `FILENAME`: A filename of the image.
- `EMOJI_NAME`: A unique name for your custom emoji, like `:smiley-face:`.

The Chat API returns an instance of [`CustomEmoji`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.CustomEmoji) that details the custom emoji that was created.

## Related topics

- [Delete a custom emoji](./delete-custom-emoji.md)
- [Get details about a custom emoji](./get-custom-emoji.md)
- [List custom emojis in an organization](./list-custom-emojis.md)
