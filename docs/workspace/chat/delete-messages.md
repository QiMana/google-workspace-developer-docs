---
source: https://developers.google.com/workspace/chat/delete-messages
root: workspace
fetched_at: 2026-04-23T15:25:22.441Z
---

# Delete a message

## Page Summary

- This guide demonstrates how to delete text or card messages in Google Chat using the `delete()` method of the Google Chat API.
- You can delete messages sent by the Chat app or the authenticated user, and potentially messages sent by other space members if you are a space manager.
- Before using this method, you need a Google Workspace account, a Google Cloud project, and appropriate authorization credentials (user or app).
- Code samples are provided for Node.js, Python, Java, and Apps Script, showing how to delete messages with both user and app authentication.
- To successfully delete a message, you need the `name` of the space and the `name` of the message you want to delete.

This guide explains how to use the [`delete()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.DeleteMessage) method on the `Message` resource of the Google Chat API to delete a text or card message.

In the Chat API, a Chat message is represented by the [`Message` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages). While Chat users can only send messages that contain text, Chat apps can use many other messaging features, including displaying static or interactive user interfaces, collecting information from users, and delivering messages privately. To learn more about messaging features available for the Chat API, see the [Google Chat messages overview](https://developers.google.com/workspace/chat/messages-overview).

With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), you can use this method to delete a message that the Chat app sent. With [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), you can use this method to delete a message that the authenticated user sent. If the user is a space manager for the space, you might also be able to delete a message that other space members sent. For more information, see [Learn about your role as a Space Manager](https://support.google.com/chat/answer/11833441).

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

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Python [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=python#cloud-client-libraries).
		- Create access credentials based on how you want to authenticate in your Google Chat API request:
		- To authenticate as a Chat user, [create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and save the credentials as a JSON file named `credentials.json` to your local directory.
				- To authenticate as the Chat app, [create service account credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and save the credentials as a JSON file named `credentials.json`.
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.

### Java

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Java [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=java#cloud-client-libraries).
		- Create access credentials based on how you want to authenticate in your Google Chat API request:
		- To authenticate as a Chat user, [create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and save the credentials as a JSON file named `credentials.json` to your local directory.
				- To authenticate as the Chat app, [create service account credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and save the credentials as a JSON file named `credentials.json`.
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.

### Apps Script

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- [Create a standalone Apps Script project](https://developers.google.com/apps-script/guides/projects), and turn on the [Advanced Chat Service](https://developers.google.com/apps-script/advanced/chat).
		- In this guide, you must use either [user or app authentication](https://developers.google.com/workspace/chat/authenticate-authorize). To authenticate as the Chat app, create service account credentials. For steps, see [Authenticate and authorize as a Google Chat app](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.

## Delete a message with user authentication

To delete a message with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.messages` authorization scope.
- Call the [`DeleteMessage()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.DeleteMessage) method.
- Set `name` to the resource name of the message to delete.

The following example deletes a message with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user):

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.messages',
];

// This sample shows how to delete a message with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME and MESSAGE_NAME here
    name: 'spaces/SPACE_NAME/messages/MESSAGE_NAME',
  };

  // Make the request
  const response = await chatClient.deleteMessage(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat

SCOPES = ["https://www.googleapis.com/auth/chat.messages"]

# This sample shows how to delete a message with user credential
def delete_message_with_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.DeleteMessageRequest(
        # Replace SPACE_NAME and MESSAGE_NAME here
        name = "spaces/SPACE_NAME/messages/MESSAGE_NAME",
    )

    # Make the request
    response = client.delete_message(request)

    # Handle the response
    print(response)

delete_message_with_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.DeleteMessageRequest;
import com.google.chat.v1.SpaceName;

// This sample shows how to delete message with user credential.
public class DeleteMessageUserCred {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.messages";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      DeleteMessageRequest.Builder request = DeleteMessageRequest.newBuilder()
        // replace SPACE_NAME and MESSAGE_NAME here
        .setName("spaces/SPACE_NAME/messages/MESSAGE_NAME");
      chatServiceClient.deleteMessage(request.build());
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to delete a message with user credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.messages'
 * referenced in the manifest file (appsscript.json).
 */
function deleteMessageUserCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME and MESSAGE_NAME here
  const name = "spaces/SPACE_NAME/messages/MESSAGE_NAME";

  // Make the request
  const response = Chat.Spaces.Messages.remove(name);

  // Handle the response
  console.log(response);
}
```

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MESSAGE_NAME`: the ID from the message's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID from the response body returned after creating a message asynchronously with the Chat API, or with the [custom name](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) assigned to the message at creation.

If successful, the response body is empty, which indicates that the message is deleted.

## Delete a message with app authentication

To delete a message with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), pass the following in your request:

- Specify the `chat.bot` authorization scope.
- Call the [`DeleteMessage()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.DeleteMessage) method.
- Set `name` to the resource name of the message to delete.

The following example deletes a message with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app):

### Node.js

```
import {createClientWithAppCredentials} from './authentication-utils.js';

// This sample shows how to delete a message with app credential
async function main() {
  // Create a client
  const chatClient = createClientWithAppCredentials();

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME and MESSAGE_NAME here
    name: 'spaces/SPACE_NAME/messages/MESSAGE_NAME',
  };

  // Make the request
  const response = await chatClient.deleteMessage(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_app_credentials
from google.apps import chat_v1 as google_chat

# This sample shows how to delete a message with app credential
def delete_message_with_app_cred():
    # Create a client
    client = create_client_with_app_credentials()

    # Initialize request argument(s)
    request = google_chat.DeleteMessageRequest(
        # Replace SPACE_NAME and MESSAGE_NAME here
        name = "spaces/SPACE_NAME/messages/MESSAGE_NAME",
    )

    # Make the request
    response = client.delete_message(request)

    # Handle the response
    print(response)

delete_message_with_app_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.DeleteMessageRequest;

// This sample shows how to delete message with app credential.
public class DeleteMessageAppCred {

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithAppCredentials()) {
      DeleteMessageRequest.Builder request = DeleteMessageRequest.newBuilder()
        // replace SPACE_NAME and MESSAGE_NAME here
        .setName("spaces/SPACE_NAME/messages/MESSAGE_NAME");
      chatServiceClient.deleteMessage(request.build());
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to delete a message with app credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot'
 * used by service accounts.
 */
function deleteMessageAppCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME and MESSAGE_NAME here
  const name = "spaces/SPACE_NAME/messages/MESSAGE_NAME";
  const parameters = {};

  // Make the request
  const response = Chat.Spaces.Messages.remove(
    name,
    parameters,
    getHeaderWithAppCredentials(),
  );

  // Handle the response
  console.log(response);
}
```

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MESSAGE_NAME`: the ID from the message's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID from the response body returned after creating a message asynchronously with the Chat API, or with the [custom name](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) assigned to the message at creation.

If successful, the response body is empty, which indicates that the message is deleted.

## Related topics

- [Format a message](https://developers.google.com/workspace/chat/format-messages).
- [Get details about a message](https://developers.google.com/workspace/chat/get-messages).
- [List messages in a space](https://developers.google.com/workspace/chat/list-messages).
- [Update a message](https://developers.google.com/workspace/chat/update-messages).
- [Send a message](https://developers.google.com/workspace/chat/create-messages).
