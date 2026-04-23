---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.developerMetadata/search
root: workspace
fetched_at: 2026-04-23T15:31:28.626Z
---

# Method: spreadsheets.developerMetadata.search

Returns all developer metadata matching the specified `DataFilter`. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata).

If the provided `DataFilter` represents a `DeveloperMetadataLookup` object, this will return all DeveloperMetadata entries selected by it. If the `DataFilter` represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.

### HTTP request

`POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/developerMetadata:search`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the spreadsheet to retrieve metadata from.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "dataFilters": [
    {
      object (DataFilter)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dataFilters[]</code></td><td><p><code>object (<code>DataFilter</code>)</code></p><p>The data filters describing the criteria used to determine which DeveloperMetadata entries to return. DeveloperMetadata matching any of the specified filters are included in the response.</p></td></tr></tbody></table>

### Response body

JSON representation

```
{
  "matchedDeveloperMetadata": [
    {
      object (MatchedDeveloperMetadata)
    }
  ]
}
```

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## MatchedDeveloperMetadata

JSON representation

```
{
  "developerMetadata": {
    
  },
  "dataFilters": [
    {
      object (DataFilter)
    }
  ]
}
```
