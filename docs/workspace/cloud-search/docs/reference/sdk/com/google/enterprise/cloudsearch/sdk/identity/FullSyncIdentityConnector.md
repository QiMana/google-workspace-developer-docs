---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector
root: workspace
fetched_at: 2026-04-23T15:26:34.542Z
---

# FullSyncIdentityConnector

Connector implementation which periodically sync all users and groups with Google

### Public Constructor Summary

|  | [FullSyncIdentityConnector](./FullSyncIdentityConnector.md#FullSyncIdentityConnector(com.google.enterprise.cloudsearch.sdk.identity.Repository)) ([Repository](./Repository.md) identityRepository)  Creates an instance of `FullSyncIdentityConnector` for syncing identities from supplied identity `Repository`. |
| --- | --- |
|  | [FullSyncIdentityConnector](./FullSyncIdentityConnector.md#FullSyncIdentityConnector(com.google.enterprise.cloudsearch.sdk.identity.Repository,%20com.google.enterprise.cloudsearch.sdk.identity.IdentityStateLoader)) ([Repository](./Repository.md) identityRepository, [IdentityStateLoader](./IdentityStateLoader.md) identityStateLoader)  Creates an instance of `FullSyncIdentityConnector` for syncing identities from supplied identity `Repository`. |

### Public Method Summary

| void | [destroy](./FullSyncIdentityConnector.md#destroy()) ()  Releases resources and shuts down worker processes. |
| --- | --- |
| void | [init](./FullSyncIdentityConnector.md#init(com.google.enterprise.cloudsearch.sdk.identity.IdentityConnectorContext)) ([IdentityConnectorContext](./IdentityConnectorContext.md) context)  Initializes the connector with the current context. |
| void | [saveCheckpoint](./FullSyncIdentityConnector.md#saveCheckpoint(boolean)) (boolean isShutdown)  Saves checkpoint information such as current traversal position or incremental change tokens. |
| void | [traverse](./FullSyncIdentityConnector.md#traverse()) ()  Traverses `IdentityUser` s and `IdentityGroup` s from repository. |

### Inherited Method Summary

From class java.lang.Object

| boolean | equals(Object arg0) |
| --- | --- |
| final Class<?> | getClass() |
| int | hashCode() |
| final void | notify() |
| final void | notifyAll() |
| String | toString() |
| final void | wait(long arg0, int arg1) |
| final void | wait(long arg0) |
| final void | wait() |

From interface [com.google.enterprise.cloudsearch.sdk.identity.IdentityConnector](./IdentityConnector.md)

| abstract void | [init](./IdentityConnector.md#init(com.google.enterprise.cloudsearch.sdk.identity.IdentityConnectorContext)) ([IdentityConnectorContext](./IdentityConnectorContext.md) context)  Initializes the connector with the current context. |
| --- | --- |

From interface [com.google.enterprise.cloudsearch.sdk.Connector](../Connector.md)

| abstract void | [destroy](../Connector.md#destroy()) ()  Shuts down and releases connector resources. |
| --- | --- |
| String | [getDefaultId](../Connector.md#getDefaultId()) ()  Gets the default connector ID. |
| abstract void | [init](../Connector.md#init(T)) ([IdentityConnectorContext](./IdentityConnectorContext.md) context)  Initializes the connector with the current context. |
| abstract void | [saveCheckpoint](../Connector.md#saveCheckpoint(boolean)) (boolean isShutdown)  Saves checkpoint information such as current traversal position or incremental change tokens. |
| abstract void | [traverse](../Connector.md#traverse()) ()  Implements a connector-specific traversal strategy. |

## Public Constructors

#### public FullSyncIdentityConnector (Repository identityRepository)

Creates an instance of `FullSyncIdentityConnector` for syncing identities from supplied identity `Repository`.

##### Parameters

| identityRepository | implementation for fetching users and groups from identity repository. |
| --- | --- |

#### public FullSyncIdentityConnector (Repository identityRepository, IdentityStateLoader identityStateLoader)

Creates an instance of `FullSyncIdentityConnector` for syncing identities from supplied identity `Repository`.

##### Parameters

| identityRepository | implementation for fetching users and groups from identity repository. |
| --- | --- |
| identityStateLoader | to load previously synced identities with Google APIs. |

## Public Methods

#### public void destroy ()

Releases resources and shuts down worker processes.

#### public void init (IdentityConnectorContext context)

Initializes the connector with the current context.

Initialization is the ideal time to start any threads to do extra behind-the-scenes work. The `context` allows access to other useful objects that can be used at any time such as the `IdentityService`.

If an unrecoverable fatal error occurs during initialization, throw a `StartupException` to cancel the startup process. If a recoverable error occurs during initialization, most `Exception` instances other than `StartupException` cause a retry of initialization after a short delay.

##### Parameters

| context | `IdentityConnectorContext` instance for accessing framework objects |
| --- | --- |

##### Throws

| Exception |  |
| --- | --- |

#### public void saveCheckpoint (boolean isShutdown)

Saves checkpoint information such as current traversal position or incremental change tokens.

The checkpoint contents are implementation-specific as defined by the connector code. This method is called during shutdown to allow the connector to save the current traversal state.

##### Parameters

| isShutdown | flag indicating a connector shutdown |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
| InterruptedException |  |

#### public void traverse ()

Traverses `IdentityUser` s and `IdentityGroup` s from repository.

##### Throws

| IOException |  |
| --- | --- |
| InterruptedException |  |
