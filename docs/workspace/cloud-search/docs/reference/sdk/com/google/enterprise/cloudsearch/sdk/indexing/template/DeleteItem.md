---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/DeleteItem
root: workspace
fetched_at: 2026-04-23T15:26:49.022Z
---

# DeleteItem

`ApiOperation` to delete an `Item`.

This object calls `deleteItem(String, byte[], IndexingService.RequestMode)`. The `Repository` can return this operation when the `Item` is no longer available in the data repository.

### Public Method Summary

| boolean | [equals](./DeleteItem.md#equals(java.lang.Object)) (Object other) |
| --- | --- |
| List<GenericJson> | [execute](./DeleteItem.md#execute(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService)) ([IndexingService](../IndexingService.md) service)  Executes the specific API operation for the implemented class. |
| int | [hashCode](./DeleteItem.md#hashCode()) () |

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

From interface [com.google.enterprise.cloudsearch.sdk.indexing.template.ApiOperation](./ApiOperation.md)

| abstract List<GenericJson> | [execute](./ApiOperation.md#execute(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService)) ([IndexingService](../IndexingService.md) service)  Executes the specific API operation for the implemented class. |
| --- | --- |
| List<GenericJson> | [execute](./ApiOperation.md#execute(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService,%20java.util.Optional%3Cjava.util.function.Consumer%3Ccom.google.enterprise.cloudsearch.sdk.indexing.template.ApiOperation%3E%3E)) ([IndexingService](../IndexingService.md) service, Optional<Consumer< [ApiOperation](./ApiOperation.md) >> operationModifier)  Executes the specific API operation for the implemented class. |

## Public Methods

#### public boolean equals (Object other)

##### Parameters

| other |  |
| --- | --- |

#### public List<GenericJson> execute (IndexingService service)

Executes the specific API operation for the implemented class.

##### Parameters

| service | the `IndexingService` instance on which to perform the action |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
| InterruptedException |  |
