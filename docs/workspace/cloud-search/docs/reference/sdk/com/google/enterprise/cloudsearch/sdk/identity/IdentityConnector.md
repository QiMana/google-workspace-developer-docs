---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnector
root: workspace
fetched_at: 2026-04-23T15:26:33.767Z
---

# IdentityConnector

Known Indirect Subclasses

[FullSyncIdentityConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector)

Interface for user-specific implementation details of the connector.

Implementations must be thread-safe. Implementations are discouraged from keeping any state locally except perhaps soft-state such as a connection cache.

### Public Method Summary

| abstract void | [init](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnector#init\(com.google.enterprise.cloudsearch.sdk.identity.IdentityConnectorContext\)) ([IdentityConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnectorContext) context)  Initializes the connector with the current context. |
| --- | --- |

### Inherited Method Summary

From interface [com.google.enterprise.cloudsearch.sdk.Connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector)

| abstract void | [destroy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#destroy\(\)) ()  Shuts down and releases connector resources. |
| --- | --- |
| String | [getDefaultId](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#getDefaultId\(\)) ()  Gets the default connector ID. |
| abstract void | [init](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#init\(T\)) ([IdentityConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnectorContext) context)  Initializes the connector with the current context. |
| abstract void | [saveCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#saveCheckpoint\(boolean\)) (boolean isShutdown)  Saves checkpoint information such as current traversal position or incremental change tokens. |
| abstract void | [traverse](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#traverse\(\)) ()  Implements a connector-specific traversal strategy. |

## Public Methods

#### public abstract void init (IdentityConnectorContext context)

Initializes the connector with the current context.

Initialization is the ideal time to start any threads to do extra behind-the-scenes work. The `context` allows access to other useful objects that can be used at any time such as the `IdentityService`.

If an unrecoverable fatal error occurs during initialization, throw a `StartupException` to cancel the startup process. If a recoverable error occurs during initialization, most `Exception` instances other than `StartupException` cause a retry of initialization after a short delay.

##### Parameters

| context | `IdentityConnectorContext` instance for accessing framework objects |
| --- | --- |

##### Throws

| Exception | if errors occur during connector initialization |
| --- | --- |
