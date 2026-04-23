---
source: https://developers.google.com/workspace/chat/list-members
root: workspace
fetched_at: 2026-04-23T15:25:29.134Z
---

# List members in a space

## Page Summary

- This guide details how to retrieve a list of memberships for a Google Chat space using the `list()` method, offering filtering and pagination options.
- Authentication can be done as a user, a Chat app, or a Workspace administrator, each with varying access levels to space memberships.
- Developers need a Google Workspace account, Google Cloud project, and client libraries (Node.js, Python, Java, or Apps Script) to utilize the API.
- Code samples are provided for various programming languages demonstrating how to list memberships with user and app authentication.
- Important considerations include using the correct space ID, understanding member types (Google Group, human, and app), and the impact of administrator privileges.

This guide explains how to use the [`list()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListMemberships) method on the `Membership` resource of the Google Chat API to list members in a space as a paginated, filterable list of memberships in a space.

- Listing memberships with [app authentication](./authenticate-authorize-chat-app.md) lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own.
- Listing memberships with [user authentication](./authenticate-authorize-chat-user.md) lists memberships in spaces that the authenticated user has access to.
- Listing memberships as a Google Workspace administrator with user authentication using [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges) lists memberships in all spaces in your Google Workspace organization.

The [`Membership` resource](./api/reference/rest/v1/spaces.members.md) represents whether a human user or Google Chat app is invited to, part of, or absent from a space.

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

## List members in a space with user authentication

To list users, Google Groups, and Chat app in a space that the authenticated user has access to, pass the following in your request:

- With [user authentication](./authenticate-authorize-chat-user.md), specify the `chat.memberships.readonly` or `chat.memberships` authorization scope.
- Call the [`ListMemberships()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListMemberships) method.
- To list Google Groups, set the query parameter `showGroups` to `true`.

The following example lists Google Group, human, and app members visible to the authenticated user.

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.memberships.readonly',
];

// This sample shows how to list memberships with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME here
    parent: 'spaces/SPACE_NAME',
    // Filter membership by type (HUMAN or BOT) or role (ROLE_MEMBER or
    // ROLE_MANAGER)
    filter: 'member.type = "HUMAN"',
  };

  // Make the request
  const pageResult = chatClient.listMembershipsAsync(request);

  // Handle the response. Iterating over pageResult will yield results and
  // resolve additional pages automatically.
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

SCOPES = ["https://www.googleapis.com/auth/chat.memberships.readonly"]

# This sample shows how to list memberships with user credential
def list_memberships_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.ListMembershipsRequest(
        # Replace SPACE_NAME here
        parent = 'spaces/SPACE_NAME',
        # Filter membership by type (HUMAN or BOT) or role (ROLE_MEMBER or
        # ROLE_MANAGER)
        filter = 'member.type = "HUMAN"',
        # Number of results that will be returned at once
        page_size = 100
    )

    # Make the request
    page_result = client.list_memberships(request)

    # Handle the response. Iterating over page_result will yield results and
    # resolve additional pages automatically.
    for response in page_result:
        print(response)

list_memberships_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.ListMembershipsRequest;
import com.google.chat.v1.ListMembershipsResponse;
import com.google.chat.v1.Membership;

// This sample shows how to list memberships with user credential.
public class ListMembershipsUserCred {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.memberships.readonly";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      ListMembershipsRequest.Builder request = ListMembershipsRequest.newBuilder()
        // Replace SPACE_NAME here.
        .setParent("spaces/SPACE_NAME")
        // Filter membership by type (HUMAN or BOT) or role
        // (ROLE_MEMBER or ROLE_MANAGER).
        .setFilter("member.type = \"HUMAN\"")
        // Number of results that will be returned at once.
        .setPageSize(10);

      // Iterating over results and resolve additional pages automatically.
      for (Membership response :
          chatServiceClient.listMemberships(request.build()).iterateAll()) {
        System.out.println(JsonFormat.printer().print(response));
      }
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to list memberships with user credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.memberships.readonly'
 * referenced in the manifest file (appsscript.json).
 */
function listMembershipsUserCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME here
  const parent = "spaces/SPACE_NAME";
  // Filter membership by type (HUMAN or BOT) or role (ROLE_MEMBER or
  // ROLE_MANAGER)
  const filter = 'member.type = "HUMAN"';

  // Iterate through the response pages using page tokens
  let responsePage;
  let pageToken = null;
  do {
    // Request response pages
    responsePage = Chat.Spaces.Members.list(parent, {
      filter: filter,
      pageSize: 10,
      pageToken: pageToken,
    });
    // Handle response pages
    if (responsePage.memberships) {
      for (const membership of responsePage.memberships) {
        console.log(membership);
      }
    }
    // Update the page token to the next one
    pageToken = responsePage.nextPageToken;
  } while (pageToken);
}
```

To run this sample, replace `SPACE_NAME` with the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name) field. You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

The Google Chat API returns a [list](./api/reference/rpc/google.chat.v1.md#listmembershipsresponse) of Google Group, human, and app members from the specified space.

## List members in a space with app authentication

To list users and Chat app in a space that the authenticated app has access to, pass the following in your request:

- With [app authentication](./authenticate-authorize-chat-app.md), specify the `chat.bot` authorization scope.
- Call the [`ListMemberships()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListMemberships) method.
- To list Google Groups, set the query parameter `showGroups` to `true`.

The following example lists human space members (not space managers) visible to the Chat app:

### Node.js

```
import {createClientWithAppCredentials} from './authentication-utils.js';

// This sample shows how to list memberships with app credential
async function main() {
  // Create a client
  const chatClient = createClientWithAppCredentials();

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME here
    parent: 'spaces/SPACE_NAME',
    // Filter membership by type (HUMAN or BOT) or role (ROLE_MEMBER or
    // ROLE_MANAGER)
    filter: 'member.type = "HUMAN"',
  };

  // Make the request
  const pageResult = chatClient.listMembershipsAsync(request);

  // Handle the response. Iterating over pageResult will yield results and
  // resolve additional pages automatically.
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

# This sample shows how to list memberships with app credential
def list_memberships_app_cred():
    # Create a client
    client = create_client_with_app_credentials()

    # Initialize request argument(s)
    request = google_chat.ListMembershipsRequest(
        # Replace SPACE_NAME here
        parent = 'spaces/SPACE_NAME',
        # Filter membership by type (HUMAN or BOT) or role (ROLE_MEMBER or
        # ROLE_MANAGER)
        filter = 'member.type = "HUMAN"',
        # Number of results that will be returned at once
        page_size = 100
    )

    # Make the request
    page_result = client.list_memberships(request)

    # Handle the response. Iterating over page_result will yield results and
    # resolve additional pages automatically.
    for response in page_result:
        print(response)

list_memberships_app_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.ListMembershipsRequest;
import com.google.chat.v1.ListMembershipsResponse;
import com.google.chat.v1.Membership;

// This sample shows how to list memberships with app credential.
public class ListMembershipsAppCred {

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithAppCredentials()) {
      ListMembershipsRequest.Builder request = ListMembershipsRequest.newBuilder()
        // Replace SPACE_NAME here.
        .setParent("spaces/SPACE_NAME")
        // Filter membership by type (HUMAN or BOT) or role
        // (ROLE_MEMBER or ROLE_MANAGER).
        .setFilter("member.type = \"HUMAN\"")
        // Number of results that will be returned at once.
        .setPageSize(10);

      // Iterate over results and resolve additional pages automatically.
      for (Membership response :
          chatServiceClient.listMemberships(request.build()).iterateAll()) {
        System.out.println(JsonFormat.printer().print(response));
      }
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to list memberships with app credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot'
 * used by service accounts.
 */
function listMembershipsAppCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME here
  const parent = "spaces/SPACE_NAME";
  // Filter membership by type (HUMAN or BOT) or role (ROLE_MEMBER or
  // ROLE_MANAGER)
  const filter = 'member.type = "HUMAN"';

  // Iterate through the response pages using page tokens
  let responsePage;
  let pageToken = null;
  do {
    // Request response pages
    responsePage = Chat.Spaces.Members.list(
      parent,
      {
        filter: filter,
        pageSize: 10,
        pageToken: pageToken,
      },
      getHeaderWithAppCredentials(),
    );
    // Handle response pages
    if (responsePage.memberships) {
      for (const membership of responsePage.memberships) {
        console.log(membership);
      }
    }
    // Update the page token to the next one
    pageToken = responsePage.nextPageToken;
  } while (pageToken);
}
```

To run this sample, replace `SPACE_NAME` with the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name) field. You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

The Google Chat API returns a [list](./api/reference/rpc/google.chat.v1.md#listmembershipsresponse) of human space members (excluding space managers) from the specified space.

## List members as a Google Workspace administrator

If you're a Google Workspace administrator, you can call the `ListMemberships()` method to list memberships for any space in your Google Workspace organization. The Chat API only returns memberships about users—both internal and external—or Google Groups from your organization, and therefore omits memberships for any Chat apps.

To call this method as a Google Workspace administrator, do the following:

- Call the method using user authentication, and specify an [authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports calling the method using [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges).
- In your request, specify the following query parameters:
	- Set `useAdminAccess` to `true`.
		- To return only users, set the `filter` for `member.type` equal to `HUMAN`.
		- To return users and groups, set the `filter` for `member.type` not equal to `BOT` `AND` `showGroups` equal to `true`.

For more information and examples, see [Manage Google Chat spaces as a Google Workspace administrator](./admin-overview.md).

## Customize pagination or filter the list

To list the memberships, pass the following query parameters to customize pagination of, or filter, listed memberships:

- `pageSize`: The maximum number of memberships to return. The service might return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1,000; values more than 1,000 are automatically changed to 1,000.
- `pageToken`: A page token, received from a previous list spaces call. Provide this token to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
- `filter`: A query filter. Requires [user authentication](./authenticate-authorize-chat-user.md). For supported query details, see the [`ListMembershipsRequest`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ListMembershipsRequest) reference.

## Related topics

- [Get details about a user's or Chat app's membership](./get-members.md).
- [Invite or add a user or Chat app to a space](./create-members.md).
- [Update a user's membership in a Google Chat space](./update-members.md).
- [Remove a user or Chat app from a space](./delete-members.md).
