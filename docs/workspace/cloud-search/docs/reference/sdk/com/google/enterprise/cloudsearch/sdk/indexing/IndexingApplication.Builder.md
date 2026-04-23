---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder
root: workspace
fetched_at: 2026-04-23T15:26:44.731Z
---

# IndexingApplication.Builder

Buider for `IndexingApplication` instances.

### Field Summary

| public H extends [AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper) | [helper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder#helper) |  |
| --- | --- | --- |

### Public Constructor Summary

[IndexingApplication.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder#IndexingApplication.Builder\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingConnector,%20java.lang.String[]\)) ([IndexingConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnector) connector, String\[\] args)

Builder for IndexingApplication

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder#build\(\)) () |
| --- | --- |
| B extends AbstractBuilder<B, H extends [AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper), T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | [setCredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder#setCredentialFactory\(com.google.enterprise.cloudsearch.sdk.CredentialFactory\)) ([CredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CredentialFactory) credentialFactory)  Creates a GoogleCredential object. |
| B extends AbstractBuilder<B, H extends [AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper), T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | [setHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder#setHelper\(H\)) (H extends [AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper) helper) |
| [IndexingApplication.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder) | [setIndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder#setIndexingService\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService\)) ([IndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService) indexingService) |

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

| [StartupException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StartupException) |  |
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
