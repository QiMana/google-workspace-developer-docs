---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-table-column
root: apps-script
fetched_at: 2026-04-23T15:21:29.724Z
---

# Class DataSourceTableColumn

## Page Summary

- `DataSourceTableColumn` allows you to access and modify existing columns in a `DataSourceTable`.
- This class should only be used with data connected to a database.
- You can get the associated data source column or remove the column from the table using the available methods.
- Using the methods of this class requires specific authorization scopes for spreadsheets.

Access and modify an existing column in a . To add columns to a data source table, use .

**Only use this class with data that's connected to a database.**

## Detailed documentation

### getDataSourceColumn()

Gets the data source column.

#### Return

`DataSourceColumn` — The data source column.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
