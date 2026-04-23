---
source: https://developers.google.com/workspace/cloud-search/docs/reference/widget/js/SearchBoxAdapter
root: workspace
fetched_at: 2026-04-23T15:27:00.895Z
---

# Interface: SearchBoxAdapter

## Methods

### createSuggestionElement

createSuggestionElement(suggestion) returns Element

Implement this method to override rendering of a suggestion.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>suggestion</p></td><td><p>Object</p><p>A suggestion object from response</p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Element` element Element built based on a suggestion.

### decorateSuggestionElement

decorateSuggestionElement(element, suggestion)

Implement this method to decorate a suggestion, such as change CSS.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>element</p></td><td><p>Element</p><p>Element you can decorate on</p><p>Value must not be null.</p></td></tr><tr><td><p>suggestion</p></td><td><p>Object</p><p>A suggestion object from response</p><p>Value must not be null.</p></td></tr></tbody></table>

### interceptSuggestRequest

interceptSuggestRequest(request) returns Object

Implement this method to add extra params in request.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>request</p></td><td><p>Object</p><p>The original request</p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Object` request The updated request

### interceptSuggestResponse

interceptSuggestResponse(response)

Implement this method to read the suggest response prior to rendering. The response object is read-only. If the call fails, the response will contain the error.

If a new suggest request is issued while one is pending, the previous request is cancelled and the method is not called.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>response</p></td><td><p>Object</p><p>The suggest response</p><p>Value must not be null.</p></td></tr></tbody></table>
