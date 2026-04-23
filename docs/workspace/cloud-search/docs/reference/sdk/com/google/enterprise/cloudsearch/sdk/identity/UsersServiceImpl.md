---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl
root: workspace
fetched_at: 2026-04-23T15:26:37.615Z
---

# UsersServiceImpl

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl.Builder">UsersServiceImpl.Builder</a></td><td width="100%">Builder for creating an instance of <code>UsersServiceImpl</code></td></tr></tbody></table>

### Public Method Summary

| static [UsersServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl) | [fromConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl#fromConfiguration\(com.google.enterprise.cloudsearch.sdk.CredentialFactory\)) ([CredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CredentialFactory) credentialFactory)  Creates an instance of `UsersServiceImpl` from connector configuration. |
| --- | --- |
| ListenableFuture<User> | [getUserMapping](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl#getUserMapping\(java.lang.String\)) (String userId)  Gets `User` from Google Admin SDK API. |
| Iterable<User> | [listUsers](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl#listUsers\(java.lang.String\)) (String schemaName)  Lists all `User` s using Google Admin SDK API. |
| ListenableFuture<User> | [updateUserMapping](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl#updateUserMapping\(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.util.Optional%3Cjava.lang.String%3E\)) (String userId, String schemaName, String attributeName, Optional<String> value)  Updates `User` 's custom schema attributes using Google Admin SDK API. |

### Inherited Method Summary

From class com.google.common.util.concurrent.AbstractIdleService

| final void | addListener(Service.Listener arg0, Executor arg1) |
| --- | --- |
| final void | awaitRunning() |
| final void | awaitRunning(long arg0, TimeUnit arg1) |
| final void | awaitTerminated(long arg0, TimeUnit arg1) |
| final void | awaitTerminated() |
| final Throwable | failureCause() |
| final boolean | isRunning() |
| final Service | startAsync() |
| final Service.State | state() |
| final Service | stopAsync() |
| String | toString() |

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

From interface com.google.common.util.concurrent.Service

| abstract void | addListener(Service.Listener arg0, Executor arg1) |
| --- | --- |
| abstract void | awaitRunning() |
| abstract void | awaitRunning(long arg0, TimeUnit arg1) |
| abstract void | awaitTerminated(long arg0, TimeUnit arg1) |
| abstract void | awaitTerminated() |
| abstract Throwable | failureCause() |
| abstract boolean | isRunning() |
| abstract Service | startAsync() |
| abstract Service.State | state() |
| abstract Service | stopAsync() |

## Public Methods

#### public static UsersServiceImpl fromConfiguration (CredentialFactory credentialFactory)

Creates an instance of `UsersServiceImpl` from connector configuration.

##### Parameters

| credentialFactory |  |
| --- | --- |

##### Throws

| GeneralSecurityException |  |
| --- | --- |
| IOException |  |

#### public ListenableFuture<User> getUserMapping (String userId)

Gets `User` from Google Admin SDK API.

##### Parameters

| userId |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |

#### public Iterable<User> listUsers (String schemaName)

Lists all `User` s using Google Admin SDK API.

##### Parameters

| schemaName |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |

#### public ListenableFuture<User> updateUserMapping (String userId, String schemaName, String attributeName, Optional<String> value)

Updates `User` 's custom schema attributes using Google Admin SDK API.

##### Parameters

| userId |  |
| --- | --- |
| schemaName |  |
| attributeName |  |
| value |  |

##### Throws

| IOException |  |
| --- | --- |
