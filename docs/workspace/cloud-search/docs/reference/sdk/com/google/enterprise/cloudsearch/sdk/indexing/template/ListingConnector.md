---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector
root: workspace
fetched_at: 2026-04-23T15:26:51.191Z
---

# ListingConnector

Template connector that performs complete repository list traversals.

Use this connector type for large, dynamic, and hierarchical data repositories. This connector pushes document ids to the Cloud Search queue and then processes them individually for indexing.

Sample usage:

```
public static void main(String[] args) throws IOException, InterruptedException {
   Application application = new Application.Builder(
       new ListingConnector(new MyRepository()), args).build();
   application.start();
 }
```

If the repository supports document change detection, the connector can perform an incremental change traversal, which reads and re-indexes just the newly modified documents.

- \- Specifies the traverser names. If not specified it is set to default `TraverserConfiguration`.

### Constant Summary

| String | [CHECKPOINT\_FULL](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#CHECKPOINT_FULL) | Default full traversal checkpoint name. |
| --- | --- | --- |
| String | [CHECKPOINT\_INCREMENTAL](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#CHECKPOINT_INCREMENTAL) | Default incremental traversal checkpoint name. |
| String | [CONFIG\_TRAVERSER](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#CONFIG_TRAVERSER) | Configuration key to define different `TraverserConfiguration` s used by connector. |

### Public Constructor Summary

|  | [ListingConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#ListingConnector\(com.google.enterprise.cloudsearch.sdk.indexing.template.Repository\)) ([Repository](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository) repository)  Creates an instance of `ListingConnector` for performing listing traversal over given `Repository` |
| --- | --- |
|  | [ListingConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#ListingConnector\(com.google.enterprise.cloudsearch.sdk.indexing.template.Repository,%20com.google.enterprise.cloudsearch.sdk.indexing.template.CheckpointHandler\)) ([Repository](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository) repository, [CheckpointHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/CheckpointHandler) checkpointHandler)  Creates an instance of `ListingConnector` for performing listing traversal over given `Repository` with ability to manage traversal checkpoints using supplied instance of `CheckpointHandler` |

### Public Method Summary

| void | [destroy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#destroy\(\)) ()  Shuts down and releases connector resources. |
| --- | --- |
| String | [getDefaultId](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#getDefaultId\(\)) ()  Use the repository class name for the default ID, rather than this template class name. |
| void | [handleAsyncOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#handleAsyncOperation\(com.google.enterprise.cloudsearch.sdk.indexing.template.AsyncApiOperation\)) ([AsyncApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/AsyncApiOperation) asyncOp)  Performs the asynchronously pushed operation from the `Repository`. |
| void | [handleIncrementalChanges](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#handleIncrementalChanges\(\)) ()  Performs all actions necessary for incremental traversals. |
| void | [init](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#init\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingConnectorContext\)) ([IndexingConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnectorContext) context)  Initializes the connector with the current context. |
| void | [process](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#process\(com.google.api.services.cloudsearch.v1.model.Item\)) (Item item)  Processes each polled document from the Cloud Search queue. |
| void | [saveCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#saveCheckpoint\(boolean\)) (boolean isShutdown)  Saves checkpoint information such as current traversal position or incremental change tokens. |
| void | [traverse](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector#traverse\(\)) ()  Performs a list traversal on the data repository. |

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

From interface [com.google.enterprise.cloudsearch.sdk.indexing.IndexingConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnector)

| abstract void | [init](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnector#init\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingConnectorContext\)) ([IndexingConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnectorContext) context)  Initializes the connector with the current context. |
| --- | --- |
| abstract void | [traverse](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnector#traverse\(\)) ()  Implements a connector-specific traversal strategy. |

From interface [com.google.enterprise.cloudsearch.sdk.indexing.ItemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ItemRetriever)

| abstract void | [process](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ItemRetriever#process\(com.google.api.services.cloudsearch.v1.model.Item\)) (Item item)  Retrieves content and metadata for the polled `Item`. |
| --- | --- |

From interface [com.google.enterprise.cloudsearch.sdk.IncrementalChangeHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/IncrementalChangeHandler)

| abstract void | [handleIncrementalChanges](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/IncrementalChangeHandler#handleIncrementalChanges\(\)) ()  Handles the `Connector` specific implementation of incremental change notifications. |
| --- | --- |

From interface [com.google.enterprise.cloudsearch.sdk.Connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector)

| abstract void | [destroy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#destroy\(\)) ()  Shuts down and releases connector resources. |
| --- | --- |
| String | [getDefaultId](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#getDefaultId\(\)) ()  Gets the default connector ID. |
| abstract void | [init](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#init\(T\)) ([IndexingConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnectorContext) context)  Initializes the connector with the current context. |
| abstract void | [saveCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#saveCheckpoint\(boolean\)) (boolean isShutdown)  Saves checkpoint information such as current traversal position or incremental change tokens. |
| abstract void | [traverse](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#traverse\(\)) ()  Implements a connector-specific traversal strategy. |

## Constants

#### public static final String CHECKPOINT\_FULL

Default full traversal checkpoint name.

Constant Value: "checkpoint\_full"

#### public static final String CHECKPOINT\_INCREMENTAL

Default incremental traversal checkpoint name.

Constant Value: "checkpoint\_incremental"

#### public static final String CONFIG\_TRAVERSER

Configuration key to define different `TraverserConfiguration` s used by connector.

Constant Value: "repository.traversers"

## Public Constructors

#### public ListingConnector (Repository repository)

Creates an instance of `ListingConnector` for performing listing traversal over given `Repository`

##### Parameters

| repository | implementation to fetch indexable items from |
| --- | --- |

#### public ListingConnector (Repository repository, CheckpointHandler checkpointHandler)

Creates an instance of `ListingConnector` for performing listing traversal over given `Repository` with ability to manage traversal checkpoints using supplied instance of `CheckpointHandler`

##### Parameters

| repository | implementation to fetch indexable items from |
| --- | --- |
| checkpointHandler | to manage traversal checkpoints |

## Public Methods

#### public void destroy ()

Shuts down and releases connector resources.

#### public String getDefaultId ()

Use the repository class name for the default ID, rather than this template class name.

#### public void handleAsyncOperation (AsyncApiOperation asyncOp)

Performs the asynchronously pushed operation from the `Repository`.

This is *only* used when the `Repository` supports asynchronous operations outside of normal traversals. Use this operation for triggered actions (such as created, modified, or deleted documents) that cannot be queried from a full or incremental traversal or when the change should be detected and acted on immediately.

##### Parameters

| asyncOp | the operation asynchronously pushed from the `Repository` |
| --- | --- |

#### public void handleIncrementalChanges ()

Performs all actions necessary for incremental traversals.

If the `Repository` does not support incremental traversals, the `getChanges(byte[])` method should return `null`.

##### Throws

| IOException | on SDK upload errors |
| --- | --- |
| InterruptedException | if exception handler is interrupted |

#### public void init (IndexingConnectorContext context)

Initializes the connector with the current context.

Initialization is the ideal time to start any threads to do extra behind-the-scenes work. The `context` allows access to other useful objects that can be used at any time such as the `IndexingService`.

If an unrecoverable fatal error occurs during initialization, throw a `StartupException` to cancel the startup process. If a recoverable error occurs during initialization, most `Exception` instances other than `StartupException` cause a retry of initialization after a short delay.

##### Parameters

| context | `IndexingConnectorContext` instance for accessing framework objects |
| --- | --- |

##### Throws

| Exception |  |
| --- | --- |

#### public void process (Item item)

Processes each polled document from the Cloud Search queue.

Retrieve the document for indexing. For hierarchical data repositories, also push the children ids to the queue for later recursive processing.

##### Parameters

| item | `Item` representing a polled document |
| --- | --- |

##### Throws

| IOException | on SDK upload errors |
| --- | --- |
| InterruptedException | if exception handler is interrupted |

#### public void saveCheckpoint (boolean isShutdown)

Saves checkpoint information such as current traversal position or incremental change tokens.

The checkpoint contents are implementation-specific as defined by the connector code. This method is called during shutdown to allow the connector to save the current traversal state.

##### Parameters

| isShutdown | flag indicating a connector shutdown |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
| InterruptedException |  |

#### public void traverse ()

Performs a list traversal on the data repository.

Push document ids to the Cloud Search queue. For hierarchical data repositories, push only the root document ids. For non-hierarchical data repositories, push all the document ids.

##### Throws

| IOException | on SDK push errors |
| --- | --- |
| InterruptedException | if exception handler is interrupted |
