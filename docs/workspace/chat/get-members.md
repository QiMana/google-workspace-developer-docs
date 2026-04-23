---
source: https://developers.google.com/workspace/chat/get-members
root: workspace
fetched_at: 2026-04-23T15:25:26.177Z
---

# Get details about a membership

## Page Summary

- This guide explains how to use the `get()` method to retrieve details about a membership in a Google Chat space.
- Google Workspace administrators can use the `get()` method with administrator privileges to retrieve membership details for any user in their organization.
- To get membership details, you need to authenticate using either app authentication or user authentication with the appropriate authorization scopes.
- You need to provide the `name` of the membership, which includes the space ID and member ID, to the `get()` method.
- The `get()` method returns a `Membership` object containing details about the specified membership.

This guide explains how to use the [`get()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetMembership) method on the `Membership` resource of the Google Chat API to get details about a membership in a space.

If you're a Google Workspace administrator, you can call the `get()` method to retrieve details about any membership in your Google Workspace organization.

The [`Membership` resource](./api/reference/rest/v1/spaces.members.md) represents whether a human user or Google Chat app is invited to, part of, or absent from a space.

Authenticating with [app authentication](./authenticate-authorize-chat-app.md) lets a Chat app get memberships from spaces that it has access to in Google Chat (for example, spaces it's a member of), but excludes Chat app memberships, including its own. Authenticating with [user authentication](./authenticate-authorize-chat-user.md) returns memberships from spaces that the authenticated user has access to.

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

## Get details about a membership

To get details about a membership in Google Chat, pass the following in your request:

- With [app authentication](./authenticate-authorize-chat-app.md), specify the `chat.bot` authorization scope. With [user authentication](./authenticate-authorize-chat-user.md), specify the `chat.memberships.readonly` or `chat.memberships` authorization scope. As a best practice, choose the most restrictive scope that still allows your app to function.
- Call the [`GetMembership()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetMembership) method.
- Pass the `name` of the membership to get. Obtain the membership name from the membership resource of Google Chat.

### Get a membership with user authentication

Here's how to get a membership with [user authentication](./authenticate-authorize-chat-user.md):

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.memberships.readonly',
];

// This sample shows how to get membership with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME and MEMBER_NAME here
    name: 'spaces/SPACE_NAME/members/MEMBER_NAME',
  };

  // Make the request
  const response = await chatClient.getMembership(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat

SCOPES = ["https://www.googleapis.com/auth/chat.memberships.readonly"]

# This sample shows how to get membership with user credential
def get_membership_with_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.GetMembershipRequest(
        # Replace SPACE_NAME and MEMBER_NAME here
        name = 'spaces/SPACE_NAME/members/MEMBER_NAME',
    )

    # Make the request
    response = client.get_membership(request)

    # Handle the response
    print(response)

get_membership_with_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.GetMembershipRequest;
import com.google.chat.v1.Membership;

// This sample shows how to get membership with user credential.
public class GetMembershipUserCred {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.memberships.readonly";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      GetMembershipRequest.Builder request = GetMembershipRequest.newBuilder()
        // replace SPACE_NAME and MEMBERSHIP_NAME here
        .setName("spaces/SPACE_NAME/members/MEMBERSHIP_NAME");
      Membership response = chatServiceClient.getMembership(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to get membership with user credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.memberships.readonly'
 * referenced in the manifest file (appsscript.json).
 */
function getMembershipUserCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME and MEMBER_NAME here
  const name = "spaces/SPACE_NAME/members/MEMBER_NAME";

  // Make the request
  const response = Chat.Spaces.Members.get(name);

  // Handle the response
  console.log(response);
}
```

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MEMBER_NAME`: the ID from the member's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID by calling the [`ListMemberships()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListMemberships) method.

The Chat API returns an instance of [`Membership`](./api/reference/rpc/google.chat.v1.md#membership) detailing the specified membership.

### Get a membership with app authentication

Here's how to get a membership with [app authentication](./authenticate-authorize-chat-app.md):

### Node.js

```
import {createClientWithAppCredentials} from './authentication-utils.js';

// This sample shows how to get membership with app credential
async function main() {
  // Create a client
  const chatClient = createClientWithAppCredentials();

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME and MEMBER_NAME here
    name: 'spaces/SPACE_NAME/members/MEMBER_NAME',
  };

  // Make the request
  const response = await chatClient.getMembership(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_app_credentials
from google.apps import chat_v1 as google_chat

# This sample shows how to get membership with app credential
def get_membership_with_app_cred():
    # Create a client
    client = create_client_with_app_credentials()

    # Initialize request argument(s)
    request = google_chat.GetMembershipRequest(
        # Replace SPACE_NAME and MEMBER_NAME here
        name = 'spaces/SPACE_NAME/members/MEMBER_NAME',
    )

    # Make the request
    response = client.get_membership(request)

    # Handle the response
    print(response)

get_membership_with_app_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.GetMembershipRequest;
import com.google.chat.v1.Membership;

// This sample shows how to get membership with app credential.
public class GetMembershipAppCred {

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithAppCredentials()) {
      GetMembershipRequest.Builder request = GetMembershipRequest.newBuilder()
        // replace SPACE_NAME and MEMBERSHIP_NAME here
        .setName("spaces/SPACE_NAME/members/MEMBERSHIP_NAME");
      Membership response = chatServiceClient.getMembership(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to get membership with app credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot'
 * used by service accounts.
 */
function getMembershipAppCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME and MEMBER_NAME here
  const name = "spaces/SPACE_NAME/members/MEMBER_NAME";
  const parameters = {};

  // Make the request
  const response = Chat.Spaces.Members.get(
    name,
    parameters,
    getHeaderWithAppCredentials(),
  );

  // Handle the response
  console.log(response);
}
```

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MEMBER_NAME`: the ID from the member's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID by calling the [`ListMemberships()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListMemberships) method.

The Chat API returns an instance of [`Membership`](./api/reference/rpc/google.chat.v1.md#membership) detailing the specified membership.

## Get details about memberships as a Google Workspace administrator

If you're a Google Workspace administrator, you can call the `GetMembership()` method to retrieve details about a membership for any user in your Google Workspace organization.

To call this method as a Google Workspace administrator, do the following:

- Call the method using user authentication, and specify an [authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports calling the method using [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges).
- In your request, specify the query parameter `useAdminAccess` to `true`.

For more information and examples, see [Manage Google Chat spaces as a Google Workspace administrator](./admin-overview.md).

## Related topics

- [List members in a space](./list-members.md).
- [Invite or add a user or Chat app to a space](./create-members.md).
- [Update a user's membership in a Google Chat space](./update-members.md).
- [Remove a user or Chat app from a space](./delete-members.md).
