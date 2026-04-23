---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/stats.user.searchapplications
root: workspace
fetched_at: 2026-04-23T15:26:20.059Z
---

# REST Resource: stats.user.searchapplications

## Resource: GetSearchApplicationUserStatsResponse

JSON representation

```
{
  "stats": [
    {
      object (SearchApplicationUserStats)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>stats[]</code></td><td><p><code>object (<code>SearchApplicationUserStats</code>)</code></p></td></tr></tbody></table>

## SearchApplicationUserStats

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Get the users statistics for search application.</td></tr></tbody></table>
