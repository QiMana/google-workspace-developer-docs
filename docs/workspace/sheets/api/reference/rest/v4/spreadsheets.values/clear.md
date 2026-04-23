---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/clear
root: workspace
fetched_at: 2026-04-23T15:31:29.527Z
---

# Method: spreadsheets.values.clear

Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.

### HTTP request

`POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:clear`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet to update.</p></td></tr><tr><td><code>range</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/workspace/sheets/api/guides/concepts#cell">A1 notation or R1C1 notation</a> of the values to clear.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The response when clearing a range of values in a spreadsheet.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "spreadsheetId": string,
  "clearedRange": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The spreadsheet the updates were applied to.</p></td></tr><tr><td><code>clearedRange</code></td><td><p><code>string</code></p><p>The range (in A1 notation) that was cleared. (If the request was for an unbounded range or a range larger than the bounds of the sheet, this will be the actual range that was cleared, bounded to the sheet's limits.)</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
