---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/TraverseExceptionHandlerFactory
root: workspace
fetched_at: 2026-04-23T15:26:52.349Z
---

# TraverseExceptionHandlerFactory

Constructs an `ExceptionHandler` based up on configuration options.

Optional configuration parameters:

- `traverse.exceptionHandler` - Specifies the action to take if the traversal encounters exceptions: always abort (“0”), never abort ("ignore"), abort only after # exceptions are encountered ("10").
- `abortExceptionHander.backoffMilliSeconds` - Specifies the backoff time in milliseconds to wait between detected handler exceptions (typically used when traversing a repository).

### Constant Summary

| String | [EXCEPTION\_HANDLER\_BACKOFF](./TraverseExceptionHandlerFactory.md#EXCEPTION_HANDLER_BACKOFF) |  |
| --- | --- | --- |
| String | [TRAVERSE\_EXCEPTION\_HANDLER](./TraverseExceptionHandlerFactory.md#TRAVERSE_EXCEPTION_HANDLER) |  |

### Public Method Summary

| static [ExceptionHandler](../../ExceptionHandler.md) | [createFromConfig](./TraverseExceptionHandlerFactory.md#createFromConfig()) ()  Creates an `ExceptionHandler` from a single call, as defined by the configuration file. |
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

## Constants

#### public static final String EXCEPTION\_HANDLER\_BACKOFF

Constant Value: "abortExceptionHander.backoffMilliSeconds"

#### public static final String TRAVERSE\_EXCEPTION\_HANDLER

Constant Value: "traverse.exceptionHandler"

## Public Methods

#### public static ExceptionHandler createFromConfig ()

Creates an `ExceptionHandler` from a single call, as defined by the configuration file.

##### Returns

- configured exception handler
