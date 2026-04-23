---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/classes
root: workspace
fetched_at: 2026-04-23T15:26:21.326Z
---

# Class Index

## A

| [AbortCountExceptionHandler](./com/google/enterprise/cloudsearch/sdk/AbortCountExceptionHandler.md) | Exception handler that is configured with a count of allowable retries before forcing an abort. |
| --- | --- |
| [Acl](./com/google/enterprise/cloudsearch/sdk/indexing/Acl.md) | Represents all aspects of access permissions for an uploaded document. |
| [Acl.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder.md) | Mutable ACL for creating instances of `Acl`. |
| [Acl.GroupPrincipalParser](./com/google/enterprise/cloudsearch/sdk/indexing/Acl.GroupPrincipalParser.md) | Parser used to extract a group principal of either "google" or "external" type. |
| [Acl.InheritanceType](./com/google/enterprise/cloudsearch/sdk/indexing/Acl.InheritanceType.md) | The enum that presents the type of inheritance. |
| [Acl.PrincipalType](./com/google/enterprise/cloudsearch/sdk/indexing/Acl.PrincipalType.md) | Represents type of a `Principal` |
| [Acl.UserPrincipalParser](./com/google/enterprise/cloudsearch/sdk/indexing/Acl.UserPrincipalParser.md) | Parser used to extract a user principal of either "google" or "external" type. |
| [ApiOperation](./com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation.md) | Object encapsulating an API request to be executed using `IndexingService`. |
| [ApiOperations](./com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperations.md) | A factory for creating `ApiOperation` instances. |
| [Application](./com/google/enterprise/cloudsearch/sdk/Application.md) <H extends [AbstractApplicationHelper](./com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper.md), T extends [ConnectorContext](./com/google/enterprise/cloudsearch/sdk/ConnectorContext.md) > | Main object and access point for the SDK. |
| [Application.AbstractApplicationHelper](./com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper.md) <C extends AbstractBuilder<C, T extends [ConnectorContext](./com/google/enterprise/cloudsearch/sdk/ConnectorContext.md) >, S extends AbstractBuilder<S, T>, T> | Helper class to make our class more testable: factory and util methods |
| [Application.Builder](./com/google/enterprise/cloudsearch/sdk/Application.Builder.md) | Builder object for creating `Application` instance. |
| [Application.ShutdownHook](./com/google/enterprise/cloudsearch/sdk/Application.ShutdownHook.md) | `Runnable` implementation to register with `addShutdownHook(Thread)`. |
| [AsyncApiOperation](./com/google/enterprise/cloudsearch/sdk/indexing/template/AsyncApiOperation.md) | An `ApiOperation` that the `Repository` pushes asynchronously. |
| [AsyncRequest](./com/google/enterprise/cloudsearch/sdk/AsyncRequest.md) <T> | Individual batched request wrapper as consumed by `add(AsyncRequest)` |
| [AsyncRequest.EventStartCallback](./com/google/enterprise/cloudsearch/sdk/AsyncRequest.EventStartCallback.md) | Interface to record start of an event such as execution of batched request. |
| [AsyncRequest.SettableFutureCallback](./com/google/enterprise/cloudsearch/sdk/AsyncRequest.SettableFutureCallback.md) <T> | `JsonBatchCallback` wrapper which updates `ListenableFuture` associated with individual batched request. |

## B

| [BaseApiService](./com/google/enterprise/cloudsearch/sdk/BaseApiService.md) <T extends AbstractGoogleJsonClient> | Base object encapsulating common functionality for interacting with Google APIs such as setting credentials, request timeouts, error handling and retry etc. |
| --- | --- |
| [BaseApiService.AbstractBuilder](./com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder.md) <B extends [AbstractBuilder](./com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder.md) <B, T extends AbstractGoogleJsonClient>, T> | Builder object for creating an instance of `BaseApiService`. |
| [BaseApiService.RetryRequestInitializer](./com/google/enterprise/cloudsearch/sdk/BaseApiService.RetryRequestInitializer.md) | Adds a backoff and retry response and exception handlers to the `HttpRequest`. |
| [BatchApiOperation](./com/google/enterprise/cloudsearch/sdk/indexing/template/BatchApiOperation.md) | Container for a sequence of `ApiOperation` objects. |
| [BatchingIndexingService](./com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingService.md) | Indexing Service for batching multiple API requests. |
| [BatchingIndexingServiceImpl](./com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.md) | Concrete class implementing `BatchingIndexingService`. |
| [BatchingIndexingServiceImpl.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder.md) | Builder for creating an instance of `BatchingIndexingServiceImpl` |
| [BatchItemRetriever](./com/google/enterprise/cloudsearch/sdk/indexing/BatchItemRetriever.md) | Connector specific implementation for handling a batch of `Item` instances from `PollItemsResponse`. |
| [BatchPolicy](./com/google/enterprise/cloudsearch/sdk/BatchPolicy.md) | Policy for flushing batched requests. |
| [BatchPolicy.Builder](./com/google/enterprise/cloudsearch/sdk/BatchPolicy.Builder.md) | Builder object for creating an instance of `BatchRequest`. |
| [BatchRequestService](./com/google/enterprise/cloudsearch/sdk/BatchRequestService.md) | Batch multiple requests. |
| [BatchRequestService.Builder](./com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder.md) | Builder object for creating an instance of `BatchRequestService` |
| [BatchRequestService.ExecutorFactory](./com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactory.md) | Factory for obtaining `ExecutorService` instance. |
| [BatchRequestService.ExecutorFactoryImpl](./com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactoryImpl.md) | `BatchRequestService.ExecutorFactory` implementation to get `ExecutorService` and `ScheduledExecutorService` instances used by `BatchRequestService`. |
| [BatchRequestService.SystemTimeProvider](./com/google/enterprise/cloudsearch/sdk/BatchRequestService.SystemTimeProvider.md) | `BatchRequestService.TimeProvider` implementation to get current system time. |
| [BatchRequestService.TimeProvider](./com/google/enterprise/cloudsearch/sdk/BatchRequestService.TimeProvider.md) | Interface for classes that can provide the current time. |

## C

| [CheckpointCloseableIterable](./com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable.md) <T> | A `CloseableIterable` that supports pagination while traversing a repository or incremental changes. |
| --- | --- |
| [CheckpointCloseableIterableImpl](./com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.md) <T> | `CheckpointCloseableIterable` implementation which supports lazy initialization of `getCheckpoint()` value and `hasMore()`. |
| [CheckpointCloseableIterableImpl.Builder](./com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder.md) <T> | Builder object for `CheckpointCloseableIterableImpl` |
| [CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule](./com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule.md) <T> | A `TestRule` to compare two instances of `CheckpointCloseableIterable` s. |
| [CheckpointHandler](./com/google/enterprise/cloudsearch/sdk/indexing/template/CheckpointHandler.md) | Wrapper object to read / write a checkpoint. |
| [CloseableIterable](./com/google/enterprise/cloudsearch/sdk/CloseableIterable.md) <T> | Interface that is used to iterate through a set of repository documents. |
| [CloseableIterableOnce](./com/google/enterprise/cloudsearch/sdk/CloseableIterableOnce.md) <T> | A `CloseableIterable` that can be iterated over at most once. |
| [CloudIdentityFacade](./com/google/enterprise/cloudsearch/sdk/identity/CloudIdentityFacade.md) | Simple interface to the Cloud Identity service. |
| [CloudSearchService](./com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService.md) | Service wrapper for Cloud Search API client. |
| [Configuration](./com/google/enterprise/cloudsearch/sdk/config/Configuration.md) | Static factory for handling connector configurations. |
| [Configuration.Parser](./com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser.md) <T> | General purpose `ConfigValue` parser. |
| [Configuration.ResetConfigRule](./com/google/enterprise/cloudsearch/sdk/config/Configuration.ResetConfigRule.md) | `TestRule` to reset static `Configuration` object for unit tests. |
| [Configuration.SetupConfigRule](./com/google/enterprise/cloudsearch/sdk/config/Configuration.SetupConfigRule.md) | `TestRule` to initialize static `Configuration` object for unit tests. |
| [ConfigValue](./com/google/enterprise/cloudsearch/sdk/config/ConfigValue.md) <T> | Placeholder object for `Configuration` values. |
| [Connector](./com/google/enterprise/cloudsearch/sdk/Connector.md) <T extends [ConnectorContext](./com/google/enterprise/cloudsearch/sdk/ConnectorContext.md) > | Interface for user-specific implementation details of the connector. |
| [ConnectorContext](./com/google/enterprise/cloudsearch/sdk/ConnectorContext.md) | Interface for a context object created by the SDK to pass to the `Connector` code. |
| [ConnectorContextImpl](./com/google/enterprise/cloudsearch/sdk/ConnectorContextImpl.md) | Context for `Connector`. |
| [ConnectorScheduler](./com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.md) <T extends [ConnectorContext](./com/google/enterprise/cloudsearch/sdk/ConnectorContext.md) > | Handles scheduling and execution of connector traversal related tasks. |
| [ConnectorScheduler.Builder](./com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder.md) | Builder for `ConnectorScheduler` instances. |
| [ConnectorScheduler.OneAtATimeRunnable](./com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.OneAtATimeRunnable.md) | `Runnable` implementation which allows only one thread to run given runnable at a time. |
| [ConnectorScheduler.ShutdownHolder](./com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.ShutdownHolder.md) | Pointer to shutdown method to be executed when traversal is complete. |
| [ConnectorStats](./com/google/enterprise/cloudsearch/sdk/sdk/ConnectorStats.md) | Convenience class to access the connector's stats. |
| [ConnectorTraverser](./com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.md) | Handles scheduling and execution of indexing connector traversal related tasks. |
| [ConnectorTraverser.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder.md) |  |
| [ContentTemplate](./com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate.md) | Utility to create an HTML template used for formatting content from repository field data (database, CSV, CRM, etc.) for uploading to Cloud Search. |
| [ContentTemplate.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate.Builder.md) |  |
| [ContentTemplate.UnmappedColumnsMode](./com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate.UnmappedColumnsMode.md) | Defines how to treat extra field data provided to the `apply(Map)` call. |
| [ContentUploadService](./com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadService.md) | Service for uploading media content using Google Cloud Search ByteStream API. |
| [ContentUploadServiceImpl](./com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadServiceImpl.md) | Concrete class implementing `ContentUploadService`  Document content uploads normally occur "in-line" as part of the item's upload request. |
| [ContentUploadServiceImpl.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadServiceImpl.Builder.md) | Builder to create an instance of `ContentUploadServiceImpl`. |
| [CredentialFactory](./com/google/enterprise/cloudsearch/sdk/CredentialFactory.md) | Factory to create a `GoogleCredential` object for accessing the Cloud Search API. |

## D

| [DefaultAcl](./com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.md) | Common default ACL object that can be used for an entire data repository. |
| --- | --- |
| [DefaultAcl.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder.md) | Builder object for constructing a `DefaultAcl` object. |
| [DefaultAcl.DefaultAclMode](./com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.DefaultAclMode.md) | Mode setting used to set a default ACL on an `Item`. |
| [DeleteItem](./com/google/enterprise/cloudsearch/sdk/indexing/template/DeleteItem.md) | `ApiOperation` to delete an `Item`. |
| [DeleteQueueItems](./com/google/enterprise/cloudsearch/sdk/indexing/template/DeleteQueueItems.md) | `ApiOperation` to delete zero or more `Item` from a given queue. |
| [DirectoryFacade](./com/google/enterprise/cloudsearch/sdk/identity/DirectoryFacade.md) | A facade for Google's Directory API (https://developers.google.com/admin-sdk/directory/v1/reference/). |

## E

| [ExceptionHandler](./com/google/enterprise/cloudsearch/sdk/ExceptionHandler.md) | Interface for handling errors and defining a retry policy. |
| --- | --- |
| [ExponentialBackoffExceptionHandler](./com/google/enterprise/cloudsearch/sdk/ExponentialBackoffExceptionHandler.md) | `ExceptionHandler` implementation that uses exponential backoff before retrying. |

## F

| [FullSyncIdentityConnector](./com/google/enterprise/cloudsearch/sdk/identity/FullSyncIdentityConnector.md) | Connector implementation which periodically sync all users and groups with Google |
| --- | --- |
| [FullTraversalConnector](./com/google/enterprise/cloudsearch/sdk/indexing/template/FullTraversalConnector.md) | Template connector that performs a full repository traversal and uploads every document. |

## G

| [GoogleProxy](./com/google/enterprise/cloudsearch/sdk/GoogleProxy.md) | Encapsulates an @{link Proxy} object and the token for proxy authentication. |
| --- | --- |
| [GoogleProxy.Builder](./com/google/enterprise/cloudsearch/sdk/GoogleProxy.Builder.md) | Builder for `GoogleProxy`. |
| [GroupIdEncoder](./com/google/enterprise/cloudsearch/sdk/GroupIdEncoder.md) | Helper utility to encode Group identifier in a consistent way between identity and indexing connectors. |
| [GroupsServiceImpl](./com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.md) | Wrapper for Cloud Identity Groups API for performing CRUD operations on Groups and Memberships. |
| [GroupsServiceImpl.Builder](./com/google/enterprise/cloudsearch/sdk/identity/GroupsServiceImpl.Builder.md) | Builder object for creating an instance of `GroupsServiceImpl` |

## I

| [IdentityApplication](./com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.md) | Main object and access point for the SDK. |
| --- | --- |
| [IdentityApplication.Builder](./com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder.md) | Builder for creating an instance of `IdentityApplication` |
| [IdentityConnector](./com/google/enterprise/cloudsearch/sdk/identity/IdentityConnector.md) | Interface for user-specific implementation details of the connector. |
| [IdentityConnectorContext](./com/google/enterprise/cloudsearch/sdk/identity/IdentityConnectorContext.md) | Interface for a context object created by the SDK to pass to the `IdentityConnector` code. |
| [IdentityGroup](./com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.md) | Represents a third-party group to be synced with Cloud identity Groups API. |
| [IdentityGroup.Builder](./com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup.Builder.md) | Builder for `IdentityGroup` |
| [IdentityPrincipal](./com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal.md) <T> | Represents third-party identity such as user or group. |
| [IdentityPrincipal.Kind](./com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal.Kind.md) | Kind of `IdentityPrincipal` |
| [IdentityScheduler](./com/google/enterprise/cloudsearch/sdk/identity/IdentityScheduler.md) | Handles scheduling and execution of identity connector traversal related tasks. |
| [IdentityScheduler.Builder](./com/google/enterprise/cloudsearch/sdk/identity/IdentityScheduler.Builder.md) | Builder for creating an instance of `IdentityScheduler` |
| [IdentityService](./com/google/enterprise/cloudsearch/sdk/identity/IdentityService.md) | Access point between the connector developer and Google APIs for syncing identities. |
| [IdentityServiceImpl](./com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl.md) | Access point between the connector developer and Google APIs for syncing identities. |
| [IdentityServiceImpl.Builder](./com/google/enterprise/cloudsearch/sdk/identity/IdentityServiceImpl.Builder.md) | Builder for creating an instance of `IdentityService` |
| [IdentitySourceConfiguration](./com/google/enterprise/cloudsearch/sdk/identity/IdentitySourceConfiguration.md) | Structure to hold configuration information about identity sources, schemas and group namespace. |
| [IdentitySourceConfiguration.Builder](./com/google/enterprise/cloudsearch/sdk/identity/IdentitySourceConfiguration.Builder.md) | Builder for creating an instance of `IdentitySourceConfiguration` |
| [IdentityState](./com/google/enterprise/cloudsearch/sdk/identity/IdentityState.md) | Current state of all identities synced with Google. |
| [IdentityState.Builder](./com/google/enterprise/cloudsearch/sdk/identity/IdentityState.Builder.md) | Builder object for `IdentityState` |
| [IdentityStateLoader](./com/google/enterprise/cloudsearch/sdk/identity/IdentityStateLoader.md) | Abstract object to load initial `IdentityState` |
| [IdentityUser](./com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.md) | Represents third-party user identity and corresponding Google identity mapping. |
| [IdentityUser.Builder](./com/google/enterprise/cloudsearch/sdk/identity/IdentityUser.Builder.md) | Builder for `IdentityUser` |
| [IgnoreExceptionHandler](./com/google/enterprise/cloudsearch/sdk/IgnoreExceptionHandler.md) | Exception handler that simply ignores all errors. |
| [IncrementalChangeHandler](./com/google/enterprise/cloudsearch/sdk/IncrementalChangeHandler.md) | Interface for handling repository changes. |
| [IndexingApplication](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.md) | Main object and access point for the SDK. |
| [IndexingApplication.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder.md) | Buider for `IndexingApplication` instances. |
| [IndexingConnector](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnector.md) | Interface for user-specific implementation details of the connector. |
| [IndexingConnectorContext](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnectorContext.md) | Interface for a context object created by the SDK to pass to the `IndexingConnector` code. |
| [IndexingItemBuilder](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.md) | Helper object to build an `Item`. |
| [IndexingItemBuilder.FieldOrValue](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue.md) <T> | Construct to specify an actual field value or pointer to a key within the key/values map. |
| [IndexingItemBuilder.ItemType](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.ItemType.md) |  |
| [IndexingService](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.md) | Access point between the connector developer and the indexing service API backend. |
| [IndexingService.ContentFormat](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.ContentFormat.md) |  |
| [IndexingService.RequestMode](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.RequestMode.md) | Request mode for `Item` index and delete requests. |
| [IndexingServiceImpl](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.md) | Wrapper object for `CloudSearch.Indexing`. |
| [IndexingServiceImpl.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder.md) |  |
| [IndexingServiceImpl.Operations](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Operations.md) | API Operations |
| [IndexingServiceImpl.PollItemStatus](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.PollItemStatus.md) | Valid values for poll `Item` status. |
| [IndexingServiceImpl.ServiceManagerHelper](./com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.ServiceManagerHelper.md) |  |
| [InMemoryCheckpointHandler](./com/google/enterprise/cloudsearch/sdk/indexing/template/InMemoryCheckpointHandler.md) | CheckpointHandler implementation to maintain in-memory checkpoint values. |
| [InvalidConfigurationException](./com/google/enterprise/cloudsearch/sdk/InvalidConfigurationException.md) | Exception that is thrown for fatal configuration errors. |
| [ItemRetriever](./com/google/enterprise/cloudsearch/sdk/indexing/ItemRetriever.md) | Connector specific implementation for handling `Item` from `PollItemsResponse`. |

## L

| [ListingConnector](./com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector.md) | Template connector that performs complete repository list traversals. |
| --- | --- |
| [LocalFileCredentialFactory](./com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.md) | Factory to create a `GoogleCredential` object for accessing the Cloud Search API. |
| [LocalFileCredentialFactory.Builder](./com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder.md) | Builder for creating instance of `LocalFileCredentialFactory`. |

## M

| [MockItem](./com/google/enterprise/cloudsearch/sdk/indexing/MockItem.md) | Generates an Item using `IndexingItemBuilder` with specified values for metadata. |
| --- | --- |
| [MockItem.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/MockItem.Builder.md) | Builder class to set meta data attributes of an Item. |

## P

| [PaginationIterable](./com/google/enterprise/cloudsearch/sdk/PaginationIterable.md) <T, Q> | `Iterable` which handles pagination for iterating over set of objects. |
| --- | --- |
| [PaginationIterable.Page](./com/google/enterprise/cloudsearch/sdk/PaginationIterable.Page.md) <T, Q> | Represents set of items and optional continuation token to fetch additional items. |
| [PushItems](./com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.md) | `ApiOperation` to push `Item` objects to the Cloud Search queue. |
| [PushItems.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.Builder.md) | Builder for creating an instance of `PushItems` operation |

## Q

| [QueueCheckpoint](./com/google/enterprise/cloudsearch/sdk/indexing/template/QueueCheckpoint.md) | Handles checkpoints for the queue names used for detecting deletes during full traversals. |
| --- | --- |
| [QueueCheckpoint.QueueData](./com/google/enterprise/cloudsearch/sdk/indexing/template/QueueCheckpoint.QueueData.md) | Represents queue checkpoint information maintained by `FullTraversalConnector` |
| [QuotaServer](./com/google/enterprise/cloudsearch/sdk/QuotaServer.md) <T extends Enum<T>> | Utility object to enforce quota requirements. |
| [QuotaServer.Builder](./com/google/enterprise/cloudsearch/sdk/QuotaServer.Builder.md) <T extends Enum<T>, K extends [QuotaServer](./com/google/enterprise/cloudsearch/sdk/QuotaServer.md) <T>> | Builder for `QuotaServer` instances. |

## R

| [Repository](./com/google/enterprise/cloudsearch/sdk/identity/Repository.md) | An Identity repository for listing Users and Groups from a repository |
| --- | --- |
| [Repository](./com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md) | An object that provides the necessary methods to access a data repository. |
| [RepositoryContext](./com/google/enterprise/cloudsearch/sdk/identity/RepositoryContext.md) | Context used by `Repository` to initialize itself |
| [RepositoryContext](./com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryContext.md) | Context object to enable the `Repository` to make asynchronous calls to the Cloud Search SDK. |
| [RepositoryDoc](./com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc.md) | Generic object for a single document in a repository. |
| [RepositoryDoc.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc.Builder.md) |  |
| [RepositoryDocError](./com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDocError.md) | `ApiOperation` to push repository error while processing an item from a content repository. |
| [RepositoryException](./com/google/enterprise/cloudsearch/sdk/RepositoryException.md) | An exception that is thrown specifically for fatal repository access errors. |
| [RepositoryException.Builder](./com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder.md) | Builder for creating `RepositoryException` |
| [RepositoryException.ErrorType](./com/google/enterprise/cloudsearch/sdk/RepositoryException.ErrorType.md) | Repository error types as defined by Cloud Search API. |
| [RetryPolicy](./com/google/enterprise/cloudsearch/sdk/RetryPolicy.md) | Object to store policy parameters used for backoff and retry recoverable errors. |
| [RetryPolicy.BackOffFactory](./com/google/enterprise/cloudsearch/sdk/RetryPolicy.BackOffFactory.md) | Creates an instance of `BackOff` |
| [RetryPolicy.Builder](./com/google/enterprise/cloudsearch/sdk/RetryPolicy.Builder.md) | Builder for creating an instance of `RetryPolicy` |
| [RetryPolicy.DefaultBackOffFactoryImpl](./com/google/enterprise/cloudsearch/sdk/RetryPolicy.DefaultBackOffFactoryImpl.md) | Default factory object used to create an `ExponentialBackOff` with an initial delay of 1 second(s) and a multiplier of 2. |

## S

| [SearchAuthInfo](./com/google/enterprise/cloudsearch/sdk/serving/SearchAuthInfo.md) | Container for auth info used to serving items. |
| --- | --- |
| [SearchHelper](./com/google/enterprise/cloudsearch/sdk/serving/SearchHelper.md) | Helper class to serving for items indexed by connectors. |
| [SearchTestUtils](./com/google/enterprise/cloudsearch/sdk/serving/SearchTestUtils.md) | Utility methods to test that indexed items are served correctly. |
| [SensitiveDataCodec](./com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec.md) | Helper object used to encode and decode sensitive data. |
| [SensitiveDataCodec.SecurityLevel](./com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec.SecurityLevel.md) | Values that specify the security level, used typically for a user parameter. |
| [StartupException](./com/google/enterprise/cloudsearch/sdk/StartupException.md) | Exception that is thrown for unrecoverable startup errors, such as fatal configuration errors or running on the wrong platform. |
| [StatsManager](./com/google/enterprise/cloudsearch/sdk/StatsManager.md) | Object used to manage operation execution statistics. |
| [StatsManager.OperationStats](./com/google/enterprise/cloudsearch/sdk/StatsManager.OperationStats.md) | Object used to log events, operations, and actions |
| [StatsManager.OperationStats.Event](./com/google/enterprise/cloudsearch/sdk/StatsManager.OperationStats.Event.md) | Counter for single operation to wrap Stopwatch |
| [StatsManager.ResetStatsRule](./com/google/enterprise/cloudsearch/sdk/StatsManager.ResetStatsRule.md) | `TestRule` to reset static `StatsManager` object for unit tests. |
| [StructuredData](./com/google/enterprise/cloudsearch/sdk/indexing/StructuredData.md) | Helper utility to generate a `StructuredDataObject`. |
| [StructuredData.ResetStructuredDataRule](./com/google/enterprise/cloudsearch/sdk/indexing/StructuredData.ResetStructuredDataRule.md) | `TestRule` to reset the static `StructuredData` object for unit tests. |
| [StructuredDataHelper](./com/google/enterprise/cloudsearch/sdk/indexing/StructuredDataHelper.md) | Helper class for Mock Connector Structured Data |

## T

| [TestProperties](./com/google/enterprise/cloudsearch/sdk/TestProperties.md) | Common configuration properties for test case classes. |
| --- | --- |
| [TestUtils](./com/google/enterprise/cloudsearch/sdk/indexing/TestUtils.md) | Utility methods for integration tests for the indexing SDK. |
| [TraverseExceptionHandlerFactory](./com/google/enterprise/cloudsearch/sdk/indexing/template/TraverseExceptionHandlerFactory.md) | Constructs an `ExceptionHandler` based up on configuration options. |
| [TraverserConfiguration](./com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.md) | Object that defines a Cloud Search queue polling task. |
| [TraverserConfiguration.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder.md) | Builder for `TraverserConfiguration` class. |
| [TraverserWorker](./com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserWorker.md) | An interface that performs the method call to poll the Cloud Search queue. |
| [TraverserWorkerManager](./com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserWorkerManager.md) | Factory object for creating `TraverserWorker` instances. |

## U

| [Uploader](./com/google/enterprise/cloudsearch/sdk/indexing/util/Uploader.md) | This class reads in a json file to upload all the requests to the Cloud Search Indexing API. |
| --- | --- |
| [UploadRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.md) | This class defines the schema of request to upload to cloud search API. |
| [UploadRequest.AbstractNameRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.AbstractNameRequest.md) | Abstract class of the request which has its name as the json key. |
| [UploadRequest.AbstractRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.AbstractRequest.md) | Abstract class of the request sent to the indexing API. |
| [UploadRequest.DatasourcesListRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DatasourcesListRequest.md) | Request to list data sources in the indexing API. |
| [UploadRequest.DeleteQueueItemsRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DeleteQueueItemsRequest.md) | Request to delete items from a given queue. |
| [UploadRequest.DeleteRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DeleteRequest.md) | Request to delete an Item from the indexing API. |
| [UploadRequest.DeleteSchemaRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DeleteSchemaRequest.md) | Request to delete the schema from the indexing API for the data source. |
| [UploadRequest.GetRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.GetRequest.md) | Request to get an Item from the indexing API. |
| [UploadRequest.GetSchemaRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.GetSchemaRequest.md) | Request to get the schema from the indexing API for the data source. |
| [UploadRequest.IndexItemAndContentRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.IndexItemAndContentRequest.md) | Request to index an Item and its content to the indexing API. |
| [UploadRequest.IndexItemRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.IndexItemRequest.md) | Request to index an Item to the indexing API. |
| [UploadRequest.ListRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.ListRequest.md) | Request to list all items or search items by its attributes specified by filter criteria. |
| [UploadRequest.MediaContent](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.MediaContent.md) | MediaContent supports media content from either a url or a string. |
| [UploadRequest.PollItemsRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.PollItemsRequest.md) | Request to poll items from the indexing API. |
| [UploadRequest.PushItemRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.PushItemRequest.md) | Request to push item to the indexing API. |
| [UploadRequest.UnreserveRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.UnreserveRequest.md) | Request to unreserve polled `Item` instances in a specific queue. |
| [UploadRequest.UpdateSchemaRequest](./com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.UpdateSchemaRequest.md) | Request to register schema for the data source in the indexing API. |
| [UrlBuilder](./com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.md) | Constructs an URL from a `MessageFormat` -style format string and a set of columns to include in the URL. |
| [UrlBuilder.Builder](./com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder.md) | Builder for constructing instances of `UrlBuilder`. |
| [UsersServiceImpl](./com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl.md) |  |
| [UsersServiceImpl.Builder](./com/google/enterprise/cloudsearch/sdk/identity/UsersServiceImpl.Builder.md) | Builder for creating an instance of `UsersServiceImpl` |
| [Util](./com/google/enterprise/cloudsearch/sdk/Util.md) | Common utility methods for integration tests. |
