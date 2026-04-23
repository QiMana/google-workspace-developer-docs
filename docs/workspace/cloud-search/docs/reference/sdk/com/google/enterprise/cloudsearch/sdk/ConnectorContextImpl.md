---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContextImpl
root: workspace
fetched_at: 2026-04-23T15:26:26.087Z
---

# ConnectorContextImpl

### Public Method Summary

| [ExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler) | [getIncrementalTraversalExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContextImpl#getIncrementalTraversalExceptionHandler\(\)) ()  Backoff policy for exceptions from `handleIncrementalChanges()` |
| --- | --- |
| [ExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler) | [getTraversalExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContextImpl#getTraversalExceptionHandler\(\)) () |

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

| abstract [ExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler) | ()  Returns the exception handler used by the `handleIncrementalChanges()` method call. |
| --- | --- |
| abstract [ExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler) | () |

## Public Methods

#### public ExceptionHandler getIncrementalTraversalExceptionHandler ()

Backoff policy for exceptions from `handleIncrementalChanges()`

##### Returns

- `ExceptionHandler` to handle incremental change handling exceptions.

#### public ExceptionHandler getTraversalExceptionHandler ()

##### Returns

- `ExceptionHandler` to handle traversal exceptions.
