---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnectorContext
root: workspace
fetched_at: 2026-04-23T15:26:34.063Z
---

# IdentityConnectorContext

Interface for a context object created by the SDK to pass to the code.

The `IdentityApplication` object creates a context instance containing an `IdentityService` instance and `ExceptionHandler` instances for the connector to access. It calls the method to pass the context to the connector code.

### Public Method Summary

| abstract [IdentityService](./IdentityService.md) | [getIdentityService](./IdentityConnectorContext.md#getIdentityService()) ()  Returns the `IdentityService` instance used to communicate with the Cloud Search API. |
| --- | --- |

### Inherited Method Summary

From interface [com.google.enterprise.cloudsearch.sdk.ConnectorContext](../ConnectorContext.md)

| abstract [ExceptionHandler](../ExceptionHandler.md) | [getIncrementalTraversalExceptionHandler](../ConnectorContext.md#getIncrementalTraversalExceptionHandler()) ()  Returns the exception handler used by the `handleIncrementalChanges()` method call. |
| --- | --- |
| abstract [ExceptionHandler](../ExceptionHandler.md) | [getTraversalExceptionHandler](../ConnectorContext.md#getTraversalExceptionHandler()) ()  Returns the exception handler used by the `traverse()` method call. |
