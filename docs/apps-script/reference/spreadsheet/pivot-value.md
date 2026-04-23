---
source: https://developers.google.com/apps-script/reference/spreadsheet/pivot-value
root: apps-script
fetched_at: 2026-04-23T15:21:49.991Z
---

# Class PivotValue

## Page Summary

- PivotValue allows you to access and modify value groups within pivot tables.
- You can retrieve information about a PivotValue such as its display type, formula, associated PivotTable, source data column, and summarization function.
- PivotValue provides methods to modify the display name, set the formula, change how the value is shown, and update the summarization function.
- You can remove a PivotValue from the pivot table using the `remove()` method.

Access and modify value groups in pivot tables.

## Detailed documentation

### getDisplayType()

Returns the display type describing how this pivot value is currently displayed in the table.

#### Return

`PivotValueDisplayType` — the display type for this pivot value

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFormula()

Returns the formula used to calculate this value. If this value is not a calculated field this method returns `null`.

#### Return

`String` — the pivot value for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getPivotTable()

Returns the `PivotTable` which this value belongs to.

#### Return

`PivotTable` — the pivot table this value belongs to

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSourceDataColumn()

Returns the number of the source data column the pivot value summarizes. This index is 1-based, if this group summarizes source data in column "A" of the spreadsheet this method returns `1`.

#### Return

`Integer` — The source data column number.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSourceDataSourceColumn()

Returns the data source column the pivot value summarizes. Returns `null` if the pivot table is not a {DataSourcePivotTableApi}.

#### Return

`DataSourceColumn|null` — The source data source column the pivot value summarizes.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSummarizedBy()

Returns this group’s summarization function.

#### Return

`PivotTableSummarizeFunction` — the group's summarization function

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Remove this value from the pivot table.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setDisplayName(name)

Sets the display name for this value in the pivot table.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The display name to set. |

#### Return

`PivotValue` — the pivot value for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFormula(formula)

Sets the formula used to calculate this value. If this value is not a calculated field this method results in an error.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formula` | `String` | The formula to use to calculate this value. |

#### Return

`PivotValue` — the pivot value for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### showAs(displayType)

Displays this value in the pivot table as a function of another value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `displayType` | `PivotValueDisplayType` | The way to display the values. |

#### Return

`PivotValue` — the pivot value for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### summarizeBy(summarizeFunction)

Sets the summarization function.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `summarizeFunction` | `PivotTableSummarizeFunction` | The function to use to summarize data in this value's source data column. |

#### Return

`PivotValue` — the pivot value for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
