---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler
root: workspace
fetched_at: 2026-04-23T15:26:26.921Z
---

# ExceptionHandler

Known Indirect Subclasses

Interface for handling errors and defining a retry policy.

### Public Method Summary

| abstract boolean | [handleException](./ExceptionHandler.md#handleException(java.lang.Exception,%20int)) (Exception ex, int ntries)  Determines how to proceed after an exception is thrown. |
| --- | --- |

## Public Methods

#### public abstract boolean handleException (Exception ex, int ntries)

Determines how to proceed after an exception is thrown.

The connector code passes the exception along with the number of attempts to the method. Implementations might call `Thread.sleep()` to delay or *back off* before returning.

##### Parameters

| ex | the exception that occurred |
| --- | --- |
| ntries | the number of consecutive failures for the current operation |

##### Returns

- `true` for an immediate retry or `false` to abort

##### Throws

| InterruptedException | if an interruption occurs during the *back off* |
| --- | --- |
