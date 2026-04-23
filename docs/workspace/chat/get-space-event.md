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

This guide explains how to use the [`get()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.GetSpaceEvent) method on the `SpaceEvent` resource of the Google Chat API to get details about an event from a Google Chat space.

The [`SpaceEvent` resource](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceEvent) represents a change to a space or its child resources, such as messages, reactions, and memberships. To learn about the supported event types, see the [`eventType` field of the `SpaceEvent` resource](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceEvent.FIELDS.string.google.chat.v1.SpaceEvent.event_type) reference documentation.

You can request events up to 28 days before the time of the request. The event contains the most recent version of the resource that changed. For example, if you request an event about a new message but the message was later updated, the server returns the updated `Message` resource in the event payload.

To call this method, you must use [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). To get an event, the authenticated user must be a member of the space where the event occurred.

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

## Get details about a space event (user authentication)

To get details about a space event in Google Chat, pass the following in your request:

- Specify an authorization scope that supports the event type in your request. As a best practice, choose the most restrictive scope that still allows your app to function.
- Call the [`GetSpaceEvent()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.GetSpaceEvent) method, passing the `name` of the space event to get.

The following example gets a space event:

### Node.js

This Node.js code sample uses the [Chat RPC API](https://developers.google.com/workspace/chat/api/reference/rpc).

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

- `SCOPE_NAME`: an authorization scope based on the event type. For example, if you are getting a space event about a new membership, use the `chat.memberships.readonly` scope, formatted as `https://www.googleapis.com/auth/chat.memberships.readonly`. You can obtain the event type from the [`ListSpaceEvents()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaceEvents) method. To learn how to use this method, see [List events from a space](https://developers.google.com/workspace/chat/list-space-events).
- `SPACE_NAME`: the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.
- `SPACE_EVENT_NAME`: the ID from the space event's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceEvent.FIELDS.string.google.chat.v1.SpaceEvent.name). You can obtain the ID from the [`ListSpaceEvents()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaceEvents) method. To learn how to use this method, see [List events from a space](https://developers.google.com/workspace/chat/list-space-events).

The Chat API returns an instance of [`SpaceEvent`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceEvent) with details about the event.

## Get details about a space event (Chat app authentication)

App authentication requires one-time [administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app#admin-approval).

To get details about a space event from a space with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) using the [Chat REST API](https://developers.google.com/workspace/chat/api/reference/rest), pass the following in your request:

- Specify one or more authorization scopes to support each event type in your request. As a best practice, choose the most restrictive scope that still allows your app to function. To learn more about choosing a scope, see the [Authentication and authorization overview](https://developers.google.com/workspace/chat/authenticate-authorize#space-events).
	- `https://www.googleapis.com/auth/chat.app.memberships`
		- `https://www.googleapis.com/auth/chat.app.memberships.readonly`
		- `https://www.googleapis.com/auth/chat.app.messages.readonly`
		- `https://www.googleapis.com/auth/chat.app.spaces`
		- `https://www.googleapis.com/auth/chat.app.spaces.readonly`
- Call the [`get` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents/get) on the [`spaceEvents` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents).
- Pass the `name` of the space to get event details from.

### Write a script that calls Chat API

Here's how to get details about a space event with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and the [Chat REST API](https://developers.google.com/workspace/chat/api/reference/rest):

### Python

This Python code sample uses the [Chat REST API](https://developers.google.com/workspace/chat/api/reference/rest).

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
	- `SPACE_NAME`: a space name, which you can obtain from the [`spaces.list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) in the Chat API, or from a space's URL.
		- `SPACE_EVENT_NAME`: the ID from the space event's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceEvent.FIELDS.string.google.chat.v1.SpaceEvent.name). You can obtain the ID from the [`ListSpaceEvents()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaceEvents) method. To learn how to use this method, see [List events from a space](https://developers.google.com/workspace/chat/list-space-events).
4. In your working directory, build and run the sample:
	```
	python3 chat_spaceevents_get_app.py
	```

The Chat API returns a list of [paginated list of space events](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#listspaceeventsresponse) about new memberships and messages.

## Related topics

- [Work with events from Google Chat](https://developers.google.com/workspace/chat/events-overview)
- [List events from a Google Chat space](https://developers.google.com/workspace/chat/list-space-events)
