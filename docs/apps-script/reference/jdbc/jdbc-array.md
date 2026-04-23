---
source: https://developers.google.com/apps-script/reference/jdbc/jdbc-array
root: apps-script
fetched_at: 2026-04-23T15:20:41.269Z
---

# Class JdbcArray

## Page Summary

- JdbcArray represents a JDBC `Array` and provides methods for interacting with SQL array values.
- Methods like `getArray()` and `getArray(index, count)` retrieve elements of the SQL array.
- Information about the base type of the array elements can be obtained using `getBaseType()` and `getBaseTypeName()`.
- The `getResultSet()` and `getResultSet(index, count)` methods return a `JdbcResultSet` containing array elements.

A JDBC `Array`. For documentation of this class, see [`java.sql.Array`](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html) .

## Detailed documentation

### free()

For documentation of this method, see [` java.sql.Array#free()`](http://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#free\(\)).

---

### getArray()

For documentation of this method, see [` java.sql.Array#getArray()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getArray\(\))

#### Return

`Object` — An object containing the ordered elements of the SQL array value.

---

### getArray(index, count)

For documentation of this method, see [`java.sql.Array#getArray(long, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getArray\(long,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `index` | `Integer` | The array index of the first element to retrieve, where the first element has an index of 1. |
| `count` | `Integer` | The number of successive SQL array elements to retrieve. |

#### Return

`Object` — An object containing up to the specified number of consecutive SQL array elements.

---

### getBaseType()

For documentation of this method, see [` java.sql.Array#getBaseType()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getBaseType\(\)).

#### Return

`Integer` — The [type code](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) for the elements in this array.

---

### getBaseTypeName()

For documentation of this method, see [` java.sql.Array#getBaseTypeName()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getBaseTypeName\(\)).

#### Return

`String` — The database-specific name for the built-in base type or else the fully-qualified SQL type name for a base type that is a UDT.

---

### getResultSet()

For documentation of this method, see [` java.sql.Array#getResultSet()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getResultSet\(\)).

#### Return

`JdbcResultSet` — The `JdbcResultSet` containing one row for each of the elements in the array designated by this Array object, with the rows in ascending order based on the indices.

---

### getResultSet(index, count)

For documentation of this method, see [`java.sql.Array#getResultSet(long, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getResultSet\(long,%20int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `index` | `Integer` | The array index of the first element to retrieve, where the first element has an index of 1. |
| `count` | `Integer` | The number of successive SQL array elements to retrieve. |

#### Return

`JdbcResultSet` — A `JdbcResultSet` containing up to the specified number of consecutive SQL array elements.
