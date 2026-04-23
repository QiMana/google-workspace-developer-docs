---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet-filter
root: apps-script
fetched_at: 2026-04-23T15:21:29.608Z
---

# Class DataSourceSheetFilter

## Page Summary

- Access and modify existing data source sheet filters; to create new filters, use `DataSourceSheet.addFilter()`.
- This class should only be used with data connected to a database.
- Methods are available to get the applied data source column, the parent data source sheet, and the filter criteria.
- You can remove or set the filter criteria for the filter.

Access and modify an existing data source sheet filter. To create a new data source sheet filter, use .

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

### getDataSourceSheet()

#### Return

— The data source sheet, to which this filter belongs.

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

`DataSourceSheetFilter` — The filter for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
