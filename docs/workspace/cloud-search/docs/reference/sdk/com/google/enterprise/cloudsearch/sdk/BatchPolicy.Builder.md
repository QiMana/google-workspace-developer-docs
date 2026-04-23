---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/BatchPolicy.Builder
root: workspace
fetched_at: 2026-04-23T15:26:24.047Z
---

# BatchPolicy.Builder

Builder object for creating an instance of `BatchRequest`.

### Public Constructor Summary

[BatchPolicy.Builder](./BatchPolicy.Builder.md#BatchPolicy.Builder()) ()

### Public Method Summary

|  | [build](./BatchPolicy.Builder.md#build()) () |
| --- | --- |
| [BatchPolicy.Builder](./BatchPolicy.Builder.md) | [setBatchConnectTimeoutSeconds](./BatchPolicy.Builder.md#setBatchConnectTimeoutSeconds(int)) (int batchConnectTimeout)  Sets connect timeout in seconds for entire `BatchRequest` |
| [BatchPolicy.Builder](./BatchPolicy.Builder.md) | [setBatchReadTimeoutSeconds](./BatchPolicy.Builder.md#setBatchReadTimeoutSeconds(int)) (int batchReadTimeout)  Sets read timeout in seconds for entire `BatchRequest` |
| [BatchPolicy.Builder](./BatchPolicy.Builder.md) | [setFlushOnShutdown](./BatchPolicy.Builder.md#setFlushOnShutdown(boolean)) (boolean flushOnShutdown)  Sets flag to indicate if `BatchRequestService` should execute already enqueued requests once `BatchRequestService` shutdown is initiated or mark such requests as cancelled. |
| [BatchPolicy.Builder](./BatchPolicy.Builder.md) | [setMaxActiveBatches](./BatchPolicy.Builder.md#setMaxActiveBatches(int)) (int maxActiveBatches)  Sets maximum concurrent batch requests allowed to be executed. |
| [BatchPolicy.Builder](./BatchPolicy.Builder.md) | [setMaxBatchDelay](./BatchPolicy.Builder.md#setMaxBatchDelay(int,%20java.util.concurrent.TimeUnit)) (int maxBatchDelay, TimeUnit maxBatchDelayUnit)  Sets auto flush delay for batched request. |
| [BatchPolicy.Builder](./BatchPolicy.Builder.md) | [setMaxBatchSize](./BatchPolicy.Builder.md#setMaxBatchSize(int)) (int maxBatchSize)  Sets maximum number of requests to be batched together. |
| [BatchPolicy.Builder](./BatchPolicy.Builder.md) | [setQueueLength](./BatchPolicy.Builder.md#setQueueLength(int)) (int queueLength)  Sets total length of active batch request queue. |

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

## Public Constructors

#### public BatchPolicy.Builder ()

## Public Methods

#### build ()

#### public BatchPolicy.Builder setBatchConnectTimeoutSeconds (int batchConnectTimeout)

Sets connect timeout in seconds for entire `BatchRequest`

##### Parameters

| batchConnectTimeout | connect timeout for entire `BatchRequest` |
| --- | --- |

##### Returns

- this Builder instance

#### public BatchPolicy.Builder setBatchReadTimeoutSeconds (int batchReadTimeout)

Sets read timeout in seconds for entire `BatchRequest`

##### Parameters

| batchReadTimeout | read timeout for entire `BatchRequest` |
| --- | --- |

##### Returns

- this Builder instance

#### public BatchPolicy.Builder setFlushOnShutdown (boolean flushOnShutdown)

Sets flag to indicate if `BatchRequestService` should execute already enqueued requests once `BatchRequestService` shutdown is initiated or mark such requests as cancelled.

##### Parameters

| flushOnShutdown | Set to `true` if already enqueued requests should be executed once shutdown is initiated. Set to `false` to mark already enqueued requests as cancelled once shutdown is initiated. |
| --- | --- |

##### Returns

- this Builder instance

#### public BatchPolicy.Builder setMaxActiveBatches (int maxActiveBatches)

Sets maximum concurrent batch requests allowed to be executed.

##### Parameters

| maxActiveBatches | maximum concurrent batch requests allowed to be executed simultaneously. |
| --- | --- |

##### Returns

- this Builder instance

#### public BatchPolicy.Builder setMaxBatchDelay (int maxBatchDelay, TimeUnit maxBatchDelayUnit)

Sets auto flush delay for batched request.

##### Parameters

| maxBatchDelay | auto flush delay. |
| --- | --- |
| maxBatchDelayUnit | TimeUnit for auto flush delay. |

##### Returns

- this Builder instance

#### public BatchPolicy.Builder setMaxBatchSize (int maxBatchSize)

Sets maximum number of requests to be batched together.

##### Parameters

| maxBatchSize | maximum number of requests to be batched together |
| --- | --- |

##### Returns

- this Builder instance

#### public BatchPolicy.Builder setQueueLength (int queueLength)

Sets total length of active batch request queue.

##### Parameters

| queueLength | total length of active batch request queue. |
| --- | --- |

##### Returns

- this Builder instance
