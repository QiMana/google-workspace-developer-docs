---
source: https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data
root: apps-script
fetched_at: 2026-04-23T15:20:48.151Z
---

# Class JdbcDatabaseMetaData

## Page Summary

- `JdbcDatabaseMetaData` provides information about a database and mirrors `java.sql.DatabaseMetaData` functionality.
- Key methods retrieve metadata about database elements, provide database and driver details, indicate database capabilities with boolean values, and return information about naming conventions and length limits.
- Methods are also available to get details on numeric, string, system, and time/date functions, as well as transaction and result set properties and the type of SQLSTATE returned.
- All methods of `JdbcDatabaseMetaData` are documented in the `java.sql.DatabaseMetaData` class and generally require `https://www.googleapis.com/auth/script.external_request` authorization.
- Numerous methods check for database support of specific features, such as different result set types, savepoints, schema inclusion in statements, subqueries, transactions, and UNION operations.

A JDBC database metadata object. For documentation of this class, see [` java.sql.DatabaseMetaData`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html).

## Detailed documentation

### allProceduresAreCallable()

For documentation of this method, see [`java.sql.DatabaseMetaData#allProceduresAreCallable()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#allProceduresAreCallable\(\)).

#### Return

`Boolean` — `true` if the user can call all of the procedures returned by `getProcedures(catalog, schemaPattern, procedureNamePattern)`; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### allTablesAreSelectable()

For documentation of this method, see [`java.sql.DatabaseMetaData#allTablesAreSelectable()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#allTablesAreSelectable\(\)).

#### Return

`Boolean` — `true` if the user can call all of the tables returned by `getTables(catalog, schemaPattern, tableNamePattern, types)` in a `SELECT` statement; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### autoCommitFailureClosesAllResultSets()

For documentation of this method, see [`java.sql.DatabaseMetaData#autoCommitFailureClosesAllResultSets()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#autoCommitFailureClosesAllResultSets\(\)).

#### Return

`Boolean` — `true` if, when `autoCommit` is `true`, a SQL exception indicates that all open result sets are closed, even if holdable. Returns `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### dataDefinitionCausesTransactionCommit()

For documentation of this method, see [`java.sql.DatabaseMetaData#dataDefinitionCausesTransactionCommit()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#dataDefinitionCausesTransactionCommit\(\)).

#### Return

`Boolean` — `true` if a data definition statement within a transaction forces the transaction to commit; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### dataDefinitionIgnoredInTransactions()

For documentation of this method, see [`java.sql.DatabaseMetaData#dataDefinitionIgnoredInTransactions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#dataDefinitionIgnoredInTransactions\(\)).

#### Return

`Boolean` — `true` if the database ignores a data definition statement within a transaction; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### deletesAreDetected(type)

For documentation of this method, see [`java.sql.DatabaseMetaData#deletesAreDetected(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#deletesAreDetected\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `Integer` | The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`. |

#### Return

`Boolean` — `true` if for the specified result set type a visible row delete is detected by calls to `JdbcResultSet.rowDeleted()`. If `false`, the deleted rows are removed from the result set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### doesMaxRowSizeIncludeBlobs()

For documentation of this method, see [`java.sql.DatabaseMetaData#doesMaxRowSizeIncludeBlobs()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#doesMaxRowSizeIncludeBlobs\(\)).

#### Return

`Boolean` — `true` if SQL data types `LONGVARCHAR` and `LONGVARBINARY` are included in the size returned by `getMaxRowSize()`; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getAttributes(catalog, schemaPattern, typeNamePattern, attributeNamePattern)

For documentation of this method, see [`java.sql.DatabaseMetaData#getAttributes(String, String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getAttributes\(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `typeNamePattern` | `String` | The user-defined type name pattern; it must match the type name as it is stored in the database. |
| `attributeNamePattern` | `String` | The attribute name pattern; it must match the attribute name as it is declared in the database. |

#### Return

`JdbcResultSet` — A result set containing descriptions the attributes for a specified user-defined type available in the specified schema and catalog. Each row provides information about a specific attribute, ordered by `TYPE_CAT`, `TYPE_SCHEM`, `TYPE_NAME`, and `ORDINAL_POSITION`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getBestRowIdentifier(catalog, schema, table, scope, nullable)

For documentation of this method, see [`java.sql.DatabaseMetaData#getBestRowIdentifier(String, String, String, int, boolean)       `](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getBestRowIdentifier\(java.lang.String,%20java.lang.String,%20java.lang.String,%20int,%20boolean\))
      .

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schema` | `String` | The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `table` | `String` | The table name. It must match the table name as it is stored in the database. |
| `scope` | `Integer` | The scope of interest, using the same values as present in the `SCOPE` column description column. |
| `nullable` | `Boolean` | If `true`, include columns that are nullable; otherwise do not. |

#### Return

`JdbcResultSet` — A result set containing the column descriptions that uniquely identify a row (one column description per row in the result set, ordered by `SCOPE`).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getCatalogSeparator()

For documentation of this method, see [`java.sql.DatabaseMetaData#getCatalogSeparator()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogSeparator\(\)).

#### Return

`String` — The separator between a catalog and table name used by this database.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getCatalogTerm()

For documentation of this method, see [`java.sql.DatabaseMetaData#getCatalogTerm()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogTerm\(\)).

#### Return

`String` — The database vendor's preferred term for 'catalog'.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getCatalogs()

For documentation of this method, see [`java.sql.DatabaseMetaData#getCatalogs()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogs\(\)).

#### Return

`JdbcResultSet` — A result set containing the catalog names, one per row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getClientInfoProperties()

For documentation of this method, see [`java.sql.DatabaseMetaData#getClientInfoProperties()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getClientInfoProperties\(\)).

#### Return

`JdbcResultSet` — A result set containing client info properties the driver supports, ordered by `NAME`, one per row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getColumnPrivileges(catalog, schema, table, columnNamePattern)

For documentation of this method, see [`java.sql.DatabaseMetaData#getColumnPrivileges(String, String, String, String)    `](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getColumnPrivileges\(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String\))
   .

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schema` | `String` | The name of the schema to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `table` | `String` | The table name. It must match the table name as it is stored in the database. |
| `columnNamePattern` | `String` | The column name pattern to filter the search by. It must match the column name as it is stored in the database. |

#### Return

`JdbcResultSet` — A result set containing the column privilege descriptions, one per row, ordered by `COLUMN_NAME` and `PRIVILEGE`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getColumns(catalog, schemaPattern, tableNamePattern, columnNamePattern)

For documentation of this method, see [`java.sql.DatabaseMetaData#getColumns(String, String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getColumns\(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `tableNamePattern` | `String` | The table name pattern to filter the search by. It must match the table name as it is stored in the database. |
| `columnNamePattern` | `String` | The column name pattern to filter the search by. It must match the column name as it is stored in the database. |

#### Return

`JdbcResultSet` — A result set containing the column descriptions, one per row, ordered according to `TABLE_CAT`, `TABLE_SCHEM`, `TABLE_NAME`, and `ORDINAL_POSITION`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getConnection()

For documentation of this method, see [`java.sql.DatabaseMetaData#getConnection()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getConnection\(\)).

#### Return

`JdbcConnection` — The connection that produced this metadata.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getCrossReference(parentCatalog, parentSchema, parentTable, foreignCatalog, foreignSchema, foreignTable)

For documentation of this method, see [`java.sql.DatabaseMetaData#getCrossReference(String, String, String,      String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCrossReference\(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parentCatalog` | `String` | A parent catalog name as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used in the selection criteria. |
| `parentSchema` | `String` | A parent schema name as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used in the selection criteria. |
| `parentTable` | `String` | The name of the parent table that exports the key. It must match the table name as it is stored in the database. |
| `foreignCatalog` | `String` | A foreign catalog name as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used in the selection criteria. |
| `foreignSchema` | `String` | A foreign schema name as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used in the selection criteria. |
| `foreignTable` | `String` | The name of the foreign table that exports the key. It must match the table name as it is stored in the database. |

#### Return

`JdbcResultSet` — An result set containing the foreign key column descriptions from the specified foreign key table that reference the primary key or the columns representing a unique constraint of the parent table. One column description is provided in each row of the result set, and they are ordered by `FKTABLE_CAT`, `FKTABLE_SCHEM`, `FKTABLE_NAME`, and `KEY_SEQ`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDatabaseMajorVersion()

For documentation of this method, see [`java.sql.DatabaseMetaData#getDatabaseMajorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseMajorVersion\(\)).

#### Return

`Integer` — The major version number of the underlying database.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDatabaseMinorVersion()

For documentation of this method, see [`java.sql.DatabaseMetaData#getDatabaseMinorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseMinorVersion\(\)).

#### Return

`Integer` — The minor version number of the underlying database.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDatabaseProductName()

For documentation of this method, see [`java.sql.DatabaseMetaData#getDatabaseProductName()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseProductName\(\)).

#### Return

`String` — The name of this database product.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDatabaseProductVersion()

For documentation of this method, see [`java.sql.DatabaseMetaData#getDatabaseProductVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseProductVersion\(\)).

#### Return

`String` — The version number of this database product.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDefaultTransactionIsolation()

For documentation of this method, see [`java.sql.DatabaseMetaData#getDefaultTransactionIsolation()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDefaultTransactionIsolation\(\)).

#### Return

`Integer` — The database's default transaction isolation level, which is one of: `Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED`, `Jdbc.Connection.TRANSACTION_READ_COMMITTED`, `Jdbc.Connection.TRANSACTION_REPEATABLE_READ`, `Jdbc.Connection.TRANSACTION_SERIALIZABLE`, or `Jdbc.Connection.TRANSACTION_NONE`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDriverMajorVersion()

For documentation of this method, see [`java.sql.DatabaseMetaData#getDriverMajorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverMajorVersion\(\)).

#### Return

`Integer` — The JDBC driver's major version number.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDriverMinorVersion()

For documentation of this method, see [`java.sql.DatabaseMetaData#getDriverMinorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverMinorVersion\(\)).

#### Return

`Integer` — The JDBC driver's minor version number.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDriverName()

For documentation of this method, see [`java.sql.DatabaseMetaData#getDriverName()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverName\(\)).

#### Return

`String` — The name of this JDBC driver.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getDriverVersion()

For documentation of this method, see [`java.sql.DatabaseMetaData#getDriverVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverVersion\(\)).

#### Return

`String` — The version number of this JDBC driver.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getExportedKeys(catalog, schema, table)

For documentation of this method, see [`java.sql.DatabaseMetaData#getImportedKeys(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getExportedKeys\(java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schema` | `String` | The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `table` | `String` | The table name. It must match the table name as it is stored in the database. |

#### Return

`JdbcResultSet` — An result set containing the foreign key column descriptions for the primary key columns exported by the table. One column description is provided in each row of the result set, and they are ordered by `FKTABLE_CAT`, `FKTABLE_SCHEM`, `FKTABLE_NAME`, and `KEY_SEQ`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getExtraNameCharacters()

For documentation of this method, see [`java.sql.DatabaseMetaData#getExtraNameCharacters()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getExtraNameCharacters\(\)).

#### Return

`String` — The extra characters that are avaiable for use in unquoted identifier names in addition to a-z, A-Z, 0-9, and \_.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getFunctionColumns(catalog, schemaPattern, functionNamePattern, columnNamePattern)

For documentation of this method, see [`java.sql.DatabaseMetaData#getFunctionColumns(String, String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getFunctionColumns\(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `functionNamePattern` | `String` | The function pattern, which match the function name as it is stored in the database. |
| `columnNamePattern` | `String` | The parameter name pattern, which must match the parameter or column name as it is stored in the database. |

#### Return

`JdbcResultSet` — A result set containing the descriptions of system and user function parameters available in the given catalog. Each row contains one function description, ordered according to `FUNCTION_CAT`, `FUNCTION_SCHEM`, `FUNCTION_NAME`, and `SPECIFIC_ NAME`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getFunctions(catalog, schemaPattern, functionNamePattern)

For documentation of this method, see [`java.sql.DatabaseMetaData#getFunctions(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getFunctions\(java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `functionNamePattern` | `String` | The function pattern, which must match the function name as it is stored in the database. |

#### Return

`JdbcResultSet` — A result set containing descriptions of the system and user functions available in the given catalog. Each row contains one function description, ordered according to `FUNCTION_CAT`, `FUNCTION_SCHEM`, `FUNCTION_NAME`, and `SPECIFIC_ NAME`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getIdentifierQuoteString()

For documentation of this method, see [`java.sql.DatabaseMetaData#getIdentifierQuoteString()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getIdentifierQuoteString\(\)).

#### Return

`String` — The string used to quote SQL identifiers. Defaults to a space (" ") if identifier quoting isn't supported.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getImportedKeys(catalog, schema, table)

For documentation of this method, see [`java.sql.DatabaseMetaData#getImportedKeys(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getImportedKeys\(java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schema` | `String` | The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `table` | `String` | The table name. It must match the table name as it is stored in the database. |

#### Return

`JdbcResultSet` — An result set containing the column descriptions for the primary key columns referenced by the given table's foreign key columns (those imported by a table). One column description is provided in each row of the result set, and they are ordered by `PKTABLE_CAT`, `PKTABLE_SCHEM`, `PKTABLE_NAME`, and `KEY_SEQ`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getIndexInfo(catalog, schema, table, unique, approximate)

For documentation of this method, see [`java.sql.DatabaseMetaData#getIndexInfo(String, String, String, boolean, boolean)       `](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getIndexInfo\(java.lang.String,%20java.lang.String,%20java.lang.String,%20boolean,%20boolean\))
      .

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schema` | `String` | The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `table` | `String` | The table name. It must match the table name as it is stored in the database. |
| `unique` | `Boolean` | If `true`, the method only return indices for unique values; otherwise it returns indices whether the values are unique or not. |
| `approximate` | `Boolean` | If `true`, the result is allowed to reflect approximate or out-of-data values; otherwise result accuracy is requested. |

#### Return

`JdbcResultSet` — An result set containing the index and statistic column descriptions for the specified table. One column description is provided in each row of the result set, and they are ordered by `NON_UNIQUE`, `TYPE`, `INDEX_NAME`, and `ORDINAL_POSITION`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getJDBCMajorVersion()

For documentation of this method, see [`java.sql.DatabaseMetaData#getJDBCMajorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getJDBCMajorVersion\(\)).

#### Return

`Integer` — The major JDBC version number for this driver.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getJDBCMinorVersion()

For documentation of this method, see [`java.sql.DatabaseMetaData#getJDBCMinorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getJDBCMinorVersion\(\)).

#### Return

`Integer` — The minor JDBC version number for this driver.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxBinaryLiteralLength()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxBinaryLiteralLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxBinaryLiteralLength\(\)).

#### Return

`Integer` — The maximum number of hex characters this database allows in an inline binary literal. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxCatalogNameLength()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxCatalogNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCatalogNameLength\(\)).

#### Return

`Integer` — The maximum number of characters this database allows in a catalog name. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxCharLiteralLength()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxCharLiteralLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCharLiteralLength\(\)).

#### Return

`Integer` — The maximum number of characters this database allows in a character literal. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxColumnNameLength()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxColumnNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnNameLength\(\)).

#### Return

`Integer` — The maximum number of characters this database allows in a column name. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxColumnsInGroupBy()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxColumnsInGroupBy()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInGroupBy\(\)).

#### Return

`Integer` — The maximum number of columns this database allows in a `GROUP BY` clause. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxColumnsInIndex()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxColumnsInIndex()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInIndex\(\)).

#### Return

`Integer` — The maximum number of columns this database allows in an index. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxColumnsInOrderBy()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxColumnsInOrderBy()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInOrderBy\(\)).

#### Return

`Integer` — The maximum number of columns this database allows in an `ORDER BY` clause. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxColumnsInSelect()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxColumnsInSelect()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInSelect\(\)).

#### Return

`Integer` — The maximum number of columns this database allows in an `SELECT` list. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxColumnsInTable()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxColumnsInTable()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInTable\(\)).

#### Return

`Integer` — The maximum number of columns this database allows in a table. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxConnections()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxConnections()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxConnections\(\)).

#### Return

`Integer` — The maximum number of concurrent connections to this database. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxCursorNameLength()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxCursorNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCursorNameLength\(\)).

#### Return

`Integer` — The maximum number of characters that this database allows in a cursor name. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxIndexLength()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxIndexLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxIndexLength\(\)).

#### Return

`Integer` — The maximum number of bytes this database allows for an index, including all its parts. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxProcedureNameLength()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxProcedureNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxProcedureNameLength\(\)).

#### Return

`Integer` — The maximum number of characters this database allows in a procedure name. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxRowSize()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxRowSize()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxRowSize\(\)).

#### Return

`Integer` — The maximum number of bytes this database allows in a single row. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxSchemaNameLength()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxSchemaNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxSchemaNameLength\(\)).

#### Return

`Integer` — The maximum number of characters this database allows in a schema name. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxStatementLength()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxStatementLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxStatementLength\(\)).

#### Return

`Integer` — The maximum number of characters this database allows in an SQL statement. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxStatements()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxStatements()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxStatements\(\)).

#### Return

`Integer` — The maximum number of active statements to this database that can be open simultaneously. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxTableNameLength()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxTableNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxTableNameLength\(\)).

#### Return

`Integer` — The maximum number of characters this database allows in a table name. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxTablesInSelect()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxTablesInSelect()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxTablesInSelect\(\)).

#### Return

`Integer` — The maximum number of tables this database allows in a `SELECT` statement. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getMaxUserNameLength()

For documentation of this method, see [`java.sql.DatabaseMetaData#getMaxUserNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxUserNameLength\(\)).

#### Return

`Integer` — The maximum number of characters this database allows in a username. A response of 0 indicates there is no known limit.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getNumericFunctions()

For documentation of this method, see [`java.sql.DatabaseMetaData#getNumericFunctions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getNumericFunctions\(\)).

#### Return

`String` — The comma-separated list of math functions available with this database. These are the Open/Open CLI math function names used in the JDBC function escape clause.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getPrimaryKeys(catalog, schema, table)

For documentation of this method, see [`java.sql.DatabaseMetaData#getPrimaryKeys(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getPrimaryKeys\(java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schema` | `String` | The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `table` | `String` | The table name. It must match the table name as it is stored in the database. |

#### Return

`JdbcResultSet` — An result set containing the column descriptions for the primary key columns, one per row, ordered by `COLUMN_NAME`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getProcedureColumns(catalog, schemaPattern, procedureNamePattern, columnNamePattern)

For documentation of this method, see [`java.sql.DatabaseMetaData#getProcedureColumns(String, String, String, String)     `](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedureColumns\(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String\))
    .

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `procedureNamePattern` | `String` | The procedure name pattern to filter the search by. It must match the procedure name as it is stored in the database. |
| `columnNamePattern` | `String` | The column name pattern to filter the search by. It must match the column name as it is stored in the database. |

#### Return

`JdbcResultSet` — A result set containing the procedure and column descriptions, one per row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getProcedureTerm()

For documentation of this method, see [`java.sql.DatabaseMetaData#getProcedureTerm()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedureTerm\(\)).

#### Return

`String` — The database vendor's preferred term for 'procedure'.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getProcedures(catalog, schemaPattern, procedureNamePattern)

For documentation of this method, see [`java.sql.DatabaseMetaData#getProcedures(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedures\(java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `procedureNamePattern` | `String` | The procedure name pattern to filter the search by. It must match the procedure name as it is stored in the database. |

#### Return

`JdbcResultSet` — A result set containing the procedure descriptions, one per row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getResultSetHoldability()

For documentation of this method, see [`java.sql.DatabaseMetaData#getResultSetHoldability()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getResultSetHoldability\(\)).

#### Return

`Integer` — The database default holdability; one of `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getRowIdLifetime()

For documentation of this method, see [`java.sql.DatabaseMetaData#getRowIdLifetime()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getRowIdLifetime\(\)).

#### Return

`Integer` — The status indicatig the lifetime of a `ROWID`, which is one of `Jdbc.RowIdLifetime.ROWID_UNSUPPORTED`, `Jdbc.RowIdLifetime.ROWID_VALID_OTHER`, `Jdbc.RowIdLifetime.ROWID_VALID_SESSION`, `Jdbc.RowIdLifetime.ROWID_VALID_TRANSACTION`, or `Jdbc.RowIdLifetime.ROWID_VALID_FOREVER`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSQLKeywords()

For documentation of this method, see [`java.sql.DatabaseMetaData#getSQLKeywords()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSQLKeywords\(\)).

#### Return

`String` — The comma-separated list of all this database's SQL keywords that aren't also SQL:2003 keywords.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSQLStateType()

For documentation of this method, see [`java.sql.DatabaseMetaData#getSQLStateType()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSQLStateType\(\)).

#### Return

`Integer` — The type of `SQLSTATE`, which is either `sqlStateXOpen` or `sqlStateSQL`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSchemaTerm()

For documentation of this method, see [`java.sql.DatabaseMetaData#getSchemaTerm()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemaTerm\(\)).

#### Return

`String` — The database vendor's preferred term for 'schema'.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSchemas()

For documentation of this method, see [`java.sql.DatabaseMetaData#getSchemas()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemas\(\)).

#### Return

`JdbcResultSet` — A result set containing the schema descriptions, one per row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSchemas(catalog, schemaPattern)

For documentation of this method, see [`java.sql.DatabaseMetaData#getSchemas()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemas\(\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |

#### Return

`JdbcResultSet` — A result set containing scheme descriptions available in this database, ordered by `TABLE_CATALOG` and `TABLE_SCHEM`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSearchStringEscape()

For documentation of this method, see [`java.sql.DatabaseMetaData#getSearchStringEscape()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSearchStringEscape\(\)).

#### Return

`String` — The string that is used to escape wildcard characters such as '\_' or '%'.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getStringFunctions()

For documentation of this method, see [`java.sql.DatabaseMetaData#getStringFunctions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getStringFunctions\(\)).

#### Return

`String` — The comma-separated list of string functions available with this database. These are the Open Group CLI string function names used in the JDBC function escape clause.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSuperTables(catalog, schemaPattern, tableNamePattern)

For documentation of this method, see [`java.sql.DatabaseMetaData#getSuperTables(String, String,String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSuperTables\(java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used in the selection criteria. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. |
| `tableNamePattern` | `String` | The table name pattern; may be a fully qualified name. |

#### Return

`JdbcResultSet` — A result set containing descriptions of the table hierarchies defined in a particular schema in this database. Each row provides information about a specific table type. Tables without supers aren't listed.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSuperTypes(catalog, schemaPattern, typeNamePattern)

For documentation of this method, see [`java.sql.DatabaseMetaData#getSuperTypes(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSuperTypes\(java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used in the selection criteria. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. |
| `typeNamePattern` | `String` | The user-defined type name pattern; may be a fully qualified name. |

#### Return

`JdbcResultSet` — A result set containing descriptions of the user-defined type hierarchies defined in a particular schema in this database. Each row provides information about a specific user-defined type. Types without supers aren't listed.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getSystemFunctions()

For documentation of this method, see [`java.sql.DatabaseMetaData#getSystemFunctions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSystemFunctions\(\)).

#### Return

`String` — The comma-separated list of system functions available with this database. These are the Open Group CLI system function names used in the JDBC function escape clause.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getTablePrivileges(catalog, schemaPattern, tableNamePattern)

For documentation of this method, see [`java.sql.DatabaseMetaData#getTablePrivileges(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTablePrivileges\(java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `tableNamePattern` | `String` | The table name pattern to filter the search by. It must match the table name as it is stored in the database. |

#### Return

`JdbcResultSet` — A result set containing the table privilege descriptions, one per row, ordered by `TABLE_CAT`, `TABLE_SCHEM`, `TABLE_NAME`, and `PRIVILEGE`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getTableTypes()

For documentation of this method, see [`java.sql.DatabaseMetaData#getTableTypes()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTableTypes\(\)).

#### Return

`JdbcResultSet` — A result set containing the table types, one per row.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getTables(catalog, schemaPattern, tableNamePattern, types)

For documentation of this method, see [`java.sql.DatabaseMetaData#getTables(String, String, String, String[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTables\(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String[]\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `tableNamePattern` | `String` | The table name pattern to filter the search by. It must match the table name as it is stored in the database. |
| `types` | `String[]` | A list of table types to return, each of which must be on the list that `getTableTypes()` returns. Passing `null` indictates that all table types are returned. |

#### Return

`JdbcResultSet` — A result set containing the table descriptions, one per row, ordered according to `TABLE_TYPE`, `TABLE_CAT`, `TABLE_SCHEM`, and `TABLE_NAME`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getTimeDateFunctions()

For documentation of this method, see [`java.sql.DatabaseMetaData#getTimeDateFunctions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTimeDateFunctions\(\)).

#### Return

`String` — The comma-separated list of time and date functions available with this database.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getTypeInfo()

For documentation of this method, see [`java.sql.DatabaseMetaData#getTypeInfo()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTypeInfo\(\)).

#### Return

`JdbcResultSet` — An result set containing the descriptions of data types supported by this database. One SQL type description is provided in each row of the result set, and they are ordered by `DATA_TYPE` and then by how closely the data type maps to the corresponding JDBC SQL type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getUDTs(catalog, schemaPattern, typeNamePattern, types)

For documentation of this method, see [`java.sql.DatabaseMetaData#getUDTs(String, String, String, int[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getUDTs\(java.lang.String,%20java.lang.String,%20java.lang.String,%20int[]\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schemaPattern` | `String` | The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `typeNamePattern` | `String` | The type name pattern to filter the search by; may be a fully qualified name. |
| `types` | `Integer[]` | A list of user-defined types (`JAVA_OBJECT`, `STRUCT`, or `DISTINCT`) to include. Passing `null` indictates that all types are returned. |

#### Return

`JdbcResultSet` — A result set containing the user-defined type (UDT) descriptions, one per row, ordered according to `DATA_TYPE`, `TYPE_CAT`, `TYPE_SCHEM`, and `TYPE_NAME`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getURL()

For documentation of this method, see [` java.sql.DatabaseMetaData#getURL()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getURL\(\)).

#### Return

`String` — The URL for this database management system, or `null` if isn't generated.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getUserName()

For documentation of this method, see [`java.sql.DatabaseMetaData#getUserName()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getUserName\(\)).

#### Return

`String` — The username as known to this database.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### getVersionColumns(catalog, schema, table)

For documentation of this method, see [`java.sql.DatabaseMetaData#getVersionColumns(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getVersionColumns\(java.lang.String,%20java.lang.String,%20java.lang.String\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | `String` | The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing `null` incidates the catalog name isn't used to narrow the search. |
| `schema` | `String` | The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing `null` incidates the schema name isn't used to narrow the search. |
| `table` | `String` | The table name. It must match the table name as it is stored in the database. |

#### Return

`JdbcResultSet` — An unordered result set containing the column descriptions that are updated when any value in a row is updated (one column description per row in the result set).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### insertsAreDetected(type)

For documentation of this method, see [`java.sql.DatabaseMetaData#insertsAreDetected(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#insertsAreDetected\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `Integer` | The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`. |

#### Return

`Boolean` — `true` if for the specified result set type a visible row insert is detected by calls to `JdbcResultSet.rowInserted()`; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isCatalogAtStart()

For documentation of this method, see [`java.sql.DatabaseMetaData#isCatalogAtStart()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#isCatalogAtStart\(\)).

#### Return

`Boolean` — `true` if a catalog appears at the start of a fully-qualified table name; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### isReadOnly()

For documentation of this method, see [`java.sql.DatabaseMetaData#isReadOnly()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#isReadOnly\(\)).

#### Return

`Boolean` — `true` if the database is read-only; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### locatorsUpdateCopy()

For documentation of this method, see [`java.sql.DatabaseMetaData#locatorsUpdateCopy()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#locatorsUpdateCopy\(\)).

#### Return

`Boolean` — `true` if updates made to a Large Object (LOB) are made to a copy of th LOB; `false` if updates are made directly to the LOB.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### nullPlusNonNullIsNull()

For documentation of this method, see [`java.sql.DatabaseMetaData#nullPlusNonNullIsNull()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullPlusNonNullIsNull\(\)).

#### Return

`Boolean` — `true` if concatenations of `NULL` and non- `NULL` values result in a `NULL`; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### nullsAreSortedAtEnd()

For documentation of this method, see [`java.sql.DatabaseMetaData#nullsAreSortedAtEnd()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedAtEnd\(\)).

#### Return

`Boolean` — `true` if `NULL` values are sorted to the end regardless of sort order (ascending or descending). Returns `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### nullsAreSortedAtStart()

For documentation of this method, see [`java.sql.DatabaseMetaData#nullsAreSortedAtStart()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedAtStart\(\)).

#### Return

`Boolean` — `true` if `NULL` values are sorted to the start regardless of sort order (ascending or descending). Returns `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### nullsAreSortedHigh()

For documentation of this method, see [`java.sql.DatabaseMetaData#nullsAreSortedHigh()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedHigh\(\)).

#### Return

`Boolean` — `true` if the `NULL` values are sorted high, meaning they are considered to have a value higher than others in the domain when sorting. Returns `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### nullsAreSortedLow()

For documentation of this method, see [`java.sql.DatabaseMetaData#nullsAreSortedLow()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedLow\(\)).

#### Return

`Boolean` — `true` if the `NULL` values are sorted low, meaning they are considered to have a value lower than others in the domain when sorting. Returns `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### othersDeletesAreVisible(type)

For documentation of this method, see [`java.sql.DatabaseMetaData#othersDeletesAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersDeletesAreVisible\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `Integer` | The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`. |

#### Return

`Boolean` — `true` if for the given result set type the deletes made by others are visible; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### othersInsertsAreVisible(type)

For documentation of this method, see [`java.sql.DatabaseMetaData#othersInsertsAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersInsertsAreVisible\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `Integer` | The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`. |

#### Return

`Boolean` — `true` if for the given result set type the inserts made by others are visible; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### othersUpdatesAreVisible(type)

For documentation of this method, see [`java.sql.DatabaseMetaData#othersUpdatesAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersUpdatesAreVisible\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `Integer` | The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`. |

#### Return

`Boolean` — `true` if for the given result set type the updates made by others are visible; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### ownDeletesAreVisible(type)

For documentation of this method, see [`java.sql.DatabaseMetaData#ownDeletesAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownDeletesAreVisible\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `Integer` | The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`. |

#### Return

`Boolean` — `true` if for the given result set type the set's own deletes are visible; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### ownInsertsAreVisible(type)

For documentation of this method, see [`java.sql.DatabaseMetaData#ownInsertsAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownInsertsAreVisible\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `Integer` | The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`. |

#### Return

`Boolean` — `true` if for the given result set type the set's own inserts are visible; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### ownUpdatesAreVisible(type)

For documentation of this method, see [`java.sql.DatabaseMetaData#ownUpdatesAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownUpdatesAreVisible\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `Integer` | The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`. |

#### Return

`Boolean` — `true` if for the given result set type the set's own updates are visible; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### storesLowerCaseIdentifiers()

For documentation of this method, see [`java.sql.DatabaseMetaData#storesLowerCaseIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesLowerCaseIdentifiers\(\)).

#### Return

`Boolean` — `true` if the database treats mixed case unquoted SQL identifiers as case-insensitive and stores them in lowercase; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### storesLowerCaseQuotedIdentifiers()

For documentation of this method, see [`java.sql.DatabaseMetaData#storesLowerCaseQuotedIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesLowerCaseQuotedIdentifiers\(\)).

#### Return

`Boolean` — `true` if the database treats mixed case quoted SQL identifiers as case-insensitive and stores them in lowercase; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### storesMixedCaseIdentifiers()

For documentation of this method, see [`java.sql.DatabaseMetaData#storesMixedCaseIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesMixedCaseIdentifiers\(\)).

#### Return

`Boolean` — `true` if the database treats mixed case unquoted SQL identifiers as case-insensitive and stores them in mixed case; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### storesMixedCaseQuotedIdentifiers()

For documentation of this method, see [`java.sql.DatabaseMetaData#storesMixedCaseQuotedIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesMixedCaseQuotedIdentifiers\(\)).

#### Return

`Boolean` — `true` if the database treats mixed case quoted SQL identifiers as case-insensitive and stores them in mixed case; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### storesUpperCaseIdentifiers()

For documentation of this method, see [`java.sql.DatabaseMetaData#storesUpperCaseIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesUpperCaseIdentifiers\(\)).

#### Return

`Boolean` — `true` if the database treats mixed case unquoted SQL identifiers as case-insensitive and stores them in uppercase; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### storesUpperCaseQuotedIdentifiers()

For documentation of this method, see [`java.sql.DatabaseMetaData#storesUpperCaseQuotedIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesUpperCaseQuotedIdentifiers\(\)).

#### Return

`Boolean` — `true` if the database treats mixed case quoted SQL identifiers as case-insensitive and stores them in uppercase; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsANSI92EntryLevelSQL()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsANSI92EntryLevelSQL()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92EntryLevelSQL\(\)).

#### Return

`Boolean` — `true` if this database supports the ANSI92 entry level SQL grammar; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsANSI92FullSQL()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsANSI92FullSQL()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92FullSQL\(\)).

#### Return

`Boolean` — `true` if this database supports the ANSI92 full level SQL grammar; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsANSI92IntermediateSQL()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsANSI92IntermediateSQL()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92IntermediateSQL\(\)).

#### Return

`Boolean` — `true` if this database supports the ANSI92 intermediate level SQL grammar; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsAlterTableWithAddColumn()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsAlterTableWithAddColumn()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsAlterTableWithAddColumn\(\)).

#### Return

`Boolean` — `true` if the database supports `ALTER TABLE` with add column; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsAlterTableWithDropColumn()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsAlterTableWithDropColumn()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsAlterTableWithDropColumn\(\)).

#### Return

`Boolean` — `true` if the database supports `ALTER TABLE` with drop column; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsBatchUpdates()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsBatchUpdates()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsBatchUpdates\(\)).

#### Return

`Boolean` — `true` if the database supports batch updates; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsCatalogsInDataManipulation()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsCatalogsInDataManipulation()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInDataManipulation\(\)).

#### Return

`Boolean` — `true` if a data manipulation statement can include a catalog name; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsCatalogsInIndexDefinitions()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsCatalogsInIndexDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInIndexDefinitions\(\)).

#### Return

`Boolean` — `true` if an index definition statement can include a catalog name; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsCatalogsInPrivilegeDefinitions()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsCatalogsInPrivilegeDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInPrivilegeDefinitions\(\)).

#### Return

`Boolean` — `true` if a privilege definition statement can include a catalog name; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsCatalogsInProcedureCalls()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsCatalogsInProcedureCalls()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInProcedureCalls\(\)).

#### Return

`Boolean` — `true` if a procedure call statement can include a catalog name; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsCatalogsInTableDefinitions()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsCatalogsInTableDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInTableDefinitions\(\)).

#### Return

`Boolean` — `true` if a table definition statement can include a catalog name; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsColumnAliasing()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsColumnAliasing()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsColumnAliasing\(\)).

#### Return

`Boolean` — `true` if the database supports column aliasing; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsConvert()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsConvert()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsConvert\(\)).

#### Return

`Boolean` — `true` if this database supports the JDBC scalar function `CONVERT` for the conversion of one [JDBC type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to another; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsConvert(fromType, toType)

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsConvert(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsConvert\(int,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fromType` | `Integer` | The [type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to convert from. |
| `toType` | `Integer` | The [type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to convert to. |

#### Return

`Boolean` — `true` if this database supports the JDBC scalar function `CONVERT` for the conversion of the specified JDBC types; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsCoreSQLGrammar()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsCoreSQLGrammar()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCoreSQLGrammar\(\)).

#### Return

`Boolean` — `true` if this database supports the ODBC Core SQL grammar; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsDataDefinitionAndDataManipulationTransactions()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsDataDefinitionAndDataManipulationTransactions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDataDefinitionAndDataManipulationTransactions\(\)) .

#### Return

`Boolean` — `true` if this database supports both data definition and data manipulation statements within a transaction; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsDataManipulationTransactionsOnly()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsDataManipulationTransactionsOnly()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDataManipulationTransactionsOnly\(\)).

#### Return

`Boolean` — `true` if this database supports data manipulation statements within a transaction; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsDifferentTableCorrelationNames()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsDifferentTableCorrelationNames()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDifferentTableCorrelationNames\(\)).

#### Return

`Boolean` — `true` if table correlation names are supported and are restricted to be different frm the names of the tables in the database; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsExpressionsInOrderBy()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsExpressionsInOrderBy()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsExpressionsInOrderBy\(\)).

#### Return

`Boolean` — `true` if this database supports expressions in `ORDER BY` lists; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsExtendedSQLGrammar()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsExtendedSQLGrammar()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsExtendedSQLGrammar\(\)).

#### Return

`Boolean` — `true` if this database supports the ODBC Extended SQL grammar; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsFullOuterJoins()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsFullOuterJoins()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsFullOuterJoins\(\)).

#### Return

`Boolean` — `true` if this database supports full nested outer joins; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsGetGeneratedKeys()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsGetGeneratedKeys()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGetGeneratedKeys\(\)).

#### Return

`Boolean` — `true` if auto-generated keys can be retrieved after a statement is executed; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsGroupBy()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsGroupBy()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupBy\(\)).

#### Return

`Boolean` — `true` if this database supports some form of `GROUP BY` clause; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsGroupByBeyondSelect()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsGroupByBeyondSelect()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupByBeyondSelect\(\)).

#### Return

`Boolean` — `true` if this database supports using columns that aren't in the `SELECT` statement in a `GROUP BY` clause, provided that all the columns in the `SELECT` statement are included in the `GROUP BY` clause. Returns `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsIntegrityEnhancementFacility()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsIntegrityEnhancementFacility()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsIntegrityEnhancementFacility\(\)).

#### Return

`Boolean` — `true` if this database supports the SQL Integrity Enhancement Facility; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsLikeEscapeClause()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsLikeEscapeClause()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsLikeEscapeClause\(\)).

#### Return

`Boolean` — `true` if this database supports specifying a `LIKE` escape clause; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsLimitedOuterJoins()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsLimitedOuterJoins()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsLimitedOuterJoins\(\)).

#### Return

`Boolean` — `true` if this database provides limited support for outer joins; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsMinimumSQLGrammar()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsMinimumSQLGrammar()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMinimumSQLGrammar\(\)).

#### Return

`Boolean` — `true` if this database supports the ODBC Minimum SQL grammar; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsMixedCaseIdentifiers()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsMixedCaseIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMixedCaseIdentifiers\(\)).

#### Return

`Boolean` — `true` if the database treats mixed case unquoted SQL identifiers as case-sensitive and as a result stores them in mixed case; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsMixedCaseQuotedIdentifiers()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsMixedCaseQuotedIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMixedCaseQuotedIdentifiers\(\)).

#### Return

`Boolean` — `true` if the database treats mixed case quoted SQL identifiers as case-sensitive and as a result stores them in mixed case; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsMultipleOpenResults()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsMultipleOpenResults()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleOpenResults\(\)).

#### Return

`Boolean` — `true` if a callable statement can return multiple result sets simultenously; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsMultipleResultSets()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsMultipleResultSets()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleResultSets\(\)).

#### Return

`Boolean` — `true` if this database supports getting multiple result sets from a single execution call; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsMultipleTransactions()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsMultipleTransactions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleTransactions\(\)).

#### Return

`Boolean` — `true` if this database supports having multiple transactions on different connections open at once; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsNamedParameters()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsNamedParameters()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsNamedParameters\(\)).

#### Return

`Boolean` — `true` if the database supports named parameters to callable statements; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsNonNullableColumns()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsNonNullableColumns()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsNonNullableColumns\(\)).

#### Return

`Boolean` — `true` if columns in this database may be defined as non-nullable; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsOpenCursorsAcrossCommit()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsOpenCursorsAcrossCommit()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenCursorsAcrossCommit\(\)).

#### Return

`Boolean` — `true` if this database supports keeping cursors always open across commits; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsOpenCursorsAcrossRollback()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsOpenCursorsAcrossRollback()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenCursorsAcrossRollback\(\)).

#### Return

`Boolean` — `true` if this database supports keeping cursors always open across rollbacks; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsOpenStatementsAcrossCommit()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsOpenStatementsAcrossCommit()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenStatementsAcrossCommit\(\)).

#### Return

`Boolean` — `true` if this database supports keeping statements always open across commits; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsOpenStatementsAcrossRollback()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsOpenStatementsAcrossRollback()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenStatementsAcrossRollback\(\)).

#### Return

`Boolean` — `true` if this database supports keeping statements always open across rollbacks; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsOuterJoins()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsOuterJoins()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOuterJoins\(\)).

#### Return

`Boolean` — `true` if this database supports some form of outer join; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsPositionedDelete()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsPositionedDelete()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsPositionedDelete\(\)).

#### Return

`Boolean` — `true` if this database supports positioned `DELETE` statements; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsPositionedUpdate()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsPositionedUpdate()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsPositionedUpdate\(\)).

#### Return

`Boolean` — `true` if this database supports positioned `UPDATE` statements; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsResultSetConcurrency(type, concurrency)

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsResultSetConcurrency(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetConcurrency\(int,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `Integer` | The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`. |
| `concurrency` | `Integer` | The concurrency type, which is either `Jdbc.ResultSet.CONCUR_READ_ONLY` or `Jdbc.ResultSet.CONCUR_UPDATABLE`. |

#### Return

`Boolean` — `true` if this database supports the specified result set and concurrency type combination; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsResultSetHoldability(holdability)

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsResultSetHoldability(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetHoldability\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `holdability` | `Integer` | A holdability constant to check; one of `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`. |

#### Return

`Boolean` — `true` if the database the specified holdability; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsResultSetType(type)

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsResultSetType(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetType\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `Integer` | The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`. |

#### Return

`Boolean` — `true` if this database supports the specified result set type; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsSavepoints()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsSavepoints()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSavepoints\(\)).

#### Return

`Boolean` — `true` if the database supports savepoints; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsSchemasInDataManipulation()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsSchemasInDataManipulation()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInDataManipulation\(\)).

#### Return

`Boolean` — `true` if a data manipulation statement can include a schema name; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsSchemasInIndexDefinitions()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsSchemasInIndexDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInIndexDefinitions\(\)).

#### Return

`Boolean` — `true` if an index definition statement can include a schema name; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsSchemasInPrivilegeDefinitions()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsSchemasInPrivilegeDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInPrivilegeDefinitions\(\)).

#### Return

`Boolean` — `true` if an privilege definition statement can include a schema name; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsSchemasInProcedureCalls()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsSchemasInProcedureCalls()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInProcedureCalls\(\)).

#### Return

`Boolean` — `true` if a procedure call statement can include a schema name; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsSchemasInTableDefinitions()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsSchemasInTableDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInTableDefinitions\(\)).

#### Return

`Boolean` — `true` if a table definition statement can include a schema name; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsSelectForUpdate()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsSelectForUpdate()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSelectForUpdate\(\)).

#### Return

`Boolean` — `true` if this database supports `SELECT FOR UPDATE` statements; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsStatementPooling()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsStatementPooling()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStatementPooling\(\)).

#### Return

`Boolean` — `true` if the database supports statement pooling; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsStoredFunctionsUsingCallSyntax()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsStoredFunctionsUsingCallSyntax()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStoredFunctionsUsingCallSyntax\(\)).

#### Return

`Boolean` — `true` if the database supports invoking user-defined or vendor functions using the stored procedure escape syntax; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsStoredProcedures()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsStoredProcedures()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStoredProcedures\(\)).

#### Return

`Boolean` — `true` if this database supports stored procedure calls that used the stored procedure escape syntax; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsSubqueriesInComparisons()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsSubqueriesInComparisons()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInComparisons\(\)).

#### Return

`Boolean` — `true` if this database supports subqueries in comparison expressions; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsSubqueriesInExists()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsSubqueriesInExists()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInExists\(\)).

#### Return

`Boolean` — `true` if this database supports subqueries in `EXISTS` expressions; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsSubqueriesInIns()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsSubqueriesInIns()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInIns\(\)).

#### Return

`Boolean` — `true` if this database supports subqueries in `IN` expressions; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsSubqueriesInQuantifieds()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsSubqueriesInQuantifieds()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInQuantifieds\(\)).

#### Return

`Boolean` — `true` if this database supports subqueries in quantified expressions; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsTableCorrelationNames()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsTableCorrelationNames()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTableCorrelationNames\(\)).

#### Return

`Boolean` — `true` if this database supports table corelation names; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsTransactionIsolationLevel(level)

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsTransactionIsolationLevel(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTransactionIsolationLevel\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `level` | `Integer` | The transaction isolation level to determine the support of. This must be one of `Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED`, `Jdbc.Connection.TRANSACTION_READ_COMMITTED`, `Jdbc.Connection.TRANSACTION_REPEATABLE_READ`, `Jdbc.Connection.TRANSACTION_SERIALIZABLE`, or `Jdbc.Connection.TRANSACTION_NONE`. |

#### Return

`Boolean` — `true` if this database supports the given transaction isolation level; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsTransactions()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsTransactions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTransactions\(\)).

#### Return

`Boolean` — `true` if this database supports transactions; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsUnion()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsUnion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsUnion\(\)).

#### Return

`Boolean` — `true` if this database supports SQL `UNION`; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### supportsUnionAll()

For documentation of this method, see [`java.sql.DatabaseMetaData#supportsUnionAll()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsUnionAll\(\)).

#### Return

`Boolean` — `true` if this database supports SQL `UNION ALL`; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### updatesAreDetected(type)

For documentation of this method, see [`java.sql.DatabaseMetaData#updatesAreDetected(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#updatesAreDetected\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `Integer` | The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`. |

#### Return

`Boolean` — `true` if for the specified result set type a visible row update is detected by calls to `JdbcResultSet.rowUpdated()`; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### usesLocalFilePerTable()

For documentation of this method, see [`java.sql.DatabaseMetaData#usesLocalFilePerTable()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#usesLocalFilePerTable\(\)).

#### Return

`Boolean` — `true` if the database stores each table in a separate local file; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`

---

### usesLocalFiles()

For documentation of this method, see [`java.sql.DatabaseMetaData#usesLocalFiles()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#usesLocalFiles\(\)).

#### Return

`Boolean` — `true` if the database stores tables in a local file; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.external_request`
