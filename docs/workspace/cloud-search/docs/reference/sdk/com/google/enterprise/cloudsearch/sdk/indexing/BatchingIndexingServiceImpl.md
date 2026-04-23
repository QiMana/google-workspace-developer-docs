---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl
root: workspace
fetched_at: 2026-04-23T15:26:40.764Z
---

# BatchingIndexingServiceImpl

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder">BatchingIndexingServiceImpl.Builder</a></td><td width="100%">Builder for creating an instance of <code>BatchingIndexingServiceImpl</code></td></tr></tbody></table>

### Public Method Summary

| ListenableFuture<Operation> | [deleteItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl#deleteItem\(com.google.api.services.cloudsearch.v1.CloudSearch.Indexing.Datasources.Items.Delete\)) (CloudSearch.Indexing.Datasources.Items.Delete deleteItem)  Adds a delete item request to the batch. |
| --- | --- |
| static [BatchingIndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingService) | [fromConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl#fromConfiguration\(com.google.api.services.cloudsearch.v1.CloudSearch,%20com.google.api.client.googleapis.auth.oauth2.GoogleCredential\)) (CloudSearch service, GoogleCredential credential) |
| ListenableFuture<Operation> | [indexItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl#indexItem\(com.google.api.services.cloudsearch.v1.CloudSearch.Indexing.Datasources.Items.Index\)) (CloudSearch.Indexing.Datasources.Items.Index indexItem)  Adds an index item request to the batch. |
| ListenableFuture<Item> | [pushItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl#pushItem\(com.google.api.services.cloudsearch.v1.CloudSearch.Indexing.Datasources.Items.Push\)) (CloudSearch.Indexing.Datasources.Items.Push pushItem)  Adds a push item request to the batch. |
| ListenableFuture<Operation> | [unreserveItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl#unreserveItem\(com.google.api.services.cloudsearch.v1.CloudSearch.Indexing.Datasources.Items.Unreserve\)) (CloudSearch.Indexing.Datasources.Items.Unreserve unreserveItem)  Adds an unreserve queue request to the batch. |

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

| abstract ListenableFuture<Operation> | (CloudSearch.Indexing.Datasources.Items.Delete deleteItem)  Adds a delete item request to the batch. |
| --- | --- |
| abstract ListenableFuture<Operation> | (CloudSearch.Indexing.Datasources.Items.Index indexItem)  Adds an index item request to the batch. |
| abstract ListenableFuture<Item> | (CloudSearch.Indexing.Datasources.Items.Push pushItem)  Adds a push item request to the batch. |
| abstract ListenableFuture<Operation> | (CloudSearch.Indexing.Datasources.Items.Unreserve unreserveItem)  Adds an unreserve queue request to the batch. |

## Public Methods

#### public ListenableFuture<Operation> deleteItem (CloudSearch.Indexing.Datasources.Items.Delete deleteItem)

Adds a delete item request to the batch.

##### Parameters

| deleteItem |  |
| --- | --- |

##### Throws

| InterruptedException |  |
| --- | --- |

#### fromConfiguration (CloudSearch service, GoogleCredential credential)

##### Parameters

| service |  |
| --- | --- |
| credential |  |

#### public ListenableFuture<Operation> indexItem (CloudSearch.Indexing.Datasources.Items.Index indexItem)

Adds an index item request to the batch.

##### Parameters

| indexItem |  |
| --- | --- |

##### Throws

| InterruptedException |  |
| --- | --- |

#### public ListenableFuture<Item> pushItem (CloudSearch.Indexing.Datasources.Items.Push pushItem)

Adds a push item request to the batch.

##### Parameters

| pushItem |  |
| --- | --- |

##### Throws

| InterruptedException |  |
| --- | --- |

#### public ListenableFuture<Operation> unreserveItem (CloudSearch.Indexing.Datasources.Items.Unreserve unreserveItem)

Adds an unreserve queue request to the batch.

##### Parameters

| unreserveItem |  |
| --- | --- |

##### Throws

| InterruptedException |  |
| --- | --- |
