---
source: https://developers.google.com/workspace/meet/api/guides/tutorial-events-python
root: workspace
fetched_at: 2026-04-23T15:30:28.715Z
---

# Observe meeting events with Python and the Google Meet REST API

This tutorial shows how to use the Google Meet REST API along with the Google Workspace Events API and Google Cloud Pub/Sub to observe and react to events in a Meet meeting space. The sample application records when conferences start and end, when participants join or leave, and when any generated meeting artifacts are available.

Instead of subscribing to a specific meeting space, you can instead subscribe to a Meet user to receive events for any meeting space that the user owns or organizes. For details, see [Subscribe to Google Meet events](../../../events/guides/events-meet.md) in the Google Workspace Events API documentation.

## Prerequisites

If you need any of these prerequisites turned on for your organization, ask your Google Workspace administrator to turn them on:

- A [Google Workspace](https://workspace.google.com/features/) account with access to [Google Meet](https://workspace.google.com/products/meet/).
- Access to create a [Google Cloud project](../../../guides/create-project.md).
- [Python 3](https://www.python.org/downloads/) installed.
- The [gcloud CLI](https://cloud.google.com/sdk/docs/install) installed.

## Prepare your environment

This section shows how to create and configure your local environment and the Google Cloud project for this tutorial.

### Create a working directory and Python virtual environment

To create and activate a new [virtual environment](https://docs.python.org/3/library/venv.html), run the following commands in your terminal.

### Linux/macOS

```
mkdir meet-tutorial
cd meet-tutorial
python3 -mvenv env
source env/bin/activate
```

### Windows (command prompt)

```
mkdir meet-tutorial
cd meet-tutorial
python3 -mvenv env
env/bin/activate.bat
```

### Windows (PowerShell)

```
mkdir meet-tutorial
cd meet-tutorial
python3 -mvenv env
env/bin/activate.ps1
```

### Create a Google Cloud project

### Google API Console

1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Create a Project**.
	[Go to Create a Project](https://console.developers.google.com/projectcreate)
2. In the **Project Name** field, enter a descriptive name for your project.
	Optional: To edit the **Project ID**, click **Edit**. The project ID can't be changed after the project is created, so choose an ID that meets your needs for the lifetime of the project.
3. In the **Location** field, click **Browse** to display potential locations for your project. Then, click **Select**.
4. Click **Create**. The Google API Console navigates to the Dashboard page and your project is created within a few minutes.

### gcloud CLI

In one of the following development environments, access the Google Cloud CLI (`gcloud`):

- **Cloud Shell**: To use an online terminal with the gcloud CLI already set up, activate Cloud Shell.  
	[Activate Cloud Shell](https://console.developers.google.com/?cloudshell=true)
- **Local Shell**: To use a local development environment, [install](https://cloud.google.com/sdk/docs/install) and [initialize](https://cloud.google.com/sdk/docs/initializing) the gcloud CLI.  
	To create a Cloud project, use the `gcloud projects create` command:
	```
	gcloud projects create PROJECT_ID
	```
	Replace PROJECT\_ID by setting the ID for the project you want to create.

### Enable billing for the Google Cloud project

### Google API Console

1. In the Google API Console, go to **Billing**. Click **Menu** \> **Billing** \> **My Projects**.
	[Go to Billing for My Projects](https://console.developers.google.com/billing/projects)
2. In **Select an organization**, choose the organization associated with your Google Cloud project.
3. In the project row, open the **Actions** menu (), click **Change billing**, and choose the Cloud Billing account.
4. Click **Set account**.

### gcloud CLI

1. To list available billing accounts, run:
	```
	gcloud billing accounts list
	```
2. Link a billing account with a Google Cloud project:
	```
	gcloud billing projects link PROJECT_ID --billing-account=BILLING_ACCOUNT_ID
	```
	Replace the following:
	- `PROJECT_ID` is the **Project ID** for the Cloud project for which you want to enable billing.
		- `BILLING_ACCOUNT_ID` is the **billing account ID** to link with the Google Cloud project.

## Set up authentication and authorization

Authentication and authorization lets the app access Meet REST API resources. User authorization is required to call the Meet REST API. This section hows you how to configure user credentials and request authorization.

### Configure the OAuth consent screen and choose scopes

The following steps suggest placeholder information to configure the [OAuth consent screen](../../../guides/configure-oauth-consent.md) for your app. Before publishing the app externally, update this information.

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Branding**.
	[Go to Branding](https://console.developers.google.com/auth/branding)
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.developers.google.com/auth/branding), [Audience](https://console.developers.google.com/auth/audience), and [Data Access](https://console.developers.google.com/auth/scopes). If you see a message that says **Google Auth platform not configured yet**, click **Get Started**:
1. Under **App Information**, in **App name**, enter `Meet REST API Tutorial`.
	2. In **User support email**, choose a support email address where users can contact you if they have questions about their consent.
	3. Click **Next**.
	4. Under **Audience**, select **Internal**.
	5. Click **Next**.
	6. Under **Contact Information**, enter an **Email address** where you can be notified about any changes to your project.
	7. Click **Next**.
	8. Under **Finish**, review the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and if you agree, select **I agree to the Google API Services: User Data Policy**.
	9. Click **Continue**.
	10. Click **Create**.
	11. If you selected **External** for user type, add test users:
	1. Click **Audience**.
			2. Under **Test users**, click **Add users**.
			3. Enter your email address and any other authorized test users, then click **Save**.
4. Click **Data Access** **\>** **Add or Remove Scopes**. A panel appears with a list of scopes for each API that you've enabled in your Google Cloud project.
5. Under **Manually add scopes**, paste the following scopes:
	- `https://www.googleapis.com/auth/meetings.space.created`
6. Click **Add to Table**.
7. Click **Update**.
8. After selecting the scopes required by your app, click **Save**.

For more information about configuring OAuth consent, see [Get started with the Google Auth platform](https://support.google.com/cloud/answer/15544987).

### Create a client ID

The client ID acts as credentials for your application during the OAuth 2.0 flows. Since the app runs locally, create a desktop client ID.

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Desktop app**.
4. In the **Name** field, type a name for the credential. This name is only shown in the Google API Console.
5. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### Install the Google auth libraries

Install the Google auth libraries:

```
pip install google-auth google-auth-oauthlib
```

### Execute authorization

The Meet REST API requires user credentials in the form of an OAuth 2.0 access token. In this section, you implement the OAuth 2.0 flow to request an access token and a refresh token for the user.

1. In your working directory, create the file `main.py` and add the following contents:
	```
	import os
	import json
	from google.auth.transport import requests
	from google.oauth2.credentials import Credentials
	from google_auth_oauthlib.flow import InstalledAppFlow
	def authorize() -> Credentials:
	    """Ensure valid credentials for calling the Meet REST API."""
	    CLIENT_SECRET_FILE = "./client_secret.json"
	    credentials = None
	    if os.path.exists('token.json'):
	        credentials = Credentials.from_authorized_user_file('token.json')
	    if credentials is None:
	        flow = InstalledAppFlow.from_client_secrets_file(
	            CLIENT_SECRET_FILE,
	            scopes=[
	                'https://www.googleapis.com/auth/meetings.space.created',
	            ])
	        flow.run_local_server(port=0)
	        credentials = flow.credentials
	    if credentials and credentials.expired:
	        credentials.refresh(requests.Request())
	    if credentials is not None:
	        with open("token.json", "w") as f:
	            f.write(credentials.to_json())
	    return credentials
	USER_CREDENTIALS = authorize()
	```
2. To run the code, both the client ID and the secret created earlier are required. Copy the downloaded client secret file to the project working directory and rename it as `client_secret.json`.
3. If you'd like to test how authorization works, run the following command. The app prompts for authorization and creates a `token.json` file in the project working directory after the request is approved.
	```
	python3 main.py
	```

## Add the Meet REST API

Now that the authorization code is complete, it's time to enable and call the Meet REST API.

### Enable the APIs

While this section is focused on the Meet REST API, this tutorial also uses Google Cloud Pub/Sub and Google Workspace Events API.

### Google API Console

1. In the Google API Console, enable the Google Meet REST API, the Google Workspace Events API, and Google Cloud Pub/Sub.
	[Enable the APIs](https://console.developers.google.com/flows/enableapi?apiid=meet.googleapis.com,workspaceevents.googleapis.com,pubsub.googleapis.com)
2. Confirm that you're enabling the APIs in the correct Cloud project, then click **Next**.
3. Confirm that you're enabling the correct APIs, then click **Enable**.

### gcloud CLI

1. If necessary, set the current Cloud project to the one you created with the `gcloud config set project` command:
	```
	gcloud config set project PROJECT_ID
	```
	Replace PROJECT\_ID with the **Project ID** of the Cloud project you created.
2. Enable the Google Meet REST API, the Google Workspace Events API, and Google Cloud Pub/Sub with the `gcloud services enable` command:
	```
	gcloud services enable meet.googleapis.com workspaceevents.googleapis.com pubsub.googleapis.com
	```

### Install the Meet REST API client library

Follow these steps to install the Meet REST API client library:

1. Run the command:
	```
	pip install google-apps-meet
	```
2. Edit the `main.py` file to import the client:
	```
	from google.apps import meet_v2 as meet
	```

### Create a space

Now that the Meet REST API is available, define a function to create a meeting space that can be subscribed to.

Edit `main.py` and add:

```
def create_space() -> meet.Space:
    """Create a meeting space."""
    client = meet.SpacesServiceClient(credentials=USER_CREDENTIALS)
    request = meet.CreateSpaceRequest()
    return client.create_space(request=request)
```

## Subscribe to events

To receive events about a meeting space, you create a subscription using the Google Workspace Events API. You must also create and subscribe to a Google Cloud Pub/Sub topic which serves as the notification endpoint where your app receives the events.

## Configure Google Cloud Pub/Sub

To create and subscribe to a Pub/Sub topic:

### Google API Console

1. In the Google API Console, go to Menu \> **Pub/Sub**.
	[Go to Pub/Sub](https://console.developers.google.com//cloudpubsub)
	Make sure that the Cloud project for your app is selected.
2. Click **Create topic** and do the following:
	1. Enter `workspace-events` as the topic name.
		2. Leave **Add a default subscription** selected.
		3. Click **Create**. Your full topic name is formatted as `projects/{project}/topics/{topic}`. Make a note of this name for use in later steps.
3. Grant access to publish Pub/Sub messages to your topic:
	1. On the side panel, open the **Permissions** tab.
		2. Click **Add Principal**.
		3. In **New principals**, enter `meet-api-event-push@system.gserviceaccount.com`.
		4. In **Assign roles**, select `Pub/Sub Publisher`.
		5. Click **Save**.
	It can take a few minutes to update the permissions for your topic.

### gcloud CLI

1. In your Cloud project, create a topic by running the following:
	```
	gcloud pubsub topics create workspace-events
	```
	The output displays the full topic name, formatted as `projects/{project}/topics/{topic}`. Make a note of this name for use in later steps.
2. Grant access to publish messages to your topic:
	```
	gcloud pubsub topics add-iam-policy-binding workspace-events --member='serviceAccount:meet-api-event-push@system.gserviceaccount.com' --role='roles/pubsub.publisher'
	```
	It can take a few minutes to update the permissions for your topic.
3. Create a Pub/Sub subscription for the topic:
	```
	gcloud pubsub subscriptions create workspace-events-sub --topic=TOPIC_NAME
	```
	Replace the following:
	- `TOPIC_NAME`: The name of your topic that you created in the previous step.

Make note of the topic name and make sure the value for `{project}` is the Cloud project ID for your app. You'll use the topic name to create the Google Workspace subscription later.

### Create a service account

### Google API Console

1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.developers.google.com/iam-admin/serviceaccounts)
2. Click **Create service account**.
3. Fill in the service account details, then click **Create and continue**.
4. In the **Grant this service account access to project** section, add the following roles:
	- `roles/pubsub.subscriber`
5. Click **Continue**.
6. Optional: Enter users or groups that can manage and perform actions with this service account. For more details, refer to [Managing service account impersonation](https://cloud.google.com/iam/docs/impersonating-service-accounts).
7. Click **Done**. Make a note of the email address for the service account.

### gcloud CLI

1. Create the service account:
	```
	gcloud iam service-accounts create meet-event-listener \
	  --display-name="meet-event-listener"
	```
2. Grant the necessary roles to the service account:
	```
	gcloud projects add-iam-policy-binding PROJECT_ID \
	  --member="serviceAccount:meet-event-listener@PROJECT_ID.iam.gserviceaccount.com" \
	  --role="roles/pubsub.subscriber"
	```
	Replace `PROJECT_ID` with your Google Cloud project ID.

### Use the service account

After creating the service account, grant yourself access to impersonate the service account.

### Google API Console

1. In the **Actions** column for the newly created service account, click \> **Manage permissions**.
2. Click **Add key** \> **Grant access**.
3. Enter your email address under **Add principals**.
4. Select **Service accounts** \> **Service Account Token Creator** as the role.
5. Click **Save**.
6. Return to your terminal and sign in with `gcloud` to set the application default credentials to the service account. When prompted for authorization, sign in using the same account used in the previous steps.
	```
	gcloud auth application-default login --impersonate-service-account=SERVICE_ACCOUNT_EMAIL
	```

### gcloud CLI

1. To add the permission, run `         gcloud iam service-accounts add-iam-policy-binding` using the email address of the service account and the user.
	```
	gcloud iam service-accounts add-iam-policy-binding \
	  SERVICE_ACCOUNT_EMAIL \
	  --member="user:YOUR_EMAIL" \
	  --role="roles/iam.serviceAccountTokenCreator"
	```
2. Sign in to set the application default credentials to the service account. When prompted for authorization, sign in using the same account used in the previous steps.
	```
	gcloud auth application-default login --impersonate-service-account=SERVICE_ACCOUNT_EMAIL
	```

### Install the Pub/Sub client library

1. Use `pip` to install the client library for Pub/Sub:
	```
	pip install google-cloud-pubsub
	```
2. Then edit `main.py` to import the client:
	```
	from google.cloud import pubsub_v1
	```

### Create the Google Workspace subscription

Add the following code to `main.py` to define a method for subscribing to Meet events. This code subscribes to all events for a meeting space. When subscribed, events are posted to the Pub/Sub topic.

```
def subscribe_to_space(space_name: str = None, topic_name: str = None):
    """Subscribe to events for a meeting space."""
    session = requests.AuthorizedSession(USER_CREDENTIALS)
    body = {
        'targetResource': f"//meet.googleapis.com/{space_name}",
        "eventTypes": [
            "google.workspace.meet.conference.v2.started",
            "google.workspace.meet.conference.v2.ended",
            "google.workspace.meet.participant.v2.joined",
            "google.workspace.meet.participant.v2.left",
            "google.workspace.meet.recording.v2.fileGenerated",
            "google.workspace.meet.transcript.v2.fileGenerated",
        ],
        "payloadOptions": {
            "includeResource": False,
        },
        "notificationEndpoint": {
            "pubsubTopic": topic_name
        },
        "ttl": "86400s",
    }
    response = session.post("https://workspaceevents.googleapis.com/v1/subscriptions", json=body)
    return response
```

Next, add the corresponding code to pull and process the events.

### Listen for and handle events

Continue to edit `main.py` and add the following sample code. This code implements the receiving side and uses the Google Cloud Pub/Sub API to pull events as they're made available. The various handler methods print information about the corresponding events.

```
def format_participant(participant: meet.Participant) -> str:
    """Formats a participant for display on the console."""
    if participant.anonymous_user:
        return f"{participant.anonymous_user.display_name} (Anonymous)"

    if participant.signedin_user:
        return f"{participant.signedin_user.display_name} (ID: {participant.signedin_user.user})"

    if participant.phone_user:
        return f"{participant.phone_user.display_name} (Phone)"

    return "Unknown participant"

def fetch_participant_from_session(session_name: str) -> meet.Participant:
    """Fetches the participant for a session."""
    client = meet.ConferenceRecordsServiceClient(credentials=USER_CREDENTIALS)
    # Use the parent path of the session to fetch the participant details
    parsed_session_path = client.parse_participant_session_path(session_name)
    participant_resource_name = client.participant_path(
        parsed_session_path["conference_record"],
        parsed_session_path["participant"])
    return client.get_participant(name=participant_resource_name)

def on_conference_started(message: pubsub_v1.subscriber.message.Message):
    """Display information about a conference when started."""
    payload = json.loads(message.data)
    resource_name = payload.get("conferenceRecord").get("name")
    client = meet.ConferenceRecordsServiceClient(credentials=USER_CREDENTIALS)
    conference = client.get_conference_record(name=resource_name)
    print(f"Conference (ID {conference.name}) started at {conference.start_time.rfc3339()}")

def on_conference_ended(message: pubsub_v1.subscriber.message.Message):
    """Display information about a conference when ended."""
    payload = json.loads(message.data)
    resource_name = payload.get("conferenceRecord").get("name")
    client = meet.ConferenceRecordsServiceClient(credentials=USER_CREDENTIALS)
    conference = client.get_conference_record(name=resource_name)
    print(f"Conference (ID {conference.name}) ended at {conference.end_time.rfc3339()}")

def on_participant_joined(message: pubsub_v1.subscriber.message.Message):
    """Display information about a participant when they join a meeting."""
    payload = json.loads(message.data)
    resource_name = payload.get("participantSession").get("name")
    client = meet.ConferenceRecordsServiceClient(credentials=USER_CREDENTIALS)
    session = client.get_participant_session(name=resource_name)
    participant = fetch_participant_from_session(resource_name)
    display_name = format_participant(participant)
    print(f"{display_name} joined at {session.start_time.rfc3339()}")

def on_participant_left(message: pubsub_v1.subscriber.message.Message):
    """Display information about a participant when they leave a meeting."""
    payload = json.loads(message.data)
    resource_name = payload.get("participantSession").get("name")
    client = meet.ConferenceRecordsServiceClient(credentials=USER_CREDENTIALS)
    session = client.get_participant_session(name=resource_name)
    participant = fetch_participant_from_session(resource_name)
    display_name = format_participant(participant)
    print(f"{display_name} left at {session.end_time.rfc3339()}")

def on_recording_ready(message: pubsub_v1.subscriber.message.Message):
    """Display information about a recorded meeting when artifact is ready."""
    payload = json.loads(message.data)
    resource_name = payload.get("recording").get("name")
    client = meet.ConferenceRecordsServiceClient(credentials=USER_CREDENTIALS)
    recording = client.get_recording(name=resource_name)
    print(f"Recording available at {recording.drive_destination.export_uri}")

def on_transcript_ready(message: pubsub_v1.subscriber.message.Message):
    """Display information about a meeting transcript when artifact is ready."""
    payload = json.loads(message.data)
    resource_name = payload.get("transcript").get("name")
    client = meet.ConferenceRecordsServiceClient(credentials=USER_CREDENTIALS)
    transcript = client.get_transcript(name=resource_name)
    print(f"Transcript available at {transcript.docs_destination.export_uri}")

def on_message(message: pubsub_v1.subscriber.message.Message) -> None:
    """Handles an incoming event from the Google Cloud Pub/Sub API."""
    event_type = message.attributes.get("ce-type")
    handler = {
        "google.workspace.meet.conference.v2.started": on_conference_started,
        "google.workspace.meet.conference.v2.ended": on_conference_ended,
        "google.workspace.meet.participant.v2.joined": on_participant_joined,
        "google.workspace.meet.participant.v2.left": on_participant_left,
        "google.workspace.meet.recording.v2.fileGenerated": on_recording_ready,
        "google.workspace.meet.transcript.v2.fileGenerated": on_transcript_ready,
    }.get(event_type)

    try:
        if handler is not None:
            handler(message)
        message.ack()
    except Exception as error:
        print("Unable to process event")
        print(error)

def listen_for_events(subscription_name: str = None):
    """Subscribe to events on the subscription."""
    subscriber = pubsub_v1.SubscriberClient()
    with subscriber:
        future = subscriber.subscribe(subscription_name, callback=on_message)
        print("Listening for events")
        try:
            future.result()
        except KeyboardInterrupt:
            future.cancel()
    print("Done")
```

### Finalize the code

Add the following code to `main.py` to call the methods to create the space, subscribe to events, and listen. Update the `TOPIC_NAME` and `SUBSCRIPTION_NAME` constants with your own [topic and subscription names](https://console.developers.google.com//cloudpubsub) that you previously created.

1. Add the code to `main.py`:
	```
	space = create_space()
	print(f"Join the meeting at {space.meeting_uri}")
	TOPIC_NAME = "projects/PROJECT_ID/topics/TOPIC_ID"
	SUBSCRIPTION_NAME = "projects/PROJECT_ID/subscriptions/SUBSCRIPTION_ID"
	subscription = subscribe_to_space(topic_name=TOPIC_NAME, space_name=space.name)
	if (subscription.status_code) == 200:
	    listen_for_events(subscription_name=SUBSCRIPTION_NAME)
	else:
	    print(f"Subscription to Meet events failed, response data: {subscription.content}")
	```
	Replace the following:
	- `PROJECT_ID`: The unique Cloud project ID for your app, such as `my-sample-project-191923`.
		- `TOPIC_ID`: The name of the Pub/Sub topic that you created in your Cloud project.
		- `SUBSCRIPTION_ID`: The name of your subscription, such as `workspace-events-sub`.
2. Run the program:
	```
	python3 main.py
	```

If you haven't previously run the program, it prompts for authorization the first time. Grant access to the application to call the Meet REST API. After the program successfully runs, you should see output similar to:

```
Join the meeting at https://meet.google.com/abc-mnop-xyz
```

### Join the conference

To generate events for the application, join the conference using the URL displayed by the application. After you join, you can try these actions to trigger events:

- Leave and rejoin the meeting.
- Invite others or dial in with your phone.
- Enable recordings and transcripts.

Each of these activities generates an event that the application receives and logs to the Google API Console.

Use `ctrl-c` to interrupt the program when you're done.

### Optional: Additional steps to try

The app logs basic details about the events. To continue exploring the Meet REST API, try modifying the application to perform these additional actions.

- Use the [People API](https://developers.google.com/people) to retrieve additional information about signed-in participants.
	```
	def subscribe_to_user(user_name: str = None, topic_name: str = None) -> requests_lib.Response:
	    """Subscribe to events for a user."""
	    session = requests.AuthorizedSession(USER_CREDENTIALS)
	    body = {
	        "targetResource": f"//cloudidentity.googleapis.com/users/{user_name}",
	        "eventTypes": [
	            "google.workspace.meet.conference.v2.started",
	            "google.workspace.meet.conference.v2.ended",
	            "google.workspace.meet.participant.v2.joined",
	            "google.workspace.meet.participant.v2.left",
	            "google.workspace.meet.recording.v2.fileGenerated",
	            "google.workspace.meet.transcript.v2.fileGenerated",
	        ],
	        "payloadOptions": {
	            "includeResource": False,
	        },
	        "notificationEndpoint": {"pubsubTopic": topic_name},
	        "ttl": "86400s",
	    }
	    response = session.post(
	        "https://workspaceevents.googleapis.com/v1/subscriptions", json=body
	    )
	    return response
	service = build("people", "v1", credentials=USER_CREDENTIALS)
	response = (
	    service.people()
	    .get(resourceName="people/me", personFields="names,emailAddresses")
	    .execute()
	)
	resource_name = response.get("resourceName")
	if resource_name.startswith("people/"):
	    resource_name = resource_name[len("people/") :]
	subscription = subscribe_to_user(topic_name=TOPIC_NAME, user_name=resource_name)
	```
	Make sure to add "https://www.googleapis.com/auth/userinfo.profile" in the [authorize method](./tutorial-events-python.md#execute-authorization) in the credential samples above.
- Use the [Google Drive API](../../../drive/api/guides/about-sdk.md) to download recordings and transcripts.
- Instead of downloading transcripts from Google Drive, retrieve them using the [structured transcript methods](../reference/rest/v2/conferenceRecords.transcripts.entries/list.md) in the Meet REST API.
- get space instead of creating the space
	```
	def get_space(meeting_code: str) -> meet.Space:
	    """Get a meeting space."""
	    client = meet.SpacesServiceClient(credentials=USER_CREDENTIALS)
	    return client.get_space(name="spaces/" + meeting_code)
	```
	Make sure to add "https://www.googleapis.com/auth/meetings.space.readonly" in the [authorize method](./tutorial-events-python.md#execute-authorization) in the credential samples above.

## Optional: Clean up

To avoid incurring charges to your Google API Console account for the resources used in this tutorial, we recommend that you clean up any resources and projects created.

To delete the subscription:

### Console

1. In the Google API Console, go to Menu \> **Pub/Sub** \> **Subscriptions**
	[Go to Subscriptions](https://console.developers.google.com/cloudpubsub/subscription)
2. Select the subscription and click **More actions**.
3. Click **Delete**. The **Delete subscription** window appears.
4. Click **Delete**.

### gcloud CLI

1. Delete the subscription:
	```
	gcloud pubsub subscriptions delete SUBSCRIPTION_NAME
	```

To delete the topic:

### Console

1. In the Google API Console, go to Menu \> **Pub/Sub** \> **Topics**
	[Go to Topics](https://console.developers.google.com/cloudpubsub/topic)
2. Select the topic and click **More actions**.
3. Click **Delete**. The **Delete topic** window appears.
4. Enter `delete` and then click **Delete**.

### gcloud CLI

1. Delete the topic:
	```
	gcloud pubsub topics delete TOPIC_NAME
	```

To delete the project:

### Console

1. In the Google API Console, go to the **Manage resources** page. Click **Menu** \> **IAM & Admin** \> **Manage Resources**.
	[Go to Resource Manager](https://console.developers.google.com/cloud-resource-manager)
2. In the project list, select the project you want to delete and then click **Delete** .
3. In the dialog, type the project ID and then click **Shut down** to delete the project.

### gcloud CLI

1. To delete a project, use the [gcloud projects delete](https://cloud.google.com/sdk/gcloud/reference/projects/delete) command:
	```
	gcloud projects delete PROJECT_ID
	```

## Related topics

- Learn about the [types of Meet events to which you can subscribe](../../../events/guides/events-meet.md).
- Learn more about [what Google Meet REST API can do](./overview.md) and review the [reference documentation](../reference/rest/v2.md).
- [Create a Google Workspace subscription](../../../events/guides/create-subscription.md) to Meet meeting spaces or users using the Google Workspace Events API.
- To learn more about authentication, see [Configure the OAuth consent screen and choose scopes](../../../guides/configure-oauth-consent.md).
