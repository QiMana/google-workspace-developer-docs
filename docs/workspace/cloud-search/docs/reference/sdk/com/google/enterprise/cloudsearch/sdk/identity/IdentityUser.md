---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser
root: workspace
fetched_at: 2026-04-23T15:26:35.724Z
---

# IdentityUser

Represents third-party user identity and corresponding Google identity mapping.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder">IdentityUser.Builder</a></td><td width="100%">Builder for <code>IdentityUser</code></td></tr></tbody></table>

### Public Method Summary

| boolean | [equals](./IdentityUser.md#equals(java.lang.Object)) (Object obj) |
| --- | --- |
| String | [getAttribute](./IdentityUser.md#getAttribute()) ()  Gets custom schema attribute name which will be populated to map third-party user identity. |
| String | [getGoogleIdentity](./IdentityUser.md#getGoogleIdentity()) ()  Gets Google identity for user. |
| [IdentityPrincipal.Kind](./IdentityPrincipal.Kind.md) | [getKind](./IdentityUser.md#getKind()) ()  Get kind for `IdentityPrincipal`. |
| String | [getSchema](./IdentityUser.md#getSchema()) ()  Gets custom schema name under which identity will be mapped for user. |
| int | [hashCode](./IdentityUser.md#hashCode()) () |
| ListenableFuture< [IdentityUser](./IdentityUser.md) > | [sync](./IdentityUser.md#sync(com.google.enterprise.cloudsearch.sdk.identity.IdentityUser,%20com.google.enterprise.cloudsearch.sdk.identity.IdentityService)) ([IdentityUser](./IdentityUser.md) previouslySynced, [IdentityService](./IdentityService.md) service)  Syncs `IdentityUser` with Google Admin SDK API using `service` |
| String | [toString](./IdentityUser.md#toString()) () |
| ListenableFuture<Boolean> | [unmap](./IdentityUser.md#unmap(com.google.enterprise.cloudsearch.sdk.identity.IdentityService)) ([IdentityService](./IdentityService.md) service)  Unmaps `IdentityUser`, by clearing out `getAttribute()`, using Google Admin SDK API. |

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

## Public Methods

#### public boolean equals (Object obj)

##### Parameters

| obj |  |
| --- | --- |

#### public String getAttribute ()

Gets custom schema attribute name which will be populated to map third-party user identity.

##### Returns

- custom schema attribute name which will be populated to map third-party user identity.

#### public String getGoogleIdentity ()

Gets Google identity for user.

##### Returns

- Google identity for user.

#### public IdentityPrincipal.Kind getKind ()

Get kind for `IdentityPrincipal`. This is always `USER` for `IdentityUser`.

#### public String getSchema ()

Gets custom schema name under which identity will be mapped for user.

##### Returns

- custom schema name under which identity will be mapped for user.

#### public int hashCode ()

#### public ListenableFuture<IdentityUser> sync (IdentityUser previouslySynced, IdentityService service)

Syncs `IdentityUser` with Google Admin SDK API using `service`

##### Parameters

| previouslySynced |  |
| --- | --- |
| service |  |

##### Throws

| IOException |  |
| --- | --- |

#### public String toString ()

#### public ListenableFuture<Boolean> unmap (IdentityService service)

Unmaps `IdentityUser`, by clearing out `getAttribute()`, using Google Admin SDK API.

##### Parameters

| service |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
