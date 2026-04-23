---
source: https://developers.google.com/workspace/add-ons/samples/tutorial-ai-knowledge-assistant
root: workspace
fetched_at: 2026-04-23T15:23:11.717Z
---

# Answer questions based on Chat conversations with a Gemini AI Chat app

This tutorial shows how to make a Google Chat app that answers questions based on conversations in Chat spaces with generative AI powered by Vertex AI with Gemini. The Chat app uses the Google Workspace Events API plus Pub/Sub to recognize and answer questions posted in Chat spaces in real time, even when it isn't mentioned.

The Chat app uses all the messages sent in the space as a data source and knowledge base: when someone asks a question, the Chat app checks for previously shared answers and then shares one. If no answer is found, it says it can't answer. By using Gemini AI, the Google Chat app adapts and grows its knowledge base as it continuously trains on conversations in spaces it's added to.

Here's how the Chat app works in an employee onboarding and support space:

- ![Mentioning the AI knowledge assistant app adds it to a space.](https://developers.google.com/static/workspace/add-ons/samples/images/ai-knowledge-assistant-1.png)
	Figure 1. Charlie adds the AI knowledge assistant Chat app to a Chat space.
- ![Dana asks a question.](https://developers.google.com/static/workspace/add-ons/samples/images/ai-knowledge-assistant-2.png)
	**Figure 2.** Dana asks if the company offers public speaking training.
- ![The AI knowledge assistant Chat app answers the question.](https://developers.google.com/static/workspace/add-ons/samples/images/ai-knowledge-assistant-3.png)
	**Figure 3.** The AI knowledge assistant Chat app prompts Vertex AI with Gemini to answer Dana's question based on the Chat space's conversation history and then shares the answer.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Access to Google Cloud services to do the following:
	- Create a Google Cloud project.
		- Link a Google Cloud billing account to the Cloud project. To learn if you have access, see [Permissions required to enable billing](https://cloud.google.com/billing/docs/how-to/modify-project#required-permissions-enable).
		- Use [unauthenticated Google Cloud Function invocations](https://cloud.google.com/functions/docs/securing/managing-access-iam#allowing_unauthenticated_http_function_invocation), which you can verify by determining whether your Google Cloud organization uses [domain restricted sharing](https://cloud.google.com/functions/docs/securing/managing-access-iam#domain_restricted_sharing).
	If necessary, ask your Google Cloud administrator for access or permission.
- If using the [Google Cloud CLI](https://cloud.google.com/cli), a Node.js development environment configured to work with gcloud CLI. See [Setting up a Node.js development environment](https://cloud.google.com/nodejs/docs/setup).

## Objectives

- Build a Chat app that uses generative AI to answer questions based on knowledge shared in Chat space conversations.
- With generative AI:
	- Detect and answer employee questions.
		- Continuously learn from ongoing conversations in a Chat space.
- Listen for and respond to messages in a Chat space in real time even when the Chat app isn't directly messaged.
- Persist messages by writing to, and reading from, a Firestore database.
- Facilitate collaboration in a Chat space by mentioning space managers when no answer to a question is found.

## Architecture

The following diagram shows the architecture of the Google Workspace and Google Cloud resources used by the AI knowledge assistant Chat app.

![Architecture diagram for the AI knowledge assistant Chat app](https://developers.google.com/static/workspace/add-ons/samples/images/tutorial-ai-knowledge-assistant-architecture-diagram.svg)

The AI knowledge assistant Chat app works like this:

- A user adds the AI knowledge assistant Chat app to a Chat space:
	1. The Chat app prompts the user who added it to the Chat space to configure authentication and authorization.
		2. The Chat app fetches the space's messages by calling the `spaces.messages.list` method in the Chat API and then stores the fetched messages in a Firestore database.
		3. The Chat app calls the `subscriptions.create` method in the Google Workspace Events API to start listening for events like messages in the space. The subscription's notification endpoint is a Pub/Sub topic that uses Eventarc to forward the event to the Chat app.
		4. The Chat app posts an introduction message to the space.
- A user in the Chat space posts a message:
	1. The Chat app receives the message in real time from the Pub/Sub topic.
		2. The Chat app adds the message to the Firestore database.
		If a user later edits or deletes the message, the Chat app receives the updated or deleted event in real time and then updates or deletes the message in the Firestore database.
		3. The Chat app sends the message to Vertex AI with Gemini:
		1. The prompt instructs Vertex AI with Gemini to check if the message includes a question. If it does, Gemini answers the question based on the Chat space's message history kept in Firestore and the Google Chat app then sends the message to the Chat space. If it doesn't, don't respond.
				2. If Vertex AI with Gemini answers the question, the Chat app posts the answer by calling the `spaces.messages.create` method in Chat API using app authentication.
			If Vertex AI with Gemini can't answer the question, the Chat app posts a message saying that it can't find an answer to that question in the Chat space's history.
- The Chat app receives a lifecycle notification from the Google Workspace Events API that the Chat space subscription is about to expire:
	1. The Chat app sends a request to renew the subscription by calling the `subscriptions.patch` method in the Google Workspace Events API.
- The Chat app is removed from a Chat space:
	1. The Chat app deletes the subscription by calling the `subscriptions.delete` method in the Google Workspace Events API.
		2. The Chat app deletes the Chat space's data from Firestore.

#### Review the products used by the AI knowledge assistant Chat app

The AI knowledge assistant Chat app uses the following Google Workspace and Google Cloud products:

- [Vertex AI API](https://cloud.google.com/vertex-ai) with Gemini: A generative AI platform powered by Gemini. The AI knowledge assistant Chat app uses Vertex AI API with Gemini to recognize, understand, and answer employee questions.
- [Chat API](../../chat.md): An API for developing Google Chat apps that receive and respond to Chat interaction events, like messages. The AI knowledge assistant Chat app uses Chat API to:
	- Receive and respond to interaction events sent by Chat.
		- List messages sent in a space.
		- Post responses to user questions in a space.
		- Configure attributes that determine how it appears in Chat, like name and avatar image.
- [Google Workspace Events API](../../events.md): This API lets you subscribe to events and manage change notifications across Google Workspace applications. The AI knowledge assistant Chat app uses the Google Workspace Events API to listen for messages posted in a Chat space so it can detect and answer questions even when it isn't mentioned.
- [Firestore](https://cloud.google.com/firestore): A serverless document database. The AI knowledge assistant Chat app uses Firestore to store data about messages sent in a Chat space.
- [Pub/Sub](https://cloud.google.com/pubsub): Pub/Sub is an asynchronous and scalable messaging service that decouples services producing messages from services processing those messages. The AI knowledge assistant Chat app uses Pub/Sub to receive subscription events from Chat spaces.
- [Eventarc](https://cloud.google.com/eventarc/docs/overview): Eventarc lets you build event-driven architectures without having to implement, customize, or maintain the underlying infrastructure. The AI knowledge assistant Chat app uses Eventarc to route events from Pub/Sub to a Chat space and the Cloud Function that receives and processes the subscription events.
- [Cloud Functions](https://cloud.google.com/functions): A lightweight serverless compute service that lets you create single-purpose, standalone functions that can respond to Chat interaction and subscription events without the need to manage a server or runtime environment. The AI knowledge assistant Chat app uses two Cloud Functions named:
	- `app`: Host the HTTP endpoint that Chat sends interaction events to and as a compute platform to run logic that processes and responds to these events.
		- `eventsApp`: Receives and process Chat space events like messages from a Pub/Sub subscription.
	Cloud Functions uses the following Google Cloud products to build and host compute resources:
	- [Cloud Build](https://cloud.google.com/build): A fully managed continuous integration, delivery and deployment platform that runs automated builds.
		- [Cloud Run](https://cloud.google.com/run): A fully managed environment for running containerized apps.

## Prepare the environment

This section shows how to create and configure a Google Cloud project for the Chat app.

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

### Enable billing for the Cloud project

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

### Enable the APIs

### Google API Console

1. In the Google API Console, enable the Google Chat API, the Vertex AI API, the Cloud Functions API, the Firestore API, the Cloud Build API, the Pub/Sub API, the Google Workspace Events API, the Eventarc API and the Cloud Run Admin API.
	[Enable the APIs](https://console.developers.google.com/flows/enableapi?apiid=chat.googleapis.com,aiplatform.googleapis.com,cloudfunctions.googleapis.com,firestore.googleapis.com,cloudbuild.googleapis.com,pubsub.googleapis.com,workspaceevents.googleapis.com,eventarc.googleapis.com,run.googleapis.com)
2. Confirm that you're enabling the APIs in the correct Cloud project, then click **Next**.
3. Confirm that you're enabling the correct APIs, then click **Enable**.

### gcloud CLI

1. If necessary, set the current Cloud project to the one you created:
	```
	gcloud config set project PROJECT_ID
	```
	Replace PROJECT\_ID with the **Project ID** of the Cloud project you created.
2. Enable the Google Chat API, the Vertex AI API, the Cloud Functions API, the Firestore API, the Cloud Build API, the Pub/Sub API, the Google Workspace Events API, the Eventarc API and the Cloud Run Admin API:
	```
	gcloud services enable chat.googleapis.com \
	aiplatform.googleapis.com \
	cloudfunctions.googleapis.com \
	firestore.googleapis.com \
	cloudbuild.googleapis.com \
	pubsub.googleapis.com \
	workspaceevents.googleapis.com \
	eventarc.googleapis.com \
	run.googleapis.com
	```

### Set up authentication and authorization

Authentication and authorization lets the Chat app access resources in Google Workspace and Google Cloud.

In this tutorial, you publish the Google Chat app internally so it's OK to use placeholder information. Before publishing the Google Chat app externally, replace placeholder information with real information for the consent screen.

#### Configure the OAuth consent screen, specify scopes, and register your app

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Branding**.
	[Go to Branding](https://console.developers.google.com/auth/branding)
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.developers.google.com/auth/branding), [Audience](https://console.developers.google.com/auth/audience), and [Data Access](https://console.developers.google.com/auth/scopes). If you see a message that says **Google Auth platform not configured yet**, click **Get Started**:
	1. Under **App Information**, in **App name**, type `AI knowledge assistant`.
		2. In **User support email**, select your email address or an appropriate Google group.
		3. Click **Next**.
		4. Under **Audience**, select **Internal**. If you can't select **Internal**, select **External**.
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
3. Click **Data Access** \> **Add or Remove Scopes**. A panel appears with a list of scopes for each API that you've enabled in your Google Cloud project.
	1. Under **Manually add scopes**, paste the following scope:
		- `https://www.googleapis.com/auth/chat.messages`
		2. Click **Add to Table**.
		3. Click **Update**.
		4. After selecting the scopes required by your app, on the **Data Access** page, click **Save**.

#### Create OAuth client ID credentials

1. In the Google API Console, go to **Menu** \> **APIs & Services** \> **Credentials**.
	[Go to Credentials](https://console.developers.google.com/apis/credentials)
2. Click **Create Credentials** \> **OAuth client ID**.
3. Click **Application type** \> **Web application**.
4. In the **Name** field, type a name for the credential. This name is only shown in the Google API Console.
5. Under **Authorized redirect URIs**, click **Add URI**.
6. In **URIs 1**, type the following:
	```
	https://REGION-PROJECT_ID.cloudfunctions.net/app/oauth2
	```
	Replace the following:
	- REGION: the Cloud Function's region, like `us-central1`. Later, when you create the two Cloud Functions, you must set their region to this value.
		- PROJECT\_ID: the **Project ID** of the Cloud project you created.
7. Click **Create**.
8. From the **OAuth client created** window, click **Download JSON**.
9. Save the downloaded file as `credentials.json`. Later, when you create the two Cloud Functions, you include the `credentials.json` file in each deployment.
10. Click **OK**.

## Create the Pub/Sub topic

The Pub/Sub topic works with Google Workspace Events API to subscribe to events in a Chat space like messages and notify the Chat app in real time.

Here's how to create the Pub/Sub topic:

### Google API Console

1. In the Google API Console, go to **Menu** \> **Pub/Sub**.
	[Go to Pub/Sub](https://console.developers.google.com/cloudpubsub/topic/list)
2. Click **Create Topic**.
3. In **Topic ID**, type `events-api`.
4. Deselect **Add a default subscription**.
5. Under **Encryption**, select **Google-managed encryption key**.
6. Click **Create**. The Pub/Sub topic appears.
7. For this Pub/Sub topic and Google Workspace Events API to work together, give the Chat IAM user permission to post to the Pub/Sub topic:
	1. In the **events-api** panel, under **PERMISSIONS**, click **Add Principal**.
		2. Under **Add principals**, in **New principals**, type `chat-api-push@system.gserviceaccount.com`.
		3. Under **Assign roles**, in **Select a role**, select **Pub/Sub** \> **Pub/Sub Publisher**.
		4. Click **Save**.

### gcloud CLI

1. Create a Pub/Sub topic with topic ID `events-api`:
	```
	gcloud pubsub topics create events-api
	```
2. Give the Chat IAM user permission to post to the Pub/Sub topic:
	```
	gcloud pubsub topics add-iam-policy-binding events-api \
	--member='serviceAccount:chat-api-push@system.gserviceaccount.com' \
	--role='roles/pubsub.publisher'
	```

## Create the Firestore database

The Firestore database persists and retrieves data from Chat spaces, like messages. You don't define the data model, which is set implicitly in the sample code by the `model/message.js` and `services/firestore-service.js` files.

The AI knowledge assistant Chat app database uses a NoSQL data model based on *documents* organized into *collections*. To learn more, see [Firestore data model](https://cloud.google.com/firestore/docs/data-model).

The following diagram is an overview of the AI knowledge assistant Chat app's data model:

![Data model of the Firestore database.](https://developers.google.com/static/workspace/add-ons/samples/images/tutorial-ai-knowledge-assistant-architecture-diagram-firebase-data-model.svg)

The root contains two collections:

1. `spaces`, where each document represents a Chat space that the Chat app is added to. Each message is represented by a document in the `messages` subcollection.
2. `users`, where each document represents a user who added the Chat app to a Chat space.

#### View collection, document, and field definitions

#### spaces

A Chat space that includes the AI knowledge assistant Chat app.

<table><tbody><tr><th colspan="2">Fields</th></tr><tr><td><code>Document ID</code></td><td><code>String</code><br>Unique ID of a specific space. A part of the space's resource name in Chat API.</td></tr><tr><td><code>messages</code></td><td><code>Subcollection of Documents (<code>messages</code>)</code><br>Messages sent in the Chat space. Corresponds with the <code>Document ID</code> of a <code>message</code> in Firebase.</td></tr><tr><td><code>spaceName</code></td><td><code>String</code><br>The unique name of the space in the Chat API. Corresponds with the space's resource name in Chat API.</td></tr></tbody></table>

#### messages

Messages sent in the Chat space.

<table><tbody><tr><th colspan="2">Fields</th></tr><tr><td><code>Document ID</code></td><td><code>String</code><br>Unique ID of a specific message.</td></tr><tr><td><code>name</code></td><td><code>String</code><br>The unique name of a message in the Chat API. Corresponds with the message's resource name in Chat API.</td></tr><tr><td><code>text</code></td><td><code>String</code><br>The message's text body.</td></tr><tr><td><code>time</code></td><td><code>String (Timestamp format)</code><br>The time at which the message was created.</td></tr></tbody></table>

#### users

Users who added the AI knowledge assistant Chat app to a Chat space.

<table><tbody><tr><th colspan="2">Fields</th></tr><tr><td><code>Document ID</code></td><td><code>String</code><br>Unique ID of a specific user.</td></tr><tr><td><code>accessToken</code></td><td><code>String</code><br>The access token granted during OAuth 2.0 user authorization used to call Google Workspace APIs.</td></tr><tr><td><code>refreshToken</code></td><td><code>String</code><br>The refresh token granted during OAuth 2.0 user authorization.</td></tr></tbody></table>

Here's how to create the Firestore database:

### Google API Console

1. In the Google API Console, go to **Menu** \> **Firestore**.
	[Go to Firestore](https://console.developers.google.com/firestore/databases)
2. Click **Create database**.
3. From **Select your Firestore mode**, click **Native mode**.
4. Click **Continue**.
5. Configure the database:
	1. In **Name your database**, leave the **Database ID** as `(default)`.
		2. Under **Location type**, select **Region**.
		3. In **Region**, specify a region for your database, such as `us-central1`. For best performance, select the same or nearby location as the Chat app's Cloud Functions.
6. Click **Create database**.

### gcloud CLI

- Create a Firestore database in Native mode:
	```
	gcloud firestore databases create \
	--location=LOCATION \
	--type=firestore-native
	```
	Replace LOCATION with the name of a [Firestore region](https://cloud.google.com/firestore/docs/locations#types), such as `us-central1`. For best performance, select the same or nearby location as the Chat app's Cloud Functions.

## Create and deploy the Chat app

Now that your Google Cloud project is created and configured, you're ready to build and deploy the Chat app. In this section, you do the following:

1. Create and deploy two Cloud Functions. One to respond to Chat interaction events and one to respond to Pub/Sub events.
2. Create and deploy a Chat app on the Google Chat API configuration page.

### Create and deploy the Cloud Functions

In this section, you create and deploy two Cloud Functions named:

- `app`: Hosts and runs the Chat app's code that responds to events received from Chat as HTTP requests.
- `eventsApp`: Receives and processes Chat space events like messages from Pub/Sub.

Together, these Cloud Functions make up the AI knowledge assistant Chat app's application logic.

Optionally, before creating the Cloud Functions, take a moment to review and familiarize yourself with the sample code hosted on GitHub.

[View on GitHub](https://github.com/googleworkspace/add-ons-samples/tree/main/node/chat/ai-knowledge-assistant)

#### Create and deploy app

### Google API Console

1. Download the code from GitHub as a zip file.
	[Download the zip file](https://codeload.github.com/googleworkspace/add-ons-samples/zip/refs/heads/main)
2. Extract the downloaded zip file.
	The extracted folder contains the entire Google Workspace samples repository.
3. In the extracted folder, navigate to the `add-ons-samples-main/node/chat/ai-knowledge-assistant` directory.
4. In the `add-ons-samples/node/chat/ai-knowledge-assistant` directory, add the `credentials.json` file that you downloaded when you [created OAuth client ID credentials](#set-up-auth-oauth-client-id-credentials) for authentication and authorization.
5. Compress the contents of the `ai-knowledge-assistant` folder into a zip file.
	The zip file must contain the following files and folders:
	- `.gcloudignore`
		- `.gitignore`
		- `README.md`
		- `deploy.sh`
		- `env.js`
		- `events_index.js`
		- `http_index.js`
		- `index.js`
		- `credentials.json`
		- `package-lock.json`
		- `package.json`
		- `controllers/`
		- `model/`
		- `services/`
		- `test/`
6. In the Google API Console, go to **Menu** \> **Cloud Functions**.
	[Go to Cloud Functions](https://console.developers.google.com/functions)
	Make sure that the Google Cloud project for your Chat app is selected.
7. Click **Create Function**.
8. On the **Create function** page, set up your function:
	1. In **Environment**, select **Cloud Run Function**.
		2. In **Function name**, type `app`.
		3. In **Region**, select a region, like `us-central1`. This region must match the region you set in the authorized redirect URI when you [created OAuth client ID credentials](#set-up-auth-oauth-client-id-credentials) for authentication and authorization.
		4. In **Trigger type**, select **HTTPS**.
		5. Under **Authentication**, select **Allow unauthenticated invocations**.
		6. Click **Next**.
9. In **Runtime**, select **Node.js 20**.
10. In **Entry point**, delete the default text and enter `app`.
11. In **Source code**, select **Zip upload**.
12. In **Destination bucket**, [create](https://cloud.google.com/storage/docs/creating-buckets) or select a bucket:
	1. Click **Browse**.
		2. Choose a bucket.
		3. Click **Select**.
	Google Cloud uploads the zip file to and extracts the component files in this bucket. Cloud Functions then copies the component files into the Cloud Function.
13. In **Zip file**, upload the zip file you downloaded from GitHub, extracted, and recompressed:
	1. Click **Browse**.
		2. Navigate to and select the zip file.
		3. Click **Open**.
14. Click **Deploy**.
	The **Cloud Functions detail** page opens, and your function appears with two progress indicators: one for the build and one for the service. When both progress indicators disappear and are replaced with a check mark, your function is deployed and ready.
15. Edit the sample code to set constants:
	1. On the **Cloud Function detail** page, click **Edit**.
		2. Click **Next**.
		3. In **Source code**, select **Inline editor**.
		4. In the inline editor, open and edit the `env.js` file:
		1. Set the value of project to your Cloud project ID.
				2. Set the value of location to the Cloud Function's [region](https://cloud.google.com/functions/docs/locations), like `us-central1`.
16. Click **Deploy**.

### gcloud CLI

1. Clone the code from GitHub:
	```
	git clone https://github.com/googleworkspace/add-ons-samples.git
	```
2. Switch to the directory that holds the code for this AI knowledge assistant Chat app:
	```
	cd add-ons-samples/node/chat/ai-knowledge-assistant
	```
3. In the `add-ons-samples/node/chat/ai-knowledge-assistant` directory, add the `credentials.json` file that you downloaded when you [created OAuth client ID credentials](#set-up-auth-oauth-client-id-credentials) for authentication and authorization.
4. Edit the `env.js` file to set environment variables:
	1. Set the value of project to your Cloud project ID.
		2. Set the value of location to the Cloud Function's [region](https://cloud.google.com/functions/docs/locations), like `us-central1`.
5. Deploy the Cloud Function to Google Cloud:
	```
	gcloud functions deploy app \
	--gen2 \
	--region=REGION \
	--runtime=nodejs20 \
	--source=. \
	--entry-point=app \
	--trigger-http \
	--allow-unauthenticated
	```
	Replace REGION with the value of the Cloud Function's [region](https://cloud.google.com/functions/docs/locations) to match the one set in the `env.js` file, like `us-central1`.

#### Create and deploy eventsApp

### Google API Console

1. In the Google API Console, go to **Menu** \> **Cloud Functions**.
	[Go to Cloud Functions](https://console.developers.google.com/functions)
	Make sure that the Google Cloud project for your Chat app is selected.
2. Click **Create Function**.
3. On the **Create function** page, set up your function:
	1. In **Environment**, select **Cloud Run Function**.
		2. In **Function name**, type `eventsApp`.
		3. In **Region**, select a region, like `us-central1`. This region must match the region you set in the authorized redirect URI when you [created OAuth client ID credentials](#set-up-auth-oauth-client-id-credentials) for authentication and authorization.
		4. In **Trigger type**, select **Cloud Pub/Sub**.
		5. In **Cloud Pub/Sub topic**, select the Pub/Sub topic name you created, which has the format `projects/PROJECT/topics/events-api` where PROJECT is your Cloud project ID.
		6. If you see a message beginning to `Service account(s) might not have enough permissions to deploy the function with the selected trigger.`, click **Grant All**.
		7. Click **Next**.
4. In **Runtime**, select **Node.js 20**.
5. In **Entry point**, delete the default text and enter `eventsApp`.
6. In **Source code**, select **Zip from Cloud Storage**.
7. In **Cloud Storage location**, click **Browse**.
8. Select the bucket you uploaded the zip file to when you created the `app` Cloud Function.
9. Click the zip file you uploaded.
10. Click **Select**.
11. Click **Deploy**.
	The **Cloud Functions detail** page opens, and your function appears with three progress indicators: one for the build, one for the service, and one for the trigger. When all three progress indicators disappear and are replaced with a check mark, your function is deployed and ready.
12. Edit the sample code to set constants:
	1. On the **Cloud Function detail** page, click **Edit**.
		2. Click **Next**.
		3. In **Source code**, select **Inline editor**.
		4. In the inline editor, open and edit the `env.js` file:
		1. Set the value of project to your Cloud project ID.
				2. Set the value of location to the Cloud Function's [region](https://cloud.google.com/functions/docs/locations), like `us-central1`.
13. Click **Deploy**.

### gcloud CLI

1. In gcloud CLI, if you are not already there, switch to the directory that holds the code for this AI knowledge assistant Chat app that you previously cloned from GitHub:
	```
	cd add-ons-samples/node/chat/ai-knowledge-assistant
	```
2. In the `add-ons-samples/node/chat/ai-knowledge-assistant` directory, add the `credentials.json` file that you downloaded when you [created OAuth client ID credentials](#set-up-auth-oauth-client-id-credentials) for authentication and authorization.
3. Edit the `env.js` file to set environment variables:
	1. Set the value of project to your Cloud project ID.
		2. Set the value of location to the Cloud Function's [region](https://cloud.google.com/functions/docs/locations), like `us-central1`.
4. Deploy the Cloud Function to Google Cloud:
	```
	gcloud functions deploy eventsApp \
	--gen2 \
	--region=REGION \
	--runtime=nodejs20 \
	--source=. \
	--entry-point=eventsApp \
	--trigger-topic=events-api
	```
	Replace REGION with the value of the Cloud Function's [region](https://cloud.google.com/functions/docs/locations) to match the one set in the `env.js` file, like `us-central1`.

### Copy the app Cloud Function's trigger URL

You paste the `app` Cloud Function's trigger URL in the next section when you [Configure the Chat app in the Google API Console](#configure-chat-app).

### Google API Console

1. In the Google API Console, go to **Menu** \> **Cloud Functions**.
	[Go to Cloud Functions](https://console.developers.google.com/functions)
2. In the **Name** column of the list of Cloud Functions, click **`app`**.
3. Click **Trigger**.
4. Copy the **URL**.

### gcloud CLI

1. Describe the `app` Cloud Function:
	```
	gcloud functions describe app
	```
2. Copy the `url` property.

### Configure the Chat app in the Google API Console

This section shows how to configure the Chat API in the Google API Console with information about your Chat app, including the Chat app's name and the trigger URL of the Chat app's Cloud Function to which it sends Chat interaction events.

1. In the Google API Console, click **Menu** \> **APIs & Services** \> **Enabled APIs & Services** \> **Google Chat API** \> **Configuration**.
	[Go to Chat API configuration](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. In **App name**, type `AI knowledge assistant`.
3. In **Avatar URL**, type `https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/live_help/default/24px.svg`.
4. In **Description**, type `Answers questions with AI`.
5. Click the **Enable Interactive features** toggle to the on position.
6. Under **Functionality**, select **Join spaces and group conversations**.
7. Under **Connection settings**, select **HTTP endpoint URL**.
8. Copy the **Service account email**. You need this email when you authorize your add-on to invoke your function.
9. Under **Triggers**, select **Use a common HTTP endpoint URL for all triggers**.
10. In **HTTP endpoint URL**, paste the URL for the `app` Cloud Function trigger formatted as `https://` REGION `-` PROJECT\_ID`.cloudfunctions.net/app` where REGION is the Cloud Function's region, like `us-central1` and PROJECT\_ID is the **Project ID** of the Cloud project you created.
11. Under **Visibility**, select **Make this Google Chat app available to specific people and groups** in your domain and enter your email address.
12. Optionally, under **Logs**, select **Log errors to Logging**.
13. Click **Save**. A configuration saved message appears.

The Chat app is ready to receive and respond to messages on Chat.

## Test the Chat app

Test the AI knowledge assistant Chat app in a Chat space with messages by asking questions that the AI knowledge assistant Chat app can answer.

Here's a few ways to test the AI knowledge assistant Chat app:

- Add the AI knowledge assistant Chat app to an existing Chat space and ask questions that are relevant to that space.
- Create a Chat space and post a few messages to use as a data source. Messages can be sourced from [Gemini](https://gemini.google.com/) with a prompt like `Answer 20 common onboarding questions employees ask their teams.` Or, you can paste a few paragraphs from the [develop with Chat overview](../../chat/overview.md) guide and then ask questions about it.

For this tutorial, lets create a Chat space and paste a few paragraphs from the [develop with Chat overview](../../chat/overview.md) guide.

1. Open Google Chat.
	[Go to Google Chat](https://chat.google.com/)
2. Create a Chat space:
	1. Click **New Chat** \> **Create a space**.
		2. In **Space name**, type `Testing AI knowledge assistant app`.
		3. Under **What is this space for?**, select **Collaboration**.
		4. Under **Access settings**, choose who can access the space.
		5. Click **Create**.
3. Add messages to use as a data source:
	1. In a web browser, visit the [develop with Chat overview](../../chat/overview.md) guide.
		2. Copy and paste the guide's content into the Chat space you created.
4. Add the AI knowledge assistant Chat app:
	1. In the message compose bar, type `@AI knowledge assistant` and in the suggestion menu that appears, select the AI knowledge assistant Chat app, and press `enter`.
		2. A message appears asking if you want to add the AI knowledge assistant Chat app to the space. Click **Add to space**.
		3. If this is the first time you add the Chat app to a space, you must configure authentication and authorization for the Chat app:
		1. Click **Configure**.
				2. A new browser window or tab opens asking you to choose a Google Account. Choose the account you are testing with.
				3. Review the permissions that the AI knowledge assistant Chat app requests. To grant them, click **Allow**.
				4. A message that says `You may close this page now.` appears. Close the browser window or tab and return to the Chat space.
5. Ask a question:
	1. In the message compose bar, type a question like `What are Google Chat apps?`
		2. The AI knowledge assistant Chat app answers.

## Considerations, alternate architecture choices, and next steps

This section reviews other ways the AI knowledge assistant Chat app can be built.

### Firestore, Cloud Storage, or calling List Messages in Chat API

This tutorial recommends storing Chat space data like messages in a Firestore database because it improves performance compared with calling the `list` method on the `Message` resource with Chat API every time the Chat app answers a question. Further, calling `list messages` repeatedly can cause the Chat app to hit API quota limits.

However, if a Chat space's conversation history becomes too long then using Firestore can become costly.

[Cloud Storage](https://cloud.google.com/storage) is an alternative to Firestore. Each space the AI knowledge assistant Chat app is active in gets its own object, and each object is a text file that contains all the messages in the space. The advantage of this approach is that the full contents of the text file can be fed to Vertex AI with Gemini at once, but the drawback is that it takes more work to update the conversation history because you can't append to an object in Cloud Storage, only replace it. This approach doesn't make sense if you regularly update the message history, but it would be a good choice if you batch-update the message history periodically, say once per week.

## Troubleshoot

When a Google Chat app or [card](../../chat/create-messages.md#create) returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.

Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on. For help viewing, debugging, and fixing errors, see [Troubleshoot and fix Google Chat errors](../../chat/troubleshoot-fix-chat-errors.md).

## Clean up

To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, we recommend that you delete the Cloud project.

1. In the Google API Console, go to the **Manage resources** page. Click **Menu** \> **IAM & Admin** \> **Manage Resources**.
	[Go to Resource Manager](https://console.developers.google.com/cloud-resource-manager)
2. In the project list, select the project you want to delete and then click **Delete** .
3. In the dialog, type the project ID and then click **Shut down** to delete the project.

## Related topics

- [Plan travels with an AI agent accessible across Google Workspace](./travel-concierge.md)
- [Respond to incidents with Google Chat, Vertex AI, Apps Script, and user authentication](./tutorial-incident-response-user-auth.md)
- [Manage projects with Google Chat, Vertex AI, and Firestore](./tutorial-project-management.md)
- [Fact-check statements with an ADK AI agent and Gemini model](../../../apps-script/samples/custom-functions/fact-check.md)
- [Integrate fundamental AI concepts in Chat apps](https://codelabs.developers.google.com/chat-apps-ai-concepts)
- [Build a Chat app as a Google Workspace add-on with Apps Script](https://youtube.com/watch?v=pDthZ2xssDc)
