---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/getByDataFilter
root: workspace
fetched_at: 2026-04-23T15:31:32.273Z
---

# Method: spreadsheets.getByDataFilter

Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata).

This method differs from spreadsheets.get in that it allows selecting which subsets of spreadsheet data to return by specifying a `dataFilters` parameter. Multiple `DataFilters` can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters.

By default, data within grids is not returned. You can include grid data in one of two ways:

- Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP.
- Set the `includeGridData` parameter to `true`. If a field mask is set, the `includeGridData` parameter is ignored.

For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.

### HTTP request

`POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}:getByDataFilter`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The spreadsheet to request.</p></td></tr></tbody></table>

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
  "includeGridData": boolean,
  "excludeTablesInBandedRanges": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataFilters[]</code></td><td><p><code>object (<code>DataFilter</code>)</code></p><p>The <code>DataFilters</code> used to select which ranges to retrieve from the spreadsheet.</p></td></tr><tr><td><code>includeGridData</code></td><td><p><code>boolean</code></p><p>True if grid data should be returned. This parameter is ignored if a field mask was set in the request.</p></td></tr><tr><td><code>excludeTablesInBandedRanges</code></td><td><p><code>boolean</code></p><p>True if tables should be excluded in the banded ranges. False if not set.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
