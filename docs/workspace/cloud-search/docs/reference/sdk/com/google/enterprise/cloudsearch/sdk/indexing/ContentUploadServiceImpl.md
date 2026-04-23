---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadServiceImpl
root: workspace
fetched_at: 2026-04-23T15:26:41.335Z
---

# ContentUploadServiceImpl

Document content uploads normally occur "in-line" as part of the item's upload request. However, when the content is large, this upload service can optimize content uploads by separating the content from the item's upload request. This results in a "two-step" process for indexing a document into Cloud Search.

The deterministic threshold for "in-line" versus using this service is settable using the configuration parameter . The SDK default byte value is .

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadServiceImpl.Builder">ContentUploadServiceImpl.Builder</a></td><td width="100%">Builder to create an instance of <code>ContentUploadServiceImpl</code>.</td></tr></tbody></table>

### Field Summary

| public static final Set<String> | [API\_SCOPES](./ContentUploadServiceImpl.md#API_SCOPES) | API scope for uploading content using Cloud Search API. |
| --- | --- | --- |

### Public Method Summary

| ListenableFuture<Void> | [uploadContent](./ContentUploadServiceImpl.md#uploadContent(java.lang.String,%20com.google.api.client.http.AbstractInputStreamContent)) (String resourceName, AbstractInputStreamContent content)  Uploads `AbstractInputStreamContent` content for specified resource name obtained using the Cloud Search upload method. |
| --- | --- |

### Inherited Method Summary

From class com.google.common.util.concurrent.AbstractIdleService

| final void | addListener(Service.Listener arg0, Executor arg1) |
| --- | --- |
| final void | awaitRunning() |
| final void | awaitRunning(long arg0, TimeUnit arg1) |
| final void | awaitTerminated(long arg0, TimeUnit arg1) |
| final void | awaitTerminated() |
| final Throwable | failureCause() |
| final boolean | isRunning() |
| final Service | startAsync() |
| final Service.State | state() |
| final Service | stopAsync() |
| String | toString() |

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

| abstract ListenableFuture<Void> | (String resourceName, AbstractInputStreamContent content)  Uploads `AbstractInputStreamContent` content for specified resource name obtained using the Cloud Search upload method. |
| --- | --- |

## Fields

#### public static final Set<String> API\_SCOPES

API scope for uploading content using Cloud Search API.

## Public Methods

#### public ListenableFuture<Void> uploadContent (String resourceName, AbstractInputStreamContent content)

Uploads `AbstractInputStreamContent` content for specified resource name obtained using the Cloud Search upload method.

##### Parameters

| resourceName | resource name for content to be uploaded. |
| --- | --- |
| content | `AbstractInputStreamContent` to upload |

##### Returns

- `ListenableFuture` representing upload result

##### Throws

| IOException |  |
| --- | --- |
