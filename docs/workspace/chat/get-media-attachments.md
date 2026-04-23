---
source: https://developers.google.com/workspace/chat/get-media-attachments
root: workspace
fetched_at: 2026-04-23T15:25:25.896Z
---

# Get metadata about a message attachment

## Page Summary

- This guide explains how to retrieve metadata about a message attachment in Google Chat using the `get()` method.
- The `Attachment` resource represents an instance of a file attached to a message and includes metadata like its location.
- To get attachment metadata, you need to use the `chat.bot` authorization scope and call the `GetAttachment()` method with the attachment's name.
- Prerequisites include a Google Workspace account, a Google Cloud project, and Node.js setup with necessary libraries and credentials.

This guide explains how to use the [`get()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.GetAttachment) method on the `Attachment` resource of the Google Chat API to get metadata about a message attachment. The response is an instance of the [`Attachment` resource](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Attachment).

When the user sends a message to your app, Google Chat dispatches a [`MESSAGE` interaction event](https://developers.google.com/workspace/chat/events#message). The interaction event received by your app includes a request body, which is the JSON payload representing the interaction event, including any attachments. The data in the attachment is different depending on whether the attachment is uploaded content (a local file) or is a file stored on Drive. The [`Media` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/media) represents a file uploaded to Google Chat, like images, videos, and documents. The [`Attachment` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments) represents an instance of media—a file—attached to a message. The `Attachment` resource includes the metadata about the attachment, such as where it's saved.

## Prerequisites

### Node.js

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Node.js [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=nodejs#cloud-client-libraries).
		- [Create service account credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app#create-service-account). To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) that supports app authentication.

## Get a message attachment

To asynchronously get metadata about a message attachment in Google Chat, pass the following in your request:

- Specify the `chat.bot` authorization scope.
- Call the [`GetAttachment()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.GetAttachment) method, passing the `name` of the message attachment.

Here's how to get metadata about a message attachment:

### Node.js

```
import {createClientWithAppCredentials} from './authentication-utils.js';

// This sample shows how to get attachment metadata with app
// credential
async function main() {
  // Create a client
  const chatClient = createClientWithAppCredentials();

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME, MESSAGE_NAME, and ATTACHMENT_NAME here
    name: 'spaces/SPACE_NAME/messages/MESSAGE_NAME/attachments/ATTACHMENT_NAME',
  };

  // Make the request
  const response = await chatClient.getAttachment(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace `spaces/SPACE_NAME/messages/ MESSAGE_NAME/attachments/ATTACHMENT_NAME` with the message attachment name.

The Chat API returns an instance of [`Attachment`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Attachment) that details the metadata about the specified message attachment.

## Related topics

- [Upload media as a file attachment](https://developers.google.com/workspace/chat/upload-media-attachments)
- [Download media as a file attachment](https://developers.google.com/workspace/chat/download-media-attachments)
