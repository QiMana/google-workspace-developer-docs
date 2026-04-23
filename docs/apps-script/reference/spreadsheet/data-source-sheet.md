---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet
root: apps-script
fetched_at: 2026-04-23T15:21:28.086Z
---

# Class DataSourceSheet

## Page Summary

- Use the DataSourceSheet class to access and modify existing data source sheets linked to a database.
- New data source sheets are created using the Spreadsheet.insertDataSourceSheet(spec) method.
- Key methods include adding and removing filters and sort specs, auto-resizing and setting column widths, retrieving sheet values, and managing data refreshes.
- You can also get the associated data source, the current execution status, or view the data source sheet as a regular sheet object.
- Specific authorization scopes are required for scripts utilizing these methods, primarily related to accessing spreadsheet data.

Access and modify existing data source sheet. To create a new data source sheet, use `Spreadsheet.insertDataSourceSheet(spec)`.

**Only use this class with data that's connected to a database.**

## Detailed documentation

### addFilter(columnName, filterCriteria)

Adds a filter applied to the data source sheet.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The name of the column to apply this filter to. |
| `filterCriteria` | `FilterCriteria` | The filter criteria to apply. |

#### Return

`DataSourceSheet` — The data source sheet, for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### asSheet()

Returns the data source sheet as a regular sheet object.

#### Return

`Sheet` — The regular sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### autoResizeColumn(columnName)

Auto resizes the width of the specified column.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The column name. |

#### Return

`DataSourceSheet` — This data source sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### autoResizeColumns(columnNames)

Auto resizes the width of the specified columns.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnNames` | `String[]` | The list of column names to update. |

#### Return

`DataSourceSheet` — This data source sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

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

`DataSourceSheet` — The data object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### forceRefreshData()

Refreshes the data of this object regardless of the current state. See `refreshData()` for more details. If you want to cancel a currently running refresh of this object, see `cancelDataRefresh()`.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source type.

#### Return

`DataSourceSheet` — The data object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getColumnWidth(columnName)

Returns the width of the specified column.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The column name. |

#### Return

`Integer|null` — The column's width, or `null` if the column uses the default width.

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

### getFilters()

Returns all filters applied to the data source sheet.

#### Return

`DataSourceSheetFilter[]` — An array of all filters applied to the data source sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSheetValues(columnName)

Returns all the values for the data source sheet for the provided column name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The data source column name to fetch values for. |

#### Return

`Object[]` — A one-dimensional array of values.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSheetValues(columnName, startRow, numRows)

Returns all the values for the data source sheet for the provided column name from the provided start row (based-1) and up to the provided `numRows`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The data source column name to fetch values for. |
| `startRow` | `Integer` | The row position to start fetching values from. |
| `numRows` | `Integer` | The number of rows to fetch. |

#### Return

`Object[]` — A one-dimensional array of values.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSortSpecs()

Gets all the sort specs in the data source sheet.

#### Return

`SortSpec[]` — A list of sort specs.

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

`DataSourceSheet` — The data object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### removeFilters(columnName)

Removes all filters applied to the data source sheet column.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The name of the column to remove filters from. |

#### Return

`DataSourceSheet` — The data source sheet, for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### removeSortSpec(columnName)

Removes the sort spec on a column in the data source sheet.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The name of the column. |

#### Return

`DataSourceSheet` — The data source sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setColumnWidth(columnName, width)

Sets the width of the specified column.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The column name. |
| `width` | `Integer` | The new width for the column. |

#### Return

`DataSourceSheet` — This data source sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setColumnWidths(columnNames, width)

Sets the width of the specified columns.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnNames` | `String[]` | The list of column names to update. |
| `width` | `Integer` | The new width for the columns. |

#### Return

`DataSourceSheet` — This data source sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setSortSpec(columnName, ascending)

Sets the sort spec on a column in the data source sheet.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The name of the column to sort. |
| `ascending` | `Boolean` | If `true`, sort the column in ascending order; if `false`, sort the column in descending order. |

#### Return

`DataSourceSheet` — The data source sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setSortSpec(columnName, sortOrder)

Sets the sort spec on a column in the data source sheet.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The name of the column to sort. |
| `sortOrder` | `SortOrder` | The sort order. |

#### Return

`DataSourceSheet` — The data source sheet, for chaining.

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
