---
source: https://developers.google.com/workspace/cloud-search/docs/guides/project-setup
root: workspace
fetched_at: 2026-04-23T15:26:09.859Z
---

# Configure access to the Google Cloud Search API

You must configure access to the Google Cloud Search API before using it directly or through an SDK. This document covers the steps required for the Cloud Search API REST API.

## 1\. Create an API project

To enable the API, first create a Google Cloud project. This project is the foundation for using Google Cloud services, managing APIs, and setting permissions.

1. Open the [Google Cloud console](https://console.cloud.google.com/apis/dashboard).
2. Click the project drop-down to the right of "Google Cloud console" and select **NEW PROJECT**.
3. Enter a name in the **Project Name** field.
4. (Optional) Click **Edit** to change the Project ID. You cannot change this ID after creation.
5. Click **BROWSE** to choose a location, then click **Select**.
6. Click **Create**. The project is usually ready within minutes.

For more information, see [Creating and Managing Projects](https://support.google.com/cloud#topic=6158848).

## 2\. Enable the API

Enable the Cloud Search API and create a service account to obtain credentials.

1. Select your new project from the drop-down menu in the Google Cloud console banner.
2. Click **ENABLE APIS AND SERVICES**.
3. Search for and select the [Google Cloud Search API](https://console.cloud.google.com/apis/api/cloudsearch.googleapis.com).
4. Click **Enable**.

For more information, see [Manage APIs in the Google Cloud console](https://support.google.com/cloud/answer/6326510).

## 3\. Create service account credentials

1. In the [Google Cloud console](https://console.cloud.google.com/apis/library), click **Credentials** in the left navigation.
2. Select **Service account** from the **Create credentials** drop-down menu.
3. Enter a name in the **Service account name** field.
4. (Optional) Edit the service account ID.
5. Click **Create and continue**.
6. Click **Done** to reach the "Service accounts" list.
7. Click the email of your new service account, then select the **Keys** tab.
8. Click **ADD KEY** > **Create new key**.
9. Select **JSON** and click **Create**. The private key downloads to your computer.

For more information, see [Service accounts](https://support.google.com/cloud/answer/6158849#serviceaccounts).

## 4\. Identify the service account email

1. In the [Google Cloud console](https://console.cloud.google.com/apis/dashboard), select your project.
2. Click **Navigation menu** > **IAM & Admin** > **Service Accounts**.
3. Note the email address for your service account. You need this to add a data source to Cloud Search.

## 5\. Initialize third-party support

Initialize third-party support for Google Cloud Search before you call any other Cloud Search APIs.

To initialize third-party support:

1. Create web application credentials in your Cloud Search platform project. See [Create credentials](https://developers.google.com/workspace/guides/create-credentials). You need the client ID and client secret.
2. Obtain an access token using the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/):
	1. Click **OAuth 2.0 Configuration** (settings icon) and check **Use your own OAuth credentials**.
		2. Enter your client ID and client secret.
		3. In the scopes field, enter `https://www.googleapis.com/auth/cloud_search.settings` and click **Authorize APIs**.
		4. Click **Exchange authorization code for tokens**.
3. Run this curl command, replacing `[YOUR_ACCESS_TOKEN]` with your token:
	```
	curl --request POST \
	'https://cloudsearch.googleapis.com/v1:initializeCustomer' \
	  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
	  --header 'Accept: application/json' \
	  --header 'Content-Type: application/json' \
	  --data '{}' \
	  --compressed
	```
	If successful, the response body includes an [`operation`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/operations#Operation). If it fails, contact Cloud Search support.
4. Use [`operations.get`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/operations/get) to verify initialization:
	```
	curl 'https://cloudsearch.googleapis.com/v1/operations/<var>operation_name</var>?key=[YOUR_API_KEY]' \
	--header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
	--header 'Accept: application/json' \
	--compressed
	```
	Initialization is complete when `done` is `true`.

## Next Steps

1. To use Cloud Search with a non-Google repository like Microsoft® SharePoint®, you must create a data source. See [Add a data source to search](https://support.google.com/a/answer/7056471).
2. After setting up your data source, [create and register a schema](https://developers.google.com/workspace/cloud-search/docs/guides/schema-guide). to identify how Cloud Search represents your data. how Cloud Search should represent the data.
