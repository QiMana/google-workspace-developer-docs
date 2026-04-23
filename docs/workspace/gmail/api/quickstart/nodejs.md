---
source: https://developers.google.com/workspace/gmail/api/quickstart/nodejs
root: workspace
fetched_at: 2026-04-23T15:28:55.300Z
---

# Node.js quickstart

Create a Node.js command-line application that makes requests to the Gmail API.

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
- A Google account with Gmail enabled.

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Gmail API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=gmail.googleapis.com)

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

## Install the client library

- Install the libraries using npm:
	```
	npm install googleapis@105 @google-cloud/local-auth@2.1.0 --save
	```

## Set up the sample

1. In your working directory, create a file named `index.js`.
2. In the file, paste the following code:
	```
	import path from 'node:path';
	import process from 'node:process';
	import {authenticate} from '@google-cloud/local-auth';
	import {google} from 'googleapis';
	// The scope for reading Gmail labels.
	const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
	// The path to the credentials file.
	const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');
	/**
	 * Lists the labels in the user's account.
	 */
	async function listLabels() {
	  // Authenticate with Google and get an authorized client.
	  const auth = await authenticate({
	    scopes: SCOPES,
	    keyfilePath: CREDENTIALS_PATH,
	  });
	  // Create a new Gmail API client.
	  const gmail = google.gmail({version: 'v1', auth});
	  // Get the list of labels.
	  const result = await gmail.users.labels.list({
	    userId: 'me',
	  });
	  const labels = result.data.labels;
	  if (!labels || labels.length === 0) {
	    console.log('No labels found.');
	    return;
	  }
	  console.log('Labels:');
	  // Print the name of each label.
	  labels.forEach((label) => {
	    console.log(\`- ${label.name}\`);
	  });
	}
	await listLabels();
	```

## Run the sample

1. In your working directory, run the sample:
	```
	node .
	```
2. The first time you run the sample, it prompts you to authorize access:
	1. If you're not already signed in to your Google Account, sign in when prompted. If you're signed in to multiple accounts, select one account to use for authorization.
		2. Click **Accept**.
	Your Nodejs application runs and calls the Gmail API.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

## Next steps

- [Try the Google Workspace APIs in the APIs explorer](https://developers.google.com/workspace/explore)
- [`google-api-nodejs-client` section of GitHub](https://github.com/google/google-api-nodejs-client/#google-apis-nodejs-client)
