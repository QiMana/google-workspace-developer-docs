---
source: https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data
root: apps-script
fetched_at: 2026-04-23T15:20:44.212Z
---

# Class JdbcResultSetMetaData

## Page Summary

- JdbcResultSetMetaData provides metadata about a JDBC ResultSet.
- It includes methods to retrieve information about columns such as their name, type, size, and nullability.
- You can determine properties like whether a column is auto-incrementing, case-sensitive, or writable.
- Each method is linked to its corresponding documentation in `java.sql.ResultSetMetaData`.
- Most methods require authorization with the `https://www.googleapis.com/auth/script.external_request` scope.

A JDBC `ResultSetMetaData`. For documentation of this class, see [` java.sql.ResultSetMetaData`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html).

## Detailed documentation

### getCatalogName(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#getCatalogName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getCatalogName\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`String` — The catalog name for the table in the designated column, or an empty string if not applicable.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getColumnClassName(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#getColumnClassName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnClassName\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`String` — The fully-qualified name of the class of the designated column's values.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getColumnCount()

For documentation of this method, see [`java.sql.ResultSetMetaData#getColumnCount()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnCount\(\)).

#### Return

`Integer` — The number of columns in this result set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getColumnDisplaySize(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#getColumnDisplaySize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnDisplaySize\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Integer` — The maximum number of characters allowed as the width of the designated columns.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getColumnLabel(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#getColumnLabel(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnLabel\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`String` — The designated column's suggested title, usually specifed by a SQL `AS` clause. Returns the same as `getColumnName(column)` if an `AS` is not specified.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getColumnName(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#getColumnName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnName\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`String` — The designated column's name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getColumnType(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#getColumnType(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnType\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Integer` — The [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) of the designated column.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getColumnTypeName(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#getColumnTypeName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnTypeName\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`String` — The designated column's database-specific type name. Returns the fully-qualifed type name if this is a user-defined type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getPrecision(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#getPrecision(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getPrecision\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Integer` — The maximum column size for the given column. For numeric data, this is the maximum precision. For character data, this is the length in characters. For datetime data, this is the length in characters of the string representation (assuming the maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes. For the `ROWID` datatype, this is the length in bytes. Returns 0 for types where the column size is not applicable.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getScale(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#getScale(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getScale\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Integer` — The designated columns's number of digits to right of the decimal point. Returns 0 for data types where the scale is not applicable.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSchemaName(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#getSchemaName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getSchemaName\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`String` — The table schema of the designated column.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getTableName(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#getTableName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getTableName\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`String` — The table name of the designated column, or an empty string if not applicable.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isAutoIncrement(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#isAutoIncrement(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isAutoIncrement\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Boolean` — `true` if the specified column is automatically numbered; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isCaseSensitive(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#isCaseSensitive(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isCaseSensitive\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Boolean` — `true` if the specified column is case-sensitive; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isCurrency(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#isCurrency(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isCurrency\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Boolean` — `true` if the specified column is a cash value; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isDefinitelyWritable(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#isDefinitelyWritable(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isDefinitelyWritable\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Boolean` — `true` if writes to the designated column definitely succeed; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isNullable(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#isNullable(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isNullable\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Integer` — The nullability status of the specified column, which is `Jdbc.ResultSetMetaData.columnNoNulls`, `Jdbc.ResultSetMetaData.columnNullable`, or `Jdbc.ResultSetMetaData.columnNullableUnknown`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isReadOnly(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#isReadOnly(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isReadOnly\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Boolean` — `true` if the designated column is definitely non-writable; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isSearchable(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#isSearchable(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isSearchable\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Boolean` — `true` if a where clause can use the specified column; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isSigned(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#isSigned(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isSigned\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Boolean` — `true` if the values in the specified column are signed numbers; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isWritable(column)

For documentation of this method, see [`java.sql.ResultSetMetaData#isWritable(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isWritable\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Integer` | The index of the column to examine (the first column is 1, the second is 2, and so on). |

#### Return

`Boolean` — `true` if it is possible to write to the designated column; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`
