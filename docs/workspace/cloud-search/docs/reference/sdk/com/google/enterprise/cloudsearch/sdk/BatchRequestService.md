---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService
root: workspace
fetched_at: 2026-04-23T15:26:23.850Z
---

# BatchRequestService

Batch multiple requests. Use `add(AsyncRequest)` to batch requests. Caller can use returned `ListenableFuture` to get result of batched request. Use `isRunning()` to determine if more requests can be batched. Set `BatchPolicy` to specify max batch request size or batching delay. Requests will be automatically flushed once flush policy is satisfied. Use `flush()` to flush current batched requests.

TODO(tvartak): Use executor service to set values or exceptions on settable future with timeout. Caller can potentially add long running callback or listener with `newDirectExecutorService()`. These should not block other threads.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder">BatchRequestService.Builder</a></td><td width="100%">Builder object for creating an instance of <code>BatchRequestService</code></td></tr><tr><td>interface</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactory">BatchRequestService.ExecutorFactory</a></td><td width="100%">Factory for obtaining <code>ExecutorService</code> instance.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactoryImpl">BatchRequestService.ExecutorFactoryImpl</a></td><td width="100%"><code>BatchRequestService.ExecutorFactory</code> implementation to get <code>ExecutorService</code> and <code>ScheduledExecutorService</code> instances used by <code>BatchRequestService</code>.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.SystemTimeProvider">BatchRequestService.SystemTimeProvider</a></td><td width="100%"><code>BatchRequestService.TimeProvider</code> implementation to get current system time.</td></tr><tr><td>interface</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.TimeProvider">BatchRequestService.TimeProvider</a></td><td width="100%">Interface for classes that can provide the current time.</td></tr></tbody></table>

### Public Constructor Summary

[BatchRequestService](./BatchRequestService.md#BatchRequestService(com.google.enterprise.cloudsearch.sdk.BatchRequestService.Builder)) ([BatchRequestService.Builder](./BatchRequestService.Builder.md) builder)

Create an instance of `BatchRequestService`

### Public Method Summary

| <T> void | [add](./BatchRequestService.md#add(com.google.enterprise.cloudsearch.sdk.AsyncRequest%3CT%3E)) ([AsyncRequest](./AsyncRequest.md) <T> request)  Adds an request to batch request. |
| --- | --- |
| ListenableFuture<Integer> | [flush](./BatchRequestService.md#flush()) ()  Flushes all enqueued requests for batched execution. |
| int | [getCurrentBatchSize](./BatchRequestService.md#getCurrentBatchSize()) ()  Returns number of elements enqueued for batched execution. |

### Inherited Method Summary

From class com.google.common.util.concurrent.AbstractIdleService

| final void | addListener(Service.Listener arg0, Executor arg1) |
| --- | --- |
| final void | awaitRunning() |
| final void | awaitRunning(long arg0, TimeUnit arg1) |
| final void | awaitTerminated(long arg0, TimeUnit arg1) |
| final void | awaitTerminated() |
| final Throwable | failureCause() |
| final boolean | isRunning() |
| final Service | startAsync() |
| final Service.State | state() |
| final Service | stopAsync() |
| String | toString() |

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

From interface com.google.common.util.concurrent.Service

| abstract void | addListener(Service.Listener arg0, Executor arg1) |
| --- | --- |
| abstract void | awaitRunning() |
| abstract void | awaitRunning(long arg0, TimeUnit arg1) |
| abstract void | awaitTerminated(long arg0, TimeUnit arg1) |
| abstract void | awaitTerminated() |
| abstract Throwable | failureCause() |
| abstract boolean | isRunning() |
| abstract Service | startAsync() |
| abstract Service.State | state() |
| abstract Service | stopAsync() |

## Public Constructors

#### public BatchRequestService (BatchRequestService.Builder builder)

Create an instance of `BatchRequestService`

##### Parameters

| builder | for creating `BatchRequestService` |
| --- | --- |

## Public Methods

#### public void add (AsyncRequest<T> request)

Adds an request to batch request. If current batch size is greater than or equal to `getMaxBatchSize()`, current batched requests will be automatically flushed. Operation might block if `BatchRequestService` can not accept more request immediately.

##### Parameters

| request | to be batched |
| --- | --- |

##### Throws

| InterruptedException |  |
| --- | --- |

#### public ListenableFuture<Integer> flush ()

Flushes all enqueued requests for batched execution.

##### Returns

- number of requests flushed for batched execution.

##### Throws

| InterruptedException | if interrupted while executing batch requests. |
| --- | --- |

#### public int getCurrentBatchSize ()

Returns number of elements enqueued for batched execution.

##### Returns

- number of elements enqueued for batched execution.
