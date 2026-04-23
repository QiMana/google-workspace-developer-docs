---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExponentialBackoffExceptionHandler
root: workspace
fetched_at: 2026-04-23T15:26:27.077Z
---

# ExponentialBackoffExceptionHandler

`ExceptionHandler` implementation that uses exponential backoff before retrying.

### Public Constructor Summary

[ExponentialBackoffExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExponentialBackoffExceptionHandler#ExponentialBackoffExceptionHandler\(int,%20long,%20java.util.concurrent.TimeUnit\)) (int maximumTries, long sleepDuration, TimeUnit sleepUnit)

Creates a handler that uses an exponentially increasing amount of sleep time to implement a backoff before retrying.

### Public Method Summary

| boolean | [equals](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExponentialBackoffExceptionHandler#equals\(java.lang.Object\)) (Object obj) |
| --- | --- |
| boolean | [handleException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExponentialBackoffExceptionHandler#handleException\(java.lang.Exception,%20int\)) (Exception ex, int ntries)  Handles the exception by forcing an increasing wait time based on the total number of exceptions previously issued. |
| int | [hashCode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExponentialBackoffExceptionHandler#hashCode\(\)) () |

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

#### public ExponentialBackoffExceptionHandler (int maximumTries, long sleepDuration, TimeUnit sleepUnit)

Creates a handler that uses an exponentially increasing amount of sleep time to implement a backoff before retrying.

##### Parameters

| maximumTries | how many times to try before permanent failure |
| --- | --- |
| sleepDuration | initial sleep duration on failure |
| sleepUnit | sleep duration time unit |

## Public Methods

#### public boolean equals (Object obj)

##### Parameters

| obj |  |
| --- | --- |

#### public boolean handleException (Exception ex, int ntries)

Handles the exception by forcing an increasing wait time based on the total number of exceptions previously issued.

This method continues to perform waits up to the maximum configured number of allowable exceptions. The return value indicates whether the calling process should issue an abort.

##### Parameters

| ex | exception denoting the error |
| --- | --- |
| ntries | number of consecutive failures for the same operation |

##### Returns

- `true` to retry immediate, `false` to abort

##### Throws

| InterruptedException | if the backoff throws it |
| --- | --- |
