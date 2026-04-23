---
source: https://developers.google.com/workspace/events/guides/delete-subscription
root: workspace
fetched_at: 2026-04-23T15:28:35.969Z
---

# Delete a Google Workspace subscription

## Page Summary

- This page provides instructions for deleting a Google Workspace subscription using the `subscriptions.delete()` method, which stops event delivery to your app.
- Deleting a subscription is permanent and requires user authentication with appropriate scopes.
- Code samples are provided in Apps Script and Python, demonstrating how to delete a subscription authorized by a user.
- To successfully execute the code samples, you need a Google Workspace subscription, necessary authentication credentials, and a correctly configured development environment.
- Once the subscription is deleted, the Google Workspace Events API returns a long-running operation confirming the removal.

This page explains how to delete a Google Workspace subscription using the [`subscriptions.delete()`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/delete) method.

When you delete a subscription, your app no longer receives any events. If a subscription expires, the Google Workspace Events API deletes it automatically.

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

## Delete a subscription authorized by a user

The following code sample deletes a [`Subscription`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions) resource using user authentication.

To delete a subscription:

### Apps Script

1. In your Apps Script project, create a new script file named `deleteSubscription` and add the following code:
	```
	function deleteSubscription() {
	  // The name of the subscription to delete.
	  const name = 'subscriptions/SUBSCRIPTION_ID';
	  // Call the Workspace Events API using the advanced service.
	  const response = WorkspaceEvents.Subscriptions.remove(name);
	  console.log(response);
	}
	```
	Replace the following:
	- `SUBSCRIPTION_ID`: The ID of the subscription. To get the ID, you can use any of the following:
		- The value of the [`uid`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.uid) field.
				- The ID of the resource name represented in the [`name`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.name) field. For example, if the resource name is `subscriptions/subscription-123`, use `subscription-123`.
2. To delete the subscription, run the function `deleteSubscription` in your Apps Script project.

### Python

1. In your working directory, create a file named `delete_subscription.py` and add the following code:
	```
	"""Delete subscription."""
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
	response = service.subscriptions().delete(name=NAME).execute()
	print(response)
	```
	Replace the following:
	- `SCOPE`: An OAuth scope that [supports at least one event type from the subscription](https://developers.google.com/workspace/events/guides/auth#scopes-event-type). For example, if your subscription receives events an updated Chat space, `https://www.googleapis.com/auth/chat.spaces.readonly`.
		- `SUBSCRIPTION_ID`: The ID of the subscription. To get the ID, you can use any of the following:
		- The value of the [`uid`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.uid) field.
				- The ID of the resource name represented in the [`name`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.name) field. For example, if the resource name is `subscriptions/subscription-123`, use `subscription-123`.
2. In your working directory, make sure you've stored your OAuth client ID credentials and named the file `credentials.json`. The code sample uses this JSON file to authenticate with Google Workspace and get user credentials. For instructions, see [Create OAuth client ID credentials](https://developers.google.com/workspace/events/guides/create-subscription#create-oauth).
3. To delete the subscription, run the following in your terminal:
	```
	python3 delete_subscription.py
	```

The Google Workspace Events API returns a [long-running operation](https://developers.google.com/workspace/events/reference/rest/v1/operations) that contains the instance of the `Subscription` resource.

## Related topics

- [Create a subscription](https://developers.google.com/workspace/events/guides/create-subscription)
- [Get a subscription](https://developers.google.com/workspace/events/guides/get-subscription)
- [List subscriptions](https://developers.google.com/workspace/events/guides/list-subscriptions)
- [Update or renew a subscription](https://developers.google.com/workspace/events/guides/update-subscription)
- [Resolve errors and reactivate a subscription](https://developers.google.com/workspace/events/guides/reactivate-subscription)
