---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder
root: workspace
fetched_at: 2026-04-23T15:26:23.640Z
---

# BatchRequestService.Builder

### Public Constructor Summary

[BatchRequestService.Builder](./BatchRequestService.Builder.md#BatchRequestService.Builder(com.google.api.client.googleapis.services.json.AbstractGoogleJsonClient)) (AbstractGoogleJsonClient service)

Creates Builder to construct for batching requests for `AbstractGoogleJsonClient` service.

### Public Method Summary

|  | [build](./BatchRequestService.Builder.md#build()) () |
| --- | --- |
| [BatchRequestService.Builder](./BatchRequestService.Builder.md) | [setBatchPolicy](./BatchRequestService.Builder.md#setBatchPolicy(com.google.enterprise.cloudsearch.sdk.BatchPolicy)) ([BatchPolicy](./BatchPolicy.md) flushPolicy)  Sets `BatchPolicy` for request batching. |
| [BatchRequestService.Builder](./BatchRequestService.Builder.md) | [setBatchRequestHelper](./BatchRequestService.Builder.md#setBatchRequestHelper(com.google.enterprise.cloudsearch.sdk.BatchRequestService.BatchRequestHelper)) (BatchRequestService.BatchRequestHelper batchRequestHelper)  Sets helper object which allows dependency injection for unit tests. |
| [BatchRequestService.Builder](./BatchRequestService.Builder.md) | [setExecutorFactory](./BatchRequestService.Builder.md#setExecutorFactory(com.google.enterprise.cloudsearch.sdk.BatchRequestService.ExecutorFactory)) ([BatchRequestService.ExecutorFactory](./BatchRequestService.ExecutorFactory.md) executorFactory)  Sets `BatchRequestService.ExecutorFactory` to be used to create instance of `ExecutorService` to be used to execute batched requests asynchronously. |
| [BatchRequestService.Builder](./BatchRequestService.Builder.md) | [setGoogleCredential](./BatchRequestService.Builder.md#setGoogleCredential(com.google.api.client.googleapis.auth.oauth2.GoogleCredential)) (GoogleCredential credential)  Sets credentials to be used for executing `BatchRequest` |
| [BatchRequestService.Builder](./BatchRequestService.Builder.md) | [setRetryPolicy](./BatchRequestService.Builder.md#setRetryPolicy(com.google.enterprise.cloudsearch.sdk.RetryPolicy)) ([RetryPolicy](./RetryPolicy.md) retryPolicy)  Sets `RetryPolicy` for exponential back off and error handling for failed requests. |
| [BatchRequestService.Builder](./BatchRequestService.Builder.md) | [setTimeProvider](./BatchRequestService.Builder.md#setTimeProvider(com.google.enterprise.cloudsearch.sdk.BatchRequestService.TimeProvider)) ([BatchRequestService.TimeProvider](./BatchRequestService.TimeProvider.md) timeProvider)  Sets `BatchRequestService.TimeProvider` to compute current time used for auto flushing batch requests. |

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

#### public BatchRequestService.Builder (AbstractGoogleJsonClient service)

Creates Builder to construct for batching requests for `AbstractGoogleJsonClient` service.

##### Parameters

| service | instance to create batch request for. |
| --- | --- |

## Public Methods

#### build ()

#### public BatchRequestService.Builder setBatchPolicy (BatchPolicy flushPolicy)

Sets `BatchPolicy` for request batching.

##### Parameters

| flushPolicy | `BatchPolicy` for request batching. |
| --- | --- |

#### public BatchRequestService.Builder setBatchRequestHelper (BatchRequestService.BatchRequestHelper batchRequestHelper)

Sets helper object which allows dependency injection for unit tests.

##### Parameters

| batchRequestHelper | helper object which allows dependency injection for unit tests. |
| --- | --- |

#### public BatchRequestService.Builder setExecutorFactory (BatchRequestService.ExecutorFactory executorFactory)

Sets `BatchRequestService.ExecutorFactory` to be used to create instance of `ExecutorService` to be used to execute batched requests asynchronously.

##### Parameters

| executorFactory | `BatchRequestService.ExecutorFactory` to be used |
| --- | --- |

#### public BatchRequestService.Builder setGoogleCredential (GoogleCredential credential)

Sets credentials to be used for executing `BatchRequest`

##### Parameters

| credential | to be used for executing `BatchRequest` |
| --- | --- |

#### public BatchRequestService.Builder setRetryPolicy (RetryPolicy retryPolicy)

Sets `RetryPolicy` for exponential back off and error handling for failed requests.

##### Parameters

| retryPolicy | `RetryPolicy` for exponential back off and error handling for failed requests |
| --- | --- |

#### public BatchRequestService.Builder setTimeProvider (BatchRequestService.TimeProvider timeProvider)

Sets `BatchRequestService.TimeProvider` to compute current time used for auto flushing batch requests.

##### Parameters

| timeProvider | `BatchRequestService.TimeProvider` to get current time. |
| --- | --- |
