---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/stats.index.datasources
root: workspace
fetched_at: 2026-04-23T15:26:19.167Z
---

# REST Resource: stats.index.datasources

## Resource: GetDataSourceIndexStatsResponse

JSON representation

```
{
  "stats": [
    {
      object (DataSourceIndexStats)
    }
  ],
  "averageIndexedItemCount": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>stats[]</code></td><td><p><code>object (<code>DataSourceIndexStats</code>)</code></p><p>Summary of indexed item counts, one for each day in the requested range.</p></td></tr><tr><td><code>averageIndexedItemCount</code></td><td><p><code>string (int64 format)</code></p><p>Average item count for the given date range for which billing is done.</p></td></tr></tbody></table>

## DataSourceIndexStats

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>date</code></td><td><p><code>object (<code>Date</code>)</code></p><p>The date for which index stats were calculated. If the date of request is not the current date then stats calculated on the next day are returned. Stats are calculated close to mid night in this case. If date of request is current date, then real time stats are returned.</p></td></tr><tr><td><code>itemCountByStatus[]</code></td><td><p><code>object (<code>ItemCountByStatus</code>)</code></p><p>Number of items aggregrated by status code.</p></td></tr></tbody></table>

## ItemCountByStatus

JSON representation

```
{
  "statusCode": enum (ItemStatus.Code),
  "count": string,
  "indexedItemsCount": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>statusCode</code></td><td><p><code>enum (<code>ItemStatus.Code</code>)</code></p><p>Status of the items.</p></td></tr><tr><td><code>count</code></td><td><p><code>string (int64 format)</code></p><p>Number of items matching the status code.</p></td></tr><tr><td><code>indexedItemsCount</code></td><td><p><code>string (int64 format)</code></p><p>Number of items matching the status code for which billing is done. This excludes virtual container items from the total count. This count would not be applicable for items with ERROR or NEW_ITEM status code.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets indexed item statistics for a single data source.</td></tr></tbody></table>
