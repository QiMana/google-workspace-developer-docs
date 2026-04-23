---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadService
root: workspace
fetched_at: 2026-04-23T15:26:40.512Z
---

# ContentUploadService

Known Indirect Subclasses

[ContentUploadServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadServiceImpl)

Service for uploading media content using Google Cloud Search ByteStream API.

### Public Method Summary

| abstract ListenableFuture<Void> | [uploadContent](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadService#uploadContent\(java.lang.String,%20com.google.api.client.http.AbstractInputStreamContent\)) (String resourceName, AbstractInputStreamContent content)  Uploads `AbstractInputStreamContent` content for specified resource name obtained using the Cloud Search upload method. |
| --- | --- |

### Inherited Method Summary

From interface com.google.common.util.concurrent.Service

| abstract void | addListener(Service.Listener arg0, Executor arg1) |
| --- | --- |
| abstract void | awaitRunning() |
| abstract void | awaitRunning(long arg0, TimeUnit arg1) |
| abstract void | awaitTerminated(long arg0, TimeUnit arg1) |
| abstract void | awaitTerminated() |
| abstract Throwable | failureCause() |
| abstract boolean | isRunning() |
| abstract Service | startAsync() |
| abstract Service.State | state() |
| abstract Service | stopAsync() |

## Public Methods

#### public abstract ListenableFuture<Void> uploadContent (String resourceName, AbstractInputStreamContent content)

Uploads `AbstractInputStreamContent` content for specified resource name obtained using the Cloud Search upload method.

##### Parameters

| resourceName | resource name for content to be uploaded. |
| --- | --- |
| content | `AbstractInputStreamContent` to upload |

##### Returns

- `ListenableFuture` representing upload result

##### Throws

| IOException | if request fails |
| --- | --- |
