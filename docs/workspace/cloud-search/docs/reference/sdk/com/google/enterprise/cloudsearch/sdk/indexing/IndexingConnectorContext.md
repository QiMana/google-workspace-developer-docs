---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnectorContext
root: workspace
fetched_at: 2026-04-23T15:26:42.412Z
---

# IndexingConnectorContext

Interface for a context object created by the SDK to pass to the code.

The `IndexingApplication` object creates a context instance containing an `IndexingService` instance, `ExceptionHandler` instances, and `TraverserConfiguration` instances for the connector to access. It calls the method to pass the context to the connector code.

### Public Method Summary

| abstract [IndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService) | [getIndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnectorContext#getIndexingService\(\)) ()  Returns the `IndexingService` instance used to communicate with the Cloud Search API. |
| --- | --- |
| abstract List< [TraverserConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration) > | [getTraverserConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnectorContext#getTraverserConfiguration\(\)) ()  Returns the list of `TraverserConfiguration` registered by the connector during . |
| abstract void | [registerTraverser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnectorContext#registerTraverser\(com.google.enterprise.cloudsearch.sdk.indexing.traverser.TraverserConfiguration\)) ([TraverserConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration) configuration)  Creates and registers `TraverserConfiguration` instances. |

### Inherited Method Summary

From interface [com.google.enterprise.cloudsearch.sdk.ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext)

| abstract [ExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler) | [getIncrementalTraversalExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext#getIncrementalTraversalExceptionHandler\(\)) ()  Returns the exception handler used by the `handleIncrementalChanges()` method call. |
| --- | --- |
| abstract [ExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler) | [getTraversalExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext#getTraversalExceptionHandler\(\)) ()  Returns the exception handler used by the `traverse()` method call. |

## Public Methods

#### public abstract IndexingService getIndexingService ()

Returns the `IndexingService` instance used to communicate with the Cloud Search API.

##### Returns

- an `IndexingService` instance

#### public abstract void registerTraverser (TraverserConfiguration configuration)

Creates and registers `TraverserConfiguration` instances.

A `TraverserConfiguration` instance defines a Cloud Search queue polling task. The uses this method when it implements the `ItemRetriever` interface.

##### Parameters

| configuration | parameters for a Cloud Search queue polling task |
| --- | --- |
