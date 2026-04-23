---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.Builder
root: workspace
fetched_at: 2026-04-23T15:26:29.903Z
---

# RetryPolicy.Builder

### Public Constructor Summary

[RetryPolicy.Builder](./RetryPolicy.Builder.md#RetryPolicy.Builder()) ()

### Public Method Summary

|  | [build](./RetryPolicy.Builder.md#build()) () |
| --- | --- |
| [RetryPolicy.Builder](./RetryPolicy.Builder.md) | [setBackOffFactory](./RetryPolicy.Builder.md#setBackOffFactory(com.google.enterprise.cloudsearch.sdk.RetryPolicy.BackOffFactory)) ([RetryPolicy.BackOffFactory](./RetryPolicy.BackOffFactory.md) factory)  Sets `RetryPolicy.BackOffFactory` used for computing exponential back off while retrying failed requests. |
| [RetryPolicy.Builder](./RetryPolicy.Builder.md) | [setMaxRetryLimit](./RetryPolicy.Builder.md#setMaxRetryLimit(int)) (int maxRetries)  Sets maximum retry limit for failed requests. |

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

## Public Constructors

#### public RetryPolicy.Builder ()

## Public Methods

#### build ()

#### public RetryPolicy.Builder setBackOffFactory (RetryPolicy.BackOffFactory factory)

Sets `RetryPolicy.BackOffFactory` used for computing exponential back off while retrying failed requests.

##### Parameters

| factory | `RetryPolicy.BackOffFactory` used for computing exponential back off |
| --- | --- |

#### public RetryPolicy.Builder setMaxRetryLimit (int maxRetries)

Sets maximum retry limit for failed requests.

##### Parameters

| maxRetries | maximum retry limit for failed requests. |
| --- | --- |
