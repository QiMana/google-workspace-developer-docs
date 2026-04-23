---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/stats.index.datasources/get
root: workspace
fetched_at: 2026-04-23T15:26:20.124Z
---

# Method: stats.index.datasources.get

## Method: stats.index.datasources.get

Gets indexed item statistics for a single data source.

**Note:** This API requires a standard end user account to execute.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/stats/index/{name=datasources/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The resource id of the data source to retrieve statistics for, in the following format: "datasources/{sourceId}"</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fromDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Start of the date range to retrieve statistics for, in PST. This value must be within 1 year of the current date.</p><p>The fromDate and toDate can be the same to provide statistics for a single day. If both fromDate and toDate are set to the current day, real-time statistics are returned for the current day. Note: Requests for real-time stats from large data sources are expensive and have high latency.</p></td></tr><tr><td><code>toDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>End of the date range to receive statistics for, in PST. This value must be within 1 year of the current date. If set to the current date, real-time statistics are returned. Note: Requests for real-time stats from large data sources are expensive and have high latency.</p><p>The fromDate and toDate can be the same to provide statistics for a single day. If both fromDate and toDate are set to the current day, real-time statistics are returned for the current day.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.stats.indexing`
- `https://www.googleapis.com/auth/cloud_search.stats`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
