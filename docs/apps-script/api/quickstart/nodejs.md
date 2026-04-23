---
source: https://developers.google.com/apps-script/api/quickstart/nodejs
root: apps-script
fetched_at: 2026-04-23T15:18:09.071Z
---

# Node.js quickstart

## Page Summary

- This guide explains how to create a Node.js command-line application that interacts with the Google Apps Script API using a simplified authentication method suitable for testing.
- The quickstart requires Node.js & npm, a Google Cloud project, and a Google account with Google Drive enabled.
- Setting up the environment involves enabling the Google Apps Script API in the Google Cloud console and configuring the OAuth consent screen and credentials for a desktop application.
- The steps include installing necessary client libraries using npm, setting up a sample `index.js` file with provided code, and running the sample to create and update a Google Apps Script project.
- Running the sample for the first time will prompt for authorization, which is then stored locally for subsequent runs.

Create a Node.js command-line application that makes requests to the Google Apps Script API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../../workspace/guides/auth-overview.md) before [choosing the access credentials](../../../workspace/guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

This quickstart uses Google Workspace's recommended API client libraries to handle some details of the authentication and authorization flow.

## Objectives

- Set up your environment.
- Install the client library.
- Set up the sample.
- Run the sample.

## Prerequisites

To run this quickstart, you need the following prerequisites:

- [Node.js & npm](https://docs.npmjs.com/getting-started/installing-node#1-install-nodejs--npm) installed.
- [A Google Cloud project](../../../workspace/guides/create-project.md).
- A Google account with Google Drive enabled.

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Apps Script API.
	[Enable the API](https://console.cloud.google.com/apis/enableflow?apiid=script.googleapis.com)

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
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](../../../workspace/guides/configure-oauth-consent.md) guide.

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
	const SCOPES = ['https://www.googleapis.com/auth/script.projects'];
	const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');
	/**
	 * Creates a new script project, upload a file, and log the script's URL.
	 */
	async function callAppsScript() {
	  const auth = await authenticate({
	    scopes: SCOPES,
	    keyfilePath: CREDENTIALS_PATH,
	  });
	  const script = google.script({version: 'v1', auth});
	  const project = await script.projects.create({
	    requestBody: {
	      title: 'My Script',
	    },
	  });
	  if (!project.data.scriptId) {
	    throw new Error('Failed to create project');
	  }
	  await script.projects.updateContent({
	    scriptId: project.data.scriptId,
	    auth,
	    requestBody: {
	      files: [
	        {
	          name: 'hello',
	          type: 'SERVER_JS',
	          source: 'function helloWorld() {\n  console.log("Hello, world!");\n}',
	        },
	        {
	          name: 'appsscript',
	          type: 'JSON',
	          source:
	            '{"timeZone":"America/New_York","exceptionLogging":' + '"CLOUD"}',
	        },
	      ],
	    },
	  });
	  console.log(\`https://script.google.com/d/${project.data.scriptId}/edit\`);
	}
	await callAppsScript();
	```

## Run the sample

1. In your working directory, run the sample:
	```
	node .
	```
2. The first time you run the sample, it prompts you to authorize access:
	1. If you're not already signed in to your Google Account, sign in when prompted. If you're signed in to multiple accounts, select one account to use for authorization.
		2. Click **Accept**.
	Your Nodejs application runs and calls the Google Apps Script API.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

## Next steps

- [Try the Google Workspace APIs in the APIs explorer](../../../workspace/explore.md)
	- [Apps Script API reference documentation](../reference/rest.md)
- [`google-api-nodejs-client` section of GitHub](https://github.com/google/google-api-nodejs-client/#google-apis-nodejs-client)
