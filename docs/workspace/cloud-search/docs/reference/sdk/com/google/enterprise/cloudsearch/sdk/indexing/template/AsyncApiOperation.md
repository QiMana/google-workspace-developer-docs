---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/AsyncApiOperation
root: workspace
fetched_at: 2026-04-23T15:26:49.817Z
---

# AsyncApiOperation

An `ApiOperation` that the `Repository` pushes asynchronously.

The `Repository` can push `AsyncApiOperation` objects using the `EventBus` passed in from its `init(RepositoryContext)` method. Typically, the `Repository` performs on-demand API operations whenever it implements a scheduled or event-driven change-detection mechanism.

The `ListenableFuture` result represents the future result of the operation accessible from `getResult()`.

Sample usage:

```
public MyRepository implements Repository {
 @Override
  public void init(RepositoryContext context) {
    this.context = context;
  }

  private void onDocumentRemoved(String docId) {
    AsyncApiOperation operation = new AsyncApiOperation(ApiOperations.deleteItem(docId));
    this.context.postAsyncOperation(operation);
  }

  // other implemented methods
}
```

### Public Constructor Summary

[AsyncApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/AsyncApiOperation#AsyncApiOperation\(com.google.enterprise.cloudsearch.sdk.indexing.template.ApiOperation\)) ([ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) operation)

Constructs `AsyncApiOperation` to be posted on `postAsyncOperation(AsyncApiOperation)`.

### Public Method Summary

| [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) | [getOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/AsyncApiOperation#getOperation\(\)) ()  Gets `ApiOperation` to be executed. |
| --- | --- |
| ListenableFuture<List<GenericJson>> | [getResult](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/AsyncApiOperation#getResult\(\)) ()  Gets result for `ApiOperation` operation execution. |

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

#### public AsyncApiOperation (ApiOperation operation)

Constructs `AsyncApiOperation` to be posted on `postAsyncOperation(AsyncApiOperation)`.

##### Parameters

| operation | `ApiOperation` to be executed asynchronously. |
| --- | --- |

## Public Methods

#### public ApiOperation getOperation ()

Gets `ApiOperation` to be executed.

##### Returns

- operation to be executed.

#### public ListenableFuture<List<GenericJson>> getResult ()

Gets result for `ApiOperation` operation execution.

##### Returns

- result for `ApiOperation` operation execution.
