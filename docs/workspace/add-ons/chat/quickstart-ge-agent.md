---
source: https://developers.google.com/workspace/add-ons/chat/quickstart-ge-agent
root: workspace
fetched_at: 2026-04-23T15:22:39.084Z
---

# Build a Google Chat app with a Gemini Enterprise AI agent

This page explains how to build a Google Workspace add-on that works in Google Chat and interfaces with a [Gemini Enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/get-started) AI agent.

AI agents autonomously perceive their environment, reason, and execute complex, multi-step actions to achieve a defined goal. In this tutorial, you use [the Idea Generation agent](https://docs.cloud.google.com/gemini/enterprise/docs/idea-generation) provided by default by Google that helps with innovation and problem-solving for enterprise users.

![Idea Generation agent as Chat app.](https://developers.google.com/static/workspace/add-ons/images/quickstart-ge-agent.png)

The following diagram shows the architecture and messaging pattern:

![Architecture of a Chat app implemented with a Gemini Enterprise AI agent.](https://developers.google.com/static/workspace/add-ons/images/design-patterns/ge-agent.svg)

In the preceding diagram, a user interacting with a Chat app implemented with a Gemini Enterprise AI agent has the following flow of information:

1. A user sends a message to a Chat app, either in a direct message or in a Chat space.
2. The Chat app logic that's implemented either in Apps Script or as a web server with HTTP endpoints receives and processes the message.
3. The Gemini Enterprise AI agent receives and processes the interaction.
4. Optionally, the Chat app or AI agent can integrate with Google Workspace services, such as Calendar or Sheets, or other Google services, such as Google Maps or YouTube.
5. The Chat app asynchronously sends responses using the Google Chat API to communicate the AI agent progress.
6. The responses are delivered to the user.

## Objectives

- Set up your environment.
- Deploy the Chat app.
- Configure the Chat app.
- Test the Chat app.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- A Google Cloud project with billing enabled. To check that an existing project has billing enabled, see [Verify the billing status of your projects](https://cloud.google.com/billing/docs/how-to/verify-billing-enabled). To create a project and set up billing, see [Create a Google Cloud project](../../guides/create-project.md).
- A [Gemini Enterprise app](https://docs.cloud.google.com/gemini/enterprise/docs/create-app) set up with Google Identity as identity provider.

## Set up your environment

### Turn on the Chat API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.

In the Google Cloud console, enable the Google Chat API.

[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=chat.googleapis.com)

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
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](../../guides/configure-oauth-consent.md) guide.

### Create a service account in Google Cloud console

Create a new service account with the role `Discovery Engine User` by following these steps:

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

## Create and configure the Chat app project

1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Settings**.
	[Go to IAM & Admin Settings](https://console.developers.google.com/iam-admin/settings)
2. Note the **Project number** and **Project ID** fields.
3. Go to Gemini Enterprise:
	[Open Gemini Enterprise](https://console.cloud.google.com/gemini-enterprise/apps)
4. Note the **Location** and **ID** of the application.
5. Click the following button to open the **GE AI Agent Quickstart** Apps Script project.
	[Open the project](https://script.google.com/d/1YeDvZtq5c5TU2DXFVCNGjA6RCVkUn5x0ip5QVksmSwgsy7gwpI7izPLt/edit?usp=sharing)
6. Click **Overview** \> ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg) **Make a copy**.
7. In your Apps Script project, click ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg) **Project Settings** \> **Edit script properties** \> **Add script property** to add the following script properties:
	1. `REASONING_ENGINE_RESOURCE_NAME` with the Gemini Enterprise app resource composed with the information noted in previous steps.
		```
		projects/PROJECT_ID/locations/APP_LOCATION/collections/default_collection/engines/APP_ID
		```
		2. `SERVICE_ACCOUNT_KEY` with the JSON key from the service account downloaded in previous steps such as `{ ... }`.
8. Click **Save script properties**
9. In your Apps Script project, click ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg) **Project Settings**.
10. Under **Google Cloud Platform (GCP) Project**, click **Change project**.
11. In **GCP project number**, paste the Google Cloud project number noted in previous steps.
12. Click **Set project**. The Cloud project and Apps Script project are now connected.

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
	1. In the **App name** field, enter `GE Quickstart`.
		2. In the **Avatar URL** field, enter `https://developers.google.com/workspace/add-ons/images/quickstart-app-avatar.png`.
		3. In the **Description** field, enter `GE Quickstart`.
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
5. In the new direct message with the app, type `I need to find ideas!` and press `enter`.
	The Chat app replies with **Default Idea Generation** agent response.

To add trusted testers and learn more about testing interactive features, see [Test interactive features for Google Chat apps](../../chat/test-interactive-features.md).

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

- [Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and Chat apps](https://codelabs.developers.google.com/ge-gws-agents)
- [Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and Chat apps](https://codelabs.developers.google.com/vertexai-gws-agents)
- [Build a Google Chat app with an ADK AI agent](./quickstart-adk-agent.md)
- [Build a Google Chat app with an ADK AI agent exposed by A2A](./quickstart-a2a-agent.md)
- [Build a Google Chat app with an ADK AI agent exposed by A2UI](./quickstart-a2ui-agent.md)
- [Fact-check statements with an ADK AI agent and Gemini model](../../../apps-script/samples/custom-functions/fact-check.md)
- [Plan travels with an AI agent accessible across Google Workspace](../samples/travel-concierge.md)
- [Integrate fundamental AI concepts in Chat apps](https://codelabs.developers.google.com/chat-apps-ai-concepts)
- [Answer questions based on Chat conversations with a Gemini AI Chat app](../samples/tutorial-ai-knowledge-assistant.md)
- [Respond to incidents with Google Chat, Vertex AI, Apps Script, and user authentication](../samples/tutorial-incident-response-user-auth.md)
- [Manage projects with Google Chat, Vertex AI, and Firestore](../samples/tutorial-project-management.md)
