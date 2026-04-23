---
source: https://developers.google.com/workspace/drive/picker/guides/sample
root: workspace
fetched_at: 2026-04-23T15:28:19.931Z
---

# Code sample for web apps

This guide explains how to use Google Picker API features such as turning on multi-select, hiding the navigation pane, and choosing the user account with the app's current OAuth 2.0 token.

## Prerequisites

For this example, you need to specify several items:

- To locate both the **Client ID** and the **API Key**:
	1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Credentials**.
		[Go to Credentials](https://console.cloud.google.com/apis/credentials)
- To locate the **App ID**:
	1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Settings**.
		[Go to Settings](https://console.cloud.google.com/iam-admin/settings)
		2. Use the **project number** for the app ID.

The same Google Cloud project must contain both the client ID and the app ID as it's used to authorize access to a user's files.

## Create the app

The following code sample shows how to use an image selector or upload page that users can open from a button in a web app.

```
<!DOCTYPE html>
<html>
<head>
  <title>Google Picker API Quickstart</title>
  <meta charset="utf-8" />
</head>
<body>
<p>Google Picker API Quickstart</p>

<!--Add buttons to initiate auth sequence and sign out.-->
<button id="authorize_button" onclick="handleAuthClick()">Authorize</button>
<button id="signout_button" onclick="handleSignoutClick()">Sign Out</button>

<pre id="content" style="white-space: pre-wrap;"></pre>

<script type="text/javascript">
  /* exported gapiLoaded */
  /* exported gisLoaded */
  /* exported handleAuthClick */
  /* exported handleSignoutClick */

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

  // TODO(developer): Replace with your client ID and API key from https://console.cloud.google.com/.
  const CLIENT_ID = '<YOUR_CLIENT_ID>';
  const API_KEY = '<YOUR_API_KEY>';

  // TODO(developer): Replace with your project number from https://console.cloud.google.com/.
  const APP_ID = '<YOUR_APP_ID>';

  let tokenClient;
  let accessToken = null;
  let pickerInited = false;
  let gisInited = false;

  document.getElementById('authorize_button').style.visibility = 'hidden';
  document.getElementById('signout_button').style.visibility = 'hidden';

  /**
   * Callback after api.js is loaded.
   */
  function gapiLoaded() {
    gapi.load('client:picker', initializePicker);
  }

  /**
   * Callback after the API client is loaded. Loads the
   * discovery doc to initialize the API.
   */
  async function initializePicker() {
    await gapi.client.load('https://www.googleapis.com/discovery/v1/apis/drive/v3/rest');
    pickerInited = true;
    maybeEnableButtons();
  }

  /**
   * Callback after Google Identity Services are loaded.
   */
  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });
    gisInited = true;
    maybeEnableButtons();
  }

  /**
   * Enables user interaction after all libraries are loaded.
   */
  function maybeEnableButtons() {
    if (pickerInited && gisInited) {
      document.getElementById('authorize_button').style.visibility = 'visible';
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick() {
    tokenClient.callback = async (response) => {
      if (response.error !== undefined) {
        throw (response);
      }
      accessToken = response.access_token;
      document.getElementById('signout_button').style.visibility = 'visible';
      document.getElementById('authorize_button').innerText = 'Refresh';
      await createPicker();
    };

    if (accessToken === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({prompt: 'consent'});
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({prompt: ''});
    }
  }

  /**
   *  Sign out the user upon button click.
   */
  function handleSignoutClick() {
    if (accessToken) {
      google.accounts.oauth2.revoke(accessToken);
      accessToken = null;
      document.getElementById('content').innerText = '';
      document.getElementById('authorize_button').innerText = 'Authorize';
      document.getElementById('signout_button').style.visibility = 'hidden';
    }
  }

  /**
   *  Create and render a Google Picker object for searching images.
   */
  function createPicker() {
    const view = new google.picker.View(google.picker.ViewId.DOCS);
    view.setMimeTypes('image/png,image/jpeg,image/jpg');
    const picker = new google.picker.PickerBuilder()
        .enableFeature(google.picker.Feature.NAV_HIDDEN)
        .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
        .setDeveloperKey(API_KEY)
        .setAppId(APP_ID)
        .setOAuthToken(accessToken)
        .addView(view)
        .addView(new google.picker.DocsUploadView())
        .setCallback(pickerCallback)
        .build();
    picker.setVisible(true);
  }

  /**
   * Displays the file details of the user's selection.
   * @param {object} data - Contains the user selection from the Google Picker.
   */
  async function pickerCallback(data) {
    if (data.action === google.picker.Action.PICKED) {
      let text = \`Google Picker response: \n${JSON.stringify(data, null, 2)}\n\`;
      const document = data[google.picker.Response.DOCUMENTS][0];
      const fileId = document[google.picker.Document.ID];
      console.log(fileId);
      const res = await gapi.client.drive.files.get({
        'fileId': fileId,
        'fields': '*',
      });
      text += \`Drive API response for first document: \n${JSON.stringify(res.result, null, 2)}\n\`;
      window.document.getElementById('content').innerText = text;
    }
  }
</script>
<script async defer src="https://apis.google.com/js/api.js" onload="gapiLoaded()"></script>
<script async defer src="https://accounts.google.com/gsi/client" onload="gisLoaded()"></script>
</body>
</html>
```

The `setOAuthToken` function allows an app to use the current auth token to determine which Google Account the Google Picker uses to display the files. If a user is signed in with multiple Google Accounts, the Google Picker can display the files of the appropriate authorized account.

After obtaining the file ID from the Google Picker when opening files, an app can then fetch the file metadata and download the file content as described in the [`get`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/get) method of the [`files`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files) resource.
