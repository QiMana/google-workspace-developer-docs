---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/IgnoreExceptionHandler
root: workspace
fetched_at: 2026-04-23T15:26:27.484Z
---

# IgnoreExceptionHandler

Exception handler that simply ignores all errors.

### Public Constructor Summary

[IgnoreExceptionHandler](./IgnoreExceptionHandler.md#IgnoreExceptionHandler()) ()

### Public Method Summary

| boolean | [handleException](./IgnoreExceptionHandler.md#handleException(java.lang.Exception,%20int)) (Exception e, int ntries)  Handles the exception by always just ignoring the error. |
| --- | --- |

### Inherited Method Summary

From class java.lang.Object

| boolean | equals(Object arg0) |
| --- | --- |
| final Class<?> | getClass() |
| int | hashCode() |
| final void | notify() |
| final void | notifyAll() |
| String | toString() |
| final void | wait(long arg0, int arg1) |
| final void | wait(long arg0) |
| final void | wait() |

From interface [com.google.enterprise.cloudsearch.sdk.ExceptionHandler](./ExceptionHandler.md)

| abstract boolean | [handleException](./ExceptionHandler.md#handleException(java.lang.Exception,%20int)) (Exception ex, int ntries)  Determines how to proceed after an exception is thrown. |
| --- | --- |

## Public Constructors

#### public IgnoreExceptionHandler ()

## Public Methods

#### public boolean handleException (Exception e, int ntries)

Handles the exception by always just ignoring the error.

##### Parameters

| e | the exception that occurred |
| --- | --- |
| ntries | the number of consecutive failures for the current operation |

##### Returns

- `true` for an immediate retry or `false` to abort

##### Throws

| InterruptedException |  |
| --- | --- |
