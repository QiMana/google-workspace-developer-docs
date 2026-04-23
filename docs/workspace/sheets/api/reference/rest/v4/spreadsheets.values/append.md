---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/append
root: workspace
fetched_at: 2026-04-23T15:31:29.210Z
---

# Method: spreadsheets.values.append

Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](../../../../guides/values.md#appending_values) and [sample code](../../../../samples/writing.md#append_values) for specific details of how tables are detected and data is appended.

The caller must specify the spreadsheet ID, range, and a `valueInputOption`. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.

### HTTP request

`POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:append`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet to update.</p></td></tr><tr><td><code>range</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/workspace/sheets/api/guides/concepts#cell">A1 notation</a> of a range to search for a logical table of data. Values are appended after the last row of the table.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>valueInputOption</code></td><td><p><code>enum (<code>ValueInputOption</code>)</code></p><p>How the input data should be interpreted.</p></td></tr><tr><td><code>insertDataOption</code></td><td><p><code>enum (<code>InsertDataOption</code>)</code></p><p>How the input data should be inserted.</p></td></tr><tr><td><code>includeValuesInResponse</code></td><td><p><code>boolean</code></p><p>Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.</p></td></tr><tr><td><code>responseValueRenderOption</code></td><td><p><code>enum (<code>ValueRenderOption</code>)</code></p><p>Determines how values in the response should be rendered. The default render option is <code>FORMATTED_VALUE</code>.</p></td></tr><tr><td><code>responseDateTimeRenderOption</code></td><td><p><code>enum (<code>DateTimeRenderOption</code>)</code></p><p>Determines how dates, times, and durations in the response should be rendered. This is ignored if <code>responseValueRenderOption</code> is <code>FORMATTED_VALUE</code>. The default dateTime render option is <code>SERIAL_NUMBER</code>.</p></td></tr></tbody></table>

### Request body

### Response body

The response when updating a range of values in a spreadsheet.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "spreadsheetId": string,
  "tableRange": string,
  "updates": {
    object (UpdateValuesResponse)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The spreadsheet the updates were applied to.</p></td></tr><tr><td><code>tableRange</code></td><td><p><code>string</code></p><p>The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no table was found.</p></td></tr><tr><td><code>updates</code></td><td><p><code>object (<code>UpdateValuesResponse</code>)</code></p><p>Information about the updates that were applied.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## InsertDataOption

Determines how existing data is changed when new data is input.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>OVERWRITE</code></td><td>The new data overwrites existing data in the areas it is written. (Note: adding data to the end of the sheet will still insert new rows or columns so the data can be written.)</td></tr><tr><td><code>INSERT_ROWS</code></td><td>Rows are inserted for the new data.</td></tr></tbody></table>
