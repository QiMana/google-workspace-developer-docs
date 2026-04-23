---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext
root: workspace
fetched_at: 2026-04-23T15:26:38.620Z
---

# RepositoryContext

### Public Method Summary

| EntityKey | [buildEntityKeyForGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext#buildEntityKeyForGroup\(java.lang.String\)) (String externalGroupId)  Creates an `EntityKey` for given external group identifier. |
| --- | --- |
| [IdentityGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup) | [buildIdentityGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext#buildIdentityGroup\(java.lang.String,%20java.util.function.Supplier%3Cjava.util.Set%3Ccom.google.api.services.cloudidentity.v1.model.Membership%3E%3E\)) (String externalGroupId, Supplier<Set<Membership>> members) |
| [IdentityUser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser) | [buildIdentityUser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext#buildIdentityUser\(java.lang.String,%20java.lang.String\)) (String googleId, String externalId) |
| boolean | [equals](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext#equals\(java.lang.Object\)) (Object obj) |
| static [RepositoryContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext) | [fromConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext#fromConfiguration\(\)) () |
| [IdentitySourceConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentitySourceConfiguration) | [getIdentitySourceConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext#getIdentitySourceConfiguration\(\)) () |
| ImmutableMap<String, [IdentitySourceConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentitySourceConfiguration) > | [getReferenceIdentitySourceConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext#getReferenceIdentitySourceConfiguration\(\)) () |
| Optional< [RepositoryContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext) > | [getRepositoryContextForReferenceIdentitySource](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext#getRepositoryContextForReferenceIdentitySource\(java.lang.String\)) (String referenceSourceName) |
| int | [hashCode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext#hashCode\(\)) () |

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

## Public Methods

#### public EntityKey buildEntityKeyForGroup (String externalGroupId)

Creates an `EntityKey` for given external group identifier. This method uses `encodeGroupId(String)` to escape unsupported characters from identifier.

##### Parameters

| externalGroupId | to build `EntityKey` |
| --- | --- |

##### Returns

- EntityKey for provided externalGroupId

#### public IdentityGroup buildIdentityGroup (String externalGroupId, Supplier<Set<Membership>> members)

##### Parameters

| externalGroupId |  |
| --- | --- |
| members |  |

#### public IdentityUser buildIdentityUser (String googleId, String externalId)

##### Parameters

| googleId |  |
| --- | --- |
| externalId |  |

#### public boolean equals (Object obj)

##### Parameters

| obj |  |
| --- | --- |

#### public static RepositoryContext fromConfiguration ()

#### public IdentitySourceConfiguration getIdentitySourceConfiguration ()

#### public ImmutableMap<String, IdentitySourceConfiguration> getReferenceIdentitySourceConfiguration ()

#### public Optional<RepositoryContext> getRepositoryContextForReferenceIdentitySource (String referenceSourceName)

##### Parameters

| referenceSourceName |  |
| --- | --- |
