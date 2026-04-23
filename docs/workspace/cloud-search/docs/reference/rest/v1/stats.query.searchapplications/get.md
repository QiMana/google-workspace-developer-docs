---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/stats.query.searchapplications/get
root: workspace
fetched_at: 2026-04-23T15:26:19.232Z
---

# Method: stats.query.searchapplications.get

## Method: stats.query.searchapplications.get

Get the query statistics for search application.

**Note:** This API requires a standard end user account to execute.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/stats/query/{name=searchapplications/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The resource id of the search application query stats, in the following format: searchapplications/{applicationId}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fromDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>All available stats from fromDate to toDate are returned. fromDate should be within the year and toDate >= fromDate.</p></td></tr><tr><td><code>toDate</code></td><td><p><code>object (<code>Date</code>)</code></p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.stats.indexing`
- `https://www.googleapis.com/auth/cloud_search.stats`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
