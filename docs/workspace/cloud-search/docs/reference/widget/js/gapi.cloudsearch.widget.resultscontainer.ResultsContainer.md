---
source: https://developers.google.com/workspace/cloud-search/docs/reference/widget/js/gapi.cloudsearch.widget.resultscontainer.ResultsContainer
root: workspace
fetched_at: 2026-04-23T15:27:02.587Z
---

# Class: ResultsContainer

## Constructor

### ResultsContainer

new ResultsContainer()

## Methods

### clear

clear()

Removes ResultsContainer's descendant nodes and listeners attached to them.

### dispose

dispose()

Removes all DOM elements and event listeners created by ResultsContainer.

### executeRequest

executeRequest(request)

Executes a given request. The results will be rendered in the results container.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>request</p></td><td><p>Object</p><p>Value must not be null.</p></td></tr></tbody></table>

### getCurrentRequest

getCurrentRequest() returns (Object or undefined)

Returns the current request. Return undefined if no request has been executed.

### resetState

resetState()

Reset the state of the ResultsContainer. This will reset the local state such as the facet selection state.
