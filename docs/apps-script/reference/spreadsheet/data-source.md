---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source
root: apps-script
fetched_at: 2026-04-23T15:21:26.623Z
---

# Class DataSource

## Page Summary

- The `DataSource` class is used to access and modify existing data sources connected to a database.
- You can create calculated columns and new pivot or data source tables on new sheets using this class.
- The class provides methods to retrieve columns, calculated columns, and associated data source sheets.
- You can refresh or cancel refreshes for linked data source objects and update the data source specification.
- You can wait for data executions linked to the data source to complete within a specified timeout.

Access and modify existing data source. To create a data source table with new data source, see `DataSourceTable`.

**Only use this class with data that's connected to a database.**

## Detailed documentation

### cancelAllLinkedDataSourceObjectRefreshes()

Cancels all currently running refreshes of data source objects linked to this data source.

This example shows how to cancel all the refreshes of a data source.

```
SpreadsheetApp.enableBigQueryExecution();
const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
const dataSource = spreadsheet.getDataSources()[0];
dataSource.cancelAllLinkedDataSourceObjectRefreshes();
```

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for the specific data source type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### createCalculatedColumn(name, formula)

Creates a calculated column. This method is only available for BigQuery data sources.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the calculated column. |
| `formula` | `String` | The calculated column formula. |

#### Return

`DataSourceColumn` — The newly created calculated column.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### createDataSourcePivotTableOnNewSheet()

Creates a data source pivot table from this data source in the first cell of a new sheet. As a side effect, makes the new sheet the active sheet.

#### Return

`DataSourcePivotTable` — The newly created data source pivot table.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### createDataSourceTableOnNewSheet()

Creates a data source table from this data source in the first cell of a new sheet. As a side effect, makes the new sheet the active sheet.

This method is only available for BigQuery data sources.

#### Return

`DataSourceTable` — The newly created data source table.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getCalculatedColumnByName(columnName)

Returns the calculated column in the data source that matches the column name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnName` | `String` | The name of the calculated column to get. |

#### Return

`DataSourceColumn|null` — The calculated column that matches the column name, or `null` if there is no such calculated column.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getCalculatedColumns()

Returns all the calculated columns in the data source.

Data source specs of `DataSourceType.LOOKER` type returns an empty array.

#### Return

`DataSourceColumn[]` — An array of all the calculated columns in the data source.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getColumns()

Returns all the columns in the data source.

#### Return

`DataSourceColumn[]` — An array of all the `DataSourceColumn` in the data source.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSourceSheets()

Returns the data source sheets associated with this data source.

#### Return

`DataSourceSheet[]` — An array of data source sheets.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSpec()

Gets the data source specification.

#### Return

`DataSourceSpec` — The data source specification.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### refreshAllLinkedDataSourceObjects()

Refreshes all data source objects linked to the data source.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for the specific data source type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### updateSpec(spec)

Updates the data source specification and refreshes the data source objects linked with this data source with the new specification.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for the specific data source type.

Throws an exception if the data source specification type is of a different type than the current data source type.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `spec` | `DataSourceSpec` | The data source specification to update with. |

#### Return

`DataSource` — The data source.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### updateSpec(spec, refreshAllLinkedObjects)

Updates the data source specification and refreshes the linked `data source sheets` with the new specification.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for the specific data source type.

Throws an exception if the data source specification type is of a different type than the current data source type.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `spec` | `DataSourceSpec` | The data source specification to update with. |
| `refreshAllLinkedObjects` | `Boolean` | If `true`, also refreshes all the data source objects linked with this data source. |

#### Return

`DataSource` — The data source.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### waitForAllDataExecutionsCompletion(timeoutInSeconds)

Waits until all the current executions of the linked data source objects complete, timing out after the provided number of seconds. Throws an exception if the executions are not completed when timing out, but does not cancel the data executions.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `timeoutInSeconds` | `Integer` | The time to wait for data executions, in seconds. The maximum is 300 seconds. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
