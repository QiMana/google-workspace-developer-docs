---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder
root: workspace
fetched_at: 2026-04-23T15:26:36.867Z
---

# IdentityUser.Builder

### Public Constructor Summary

[IdentityUser.Builder](./IdentityUser.Builder.md#IdentityUser.Builder()) ()

### Public Method Summary

|  | [build](./IdentityUser.Builder.md#build()) () |
| --- | --- |
| [IdentityUser.Builder](./IdentityUser.Builder.md) | [setAttribute](./IdentityUser.Builder.md#setAttribute(java.lang.String)) (String attribute)  Sets custom schema attribute name to be populated for identity mapping. |
| [IdentityUser.Builder](./IdentityUser.Builder.md) | [setGoogleIdentity](./IdentityUser.Builder.md#setGoogleIdentity(java.lang.String)) (String googleIdentity)  Sets Google identity for user to map external identity. |
| [IdentityUser.Builder](./IdentityUser.Builder.md) | [setSchema](./IdentityUser.Builder.md#setSchema(java.lang.String)) (String schema)  Sets custom schema name to be updated for identity mapping. |
| [IdentityUser.Builder](./IdentityUser.Builder.md) | [setUserIdentity](./IdentityUser.Builder.md#setUserIdentity(java.lang.String)) (String userIdentity)  Sets external user identity to be mapped. |

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
