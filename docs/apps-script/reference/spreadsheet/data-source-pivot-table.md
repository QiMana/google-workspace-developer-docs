---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table
root: apps-script
fetched_at: 2026-04-23T15:21:26.983Z
---

# Class DataSourcePivotTable

## Page Summary

- Use this class to access and modify existing data source pivot tables, exclusively with data connected to a database.
- You can add column groups, filters, and pivot values to the data source pivot table.
- Methods are available to refresh, force refresh, cancel refresh, and check the status of the data source pivot table.
- The `asPivotTable()` method allows you to return the data source pivot table as a regular pivot table object.

Access and modify existing data source pivot table. To create a new data source pivot table, use `Range.createDataSourcePivotTable(dataSource)`.

**Only use this class with data that's connected to a database.**

## Detailed documentation

### addColumnGroup(columnName)

Adds a new pivot column group based on the specified data source column.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The data source column name the pivot group is based on. |

#### Return

`PivotGroup` — The new pivot group.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addFilter(columnName, filterCriteria)

Adds a new filter based on the specified data source column with the specified filter criteria.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The data source column name the filter is based on. |
| `filterCriteria` | `FilterCriteria` | The criteria the filter uses. |

#### Return

`PivotFilter` — The new filter.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addPivotValue(columnName)

Adds a new pivot value based on the specified data source column without any summarize function. For Looker measures only.

The following code shows how you can add a Looker measure as a pivot value.

```
// TODO(developer): Replace with your spreadsheet ID which has a Looker data
// source.
const spreadsheet = SpreadsheetApp.openById('abcd1234');
const datasource = spreadsheet.getDataSources()[0];
const pivotTable = datasource.createDataSourcePivotTableOnNewSheet();

pivotTable.addPivotValue('columnName');
```

This method is only available for Looker data sources.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The data source column name the pivot value is based on. |

#### Return

`PivotValue` — The new pivot value.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addPivotValue(columnName, summarizeFunction)

Adds a new pivot value based on the specified data source column with the specified summarize function.

In order to add pivot values for Looker measures, use `addPivotValue(columnName)`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The data source column name the pivot value is based on. |
| `summarizeFunction` | `PivotTableSummarizeFunction` | The summarize function the pivot value uses. |

#### Return

`PivotValue` — The new pivot value.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addRowGroup(columnName)

Adds a new pivot row group based on the specified data source column.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The data source column name the pivot group is based on. |

#### Return

`PivotGroup` — The new pivot group.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### asPivotTable()

Returns the data source pivot table as a regular pivot table object.

#### Return

`PivotTable` — The pivot table.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

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

`DataSourcePivotTable` — The data object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### forceRefreshData()

Refreshes the data of this object regardless of the current state. See `refreshData()` for more details. If you want to cancel a currently running refresh of this object, see `cancelDataRefresh()`.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source type.

#### Return

`DataSourcePivotTable` — The data object.

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

`DataSourcePivotTable` — The data object.

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
