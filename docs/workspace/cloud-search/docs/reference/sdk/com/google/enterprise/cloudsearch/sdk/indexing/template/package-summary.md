---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/package-summary
root: workspace
fetched_at: 2026-04-23T15:26:52.184Z
---

# com.google.enterprise.cloudsearch.sdk.indexing.template

### Interfaces

| [ApiOperation](./ApiOperation.md) | Object encapsulating an API request to be executed using `IndexingService`. |
| --- | --- |
| [CheckpointHandler](./CheckpointHandler.md) | Wrapper object to read / write a checkpoint. |
| [Repository](./Repository.md) | An object that provides the necessary methods to access a data repository. |

### Classes

| [ApiOperations](./ApiOperations.md) | A factory for creating `ApiOperation` instances. |
| --- | --- |
| [AsyncApiOperation](./AsyncApiOperation.md) | An `ApiOperation` that the `Repository` pushes asynchronously. |
| [BatchApiOperation](./BatchApiOperation.md) | Container for a sequence of `ApiOperation` objects. |
| [DeleteItem](./DeleteItem.md) | `ApiOperation` to delete an `Item`. |
| [DeleteQueueItems](./DeleteQueueItems.md) | `ApiOperation` to delete zero or more `Item` from a given queue. |
| [FullTraversalConnector](./FullTraversalConnector.md) | Template connector that performs a full repository traversal and uploads every document. |
| [InMemoryCheckpointHandler](./InMemoryCheckpointHandler.md) | CheckpointHandler implementation to maintain in-memory checkpoint values. |
| [ListingConnector](./ListingConnector.md) | Template connector that performs complete repository list traversals. |
| [PushItems](./PushItems.md) | `ApiOperation` to push `Item` objects to the Cloud Search queue. |
| [PushItems.Builder](./PushItems.Builder.md) | Builder for creating an instance of `PushItems` operation |
| [QueueCheckpoint](./QueueCheckpoint.md) | Handles checkpoints for the queue names used for detecting deletes during full traversals. |
| [QueueCheckpoint.QueueData](./QueueCheckpoint.QueueData.md) | Represents queue checkpoint information maintained by `FullTraversalConnector` |
| [RepositoryContext](./RepositoryContext.md) | Context object to enable the `Repository` to make asynchronous calls to the Cloud Search SDK. |
| [RepositoryDoc](./RepositoryDoc.md) | Generic object for a single document in a repository. |
| [RepositoryDoc.Builder](./RepositoryDoc.Builder.md) |  |
| [RepositoryDocError](./RepositoryDocError.md) | `ApiOperation` to push repository error while processing an item from a content repository. |
| [TraverseExceptionHandlerFactory](./TraverseExceptionHandlerFactory.md) | Constructs an `ExceptionHandler` based up on configuration options. |
