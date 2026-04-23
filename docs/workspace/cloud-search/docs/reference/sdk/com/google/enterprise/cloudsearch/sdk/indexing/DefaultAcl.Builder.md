---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder
root: workspace
fetched_at: 2026-04-23T15:26:44.979Z
---

# DefaultAcl.Builder

### Public Constructor Summary

[DefaultAcl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder#DefaultAcl.Builder\(\)) ()

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder#build\(\)) () |
| --- | --- |
| [DefaultAcl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder) | [setDefaultAclName](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder#setDefaultAclName\(java.lang.String\)) (String defaultAclName) |
| [DefaultAcl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder) | [setDeniedReaderGroups](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder#setDeniedReaderGroups\(java.util.List%3Ccom.google.api.services.cloudsearch.v1.model.Principal%3E\)) (List<Principal> deniedReaderGroups) |
| [DefaultAcl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder) | [setDeniedReaderUsers](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder#setDeniedReaderUsers\(java.util.List%3Ccom.google.api.services.cloudsearch.v1.model.Principal%3E\)) (List<Principal> deniedReaderUsers) |
| [DefaultAcl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder) | [setIndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder#setIndexingService\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService\)) ([IndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService) indexingService) |
| [DefaultAcl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder) | [setIsPublic](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder#setIsPublic\(boolean\)) (boolean isPublic) |
| [DefaultAcl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder) | [setMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder#setMode\(com.google.enterprise.cloudsearch.sdk.indexing.DefaultAcl.DefaultAclMode\)) ([DefaultAcl.DefaultAclMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.DefaultAclMode) aclMode) |
| [DefaultAcl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder) | [setReaderGroups](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder#setReaderGroups\(java.util.List%3Ccom.google.api.services.cloudsearch.v1.model.Principal%3E\)) (List<Principal> readerGroups) |
| [DefaultAcl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder) | [setReaderUsers](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder#setReaderUsers\(java.util.List%3Ccom.google.api.services.cloudsearch.v1.model.Principal%3E\)) (List<Principal> readerUsers) |

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
