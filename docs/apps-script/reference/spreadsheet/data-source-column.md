---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-column
root: apps-script
fetched_at: 2026-04-23T15:21:27.078Z
---

# Class DataSourceColumn

## Page Summary

- Use the DataSourceColumn class to access and modify data source columns that are connected to a database.
- You can retrieve the associated data source, formula, and name of a data source column.
- You can check if a column has an array dependency or is a calculated column.
- For calculated columns, you can remove the column or set its formula and name.
- Scripts using these methods may require specific authorization scopes.

Access and modify a data source column.

**Only use this class with data that's connected to a database.**

## Detailed documentation

### getDataSource()

Gets the data source associated with the data source column.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFormula()

Gets the formula for the data source column. Returns an empty string if the data source column is not a `calculated column`.

#### Return

`String` — The formula.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getName()

Gets the name for the data source column.

#### Return

`String` — The column name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### hasArrayDependency()

Returns whether the column has an array dependency.

#### Return

`Boolean` — `true` if the column has an array dependency, or `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isCalculatedColumn()

Returns whether the column is a calculated column.

#### Return

`Boolean` — `true` if the column is a calculated column, or `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Removes the data source column.

Only supported for `calculated columns`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFormula(formula)

Sets the formula for the data source column.

Only supported for `calculated columns`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formula` | `String` | The new formula. |

#### Return

`DataSourceColumn` — The data source column, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setName(name)

Sets the name of the data source column.

Only supported for `calculated columns`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name to set. |

#### Return

`DataSourceColumn` — The data source column, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
