---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder
root: workspace
fetched_at: 2026-04-23T15:26:44.731Z
---

# IndexingApplication.Builder

Buider for `IndexingApplication` instances.

### Field Summary

| public H extends [AbstractApplicationHelper](../Application.AbstractApplicationHelper.md) | [helper](./IndexingApplication.Builder.md#helper) |  |
| --- | --- | --- |

### Public Constructor Summary

[IndexingApplication.Builder](./IndexingApplication.Builder.md#IndexingApplication.Builder(com.google.enterprise.cloudsearch.sdk.indexing.IndexingConnector,%20java.lang.String[])) ([IndexingConnector](./IndexingConnector.md) connector, String\[\] args)

Builder for IndexingApplication

### Public Method Summary

|  | [build](./IndexingApplication.Builder.md#build()) () |
| --- | --- |
| B extends AbstractBuilder<B, H extends [AbstractApplicationHelper](../Application.AbstractApplicationHelper.md), T extends [ConnectorContext](../ConnectorContext.md) > | [setCredentialFactory](./IndexingApplication.Builder.md#setCredentialFactory(com.google.enterprise.cloudsearch.sdk.CredentialFactory)) ([CredentialFactory](../CredentialFactory.md) credentialFactory)  Creates a GoogleCredential object. |
| B extends AbstractBuilder<B, H extends [AbstractApplicationHelper](../Application.AbstractApplicationHelper.md), T extends [ConnectorContext](../ConnectorContext.md) > | [setHelper](./IndexingApplication.Builder.md#setHelper(H)) (H extends [AbstractApplicationHelper](../Application.AbstractApplicationHelper.md) helper) |
| [IndexingApplication.Builder](./IndexingApplication.Builder.md) | [setIndexingService](./IndexingApplication.Builder.md#setIndexingService(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService)) ([IndexingService](./IndexingService.md) indexingService) |

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

## Fields

#### public H extends AbstractApplicationHelper helper

## Public Constructors

#### public IndexingApplication.Builder (IndexingConnector connector, String\[\] args)

Builder for IndexingApplication

##### Parameters

| connector | instance |
| --- | --- |
| args | command line arguments |

## Public Methods

#### build ()

##### Throws

| [StartupException](../StartupException.md) |  |
| --- | --- |

#### public B extends AbstractBuilder<B, H extends AbstractApplicationHelper, T extends ConnectorContext> setCredentialFactory (CredentialFactory credentialFactory)

Creates a GoogleCredential object.

##### Parameters

| credentialFactory |  |
| --- | --- |

#### public B extends AbstractBuilder<B, H extends AbstractApplicationHelper, T extends ConnectorContext> setHelper (H extends AbstractApplicationHelper helper)

##### Parameters

| helper |  |
| --- | --- |

#### public IndexingApplication.Builder setIndexingService (IndexingService indexingService)

##### Parameters

| indexingService |  |
| --- | --- |
