---
source: https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-location
root: apps-script
fetched_at: 2026-04-23T15:21:31.363Z
---

# Class DeveloperMetadataLocation

## Page Summary

- The DeveloperMetadataLocation class provides access to information about the location of developer metadata within a spreadsheet.
- You can retrieve the location type of the metadata using the `getLocationType()` method.
- Methods like `getColumn()`, `getRow()`, `getSheet()`, and `getSpreadsheet()` return the specific location (Range, Sheet, or Spreadsheet) based on the metadata's location type, or `null` if it doesn't match.
- Accessing developer metadata location information typically requires authorization with spreadsheet-related scopes.

Access developer metadata location information.

## Detailed documentation

### getColumn()

Returns the `Range` for the column location of this metadata, or `null` if the location type is not `DeveloperMetadataLocationType.COLUMN`.

#### Return

`Range|null` — The `Range` for the column location of this metadata, or `null` if the location type is not `DeveloperMetadataLocationType.COLUMN`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getLocationType()

Gets the type of location.

#### Return

`DeveloperMetadataLocationType` — The location type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRow()

Returns the `Range` for the row location of this metadata, or `null` if the location type is not `DeveloperMetadataLocationType.ROW`.

#### Return

`Range|null` — The `Range` for the row location of this metadata, or `null` if the location type is not `DeveloperMetadataLocationType.ROW`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSheet()

Returns the `Sheet` location of this metadata, or `null` if the location type is not `DeveloperMetadataLocationType.SHEET`.

#### Return

`Sheet|null` — The `Sheet` location of this metadata, or `null` if the location type is not `DeveloperMetadataLocationType.SHEET`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSpreadsheet()

Returns the `Spreadsheet` location of this metadata, or `null` if the location type is not `DeveloperMetadataLocationType.SPREADSHEET`.

#### Return

`Spreadsheet|null` — The `Spreadsheet` location of this metadata, or `null` if the location type is not `DeveloperMetadataLocationType.SPREADSHEET`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
