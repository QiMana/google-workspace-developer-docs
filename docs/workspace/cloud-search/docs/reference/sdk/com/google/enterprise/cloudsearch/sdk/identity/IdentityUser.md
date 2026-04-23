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

| boolean | [equals](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser#equals\(java.lang.Object\)) (Object obj) |
| --- | --- |
| String | [getAttribute](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser#getAttribute\(\)) ()  Gets custom schema attribute name which will be populated to map third-party user identity. |
| String | [getGoogleIdentity](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser#getGoogleIdentity\(\)) ()  Gets Google identity for user. |
| [IdentityPrincipal.Kind](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal.Kind) | [getKind](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser#getKind\(\)) ()  Get kind for `IdentityPrincipal`. |
| String | [getSchema](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser#getSchema\(\)) ()  Gets custom schema name under which identity will be mapped for user. |
| int | [hashCode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser#hashCode\(\)) () |
| ListenableFuture< [IdentityUser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser) > | [sync](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser#sync\(com.google.enterprise.cloudsearch.sdk.identity.IdentityUser,%20com.google.enterprise.cloudsearch.sdk.identity.IdentityService\)) ([IdentityUser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser) previouslySynced, [IdentityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityService) service)  Syncs `IdentityUser` with Google Admin SDK API using `service` |
| String | [toString](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser#toString\(\)) () |
| ListenableFuture<Boolean> | [unmap](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser#unmap\(com.google.enterprise.cloudsearch.sdk.identity.IdentityService\)) ([IdentityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityService) service)  Unmaps `IdentityUser`, by clearing out `getAttribute()`, using Google Admin SDK API. |

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
