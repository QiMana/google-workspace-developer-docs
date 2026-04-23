---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnectorContext
root: workspace
fetched_at: 2026-04-23T15:26:34.063Z
---

# IdentityConnectorContext

Interface for a context object created by the SDK to pass to the code.

The `IdentityApplication` object creates a context instance containing an `IdentityService` instance and `ExceptionHandler` instances for the connector to access. It calls the method to pass the context to the connector code.

### Public Method Summary

| abstract [IdentityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityService) | [getIdentityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnectorContext#getIdentityService\(\)) ()  Returns the `IdentityService` instance used to communicate with the Cloud Search API. |
| --- | --- |

### Inherited Method Summary

From interface [com.google.enterprise.cloudsearch.sdk.ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext)

| abstract [ExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler) | [getIncrementalTraversalExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext#getIncrementalTraversalExceptionHandler\(\)) ()  Returns the exception handler used by the `handleIncrementalChanges()` method call. |
| --- | --- |
| abstract [ExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler) | [getTraversalExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext#getTraversalExceptionHandler\(\)) ()  Returns the exception handler used by the `traverse()` method call. |
