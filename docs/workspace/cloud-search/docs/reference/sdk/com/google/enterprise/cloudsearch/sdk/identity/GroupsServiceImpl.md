---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl
root: workspace
fetched_at: 2026-04-23T15:26:32.919Z
---

# GroupsServiceImpl

Wrapper for Cloud Identity Groups API for performing CRUD operations on Groups and Memberships.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder">GroupsServiceImpl.Builder</a></td><td width="100%">Builder object for creating an instance of <code>GroupsServiceImpl</code></td></tr></tbody></table>

### Public Method Summary

| ListenableFuture<Operation> | [createGroup](./GroupsServiceImpl.md#createGroup(com.google.api.services.cloudidentity.v1.model.Group)) (Group group)  Creates a `Group` using Cloud Identity Groups API. |
| --- | --- |
| ListenableFuture<Operation> | [createMembership](./GroupsServiceImpl.md#createMembership(java.lang.String,%20com.google.api.services.cloudidentity.v1.model.Membership)) (String groupId, Membership member)  Creates a `Membership` under group identified by `groupId` using Cloud Identity Groups API. |
| ListenableFuture<Operation> | [deleteGroup](./GroupsServiceImpl.md#deleteGroup(java.lang.String)) (String groupId)  Deletes a `Group` using Cloud Identity Groups API. |
| ListenableFuture<Operation> | [deleteMembership](./GroupsServiceImpl.md#deleteMembership(java.lang.String)) (String memberId)  Deletes a `Membership` using Cloud Identity Groups API. |
| static [GroupsServiceImpl](./GroupsServiceImpl.md) | [fromConfiguration](./GroupsServiceImpl.md#fromConfiguration(com.google.enterprise.cloudsearch.sdk.CredentialFactory)) ([CredentialFactory](../CredentialFactory.md) credentialFactory)  Creates an instance of `GroupsServiceImpl` from connector configuration |
| ListenableFuture<Group> | [getGroup](./GroupsServiceImpl.md#getGroup(java.lang.String)) (String groupId)  Gets a `Group` from Cloud Identity Groups API. |
| ListenableFuture<Membership> | [getMembership](./GroupsServiceImpl.md#getMembership(java.lang.String)) (String memberId)  Gets a `Membership` from Cloud Identity Groups API. |
| Iterable<Group> | [listGroups](./GroupsServiceImpl.md#listGroups(java.lang.String)) (String groupNamespace)  List all `Group` s available under given `groupNamespace` |
| Iterable<Membership> | [listMembers](./GroupsServiceImpl.md#listMembers(java.lang.String)) (String groupId)  List all `Membership` s under given `groupId` |

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

#### public static GroupsServiceImpl fromConfiguration (CredentialFactory credentialFactory)

Creates an instance of `GroupsServiceImpl` from connector configuration

##### Parameters

| credentialFactory |  |
| --- | --- |

##### Throws

| GeneralSecurityException |  |
| --- | --- |
| IOException |  |

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
