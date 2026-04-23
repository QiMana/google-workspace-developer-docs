---
source: https://developers.google.com/apps-script/reference/jdbc/jdbc-ref
root: apps-script
fetched_at: 2026-04-23T15:20:41.682Z
---

# Class JdbcRef

## Page Summary

- JdbcRef is a JDBC `Ref` object.
- It has methods to get the base type name and the referenced object, as well as set the referenced object.
- Detailed documentation for its methods can be found in the `java.sql.Ref` class.

A JDBC `Ref`. For documentation of this class, see [`java.sql.Ref`](https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html).

## Detailed documentation

### getBaseTypeName()

For documentation of this method, see [` java.sql.Ref#getBaseTypeName()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#getBaseTypeName\(\)).

#### Return

`String` — The fully-qualified SQL name of the SQL structured type this `JdbcRef` references.

---

### getObject()

For documentation of this method, see [` java.sql.Ref#getObject()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#getObject\(\)).

#### Return

`Object` — The object that this `JdbcRef` references.

---

### setObject(object)

For documentation of this method, see [`java.sql.Ref#setObject(Object)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#setObject\(java.lang.Object\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `object` | `Object` | The object to set as the refernence target. |
