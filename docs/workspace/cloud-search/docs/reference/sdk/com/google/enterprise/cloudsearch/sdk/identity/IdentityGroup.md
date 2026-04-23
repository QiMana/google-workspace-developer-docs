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

| public static final ImmutableMap<String, String> | [GROUP\_LABELS](./IdentityGroup.md#GROUP_LABELS) | Group label to be added for each synced group as required by Cloud Identity Groups API. |
| --- | --- | --- |

### Public Constructor Summary

[IdentityGroup](./IdentityGroup.md#IdentityGroup(com.google.enterprise.cloudsearch.sdk.identity.IdentityGroup.Builder)) ([IdentityGroup.Builder](./IdentityGroup.Builder.md) buider)

Creates an instance of `IdentityGroup`.

### Public Method Summary

| boolean | [equals](./IdentityGroup.md#equals(java.lang.Object)) (Object obj) |
| --- | --- |
| EntityKey | [getGroupKey](./IdentityGroup.md#getGroupKey()) ()  Gets group key for identity group. |
| [IdentityPrincipal.Kind](./IdentityPrincipal.Kind.md) | [getKind](./IdentityGroup.md#getKind()) ()  Get kind for `IdentityPrincipal`. |
| ImmutableSet<Membership> | [getMembers](./IdentityGroup.md#getMembers()) ()  Gets `Membership` s under identity group. |
| int | [hashCode](./IdentityGroup.md#hashCode()) () |
| ListenableFuture< [IdentityGroup](./IdentityGroup.md) > | [sync](./IdentityGroup.md#sync(com.google.enterprise.cloudsearch.sdk.identity.IdentityGroup,%20com.google.enterprise.cloudsearch.sdk.identity.IdentityService)) ([IdentityGroup](./IdentityGroup.md) previouslySynced, [IdentityService](./IdentityService.md) service)  Syncs `IdentityGroup` with Cloud Identity Groups API using `service` including group memberships. |
| ListenableFuture<Boolean> | [unmap](./IdentityGroup.md#unmap(com.google.enterprise.cloudsearch.sdk.identity.IdentityService)) ([IdentityService](./IdentityService.md) service)  Removes `IdentityGroup` from Cloud Identity Groups API using `service`. |

### Inherited Method Summary

From class [com.google.enterprise.cloudsearch.sdk.identity.IdentityPrincipal](./IdentityPrincipal.md)

| String | [getIdentity](./IdentityPrincipal.md#getIdentity()) ()  Gets identity for third-party principal. |
| --- | --- |
| abstract [IdentityPrincipal.Kind](./IdentityPrincipal.Kind.md) | [getKind](./IdentityPrincipal.md#getKind()) ()  Gets kind for principal. |

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
