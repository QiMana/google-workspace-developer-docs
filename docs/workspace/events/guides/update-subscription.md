---
source: https://developers.google.com/workspace/events/guides/update-subscription
root: workspace
fetched_at: 2026-04-23T15:28:36.659Z
---

# Update or renew a Google Workspace subscription

## Page Summary

- This page provides instructions on renewing a Google Workspace subscription to its maximum expiration time using the `subscriptions.update()` method.
- You can also use the `subscriptions.update()` method to update the list of event types to receive or to update the expiration time of a subscription.
- Code samples are provided in Apps Script and Python demonstrating how to renew a subscription.
- Before renewing, you'll need an existing Google Workspace subscription, appropriate user authentication, and necessary tools like an Apps Script project or Python environment.

This page explains how to renew a Google Workspace subscription using the [`subscriptions.update()`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/patch) method. Use this method to update the expiration time of a subscription, including renewing the subscription for the maximum expiration time possible, or to update the list of event types to receive about the target resource.

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
	- For user authentication, requires one or more scopes that support at least one of the event types for the subscription. To identify a scope, see [Scopes by event type](https://developers.google.com/workspace/events/guides/auth#scopes-event-type).
		- For subscribing to a Chat event as a Chat app, requires [app authentication with one-time administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).

### Python

- Python 3.6 or greater
- The [pip](https://pypi.org/project/pip/) package management tool
- The latest Google client libraries for Python. To install or update them, run the following command in your command-line interface:
	```
	pip3 install --upgrade google-api-python-client google-auth-oauthlib
	```
- A Google Workspace subscription. To create one, see [Create a subscription](https://developers.google.com/workspace/events/guides/create-subscription).
- Requires authentication and an [appropriate authorization scope for each event type](https://developers.google.com/workspace/events/guides/auth#scopes-event-type) in the subscription:
	- For user authentication, requires one or more scopes that support at least one of the event types for the subscription. To identify a scope, see [Scopes by event type](https://developers.google.com/workspace/events/guides/auth#scopes-event-type).
		- For subscribing to a Chat event as a Chat app, requires [app authentication with one-time administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).

## Renew a Google Workspace subscription

In this section, use the Google Workspace Events API's `subscriptions.update()` method to renew a subscription to its maximum expiration time. To specify the maximum expiration time, update the `ttl` field of the [`Subscription`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions) resource to `0`.

The maximum expiration time depends on what resource data is included in the event payload. To learn more about expiration times, see [Event data for Google Workspace events](https://developers.google.com/workspace/events/guides#data).

To renew a Google Workspace subscription:

### Apps Script

1. In your Apps Script project, create a new script file named `updateSubscription` and add the following code:
	```
	function updateSubscription() {
	  // The name of the subscription to update.
	  const name = 'subscriptions/SUBSCRIPTION_ID';
	  // Call the Workspace Events API using the advanced service.
	  const response = WorkspaceEvents.Subscriptions.patch({
	    ttl: '0s',
	  }, name);
	  console.log(response);
	}
	```
	Replace the following:
	- `SUBSCRIPTION_ID`: The ID of the subscription. To get the ID, you can use any of the following:
		- The value of the [`uid`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.uid) field.
				- The ID of the resource name represented in the [`name`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.name) field. For example, if the resource name is `subscriptions/subscription-123`, use `subscription-123`.
2. To update the Google Workspace subscription, run the function `updateSubscription` in your Apps Script project.

### Python

1. In your working directory, create a file named `update_subscription.py` and add the following code:
	```
	"""Update subscription."""
	from google_auth_oauthlib.flow import InstalledAppFlow
	from googleapiclient.discovery import build
	# Specify required scopes.
	SCOPES = [SCOPES]
	# Authenticate with Google Workspace and get user authentication.
	flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
	CREDENTIALS = flow.run_local_server()
	# Call the Workspace Events API using the service endpoint.
	service = build(
	    'workspaceevents',
	    'v1',
	    credentials=CREDENTIALS,
	  )
	BODY = {
	    'ttl': {'seconds': 0},
	}
	NAME = 'subscriptions/SUBSCRIPTION_ID'
	response = (
	    service.subscriptions()
	    .patch(name=NAME, updateMask='ttl', body=BODY)
	    .execute()
	)
	print(response)
	```
	Replace the following:
	- `SCOPES`: One or more [OAuth scopes](https://developers.google.com/workspace/events/guides/auth) that support each event type for the subscription. Formatted as an array of strings. To list multiple scopes, separate by commas. For example, `'https://www.googleapis.com/auth/chat.spaces.readonly', 'https://www.googleapis.com/auth/chat.memberships.readonly'`.
		- `SUBSCRIPTION_ID`: The ID of the subscription. To get the ID, you can use any of the following:
		- The value of the [`uid`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.uid) field.
				- The ID of the resource name represented in the [`name`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.name) field. For example, if the resource name is `subscriptions/subscription-123`, use `subscription-123`.
2. In your working directory, make sure you've stored your OAuth client ID credentials and named the file `credentials.json`. The code sample uses this JSON file to authenticate with Google Workspace and get user credentials. For instructions, see [Create OAuth client ID credentials](https://developers.google.com/workspace/events/guides/create-subscription#create-oauth).
3. To update the Google Workspace subscription, run the following in your terminal:
	```
	python3 update_subscription.py
	```

The Google Workspace Events API returns a [long-running operation](https://developers.google.com/workspace/events/reference/rest/v1/operations) that contains the instance of the `Subscription` resource.

To get details about the updated `Subscription` resource, use the [`operations.get()`](https://developers.google.com/workspace/events/reference/rest/v1/operations/get) method and specify the `Operation` resource returned from your `subscriptions.update()` request. Otherwise, if you specify a `Operation` resource from a previous version of the subscription, the response is empty.

## Update or renew a subscription as a Google Chat app

You can update or renew a subscription to Chat events as a Chat app instead of as a user. The process is similar, except:

1. Instead of user authentication, [authenticate as a Chat app with one-time administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
2. Specify authorization scopes that allow the Chat app to subscribe to Chat events. These authorization scopes always begin with `chat.app`, and include the following:
	- `https://www.googleapis.com/auth/chat.app.memberships`: Subscribe to Chat space member events.
		- `https://www.googleapis.com/auth/chat.app.memberships.readonly`: Subscribe to Chat space member events.
		- `https://www.googleapis.com/auth/chat.app.messages.readonly`: Subscribe to Chat space message events.
		- `https://www.googleapis.com/auth/chat.app.spaces`: Subscribe to Chat space events.
		- `https://www.googleapis.com/auth/chat.app.spaces.readonly`: Subscribe to Chat space events.

### Write a script that calls Google Workspace Events API

The following code sample updates a Chat app's Google Workspace subscription:

### Python

```
"""Update subscription."""

from google.oauth2 import service_account
from apiclient.discovery import build

# Specify required scopes.
SCOPES = [SCOPES]

# Specify service account details.
CREDENTIALS = (
    service_account.Credentials.from_service_account_file('credentials.json')
    .with_scopes(SCOPES)
)

# Call the Workspace Events API using the service endpoint.
service = build(
    'workspaceevents',
    'v1beta',
    credentials=CREDENTIALS,
)

BODY = {
    'ttl': {'seconds': 0},
}
NAME = 'subscriptions/SUBSCRIPTION_ID'
response = (
    service.subscriptions()
    .patch(name=NAME, updateMask='ttl', body=BODY)
    .execute()
)
print(response)
```

Replace the following:

- `SCOPES`: Specify authorization scopes that allow the Chat app to subscribe to Chat events. These authorization scopes always begin with `chat.app`, and include the following:
	- `https://www.googleapis.com/auth/chat.app.memberships`: Subscribe to Chat space member events.
		- `https://www.googleapis.com/auth/chat.app.memberships.readonly`: Subscribe to Chat space member events.
		- `https://www.googleapis.com/auth/chat.app.messages.readonly`: Subscribe to Chat space message and reaction events.
		- `https://www.googleapis.com/auth/chat.app.spaces`: Subscribe to Chat space events.
		- `https://www.googleapis.com/auth/chat.app.spaces.readonly`: Subscribe to Chat space events.
- `SUBSCRIPTION_ID`: The ID of the subscription. To get the ID, you can use any of the following:
	- The value of the [`uid`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.uid) field.
		- The ID of the resource name represented in the [`name`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.name) field. For example, if the resource name is `subscriptions/subscription-123`, use `subscription-123`.

## Related topics

- [Get a subscription](https://developers.google.com/workspace/events/guides/get-subscription)
- [List subscriptions](https://developers.google.com/workspace/events/guides/list-subscriptions)
- [Create a subscription](https://developers.google.com/workspace/events/guides/create-subscription)
- [Resolve errors and reactivate a subscription](https://developers.google.com/workspace/events/guides/reactivate-subscription)
- [Delete a subscription](https://developers.google.com/workspace/events/guides/delete-subscription)
