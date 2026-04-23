---
source: https://developers.google.com/apps-script/reference/spreadsheet/pivot-filter
root: apps-script
fetched_at: 2026-04-23T15:21:44.451Z
---

# Class PivotFilter

## Page Summary

- PivotFilter is used to access and modify pivot table filters.
- You can get or set the filter criteria for a pivot filter.
- You can retrieve the pivot table or source data column associated with the filter.
- A pivot filter can be removed from the pivot table.

Access and modify pivot table filters.

## Detailed documentation

### getFilterCriteria()

Returns the filter criteria for this pivot filter.

#### Return

`FilterCriteria` — The filter criteria for this pivot filter.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getPivotTable()

Returns the `PivotTable` that this filter belongs to.

#### Return

`PivotTable` — The pivot table this filter belongs to.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSourceDataColumn()

Returns the number of the source data column this filter operates on. These indices are 1-based, for example if this filter applies to data in column A of the spreadsheet this method returns "1."

#### Return

`Integer` — The number of the source data column this filter applies to.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSourceDataSourceColumn()

Returns the data source column the filter operates on. Returns `null` if the pivot table is not a {DataSourcePivotTableApi}.

#### Return

`DataSourceColumn|null` — The data source column the filter operates on.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Removes this pivot filter from the pivot table.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFilterCriteria(filterCriteria)

Sets the filter criteria for this pivot filter.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `filterCriteria` | `FilterCriteria` | The filter criteria to set. |

#### Return

`PivotFilter` — The pivot filter for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
