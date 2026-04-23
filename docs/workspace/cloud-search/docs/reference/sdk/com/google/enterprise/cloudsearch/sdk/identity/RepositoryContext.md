---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext
root: workspace
fetched_at: 2026-04-23T15:26:38.620Z
---

# RepositoryContext

### Public Method Summary

| EntityKey | [buildEntityKeyForGroup](./RepositoryContext.md#buildEntityKeyForGroup(java.lang.String)) (String externalGroupId)  Creates an `EntityKey` for given external group identifier. |
| --- | --- |
| [IdentityGroup](./IdentityGroup.md) | [buildIdentityGroup](./RepositoryContext.md#buildIdentityGroup(java.lang.String,%20java.util.function.Supplier%3Cjava.util.Set%3Ccom.google.api.services.cloudidentity.v1.model.Membership%3E%3E)) (String externalGroupId, Supplier<Set<Membership>> members) |
| [IdentityUser](./IdentityUser.md) | [buildIdentityUser](./RepositoryContext.md#buildIdentityUser(java.lang.String,%20java.lang.String)) (String googleId, String externalId) |
| boolean | [equals](./RepositoryContext.md#equals(java.lang.Object)) (Object obj) |
| static [RepositoryContext](./RepositoryContext.md) | [fromConfiguration](./RepositoryContext.md#fromConfiguration()) () |
| [IdentitySourceConfiguration](./IdentitySourceConfiguration.md) | [getIdentitySourceConfiguration](./RepositoryContext.md#getIdentitySourceConfiguration()) () |
| ImmutableMap<String, [IdentitySourceConfiguration](./IdentitySourceConfiguration.md) > | [getReferenceIdentitySourceConfiguration](./RepositoryContext.md#getReferenceIdentitySourceConfiguration()) () |
| Optional< [RepositoryContext](./RepositoryContext.md) > | [getRepositoryContextForReferenceIdentitySource](./RepositoryContext.md#getRepositoryContextForReferenceIdentitySource(java.lang.String)) (String referenceSourceName) |
| int | [hashCode](./RepositoryContext.md#hashCode()) () |

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
