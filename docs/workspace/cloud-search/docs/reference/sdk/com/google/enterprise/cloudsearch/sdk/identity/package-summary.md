---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/package-summary
root: workspace
fetched_at: 2026-04-23T15:26:38.378Z
---

# com.google.enterprise.cloudsearch.sdk.identity

### Interfaces

| [IdentityConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnector) | Interface for user-specific implementation details of the connector. |
| --- | --- |
| [IdentityConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnectorContext) | Interface for a context object created by the SDK to pass to the `IdentityConnector` code. |
| [IdentityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityService) | Access point between the connector developer and Google APIs for syncing identities. |
| [IdentityStateLoader](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityStateLoader) | Abstract object to load initial `IdentityState` |
| [Repository](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository) | An Identity repository for listing Users and Groups from a repository |

### Classes

| [CloudIdentityFacade](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/CloudIdentityFacade) | Simple interface to the Cloud Identity service. |
| --- | --- |
| [DirectoryFacade](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/DirectoryFacade) | A facade for Google's Directory API (https://developers.google.com/admin-sdk/directory/v1/reference/). |
| [FullSyncIdentityConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector) | Connector implementation which periodically sync all users and groups with Google |
| [GroupsServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl) | Wrapper for Cloud Identity Groups API for performing CRUD operations on Groups and Memberships. |
| [GroupsServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder) | Builder object for creating an instance of `GroupsServiceImpl` |
| [IdentityApplication](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication) | Main object and access point for the SDK. |
| [IdentityApplication.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder) | Builder for creating an instance of `IdentityApplication` |
| [IdentityGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup) | Represents a third-party group to be synced with Cloud identity Groups API. |
| [IdentityGroup.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder) | Builder for `IdentityGroup` |
| [IdentityPrincipal](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal) <T> | Represents third-party identity such as user or group. |
| [IdentityScheduler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityScheduler) | Handles scheduling and execution of identity connector traversal related tasks. |
| [IdentityScheduler.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityScheduler.Builder) | Builder for creating an instance of `IdentityScheduler` |
| [IdentityServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl) | Access point between the connector developer and Google APIs for syncing identities. |
| [IdentityServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl.Builder) | Builder for creating an instance of `IdentityService` |
| [IdentitySourceConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentitySourceConfiguration) | Structure to hold configuration information about identity sources, schemas and group namespace. |
| [IdentitySourceConfiguration.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentitySourceConfiguration.Builder) | Builder for creating an instance of `IdentitySourceConfiguration` |
| [IdentityState](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityState) | Current state of all identities synced with Google. |
| [IdentityState.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityState.Builder) | Builder object for `IdentityState` |
| [IdentityUser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser) | Represents third-party user identity and corresponding Google identity mapping. |
| [IdentityUser.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder) | Builder for `IdentityUser` |
| [RepositoryContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext) | Context used by `Repository` to initialize itself |
| [UsersServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl) |  |
| [UsersServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl.Builder) | Builder for creating an instance of `UsersServiceImpl` |

### Enums

| [IdentityPrincipal.Kind](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal.Kind) | Kind of `IdentityPrincipal` |
| --- | --- |
