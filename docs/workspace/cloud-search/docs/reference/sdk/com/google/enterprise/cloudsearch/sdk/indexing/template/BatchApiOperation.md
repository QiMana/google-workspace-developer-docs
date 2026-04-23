---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/BatchApiOperation
root: workspace
fetched_at: 2026-04-23T15:26:49.680Z
---

# BatchApiOperation

Container for a sequence of `ApiOperation` objects.

The `Repository` can return this object to perform multiple operations when required by the connector. This object calls the `IndexingService` object for each of its contained operations.

For example, if a `getDoc(com.google.api.services.cloudsearch.v1.model.Item)` method call determines that the requested document has some of its child documents missing from the data repository. A delete operation for each of these children can be concurrently sent in a batch operation along with the requested document's update operation.

**This class implements `Iterable`, but the `iterator` and `equals` methods both exhaust the iterator and should only be used by tests.**

### Public Method Summary

| boolean | [equals](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/BatchApiOperation#equals\(java.lang.Object\)) (Object o)  Indicates whether another object is also a `BatchApiOperation` and iterates over the same objects. |
| --- | --- |
| List<GenericJson> | [execute](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/BatchApiOperation#execute\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService\)) ([IndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService) service)  Executes the specific API operation for the implemented class. |
| List<GenericJson> | [execute](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/BatchApiOperation#execute\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService,%20java.util.Optional%3Cjava.util.function.Consumer%3Ccom.google.enterprise.cloudsearch.sdk.indexing.template.ApiOperation%3E%3E\)) ([IndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService) service, Optional<Consumer< [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) >> operationModifier)  Executes the specific API operation for the implemented class. |
| int | [hashCode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/BatchApiOperation#hashCode\(\)) ()  Gets a hash code for this object. |
| Iterator< [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) > | [iterator](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/BatchApiOperation#iterator\(\)) ()  Gets an iterator over the `ApiOperation` s. |

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

From interface java.lang.Iterable

| void | forEach(Consumer<? super T> arg0) |
| --- | --- |
| abstract Iterator< [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) > | iterator() |
| Spliterator< [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) > | spliterator() |

## Public Methods

#### public boolean equals (Object o)

Indicates whether another object is also a `BatchApiOperation` and iterates over the same objects. This implementation exhausts the iterators of both objects, and should only be used by tests.

##### Parameters

| o |  |
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

#### public List<GenericJson> execute (IndexingService service, Optional<Consumer<ApiOperation>> operationModifier)

Executes the specific API operation for the implemented class.

This method may change without notice in future releases.

##### Parameters

| service | the `IndexingService` instance on which to perform the action |
| --- | --- |
| operationModifier | method to be applied to the operation before calling `execute(IndexingService)` |

##### Throws

| IOException |  |
| --- | --- |
| InterruptedException |  |

#### public int hashCode ()

Gets a hash code for this object. This implementation always returns the same value, in order to remain consistent with `equals(Object)` without exhausting the iterator.

##### Returns

- a fixed hash code

#### public Iterator<ApiOperation> iterator ()

Gets an iterator over the `ApiOperation` s. This implementation exhausts the iterator, and should only be used by tests.

##### Returns

- an iterator on the first call

##### Throws

| IllegalStateException | if this method has been called on this instance before |
| --- | --- |
