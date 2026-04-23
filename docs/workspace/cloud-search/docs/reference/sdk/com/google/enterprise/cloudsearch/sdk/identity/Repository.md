---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository
root: workspace
fetched_at: 2026-04-23T15:26:35.529Z
---

# Repository

An Identity repository for listing Users and Groups from a repository

### Public Method Summary

| abstract void | [close](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository#close\(\)) ()  Closes the data repository and releases resources such as connections or executors. |
| --- | --- |
| abstract void | [init](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository#init\(com.google.enterprise.cloudsearch.sdk.identity.RepositoryContext\)) ([RepositoryContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext) context)  Initialize `Repository` for traversal. |
| abstract [CheckpointCloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable) < [IdentityGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup) > | [listGroups](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository#listGroups\(byte[]\)) (byte\[\] checkpoint)  List all groups from Identity Repository. |
| abstract [CheckpointCloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable) < [IdentityUser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser) > | [listUsers](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository#listUsers\(byte[]\)) (byte\[\] checkpoint)  List all users from Identity Repository. |

## Public Methods

#### public abstract void close ()

Closes the data repository and releases resources such as connections or executors.

#### public abstract void init (RepositoryContext context)

Initialize `Repository` for traversal. Called from `init(T)`. This method can be retried if `init(T)` is retried.

##### Throws

| IOException |  |
| --- | --- |

#### public abstract CheckpointCloseableIterable<IdentityGroup> listGroups (byte\[\] checkpoint)

List all groups from Identity Repository. Implement can use pagination provided by `CheckpointCloseableIterable` to list groups in batches.

##### Parameters

| checkpoint | checkpoint from previous batch. |
| --- | --- |

##### Returns

- Full list of `IdentityGroup` s to sync

##### Throws

| IOException | if listing of users fails. |
| --- | --- |

#### public abstract CheckpointCloseableIterable<IdentityUser> listUsers (byte\[\] checkpoint)

List all users from Identity Repository. Implement can use pagination provided by `CheckpointCloseableIterable` to list users in batches.

##### Parameters

| checkpoint | checkpoint from previous batch. |
| --- | --- |

##### Returns

- Full list of `IdentityUser` s to sync

##### Throws

| IOException | if listing of users fails. |
| --- | --- |
