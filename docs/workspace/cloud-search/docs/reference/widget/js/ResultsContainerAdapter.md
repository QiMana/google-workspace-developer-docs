---
source: https://developers.google.com/workspace/cloud-search/docs/reference/widget/js/ResultsContainerAdapter
root: workspace
fetched_at: 2026-04-23T15:26:59.878Z
---

# Interface: ResultsContainerAdapter

## Methods

### createFacetResultElement

createFacetResultElement(result) returns Element

Implement this method to override rendering of a facet result.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>result</p></td><td><p>Object</p><p>A facet result object from response</p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Element` element Element built based on a facet result.

### createSearchResultElement

createSearchResultElement(result) returns Element

Implement this method to override rendering of a search result.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>result</p></td><td><p>Object</p><p>A search result object from response</p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Element` element Element built based on a search result.

### decorateFacetResultElement

decorateFacetResultElement(element, result)

Implement this method to decorate a facet result, such as change CSS.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>element</p></td><td><p>Element</p><p>Element you can decorate on.</p><p>Value must not be null.</p></td></tr><tr><td><p>result</p></td><td><p>Object</p><p>A facet result object from response</p><p>Value must not be null.</p></td></tr></tbody></table>

### decoratePaginationElement

decoratePaginationElement(element)

Implement this method to decorate pagination buttons, such as change CSS.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>element</p></td><td><p>Element</p><p>Element of pagination buttons.</p><p>Value must not be null.</p></td></tr></tbody></table>

### decorateSearchResultElement

decorateSearchResultElement(element, result)

Implement this method to decorate a search result, such as change CSS.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>element</p></td><td><p>Element</p><p>Element you can decorate on.</p><p>Value must not be null.</p></td></tr><tr><td><p>result</p></td><td><p>Object</p><p>A search result object from response</p><p>Value must not be null.</p></td></tr></tbody></table>

### interceptSearchRequest

interceptSearchRequest(request) returns Object

Implement this method to add extra params in request.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>request</p></td><td><p>Object</p><p>The original request</p><p>Value must not be null.</p></td></tr></tbody></table>

Returns

`non-null Object` request The updated request

### interceptSearchResponse

interceptSearchResponse(response)

Implement this method to read the response prior to rendering. The response object is read-only. If the search call fails, the response will contain the error.

If a new search request is issued while one is pending, the previous request is cancelled and the method is not called.

<table><tbody><tr><th colspan="2"><h4>Parameter</h4></th></tr></tbody><tbody><tr><td><p>response</p></td><td><p>Object</p><p>The search response</p><p>Value must not be null.</p></td></tr></tbody></table>
