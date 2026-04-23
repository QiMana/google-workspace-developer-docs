---
source: https://developers.google.com/workspace/chat/delete-spaces
root: workspace
fetched_at: 2026-04-23T15:25:24.176Z
---

# Delete a space

## Page Summary

- This guide explains how to delete a Google Chat space and its contents (messages, attachments) using the `delete()` method.
- Google Workspace administrators can delete any named space within their organization.
- Prerequisites include a Google Workspace account, a Google Cloud project, and necessary API configurations.
- Two deletion methods are outlined: one using user authentication for personal spaces and another using app authentication (developer preview) for app-created spaces.
- Google Workspace administrators have the additional capability to delete any named space using admin privileges.

This guide explains how use the [`delete()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.DeleteSpace) method on the `Space` resource of the Google Chat API to delete a named space when it's no longer needed. Deleting a space also deletes everything that it contains, including messages and attachments.

If you're a Google Workspace administrator, you can call the `delete()` method to delete any named space in your Google Workspace organization.

The [`Space` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) represents a place where people and Chat apps can send messages, share files, and collaborate. There are several types of spaces:

- Direct messages (DMs) are conversations between two users or a user and a Chat app.
- Group chats are conversations between three or more users and Chat apps.
- Named spaces are persistent places where people send messages, share files, and collaborate.

## Prerequisites

### Node.js

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Node.js [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=nodejs#cloud-client-libraries).
		- [Create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
	For guidance, complete the steps for setting up your environment in this [quickstart](https://developers.google.com/workspace/chat/api/guides/quickstart/nodejs#set-up-environment).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) that supports user authentication.
- A Google Chat space. To create one using the Google Chat API, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). To create one in Chat, visit the [Help Center documentation](https://support.google.com/chat/answer/12176488).

## Delete a named space as a user

To delete an existing space in Google Chat with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.delete` authorization scope.
- Call the [`DeleteSpace()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.DeleteSpace) method.
- Pass the `name` of the space to delete.

Here's how to delete a space:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = ['https://www.googleapis.com/auth/chat.delete'];

// This sample shows how to delete a space with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME here
    name: 'spaces/SPACE_NAME',
  };

  // Make the request
  const response = await chatClient.deleteSpace(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace `SPACE_NAME` with the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name) field. You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

## Delete a named space as a Chat app

App authentication requires one-time [administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app#admin-approval).

With app authentication, you can only delete spaces created by Chat apps.

To delete an existing space in Google Chat with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), pass the following in your request:

- Specify the `chat.app.delete` authorization scope.
- Call the [`delete` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/delete) on the [`Space` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces).
- Pass the `name` of the space to delete.

### Write a script that calls Chat API

Here's how to delete a space:

### Python

1. In your working directory, create a file named `chat_space_delete_app.py`.
2. Include the following code in `chat_space_delete_app.py`:
	```
	from google.oauth2 import service_account
	from apiclient.discovery import build
	# Define your app's authorization scopes.
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.app.delete"]
	def main():
	    '''
	    Authenticates with Chat API using app authentication,
	    then deletes the specified space.
	    '''
	    # Specify service account details.
	    creds = (
	        service_account.Credentials.from_service_account_file('credentials.json')
	        .with_scopes(SCOPES)
	    )
	    # Build a service endpoint for Chat API.
	    chat = build('chat', 'v1', credentials=creds)
	    # Use the service endpoint to call Chat API.
	    result = chat.spaces().delete(
	          # The space to delete.
	          #
	          # Replace SPACE with a space name.
	          # Obtain the space name from the spaces resource of Chat API,
	          # or from a space's URL.
	          name='spaces/SPACE'
	      ).execute()
	    # Print Chat API's response in your command line interface.
	    # When deleting a space, the response body is empty.
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace the following:
	- `SPACE` with the space name, which you can obtain from the [`spaces.list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) in the Chat API, or from a space's URL.
4. In your working directory, build and run the sample:
	```
	python3 chat_space_delete_app.py
	```

If successful, the response body is empty, which indicates that the space is deleted.

## Delete a named space as a Google Workspace administrator

If you're a Google Workspace administrator, you can call the `DeleteSpace()` method to delete any named space in your Google Workspace organization.

To call this method as a Google Workspace administrator, do the following:

- Call the method using user authentication, and specify an [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) that supports calling the method using [administrator privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges).
- In your request, specify the query parameter `useAdminAccess` to `true`.

For more information and examples, see [Manage Google Chat spaces as a Google Workspace administrator](https://developers.google.com/workspace/chat/admin-overview).

## Related topics

- [Create a space](https://developers.google.com/workspace/chat/create-spaces)
- [Get details about a space](https://developers.google.com/workspace/chat/get-spaces).
- [List spaces](https://developers.google.com/workspace/chat/list-spaces).
- [Update a space](https://developers.google.com/workspace/chat/update-spaces).
- [Delete a space](https://developers.google.com/workspace/chat/delete-spaces).
- [Set up a space](https://developers.google.com/workspace/chat/set-up-spaces).
- [Find a direct message space](https://developers.google.com/workspace/chat/find-direct-message-in-spaces).
