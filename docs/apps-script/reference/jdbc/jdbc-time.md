---
source: https://developers.google.com/apps-script/reference/jdbc/jdbc-time
root: apps-script
fetched_at: 2026-04-23T15:20:50.906Z
---

# Class JdbcTime

## Page Summary

- JdbcTime represents a JDBC `Time` object.
- It provides methods for comparing time objects (`after`, `before`) and getting/setting hours, minutes, seconds, and the time in milliseconds.
- Most methods of JdbcTime correspond to methods in the `java.sql.Date` or `java.sql.Time` classes in Java.

A JDBC `Time`. For documentation of this class, see [`java.sql.Time`](https://docs.oracle.com/javase/6/docs/api/java/sql/Time.html) .

## Detailed documentation

### after(when)

For documentation of this method, see [`java.sql.Date#after(Date)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#after\(java.util.Date\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `when` | `JdbcTime` | A time to compare to. |

#### Return

`Boolean` — `true` if and only if this time is strictly later than the time specified as a parameter; `false` otherwise.

---

### before(when)

For documentation of this method, see [`java.sql.Date#before(Date)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#before\(java.util.Date\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `when` | `JdbcTime` | A time to compare to. |

#### Return

`Boolean` — `true` if and only if this time is strictly earlier than the time specified as a parameter; `false` otherwise.

---

### getHours()

For documentation of this method, see [` java.sql.Date#getHours()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getHours\(\)).

#### Return

`Integer` — The hour represented by this object; the value is a number (0 through 23) representing the hour within the day that contains or begins with the instant in time represented by this object, as interpreted in the local time zone.

---

### getMinutes()

For documentation of this method, see [` java.sql.Date#getMinutes()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMinutes\(\)).

#### Return

`Integer` — The minutes past the hour represented by this object, as interpreted in the local time zone. The value is a number between 0 through 59 inclusive.

---

### getSeconds()

For documentation of this method, see [` java.sql.Date#getSeconds()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getSeconds\(\)).

#### Return

`Integer` — The seconds past the minute represented by this object, as interpreted in the local time zone. The value is a number between 0 through 61 inclusive, whiere 60 and 61 are only possible for machines that take leap seconds into account.

---

### getTime()

For documentation of this method, see [` java.sql.Date#getTime()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getTime\(\)).

#### Return

`Integer` — The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this time object.

---

### setHours(hours)

For documentation of this method, see [` java.sql.Date#setHours(int)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setHours\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hours` | `Integer` | The hour to set; this object is updated to represent a point in time within the specified hour of the day, with the year, month, date, minute, and second the same as before, as interpreted in the local time zone. |

---

### setMinutes(minutes)

For documentation of this method, see [` java.sql.Date#setMinutes(int)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMinutes\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `minutes` | `Integer` | The minutes to set; this object is updated to represent a point in time within the specified minute of the hour, with the year, month, date, hour, and second the same as before, as interpreted in the local time zone. |

---

### setSeconds(seconds)

For documentation of this method, see [` java.sql.Date#setSeconds(int)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setSeconds\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `seconds` | `Integer` | The seconds to set; this object is updated to represent a point in time within the specified second of the minute, with the year, month, date, hour, and minute the same as before, as interpreted in the local time zone. |

---

### setTime(milliseconds)

For documentation of this method, see [` java.sql.Time#setTime(long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#setTime\(long\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `milliseconds` | `Integer` | The time value to set. The value is milliseconds since January 1, 1970, 00:00:00 GMT, while a negative number is milliseconds before that time. |
