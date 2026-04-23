---
source: https://developers.google.com/workspace/chat/get-space-event
root: workspace
fetched_at: 2026-04-23T15:25:26.619Z
---

# Get details about a Google Chat space event

## Page Summary

- This guide explains how to retrieve details about specific events within a Google Chat space using the `get()` method of the Google Chat API.
- The `SpaceEvent` resource tracks changes in a space, and this guide details how to access information about these events.
- To use this functionality, you need a Google Workspace account, appropriate authorization, and a configured Google Cloud project.
- You must provide the correct authorization scope, space name, and space event name to successfully retrieve the event details.
- The API returns a `SpaceEvent` object containing comprehensive information about the requested event.

This guide explains how to use the [`get()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetSpaceEvent) method on the `SpaceEvent` resource of the Google Chat API to get details about an event from a Google Chat space.

The [`SpaceEvent` resource](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceEvent) represents a change to a space or its child resources, such as messages, reactions, and memberships. To learn about the supported event types, see the [`eventType` field of the `SpaceEvent` resource](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceEvent.FIELDS.string.google.chat.v1.SpaceEvent.event_type) reference documentation.

You can request events up to 28 days before the time of the request. The event contains the most recent version of the resource that changed. For example, if you request an event about a new message but the message was later updated, the server returns the updated `Message` resource in the event payload.

To call this method, you must use [user authentication](./authenticate-authorize-chat-user.md). To get an event, the authenticated user must be a member of the space where the event occurred.

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

## Get details about a space event (user authentication)

To get details about a space event in Google Chat, pass the following in your request:

- Specify an authorization scope that supports the event type in your request. As a best practice, choose the most restrictive scope that still allows your app to function.
- Call the [`GetSpaceEvent()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.GetSpaceEvent) method, passing the `name` of the space event to get.

The following example gets a space event:

### Node.js

This Node.js code sample uses the [Chat RPC API](./api/reference/rpc.md).

```
import {createClientWithUserCredentials} from './authentication-utils.js';

// Replace SCOPE_NAME here with an authorization scope based on the event type
const USER_AUTH_OAUTH_SCOPES = ['SCOPE_NAME'];

// This sample shows how to get space event with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME and SPACE_EVENT_NAME here
    name: 'spaces/SPACE_NAME/spaceEvents/SPACE_EVENT_NAME',
  };

  // Make the request
  const response = await chatClient.getSpaceEvent(request);

  // Handle the response
  console.log(response);
}

await main();
```

To run this sample, replace the following:

- `SCOPE_NAME`: an authorization scope based on the event type. For example, if you are getting a space event about a new membership, use the `chat.memberships.readonly` scope, formatted as `https://www.googleapis.com/auth/chat.memberships.readonly`. You can obtain the event type from the [`ListSpaceEvents()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaceEvents) method. To learn how to use this method, see [List events from a space](./list-space-events.md).
- `SPACE_NAME`: the ID from the space's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `SPACE_EVENT_NAME`: the ID from the space event's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceEvent.FIELDS.string.google.chat.v1.SpaceEvent.name). You can obtain the ID from the [`ListSpaceEvents()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaceEvents) method. To learn how to use this method, see [List events from a space](./list-space-events.md).

The Chat API returns an instance of [`SpaceEvent`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceEvent) with details about the event.

## Get details about a space event (Chat app authentication)

App authentication requires one-time [administrator approval](./authenticate-authorize-chat-app.md#admin-approval).

To get details about a space event from a space with [app authentication](./authenticate-authorize-chat-app.md) using the [Chat REST API](./api/reference/rest.md), pass the following in your request:

- Specify one or more authorization scopes to support each event type in your request. As a best practice, choose the most restrictive scope that still allows your app to function. To learn more about choosing a scope, see the [Authentication and authorization overview](./authenticate-authorize.md#space-events).
	- `https://www.googleapis.com/auth/chat.app.memberships`
		- `https://www.googleapis.com/auth/chat.app.memberships.readonly`
		- `https://www.googleapis.com/auth/chat.app.messages.readonly`
		- `https://www.googleapis.com/auth/chat.app.spaces`
		- `https://www.googleapis.com/auth/chat.app.spaces.readonly`
- Call the [`get` method](./api/reference/rest/v1/spaces.spaceEvents/get.md) on the [`spaceEvents` resource](./api/reference/rest/v1/spaces.spaceEvents.md).
- Pass the `name` of the space to get event details from.

### Write a script that calls Chat API

Here's how to get details about a space event with [app authentication](./authenticate-authorize-chat-app.md) and the [Chat REST API](./api/reference/rest.md):

### Python

This Python code sample uses the [Chat REST API](./api/reference/rest.md).

1. In your working directory, create a file named `chat_spaceevents_get_app.py`.
2. Include the following code in `chat_spaceevents_get_app.py`:
	```
	from google.oauth2 import service_account
	from apiclient.discovery import build
	# Define your app's authorization scopes.
	# Set authorization scopes based on the
	# event type. For example, if you are getting a space event
	# about a new membership, use the \`chat.app.memberships\` scope.
	#
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.app.memberships",
	          "https://www.googleapis.com/auth/chat.app.memberships.readonly",
	          "https://www.googleapis.com/auth/chat.app.messages.readonly",
	          "https://www.googleapis.com/auth/chat.app.spaces",
	          "https://www.googleapis.com/auth/chat.app.spaces.readonly"]
	def main():
	    '''
	    Authenticates with Chat API using app authentication,
	    then lists space events from a specified space.
	    '''
	    # Specify service account details.
	    creds = (
	        service_account.Credentials.from_service_account_file('credentials.json')
	        .with_scopes(SCOPES)
	    )
	    # Build a service endpoint for Chat API.
	    chat = build('chat', 'v1', credentials=creds)
	    # Use the service endpoint to call Chat API.
	    result = chat.spaces().spaceEvents().get(
	        # The space to get event details from.
	        #
	        # Replace SPACE_NAME with a space name.
	        # Obtain the space name from the spaces resource of Chat API,
	        # or from a space's URL.
	        name='spaces/SPACE_NAME/spaceEvents/SPACE_EVENT_NAME',
	    ).execute()
	    # Print Chat API's response in your command line interface.
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace the following:
	- `SPACE_NAME`: a space name, which you can obtain from the [`spaces.list` method](./api/reference/rest/v1/spaces/list.md) in the Chat API, or from a space's URL.
		- `SPACE_EVENT_NAME`: the ID from the space event's [`name`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.SpaceEvent.FIELDS.string.google.chat.v1.SpaceEvent.name). You can obtain the ID from the [`ListSpaceEvents()`](./api/reference/rpc/google.chat.v1.md#google.chat.v1.ChatService.ListSpaceEvents) method. To learn how to use this method, see [List events from a space](./list-space-events.md).
4. In your working directory, build and run the sample:
	```
	python3 chat_spaceevents_get_app.py
	```

The Chat API returns a list of [paginated list of space events](./api/reference/rpc/google.chat.v1.md#listspaceeventsresponse) about new memberships and messages.

## Related topics

- [Work with events from Google Chat](./events-overview.md)
- [List events from a Google Chat space](./list-space-events.md)
