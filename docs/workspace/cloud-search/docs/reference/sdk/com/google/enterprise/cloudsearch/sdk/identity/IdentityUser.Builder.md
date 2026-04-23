---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder
root: workspace
fetched_at: 2026-04-23T15:26:36.867Z
---

# IdentityUser.Builder

### Public Constructor Summary

[IdentityUser.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder#IdentityUser.Builder\(\)) ()

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder#build\(\)) () |
| --- | --- |
| [IdentityUser.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder) | [setAttribute](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder#setAttribute\(java.lang.String\)) (String attribute)  Sets custom schema attribute name to be populated for identity mapping. |
| [IdentityUser.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder) | [setGoogleIdentity](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder#setGoogleIdentity\(java.lang.String\)) (String googleIdentity)  Sets Google identity for user to map external identity. |
| [IdentityUser.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder) | [setSchema](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder#setSchema\(java.lang.String\)) (String schema)  Sets custom schema name to be updated for identity mapping. |
| [IdentityUser.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder) | [setUserIdentity](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder#setUserIdentity\(java.lang.String\)) (String userIdentity)  Sets external user identity to be mapped. |

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

#### public IdentityUser.Builder ()

## Public Methods

#### build ()

#### public IdentityUser.Builder setAttribute (String attribute)

Sets custom schema attribute name to be populated for identity mapping.

##### Parameters

| attribute |  |
| --- | --- |

#### public IdentityUser.Builder setGoogleIdentity (String googleIdentity)

Sets Google identity for user to map external identity.

##### Parameters

| googleIdentity |  |
| --- | --- |

#### public IdentityUser.Builder setSchema (String schema)

Sets custom schema name to be updated for identity mapping.

##### Parameters

| schema |  |
| --- | --- |

#### public IdentityUser.Builder setUserIdentity (String userIdentity)

Sets external user identity to be mapped.

##### Parameters

| userIdentity |  |
| --- | --- |
