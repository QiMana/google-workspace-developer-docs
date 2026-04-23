---
source: https://developers.google.com/workspace/cloud-search/docs/reference/widget/js/gapi.cloudsearch.widget.resultscontainer.Builder
root: workspace
fetched_at: 2026-04-23T15:27:02.312Z
---

# Class: Builder

## Constructor

### Builder

new Builder()

#### Example

```
// Builds a results container.
function onload() {
  gapi.client.init({
    'apiKey': '<your api key>',
    'clientId': '<your client id>',
    // Add additional scopes if needed
    'scope': 'https://www.googleapis.com/auth/cloud_search.query',
    'hosted_domain': '<your G Suite domain>',
  });

  const resultscontainer =
      new gapi.cloudsearch.widget.resultscontainer.Builder()
        .setSearchResultsContainerElement(document.getElementById('search_result'))
        .build();

  const searchBox = new gapi.cloudsearch.widget.searchbox.Builder()
    .setInput(document.getElementById('input'))
    .setAnchor(document.getElementById('input').parentElement)
    .setResultsContainer(resultscontainer);
    .build();
}
gapi.load('client:cloudsearch-widget', onload);
```

## Methods

### build

build() returns ResultsContainer

Builds the results container.

Returns

`non-null ResultsContainer`

### setAdapter

setAdapter(adapter) returns Builder

**Optional**. Sets the adapter to customize the user experience.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>adapter</p></td><td><p><a href="https://developers.google.com/workspace/cloud-search/docs/reference/widget/js/ResultsContainerAdapter">ResultsContainerAdapter</a></p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Builder` this

### setFacetResultsContainerElement

setFacetResultsContainerElement(facetResultsContainerElement) returns Builder

Sets the container Element for facet results. Must be a valid Element that can contain child nodes.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>facetResultsContainerElement</p></td><td><p>Element</p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Builder` this

### setIncludePagination

setIncludePagination(includePagination) returns Builder

**Optional**. Default true. Includes a default pagination UI in the results container, if set to true.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>includePagination</p></td><td><p>boolean</p></td></tr></tbody></table>

Returns

`non-null Builder` this

### setResultsContainer

setResultsContainer(resultsContainer) returns Builder

**Required**. Sets the Element of the container. Must be a valid Element that can contain child nodes.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>resultsContainer</p></td><td><p>Element</p><p>Value must not be null.</p></td></tr></tbody></table>

Deprecated

Returns

`non-null Builder` this

### setSearchApplicationId

setSearchApplicationId(searchApplicationId) returns Builder

**Optional**. Sets the search application ID to use for requests. Must be prefixed with 'searchapplications/'.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>searchApplicationId</p></td><td><p>string</p></td></tr></tbody></table>

Returns

`non-null Builder` this

### setSearchResultsContainerElement

setSearchResultsContainerElement(searchResultsContainerElement) returns Builder

**Required**. Sets the Element of the container. Must be a valid Element that can contain child nodes.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>searchResultsContainerElement</p></td><td><p>Element</p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Builder` this
