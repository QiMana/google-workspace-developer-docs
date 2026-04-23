---
source: https://developers.google.com/workspace/add-ons/chat/quickstart-adk-agent
root: workspace
fetched_at: 2026-04-23T15:22:37.616Z
---

# Build a Google Chat app with an ADK AI agent

This page explains how to build a Google Workspace add-on that works in Google Chat and interfaces with an [Agent Development Kit (ADK)](https://google.github.io/adk-docs) AI agent hosted in [Vertex AI Agent Engine](https://docs.cloud.google.com/agent-builder/agent-engine/overview).

AI agents autonomously perceive their environment, reason, and execute complex, multi-step actions to achieve a defined goal. In this tutorial, you deploy the [ADK LLM Auditor multi-agent sample](https://github.com/google/adk-samples/tree/main/python/agents/llm-auditor) that critiques and revises facts using Gemini and Google Search grounding.

![LLM Auditor multi-agent sample as Chat app.](https://developers.google.com/static/workspace/add-ons/images/quickstart-adk-agent.png)

The following diagram shows the architecture and messaging pattern:

![Architecture of a Chat app implemented with an ADK AI agent.](https://developers.google.com/static/workspace/add-ons/images/design-patterns/adk-agent.svg)

In the preceding diagram, a user interacting with a Chat app implemented with an ADK AI agent has the following flow of information:

1. A user sends a message to a Chat app, either in a direct message or in a Chat space.
2. The Chat app logic that's implemented either in Apps Script or as a web server with HTTP endpoints receives and processes the message.
3. The AI agent that's implemented with ADK and hosted with Vertex AI Agent Engine receives and processes the interaction.
4. Optionally, the Chat app or AI agent can integrate with Google Workspace services, such as Calendar or Sheets, or other Google services, such as Google Maps or YouTube.
5. The Chat app asynchronously sends responses using the Google Chat API to communicate the AI agent progress.
6. The responses are delivered to the user.

## Objectives

- Set up your environment.
- Deploy the ADK AI agent.
- Deploy the Chat app.
- Configure the Chat app.
- Test the Chat app.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- A Google Cloud project with billing enabled. To check that an existing project has billing enabled, see [Verify the billing status of your projects](https://cloud.google.com/billing/docs/how-to/verify-billing-enabled). To create a project and set up billing, see [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).

## Set up your environment

### Enable the Google Cloud APIs

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Chat, Vertex AI, and Cloud Resource Manager APIs.
	[Enable the APIs](https://console.cloud.google.com/flows/enableapi?apiid=chat.googleapis.com,aiplatform.googleapis.com,cloudresourcemanager.googleapis.com)

### Configure the OAuth consent screen

All apps using OAuth 2.0 require a consent screen configuration. Configuring your app's OAuth consent screen defines what is displayed to users and app reviewers, and registers your app so you can publish it later.

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
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](https://developers.google.com/workspace/guides/configure-oauth-consent) guide.

### Create a service account in Google Cloud console

Create a new service account with the role `Vertex AI User` by following these steps:

### Google API Console

1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.developers.google.com/iam-admin/serviceaccounts)
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

The service account appears on the service account page.

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

## Deploy the ADK AI agent

1. Open the **LLM Auditor sample** in the Vertex AI Agent Garden:
	[Open the sample](https://console.cloud.google.com/vertex-ai/agents/agent-garden/samples/llm-auditor)
2. Click **Deploy**.
3. If asked, select your Google Cloud project.
4. Click **Deploy in Cloud Shell**.
5. If asked, click **Authorize** and go through the OAuth flow for the Cloud Shell.
6. When the Cloud Shell is fully loaded, press **Enter** to run the pre-loaded command line and start deploying.
7. If asked to enter region, press **Enter** to use default.
8. When complete, go to the Vertex AI Agent Engine:
	[Open Vertex AI Agent Engine](https://console.cloud.google.com/vertex-ai/agents/agent-engines)
9. Click ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg) to copy the resource name of the newly deployed agent from the table.

## Create and configure the Chat app project

1. Click the following button to open the **ADK AI Agent Quickstart** Apps Script project.
	[Open the project](https://script.google.com/d/1hAKUi8G9Mynf84ZtZ2Gx8nLD_k-dmWmq4aQKTwURirMcC5BYWOpppD5F/edit?usp=sharing)
2. Click **Overview** \> ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg) **Make a copy**.
3. In your Apps Script project, click ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg) **Project Settings** \> **Edit script properties** \> **Add script property** to add the following script properties:
	1. `REASONING_ENGINE_RESOURCE_NAME` with the Vertex AI agent resource name copied in previous steps.
		2. `SERVICE_ACCOUNT_KEY` with the JSON key from the service account downloaded in previous steps such as `{ ... }`.
4. Click **Save script properties**
5. In the Google API Console, go to Menu \> **IAM & Admin** \> **Settings**.
	[Go to IAM & Admin Settings](https://console.developers.google.com/iam-admin/settings)
6. In the **Project number** field, copy the value.
7. In your Apps Script project, click ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg) **Project Settings**.
8. Under **Google Cloud Platform (GCP) Project**, click **Change project**.
9. In **GCP project number**, paste the Google Cloud project number copied in previous steps.
10. Click **Set project**. The Cloud project and Apps Script project are now connected.

## Create a test deployment

You need a deployment ID for this Apps Script project, so that you can use it in the next step.

To get the head deployment ID, do the following:

1. In the Chat app Apps Script project, click **Deploy** \> **Test deployments**.
2. Under **Head deployment ID**, click ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg) **Copy**.
3. Click **Done**.

## Configure the Chat app

Using your Apps Script deployment, follow these steps to deploy the Google Chat app for testing:

1. In the [API Console](https://console.developers.google.com/), search for `Google Chat API`, and click **Google Chat API**.
2. Click **Manage**.
3. Click **Configuration** and set up the Chat app:
	1. In the **App name** field, enter `ADK Quickstart`.
		2. In the **Avatar URL** field, enter `https://developers.google.com/workspace/add-ons/images/quickstart-app-avatar.png`.
		3. In the **Description** field, enter `ADK Quickstart`.
		4. Under **Functionality**, select **Join spaces and group conversations**.
		5. Under Connection settings, select **Apps Script project**.
		6. In the **Deployment ID** field, paste the Head deployment ID that you previously copied.
		7. Under Visibility, select **Specific people and groups in your domain**, and enter your email.
4. Click **Save**.

The Chat app is ready to respond to messages.

## Test the Chat app

To test your Chat app, open a direct message space with the Chat app and send a message:

1. Open Google Chat using the Google Workspace account that you provided when you added yourself as a trusted tester.
	[Go to Google Chat](https://chat.google.com/)
2. Click **New chat**.
3. In the **Add 1 or more people** field, type the name of your Chat app.
4. Select your Chat app from the results. A direct message opens.
5. In the new direct message with the app, type `The Eiffel Tower was completed in 1900` and press `enter`.
	The Chat app replies with **Critic** and **Reviser** sub-agent responses.

To add trusted testers and learn more about testing interactive features, see [Test interactive features for Google Chat apps](https://developers.google.com/workspace/chat/test-interactive-features).

## Troubleshoot

When a Google Chat app or [card](https://developers.google.com/workspace/chat/create-messages#create) returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.

Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on. For help viewing, debugging, and fixing errors, see [Troubleshoot and fix Google Chat errors](https://developers.google.com/workspace/chat/troubleshoot).

## Clean up

To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, we recommend that you delete the Cloud project.

1. In the Google API Console, go to the **Manage resources** page. Click **Menu** \> **IAM & Admin** \> **Manage Resources**.
	[Go to Resource Manager](https://console.developers.google.com/cloud-resource-manager)
2. In the project list, select the project you want to delete and then click **Delete** .
3. In the dialog, type the project ID and then click **Shut down** to delete the project.

## Related topics

- [Build a Google Chat app with an ADK AI agent exposed by A2A](https://developers.google.com/workspace/add-ons/chat/quickstart-a2a-agent)
- [Build a Google Chat app with an ADK AI agent exposed by A2UI](https://developers.google.com/workspace/add-ons/chat/quickstart-a2ui-agent)
- [Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and Chat apps](https://codelabs.developers.google.com/ge-gws-agents)
- [Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and Chat apps](https://codelabs.developers.google.com/vertexai-gws-agents)
- [Fact-check statements with an ADK AI agent and Gemini model](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [Plan travels with an AI agent accessible across Google Workspace](https://developers.google.com/workspace/add-ons/samples/travel-concierge)
- [Build a Google Chat app with a Gemini Enterprise AI agent](https://developers.google.com/workspace/add-ons/chat/quickstart-ge-agent)
- [Integrate fundamental AI concepts in Chat apps](https://codelabs.developers.google.com/chat-apps-ai-concepts)
- [Answer questions based on Chat conversations with a Gemini AI Chat app](https://developers.google.com/workspace/add-ons/samples/tutorial-ai-knowledge-assistant)
- [Respond to incidents with Google Chat, Vertex AI, Apps Script, and user authentication](https://developers.google.com/workspace/add-ons/samples/tutorial-incident-response-user-auth)
- [Manage projects with Google Chat, Vertex AI, and Firestore](https://developers.google.com/workspace/add-ons/samples/tutorial-project-management)
