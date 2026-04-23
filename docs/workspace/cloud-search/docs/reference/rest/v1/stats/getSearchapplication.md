---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/stats/getSearchapplication
root: workspace
fetched_at: 2026-04-23T15:26:20.440Z
---

# Method: stats.getSearchapplication

Get search application stats for customer. **Note:** This API requires a standard end user account to execute.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/stats/searchapplication`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>startDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>All available stats from startDate to endDate are returned. endDate - startDate <= 6 months.</p></td></tr><tr><td><code>endDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>End date upto which stats are going to be returned.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response format for search application stats for a customer.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "stats": [
    {
      object (CustomerSearchApplicationStats)
    }
  ],
  "averageSearchApplicationCount": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>stats[]</code></td><td><p><code>object (<code>CustomerSearchApplicationStats</code>)</code></p><p>Search application stats by date.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.stats.indexing`
- `https://www.googleapis.com/auth/cloud_search.stats`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## CustomerSearchApplicationStats

Search application stats for a customer for the given date.

JSON representation

```
{
  "date": {
    object (Date)
  },
  "count": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>date</code></td><td><p><code>object (<code>Date</code>)</code></p><p>The date for which search application stats were calculated.</p></td></tr><tr><td><code>count</code></td><td><p><code>string (int64 format)</code></p><p>The count of search applications for the date.</p></td></tr></tbody></table>
