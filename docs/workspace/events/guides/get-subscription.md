---
source: https://developers.google.com/workspace/events/guides/get-subscription
root: workspace
fetched_at: 2026-04-23T15:28:36.956Z
---

# Get details about a Google Workspace subscription

## Page Summary

- This page provides instructions for retrieving details about a Google Workspace subscription using the `subscriptions.get()` method.
- You can get details about user-authorized subscriptions using user authentication or any subscription for the app using app authentication.
- Code samples are provided in Apps Script and Python demonstrating how to retrieve subscription details.
- Prerequisites include a Google Workspace subscription, proper authentication, and specific environment setups for Apps Script and Python.
- Related topics cover subscription management tasks like updating, resolving errors, deleting, listing, and creating subscriptions.

This page explains how to get details about a Google Workspace subscription using the [`subscriptions.get()`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/get) method.

When you call this method with user authentication, the method returns details about a subscription authorized by the user. When you use app authentication, the method can return details about any subscription for the app.

## Prerequisites

### Apps Script

- A Google Workspace subscription. To create one, see [Create a subscription](https://developers.google.com/workspace/events/guides/create-subscription).
- An Apps Script project:
	- Use your Google Cloud project instead of the default one created automatically by Apps Script.
		- For all scopes that you added to configure the OAuth consent screen, you must also add the scopes to the `appsscript.json` file in your Apps Script project. For example, if you specified the `chat.messages` scope, then add the following:
	```
	"oauthScopes": [
	  "https://www.googleapis.com/auth/chat.messages"
	]
	```
		- [Enable](https://developers.google.com/apps-script/guides/services/advanced#enable_advanced_services) the `Google Workspace Events` advanced service.
- Requires authentication and an [appropriate authorization scope for each event type](https://developers.google.com/workspace/events/guides/auth#scopes-event-type) in the subscription:
	- For user authentication, requires a scope that supports at least one of the event types for the subscription. To identify a scope, see [Scopes by event type](https://developers.google.com/workspace/events/guides/auth#scopes-event-type).
		- For app authentication, requires the `chat.bot` scope (Google Chat apps only).

### Python

- Python 3.6 or greater
- The [pip](https://pypi.org/project/pip/) package management tool
- The latest Google client libraries for Python. To install or update them, run the following command in your command-line interface:
	```
	pip3 install --upgrade google-api-python-client google-auth-oauthlib
	```
- A Google Workspace subscription. To create one, see [Create a subscription](https://developers.google.com/workspace/events/guides/create-subscription).
- Requires authentication and an [appropriate authorization scope for each event type](https://developers.google.com/workspace/events/guides/auth#scopes-event-type) in the subscription:
	- For user authentication, requires a scope that supports at least one of the event types for the subscription. To identify a scope, see [Scopes by event type](https://developers.google.com/workspace/events/guides/auth#scopes-event-type).
		- For app authentication, requires the `chat.bot` scope (Google Chat apps only).

## Get a subscription authorized by a user

The following code sample gets details about a [`Subscription`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions) resource using user authentication. When authenticated as a user, the method returns a subscription that the user authorized the app to create.

To get a subscription authorized by a user:

### Apps Script

1. In your Apps Script project, create a new script file named `getSubscription` and add the following code:
	```
	function getSubscription() {
	  // The name of the subscription to get.
	  const name = 'subscriptions/SUBSCRIPTION_ID';
	  // Call the Workspace Events API using the advanced service.
	  const subscription = WorkspaceEvents.Subscriptions.get(name);
	  console.log(subscription);
	}
	```
	Replace the following:
	- `SUBSCRIPTION_ID`: The ID of the subscription. To get the ID, you can use any of the following:
		- The value of the [`uid`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.uid) field.
				- The ID of the resource name represented in the [`name`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.name) field. For example, if the resource name is `subscriptions/subscription-123`, use `subscription-123`.
2. To get the subscription, run the function `getSubscription` in your Apps Script project.

### Python

1. In your working directory, create a file named `get_subscription.py` and add the following code:
	```
	"""Get subscription."""
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
	NAME = 'subscriptions/SUBSCRIPTION_ID'
	subscription = service.subscriptions().get(name=NAME).execute()
	print(subscription)
	```
	Replace the following:
	- `SCOPE`: An OAuth scope that [supports at least one event type from the subscription](https://developers.google.com/workspace/events/guides/auth#scopes-event-type). For example, if your subscription receives events an updated Chat space, `https://www.googleapis.com/auth/chat.spaces.readonly`.
		- `SUBSCRIPTION_ID`: The ID of the subscription. To get the ID, you can use any of the following:
		- The value of the [`uid`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.uid) field.
				- The ID of the resource name represented in the [`name`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.name) field. For example, if the resource name is `subscriptions/subscription-123`, use `subscription-123`.
2. In your working directory, make sure you've stored your OAuth client ID credentials and named the file `credentials.json`. The code sample uses this JSON file to authenticate with Google Workspace and get user credentials. For instructions, see [Create OAuth client ID credentials](https://developers.google.com/workspace/events/guides/create-subscription#create-oauth).
3. To get the subscription, run the following in your terminal:
	```
	python3 get_subscription.py
	```

## Related topics

- [Update or renew a subscription](https://developers.google.com/workspace/events/guides/update-subscription)
- [Resolve errors and reactivate a subscription](https://developers.google.com/workspace/events/guides/reactivate-subscription)
- [Delete a subscription](https://developers.google.com/workspace/events/guides/delete-subscription)
- [List subscriptions](https://developers.google.com/workspace/events/guides/list-subscriptions)
- [Create a subscription](https://developers.google.com/workspace/events/guides/create-subscription)
