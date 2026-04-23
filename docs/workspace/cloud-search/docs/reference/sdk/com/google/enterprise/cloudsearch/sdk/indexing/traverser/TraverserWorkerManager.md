---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserWorkerManager
root: workspace
fetched_at: 2026-04-23T15:26:54.426Z
---

# TraverserWorkerManager

### Public Method Summary

| static [TraverserWorker](./TraverserWorker.md) | [newWorker](./TraverserWorkerManager.md#newWorker(com.google.enterprise.cloudsearch.sdk.indexing.traverser.TraverserConfiguration,%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService)) ([TraverserConfiguration](./TraverserConfiguration.md) conf, [IndexingService](../IndexingService.md) indexingService) |
| --- | --- |
| static [TraverserWorker](./TraverserWorker.md) | [newWorker](./TraverserWorkerManager.md#newWorker(com.google.enterprise.cloudsearch.sdk.indexing.traverser.TraverserConfiguration,%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService,%20java.util.concurrent.ExecutorService)) ([TraverserConfiguration](./TraverserConfiguration.md) conf, [IndexingService](../IndexingService.md) indexingService, ExecutorService executor) |

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

#### newWorker (TraverserConfiguration conf, IndexingService indexingService)

Each instance creates its own `ExecutorService`.

##### Parameters

| conf | configuration of the worker thread |
| --- | --- |
| indexingService | `IndexingService` instance used for polling items |

#### newWorker (TraverserConfiguration conf, IndexingService indexingService, ExecutorService executor)

An external, shared `ExecutorService` can provide better resource utilization. However, if you use one, the does not handle the executor's shutdown method.

##### Parameters

| conf | configuration of the worker thread |
| --- | --- |
| indexingService | `IndexingService` instance used for polling items |
| executor | the `ExecutorService` that is used by the worker thread but if `null`, the creates its own `ExecutorService` |
