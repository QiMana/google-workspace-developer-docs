---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula
root: apps-script
fetched_at: 2026-04-23T15:21:26.742Z
---

# Class DataSourceFormula

## Page Summary

- Use DataSourceFormula to access and modify existing data source formulas, but use Range.setFormula(formula) to create a new one.
- This class is specifically for data connected to a BigQuery database.
- Methods are available to cancel, force, or simply refresh data, get information about the formula and its status, and set a new formula.
- Scripts using these methods require specific authorization scopes related to spreadsheets.

Access and modify existing data source formulas. To create a new data source formula, use `Range.setFormula(formula)`.

**Only use this class with data that's connected to a BigQuery database.**

## Detailed documentation

### cancelDataRefresh()

Cancels the data refresh associated with this object if it's currently running.

This example shows how to cancel a formula refresh.

```
const spreadsheet = SpreadsheetApp.getActive();
const formula = spreadsheet.getDataSourceFormulas()[0];
// Cancel the ongoing refresh on the formula.
formula.cancelDataRefresh();
```

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source type.

#### Return

`DataSourceFormula` — The data object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### forceRefreshData()

Refreshes the data of this object regardless of the current state. See `refreshData()` for more details. If you want to cancel a currently running refresh of this object, see `cancelDataRefresh()`.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source type.

#### Return

`DataSourceFormula` — The data object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getAnchorCell()

Returns the `Range` representing the cell where this data source formula is anchored.

#### Return

`Range` — The anchor cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSource()

Gets the data source the object is linked to.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDisplayValue()

Returns the display value of the data source formula.

#### Return

`String` — The display value.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFormula()

Returns the formula for this data source formula.

#### Return

`String` — The formula.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getStatus()

Gets the data execution status of the object.

#### Return

`DataExecutionStatus` — The data execution status.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### refreshData()

Refreshes the data of the object.

Throws an exception if currently in `error` state. Use to update the specification. The method is preferred over `forceRefreshData()` to prevent unexpected edits on data source.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source type.

#### Return

`DataSourceFormula` — The data object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFormula(formula)

Updates the formula.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formula` | `String` | The new formula. |

#### Return

`DataSourceFormula` — The data source formula, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### waitForCompletion(timeoutInSeconds)

Waits until the current execution completes, timing out after the provided number of seconds. Throws an exception if the execution is not completed when timing out, but does not cancel the data execution.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `timeoutInSeconds` | `Integer` | The time to wait for data execution, in seconds. The maximum is 300 seconds. |

#### Return

`DataExecutionStatus` — The data execution status.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
