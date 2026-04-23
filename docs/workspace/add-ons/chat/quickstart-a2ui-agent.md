---
source: https://developers.google.com/workspace/add-ons/chat/quickstart-a2ui-agent
root: workspace
fetched_at: 2026-04-23T15:22:39.724Z
---

# Build a Google Chat app with an Agent2UI agent

This page explains how to build a Google Workspace add-on that works in Google Chat and interfaces with an AI agent that uses the [Agent2UI (A2UI)](https://a2ui.org/) protocol. You develop the agent using the [Agent Development Kit (ADK)](https://google.github.io/adk-docs), and host it in [Vertex AI Agent Engine](https://docs.cloud.google.com/agent-builder/agent-engine/overview).

AI agents autonomously perceive their environment, reason, and execute complex, multi-step actions to achieve a defined goal. In this tutorial, you deploy a basic AI agent that returns static profile information retrieved from a tool.

A2UI enables AI agents to generate adaptive, rich, interactive UIs that render natively. You can then focus on the logic of the AI agents, not the UIs.

- ![The A2UI agent responds to the user with a message with text and a card containing the profile name, image, and LinkedIn button.](https://developers.google.com/static/workspace/add-ons/images/quickstart-a2ui-agent-1.png)
	Figure 1. The A2UI agent responds to the user with text and a card containing the name, image, and LinkedIn button.
- ![The A2UI agent is updated to return the profile title as well.](https://developers.google.com/static/workspace/add-ons/images/quickstart-a2ui-agent-2.png)
	**Figure 2.** The A2UI agent is updated to return the profile title as well.
- ![The A2UI agent responds to the user with a message that displays the profile name in the card.](https://developers.google.com/static/workspace/add-ons/images/quickstart-a2ui-agent-3.png)
	**Figure 3.** The A2UI agent responds to the user with a message that displays the profile name in the card.

The following diagram shows the architecture and messaging pattern:

![Architecture of a Chat app implemented with an A2UI AI agent.](https://developers.google.com/static/workspace/add-ons/images/design-patterns/a2ui-agent.png)

In the diagram, a user interacting with a Chat app implemented with an A2UI agent has the following flow of information:

1. A user sends a message to a Chat app, either in a direct message or in a Chat space.
2. The Chat app logic that's implemented either in Apps Script or as a web server with HTTP endpoints receives and processes the message.
3. The A2UI agent hosted with Vertex AI Agent Engine receives and processes the interaction.
4. Optionally, the Chat app or AI agent can integrate with Google Workspace services, such as Calendar or Sheets, or other Google services, such as Google Maps or YouTube.
5. The Chat app generates and sends adaptive responses asynchronously, using the Google Chat API to communicate the AI agent's progress.
6. The responses are delivered to the user.

## Objectives

- Set up your environment.
- Deploy the A2UI agent.
- Deploy the Chat app.
- Configure the Chat app.
- Test the Chat app.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- A Google Cloud project with billing enabled. To check that an existing project has billing enabled, see [Verify the billing status of your projects](https://cloud.google.com/billing/docs/how-to/verify-billing-enabled). To create a project and set up billing, see [Create a Google Cloud project](../../guides/create-project.md).
- Python 3.11+: For installation, follow instructions on the official [Python website](https://docs.python.org/3/using/index.html).
- Python Poetry: For installation, follow instructions on the official [Poetry website](https://python-poetry.org/docs/).
- Google Cloud CLI: For installation, follow instructions on the official [Google Cloud website](https://docs.cloud.google.com/sdk/docs/install-sdk).

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
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](../../guides/configure-oauth-consent.md) guide.

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

## Deploy the A2UI agent

1. If you haven't done so, authenticate with your Google Cloud account and configure the Google Cloud CLI to use your Google Cloud project.
	```
	gcloud auth application-default login
	gcloud config set project PROJECT_ID
	gcloud auth application-default set-quota-project PROJECT_ID
	```
	Replace PROJECT\_ID with the ID of your Cloud project.
2. Download the `googleworkspace/add-ons-samples` GitHub repository using this button:
	[Download repository](https://github.com/googleworkspace/add-ons-samples/archive/refs/heads/main.zip)
3. In your preferred local development environment, extract the downloaded archive file and open the `add-ons-samples/apps-script/chat/a2ui-ai-agent/a2ui` directory.
	```
	unzip add-ons-samples-main.zip
	cd add-ons-samples/apps-script/chat/a2ui-ai-agent/a2ui
	```
4. Create a new Cloud Storage bucket dedicated to the ADK agent.
	```
	gcloud storage buckets create gs://CLOUD_STORAGE_BUCKET_NAME --project=PROJECT_ID --location=PROJECT_LOCATION
	```
	Replace the following:
	1. CLOUD\_STORAGE\_BUCKET\_NAME with a unique bucket name you want to use.
		2. PROJECT\_ID with the ID of your Cloud project.
		3. PROJECT\_LOCATION with the location of your Cloud project.
5. Set the following environment variables:
	```
	export GOOGLE_GENAI_USE_VERTEXAI=true
	export GOOGLE_CLOUD_PROJECT=PROJECT_ID
	export GOOGLE_CLOUD_LOCATION=PROJECT_LOCATION
	export GOOGLE_CLOUD_STORAGE_BUCKET=CLOUD_STORAGE_BUCKET_NAME
	```
	Replace the following:
	1. CLOUD\_STORAGE\_BUCKET\_NAME with the name of the bucket you created.
		2. PROJECT\_ID with the ID of your Cloud project.
		3. PROJECT\_LOCATION with the location your Cloud project.
6. Install and deploy ADK agent from virtual environment.
	```
	python3 -m venv myenv
	source myenv/bin/activate
	poetry install --with deployment
	python3 deployment/deploy.py --create
	```
7. Retrieve the agent ID. You need it later, when you configure the Chat app.
	```
	python3 deployment/deploy.py --list
	```

## Create and configure the Chat app project

1. Click the following button to open the **A2UI AI Agent Quickstart** Apps Script project.
	[Open the project](https://script.google.com/d/1COegQ8zGjzK_pw30CqeW2r4BTGKBgxOIT0Yq1e5pCHPdb0L_EJKMick2/edit?usp=sharing)
2. Click **Overview** \> ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg) **Make a copy**.
3. In your Apps Script project, click ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg) **Project Settings** \> **Edit script properties** \> **Add script property** to add the following script properties:
	1. `REASONING_ENGINE_RESOURCE_NAME` with the Vertex AI agent resource name copied in previous steps.
		2. `SERVICE_ACCOUNT_KEY` with the JSON key from the service account downloaded in previous steps such as `{ ... }`.
4. Click **Save script properties**.
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
	1. In the **App name** field, enter `A2UI Quickstart`.
		2. In the **Avatar URL** field, enter `https://developers.google.com/workspace/add-ons/images/quickstart-app-avatar.png`.
		3. In the **Description** field, enter `A2UI Quickstart`.
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
5. In the new direct message with the app, type `Hello!` and press `enter`.
	The Chat app replies a message with greeting text and a card containing the profile name, image, and LinkedIn button.
6. Update the implementation of the A2UI agent to start returning the profile title as well.
	In your local development environment, open the file `a2ui/agent.py` and uncomment the line in the tool that adds the title to the returned data.
	```
	# Copyright 2026 Google LLC
	#
	# Licensed under the Apache License, Version 2.0 (the "License");
	# you may not use this file except in compliance with the License.
	# You may obtain a copy of the License at
	#
	#     http://www.apache.org/licenses/LICENSE-2.0
	#
	# Unless required by applicable law or agreed to in writing, software
	# distributed under the License is distributed on an "AS IS" BASIS,
	# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	# See the License for the specific language governing permissions and
	# limitations under the License.
	"""A2UI agent."""
	from google.adk.agents import LlmAgent
	from google.adk.tools.tool_context import ToolContext
	import json
	# The schema for any A2UI message. This never changes.
	from .a2ui_schema import A2UI_SCHEMA
	def get_user_profile(tool_context: ToolContext) -> str:
	    """Call this tool to get the current user profile."""
	    return json.dumps({
	        "name": "Pierrick Voulet",
	        # "title": "DevRel Engineer @ Google Workspace | Gen AI & AI Agents & Agentic AI | Automation & Digital Transformation",
	        "imageUrl": "https://io.google/2024/speakers/3ea87822-3160-4d54-89dd-57e185085f79_240.webp",
	        "linkedin": "https://www.linkedin.com/in/pierrick-voulet/"
	    })
	AGENT_INSTRUCTION="""
	You are a user profile assistant. Your goal is to help users get their profile information using a rich UI.
	To achieve this, you MUST follow these steps to answer user requests:
	1.  You MUST call the \`get_user_profile\` tool and extract all the user profile information from the result.
	2.  You MUST generate a final a2ui UI JSON based on the user profile information extracted in the previous step."""
	A2UI_AND_AGENT_INSTRUCTION = AGENT_INSTRUCTION + f"""
	To generate a valid a2ui UI JSON, you MUST follow these rules:
	1.  Your response MUST be in two parts, separated by the delimiter: \`---a2ui_JSON---\`.
	2.  The first part is your conversational text response.
	3.  The second part is a single, raw JSON object which is a list of A2UI messages.
	4.  The JSON part MUST validate against the A2UI JSON SCHEMA provided below.
	To represent the user profile, you MUST use the following A2UI message types:
	1.  Buttons MUST be used to represent links (e.g., LinkedIn profile link).
	2.  Image MUST be used to represent the user's profile picture.
	---BEGIN A2UI JSON SCHEMA---
	{A2UI_SCHEMA}
	---END A2UI JSON SCHEMA---
	"""
	root_agent = LlmAgent(
	    name="user_profile",
	    model="gemini-2.5-flash",
	    instruction=A2UI_AND_AGENT_INSTRUCTION,
	    description="An agent that returns the current user profile.",
	    tools=[get_user_profile]
	)
	```
7. Update the ADK previously deployed with the new version of the implementation.
	```
	python3 deployment/deploy.py --update --resource_id=RESOURCE_ID
	```
	Replace RESOURCE\_ID with the Vertex AI agent resource name copied in previous steps.
8. In the direct message with the app, type `Hello again!` and press `enter`.
	The Chat app replies a message with some text and a card containing the profile title.

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

- [Build a Google Chat app with an ADK AI agent exposed by A2UI with user actions](https://github.com/googleworkspace/add-ons-samples/tree/main/apps-script/chat/a2ui-useraction-ai-agent)
- [Build a Google Chat app with a Gemini Enterprise AI agent](./quickstart-ge-agent.md)
- [Build a Google Chat app with an ADK AI agent](./quickstart-adk-agent.md)
- [Build a Google Chat app with an A2A agent](./quickstart-a2a-agent.md)
- [Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and Chat apps](https://codelabs.developers.google.com/ge-gws-agents)
- [Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and Chat apps](https://codelabs.developers.google.com/vertexai-gws-agents)
- [Fact-check statements with an ADK AI agent and Gemini model](../../../apps-script/samples/custom-functions/fact-check.md)
- [Plan travels with an AI agent accessible across Google Workspace](../samples/travel-concierge.md)
- [Integrate fundamental AI concepts in Chat apps](https://codelabs.developers.google.com/chat-apps-ai-concepts)
- [Answer questions based on Chat conversations with a Gemini AI Chat app](../samples/tutorial-ai-knowledge-assistant.md)
- [Respond to incidents with Google Chat, Vertex AI, Apps Script, and user authentication](../samples/tutorial-incident-response-user-auth.md)
- [Manage projects with Google Chat, Vertex AI, and Firestore](../samples/tutorial-project-management.md)
