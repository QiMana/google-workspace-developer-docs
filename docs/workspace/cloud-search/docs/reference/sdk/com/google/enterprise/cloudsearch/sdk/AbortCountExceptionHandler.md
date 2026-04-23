---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AbortCountExceptionHandler
root: workspace
fetched_at: 2026-04-23T15:26:20.921Z
---

# AbortCountExceptionHandler

Exception handler that is configured with a count of allowable retries before forcing an abort.

This is similar to the `ExponentialBackoffExceptionHandler` except the wait time is constant.

### Public Constructor Summary

[AbortCountExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AbortCountExceptionHandler#AbortCountExceptionHandler\(int,%20long,%20java.util.concurrent.TimeUnit\)) (int maximumTries, long sleepDuration, TimeUnit sleepUnit)

Constructs an AbortCountExceptionHandler.

### Public Method Summary

| boolean | [handleException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AbortCountExceptionHandler#handleException\(java.lang.Exception,%20int\)) (Exception e, int ntries)  Determines how to proceed when an exception is thrown. |
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

From interface [com.google.enterprise.cloudsearch.sdk.ExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler)

| abstract boolean | [handleException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler#handleException\(java.lang.Exception,%20int\)) (Exception ex, int ntries)  Determines how to proceed after an exception is thrown. |
| --- | --- |

## Public Constructors

#### public AbortCountExceptionHandler (int maximumTries, long sleepDuration, TimeUnit sleepUnit)

Constructs an AbortCountExceptionHandler.

##### Parameters

| maximumTries | number of retries to take if the traversal encounters exceptions |
| --- | --- |
| sleepDuration | the backoff time to wait between detected handler exceptions |
| sleepUnit | the TimeUnit for sleepDuration |

## Public Methods

#### public boolean handleException (Exception e, int ntries)

Determines how to proceed when an exception is thrown.

##### Parameters

| e | occurring exception |
| --- | --- |
| ntries | number of previous failures |

##### Returns

- true to retry, false to abort (or rethrow exception)

##### Throws

| InterruptedException | on interruption |
| --- | --- |
