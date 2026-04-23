---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc.Builder
root: workspace
fetched_at: 2026-04-23T15:26:52.558Z
---

# RepositoryDoc.Builder

### Public Constructor Summary

[RepositoryDoc.Builder](./RepositoryDoc.Builder.md#RepositoryDoc.Builder()) ()

Creates an instance of `RepositoryDoc.Builder`

### Public Method Summary

| [RepositoryDoc.Builder](./RepositoryDoc.Builder.md) | [addChildId](./RepositoryDoc.Builder.md#addChildId(java.lang.String,%20com.google.api.services.cloudsearch.v1.model.PushItem)) (String id, PushItem item)  Adds a child item to be pushed |
| --- | --- |
|  | [build](./RepositoryDoc.Builder.md#build()) () |
| [RepositoryDoc.Builder](./RepositoryDoc.Builder.md) | [setAclFragments](./RepositoryDoc.Builder.md#setAclFragments(java.util.Map%3Cjava.lang.String,%20com.google.enterprise.cloudsearch.sdk.indexing.Acl%3E)) (Map<String, [Acl](../Acl.md) > fragments)  Sets `Acl` fragments to be created. |
| [RepositoryDoc.Builder](./RepositoryDoc.Builder.md) | [setContent](./RepositoryDoc.Builder.md#setContent(com.google.api.client.http.AbstractInputStreamContent,%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.ContentFormat)) (AbstractInputStreamContent content, [IndexingService.ContentFormat](../IndexingService.ContentFormat.md) contentFormat)  Sets the content and content format. |
| [RepositoryDoc.Builder](./RepositoryDoc.Builder.md) | [setContent](./RepositoryDoc.Builder.md#setContent(com.google.api.client.http.AbstractInputStreamContent,%20java.lang.String,%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.ContentFormat)) (AbstractInputStreamContent content, String contentHash, [IndexingService.ContentFormat](../IndexingService.ContentFormat.md) contentFormat)  Sets the content, content hash, and content format. |
| [RepositoryDoc.Builder](./RepositoryDoc.Builder.md) | [setItem](./RepositoryDoc.Builder.md#setItem(com.google.api.services.cloudsearch.v1.model.Item)) (Item item)  Sets item to be indexed. |
| [RepositoryDoc.Builder](./RepositoryDoc.Builder.md) | [setRequestMode](./RepositoryDoc.Builder.md#setRequestMode(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode)) ([IndexingService.RequestMode](../IndexingService.RequestMode.md) requestMode)  Sets `IndexingService.RequestMode` to be used for indexing requests. |

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

#### public RepositoryDoc.Builder ()

Creates an instance of `RepositoryDoc.Builder`

## Public Methods

#### public RepositoryDoc.Builder addChildId (String id, PushItem item)

Adds a child item to be pushed

##### Parameters

| id | for item to be pushed |
| --- | --- |
| item | `PushItem` to be pushed |

#### build ()

#### public RepositoryDoc.Builder setAclFragments (Map<String, Acl> fragments)

Sets `Acl` fragments to be created.

##### Parameters

| fragments | to be created. |
| --- | --- |

#### public RepositoryDoc.Builder setContent (AbstractInputStreamContent content, IndexingService.ContentFormat contentFormat)

Sets the content and content format.

The `content` parameter should use a concrete implementation of `AbstractInputStreamContent` based on the natural source object:

- For `InputStream`, use `InputStreamContent`. For best results, if the length of the content (in bytes) is known without reading the stream, call `setLength` on the `InputStreamContent`.
- For `String` or `byte[]`, use `ByteArrayContent`.
- For existing files, use `FileContent`.

Use this method when the content hash is not being used.

##### Parameters

| content |  |
| --- | --- |
| contentFormat |  |

#### public RepositoryDoc.Builder setContent (AbstractInputStreamContent content, String contentHash, IndexingService.ContentFormat contentFormat)

Sets the content, content hash, and content format.

The `content` parameter should use a concrete implementation of `AbstractInputStreamContent` based on the natural source object:

- For `InputStream`, use `InputStreamContent`. For best results, if the length of the content (in bytes) is known without reading the stream, call `setLength` on the `InputStreamContent`.
- For `String` or `byte[]`, use `ByteArrayContent`.
- For existing files, use `FileContent`.

Use this method when the content hash is being used. The content hash allows the Cloud Search queue to determine whether a document's content has been modified during a subsequent push of the document. This allows the document's queue status to automatically change to a modified state.

##### Parameters

| content |  |
| --- | --- |
| contentHash |  |
| contentFormat |  |

#### public RepositoryDoc.Builder setItem (Item item)

Sets item to be indexed.

##### Parameters

| item | to be indexed. |
| --- | --- |

#### public RepositoryDoc.Builder setRequestMode (IndexingService.RequestMode requestMode)

Sets `IndexingService.RequestMode` to be used for indexing requests.

##### Parameters

| requestMode | to be used for indexing requests. |
| --- | --- |
