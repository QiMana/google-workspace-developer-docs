---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchItemRetriever
root: workspace
fetched_at: 2026-04-23T15:26:37.872Z
---

# BatchItemRetriever

Connector specific implementation for handling a batch of `Item` instances from `PollItemsResponse`.

This interface is used by connectors implementing a listing traversal strategy. During `init(T)`, the listing connector can register one or more `BatchItemRetriever` instances using `registerTraverser(TraverserConfiguration)`. After `init(T)`, is executed, the SDK initializes worker threads to handle polled items.

### Public Method Summary

| abstract void | [processBatch](./BatchItemRetriever.md#processBatch(java.util.List%3Ccom.google.api.services.cloudsearch.v1.model.Item%3E)) (List<Item> items)  Retrieves content and metadata for a supplied batch of `Item` instances. |
| --- | --- |

## Public Methods

#### public abstract void processBatch (List<Item> items)

Retrieves content and metadata for a supplied batch of `Item` instances.

This method should provide each document's content, structured data, and metadata. The item's `getHash()`, `getHash()`, and/or `getHash()` may be provided to allow the Cloud Search queue to automatically track document changes during the next traversal.

If the connector implements a graph traversal strategy to navigate a hierarchical repository, this method should also push `PushItem` objects for any child documents when the item is a repository container.

##### Parameters

| items | batch of items to process |
| --- | --- |

##### Throws

| IOException | on errors retrieving the document's data |
| --- | --- |
| InterruptedException | on IO operation errors |
