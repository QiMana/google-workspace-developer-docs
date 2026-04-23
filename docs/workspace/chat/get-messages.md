---
source: https://developers.google.com/workspace/chat/get-messages
root: workspace
fetched_at: 2026-04-23T15:25:26.509Z
---

# Get details about a message

## Page Summary

- This guide demonstrates how to retrieve details about a text or card message using the `get()` method of the Google Chat API's `Message` resource.
- You can use either user authentication (with `chat.messages.readonly` or `chat.messages` scope) or app authentication (with `chat.bot` scope) to retrieve message details.
- To retrieve a message, you'll need the `name` of the message, which includes the space ID and the message ID.
- Code samples are provided in Node.js, Python, Java, and Apps Script to illustrate the process of getting a message.
- After a successful request, the Chat API returns a `Message` object containing the details of the specified message.

This guide explains how to use the [`get()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.GetMessage) method on the `Message` resource of the Google Chat API to return details about a text or card message.

In the Chat API, a Chat message is represented by the [`Message` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages). While Chat users can only send messages that contain text, Chat apps can use many other messaging features, including displaying static or interactive user interfaces, collecting information from users, and delivering messages privately. To learn more about messaging features available for the Chat API, see the [Google Chat messages overview](https://developers.google.com/workspace/chat/messages-overview).

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
- A [Google Chat space](https://developers.google.com/workspace/chat/set-up-spaces) where the authenticated user or calling Chat app is a member. To authenticate as the Chat app, [add the Chat app to the space](https://developers.google.com/workspace/chat/test-interactive-features).

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
- A [Google Chat space](https://developers.google.com/workspace/chat/set-up-spaces) where the authenticated user or calling Chat app is a member. To authenticate as the Chat app, [add the Chat app to the space](https://developers.google.com/workspace/chat/test-interactive-features).

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
- A [Google Chat space](https://developers.google.com/workspace/chat/set-up-spaces) where the authenticated user or calling Chat app is a member. To authenticate as the Chat app, [add the Chat app to the space](https://developers.google.com/workspace/chat/test-interactive-features).

### Apps Script

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- [Create a standalone Apps Script project](https://developers.google.com/apps-script/guides/projects), and turn on the [Advanced Chat Service](https://developers.google.com/apps-script/advanced/chat).
		- In this guide, you must use either [user or app authentication](https://developers.google.com/workspace/chat/authenticate-authorize). To authenticate as the Chat app, create service account credentials. For steps, see [Authenticate and authorize as a Google Chat app](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.
- A [Google Chat space](https://developers.google.com/workspace/chat/set-up-spaces) where the authenticated user or calling Chat app is a member. To authenticate as the Chat app, [add the Chat app to the space](https://developers.google.com/workspace/chat/test-interactive-features).

## Get a message with user authentication

To get details about a message with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.messages.readonly` or `chat.messages` authorization scope.
- Call the [`GetMessage()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.GetMessage) method.
- Set `name` to the resource name of the message to get.

The following example gets a message with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user):

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.messages.readonly',
];

// This sample shows how to get message with user credential
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
  const response = await chatClient.getMessage(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_user_credentials
import google.oauth2.credentials

from google.apps import chat_v1 as google_chat

SCOPES = ["https://www.googleapis.com/auth/chat.messages.readonly"]

# This sample shows how to get message with user credential
def get_message_with_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.GetMessageRequest(
        # Replace SPACE_NAME and MESSAGE_NAME here
        name = "spaces/SPACE_NAME/messages/MESSAGE_NAME",
    )

    # Make the request
    response = client.get_message(request)

    # Handle the response
    print(response)

get_message_with_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.GetMessageRequest;
import com.google.chat.v1.Message;

// This sample shows how to get message with user credential.
public class GetMessageUserCred {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.messages.readonly";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      GetMessageRequest.Builder request = GetMessageRequest.newBuilder()
        // replace SPACE_NAME and MESSAGE_NAME here
        .setName("spaces/SPACE_NAME/members/MESSAGE_NAME");
      Message response = chatServiceClient.getMessage(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to get message with user credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.messages.readonly'
 * referenced in the manifest file (appsscript.json).
 */
function getMessageUserCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME and MESSAGE_NAME here
  const name = "spaces/SPACE_NAME/messages/MESSAGE_NAME";

  // Make the request
  const response = Chat.Spaces.Messages.get(name);

  // Handle the response
  console.log(response);
}
```

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MESSAGE_NAME`: the ID from the message's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID from the response body returned after creating a message asynchronously with the Chat API, or with the [custom name](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) assigned to the message at creation.

The Chat API returns an instance of [`Message`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#message) that details the specified message.

## Get a message with app authentication

To get details about a message with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), pass the following in your request:

- Specify an authorization scope. The examples in this section use the `chat.bot` scope, which is generally available and doesn't require administrator approval. Alternatively, you can [authorize as Chat app with administrator approval](#get-message-admin-app-auth).
- Call the [`GetMessage()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.GetMessage) method.
- Set `name` to the resource name of the message to get.

The following example gets a message with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app):

### Node.js

```
import {createClientWithAppCredentials} from './authentication-utils.js';

// This sample shows how to get message with app credential
async function main() {
  // Create a client
  const chatClient = createClientWithAppCredentials();

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME and MESSAGE_NAME here
    name: 'spaces/SPACE_NAME/messages/MESSAGE_NAME',
  };

  // Make the request
  const response = await chatClient.getMessage(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_app_credentials
from google.apps import chat_v1 as google_chat

# This sample shows how to get message with app credential
def get_message_with_app_cred():
    # Create a client
    client = create_client_with_app_credentials()

    # Initialize request argument(s)
    request = google_chat.GetMessageRequest(
        # Replace SPACE_NAME and MESSAGE_NAME here
        name = 'spaces/SPACE_NAME/messages/MESSAGE_NAME',
    )

    # Make the request
    response = client.get_message(request=request)

    # Handle the response
    print(response)

get_message_with_app_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.GetMessageRequest;
import com.google.chat.v1.Message;

// This sample shows how to get message with app credential.
public class GetMessageAppCred {

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithAppCredentials()) {
      GetMessageRequest.Builder request = GetMessageRequest.newBuilder()
        // replace SPACE_NAME and MESSAGE_NAME here
        .setName("spaces/SPACE_NAME/members/MESSAGE_NAME");
      Message response = chatServiceClient.getMessage(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to get message with app credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot'
 * used by service accounts.
 */
function getMessageAppCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME and MESSAGE_NAME here
  const name = "spaces/SPACE_NAME/messages/MESSAGE_NAME";
  const parameters = {};

  // Make the request
  const response = Chat.Spaces.Messages.get(
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

The Chat API returns an instance of [`Message`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#message) that details the specified message.

## Get a message as a Chat app with administrator approval

App authentication with a `chat.app.*` authorization scope requires one-time [administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app#admin-approval).

To get details about a message with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) using the [Chat REST API](https://developers.google.com/workspace/chat/api/reference/rest), pass the following in your request:

- Call the [`GetMessage()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.GetMessage) method.
- Specify the `chat.app.messages.readonly` authorization scope.
- Set `name` to the resource name of the message to get.

### Write a script that calls Chat API

Here's how to get details about a message with [app authentication and administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and the [Chat REST API](https://developers.google.com/workspace/chat/api/reference/rest):

### Python

1. In your working directory, create a file named `chat_messages_get_admin_app.py`.
2. Include the following code in `chat_messages_get_admin_app.py`:
	```
	from google.oauth2 import service_account
	from apiclient.discovery import build
	# Define your app's authorization scopes.
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.app.messages.readonly"]
	def main():
	    '''
	    Authenticates with Chat API using app authentication,
	    then gets details about a message.
	    '''
	    # Specify service account details.
	    creds = (
	        service_account.Credentials.from_service_account_file('credentials.json')
	        .with_scopes(SCOPES)
	    )
	    # Build a service endpoint for Chat API.
	    chat = build('chat', 'v1', credentials=creds)
	    # Use the service endpoint to call Chat API.
	    result = chat.spaces().messages().get(
	        # The message to get details about.
	        #
	        # Replace SPACE_NAME with a space name.
	        # Obtain the space name from the spaces resource of Chat API,
	        # or from a space's URL.
	        name='spaces/SPACE_NAME/messages/MESSAGE_NAME',
	    ).execute()
	    # Print Chat API's response in your command line interface.
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace the following:
	- `SPACE_NAME`: the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
		- `MESSAGE_NAME`: the ID from the message's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID from the response body returned after creating a message asynchronously with the Chat API, or with the [custom name](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) assigned to the message at creation.
4. In your working directory, build and run the sample:
	```
	python3 chat_messages_get_admin_app.py
	```

The Chat API returns an instance of [`Message`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#message) that details the specified message.

## Related topics

- [Format a message](https://developers.google.com/workspace/chat/format-messages).
- [Delete a message](https://developers.google.com/workspace/chat/delete-messages).
- [List messages in a space](https://developers.google.com/workspace/chat/list-messages).
- [Update a message](https://developers.google.com/workspace/chat/update-messages).
- [Send a message](https://developers.google.com/workspace/chat/create-messages).
