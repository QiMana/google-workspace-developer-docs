---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.Builder
root: workspace
fetched_at: 2026-04-23T15:26:21.939Z
---

# Application.Builder

### Field Summary

| public H extends [AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper) | [helper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.Builder#helper) |  |
| --- | --- | --- |

### Public Constructor Summary

[Application.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.Builder#Application.Builder\(com.google.enterprise.cloudsearch.sdk.Connector%3Ccom.google.enterprise.cloudsearch.sdk.ConnectorContext%3E,%20java.lang.String[]\)) ([Connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector) < [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > connector, String\[\] args)

Builder for Application

### Public Method Summary

| [Application](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application) <Application.ApplicationHelper, [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.Builder#build\(\)) () |
| --- | --- |
| B extends AbstractBuilder<B, H, T> | [setCredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.Builder#setCredentialFactory\(com.google.enterprise.cloudsearch.sdk.CredentialFactory\)) ([CredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CredentialFactory) credentialFactory)  Creates a GoogleCredential object. |
| B extends AbstractBuilder<B, H, T> | [setHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.Builder#setHelper\(H\)) (H helper) |

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

#### public Application.Builder (Connector<ConnectorContext> connector, String\[\] args)

Builder for Application

##### Parameters

| connector | instance |
| --- | --- |
| args | command line arguments |

## Public Methods

#### build ()

##### Throws

| [StartupException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StartupException) |  |
| --- | --- |

#### public B extends AbstractBuilder<B, H, T> setCredentialFactory (CredentialFactory credentialFactory)

Creates a GoogleCredential object.

##### Parameters

| credentialFactory |  |
| --- | --- |

##### Returns

- `CredentialFactory` object for creating `GoogleCredential` instance.

#### public B extends AbstractBuilder<B, H, T> setHelper (H helper)

##### Parameters

| helper |  |
| --- | --- |
