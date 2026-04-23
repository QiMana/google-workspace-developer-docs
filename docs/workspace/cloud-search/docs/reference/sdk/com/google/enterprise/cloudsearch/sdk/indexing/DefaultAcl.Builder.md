---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder
root: workspace
fetched_at: 2026-04-23T15:26:44.979Z
---

# DefaultAcl.Builder

### Public Constructor Summary

[DefaultAcl.Builder](./DefaultAcl.Builder.md#DefaultAcl.Builder()) ()

### Public Method Summary

|  | [build](./DefaultAcl.Builder.md#build()) () |
| --- | --- |
| [DefaultAcl.Builder](./DefaultAcl.Builder.md) | [setDefaultAclName](./DefaultAcl.Builder.md#setDefaultAclName(java.lang.String)) (String defaultAclName) |
| [DefaultAcl.Builder](./DefaultAcl.Builder.md) | [setDeniedReaderGroups](./DefaultAcl.Builder.md#setDeniedReaderGroups(java.util.List%3Ccom.google.api.services.cloudsearch.v1.model.Principal%3E)) (List<Principal> deniedReaderGroups) |
| [DefaultAcl.Builder](./DefaultAcl.Builder.md) | [setDeniedReaderUsers](./DefaultAcl.Builder.md#setDeniedReaderUsers(java.util.List%3Ccom.google.api.services.cloudsearch.v1.model.Principal%3E)) (List<Principal> deniedReaderUsers) |
| [DefaultAcl.Builder](./DefaultAcl.Builder.md) | [setIndexingService](./DefaultAcl.Builder.md#setIndexingService(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService)) ([IndexingService](./IndexingService.md) indexingService) |
| [DefaultAcl.Builder](./DefaultAcl.Builder.md) | [setIsPublic](./DefaultAcl.Builder.md#setIsPublic(boolean)) (boolean isPublic) |
| [DefaultAcl.Builder](./DefaultAcl.Builder.md) | [setMode](./DefaultAcl.Builder.md#setMode(com.google.enterprise.cloudsearch.sdk.indexing.DefaultAcl.DefaultAclMode)) ([DefaultAcl.DefaultAclMode](./DefaultAcl.DefaultAclMode.md) aclMode) |
| [DefaultAcl.Builder](./DefaultAcl.Builder.md) | [setReaderGroups](./DefaultAcl.Builder.md#setReaderGroups(java.util.List%3Ccom.google.api.services.cloudsearch.v1.model.Principal%3E)) (List<Principal> readerGroups) |
| [DefaultAcl.Builder](./DefaultAcl.Builder.md) | [setReaderUsers](./DefaultAcl.Builder.md#setReaderUsers(java.util.List%3Ccom.google.api.services.cloudsearch.v1.model.Principal%3E)) (List<Principal> readerUsers) |

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

#### public DefaultAcl.Builder ()

## Public Methods

#### build ()

#### public DefaultAcl.Builder setDefaultAclName (String defaultAclName)

##### Parameters

| defaultAclName |  |
| --- | --- |

#### public DefaultAcl.Builder setDeniedReaderGroups (List<Principal> deniedReaderGroups)

##### Parameters

| deniedReaderGroups |  |
| --- | --- |

#### public DefaultAcl.Builder setDeniedReaderUsers (List<Principal> deniedReaderUsers)

##### Parameters

| deniedReaderUsers |  |
| --- | --- |

#### public DefaultAcl.Builder setIndexingService (IndexingService indexingService)

##### Parameters

| indexingService |  |
| --- | --- |

#### public DefaultAcl.Builder setIsPublic (boolean isPublic)

##### Parameters

| isPublic |  |
| --- | --- |

#### public DefaultAcl.Builder setMode (DefaultAcl.DefaultAclMode aclMode)

##### Parameters

| aclMode |  |
| --- | --- |

#### public DefaultAcl.Builder setReaderGroups (List<Principal> readerGroups)

##### Parameters

| readerGroups |  |
| --- | --- |

#### public DefaultAcl.Builder setReaderUsers (List<Principal> readerUsers)

##### Parameters

| readerUsers |  |
| --- | --- |
