---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/get
root: workspace
fetched_at: 2026-04-23T15:31:30.486Z
---

# Method: spreadsheets.get

Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID.

By default, data within grids is not returned. You can include grid data in one of 2 ways:

- Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP
- Set the `includeGridData` URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored

For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.

To retrieve only subsets of spreadsheet data, use the `ranges` URL parameter. Ranges are specified using [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.

### HTTP request

`GET https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The spreadsheet to request.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>ranges[]</code></td><td><p><code>string</code></p><p>The ranges to retrieve from the spreadsheet.</p></td></tr><tr><td><code>includeGridData</code></td><td><p><code>boolean</code></p><p>True if grid data should be returned. This parameter is ignored if a field mask was set in the request.</p></td></tr><tr><td><code>excludeTablesInBandedRanges</code></td><td><p><code>boolean</code></p><p>True if tables should be excluded in the banded ranges. False if not set.</p></td></tr></tbody></table>

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

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
