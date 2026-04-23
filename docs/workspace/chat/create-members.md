---
source: https://developers.google.com/workspace/chat/create-members
root: workspace
fetched_at: 2026-04-23T15:25:20.021Z
---

# Invite or add a user, Google Group, or Google Chat app to a space

## Page Summary

- The Google Chat API allows you to programmatically add users, Google Groups, or Chat apps to spaces using the `create()` method and specifying the member type and identifier.
- Authentication can be done as a Chat user, a Chat app (with limitations), or a Google Workspace administrator with `useAdminAccess`.
- Google Groups can only be added to named spaces, not direct messages or group chats, using user authentication with the `chat.memberships` scope.
- When adding members, consider the auto-accept policy: if enabled, the member joins directly; otherwise, they receive an invitation.
- Refer to the provided code samples (Node.js, Python, Java, Apps Script) and replace placeholders with your specific values.

This guide explains how to use the [`create()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateMembership) method on the `Membership` resource of the Google Chat API to invite or add a user, Google Group, or Chat app to a space also known as creating a membership. When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space.

If you're a Google Workspace administrator, you can add users, Google Groups, or Chat apps to any space in your Google Workspace organization.

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

### Apps Script

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- [Create a standalone Apps Script project](../../apps-script/guides/projects.md), and turn on the [Advanced Chat Service](../../apps-script/advanced/chat.md).
		- In this guide, you must use either [user or app authentication](./authenticate-authorize.md). To authenticate as the Chat app, create service account credentials. For steps, see [Authenticate and authorize as a Google Chat app](./authenticate-authorize-chat-app.md).
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.

## Invite or add a user to a space as a user

To invite or add a user to a space with [user authentication](./authenticate-authorize-chat-user.md), pass the following in your request:

- Specify the `chat.memberships` authorization scope.
- Call the [`CreateMembership()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateMembership) method.
- Pass `parent` as the resource name of the space in which to create membership.
- Pass `membership` as an instance of [`Membership`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Membership) with its field `member` set with the following:
	- The `type` field set to `HUMAN`.
		- The `name` field set to `users/{user}` where `{user}` is the person that you want to add to the space. To [specify the Chat user](./identify-reference-users.md), replace `{user}` with any of the following:
		- The ID for the [person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, if the People API [person](https://developers.google.com/people/api/rest/v1/people) `resourceName` is `people/123456789`, then user the value `users/123456789`.
				- The ID for the [user](../admin/directory/reference/rest/v1/users.md) in the Directory API.
				- The user's email address. For example, `users/222larabrown@gmail.com` or `users/larabrown@cymbalgroup.com`. If the user uses a Google Account or belongs to a different Google Workspace organization, you must use their email address.

The following example adds a user to a space with [user authentication](./authenticate-authorize-chat-user.md):

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.memberships',
];

// This sample shows how to create membership with user credential for a human
// user
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME here.
    parent: 'spaces/SPACE_NAME',
    membership: {
      member: {
        // Replace USER_NAME here
        name: 'users/USER_NAME',
        // User type for the membership
        type: 'HUMAN',
      },
    },
  };

  // Make the request
  const response = await chatClient.createMembership(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat

SCOPES = ["https://www.googleapis.com/auth/chat.memberships"]

# This sample shows how to create membership with user credential for a human
# user
def create_membership_with_user_cred():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.CreateMembershipRequest(
        # Replace SPACE_NAME here
        parent = "spaces/SPACE_NAME",
        membership = {
            "member": {
                # Replace USER_NAME here
                "name": "users/USER_NAME",
                # user type for the membership
                "type_": "HUMAN"
            }
        }
    )

    # Make the request
    response = client.create_membership(request)

    # Handle the response
    print(response)

create_membership_with_user_cred()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.CreateMembershipRequest;
import com.google.chat.v1.Membership;
import com.google.chat.v1.SpaceName;
import com.google.chat.v1.User;

// This sample shows how to create membership with user credential for a human
// user.
public class CreateMembershipUserCred {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.memberships";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      CreateMembershipRequest.Builder request = CreateMembershipRequest.newBuilder()
        // replace SPACE_NAME here
        .setParent("spaces/SPACE_NAME")
        .setMembership(Membership.newBuilder()
          .setMember(User.newBuilder()
            // replace USER_NAME here
            .setName("users/USER_NAME")
            // user type for the membership
            .setType(User.Type.HUMAN)));
      Membership response = chatServiceClient.createMembership(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to create membership with user credential for a human user
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.memberships'
 * referenced in the manifest file (appsscript.json).
 */
function createMembershipUserCred() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME here.
  const parent = "spaces/SPACE_NAME";
  const membership = {
    member: {
      // TODO(developer): Replace USER_NAME here
      name: "users/USER_NAME",
      // User type for the membership
      type: "HUMAN",
    },
  };

  // Make the request
  const response = Chat.Spaces.Members.create(membership, parent);

  // Handle the response
  console.log(response);
}
```

To run the sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `USER_NAME`: a user ID.

The Chat API returns an instance of [`Membership`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Membership) that details the user membership that was created.

### Invite or add a Google Group to a space

To invite or add a Google Group to a space with [user authentication](./authenticate-authorize-chat-user.md) ([App authentication](./authenticate-authorize-chat-app.md) doesn't support inviting or adding a Google Group to a space), pass the following in your request:

- Specify the `chat.memberships` authorization scope.
- Call the [`CreateMembership()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateMembership) method.
- Pass `parent` as the resource name of the space in which to create membership.
- Pass `membership` as an instance of [`Membership`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Membership) with the field `name` of `groupMember` set to `groups/{group}` where `{group}` is the group ID that you want to create membership for. The ID for the group can be retrieved using the [Cloud Identity API](https://cloud.google.com/identity/docs/reference/rest/v1/groups/lookup).

Google Groups can't be added to a group chat or direct message, but only to a named space.

The following example adds a group to a named space with user authentication:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.memberships',
];

// This sample shows how to create membership with user credential for a group
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME here.
    parent: 'spaces/SPACE_NAME',
    membership: {
      groupMember: {
        // Replace GROUP_NAME here
        name: 'groups/GROUP_NAME',
      },
    },
  };

  // Make the request
  const response = await chatClient.createMembership(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat

SCOPES = ["https://www.googleapis.com/auth/chat.memberships"]

# This sample shows how to create membership with user credential for a group
def create_membership_with_user_cred_for_group():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.CreateMembershipRequest(
        # Replace SPACE_NAME here
        parent = "spaces/SPACE_NAME",
        membership = {
            "groupMember": {
                # Replace GROUP_NAME here
                "name": "groups/GROUP_NAME"
            }
        }
    )

    # Make the request
    response = client.create_membership(request)

    # Handle the response
    print(response)

create_membership_with_user_cred_for_group()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.CreateMembershipRequest;
import com.google.chat.v1.Membership;
import com.google.chat.v1.SpaceName;
import com.google.chat.v1.Group;

// This sample shows how to create membership with user credential for a group.
public class CreateMembershipUserCredForGroup {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.memberships";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      CreateMembershipRequest.Builder request = CreateMembershipRequest.newBuilder()
        // replace SPACE_NAME here
        .setParent("spaces/SPACE_NAME")
        .setMembership(Membership.newBuilder()
          .setGroupMember(Group.newBuilder()
            // replace GROUP_NAME here
            .setName("groups/GROUP_NAME")));
      Membership response = chatServiceClient.createMembership(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to create membership with user credential for a group
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.memberships'
 * referenced in the manifest file (appsscript.json).
 */
function createMembershipUserCredForGroup() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME here.
  const parent = "spaces/SPACE_NAME";
  const membership = {
    groupMember: {
      // TODO(developer): Replace GROUP_NAME here
      name: "groups/GROUP_NAME",
    },
  };

  // Make the request
  const response = Chat.Spaces.Members.create(membership, parent);

  // Handle the response
  console.log(response);
}
```

To run the sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `GROUP_NAME`: a group ID.

The Chat API returns an instance of [`Membership`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Membership) that details the user membership that was created.

## Add a Chat app to a space

A Chat app can't add another app as a member to a space. To add a Chat app to a space or a direct message between two human users, pass the following in your request with [user authentication](./authenticate-authorize-chat-user.md) ([App authentication](./authenticate-authorize-chat-app.md) doesn't support inviting or adding a Chat app to a space):

- Specify the `chat.memberships.app` authorization scope.
- Call the [`CreateMembership()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.CreateMembership) method.
- Pass `parent` as the resource name of the space in which to create membership.
- Pass `membership` as an instance of [`Membership`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Membership) with its field `member` set with the following:
	- The `type` field set to `BOT`.
		- The `name` field set to `users/app`; an alias that represents the app calling the Chat API.

The following example adds a Chat app to a space:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.memberships.app',
];

// This sample shows how to create an app membership.
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME here.
    parent: 'spaces/SPACE_NAME',
    membership: {
      member: {
        // Member name for app membership, do not change this
        name: 'users/app',
        // User type for the membership
        type: 'BOT',
      },
    },
  };

  // Make the request
  const response = await chatClient.createMembership(request);

  // Handle the response
  console.log(response);
}

await main();
```

### Python

```
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat

SCOPES = ["https://www.googleapis.com/auth/chat.memberships.app"]

# This sample shows how to create membership with app credential for an app
def create_membership_with_user_cred_for_app():
    # Create a client
    client = create_client_with_user_credentials(SCOPES)

    # Initialize request argument(s)
    request = google_chat.CreateMembershipRequest(
        # Replace SPACE_NAME here
        parent = "spaces/SPACE_NAME",
        membership = {
            "member": {
                # member name for app membership, do not change this.
                "name": "users/app",
                # user type for the membership
                "type_": "BOT"
            }
        }
    )

    # Make the request
    response = client.create_membership(request)

    # Handle the response
    print(response)

create_membership_with_user_cred_for_app()
```

### Java

```
import com.google.chat.v1.ChatServiceClient;
import com.google.chat.v1.CreateMembershipRequest;
import com.google.chat.v1.Membership;
import com.google.chat.v1.SpaceName;
import com.google.chat.v1.User;

// This sample shows how to create membership with user credential for the
// calling app.
public class CreateMembershipUserCredForApp {

  private static final String SCOPE =
    "https://www.googleapis.com/auth/chat.memberships.app";

  public static void main(String[] args) throws Exception {
    try (ChatServiceClient chatServiceClient =
        AuthenticationUtils.createClientWithUserCredentials(
          ImmutableList.of(SCOPE))) {
      CreateMembershipRequest.Builder request = CreateMembershipRequest.newBuilder()
        // replace SPACE_NAME here
        .setParent("spaces/SPACE_NAME")
        .setMembership(Membership.newBuilder()
          .setMember(User.newBuilder()
            // member name for app membership, do not change this.
            .setName("users/app")
            // user type for the membership
            .setType(User.Type.BOT)));
      Membership response = chatServiceClient.createMembership(request.build());

      System.out.println(JsonFormat.printer().print(response));
    }
  }
}
```

### Apps Script

```
/**
 * This sample shows how to create membership with app credential for an app
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.memberships.app'
 * referenced in the manifest file (appsscript.json).
 */
function createMembershipUserCredForApp() {
  // Initialize request argument(s)
  // TODO(developer): Replace SPACE_NAME here.
  const parent = "spaces/SPACE_NAME";
  const membership = {
    member: {
      // Member name for app membership, do not change this
      name: "users/app",
      // User type for the membership
      type: "BOT",
    },
  };

  // Make the request
  const response = Chat.Spaces.Members.create(membership, parent);

  // Handle the response
  console.log(response);
}
```

To run the sample, replace `SPACE_NAME` with the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

The Chat API returns an instance of [`Membership`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Membership) that details the user membership that was created.

## Invite or add a user to a space as a Chat app

App authentication requires one-time [administrator approval](./authenticate-authorize-chat-app.md#admin-approval).

To invite or add a user to a space with [app authentication](./authenticate-authorize-chat-app.md), pass the following in your request:

- Specify the `chat.app.memberships` authorization scope.
- Call the [`create` method](./api/reference/rest/v1/spaces.members/create.md) on the [`membership` resource](./api/reference/rest/v1/spaces.members.md).
- Set `parent` to the resource name of the space in which to create membership.
- Set `member` to `users/{user}` where `{user}` is the person that you want to create membership for, and is either:
	- The ID for the [person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, if the People API [person](https://developers.google.com/people/api/rest/v1/people) `resourceName` is `people/123456789`, then set `membership.member.name` to `users/123456789`.
		- The ID for the [user](../admin/directory/reference/rest/v1/users.md) in the Directory API.
		- The user's email address. For example, `users/222larabrown@gmail.com` or `users/larabrown@cymbalgroup.com`. If the user uses a Google Account or belongs to a different Google Workspace organization, you must use their email address.

### Write a script that calls Chat API

The following example adds a user to a space with [app authentication](./authenticate-authorize-chat-app.md):

### Python

1. In your working directory, create a file named `chat_membership_app_create.py`.
2. Include the following code in `chat_membership_app_create.py`:
	```
	from google.oauth2 import service_account
	from apiclient.discovery import build
	# Define your app's authorization scopes.
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.app.memberships"]
	def main():
	    '''
	    Authenticates with Chat API using app authentication,
	    then adds a user to a Chat space by creating a membership.
	    '''
	    # Specify service account details.
	    creds = (
	        service_account.Credentials.from_service_account_file('credentials.json')
	        .with_scopes(SCOPES)
	    )
	    # Build a service endpoint for Chat API.
	    chat = build('chat', 'v1', credentials=creds)
	    # Use the service endpoint to call Chat API.
	    result = chat.spaces().members().create(
	        # The space in which to create a membership.
	        parent = 'spaces/SPACE',
	        # Specify which user the membership is for.
	        body = {
	          'member': {
	            'name':'users/USER',
	            'type': 'HUMAN'
	          }
	        }
	    ).execute()
	    # Prints details about the created membership.
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace the following:
	- `SPACE`: a space name, which you can obtain from the [`spaces.list` method](./api/reference/rest/v1/spaces/list.md) in the Chat API, or from a space's URL.
		- `USER`: a user ID.
4. In your working directory, build and run the sample:
	```
	python3 chat_membership_app_create.py
	```

## Add users or Google Groups to a space as a Google Workspace administrator

If you're a Google Workspace administrator, you can call the `create()` method to add users, Google Groups, or Chat apps to any space in your Google Workspace organization.

To call this method as a Google Workspace administrator, do the following:

- Call the method using user authentication, and specify an [authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports calling the method using [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges).
- In your request, specify the query parameter `useAdminAccess` to `true`.

For more information and examples, see [Manage Google Chat spaces as a Google Workspace administrator](./admin-overview.md).

## Limitations and considerations

- With [App authentication](./authenticate-authorize-chat-app.md), a Chat app can invite or add users, but not Google Groups or Chat apps. To add itself, a Chat app must use [user authentication](./authenticate-authorize-chat-user.md) with the `chat.memberships` authorization scope.

## Related topics

- [Get details about a user's or Chat app's membership](./get-members.md).
- [List members in a space](./list-members.md).
- [Update a user's membership in a Google Chat space](./update-members.md).
- [Remove a user or Chat app from a space](./delete-members.md).
