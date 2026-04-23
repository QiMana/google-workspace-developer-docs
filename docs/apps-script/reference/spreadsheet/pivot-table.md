---
source: https://developers.google.com/apps-script/reference/spreadsheet/pivot-table
root: apps-script
fetched_at: 2026-04-23T15:21:49.798Z
---

# Class PivotTable

## Page Summary

- Pivot tables can be accessed and modified using various methods.
- Methods are available to add calculated pivot values, column groups, filters, and pivot values.
- You can retrieve information about the pivot table's anchor cell, column groups, filters, pivot values, row groups, source data range, and values display orientation.
- Pivot tables can be deleted using the `remove()` method.
- The display orientation of pivot table values can be set using the `setValuesDisplayOrientation()` method.

Access and modify pivot tables.

## Detailed documentation

### addCalculatedPivotValue(name, formula)

Creates a new pivot value in the pivot table calculated from the specified `formula` with the specified `name`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name for this calculated pivot value. |
| `formula` | `String` | The formula used to calculate this value. |

#### Return

`PivotValue` — the newly created `PivotValue`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addColumnGroup(sourceDataColumn)

Defines a new pivot column grouping in the pivot table. The specified `sourceDataColumn` indicates the column in the source data this grouping is based on.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sourceDataColumn` | `Integer` | The number of the column this group summarizes. This index represents the absolute number of the column in the spreadsheet; `1` representing column "A," `2` representing column B, etc. |

#### Return

`PivotGroup` — the newly created `PivotGroup`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addFilter(sourceDataColumn, filterCriteria)

Creates a new pivot filter for the pivot table. The specified `sourceDataColumn` indicates the column in the source data this filter operates on.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sourceDataColumn` | `Integer` | The number of the column this group summarizes. This index represents the absolute number of the column in the spreadsheet; `1` representing column "A," `2` representing column B, etc. |
| `filterCriteria` | `FilterCriteria` | The filter criteria used to perform the filtering. |

#### Return

`PivotFilter` — the newly created `PivotFilter`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addPivotValue(sourceDataColumn, summarizeFunction)

Defines a new pivot value in the pivot table with the specified `summarizeFunction`. The specified `sourceDataColumn` indicates the column in the source data this value is based on.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sourceDataColumn` | `Integer` | The number of the column this group summarizes. This index represents the absolute number of the column in the spreadsheet; `1` representing column "A," `2` representing column B, etc. |
| `summarizeFunction` | `PivotTableSummarizeFunction` |  |

#### Return

`PivotValue` — the newly created `PivotValue`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addRowGroup(sourceDataColumn)

Defines a new pivot row grouping in the pivot table. The specified `sourceDataColumn` indicates the column in the source data this grouping is based on.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sourceDataColumn` | `Integer` | The number of the column this group summarizes. This index represents the absolute number of the column in the spreadsheet; `1` representing column "A," `2` representing column B, etc. |

#### Return

`PivotGroup` — the newly created `PivotGroup`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### asDataSourcePivotTable()

Returns the pivot table as a data source pivot table if the pivot table is linked to a `DataSource`, or `null` otherwise.

#### Return

`DataSourcePivotTable|null` — A data source pivot table.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getAnchorCell()

Returns the `Range` representing the cell where this pivot table is anchored.

#### Return

`Range` — this pivot table's anchor cell

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getColumnGroups()

Returns an ordered list of the column groups in this pivot table.

#### Return

`PivotGroup[]` — the column groups in this pivot table

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFilters()

Returns an ordered list of the filters in this pivot table.

#### Return

`PivotFilter[]` — the filters in this pivot table

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getPivotValues()

Returns an ordered list of the pivot values in this pivot table.

#### Return

`PivotValue[]` — the pivot values in this pivot table

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRowGroups()

Returns an ordered list of the row groups in this pivot table.

#### Return

`PivotGroup[]` — the row groups in this pivot table

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSourceDataRange()

Returns the source data range on which the pivot table is constructed.

#### Return

`Range` — The source data range of this pivot table.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getValuesDisplayOrientation()

Returns whether values are displayed as rows or columns.

#### Return

`Dimension` — whether values are displayed as rows or columns

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Deletes this pivot table. Further operations on this pivot table results in an error.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setValuesDisplayOrientation(dimension)

Sets the layout of this pivot table to display values as columns or rows.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dimension` | `Dimension` | The dimension indicating how to display pivot values. |

#### Return

`PivotTable` — the pivot table for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
