---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl
root: workspace
fetched_at: 2026-04-23T15:26:47.492Z
---

# IndexingServiceImpl

Wrapper object for `CloudSearch.Indexing`.

This is the access point between the connector developer and the indexing service. All calls for updating and retrieving `CloudSearch.Indexing.Datasources.Items` objects are processed through this object.

Configuration parameters:

- \- Specifies the indexing service base URL path.
- \- Specifies the data source ID (created via the admin console) indicating the location for the ingested repository documents.
- \- Specifies the identity source ID (created via the admin console) to use for users and groups that are attached to ACL definitions.
- \- Specifies the connector identifier for making Indexing API
- \- Specifies the threshold for content, in number of bytes, that determines whether it is uploaded "in-line" with the other document info or using a separate upload.
- \- Specifies the default request mode for index and delete item requests

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder">IndexingServiceImpl.Builder</a></td><td width="100%"></td></tr><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Operations">IndexingServiceImpl.Operations</a></td><td width="100%">API Operations</td></tr><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.PollItemStatus">IndexingServiceImpl.PollItemStatus</a></td><td width="100%">Valid values for poll <code>Item</code> status.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.ServiceManagerHelper">IndexingServiceImpl.ServiceManagerHelper</a></td><td width="100%"></td></tr></tbody></table>

### Constant Summary

| String | [ALLOW\_UNKNOWN\_GSUITE\_PRINCIPALS](./IndexingServiceImpl.md#ALLOW_UNKNOWN_GSUITE_PRINCIPALS) |  |
| --- | --- | --- |
| String | [CONNECTOR\_ID](./IndexingServiceImpl.md#CONNECTOR_ID) |  |
| int | [DEFAULT\_CONTENT\_UPLOAD\_THRESHOLD\_BYTES](./IndexingServiceImpl.md#DEFAULT_CONTENT_UPLOAD_THRESHOLD_BYTES) |  |
| String | [ENABLE\_API\_DEBUGGING](./IndexingServiceImpl.md#ENABLE_API_DEBUGGING) |  |
| String | [IDENTITY\_SOURCE\_ID](./IndexingServiceImpl.md#IDENTITY_SOURCE_ID) |  |
| String | [INDEXING\_SERVICE\_REQUEST\_MODE](./IndexingServiceImpl.md#INDEXING_SERVICE_REQUEST_MODE) |  |
| String | [REQUEST\_CONNECT\_TIMEOUT](./IndexingServiceImpl.md#REQUEST_CONNECT_TIMEOUT) |  |
| String | [REQUEST\_READ\_TIMEOUT](./IndexingServiceImpl.md#REQUEST_READ_TIMEOUT) |  |
| String | [ROOT\_URL](./IndexingServiceImpl.md#ROOT_URL) |  |
| String | [SOURCE\_ID](./IndexingServiceImpl.md#SOURCE_ID) |  |
| String | [UPLOAD\_THRESHOLD\_BYTES](./IndexingServiceImpl.md#UPLOAD_THRESHOLD_BYTES) |  |

### Field Summary

| public static final Set<String> | [API\_SCOPES](./IndexingServiceImpl.md#API_SCOPES) |  |
| --- | --- | --- |

### Public Method Summary

| ListenableFuture<Operation> | [deleteItem](./IndexingServiceImpl.md#deleteItem(java.lang.String,%20byte[],%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode)) (String id, byte\[\] version, [IndexingService.RequestMode](./IndexingService.RequestMode.md) requestMode)  Deletes an `Item`. |
| --- | --- |
| ListenableFuture<Operation> | [deleteQueueItems](./IndexingServiceImpl.md#deleteQueueItems(java.lang.String)) (String queueName)  Deletes items from a queue. |
| Item | [getItem](./IndexingServiceImpl.md#getItem(java.lang.String)) (String id)  Gets an `Item`. |
| Operation | [getOperation](./IndexingServiceImpl.md#getOperation(java.lang.String)) (String name)  Returns the `Operation` with the given name. |
| Schema | [getSchema](./IndexingServiceImpl.md#getSchema()) ()  Gets the `Schema` defined within the connected data source. |
| ListenableFuture<Operation> | [indexItem](./IndexingServiceImpl.md#indexItem(com.google.api.services.cloudsearch.v1.model.Item,%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode)) (Item item, [IndexingService.RequestMode](./IndexingService.RequestMode.md) requestMode)  Updates an `Item`. |
| ListenableFuture<Operation> | [indexItemAndContent](./IndexingServiceImpl.md#indexItemAndContent(com.google.api.services.cloudsearch.v1.model.Item,%20com.google.api.client.http.AbstractInputStreamContent,%20java.lang.String,%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.ContentFormat,%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode)) (Item item, AbstractInputStreamContent content, String contentHash, [IndexingService.ContentFormat](./IndexingService.ContentFormat.md) contentFormat, [IndexingService.RequestMode](./IndexingService.RequestMode.md) requestMode)  Updates an `Item`. |
| Iterable<Item> | [listItem](./IndexingServiceImpl.md#listItem(boolean)) (boolean brief)  Fetches the first of what may be many sets of `Item`. |
| List<Item> | [poll](./IndexingServiceImpl.md#poll(com.google.api.services.cloudsearch.v1.model.PollItemsRequest)) (PollItemsRequest pollQueueRequest)  Polls the queue using custom API parameters. |
| Iterable<Item> | [pollAll](./IndexingServiceImpl.md#pollAll(com.google.api.services.cloudsearch.v1.model.PollItemsRequest)) (PollItemsRequest pollQueueRequest)  Polls the queue repeatedly until the entire queue is polled. |
| ListenableFuture<Item> | [push](./IndexingServiceImpl.md#push(java.lang.String,%20com.google.api.services.cloudsearch.v1.model.PushItem)) (String id, PushItem pushItem)  Pushes a `PushItem` object to the indexing API Queue. |
| UploadItemRef | [startUpload](./IndexingServiceImpl.md#startUpload(java.lang.String)) (String itemId)  Creates `UploadItemRef` for uploading media content. |
| ListenableFuture<Operation> | [unreserve](./IndexingServiceImpl.md#unreserve(java.lang.String)) (String queue)  Unreserves the polled `Item` objects in a specific queue. |

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

| abstract ListenableFuture<Operation> | (String id, byte\[\] version, [IndexingService.RequestMode](./IndexingService.RequestMode.md) requestMode)  Deletes an `Item`. |
| --- | --- |
| abstract ListenableFuture<Operation> | (String name)  Deletes items from a queue. |
| abstract Item | (String id)  Gets an `Item`. |
| abstract Operation | (String name)  Returns the `Operation` with the given name. |
| abstract Schema | ()  Gets the `Schema` defined within the connected data source. |
| abstract ListenableFuture<Operation> | (Item item, [IndexingService.RequestMode](./IndexingService.RequestMode.md) requestMode)  Sends an `Item` for indexing. |
| abstract ListenableFuture<Operation> | (Item item, AbstractInputStreamContent content, String contentHash, [IndexingService.ContentFormat](./IndexingService.ContentFormat.md) contentFormat, [IndexingService.RequestMode](./IndexingService.RequestMode.md) requestMode)  Sends an `Item` and associated content for indexing. |
| abstract Iterable<Item> | (boolean brief)  Fetches the first of what may be many sets of `Item`. |
| abstract List<Item> | (PollItemsRequest pollQueueRequest)  Fetches `Item` entries from the queue using custom API parameters. |
| abstract Iterable<Item> | (PollItemsRequest pollQueueRequest)  Fetches all of the `Item` entries repeatedly from the queue until the entire queue is exhausted. |
| abstract ListenableFuture<Item> | (String id, PushItem pushItem)  Pushes a `PushItem` object to indexing API Queue. |
| abstract UploadItemRef | (String itemId)  Creates `UploadItemRef` for uploading media content. |
| abstract ListenableFuture<Operation> | (String queue)  Unreserves previously polled `Item` entries in a specific queue. |

## Constants

#### public static final String ALLOW\_UNKNOWN\_GSUITE\_PRINCIPALS

Constant Value: "indexingService.allowUnknownGsuitePrincipals"

#### public static final String CONNECTOR\_ID

Constant Value: "api.connectorId"

#### public static final int DEFAULT\_CONTENT\_UPLOAD\_THRESHOLD\_BYTES

Constant Value: 100000

#### public static final String ENABLE\_API\_DEBUGGING

Constant Value: "indexingService.enableDebugging"

#### public static final String IDENTITY\_SOURCE\_ID

Constant Value: "api.identitySourceId"

#### public static final String INDEXING\_SERVICE\_REQUEST\_MODE

Constant Value: "api.defaultRequestMode"

#### public static final String REQUEST\_CONNECT\_TIMEOUT

Constant Value: "indexingService.connectTimeoutSeconds"

#### public static final String REQUEST\_READ\_TIMEOUT

Constant Value: "indexingService.readTimeoutSeconds"

#### public static final String ROOT\_URL

Constant Value: "api.rootUrl"

#### public static final String SOURCE\_ID

Constant Value: "api.sourceId"

#### public static final String UPLOAD\_THRESHOLD\_BYTES

Constant Value: "api.contentUploadThresholdBytes"

## Fields

#### public static final Set<String> API\_SCOPES

## Public Methods

#### public ListenableFuture<Operation> deleteItem (String id, byte\[\] version, IndexingService.RequestMode requestMode)

Deletes an `Item`.

Cloud Search won't delete an item if the passed version value is less than the currently indexed item's version.

##### Parameters

| id | the item id. |
| --- | --- |
| version | the item's version used to compare against the previously indexed item's version |
| requestMode | mode for delete request |

##### Returns

- `ListenableFuture` that the caller uses to obtain the result of a delete operation (using `get()`).

##### Throws

| IOException | when service throws an exception. |
| --- | --- |

#### public ListenableFuture<Operation> deleteQueueItems (String queueName)

Deletes items from a queue.

##### Parameters

| queueName | the queue name |
| --- | --- |

##### Returns

- `ListenableFuture` that the caller uses to obtain the result of a delete queue items operation (using `get()`).

##### Throws

| IOException | when the service throws an exception |
| --- | --- |

#### public Item getItem (String id)

Gets an `Item`.

##### Parameters

| id | the item ID |
| --- | --- |

##### Returns

- the item or `null` if not found

##### Throws

| IOException | when the service throws an exception |
| --- | --- |

#### public Operation getOperation (String name)

Returns the `Operation` with the given name.

##### Parameters

| name | the operation name |
| --- | --- |

##### Returns

- the Operation object describing the current state of the long-running operation

##### Throws

| IOException |  |
| --- | --- |

#### public Schema getSchema ()

Gets the `Schema` defined within the connected data source.

Each data source may have at most one schema defined within it. This method extracts the schema definition to use with the current connector's data repository.

##### Returns

- `Schema` defined within the connected data source

##### Throws

| IOException |  |
| --- | --- |

#### public ListenableFuture<Operation> indexItem (Item item, IndexingService.RequestMode requestMode)

Updates an `Item`.

##### Parameters

| item | the item to update |
| --- | --- |
| requestMode | the `IndexingService.RequestMode` for the request |

##### Returns

- `ListenableFuture`. Caller can use `get()` to obtain a result of an update operation

##### Throws

| IOException | when the service throws an exception |
| --- | --- |

#### public ListenableFuture<Operation> indexItemAndContent (Item item, AbstractInputStreamContent content, String contentHash, IndexingService.ContentFormat contentFormat, IndexingService.RequestMode requestMode)

Updates an `Item`.

The `content` parameter should use a concrete implementation of `AbstractInputStreamContent` based on the natural source object:

- For `InputStream`, use `InputStreamContent`. For best results, if the length of the content (in bytes) is known without reading the stream, call `setLength` on the `InputStreamContent`.
- For `String` or `byte[]`, use `ByteArrayContent`.
- For existing files, use `FileContent`.

##### Parameters

| item | the item to update |
| --- | --- |
| content | the item's content |
| contentHash | the hash of the item's content |
| contentFormat | format of the content |
| requestMode | the `IndexingService.RequestMode` for the request |

##### Returns

- `ListenableFuture`. Caller can use `get()` to obtain the result of an update operation

##### Throws

| IOException | when the service throws an exception |
| --- | --- |

#### public Iterable<Item> listItem (boolean brief)

Fetches the first of what may be many sets of `Item`.

##### Parameters

| brief | `true` to shorten `Item` metadata, default: `true` |
| --- | --- |

##### Returns

- an iterator for the returned set of `Item`

##### Throws

| IOException | when the service throws an exception |
| --- | --- |

#### public List<Item> poll (PollItemsRequest pollQueueRequest)

Polls the queue using custom API parameters.

##### Parameters

| pollQueueRequest | the user created and populated poll request |
| --- | --- |

##### Returns

- entries returned from the queue

##### Throws

| IOException | when the service throws an exception |
| --- | --- |

#### public Iterable<Item> pollAll (PollItemsRequest pollQueueRequest)

Polls the queue repeatedly until the entire queue is polled.

##### Parameters

| pollQueueRequest | the user created and populated poll request |
| --- | --- |

##### Returns

- an iterator for entries returned from the queue

##### Throws

| IOException | when the service throws an exception |
| --- | --- |

#### public ListenableFuture<Item> push (String id, PushItem pushItem)

Pushes a `PushItem` object to the indexing API Queue.

##### Parameters

| id | the item id |
| --- | --- |
| pushItem | the item to push |

##### Returns

- `ListenableFuture`. Caller can use `get()` to obtain the result of a push operation

##### Throws

| IOException | when the service throws an exception |
| --- | --- |

#### public UploadItemRef startUpload (String itemId)

Creates `UploadItemRef` for uploading media content.

##### Parameters

| itemId | for which upload reference to be created. |
| --- | --- |

##### Returns

- `UploadItemRef` for uploading media content

##### Throws

| IOException |  |
| --- | --- |

#### public ListenableFuture<Operation> unreserve (String queue)

Unreserves the polled `Item` objects in a specific queue.

##### Parameters

| queue | the queue to unreserve (`null` for the default queue) |
| --- | --- |

##### Returns

- `ListenableFuture`. Caller can use `get()` to obtain the result of an unreserve operation

##### Throws

| IOException | when the service throws an exception |
| --- | --- |
