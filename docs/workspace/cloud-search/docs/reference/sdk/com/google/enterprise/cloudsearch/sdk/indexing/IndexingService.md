---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService
root: workspace
fetched_at: 2026-04-23T15:26:43.580Z
---

# IndexingService

Known Indirect Subclasses

[IndexingServiceImpl](./IndexingServiceImpl.md)

Access point between the connector developer and the indexing service API backend.

### Nested Class Summary

<table><tbody><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.ContentFormat">IndexingService.ContentFormat</a></td><td width="100%"></td></tr><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.RequestMode">IndexingService.RequestMode</a></td><td width="100%">Request mode for <code>Item</code> index and delete requests.</td></tr></tbody></table>

### Public Method Summary

| abstract ListenableFuture<Operation> | [deleteItem](./IndexingService.md#deleteItem(java.lang.String,%20byte[],%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode)) (String id, byte\[\] version, [IndexingService.RequestMode](./IndexingService.RequestMode.md) requestMode)  Deletes an `Item`. |
| --- | --- |
| abstract ListenableFuture<Operation> | [deleteQueueItems](./IndexingService.md#deleteQueueItems(java.lang.String)) (String name)  Deletes items from a queue. |
| abstract Item | [getItem](./IndexingService.md#getItem(java.lang.String)) (String id)  Gets an `Item`. |
| abstract Operation | [getOperation](./IndexingService.md#getOperation(java.lang.String)) (String name)  Returns the `Operation` with the given name. |
| abstract Schema | [getSchema](./IndexingService.md#getSchema()) ()  Gets the `Schema` defined within the connected data source. |
| abstract ListenableFuture<Operation> | [indexItem](./IndexingService.md#indexItem(com.google.api.services.cloudsearch.v1.model.Item,%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode)) (Item item, [IndexingService.RequestMode](./IndexingService.RequestMode.md) requestMode)  Sends an `Item` for indexing. |
| abstract ListenableFuture<Operation> | [indexItemAndContent](./IndexingService.md#indexItemAndContent(com.google.api.services.cloudsearch.v1.model.Item,%20com.google.api.client.http.AbstractInputStreamContent,%20java.lang.String,%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.ContentFormat,%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode)) (Item item, AbstractInputStreamContent content, String contentHash, [IndexingService.ContentFormat](./IndexingService.ContentFormat.md) contentFormat, [IndexingService.RequestMode](./IndexingService.RequestMode.md) requestMode)  Sends an `Item` and associated content for indexing. |
| abstract Iterable<Item> | [listItem](./IndexingService.md#listItem(boolean)) (boolean brief)  Fetches the first of what may be many sets of `Item`. |
| abstract List<Item> | [poll](./IndexingService.md#poll(com.google.api.services.cloudsearch.v1.model.PollItemsRequest)) (PollItemsRequest pollQueueRequest)  Fetches `Item` entries from the queue using custom API parameters. |
| abstract Iterable<Item> | [pollAll](./IndexingService.md#pollAll(com.google.api.services.cloudsearch.v1.model.PollItemsRequest)) (PollItemsRequest pollQueueRequest)  Fetches all of the `Item` entries repeatedly from the queue until the entire queue is exhausted. |
| abstract ListenableFuture<Item> | [push](./IndexingService.md#push(java.lang.String,%20com.google.api.services.cloudsearch.v1.model.PushItem)) (String id, PushItem pushItem)  Pushes a `PushItem` object to indexing API Queue. |
| abstract UploadItemRef | [startUpload](./IndexingService.md#startUpload(java.lang.String)) (String itemId)  Creates `UploadItemRef` for uploading media content. |
| abstract ListenableFuture<Operation> | [unreserve](./IndexingService.md#unreserve(java.lang.String)) (String queue)  Unreserves previously polled `Item` entries in a specific queue. |

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

#### public abstract ListenableFuture<Operation> deleteItem (String id, byte\[\] version, IndexingService.RequestMode requestMode)

Deletes an `Item`.

##### Parameters

| id | the item id. |
| --- | --- |
| version | the item version to compare against the previously stored item update version |
| requestMode | mode for delete request |

##### Returns

- `ListenableFuture` that the caller uses to obtain the result of a delete operation (using `get()`).

##### Throws

| IOException | when service throws an exception. |
| --- | --- |

#### public abstract ListenableFuture<Operation> deleteQueueItems (String name)

Deletes items from a queue.

##### Parameters

| name | the queue name |
| --- | --- |

##### Returns

- `ListenableFuture` that the caller uses to obtain the result of a delete queue items operation (using `get()`).

##### Throws

| IOException | when the service throws an exception |
| --- | --- |

#### public abstract Item getItem (String id)

Gets an `Item`.

##### Parameters

| id | the item id |
| --- | --- |

##### Returns

- the item or `null` if not found

##### Throws

| IOException | when service throws exception |
| --- | --- |

#### public abstract Operation getOperation (String name)

Returns the `Operation` with the given name.

##### Parameters

| name | the operation name |
| --- | --- |

##### Returns

- the Operation object describing the current state of the long-running operation

##### Throws

| IOException | when service throws exception |
| --- | --- |

#### public abstract Schema getSchema ()

Gets the `Schema` defined within the connected data source.

Each data source may have at most one schema defined within it. This method extracts the schema definition to use with the current connector's data repository.

##### Returns

- `Schema` defined within the connected data source

##### Throws

| IOException | when service throws exception |
| --- | --- |

#### public abstract ListenableFuture<Operation> indexItem (Item item, IndexingService.RequestMode requestMode)

Sends an `Item` for indexing.

##### Parameters

| item | the item |
| --- | --- |
| requestMode | `IndexingService.RequestMode` for `Item` index request |

##### Returns

- `ListenableFuture` that the caller uses to obtain the result of an update operation (using `get()`)

##### Throws

| IOException | when service throws exception |
| --- | --- |

#### public abstract ListenableFuture<Operation> indexItemAndContent (Item item, AbstractInputStreamContent content, String contentHash, IndexingService.ContentFormat contentFormat, IndexingService.RequestMode requestMode)

Sends an `Item` and associated content for indexing.

##### Parameters

| item | the item |
| --- | --- |
| content | the item's content |
| contentHash | the hash of the item's content |
| contentFormat |  |
| requestMode | `IndexingService.RequestMode` for `Item` index request |

##### Returns

- `ListenableFuture` that the caller uses to obtain the result of an update operation (using `get()`)

##### Throws

| IOException | when service throws exception |
| --- | --- |

#### public abstract Iterable<Item> listItem (boolean brief)

Fetches the first of what may be many sets of `Item`.

##### Parameters

| brief | `true` to shorten `Item` metadata, default: `true` |
| --- | --- |

##### Returns

- an iterator for the returned set of `Item`

##### Throws

| IOException | when service throws exception |
| --- | --- |

#### public abstract List<Item> poll (PollItemsRequest pollQueueRequest)

Fetches `Item` entries from the queue using custom API parameters.

##### Parameters

| pollQueueRequest | the user created and populated poll request |
| --- | --- |

##### Returns

- items from the queue

##### Throws

| IOException | when service throws exception |
| --- | --- |

#### public abstract Iterable<Item> pollAll (PollItemsRequest pollQueueRequest)

Fetches all of the `Item` entries repeatedly from the queue until the entire queue is exhausted.

##### Parameters

| pollQueueRequest | the user created and populated poll request |
| --- | --- |

##### Returns

- an iterator for items returned from the queue

##### Throws

| IOException | when service throws exception |
| --- | --- |

#### public abstract ListenableFuture<Item> push (String id, PushItem pushItem)

Pushes a `PushItem` object to indexing API Queue.

##### Parameters

| id | the item id |
| --- | --- |
| pushItem | the item to push |

##### Returns

- `ListenableFuture` that the caller uses to obtain the result of a push operation (using `get()`)

##### Throws

| IOException | when service throws exception |
| --- | --- |

#### public abstract UploadItemRef startUpload (String itemId)

Creates `UploadItemRef` for uploading media content.

##### Parameters

| itemId | for which upload reference to be created. |
| --- | --- |

##### Returns

- `UploadItemRef` for uploading media content

##### Throws

| IOException | when service throws exception |
| --- | --- |

#### public abstract ListenableFuture<Operation> unreserve (String queue)

Unreserves previously polled `Item` entries in a specific queue.

When a connector issues a `poll(PollItemsRequest)` of the indexing queue, the returned `Item` entries are marked internally as *reserved* so that they are unavailable for a future `poll(PollItemsRequest)` request. This prevents two possibly different threads from processing the same `Item`. This method allows the connector to reset the queue to make all of its entries available again.

##### Parameters

| queue | the queue to unreserve, (`null` for default queue) |
| --- | --- |

##### Returns

- `ListenableFuture` that the caller uses to obtain the result of an unreserve operation (using `get()`)

##### Throws

| IOException | when service throws exception |
| --- | --- |
