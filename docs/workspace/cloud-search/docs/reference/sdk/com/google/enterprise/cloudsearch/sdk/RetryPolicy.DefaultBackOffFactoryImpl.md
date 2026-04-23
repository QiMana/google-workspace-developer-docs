---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.DefaultBackOffFactoryImpl
root: workspace
fetched_at: 2026-04-23T15:26:29.581Z
---

# RetryPolicy.DefaultBackOffFactoryImpl

Default factory object used to create an `ExponentialBackOff` with an initial delay of 1 second(s) and a multiplier of 2.

### Constant Summary

| int | [INITIAL\_DELAY\_SECONDS](./RetryPolicy.DefaultBackOffFactoryImpl.md#INITIAL_DELAY_SECONDS) | Default initial back off delay for retrying request after error. |
| --- | --- | --- |
| double | [MULTIPLIER](./RetryPolicy.DefaultBackOffFactoryImpl.md#MULTIPLIER) | Default multiplier to compute back off duration as per `getMultiplier()` |

### Public Constructor Summary

[RetryPolicy.DefaultBackOffFactoryImpl](./RetryPolicy.DefaultBackOffFactoryImpl.md#RetryPolicy.DefaultBackOffFactoryImpl()) ()

### Public Method Summary

| BackOff | [createBackOffInstance](./RetryPolicy.DefaultBackOffFactoryImpl.md#createBackOffInstance()) ()  Returns `BackOff` instance used for implementing exponential back off for failed requests. |
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

From interface [com.google.enterprise.cloudsearch.sdk.RetryPolicy.BackOffFactory](./RetryPolicy.BackOffFactory.md)

| abstract BackOff | [createBackOffInstance](./RetryPolicy.BackOffFactory.md#createBackOffInstance()) ()  Returns `BackOff` instance used for implementing exponential back off for failed requests. |
| --- | --- |

## Constants

#### public static final int INITIAL\_DELAY\_SECONDS

Default initial back off delay for retrying request after error.

Constant Value: 1

#### public static final double MULTIPLIER

Default multiplier to compute back off duration as per `getMultiplier()`

Constant Value: 2.0

## Public Constructors

#### public RetryPolicy.DefaultBackOffFactoryImpl ()

## Public Methods

#### public BackOff createBackOffInstance ()

Returns `BackOff` instance used for implementing exponential back off for failed requests.
