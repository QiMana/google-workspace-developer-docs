---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder
root: workspace
fetched_at: 2026-04-23T15:26:23.640Z
---

# BatchRequestService.Builder

### Public Constructor Summary

[BatchRequestService.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder#BatchRequestService.Builder\(com.google.api.client.googleapis.services.json.AbstractGoogleJsonClient\)) (AbstractGoogleJsonClient service)

Creates Builder to construct for batching requests for `AbstractGoogleJsonClient` service.

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder#build\(\)) () |
| --- | --- |
| [BatchRequestService.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder) | [setBatchPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder#setBatchPolicy\(com.google.enterprise.cloudsearch.sdk.BatchPolicy\)) ([BatchPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy) flushPolicy)  Sets `BatchPolicy` for request batching. |
| [BatchRequestService.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder) | [setBatchRequestHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder#setBatchRequestHelper\(com.google.enterprise.cloudsearch.sdk.BatchRequestService.BatchRequestHelper\)) (BatchRequestService.BatchRequestHelper batchRequestHelper)  Sets helper object which allows dependency injection for unit tests. |
| [BatchRequestService.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder) | [setExecutorFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder#setExecutorFactory\(com.google.enterprise.cloudsearch.sdk.BatchRequestService.ExecutorFactory\)) ([BatchRequestService.ExecutorFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactory) executorFactory)  Sets `BatchRequestService.ExecutorFactory` to be used to create instance of `ExecutorService` to be used to execute batched requests asynchronously. |
| [BatchRequestService.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder) | [setGoogleCredential](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder#setGoogleCredential\(com.google.api.client.googleapis.auth.oauth2.GoogleCredential\)) (GoogleCredential credential)  Sets credentials to be used for executing `BatchRequest` |
| [BatchRequestService.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder) | [setRetryPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder#setRetryPolicy\(com.google.enterprise.cloudsearch.sdk.RetryPolicy\)) ([RetryPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy) retryPolicy)  Sets `RetryPolicy` for exponential back off and error handling for failed requests. |
| [BatchRequestService.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder) | [setTimeProvider](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder#setTimeProvider\(com.google.enterprise.cloudsearch.sdk.BatchRequestService.TimeProvider\)) ([BatchRequestService.TimeProvider](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.TimeProvider) timeProvider)  Sets `BatchRequestService.TimeProvider` to compute current time used for auto flushing batch requests. |

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
