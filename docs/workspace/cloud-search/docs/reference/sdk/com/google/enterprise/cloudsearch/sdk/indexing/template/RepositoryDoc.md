---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc
root: workspace
fetched_at: 2026-04-23T15:26:51.417Z
---

# RepositoryDoc

Generic object for a single document in a repository.

This is a type of `ApiOperation` that performs an `indexItem(Item, RequestMode)` request. This single request can actually contain multiple requests if the data repository is hierarchical.

Sample usage:

```
Item item = ... // create an Item object
 ByteArrayContent content = ... // create item content, using HTML content for this example
 String contentHash = ... // optional content hash value
 RepositoryDoc.Builder builder = new RepositoryDoc.Builder()
     .setItem(item)
     .setContent(content, contentHash, ContentFormat.HTML)
     .setRequestMode(RequestMode.SYNCHRONOUS);
 // if hierarchical, add children of this document
 List<String> childIds = ... // retrieve all child IDs
 for (childId : childIds) {
   PushItem pushItem = ... // populate a push item for this ID
   builder.addChildId(childId, pushItem);
 }
 RepositoryDoc document = builder.build();
 // now the document is ready for use, typically as a return value from a Repository method
```

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc.Builder">RepositoryDoc.Builder</a></td><td width="100%"></td></tr></tbody></table>

### Public Method Summary

| boolean | [equals](./RepositoryDoc.md#equals(java.lang.Object)) (Object other) |
| --- | --- |
| List<GenericJson> | [execute](./RepositoryDoc.md#execute(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService)) ([IndexingService](../IndexingService.md) service)  Performs the indexing service request to index the document. |
| Map<String, PushItem> | [getChildIds](./RepositoryDoc.md#getChildIds()) ()  Gets child items to be pushed. |
| AbstractInputStreamContent | [getContent](./RepositoryDoc.md#getContent()) ()  Gets the content of this repository document. |
| [IndexingService.ContentFormat](../IndexingService.ContentFormat.md) | [getContentFormat](./RepositoryDoc.md#getContentFormat()) ()  Gets `IndexingService.ContentFormat` for indexable content. |
| String | [getContentHash](./RepositoryDoc.md#getContentHash()) ()  Gets the hash value of this repository document's content. |
| Map<String, [Acl](../Acl.md) > | [getFragments](./RepositoryDoc.md#getFragments()) ()  Gets additional `Acl` fragments to be created. |
| Item | [getItem](./RepositoryDoc.md#getItem()) ()  Gets the repository document converted into an `Item`. |
| [IndexingService.RequestMode](../IndexingService.RequestMode.md) | [getRequestMode](./RepositoryDoc.md#getRequestMode()) ()  Gets `IndexingService.RequestMode` to be used for executing indexing requests. |
| int | [hashCode](./RepositoryDoc.md#hashCode()) () |
| String | [toString](./RepositoryDoc.md#toString()) () |

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

Performs the indexing service request to index the document.

In addition to updating the `Item`, the children (if any) are pushed and ACL fragments (possibly representing a directory in a hierarchical data repository) are created and updated.

##### Parameters

| service | the indexing service used to execute requests |
| --- | --- |

##### Returns

- results of the requests

##### Throws

| IOException | on SDK upload errors |
| --- | --- |
| InterruptedException | on program interruption |

#### public Map<String, PushItem> getChildIds ()

Gets child items to be pushed.

##### Returns

- child items to be pushed.

#### public AbstractInputStreamContent getContent ()

Gets the content of this repository document.

##### Returns

- document content

#### public IndexingService.ContentFormat getContentFormat ()

Gets `IndexingService.ContentFormat` for indexable content.

##### Returns

- `IndexingService.ContentFormat` for indexable content.

#### public String getContentHash ()

Gets the hash value of this repository document's content.

##### Returns

- document's content hash value

#### public Map<String, Acl> getFragments ()

Gets additional `Acl` fragments to be created.

##### Returns

- additional `Acl` fragments to be created.

#### public Item getItem ()

Gets the repository document converted into an `Item`.

##### Returns

- a unique document ID

#### public IndexingService.RequestMode getRequestMode ()

Gets `IndexingService.RequestMode` to be used for executing indexing requests.

##### Returns

- `IndexingService.RequestMode` to be used for executing indexing requests.
