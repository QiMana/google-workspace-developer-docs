---
source: https://developers.google.com/workspace/chat/create-spaces
root: workspace
fetched_at: 2026-04-23T15:25:20.329Z
---

# Create a named space in Google Chat

## Page Summary

- This guide explains how to create a named space in Google Chat using the Google Chat API.
- Named spaces allow for messaging, file sharing, and collaboration, including the integration of Chat apps.
- You can create a named space authenticated as either a Chat user or a Chat app (Developer Preview).
- After creating a space, add members individually or use the `setUp()` method to add them during space creation.
- View code samples for Node.js, Python, Java, and Apps Script to help you get started.

This guide explains how to create a named space using the [`create()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.CreateSpace) method on the [`Space`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) resource of the Google Chat API.

A *named space* (where the [`spaceType`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype) is `SPACE`) is a place where people send messages, share files, and collaborate. Named spaces can include Chat apps. Named spaces have space managers who can apply administrative settings, descriptions, and add or remove people and apps.

To create different types of Chat spaces (including direct messages or group messages), use the `setUp()` method on the `Space` resource to create the space and add members at the same time. For details, [Set up a space](https://developers.google.com/workspace/chat/set-up-spaces).

After creating a named space, the only member of the space is the authenticated user. To add members to the space, call the [`create()`](https://developers.google.com/workspace/chat/create-members) method on the `Membership` resource for each person or app that you want to add. Or, you can use the `setUp()` method to create a named space and add members to it at the same time.

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

## Create a named space as a user

To create a named space with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), pass the following in your request:

- Specify the `chat.spaces.create` or `chat.spaces` authorization scope.
- Call the [`CreateSpace()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.CreateSpace) method, passing `space` as an instance of [`Space`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space) with the following fields:
	- `spaceType` set to `SPACE`.
		- `displayName` set to the user-visible name of the space.
		- Optionally, set other attributes, like the following:
		- `spaceDetails` - a user-visible description and set of guidelines for the space.
				- `predefinedPermissionSettings` - predefined permissions for the space. For example, you can configure it so that all members or only space managers can post messages.

Here's how to create a named space:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.spaces.create',
];

// This sample shows how to create a named space with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    space: {
      spaceType: 'SPACE',
      // Replace DISPLAY_NAME here.
      displayName: 'DISPLAY_NAME',
    },
  };

  // Make the request
  const response = await chatClient.createSpace(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat

SCOPES = ["https://www.googleapis.com/auth/chat.spaces.create"]

def create_space_with_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.CreateSpaceRequest(
        space = {
            "space_type": 'SPACE',
            # Replace DISPLAY_NAME here.
            "display_name": 'DISPLAY_NAME'
        }
    )

    # Make the request
    response = client.create_space(request)

    # Handle the response
    print(response)

create_space_with_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.CreateSpaceRequest;
import com.google.chat.v1.Space;

// This sample shows how to create space with user credential.
public class CreateSpaceUserCred {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.spaces.create";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      CreateSpaceRequest.Builder request = CreateSpaceRequest.newBuilder()
        .setSpace(Space.newBuilder()
          .setSpaceType(Space.SpaceType.SPACE)
          // Replace DISPLAY_NAME here.
          .setDisplayName("DISPLAY_NAME"));
      Space response = chatServiceClient.createSpace(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to create space with user credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.create'
 * referenced in the manifest file (appsscript.json).
 */
function createSpaceUserCred() {
  // Initialize request argument(s)
  const space = {
    spaceType: "SPACE",
    // TODO(developer): Replace DISPLAY_NAME here
    displayName: "DISPLAY_NAME",
  };

  // Make the request
  const response = Chat.Spaces.create(space);

  // Handle the response
  console.log(response);
}
```

## Create a named space as a Chat app

App authentication requires one-time [administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app#admin-approval).

To invite or add a user to a space with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), pass the following in your request:

- Specify the `chat.app.spaces.create` or `chat.app.spaces` authorization scope.
- Call the [`create` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/create) on the [`Space` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces).
- Set [`spaceType`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype) to `SPACE`.
- Set [`displayName`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) to the user-visible name of the space. In the following example, `displayName` is set to `API-made`.
- Specify the customer ID of the Google Workspace domain using the `customer` field.
- Optionally, set other space attributes, like [`spaceDetails`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space.SpaceDetails) (a user-visible description and set of guidelines for the space).

### Write a script that calls Chat API

Here's how to create a named space:

### Python

1. In your working directory, create a file named `chat_space_create_named_app.py`.
2. Include the following code in `chat_space_create_named_app.py`:
	```
	from google.oauth2 import service_account
	from apiclient.discovery import build
	# Define your app's authorization scopes.
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.app.spaces.create"]
	def main():
	    '''
	    Authenticates with Chat API using app authentication,
	    then creates a Chat space.
	    '''
	    # Specify service account details.
	    creds = (
	        service_account.Credentials.from_service_account_file('credentials.json')
	        .with_scopes(SCOPES)
	    )
	    # Build a service endpoint for Chat API.
	    chat = build('chat', 'v1', credentials=creds)
	    # Use the service endpoint to call Chat API.
	    result = chat.spaces().create(
	      # Details about the space to create.
	      body = {
	        # To create a named space, set spaceType to SPACE.
	        'spaceType': 'SPACE',
	        # The user-visible name of the space.
	        'displayName': 'API-made',
	        # The customer ID of the Workspace domain.
	        'customer': 'CUSTOMER'
	      }
	      ).execute()
	    # Prints details about the created space.
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace the following:
	- `CUSTOMER`: the customer ID of the domain of the space in the format `customer/{customer}` where `{customer}` is the `ID` from the [Admin SDK customer resource](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers). To create a space in the same Google Workspace organization as the Chat app, use `customers/my_customer`.
4. In your working directory, build and run the sample:
	```
	python3 chat_space_create_named_app.py
	```

## Open the space in Google Chat

To navigate to the space, use the space's resource ID to build the space's URL. You can find the resource ID from the space `name` in the Google Chat response body. For example, if your space's `name` is `spaces/1234567`, you can navigate to the space using the following URL: `https://mail.google.com/chat/u/0/#chat/space/1234567`.

## Limitations and considerations

- When you create a space using [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), the authenticating Chat app is added as a member of the space, but unlike user authentication, not as a space manager. By default, all space members can remove the Chat app. To allow only space managers to remove the Chat app, set [`permissionSettings.manageApps`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space.PermissionSettings) to `managersAllowed`.

## Related topics

- Add people and apps to the space by [creating members](https://developers.google.com/workspace/chat/create-members).
- Post a message in the space by [creating a message](https://developers.google.com/workspace/chat/create-messages).
- [Get details about a space](https://developers.google.com/workspace/chat/get-spaces).
- [List spaces](https://developers.google.com/workspace/chat/list-spaces).
- [Update a space](https://developers.google.com/workspace/chat/update-spaces).
- [Delete a space](https://developers.google.com/workspace/chat/delete-spaces).
- [Set up a space](https://developers.google.com/workspace/chat/set-up-spaces).
- [Find a direct message space](https://developers.google.com/workspace/chat/find-direct-message-in-spaces).
- [Make a space discoverable to specific users](https://developers.google.com/workspace/chat/space-target-audience).
