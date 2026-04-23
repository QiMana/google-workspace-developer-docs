---
source: https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp
root: apps-script
fetched_at: 2026-04-23T15:20:51.675Z
---

# Class JdbcTimestamp

## Page Summary

- A `JdbcTimestamp` is a JDBC Timestamp.
- It provides methods to compare timestamps like `after()` and `before()`.
- You can retrieve individual components of the timestamp such as date, hours, minutes, month, nanos, seconds, time, and year using the `get` methods.
- The `set` methods allow you to modify different parts of the timestamp like date, hours, minutes, month, nanos, seconds, time, and year.
- The documentation for the methods refers to the `java.sql.Timestamp` and `java.sql.Date` classes.

A JDBC `Timestamp`. For documentation of this class, see [`java.sql.Timestamp `](https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html)
.

## Detailed documentation

---

### getDate()

For documentation of this method, see [` java.sql.Date#getDate()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getDate\(\)).

#### Return

`Integer` — The day of the month represented by this timestamp. The value returned is between 1 and 31 representing the day of the month that contains or begins with the instant in time represented by this timestamp, as interpreted in the local time zone.

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

### getMonth()

For documentation of this method, see [` java.sql.Date#getMonth()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMonth\(\)).

#### Return

`Integer` — The month that contains or begins with the instant in time represented by this timestamp. The value returned is between 0 and 11, with the value 0 representing January.

---

### getNanos()

For documentation of this method, see [` java.sql.Timestamp#getNanos()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getNanos\(\)).

#### Return

`Integer` — This timestamp's fractional seconds value (nanoseconds).

---

### getSeconds()

For documentation of this method, see [` java.sql.Date#getSeconds()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getSeconds\(\)).

#### Return

`Integer` — The seconds past the minute represented by this object, as interpreted in the local time zone. The value is a number between 0 through 61 inclusive, whiere 60 and 61 are only possible for machines that take leap seconds into account.

---

### getTime()

For documentation of this method, see [` java.sql.Timestamp#getTime()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getTime\(\)).

#### Return

`Integer` — The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this time object.

---

### getYear()

For documentation of this method, see [` java.sql.Date#getYear()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getYear\(\)).

#### Return

`Integer` — A value that is the result of subtracting 1900 from the year that contains or begins with the instant in time represented by this timestampe, as interpreted in the local time zone.

---

### setDate(date)

For documentation of this method, see [` java.sql.Date#setDate(int)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setDate\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Integer` | The day of month to set. This timestamp is updated to represent a point in time within the specified day of month, with the year, month, hour, minute, and second the same as before, as interpreted in the local time zone. If the date was April 30, for example, and the date is set to 31, then it is treated as if it were on May 1, because April has only 30 days. |

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

### setMonth(month)

For documentation of this method, see [` java.sql.Date#setMonth(int)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMonth\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `month` | `Integer` | The month to set. This timestamp is updated to represent a point in time within the specified month, with the year, date, hour, minute, and second the same as before, as interpreted in the local time zone. If the date was October 31, for example, and the month is set to June, then the new date is treated as if it were on July 1, because June has only 30 days. |

---

### setNanos(nanoseconds)

For documentation of this method, see [` java.sql.Timestamp#setNanos(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setNanos\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `nanoseconds` | `Integer` | The new fractional seconds value. |

---

### setSeconds(seconds)

For documentation of this method, see [` java.sql.Date#setSeconds(int)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setSeconds\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `seconds` | `Integer` | The seconds to set; this object is updated to represent a point in time within the specified second of the minute, with the year, month, date, hour, and minute the same as before, as interpreted in the local time zone. |

---

### setTime(milliseconds)

For documentation of this method, see [` java.sql.Timestamp#setTime(long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setTime\(long\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `milliseconds` | `Integer` | The time value to set. The value is milliseconds since January 1, 1970, 00:00:00 GMT. |

---

### setYear(year)

For documentation of this method, see [` java.sql.Date#setYear(int)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setYear\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `year` | `Integer` | The year value to set; the timestamp's year is set to this value plus 1900. This timestamp is updated to represent a point in time within the specified year, with the month, date, hour, minute, and second the same as before, as interpreted in the local time zone. If the date was February 29, for example, and the year is set to a non-leap year, then the new date is treated as if it were on March 1. |
