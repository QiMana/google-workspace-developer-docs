---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchGet
root: workspace
fetched_at: 2026-04-23T15:31:29.016Z
---

# Method: spreadsheets.values.batchGet

Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.

### HTTP request

`GET https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchGet`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet to retrieve data from.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>ranges[]</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/workspace/sheets/api/guides/concepts#cell">A1 notation or R1C1 notation</a> of the range to retrieve values from.</p></td></tr><tr><td><code>majorDimension</code></td><td><p><code>enum (<code>Dimension</code>)</code></p><p>The major dimension that results should use.</p><p>For example, if the spreadsheet data is: <code>A1=1,B1=2,A2=3,B2=4</code>, then requesting <code>ranges=["A1:B2"],majorDimension=ROWS</code> returns <code>[[1,2],[3,4]]</code>, whereas requesting <code>ranges=["A1:B2"],majorDimension=COLUMNS</code> returns <code>[[1,3],[2,4]]</code>.</p></td></tr><tr><td><code>valueRenderOption</code></td><td><p><code>enum (<code>ValueRenderOption</code>)</code></p><p>How values should be represented in the output. The default render option is <code>ValueRenderOption.FORMATTED_VALUE</code>.</p></td></tr><tr><td><code>dateTimeRenderOption</code></td><td><p><code>enum (<code>DateTimeRenderOption</code>)</code></p><p>How dates, times, and durations should be represented in the output. This is ignored if <code>valueRenderOption</code> is <code>FORMATTED_VALUE</code>. The default dateTime render option is <code>SERIAL_NUMBER</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The response when retrieving more than one range of values in a spreadsheet.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "spreadsheetId": string,
  "valueRanges": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet the data was retrieved from.</p></td></tr><tr><td><code>valueRanges[]</code></td><td><p>The requested values. The order of the ValueRanges is the same as the order of the requested ranges.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`
- `https://www.googleapis.com/auth/spreadsheets.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
