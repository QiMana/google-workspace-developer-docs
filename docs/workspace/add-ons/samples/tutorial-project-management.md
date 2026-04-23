---
source: https://developers.google.com/workspace/add-ons/samples/tutorial-project-management
root: workspace
fetched_at: 2026-04-23T15:23:12.678Z
---

# Manage projects with Google Chat, Vertex AI, and Firestore

This tutorial shows how to make a Google Chat app that a team can use to manage projects in real time. The Chat app uses Vertex AI to help teams write user stories (which represent features of a software system from the point of view of a user for the team to develop) and persists the stories in a Firestore database.

- ![Mentioning the project management app prompts the app to offer help.](https://developers.google.com/static/workspace/add-ons/samples/images/project-management-1.png)
	Figure 1. Charlie discusses feature development in a Chat space with their team. Mentioning the project management Chat app prompts the Chat app to offer help.
- ![Using the /createUserStory slash command to create a story.](https://developers.google.com/static/workspace/add-ons/samples/images/project-management-2.png)
	Figure 2. Using the /createUserStory slash command, Charlie creates a story.
- ![The project management Chat app uses Vertex AI to write the story description.](https://developers.google.com/static/workspace/add-ons/samples/images/project-management-3.png)
	Figure 3. The project management Chat app uses Vertex AI to write the story description, then shares the story in the space.
- ![Charlie finalizes story details.](https://developers.google.com/static/workspace/add-ons/samples/images/project-management-4.png)
	Figure 4. Charlie clicks Edit to finalize the story details. The AI description is accurate, but Charlie wants more details, so Charlie clicks Expand to have Vertex AI add requirements to the story description. Charlie assigns the story to themself, sets status to started, selects an appropriate priority and size, then clicks Save.
- ![Managing all the team's user stories.](https://developers.google.com/static/workspace/add-ons/samples/images/project-management-5.png)
	Figure 5. At any time, Charlie can see and manage all the team's user stories with the /manageUserStories slash command.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Access to Google Cloud services to do the following:
	- Create a Google Cloud project.
		- Link a Google Cloud billing account to the Cloud project. To learn if you have access, see [Permissions required to enable billing](https://cloud.google.com/billing/docs/how-to/modify-project#required-permissions-enable).
		- Use [unauthenticated Google Cloud Function invocations](https://cloud.google.com/functions/docs/securing/managing-access-iam#allowing_unauthenticated_http_function_invocation), which you can verify by determining whether your Google Cloud organization uses [domain restricted sharing](https://cloud.google.com/functions/docs/securing/managing-access-iam#domain_restricted_sharing).
	If necessary, ask your Google Cloud administrator for access or permission.
- If using the [Google Cloud CLI](https://cloud.google.com/cli), a Node.js development environment configured to work with gcloud CLI. See [Setting up a Node.js development environment](https://cloud.google.com/nodejs/docs/setup).

## Objectives

- Build a Chat app that manages agile software projects.
- Help users write user stories with generative AI-assisted story writing tools powered by Vertex AI:
	- Generate and regenerate story descriptions.
		- Expand story descriptions from notes to complete requirements.
		- Correct grammar to fix typos.
- Keep work up-to-date by writing to, and reading from, a Firestore database.
- Facilitate collaboration in a Chat space by letting users create, edit, assign, and start stories directly from the conversation.

## Products used

The project management app uses the following Google Workspace and Google Cloud products:

- [Chat API](../../chat.md): An API for developing Google Chat apps that receive and respond to Chat interaction events, like messages. The project management Google Chat app uses Chat API to receive and respond to interaction events sent by Chat, and to configure attributes that determine how it appears in Chat, like name and avatar image.
- [Vertex AI API](https://cloud.google.com/vertex-ai): A generative AI platform. The project management Google Chat app uses the Vertex AI API to write user story titles and descriptions.
- [Firestore](https://cloud.google.com/firestore): A serverless document database. The project management Google Chat app uses Firebase to store data about user stories.
- [Cloud Functions](https://cloud.google.com/functions): A lightweight serverless compute service that lets you create single-purpose, standalone functions that can respond to Chat interaction events without the need to manage a server or runtime environment. The project management Google Chat app uses Cloud Functions to host the HTTP endpoint that Chat sends interaction events to and as a compute platform to run logic that processes and responds to these events.
	Cloud Functions uses the following Google Cloud products to build, process interaction events, and host compute resources:
	- [Cloud Build](https://cloud.google.com/build): A fully managed continuous integration, delivery and deployment platform that runs automated builds.
		- [Pub/Sub](https://cloud.google.com/pubsub): An asynchronous and scalable messaging service that decouples services that produce messages from services that process those messages.
		- [Cloud Run Admin API](https://cloud.google.com/run/docs/reference/rest): A fully managed environment for running containerized apps.

## Architecture

The project management Google Chat app architecture receives and processes Chat interaction events at an HTTP endpoint, uses Vertex AI to help write user stories, and stores user story details in a Firestore database. The following diagram shows the architecture of the Google Workspace and Google Cloud resources used.

![Architecture diagram for the project management Google Chat app](https://developers.google.com/static/workspace/add-ons/samples/images/tutorial-project-management-architecture-diagram.svg)

The project management Google Chat app works like this:

1. A user sends a message in Chat and invokes the project management Google Chat app by either messaging it directly, mentioning it in a space, or entering a slash command.
2. Chat sends a synchronous HTTP request to the Cloud Function's HTTP endpoint.
3. The project management Google Chat app processes the HTTP request:
	1. Vertex AI helps write or update a user story.
		2. A Firestore database stores, retrieves, updates, or deletes user story data.
4. Cloud Functions returns an HTTP response to Chat which displays it to the user as either a message or dialog.

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

1. In the Google API Console, enable the Google Chat API, the Vertex AI API, the Cloud Functions API, the Firestore API, the Cloud Build API, the Pub/Sub API, and the Cloud Run Admin API.
	[Enable the APIs](https://console.developers.google.com/flows/enableapi?apiid=chat.googleapis.com,aiplatform.googleapis.com,cloudfunctions.googleapis.com,firestore.googleapis.com,cloudbuild.googleapis.com,pubsub.googleapis.com,run.googleapis.com)
2. Confirm that you're enabling the APIs in the correct Cloud project, then click **Next**.
3. Confirm that you're enabling the correct APIs, then click **Enable**.

### gcloud CLI

1. If necessary, set the current Cloud project to the one you created with the `gcloud config set project` command:
	```
	gcloud config set project PROJECT_ID
	```
	Replace PROJECT\_ID with the **Project ID** of the Cloud project you created.
2. Enable the Google Chat API, the Vertex AI API, the Cloud Functions API, the Firestore API, the Cloud Build API, the Pub/Sub API, and the Cloud Run Admin API with the `gcloud services enable` command:
	```
	gcloud services enable chat.googleapis.com \
	aiplatform.googleapis.com \
	cloudfunctions.googleapis.com \
	firestore.googleapis.com \
	cloudbuild.googleapis.com \
	pubsub.googleapis.com \
	run.googleapis.com
	```
	The Cloud Build, Pub/Sub, and Cloud Run Admin APIs are prerequisites of Cloud Functions.

### Authentication and authorization

No authentication and authorization configuration is necessary to follow this tutorial.

To call the Firestore and Vertex AI APIs, this tutorial uses [Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc) with the default service account attached to the Cloud Function, which you don't need to set up. In the context of a production environment, you would typically [create](https://cloud.google.com/iam/docs/service-accounts-create) and [attach](https://cloud.google.com/docs/authentication/provide-credentials-adc#attached-sa) a service account to the Cloud Function instead.

## Create and deploy the Google Chat app

Now that your Google Cloud project is created and configured, you're ready to build and deploy the Google Chat app. In this section, you do the following:

1. Create a Firestore database in which to persist and retrieve user stories.
2. Optionally, review the sample code.
3. Create a Cloud Function to host and run the Chat app's code in response to events received from Chat as HTTP requests.
4. Create and deploy a Google Chat app on the Google Chat API configuration page.

### Create the Firestore database

In this section, you create a Firestore database to persist and retrieve user stories, but you don't define the data model. The data model is set implicitly in the sample code by the `model/user-story.js` and `model/user.js` files.

The project management Chat app database uses a NoSQL data model based on *documents* organized into *collections*. To learn more, see [Firestore data model](https://cloud.google.com/firestore/docs/data-model).

The following diagram is an overview of the project management Google Chat app's data model:

![Data model of the Firestore database.](https://developers.google.com/static/workspace/add-ons/samples/images/tutorial-project-management-firebase-data-model.svg)

The root collection is `spaces`, where each document represents a space that the Chat app created stories in. Each user story is represented by a document in the `userStories` subcollection, and each user is represented by a document in the `users` subcollection.

#### View collection, document, and field definitions

#### spaces

Spaces the Chat app created stories in.

<table><tbody><tr><th colspan="2">Fields</th></tr><tr><td><code>Document ID</code></td><td><code>String</code><br>Unique ID of a specific space where stories are created. Corresponds with the space's resource name in Chat API.</td></tr><tr><td><code>userStories</code></td><td><code>Subcollection of Documents (<code>userStories</code>)</code><br>Stories created by the Chat app and its users. Corresponds with the <code>Document ID</code> of a <code>userStories</code> in Firebase.</td></tr><tr><td><code>users</code></td><td><code>Subcollection of Documents (user)</code><br>Users who created or who are assigned stories.</td></tr><tr><td><code>displayName</code></td><td><code>String</code><br>The display name of the space in the Chat API. Not set for direct messages with users.</td></tr></tbody></table>

#### userStories

Stories created by the Chat app and its users.

<table><tbody><tr><th colspan="2">Fields</th></tr><tr><td><code>Document ID</code></td><td><code>String</code><br>Unique ID of a specific user story created by the Chat app and its users.</td></tr><tr><td><code>assignee</code></td><td><code>Document (user)</code><br>The resource name of the user assigned to complete the story. Corresponds with the <code>Document ID</code> of the <code>users</code> document and with a user's resource name in Chat API.</td></tr><tr><td><code>description</code></td><td><code>String</code><br>A description of the software feature from the user's point of view.</td></tr><tr><td><code>priority</code></td><td><code>Enum</code><br>The urgency with which to complete the work. Possible values are <code>Low</code>, <code>Medium</code>, or <code>High</code>.</td></tr><tr><td><code>size</code></td><td><code>Enum</code><br>The amount of work. Possible values are <code>Small</code>, <code>Medium</code>, or <code>Large</code>.</td></tr><tr><td><code>status</code></td><td><code>Enum</code><br>The phase of work. Possible values are <code>OPEN</code>, <code>STARTED</code>, or <code>COMPLETED</code>.</td></tr><tr><td><code>title</code></td><td><code>String</code><br>The title of the story; a brief summary.</td></tr></tbody></table>

#### users

Users who created or who are assigned stories.

<table><tbody><tr><th colspan="2">Fields</th></tr><tr><td><code>Document ID</code></td><td><code>String</code><br>Unique ID of a specific user. Corresponds with the <code>assignee</code> of a <code>userStories</code> in Firebase, and with a user's resource name in Chat API.</td></tr><tr><td><code>avatarUrl</code></td><td><code>String</code><br>URL hosting the user's Chat avatar image.</td></tr><tr><td><code>displayName</code></td><td><code>String</code><br>The user's Chat display name.</td></tr></tbody></table>

Here's how to create the Firestore database:

### Google API Console

1. In the Google API Console, go to Firestore. Click **Menu** \> **Firestore**.
	[Go to Firestore](https://console.developers.google.com/firestore/databases)
2. Click **Create database**.
3. From **Select your Firestore mode**, click **Native mode**.
4. Click **Continue**.
5. Configure the database:
	1. In **Name your database**, leave the **Database ID** as `(default)`.
		2. In **Location type**, specify a region for your database, such as `us-central1`. For best performance, select the same or nearby location as the Chat app's Cloud Function.
6. Click **Create database**.

### gcloud CLI

- Create a Firestore database in Native mode with the `gcloud firestore databases create` command:
	```
	gcloud firestore databases create \
	--location=LOCATION \
	--type=firestore-native
	```
	Replace LOCATION with the name of a [Firestore region](https://cloud.google.com/firestore/docs/locations#types), such as `us-central1`.

### Review the sample code

Optionally, before creating the Cloud Function, take a moment to review and familiarize yourself with the sample code hosted on GitHub.

[View on GitHub](https://github.com/googleworkspace/add-ons-samples/tree/main/node/chat/project-management-app)

Here's an overview of each file:

`env.js`

Environment configuration variables to deploy the Chat app to a specified Google Cloud project and region. You must update the configuration variables in this file.

`package.json` and `package-lock.json`

Node.js project settings and dependencies.

`index.js`

Entry point for the Chat app's Cloud Function. It reads the [Chat event](../../chat/receive-respond-interactions.md) from the HTTP request, calls the app handler, and posts the HTTP response as a JSON object.

`controllers/app.js`

The main application logic. Processes the [interaction events](../../chat/receive-respond-interactions.md) by handling the Chat app mentions and slash commands. To respond to card clicks, it calls `app-action-handler.js`.

`controllers/app-action-handler.js`

Application logic to handle card click [Chat interaction events](../../chat/receive-respond-interactions.md#card-clicked).

`services/space-service.js`, `services/user-service.js`, and `services/user-story-service.js`

These files contain the parts of the application logic specific to working with Chat spaces, users, and user stories. The functions in these files are called by `app.js` or `app-action-handler.js`. To perform database operations, the functions in these files call functions in `firestore-service.js`.

`services/firestore-service.js`

Handles database operations. The functions in this file are called by `services/space-service.js`, `services/user-service.js`, and `services/user-story-service.js`.

`services/aip-service.js`

Calls the Vertex AI API for generative AI text prediction.

`model/*.js`

These files contain the definition of classes and enums that the application services use to store and pass data between functions. They set the data model for the Firestore database.

`views/*.js`

Each file in this directory instantiates a [card object](../../chat/api/reference/rest/v1/cards.md) that the Chat app then sends back to Chat as either a [card message](../../chat/messages-overview.md#anatomy-card) or a [dialog action response](../../chat/dialogs.md).

`views/widgets/*.js`

Each file instantiates a type of [widget](../../chat/api/reference/rest/v1/cards.md#widget) object that the app uses to build the cards in the `views/` directory.

`test/**/*.test.js`

Each file in this directory and its subdirectories contains the unit tests for the corresponding function, controller, service, view, or widget. You can execute all the unit tests by running `npm run test` while in the project's root directory.

### Create and deploy the Cloud Function

In this section, you create and deploy a Cloud Function that comprises the project management Chat app's application logic.

The Cloud Function runs in response to an HTTP request from Chat containing a Chat interaction event. When run, the Cloud Function code processes the event and returns a response to Chat which Chat renders as a message, dialog, or other type of user interaction. If applicable, the Cloud Function also reads from, or writes to, the Firestore database.

Here's how to create the Cloud Function:

### Google API Console

1. Download the code from GitHub as a zip file.
	[Download the zip file](https://codeload.github.com/googleworkspace/add-ons-samples/zip/refs/heads/main)
2. Extract the downloaded zip file.
	The extracted folder contains the entire Google Workspace samples repository.
3. In the extracted folder, navigate to `add-ons-samples-main/node/chat/project-management-app/`, then compress the `project-management-app` folder into a zip file.
	The root directory of the zip file must contain the following files and folders:
	- `env.js`
		- `README.md`
		- `gcloudignore.text`
		- `package-lock.json`
		- `package.json`
		- `index.js`
		- `model/`
		- `controllers/`
		- `views/`
		- `services/`
4. In the Google API Console, go to the Cloud Functions page:
	[Go to Cloud Functions](https://console.developers.google.com//functions)
	Make sure that the Google Cloud project for your Chat app is selected.
5. Click **Create Function**.
6. On the **Create function** page, set up your function:
	1. In **Environment**, select **Cloud Run Function**.
		2. In **Function name**, enter `project-management-tutorial`.
		3. In **Region**, select a region.
		4. Under **Authentication**, select **Allow unauthenticated invocations**.
		5. Click **Next**.
7. In **Runtime**, select **Node.js 20**.
8. In **Entry point**, delete the default text and enter `projectManagementChatApp`.
9. In **Source code**, select **Zip upload**.
10. In **Destination bucket**, [create](https://cloud.google.com/storage/docs/creating-buckets) or select a bucket:
	1. Click **Browse**.
		2. Choose a bucket.
		3. Click **Select**.
	Google Cloud uploads the zip file to and extracts the component files in this bucket. Cloud Functions then copies the component files into the Cloud Function.
11. In **Zip file**, upload the zip file you downloaded from GitHub, extracted, and recompressed:
	1. Click **Browse**.
		2. Navigate to and select the zip file.
		3. Click **Open**.
12. Click **Deploy**.
	The **Cloud Functions detail** page opens, and your function appears with two progress indicators: one for the build and one for the service. When both progress indicators disappear and are replaced with a check mark, your function is deployed and ready.
13. Edit the sample code to set constants:
	1. On the **Cloud Function detail** page, click **Edit**.
		2. Click **Next**.
		3. In **Source code**, select **Inline editor**.
		4. In the inline editor, open the `env.js` file.
		5. Replace project-id with your Cloud project ID.
		6. Optional: Update us-central1 with a [supported location](https://cloud.google.com/functions/docs/locations) for your Cloud Function.
14. Click **Deploy**.
15. When the function finishes deploying, copy the trigger URL:
	1. On the **Function details** page, click **Trigger**.
		2. Copy the URL. You need it to configure the Chat app in the following section.

### gcloud CLI

1. Clone the code from GitHub:
	```
	git clone https://github.com/googleworkspace/add-ons-samples.git
	```
2. Switch to the directory that holds the code for this project management Chat app:
	```
	cd add-ons-samples/node/chat/project-management-app
	```
3. Edit the `env.js` file to set environment variables:
	1. Replace project-id with your Google Cloud project ID.
		2. Replace us-central1 with your Google Cloud project location.
4. Deploy the Cloud Function to Google Cloud:
	```
	gcloud functions deploy project-management-tutorial \
	--gen2 \
	--region=REGION \
	--runtime=nodejs20 \
	--source=. \
	--entry-point=projectManagementChatApp \
	--trigger-http \
	--allow-unauthenticated
	```
	Replace REGION with a [Cloud Function location](https://cloud.google.com/functions/docs/locations) where its infrastructure is hosted, such as `us-central1`.

1. When the function finishes deploying, copy the `url` property from the response. This is the Trigger URL that you use in the following section to configure the Google Chat app.

### Configure the Google Chat app in the Google API Console

This section shows how to configure the Chat API in the Google API Console with information about your Chat app, including the Chat app's name, supported slash commands, and the trigger URL of the Chat app's Cloud Function to which it sends Chat interaction events.

1. In the Google API Console, click **Menu** \> **APIs & Services** \> **Enabled APIs & Services** \> **Google Chat API** \> **Configuration**.
	[Go to Chat API configuration](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. In **App name**, type `Project Manager`.
3. In **Avatar URL**, type `https://developers.google.com/add-ons/samples/images/quickstart-app-avatar.png`.
4. In **Description**, type `Manages projects with user stories.`
5. Click the **Enable Interactive features** toggle to the on position.
6. Under **Functionality**, select **Join spaces and group conversations**.
7. Under **Connection settings**, select **HTTP endpoint URL**.
8. Copy the **Service account email**. You need this email when you authorize your add-on to invoke your function.
9. Under **Triggers**, select **Use a common HTTP endpoint URL for all triggers**.
10. In **HTTP endpoint URL**, paste the trigger URL of the Cloud Function formatted as `https://` REGION `-` PROJECT\_ID`.cloudfunctions.net/project-management-tutorial`. If you deployed the Cloud Function with the gcloud CLI, this is the `url` property.
11. Register the Chat app's [slash commands](../../chat/commands.md). To register a slash command:
	1. Under **Commands**, click **Add a command**.
		2. For each command detailed in the following table, enter the **Command ID**, enter the **Description**, under **Command type** select **Slash command**, enter the **Slash command name**, select **Dialog**, and then click **Done**:
		| Command ID | Description | Slash command name | Dialog |
		| --- | --- | --- | --- |
		| 1 | Create a story with the specified title. | `/createUserStory` | Unselected |
		| 2 | Lists all the stories assigned to the user. | `/myUserStories` | Unselected |
		| 3 | Displays current status of the specified story. | `/userStory` | Unselected |
		| 4 | Opens a dialog where stories can be edited. | `/manageUserStories` | Selected |
		| 5 | Deletes all stories in the space. | `/cleanupUserStories` | Unselected |
12. Under **Visibility**, select **Make this Google Chat app available to specific people and groups in your Workspace domain** and enter your email address.
13. Optionally, under **Logs**, select **Log errors to Logging**.
14. Click **Save**. A configuration saved message appears.

The Chat app is ready to receive and respond to messages on Chat.

## Test the Chat app

Test the project management Chat app by messaging it and using its slash commands to create, edit, and delete user stories.

1. Open Google Chat using the Google Workspace account that you provided when you added yourself as a trusted tester.
	[Go to Google Chat](https://chat.google.com/)
2. Click **New chat**.
3. In the **Add 1 or more people** field, type the name of your Chat app.
4. Select your Chat app from the results. A direct message opens.
5. In the new direct message with the app, type `Hello` and press `enter`. The project management Chat app responds with a help menu detailing what it can do.
6. To create a story, type `/createUserStory Test story` in the message bar and send it. The project management Chat app responds with a card message detailing the user story it creates for you using generative AI from Vertex AI.
7. In the API Console, check the Firestore database to review the records it created about the space you added the Chat app to, the users who have interacted with it, and the user story you created.
	[Go to Firestore](https://console.developers.google.com/firestore/databases)
8. Return to Google Chat.
	[Go to Google Chat](https://chat.google.com/)
9. Optionally, to edit the story, click **Edit**. When you're satisfied with the story, click **Save**.
10. Test each slash command supported by the app. To see them, type `/` or mention the Chat app.
11. Delete the test user story by issuing the `/cleanupUserStories` slash command. Alternatively, [remove or uninstall the app](https://support.google.com/chat/answer/7655820). When removed, the app deletes all user stories created in that space.

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
- [Answer questions based on Chat conversations with a Gemini AI Chat app](./tutorial-ai-knowledge-assistant.md)
- [Respond to incidents with Google Chat, Vertex AI, Apps Script, and user authentication](./tutorial-incident-response-user-auth.md)
- [Fact-check statements with an ADK AI agent and Gemini model](../../../apps-script/samples/custom-functions/fact-check.md)
- [Integrate fundamental AI concepts in Chat apps](https://codelabs.developers.google.com/chat-apps-ai-concepts)
- [Build a Chat app as a Google Workspace add-on with Apps Script](https://youtube.com/watch?v=pDthZ2xssDc)
