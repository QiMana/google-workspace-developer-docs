---
source: https://developers.google.com/apps-script/samples/custom-functions/fact-check
root: apps-script
fetched_at: 2026-04-23T15:22:26.773Z
---

# Fact-check statements with an ADK AI agent and Gemini model

## Page Summary

- The webpage provides an advanced guide on creating a fact-check custom function for Google Sheets using Google Apps Script, powered by a Vertex AI agent and Gemini model.
- This solution demonstrates integrating AI agents for complex reasoning and AI models for advanced text capabilities directly into Google Sheets.
- The custom function, named `FACT_CHECK`, analyzes statements using a Vertex AI agent for reasoning and a Gemini model for output formatting.
- Implementing this solution requires setting up a Google Cloud project, enabling billing and necessary APIs, creating a service account, and deploying the Vertex AI agent.
- The custom function can be used by entering `=FACT_CHECK("Your statement here")` in a Google Sheet cell, with an optional second argument for specific output formatting.

**Coding level**: Advanced  
**Duration**: 30 minutes  
**Project type**: [Custom function](../../guides/sheets/functions.md)

## Overview

A fact-check custom function for Google Sheets to be used as a bound Google Apps Script project powered by a [Vertex AI](https://cloud.google.com/vertex-ai) agent and Gemini model.

This sample demonstrates how you can use two powerful types of AI resources directly into your Sheets spreadsheets:

1. **AI agents** for sophisticated, multi-tool, multi-step reasoning capabilities using ADK agents deployed in the Vertex AI Agent Engine.
2. **AI models** for advanced understanding, generative, and summarization capabilities using Gemini models from Vertex AI.

![Usage sample of the fact-check Google Sheets custom function](https://developers.google.com/static/apps-script/samples/images/fact-check.png)

## Objectives

- Understand what the solution does.
- Understand how the solution is implemented.
- Deploy the Vertex AI agent.
- Set up the script.
- Run the script.

## About this solution

The Sheets custom function is named `FACT_CHECK` and it operates as an end-to-end solution. It analyzes a statement, grounds its response using the latest web information, and returns the result in the format you need:

- Usage:
	- `=FACT_CHECK("Your statement here")` for a concise and summarized output.
		- `=FACT_CHECK("Your statement here", "Your output formatting instructions here")` for a specific output format.
- Reasoning: [**LLM Auditor ADK AI Agent (Python sample)**](https://github.com/google/adk-samples/tree/main/python/agents/llm-auditor).
- Output formatting: [**Gemini model**](https://cloud.google.com/vertex-ai/generative-ai/docs/models).

This solution requests Vertex AI REST APIs using [UrlFetchApp](../../reference/url-fetch/url-fetch-app.md).

## Architecture

The following diagram shows the architecture of the Google Workspace and Google Cloud resources used by the custom function.

![Architecture diagram for the fact check Google Sheets custom function](https://developers.google.com/static/apps-script/samples/images/fact-check-flow.png)

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.
- [Prerequisites of the LLM Auditor ADK agent](https://github.com/google/adk-samples/tree/main/python/agents/llm-auditor)
	- Python 3.11+: For installation, follow instructions on the official [Python website](https://docs.python.org/3/using/index.html).
		- Python Poetry: For installation, follow instructions on the official [Poetry website](https://python-poetry.org/docs/).
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

### Enable the Vertex AI API

### Google Cloud console

1. In the Google Cloud console, enable the Vertex AI, and Cloud Resource Manager APIs.
	[Enable the APIs](https://console.cloud.google.com/flows/enableapi?apiid=aiplatform.googleapis.com,cloudresourcemanager.googleapis.com)
2. Confirm that you're enabling the Vertex AI API in the correct Cloud project, then click **Next**.
3. Confirm that you're enabling the correct API, then click **Enable**.

### gcloud CLI

1. If necessary, set the current Cloud project to the one you created with the `gcloud config set project` command:
	```
	gcloud config set project PROJECT_ID
	```
	Replace PROJECT\_ID with the **Project ID** of the Cloud project you created.
2. Enable the Vertex AI API with the `gcloud services enable` command:
	```
	gcloud services enable aiplatform.googleapis.com
	```

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

For more information about service accounts, see [service accounts](https://cloud.google.com/iam/docs/service-accounts) in the Google Cloud IAM documentation.

## Deploy the LLM Auditor ADK AI Agent

1. If not done already, authenticate with your Google Cloud account and configure Google Cloud CLI to use your Google Cloud project.
	```
	gcloud auth application-default login
	gcloud config set project PROJECT_ID
	gcloud auth application-default set-quota-project PROJECT_ID
	```
	Replace PROJECT\_ID with the ID of the Cloud project you created.
2. Download this GitHub repository:
	[Download](https://github.com/google/adk-samples/archive/refs/heads/main.zip)
3. In your preferred local development environment, extract the downloaded archive file and open the `adk-samples/python/agents/llm-auditor` directory.
	```
	unzip adk-samples-main.zip
	cd adk-samples-main/python/agents/llm-auditor
	```
4. Create a new Cloud Storage bucket dedicated to the ADK agent.
	```
	gcloud storage buckets create gs://CLOUD_STORAGE_BUCKET_NAME --project=PROJECT_ID --location=PROJECT_LOCATION
	```
	Replace the following:
	1. CLOUD\_STORAGE\_BUCKET\_NAME with a unique bucket name you want to use.
		2. PROJECT\_ID with the ID of the Cloud project you created.
		3. PROJECT\_LOCATION with the location of the Cloud project you created.
5. Set the following environment variables:
	```
	export GOOGLE_GENAI_USE_VERTEXAI=true
	export GOOGLE_CLOUD_PROJECT=PROJECT_ID
	export GOOGLE_CLOUD_LOCATION=PROJECT_LOCATION
	export GOOGLE_CLOUD_STORAGE_BUCKET=CLOUD_STORAGE_BUCKET_NAME
	```
	Replace the following:
	1. CLOUD\_STORAGE\_BUCKET\_NAME with the name of the bucket you created.
		2. PROJECT\_ID with the ID of the Cloud project you created.
		3. PROJECT\_LOCATION with the location of the Cloud project you created.
6. Install and deploy ADK agent from virtual environment.
	```
	python3 -m venv myenv
	source myenv/bin/activate
	poetry install --with deployment
	python3 deployment/deploy.py --create
	```
7. Retrieve the agent ID, you'll need it later to configure the custom function.
	```
	python3 deployment/deploy.py --list
	```

## Review the sample code

Optionally, before creating the new spreadsheet, take a moment to review and familiarize yourself with the sample code hosted on GitHub.

[View on GitHub](https://github.com/googleworkspace/apps-script-samples/blob/main/ai/custom-func-ai-agent)

## Create and configure in a new spreadsheet

1. To make a complete copy of the sample Sheets spreadsheet including its container-bound Apps Script project, click the following button:
	[Copy Google Sheets speadsheet](https://docs.google.com/spreadsheets/d/1itr8Zhs-fw8gMb8nyWIIh8rYCoiOz40CEFIHaM0fA2Y/copy)
2. In the newly created spreadsheet, go to **Extensions > Apps Script**.
3. In the Apps Script project, go to **Project Settings**, click **Edit script properties**, then click **Add script property** to add the following script properties:
	1. `LOCATION` with the location of the Google Cloud project created in previous steps such as `us-central1`.
		2. `GEMINI_MODEL_ID` with the Gemini model you want to use such as `gemini-2.5-flash-lite`.
		3. `REASONING_ENGINE_ID` with the ID of the LLM Auditor ADK Agent deployed in previous steps such as `1234567890`.
		4. `SERVICE_ACCOUNT_KEY` with the JSON key from the service account downloaded in previous steps such as `{ ... }`.
4. Click **Save script properties**

## Test the custom function

1. Go to the newly created spreadsheet.
2. Change statements in **column A**.
3. Formulas in **column B** execute and then display fact-check results.

## Clean up

To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, we recommend that you delete the Cloud project.

1. In the Google Cloud console, go to the **Manage resources** page. Click **Menu** \> **IAM & Admin** \> **Manage Resources**.
	[Go to Resource Manager](https://console.cloud.google.com/cloud-resource-manager)
2. In the project list, select the project you want to delete and then click **Delete** .
3. In the dialog, type the project ID and then click **Shut down** to delete the project.

## Next steps

- [Plan travels with an AI agent accessible across Google Workspace](../../../workspace/add-ons/samples/travel-concierge.md)
- [Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and add ons](https://codelabs.developers.google.com/ge-gws-agents)
- [Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add ons](https://codelabs.developers.google.com/vertexai-gws-agents)
- [Custom functions in Sheets](../../guides/sheets/functions.md)
- [Extending Sheets](../../guides/sheets.md)
