---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdateByDataFilter
root: workspace
fetched_at: 2026-04-23T15:31:29.807Z
---

# Method: spreadsheets.values.batchUpdateByDataFilter

Sets values in one or more ranges of a spreadsheet. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata).

The caller must specify the spreadsheet ID, a `valueInputOption`, and one or more `DataFilterValueRanges`.

### HTTP request

`POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter`

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
      object (DataFilterValueRange)
    }
  ],
  "includeValuesInResponse": boolean,
  "responseValueRenderOption": enum (ValueRenderOption),
  "responseDateTimeRenderOption": enum (DateTimeRenderOption)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>valueInputOption</code></td><td><p><code>enum (<code>ValueInputOption</code>)</code></p><p>How the input data should be interpreted.</p></td></tr><tr><td><code>data[]</code></td><td><p><code>object (<code>DataFilterValueRange</code>)</code></p><p>The new values to apply to the spreadsheet. If more than one range is matched by the specified <code>DataFilter</code> the specified values are applied to all of those ranges.</p></td></tr><tr><td><code>includeValuesInResponse</code></td><td><p><code>boolean</code></p><p>Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The <code>updatedData</code> field within each of the contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).</p></td></tr><tr><td><code>responseValueRenderOption</code></td><td><p><code>enum (<code>ValueRenderOption</code>)</code></p><p>Determines how values in the response should be rendered. The default render option is <code>FORMATTED_VALUE</code>.</p></td></tr><tr><td><code>responseDateTimeRenderOption</code></td><td><p><code>enum (<code>DateTimeRenderOption</code>)</code></p><p>Determines how dates, times, and durations in the response should be rendered. This is ignored if <code>responseValueRenderOption</code> is <code>FORMATTED_VALUE</code>. The default dateTime render option is <code>SERIAL_NUMBER</code>.</p></td></tr></tbody></table>

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
      object (UpdateValuesByDataFilterResponse)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The spreadsheet the updates were applied to.</p></td></tr><tr><td><code>totalUpdatedRows</code></td><td><p><code>integer</code></p><p>The total number of rows where at least one cell in the row was updated.</p></td></tr><tr><td><code>totalUpdatedColumns</code></td><td><p><code>integer</code></p><p>The total number of columns where at least one cell in the column was updated.</p></td></tr><tr><td><code>totalUpdatedCells</code></td><td><p><code>integer</code></p><p>The total number of cells updated.</p></td></tr><tr><td><code>totalUpdatedSheets</code></td><td><p><code>integer</code></p><p>The total number of sheets where at least one cell in the sheet was updated.</p></td></tr><tr><td><code>responses[]</code></td><td><p><code>object (<code>UpdateValuesByDataFilterResponse</code>)</code></p><p>The response for each range updated.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## DataFilterValueRange

A range of values whose location is specified by a `DataFilter`.

JSON representation

```
{
  "dataFilter": {
    object (DataFilter)
  },
  "majorDimension": enum (Dimension),
  "values": [
    array
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataFilter</code></td><td><p><code>object (<code>DataFilter</code>)</code></p><p>The data filter describing the location of the values in the spreadsheet.</p></td></tr><tr><td><code>majorDimension</code></td><td><p><code>enum (<code>Dimension</code>)</code></p><p>The major dimension of the values.</p></td></tr><tr><td><code>values[]</code></td><td><p><code>array (<code>ListValue</code> format)</code></p><p>The data to be written. If the provided values exceed any of the ranges matched by the data filter then the request fails. If the provided values are less than the matched ranges only the specified values are written, existing values in the matched ranges remain unaffected.</p></td></tr></tbody></table>

## UpdateValuesByDataFilterResponse

The response when updating a range of values by a data filter in a spreadsheet.

JSON representation

```
{
  "updatedRange": string,
  "updatedRows": integer,
  "updatedColumns": integer,
  "updatedCells": integer,
  "dataFilter": {
    object (DataFilter)
  },
  "updatedData": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updatedRange</code></td><td><p><code>string</code></p><p>The range (in <a href="https://developers.google.com/workspace/sheets/api/guides/concepts#cell">A1 notation</a>) that updates were applied to.</p></td></tr><tr><td><code>updatedRows</code></td><td><p><code>integer</code></p><p>The number of rows where at least one cell in the row was updated.</p></td></tr><tr><td><code>updatedColumns</code></td><td><p><code>integer</code></p><p>The number of columns where at least one cell in the column was updated.</p></td></tr><tr><td><code>updatedCells</code></td><td><p><code>integer</code></p><p>The number of cells updated.</p></td></tr><tr><td><code>dataFilter</code></td><td><p><code>object (<code>DataFilter</code>)</code></p><p>The data filter that selected the range that was updated.</p></td></tr><tr><td><code>updatedData</code></td><td><p>The values of the cells in the range matched by the dataFilter after all updates were applied. This is only included if the request's <code>includeValuesInResponse</code> field was <code>true</code>.</p></td></tr></tbody></table>
