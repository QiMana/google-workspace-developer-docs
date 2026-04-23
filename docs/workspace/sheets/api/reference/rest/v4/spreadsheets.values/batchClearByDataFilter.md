---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchClearByDataFilter
root: workspace
fetched_at: 2026-04-23T15:31:29.275Z
---

# Method: spreadsheets.values.batchClearByDataFilter

Clears one or more ranges of values from a spreadsheet. For more information, see [Read, write, and search metadata](../../../../guides/metadata.md).

The caller must specify the spreadsheet ID and one or more `DataFilters`. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc.) are kept.

### HTTP request

`POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet to update.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "dataFilters": [
    {
      object (DataFilter)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataFilters[]</code></td><td><p><code>object (<code>DataFilter</code>)</code></p><p>The <code>DataFilters</code> used to determine which ranges to clear.</p></td></tr></tbody></table>

### Response body

The response when clearing a range of values selected with `DataFilters` in a spreadsheet.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "spreadsheetId": string,
  "clearedRanges": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The spreadsheet the updates were applied to.</p></td></tr><tr><td><code>clearedRanges[]</code></td><td><p><code>string</code></p><p>The ranges that were cleared, in <a href="https://developers.google.com/workspace/sheets/api/guides/concepts#cell">A1 notation</a>. If the requests are for an unbounded range or a range larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
