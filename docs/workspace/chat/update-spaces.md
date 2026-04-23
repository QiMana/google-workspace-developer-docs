---
source: https://developers.google.com/workspace/chat/update-spaces
root: workspace
fetched_at: 2026-04-23T15:25:39.248Z
---

# Update a space

## Page Summary

- This guide explains how to update a Google Chat space using the `patch()` method of the Google Chat API to change attributes like display name, description, and guidelines.
- Workspace administrators can update any space within their organization, while regular users can update spaces they have access to.
- The guide provides code samples in Node.js, Python, Java, and Apps Script for updating spaces with user authentication.
- It also covers updating spaces as a Google Workspace administrator using administrator privileges.
- **Developer Preview:** Chat apps can also update spaces they created using app authentication with the `chat.app.spaces` scope and an API key.

This guide explains how to use the [`patch()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.UpdateSpace) method on the `Space` resource of the Google Chat API to update a space. Update a space to change attributes about a space, like its user-visible display name, description, and guidelines.

If you're a Google Workspace administrator, you can call the `patch()` method to update any existing space in your Google Workspace organization.

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

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Python [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=python#cloud-client-libraries).
		- [Create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
	For guidance, complete the steps for setting up your environment in this [quickstart](https://developers.google.com/workspace/chat/api/guides/quickstart/python#set-up-environment).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) that supports user authentication.
- A Google Chat space. To create one using the Google Chat API, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). To create one in Chat, visit the [Help Center documentation](https://support.google.com/chat/answer/12176488).

### Java

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Java [Cloud Client Library](https://developers.google.com/workspace/chat/libraries?tab=java#cloud-client-libraries).
		- [Create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
	For guidance, complete the steps for setting up your environment in this [quickstart](https://developers.google.com/workspace/chat/api/guides/quickstart/java#set-up-environment).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) that supports user authentication.
- A Google Chat space. To create one using the Google Chat API, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). To create one in Chat, visit the [Help Center documentation](https://support.google.com/chat/answer/12176488).

### Apps Script

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- [Create a standalone Apps Script project](https://developers.google.com/apps-script/guides/projects), and turn on the [Advanced Chat Service](https://developers.google.com/apps-script/advanced/chat).
	For steps to set up your environment, complete this [quickstart](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script).
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) that supports user authentication.
- A Google Chat space. To create one using the Google Chat API, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). To create one in Chat, visit the [Help Center documentation](https://support.google.com/chat/answer/12176488).

## Update a space as a user

To update an existing space in Google Chat with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.spaces` authorization scope.
- Call the [`UpdateSpace()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.UpdateSpace) method. In your request, you specify the space `name` field, the `updateMask` field with one or more fields to update, and a `body` with the updated space information.

You can update things like the display name, space type, history state, and more. To see all the fields you can update, see the [reference documentation](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.UpdateSpaceRequest.FIELDS.google.protobuf.FieldMask.google.chat.v1.UpdateSpaceRequest.update_mask).

Here's how to update the `displayName` field of an existing space:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = ['https://www.googleapis.com/auth/chat.spaces'];

// This sample shows how to update a space with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    space: {
      // Replace SPACE_NAME here
      name: 'spaces/SPACE_NAME',
      displayName: 'New space display name',
    },
    // The field paths to update. Separate multiple values with commas or use \`*\`
    // to update all field paths.
    updateMask: {
      // The field paths to update.
      paths: ['display_name'],
    },
  };

  // Make the request
  const response = await chatClient.updateSpace(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat

SCOPES = ["https://www.googleapis.com/auth/chat.spaces"]

# This sample shows how to update a space with user credential
def update_space_with_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.UpdateSpaceRequest(
        space = {
            # Replace SPACE_NAME here
            'name': 'spaces/SPACE_NAME',
            'display_name': 'New space display name'
        },
        # The field paths to update. Separate multiple values with commas.
        update_mask = 'displayName'
    )

    # Make the request
    response = client.update_space(request)

    # Handle the response
    print(response)

update_space_with_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.UpdateSpaceRequest;
import com.google.chat.v1.Space;
import com.google.protobuf.FieldMask;

// This sample shows how to update space with user credential.
public class UpdateSpaceUserCred {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.spaces";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      UpdateSpaceRequest.Builder request = UpdateSpaceRequest.newBuilder()
        .setSpace(Space.newBuilder()
          // Replace SPACE_NAME here.
          .setName("spaces/SPACE_NAME")
          .setDisplayName("New space display name"))
        .setUpdateMask(FieldMask.newBuilder()
          // The field paths to update.
          .addPaths("display_name"));
      Space response = chatServiceClient.updateSpace(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to update a space with user credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces'
 * referenced in the manifest file (appsscript.json).
 */
function updateSpaceUserCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME here
  const name = "spaces/SPACE_NAME";
  const space = {
    displayName: "New space display name",
  };
  // The field paths to update. Separate multiple values with commas or use
  // \`*\` to update all field paths.
  const updateMask = "displayName";

  // Make the request
  const response = Chat.Spaces.patch(space, name, {
    updateMask: updateMask,
  });

  // Handle the response
  console.log(response);
}
```

To run this sample, replace `SPACE_NAME` with the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name) field. You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

The Google Chat API returns an instance of the [`Space`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#space) reflecting the updates.

## Update a space as a Google Workspace administrator

If you're a Google Workspace administrator, you can call the `UpdateSpace()` method to update any space in your Google Workspace organization.

To call this method as a Google Workspace administrator, do the following:

- Call the method using user authentication, and specify an [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) that supports calling the method using [administrator privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges).
- In your request, specify the query parameter `useAdminAccess` to `true`.

For more information and examples, see [Manage Google Chat spaces as a Google Workspace administrator](https://developers.google.com/workspace/chat/admin-overview).

## Update a space as a Chat app

App authentication requires one-time [administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app#admin-approval).

To update an existing space in Google Chat with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), pass the following in your request:

- Specify the `chat.app.spaces` authorization scope. With app authentication, you can only update spaces created by Chat apps.
- Call the [`patch` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/patch) on the [`Space` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces). In your request, you specify the space `name` field, the `updateMask` field with one or more fields to update, and a `body` with the updated space information.

You can update things like the display name, space type, history state, permission settings, and more. To see all the fields you can update, see the [reference documentation](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/patch#body.QUERY_PARAMETERS.update_mask).

### Write a script that calls Chat API

Here's how to update the `spaceDetails` field of an existing space:

### Python

1. In your working directory, create a file named `chat_space_update_app.py`.
2. Include the following code in `chat_space_update_app.py`:
	```
	from google.oauth2 import service_account
	from apiclient.discovery import build
	# Define your app's authorization scopes.
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.app.spaces"]
	def main():
	    '''
	    Authenticates with Chat API using app authentication,
	    then updates the specified space description and guidelines.
	    '''
	    # Specify service account details.
	    creds = (
	        service_account.Credentials.from_service_account_file('credentials.json')
	        .with_scopes(SCOPES)
	    )
	    # Build a service endpoint for Chat API.
	    chat = build('chat', 'v1', credentials=creds)
	    # Use the service endpoint to call Chat API.
	    result = chat.spaces().patch(
	      # The space to update, and the updated space details.
	      #
	      # Replace {space} with a space name.
	      # Obtain the space name from the spaces resource of Chat API,
	      # or from a space's URL.
	      name='spaces/SPACE',
	      updateMask='spaceDetails',
	      body={
	        'spaceDetails': {
	          'description': 'This description was updated with Chat API!',
	          'guidelines': 'These guidelines were updated with Chat API!'
	        }
	      }
	    ).execute()
	    # Prints details about the updated space.
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace the following:
	- `SPACE` with a space name, which you can obtain from the [`spaces.list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) in the Chat API, or from a space's URL.
4. In your working directory, build and run the sample:
	```
	python3 chat_space_update_app.py
	```

The Google Chat API returns an instance of the [`Space` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) reflecting the updates.

## Limitations and considerations

- With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), Chat apps:
	- Can only update [`predefinedPermissionSettings`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/patch#body.QUERY_PARAMETERS.update_mask) or [`permissionSettings`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/patch#body.QUERY_PARAMETERS.update_mask) in spaces they created.
		- Can't update [`accessSettings.audience`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/patch#body.QUERY_PARAMETERS.update_mask).

## Related topics

- [Get details about a space](https://developers.google.com/workspace/chat/get-spaces).
- [List spaces](https://developers.google.com/workspace/chat/list-spaces).
- [Delete a space](https://developers.google.com/workspace/chat/delete-spaces).
- [Set up a space](https://developers.google.com/workspace/chat/set-up-spaces).
- [Find a direct message space](https://developers.google.com/workspace/chat/find-direct-message-in-spaces).
- [Make a space discoverable to specific users](https://developers.google.com/workspace/chat/space-target-audience).
