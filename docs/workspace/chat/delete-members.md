---
source: https://developers.google.com/workspace/chat/delete-members
root: workspace
fetched_at: 2026-04-23T15:25:21.107Z
---

# Remove a member from a space

## Page Summary

- This guide explains how to remove members from a Google Chat space using the `delete()` method of the Google Chat API.
- Space managers can't be removed if they're the only space manager; assign another user as a space manager before removing their membership.
- Google Workspace administrators can remove users, Google Groups, or Chat apps from any space in their organization.
- You can authenticate as a Chat user or as a Chat app to remove members, each with its own authorization scopes and prerequisites.
- App authentication, currently in Developer Preview, requires one-time administrator approval and has some limitations, such as Chat apps not being able to remove Google Groups.

This guide explains how to use the [`delete()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.DeleteMembership) method on the `Membership` resource of the Google Chat API to remove members from a space, also known as deleting a membership. Space managers can't be removed if they're the only space manager in a space. Assign another user as a space manager before removing these memberships.

If you're a Google Workspace administrator, you can remove users, Google Groups, or Chat apps from any space in your Google Workspace organization.

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
- A Google Chat space. To create one using the Google Chat API, see [Create a space](./create-spaces.md). To create one in Chat, visit the [Help Center documentation](https://support.google.com/chat/answer/12176488).

## Remove a member from a space as a user

To remove a user, Google Group, or Chat app from a space with [user authentication](./authenticate-authorize-chat-user.md), pass the following in your request:

- Specify the `chat.memberships` authorization scope. The authorizing user must have permission to remove the user or Google Group from the space. To remove a Chat app, specify the `chat.memberships.app` authorization scope (apps can only delete their own membership; not that of other apps). As a best practice, choose the most restrictive scope that still allows your app to function.
- Call the [`DeleteMembership()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.DeleteMembership) method.
- Pass the `name` of the membership to delete. If the membership belongs to the only space manager in a space, assign another user as a space manager before deleting this membership.

Here's how to delete a membership with [user authentication](./authenticate-authorize-chat-user.md):

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

To run this sample, replace the following:

- `SPACE_NAME`: the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `MEMBER_NAME`: the ID from the member's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Message.FIELDS.string.google.chat.v1.Message.name). You can obtain the ID by calling the [`ListMemberships()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListMemberships) method.

If successful, the response body returns the membership with `'state': 'NOT_A_MEMBER'`, indicating that the member is no longer in the space.

```
{
    "name": "spaces/SPACE_NAME/members/MEMBER_NAME",
    "state": "NOT_A_MEMBER"
}
```

## Remove a member from a space as a Chat app

App authentication requires one-time [administrator approval](./authenticate-authorize-chat-app.md#admin-approval).

To remove a user, Google Group, or Chat app from a space with [app authentication](./authenticate-authorize-chat-app.md), pass the following in your request:

- Specify the `chat.app.memberships` authorization scope. Deleting membership of a space manager is only supported in spaces created by Chat apps.
- Call the [`delete` method](./api/reference/rest/v1/spaces.members/delete.md) on the [`membership` resource](./api/reference/rest/v1/spaces.members.md).
- Pass the `name` of the membership to delete. If the membership belongs to the only space manager in a space, assign another user as a space manager before deleting this membership.

### Write a script that calls Chat API

Here's how to delete a membership with [app authentication](./authenticate-authorize-chat-app.md):

### Python

1. In your working directory, create a file named `chat_membership_delete_app.py`.
2. Include the following code in `chat_membership_delete_app.py`:
	```
	from google.oauth2 import service_account
	from apiclient.discovery import build
	# Define your app's authorization scopes.
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.app.memberships"]
	def main():
	    '''
	    Authenticates with Chat API using app authentication,
	    then deletes the specified membership.
	    '''
	    # Specify service account details.
	    creds = (
	        service_account.Credentials.from_service_account_file('credentials.json')
	        .with_scopes(SCOPES)
	    )
	    # Build a service endpoint for Chat API.
	    chat = build('chat', 'v1', credentials=creds)
	    # Use the service endpoint to call Chat API.
	    result = chat.spaces().members().delete(
	        # The membership to delete.
	        #
	        # Replace SPACE with a space name.
	        # Obtain the space name from the spaces resource of Chat API,
	        # or from a space's URL.
	        #
	        # Replace MEMBER with a membership name.
	        # Obtain the membership name from the memberships resource of
	        # Chat API. To delete a Chat app's membership, replace MEMBER
	        # with app; an alias for the app calling the API.
	        name='spaces/SPACE/members/MEMBER'
	    ).execute()
	    # Print Chat API's response in your command line interface.
	    # When deleting a membership, the response body is empty.
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace the following:
	- `SPACE`: a space name, which you can obtain from the [`spaces.list` method](./api/reference/rest/v1/spaces/list.md) in the Chat API, or from a space's URL.
		- `MEMBER`: a membership name, which you can obtain from the [`spaces.members.list` method](./api/reference/rest/v1/spaces.members/list.md) in the Chat API. To delete an app's membership, replace `MEMBER` with `app`.
4. In your working directory, build and run the sample:
	```
	python3 chat_membership_delete_app.py
	```

If successful, the response body returns the membership with `'state': 'NOT_A_MEMBER'`, indicating that the member is no longer in the space.

```
{
    "name": "spaces/SPACE/members/MEMBER",
    "state": "NOT_A_MEMBER"
}
```

## Remove users or Google Groups from a space as a Google Workspace administrator

If you're a Google Workspace administrator, you can call the `DeleteMembership()` method to remove users, Google Groups, or Chat apps from any space in your Google Workspace organization.

To call this method as a Google Workspace administrator, do the following:

- Call the method using user authentication, and specify an [authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports calling the method using [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges).
- In your request, specify the query parameter `useAdminAccess` to `true`.

For more information and examples, see [Manage Google Chat spaces as a Google Workspace administrator](./admin-overview.md).

## Limitations and considerations

- With [app authentication](./authenticate-authorize-chat-app.md), a Chat app can remove users, but not Google Groups or Chat apps.

## Related topics

- [Get details about a user's or Chat app's membership](./get-members.md).
- [List members in a space](./list-members.md).
- [Update a user's membership in a Google Chat space](./update-members.md).
- [Invite or add a user or Chat app to a space](./create-members.md).
