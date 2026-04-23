---
source: https://developers.google.com/workspace/chat/set-up-spaces
root: workspace
fetched_at: 2026-04-23T15:25:35.116Z
---

# Create a Google Chat space and add members

## Page Summary

- This guide explains how to use the `setUp()` method in the Google Chat API to create Chat spaces and add members.
- You can use this method to create named spaces, direct messages (DMs) between users, and group messages.
- The guide provides code samples in Node.js, Python, Java, and Apps Script for implementing the `setUp()` method.
- Before using the `setUp()` method, you need a Google Workspace account and to set up your development environment.
- The calling user is automatically added to the created space, and you can't add members outside your Google Workspace.

This guide explains how to use the [`setUp()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.SetUpSpace) method on the `Space` resource of the Google Chat API to create a Chat space, and add members to it.

The [`Space` resource](./api/reference/rest/v1/spaces.md) represents a place where people and Chat apps can send messages, share files, and collaborate. There are several types of spaces:

- Direct messages (DMs) are conversations between two users or a user and a Chat app.
- Group chats are conversations between three or more users and Chat apps.
- Named spaces are persistent places where people send messages, share files, and collaborate.

You can use the `setUp()` method to do any of the following:

- Create a named space with initial members.
- Create a direct message (DM) between two people.
- Set up a group message between multiple people.

When setting up a space, consider the following:

- The calling (authenticated) user is automatically added to the space, so you don't need to specify the user's membership in the request.
- When creating a direct message (DM), if a DM exists between two users, then the DM is returned. Otherwise, a DM is created.
- When creating a group chat, if none of the memberships provided in the request are successfully added to the group chat (for example, permission issue), then an empty group chat (including only the calling user) might be created.
- You can't set up spaces with threaded replies or add people outside of your Google Workspace organization.
- Duplicate memberships (including the calling user) provided in the request are filtered out instead of resulting in a request error.
- When a Google Workspace administrator [installs a Chat app for their entire Google Workspace organization](https://support.google.com/a/answer/172482), Google Chat creates a DM between the installed Chat app and each user in the organization, so there's no need to programmatically set up DMs. Instead, [list spaces](./list-spaces.md) to return all DMs or [find a direct message](./find-direct-message-in-spaces.md) to get details about a specific DM.

## Prerequisites

### Node.js

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- Install the Node.js [Cloud Client Library](./libraries.md#cloud-client-libraries).
		- [Create OAuth client ID credentials](./authenticate-authorize-chat-user.md#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
	For guidance, complete the steps for setting up your environment in this [quickstart](./api/guides/quickstart/nodejs.md#set-up-environment).
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports user authentication.

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- Install the Python [Cloud Client Library](./libraries.md#cloud-client-libraries).
		- [Create OAuth client ID credentials](./authenticate-authorize-chat-user.md#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
	For guidance, complete the steps for setting up your environment in this [quickstart](./api/guides/quickstart/python.md#set-up-environment).
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports user authentication.

### Java

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- Install the Java [Cloud Client Library](./libraries.md#cloud-client-libraries).
		- [Create OAuth client ID credentials](./authenticate-authorize-chat-user.md#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
	For guidance, complete the steps for setting up your environment in this [quickstart](./api/guides/quickstart/java.md#set-up-environment).
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports user authentication.

### Apps Script

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- [Create a standalone Apps Script project](../../apps-script/guides/projects.md), and turn on the [Advanced Chat Service](../../apps-script/advanced/chat.md).
	For steps to set up your environment, complete this [quickstart](./api/guides/quickstart/apps-script.md).
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports user authentication.

## Set up a space

To set up a space, pass the following in your request:

- Specify the `chat.spaces.create` or `chat.spaces` authorization scope.
- Call the [`SetUpSpace()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.SetUpSpace) method.
- Pass `space` as an instance of [`Space`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space) with all the necessary fields such as `displayName` or `spaceType`.
- Pass `memberships` as an array of [`Membership`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Membership) instances. For each instance:
	- Specify `users/{user}` to add a human user as a space member, where `{user}` is either the `{person_id}` for the [`person`](https://developers.google.com/people/api/rest/v1/people) from the People API, or the ID of a [`user`](../admin/directory/reference/rest/v1/users.md) in the Directory API. For example, if the People API person `resourceName` is `people/123456789`, you can add the user to the space by including a membership with `users/123456789` as the `member.name`.
		- Specify `groups/{group}` to add a group as a space member, where `{group}` is the group ID that you want to create membership for. The ID for the group can be retrieved using the [Cloud Identity API](https://cloud.google.com/identity/docs/reference/rest/v1/groups/lookup). For example, if the [Cloud Identity API](https://cloud.google.com/identity/docs/reference/rest/v1/groups/lookup) returns a group with name `groups/123456789`, then set `membership.groupMember.name` to `groups/123456789`. Google Groups can't be added to a group chat or DM, but only to a named space.

To create a DM between the calling user and another human user, specify a membership of the human user in your request.

To create a DM between the calling user and the calling app, set `space.singleUserBotDm` to `true` and don't specify any memberships. You can only use this method to set up a DM with the calling app. To add the calling app as a member of a space or an existing DM between two human users, see [create a membership](./create-members.md).

The following example creates a named space and creates one membership to the space for two human users (the authenticated user and one other user).

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.spaces.create',
];

// This sample shows how to set up a named space with one initial member
// with user credential
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
    memberships: [
      {
        member: {
          // Replace USER_NAME here.
          name: 'users/USER_NAME',
          type: 'HUMAN',
        },
      },
    ],
  };

  // Make the request
  const response = await chatClient.setUpSpace(request);

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

def set_up_space_with_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.SetUpSpaceRequest(
        space = {
            "space_type": 'SPACE',
            # Replace DISPLAY_NAME here.
            "display_name": 'DISPLAY_NAME'
        },
        memberships = [{
            "member": {
                # Replace USER_NAME here.
                "name": 'users/USER_NAME',
                "type_": 'HUMAN'
            }
        }]
    )

    # Make the request
    response = client.set_up_space(request)

    # Handle the response
    print(response)

set_up_space_with_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.Membership;
import com.google.chat.v1.SetUpSpaceRequest;
import com.google.chat.v1.Space;
import com.google.chat.v1.User;

// This sample shows how to set up a named space with one initial member with
// user credential.
public class SetUpSpaceUserCred {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.spaces.create";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      SetUpSpaceRequest.Builder request = SetUpSpaceRequest.newBuilder()
        .setSpace(Space.newBuilder()
          .setSpaceType(Space.SpaceType.SPACE)
          // Replace DISPLAY_NAME here.
          .setDisplayName("DISPLAY_NAME"))
        .addAllMemberships(ImmutableList.of(Membership.newBuilder()
          .setMember(User.newBuilder()
            // Replace USER_NAME here.
            .setName("users/USER_NAME")
            .setType(User.Type.HUMAN)).build()));
      Space response = chatServiceClient.setUpSpace(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to set up a named space with one initial member with
 * user credential.
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.create'
 * referenced in the manifest file (appsscript.json).
 */
function setUpSpaceUserCred() {
  // Initialize request argument(s)
  const space = {
    spaceType: "SPACE",
    // TODO(developer): Replace DISPLAY_NAME here
    displayName: "DISPLAY_NAME",
  };
  const memberships = [
    {
      member: {
        // TODO(developer): Replace USER_NAME here
        name: "users/USER_NAME",
        // User type for the membership
        type: "HUMAN",
      },
    },
  ];

  // Make the request
  const response = Chat.Spaces.setup({
    space: space,
    memberships: memberships,
  });

  // Handle the response
  console.log(response);
}
```

To run the sample, replace the following:

- `DISPLAY_NAME`: the display name of the new space.
- `USER_NAME`: the ID of the other user to include a membership for.

To go to the space, use the space's resource ID to build the space's URL. You can get the resource ID from the space `name` in the Google Chat response body. For example, if your space's `name` is `spaces/1234567`, you can go to the space using the following URL: `https://mail.google.com/chat/u/0/#chat/space/1234567`.

## Related topics

- [Create a space](./create-spaces.md).
- [Get details about a space](./get-spaces.md).
- [List spaces](./list-spaces.md).
- [Update a space](./update-spaces.md).
- [Delete a space](./delete-spaces.md).
- [Find a direct message space](./find-direct-message-in-spaces.md).
- [Make a space discoverable to specific users](./space-target-audience.md).
