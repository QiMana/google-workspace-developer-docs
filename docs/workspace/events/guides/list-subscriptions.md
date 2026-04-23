---
source: https://developers.google.com/workspace/events/guides/list-subscriptions
root: workspace
fetched_at: 2026-04-23T15:28:36.757Z
---

# List Google Workspace subscriptions

## Page Summary

- This page provides instructions on how to list Google Workspace subscriptions using the `subscriptions.list()` method.
- The method returns a list of authorized subscriptions when using user authentication and may return any app subscription when using app authentication.
- Code samples are provided for both Apps Script and Python to demonstrate listing subscriptions based on event type and target resource.
- Prerequisites include having a Google Workspace subscription, proper authentication and setup for the chosen scripting language.
- The response is a paginated array of `Subscription` objects matching the query filter.

This page explains how to list Google Workspace subscriptions using the [`subscriptions.list()`](../reference/rest/v1/subscriptions/list.md) method.

When you call this method with user authentication, the method returns a list of subscriptions authorized by the user. When you use app authentication, the method can return a list that contains any subscription for the app.

## Prerequisites

### Apps Script

- A Google Workspace subscription. To create one, see [Create a subscription](./create-subscription.md).
- An Apps Script project:
	- Use your Google Cloud project instead of the default one created automatically by Apps Script.
		- For all scopes that you added to configure the OAuth consent screen, you must also add the scopes to the `appsscript.json` file in your Apps Script project. For example, if you specified the `chat.messages` scope, then add the following:
	```
	"oauthScopes": [
	  "https://www.googleapis.com/auth/chat.messages"
	]
	```
		- [Enable](../../../apps-script/guides/services/advanced.md#enable_advanced_services) the `Google Workspace Events` advanced service.
- Requires authentication and an [appropriate authorization scope for each event type](./auth.md#scopes-event-type) in the subscription:
	- For user authentication, requires a scope that supports at least one of the event types for the subscription. To identify a scope, see [Scopes by event type](./auth.md#scopes-event-type).
		- For app authentication, requires the `chat.bot` scope (Google Chat apps only).

### Python

- Python 3.6 or greater
- The [pip](https://pypi.org/project/pip/) package management tool
- The latest Google client libraries for Python. To install or update them, run the following command in your command-line interface:
	```
	pip3 install --upgrade google-api-python-client google-auth-oauthlib
	```
- A Google Workspace subscription. To create one, see [Create a subscription](./create-subscription.md).
- Requires authentication and an [appropriate authorization scope for each event type](./auth.md#scopes-event-type) in the subscription:
	- For user authentication, requires a scope that supports at least one of the event types for the subscription. To identify a scope, see [Scopes by event type](./auth.md#scopes-event-type).
		- For app authentication, requires the `chat.bot` scope (Google Chat apps only).

## List subscriptions authorized by a user

To list subscriptions, you must filter by at least one event type. You can also filter your query by one or more target resources. To learn about supported query filters, see the [`list()` method documentation](../reference/rest/v1/subscriptions/list.md).

The following code sample returns an array of [`Subscription`](../reference/rest/v1/subscriptions.md) objects filtered by event type and target resource. When authenticated as a user, the method only returns a list of subscriptions that the user authorized the app to create.

To list subscriptions for a specified event type and target resource:

### Apps Script

1. In your Apps Script project, create a new script file named `listSubscriptions` and add the following code:
	```
	function listSubscriptions() {
	  // Filter for event type (required).
	  const eventType = 'EVENT_TYPE';
	  // Filter for target resource (optional).
	  const targetResource = 'TARGET_RESOURCE';
	  const filter = \`event_types:"${eventType}" AND target_resource="${targetResource}"\`
	  // Call the Workspace Events API using the advanced service.
	  const response = WorkspaceEvents.Subscriptions.list({ filter });
	  console.log(response);
	}
	```
	Replace the following:
	- `EVENT_TYPE`: An [event type](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.event_types) formatted according to the CloudEvents specification. For example, to filter for subscriptions that receive events about new memberships to a Chat space, `google.workspace.chat.message.v1.created`.
		- `TARGET_RESOURCE`: A [target resource](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.target_resource), formatted as its full resource name. For example, to filter by subscriptions for a Chat space, use `//chat.googleapis.com/spaces/SPACE_ID` where `spaces/SPACE_ID` represents the [`name`](../../chat/api/reference/rest/v1/spaces.md#Space.FIELDS.name) field for the `Space` resource.
2. To list subscriptions, run the function `listSubscriptions` in your Apps Script project.

### Python

1. In your working directory, create a file named `list_subscriptions.py` and add the following code:
	```
	"""List subscriptions."""
	from google_auth_oauthlib.flow import InstalledAppFlow
	from googleapiclient.discovery import build
	# Specify required scopes.
	SCOPES = ['SCOPE']
	# Authenticate with Google Workspace and get user authentication.
	flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
	CREDENTIALS = flow.run_local_server()
	# Call the Workspace Events API using the service endpoint.
	service = build(
	    'workspaceevents',
	    'v1',
	    credentials=CREDENTIALS,
	)
	# Filter for event type (required).
	EVENT_TYPE = 'EVENT_TYPE'
	# Filter for target resource (optional).
	TARGET_RESOURCE = 'TARGET_RESOURCE'
	FILTER = f'event_types:"{EVENT_TYPE}" AND target_resource="{TARGET_RESOURCE}"'
	response = service.subscriptions().list(filter=FILTER).execute()
	print(response)
	```
	Replace the following:
	- `SCOPE`: An OAuth scope that [supports at least one event type from the subscription](./auth.md#scopes-event-type). For example, if your subscription receives events an updated Chat space, `https://www.googleapis.com/auth/chat.spaces.readonly`.
		- `EVENT_TYPE`: An [event type](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.event_types) formatted according to the CloudEvents specification. For example, to filter for subscriptions that receive events about new memberships to a Chat space, `google.workspace.chat.message.v1.created`.
		- `TARGET_RESOURCE`: A [target resource](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.target_resource), formatted as its full resource name. For example, to filter by subscriptions for a Chat space, use `//chat.googleapis.com/spaces/SPACE_ID` where `spaces/SPACE_ID` represents the [`name`](../../chat/api/reference/rest/v1/spaces.md#Space.FIELDS.name) field for the `Space` resource.
2. In your working directory, make sure you've stored your OAuth client ID credentials and named the file `credentials.json`. The code sample uses this JSON file to authenticate with Google Workspace and get user credentials. For instructions, see [Create OAuth client ID credentials](./create-subscription.md#create-oauth).
3. To list subscriptions, run the following in your terminal:
	```
	python3 list_subscriptions.py
	```

The Google Workspace Events API returns a [paginated array of `Subscription` objects](../reference/rest/v1/subscriptions/list.md#response-body) that match the filter for your query.

## Related topics

- [Update or renew a subscription](./update-subscription.md)
- [Resolve errors and reactivate a subscription](./reactivate-subscription.md)
- [Delete a subscription](./delete-subscription.md)
- [Get a subscription](./get-subscription.md)
- [Create a subscription](./create-subscription.md)
