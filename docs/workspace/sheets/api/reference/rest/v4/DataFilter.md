---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/DataFilter
root: workspace
fetched_at: 2026-04-23T15:31:27.263Z
---

# DataFilter

## DataFilter

Filter that describes what data should be selected or returned from a request. For more information, see [Read, write, and search metadata](../../../guides/metadata.md).

JSON representation

```
{

  "developerMetadataLookup": {
    object (DeveloperMetadataLookup)
  },
  "a1Range": string,
  "gridRange": {
    object (GridRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>filter</code>. The kinds of filters that may limit what data is selected. <code>filter</code> can be only one of the following:</td></tr><tr><td><code>developerMetadataLookup</code></td><td><p><code>object (<code>DeveloperMetadataLookup</code>)</code></p><p>Selects data associated with the developer metadata matching the criteria described by this <code>DeveloperMetadataLookup</code>.</p></td></tr><tr><td><code>a1Range</code></td><td><p><code>string</code></p><p>Selects data that matches the specified A1 range.</p></td></tr><tr><td><code>gridRange</code></td><td><p><code>object (<code>GridRange</code>)</code></p><p>Selects data that matches the range described by the <code>GridRange</code>.</p></td></tr></tbody></table>

## DeveloperMetadataLookup

Selects `DeveloperMetadata` that matches all of the specified fields. For example, if only a metadata ID is specified this considers the `DeveloperMetadata` with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all `DeveloperMetadata` that match the intersection of all the specified fields; any field or combination of fields may be specified.

JSON representation

```
{
  "locationType": enum (DeveloperMetadataLocationType),
  "metadataLocation": {
    object (DeveloperMetadataLocation)
  },
  "locationMatchingStrategy": enum (DeveloperMetadataLocationMatchingStrategy),
  "metadataId": integer,
  "metadataKey": string,
  "metadataValue": string,
  "visibility": enum (DeveloperMetadataVisibility)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>locationType</code></td><td><p><code>enum (<code>DeveloperMetadataLocationType</code>)</code></p><p>Limits the selected developer metadata to those entries which are associated with locations of the specified type. For example, when this field is specified as <code>ROW</code> this lookup only considers developer metadata associated on rows. If the field is left unspecified, all location types are considered. This field cannot be specified as <code>SPREADSHEET</code> when the <code>locationMatchingStrategy</code> is specified as INTERSECTING or when the <code>metadataLocation</code> is specified as a non-spreadsheet location. Spreadsheet metadata cannot intersect any other developer metadata location. This field also must be left unspecified when the <code>locationMatchingStrategy</code> is specified as EXACT.</p></td></tr><tr><td><code>metadataLocation</code></td><td><p><code>object (<code>DeveloperMetadataLocation</code>)</code></p><p>Limits the selected developer metadata to those entries associated with the specified location. This field either matches exact locations or all intersecting locations according the specified <code>locationMatchingStrategy</code>.</p></td></tr><tr><td><code>locationMatchingStrategy</code></td><td><p><code>enum (<code>DeveloperMetadataLocationMatchingStrategy</code>)</code></p><p>Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on intersecting locations is also matched. If left unspecified, this field assumes a default value of <code>INTERSECTING</code>. If this field is specified, a <code>metadataLocation</code> must also be specified.</p></td></tr><tr><td><code>metadataId</code></td><td><p><code>integer</code></p><p>Limits the selected developer metadata to that which has a matching <code>DeveloperMetadata.metadata_id</code>.</p></td></tr><tr><td><code>metadataKey</code></td><td><p><code>string</code></p><p>Limits the selected developer metadata to that which has a matching <code>DeveloperMetadata.metadata_key</code>.</p></td></tr><tr><td><code>metadataValue</code></td><td><p><code>string</code></p><p>Limits the selected developer metadata to that which has a matching <code>DeveloperMetadata.metadata_value</code>.</p></td></tr><tr><td><code>visibility</code></td><td><p><code>enum (<code>DeveloperMetadataVisibility</code>)</code></p><p>Limits the selected developer metadata to that which has a matching <code>DeveloperMetadata.visibility</code>. If left unspecified, all developer metadata visible to the requesting project is considered.</p></td></tr></tbody></table>

## DeveloperMetadataLocationMatchingStrategy

An enumeration of strategies for matching developer metadata locations.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED</code></td><td>Default value. This value must not be used.</td></tr><tr><td><code>EXACT_LOCATION</code></td><td>Indicates that a specified location should be matched exactly. For example, if row three were specified as a location this matching strategy would only match developer metadata also associated on row three. Metadata associated on other locations would not be considered.</td></tr><tr><td><code>INTERSECTING_LOCATION</code></td><td>Indicates that a specified location should match that exact location as well as any intersecting locations. For example, if row three were specified as a location this matching strategy would match developer metadata associated on row three as well as metadata associated on locations that intersect row three. If, for instance, there was developer metadata associated on column B, this matching strategy would also match that location because column B intersects row three.</td></tr></tbody></table>
