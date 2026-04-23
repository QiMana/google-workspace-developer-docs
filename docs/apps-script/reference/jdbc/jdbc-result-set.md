---
source: https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set
root: apps-script
fetched_at: 2026-04-23T15:20:45.959Z
---

# Class JdbcResultSet

## Page Summary

- JdbcResultSet in Google Apps Script mirrors `java.sql.ResultSet` for database result set interaction.
- It provides methods for navigation, data retrieval in various types, row manipulation, metadata, and status checks.
- Most functionalities require authorization with the `https://www.googleapis.com/auth/script.external_request` scope.
- Data can be retrieved and updated using methods that accept column index or label.
- The documentation details methods for retrieving result set properties and managing cursor movement and state.

A JDBC `ResultSet`. For documentation of this class, see [`java.sql.ResultSet `](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html)
.

## Detailed documentation

### absolute(row)

For documentation of this method, see [` java.sql.ResultSet#absolute(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#absolute\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `row` | `Integer` | The number of the row to which the cursor moves to. A positive number indicates the row number counting from the start of the result set, while a negative number indicates the counting from the end of the result set. |

#### Return

`Boolean` — `true` if the cursor is moved to a position in this result set; `false` if the cursor is before the first row or after the last row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### afterLast()

For documentation of this method, see [` java.sql.ResultSet#afterLast()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#afterLast\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### beforeFirst()

For documentation of this method, see [` java.sql.ResultSet#beforeFirst()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#beforeFirst\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### cancelRowUpdates()

For documentation of this method, see [`java.sql.ResultSet#cancelRowUpdates()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#cancelRowUpdates\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### clearWarnings()

For documentation of this method, see [` java.sql.ResultSet#clearWarnings()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#clearWarnings\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### close()

For documentation of this method, see [` java.sql.ResultSet#close()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#close\(\)).

---

### deleteRow()

For documentation of this method, see [` java.sql.ResultSet#deleteRow()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#deleteRow\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### findColumn(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#findColumn(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#findColumn\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`Integer` — The column index of the specified column.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### first()

For documentation of this method, see [` java.sql.ResultSet#first()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#first\(\)).

#### Return

`Boolean` — `true` if the cursor is on a valid row; `false` if there are no rows in the result set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getArray(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getArray(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getArray\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on). |

#### Return

`JdbcArray|null` — The value of the designated column in the current row of this result set as an array.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getArray(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getArray(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getArray\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`JdbcArray|null` — The value of the designated column in the current row of this result set as an array.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getBigDecimal(columnIndex)

For documentation of this method, see [`java.sql.ResultSet#getBigDecimal(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBigDecimal\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on). |

#### Return

`BigNumber|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getBigDecimal(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getBigDecimal(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBigDecimal\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`BigNumber|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getBlob(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getBlob(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBlob\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on). |

#### Return

`JdbcBlob|null` — The value of the designated column in the current row of this result set as a blob.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getBlob(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getBlob(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBlob\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`JdbcBlob|null` — The value of the designated column in the current row of this result set as a blob.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getBoolean(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getBoolean(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBoolean\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |

#### Return

`Boolean` — The column value; `false` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getBoolean(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getBoolean(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBoolean\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`Boolean` — The column value; `false` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getByte(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getByte(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getByte\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |

#### Return

`Byte` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getByte(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getByte(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getByte\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`Byte` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getBytes(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getBytes(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBytes\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |

#### Return

`Byte[]` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getBytes(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getBytes(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBytes\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`Byte[]` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getClob(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getClob(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getClob\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on). |

#### Return

`JdbcClob|null` — The value of the designated column in the current row of this result set as a clob.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getClob(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getClob(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getClob\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`JdbcClob|null` — The value of the designated column in the current row of this result set as a clob.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getConcurrency()

For documentation of this method, see [`java.sql.ResultSet#getConcurrency()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getConcurrency\(\)).

#### Return

`Integer` — The concurrency type, which is either `Jdbc.ResultSet.CONCUR_READ_ONLY` or `Jdbc.ResultSet.CONCUR_UPDATABLE`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getCursorName()

For documentation of this method, see [` java.sql.ResultSet#getCursorName()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getCursorName\(\)).

#### Return

`String` — The SQL name for this result set's cursor.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDate(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getDate(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |

#### Return

`JdbcDate|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDate(columnIndex, timeZone)

For documentation of this method, see [`java.sql.ResultSet#getDate(int, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate\(int,%20java.util.Calendar\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |
| `timeZone` | `String` | A time zone string used to construct [java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as `PST`, `EST`, and `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and offsets (such as `GMT+6:30`). |

#### Return

`JdbcDate|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDate(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getDate(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`JdbcDate|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDate(columnLabel, timeZone)

For documentation of this method, see [`java.sql.ResultSet#getDate(String, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate\(java.lang.String,%20java.util.Calendar\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `timeZone` | `String` | A time zone string used to construct [java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as `PST`, `EST`, and `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and offsets (such as `GMT+6:30`). |

#### Return

`JdbcDate|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDouble(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getDouble(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDouble\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |

#### Return

`Number` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDouble(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getDouble(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDouble\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`Number` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getFetchDirection()

For documentation of this method, see [`java.sql.ResultSet#getFetchDirection()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFetchDirection\(\)).

#### Return

`Integer` — The specified direction to set, which is either `Jdbc.ResultSet.FETCH_FORWARD` or `Jdbc.ResultSet.FETCH_REVERSE`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getFetchSize()

For documentation of this method, see [` java.sql.ResultSet#getFetchSize()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFetchSize\(\)).

#### Return

`Integer` — The current fetch size for this result set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getFloat(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getFloat(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFloat\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |

#### Return

`Number` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getFloat(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getFloat(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFloat\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`Number` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getHoldability()

For documentation of this method, see [`java.sql.ResultSet#getHoldability()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getHoldability\(\)).

#### Return

`Integer` — The holdability of this result set, which is either `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getInt(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getInt(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getInt\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |

#### Return

`Integer` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getInt(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getInt(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getInt\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`Integer` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getLong(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getLong(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getLong\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |

#### Return

`Integer` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getLong(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getLong(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getLong\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`Integer` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getNClob(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getNClob(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNClob\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on). |

#### Return

`JdbcClob|null` — The column value of the current row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getNClob(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getNClob(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNClob\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`JdbcClob|null` — The column value of the current row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getNString(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getNString(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNString\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on). |

#### Return

`String|null` — The column value of the current row; `null` if the value is SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getNString(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getNString(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNString\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`String|null` — The column value of the current row; `null` if the value is SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getObject(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getObject(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getObject\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on). |

#### Return

`Object` — The value of the designated column in the current row of this result set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getObject(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getObject(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getObject\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`Object` — The value of the designated column in the current row of this result set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getRef(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getRef(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRef\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on). |

#### Return

`JdbcRef|null` — The value of the designated column in the current row of this result set as a reference.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getRef(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getRef(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRef\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`JdbcRef|null` — The value of the designated column in the current row of this result set as a reference.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getRow()

For documentation of this method, see [` java.sql.ResultSet#getRow()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRow\(\)).

#### Return

`Integer` — The current row number, or 0 if there is no current row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getRowId(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getRowId(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRowId\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on). |

#### Return

`JdbcRowId|null` — The column row ID value; `null` if the value is SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getRowId(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getRowId(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRowId\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`JdbcRowId|null` — The column row ID value; `null` if the value is SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getRows(queryString)

Returns all the rows from this `ResultSet` object.

The `queryString` consists of comma-separated calls to getter methods of this `JdbcResultSet`, for example: `"getString(1), getDouble('price'), getDate(3, 'UTC')"`. Supported methods include `getString`, `getInt`, `getDouble`, `getDate`, etc. Arguments can be integer column indices (1-based) or single/double quoted string column labels.

Usage: For example, to read column 1 from result set, instead of iterating using `next()`, use `getRows`, shown in the following examples.

The following example uses `next()`:

```
while (rs.next()) {
  Logger.log(rs.getString(1));
}
```

Use `getRows()` for better performance, in the following way:

```
var rows = rs.getRows("getString(1)");
for (var i = 0; i < rows.length; i++) {
  Logger.log(rows[i][0]);
}
```

**Note:** For large results, you can use `getRows(queryString, batchSize)` for pagination.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `queryString` | `String` | The SQL query string used to generate this result set. |

#### Return

`Object[][]` — The current rows from this `ResultSet` object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getRows(queryString, batchSize)

Returns up to `batchSize` rows from this `ResultSet` object. Consecutively calling this method starts iteration from where it left in previous iteration.

Usage:

```
var rows;
do {
  rows = rs.getRows("getString(1)", 100);
  for (var i = 0; i < rows.length; i++) {
    Logger.log(rows[i][0]);
  }
} while(rows.length > 0);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `queryString` | `String` | The SQL query string used to generate this result set. |
| `batchSize` | `Integer` | The maximum number of rows to return in single call. |

#### Return

`Object[][]` — The current rows from this `ResultSet` object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSQLXML(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getSQLXML(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getSQLXML\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on). |

#### Return

`JdbcSQLXML|null` — The column value of the current row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSQLXML(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getSQLXML(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getSQLXML\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`JdbcSQLXML|null` — The column value of the current row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getShort(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getShort(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getShort\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |

#### Return

`Integer` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getShort(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getShort(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getShort\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`Integer` — The column value; 0 if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getStatement()

For documentation of this method, see [` java.sql.ResultSet#getStatement()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getStatement\(\)).

#### Return

`JdbcStatement|null` — The statement that produced this result set, or `null` if the result set was produced some other way.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getString(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getString(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getString\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |

#### Return

`String|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getString(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getString(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getString\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`String|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getTime(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getTime(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |

#### Return

`JdbcTime|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getTime(columnIndex, timeZone)

For documentation of this method, see [`java.sql.ResultSet#getTime(int, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime\(int,%20java.util.Calendar\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve (the first column is 1, the second is 2, and so on). |
| `timeZone` | `String` | A time zone string used to construct [java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as `PST`, `EST`, and `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and offsets (such as `GMT+6:30`). |

#### Return

`JdbcTime|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getTime(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getTime(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`JdbcTime|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getTime(columnLabel, timeZone)

For documentation of this method, see [`java.sql.ResultSet#getTime(String, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime\(java.lang.String,%20java.util.Calendar\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `timeZone` | `String` | A time zone string used to construct [java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as `PST`, `EST`, and `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and offsets (such as `GMT+6:30`). |

#### Return

`JdbcTime|null` — The column value; `null` if the value was SQL `NULL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getType()

For documentation of this method, see [` java.sql.ResultSet#getType()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getType\(\)).

#### Return

`Integer` — The type of this result set, which is one of `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getURL(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#getURL(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getURL\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on). |

#### Return

`String` — The URL value of the designated column in the current row of this result set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getURL(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#getURL(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getURL\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Return

`String` — The URL value of the designated column in the current row of this result set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getWarnings()

Returns the current set of warnings reported by the driver.

#### Return

`String[]` — The current set of warnings.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### insertRow()

For documentation of this method, see [` java.sql.ResultSet#insertRow()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#insertRow\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isAfterLast()

For documentation of this method, see [` java.sql.ResultSet#isAfterLast()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isAfterLast\(\)).

#### Return

`Boolean` — `true` if the cursor is after the last row; `false` if it is in any other position or if the result set contains no rows.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isBeforeFirst()

For documentation of this method, see [` java.sql.ResultSet#isBeforeFirst()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isBeforeFirst\(\)).

#### Return

`Boolean` — `true` if the cursor is before the first row; `false` if it is in any other position or if the result set contains no rows.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isClosed()

For documentation of this method, see [` java.sql.ResultSet#isClosed()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isClosed\(\)).

#### Return

`Boolean` — `true` if this result set is closed; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isFirst()

For documentation of this method, see [` java.sql.ResultSet#isFirst()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isFirst\(\)).

#### Return

`Boolean` — `true` if the cursor is on the first row; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isLast()

For documentation of this method, see [` java.sql.ResultSet#isLast()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isLast\(\)).

#### Return

`Boolean` — `true` if the cursor is on the last row; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### last()

For documentation of this method, see [` java.sql.ResultSet#first()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#last\(\)).

#### Return

`Boolean` — `true` if the cursor is on a valid row; `false` if there are no rows in the result set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### moveToCurrentRow()

For documentation of this method, see [`java.sql.ResultSet#moveToCurrentRow()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#moveToCurrentRow\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### moveToInsertRow()

For documentation of this method, see [`java.sql.ResultSet#moveToInsertRow()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#moveToInsertRow\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### next()

For documentation of this method, see [` java.sql.ResultSet#next()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#next\(\)).

#### Return

`Boolean` — `true` if the new current row is valid; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### previous()

For documentation of this method, see [` java.sql.ResultSet#previous()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#previous\(\)).

#### Return

`Boolean` — `true` if the cursor is on a valid row; `false` if the cursor is positioned before the first row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### refreshRow()

For documentation of this method, see [` java.sql.ResultSet#refreshRow()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#refreshRow\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### relative(rows)

For documentation of this method, see [` java.sql.ResultSet#relative(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#relative\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rows` | `Integer` | The number row steps to move the cursor. A positive number moves the cursor forward, while a negative number moves the cursor backward. |

#### Return

`Boolean` — `true` if the cursor is on a row; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### rowDeleted()

For documentation of this method, see [` java.sql.ResultSet#rowDeleted()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowDeleted\(\)).

#### Return

`Boolean` — `true` if the current row was visibly deleted; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### rowInserted()

For documentation of this method, see [` java.sql.ResultSet#rowInserted()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowInserted\(\)).

#### Return

`Boolean` — `true` if the current row was visibly inserted; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### rowUpdated()

For documentation of this method, see [` java.sql.ResultSet#rowUpdated()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowUpdated\(\)).

#### Return

`Boolean` — `true` if the current row was visibly updated; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setFetchDirection(direction)

For documentation of this method, see [`java.sql.ResultSet#setFetchDirection(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#setFetchDirection\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `direction` | `Integer` | The specified direction to set, which is either `Jdbc.ResultSet.FETCH_FORWARD` or `Jdbc.ResultSet.FETCH_REVERSE`. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setFetchSize(rows)

For documentation of this method, see [`java.sql.ResultSet#setFetchSize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#setFetchSize\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rows` | `Integer` | The number of rows to fetch. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateArray(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateArray(int, Array)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateArray\(int,%20java.sql.Array\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `JdbcArray` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateArray(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateArray(String, Array)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateArray\(java.lang.String,%20java.sql.Array\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `JdbcArray` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateBigDecimal(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateBigDecimal(int, BigDecimal)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBigDecimal\(int,%20java.math.BigDecimal\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `BigNumber` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateBigDecimal(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateBigDecimal(String, BigDecimal)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBigDecimal\(java.lang.String,%20java.math.BigDecimal\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `BigNumber` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateBlob(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateBlob(int, Blob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBlob\(int,%20java.sql.Blob\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `JdbcBlob` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateBlob(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateRef(String, Blob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBlob\(java.lang.String,%20java.sql.Blob\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `JdbcBlob` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateBoolean(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateBoolean(int, boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBoolean\(int,%20boolean\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `Boolean` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateBoolean(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateBoolean(String, boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBoolean\(java.lang.String,%20boolean\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `Boolean` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateByte(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateByte(int, byte)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateByte\(int,%20byte\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `Byte` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateByte(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateByte(String, byte)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateByte\(java.lang.String,%20byte\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `Byte` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateBytes(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateBytes(int, byte[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBytes\(int,%20byte[]\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `Byte[]` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateBytes(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateBytes(String, byte[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBytes\(java.lang.String,%20byte[]\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `Byte[]` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateClob(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateClob(int, Clob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateClob\(int,%20java.sql.Clob\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `JdbcClob` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateClob(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateClob(String, Clob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateClob\(java.lang.String,%20java.sql.Clob\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `JdbcClob` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateDate(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateDate(int, Date)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDate\(int,%20java.sql.Date\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `JdbcDate` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateDate(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateDate(String, Date)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDate\(java.lang.String,%20java.sql.Date\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `JdbcDate` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateDouble(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateDouble(int, double)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDouble\(int,%20double\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `Number` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateDouble(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateDouble(String, double)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDouble\(java.lang.String,%20double\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `Number` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateFloat(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateFloat(int, float)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateFloat\(int,%20float\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `Number` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateFloat(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateFloat(String, float)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateFloat\(java.lang.String,%20float\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `Number` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateInt(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateInt(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateInt\(int,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `Integer` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateInt(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateInt(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateInt\(java.lang.String,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `Integer` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateLong(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateLong(int, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateLong\(int,%20long\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `Integer` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateLong(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateLong(String, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateLong\(java.lang.String,%20long\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `Integer` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateNClob(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateNClob(int, NClob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNClob\(int,%20java.sql.NClob\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `JdbcClob` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateNClob(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateNClob(String, NClob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNClob\(java.lang.String,%20java.sql.NClob\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `JdbcClob` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateNString(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateNString(int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNString\(int,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `String` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateNString(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateNString(String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNString\(java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `String` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateNull(columnIndex)

For documentation of this method, see [` java.sql.ResultSet#updateNull(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNull\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateNull(columnLabel)

For documentation of this method, see [`java.sql.ResultSet#updateNull(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNull\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateObject(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateObject(int, Object)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject\(int,%20java.lang.Object\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `Object` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateObject(columnIndex, x, scaleOrLength)

For documentation of this method, see [`java.sql.ResultSet#updateObject(int, Object, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject\(int,%20java.lang.Object,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `Object` | The new column value. |
| `scaleOrLength` | `Integer` | The number of digits after the decimal for `BigDecimal` types, or the length of data for `InputStream` or `Reader` types. Ignored for all other types. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateObject(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateObject(String, Object)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject\(java.lang.String,%20java.lang.Object\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `Object` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateObject(columnLabel, x, scaleOrLength)

For documentation of this method, see [`java.sql.ResultSet#updateObject(String, Object, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject\(java.lang.String,%20java.lang.Object,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `Object` | The new column value. |
| `scaleOrLength` | `Integer` | The number of digits after the decimal for `BigDecimal` types, or the length of data for `InputStream` or `Reader` types. Ignored for all other types. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateRef(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateRef(int, Ref)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRef\(int,%20java.sql.Ref\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `JdbcRef` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateRef(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateRef(String, Ref)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRef\(java.lang.String,%20java.sql.Ref\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `JdbcRef` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateRow()

For documentation of this method, see [` java.sql.ResultSet#updateRow()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRow\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateRowId(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateRowId(int, RowId)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRowId\(int,%20java.sql.RowId\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `JdbcRowId` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateRowId(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateRowId(String, RowId)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRowId\(java.lang.String,%20java.sql.RowId\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `JdbcRowId` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateSQLXML(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateSQLXML(int, SQLXML)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateSQLXML\(int,%20java.sql.SQLXML\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `JdbcSQLXML` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateSQLXML(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateSQLXML(String, SQLXML)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateSQLXML\(java.lang.String,%20java.sql.SQLXML\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `JdbcSQLXML` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateShort(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateShort(int, short)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateShort\(int,%20short\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `Integer` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateShort(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateShort(String, short)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateShort\(java.lang.String,%20short\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `Integer` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateString(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateString(int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateString\(int,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `String` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateString(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateString(String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateString\(java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `String` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateTime(columnIndex, x)

For documentation of this method, see [`java.sql.ResultSet#updateTime(int, Time)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTime\(int,%20java.sql.Time\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to update (the first column is 1, the second is 2, and so on). |
| `x` | `JdbcTime` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updateTime(columnLabel, x)

For documentation of this method, see [`java.sql.ResultSet#updateTime(String, Time)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTime\(java.lang.String,%20java.sql.Time\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnLabel` | `String` | The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column. |
| `x` | `JdbcTime` | The new column value. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### wasNull()

For documentation of this method, see [` java.sql.ResultSet#wasNull()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#wasNull\(\)).

#### Return

`Boolean` — `true` if the last column read was SQL `NULL`; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`
