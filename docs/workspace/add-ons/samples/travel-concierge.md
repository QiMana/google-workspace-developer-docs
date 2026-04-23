---
source: https://developers.google.com/workspace/add-ons/samples/travel-concierge
root: workspace
fetched_at: 2026-04-23T15:23:10.435Z
---

# Plan travels with an AI agent accessible across Google Workspace

**Coding level**: Advanced  
**Duration**: 45 minutes  
**Project type**: [Google Workspace add-on](../how-tos/building-workspace-addons.md) extending [Chat](../chat.md), [Gmail](../gmail.md), [Calendar](../calendar.md), [Drive](../drive.md), [Docs, Sheets, and Slides](../editors/gsao.md).

This tutorial shows you how to publish AI agents to Google Workspace as Google Workspace add-ons, using Apps Script or HTTP endpoints. After your publish your add-on, your users can interact with the AI agents within their workflows.

## Overview

In this tutorial, you deploy the [Travel Concierge sample](https://github.com/google/adk-samples/tree/main/python/agents/travel-concierge) from the [Agent Development Kit (ADK)](https://google.github.io/adk-docs/). The Travel Concierge is a conversational multi-agent AI that uses tools like the Google Maps Platform Places API, Google Search Grounding, and a Model Context Protocol (MCP) server.

The ADK provides chat and text interfaces for developers by default. In this tutorial, [you add a Graphical User Interface (GUI) to Google Workspace applications](https://github.com/google/adk-samples/blob/main/python/agents/travel-concierge/README.md#gui) that your users can access directly in Chat, Gmail, Calendar, Drive, Docs, Sheets, and Slides.

- ![Using the AI agent from Chat to brainstorm travel ideas.](https://developers.google.com/static/workspace/add-ons/samples/images/travel-concierge-1.png)
	Figure 1. Using the AI agent from Chat to brainstorm travel ideas.
- ![Using the AI agent from Gmail to plan a travel from the context in the selected email.](https://developers.google.com/static/workspace/add-ons/samples/images/travel-concierge-2.png)
	Figure 2. Using the AI agent from Gmail to plan a travel from the context in the selected email.

## Objectives

- Set up the environment.
- Deploy the AI agent.
- Set up the project.
- Deploy to Gmail, Calendar, Drive, Docs, Sheets, Slides.
- Deploy to Chat.
- Test the solution.

## About this solution

This solution relies on the following core technologies: the ADK, Google Cloud & [Google Workspace APIs](../../explore.md), [Vertex AI Agent Engine](https://docs.cloud.google.com/agent-builder/agent-engine/overview), and [Card framework](../concepts/card-interfaces.md).

The GUIs are designed differently for Chat and non-Chat (Gmail, Calendar, Drive, Docs, Sheets, Slides) applications to take into account their specific features and limitations.

### Features

The following features of the Travel Concierge application are common across all Google Workspace applications:

- **Persistent user sessions:** Sessions are managed by Vertex AI for persistence. Each user shares one session across all Workspace applications. Users can manually reset their session to start a new conversation.
- **Rich messaging:** Users send text messages and receive responses with rich text and card widgets.
- **Error handling:** Unexpected errors are gracefully handled using configurable retries and statuses in responses.

The Chat app has the following additional features:

- **Multimodal user messaging:** Users can send messages with attachments, including audio and video recorded directly from the Chat space.
- **More visually-advanced responses:** Responses can be generated with more advanced widgets such as carousels with images by relying on Chat-only features of the Card framework and more rendering space.

Other applications have these additional features:

- **Google profile context:** Users can send messages with their profile information (limited to birthdays in this sample).
- **Gmail context:** Users can send messages with emails (limited to one subject and body in this sample).
- **Agent's Chat space access:** Users can open the Chat app direct message (DM) space in a new tab with one button click.

### Architecture

The Travel Concierge application receives and processes Google Workspace add-on interaction events from Google Workspace applications, uses Vertex AI to prompt the ADK AI agent and manage user sessions, and relies on Google Cloud and Google Workspace APIs to gather context and display responses.

The following diagrams shows the main user flow: send a message to the AI agent.

### HTTP

- ![Architecture diagram for the Chat app.](https://developers.google.com/static/workspace/add-ons/samples/images/travel-concierge-chat-arch-http.png)
	Figure 3. The Chat app completes the context with attachments from the user message, and sends a set of messages with the history of the sub-agent interactions and the final overall answer in chronological order.
- ![Architecture diagram for the non-Chat applications.](https://developers.google.com/static/workspace/add-ons/samples/images/travel-concierge-nonchat-arch-http.png)
	Figure 4. The non-Chat applications completes the context with the user's Google profile and item selection, and displays a set of sections with the history of the sub-agent interactions and the final overall answer in reverse chronological order.

### Apps Script

- ![Architecture diagram for the Chat app.](https://developers.google.com/static/workspace/add-ons/samples/images/travel-concierge-chat-arch-as.png)
	Figure 3. The Chat app completes the context with attachments from the user message, and sends a set of messages with the history of the sub-agent interactions and the final overall answer in chronological order.
- ![Architecture diagram for the non-Chat applications.](https://developers.google.com/static/workspace/add-ons/samples/images/travel-concierge-nonchat-arch-as.png)
	Figure 4. The non-Chat applications completes the context with the user's Google profile and item selection, and displays a set of sections with the history of the sub-agent interactions and the final overall answer in reverse chronological order.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- A web browser with access to the internet.
- [Prerequisites specific to the Travel Concierge ADK AI agent](https://github.com/google/adk-samples/tree/main/python/agents/travel-concierge)
	- Python 3.10+: For installation, follow instructions on the official [Python website](https://docs.python.org/3/using/index.html).
		- `uv`: For installation, follow instructions on the official [`uv` website](https://docs.astral.sh/uv/#installation).
		- Google Cloud CLI: For installation, follow instructions on the official [Google Cloud website](https://cloud.google.com/sdk/docs/install).

## Prepare the environment

This section shows how to create and configure a Google Cloud project.

### Create a Google Cloud project

### Google Cloud console

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Create a Project**.
	[Go to Create a Project](https://console.cloud.google.com/projectcreate)
2. In the **Project Name** field, enter a descriptive name for your project.
	Optional: To edit the **Project ID**, click **Edit**. The project ID can't be changed after the project is created, so choose an ID that meets your needs for the lifetime of the project.
3. In the **Location** field, click **Browse** to display potential locations for your project. Then, click **Select**.
4. Click **Create**. The Google Cloud console navigates to the Dashboard page and your project is created within a few minutes.

### gcloud CLI

In one of the following development environments, access the Google Cloud CLI (`gcloud`):

- **Cloud Shell**: To use an online terminal with the gcloud CLI already set up, activate Cloud Shell.  
	[Activate Cloud Shell](https://console.cloud.google.com/?cloudshell=true)
- **Local Shell**: To use a local development environment, [install](https://cloud.google.com/sdk/docs/install) and [initialize](https://cloud.google.com/sdk/docs/initializing) the gcloud CLI.  
	To create a Cloud project, use the `gcloud projects create` command:
	```
	gcloud projects create PROJECT_ID
	```
	Replace PROJECT\_ID by setting the ID for the project you want to create.

### Enable billing for the Cloud project

### Google Cloud console

1. In the Google Cloud console, go to **Billing**. Click **Menu** \> **Billing** \> **My Projects**.
	[Go to Billing for My Projects](https://console.cloud.google.com/billing/projects)
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

### Enable the Google Cloud APIs

### HTTP

1. In the Google Cloud console, enable the Vertex AI, Places, People, Google Chat, Gmail, Cloud Build, Cloud Functions, Cloud Pub/Sub, Cloud Logging, Artifact Registry, Cloud Run, Google Workspace add-ons, and Cloud Resource Manager APIs.
	[Enable the APIs](https://console.cloud.google.com/flows/enableapi?apiid=aiplatform.googleapis.com,places.googleapis.com,people.googleapis.com,chat.googleapis.com,gmail.googleapis.com,cloudbuild.googleapis.com,cloudfunctions.googleapis.com,pubsub.googleapis.com,logging.googleapis.com,artifactregistry.googleapis.com,run.googleapis.com,gsuiteaddons.googleapis.com,cloudresourcemanager.googleapis.com)
2. Confirm that you're enabling the APIs in the correct Cloud project, then click **Next**.
3. Confirm that you're enabling the correct APIs, then click **Enable**.

### Apps Script

1. In the Google Cloud console, enable the Vertex AI, Places, People, Google Chat, and Cloud Resource manager APIs.
	[Enable the APIs](https://console.cloud.google.com/flows/enableapi?apiid=aiplatform.googleapis.com,places.googleapis.com,people.googleapis.com,chat.googleapis.com,cloudresourcemanager.googleapis.com)
2. Confirm that you're enabling the APIs in the correct Cloud project, then click **Next**.
3. Confirm that you're enabling the correct APIs, then click **Enable**.

### Get a Google Maps Platform Places API key

1. In the Google Cloud console, go to the **Google Maps Platform > Keys & Credentials** page.
	[Go to Keys & Credentials](https://console.cloud.google.com//google/maps-apis/credentials)
2. The **Get Started on Google Maps Platform** dialog displays your newly created API key, an alphanumeric string. You'll need this string in the next sections.

### Create a service account in Google Cloud console

Create a new service account with the role `Vertex AI User` by following these steps:

### Google Cloud console

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Click **Create service account**.
3. Fill in the service account details, then click **Create and continue**.
4. Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to [Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).
5. Click **Continue**.
6. Optional: Enter users or groups that can manage and perform actions with this service account. For more details, refer to [Managing service account impersonation](https://cloud.google.com/iam/docs/impersonating-service-accounts).
7. Click **Done**. Make a note of the email address for the service account.

### gcloud CLI

1. Create the service account:
	```
	gcloud iam service-accounts create SERVICE_ACCOUNT_NAME \
	  --display-name="SERVICE_ACCOUNT_NAME"
	```
2. Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to [Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).

The service account appears on the service account page. Next, create a private key for the service account.

### Create a private key

To create and download a private key for the service account, follow these steps:

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Select your service account.
3. Click **Keys** \> **Add key** \> **Create new key**.
4. Select **JSON**, then click **Create**.
	Your new public/private key pair is generated and downloaded to your machine as a new file. Save the downloaded JSON file as `credentials.json` in your working directory. This file is the only copy of this key. For information about how to store your key securely, see [Managing service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).
5. Click **Close**.

For more information about service accounts, see [service accounts in the Google Cloud IAM documentation](https://cloud.google.com/iam/docs/service-accounts).

### Configure the OAuth consent screen

Google Workspace add-ons require a consent screen configuration. Configuring your add-on's OAuth consent screen defines what Google displays to users.

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Branding**.
	[Go to Branding](https://console.developers.google.com/auth/branding)
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.developers.google.com/auth/branding), [Audience](https://console.developers.google.com/auth/audience), and [Data Access](https://console.developers.google.com/auth/scopes). If you see a message that says **Google Auth platform not configured yet**, click **Get Started**:
1. Under **App Information**, in **App name**, enter a name for the app.
	2. In **User support email**, choose a support email address where users can contact you if they have questions about their consent.
	3. Click **Next**.
	4. Under **Audience**, select **Internal**.
	5. Click **Next**.
	6. Under **Contact Information**, enter an **Email address** where you can be notified about any changes to your project.
	7. Click **Next**.
	8. Under **Finish**, review the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and if you agree, select **I agree to the Google API Services: User Data Policy**.
	9. Click **Continue**.
	10. Click **Create**.
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](../../guides/configure-oauth-consent.md) guide.

## Deploy the Travel Concierge ADK AI Agent

1. If not done already, authenticate with your Google Cloud account and configure Google Cloud CLI to use your Google Cloud project.
	```
	gcloud auth application-default login
	gcloud config set project PROJECT_ID
	gcloud auth application-default set-quota-project PROJECT_ID
	```
	Replace PROJECT\_ID with the ID of the Cloud project you created.
2. Download this GitHub repository
	[Download](https://github.com/google/adk-samples/archive/refs/heads/main.zip)
3. In your preferred local development environment, extract the downloaded archive file and open the `adk-samples/python/agents/travel-concierge` directory.
	```
	unzip adk-samples-main.zip
	cd adk-samples-main/python/agents/travel-concierge
	```
4. Create a new Cloud Storage bucket dedicated to the ADK AI agent.
	```
	gcloud storage buckets create gs://CLOUD_STORAGE_BUCKET_NAME --project=PROJECT_ID --location=PROJECT_LOCATION
	```
	Replace the following:
	1. CLOUD\_STORAGE\_BUCKET\_NAME with a unique bucket name you want to use.
		2. PROJECT\_ID with the ID of the Cloud project you created.
		3. PROJECT\_LOCATION with the location of the Cloud project you created.
5. Set the following environment variables:
	```
	export GOOGLE_GENAI_USE_VERTEXAI=1
	export GOOGLE_CLOUD_PROJECT=PROJECT_ID
	export GOOGLE_CLOUD_LOCATION=PROJECT_LOCATION
	export GOOGLE_PLACES_API_KEY=PLACES_API_KEY
	export GOOGLE_CLOUD_STORAGE_BUCKET=CLOUD_STORAGE_BUCKET_NAME
	export TRAVEL_CONCIERGE_SCENARIO=travel_concierge/profiles/itinerary_empty_default.json
	```
	Replace the following:
	1. PROJECT\_ID with the ID of the Cloud project you created.
		2. PROJECT\_LOCATION with the location of the Cloud project you created.
		3. PLACES\_API\_KEY with the string of the API key you created.
		4. CLOUD\_STORAGE\_BUCKET\_NAME with the name of the bucket you created.
6. Install and deploy ADK AI agent.
	```
	uv sync --group deployment
	uv run python deployment/deploy.py --create
	```
7. Retrieve the project number and engine ID from the last printed log as PROJECT\_NUMBER and ENGINE\_ID respectively, you'll need both of them later to configure your project.
	```
	Created remote agent: projects/PROJECT_NUMBER/locations/us-central1/reasoningEngines/ENGINE_ID
	```

## Review the sample code

Optionally, before setting up the project, take a moment to review and familiarize yourself with the sample code hosted on GitHub.

### Python

[View on GitHub](https://github.com/googleworkspace/add-ons-samples/tree/main/python/travel-adk-ai-agent)

### Apps Script

[View on GitHub](https://github.com/googleworkspace/add-ons-samples/tree/main/apps-script/travel-adk-ai-agent)

## Create and configure the project

### Python

1. Download this GitHub repository
	[Download](https://github.com/googleworkspace/add-ons-samples/archive/refs/heads/main.zip)
2. In your preferred local development environment, extract the downloaded archive file and open the `add-ons-samples/python/travel-adk-ai-agent` directory.
	```
	unzip add-ons-samples-main.zip
	cd add-ons-samples-main/python/travel-adk-ai-agent
	```
3. Move the JSON key file `credentials.json` from the service account downloaded in previous steps to the project directory.
4. In the Google API Console, go to **Cloud Run**:
	[Go to Cloud Run](https://console.developers.google.com/run)
5. Click **Write a function**.
6. On the **Create service** page, set up your function:
	1. In the **Service name** field, enter `travel-concierge-app`.
		2. In the **Region** list, select the location of the Cloud project you created, PROJECT\_LOCATION.
		3. Under **Endpoint URL**, click ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg).
		4. In the **Runtime** list, select the most recent version of Python.
		5. In the **Authentication** section, select **Allow public access**.
		6. In the **Containers, Volumes, Networking, Security** section, under **Resources**:
		1. In the **Memory** field, select **1 GiB**.
				2. In the **CPU** field, select **2**.
		7. Click **Create**, and wait for Cloud Run to create the service. The console redirects you to the **Source** tab.
7. In your preferred local development environment, deploy the source of the project:
	```
	gcloud run deploy travel-concierge-app --quiet --source . \
	    --region PROJECT_LOCATION  \
	    --function adk_ai_agent  \
	    --set-env-vars LOCATION=LOCATION,PROJECT_NUMBER=PROJECT_NUMBER,ENGINE_ID=ENGINE_ID,BASE_URL=BASE_URL
	```
	Replace the following:
	1. PROJECT\_LOCATION with the location of the Cloud Run function you previously created.
		2. LOCATION with the location of the Google Cloud project created in previous steps, PROJECT\_LOCATION.
		3. PROJECT\_NUMBER with the project number of the Travel Concierge ADK AI Agent deployed in previous steps.
		4. ENGINE\_ID with the engine ID of the Travel Concierge ADK AI Agent deployed in previous steps.
		5. BASE\_URL with the **Endpoint URL** that you previously copied.

### Apps Script

To create an Apps Script project and configure it to use your deployed Travel Concierge ADK AI agent:

1. Click the following button to open the **Travel Concierge ADK AI Agent** Apps Script project.  
	[Open the project](https://script.google.com/d/1MP5R51KAOAtRkddov-ZMd1O4YHFS1EIF-TtV6nrrkESOXO5yhzrGNk8C/edit?usp=sharing)
2. Click **Overview**, then ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg) **Make a copy**.
3. Name your copy of the Apps Script project:
	1. Click **Copy of Travel Concierge ADK AI Agent**.
		2. In **Project title**, type `Travel Concierge ADK AI Agent`.
		3. Click **Rename**.
4. In your Apps Script project, click ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/code/default/24px.svg) **Editor** and move the file `VertexAi.gs` up until it's above the file `AgentHandler.gs` by using the file action **Move file up**.
5. In your Apps Script project, click **Project Settings**, click **Edit script properties**, then click **Add script property** to add the following script properties:
6. `ENGINE_ID` with the engine ID of the Travel Concierge ADK AI Agent deployed in previous steps, ENGINE\_ID.
7. `LOCATION` with the location of the Google Cloud project created in previous steps, PROJECT\_LOCATION.
8. `PROJECT_NUMBER` with the project number of the Travel Concierge ADK AI Agent deployed in previous steps, PROJECT\_NUMBER.
9. `SERVICE_ACCOUNT_KEY` with the JSON key from the service account downloaded in previous steps such as `{ ... }`.
10. Click **Save script properties**
11. In your Apps Script project, click **Project Settings**.
12. Under **Google Cloud Platform (GCP) Project**, click **Change project**.
13. In **GCP project number**, paste the project number of the Travel Concierge ADK AI Agent deployed in previous steps, PROJECT\_NUMBER.
14. Click **Set project**. The Cloud project and Apps Script project are now connected.

## Deploy to Gmail, Calendar, Drive, Docs, Sheets, Slides

### Python

Use a Google Workspace add-on deployment to install the sample project to all Google Workspace applications (but Google Chat) to enable testing.

1. In your preferred local development environment, open the file `deployment.json` from the code source of the project and replace all occurrences of `$BASE_URL` with the value of BASE\_URL, the **Endpoint URL** that you copied in previous steps.
2. Create a Google Workspace add-on deployment named `travel-concierge-addon`:
	```
	gcloud workspace-add-ons deployments create travel-concierge-addon \
	    --deployment-file=deployment.json
	```
3. Install the Google Workspace add-on deployment:
	```
	gcloud workspace-add-ons deployments install travel-concierge-addon
	```

### Apps Script

Install the Apps Script project to all Google Workspace applications (but Google Chat) to enable testing.

1. In your Apps Script project, click **Deploy > Test deployments**, then **Install**.

The add-on is now accessible from Google Workspace application's sidebars.

## Deploy to Chat

### Python

Install the sample project to Chat using the **Endpoint URL** to enable testing.

1. In the [API Console](https://console.developers.google.com/), search for `Google Chat API`, click **Google Chat API**, then **Manage**, and **Configuration**.
	[Go to the Google Chat API Configuration page](https://console.developers.google.com//apis/api/chat.googleapis.com/hangouts-chat)
2. Set up the Chat app:
	1. In the **App name** field, enter `Travel ADK AI Agent`.
		2. In the **Avatar URL** field, enter `https://goo.gle/3SfMkjb`.
		3. In the **Description** field, enter `Travel ADK AI Agent`.
		4. Under **Connection settings**, select **HTTP endpoint URL**.
		5. Under **Triggers**, select **Use a common HTTP endpoint URL for all triggers**.
		6. In the **HTTP endpoint URL** field, paste the **Endpoint URL** that you previously copied, BASE\_URL.
		7. Register a [Quick command](../chat/commands.md) that the fully implemented Chat app uses:
		1. Under **Commands**, click **Add a command**.
				2. In **Command ID**, type `1`.
				3. In **Description**, type `Reset session`.
				4. Under **Command type**, select **Quick command**.
				5. In **Name**, type `Reset session`.
				6. Click **Done**. The quick command is registered and listed.
		8. Under **Visibility**, select **Make this Chat app available to specific people and groups in Your Workspace Domain** and enter your email address.
		9. Under **Logs**, select **Log errors to Logging**.
		10. Click **Save**.

### Apps Script

Install the Apps Script project to Chat using the **Head Deployment ID** to enable testing.

1. In your Apps Script project, click **Deploy > Test deployments**, then ![The icon for Head Deployment ID copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/copy/default/24px.svg) **Copy** under **Head Deployment ID**.
2. In the [API Console](https://console.developers.google.com/), search for `Google Chat API`, click **Google Chat API**, then **Manage**, and **Configuration**.
	[Go to the Google Chat API Configuration page](https://console.developers.google.com//apis/api/chat.googleapis.com/hangouts-chat)
3. Set up the Chat app:
	1. In the **App name** field, enter `Travel ADK AI Agent`.
		2. In the **Avatar URL** field, enter `https://goo.gle/3SfMkjb`.
		3. In the **Description** field, enter `Travel ADK AI Agent`.
		4. Under **Connection settings**, select **Apps Script**.
		5. In the **Deployment ID** field, paste the **Head deployment ID** that you previously copied.
		6. Register a [Quick command](../chat/commands.md) that the fully implemented Chat app uses:
		1. Under **Commands**, click **Add a command**.
				2. In **Command ID**, type `1`.
				3. In **Description**, type `Reset session`.
				4. Under **Command type**, select **Quick command**.
				5. In **Name**, type `Reset session`.
				6. Click **Done**. The quick command is registered and listed.
		7. Under **Visibility**, select **Make this Chat app available to specific people and groups in Your Workspace Domain** and enter your email address.
		8. Under **Logs**, select **Log errors to Logging**.
		9. Click **Save**.

The app is now accessible from Google Chat.

1. Open Google Chat.
	[Go to Google Chat](https://chat.google.com/)
2. Create the Chat DM space:
	1. Click **New Chat**.
		2. Type and select the app `Travel ADK AI Agent` in the search.
		3. In the `Install app` dialog, click **Install app**.
		4. The `Install app` dialog closes and the newly created Chat DM space is selected.

The Chat app is ready to respond to messages.

## Test the agent

1. Open Gmail.
	[Go to Gmail](https://gmail.google.com/)
2. Send the following email to yourself:
	- **Subject:** `You need to travel to Paris`
		- **Body:** `Please be there between 11/25/2025 and 11/30/2025!`
3. Open the **Travel ADK AI Agent** add-on from the sidebar.
4. Click **Grant permissions** to complete the set up of the add-on.
5. Click **Send** after configuring the following request to the agent:
	- **Message:** `Please help me plan this travel!`
		- **Context:** select **Current email**
	The sidebar is updated with the agent's response.
	![Plan travel from Gmail](https://developers.google.com/static/workspace/add-ons/samples/images/travel-concierge-test1.png)
6. Click **Open Chat** to be redirected to the Chat DM space.
7. Click **\+ > Reset session**.
	You receive a new message that confirms it's done: `OK, let's start from the beginning, what can I help you with?`
8. Send the message `Give me ideas`.
	You receive new messages with the agent's response.
	![Brainstorm from Chat](https://developers.google.com/static/workspace/add-ons/samples/images/travel-concierge-test2.png)
9. Send the message `I want to go there!` after uploading a picture of any location such as [the Eiffel Tower](https://wikipedia.org/wiki/Eiffel_Tower).
	You receive new messages with the agent's response.
	![Get location details from Chat attachment](https://developers.google.com/static/workspace/add-ons/samples/images/travel-concierge-test3.png)

## Limitations

### HTTP

In Google Workspace applications other than Chat, the AI agent has the following limitations:

- **It's synchronous:** Sidebars can only be updated in response to user interactions, so the AI agent responses are displayed only after full completion (no streaming).
- **It can time out:** The sidebar updates time out when they take more than a few minutes to complete.

These limitations don't exist in Chat.

### Apps Script

In all Google Workspace applications, the AI agent calls Vertex AI REST APIs using [UrlFetchApp](../../../apps-script/reference/url-fetch/url-fetch-app.md), which causes the following limitations:

- **It's synchronous:** The AI agent responses are returned only after full completion (no streaming).
- **It can time out:** The AI agent requests time out when they take roughly more than a minute to complete.

## Customization

This solution supports ADK AI agents hosted in Vertex AI Agent Engine, a subset of Google Workspace application UIs, and response renderings specific to responses of the Travel Concierge sample. The solution uses an extensible framework, so you can customize it by modifying the following files:

### Python

- **main.py:** Defines the main UIs and user interactions logic (Google Workspace event handlers). A typical extension would be to enable Drive documents as context feature for the Drive application, similar to what's done with Gmail messages for the Gmail application.
- **vertex\_ai.py:** Manages the AI agent sessions, responses, errors, and defines Vertex AI-specific interfaces to implement to support agent interactions and response renderings. Typical extensions would be to add support for multi-sessions for separate user conversations, and other AI agent management platforms.
- **agent\_handler.py:** Implements Vertex AI-specific interfaces defined in **vertex\_ai.py** in the specific cases of Chat and non-Chat applications. A typical extension would be to add buttons for users to send feedback about AI agent responses.
- **google\_workspace.py:** Implements non AI agent management-platform interactions using API calls. Only Google Workspace APIs are used in this sample to gather context details and take actions. A typical extension would be to add functions to retrieve business data from Google Calendar or a Customer Relationship Management (CRM).
- **travel\_agent\_ui\_render.gs:** Implements Travel Concierge-specific response renderings for the sub-agents and Workspace applications. Typical extensions would be to add support for new response renderings to graphically display flight options, and other AI agents.

### Apps Script

- **Code.gs:** Defines the main UIs and user interactions logic (Google Workspace event handlers). A typical extension would be to enable Drive documents as context feature for the Drive application, similar to what's done with Gmail messages for the Gmail application.
- **VertexAi.gs:** Manages the AI agent sessions, responses, errors, and defines Vertex AI-specific interfaces to implement to support agent interactions and response renderings. Typical extensions would be to add support for multi-sessions for separate user conversations, and other AI agent management platforms.
- **AgentHandler.gs:** Implements Vertex AI-specific interfaces defined in **VertexAi.gs** in the specific cases of Chat and non-Chat applications. A typical extension would be to add buttons for users to send feedback about AI agent responses.
- **GoogleWorkspace.gs:** Implements non AI agent management-platform interactions using API calls. Only Google Workspace APIs are used in this sample to gather context details and take actions. A typical extension would be to add functions to retrieve business data from Google Calendar or a Customer Relationship Management (CRM).
- **TravelAgentUiRender.gs:** Implements Travel Concierge-specific response renderings for the sub-agents and Workspace applications. Typical extensions would be to add support for new response renderings to graphically display flight options, and other AI agents.

## Clean up

To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, we recommend that you delete the Cloud project.

1. In the Google API Console, go to the **Manage resources** page. Click **Menu** \> **IAM & Admin** \> **Manage Resources**.
	[Go to Resource Manager](https://console.developers.google.com/cloud-resource-manager)
2. In the project list, select the project you want to delete and then click **Delete** .
3. In the dialog, type the project ID and then click **Shut down** to delete the project.

## Related topics

- [Fact-check statements with an ADK AI agent and Gemini model](../../../apps-script/samples/custom-functions/fact-check.md)
- [Integrate fundamental AI concepts in Chat apps](https://codelabs.developers.google.com/chat-apps-ai-concepts)
- [Answer questions based on Chat conversations with a Gemini AI Chat app](./tutorial-ai-knowledge-assistant.md)
- [Respond to incidents with Google Chat, Vertex AI, Apps Script, and user authentication](./tutorial-incident-response-user-auth.md)
- [Manage projects with Google Chat, Vertex AI, and Firestore](./tutorial-project-management.md)
- [Build a Chat app as a Google Workspace add-on with Apps Script](https://youtube.com/watch?v=pDthZ2xssDc)
