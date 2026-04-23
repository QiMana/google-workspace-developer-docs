---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector
root: workspace
fetched_at: 2026-04-23T15:26:34.542Z
---

# FullSyncIdentityConnector

Connector implementation which periodically sync all users and groups with Google

### Public Constructor Summary

|  | [FullSyncIdentityConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector#FullSyncIdentityConnector\(com.google.enterprise.cloudsearch.sdk.identity.Repository\)) ([Repository](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository) identityRepository)  Creates an instance of `FullSyncIdentityConnector` for syncing identities from supplied identity `Repository`. |
| --- | --- |
|  | [FullSyncIdentityConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector#FullSyncIdentityConnector\(com.google.enterprise.cloudsearch.sdk.identity.Repository,%20com.google.enterprise.cloudsearch.sdk.identity.IdentityStateLoader\)) ([Repository](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository) identityRepository, [IdentityStateLoader](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityStateLoader) identityStateLoader)  Creates an instance of `FullSyncIdentityConnector` for syncing identities from supplied identity `Repository`. |

### Public Method Summary

| void | [destroy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector#destroy\(\)) ()  Releases resources and shuts down worker processes. |
| --- | --- |
| void | [init](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector#init\(com.google.enterprise.cloudsearch.sdk.identity.IdentityConnectorContext\)) ([IdentityConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnectorContext) context)  Initializes the connector with the current context. |
| void | [saveCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector#saveCheckpoint\(boolean\)) (boolean isShutdown)  Saves checkpoint information such as current traversal position or incremental change tokens. |
| void | [traverse](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector#traverse\(\)) ()  Traverses `IdentityUser` s and `IdentityGroup` s from repository. |

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

From interface [com.google.enterprise.cloudsearch.sdk.identity.IdentityConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnector)

| abstract void | [init](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnector#init\(com.google.enterprise.cloudsearch.sdk.identity.IdentityConnectorContext\)) ([IdentityConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnectorContext) context)  Initializes the connector with the current context. |
| --- | --- |

From interface [com.google.enterprise.cloudsearch.sdk.Connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector)

| abstract void | [destroy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#destroy\(\)) ()  Shuts down and releases connector resources. |
| --- | --- |
| String | [getDefaultId](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#getDefaultId\(\)) ()  Gets the default connector ID. |
| abstract void | [init](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#init\(T\)) ([IdentityConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnectorContext) context)  Initializes the connector with the current context. |
| abstract void | [saveCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#saveCheckpoint\(boolean\)) (boolean isShutdown)  Saves checkpoint information such as current traversal position or incremental change tokens. |
| abstract void | [traverse](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector#traverse\(\)) ()  Implements a connector-specific traversal strategy. |

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
