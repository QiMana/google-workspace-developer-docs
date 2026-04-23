---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchGetByDataFilter
root: workspace
fetched_at: 2026-04-23T15:31:28.952Z
---

# Method: spreadsheets.values.batchGetByDataFilter

Returns one or more ranges of values that match the specified data filters. For more information, see [Read, write, and search metadata](../../../../guides/metadata.md).

The caller must specify the spreadsheet ID and one or more `DataFilters`. Ranges that match any of the data filters in the request will be returned.

### HTTP request

`POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet to retrieve data from.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "dataFilters": [
    {
      object (DataFilter)
    }
  ],
  "majorDimension": enum (Dimension),
  "valueRenderOption": enum (ValueRenderOption),
  "dateTimeRenderOption": enum (DateTimeRenderOption)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataFilters[]</code></td><td><p><code>object (<code>DataFilter</code>)</code></p><p>The data filters used to match the ranges of values to retrieve. Ranges that match any of the specified data filters are included in the response.</p></td></tr><tr><td><code>majorDimension</code></td><td><p><code>enum (<code>Dimension</code>)</code></p><p>The major dimension that results should use.</p><p>For example, if the spreadsheet data is: <code>A1=1,B1=2,A2=3,B2=4</code>, then a request that selects that range and sets <code>majorDimension=ROWS</code> returns <code>[[1,2],[3,4]]</code>, whereas a request that sets <code>majorDimension=COLUMNS</code> returns <code>[[1,3],[2,4]]</code>.</p></td></tr><tr><td><code>valueRenderOption</code></td><td><p><code>enum (<code>ValueRenderOption</code>)</code></p><p>How values should be represented in the output. The default render option is <code>FORMATTED_VALUE</code>.</p></td></tr><tr><td><code>dateTimeRenderOption</code></td><td><p><code>enum (<code>DateTimeRenderOption</code>)</code></p><p>How dates, times, and durations should be represented in the output. This is ignored if <code>valueRenderOption</code> is <code>FORMATTED_VALUE</code>. The default dateTime render option is <code>SERIAL_NUMBER</code>.</p></td></tr></tbody></table>

### Response body

The response when retrieving more than one range of values in a spreadsheet selected by `DataFilters`.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "spreadsheetId": string,
  "valueRanges": [
    {
      object (MatchedValueRange)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet the data was retrieved from.</p></td></tr><tr><td><code>valueRanges[]</code></td><td><p><code>object (<code>MatchedValueRange</code>)</code></p><p>The requested values with the list of data filters that matched them.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## MatchedValueRange

A value range that was matched by one or more data filers.

JSON representation

```
{
  "valueRange": {
    
  },
  "dataFilters": [
    {
      object (DataFilter)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>valueRange</code></td><td><p>The values matched by the <code>DataFilter</code>.</p></td></tr><tr><td><code>dataFilters[]</code></td><td><p><code>object (<code>DataFilter</code>)</code></p><p>The <code>DataFilters</code> from the request that matched the range of values.</p></td></tr></tbody></table>
