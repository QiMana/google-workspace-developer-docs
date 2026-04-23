---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CredentialFactory
root: workspace
fetched_at: 2026-04-23T15:26:26.651Z
---

# CredentialFactory

Known Indirect Subclasses

[LocalFileCredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory)

Factory to create a `GoogleCredential` object for accessing the Cloud Search API.

### Public Method Summary

| abstract GoogleCredential | [getCredential](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CredentialFactory#getCredential\(java.util.Collection%3Cjava.lang.String%3E\)) (Collection<String> scopes)  Creates a `GoogleCredential` object for accessing the Cloud Search API. |
| --- | --- |

## Public Methods

#### public abstract GoogleCredential getCredential (Collection<String> scopes)

Creates a `GoogleCredential` object for accessing the Cloud Search API.

##### Parameters

| scopes | the OAuth 2.0 scope requirements to access the Cloud Search API |
| --- | --- |

##### Returns

- a fully built `GoogleCredential`

##### Throws

| GeneralSecurityException |  |
| --- | --- |
| IOException |  |
