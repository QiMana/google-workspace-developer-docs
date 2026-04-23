---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.developerMetadata
root: workspace
fetched_at: 2026-04-23T15:31:28.469Z
---

# REST Resource: spreadsheets.developerMetadata

## REST Resource: spreadsheets.developerMetadata

## Resource: DeveloperMetadata

Developer metadata associated with a location or object in a spreadsheet. For more information, see [Read, write, and search metadata](../../../guides/metadata.md).

Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and it will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata is still associated with the row it was first associated with (what is now row 6). If the associated object is deleted then its metadata is deleted too.

JSON representation

```
{
  "metadataId": integer,
  "metadataKey": string,
  "metadataValue": string,
  "location": {
    object (DeveloperMetadataLocation)
  },
  "visibility": enum (DeveloperMetadataVisibility)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>metadataId</code></td><td><p><code>integer</code></p><p>The spreadsheet-scoped unique ID that identifies the metadata. IDs may be specified when metadata is created, otherwise one will be randomly generated and assigned. Must be positive.</p></td></tr><tr><td><code>metadataKey</code></td><td><p><code>string</code></p><p>The metadata key. There may be multiple metadata in a spreadsheet with the same key. Developer metadata must always have a key specified.</p></td></tr><tr><td><code>metadataValue</code></td><td><p><code>string</code></p><p>Data associated with the metadata's key.</p></td></tr><tr><td><code>location</code></td><td><p><code>object (<code>DeveloperMetadataLocation</code>)</code></p><p>The location where the metadata is associated.</p></td></tr><tr><td><code>visibility</code></td><td><p><code>enum (<code>DeveloperMetadataVisibility</code>)</code></p><p>The metadata visibility. Developer metadata must always have visibility specified.</p></td></tr></tbody></table>

### DeveloperMetadataLocation

A location where metadata may be associated in a spreadsheet.

JSON representation

```
{
  "locationType": enum (DeveloperMetadataLocationType),

  "spreadsheet": boolean,
  "sheetId": integer,
  "dimensionRange": {
    object (DimensionRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>locationType</code></td><td><p><code>enum (<code>DeveloperMetadataLocationType</code>)</code></p><p>The type of location this object represents. This field is read-only.</p></td></tr><tr><td colspan="2">Union field <code>location</code>. The location where metadata is associated. <code>location</code> can be only one of the following:</td></tr><tr><td><code>spreadsheet</code></td><td><p><code>boolean</code></p><p>True when metadata is associated with an entire spreadsheet.</p></td></tr><tr><td><code>sheetId</code></td><td><p><code>integer</code></p><p>The ID of the sheet when metadata is associated with an entire sheet.</p></td></tr><tr><td><code>dimensionRange</code></td><td><p><code>object (<code>DimensionRange</code>)</code></p><p>Represents the row or column when metadata is associated with a dimension. The specified <code>DimensionRange</code> must represent a single row or column. It cannot be unbounded or span multiple rows or columns.</p></td></tr></tbody></table>

### DeveloperMetadataLocationType

An enumeration of the types of locations on which developer metadata may be associated.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED</code></td><td>Default value.</td></tr><tr><td><code>ROW</code></td><td>Developer metadata associated on an entire row dimension.</td></tr><tr><td><code>COLUMN</code></td><td>Developer metadata associated on an entire column dimension.</td></tr><tr><td><code>SHEET</code></td><td>Developer metadata associated on an entire sheet.</td></tr><tr><td><code>SPREADSHEET</code></td><td>Developer metadata associated on the entire spreadsheet.</td></tr></tbody></table>

### DeveloperMetadataVisibility

An enumeration of possible metadata visibilities.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED</code></td><td>Default value.</td></tr><tr><td><code>DOCUMENT</code></td><td>Document-visible metadata is accessible from any developer project with access to the document.</td></tr><tr><td><code>PROJECT</code></td><td>Project-visible metadata is only visible to and accessible by the developer project that created the metadata.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Returns the developer metadata with the specified ID.</td></tr><tr><td><h3>search</h3></td><td>Returns all developer metadata matching the specified <code>DataFilter</code>.</td></tr></tbody></table>
