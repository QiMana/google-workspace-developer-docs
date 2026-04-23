---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDocError
root: workspace
fetched_at: 2026-04-23T15:26:50.844Z
---

# RepositoryDocError

`ApiOperation` to push repository error while processing an item from a content repository.

### Public Constructor Summary

[RepositoryDocError](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDocError#RepositoryDocError\(java.lang.String,%20com.google.enterprise.cloudsearch.sdk.RepositoryException\)) (String itemId, [RepositoryException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RepositoryException) exception)

### Public Method Summary

| List<GenericJson> | [execute](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDocError#execute\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService\)) ([IndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService) service)  Executes the specific API operation for the implemented class. |
| --- | --- |

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

## Public Constructors

#### public RepositoryDocError (String itemId, RepositoryException exception)

##### Parameters

| itemId |  |
| --- | --- |
| exception |  |

## Public Methods

#### public List<GenericJson> execute (IndexingService service)

Executes the specific API operation for the implemented class.

##### Parameters

| service | the `IndexingService` instance on which to perform the action |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
| InterruptedException |  |
