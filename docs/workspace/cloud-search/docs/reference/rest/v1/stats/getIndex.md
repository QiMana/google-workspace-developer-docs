---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/stats/getIndex
root: workspace
fetched_at: 2026-04-23T15:26:20.220Z
---

# Method: stats.getIndex

Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day.

**Note:** This API requires a standard end user account to execute.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/stats/index`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fromDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Start of the date range to retrieve statistics for. This value must be within 1 year of the current date.</p></td></tr><tr><td><code>toDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>End of the date range to retrieve statistics for. This value must be within 1 year of the current date and greater than fromDate.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "stats": [
    {
      object (CustomerIndexStats)
    }
  ],
  "averageIndexedItemCount": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>stats[]</code></td><td><p><code>object (<code>CustomerIndexStats</code>)</code></p><p>Summary of indexed item counts, one for each day in the requested range.</p></td></tr><tr><td><code>averageIndexedItemCount</code></td><td><p><code>string (int64 format)</code></p><p>Average item count for the given date range for which billing is done.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.stats.indexing`
- `https://www.googleapis.com/auth/cloud_search.stats`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## CustomerIndexStats

Aggregation of items by status code as of the specified date.

JSON representation

```
{
  "date": {
    object (Date)
  },
  "itemCountByStatus": [
    {
      object (ItemCountByStatus)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>date</code></td><td><p><code>object (<code>Date</code>)</code></p><p>The date for which statistics were calculated.</p></td></tr><tr><td><code>itemCountByStatus[]</code></td><td><p><code>object (<code>ItemCountByStatus</code>)</code></p><p>Number of items aggregrated by status code.</p></td></tr></tbody></table>
