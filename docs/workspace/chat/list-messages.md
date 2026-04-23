---
source: https://developers.google.com/workspace/chat/list-messages
root: workspace
fetched_at: 2026-04-23T15:25:28.751Z
---

# List messages

## Page Summary

- This guide demonstrates how to retrieve a paginated, filterable list of messages within a Google Chat space using the `list()` method of the Google Chat API.
- The guide provides code samples in Node.js, Python, Java, and Apps Script to illustrate the process of listing messages.
- Before using the API, you must have a Google Workspace account, set up your environment with necessary credentials, and have a Google Chat space available.
- To successfully list messages, ensure you use the correct authorization scope (`chat.messages.readonly` or `chat.messages`) and replace `SPACE_NAME` with the actual space ID in the code samples.

This guide explains how to use the [`list()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListMessages) method on the `Message` resource of the Google Chat API to see a paginated, filterable list of messages in a space.

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
- A Google Chat space. To create one using the Google Chat API, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). To create one in Chat, visit the [Help Center documentation](https://support.google.com/chat/answer/12176488).

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
- A Google Chat space. To create one using the Google Chat API, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). To create one in Chat, visit the [Help Center documentation](https://support.google.com/chat/answer/12176488).

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
- A Google Chat space. To create one using the Google Chat API, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). To create one in Chat, visit the [Help Center documentation](https://support.google.com/chat/answer/12176488).

### Apps Script

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- [Create a standalone Apps Script project](https://developers.google.com/apps-script/guides/projects), and turn on the [Advanced Chat Service](https://developers.google.com/apps-script/advanced/chat).
		- In this guide, you must use either [user or app authentication](https://developers.google.com/workspace/chat/authenticate-authorize). To authenticate as the Chat app, create service account credentials. For steps, see [Authenticate and authorize as a Google Chat app](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.
- A Google Chat space. To create one using the Google Chat API, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). To create one in Chat, visit the [Help Center documentation](https://support.google.com/chat/answer/12176488).

## List messages as a user

To list messages with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.messages.readonly` or `chat.messages` authorization scope.
- Call the [`ListMessages()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListMessages) method.

The following example lists messages in a Chat space:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.messages.readonly',
];

// This sample shows how to list messages with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME here
    parent: 'spaces/SPACE_NAME',
  };

  // Make the request
  const pageResult = chatClient.listMessagesAsync(request);

  // Handle the response. Iterating over pageResult will yield results
  // and resolve additional pages automatically.
  for await (const response of pageResult) {
    console.log(response);
  }
}

await main();
```

### Python

```
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat

SCOPES = ["https://www.googleapis.com/auth/chat.messages.readonly"]

# This sample shows how to list messages with user credential
def list_messages_with_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.ListMessagesRequest(
        # Replace SPACE_NAME here
        parent = 'spaces/SPACE_NAME',
        # Number of results that will be returned at once
        page_size = 100
    )

    # Make the request
    page_result = client.list_messages(request)

    # Handle the response. Iterating over page_result will yield results and
    # resolve additional pages automatically.
    for response in page_result:
        print(response)

list_messages_with_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.ListMessagesRequest;
import com.google.chat.v1.ListMessagesResponse;
import com.google.chat.v1.Message;

// This sample shows how to list messages with user credential.
public class ListMessagesUserCred {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.messages.readonly";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      ListMessagesRequest.Builder request = ListMessagesRequest.newBuilder()
        // Replace SPACE_NAME here.
        .setParent("spaces/SPACE_NAME")
        // Number of results that will be returned at once.
        .setPageSize(10);

      // Iterate over results and resolve additional pages automatically.
      for (Message response :
          chatServiceClient.listMessages(request.build()).iterateAll()) {
        System.out.println(JsonFormat.printer().print(response));
      }
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to list messages with user credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.messages.readonly'
 * referenced in the manifest file (appsscript.json).
 */
function listMessagesUserCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME here
  const parent = "spaces/SPACE_NAME";

  // Iterate through the response pages using page tokens
  let responsePage;
  let pageToken = null;
  do {
    // Request response pages
    responsePage = Chat.Spaces.Messages.list(parent, {
      pageSize: 10,
      pageToken: pageToken,
    });
    // Handle response pages
    if (responsePage.messages) {
      for (const message of responsePage.messages) {
        console.log(message);
      }
    }
    // Update the page token to the next one
    pageToken = responsePage.nextPageToken;
  } while (pageToken);
}
```

To run this sample, replace `SPACE_NAME` with the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name) field. You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

The Chat API returns a [list of messages](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#listmessagesresponse) sent in the specified space. If there are no messages from the request, the Chat API response returns an empty object. When using a REST/HTTP interface, the response contains an empty JSON object, `{}`.

## List messages as a Chat app

App authentication requires one-time [administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app#admin-approval).

To list messages from a space with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) using the [Chat REST API](https://developers.google.com/workspace/chat/api/reference/rest), pass the following in your request:

- Specify one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.app.messages.readonly`
- Call the [`list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/list) on the [`messages` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages).
- Pass the `name` of the space to list messages from.

### Write a script that calls Chat API

Here's how to list messages with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and the [Chat REST API](https://developers.google.com/workspace/chat/api/reference/rest):

### Python

1. In your working directory, create a file named `chat_messages_list_app.py`.
2. Include the following code in `chat_messages_list_app.py`:
	```
	from google.oauth2 import service_account
	from apiclient.discovery import build
	# Define your app's authorization scopes.
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.app.messages.readonly"]
	def main():
	    '''
	    Authenticates with Chat API using app authentication,
	    then lists messages from a specified space.
	    '''
	    # Specify service account details.
	    creds = (
	        service_account.Credentials.from_service_account_file('credentials.json')
	        .with_scopes(SCOPES)
	    )
	    # Build a service endpoint for Chat API.
	    chat = build('chat', 'v1', credentials=creds)
	    # Use the service endpoint to call Chat API.
	    result = chat.spaces().messages().list(
	        # The space to list messages from.
	        #
	        # Replace SPACE_NAME with a space name.
	        # Obtain the space name from the spaces resource of Chat API,
	        # or from a space's URL.
	        parent='spaces/SPACE_NAME'
	    ).execute()
	    # Print Chat API's response in your command line interface.
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace the following:
	- `SPACE_NAME`: a space name, which you can obtain from the [`spaces.list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) in the Chat API, or from a space's URL.
4. In your working directory, build and run the sample:
	```
	python3 chat_messages_list_app.py
	```

The Chat API returns a [list of messages](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#listmessagesresponse) sent in the specified space. If there are no messages from the request, the Chat API response returns an empty object. When using a REST/HTTP interface, the response contains an empty JSON object, `{}`.

## Related topics

- [Format a message](https://developers.google.com/workspace/chat/format-messages).
- [Delete a message](https://developers.google.com/workspace/chat/delete-messages).
- [Get details about a message](https://developers.google.com/workspace/chat/get-messages).
- [Update a message](https://developers.google.com/workspace/chat/update-messages).
- [Send a message](https://developers.google.com/workspace/chat/create-messages).
