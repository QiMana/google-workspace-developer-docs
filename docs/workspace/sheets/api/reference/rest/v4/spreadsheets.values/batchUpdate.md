---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate
root: workspace
fetched_at: 2026-04-23T15:31:29.370Z
---

# Method: spreadsheets.values.batchUpdate

Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a `valueInputOption`, and one or more .

### HTTP request

`POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchUpdate`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet to update.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "valueInputOption": enum (ValueInputOption),
  "data": [
    {
      
    }
  ],
  "includeValuesInResponse": boolean,
  "responseValueRenderOption": enum (ValueRenderOption),
  "responseDateTimeRenderOption": enum (DateTimeRenderOption)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>valueInputOption</code></td><td><p><code>enum (<code>ValueInputOption</code>)</code></p><p>How the input data should be interpreted.</p></td></tr><tr><td><code>data[]</code></td><td><p>The new values to apply to the spreadsheet.</p></td></tr><tr><td><code>includeValuesInResponse</code></td><td><p><code>boolean</code></p><p>Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The <code>updatedData</code> field within each of the <code>BatchUpdateValuesResponse.responses</code> contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).</p></td></tr><tr><td><code>responseValueRenderOption</code></td><td><p><code>enum (<code>ValueRenderOption</code>)</code></p><p>Determines how values in the response should be rendered. The default render option is <code>FORMATTED_VALUE</code>.</p></td></tr><tr><td><code>responseDateTimeRenderOption</code></td><td><p><code>enum (<code>DateTimeRenderOption</code>)</code></p><p>Determines how dates, times, and durations in the response should be rendered. This is ignored if <code>responseValueRenderOption</code> is <code>FORMATTED_VALUE</code>. The default dateTime render option is <code>SERIAL_NUMBER</code>.</p></td></tr></tbody></table>

### Response body

The response when updating a range of values in a spreadsheet.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "spreadsheetId": string,
  "totalUpdatedRows": integer,
  "totalUpdatedColumns": integer,
  "totalUpdatedCells": integer,
  "totalUpdatedSheets": integer,
  "responses": [
    {
      object (UpdateValuesResponse)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The spreadsheet the updates were applied to.</p></td></tr><tr><td><code>totalUpdatedRows</code></td><td><p><code>integer</code></p><p>The total number of rows where at least one cell in the row was updated.</p></td></tr><tr><td><code>totalUpdatedColumns</code></td><td><p><code>integer</code></p><p>The total number of columns where at least one cell in the column was updated.</p></td></tr><tr><td><code>totalUpdatedCells</code></td><td><p><code>integer</code></p><p>The total number of cells updated.</p></td></tr><tr><td><code>totalUpdatedSheets</code></td><td><p><code>integer</code></p><p>The total number of sheets where at least one cell in the sheet was updated.</p></td></tr><tr><td><code>responses[]</code></td><td><p><code>object (<code>UpdateValuesResponse</code>)</code></p><p>One UpdateValuesResponse per requested range, in the same order as the requests appeared.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
