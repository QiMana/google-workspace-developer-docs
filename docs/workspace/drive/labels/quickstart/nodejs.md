---
source: https://developers.google.com/workspace/drive/labels/quickstart/nodejs
root: workspace
fetched_at: 2026-04-23T15:28:07.801Z
---

# Node.js quickstart

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](https://developers.google.com/workspace/guides/auth-overview) before [choosing the access credentials](https://developers.google.com/workspace/guides/create-credentials#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

Create a Node.js command-line application that makes requests to the Drive Labels API.

## Objectives

- Set up your environment.
- Install the client library.
- Set up the sample.
- Run the sample.

## Prerequisites

- [Node.js & npm](https://docs.npmjs.com/getting-started/installing-node#1-install-nodejs--npm) installed.
- [A Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- A Google Account.

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Drive Labels API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=drivelabels.googleapis.com)

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
	npm install googleapis@113 @google-cloud/local-auth@2.1.1 --save
	```

## Set up the sample

1. In your working directory, create a file named `index.js`.
2. In the file, paste the following code:
	```
	const fs = require('fs');
	const readline = require('readline');
	const {google} = require('googleapis');
	// If modifying these scopes, delete token.json.
	const SCOPES = ['https://www.googleapis.com/auth/drive.labels.readonly'];
	// The file token.json stores the user's access and refresh tokens, and is
	// created automatically when the authorization flow completes for the first
	// time.
	const TOKEN_PATH = 'token.json';
	// Load client secrets from a local file.
	fs.readFile('credentials.json', (err, content) => {
	  if (err) return console.log('Error loading client secret file:', err);
	  // Authorize a client with credentials, then call the Google Drive Labels
	  // API.
	  authorize(JSON.parse(content), listDriveLabels);
	});
	/**
	* Create an OAuth2 client with the given credentials, and then execute the
	* given callback function.
	* @param {Object} credentials The authorization client credentials.
	* @param {function} callback The callback to call with the authorized client.
	*/
	function authorize(credentials, callback) {
	  const {client_secret, client_id, redirect_uris} = credentials.installed;
	  const oAuth2Client = new google.auth.OAuth2(
	      client_id, client_secret, redirect_uris[0]);
	  // Check if we have previously stored a token.
	  fs.readFile(TOKEN_PATH, (err, token) => {
	    if (err) return getNewToken(oAuth2Client, callback);
	    oAuth2Client.setCredentials(JSON.parse(token));
	    callback(oAuth2Client);
	  });
	}
	/**
	* Get and store new token after prompting for user authorization, and then
	* execute the given callback with the authorized OAuth2 client.
	* @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
	* @param {getEventsCallback} callback The callback for the authorized client.
	*/
	function getNewToken(oAuth2Client, callback) {
	  const authUrl = oAuth2Client.generateAuthUrl({
	    access_type: 'offline',
	    scope: SCOPES,
	  });
	  console.log('Authorize this app by visiting this url:', authUrl);
	  const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	  });
	  rl.question('Enter the code from that page here: ', (code) => {
	    rl.close();
	    oAuth2Client.getToken(code, (err, token) => {
	      if (err) return console.error('Error retrieving access token', err);
	      oAuth2Client.setCredentials(token);
	      // Store the token to disk for later program executions
	      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
	        if (err) return console.error(err);
	        console.log('Token stored to', TOKEN_PATH);
	      });
	      callback(oAuth2Client);
	    });
	  });
	}
	function listDriveLabels(auth) {
	  const service = google.drivelabels({version: 'v2', auth});
	  const params = {
	    'view': 'LABEL_VIEW_FULL'
	  };
	  service.labels.list(params, (err, res) => {
	    if (err) return console.error('The API returned an error: ' + err);
	    const labels = res.data.labels;
	    if (labels) {
	      labels.forEach((label) => {
	        const name = label.name;
	        const title = label.properties.title;
	        console.log(\`${name}\t${title}\`);
	      });
	    } else {
	      console.log('No Labels');
	    }
	  });
	}
	```

## Run the sample

1. In your working directory, run the sample:
	```
	node .
	```
2. The first time you run the sample, it prompts you to authorize access:
	1. If you're not already signed in to your Google Account, you're prompted to sign in. If you're signed in to multiple accounts, select one account to use for authorization.
		2. Click **Accept**.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

You have successfully created your first Nodejs application that makes requests to the Drive Labels API.

## Next steps

- [Troubleshoot authentication and authorization issues](https://developers.google.com/workspace/drive/labels/troubleshoot-authentication-authorization)
- [Google APIs Node.js Client section on GitHub](https://github.com/google/google-api-nodejs-client/#google-apis-nodejs-client).
