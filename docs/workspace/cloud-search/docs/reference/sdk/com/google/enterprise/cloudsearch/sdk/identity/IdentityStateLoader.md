---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityStateLoader
root: workspace
fetched_at: 2026-04-23T15:26:36.313Z
---

# IdentityStateLoader

## IdentityStateLoader

public interface **IdentityStateLoader**

Abstract object to load initial `IdentityState`

### Public Method Summary

| abstract [IdentityState](./IdentityState.md) | [getInitialIdentityState](./IdentityStateLoader.md#getInitialIdentityState()) ()  Returns `IdentityState` synced with Google. |
| --- | --- |

## Public Methods

#### public abstract IdentityState getInitialIdentityState ()

Returns `IdentityState` synced with Google.

##### Returns

- `IdentityState` synced with Google.

##### Throws

| IOException | if retrieval of previously synced identities fails |
| --- | --- |
