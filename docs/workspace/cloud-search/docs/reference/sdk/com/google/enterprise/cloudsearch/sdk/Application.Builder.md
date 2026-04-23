---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.Builder
root: workspace
fetched_at: 2026-04-23T15:26:21.939Z
---

# Application.Builder

### Field Summary

| public H extends [AbstractApplicationHelper](./Application.AbstractApplicationHelper.md) | [helper](./Application.Builder.md#helper) |  |
| --- | --- | --- |

### Public Constructor Summary

[Application.Builder](./Application.Builder.md#Application.Builder(com.google.enterprise.cloudsearch.sdk.Connector%3Ccom.google.enterprise.cloudsearch.sdk.ConnectorContext%3E,%20java.lang.String[])) ([Connector](./Connector.md) < [ConnectorContext](./ConnectorContext.md) > connector, String\[\] args)

Builder for Application

### Public Method Summary

| [Application](./Application.md) <Application.ApplicationHelper, [ConnectorContext](./ConnectorContext.md) > | [build](./Application.Builder.md#build()) () |
| --- | --- |
| B extends AbstractBuilder<B, H, T> | [setCredentialFactory](./Application.Builder.md#setCredentialFactory(com.google.enterprise.cloudsearch.sdk.CredentialFactory)) ([CredentialFactory](./CredentialFactory.md) credentialFactory)  Creates a GoogleCredential object. |
| B extends AbstractBuilder<B, H, T> | [setHelper](./Application.Builder.md#setHelper(H)) (H helper) |

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

| [StartupException](./StartupException.md) |  |
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
