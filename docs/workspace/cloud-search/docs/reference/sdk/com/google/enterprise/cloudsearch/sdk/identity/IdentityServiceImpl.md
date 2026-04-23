---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl
root: workspace
fetched_at: 2026-04-23T15:26:36.683Z
---

# IdentityServiceImpl

Access point between the connector developer and Google APIs for syncing identities.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl.Builder">IdentityServiceImpl.Builder</a></td><td width="100%">Builder for creating an instance of</td></tr></tbody></table>

### Public Method Summary

| ListenableFuture<Operation> | [createGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl#createGroup\(com.google.api.services.cloudidentity.v1.model.Group\)) (Group group)  Creates a `Group` using Cloud Identity Groups API. |
| --- | --- |
| ListenableFuture<Operation> | [createMembership](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl#createMembership\(java.lang.String,%20com.google.api.services.cloudidentity.v1.model.Membership\)) (String groupId, Membership member)  Creates a `Membership` under group identified by `groupId` using Cloud Identity Groups API. |
| ListenableFuture<Operation> | [deleteGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl#deleteGroup\(java.lang.String\)) (String groupId)  Deletes a `Group` using Cloud Identity Groups API. |
| ListenableFuture<Operation> | [deleteMembership](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl#deleteMembership\(java.lang.String\)) (String memberId)  Deletes a `Membership` using Cloud Identity Groups API. |
| ListenableFuture<Group> | [getGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl#getGroup\(java.lang.String\)) (String groupId)  Gets a `Group` from Cloud Identity Groups API. |
| ListenableFuture<Membership> | [getMembership](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl#getMembership\(java.lang.String\)) (String memberId)  Gets a `Membership` from Cloud Identity Groups API. |
| ListenableFuture<User> | [getUserMapping](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl#getUserMapping\(java.lang.String\)) (String userId)  Gets `User` from Google Admin SDK API. |
| Iterable<Group> | [listGroups](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl#listGroups\(java.lang.String\)) (String groupNamespace)  List all `Group` s available under given `groupNamespace` |
| Iterable<Membership> | [listMembers](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl#listMembers\(java.lang.String\)) (String groupId)  List all `Membership` s under given `groupId` |
| Iterable<User> | [listUsers](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl#listUsers\(java.lang.String\)) (String schemaName)  Lists all `User` s using Google Admin SDK API. |
| ListenableFuture<User> | [updateUserMapping](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl#updateUserMapping\(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.util.Optional%3Cjava.lang.String%3E\)) (String userId, String schemaName, String attributeName, Optional<String> value)  Updates `User` 's custom schema attributes using Google Admin SDK API. |

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

#### public ListenableFuture<Operation> createGroup (Group group)

Creates a `Group` using Cloud Identity Groups API.

##### Parameters

| group |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |

#### public ListenableFuture<Operation> createMembership (String groupId, Membership member)

Creates a `Membership` under group identified by `groupId` using Cloud Identity Groups API.

##### Parameters

| groupId |  |
| --- | --- |
| member |  |

##### Throws

| IOException |  |
| --- | --- |

#### public ListenableFuture<Operation> deleteGroup (String groupId)

Deletes a `Group` using Cloud Identity Groups API.

##### Parameters

| groupId |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |

#### public ListenableFuture<Operation> deleteMembership (String memberId)

Deletes a `Membership` using Cloud Identity Groups API.

##### Parameters

| memberId |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |

#### public ListenableFuture<Group> getGroup (String groupId)

Gets a `Group` from Cloud Identity Groups API.

##### Parameters

| groupId |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |

#### public ListenableFuture<Membership> getMembership (String memberId)

Gets a `Membership` from Cloud Identity Groups API.

##### Parameters

| memberId |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |

#### public ListenableFuture<User> getUserMapping (String userId)

Gets `User` from Google Admin SDK API.

##### Parameters

| userId |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |

#### public Iterable<Group> listGroups (String groupNamespace)

List all `Group` s available under given `groupNamespace`

##### Parameters

| groupNamespace |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |

#### public Iterable<Membership> listMembers (String groupId)

List all `Membership` s under given `groupId`

##### Parameters

| groupId |  |
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
