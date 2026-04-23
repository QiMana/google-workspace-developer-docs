---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-table-filter
root: apps-script
fetched_at: 2026-04-23T15:21:30.151Z
---

# Class DataSourceTableFilter

## Page Summary

- Access and modify existing data source table filters using the `DataSourceTableFilter` class.
- This class is exclusively for use with data connected to a database.
- Methods allow you to get the associated data source column and table, retrieve or set the filter criteria, and remove the filter.

Access and modify an existing data source table filter. To create a new data source table filter, use .

**Only use this class with data that's connected to a database.**

## Detailed documentation

### getDataSourceColumn()

Returns the data source column this filter applies to.

#### Return

`DataSourceColumn` — The data source column.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSourceTable()

#### Return

— The data source table, to which this filter belongs.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFilterCriteria()

Returns the filter criteria for this filter.

#### Return

`FilterCriteria` — The filter criteria for this filter.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Removes this filter from the data source object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFilterCriteria(filterCriteria)

Sets the filter criteria for this filter.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `filterCriteria` | `FilterCriteria` | The filter criteria to set. |

#### Return

`DataSourceTableFilter` — The filter for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
