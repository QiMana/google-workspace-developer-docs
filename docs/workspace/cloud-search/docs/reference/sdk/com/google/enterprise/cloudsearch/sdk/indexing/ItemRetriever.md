---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ItemRetriever
root: workspace
fetched_at: 2026-04-23T15:26:47.640Z
---

# ItemRetriever

Known Indirect Subclasses

[ListingConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector)

Connector specific implementation for handling `Item` from `PollItemsResponse`.

This interface is used by connectors implementing a listing traversal strategy, including the template connector `ListingConnector`.

During `init(T)`, the listing connector typically registers one or more `ItemRetriever` instances using `registerTraverser(TraverserConfiguration)`. After `init(T)` is executed, the SDK initializes worker threads to handle polled items.

### Public Method Summary

| abstract void | [process](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ItemRetriever#process\(com.google.api.services.cloudsearch.v1.model.Item\)) (Item item)  Retrieves content and metadata for the polled `Item`. |
| --- | --- |

## Public Methods

#### public abstract void process (Item item)

Retrieves content and metadata for the polled `Item`.

This method should provide the document's content, structured data, and metadata. The item's `getHash()`, `getHash()`, and/or `getHash()` may be provided to allow the Cloud Search queue to automatically track document changes during the next traversal.

If the connector implements a graph traversal strategy to navigate a hierarchical repository, this method should also push `PushItem` objects for any child documents when the item is a repository container.

This method should be highly parallelizable and support ten or more concurrent calls.

##### Parameters

| item | `Item` object representing the document being sought |
| --- | --- |

##### Throws

| IOException | on errors retrieving the document's data, typically a `RepositoryException` |
| --- | --- |
| InterruptedException | on IO operation errors |
