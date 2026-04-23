---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.sheets/copyTo
root: workspace
fetched_at: 2026-04-23T15:31:28.742Z
---

# Method: spreadsheets.sheets.copyTo

Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.

### HTTP request

`POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet containing the sheet to copy.</p></td></tr><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The ID of the sheet to copy.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "destinationSpreadsheetId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>destinationSpreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet to copy the sheet to.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains an instance of `SheetProperties`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
