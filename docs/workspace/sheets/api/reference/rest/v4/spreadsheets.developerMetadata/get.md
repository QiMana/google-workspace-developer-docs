---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.developerMetadata/get
root: workspace
fetched_at: 2026-04-23T15:31:28.518Z
---

# Method: spreadsheets.developerMetadata.get

## Method: spreadsheets.developerMetadata.get

Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique . For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata).

### HTTP request

`GET https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet to retrieve metadata from.</p></td></tr><tr><td><code>metadataId</code></td><td><p><code>integer</code></p><p>The ID of the developer metadata to retrieve.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
