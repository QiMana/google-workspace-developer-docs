---
source: https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata
root: apps-script
fetched_at: 2026-04-23T15:21:30.947Z
---

# Class DeveloperMetadata

## Page Summary

- Developer metadata can be accessed and modified within a spreadsheet.
- New developer metadata can be created using methods on Range, Sheet, or Spreadsheet objects.
- Developer metadata has properties such as ID, key, location, value, and visibility.
- Developer metadata can be moved to a different column, row, sheet, or the top-level spreadsheet.
- Developer metadata can be removed and its key, value, or visibility can be set.

Access and modify developer metadata. To create new developer metadata use `Range.addDeveloperMetadata(key)`, `Sheet.addDeveloperMetadata(key)`, or `Spreadsheet.addDeveloperMetadata(key)`.

## Detailed documentation

### getId()

Returns the unique ID associated with this developer metadata.

#### Return

`Integer` — The unique ID associated with this developer metadata.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getKey()

Returns the key associated with this developer metadata.

#### Return

`String` — The key associated with this developer metadata.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getLocation()

Returns the location of this developer metadata.

#### Return

`DeveloperMetadataLocation` — The location of this developer metadata.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getValue()

Returns the value associated with this developer metadata, or `null` if this metadata has no value.

#### Return

`String` — The value associated with this developer metadata, or `null` if this metadata has no value.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getVisibility()

Returns the visibility of this developer metadata.

#### Return

`DeveloperMetadataVisibility` — The visibility of this developer metadata.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### moveToColumn(column)

Moves this developer metadata to the specified column. If the specified range does not represent a single column this throws an exception.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Range` | The range representing the column that is the new location for this developer metadata. |

#### Return

`DeveloperMetadata` — The developer metadata, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### moveToRow(row)

Moves this developer metadata to the specified row. If the specified range does not represent a single row this throws an exception.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `row` | `Range` | The range representing the row that is the new location for this developer metadata. |

#### Return

`DeveloperMetadata` — The developer metadata, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### moveToSheet(sheet)

Moves this developer metadata to the specified sheet.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sheet` | `Sheet` | The sheet that is the new location for this developer metata. |

#### Return

`DeveloperMetadata` — The developer metadata, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### moveToSpreadsheet()

Moves this developer metadata to the top-level spreadsheet.

#### Return

`DeveloperMetadata` — The developer metadata, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Deletes this metadata.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setKey(key)

Sets the key of this developer metadata to the specified value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The new key to set for this metadata. |

#### Return

`DeveloperMetadata` — The developer metadata, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setValue(value)

Sets the value associated with this developer metadata to the specified value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The new value to set for this metadata. |

#### Return

`DeveloperMetadata` — The developer metadata, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
