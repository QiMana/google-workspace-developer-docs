---
source: https://developers.google.com/workspace/drive/activity/v2/quickstart/js
root: workspace
fetched_at: 2026-04-23T15:27:29.370Z
---

# JavaScript quickstart

Create a JavaScript web application that makes requests to the Google Drive Activity API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../../../guides/auth-overview.md) before [choosing the access credentials](../../../../guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

This quickstart uses Google Workspace's recommended API client libraries to handle some details of the authentication and authorization flow.

## Objectives

- Set up your environment.
- Set up the sample.
- Run the sample.

## Prerequisites

- [Node.js & npm](https://docs.npmjs.com/getting-started/installing-node#1-install-nodejs--npm) installed.
- [A Google Cloud project](../../../../guides/create-project.md).
- A Google Account

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Drive Activity API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=driveactivity.googleapis.com)

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
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](../../../../guides/configure-oauth-consent.md) guide.

### Authorize credentials for a web application

To authenticate end users and access user data in your app, you need to create one or more OAuth 2.0 Client IDs. A client ID is used to identify a single app to Google's OAuth servers. If your app runs on multiple platforms, you must create a separate client ID for each platform.
1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Web application**.
4. In the **Name** field, type a name for the credential. This name is only shown in the Google API Console.
5. Add authorized URIs related to your app:
	- **Client-side apps (JavaScript)** –Under **Authorized JavaScript origins**, click **Add URI**. Then, enter a URI to use for browser requests. This identifies the domains from which your application can send API requests to the OAuth 2.0 server.
		- **Server-side apps (Java, Python, and more)** –Under **Authorized redirect URIs**, click **Add URI**. Then, enter an endpoint URI to which the OAuth 2.0 server can send responses.
6. Click **Create**.
	The newly created credential appears under **OAuth 2.0 Client IDs**.
	Note the Client ID. Client secrets aren't used for Web applications.

Make a note of these credentials because you need them later in this quickstart.

### Create an API key

1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Credentials**.
	[Go to Credentials](https://console.cloud.google.com/apis/credentials)
2. Click **Create credentials** \> **API key**.
3. Your new API key is displayed.
	- Click Copy to copy your API key for use in your app's code. The API key can also be found in the "API Keys" section of your project's credentials.
		- To prevent unauthorized use, we recommend restricting where and for which APIs the API key can be used. For more details, see [Add API restrictions](https://cloud.google.com/docs/authentication/api-keys#adding-api-restrictions).

## Set up the sample

1. In your working directory, create a file named `index.html`.
2. In the `index.html` file, paste the following sample code:
	```
	<!DOCTYPE html>
	<html>
	  <head>
	    <title>Drive Activity API Quickstart</title>
	    <meta charset="utf-8" />
	  </head>
	  <body>
	    <p>Drive Activity API Quickstart</p>
	    <!--Add buttons to initiate auth sequence and sign out-->
	    <button id="authorize_button" onclick="handleAuthClick()">Authorize</button>
	    <button id="signout_button" onclick="handleSignoutClick()">Sign Out</button>
	    <pre id="content" style="white-space: pre-wrap;"></pre>
	    <script type="text/javascript">
	      /* exported gapiLoaded */
	      /* exported gisLoaded */
	      /* exported handleAuthClick */
	      /* exported handleSignoutClick */
	      // TODO(developer): Set to client ID and API key from the Developer Console
	      const CLIENT_ID = '<YOUR_CLIENT_ID>';
	      const API_KEY = '<YOUR_API_KEY>';
	      // Discovery doc URL for APIs used by the quickstart
	      const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/driveactivity/v2/rest';
	      // Authorization scopes required by the API; multiple scopes can be
	      // included, separated by spaces.
	      const SCOPES = 'https://www.googleapis.com/auth/drive.activity.readonly';
	      let tokenClient;
	      let gapiInited = false;
	      let gisInited = false;
	      document.getElementById('authorize_button').style.visibility = 'hidden';
	      document.getElementById('signout_button').style.visibility = 'hidden';
	      /**
	       * Callback after api.js is loaded.
	       */
	      function gapiLoaded() {
	        gapi.load('client', initializeGapiClient);
	      }
	      /**
	       * Callback after the API client is loaded. Loads the
	       * discovery doc to initialize the API.
	       */
	      async function initializeGapiClient() {
	        await gapi.client.init({
	          apiKey: API_KEY,
	          discoveryDocs: [DISCOVERY_DOC],
	        });
	        gapiInited = true;
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
	        if (gapiInited && gisInited) {
	          document.getElementById('authorize_button').style.visibility = 'visible';
	        }
	      }
	      /**
	       *  Sign in the user upon button click.
	       */
	      function handleAuthClick() {
	        tokenClient.callback = async (resp) => {
	          if (resp.error !== undefined) {
	            throw (resp);
	          }
	          document.getElementById('signout_button').style.visibility = 'visible';
	          document.getElementById('authorize_button').innerText = 'Refresh';
	          await listActivities();
	        };
	        if (gapi.client.getToken() === null) {
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
	        const token = gapi.client.getToken();
	        if (token !== null) {
	          google.accounts.oauth2.revoke(token.access_token);
	          gapi.client.setToken('');
	          document.getElementById('content').innerText = '';
	          document.getElementById('authorize_button').innerText = 'Authorize';
	          document.getElementById('signout_button').style.visibility = 'hidden';
	        }
	      }
	      /**
	       * Print recent activity.
	       */
	      async function listActivities() {
	        let response;
	        try {
	          response = await gapi.client.driveactivity.activity.query({
	            'pageSize': 10,
	          });
	        } catch (err) {
	          document.getElementById('content').innerText = err.message;
	          return;
	        }
	        const activities = response.result.activities;
	        if (!activities || activities.length == 0) {
	          document.getElementById('content').innerText = 'No activities found.';
	          return;
	        }
	        // Flatten to string to display
	        const output = activities.reduce(
	            (str, activity) => {
	              const time = getTimeInfo(activity);
	              const action = getActionInfo(activity['primaryActionDetail']);
	              const actors = activity.actors.map(getActorInfo);
	              const targets = activity.targets.map(getTargetInfo);
	              return \`${str}${time}: ${truncated(actors)}, ${action}, ${truncated(targets)}\n\`;
	            },
	            'Activities:\n');
	        document.getElementById('content').innerText = output;
	      }
	      // Utility methods for formatting activity records
	      /**
	       * Returns a string representation of the first N elements in a list.
	       * @param {string[]} array - Values to join
	       * @param {number} limit - # of elements to show
	       * @return {string} formatted string
	       */
	      function truncated(array, limit = 2) {
	        const contents = array.slice(0, limit).join(', ');
	        const more = array.length > limit ? ', ...' : '';
	        return \`[${contents}${more}]\`;
	      }
	      /**
	       * Returns the first found property name in an object.
	       * @param {object} object - Object to search
	       * @return {string} key name or 'unknown'
	       */
	      function getOneOf(object) {
	        const props = Object.getOwnPropertyNames(object);
	        if (props.length === 0) {
	          return 'unknown';
	        }
	        return props[0];
	      }
	      /**
	       * Returns a time associated with an activity.
	       * @param {object} activity - Activity record
	       * @return {string} Formatted timestamp
	       */
	      function getTimeInfo(activity) {
	        if ('timestamp' in activity) {
	          return activity.timestamp;
	        }
	        if ('timeRange' in activity) {
	          return activity.timeRange.endTime;
	        }
	        return 'unknown';
	      }
	      /**
	       * Returns the type of action.
	       * @param {object} actionDetail
	       * @return {string} Action type as string
	       */
	      function getActionInfo(actionDetail) {
	        return getOneOf(actionDetail);
	      }
	      /**
	       * Returns user information, or the type of user if not a known user.
	       * @param {object} user - User record
	       * @return {string} user type as string
	       */
	      function getUserInfo(user) {
	        if ('knownUser' in user) {
	          const knownUser = user['knownUser'];
	          const isMe = knownUser['isCurrentUser'] || false;
	          return isMe ? 'people/me' : knownUser['personName'];
	        }
	        return getOneOf(user);
	      }
	      /**
	       * Returns actor information, or the type of actor if not a user.
	       * @param {object} actor - Actor record
	       * @return {string} actor type as string
	       */
	      function getActorInfo(actor) {
	        if ('user' in actor) {
	          return getUserInfo(actor['user']);
	        }
	        return getOneOf(actor);
	      }
	      /**
	       * Returns the type of a target and an associated title.
	       * @param {object} target - Activity target record
	       * @return {string} target type as string
	       */
	      function getTargetInfo(target) {
	        if ('driveItem' in target) {
	          const title = target.driveItem.title || 'unknown';
	          return \`driveItem:"${title}"\`;
	        }
	        if ('drive' in target) {
	          const title = target.drive.title || 'unknown';
	          return \`drive:"${title}"\`;
	        }
	        if ('fileComment' in target) {
	          const parent = target.fileComment.parent || {};
	          const title = parent.title || 'unknown';
	          return \`fileComment:"${title}"\`;
	        }
	        return \`${getOneOf(target)}:unknown\`;
	      }
	    </script>
	    <script async defer src="https://apis.google.com/js/api.js" onload="gapiLoaded()"></script>
	    <script async defer src="https://accounts.google.com/gsi/client" onload="gisLoaded()"></script>
	  </body>
	</html>
	```
	Replace the following:
	- `YOUR_CLIENT_ID`: the client ID that you created when you [authorized credentials for a web application](#authorize-credentials).
		- `YOUR_API_KEY`: the API key that you [created](#create-api-key).

## Run the sample

1. In your working directory, install the [http-server](https://www.npmjs.com/package/http-server) package:
	```
	npm install http-server
	```
2. In your working directory, start a web server:
	```
	npx http-server -p 8000
	```
3. In your browser, navigate to `http://localhost:8000`.
4. You see a prompt to authorize access:
	1. If you're not already signed in to your Google Account, sign in when prompted. If you're signed in to multiple accounts, select one account to use for authorization.
		2. Click **Accept**.

Your JavaScript application runs and calls the Google Drive Activity API.

## Next steps

- [Try the Google Workspace APIs in the APIs explorer](../../../../explore.md)
