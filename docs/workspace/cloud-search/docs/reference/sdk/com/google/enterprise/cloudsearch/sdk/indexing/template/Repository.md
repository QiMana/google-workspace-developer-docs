---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository
root: workspace
fetched_at: 2026-04-23T15:26:51.567Z
---

# Repository

An object that provides the necessary methods to access a data repository.

Depending on the traversal strategy being used, only a subset of these methods need to be implemented. The methods are typically called from a `Connector` object such as the `ListingConnector` or `FullTraversalConnector`.

### Public Method Summary

| abstract void | [close](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository#close\(\)) ()  Closes the data repository and releases resources such as connections or executors. |
| --- | --- |
| abstract boolean | [exists](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository#exists\(com.google.api.services.cloudsearch.v1.model.Item\)) (Item item)  Checks whether the document corresponding to `Item` exists in the data repository. |
| abstract [CheckpointCloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable) < [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) > | [getAllDocs](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository#getAllDocs\(byte[]\)) (byte\[\] checkpoint)  Fetches all the documents from the data repository. |
| abstract [CheckpointCloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable) < [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) > | [getChanges](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository#getChanges\(byte[]\)) (byte\[\] checkpoint)  Fetches all changed documents since the last traversal. |
| abstract [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) | [getDoc](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository#getDoc\(com.google.api.services.cloudsearch.v1.model.Item\)) (Item item)  Fetches a single document from the data repository. |
| abstract [CheckpointCloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable) < [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) > | [getIds](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository#getIds\(byte[]\)) (byte\[\] checkpoint)  Fetches all the document ids from the data repository. |
| abstract void | [init](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository#init\(com.google.enterprise.cloudsearch.sdk.indexing.template.RepositoryContext\)) ([RepositoryContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryContext) context)  Performs data repository set-up and initialization. |

## Public Methods

#### public abstract void close ()

Closes the data repository and releases resources such as connections or executors.

#### public abstract boolean exists (Item item)

Checks whether the document corresponding to `Item` exists in the data repository.

##### Parameters

| item |  |
| --- | --- |

##### Returns

- `true` if the document exists in the data repository

##### Throws

| [RepositoryException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException) | when processing the requested document fails |
| --- | --- |

#### public abstract CheckpointCloseableIterable<ApiOperation> getAllDocs (byte\[\] checkpoint)

Fetches all the documents from the data repository.

This method typically returns a `RepositoryDoc` object for each document that exists in the repository. However depending on the data repository's capabilities, there might be delete document operations also returned.

##### Parameters

| checkpoint | encoded checkpoint bytes |
| --- | --- |

##### Returns

- a list of `ApiOperation` objects to execute

##### Throws

| [RepositoryException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException) | when fetching documents from the data repository fails |
| --- | --- |

#### public abstract CheckpointCloseableIterable<ApiOperation> getChanges (byte\[\] checkpoint)

Fetches all changed documents since the last traversal.

This method is only called if the data repository supports document change detection and the `Connector` implements the `IncrementalChangeHandler` interface.

The `checkpoint` is defined and maintained within the `Repository` for determining and saving the state from the previous traversal. The Cloud Search SDK stores and retrieves the checkpoint from its queue so the `Repository` doesn't have to manage its state between traversals or connector invocations.

##### Parameters

| checkpoint | encoded checkpoint bytes |
| --- | --- |

##### Returns

- `CheckpointCloseableIterable` object containing list of `ApiOperation` to execute with new traversal checkpoint value

##### Throws

| [RepositoryException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException) | when change detection fails |
| --- | --- |

#### public abstract ApiOperation getDoc (Item item)

Fetches a single document from the data repository.

This method typically returns a `RepositoryDoc` object corresponding to passed `Item`. However, if the requested document is no longer in the data repository, then a `DeleteItem` operation might be returned instead.

##### Parameters

| item | the `Item` to process |
| --- | --- |

##### Returns

- a `ApiOperation` corresponding to the current state of the requested `Item`

##### Throws

| [RepositoryException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException) | when the processing of the `Item` fails |
| --- | --- |

#### public abstract CheckpointCloseableIterable<ApiOperation> getIds (byte\[\] checkpoint)

Fetches all the document ids from the data repository.

This method is typically used by a list or graph traversal connector such as the `ListingConnector` to push document ids to the Cloud Search queue. These ids are then polled individually for uploading.

##### Parameters

| checkpoint | encoded checkpoint bytes |
| --- | --- |

##### Returns

- `CheckpointCloseableIterable` object containing list of `ApiOperation` to execute with new traversal checkpoint value

##### Throws

| [RepositoryException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException) | when fetching document ids from the data repository fails |
| --- | --- |

#### public abstract void init (RepositoryContext context)

Performs data repository set-up and initialization.

This is the first access call from `init(ConnectorContext)`. It indicates that the `Configuration` is initialized and is ready for use.

##### Parameters

| context | the `RepositoryContext` |
| --- | --- |

##### Throws

| [RepositoryException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException) | when repository initialization fails |
| --- | --- |
