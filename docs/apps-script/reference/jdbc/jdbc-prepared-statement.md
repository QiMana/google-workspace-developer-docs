---
source: https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement
root: apps-script
fetched_at: 2026-04-23T15:20:49.354Z
---

# Class JdbcPreparedStatement

## Page Summary

- The `JdbcPreparedStatement` class in Apps Script facilitates interaction with SQL databases using prepared statements, mirroring Java JDBC API functionality.
- Key methods are available for batch operations, statement execution, setting parameters, retrieving information, and managing the statement itself.
- Numerous `set` methods are provided to configure parameters for the prepared statement at specific indices, supporting various data types.
- Statement properties can be configured using methods like `setCursorName`, `setFetchDirection`, `setMaxRows`, and `setQueryTimeout`.
- Most methods require authorization with the `https://www.googleapis.com/auth/script.external_request` scope.

A JDBC `PreparedStatement`. For documentation of this class, see [` java.sql.PreparedStatement`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html).

## Detailed documentation

### addBatch()

For documentation of this method, see [`java.sql.PreparedStatement#addBatch()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#addBatch\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### addBatch(sql)

For documentation of this method, see [`java.sql.Statement#addBatch(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sql` | `String` | The SQL command to add to this statement, typically an SQL `INSERT` or `UPDATE`. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### cancel()

For documentation of this method, see [` java.sql.Statement#cancel()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### clearBatch()

For documentation of this method, see [` java.sql.Statement#clearBatch()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### clearParameters()

For documentation of this method, see [`java.sql.PreparedStatement#clearParameters()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#clearParameters\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### clearWarnings()

For documentation of this method, see [` java.sql.Statement#clearWarnings()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings\(\)).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### close()

For documentation of this method, see [` java.sql.Statement#close()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close\(\)).

---

### execute()

For documentation of this method, see [`java.sql.PreparedStatement#execute()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#execute\(\)).

#### Return

`Boolean` — `true` if the first result is a result set; `false` if the first result is an update count or there is no result.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### execute(sql)

For documentation of this method, see [`java.sql.Statement#execute(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sql` | `String` | The SQL statement to execute. |

#### Return

`Boolean` — `true` if the first result is a result set; `false` if it is an update count or if there are no results.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### execute(sql, autoGeneratedKeys)

For documentation of this method, see [`java.sql.Statement#execute(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute\(java.lang.String,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sql` | `String` | The SQL statement to execute. |
| `autoGeneratedKeys` | `Integer` | A flag that indicates whether auto-generated keys are made available for future retrieval; either `Jdbc.Statement.RETURN_GENERATED_KEYS` or `Jdbc.Statement.NO_GENERATED_KEYS`. |

#### Return

`Boolean` — `true` if the first result is a result set; `false` if it is an update count or if there are no results.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### execute(sql, columnIndexes)

For documentation of this method, see [`java.sql.Statement#execute(String, int[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute\(java.lang.String,%20int[]\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sql` | `String` | The SQL statement to execute. |
| `columnIndexes` | `Integer[]` | The column indices in the whose auto-generated keys are made available for future retrieval. |

#### Return

`Boolean` — `true` if the first result is a result set; `false` if it is an update count or if there are no results.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### execute(sql, columnNames)

For documentation of this method, see [`java.sql.Statement#execute(String, String[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute\(java.lang.String,%20java.lang.String[]\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sql` | `String` | The SQL statement to execute. |
| `columnNames` | `String[]` | The names of columns in the whose auto-generated keys are made available for future retrieval. |

#### Return

`Boolean` — `true` if the first result is a result set; `false` if it is an update count or if there are no results.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### executeBatch()

For documentation of this method, see [` java.sql.Statement#executeBatch()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch\(\)).

#### Return

`Integer[]` — The update counts for each command in the batch, using the same order in which commands were added to the batch.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### executeBatch(parameters)

Submits a batch of commands to the database for execution and if all commands execute successfully, returns an array of update counts. The parameters argument is a 2D array, where each inner array contains the parameters for a single execution of the statement. For example, if you have a statement like "INSERT INTO employees (name, age) VALUES (?,?)", the parameters could be `[["John Doe", 30], ["John Smith", 25]]`.

The following example inserts multiple rows into a database using batching:

```
var conn = Jdbc.getCloudSqlConnection("jdbc:google:mysql://...");
var stmt = conn.prepareStatement("INSERT INTO employees (name, age) VALUES (?, ?)");
var params = [["John Doe", 30], ["John Smith", 25]];
stmt.executeBatch(params);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameters` | `Object[][]` | A 2D array of Objects representing the parameters for each batch. |

#### Return

`Integer[]` — An array of update counts containing one element for each command in the batch.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if a database access error occurs.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### executeQuery()

For documentation of this method, see [`java.sql.PreparedStatement#executeQuery()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeQuery\(\)).

#### Return

`JdbcResultSet` — A result set that contains the data produced by the query.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### executeQuery(sql)

For documentation of this method, see [`java.sql.Statement#executeQuery(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sql` | `String` | The SQL statement to execute, typically a static `SELECT`. |

#### Return

`JdbcResultSet` — A result set containing the results of the execution. This is never `null`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### executeUpdate()

For documentation of this method, see [`java.sql.PreparedStatement#executeUpdate()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeUpdate\(\)).

#### Return

`Integer` — The row count ofr SQL Data Manipulation Language statements, or 0 for SQL statements that return nothing.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### executeUpdate(sql)

For documentation of this method, see [`java.sql.Statement#executeUpdate(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sql` | `String` | The SQL Data Manipulation Language statement to execute (such as `INSERT`, `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL statement). |

#### Return

`Integer` — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### executeUpdate(sql, autoGeneratedKeys)

For documentation of this method, see [`java.sql.Statement#executeUpdate(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate\(java.lang.String,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sql` | `String` | The SQL Data Manipulation Language statement to execute (such as `INSERT`, `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL statement). |
| `autoGeneratedKeys` | `Integer` | A flag that indicates whether auto-generated keys are made available for future retrieval; either `Jdbc.Statement.RETURN_GENERATED_KEYS` or `Jdbc.Statement.NO_GENERATED_KEYS`. |

#### Return

`Integer` — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### executeUpdate(sql, columnIndexes)

For documentation of this method, see [`java.sql.Statement#executeUpdate(String, int[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate\(java.lang.String,%20int[]\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sql` | `String` | The SQL Data Manipulation Language statement to execute (such as `INSERT`, `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL statement). |
| `columnIndexes` | `Integer[]` | The column indices in the whose auto-generated keys are made available for future retrieval. |

#### Return

`Integer` — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### executeUpdate(sql, columnNames)

For documentation of this method, see [`java.sql.Statement#executeUpdate(String, String[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate\(java.lang.String,%20java.lang.String[]\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sql` | `String` | The SQL Data Manipulation Language statement to execute (such as `INSERT`, `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL statement). |
| `columnNames` | `String[]` | The names of columns in the whose auto-generated keys are made available for future retrieval. |

#### Return

`Integer` — Either the row count for for Data Manipulation Language statements, or 0 for statements that return nothing.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getConnection()

For documentation of this method, see [` java.sql.Statement#getConnection()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection\(\)).

#### Return

`JdbcConnection` — The connection that produced this statement.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getFetchDirection()

For documentation of this method, see [`java.sql.Statement#getFetchDirection()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection\(\)).

#### Return

`Integer` — The default direction for result sets generated by this statement, which is either `Jdbc.ResultSet.FETCH_FORWARD` or `Jdbc.ResultSet.FETCH_REVERSE`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getFetchSize()

For documentation of this method, see [` java.sql.Statement#getFetchSize()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize\(\)).

#### Return

`Integer` — The default row fetch size for result sets generated from this statement.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getGeneratedKeys()

For documentation of this method, see [`java.sql.Statement#getGeneratedKeys()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys\(\)).

#### Return

`JdbcResultSet` — A result set containing the auto-generated keys generated by the execution of this statement.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxFieldSize()

For documentation of this method, see [`java.sql.Statement#getMaxFieldSize()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize\(\)).

#### Return

`Integer` — The current column byte size limit for columns storing character and binary values; a value of zero indictates no limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxRows()

For documentation of this method, see [` java.sql.Statement#getMaxRows()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows\(\)).

#### Return

`Integer` — The current maximum number of rows for a result set produced by this statement; a value of 0 indicates no limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMoreResults()

For documentation of this method, see [`java.sql.Statement#getMoreResults()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults\(\)).

#### Return

`Boolean` — `true` if the next result is a result set; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMoreResults(current)

For documentation of this method, see [`java.sql.Statement#getMoreResults(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `current` | `Integer` | A flag that indicates what happens to current result sets when retrieved. This value is one of `Jdbc.Statement.CLOSE_CURRENT_RESULT`, `Jdbc.Statement.KEEP_CURRENT_RESULT`, or `Jdbc.Statement.CLOSE_ALL_RESULTS`. |

#### Return

`Boolean` — `true` if the next result is a result set; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getQueryTimeout()

For documentation of this method, see [`java.sql.Statement#getQueryTimeout()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout\(\)).

#### Return

`Integer` — The current query timeout in seconds; a value of zero indicates no timeout.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getResultSet()

For documentation of this method, see [` java.sql.Statement#getResultSet()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet\(\)).

#### Return

`JdbcResultSet` — The current result set, or `null` if the result is an update count or there are no more results.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getResultSetConcurrency()

For documentation of this method, see [`java.sql.Statement#getResultSetConcurrency()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency\(\)).

#### Return

`Integer` — The result set concurrency for result sets generated from this statement, which is either `Jdbc.ResultSet.CONCUR_READ_ONLY` or `Jdbc.ResultSet.CONCUR_UPDATABLE`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getResultSetHoldability()

For documentation of this method, see [`java.sql.Statement#getResultSetHoldability()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability\(\)).

#### Return

`Integer` — The result set holdability, which is either `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getResultSetType()

For documentation of this method, see [`java.sql.Statement#getResultSetType()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType\(\)).

#### Return

`Integer` — The result set type for result sets generated from this statement, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getUpdateCount()

For documentation of this method, see [`java.sql.Statement#getUpdateCount()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount\(\)).

#### Return

`Integer` — The current result as an update count, or -1 if the current result is a result set or if there are no more results.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getWarnings()

For documentation of this method, see [` java.sql.Statement#getWarnings()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings\(\)).

#### Return

`String[]` — The current set of warnings, or `null` if there are no warnings.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isClosed()

For documentation of this method, see [` java.sql.Statement#isClosed()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed\(\)).

#### Return

`Boolean` — `true` if this statement is closed; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isPoolable()

For documentation of this method, see [` java.sql.Statement#isPoolable()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable\(\)).

#### Return

`Boolean` — `true` if this statement is poolable; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setArray(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setArray(int, Array)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setArray\(int,%20java.sql.Array\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `JdbcArray` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setBigDecimal(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setBigDecimal(int, BigDecimal)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBigDecimal\(int,%20java.math.BigDecimal\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `BigNumber` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setBlob(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setBlob(int, Clob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBlob\(int,%20java.sql.Blob\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `JdbcBlob` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setBoolean(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setBoolean(int, boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBoolean\(int,%20boolean\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `Boolean` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setByte(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setByte(int, byte)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setByte\(int,%20byte\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `Byte` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setBytes(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setBytes(int, byte[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBytes\(int,%20byte[]\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `Byte[]` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setClob(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setClob(int, Clob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setClob\(int,%20java.sql.Clob\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `JdbcClob` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setCursorName(name)

For documentation of this method, see [`java.sql.Statement#setCursorName(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName\(java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The new cursor name, which must be unique within a connection. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setDate(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setDate(int, Date)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate\(int,%20java.sql.Date\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `JdbcDate` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setDate(parameterIndex, x, timeZone)

For documentation of this method, see [`java.sql.PreparedStatement#setDate(int, Date, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate\(int,%20java.sql.Date,%20java.util.Calendar\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `JdbcDate` | The parameter value to set. |
| `timeZone` | `String` | A time zone string used to construct [java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as `PST`, `EST`, and `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and offsets (such as `GMT+6:30`). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setDouble(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setDouble(int, double)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDouble\(int,%20double\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `Number` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setEscapeProcessing(enable)

For documentation of this method, see [`java.sql.Statement#setEscapeProcessing(boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing\(boolean\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `enable` | `Boolean` | If `true`, escape processing is enabled; otherwise it is disabled. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setFetchDirection(direction)

For documentation of this method, see [`java.sql.Statement#setFetchDirection(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `direction` | `Integer` | The specified direction to set, which is either `Jdbc.ResultSet.FETCH_FORWARD` or `Jdbc.ResultSet.FETCH_REVERSE`. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setFetchSize(rows)

For documentation of this method, see [`java.sql.Statement#setFetchSize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rows` | `Integer` | The number of rows to fetch. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setFloat(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setFloat(int, float)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setFloat\(int,%20float\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `Number` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setInt(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setInt(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setInt\(int,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `Integer` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setLong(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setLong(int, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setLong\(int,%20long\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `Integer` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setMaxFieldSize(max)

For documentation of this method, see [`java.sql.Statement#setMaxFieldSize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `max` | `Integer` | The new column byte size limit; a value of zero indicates no limit. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setMaxRows(max)

For documentation of this method, see [` java.sql.Statement#setMaxRows(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `max` | `Integer` | The maximum number of rows a result set generated by this statement can have. A value of 0 indicates no limit. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setNClob(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setNClob(int, NClob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNClob\(int,%20java.sql.NClob\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `JdbcClob` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setNString(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setNString(int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNString\(int,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `String` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setNull(parameterIndex, sqlType)

For documentation of this method, see [`java.sql.PreparedStatement#setNull(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull\(int,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `sqlType` | `Integer` | The [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) of the specified parameter. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setNull(parameterIndex, sqlType, typeName)

For documentation of this method, see [`java.sql.PreparedStatement#setNull(int, int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull\(int,%20int,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `sqlType` | `Integer` | The [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) of the specified parameter. |
| `typeName` | `String` | The fully-qualifed name of an SQL user-defined type. Ignored if the parameter isn't a user-defined type or `REF`. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setObject(index, x)

For documentation of this method, see [`java.sql.PreparedStatement#setObject(int, Object)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject\(int,%20java.lang.Object\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `index` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `Object` | The object containing the value to set the parameter to. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setObject(parameterIndex, x, targetSqlType)

For documentation of this method, see [`java.sql.PreparedStatement#setObject(int, Object, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject\(int,%20java.lang.Object,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `Object` | The object containing the value to set the parameter to. |
| `targetSqlType` | `Integer` | The [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to send to the database. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setObject(parameterIndex, x, targetSqlType, scaleOrLength)

For documentation of this method, see [`java.sql.PreparedStatement#setObject(int, Object, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject\(int,%20java.lang.Object,%20int,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `Object` | The object containing the value to set the parameter to. |
| `targetSqlType` | `Integer` | The [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to send to the database. The scale argument may further qualify this type. |
| `scaleOrLength` | `Integer` | The number of digits after the decimal for `DECIMAL` or `NUMERIC` types, or the length of data for `InputStream` or `Reader` types. Ignored for all other types. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setPoolable(poolable)

For documentation of this method, see [`java.sql.Statement#setPoolable(boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable\(boolean\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `poolable` | `Boolean` | If `true`, requests that this statement be pooled; otherwise requests it not be pooled. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setQueryTimeout(seconds)

For documentation of this method, see [`java.sql.Statement#setQueryTimeout(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `seconds` | `Integer` | The new query timeout in seconds; a value of 0 indicates no timeout. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setRef(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setRef(int, Ref)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRef\(int,%20java.sql.Ref\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `JdbcRef` | The SQL `REF` value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setRowId(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setRowId(int, RowId)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRowId\(int,%20java.sql.RowId\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `JdbcRowId` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setSQLXML(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setSQLXML(int, SQLXML)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setSQLXML\(int,%20java.sql.SQLXML\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `JdbcSQLXML` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setShort(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setShort(int, short)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setShort\(int,%20short\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `Integer` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setString(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setString(int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setString\(int,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `String` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setTime(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setTime(int, Time)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime\(int,%20java.sql.Time\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `JdbcTime` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setTime(parameterIndex, x, timeZone)

For documentation of this method, see [`java.sql.PreparedStatement#setTime(int, Time, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime\(int,%20java.sql.Time,%20java.util.Calendar\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `JdbcTime` | The parameter value to set. |
| `timeZone` | `String` | A time zone string used to construct [java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as `PST`, `EST`, and `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and offsets (such as `GMT+6:30`). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### setURL(parameterIndex, x)

For documentation of this method, see [`java.sql.PreparedStatement#setURL(int, URL)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setURL\(int,%20java.net.URL\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterIndex` | `Integer` | The index of the parameter to set (the first parameter is 1, the second is 2, and so on). |
| `x` | `String` | The parameter value to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`
