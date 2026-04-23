---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/update
root: workspace
fetched_at: 2026-04-23T15:31:32.208Z
---

# Method: spreadsheets.values.update

Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a `valueInputOption`.

### HTTP request

`PUT https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet to update.</p></td></tr><tr><td><code>range</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/workspace/sheets/api/guides/concepts#cell">A1 notation</a> of the values to update.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>valueInputOption</code></td><td><p><code>enum (<code>ValueInputOption</code>)</code></p><p>How the input data should be interpreted.</p></td></tr><tr><td><code>includeValuesInResponse</code></td><td><p><code>boolean</code></p><p>Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).</p></td></tr><tr><td><code>responseValueRenderOption</code></td><td><p><code>enum (<code>ValueRenderOption</code>)</code></p><p>Determines how values in the response should be rendered. The default render option is <code>FORMATTED_VALUE</code>.</p></td></tr><tr><td><code>responseDateTimeRenderOption</code></td><td><p><code>enum (<code>DateTimeRenderOption</code>)</code></p><p>Determines how dates, times, and durations in the response should be rendered. This is ignored if <code>responseValueRenderOption</code> is <code>FORMATTED_VALUE</code>. The default dateTime render option is <code>SERIAL_NUMBER</code>.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains an instance of `UpdateValuesResponse`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
