---
source: https://developers.google.com/workspace/cloud-search/docs/reference/widget/js/gapi.cloudsearch.widget.searchbox.Builder
root: workspace
fetched_at: 2026-04-23T15:27:01.919Z
---

# Class: Builder

## Constructor

### Builder

new Builder()

#### Example

```
// Builds a search box.
function onload() {
  gapi.client.init({
    'apiKey': '<your api key>',
    'clientId': '<your client id>',
    // Add additional scopes if needed
    'scope': 'https://www.googleapis.com/auth/cloud_search.query',
    'hosted_domain': '<your G Suite domain>',
  });

  const searchBox = new gapi.cloudsearch.widget.searchbox.Builder()
    .setInput(document.getElementById('input'))
    .setAnchor(document.getElementById('input').parentElement)
    .build();
}
gapi.load('client:cloudsearch-widget', onload);
```

## Methods

### build

build() returns SearchBox

Returns

`non-null SearchBox`

### setAdapter

setAdapter(adapter) returns Builder

**Required**. Customize the user's search experience with this adapter.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>adapter</p></td><td><p><a href="https://developers.google.com/workspace/cloud-search/docs/reference/widget/js/SearchBoxAdapter">SearchBoxAdapter</a></p><p>You can override part of the methods.</p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Builder` this

#### Example

```
const adapter = {
 interceptSuggestRequest: function(request) {
    // Change the request
  }
}

builder.setAdapter(adapter).build();
```

### setAnchor

setAnchor(anchor) returns Builder

**Required**. Must to be a valid HTMLElement that can contain child nodes. Anchor of the search overlay. The overlay is added as the last child in anchor. The position of the overlay is the bottom of anchor.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>anchor</p></td><td><p>HTMLElement</p><p>Value must not be null.</p></td></tr></tbody></table>

Deprecated

Use \`setAnchorElement\` instead

Returns

`non-null Builder` this

### setAnchorElement

setAnchorElement(anchorElement) returns Builder

**Required**. Must to be a valid HTMLElement that can contain child nodes. Anchor of the search overlay. The overlay is added as the last child in anchor. The position of the overlay is the bottom of anchor.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>anchorElement</p></td><td><p>HTMLElement</p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Builder` this

### setHints

setHints(hints) returns Builder

**Optional**. The hints on the search box when input is empty. When the input is empty, a random hint is picked from the array.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>hints</p></td><td><p>Array of string</p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Builder` this

### setInput

setInput(input) returns Builder

**Required**. An HTMLElement that the user inputs the query. Must be <input> or <textarea>

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>input</p></td><td><p>HTMLElement</p><p>Value must not be null.</p></td></tr></tbody></table>

Deprecated

Use \`setInputElement\` instead

Returns

`non-null Builder` this

### setInputElement

setInputElement(inputElement) returns Builder

**Required**. An HTMLElement that the user inputs the query. Must be <input> or <textarea>

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>inputElement</p></td><td><p>HTMLElement</p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Builder` this

### setResultsContainer

setResultsContainer(resultsContainer) returns Builder

**Optional**. Container for displaying search results. If set, the results are rendered in the search results container. If not set, the results are shown in cloudsearch.google.com.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>resultsContainer</p></td><td><p><a href="https://developers.google.com/workspace/cloud-search/docs/reference/widget/js/gapi.cloudsearch.widget.resultscontainer.ResultsContainer">gapi.cloudsearch.widget.resultscontainer.ResultsContainer</a></p><p>Value must not be null.</p></td></tr></tbody></table>

See also

[ResultsContainer](https://developers.google.com/workspace/cloud-search/docs/reference/widget/js/gapi.cloudsearch.widget.resultscontainer.ResultsContainer)

Returns

`non-null Builder` this

### setSearchApplicationId

setSearchApplicationId(searchApplicationId) returns Builder

**Optional**. Sets the search application ID to use for requests. Must be prefixed with 'searchapplications/'.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>searchApplicationId</p></td><td><p>string</p></td></tr></tbody></table>

Returns

`non-null Builder` this

### setThrottleInterval

setThrottleInterval(throttleInterval) returns Builder

**Optional**. The throttle interval in ms on firing request. The search box sends less than one request every throttleInterval milliseconds. If throttleInternal is less than 200, search box ignores the value and uses 200 as interval instead.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>throttleInterval</p></td><td><p>number</p></td></tr></tbody></table>

Returns

`non-null Builder` this
