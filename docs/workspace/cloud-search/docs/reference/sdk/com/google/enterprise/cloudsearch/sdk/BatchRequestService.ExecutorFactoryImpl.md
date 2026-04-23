---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactoryImpl
root: workspace
fetched_at: 2026-04-23T15:26:24.372Z
---

# BatchRequestService.ExecutorFactoryImpl

implementation to get `ExecutorService` and `ScheduledExecutorService` instances used by .

### Public Constructor Summary

[BatchRequestService.ExecutorFactoryImpl](./BatchRequestService.ExecutorFactoryImpl.md#BatchRequestService.ExecutorFactoryImpl()) ()

### Public Method Summary

| ExecutorService | [getExecutor](./BatchRequestService.ExecutorFactoryImpl.md#getExecutor()) ()  Gets an instance of `ExecutorService` |
| --- | --- |
| ScheduledExecutorService | [getScheduledExecutor](./BatchRequestService.ExecutorFactoryImpl.md#getScheduledExecutor()) ()  Gets an instance of `ScheduledExecutorService`. |

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

| abstract ExecutorService | ()  Returns `ExecutorService` to execute batch requests. |
| --- | --- |
| abstract ScheduledExecutorService | ()  Returns `ScheduledExecutorService` to flush batched requests periodically. |

## Public Constructors

#### public BatchRequestService.ExecutorFactoryImpl ()

## Public Methods

#### public ExecutorService getExecutor ()

Gets an instance of `ExecutorService`

##### Returns

- `ExecutorService`

#### public ScheduledExecutorService getScheduledExecutor ()

Gets an instance of `ScheduledExecutorService`.

##### Returns

- `ScheduledExecutorService`
