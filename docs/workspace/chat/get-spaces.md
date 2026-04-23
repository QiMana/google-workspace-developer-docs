---
source: https://developers.google.com/workspace/chat/get-spaces
root: workspace
fetched_at: 2026-04-23T15:25:27.091Z
---

# Get details about a space

## Page Summary

- This guide explains how to use the `get()` method to retrieve details about a specific Google Chat space, such as its display name, description, and guidelines.
- Google Workspace administrators can use the `get()` method to access details about any space within their organization by using user authentication with administrator privileges and setting `useAdminAccess` to `true`.
- Chat apps can retrieve space details using app authentication with the `chat.bot` or `chat.app.spaces` scope, provided the app is a member of the space.
- You need a Google Workspace account with access to Google Chat and must set up your environment with necessary credentials and authorization scopes before using the `get()` method.
- The space name, which is required for the `get()` method, can be obtained from the `Space` resource, a space's URL, or by calling the `ListSpaces()` method.

This guide explains how to use the [`get()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetSpace) method on a `Space` resource of the Google Chat API to see details about a space, like its display name, description, and guidelines.

If you're a Google Workspace administrator, you can call the `get()` method to retrieve details about any space in your Google Workspace organization.

The [`Space` resource](./api/reference/rest/v1/spaces.md) represents a place where people and Chat apps can send messages, share files, and collaborate. There are several types of spaces:

- Direct messages (DMs) are conversations between two users or a user and a Chat app.
- Group chats are conversations between three or more users and Chat apps.
- Named spaces are persistent places where people send messages, share files, and collaborate.

Authenticating with [app authentication](./authenticate-authorize-chat-app.md) lets a Chat app get details about a space where the Chat app is a member. Authenticating with [user authentication](./authenticate-authorize-chat-user.md) lets you get spaces that the authenticated user has access to, either as a space member or a [Google Workspace administrator](./authenticate-authorize-chat-user.md#admin-privileges).

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
- A [Google Chat space](./set-up-spaces.md) where the authenticated user or calling Chat app is a member. To authenticate as the Chat app, [add the Chat app to the space](./test-interactive-features.md).

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- Install the Python [Cloud Client Library](./libraries.md#cloud-client-libraries).
		- Create access credentials based on how you want to authenticate in your Google Chat API request:
		- To authenticate as a Chat user, [create OAuth client ID credentials](./authenticate-authorize-chat-user.md) and save the credentials as a JSON file named `credentials.json` to your local directory.
				- To authenticate as the Chat app, [create service account credentials](./authenticate-authorize-chat-app.md) and save the credentials as a JSON file named `credentials.json`.
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.
- A [Google Chat space](./set-up-spaces.md) where the authenticated user or calling Chat app is a member. To authenticate as the Chat app, [add the Chat app to the space](./test-interactive-features.md).

### Java

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- Install the Java [Cloud Client Library](./libraries.md#cloud-client-libraries).
		- Create access credentials based on how you want to authenticate in your Google Chat API request:
		- To authenticate as a Chat user, [create OAuth client ID credentials](./authenticate-authorize-chat-user.md) and save the credentials as a JSON file named `credentials.json` to your local directory.
				- To authenticate as the Chat app, [create service account credentials](./authenticate-authorize-chat-app.md) and save the credentials as a JSON file named `credentials.json`.
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.
- A [Google Chat space](./set-up-spaces.md) where the authenticated user or calling Chat app is a member. To authenticate as the Chat app, [add the Chat app to the space](./test-interactive-features.md).

### Apps Script

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- [Create a standalone Apps Script project](../../apps-script/guides/projects.md), and turn on the [Advanced Chat Service](../../apps-script/advanced/chat.md).
		- In this guide, you must use either [user or app authentication](./authenticate-authorize.md). To authenticate as the Chat app, create service account credentials. For steps, see [Authenticate and authorize as a Google Chat app](./authenticate-authorize-chat-app.md).
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.
- A [Google Chat space](./set-up-spaces.md) where the authenticated user or calling Chat app is a member. To authenticate as the Chat app, [add the Chat app to the space](./test-interactive-features.md).

## Get a space

To get a space in Google Chat, pass the following in your request:

- An authorization scope:
	- With [user authentication](./authenticate-authorize-chat-user.md), specify the `chat.spaces.readonly` or `chat.spaces` authorization scope.
		- With [app authentication](./authenticate-authorize-chat-app.md), specify the `chat.bot` authorization scope or the `chat.app.spaces` scope. The `chat.app.spaces` scope is available in [Developer Preview](../preview.md) and requires one-time [administrator approval](./authenticate-authorize-chat-app.md#admin-approval).
- Call the [`GetSpace()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetSpace) method, passing the `name` of the space to get. Obtain the space name from the `Space` resource of Google Chat, or from a space's URL.

### Get space details as a user

Here's how to get space details with [user authentication](./authenticate-authorize-chat-user.md):

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.spaces.readonly',
];

// This sample shows how to get space with user credential
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
  const response = await chatClient.getSpace(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat

SCOPES = ["https://www.googleapis.com/auth/chat.spaces.readonly"]

# This sample shows how to get space with user credential
def get_space_with_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.GetSpaceRequest(
        # Replace SPACE_NAME here
        name = "spaces/SPACE_NAME",
    )

    # Make the request
    response = client.get_space(request)

    # Handle the response
    print(response)

get_space_with_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.GetSpaceRequest;
import com.google.chat.v1.Space;

// This sample shows how to get space with user credential.
public class GetSpaceUserCred {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.spaces.readonly";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      GetSpaceRequest.Builder request = GetSpaceRequest.newBuilder()
        // Replace SPACE_NAME here
        .setName("spaces/SPACE_NAME");
      Space response = chatServiceClient.getSpace(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to get space with user credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.readonly'
 * referenced in the manifest file (appsscript.json).
 */
function getSpaceUserCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME here
  const name = "spaces/SPACE_NAME";

  // Make the request
  const response = Chat.Spaces.get(name);

  // Handle the response
  console.log(response);
}
```

To run this sample, replace `SPACE_NAME` with the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name) field. You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

The Chat API returns an instance of [`Space`](./api/reference/rpc/google.chat.v1.md#space) that details the specified space.

### Get space details as a Google Workspace administrator

If you're a Google Workspace administrator, you can call the `GetSpace` method to retrieve details about any space in your Google Workspace organization.

To call this method as a Google Workspace administrator, do the following:

- Call the method using user authentication, and specify an [authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports calling the method using [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges).
- In your request, specify the query parameter `useAdminAccess` to `true`.

For more information and examples, see [Manage Google Chat spaces as a Google Workspace administrator](./admin-overview.md).

### Get space details as a Chat app

Here's how to get space details with [app authentication](./authenticate-authorize-chat-app.md):

### Node.js

```
import {createClientWithAppCredentials} from './authentication-utils.js';

// This sample shows how to get space with app credential
async function main() {
  // Create a client
  const chatClient = createClientWithAppCredentials();

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME here
    name: 'spaces/SPACE_NAME',
  };

  // Make the request
  const response = await chatClient.getSpace(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_app_credentials
from google.apps import chat_v1 as google_chat

# This sample shows how to get space with app credential
def get_space_with_app_cred():
    # Create a client
    client = create_client_with_app_credentials()

    # Initialize request argument(s)
    request = google_chat.GetSpaceRequest(
        # Replace SPACE_NAME here
        name = "spaces/SPACE_NAME",
    )

    # Make the request
    response = client.get_space(request)

    # Handle the response
    print(response)

get_space_with_app_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.GetSpaceRequest;
import com.google.chat.v1.Space;

// This sample shows how to get space with app credential.
public class GetSpaceAppCred {

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithAppCredentials()) {
      GetSpaceRequest.Builder request = GetSpaceRequest.newBuilder()
        // Replace SPACE_NAME here
        .setName("spaces/SPACE_NAME");
      Space response = chatServiceClient.getSpace(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to get space with app credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot'
 * used by service accounts.
 */
function getSpaceAppCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME here
  const name = "spaces/SPACE_NAME";
  const parameters = {};

  // Make the request
  const response = Chat.Spaces.get(
    name,
    parameters,
    getHeaderWithAppCredentials(),
  );

  // Handle the response
  console.log(response);
}
```

To run this sample, replace `SPACE_NAME` with the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name) field. You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

The Chat API returns an instance of [`Space`](./api/reference/rpc/google.chat.v1.md#space) that details the specified space.

## Limitations and considerations

- The [`accessSettings`](./api/reference/rest/v1/spaces.md#Space.AccessSettings), [`predefinedPermissionSettings`](./api/reference/rest/v1/spaces.md#predefinedpermissionsettings), and [`permissionSettings`](./api/reference/rest/v1/spaces.md#Space.PermissionSettings) fields only populate when you authenticate with the `chat.app.spaces` scope, and permission settings are limited to spaces the Chat app created.

## Related topics

- [Create a space](./create-spaces.md).
- [Set up a space](./set-up-spaces.md).
- [List spaces](./list-spaces.md).
- [Update a space](./update-spaces.md).
- [Delete a space](./delete-spaces.md).
- [Find a direct message space](./find-direct-message-in-spaces.md).
