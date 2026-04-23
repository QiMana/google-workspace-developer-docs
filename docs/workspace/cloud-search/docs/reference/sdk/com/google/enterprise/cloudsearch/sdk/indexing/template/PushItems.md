---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems
root: workspace
fetched_at: 2026-04-23T15:26:50.647Z
---

# PushItems

`ApiOperation` to push `Item` objects to the Cloud Search queue.

This object calls `push(String, PushItem)`. The `Repository` can return this operation to push items from the data repository.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.Builder">PushItems.Builder</a></td><td width="100%">Builder for creating an instance of <code>PushItems</code> operation</td></tr></tbody></table>

### Public Method Summary

| boolean | [equals](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems#equals\(java.lang.Object\)) (Object other) |
| --- | --- |
| List<GenericJson> | [execute](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems#execute\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService\)) ([IndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService) service)  Executes the specific API operation for the implemented class. |
| int | [hashCode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems#hashCode\(\)) () |

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

From interface [com.google.enterprise.cloudsearch.sdk.indexing.template.ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation)

| abstract List<GenericJson> | [execute](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation#execute\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService\)) ([IndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService) service)  Executes the specific API operation for the implemented class. |
| --- | --- |
| List<GenericJson> | [execute](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation#execute\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService,%20java.util.Optional%3Cjava.util.function.Consumer%3Ccom.google.enterprise.cloudsearch.sdk.indexing.template.ApiOperation%3E%3E\)) ([IndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService) service, Optional<Consumer< [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) >> operationModifier)  Executes the specific API operation for the implemented class. |

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
