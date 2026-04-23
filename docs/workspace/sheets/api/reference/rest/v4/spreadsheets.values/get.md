---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/get
root: workspace
fetched_at: 2026-04-23T15:31:29.620Z
---

# Method: spreadsheets.values.get

Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.

### HTTP request

`GET https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet to retrieve data from.</p></td></tr><tr><td><code>range</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/workspace/sheets/api/guides/concepts#cell">A1 notation or R1C1 notation</a> of the range to retrieve values from.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>majorDimension</code></td><td><p><code>enum (<code>Dimension</code>)</code></p><p>The major dimension that results should use.</p><p>For example, if the spreadsheet data in Sheet1 is: <code>A1=1,B1=2,A2=3,B2=4</code>, then requesting <code>range=Sheet1!A1:B2?majorDimension=ROWS</code> returns <code>[[1,2],[3,4]]</code>, whereas requesting <code>range=Sheet1!A1:B2?majorDimension=COLUMNS</code> returns <code>[[1,3],[2,4]]</code>.</p></td></tr><tr><td><code>valueRenderOption</code></td><td><p><code>enum (<code>ValueRenderOption</code>)</code></p><p>How values should be represented in the output. The default render option is <code>FORMATTED_VALUE</code>.</p></td></tr><tr><td><code>dateTimeRenderOption</code></td><td><p><code>enum (<code>DateTimeRenderOption</code>)</code></p><p>How dates, times, and durations should be represented in the output. This is ignored if <code>valueRenderOption</code> is <code>FORMATTED_VALUE</code>. The default dateTime render option is <code>SERIAL_NUMBER</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`
- `https://www.googleapis.com/auth/spreadsheets.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
