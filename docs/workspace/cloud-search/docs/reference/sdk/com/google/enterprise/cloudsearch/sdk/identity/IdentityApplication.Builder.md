---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder
root: workspace
fetched_at: 2026-04-23T15:26:33.496Z
---

# IdentityApplication.Builder

### Field Summary

| public H extends [AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper) | [helper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder#helper) |  |
| --- | --- | --- |
| public [IdentityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityService) | [identityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder#identityService) |  |

### Public Constructor Summary

[IdentityApplication.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder#IdentityApplication.Builder\(com.google.enterprise.cloudsearch.sdk.identity.IdentityConnector,%20java.lang.String[]\)) ([IdentityConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnector) connector, String\[\] args)

Builder for IdentityApplication

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder#build\(\)) () |
| --- | --- |
| B extends AbstractBuilder<B, H extends [AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper), T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | [setCredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder#setCredentialFactory\(com.google.enterprise.cloudsearch.sdk.CredentialFactory\)) ([CredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CredentialFactory) credentialFactory)  Creates a GoogleCredential object. |
| B extends AbstractBuilder<B, H extends [AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper), T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | [setHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder#setHelper\(H\)) (H extends [AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper) helper) |
| [IdentityApplication.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder) | [setIdentityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder#setIdentityService\(com.google.enterprise.cloudsearch.sdk.identity.IdentityService\)) ([IdentityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityService) identityService)  Sets `IdentityService` instance to be used for making API requests syncing user and group identities. |

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

#### public IdentityApplication.Builder setIdentityService (IdentityService identityService)

Sets `IdentityService` instance to be used for making API requests syncing user and group identities.

##### Parameters

| identityService | to be used for making API requests syncing user and group identities. |
| --- | --- |

##### Returns

- this builder instance.
