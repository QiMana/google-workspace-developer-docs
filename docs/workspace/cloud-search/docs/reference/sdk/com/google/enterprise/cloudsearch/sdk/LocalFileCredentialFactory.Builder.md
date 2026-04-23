---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder
root: workspace
fetched_at: 2026-04-23T15:26:28.071Z
---

# LocalFileCredentialFactory.Builder

### Public Constructor Summary

[LocalFileCredentialFactory.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder#LocalFileCredentialFactory.Builder\(\)) ()

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder#build\(\)) () |
| --- | --- |
| [LocalFileCredentialFactory.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder) |  |
| [LocalFileCredentialFactory.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder) | [setServiceAccountId](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder#setServiceAccountId\(java.lang.String\)) (String serviceAccountId)  Sets service account ID for creating `GoogleCredential`. |
| [LocalFileCredentialFactory.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder) | [setServiceAccountKeyFilePath](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder#setServiceAccountKeyFilePath\(java.lang.String\)) (String serviceAccountKeyFile)  Sets service account key file path for creating `GoogleCredential`. |

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

#### public LocalFileCredentialFactory.Builder ()

## Public Methods

#### build ()

#### public LocalFileCredentialFactory.Builder setProxy (GoogleProxy proxy)

Sets `GoogleProxy` for creating `GoogleCredential`.

##### Parameters

| proxy | to be used for creating `GoogleCredential`. |
| --- | --- |

#### public LocalFileCredentialFactory.Builder setServiceAccountId (String serviceAccountId)

Sets service account ID for creating `GoogleCredential`.

##### Parameters

| serviceAccountId | to be used for creating `GoogleCredential`. |
| --- | --- |

#### public LocalFileCredentialFactory.Builder setServiceAccountKeyFilePath (String serviceAccountKeyFile)

Sets service account key file path for creating `GoogleCredential`.

##### Parameters

| serviceAccountKeyFile | path to be used for creating `GoogleCredential`. |
| --- | --- |
