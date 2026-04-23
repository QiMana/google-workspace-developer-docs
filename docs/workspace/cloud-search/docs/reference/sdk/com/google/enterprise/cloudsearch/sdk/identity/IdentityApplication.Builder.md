---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder
root: workspace
fetched_at: 2026-04-23T15:26:33.496Z
---

# IdentityApplication.Builder

### Field Summary

| public H extends [AbstractApplicationHelper](../Application.AbstractApplicationHelper.md) | [helper](./IdentityApplication.Builder.md#helper) |  |
| --- | --- | --- |
| public [IdentityService](./IdentityService.md) | [identityService](./IdentityApplication.Builder.md#identityService) |  |

### Public Constructor Summary

[IdentityApplication.Builder](./IdentityApplication.Builder.md#IdentityApplication.Builder(com.google.enterprise.cloudsearch.sdk.identity.IdentityConnector,%20java.lang.String[])) ([IdentityConnector](./IdentityConnector.md) connector, String\[\] args)

Builder for IdentityApplication

### Public Method Summary

|  | [build](./IdentityApplication.Builder.md#build()) () |
| --- | --- |
| B extends AbstractBuilder<B, H extends [AbstractApplicationHelper](../Application.AbstractApplicationHelper.md), T extends [ConnectorContext](../ConnectorContext.md) > | [setCredentialFactory](./IdentityApplication.Builder.md#setCredentialFactory(com.google.enterprise.cloudsearch.sdk.CredentialFactory)) ([CredentialFactory](../CredentialFactory.md) credentialFactory)  Creates a GoogleCredential object. |
| B extends AbstractBuilder<B, H extends [AbstractApplicationHelper](../Application.AbstractApplicationHelper.md), T extends [ConnectorContext](../ConnectorContext.md) > | [setHelper](./IdentityApplication.Builder.md#setHelper(H)) (H extends [AbstractApplicationHelper](../Application.AbstractApplicationHelper.md) helper) |
| [IdentityApplication.Builder](./IdentityApplication.Builder.md) | [setIdentityService](./IdentityApplication.Builder.md#setIdentityService(com.google.enterprise.cloudsearch.sdk.identity.IdentityService)) ([IdentityService](./IdentityService.md) identityService)  Sets `IdentityService` instance to be used for making API requests syncing user and group identities. |

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

## Public Constructors

#### public IdentityApplication.Builder (IdentityConnector connector, String\[\] args)

Builder for IdentityApplication

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

#### public IdentityApplication.Builder setIdentityService (IdentityService identityService)

Sets `IdentityService` instance to be used for making API requests syncing user and group identities.

##### Parameters

| identityService | to be used for making API requests syncing user and group identities. |
| --- | --- |

##### Returns

- this builder instance.
