---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/package-summary
root: workspace
fetched_at: 2026-04-23T15:26:52.184Z
---

# com.google.enterprise.cloudsearch.sdk.indexing.template

### Interfaces

| [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) | Object encapsulating an API request to be executed using `IndexingService`. |
| --- | --- |
| [CheckpointHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/CheckpointHandler) | Wrapper object to read / write a checkpoint. |
| [Repository](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository) | An object that provides the necessary methods to access a data repository. |

### Classes

| [ApiOperations](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperations) | A factory for creating `ApiOperation` instances. |
| --- | --- |
| [AsyncApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/AsyncApiOperation) | An `ApiOperation` that the `Repository` pushes asynchronously. |
| [BatchApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/BatchApiOperation) | Container for a sequence of `ApiOperation` objects. |
| [DeleteItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/DeleteItem) | `ApiOperation` to delete an `Item`. |
| [DeleteQueueItems](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/DeleteQueueItems) | `ApiOperation` to delete zero or more `Item` from a given queue. |
| [FullTraversalConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/FullTraversalConnector) | Template connector that performs a full repository traversal and uploads every document. |
| [InMemoryCheckpointHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/InMemoryCheckpointHandler) | CheckpointHandler implementation to maintain in-memory checkpoint values. |
| [ListingConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector) | Template connector that performs complete repository list traversals. |
| [PushItems](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems) | `ApiOperation` to push `Item` objects to the Cloud Search queue. |
| [PushItems.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.Builder) | Builder for creating an instance of `PushItems` operation |
| [QueueCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/QueueCheckpoint) | Handles checkpoints for the queue names used for detecting deletes during full traversals. |
| [QueueCheckpoint.QueueData](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/QueueCheckpoint.QueueData) | Represents queue checkpoint information maintained by `FullTraversalConnector` |
| [RepositoryContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryContext) | Context object to enable the `Repository` to make asynchronous calls to the Cloud Search SDK. |
| [RepositoryDoc](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc) | Generic object for a single document in a repository. |
| [RepositoryDoc.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc.Builder) |  |
| [RepositoryDocError](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDocError) | `ApiOperation` to push repository error while processing an item from a content repository. |
| [TraverseExceptionHandlerFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/TraverseExceptionHandlerFactory) | Constructs an `ExceptionHandler` based up on configuration options. |
