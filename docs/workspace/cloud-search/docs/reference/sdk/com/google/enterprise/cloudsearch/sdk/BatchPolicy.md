---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy
root: workspace
fetched_at: 2026-04-23T15:26:23.437Z
---

# BatchPolicy

Policy for flushing batched requests.

The trigger for uploading a batch of requests is by either the number of requests or the timeout, whichever comes first. For example, if the batch delay time has expired without the batch size being reached, or if the batch size number of documents is reached before the delay time expires, then the batch upload is triggered.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy.Builder">BatchPolicy.Builder</a></td><td width="100%">Builder object for creating an instance of <code>BatchRequest</code>.</td></tr></tbody></table>

### Public Method Summary

| static [BatchPolicy](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy) | [fromConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy#fromConfiguration\(\)) ()  Creates a batch policy from configuration file parameters. |
| --- | --- |
| int | [getBatchConnectTimeoutSeconds](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy#getBatchConnectTimeoutSeconds\(\)) ()  Gets connect timeout in seconds for `BatchRequest` execution. |
| int | [getBatchReadTimeoutSeconds](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy#getBatchReadTimeoutSeconds\(\)) ()  Gets read timeout in seconds for `BatchRequest` execution. |
| int | [getMaxActiveBatches](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy#getMaxActiveBatches\(\)) ()  Gets maximum number of allowed active batch requests under processing at a given instance. |
| int | [getMaxBatchDelay](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy#getMaxBatchDelay\(\)) ()  Gets maximum batch auto flush delay. |
| TimeUnit | [getMaxBatchDelayUnit](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy#getMaxBatchDelayUnit\(\)) ()  Gets `TimeUnit` for batch auto flush delay. |
| int | [getMaxBatchSize](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy#getMaxBatchSize\(\)) ()  Gets maximum number of requests allowed in single batch request. |
| int | [getQueueLength](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy#getQueueLength\(\)) ()  Gets total number of requests allowed to be batched before blocking batching of additional requests. |
| boolean | [isFlushOnShutdown](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy#isFlushOnShutdown\(\)) ()  Gets flag indicating if already enqueued requests would be executed once shutdown is initiated or already enqueued requests would be marked as cancelled. |

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

## Public Methods

#### public static BatchPolicy fromConfiguration ()

Creates a batch policy from configuration file parameters.

The configuration file should have parameters in the format of:

- batch.flushOnShutdown = true to flush batched request during service shutdown
- batch.batchSize = 10 number of requests to batch together
- batch.maxBatchDelaySeconds = 5 number of seconds to wait before batched requests are flushed automatically
- batch.maxQueueLength = 1000 maximum number of requests in batch queue for execution
- batch.maxActiveBatches = 20 number of allowable concurrently executing batches
- batch.readTimeoutSeconds = 120 read timeout in seconds for batch request
- batch.connectTimeoutSeconds = 120 connect timeout in seconds for batch request

#### public int getBatchConnectTimeoutSeconds ()

Gets connect timeout in seconds for `BatchRequest` execution.

##### Returns

- connect timeout in seconds for `BatchRequest` execution.

#### public int getBatchReadTimeoutSeconds ()

Gets read timeout in seconds for `BatchRequest` execution.

##### Returns

- read timeout in seconds for `BatchRequest` execution.

#### public int getMaxActiveBatches ()

Gets maximum number of allowed active batch requests under processing at a given instance.

##### Returns

- Maximum number of allowed active batch requests under processing at a given instance.

#### public int getMaxBatchDelay ()

Gets maximum batch auto flush delay.

##### Returns

- maximum duration to wait before auto flushing batch.

#### public TimeUnit getMaxBatchDelayUnit ()

Gets `TimeUnit` for batch auto flush delay.

##### Returns

- `TimeUnit` for batch auto flush delay

#### public int getMaxBatchSize ()

Gets maximum number of requests allowed in single batch request.

##### Returns

- maximum number of requests allowed in single batch request

#### public int getQueueLength ()

Gets total number of requests allowed to be batched before blocking batching of additional requests.

##### Returns

- Total number of requests allowed to be batched before blocking batching of additional requests.

#### public boolean isFlushOnShutdown ()

Gets flag indicating if already enqueued requests would be executed once shutdown is initiated or already enqueued requests would be marked as cancelled.

##### Returns

- true implies already enqueued requests would be executed once shutdown is initiated, false implies already enqueued requests would be marked as cancelled.
