---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/FullTraversalConnector
root: workspace
fetched_at: 2026-04-23T15:26:48.741Z
---

# FullTraversalConnector

Template connector that performs a full repository traversal and uploads every document.

Use this connector type for relatively static or small data sets that the connector can upload quickly. This connector uploads every document without pushing documents to the Cloud Search queue. Use the `ListingConnector` for a list or graph traversal strategy.

Sample usage:

```
public static void main(String[] args) throws IOException, InterruptedException {
   Application application = new Application.Builder(
       new FullTraversalConnector(new MyRepository()), args).build();
   application.start();
 }
```

If the repository supports document change detection, the connector can perform an incremental traversal, which reads and re-indexes just the newly modified documents. Synchronization enables an incremental traversal (`handleIncrementalChanges()`) to run in parallel with a full traversal (`traverse()`), allowing the shorter incremental traversal to complete without waiting for the longer full traversal to do so. When the two traversal types run simultaneously, the full traversal holds off its start of execution until the currently running incremental traversal has completed.

For example, if a full traversal on a large repository might take days to complete, then configure several smaller incremental traversal to run every few hours or so. Each `Item` gets a version timestamp to prevent a late update from the full traversal from overwriting a more recent incremental update.

Optional configuration parameters:

- \- Specifies the number of threads the connector is going to create to allow for parallel processing. A single iterator fetches operations serially (typically `RepositoryDoc` objects), but the API calls process in parallel using this number of threads.

### Constant Summary

| String | [CHECKPOINT\_FULL](./FullTraversalConnector.md#CHECKPOINT_FULL) | Default full traversal checkpoint name. |
| --- | --- | --- |
| String | [CHECKPOINT\_INCREMENTAL](./FullTraversalConnector.md#CHECKPOINT_INCREMENTAL) | Default incremental traversal checkpoint name. |
| String | [CHECKPOINT\_QUEUE](./FullTraversalConnector.md#CHECKPOINT_QUEUE) | Default queue checkpoint name. |
| String | [NUM\_THREADS](./FullTraversalConnector.md#NUM_THREADS) | Configuration key for setting number of worker threads for traversal |
| String | [QUEUE\_NAME](./FullTraversalConnector.md#QUEUE_NAME) | Default queue name prefix used by connector. |
| String | [TRAVERSE\_PARTITION\_SIZE](./FullTraversalConnector.md#TRAVERSE_PARTITION_SIZE) | Configuration key to define number of `ApiOperation` s to be processed in batches before fetching additional `ApiOperation` s. |
| String | [TRAVERSE\_QUEUE\_TAG](./FullTraversalConnector.md#TRAVERSE_QUEUE_TAG) | Configuration key to define queue name prefix used by connector. |
| String | [TRAVERSE\_USE\_QUEUES](./FullTraversalConnector.md#TRAVERSE_USE_QUEUES) | Configuration key to indicate if connector uses queue toggle logic for delete detection. |

### Public Constructor Summary

|  | [FullTraversalConnector](./FullTraversalConnector.md#FullTraversalConnector(com.google.enterprise.cloudsearch.sdk.indexing.template.Repository)) ([Repository](./Repository.md) repository)  Creates an instance of `FullTraversalConnector` for performing full traversal over given `Repository` |
| --- | --- |
|  | [FullTraversalConnector](./FullTraversalConnector.md#FullTraversalConnector(com.google.enterprise.cloudsearch.sdk.indexing.template.Repository,%20com.google.enterprise.cloudsearch.sdk.indexing.template.CheckpointHandler)) ([Repository](./Repository.md) repository, [CheckpointHandler](./CheckpointHandler.md) checkpointHandler)  Creates an instance of `FullTraversalConnector` for performing full traversal over given `Repository` with ability to manage traversal checkpoints using supplied instance of `CheckpointHandler` |

### Public Method Summary

| void | [destroy](./FullTraversalConnector.md#destroy()) ()  Performs any clean up code required of the `Repository`. |
| --- | --- |
| String | [getDefaultId](./FullTraversalConnector.md#getDefaultId()) ()  Use the repository class name for the default ID, rather than this template class name. |
| synchronized void | [handleAsyncOperation](./FullTraversalConnector.md#handleAsyncOperation(com.google.enterprise.cloudsearch.sdk.indexing.template.AsyncApiOperation)) ([AsyncApiOperation](./AsyncApiOperation.md) asyncOp)  Performs the asynchronously pushed operation from the `Repository`. |
| synchronized void | [handleIncrementalChanges](./FullTraversalConnector.md#handleIncrementalChanges()) ()  Performs all actions necessary for incremental traversals. |
| void | [init](./FullTraversalConnector.md#init(com.google.enterprise.cloudsearch.sdk.indexing.IndexingConnectorContext)) ([IndexingConnectorContext](../IndexingConnectorContext.md) context)  Creates all objects needed for a traversal. |
| void | [saveCheckpoint](./FullTraversalConnector.md#saveCheckpoint(boolean)) (boolean isShutdown)  Saves checkpoint information such as current traversal position or incremental change tokens. |
| void | [traverse](./FullTraversalConnector.md#traverse()) ()  Performs a full repository traversal and uploads every document. |

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

From interface [com.google.enterprise.cloudsearch.sdk.indexing.IndexingConnector](../IndexingConnector.md)

| abstract void | [init](../IndexingConnector.md#init(com.google.enterprise.cloudsearch.sdk.indexing.IndexingConnectorContext)) ([IndexingConnectorContext](../IndexingConnectorContext.md) context)  Initializes the connector with the current context. |
| --- | --- |
| abstract void | [traverse](../IndexingConnector.md#traverse()) ()  Implements a connector-specific traversal strategy. |

From interface [com.google.enterprise.cloudsearch.sdk.IncrementalChangeHandler](../../IncrementalChangeHandler.md)

| abstract void | [handleIncrementalChanges](../../IncrementalChangeHandler.md#handleIncrementalChanges()) ()  Handles the `Connector` specific implementation of incremental change notifications. |
| --- | --- |

From interface [com.google.enterprise.cloudsearch.sdk.Connector](../../Connector.md)

| abstract void | [destroy](../../Connector.md#destroy()) ()  Shuts down and releases connector resources. |
| --- | --- |
| String | [getDefaultId](../../Connector.md#getDefaultId()) ()  Gets the default connector ID. |
| abstract void | [init](../../Connector.md#init(T)) ([IndexingConnectorContext](../IndexingConnectorContext.md) context)  Initializes the connector with the current context. |
| abstract void | [saveCheckpoint](../../Connector.md#saveCheckpoint(boolean)) (boolean isShutdown)  Saves checkpoint information such as current traversal position or incremental change tokens. |
| abstract void | [traverse](../../Connector.md#traverse()) ()  Implements a connector-specific traversal strategy. |

## Constants

#### public static final String CHECKPOINT\_FULL

Default full traversal checkpoint name.

Constant Value: "checkpoint\_full"

#### public static final String CHECKPOINT\_INCREMENTAL

Default incremental traversal checkpoint name.

Constant Value: "checkpoint\_incremental"

#### public static final String CHECKPOINT\_QUEUE

Default queue checkpoint name.

Constant Value: "checkpoint\_queue"

#### public static final String NUM\_THREADS

Configuration key for setting number of worker threads for traversal

Constant Value: "traverse.threadPoolSize"

#### public static final String QUEUE\_NAME

Default queue name prefix used by connector.

Constant Value: "FullTraversal||"

#### public static final String TRAVERSE\_PARTITION\_SIZE

Configuration key to define number of `ApiOperation` s to be processed in batches before fetching additional `ApiOperation` s.

Constant Value: "traverse.partitionSize"

#### public static final String TRAVERSE\_QUEUE\_TAG

Configuration key to define queue name prefix used by connector.

Constant Value: "traverse.queueTag"

#### public static final String TRAVERSE\_USE\_QUEUES

Configuration key to indicate if connector uses queue toggle logic for delete detection.

Constant Value: "traverse.useQueues"

## Public Constructors

#### public FullTraversalConnector (Repository repository)

Creates an instance of `FullTraversalConnector` for performing full traversal over given `Repository`

##### Parameters

| repository | implementation to fetch indexable items from |
| --- | --- |

#### public FullTraversalConnector (Repository repository, CheckpointHandler checkpointHandler)

Creates an instance of `FullTraversalConnector` for performing full traversal over given `Repository` with ability to manage traversal checkpoints using supplied instance of `CheckpointHandler`

##### Parameters

| repository | implementation to fetch indexable items from |
| --- | --- |
| checkpointHandler | to manage traversal checkpoints |

## Public Methods

#### public void destroy ()

Performs any clean up code required of the `Repository`.

#### public String getDefaultId ()

Use the repository class name for the default ID, rather than this template class name.

#### public synchronized void handleAsyncOperation (AsyncApiOperation asyncOp)

Performs the asynchronously pushed operation from the `Repository`.

This is *only* used when the `Repository` supports asynchronous operations outside of normal traversals. Use this operation for any asynchronously triggered action, such as document deletion, modification, or creation.

##### Parameters

| asyncOp | the operation asynchronously pushed from the `Repository` |
| --- | --- |

#### public synchronized void handleIncrementalChanges ()

Performs all actions necessary for incremental traversals.

If the `Repository` does not support incremental traversals, the `getChanges(byte[])` method should return `null`.

##### Throws

| IOException | on SDK upload errors |
| --- | --- |
| InterruptedException | if exception handler is interrupted |

#### public void init (IndexingConnectorContext context)

Creates all objects needed for a traversal.

##### Parameters

| context | the context used to get the configuration |
| --- | --- |

##### Throws

| Exception | if configuration parameters are invalid |
| --- | --- |

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

Performs a full repository traversal and uploads every document.

numToAbort determines what will happen when upload exceptions occur. Either ignore the exceptions or force a traversal termination after a set number of exceptions occur.

##### Throws

| IOException | on SDK upload errors |
| --- | --- |
| InterruptedException | if exception handler is interrupted |
