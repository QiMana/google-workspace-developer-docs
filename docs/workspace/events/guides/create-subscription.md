---
source: https://developers.google.com/workspace/events/guides/create-subscription
root: workspace
fetched_at: 2026-04-23T15:28:35.516Z
---

# Create a Google Workspace subscription

## Page Summary

- Google Workspace Events API enables receiving notifications about changes to Google Workspace resources (like Google Docs, Chat, or Calendar).
- Set up involves creating a Pub/Sub topic, subscribing to it, and configuring event delivery for real-time updates.
- Subscriptions can be tailored to specific resources and event types, offering flexibility in monitoring desired changes.
- Prerequisites include a Google Cloud project, enabled APIs, OAuth credentials, and appropriate scopes for chosen event types.
- Users can leverage either Apps Script or Python to integrate with the API based on their development preference.

This page explains how to use the Google Workspace Events API to create a subscription to a Google Workspace resource. A Google Workspace subscription lets your app receive information about *Google Workspace events*, which represent changes to a Google Workspace resource. To learn about which resources and event types the Google Workspace Events API supports, see the [Google Workspace Events API overview](https://developers.google.com/workspace/events/guides).

This page includes the following steps for creating a Google Workspace subscription:

1. Set up your environment.
2. Create and subscribe to a Google Cloud Pub/Sub topic. Use this document as an endpoint to receive Google Workspace events.
3. Call the Google Workspace Events API's [`create`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/create) method on the [`Subscription`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription) resource.
4. Test your Google Workspace subscription to verify that your Pub/Sub topic receives events that you've subscribed to.
5. Optionally, configure how to push events to an endpoint for your app, so that your app can process the event and, if necessary, take action.

## Prerequisites

### Apps Script

- To use the Google Cloud CLI commands in this guide:
	1. Install the [Google Cloud CLI](https://cloud.google.com/sdk/docs/install).
		2. To [initialize](https://cloud.google.com/sdk/docs/initializing) the `gcloud` CLI, run the following code:
	```
	gcloud init
	```
- An Apps Script project:
	- Use your Google Cloud project instead of the default one created automatically by Apps Script.
		- For all scopes that you added to configure the OAuth consent screen, you must also add the scopes to the `appsscript.json` file in your Apps Script project. For example, if you specified the `chat.messages` scope, then add the following:
	```
	"oauthScopes": [
	  "https://www.googleapis.com/auth/chat.messages"
	]
	```
		- [Enable](https://developers.google.com/apps-script/guides/services/advanced#enable_advanced_services) the `Google Workspace Events` advanced service.
- A [Google Cloud project](https://developers.google.com/workspace/guides/create-project) with billing enabled. For subscriptions to Chat, you must also enable the Chat API in your Cloud project and configure the **App name**, **Avatar URL**, and **Description** fields. For details, see [Build a Google Chat app](https://developers.google.com/chat/quickstart/gcf-app).
- Requires authentication and an [appropriate authorization scope for each event type](https://developers.google.com/workspace/events/guides/auth#scopes-event-type) in the subscription:
	- Typically requires user authentication with the OAuth consent screen configured for the app. When you configure the consent screen, you must specify a scope to support each event type for the subscription. To configure the consent screen and identify required scopes, see [Choose scopes](https://developers.google.com/workspace/events/guides/auth).
		- For subscribing to a Chat event as a Chat app, requires [app authentication with one-time administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).

### Python

- Python 3.6 or greater
- The [pip](https://pypi.org/project/pip/) package management tool
- The latest Google client libraries for Python. To install or update them, run the following command in your command-line interface:
	```
	pip3 install --upgrade google-api-python-client google-auth-oauthlib
	```
- To use the Google Cloud CLI commands in this guide:
	1. Install the [Google Cloud CLI](https://cloud.google.com/sdk/docs/install).
		2. To [initialize](https://cloud.google.com/sdk/docs/initializing) the `gcloud` CLI, run the following code:
	```
	gcloud init
	```
- A [Google Cloud project](https://developers.google.com/workspace/guides/create-project) with billing enabled. For subscriptions to Chat, you must also enable the Chat API in your Cloud project and configure the **App name**, **Avatar URL**, and **Description** fields. For details, see [Build a Google Chat app](https://developers.google.com/chat/quickstart/gcf-app).
- Requires authentication and an [appropriate authorization scope for each event type](https://developers.google.com/workspace/events/guides/auth#scopes-event-type) in the subscription:
	- Typically requires user authentication with the OAuth consent screen configured for the app. When you configure the consent screen, you must specify a scope to support each event type for the subscription. To configure the consent screen and identify required scopes, see [Choose scopes](https://developers.google.com/workspace/events/guides/auth).
		- For subscribing to a Chat event as a Chat app, requires [app authentication with one-time administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).

## Set up your environment

The following section explains how to set up your environment before creating a Google Workspace subscription.

### Enable the Google Workspace Events API and Google Cloud Pub/Sub API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.

### Google Cloud console

In the Google Cloud console, open the Google Cloud project for your app and enable the Google Workspace Events API and Pub/Sub API:

[Enable the APIs](https://console.cloud.google.com/flows/enableapi?apiid=workspaceevents.googleapis.com,%20pubsub.googleapis.com)

### gcloud

1. In your working directory, sign in to your Google Account:
	```
	gcloud auth login
	```
2. Set your project to the Cloud project for your app:
	```
	gcloud config set project PROJECT_ID
	```
	Replace `PROJECT_ID` with the [project ID](https://cloud.google.com/resource-manager/docs/creating-managing-projects#before_you_begin) for the Cloud project for your app.
3. Enable the Google Workspace Events API and Google Cloud Pub/Sub API:
	```
	gcloud services enable pubsub.googleapis.com workspaceevents.googleapis.com
	```

### Create OAuth client ID credentials

Choose your [application type](https://support.google.com/cloud/answer/15549257#web-applications) for specific instructions about how to create an OAuth client ID:

### Web application

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Web application**.
4. In the **Name** field, type a name for the credential. This name is only shown in the Google API Console.
5. Add authorized URIs related to your app:
	- **Client-side apps (JavaScript)** –Under **Authorized JavaScript origins**, click **Add URI**. Then, enter a URI to use for browser requests. This identifies the domains from which your application can send API requests to the OAuth 2.0 server.
		- **Server-side apps (Java, Python, and more)** –Under **Authorized redirect URIs**, click **Add URI**. Then, enter an endpoint URI to which the OAuth 2.0 server can send responses.
6. Click **Create**.
	The newly created credential appears under **OAuth 2.0 Client IDs**.
	Note the Client ID. Client secrets aren't used for Web applications.

### Android

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Android**.
4. In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
5. In the "Package name" field, enter the package name from your `AndroidManifest.xml` file.
6. In the "SHA-1 certificate fingerprint" field, enter your [generated SHA-1 certificate fingerprint](https://support.google.com/cloud/answer/6158849#installedapplications&android&zippy=%2Cnative-applications%2Candroid).
7. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### iOS

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **iOS**.
4. In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
5. In the "Bundle ID" field, enter the bundle identifier as listed in the app's `Info.plist` file.
6. Optional: If your app appears in the Apple App Store, enter the App Store ID.
7. Optional: In the "Team ID" field, enter the unique 10-character string that's generated by Apple and assigned to your team.
8. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### Chrome app

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Chrome Extension**.
4. In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
5. In the "Item ID" field, enter your app's unique 32-character ID string. You can find this ID value in your app's Chrome Web Store URL and in the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).
6. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### Desktop app

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Desktop app**.
4. In the **Name** field, type a name for the credential. This name is only shown in the Google API Console.
5. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### TVs & Limited Input devices

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **TVs & Limited Input devices**.
4. In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
5. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### Universal Windows Platform (UWP)

1. In the Google API Console, go to Menu \> \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Universal Windows Platform (UWP)**.
4. In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
5. In the "Store ID" field, enter your app's unique, 12-character Microsoft Store ID value. You can find this ID in your app's Microsoft Store URL and in the [Partner Center](https://partner.microsoft.com/dashboard).
6. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### Download the client secret JSON file

The client secret file is a JSON representation of the OAuth client ID credentials that your app can reference when providing credentials.

1. In the Google API Console, go to Menu \> **APIs & Services** \> **Credentials**.
	[Go to Credentials](https://console.developers.google.com/apis/credentials)
2. Under **OAuth 2.0 Client IDs**, click the client ID that you created.
3. Click **Download JSON**.
4. Save the file as `credentials.json`.

## Create and subscribe to a Pub/Sub topic

In this section, you create a Pub/Sub topic and subscription to the topic. Your Pub/Sub topic serves as the notification endpoint where your Google Workspace subscription receives events.

To learn more about creating and managing Pub/Sub topics, see the [Pub/Sub documentation](https://cloud.google.com/pubsub/docs/create-topic).

To create and subscribe to a Pub/Sub topic:

### Google API Console

1. In the Google API Console, go to the Pub/Sub page:
	[Go to Google Cloud Pub/Sub](https://console.developers.google.com/cloudpubsub)
	Make sure that the Cloud project for your app is selected.
2. Click **Create topic** and do the following:
	1. Enter a name for your topic, such as `workspace-events-topic`.
		2. Leave **Add a default subscription** selected. Pub/Sub names this default subscription similar to your topic's name, such as `workspace-events-topic-sub`.
		3. Optional: Update or configure additional [properties](https://developers.google.com/pubsub/docs/create-topic#properties_of_a_topic) for your topic.
3. Click **Create**. Your full topic name is formatted as `projects/PROJECT_ID/topics/TOPIC_ID`. Use this full name in a later step.
4. Grant access to publish Pub/Sub messages to your topic:
	1. On your topic's page, go to the side panel and open the **Permissions** tab.
		2. Click **Add Principal**.
		3. In the **Add principals** field, add the service account for the Google Workspace application that delivers events to your subscription:
		1. For Chat events:
			- If your Chat app is a Google Workspace add-on that extends Chat, use the service account email on the [Chat API configuration page](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat). To learn more, see [Build a Google Chat app that uses Pub/Sub](https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub).
						- If your Chat app uses [Chat API interaction events](https://developers.google.com/workspace/chat), use `chat-api-push@system.gserviceaccount.com`.
				2. **Developer Preview:**: For Drive events, `drive-api-event-push@system.gserviceaccount.com`.
				3. For Meet events, `meet-api-event-push@system.gserviceaccount.com`.
		4. In the **Assign roles** menu, select `Pub/Sub Publisher`.
		5. Click **Save**. It can take a few minutes to update the permissions for your topic.

### gcloud

1. In your Cloud project, create a topic by running the following command:
	```
	gcloud pubsub topics create TOPIC_ID
	```
	Replace `TOPIC_ID` with a unique ID for your topic, such as `workspace-events-topic`.
	The output displays the full topic name, formatted as `projects/PROJECT_ID/topics/TOPIC_ID`. Make note of the name, and make sure the value for PROJECT\_ID is the Cloud project ID for your app. Use the topic name in the following step, and to create the Google Workspace subscription later.
2. Grant access to publish messages to your topic:
	```
	gcloud pubsub topics add-iam-policy-binding TOPIC_NAME --member='serviceAccount:GOOGLE_WORKSPACE_APPLICATION' --role='roles/pubsub.publisher'
	```
	Replace the following:
	- `TOPIC_NAME`: The full topic name, which is the output from the previous step. Formatted as `projects/PROJECT_ID/topics/TOPIC_ID`.
		- `GOOGLE_WORKSPACE_APPLICATION`: The Google Workspace application that must deliver events to your subscription:
		- To receive events from Chat, use one of the following service accounts:
			- If your Chat app is a Google Workspace add-on that extends Chat, use the service account email on the [Chat API configuration page](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat). To learn more, see [Build a Google Chat app that uses Pub/Sub](https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub).
						- If your Chat app uses [Chat API interaction events](https://developers.google.com/workspace/chat), use `chat-api-push@system.gserviceaccount.com`.
				- **Developer Preview:**: To receive events from Drive, use `drive-api-event-push@system.gserviceaccount.com`.
				- To receive events from Meet, use `meet-api-event-push@system.gserviceaccount.com`.
	It can take a few minutes to update the permissions for your topic.
3. Create a Pub/Sub subscription for the topic:
	```
	gcloud pubsub subscriptions create SUBSCRIPTION_NAME --topic=TOPIC_NAME
	```
	Replace the following:
	- `SUBSCRIPTION_NAME`: A name for your subscription, such as `workspace-events-subscription`.
		- `TOPIC_NAME`: The name of your topic that you created in the previous step.

## Subscribe to a Google Workspace resource

In this section, you subscribe to the Google Workspace resource that you want to monitor for events.

### Choose and identify the target resource

In a Google Workspace subscription, the *target resource* is the Google Workspace resource that you monitor for events. The target resource is represented in the subscription's [`targetResource`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.target_resource) field, formatted using the full resource name. For example, for a subscription that monitors a Chat space (`spaces/AAAABBBBBBB`), the value of the `targetResource` is `//chat.googleapis.com/spaces/AAAABBBBBBB`.

#### Identify a target resource for Chat

| **Target resource** | **Format** | **Limitations** |
| --- | --- | --- |
| Space | `//chat.googleapis.com/spaces/SPACE`  where SPACE is the ID in the [resource name](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space.FIELDS.name) of the Chat API `space` resource. You can obtain the ID from the space's URL or using the [`spaces.list()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) method. | The Chat user or Chat app that authorizes the subscription must be a member of the space through their Google Workspace or Google Account. Supports: - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) - [App authentication with administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) |
| All spaces for a user | `//chat.googleapis.com/spaces/-` | The subscription only receives events for the spaces where the user is a member through their Google Workspace or Google Account. Only supports [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). |
| User | `//cloudidentity.googleapis.com/users/USER`  where USER is the ID in the [resource name](https://developers.google.com/workspace/chat/api/reference/rest/v1/User#FIELDS.name) of the Chat API `user` resource. For details, see [Identify and specify Google Chat users](https://developers.google.com/workspace/chat/identify-reference-users). | The subscription only receives events about the user that authorized the subscription. A user can't authorize a subscription on behalf of other users. Only supports [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). |

#### Identify a target resource for Drive

| **Target resource** | **Format** | **Limitations (if applicable)** |
| --- | --- | --- |
| File | `//drive.googleapis.com/files/FILE`  where FILE is the ID in the [resource name](https://developers.google.com/workspace/drive/api/reference/rest/v3/files#File.FIELDS.drive_id) of the Drive API `files` resource. You can obtain the ID from the file's URL or by using the [`files.list`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/list) method. | The user that authorizes the subscription must have permission on the file within the subscription relative to the subscribe to event. |
| Shared drive | `//drive.googleapis.com/drives/DRIVE`  where DRIVE is the ID in the [resource name](https://developers.google.com/workspace/drive/api/reference/rest/v3/drives#Drive.FIELDS.id) of the Drive API `drives` resource. You can obtain the ID from the drive's URL or by using the [`drives.list`](https://developers.google.com/workspace/drive/api/reference/rest/v3/drives/list) method. | The subscription only receives events for items in the shared drive where the user is a member through their Google Workspace Account or Google Account. |

#### Identify a target resource for Meet

| **Target resource** | **Format** | **Limitations (if applicable)** |
| --- | --- | --- |
| Meeting space | `//meet.googleapis.com/spaces/SPACE`  where SPACE is the ID in the [resource name](https://developers.google.com/meet/api/reference/rest/v2/spaces#Space.FIELDS.name) of the Meet REST API `spaces` resource. For details, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview#identify-meeting-space). |  |
| User | `//cloudidentity.googleapis.com/users/USER`  where USER is the ID in the [`signedinUser.user`](https://developers.google.com/meet/api/reference/rest/v2/conferenceRecords.participants#SignedinUser.FIELDS.user) field of the Meet REST API `participants` resource. For details, see [Work with participants](https://developers.google.com/meet/api/guides/participants). | The subscription receives events about all meeting spaces where the user is the owner of the meeting space. Usually, the meeting space owner is also the [organizer](https://developers.google.com/calendar/api/v3/reference/events#organizer) of the Google Calendar event associated with the meeting space. |

### Create a Google Workspace subscription

To create a subscription, use the Google Workspace Events API's `subscriptions.create` method to create a [`Subscription`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions) resource. Specify the following fields:

- `targetResource`: A Google Workspace that you identified in the [previous section](#id-target), formatted using its full resource name.
- `eventTypes`: An array of one or more event types you want to receive about the resource. For example, if your app only needs to know about new messages posted to a Chat space, your app can just subscribe to events about created messages.
- `notificationEndpoint`: A notification endpoint where your Google Workspace subscription delivers events. Use the Pub/Sub topic that you created in the previous section.
- `payloadOptions`: Options to specify how much resource data to include in the event payload. This configuration affects the expiration time for your subscription. To learn more, see .

To create a Google Workspace subscription:

### Apps Script

1. In your Apps Script project, create a new script file named `createSubscription` and add the following code:
	```
	function createSubscription() {
	  // The Google Workspace resource to monitor for events.
	  const targetResource = 'TARGET_RESOURCE';
	  // The types of events to receive.
	  const eventTypes = [EVENT_TYPES];
	  // The endpoint to deliver events to, such as a Google Cloud Pub/Sub topic.
	  const pubsubTopic = 'TOPIC_NAME';
	  // Whether to include resource data or not.
	  const resourceData = RESOURCE_DATA;
	  // Call the Workspace Events API using the advanced service.
	  const response = WorkspaceEvents.Subscriptions.create({
	    targetResource: targetResource,
	    eventTypes: eventTypes,
	    notificationEndpoint: {
	      pubsubTopic: pubsubTopic,
	    },
	    payloadOptions: {
	      includeResource: resourceData
	    }
	  });
	  console.log(response);
	}
	```
	Replace the following:
	- `TARGET_RESOURCE`: The [Google Workspace resource](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.target_resource) that you're subscribing to, formatted as its full resource name. For example, to subscribe to a Chat space with the space ID `AAAABBBB`, use `//chat.googleapis.com/spaces/AAAABBBB`.
		- `EVENT_TYPES`: One or more [event types](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.event_types) that you want to subscribe to in the target resource. Format as an array of strings such as `'google.workspace.chat.message.v1.created'`.
		- `TOPIC_NAME`: The full name of the Pub/Sub topic that you created in your Cloud project. Formatted as `projects/PROJECT_ID/topics/TOPIC_ID`.
		- `RESOURCE_DATA`: A boolean that specifies whether the subscription includes resource data in the payload:
		- `True`: Includes all resource data. To limit which fields are included, add the [`fieldMask`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#PayloadOptions.FIELDS.field_mask) field and specify at least one field for the changed resource. Only subscriptions to Chat resources support including resource data.
				- `False`: Excludes resource data.
2. To create the Google Workspace subscription, run the function `createSubscription` in your Apps Script project.

### Python

1. In your working directory, create a file named `create_subscription.py` and add the following code:
	```
	"""Create subscription."""
	from google_auth_oauthlib.flow import InstalledAppFlow
	from googleapiclient.discovery import build
	# Specify required scopes.
	SCOPES = [SCOPES]
	# Authenticate with Google Workspace and get user authentication.
	flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
	CREDENTIALS = flow.run_local_server()
	# The Google Workspace resource to monitor for events.
	TARGET_RESOURCE = 'TARGET_RESOURCE'
	# The types of events to receive.
	EVENT_TYPES = [EVENT_TYPES]
	# The endpoint to deliver events to, such as a Google Cloud Pub/Sub topic.
	TOPIC = 'TOPIC_NAME'
	# Call the Workspace Events API using the service endpoint.
	service = build(
	    'workspaceevents',
	    'v1',
	    credentials=CREDENTIALS,
	)
	BODY = {
	    'target_resource': TARGET_RESOURCE,
	    'event_types': EVENT_TYPES,
	    'notification_endpoint': {'pubsub_topic': TOPIC},
	    'payload_options': {'include_resource': RESOURCE_DATA},
	}
	response = service.subscriptions().create(body=BODY).execute()
	print(response)
	```
	Replace the following:
	- `SCOPES`: One or more [OAuth scopes](https://developers.google.com/workspace/events/guides/auth) that support each event type for the subscription. Formatted as an array of strings. To list multiple scopes, separate by commas. For example, `'https://www.googleapis.com/auth/chat.spaces.readonly', 'https://www.googleapis.com/auth/chat.memberships.readonly'`.
		- `TARGET_RESOURCE`: The [Google Workspace resource](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.target_resource) that you're subscribing to, formatted as its full resource name. For example, to subscribe to a Chat space with the space ID `AAAABBBB`, use `//chat.googleapis.com/spaces/AAAABBBB`.
		- `EVENT_TYPES`: One or more [event types](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.event_types) that you want to subscribe to in the target resource. Format as an array of strings such as `'google.workspace.chat.message.v1.created'`.
		- `TOPIC_NAME`: The full name of the Pub/Sub topic that you created in your Cloud project. Formatted as `projects/PROJECT_ID/topics/TOPIC_ID`.
		- `RESOURCE_DATA`: A boolean that specifies whether the subscription includes resource data in the payload:
		- `True`: Includes all resource data. To limit which fields are included, add the [`fieldMask`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#PayloadOptions.FIELDS.field_mask) field and specify at least one field for the changed resource. Only subscriptions to Chat resources support including resource data.
				- `False`: Excludes resource data.
2. To create the Google Workspace subscription, run the following in your terminal:
	```
	python3 create_subscription.py
	```

The Google Workspace Events API returns a completed [long-running operation](https://developers.google.com/workspace/events/reference/rest/v1/operations) that contains the instance of the `Subscription` resource that you created.

## Test your Google Workspace subscription

To test that you're receiving Google Workspace events, you can trigger an event and pull messages to the Pub/Sub subscription.

To test your Google Workspace subscription:

### Google API Console

1. Trigger one or more types of events in the target resource of your Google Workspace subscription. For example, if you've subscribed to new messages in a Chat space, post a message to the space.
2. In the Google API Console, go to the Pub/Sub page:
	[Go to Pub/Sub](https://console.developers.google.com//cloudpubsub)
	Make sure that the Cloud project for your app is selected.
3. In the **Pub/Sub** menu, click **Subscriptions**.
4. In the table, find the Pub/Sub subscription for your topic and click the subscription name.
5. Click the **Messages** tab.
6. Click **Pull**. It can take up to a few minutes for an event to generate a Pub/Sub message.

### gcloud

1. Trigger one or more types of events in the target resource of your Google Workspace subscription. For example, if you've subscribed to new messages in a Chat space, post a message in the space.
2. Run the following command:
	```
	gcloud pubsub subscriptions pull PUBSUB_SUBSCRIPTION_NAME --format=json --limit=MESSAGE_COUNT --auto-ack
	```
	Replace the following:
	- `PUBSUB_SUBSCRIPTION_NAME`: The full name of your Pub/Sub subscription, formatted as `projects/PROJECT_ID/subscriptions/SUBSCRIPTION_ID`.
		- `MESSAGE_COUNT`: The maximum number of Pub/Sub messages you want to pull.
	It can take up to a few minutes for an event to generate a Pub/Sub message.

For each Google Workspace event that you triggered, a message is delivered to your Pub/Sub subscription that contains the event. For details, see [Receiving events as Google Cloud Pub/Sub messages](https://developers.google.com/workspace/events/guides#pub-sub).

## Configure how your app receives events

The Pub/Sub subscription that you created is pull-based. After you've tested your Pub/Sub subscription, you can update the delivery type to change how your app receives events. For example, you can configure the Pub/Sub subscription to a push delivery type, so that your app can receive events directly to an app endpoint.

To learn about configuring a Pub/Sub subscription, see the [Pub/Sub documentation](https://developers.google.com/pubsub/docs/subscription-overview).

## Subscribe to Chat space events as a Google Chat app

You can subscribe to Chat events as a Chat app from a space in which the Chat app has membership. Chat apps can't subscribe to user events.

### Write a script that calls Google Workspace Events API

Here's how to create a subscription to Chat space events with [app authentication and administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app):

1. If necessary, [Build a Chat app](https://developers.google.com/workspace/chat/quickstart/gcf-app).
2. [Subscribe to a Chat resource](#subscribe), but:
	1. Instead of user authentication, [authenticate as a Chat app with one-time administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
		2. Specify authorization scopes that allow the Chat app to subscribe to Chat events. These authorization scopes always begin with `chat.app`, and include the following:
		- `https://www.googleapis.com/auth/chat.app.memberships`: Subscribe to Chat space member events.
				- `https://www.googleapis.com/auth/chat.app.memberships.readonly`: Subscribe to Chat space member events.
				- `https://www.googleapis.com/auth/chat.app.messages.readonly`: Subscribe to Chat space message and reaction events.
				- `https://www.googleapis.com/auth/chat.app.spaces`: Subscribe to Chat space events.
				- `https://www.googleapis.com/auth/chat.app.spaces.readonly`: Subscribe to Chat space events.

The following code sample subscribes to message events in a specified Chat space:

### Python

```
"""Create subscription."""

from google.oauth2 import service_account
from apiclient.discovery import build

# Specify required scopes.
SCOPES = ['https://www.googleapis.com/auth/chat.app.messages.readonly']

# Specify service account details.
CREDENTIALS = (
    service_account.Credentials.from_service_account_file('credentials.json')
    .with_scopes(SCOPES)
)

# The Google Workspace resource to monitor for events.
TARGET_RESOURCE = '//chat.googleapis.com/spaces/SPACE_ID'

# The types of events to receive.
EVENT_TYPES = [
                'google.workspace.chat.message.v1.created',
                'google.workspace.chat.message.v1.updated',
                'google.workspace.chat.message.v1.deleted',
              ]

# The endpoint to deliver events to, such as a Google Cloud Pub/Sub topic.
TOPIC = 'TOPIC_NAME'

# Call the Workspace Events API using the service endpoint.
service = build(
    'workspaceevents',
    'v1beta',
    credentials=CREDENTIALS,
)

BODY = {
    'target_resource': TARGET_RESOURCE,
    'event_types': EVENT_TYPES,
    'notification_endpoint': {'pubsub_topic': TOPIC},
    'payload_options': {'include_resource': RESOURCE_DATA},
}
response = service.subscriptions().create(body=BODY).execute()
print(response)
```

Replace the following:

- `SPACE_ID`: The space name, which you can obtain from the [`spaces.list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) in the Chat API, or from a space's URL.
- `TOPIC_NAME`: The full name of the Pub/Sub topic that you created in your Cloud project. Formatted as `projects/PROJECT_ID/topics/TOPIC_ID`.
- `RESOURCE_DATA`: A boolean that specifies whether the subscription includes resource data in the payload:
	- `True`: Includes all resource data. To limit which fields are included, add the [`fieldMask`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#PayloadOptions.FIELDS.field_mask) field and specify at least one field for the changed resource. Only subscriptions to Chat resources support including resource data.
		- `False`: Excludes resource data.

## Related topics

- Tutorial: [Observe meeting events with Python and the Meet REST API](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [Get a subscription](https://developers.google.com/workspace/events/guides/get-subscription)
- [List subscriptions](https://developers.google.com/workspace/events/guides/list-subscriptions)
- [Update or renew a subscription](https://developers.google.com/workspace/events/guides/update-subscription)
- [Resolve errors and reactivate a subscription](https://developers.google.com/workspace/events/guides/reactivate-subscription)
- [Delete a subscription](https://developers.google.com/workspace/events/guides/delete-subscription)
