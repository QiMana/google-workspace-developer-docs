---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext
root: workspace
fetched_at: 2026-04-23T15:26:25.592Z
---

# ConnectorContext

Known Indirect Subclasses

Interface for a context object created by the SDK to pass to the code.

The `Application` object creates a context instance containing `ExceptionHandler` instances. It calls method to pass the context to the connector code.

### Public Method Summary

| abstract [ExceptionHandler](./ExceptionHandler.md) | [getIncrementalTraversalExceptionHandler](./ConnectorContext.md#getIncrementalTraversalExceptionHandler()) ()  Returns the exception handler used by the `handleIncrementalChanges()` method call. |
| --- | --- |
| abstract [ExceptionHandler](./ExceptionHandler.md) | [getTraversalExceptionHandler](./ConnectorContext.md#getTraversalExceptionHandler()) () |

## Public Methods

#### public abstract ExceptionHandler getIncrementalTraversalExceptionHandler ()

Returns the exception handler used by the `handleIncrementalChanges()` method call.

##### Returns

- `ExceptionHandler` to handle incremental change traversal exceptions

#### public abstract ExceptionHandler getTraversalExceptionHandler ()

##### Returns

- `ExceptionHandler` to handle traversal exceptions
