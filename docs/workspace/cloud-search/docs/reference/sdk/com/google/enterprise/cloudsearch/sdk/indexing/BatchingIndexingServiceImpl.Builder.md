---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder
root: workspace
fetched_at: 2026-04-23T15:26:41.152Z
---

# BatchingIndexingServiceImpl.Builder

### Public Constructor Summary

[BatchingIndexingServiceImpl.Builder](./BatchingIndexingServiceImpl.Builder.md#BatchingIndexingServiceImpl.Builder()) ()

### Public Method Summary

|  | [build](./BatchingIndexingServiceImpl.Builder.md#build()) () |
| --- | --- |
| [BatchingIndexingServiceImpl.Builder](./BatchingIndexingServiceImpl.Builder.md) | [setBatchPolicy](./BatchingIndexingServiceImpl.Builder.md#setBatchPolicy(com.google.enterprise.cloudsearch.sdk.BatchPolicy)) ([BatchPolicy](../BatchPolicy.md) batchPolicy)  Sets `BatchPolicy` to be used for batching requests |
| [BatchingIndexingServiceImpl.Builder](./BatchingIndexingServiceImpl.Builder.md) | [setCredential](./BatchingIndexingServiceImpl.Builder.md#setCredential(com.google.api.client.googleapis.auth.oauth2.GoogleCredential)) (GoogleCredential credential)  Sets `GoogleCredential` to be used for batching requests |
| [BatchingIndexingServiceImpl.Builder](./BatchingIndexingServiceImpl.Builder.md) | [setExecutorFactory](./BatchingIndexingServiceImpl.Builder.md#setExecutorFactory(com.google.enterprise.cloudsearch.sdk.BatchRequestService.ExecutorFactory)) ([BatchRequestService.ExecutorFactory](../BatchRequestService.ExecutorFactory.md) executorFactory)  Sets `BatchRequestService.ExecutorFactory` to be used for creating instances of `ExecutorService` used by batching service |
| [BatchingIndexingServiceImpl.Builder](./BatchingIndexingServiceImpl.Builder.md) | [setRetryPolicy](./BatchingIndexingServiceImpl.Builder.md#setRetryPolicy(com.google.enterprise.cloudsearch.sdk.RetryPolicy)) ([RetryPolicy](../RetryPolicy.md) retryPolicy)  Sets `RetryPolicy` to be used for batching requests |
| [BatchingIndexingServiceImpl.Builder](./BatchingIndexingServiceImpl.Builder.md) | [setService](./BatchingIndexingServiceImpl.Builder.md#setService(com.google.api.services.cloudsearch.v1.CloudSearch)) (CloudSearch service)  Sets `CloudSearch` service client to be used for creating batch requests |

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

#### public BatchingIndexingServiceImpl.Builder ()

## Public Methods

#### build ()

#### public BatchingIndexingServiceImpl.Builder setBatchPolicy (BatchPolicy batchPolicy)

Sets `BatchPolicy` to be used for batching requests

##### Parameters

| batchPolicy | to be used for batching requests |
| --- | --- |

##### Returns

- this builder instance

#### public BatchingIndexingServiceImpl.Builder setCredential (GoogleCredential credential)

Sets `GoogleCredential` to be used for batching requests

##### Parameters

| credential | to be used for batching requests |
| --- | --- |

##### Returns

- this builder instance

#### public BatchingIndexingServiceImpl.Builder setExecutorFactory (BatchRequestService.ExecutorFactory executorFactory)

Sets `BatchRequestService.ExecutorFactory` to be used for creating instances of `ExecutorService` used by batching service

##### Parameters

| executorFactory | to be used for creating instances of `ExecutorService` |
| --- | --- |

##### Returns

- this builder instance

#### public BatchingIndexingServiceImpl.Builder setRetryPolicy (RetryPolicy retryPolicy)

Sets `RetryPolicy` to be used for batching requests

##### Parameters

| retryPolicy | to be used for batching requests |
| --- | --- |

##### Returns

- this builder instance

#### public BatchingIndexingServiceImpl.Builder setService (CloudSearch service)

Sets `CloudSearch` service client to be used for creating batch requests

##### Parameters

| service | `CloudSearch` service client to be used for creating batch requests |
| --- | --- |

##### Returns

- this builder instance
