---
source: https://developers.google.com/workspace/chat/list-spaces
root: workspace
fetched_at: 2026-04-23T15:25:28.505Z
---

# List spaces

## Page Summary

- This guide explains how to use the `list()` method to retrieve a paginated, filterable list of spaces within Google Chat using the Google Chat API.
- Spaces in Google Chat can be direct messages, group chats, or named spaces for collaboration, and the spaces listed depend on the authentication method (app or user).
- Code samples demonstrate how to list spaces using both user and app authentication, covering Node.js, Python, Java, and Apps Script.
- The `pageSize`, `pageToken`, and `filter` parameters can be used to control pagination and refine the list of spaces returned by the API.
- This guide also provides links to related topics such as creating, updating, and deleting spaces, as well as finding direct message spaces.

This guide explains how to use the [`list()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method on the `Space` resource of the Google Chat API to list spaces. Listing spaces returns a paginated, filterable list of spaces.

The [`Space` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) represents a place where people and Chat apps can send messages, share files, and collaborate. There are several types of spaces:

- Direct messages (DMs) are conversations between two users or a user and a Chat app.
- Group chats are conversations between three or more users and Chat apps.
- Named spaces are persistent places where people send messages, share files, and collaborate.

Listing spaces with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) lists spaces that the Chat app has access to. Listing spaces with [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) lists spaces that the authenticated user has access to.

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

## List spaces with user authentication

To list spaces in Google Chat, pass the following in your request:

- With [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), specify the `chat.spaces.readonly` or `chat.spaces` authorization scope.
- Call the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method.

The following example lists named spaces (but not group chats and direct messages, which are filtered out) visible to the authenticated user:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.spaces.readonly',
];

// This sample shows how to list spaces with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Filter spaces by space type (SPACE or GROUP_CHAT or DIRECT_MESSAGE)
    filter: 'space_type = "SPACE"',
  };

  // Make the request
  const pageResult = chatClient.listSpacesAsync(request);

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

SCOPES = ["https://www.googleapis.com/auth/chat.spaces.readonly"]

# This sample shows how to list spaces with user credential
def list_spaces_with_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.ListSpacesRequest(
        # Filter spaces by space type (SPACE or GROUP_CHAT or DIRECT_MESSAGE)
        filter = 'space_type = "SPACE"',
        # Number of results that will be returned at once
        page_size = 100
    )

    # Make the request
    page_result = client.list_spaces(request)

    # Handle the response. Iterating over page_result will yield results and
    # resolve additional pages automatically.
    for response in page_result:
        print(response)

list_spaces_with_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.ListSpacesRequest;
import com.google.chat.v1.ListSpacesResponse;
import com.google.chat.v1.Space;

// This sample shows how to list spaces with user credential.
public class ListSpacesUserCred{

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.spaces.readonly";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      ListSpacesRequest.Builder request = ListSpacesRequest.newBuilder()
        // Filter spaces by space type (SPACE or GROUP_CHAT or
        // DIRECT_MESSAGE).
        .setFilter("spaceType = \"SPACE\"")
        // Number of results that will be returned at once.
        .setPageSize(10);

      // Iterate over results and resolve additional pages automatically.
      for (Space response :
          chatServiceClient.listSpaces(request.build()).iterateAll()) {
        System.out.println(JsonFormat.printer().print(response));
      }
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to list spaces with user credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.readonly'
 * referenced in the manifest file (appsscript.json).
 */
function listSpacesUserCred() {
  // Initialize request argument(s)
  // Filter spaces by space type (SPACE or GROUP_CHAT or DIRECT_MESSAGE)
  const filter = 'space_type = "SPACE"';

  // Iterate through the response pages using page tokens
  let responsePage;
  let pageToken = null;
  do {
    // Request response pages
    responsePage = Chat.Spaces.list({
      filter: filter,
      pageSize: 10,
      pageToken: pageToken,
    });
    // Handle response pages
    if (responsePage.spaces) {
      for (const space of responsePage.spaces) {
        console.log(space);
      }
    }
    // Update the page token to the next one
    pageToken = responsePage.nextPageToken;
  } while (pageToken);
}
```

The Chat API returns a [paginated list of spaces](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#listspacesresponse).

## List spaces with app authentication

To list spaces in Google Chat, pass the following in your request:

- With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), specify the `chat.bot` authorization scope.
- Call the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method.

The following example lists named spaces (but not group chats and direct messages) visible to the Chat app:

### Node.js

```
import {createClientWithAppCredentials} from './authentication-utils.js';

// This sample shows how to list spaces with app credential
async function main() {
  // Create a client
  const chatClient = createClientWithAppCredentials();

  // Initialize request argument(s)
  const request = {
    // Filter spaces by space type (SPACE or GROUP_CHAT or DIRECT_MESSAGE)
    filter: 'space_type = "SPACE"',
  };

  // Make the request
  const pageResult = chatClient.listSpacesAsync(request);

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
from authentication_utils import create_client_with_app_credentials
from google.apps import chat_v1 as google_chat

# This sample shows how to list spaces with app credential
def list_spaces_app_cred():
    # Create a client
    client = create_client_with_app_credentials()

    # Initialize request argument(s)
    request = google_chat.ListSpacesRequest(
        # Filter spaces by space type (SPACE or GROUP_CHAT or DIRECT_MESSAGE)
        filter = 'space_type = "SPACE"',
        # Number of results that will be returned at once
        page_size = 100
    )

    # Make the request
    page_result = client.list_spaces(request)

    # Handle the response. Iterating over page_result will yield results and
    # resolve additional pages automatically.
    for response in page_result:
        print(response)

list_spaces_app_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.ListSpacesRequest;
import com.google.chat.v1.ListSpacesResponse;
import com.google.chat.v1.Space;

// This sample shows how to list spaces with app credential.
public class ListSpacesAppCred {

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithAppCredentials()) {
      ListSpacesRequest.Builder request = ListSpacesRequest.newBuilder()
        // Filter spaces by space type (SPACE or GROUP_CHAT or
        // DIRECT_MESSAGE).
        .setFilter("spaceType = \"SPACE\"")
        // Number of results that will be returned at once.
        .setPageSize(10);

      // Iterate over results and resolve additional pages automatically.
      for (Space response :
          chatServiceClient.listSpaces(request.build()).iterateAll()) {
        System.out.println(JsonFormat.printer().print(response));
      }
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to list spaces with app credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot'
 * used by service accounts.
 */
function listSpacesAppCred() {
  // Initialize request argument(s)
  // Filter spaces by space type (SPACE or GROUP_CHAT or DIRECT_MESSAGE)
  const filter = 'space_type = "SPACE"';

  // Iterate through the response pages using page tokens
  let responsePage;
  let pageToken = null;
  do {
    // Request response pages
    responsePage = Chat.Spaces.list(
      {
        filter: filter,
        pageSize: 10,
        pageToken: pageToken,
      },
      getHeaderWithAppCredentials(),
    );
    // Handle response pages
    if (responsePage.spaces) {
      for (const space of responsePage.spaces) {
        console.log(space);
      }
    }
    // Update the page token to the next one
    pageToken = responsePage.nextPageToken;
  } while (pageToken);
}
```

The Chat API returns a [paginated list of spaces](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#listspacesresponse).

## Customize pagination or filter the list

To list spaces in Google Chat, pass the following optional query parameters to customize pagination of or filter listed spaces:

- `pageSize`: The maximum number of spaces to return. The service might return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1,000; values higher than 1,000 are automatically changed to 1,000.
- `pageToken`: A page token, received from a previous list spaces call. Provide this token to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
- `filter`: A query filter. For supported query details, see the [`ListSpacesRequest`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ListSpacesRequest) reference.

## Related topics

- [Create a space](https://developers.google.com/workspace/chat/create-spaces).
- [Set up a space](https://developers.google.com/workspace/chat/set-up-spaces).
- [Get details about a space](https://developers.google.com/workspace/chat/get-spaces).
- [Update a space](https://developers.google.com/workspace/chat/update-spaces).
- [Delete a space](https://developers.google.com/workspace/chat/delete-spaces).
- [Find a direct message space](https://developers.google.com/workspace/chat/find-direct-message-in-spaces).
