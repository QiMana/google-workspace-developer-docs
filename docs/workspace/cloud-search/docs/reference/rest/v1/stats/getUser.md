---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/stats/getUser
root: workspace
fetched_at: 2026-04-23T15:26:20.303Z
---

# Method: stats.getUser

Get the users statistics for customer.

**Note:** This API requires a standard end user account to execute.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/stats/user`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fromDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>All available stats from fromDate to toDate are returned. fromDate should be within the year and toDate >= fromDate.</p></td></tr><tr><td><code>toDate</code></td><td><p><code>object (<code>Date</code>)</code></p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "stats": [
    {
      object (CustomerUserStats)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>stats[]</code></td><td><p><code>object (<code>CustomerUserStats</code>)</code></p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.stats.indexing`
- `https://www.googleapis.com/auth/cloud_search.stats`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## CustomerUserStats

JSON representation

```
{
  "date": {
    object (Date)
  },
  "oneDayActiveUsersCount": string,
  "sevenDaysActiveUsersCount": string,
  "thirtyDaysActiveUsersCount": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>date</code></td><td><p><code>object (<code>Date</code>)</code></p><p>The date for which session stats were calculated. Stats calculated on the next day close to midnight are returned.</p></td></tr><tr><td><code>oneDayActiveUsersCount</code></td><td><p><code>string (int64 format)</code></p><p>The count of unique active users in the past one day</p></td></tr><tr><td><code>sevenDaysActiveUsersCount</code></td><td><p><code>string (int64 format)</code></p><p>The count of unique active users in the past seven days</p></td></tr><tr><td><code>thirtyDaysActiveUsersCount</code></td><td><p><code>string (int64 format)</code></p><p>The count of unique active users in the past thirty days</p></td></tr></tbody></table>
