---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-execution-status
root: apps-script
fetched_at: 2026-04-23T15:21:27.484Z
---

# Class DataExecutionStatus

## Page Summary

- The `DataExecutionStatus` object provides information about the status of a data execution.
- It includes methods to retrieve the error code, error message, execution state, last execution time, and last refreshed time.
- You can also check if the data from the last successful execution was truncated using the `isTruncated()` method.

The data execution status.

## Detailed documentation

### getErrorCode()

Gets the error code of the data execution.

#### Return

`DataExecutionErrorCode` — The error code.

---

### getErrorMessage()

Gets the error message of the data execution. The message may be empty.

#### Return

`String` — The error message.

---

### getExecutionState()

Gets the state of the data execution.

#### Return

`DataExecutionState` — The execution state.

---

### getLastExecutionTime()

Gets the time the last data execution completed regardless of the execution state.

#### Return

`Date|null` — The last execution time, or `null` if there has never been a data execution.

---

### getLastRefreshedTime()

Gets the time the data last successfully refreshed.

#### Return

`Date|null` — The last successfully refreshed time, or `null` if there is never a successful data execution.

---

### isTruncated()

Returns `true` if the data from last successful execution is truncated, or `false` otherwise.

#### Return

`Boolean` — `True` if the data from execution is truncated, or `false` otherwise.
