---
source: https://developers.google.com/workspace/chat/update-members
root: workspace
fetched_at: 2026-04-23T15:25:38.964Z
---

# Update a user's membership in a Google Chat space

## Page Summary

- This guide focuses on updating Google Chat space memberships, such as changing a member's role, using the `update()` method.
- Before proceeding, ensure you have a Google Workspace account, a Google Cloud project with the Chat API enabled, Node.js with the Cloud Client Library installed, and appropriate authentication credentials.
- Updating a membership requires authorization with relevant scopes, calling the `UpdateMembership()` method with the membership object and updateMask, and potentially modifying roles using provided code samples.
- Google Workspace administrators can update memberships for any space by utilizing user authentication with specific scopes and the `useAdminAccess` query parameter.

This guide explains how to use the [`update()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.UpdateMembership) method on the `Membership` resource of the Google Chat API to change attributes about a membership, like changing a space member to a space manager or a space owner.

If you're a Google Workspace administrator, you can call the `update()` method to update any space's membership in your Google Workspace organization.

The [`Membership` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members) represents whether a human user or Google Chat app is invited to, part of, or absent from a space.

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

## Update a membership

To update a space membership, pass the following in your request:

- Specify an authorization scope:
	- With [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), specify the `chat.memberships` authorization scope.
		- With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), specify the `chat.app.memberships` authorization scope. When updating a membership with app authentication, you can only update memberships in spaces created by Chat apps. App authentication requires one-time [administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app#admin-approval).
- Call the [`UpdateMembership()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.UpdateMembership) method.
- Pass `membership` as an instance of [`Membership`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Membership) with the following:
	- The `name` field set to the membership to update, which includes a space ID and a member ID.
		- The membership fields to update set to the new values.
- Pass `updateMask` to specify the aspects of the membership to update, it includes the following:
	- `role`: User's role within a Chat space, which determines their permitted actions in the space. For detailed permission explanations, see [`MembershipRole`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members#membershiprole) in the Chat API reference documentation. Possible values are:
		- `ROLE_MEMBER`: A member of the space. In the Chat UI, this role is called **Member**.
				- `ROLE_ASSISTANT_MANAGER`: A space manager. In the Chat UI, this role is called **Manager**.
				- `ROLE_MANAGER`: A space owner. In the Chat UI, this role is called **Owner**.

### Change a member to an owner (user authentication)

The following example calls the Chat API using [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) to make a regular space member a space owner by specifying `role` as `ROLE_MANAGER`:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.memberships',
];

// This sample shows how to update a membership with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    membership: {
      // Replace SPACE_NAME and MEMBER_NAME here
      name: 'spaces/SPACE_NAME/members/MEMBER_NAME',
      // Replace ROLE_NAME here with ROLE_MEMBER or ROLE_MANAGER
      role: 'ROLE_NAME',
    },
    updateMask: {
      // The field paths to update.
      paths: ['role'],
    },
  };

  // Make the request
  const response = await chatClient.updateMembership(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run the sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MEMBER_NAME`: the ID from the membership's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Membership.FIELDS.string.google.chat.v1.Membership.name). You can obtain the ID by calling the [`ListMemberships()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListMemberships) method, or from the response body returned after creating a membership asynchronously with the Chat API.
- `ROLE_NAME`: the updated role, `ROLE_MANAGER`. You can set this value to any value of [`MembershipRole`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members#membershiprole). For example, to make the regular member a space manager, change `ROLE_NAME` to `ROLE_ASSISTANT_MANAGER` instead.

The Google Chat API updates the specified membership to a space owner and returns an instance of [`Membership`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Membership).

### Change an owner to a member (user authentication)

The following example calls the Chat API using [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) to make a space owner a regular space member by specifying `role` as `ROLE_MEMBER`:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.memberships',
];

// This sample shows how to update a membership with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    membership: {
      // Replace SPACE_NAME and MEMBER_NAME here
      name: 'spaces/SPACE_NAME/members/MEMBER_NAME',
      // Replace ROLE_NAME here with ROLE_MEMBER or ROLE_MANAGER
      role: 'ROLE_NAME',
    },
    updateMask: {
      // The field paths to update.
      paths: ['role'],
    },
  };

  // Make the request
  const response = await chatClient.updateMembership(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run the sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MEMBER_NAME`: the ID from the membership's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Membership.FIELDS.string.google.chat.v1.Membership.name). You can obtain the ID by calling the [`ListMemberships()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListMemberships) method, or from the response body returned after creating a membership asynchronously with the Chat API.
- `ROLE_NAME`: the updated role, `ROLE_MEMBER`.

The Google Chat API updates the specified membership to a space owner and returns an instance of [`Membership`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Membership).

### Change a member to an owner (Chat app authentication)

App authentication requires one-time [administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app#admin-approval).

#### Write a script that calls the Chat API

The following example calls the Chat API using [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) to make a regular space member a space owner by specifying `role` as `ROLE_MANAGER` in the `body` that specifies updated membership attributes:

### Python

1. In your working directory, create a file named `chat_membership_update_to_owner_app.py`.
2. Include the following code in `chat_membership_update_to_owner_app.py`:
	```
	from google.oauth2 import service_account
	from apiclient.discovery import build
	# Define your app's authorization scopes.
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.app.memberships"]
	def main():
	    '''
	    Authenticates with Chat API using app authentication,
	    then updates a specified space member to change
	    it from a regular member to a space owner.
	    '''
	    # Specify service account details.
	    creds = (
	        service_account.Credentials.from_service_account_file('credentials.json')
	        .with_scopes(SCOPES)
	    )
	    # Build a service endpoint for Chat API.
	    chat = build('chat', 'v1', credentials=creds)
	    # Use the service endpoint to call Chat API.
	    result = chat.spaces().members().patch(
	        # The membership to update, and the updated role.
	        #
	        # Replace SPACE with a space name.
	        # Obtain the space name from the spaces resource of Chat API,
	        # or from a space's URL.
	        #
	        # Replace MEMBERSHIP with a membership name.
	        # Obtain the membership name from the membership of Chat API.
	        name='spaces/SPACE/members/MEMBERSHIP',
	        updateMask='role',
	        # Replace ROLE with a MembershipRole value.
	        # Obtain the MembershipRole values from the membership of Chat API.
	        body={'role': 'ROLE'}
	      ).execute()
	    # Prints details about the updated membership.
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace the following:
	- `SPACE`: a space name, which you can obtain from the [`spaces.list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) in the Chat API, or from a space's URL.
		- `MEMBERSHIP`: a membership name, which you can obtain from the [`spaces.members.list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list) in the Chat API.
		- `ROLE`: the updated role, `ROLE_MANAGER`. You can set this value to any value of [`MembershipRole`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members#membershiprole). For example, to make the regular member a space manager, change `ROLE` to `ROLE_ASSISTANT_MANAGER` instead.
4. In your working directory, build and run the sample:
	```
	python3 chat_membership_update_to_owner_app.py
	```

### Change an owner to a member (Chat app authentication)

App authentication requires one-time [administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app#admin-approval).

#### Write a script that calls the Chat API

The following example calls the Chat API using [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) to make a space owner a regular space member by specifying `role` as `ROLE_MEMBER` in the `body` that specifies updated membership attributes:

### Python

1. In your working directory, create a file named `chat_membership_update_to_member_app.py`.
2. Include the following code in `chat_membership_update_to_member_app.py`:
	```
	from google.oauth2 import service_account
	from apiclient.discovery import build
	# Define your app's authorization scopes.
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.app.memberships"]
	def main():
	    '''
	    Authenticates with Chat API via user credentials,
	    then updates a specified space owner to change
	    it to a regular member.
	    '''
	    # Specify service account details.
	    creds = (
	        service_account.Credentials.from_service_account_file('credentials.json')
	        .with_scopes(SCOPES)
	    )
	    # Build a service endpoint for Chat API.
	    chat = build('chat', 'v1', credentials=creds)
	    # Use the service endpoint to call Chat API.
	    result = chat.spaces().members().patch(
	        # The membership to update, and the updated role.
	        #
	        # Replace SPACE with a space name.
	        # Obtain the space name from the spaces resource of Chat API,
	        # or from a space's URL.
	        #
	        # Replace MEMBERSHIP with a membership name.
	        # Obtain the membership name from the membership of Chat API.
	        name='spaces/SPACE/members/MEMBERSHIP',
	        updateMask='role',
	        body={'role': 'ROLE_MEMBER'}
	      ).execute()
	    # Prints details about the updated membership.
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace the following:
	- `SPACE`: a space name, which you can obtain from the [`spaces.list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) in the Chat API, or from a space's URL.
		- `MEMBERSHIP`: a membership name, which you can obtain from the [`spaces.members.list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list) in the Chat API.
4. In your working directory, build and run the sample:
	```
	python3 chat_membership_update_to_member_app.py
	```

## Update memberships as a Google Workspace administrator

If you're a Google Workspace administrator, you can call the `update()` method to update memberships for any space in your Google Workspace organization.

To call this method as a Google Workspace administrator, do the following:

- Call the method using user authentication, and specify an [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) that supports calling the method using [administrator privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges).
- In your request, specify the query parameter `useAdminAccess` to `true`.

For more information and examples, see [Manage Google Chat spaces as a Google Workspace administrator](https://developers.google.com/workspace/chat/admin-overview).

## Related topics

- [Invite or add a user or a Google Chat app to a space](https://developers.google.com/workspace/chat/create-members).
- [Get details about a user's or Chat app's membership](https://developers.google.com/workspace/chat/get-members).
- [List members in a space](https://developers.google.com/workspace/chat/list-members).
- [Remove a user or Chat app from a space](https://developers.google.com/workspace/chat/delete-members).
