---
source: https://developers.google.com/workspace/cloud-search/docs/guides/tune-connector
root: workspace
fetched_at: 2026-04-23T15:26:10.729Z
---

# Tune connector settings

The Google Cloud Search SDK includes Google-supplied configuration parameters for all connectors. Tuning these settings can streamline data indexing. This guide lists common indexing issues and the settings to resolve them.

## Low indexing throughput for FullTraversalConnector

The following table lists settings to improve throughput for a [`FullTraversalConnector`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/FullTraversalConnector):

| Setting | Description | Default | Suggested Change |
| --- | --- | --- | --- |
| [`traverse.partitionSize`](https://developers.google.com/workspace/cloud-search/docs/reference/connector-configuration#traversers) | The number of `ApiOperation()` items processed in batches. The SDK waits for a partition to complete before fetching more. | 50 | Increase to 1000 or more if you have sufficient memory. |
| [`batch.batchSize`](https://developers.google.com/workspace/cloud-search/docs/reference/connector-configuration#batch-policy) | The number of requests batched together. | 10 | Try lowering the batch size. |
| [`batch.maxActiveBatches`](https://developers.google.com/workspace/cloud-search/docs/reference/connector-configuration#batch-policy) | Allowable concurrent batches. | 20 | If you lower `batchSize`, increase this using: `(partitionSize / batchSize) + 50`. |
| [`traverse.threadPoolSize`](https://developers.google.com/workspace/cloud-search/docs/reference/connector-configuration#traversers) | Number of threads for parallel processing. | 50 | Increase this by multiples of 10. |

Consider using `setRequestMode()` to switch between `ASYNCHRONOUS` and `SYNCHRONOUS` API request modes.

## Low indexing throughput for ListTraversalConnector

A `ListTraversalConnector` uses one traverser by default. To increase throughput, create multiple traversers for specific item statuses (e.g., `NEW_ITEM`, `MODIFIED`).

| Setting | Description | Default | Change |
| --- | --- | --- | --- |
| `repository.traversers` | Creates individual traversers with unique names (e.g., `t1, t2`). | One traverser | Add more traversers. |
| `traversers.t1.hostload` | Number of threads to simultaneously index items. | 5 | Try values of 10 or greater. |
| `schedule.pollQueueIntervalSecs` | Seconds to wait before re-polling an empty queue. | 10 | Try lowering to 1. |
| `traverser.t1.pollRequest.statuses` | Statuses to index (e.g., `NEW_ITEM`). | All | Use different traversers for different statuses. |

## SDK timeouts or interrupts

If you experience timeouts when uploading large files, increase the timeout using `traverser.timeout=seconds` (default is 60 seconds). You can also increase API request timeouts:

| Parameter | Description | Default |
| --- | --- | --- |
| `indexingService.connectTimeoutSeconds` | Connect timeout for API requests. | 120s |
| `indexingService.readTimeoutSeconds` | Read timeout for API requests. | 120s |
