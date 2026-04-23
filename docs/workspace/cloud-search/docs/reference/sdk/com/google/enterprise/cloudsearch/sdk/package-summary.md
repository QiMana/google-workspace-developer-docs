---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/package-summary
root: workspace
fetched_at: 2026-04-23T15:27:01.062Z
---

# com.google.enterprise.cloudsearch.sdk

### Interfaces

| [AsyncRequest.EventStartCallback](./AsyncRequest.EventStartCallback.md) | Interface to record start of an event such as execution of batched request. |
| --- | --- |
| [BatchRequestService.ExecutorFactory](./BatchRequestService.ExecutorFactory.md) | Factory for obtaining `ExecutorService` instance. |
| [BatchRequestService.TimeProvider](./BatchRequestService.TimeProvider.md) | Interface for classes that can provide the current time. |
| [CheckpointCloseableIterable](./CheckpointCloseableIterable.md) <T> | A `CloseableIterable` that supports pagination while traversing a repository or incremental changes. |
| [CloseableIterable](./CloseableIterable.md) <T> | Interface that is used to iterate through a set of repository documents. |
| [Connector](./Connector.md) <T extends [ConnectorContext](./ConnectorContext.md) > | Interface for user-specific implementation details of the connector. |
| [ConnectorContext](./ConnectorContext.md) | Interface for a context object created by the SDK to pass to the `Connector` code. |
| [ConnectorScheduler.ShutdownHolder](./ConnectorScheduler.ShutdownHolder.md) | Pointer to shutdown method to be executed when traversal is complete. |
| [CredentialFactory](./CredentialFactory.md) | Factory to create a `GoogleCredential` object for accessing the Cloud Search API. |
| [ExceptionHandler](./ExceptionHandler.md) | Interface for handling errors and defining a retry policy. |
| [IncrementalChangeHandler](./IncrementalChangeHandler.md) | Interface for handling repository changes. |
| [RetryPolicy.BackOffFactory](./RetryPolicy.BackOffFactory.md) | Creates an instance of `BackOff` |
| [StatsManager.OperationStats.Event](./StatsManager.OperationStats.Event.md) | Counter for single operation to wrap Stopwatch |

### Classes

| [AbortCountExceptionHandler](./AbortCountExceptionHandler.md) | Exception handler that is configured with a count of allowable retries before forcing an abort. |
| --- | --- |
| [Application](./Application.md) <H extends [AbstractApplicationHelper](./Application.AbstractApplicationHelper.md), T extends [ConnectorContext](./ConnectorContext.md) > | Main object and access point for the SDK. |
| [Application.AbstractApplicationHelper](./Application.AbstractApplicationHelper.md) <C extends AbstractBuilder<C, T extends [ConnectorContext](./ConnectorContext.md) >, S extends AbstractBuilder<S, T>, T> | Helper class to make our class more testable: factory and util methods |
| [Application.Builder](./Application.Builder.md) | Builder object for creating `Application` instance. |
| [Application.ShutdownHook](./Application.ShutdownHook.md) | `Runnable` implementation to register with `addShutdownHook(Thread)`. |
| [AsyncRequest](./AsyncRequest.md) <T> | Individual batched request wrapper as consumed by `add(AsyncRequest)` |
| [AsyncRequest.SettableFutureCallback](./AsyncRequest.SettableFutureCallback.md) <T> | `JsonBatchCallback` wrapper which updates `ListenableFuture` associated with individual batched request. |
| [BaseApiService](./BaseApiService.md) <T extends AbstractGoogleJsonClient> | Base object encapsulating common functionality for interacting with Google APIs such as setting credentials, request timeouts, error handling and retry etc. |
| [BaseApiService.AbstractBuilder](./BaseApiService.AbstractBuilder.md) <B extends [AbstractBuilder](./BaseApiService.AbstractBuilder.md) <B, T extends AbstractGoogleJsonClient>, T> | Builder object for creating an instance of `BaseApiService`. |
| [BaseApiService.RetryRequestInitializer](./BaseApiService.RetryRequestInitializer.md) | Adds a backoff and retry response and exception handlers to the `HttpRequest`. |
| [BatchPolicy](./BatchPolicy.md) | Policy for flushing batched requests. |
| [BatchPolicy.Builder](./BatchPolicy.Builder.md) | Builder object for creating an instance of `BatchRequest`. |
| [BatchRequestService](./BatchRequestService.md) | Batch multiple requests. |
| [BatchRequestService.Builder](./BatchRequestService.Builder.md) | Builder object for creating an instance of `BatchRequestService` |
| [BatchRequestService.ExecutorFactoryImpl](./BatchRequestService.ExecutorFactoryImpl.md) | `BatchRequestService.ExecutorFactory` implementation to get `ExecutorService` and `ScheduledExecutorService` instances used by `BatchRequestService`. |
| [BatchRequestService.SystemTimeProvider](./BatchRequestService.SystemTimeProvider.md) | `BatchRequestService.TimeProvider` implementation to get current system time. |
| [CheckpointCloseableIterableImpl](./CheckpointCloseableIterableImpl.md) <T> | `CheckpointCloseableIterable` implementation which supports lazy initialization of `getCheckpoint()` value and `hasMore()`. |
| [CheckpointCloseableIterableImpl.Builder](./CheckpointCloseableIterableImpl.Builder.md) <T> | Builder object for `CheckpointCloseableIterableImpl` |
| [CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule](./CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule.md) <T> | A `TestRule` to compare two instances of `CheckpointCloseableIterable` s. |
| [CloseableIterableOnce](./CloseableIterableOnce.md) <T> | A `CloseableIterable` that can be iterated over at most once. |
| [ConnectorContextImpl](./ConnectorContextImpl.md) | Context for `Connector`. |
| [ConnectorScheduler](./ConnectorScheduler.md) <T extends [ConnectorContext](./ConnectorContext.md) > | Handles scheduling and execution of connector traversal related tasks. |
| [ConnectorScheduler.Builder](./ConnectorScheduler.Builder.md) | Builder for `ConnectorScheduler` instances. |
| [ConnectorScheduler.OneAtATimeRunnable](./ConnectorScheduler.OneAtATimeRunnable.md) | `Runnable` implementation which allows only one thread to run given runnable at a time. |
| [ExponentialBackoffExceptionHandler](./ExponentialBackoffExceptionHandler.md) | `ExceptionHandler` implementation that uses exponential backoff before retrying. |
| [GoogleProxy](./GoogleProxy.md) | Encapsulates an @{link Proxy} object and the token for proxy authentication. |
| [GoogleProxy.Builder](./GoogleProxy.Builder.md) | Builder for `GoogleProxy`. |
| [GroupIdEncoder](./GroupIdEncoder.md) | Helper utility to encode Group identifier in a consistent way between identity and indexing connectors. |
| [IgnoreExceptionHandler](./IgnoreExceptionHandler.md) | Exception handler that simply ignores all errors. |
| [LocalFileCredentialFactory](./LocalFileCredentialFactory.md) | Factory to create a `GoogleCredential` object for accessing the Cloud Search API. |
| [LocalFileCredentialFactory.Builder](./LocalFileCredentialFactory.Builder.md) | Builder for creating instance of `LocalFileCredentialFactory`. |
| [PaginationIterable](./PaginationIterable.md) <T, Q> | `Iterable` which handles pagination for iterating over set of objects. |
| [PaginationIterable.Page](./PaginationIterable.Page.md) <T, Q> | Represents set of items and optional continuation token to fetch additional items. |
| [QuotaServer](./QuotaServer.md) <T extends Enum<T>> | Utility object to enforce quota requirements. |
| [QuotaServer.Builder](./QuotaServer.Builder.md) <T extends Enum<T>, K extends [QuotaServer](./QuotaServer.md) <T>> | Builder for `QuotaServer` instances. |
| [RepositoryException.Builder](./RepositoryException.Builder.md) | Builder for creating `RepositoryException` |
| [RetryPolicy](./RetryPolicy.md) | Object to store policy parameters used for backoff and retry recoverable errors. |
| [RetryPolicy.Builder](./RetryPolicy.Builder.md) | Builder for creating an instance of `RetryPolicy` |
| [RetryPolicy.DefaultBackOffFactoryImpl](./RetryPolicy.DefaultBackOffFactoryImpl.md) | Default factory object used to create an `ExponentialBackOff` with an initial delay of 1 second(s) and a multiplier of 2. |
| [StatsManager](./StatsManager.md) | Object used to manage operation execution statistics. |
| [StatsManager.OperationStats](./StatsManager.OperationStats.md) | Object used to log events, operations, and actions |
| [StatsManager.ResetStatsRule](./StatsManager.ResetStatsRule.md) | `TestRule` to reset static `StatsManager` object for unit tests. |
| [TestProperties](./TestProperties.md) | Common configuration properties for test case classes. |
| [Util](./Util.md) | Common utility methods for integration tests. |

### Enums

| [RepositoryException.ErrorType](./RepositoryException.ErrorType.md) | Repository error types as defined by Cloud Search API. |
| --- | --- |

### Exceptions

| [InvalidConfigurationException](./InvalidConfigurationException.md) | Exception that is thrown for fatal configuration errors. |
| --- | --- |
| [RepositoryException](./RepositoryException.md) | An exception that is thrown specifically for fatal repository access errors. |
| [StartupException](./StartupException.md) | Exception that is thrown for unrecoverable startup errors, such as fatal configuration errors or running on the wrong platform. |
