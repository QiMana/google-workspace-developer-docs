---
source: https://developers.google.com/apps-script/reference/jdbc/jdbc-date
root: apps-script
fetched_at: 2026-04-23T15:20:41.787Z
---

# Class JdbcDate

## Page Summary

- JdbcDate represents a JDBC `Date` and its documentation refers to `java.sql.Date`.
- It includes methods for comparing dates such as `after()` and `before()`.
- Methods like `getDate()`, `getMonth()`, `getTime()`, and `getYear()` allow retrieval of specific date components.
- You can modify date components using methods like `setDate()`, `setMonth()`, `setTime()`, and `setYear()`.

A JDBC `Date`. For documentation of this class, see [`java.sql.Date`](https://docs.oracle.com/javase/6/docs/api/java/sql/Date.html) .

## Detailed documentation

### after(when)

For documentation of this method, see [`java.sql.Date#after(date)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#after\(java.util.Date\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `when` | `JdbcDate` | A date to compare to. |

#### Return

`Boolean` — `true` if and only if this date is strictly later than the provided date; `false` otherwise.

---

### before(when)

For documentation of this method, see [`java.sql.Date#before(date)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#before\(java.util.Date\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `when` | `JdbcDate` | A date to compare to. |

#### Return

`Boolean` — `true` if and only if this date is strictly earlier than the provided date; `false` otherwise.

---

### getDate()

For documentation of this method, see [` java.sql.Date#getDate()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getDate\(\)).

#### Return

`Integer` — The day of the month represented by this date. The value is between 1 and 31.

---

### getMonth()

For documentation of this method, see [` java.sql.Date#getMonth()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMonth\(\)).

#### Return

`Integer` — The number representing the month that contains or begins with the instant in time represented by this date. The value returned is between 0 and 11, with the value 0 representing January.

---

### getTime()

For documentation of this method, see [` java.sql.Date#getTime()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getTime\(\)).

#### Return

`Integer` — The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this date.

---

### getYear()

For documentation of this method, see [` java.sql.Date#getYear()`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getYear\(\)).

#### Return

`Integer` — The result of subtracting 1900 from the year that contains or begins with the instant in time represented by this date, as interpreted in the local time zone.

---

### setDate(date)

For documentation of this method, see [` java.sql.Date#setDate(int)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setDate\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Integer` | The day of the month to set. The value is between 1 and 31, modified as needed. For example, if the date was April 30, for example, and the date is set to 31, then it is treated as if it were on May 1, because April has only 30 days. |

---

### setMonth(month)

For documentation of this method, see [` java.sql.Date#setMonth(int)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMonth\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `month` | `Integer` | The month value to set. The value returned is between 0 and 11, with the value 0 representing January. |

---

### setTime(milliseconds)

For documentation of this method, see [` java.sql.Date#setTime(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#setTime\(long\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `milliseconds` | `Integer` | The number of milliseconds since January 1, 1970, 00:00:00 GMT, not to exceed the milliseconds representation for the year 8099. A negative number indicates the number of milliseconds before January 1, 1970, 00:00:00 GMT. |

---

### setYear(year)

For documentation of this method, see [` java.sql.Date#setYear(int)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setYear\(int\)).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `year` | `Integer` | The value to set the year with. This value plus 1900 is the resulting year the date has after this method executes. |
