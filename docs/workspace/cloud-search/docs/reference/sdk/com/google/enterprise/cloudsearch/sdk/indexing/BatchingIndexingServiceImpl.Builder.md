---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder
root: workspace
fetched_at: 2026-04-23T15:26:41.152Z
---

# BatchingIndexingServiceImpl.Builder

### Public Constructor Summary

[BatchingIndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder#BatchingIndexingServiceImpl.Builder\(\)) ()

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder#build\(\)) () |
| --- | --- |
| [BatchingIndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder) | [setBatchPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder#setBatchPolicy\(com.google.enterprise.cloudsearch.sdk.BatchPolicy\)) ([BatchPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy) batchPolicy)  Sets `BatchPolicy` to be used for batching requests |
| [BatchingIndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder) | [setCredential](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder#setCredential\(com.google.api.client.googleapis.auth.oauth2.GoogleCredential\)) (GoogleCredential credential)  Sets `GoogleCredential` to be used for batching requests |
| [BatchingIndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder) | [setExecutorFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder#setExecutorFactory\(com.google.enterprise.cloudsearch.sdk.BatchRequestService.ExecutorFactory\)) ([BatchRequestService.ExecutorFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactory) executorFactory)  Sets `BatchRequestService.ExecutorFactory` to be used for creating instances of `ExecutorService` used by batching service |
| [BatchingIndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder) | [setRetryPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder#setRetryPolicy\(com.google.enterprise.cloudsearch.sdk.RetryPolicy\)) ([RetryPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy) retryPolicy)  Sets `RetryPolicy` to be used for batching requests |
| [BatchingIndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder) | [setService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder#setService\(com.google.api.services.cloudsearch.v1.CloudSearch\)) (CloudSearch service)  Sets `CloudSearch` service client to be used for creating batch requests |

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
