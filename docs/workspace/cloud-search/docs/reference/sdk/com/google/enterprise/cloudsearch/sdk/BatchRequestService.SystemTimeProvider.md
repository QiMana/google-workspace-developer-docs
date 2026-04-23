---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.SystemTimeProvider
root: workspace
fetched_at: 2026-04-23T15:26:24.174Z
---

# BatchRequestService.SystemTimeProvider

`BatchRequestService.TimeProvider` implementation to get current system time.

### Public Constructor Summary

[BatchRequestService.SystemTimeProvider](./BatchRequestService.SystemTimeProvider.md#BatchRequestService.SystemTimeProvider()) ()

### Public Method Summary

| long | [currentTimeMillis](./BatchRequestService.SystemTimeProvider.md#currentTimeMillis()) ()  Returns the current time in milliseconds. |
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

From interface [com.google.enterprise.cloudsearch.sdk.BatchRequestService.TimeProvider](./BatchRequestService.TimeProvider.md)

| abstract long | [currentTimeMillis](./BatchRequestService.TimeProvider.md#currentTimeMillis()) ()  Returns the current time in milliseconds. |
| --- | --- |

## Public Constructors

#### public BatchRequestService.SystemTimeProvider ()

## Public Methods

#### public long currentTimeMillis ()

Returns the current time in milliseconds.
