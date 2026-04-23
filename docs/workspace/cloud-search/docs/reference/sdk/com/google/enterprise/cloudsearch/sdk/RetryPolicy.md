---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy
root: workspace
fetched_at: 2026-04-23T15:26:29.744Z
---

# RetryPolicy

Object to store policy parameters used for backoff and retry recoverable errors.

Store the maximum allowable number of retries and the back-off algorithm (typically an exponential back-off) to use when recoverable HTTP errors occur.

### Nested Class Summary

<table><tbody><tr><td>interface</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.BackOffFactory">RetryPolicy.BackOffFactory</a></td><td width="100%">Creates an instance of <code>BackOff</code></td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.Builder">RetryPolicy.Builder</a></td><td width="100%">Builder for creating an instance of <code>RetryPolicy</code></td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.DefaultBackOffFactoryImpl">RetryPolicy.DefaultBackOffFactoryImpl</a></td><td width="100%">Default factory object used to create an <code>ExponentialBackOff</code> with an initial delay of 1 second(s) and a multiplier of 2.</td></tr></tbody></table>

### Constant Summary

| String | [CONFIG\_MAXIMUM\_RETRIES](./RetryPolicy.md#CONFIG_MAXIMUM_RETRIES) |  |
| --- | --- | --- |
| int | [DEFAULT\_MAXIMUM\_RETRIES](./RetryPolicy.md#DEFAULT_MAXIMUM_RETRIES) |  |

### Public Method Summary

| static [RetryPolicy](./RetryPolicy.md) | [fromConfiguration](./RetryPolicy.md#fromConfiguration()) ()  Creates a retry policy using parameters specified in connector configuration file. |
| --- | --- |
| [RetryPolicy.BackOffFactory](./RetryPolicy.BackOffFactory.md) | [getBackOffFactory](./RetryPolicy.md#getBackOffFactory()) ()  Gets `RetryPolicy.BackOffFactory` instance used for cmputing exponential back off. |
| int | [getMaxRetryLimit](./RetryPolicy.md#getMaxRetryLimit()) ()  Gets maximum number of times a failed request would be retried before marking request as failed. |
| boolean | [isRetryableStatusCode](./RetryPolicy.md#isRetryableStatusCode(int)) (int statusCode)  Checks if request with `statusCode` response is retryable. |

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

#### public static final String CONFIG\_MAXIMUM\_RETRIES

Constant Value: "maxRetryLimit"

#### public static final int DEFAULT\_MAXIMUM\_RETRIES

Constant Value: 5

## Public Methods

#### public static RetryPolicy fromConfiguration ()

Creates a retry policy using parameters specified in connector configuration file.

- `maxRetryLimit=5` - maximum number of retries of failed (but recoverable) API calls.

#### public RetryPolicy.BackOffFactory getBackOffFactory ()

Gets `RetryPolicy.BackOffFactory` instance used for cmputing exponential back off.

#### public int getMaxRetryLimit ()

Gets maximum number of times a failed request would be retried before marking request as failed.

#### public boolean isRetryableStatusCode (int statusCode)

Checks if request with `statusCode` response is retryable.

##### Parameters

| statusCode | to check |
| --- | --- |

##### Returns

- true if request with `statusCode` response is retryable, false otherwise.
