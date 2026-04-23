---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder
root: workspace
fetched_at: 2026-04-23T15:26:33.351Z
---

# IdentityGroup.Builder

### Public Constructor Summary

[IdentityGroup.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder#IdentityGroup.Builder\(\)) ()

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder#build\(\)) () |
| --- | --- |
| [IdentityGroup.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder) | [setGroupIdentity](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder#setGroupIdentity\(java.lang.String\)) (String groupIdentity)  Sets external group identity. |
| [IdentityGroup.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder) | [setGroupKey](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder#setGroupKey\(com.google.api.services.cloudidentity.v1.model.EntityKey\)) (EntityKey groupKey)  Sets group key. |
| [IdentityGroup.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder) | [setGroupResourceName](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder#setGroupResourceName\(java.lang.String\)) (String groupResourceName)  Sets resource identifier assigned by Cloud Identity Groups API. |
| [IdentityGroup.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder) | [setMembers](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder#setMembers\(java.util.Set%3Ccom.google.api.services.cloudidentity.v1.model.Membership%3E\)) (Set<Membership> members)  Sets `Membership` s to be synced under identity group. |
| [IdentityGroup.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder) | [setMembers](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder#setMembers\(java.util.function.Supplier%3Cjava.util.Set%3Ccom.google.api.services.cloudidentity.v1.model.Membership%3E%3E\)) (Supplier<Set<Membership>> membershipSupplier)  Sets `Membership` s to be synced under identity group. |

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

#### public IdentityGroup.Builder ()

## Public Methods

#### build ()

#### public IdentityGroup.Builder setGroupIdentity (String groupIdentity)

Sets external group identity. Mapped to display name of `Group`.

##### Parameters

| groupIdentity | external group identity. |
| --- | --- |

#### public IdentityGroup.Builder setGroupKey (EntityKey groupKey)

Sets group key. Mapped to `getGroupKey()`

##### Parameters

| groupKey | group key |
| --- | --- |

#### public IdentityGroup.Builder setGroupResourceName (String groupResourceName)

Sets resource identifier assigned by Cloud Identity Groups API. Extracted from `getName()`.

##### Parameters

| groupResourceName | resource identifier assigned by Cloud Identity Groups API |
| --- | --- |

#### public IdentityGroup.Builder setMembers (Set<Membership> members)

Sets `Membership` s to be synced under identity group.

##### Parameters

| members | `Membership` s to be synced |
| --- | --- |

#### public IdentityGroup.Builder setMembers (Supplier<Set<Membership>> membershipSupplier)

Sets `Membership` s to be synced under identity group.

##### Parameters

| membershipSupplier | supplier for `Membership` s to be synced |
| --- | --- |
