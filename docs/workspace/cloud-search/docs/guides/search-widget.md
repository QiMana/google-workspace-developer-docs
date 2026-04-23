---
source: https://developers.google.com/workspace/cloud-search/docs/guides/search-widget
root: workspace
fetched_at: 2026-04-23T15:26:10.657Z
---

# Create a search interface with the search widget

The search widget provides a customizable search interface for web applications. It requires minimal HTML and JavaScript to implement and supports common features like facets and pagination. You can also customize the interface with CSS and JavaScript.

If you need more flexibility, use the Query API. See [Creating a search interface with the Query API](https://developers.google.com/workspace/cloud-search/docs/guides/query-guide).

## Build a search interface

Building the search interface requires these steps:

1. Configure a search application.
2. Generate a client ID for the application.
3. Add HTML markup for the search box and results.
4. Load the widget on the page.
5. Initialize the widget.

### Configure a search application

Each search interface requires a *search application* defined in the Admin console. The application provides query settings, such as data sources, facets, and search quality parameters.

To create a search application, see [Create a custom search experience](https://support.google.com/a/answer/9043922).

### Generate a client ID for the application

In addition to the steps in [Configure access to the Cloud Search API](https://developers.google.com/workspace/cloud-search/docs/guides/project-setup), generate a client ID for your web application.

Configure a project

When configuring the project:

- Select the **Web browser** client type.
- Provide the [origin URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) of your app.
- Note the client ID. The widget doesn't require a client secret.

For more information, see [OAuth 2.0 for Client-side Web Application](https://developers.google.com/identity/protocols/OAuth2UserAgent).

### Add HTML markup

The widget requires these HTML elements:

- An `input` element for the search box.
- An element to anchor the suggestion dialog.
- An element for search results.
- (Optional) An element for facet controls.

This snippet shows elements identified by their `id` attributes:

```
<div id="search_bar">
  <div id="suggestions_anchor">
    <input type="text" id="search_input" placeholder="Search for...">
  </div>
</div>
<div id="facet_results"></div>
<div id="search_results"></div>
```

### Load the widget

Include the loader using a `<script>` tag:

```
<!-- Google API loader -->
<script src="https://apis.google.com/js/api.js?mods=enable_cloud_search_widget&onload=onLoad" async defer></script>
```

Provide an `onload` callback. When the loader is ready, call [`gapi.load()`](https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiloadlibraries-callbackorconfig) to load the API client, Google Sign-in, and Cloud Search modules.

```
/**
* Load the cloud search widget & auth libraries. Runs after
* the initial gapi bootstrap library is ready.
*/
function onLoad() {
  gapi.load('client:auth2:cloudsearch-widget', initializeApp)
}
```

### Initialize the widget

Initialize the client library using `gapi.client.init()` or `gapi.auth2.init()` with your client ID and the `https://www.googleapis.com/auth/cloud_search.query` scope. Use the builder classes to configure and bind the widget.

Example initialization:

```
/**
 * Initialize the app after loading the Google API client &
 * Cloud Search widget.
 */
function initializeApp() {
  // Load client ID & search app.
  loadConfiguration().then(function() {
    // Set API version to v1.
    gapi.config.update('cloudsearch.config/apiVersion', 'v1');

    // Build the result container and bind to DOM elements.
    var resultsContainer = new gapi.cloudsearch.widget.resultscontainer.Builder()
      .setSearchApplicationId(searchApplicationName)
      .setSearchResultsContainerElement(document.getElementById('search_results'))
      .setFacetResultsContainerElement(document.getElementById('facet_results'))
      .build();

    // Build the search box and bind to DOM elements.
    var searchBox = new gapi.cloudsearch.widget.searchbox.Builder()
      .setSearchApplicationId(searchApplicationName)
      .setInput(document.getElementById('search_input'))
      .setAnchor(document.getElementById('suggestions_anchor'))
      .setResultsContainer(resultsContainer)
      .build();
  }).then(function() {
    // Init API/oauth client w/client ID.
    return gapi.auth2.init({
        'clientId': clientId,
        'scope': 'https://www.googleapis.com/auth/cloud_search.query'
    });
  });
}
```

Configuration variables:

```
/**
* Client ID from OAuth credentials.
*/
var clientId = "...apps.googleusercontent.com";

/**
* Full resource name of the search application, such as
* "searchapplications/<your-id>".
*/
var searchApplicationName = "searchapplications/...";
```

## Customize the sign-in experience

The widget prompts users to sign in when they start typing. You can use [Google Sign-in for Websites](https://developers.google.com/identity/sign-in/web) for a tailored experience.

### Authorize users directly

Use [Sign In With Google](https://developers.google.com/identity/gsi) to monitor and manage sign-in states. This example uses `GoogleAuth.signIn()` on a button click:

```
// Handle sign-in/sign-out.
let auth = gapi.auth2.getAuthInstance();

// Watch for sign in status changes to update the UI appropriately.
let onSignInChanged = (isSignedIn) => {
  // Update UI to switch between signed in/out states
  // ...
}
auth.isSignedIn.listen(onSignInChanged);
onSignInChanged(auth.isSignedIn.get()); // Trigger with current status.

// Connect sign-in/sign-out buttons.
document.getElementById("sign-in").onclick = function(e) {
  auth.signIn();
};
document.getElementById("sign-out").onclick = function(e) {
  auth.signOut();
};
```

### Automatically sign in users

Pre-authorize the application for users in your organization to streamline sign-in. This is also useful with [Cloud Identity Aware Proxy](https://cloud.google.com/iap/). See [Use Google Sign-In with IT Apps](https://developers.google.com/identity/work/it-apps).

## Customize the interface

You can change the widget's appearance by:

- Overriding styles with CSS.
- Decorating elements with an adapter.
- Creating custom elements with an adapter.

### Override styles with CSS

The widget includes its own CSS. To override it, use ancestor selectors to increase specificity:

```
#suggestions_anchor .cloudsearch_suggestion_container {
  font-size: 14px;
}
```

See the [Supported CSS classes](https://developers.google.com/workspace/cloud-search/docs/reference/widget/css) reference.

### Decorate elements with an adapter

Create and register an adapter to modify elements before rendering. This example adds a custom CSS class:

```
/**
 * Search box adapter that decorates suggestion elements by
 * adding a custom CSS class.
 */
function SearchBoxAdapter() {}
SearchBoxAdapter.prototype.decorateSuggestionElement = function(element) {
  element.classList.add('my-suggestion');
}

/**
 * Results container adapter that decorates suggestion elements by
 * adding a custom CSS class.
 */
function ResultsContainerAdapter() {}
ResultsContainerAdapter.prototype.decorateSearchResultElement = function(element) {
  element.classList.add('my-result');
}
```

Register the adapter during initialization:

```
// Build the result container and bind to DOM elements.
var resultsContainer = new gapi.cloudsearch.widget.resultscontainer.Builder()
  .setAdapter(new ResultsContainerAdapter())
  // ...
  .build();

// Build the search box and bind to DOM elements.
var searchBox = new gapi.cloudsearch.widget.searchbox.Builder()
  .setAdapter(new SearchBoxAdapter())
  // ...
  .build();
```

### Create custom elements with an adapter

Implement `createSuggestionElement`, `createFacetResultElement`, or `createSearchResultElement` to build custom UI components. This example uses HTML `<template>` tags:

```
/**
 * Search box adapter that overrides creation of suggestion elements.
 */
function SearchBoxAdapter() {}
SearchBoxAdapter.prototype.createSuggestionElement = function(suggestion) {
  let template = document.querySelector('#suggestion_template');
  let fragment = document.importNode(template.content, true);
  fragment.querySelector('.suggested_query').textContent = suggestion.suggestedQuery;
  return fragment.firstElementChild;
}

/**
 * Results container adapter that overrides creation of result elements.
 */
function ResultsContainerAdapter() {}
ResultsContainerAdapter.prototype.createSearchResultElement = function(result) {
  let template = document.querySelector('#result_template');
  let fragment = document.importNode(template.content, true);
  fragment.querySelector('.title').textContent = result.title;
  fragment.querySelector('.title').href = result.url;
  let snippetText = result.snippet != null ?
    result.snippet.snippet : '';
  fragment.querySelector('.query_snippet').innerHTML = snippetText;
  return fragment.firstElementChild;
}
```

Register the adapter:

```
// Build the result container and bind to DOM elements.
var resultsContainer = new gapi.cloudsearch.widget.resultscontainer.Builder()
  .setAdapter(new ResultsContainerAdapter())
  // ...
  .build();

// Build the search box and bind to DOM elements.
var searchBox = new gapi.cloudsearch.widget.searchbox.Builder()
  .setAdapter(new SearchBoxAdapter())
  // ...
  .build();
```

Custom facet elements must follow these rules:

- Attach `cloudsearch_facet_bucket_clickable` to clickable elements.
- Wrap each bucket in a `cloudsearch_facet_bucket_container`.
- Maintain the bucket order from the response.

For example, the following snippet renders facets using links instead of check boxes.

```
/**
 * Results container adapter that intercepts requests to dynamically
 * change which sources are enabled based on user selection.
 */
function ResultsContainerAdapter() {
  this.selectedSource = null;
}

ResultsContainerAdapter.prototype.createFacetResultElement = function(result) {
  // container for the facet
  var container = document.createElement('div');

  // Add a label describing the facet (operator/property)
  var label = document.createElement('div')
  label.classList.add('facet_label');
  label.textContent = result.operatorName;
  container.appendChild(label);

  // Add each bucket
  for(var i in result.buckets) {
    var bucket = document.createElement('div');
    bucket.classList.add('cloudsearch_facet_bucket_container');

    // Extract & render value from structured value
    // Note: implementation of renderValue() not shown
    var bucketValue = this.renderValue(result.buckets[i].value)
    var link = document.createElement('a');
    link.classList.add('cloudsearch_facet_bucket_clickable');
    link.textContent = bucketValue;
    bucket.appendChild(link);
    container.appendChild(bucket);
  }
  return container;
}

// Renders a value for user display
ResultsContainerAdapter.prototype.renderValue = function(value) {
  // ...
}
```

## Customize search behavior

Override search application settings by intercepting requests with an adapter. Implement `interceptSearchRequest` to modify requests before execution. This example restricts queries to a selected source:

```
/**
 * Results container adapter that intercepts requests to dynamically
 * change which sources are enabled based on user selection.
 */
function ResultsContainerAdapter() {
  this.selectedSource = null;
}
ResultsContainerAdapter.prototype.interceptSearchRequest = function(request) {
  if (!this.selectedSource || this.selectedSource == 'ALL') {
    // Everything selected, fall back to sources defined in the search
    // application.
    request.dataSourceRestrictions = null;
  } else {
    // Restrict to a single selected source.
    request.dataSourceRestrictions = [
      {
        source: {
          predefinedSource: this.selectedSource
        }
      }
    ];
  }
  return request;
}
```

Register the adapter:

```
var resultsContainerAdapter = new ResultsContainerAdapter();
// Build the result container and bind to DOM elements.
var resultsContainer = new gapi.cloudsearch.widget.resultscontainer.Builder()
  .setAdapter(resultsContainerAdapter)
  // ...
  .build();
```

The following HTML is used to display a select box for filtering by sources:

```
<div>
  <span>Source</span>
  <select id="sources">
    <option value="ALL">All</option>
    <option value="GOOGLE_GMAIL">Gmail</option>
    <option value="GOOGLE_DRIVE">Drive</option>
    <option value="GOOGLE_SITES">Sites</option>
    <option value="GOOGLE_GROUPS">Groups</option>
    <option value="GOOGLE_CALENDAR">Calendar</option>
    <option value="GOOGLE_KEEP">Keep</option>
  </select>
</div>
```

The following code listens for the change, sets the selection, and re-executes the query if necessary.

```
// Handle source selection
document.getElementById('sources').onchange = (e) => {
  resultsContainerAdapter.selectedSource = e.target.value;
  let request = resultsContainer.getCurrentRequest();
  if (request.query) {
    // Re-execute if there's a valid query. The source selection
    // will be applied in the interceptor.
    resultsContainer.resetState();
    resultsContainer.executeRequest(request);
  }
}
```

You can also intercept the search response by implementing [`interceptSearchResponse`](https://developers.google.com/workspace/cloud-search/docs/reference/widget/js/ResultsContainerAdapter#interceptSearchResponse) in the adapter.

## Pin versions

- **API version**: Set `cloudsearch.config/apiVersion` before initializing.
- **Widget version**: Use `gapi.config.update('cloudsearch.config/clientVersion', 1.1)`.

Both default to 1.0 if unset.

For example, to pin the widget to version 1.1:

```
gapi.config.update('cloudsearch.config/apiVersion', 'v1');
```

## Secure the search interface

Follow security best practices for web applications, especially to prevent [clickjacking](https://www.owasp.org/index.php/Clickjacking).

## Enable debugging

Use [`interceptSearchRequest`](https://developers.google.com/workspace/cloud-search/docs/reference/widget/js/ResultsContainerAdapter#interceptSearchRequest) to enable debugging:

```
if (!request.requestOptions) {
  request.requestOptions = {};
}
request.requestOptions.debugOptions = {enableDebugging: true};
return request;
```
