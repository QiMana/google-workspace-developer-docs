---
source: https://developers.google.com/workspace/cloud-search/docs/tutorials/end-to-end/setup-app
root: workspace
fetched_at: 2026-04-23T15:27:02.143Z
---

# Set up the user interface

This page of the Google Cloud Search tutorial shows how to set up a custom search application using the embeddable search widget. To start from the beginning of this tutorial, refer to [Cloud Search getting started tutorial](../end-to-end.md).

## Install dependencies

1. If the connector is still indexing the repository, open a new shell and continue there.
2. From the command line, change directory to `cloud-search-samples/end-to-end/search-interface`.
3. To download the required dependencies for running the web server, run the following command:

```
npm install
```

## Create the search application credentials

The connector requires service account credentials to call the Cloud Search APIs. To create the credentials:

1. Return to the [Google Cloud console](https://console.cloud.google.com/apis/dashboard).
2. In the left navigation, click **Credentials**.
3. From the **Create credentials** drop-down list, select **OAuth client ID**. The "Create OAuth client ID" page appears.
4. (Optional). If you haven't configured the consent screen, click **CONFIGURE CONSENT SCREEN**. The "OAuth consent" screen appears.
	1. Click **Internal** and click **CREATE**. Another "OAuth consent" screen appears.
		2. Fill out required fields. For further instructions, refer to the user consent section of [Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849).
5. Click the **Application type** drop-down list and select **Web application**.
6. In the **Name** field, enter "tutorial".
7. In **Authorized JavaScript origins** field, click **ADD URI**. An empty "URIs" field appears.
8. In the **URIs** field, enter `http://localhost:8080`.
9. Click **CREATE**. The "OAuth client created" screen appears.
10. Note the client ID. This value is used to identify the application when requesting user authorization with OAuth2. The client secret is not required for this implementation.
11. Click **OK**.

## Create the search application

Next, create a search application in the admin console. The search application is a virtual representation of the search interface and its default configuration.

1. Return to the [Google Admin console](https://admin.google.com/).
2. Click the Apps icon. The "Apps administration" page appears.
3. Click **Google Workspace**. The "Apps Google Workspace administration" page appears.
4. Scroll down and Click **Cloud Search**. The "Settings for Google Workspace" page appears.
5. Click **Search Applications**. The "Search Appplications" page appears.
6. Click the round yellow **+**. The "Create a new search application" dialog appears.
7. In the **Display name** field, enter "tutorial".
8. Click **CREATE**.
9. Click the pencil icon next to the newly-created search application ("Edit search application"). The "Search application details" page appears.
10. Note the **Application ID**.
11. To the right of **Data sources**, click the pencil icon.
12. Next to "tutorial," click the **Enable** toggle. This toggle enables the tutorial data source for the newly created search application.
13. To the right of the "tutorial" data source, click **Display options**.
14. Check all the facets.
15. Click **SAVE**.
16. Click **DONE**.

## Configure the web application

After creating the credentials and search app, update the application configuration to include these values as follows:

1. From the command line, change directory to \`cloud-search-samples/end-to-end/search-interface/public.'
2. Open `app.js` file with a text editor.
3. Find the `searchConfig` variable at the top of the file.
4. Replace `[client-id]` with the previously created OAuth client ID.
5. Replace `[application-id]` with the search application ID noted in the previous section.
6. Save the file.

## Run the application

Start the application by running this command:

```
npm run start
```

## Query the index

To query the index using the search widget:

1. Open your browser and navigate to `http://localhost:8080`.
2. Click **sign in** to authorize the app to query Cloud Search on your behalf.
3. In the search box, enter a query, such as the word "test," and press **enter**. The page should display the query results along with facets and pagination controls to navigate the results.

## Reviewing the code

The remaining sections examine how the user interface is built.

### Loading the widget

The widget and related libraries are loaded in two phases. First, the bootstrap script is loaded:

```
<script src="https://apis.google.com/js/api.js?mods=enable_cloud_search_widget&onload=onLoad" async defer></script>
```

Second, the `onLoad` callback is called once the script is ready. It then loads the Google API client, Google Sign-in, and the Cloud Search widget libraries.

```
/**
 * Load the cloud search widget & auth libraries. Runs after
 * the initial gapi bootstrap library is ready.
 */
function onLoad() {
  gapi.load('client:auth2:cloudsearch-widget', initializeApp)
}
```

The remaining initialization of the app is handled by `initializeApp` once all the required libraries are loaded.

### Handling authorization

Users must authorize the app to query on their behalf. While the widget can prompt users to authorize, you can achieve a better user experience by handling authorization yourself.

For the search interface, the app presents two different views depending on the sign-in state of the user.

```
<div class="content">
  <div id="app" hidden>
    <div id="header">
      <button id="sign-out">Sign-out</button>
    </div>
    <!-- Markup for widget...-->
  </div>
  <div id="welcome" hidden>
    <h1>Cloud Search Tutorial</h1>
    <p>Sign in with your Google account to search.</p>
    <button id="sign-in">Sign-in</button>
  </div>
</div>
```

During initialization the correct view is enabled and the handlers for sign-in and sign-out events are configured:

```
/**
 * Initialize the app after loading the Google API client &
 * Cloud Search widget.
 */
async function initializeApp() {
  await gapi.auth2.init({
      'clientId': searchConfig.clientId,
      'scope': 'https://www.googleapis.com/auth/cloud_search.query'
  });

  let auth = gapi.auth2.getAuthInstance();

  // Watch for sign in status changes to update the UI appropriately
  let onSignInChanged = (isSignedIn) => {
    document.getElementById("app").hidden = !isSignedIn;
    document.getElementById("welcome").hidden = isSignedIn;
    if (resultsContainer) {
      resultsContainer.clear();
    }
  }
  auth.isSignedIn.listen(onSignInChanged);
  onSignInChanged(auth.isSignedIn.get()); // Trigger with current status

  // Connect sign-in/sign-out buttons
  document.getElementById("sign-in").onclick = (e) =>  auth.signIn();
  document.getElementById("sign-out").onclick = (e) => auth.signOut();

  // ...

}
```

### Creating the search interface

The search widget requires a small amount of HTML markup for the search input and to hold the search results:

```
<div id="search_bar">
  <div>
    <div id="suggestions_anchor">
      <input type="text" id="search_input" placeholder="Search for...">
    </div>
  </div>
</div>
<div id="facet_results" ></div>
<div id="search_results" ></div>
```

The widget is initialized and bound to the input and container elements during initialization:

```
gapi.config.update('cloudsearch.config/apiVersion', 'v1');
resultsContainer = new gapi.cloudsearch.widget.resultscontainer.Builder()
  .setSearchApplicationId(searchConfig.searchAppId)
  .setSearchResultsContainerElement(document.getElementById('search_results'))
  .setFacetResultsContainerElement(document.getElementById('facet_results'))
  .build();

const searchBox = new gapi.cloudsearch.widget.searchbox.Builder()
  .setSearchApplicationId(searchConfig.searchAppId)
  .setInput(document.getElementById('search_input'))
  .setAnchor(document.getElementById('suggestions_anchor'))
  .setResultsContainer(resultsContainer)
  .build();
```

Congratulations, you've successfully completed the tutorial! Continue on for cleanup instructions.

[Previous](./setup-connector.md) [Next](./finish.md)
