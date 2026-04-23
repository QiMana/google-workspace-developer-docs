---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup
root: workspace
fetched_at: 2026-04-23T15:26:33.957Z
---

# IdentityGroup

Represents a third-party group to be synced with Cloud identity Groups API.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder">IdentityGroup.Builder</a></td><td width="100%">Builder for <code>IdentityGroup</code></td></tr></tbody></table>

### Field Summary

| public static final ImmutableMap<String, String> | [GROUP\_LABELS](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup#GROUP_LABELS) | Group label to be added for each synced group as required by Cloud Identity Groups API. |
| --- | --- | --- |

### Public Constructor Summary

[IdentityGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup#IdentityGroup\(com.google.enterprise.cloudsearch.sdk.identity.IdentityGroup.Builder\)) ([IdentityGroup.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder) buider)

Creates an instance of `IdentityGroup`.

### Public Method Summary

| boolean | [equals](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup#equals\(java.lang.Object\)) (Object obj) |
| --- | --- |
| EntityKey | [getGroupKey](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup#getGroupKey\(\)) ()  Gets group key for identity group. |
| [IdentityPrincipal.Kind](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal.Kind) | [getKind](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup#getKind\(\)) ()  Get kind for `IdentityPrincipal`. |
| ImmutableSet<Membership> | [getMembers](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup#getMembers\(\)) ()  Gets `Membership` s under identity group. |
| int | [hashCode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup#hashCode\(\)) () |
| ListenableFuture< [IdentityGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup) > | [sync](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup#sync\(com.google.enterprise.cloudsearch.sdk.identity.IdentityGroup,%20com.google.enterprise.cloudsearch.sdk.identity.IdentityService\)) ([IdentityGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup) previouslySynced, [IdentityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityService) service)  Syncs `IdentityGroup` with Cloud Identity Groups API using `service` including group memberships. |
| ListenableFuture<Boolean> | [unmap](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup#unmap\(com.google.enterprise.cloudsearch.sdk.identity.IdentityService\)) ([IdentityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityService) service)  Removes `IdentityGroup` from Cloud Identity Groups API using `service`. |

### Inherited Method Summary

From class [com.google.enterprise.cloudsearch.sdk.identity.IdentityPrincipal](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal)

| String | [getIdentity](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal#getIdentity\(\)) ()  Gets identity for third-party principal. |
| --- | --- |
| abstract [IdentityPrincipal.Kind](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal.Kind) | [getKind](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal#getKind\(\)) ()  Gets kind for principal. |

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

#### public static final ImmutableMap<String, String> GROUP\_LABELS

Group label to be added for each synced group as required by Cloud Identity Groups API.

## Public Constructors

#### public IdentityGroup (IdentityGroup.Builder buider)

Creates an instance of `IdentityGroup`.

##### Parameters

| buider |  |
| --- | --- |

## Public Methods

#### public boolean equals (Object obj)

##### Parameters

| obj |  |
| --- | --- |

#### public EntityKey getGroupKey ()

Gets group key for identity group.

##### Returns

- group key for identity group.

#### public IdentityPrincipal.Kind getKind ()

Get kind for `IdentityPrincipal`. This is always `GROUP` for `IdentityGroup`.

#### public ImmutableSet<Membership> getMembers ()

Gets `Membership` s under identity group.

##### Returns

- memberships under identity group.

#### public int hashCode ()

#### public ListenableFuture<IdentityGroup> sync (IdentityGroup previouslySynced, IdentityService service)

Syncs `IdentityGroup` with Cloud Identity Groups API using `service` including group memberships.

##### Parameters

| previouslySynced |  |
| --- | --- |
| service |  |

##### Throws

| IOException |  |
| --- | --- |

#### public ListenableFuture<Boolean> unmap (IdentityService service)

Removes `IdentityGroup` from Cloud Identity Groups API using `service`.

##### Parameters

| service |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
