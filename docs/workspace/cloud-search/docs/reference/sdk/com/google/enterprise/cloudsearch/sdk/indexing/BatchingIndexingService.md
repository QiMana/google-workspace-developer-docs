---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingService
root: workspace
fetched_at: 2026-04-23T15:26:38.265Z
---

# BatchingIndexingService

Known Indirect Subclasses

[BatchingIndexingServiceImpl](./BatchingIndexingServiceImpl.md)

Indexing Service for batching multiple API requests.

This service provides the ability to group a set of API requests together in order to send them to Cloud Search in a single submission. The submission triggers are configurable using a `BatchPolicy` object. This is commonly used by `IndexingServiceImpl` for API requests that return empty response objects, such as push and delete.

Batched API operations are executed asynchronously. The caller can use the `get()` method to obtain the result of a batched request. The caller can also use `addListener(Runnable, Executor)` or `addCallback(ListenableFuture, FutureCallback)` to register callback methods to retrieve results from the batched operation.

### Public Method Summary

| abstract ListenableFuture<Operation> | [deleteItem](./BatchingIndexingService.md#deleteItem(com.google.api.services.cloudsearch.v1.CloudSearch.Indexing.Datasources.Items.Delete)) (CloudSearch.Indexing.Datasources.Items.Delete deleteItem)  Adds a delete item request to the batch. |
| --- | --- |
| abstract ListenableFuture<Operation> | [indexItem](./BatchingIndexingService.md#indexItem(com.google.api.services.cloudsearch.v1.CloudSearch.Indexing.Datasources.Items.Index)) (CloudSearch.Indexing.Datasources.Items.Index indexItem)  Adds an index item request to the batch. |
| abstract ListenableFuture<Item> | [pushItem](./BatchingIndexingService.md#pushItem(com.google.api.services.cloudsearch.v1.CloudSearch.Indexing.Datasources.Items.Push)) (CloudSearch.Indexing.Datasources.Items.Push pushItem)  Adds a push item request to the batch. |
| abstract ListenableFuture<Operation> | [unreserveItem](./BatchingIndexingService.md#unreserveItem(com.google.api.services.cloudsearch.v1.CloudSearch.Indexing.Datasources.Items.Unreserve)) (CloudSearch.Indexing.Datasources.Items.Unreserve unreserveItem)  Adds an unreserve queue request to the batch. |

### Inherited Method Summary

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

## Public Methods

#### public abstract ListenableFuture<Operation> deleteItem (CloudSearch.Indexing.Datasources.Items.Delete deleteItem)

Adds a delete item request to the batch.

##### Parameters

| deleteItem |  |
| --- | --- |

##### Throws

| InterruptedException |  |
| --- | --- |

#### public abstract ListenableFuture<Operation> indexItem (CloudSearch.Indexing.Datasources.Items.Index indexItem)

Adds an index item request to the batch.

##### Parameters

| indexItem |  |
| --- | --- |

##### Throws

| InterruptedException |  |
| --- | --- |

#### public abstract ListenableFuture<Item> pushItem (CloudSearch.Indexing.Datasources.Items.Push pushItem)

Adds a push item request to the batch.

##### Parameters

| pushItem |  |
| --- | --- |

##### Throws

| InterruptedException |  |
| --- | --- |

#### public abstract ListenableFuture<Operation> unreserveItem (CloudSearch.Indexing.Datasources.Items.Unreserve unreserveItem)

Adds an unreserve queue request to the batch.

##### Parameters

| unreserveItem |  |
| --- | --- |

##### Throws

| InterruptedException |  |
| --- | --- |
