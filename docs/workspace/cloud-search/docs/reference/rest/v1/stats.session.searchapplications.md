---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/stats.session.searchapplications
root: workspace
fetched_at: 2026-04-23T15:26:19.824Z
---

# REST Resource: stats.session.searchapplications

## Resource: GetSearchApplicationSessionStatsResponse

JSON representation

```
{
  "stats": [
    {
      object (SearchApplicationSessionStats)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>stats[]</code></td><td><p><code>object (<code>SearchApplicationSessionStats</code>)</code></p></td></tr></tbody></table>

## SearchApplicationSessionStats

JSON representation

```
{
  "date": {
    object (Date)
  },
  "searchSessionsCount": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>date</code></td><td><p><code>object (<code>Date</code>)</code></p><p>The date for which session stats were calculated. Stats are calculated on the following day, close to midnight PST, and then returned.</p></td></tr><tr><td><code>searchSessionsCount</code></td><td><p><code>string (int64 format)</code></p><p>The count of search sessions on the day</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Get the # of search sessions, % of successful sessions with a click query statistics for search application.</td></tr></tbody></table>
