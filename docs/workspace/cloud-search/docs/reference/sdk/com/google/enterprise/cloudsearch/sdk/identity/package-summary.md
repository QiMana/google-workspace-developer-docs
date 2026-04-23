---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/package-summary
root: workspace
fetched_at: 2026-04-23T15:26:38.378Z
---

# com.google.enterprise.cloudsearch.sdk.identity

### Interfaces

| [IdentityConnector](./IdentityConnector.md) | Interface for user-specific implementation details of the connector. |
| --- | --- |
| [IdentityConnectorContext](./IdentityConnectorContext.md) | Interface for a context object created by the SDK to pass to the `IdentityConnector` code. |
| [IdentityService](./IdentityService.md) | Access point between the connector developer and Google APIs for syncing identities. |
| [IdentityStateLoader](./IdentityStateLoader.md) | Abstract object to load initial `IdentityState` |
| [Repository](./Repository.md) | An Identity repository for listing Users and Groups from a repository |

### Classes

| [CloudIdentityFacade](./CloudIdentityFacade.md) | Simple interface to the Cloud Identity service. |
| --- | --- |
| [DirectoryFacade](./DirectoryFacade.md) | A facade for Google's Directory API (https://developers.google.com/admin-sdk/directory/v1/reference/). |
| [FullSyncIdentityConnector](./FullSyncIdentityConnector.md) | Connector implementation which periodically sync all users and groups with Google |
| [GroupsServiceImpl](./GroupsServiceImpl.md) | Wrapper for Cloud Identity Groups API for performing CRUD operations on Groups and Memberships. |
| [GroupsServiceImpl.Builder](./GroupsServiceImpl.Builder.md) | Builder object for creating an instance of `GroupsServiceImpl` |
| [IdentityApplication](./IdentityApplication.md) | Main object and access point for the SDK. |
| [IdentityApplication.Builder](./IdentityApplication.Builder.md) | Builder for creating an instance of `IdentityApplication` |
| [IdentityGroup](./IdentityGroup.md) | Represents a third-party group to be synced with Cloud identity Groups API. |
| [IdentityGroup.Builder](./IdentityGroup.Builder.md) | Builder for `IdentityGroup` |
| [IdentityPrincipal](./IdentityPrincipal.md) <T> | Represents third-party identity such as user or group. |
| [IdentityScheduler](./IdentityScheduler.md) | Handles scheduling and execution of identity connector traversal related tasks. |
| [IdentityScheduler.Builder](./IdentityScheduler.Builder.md) | Builder for creating an instance of `IdentityScheduler` |
| [IdentityServiceImpl](./IdentityServiceImpl.md) | Access point between the connector developer and Google APIs for syncing identities. |
| [IdentityServiceImpl.Builder](./IdentityServiceImpl.Builder.md) | Builder for creating an instance of `IdentityService` |
| [IdentitySourceConfiguration](./IdentitySourceConfiguration.md) | Structure to hold configuration information about identity sources, schemas and group namespace. |
| [IdentitySourceConfiguration.Builder](./IdentitySourceConfiguration.Builder.md) | Builder for creating an instance of `IdentitySourceConfiguration` |
| [IdentityState](./IdentityState.md) | Current state of all identities synced with Google. |
| [IdentityState.Builder](./IdentityState.Builder.md) | Builder object for `IdentityState` |
| [IdentityUser](./IdentityUser.md) | Represents third-party user identity and corresponding Google identity mapping. |
| [IdentityUser.Builder](./IdentityUser.Builder.md) | Builder for `IdentityUser` |
| [RepositoryContext](./RepositoryContext.md) | Context used by `Repository` to initialize itself |
| [UsersServiceImpl](./UsersServiceImpl.md) |  |
| [UsersServiceImpl.Builder](./UsersServiceImpl.Builder.md) | Builder for creating an instance of `UsersServiceImpl` |

### Enums

| [IdentityPrincipal.Kind](./IdentityPrincipal.Kind.md) | Kind of `IdentityPrincipal` |
| --- | --- |
