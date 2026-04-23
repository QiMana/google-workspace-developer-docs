---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AsyncRequest
root: workspace
fetched_at: 2026-04-23T15:26:22.341Z
---

# AsyncRequest

Individual batched request wrapper as consumed by `add(AsyncRequest)`

### Nested Class Summary

<table><tbody><tr><td>interface</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AsyncRequest.EventStartCallback">AsyncRequest.EventStartCallback</a></td><td width="100%">Interface to record start of an event such as execution of batched request.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AsyncRequest.SettableFutureCallback">AsyncRequest.SettableFutureCallback</a> <T></td><td width="100%"><code>JsonBatchCallback</code> wrapper which updates <code>ListenableFuture</code> associated with individual batched request.</td></tr></tbody></table>

### Public Constructor Summary

[AsyncRequest](./AsyncRequest.md#AsyncRequest(com.google.api.client.googleapis.services.json.AbstractGoogleJsonClientRequest%3CT%3E,%20com.google.enterprise.cloudsearch.sdk.RetryPolicy,%20com.google.enterprise.cloudsearch.sdk.StatsManager.OperationStats)) (AbstractGoogleJsonClientRequest<T> requestToExecute, [RetryPolicy](./RetryPolicy.md) retryPolicy, [StatsManager.OperationStats](./StatsManager.OperationStats.md) operationStats)

### Public Method Summary

| void | [cancel](./AsyncRequest.md#cancel()) ()  Cancel this request. |
| --- | --- |
| [SettableFutureCallback](./AsyncRequest.SettableFutureCallback.md) <T> | [getCallback](./AsyncRequest.md#getCallback()) ()  Gets `AsyncRequest.SettableFutureCallback` instance associated with batched request. |
| ListenableFuture<T> | [getFuture](./AsyncRequest.md#getFuture()) ()  Gets `ListenableFuture` instance representing pending result from `AsyncRequest` execution. |
| AbstractGoogleJsonClientRequest<T> | [getRequest](./AsyncRequest.md#getRequest()) ()  Gets request to be batched. |
| int | [getRetries](./AsyncRequest.md#getRetries()) ()  Gets current number of retries for `AsyncRequest`. |
| AsyncRequest.Status | [getStatus](./AsyncRequest.md#getStatus()) () |
| void | [incrementRetries](./AsyncRequest.md#incrementRetries()) ()  Increments retry count if batched request is retried. |
| void | [setStatus](./AsyncRequest.md#setStatus(com.google.enterprise.cloudsearch.sdk.AsyncRequest.Status)) (AsyncRequest.Status newStatus)  Sets status for batched request. |

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

#### public AsyncRequest (AbstractGoogleJsonClientRequest<T> requestToExecute, RetryPolicy retryPolicy, StatsManager.OperationStats operationStats)

##### Parameters

| requestToExecute |  |
| --- | --- |
| retryPolicy |  |
| operationStats |  |

## Public Methods

#### public void cancel ()

Cancel this request.

#### public SettableFutureCallback<T> getCallback ()

Gets `AsyncRequest.SettableFutureCallback` instance associated with batched request.

##### Returns

- `AsyncRequest.SettableFutureCallback` instance associated with batched request.

#### public AbstractGoogleJsonClientRequest<T> getRequest ()

Gets request to be batched.

##### Returns

- request to be batched.

#### public int getRetries ()

Gets current number of retries for `AsyncRequest`.

##### Returns

- current number of retries for `AsyncRequest`.

#### public AsyncRequest.Status getStatus ()

##### Returns

- status for batched request.

#### public void incrementRetries ()

Increments retry count if batched request is retried.

#### public void setStatus (AsyncRequest.Status newStatus)

Sets status for batched request.

##### Parameters

| newStatus | updated status for batched request. |
| --- | --- |
