---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart
root: apps-script
fetched_at: 2026-04-23T15:21:27.571Z
---

# Class DataSourceChart

## Page Summary

- The DataSourceChart class is used to access and modify existing data source charts linked to a BigQuery database.
- You can cancel a running data refresh using `cancelDataRefresh()` or force a refresh regardless of state with `forceRefreshData()`.
- The `getDataSource()` method retrieves the linked data source and `getStatus()` provides the current data execution status.
- `refreshData()` initiates a data refresh and `waitForCompletion(timeoutInSeconds)` waits for the current execution to finish within a specified time limit.

Access and modify an existing data source chart.

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

`DataSourceChart` — The data object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### forceRefreshData()

Refreshes the data of this object regardless of the current state. See `refreshData()` for more details. If you want to cancel a currently running refresh of this object, see `cancelDataRefresh()`.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source type.

#### Return

`DataSourceChart` — The data object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSource()

Gets the data source the object is linked to.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getStatus()

Gets the data execution status of the object.

#### Return

`DataExecutionStatus` — The data execution status.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### refreshData()

Refreshes the data of the object.

Throws an exception if currently in `error` state. Use to update the specification. The method is preferred over `forceRefreshData()` to prevent unexpected edits on data source.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source type.

#### Return

`DataSourceChart` — The data object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
