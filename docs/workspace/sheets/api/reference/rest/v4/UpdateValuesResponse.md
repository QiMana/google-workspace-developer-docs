---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/UpdateValuesResponse
root: workspace
fetched_at: 2026-04-23T15:31:28.198Z
---

# UpdateValuesResponse

The response when updating a range of values in a spreadsheet.

JSON representation

```
{
  "spreadsheetId": string,
  "updatedRange": string,
  "updatedRows": integer,
  "updatedColumns": integer,
  "updatedCells": integer,
  "updatedData": {
    object (ValueRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The spreadsheet the updates were applied to.</p></td></tr><tr><td><code>updatedRange</code></td><td><p><code>string</code></p><p>The range (in A1 notation) that updates were applied to.</p></td></tr><tr><td><code>updatedRows</code></td><td><p><code>integer</code></p><p>The number of rows where at least one cell in the row was updated.</p></td></tr><tr><td><code>updatedColumns</code></td><td><p><code>integer</code></p><p>The number of columns where at least one cell in the column was updated.</p></td></tr><tr><td><code>updatedCells</code></td><td><p><code>integer</code></p><p>The number of cells updated.</p></td></tr><tr><td><code>updatedData</code></td><td><p><code>object (<code>ValueRange</code>)</code></p><p>The values of the cells after updates were applied. This is only included if the request's <code>includeValuesInResponse</code> field was <code>true</code>.</p></td></tr></tbody></table>
