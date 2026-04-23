---
source: https://developers.google.com/workspace/events/guides/reactivate-subscription
root: workspace
fetched_at: 2026-04-23T15:28:36.521Z
---

# Resolve errors and reactivate a Google Workspace subscription

## Page Summary

- This guide explains how to reactivate a suspended Google Workspace subscription by resolving errors and calling the `subscriptions.reactivate()` method.
- Subscriptions are suspended when an error prevents them from receiving events, such as issues with the target resource or notification endpoint.
- You can identify the suspension reason by reviewing the subscription's `suspensionReason` field, which can be found in lifecycle events or using the `subscriptions.get()` method.
- Once the error is resolved, you can reactivate the subscription using the provided Apps Script or Python code samples, allowing it to receive events again.
- If reactivation fails, troubleshoot for additional errors by reviewing the output from the failed request, as multiple errors may be present.

This page explains how to reactivate a suspended Google Workspace subscription by resolving or troubleshooting errors and calling the [`subscriptions.reactivate`](../reference/rest/v1/subscriptions/reactivate.md) method.

Google Workspace subscriptions are suspended whenever an error prevents the subscription from receiving events. For example, a subscription is suspended when its target resource or notification endpoint can't be found. After you resolve any errors with the subscription, you can reactivate the subscription to start receiving events again.

Learn about a suspended subscription in the following ways:

- Your app receives a [lifecycle event](./events-lifecycle.md) about the suspension. If your subscription is suspended due to an error with its endpoint, you might not receive a lifecycle event.
- Use the `subscriptions.get` or `subscriptions.list` methods to see whether the subscription's `state` field is set to `SUSPENDED`.
- You're notified about a delivery failure to your notification endpoint. To learn about monitoring delivery failures to Google Cloud Pub/Sub topics, see [Handle message failures](https://cloud.google.com/pubsub/docs/handling-failures).

Reactivated subscriptions maintain the original expiration date. To extend the expiration time of a subscription, see [Update or renew a Google Workspace subscription](./update-subscription.md).

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
	- For user authentication, requires one or more scopes that support at least one of the event types for the subscription. To identify a scope, see [Scopes by event type](./auth.md#scopes-event-type).
		- For subscribing to a Chat event as a Chat app, requires [app authentication with one-time administrator approval](../../chat/authenticate-authorize-chat-app.md).

### Python

- Python 3.6 or greater
- The [pip](https://pypi.org/project/pip/) package management tool
- The latest Google client libraries for Python. To install or update them, run the following command in your command-line interface:
	```
	pip3 install --upgrade google-api-python-client google-auth-oauthlib
	```
- A Google Workspace subscription. To create one, see [Create a subscription](./create-subscription.md).
- Requires authentication and an [appropriate authorization scope for each event type](./auth.md#scopes-event-type) in the subscription:
	- For user authentication, requires one or more scopes that support at least one of the event types for the subscription. To identify a scope, see [Scopes by event type](./auth.md#scopes-event-type).
		- For subscribing to a Chat event as a Chat app, requires [app authentication with one-time administrator approval](../../chat/authenticate-authorize-chat-app.md).

## Identify and resolve errors

To identify the error for a subscription, review the subscription's `suspensionReason` field. You can find this field when you receive a [lifecycle event about the suspension](./events-lifecycle.md#suspension), or by using the `subscriptions.get` method to review all fields for the subscription.

The following table displays possible errors for a subscription and, when possible, how to resolve the errors. If you can't resolve the error, you can [delete the subscription](./delete-subscription.md), or wait for it to expire. The Google Workspace Events API deletes expired subscriptions automatically.

| **Error** | **Description** | **Ways to resolve** |
| --- | --- | --- |
| `  USER_SCOPE_REVOKED  ` | The authorizing user has revoked the grant of one or more OAuth scopes that are required for the subscription. | Obtain another access token. For details, see [Obtain an access token from the Google Authorization Server](https://developers.google.com/identity/protocols/oauth2#2.-obtain-an-access-token-from-the-google-authorization-server.). |
| `  RESOURCE_DELETED  ` | The target resource for the subscription is deleted. | If the resource is restored, call the `reactivate` method. Otherwise, no action required, as you can't reactivate a subscription without its original target resource. |
| `  USER_AUTHORIZATION_FAILURE  ` | The authorizing user no longer has access to the resource for the subscription. | No action required. You can't reactivate the subscription, as the user who authorized it can't access the target resource. |
| `  ENDPOINT_PERMISSION_DENIED  ` | The Google Workspace application doesn't have access to deliver events to your notification endpoint. | Grant access to the service account for the Google Workspace application that delivers events.      Service accounts: - **Google Chat events**: `chat-api-push@system.gserviceaccount.com` - **Google Drive events**: `drive-api-event-push@system.gserviceaccount.com` - **Google Meet events**: `meet-api-event-push@system.gserviceaccount.com`    For Pub/Sub topics, grant the role of [Pub/Sub Publisher](https://developers.google.com/pubsub/docs/access-control#pubsub.publisher) (`roles/pubsub.publisher) ` to the service account. |
| `  ENDPOINT_NOT_FOUND  ` | The notification endpoint doesn't exist or can't be found. | Check that the endpoint is still active and working. To troubleshoot Pub/Sub topics, see the [Troubleshooting documentation](https://developers.google.com/pubsub/docs/troubleshooting). |
| `  ENDPOINT_RESOURCE_EXHAUSTED  ` | The notification endpoint failed to receive events due to insufficient quota or reaching rate limiting. | Request a quota increase. |
| `  APP_SCOPE_REVOKED  ` | The domain administrator has revoked the grant of one or more OAuth scopes for the Chat app. | Receive [administrator approval](../../chat/authenticate-authorize-chat-app.md#admin-approval). |
| `  APP_AUTHORIZATION_FAILURE  ` | The Chat app that authorized the creation of the subscription no longer has access to the subscription's target resource. | Regain access to the target resource. For example, if the target resource is a Chat space, the Chat app might need membership in the space. |

## Reactivate a subscription

After you've resolved the error that suspended your subscription, use the `reactivate` method to let the subscription receive events again. The method checks that all errors are resolved and changes your subscription's `state` field from `SUSPENDED` to `ACTIVE`.

To reactivate a Google Workspace subscription:

### Apps Script

1. In your Apps Script project, create a new script file named `reactivateSubscription` and add the following code:
	```
	function reactivateSubscription() {
	  // The name of the subscription to reactivate.
	  const name = 'subscriptions/SUBSCRIPTION_ID';
	  // Call the Workspace Events API using the advanced service.
	  const response = WorkspaceEvents.Subscriptions.reactivate({}, name);
	  console.log(response);
	}
	```
	Replace the following:
	- `SUBSCRIPTION_ID`: The ID of the subscription. To get the ID, you can use any of the following:
		- The value of the [`uid`](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.uid) field.
				- The ID of the resource name represented in the [`name`](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.name) field. For example, if the resource name is `subscriptions/subscription-123`, use `subscription-123`.
2. To reactivate the Google Workspace subscription, run the function `reactivateSubscription` in your Apps Script project.

### Python

1. In your working directory, create a file named `reactivate_subscription.py` and add the following code:
	```
	"""Reactivate subscription."""
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
	NAME = 'subscriptions/SUBSCRIPTION_ID'
	response = service.subscriptions().reactivate(name=NAME).execute()
	print(response)
	```
	Replace the following:
	- `SCOPES`: One or more [OAuth scopes](./auth.md) that support each event type for the subscription. Formatted as an array of strings. To list multiple scopes, separate by commas. For example, `'https://www.googleapis.com/auth/chat.spaces.readonly', 'https://www.googleapis.com/auth/chat.memberships.readonly'`.
		- `SUBSCRIPTION_ID`: The ID of the subscription. To get the ID, you can use any of the following:
		- The value of the [`uid`](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.uid) field.
				- The ID of the resource name represented in the [`name`](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.name) field. For example, if the resource name is `subscriptions/subscription-123`, use `subscription-123`.
2. In your working directory, make sure you've stored your OAuth client ID credentials and named the file `credentials.json`. The code sample uses this JSON file to authenticate with Google Workspace and get user credentials. For instructions, see [Create OAuth client ID credentials](./create-subscription.md#create-oauth).
3. To reactivate the Google Workspace subscription, run the following in your terminal:
	```
	python3 reactivate_subscription.py
	```

The Google Workspace Events API returns a [long-running operation](../reference/rest/v1/operations.md) that contains the instance of the `Subscription` resource.

If the request fails, see the following section to troubleshoot additional errors.

## Reactivate a subscription as a Chat app

You can reactivate a subscription to Chat events as a Chat app instead of as a user. The process is similar, except:

1. Instead of user authentication, [authenticate as a Chat app with one-time administrator approval](../../chat/authenticate-authorize-chat-app.md).
2. Specify authorization scopes that allow the Chat app to subscribe to Chat events. These authorization scopes always begin with `chat.app`, and include the following:
	- `https://www.googleapis.com/auth/chat.app.memberships`: Subscribe to Chat space member events.
		- `https://www.googleapis.com/auth/chat.app.memberships.readonly`: Subscribe to Chat space member events.
		- `https://www.googleapis.com/auth/chat.app.messages.readonly`: Subscribe to Chat space message and reaction events.
		- `https://www.googleapis.com/auth/chat.app.spaces`: Subscribe to Chat space events.
		- `https://www.googleapis.com/auth/chat.app.spaces.readonly`: Subscribe to Chat space events.

### Write a script that calls Google Workspace Events API

The following code sample reactivates a Chat app's Google Workspace subscription:

### Python

```
"""Reactivate subscription."""

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

NAME = 'subscriptions/SUBSCRIPTION_ID'
response = service.subscriptions().reactivate(name=NAME).execute()
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
	- The value of the [`uid`](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.uid) field.
		- The ID of the resource name represented in the [`name`](../reference/rest/v1/subscriptions.md#Subscription.FIELDS.name) field. For example, if the resource name is `subscriptions/subscription-123`, use `subscription-123`.

## Troubleshoot multiple errors

If you have resolved the error that suspended the subscription and the `reactivate` method fails, another error might have occurred after your subscription was suspended.

To identify additional errors, review the output from the failed request. The output contains any errors that are still present.

When your subscription has multiple errors, the value for the `suspensionReason` field always uses the original error that suspended your subscription.

## Related topics

- [Get a subscription](./get-subscription.md)
- [List subscriptions](./list-subscriptions.md)
- [Create a subscription](./create-subscription.md)
