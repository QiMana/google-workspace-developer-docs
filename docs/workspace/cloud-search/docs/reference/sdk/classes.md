---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/classes
root: workspace
fetched_at: 2026-04-23T15:26:21.326Z
---

# Class Index

## A

| [AbortCountExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AbortCountExceptionHandler) | Exception handler that is configured with a count of allowable retries before forcing an abort. |
| --- | --- |
| [Acl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl) | Represents all aspects of access permissions for an uploaded document. |
| [Acl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder) | Mutable ACL for creating instances of `Acl`. |
| [Acl.GroupPrincipalParser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.GroupPrincipalParser) | Parser used to extract a group principal of either "google" or "external" type. |
| [Acl.InheritanceType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.InheritanceType) | The enum that presents the type of inheritance. |
| [Acl.PrincipalType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.PrincipalType) | Represents type of a `Principal` |
| [Acl.UserPrincipalParser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.UserPrincipalParser) | Parser used to extract a user principal of either "google" or "external" type. |
| [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) | Object encapsulating an API request to be executed using `IndexingService`. |
| [ApiOperations](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperations) | A factory for creating `ApiOperation` instances. |
| [Application](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application) <H extends [AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper), T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | Main object and access point for the SDK. |
| [Application.AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper) <C extends AbstractBuilder<C, T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) >, S extends AbstractBuilder<S, T>, T> | Helper class to make our class more testable: factory and util methods |
| [Application.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.Builder) | Builder object for creating `Application` instance. |
| [Application.ShutdownHook](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.ShutdownHook) | `Runnable` implementation to register with `addShutdownHook(Thread)`. |
| [AsyncApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/AsyncApiOperation) | An `ApiOperation` that the `Repository` pushes asynchronously. |
| [AsyncRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AsyncRequest) <T> | Individual batched request wrapper as consumed by `add(AsyncRequest)` |
| [AsyncRequest.EventStartCallback](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AsyncRequest.EventStartCallback) | Interface to record start of an event such as execution of batched request. |
| [AsyncRequest.SettableFutureCallback](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AsyncRequest.SettableFutureCallback) <T> | `JsonBatchCallback` wrapper which updates `ListenableFuture` associated with individual batched request. |

## B

| [BaseApiService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService) <T extends AbstractGoogleJsonClient> | Base object encapsulating common functionality for interacting with Google APIs such as setting credentials, request timeouts, error handling and retry etc. |
| --- | --- |
| [BaseApiService.AbstractBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder) <B extends [AbstractBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder) <B, T extends AbstractGoogleJsonClient>, T> | Builder object for creating an instance of `BaseApiService`. |
| [BaseApiService.RetryRequestInitializer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.RetryRequestInitializer) | Adds a backoff and retry response and exception handlers to the `HttpRequest`. |
| [BatchApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/BatchApiOperation) | Container for a sequence of `ApiOperation` objects. |
| [BatchingIndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingService) | Indexing Service for batching multiple API requests. |
| [BatchingIndexingServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl) | Concrete class implementing `BatchingIndexingService`. |
| [BatchingIndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder) | Builder for creating an instance of `BatchingIndexingServiceImpl` |
| [BatchItemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchItemRetriever) | Connector specific implementation for handling a batch of `Item` instances from `PollItemsResponse`. |
| [BatchPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy) | Policy for flushing batched requests. |
| [BatchPolicy.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy.Builder) | Builder object for creating an instance of `BatchRequest`. |
| [BatchRequestService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService) | Batch multiple requests. |
| [BatchRequestService.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder) | Builder object for creating an instance of `BatchRequestService` |
| [BatchRequestService.ExecutorFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactory) | Factory for obtaining `ExecutorService` instance. |
| [BatchRequestService.ExecutorFactoryImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactoryImpl) | `BatchRequestService.ExecutorFactory` implementation to get `ExecutorService` and `ScheduledExecutorService` instances used by `BatchRequestService`. |
| [BatchRequestService.SystemTimeProvider](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.SystemTimeProvider) | `BatchRequestService.TimeProvider` implementation to get current system time. |
| [BatchRequestService.TimeProvider](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.TimeProvider) | Interface for classes that can provide the current time. |

## C

| [CheckpointCloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable) <T> | A `CloseableIterable` that supports pagination while traversing a repository or incremental changes. |
| --- | --- |
| [CheckpointCloseableIterableImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl) <T> | `CheckpointCloseableIterable` implementation which supports lazy initialization of `getCheckpoint()` value and `hasMore()`. |
| [CheckpointCloseableIterableImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder) <T> | Builder object for `CheckpointCloseableIterableImpl` |
| [CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule) <T> | A `TestRule` to compare two instances of `CheckpointCloseableIterable` s. |
| [CheckpointHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/CheckpointHandler) | Wrapper object to read / write a checkpoint. |
| [CloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CloseableIterable) <T> | Interface that is used to iterate through a set of repository documents. |
| [CloseableIterableOnce](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CloseableIterableOnce) <T> | A `CloseableIterable` that can be iterated over at most once. |
| [CloudIdentityFacade](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/CloudIdentityFacade) | Simple interface to the Cloud Identity service. |
| [CloudSearchService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService) | Service wrapper for Cloud Search API client. |
| [Configuration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration) | Static factory for handling connector configurations. |
| [Configuration.Parser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser) <T> | General purpose `ConfigValue` parser. |
| [Configuration.ResetConfigRule](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.ResetConfigRule) | `TestRule` to reset static `Configuration` object for unit tests. |
| [Configuration.SetupConfigRule](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.SetupConfigRule) | `TestRule` to initialize static `Configuration` object for unit tests. |
| [ConfigValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/ConfigValue) <T> | Placeholder object for `Configuration` values. |
| [Connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector) <T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | Interface for user-specific implementation details of the connector. |
| [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) | Interface for a context object created by the SDK to pass to the `Connector` code. |
| [ConnectorContextImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContextImpl) | Context for `Connector`. |
| [ConnectorScheduler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler) <T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | Handles scheduling and execution of connector traversal related tasks. |
| [ConnectorScheduler.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder) | Builder for `ConnectorScheduler` instances. |
| [ConnectorScheduler.OneAtATimeRunnable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.OneAtATimeRunnable) | `Runnable` implementation which allows only one thread to run given runnable at a time. |
| [ConnectorScheduler.ShutdownHolder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.ShutdownHolder) | Pointer to shutdown method to be executed when traversal is complete. |
| [ConnectorStats](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/sdk/ConnectorStats) | Convenience class to access the connector's stats. |
| [ConnectorTraverser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser) | Handles scheduling and execution of indexing connector traversal related tasks. |
| [ConnectorTraverser.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder) |  |
| [ContentTemplate](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate) | Utility to create an HTML template used for formatting content from repository field data (database, CSV, CRM, etc.) for uploading to Cloud Search. |
| [ContentTemplate.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate.Builder) |  |
| [ContentTemplate.UnmappedColumnsMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate.UnmappedColumnsMode) | Defines how to treat extra field data provided to the `apply(Map)` call. |
| [ContentUploadService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadService) | Service for uploading media content using Google Cloud Search ByteStream API. |
| [ContentUploadServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadServiceImpl) | Concrete class implementing `ContentUploadService`  Document content uploads normally occur "in-line" as part of the item's upload request. |
| [ContentUploadServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadServiceImpl.Builder) | Builder to create an instance of `ContentUploadServiceImpl`. |
| [CredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CredentialFactory) | Factory to create a `GoogleCredential` object for accessing the Cloud Search API. |

## D

| [DefaultAcl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl) | Common default ACL object that can be used for an entire data repository. |
| --- | --- |
| [DefaultAcl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder) | Builder object for constructing a `DefaultAcl` object. |
| [DefaultAcl.DefaultAclMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.DefaultAclMode) | Mode setting used to set a default ACL on an `Item`. |
| [DeleteItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/DeleteItem) | `ApiOperation` to delete an `Item`. |
| [DeleteQueueItems](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/DeleteQueueItems) | `ApiOperation` to delete zero or more `Item` from a given queue. |
| [DirectoryFacade](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/DirectoryFacade) | A facade for Google's Directory API (https://developers.google.com/admin-sdk/directory/v1/reference/). |

## E

| [ExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler) | Interface for handling errors and defining a retry policy. |
| --- | --- |
| [ExponentialBackoffExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExponentialBackoffExceptionHandler) | `ExceptionHandler` implementation that uses exponential backoff before retrying. |

## F

| [FullSyncIdentityConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector) | Connector implementation which periodically sync all users and groups with Google |
| --- | --- |
| [FullTraversalConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/FullTraversalConnector) | Template connector that performs a full repository traversal and uploads every document. |

## G

| [GoogleProxy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy) | Encapsulates an @{link Proxy} object and the token for proxy authentication. |
| --- | --- |
| [GoogleProxy.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy.Builder) | Builder for `GoogleProxy`. |
| [GroupIdEncoder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GroupIdEncoder) | Helper utility to encode Group identifier in a consistent way between identity and indexing connectors. |
| [GroupsServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl) | Wrapper for Cloud Identity Groups API for performing CRUD operations on Groups and Memberships. |
| [GroupsServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder) | Builder object for creating an instance of `GroupsServiceImpl` |

## I

| [IdentityApplication](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication) | Main object and access point for the SDK. |
| --- | --- |
| [IdentityApplication.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder) | Builder for creating an instance of `IdentityApplication` |
| [IdentityConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnector) | Interface for user-specific implementation details of the connector. |
| [IdentityConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityConnectorContext) | Interface for a context object created by the SDK to pass to the `IdentityConnector` code. |
| [IdentityGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup) | Represents a third-party group to be synced with Cloud identity Groups API. |
| [IdentityGroup.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder) | Builder for `IdentityGroup` |
| [IdentityPrincipal](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal) <T> | Represents third-party identity such as user or group. |
| [IdentityPrincipal.Kind](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal.Kind) | Kind of `IdentityPrincipal` |
| [IdentityScheduler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityScheduler) | Handles scheduling and execution of identity connector traversal related tasks. |
| [IdentityScheduler.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityScheduler.Builder) | Builder for creating an instance of `IdentityScheduler` |
| [IdentityService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityService) | Access point between the connector developer and Google APIs for syncing identities. |
| [IdentityServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl) | Access point between the connector developer and Google APIs for syncing identities. |
| [IdentityServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl.Builder) | Builder for creating an instance of `IdentityService` |
| [IdentitySourceConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentitySourceConfiguration) | Structure to hold configuration information about identity sources, schemas and group namespace. |
| [IdentitySourceConfiguration.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentitySourceConfiguration.Builder) | Builder for creating an instance of `IdentitySourceConfiguration` |
| [IdentityState](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityState) | Current state of all identities synced with Google. |
| [IdentityState.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityState.Builder) | Builder object for `IdentityState` |
| [IdentityStateLoader](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityStateLoader) | Abstract object to load initial `IdentityState` |
| [IdentityUser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser) | Represents third-party user identity and corresponding Google identity mapping. |
| [IdentityUser.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder) | Builder for `IdentityUser` |
| [IgnoreExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/IgnoreExceptionHandler) | Exception handler that simply ignores all errors. |
| [IncrementalChangeHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/IncrementalChangeHandler) | Interface for handling repository changes. |
| [IndexingApplication](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication) | Main object and access point for the SDK. |
| [IndexingApplication.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder) | Buider for `IndexingApplication` instances. |
| [IndexingConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnector) | Interface for user-specific implementation details of the connector. |
| [IndexingConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnectorContext) | Interface for a context object created by the SDK to pass to the `IndexingConnector` code. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | Helper object to build an `Item`. |
| [IndexingItemBuilder.FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <T> | Construct to specify an actual field value or pointer to a key within the key/values map. |
| [IndexingItemBuilder.ItemType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.ItemType) |  |
| [IndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService) | Access point between the connector developer and the indexing service API backend. |
| [IndexingService.ContentFormat](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.ContentFormat) |  |
| [IndexingService.RequestMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.RequestMode) | Request mode for `Item` index and delete requests. |
| [IndexingServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl) | Wrapper object for `CloudSearch.Indexing`. |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) |  |
| [IndexingServiceImpl.Operations](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Operations) | API Operations |
| [IndexingServiceImpl.PollItemStatus](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.PollItemStatus) | Valid values for poll `Item` status. |
| [IndexingServiceImpl.ServiceManagerHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.ServiceManagerHelper) |  |
| [InMemoryCheckpointHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/InMemoryCheckpointHandler) | CheckpointHandler implementation to maintain in-memory checkpoint values. |
| [InvalidConfigurationException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/InvalidConfigurationException) | Exception that is thrown for fatal configuration errors. |
| [ItemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ItemRetriever) | Connector specific implementation for handling `Item` from `PollItemsResponse`. |

## L

| [ListingConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector) | Template connector that performs complete repository list traversals. |
| --- | --- |
| [LocalFileCredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory) | Factory to create a `GoogleCredential` object for accessing the Cloud Search API. |
| [LocalFileCredentialFactory.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder) | Builder for creating instance of `LocalFileCredentialFactory`. |

## M

| [MockItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/MockItem) | Generates an Item using `IndexingItemBuilder` with specified values for metadata. |
| --- | --- |
| [MockItem.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/MockItem.Builder) | Builder class to set meta data attributes of an Item. |

## P

| [PaginationIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable) <T, Q> | `Iterable` which handles pagination for iterating over set of objects. |
| --- | --- |
| [PaginationIterable.Page](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable.Page) <T, Q> | Represents set of items and optional continuation token to fetch additional items. |
| [PushItems](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems) | `ApiOperation` to push `Item` objects to the Cloud Search queue. |
| [PushItems.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.Builder) | Builder for creating an instance of `PushItems` operation |

## Q

| [QueueCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/QueueCheckpoint) | Handles checkpoints for the queue names used for detecting deletes during full traversals. |
| --- | --- |
| [QueueCheckpoint.QueueData](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/QueueCheckpoint.QueueData) | Represents queue checkpoint information maintained by `FullTraversalConnector` |
| [QuotaServer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer) <T extends Enum<T>> | Utility object to enforce quota requirements. |
| [QuotaServer.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer.Builder) <T extends Enum<T>, K extends [QuotaServer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer) <T>> | Builder for `QuotaServer` instances. |

## R

| [Repository](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository) | An Identity repository for listing Users and Groups from a repository |
| --- | --- |
| [Repository](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository) | An object that provides the necessary methods to access a data repository. |
| [RepositoryContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext) | Context used by `Repository` to initialize itself |
| [RepositoryContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryContext) | Context object to enable the `Repository` to make asynchronous calls to the Cloud Search SDK. |
| [RepositoryDoc](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc) | Generic object for a single document in a repository. |
| [RepositoryDoc.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc.Builder) |  |
| [RepositoryDocError](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDocError) | `ApiOperation` to push repository error while processing an item from a content repository. |
| [RepositoryException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException) | An exception that is thrown specifically for fatal repository access errors. |
| [RepositoryException.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder) | Builder for creating `RepositoryException` |
| [RepositoryException.ErrorType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.ErrorType) | Repository error types as defined by Cloud Search API. |
| [RetryPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy) | Object to store policy parameters used for backoff and retry recoverable errors. |
| [RetryPolicy.BackOffFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.BackOffFactory) | Creates an instance of `BackOff` |
| [RetryPolicy.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.Builder) | Builder for creating an instance of `RetryPolicy` |
| [RetryPolicy.DefaultBackOffFactoryImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.DefaultBackOffFactoryImpl) | Default factory object used to create an `ExponentialBackOff` with an initial delay of 1 second(s) and a multiplier of 2. |

## S

| [SearchAuthInfo](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/serving/SearchAuthInfo) | Container for auth info used to serving items. |
| --- | --- |
| [SearchHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/serving/SearchHelper) | Helper class to serving for items indexed by connectors. |
| [SearchTestUtils](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/serving/SearchTestUtils) | Utility methods to test that indexed items are served correctly. |
| [SensitiveDataCodec](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec) | Helper object used to encode and decode sensitive data. |
| [SensitiveDataCodec.SecurityLevel](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec.SecurityLevel) | Values that specify the security level, used typically for a user parameter. |
| [StartupException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StartupException) | Exception that is thrown for unrecoverable startup errors, such as fatal configuration errors or running on the wrong platform. |
| [StatsManager](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager) | Object used to manage operation execution statistics. |
| [StatsManager.OperationStats](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager.OperationStats) | Object used to log events, operations, and actions |
| [StatsManager.OperationStats.Event](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager.OperationStats.Event) | Counter for single operation to wrap Stopwatch |
| [StatsManager.ResetStatsRule](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager.ResetStatsRule) | `TestRule` to reset static `StatsManager` object for unit tests. |
| [StructuredData](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/StructuredData) | Helper utility to generate a `StructuredDataObject`. |
| [StructuredData.ResetStructuredDataRule](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/StructuredData.ResetStructuredDataRule) | `TestRule` to reset the static `StructuredData` object for unit tests. |
| [StructuredDataHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/StructuredDataHelper) | Helper class for Mock Connector Structured Data |

## T

| [TestProperties](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/TestProperties) | Common configuration properties for test case classes. |
| --- | --- |
| [TestUtils](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/TestUtils) | Utility methods for integration tests for the indexing SDK. |
| [TraverseExceptionHandlerFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/TraverseExceptionHandlerFactory) | Constructs an `ExceptionHandler` based up on configuration options. |
| [TraverserConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration) | Object that defines a Cloud Search queue polling task. |
| [TraverserConfiguration.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder) | Builder for `TraverserConfiguration` class. |
| [TraverserWorker](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserWorker) | An interface that performs the method call to poll the Cloud Search queue. |
| [TraverserWorkerManager](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserWorkerManager) | Factory object for creating `TraverserWorker` instances. |

## U

| [Uploader](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/Uploader) | This class reads in a json file to upload all the requests to the Cloud Search Indexing API. |
| --- | --- |
| [UploadRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest) | This class defines the schema of request to upload to cloud search API. |
| [UploadRequest.AbstractNameRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.AbstractNameRequest) | Abstract class of the request which has its name as the json key. |
| [UploadRequest.AbstractRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.AbstractRequest) | Abstract class of the request sent to the indexing API. |
| [UploadRequest.DatasourcesListRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DatasourcesListRequest) | Request to list data sources in the indexing API. |
| [UploadRequest.DeleteQueueItemsRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DeleteQueueItemsRequest) | Request to delete items from a given queue. |
| [UploadRequest.DeleteRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DeleteRequest) | Request to delete an Item from the indexing API. |
| [UploadRequest.DeleteSchemaRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DeleteSchemaRequest) | Request to delete the schema from the indexing API for the data source. |
| [UploadRequest.GetRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.GetRequest) | Request to get an Item from the indexing API. |
| [UploadRequest.GetSchemaRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.GetSchemaRequest) | Request to get the schema from the indexing API for the data source. |
| [UploadRequest.IndexItemAndContentRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.IndexItemAndContentRequest) | Request to index an Item and its content to the indexing API. |
| [UploadRequest.IndexItemRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.IndexItemRequest) | Request to index an Item to the indexing API. |
| [UploadRequest.ListRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.ListRequest) | Request to list all items or search items by its attributes specified by filter criteria. |
| [UploadRequest.MediaContent](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.MediaContent) | MediaContent supports media content from either a url or a string. |
| [UploadRequest.PollItemsRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.PollItemsRequest) | Request to poll items from the indexing API. |
| [UploadRequest.PushItemRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.PushItemRequest) | Request to push item to the indexing API. |
| [UploadRequest.UnreserveRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.UnreserveRequest) | Request to unreserve polled `Item` instances in a specific queue. |
| [UploadRequest.UpdateSchemaRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.UpdateSchemaRequest) | Request to register schema for the data source in the indexing API. |
| [UrlBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder) | Constructs an URL from a `MessageFormat` -style format string and a set of columns to include in the URL. |
| [UrlBuilder.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder) | Builder for constructing instances of `UrlBuilder`. |
| [UsersServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl) |  |
| [UsersServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl.Builder) | Builder for creating an instance of `UsersServiceImpl` |
| [Util](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Util) | Common utility methods for integration tests. |
