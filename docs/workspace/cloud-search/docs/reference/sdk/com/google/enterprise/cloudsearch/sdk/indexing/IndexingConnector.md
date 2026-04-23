---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnector
root: workspace
fetched_at: 2026-04-23T15:26:42.535Z
---

# IndexingConnector

Known Indirect Subclasses

[FullTraversalConnector](./template/FullTraversalConnector.md), [ListingConnector](./template/ListingConnector.md)

Interface for user-specific implementation details of the connector.

Implementations must be thread-safe. Implementations are discouraged from keeping any state locally except perhaps soft-state such as a connection cache.

### Public Method Summary

| abstract void | [init](./IndexingConnector.md#init(com.google.enterprise.cloudsearch.sdk.indexing.IndexingConnectorContext)) ([IndexingConnectorContext](./IndexingConnectorContext.md) context)  Initializes the connector with the current context. |
| --- | --- |
| abstract void | [traverse](./IndexingConnector.md#traverse()) ()  Implements a connector-specific traversal strategy. |

### Inherited Method Summary

From interface [com.google.enterprise.cloudsearch.sdk.Connector](../Connector.md)

| abstract void | [destroy](../Connector.md#destroy()) ()  Shuts down and releases connector resources. |
| --- | --- |
| String | [getDefaultId](../Connector.md#getDefaultId()) ()  Gets the default connector ID. |
| abstract void | [init](../Connector.md#init(T)) (T context)  Initializes the connector with the current context. |
| abstract void | [saveCheckpoint](../Connector.md#saveCheckpoint(boolean)) (boolean isShutdown)  Saves checkpoint information such as current traversal position or incremental change tokens. |
| abstract void | [traverse](../Connector.md#traverse()) ()  Implements a connector-specific traversal strategy. |

## Public Methods

#### public abstract void init (IndexingConnectorContext context)

Initializes the connector with the current context.

Initialization is the ideal time to start any threads to do extra behind-the-scenes work. The `context` allows access to other useful objects that can be used at any time such as the `IndexingService`.

If an unrecoverable fatal error occurs during initialization, throw a `StartupException` to cancel the startup process. If a recoverable error occurs during initialization, most `Exception` instances other than `StartupException` cause a retry of initialization after a short delay.

##### Parameters

| context | `IndexingConnectorContext` instance for accessing framework objects |
| --- | --- |

##### Throws

| Exception | if errors occur during connector initialization |
| --- | --- |

#### public abstract void traverse ()

Implements a connector-specific traversal strategy.

Use the `CloudSearch.Indexing.Datasources.Items.Push` method to push a list of `PushItem` instances that are to be indexed. Often, many of the sent items are unchanged since the last traversal and are thus being re-pushed unnecessarily. However, the cost of pushing unchanged items is low and doing so heals any synchronization errors or cache inconsistencies that might exist in the system.

For flat or full traversal strategies, push `PushItem` instances for all items to be indexed. For graph traversal strategies, push only the start node of each graph.

Alternatively, a `Connector` implementation can issue an `CloudSearch.Indexing.Datasources.Items.Index` for each item in the repository instead of using `CloudSearch.Indexing.Datasources.Items.Push` and `CloudSearch.Indexing.Datasources.Items.Poll`. Such implementations might be suitable for smaller repositories requiring only a periodic full sync.

This method may take a while and implementations may want to call `sleep(long)` occasionally to reduce load.

If fatal errors occur, throw an `IOException` or `RuntimeException`. In the case of an error, the `ExceptionHandler` defined in `IndexingConnectorContext` determines if and when to retry.

##### Throws

| IOException | if getting data access errors |
| --- | --- |
| InterruptedException | if an IO operations throws it |
