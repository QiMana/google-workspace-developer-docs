---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactory
root: workspace
fetched_at: 2026-04-23T15:26:24.603Z
---

# BatchRequestService.ExecutorFactory

Known Indirect Subclasses

[BatchRequestService.ExecutorFactoryImpl](./BatchRequestService.ExecutorFactoryImpl.md)

Factory for obtaining `ExecutorService` instance.

### Public Method Summary

| abstract ExecutorService | [getExecutor](./BatchRequestService.ExecutorFactory.md#getExecutor()) ()  Returns `ExecutorService` to execute batch requests. |
| --- | --- |
| abstract ScheduledExecutorService | [getScheduledExecutor](./BatchRequestService.ExecutorFactory.md#getScheduledExecutor()) ()  Returns `ScheduledExecutorService` to flush batched requests periodically. |

## Public Methods

#### public abstract ExecutorService getExecutor ()

Returns `ExecutorService` to execute batch requests.

##### Returns

- `ExecutorService`

#### public abstract ScheduledExecutorService getScheduledExecutor ()

Returns `ScheduledExecutorService` to flush batched requests periodically.

##### Returns

- `ScheduledExecutorService`
