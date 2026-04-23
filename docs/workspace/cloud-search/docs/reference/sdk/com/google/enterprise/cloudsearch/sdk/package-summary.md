---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/package-summary
root: workspace
fetched_at: 2026-04-23T15:27:01.062Z
---

# com.google.enterprise.cloudsearch.sdk

### Interfaces

| [AsyncRequest.EventStartCallback](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AsyncRequest.EventStartCallback) | Interface to record start of an event such as execution of batched request. |
| --- | --- |
| [BatchRequestService.ExecutorFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactory) | Factory for obtaining `ExecutorService` instance. |
| [BatchRequestService.TimeProvider](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.TimeProvider) | Interface for classes that can provide the current time. |
| [CheckpointCloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable) <T> | A `CloseableIterable` that supports pagination while traversing a repository or incremental changes. |
| [CloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CloseableIterable) <T> | Interface that is used to iterate through a set of repository documents. |
| [Connector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Connector) <T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | Interface for user-specific implementation details of the connector. |
| [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) | Interface for a context object created by the SDK to pass to the `Connector` code. |
| [ConnectorScheduler.ShutdownHolder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.ShutdownHolder) | Pointer to shutdown method to be executed when traversal is complete. |
| [CredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CredentialFactory) | Factory to create a `GoogleCredential` object for accessing the Cloud Search API. |
| [ExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExceptionHandler) | Interface for handling errors and defining a retry policy. |
| [IncrementalChangeHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/IncrementalChangeHandler) | Interface for handling repository changes. |
| [RetryPolicy.BackOffFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.BackOffFactory) | Creates an instance of `BackOff` |
| [StatsManager.OperationStats.Event](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager.OperationStats.Event) | Counter for single operation to wrap Stopwatch |

### Classes

| [AbortCountExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AbortCountExceptionHandler) | Exception handler that is configured with a count of allowable retries before forcing an abort. |
| --- | --- |
| [Application](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application) <H extends [AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper), T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | Main object and access point for the SDK. |
| [Application.AbstractApplicationHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.AbstractApplicationHelper) <C extends AbstractBuilder<C, T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) >, S extends AbstractBuilder<S, T>, T> | Helper class to make our class more testable: factory and util methods |
| [Application.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.Builder) | Builder object for creating `Application` instance. |
| [Application.ShutdownHook](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.ShutdownHook) | `Runnable` implementation to register with `addShutdownHook(Thread)`. |
| [AsyncRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AsyncRequest) <T> | Individual batched request wrapper as consumed by `add(AsyncRequest)` |
| [AsyncRequest.SettableFutureCallback](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/AsyncRequest.SettableFutureCallback) <T> | `JsonBatchCallback` wrapper which updates `ListenableFuture` associated with individual batched request. |
| [BaseApiService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService) <T extends AbstractGoogleJsonClient> | Base object encapsulating common functionality for interacting with Google APIs such as setting credentials, request timeouts, error handling and retry etc. |
| [BaseApiService.AbstractBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder) <B extends [AbstractBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.AbstractBuilder) <B, T extends AbstractGoogleJsonClient>, T> | Builder object for creating an instance of `BaseApiService`. |
| [BaseApiService.RetryRequestInitializer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BaseApiService.RetryRequestInitializer) | Adds a backoff and retry response and exception handlers to the `HttpRequest`. |
| [BatchPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy) | Policy for flushing batched requests. |
| [BatchPolicy.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy.Builder) | Builder object for creating an instance of `BatchRequest`. |
| [BatchRequestService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService) | Batch multiple requests. |
| [BatchRequestService.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.Builder) | Builder object for creating an instance of `BatchRequestService` |
| [BatchRequestService.ExecutorFactoryImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.ExecutorFactoryImpl) | `BatchRequestService.ExecutorFactory` implementation to get `ExecutorService` and `ScheduledExecutorService` instances used by `BatchRequestService`. |
| [BatchRequestService.SystemTimeProvider](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchRequestService.SystemTimeProvider) | `BatchRequestService.TimeProvider` implementation to get current system time. |
| [CheckpointCloseableIterableImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl) <T> | `CheckpointCloseableIterable` implementation which supports lazy initialization of `getCheckpoint()` value and `hasMore()`. |
| [CheckpointCloseableIterableImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder) <T> | Builder object for `CheckpointCloseableIterableImpl` |
| [CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule) <T> | A `TestRule` to compare two instances of `CheckpointCloseableIterable` s. |
| [CloseableIterableOnce](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CloseableIterableOnce) <T> | A `CloseableIterable` that can be iterated over at most once. |
| [ConnectorContextImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContextImpl) | Context for `Connector`. |
| [ConnectorScheduler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler) <T extends [ConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorContext) > | Handles scheduling and execution of connector traversal related tasks. |
| [ConnectorScheduler.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.Builder) | Builder for `ConnectorScheduler` instances. |
| [ConnectorScheduler.OneAtATimeRunnable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ConnectorScheduler.OneAtATimeRunnable) | `Runnable` implementation which allows only one thread to run given runnable at a time. |
| [ExponentialBackoffExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/ExponentialBackoffExceptionHandler) | `ExceptionHandler` implementation that uses exponential backoff before retrying. |
| [GoogleProxy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy) | Encapsulates an @{link Proxy} object and the token for proxy authentication. |
| [GoogleProxy.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GoogleProxy.Builder) | Builder for `GoogleProxy`. |
| [GroupIdEncoder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GroupIdEncoder) | Helper utility to encode Group identifier in a consistent way between identity and indexing connectors. |
| [IgnoreExceptionHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/IgnoreExceptionHandler) | Exception handler that simply ignores all errors. |
| [LocalFileCredentialFactory](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory) | Factory to create a `GoogleCredential` object for accessing the Cloud Search API. |
| [LocalFileCredentialFactory.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/LocalFileCredentialFactory.Builder) | Builder for creating instance of `LocalFileCredentialFactory`. |
| [PaginationIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable) <T, Q> | `Iterable` which handles pagination for iterating over set of objects. |
| [PaginationIterable.Page](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable.Page) <T, Q> | Represents set of items and optional continuation token to fetch additional items. |
| [QuotaServer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer) <T extends Enum<T>> | Utility object to enforce quota requirements. |
| [QuotaServer.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer.Builder) <T extends Enum<T>, K extends [QuotaServer](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/QuotaServer) <T>> | Builder for `QuotaServer` instances. |
| [RepositoryException.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.Builder) | Builder for creating `RepositoryException` |
| [RetryPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy) | Object to store policy parameters used for backoff and retry recoverable errors. |
| [RetryPolicy.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.Builder) | Builder for creating an instance of `RetryPolicy` |
| [RetryPolicy.DefaultBackOffFactoryImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.DefaultBackOffFactoryImpl) | Default factory object used to create an `ExponentialBackOff` with an initial delay of 1 second(s) and a multiplier of 2. |
| [StatsManager](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager) | Object used to manage operation execution statistics. |
| [StatsManager.OperationStats](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager.OperationStats) | Object used to log events, operations, and actions |
| [StatsManager.ResetStatsRule](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StatsManager.ResetStatsRule) | `TestRule` to reset static `StatsManager` object for unit tests. |
| [TestProperties](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/TestProperties) | Common configuration properties for test case classes. |
| [Util](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Util) | Common utility methods for integration tests. |

### Enums

| [RepositoryException.ErrorType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException.ErrorType) | Repository error types as defined by Cloud Search API. |
| --- | --- |

### Exceptions

| [InvalidConfigurationException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/InvalidConfigurationException) | Exception that is thrown for fatal configuration errors. |
| --- | --- |
| [RepositoryException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException) | An exception that is thrown specifically for fatal repository access errors. |
| [StartupException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/StartupException) | Exception that is thrown for unrecoverable startup errors, such as fatal configuration errors or running on the wrong platform. |
