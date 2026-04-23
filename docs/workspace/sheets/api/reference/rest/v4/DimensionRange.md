---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/DimensionRange
root: workspace
fetched_at: 2026-04-23T15:31:27.375Z
---

# DimensionRange

A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.

JSON representation

```
{
  "sheetId": integer,
  "dimension": ,
  "startIndex": integer,
  "endIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The sheet this span is on.</p></td></tr><tr><td><code>dimension</code></td><td><p>The dimension of the span.</p></td></tr><tr><td><code>startIndex</code></td><td><p><code>integer</code></p><p>The start (inclusive) of the span, or not set if unbounded.</p></td></tr><tr><td><code>endIndex</code></td><td><p><code>integer</code></p><p>The end (exclusive) of the span, or not set if unbounded.</p></td></tr></tbody></table>
