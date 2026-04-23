---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/stats.query.searchapplications
root: workspace
fetched_at: 2026-04-23T15:26:19.739Z
---

# REST Resource: stats.query.searchapplications

## Resource: GetSearchApplicationQueryStatsResponse

Response format for getting query stats for a search application between given dates.

JSON representation

```
{
  "stats": [
    {
      object (SearchApplicationQueryStats)
    }
  ],
  "totalQueryCount": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>stats[]</code></td><td><p><code>object (<code>SearchApplicationQueryStats</code>)</code></p><p>Query stats per date for a search application.</p></td></tr><tr><td><code>totalQueryCount</code></td><td><p><code>string (int64 format)</code></p><p>Total successful query count (status code 200) for the given date range.</p></td></tr></tbody></table>

## SearchApplicationQueryStats

Search application level query stats per date

JSON representation

```
{
  "date": {
    object (Date)
  },
  "queryCountByStatus": [
    {
      object (QueryCountByStatus)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>date</code></td><td><p><code>object (<code>Date</code>)</code></p><p>The date for which query stats were calculated. Stats calculated on the next day close to midnight are returned.</p></td></tr><tr><td><code>queryCountByStatus[]</code></td><td><p><code>object (<code>QueryCountByStatus</code>)</code></p></td></tr></tbody></table>

## QueryCountByStatus

JSON representation

```
{
  "statusCode": integer,
  "count": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>statusCode</code></td><td><p><code>integer</code></p><p>This represents the http status code.</p></td></tr><tr><td><code>count</code></td><td><p><code>string (int64 format)</code></p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Get the query statistics for search application.</td></tr></tbody></table>
