---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnectorContext
root: workspace
fetched_at: 2026-04-23T15:26:42.412Z
---

# IndexingConnectorContext

Interface for a context object created by the SDK to pass to the code.

The `IndexingApplication` object creates a context instance containing an `IndexingService` instance, `ExceptionHandler` instances, and `TraverserConfiguration` instances for the connector to access. It calls the method to pass the context to the connector code.

### Public Method Summary

| abstract [IndexingService](./IndexingService.md) | [getIndexingService](./IndexingConnectorContext.md#getIndexingService()) ()  Returns the `IndexingService` instance used to communicate with the Cloud Search API. |
| --- | --- |
| abstract List< [TraverserConfiguration](./traverser/TraverserConfiguration.md) > | [getTraverserConfiguration](./IndexingConnectorContext.md#getTraverserConfiguration()) ()  Returns the list of `TraverserConfiguration` registered by the connector during . |
| abstract void | [registerTraverser](./IndexingConnectorContext.md#registerTraverser(com.google.enterprise.cloudsearch.sdk.indexing.traverser.TraverserConfiguration)) ([TraverserConfiguration](./traverser/TraverserConfiguration.md) configuration)  Creates and registers `TraverserConfiguration` instances. |

### Inherited Method Summary

From interface [com.google.enterprise.cloudsearch.sdk.ConnectorContext](../ConnectorContext.md)

| abstract [ExceptionHandler](../ExceptionHandler.md) | [getIncrementalTraversalExceptionHandler](../ConnectorContext.md#getIncrementalTraversalExceptionHandler()) ()  Returns the exception handler used by the `handleIncrementalChanges()` method call. |
| --- | --- |
| abstract [ExceptionHandler](../ExceptionHandler.md) | [getTraversalExceptionHandler](../ConnectorContext.md#getTraversalExceptionHandler()) ()  Returns the exception handler used by the `traverse()` method call. |

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
