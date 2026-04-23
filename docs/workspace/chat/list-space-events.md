---
source: https://developers.google.com/workspace/chat/list-space-events
root: workspace
fetched_at: 2026-04-23T15:25:28.004Z
---

# List events from a Google Chat space

## Page Summary

- This guide explains how to use the `list()` method to list changes to resources in a Google Chat space using the `SpaceEvent` resource.
- You can list events up to 28 days prior, retrieving the most recent version of affected resources, and must authenticate with user credentials and be a space member.
- To call this method, specify authorization scopes for desired event types and use the `ListSpaceEvents()` method with a filter to specify event types and date ranges.
- The provided Node.js code sample demonstrates listing events for new memberships and messages within a space, requiring replacement of `SPACE_NAME` with the space's ID.

This guide explains how to use the [`list()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaceEvents) method on the `SpaceEvent` resource of the Google Chat API to list changes to resources in a space.

The [`SpaceEvent` resource](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceEvent) represents a change to the target space, including child resources of the space such as messages, reactions, and memberships. For more information about the list of event types and event payloads supported, see the [`eventType`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceEvent.FIELDS.string.google.chat.v1.SpaceEvent.event_type) and [`payload`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceEvent.FIELDS.oneof_payload) fields of the `SpaceEvent` resource reference documentation.

You can list events up to 28 days before the time of the request. The server returns events that contain the most recent version of the affected resource. For example, if you list events about new space members, the server returns `Membership` resources that contain the latest membership details. If new members were removed during the requested period, the event payload contains an empty `Membership` resource.

To list events from a space, the authenticated user or Chat app must be a member of the space.

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

## List space events (user authentication)

To list space events from a Chat space, pass the following in your request:

- Specify one or more authorization scopes to support each event type in your request. As a best practice, choose the most restrictive scope that still allows your app to function. To choose a scope, see the [Authentication and authorization overview](https://developers.google.com/workspace/chat/authenticate-authorize#space-events).
- Call the [`ListSpaceEvents()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaceEvents) method, passing the `filter` of event types to list. You must specify at least one event type, and you can also filter by date. For a list of supported event types, see the [`eventType` field of the `SpaceEvent` resource](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.SpaceEvent.FIELDS.string.google.chat.v1.SpaceEvent.event_type) reference documentation.

The following example lists events about new memberships and messages in a space:

### Node.js

```
import {createClientWithUserCredentials} from './authentication-utils.js';

// Authorization scopes based on the event types
const USER_AUTH_OAUTH_SCOPES = [
  'https://www.googleapis.com/auth/chat.memberships.readonly',
  'https://www.googleapis.com/auth/chat.messages.readonly',
];

// This sample shows how to list space events with user credential
async function main() {
  // Create a client
  const chatClient = await createClientWithUserCredentials(
    USER_AUTH_OAUTH_SCOPES,
  );

  // Initialize request argument(s)
  const request = {
    // Replace SPACE_NAME here
    parent: 'spaces/SPACE_NAME',
    // A required filter. Filters events about new memberships and messages.
    filter:
      'eventTypes:"google.workspace.chat.membership.v1.created" OR eventTypes:"google.workspace.chat.message.v1.created"',
  };

  // Make the request
  const pageResult = chatClient.listSpaceEventsAsync(request);

  // Handle the response. Iterating over pageResult will yield results and
  // resolve additional pages automatically.
  for await (const response of pageResult) {
    console.log(response);
  }
}

await main();
```

To run this sample, replace `SPACE_NAME` with the ID from the space's [`name`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.Space.FIELDS.string.google.chat.v1.Space.name). You can obtain the ID by calling the [`ListSpaces()`](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#google.chat.v1.ChatService.ListSpaces) method or from the space's URL.

The Chat API returns a list of [paginated list of space events](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#listspaceeventsresponse) about new memberships and messages.

## List space events (Chat app authentication)

App authentication requires one-time [administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app#admin-approval).

To list space events from a space with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and the [Chat REST API](https://developers.google.com/workspace/chat/api/reference/rest), pass the following in your request:

- Specify one or more authorization scopes to support each event type in your request. As a best practice, choose the most restrictive scope that still allows your app to function. To learn more about choosing a scope, see the [Authentication and authorization overview](https://developers.google.com/workspace/chat/authenticate-authorize#space-events).
	- `https://www.googleapis.com/auth/chat.app.memberships`
		- `https://www.googleapis.com/auth/chat.app.memberships.readonly`
		- `https://www.googleapis.com/auth/chat.app.messages.readonly`
		- `https://www.googleapis.com/auth/chat.app.spaces`
		- `https://www.googleapis.com/auth/chat.app.spaces.readonly`
- Call the [`list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents/list) on the [`spaceEvents` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents).
- Pass the `name` of the space to list messages from.
- Pass a `filter` to query specific event types.

### Write a script that calls Chat API

Here's how to list space events with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and the [Chat REST API](https://developers.google.com/workspace/chat/api/reference/rest):

### Python

1. In your working directory, create a file named `chat_spaceevents_list_app.py`.
2. Include the following code in `chat_spaceevents_list_app.py`:
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
	    result = chat.spaces().spaceEvents().list(
	        # The space to list events from.
	        #
	        # Replace SPACE_NAME with a space name.
	        # Obtain the space name from the spaces resource of Chat API,
	        # or from a space's URL.
	        parent='spaces/SPACE_NAME',
	        # A required filter. Filters events by event type.
	        #
	        # Update this filter to match your requirements.
	        filter='eventTypes:"google.workspace.chat.message.v1.created"'
	    ).execute()
	    # Print Chat API's response in your command line interface.
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace the following:
	- `SPACE_NAME`: a space name, which you can obtain from the [`spaces.list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) in the Chat API, or from a space's URL.
4. In your working directory, build and run the sample:
	```
	python3 chat_spaceevents_list_app.py
	```

The Chat API returns a list of [paginated list of space events](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1#listspaceeventsresponse) about new memberships and messages.

## Related topics

- [Work with events from Google Chat](https://developers.google.com/workspace/chat/events-overview)
- [Get details about a space event](https://developers.google.com/workspace/chat/get-space-event)
