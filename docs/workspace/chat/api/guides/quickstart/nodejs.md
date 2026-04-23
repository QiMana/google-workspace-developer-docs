---
source: https://developers.google.com/workspace/chat/api/guides/quickstart/nodejs
root: workspace
fetched_at: 2026-04-23T15:24:59.136Z
---

# Node.js quickstart

## Page Summary

- This quickstart demonstrates creating a Node.js command-line application that interacts with the Google Chat API using client libraries for authentication and authorization.
- Before running, you'll need to enable the Google Chat API, configure the OAuth consent screen, authorize credentials for a desktop application, and set up a Google Chat app.
- You'll need Node.js and npm installed, a Google Cloud Project, and a Google Workspace account with access to Google Chat to use this guide.
- The provided code sample lists spaces based on specified criteria (e.g., filtering by space type).
- After initial authorization, subsequent runs of the sample code will utilize stored authorization information, streamlining the process.

Create a Node.js command-line application that makes requests to the Google Chat API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](https://developers.google.com/workspace/guides/auth-overview) before [choosing the access credentials](https://developers.google.com/workspace/guides/create-credentials#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

This quickstart uses Google Workspace's recommended API client libraries to handle some details of the authentication and authorization flow.

## Objectives

- Set up your environment.
- Install the client library.
- Set up the sample.
- Run the sample.

## Prerequisites

To run this quickstart, you need the following prerequisites:

- [Node.js & npm](https://docs.npmjs.com/getting-started/installing-node#1-install-nodejs--npm) installed.
- [A Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Chat API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=chat.googleapis.com)

### Configure the OAuth consent screen

If you're using a new Google Cloud project to complete this quickstart, configure the OAuth consent screen. If you've already completed this step for your Cloud project, skip to the next section.

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

### Authorize credentials for a desktop application

To authenticate end users and access user data in your app, you need to create one or more OAuth 2.0 Client IDs. A client ID is used to identify a single app to Google's OAuth servers. If your app runs on multiple platforms, you must create a separate client ID for each platform.
1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Desktop app**.
4. In the **Name** field, type a name for the credential. This name is only shown in the Google API Console.
5. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."
6. Save the downloaded JSON file as `credentials.json`, and move the file to your working directory.

### Configure the Google Chat app

To call the Google Chat API, you must configure a Google Chat app. For any write requests, Google Chat attributes the Google Chat app in the UI using the following information.

1. In the Google API Console, go to the Chat API **Configuration** page:
	[Go to Chat API Configuration page](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Under **Application info**, enter the following information:
	1. In the **App name** field, enter `Chat API quickstart app`.
		2. In the **Avatar URL** field, enter `https://developers.google.com/chat/images/quickstart-app-avatar.png`.
		3. In the **Description** field, enter `Quickstart for calling the Chat API`.
3. Under **Interactive features**, click the **Enable interactive features** toggle to the off position to disable interactive features for the Chat app.
4. Click **Save**.

## Install the client library

- Install the libraries using npm:
	```
	npm install @google-apps/chat @google-cloud/local-auth@2.1.0 --save
	```

## Set up the sample

1. In your working directory, create a file named `index.js`.
2. In the file, paste the following code:
	```
	import path from 'node:path';
	import process from 'node:process';
	import {ChatServiceClient} from '@google-apps/chat';
	import {authenticate} from '@google-cloud/local-auth';
	// The scope for reading Chat spaces.
	const SCOPES = ['https://www.googleapis.com/auth/chat.spaces.readonly'];
	// The path to the credentials file.
	const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');
	/**
	 * Lists the spaces that the user is a member of.
	 */
	async function listSpaces() {
	  // Authenticate with Google and get an authorized client.
	  const authClient = await authenticate({
	    scopes: SCOPES,
	    keyfilePath: CREDENTIALS_PATH,
	  });
	  // Create a new Chat API client.
	  const chatClient = new ChatServiceClient({
	    authClient,
	    scopes: SCOPES,
	  });
	  // The request to list spaces.
	  const request = {
	    // Filter spaces by type. In this case, we are only interested in "SPACE" type.
	    filter: 'space_type = "SPACE"',
	  };
	  // Make the API request.
	  const pageResult = chatClient.listSpacesAsync(request);
	  // Process the response.
	  // The \`pageResult\` is an async iterable that will yield each space.
	  for await (const response of pageResult) {
	    console.log(response);
	  }
	}
	await listSpaces();
	```

## Run the sample

1. In your working directory, run the sample:
	```
	node .
	```
2. The first time you run the sample, it prompts you to authorize access:
	1. If you're not already signed in to your Google Account, sign in when prompted. If you're signed in to multiple accounts, select one account to use for authorization.
		2. Click **Accept**.
	Your Nodejs application runs and calls the Google Chat API.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

## Next steps

- [Try the Google Workspace APIs in the APIs explorer](https://developers.google.com/workspace/explore)
- [Google Chat API Client on GitHub](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-chat)
