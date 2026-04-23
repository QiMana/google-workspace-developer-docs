---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryContext
root: workspace
fetched_at: 2026-04-23T15:26:52.111Z
---

# RepositoryContext

Context object to enable the to make asynchronous calls to the Cloud Search SDK.

Normally the SDK initiates all data repository access based on its traversal scheduling methods. If the data repository supports automatic document modification detection, then this context object is used by the to perform updates asynchronously to the scheduled traversal calls.

This context object is created by the template traversal connectors `FullTraversalConnector` and `ListingConnector` during initialization. The connector passes the context to the method. The context is then saved for use when the data repository reports a document change.

### Public Method Summary

| [DefaultAcl.DefaultAclMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.DefaultAclMode) | [getDefaultAclMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryContext#getDefaultAclMode\(\)) ()  Gets `DefaultAcl.DefaultAclMode` as configured in connector configuration. |
| --- | --- |
| ListenableFuture<List<GenericJson>> | [postApiOperationAsync](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryContext#postApiOperationAsync\(com.google.enterprise.cloudsearch.sdk.indexing.template.ApiOperation\)) ([ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) operation)  Posts an `ApiOperation` from the asynchronously. |
| void | [postAsyncOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryContext#postAsyncOperation\(com.google.enterprise.cloudsearch.sdk.indexing.template.AsyncApiOperation\)) ([AsyncApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/AsyncApiOperation) operation)  *This method is deprecated. Use `postApiOperationAsync(ApiOperation)`* |

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

#### public DefaultAcl.DefaultAclMode getDefaultAclMode ()

Gets `DefaultAcl.DefaultAclMode` as configured in connector configuration.

##### Returns

- `DefaultAcl.DefaultAclMode` as configured in connector configuration.

#### public ListenableFuture<List<GenericJson>> postApiOperationAsync (ApiOperation operation)

Posts an `ApiOperation` from the asynchronously.

This is the call back method for data repository document modification detection.

Sample usage:

```
public MyRepository implements Repository {
  @Override
  public void init(RepositoryContext context) {
    this.context = context;
  }

  private void onDocumentRemoved(String docId) {
    ApiOperation operation = ApiOperations.deleteItem(docId);

    Futures.addCallback(
        this.context.postApiOperationAsync(operation),
        new FutureCallback<List<GenericJson>>() {
          @Override
          public void onSuccess(@Nullable List<GenericJson> result) {
            // Acking logic.
          }

          @Override
          public void onFailure(Throwable t) {
            // Error handling.
          }
        },
        MoreExecutors.directExecutor());
  }

  // other implemented methods
}
```

##### Parameters

| operation |  |
| --- | --- |

#### public void postAsyncOperation (AsyncApiOperation operation)

**This method is deprecated.**  
Use `postApiOperationAsync(ApiOperation)`

Posts an `AsyncApiOperation` from the .

This is the call back method for data repository document modification detection. Sample usage is detailed in the `AsyncApiOperation` documentation.

##### Parameters

| operation |  |
| --- | --- |
