---
source: https://developers.google.com/workspace/cloud-search/docs/guides/queues
root: workspace
fetched_at: 2026-04-23T15:26:10.192Z
---

# The Google Cloud Search Indexing Queues

The Connector SDK and Cloud Search API support creating *Cloud Search Indexing Queues*. Use these queues to:

- Maintain per-document state (status, hashes, etc.) to keep your index in sync.
- Maintain a list of items to be indexed, as discovered during traversal.
- Prioritize items based on their status.
- Maintain state information like checkpoints and change tokens.

A queue is a label assigned to an indexed item (e.g., "default").

## Status and priority

A document's priority depends on its [`ItemStatus`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items#Code) code. Possible codes, in order of priority (highest to lowest), are:

- `ERROR`: The item encountered an asynchronous error and needs reindexing.
- `MODIFIED`: The item was previously indexed but has changed in the repository.
- `NEW_ITEM`: The item is not yet indexed.
- `ACCEPTED`: The item was previously indexed and hasn't changed.

For items with the same status, higher priority goes to those that have been in the queue longest.

## Index a new or changed item

Figure 1 shows the steps to index a new or changed item using an indexing queue. These steps reflect REST API calls; for SDK equivalents, see [Queue operations (Connector SDK)](#SDK).

![Overview of Cloud Search indexing](https://developers.google.com/static/cloud-search/images/architecture-queues-add.png)

Figure 1. Indexing steps to add or update an item

1. The content connector uses [`items.push`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/push) to push metadata and hashes into a queue.
	- If the connector includes a push [`type`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/push#type) or `contentHash`, Cloud Search determines the status.
		- Unknown items receive the `NEW_ITEM` status.
		- Existing items with matching hashes stay `ACCEPTED`.
		- Existing items with different hashes become `MODIFIED`.
2. The connector uses [`items.poll`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/poll) to determine which items to index. Cloud Search returns items in priority order.
3. The connector retrieves items from the repository and builds index API requests.
4. The connector uses [`items.index`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/index_) to index the items. An item enters the `ACCEPTED` state after successful processing.

## Delete an item

The [full-traversal strategy](https://developers.google.com/workspace/cloud-search/docs/guides/content-connector#perform_a_full_traversal) uses two queues to index items and detect deletions. Figure 2 shows the second traversal in this strategy.

![Overview of Cloud Search indexing](https://developers.google.com/static/cloud-search/images/architecture-queues-delete.png)

Figure 2. Deleting items

1. On the initial traversal, the connector pushes items into "queue A" as `NEW_ITEM`. Each item receives label "A."
2. The connector polls queue A and indexes the items.
3. On the second full traversal, the connector pushes items into "queue B."
	- Unknown items receive label "B" and status `NEW_ITEM`.
		- Existing items with matching hashes change their label to "B" and stay `ACCEPTED`.
		- Existing items with different hashes change their label to "B" and become `MODIFIED`.
4. The connector polls queue B and indexes the items.
5. Finally, the connector calls [`deleteQueueItems`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/deleteQueueItems) on queue A. This deletes all previously indexed items that still have label "A."
6. Subsequent traversals swap the roles of the two queues.

## Queue operations (Connector SDK)

Use the [`pushItems`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.Builder) builder to push items. The SDK automatically pulls items from the queue in priority order using the `Repository` class's [`getDoc`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository#getDoc) method.

## Queue operations (REST API)

- To push: use [`Items.push`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/push).
- To poll: use [`Items.poll`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/poll).

You can also use [`Items.index`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/index_) to push items during indexing. These items receive the `ACCEPTED` status automatically.

### Items.push

This method adds IDs to the queue. The [`type`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/push#Type) determines the result. Pushing a new ID adds an entry with `NEW_ITEM` status. The optional payload returns during polling.

Polled items are *reserved* and cannot be returned by other poll calls. Using `Items.push` with `type` set to `NOT_MODIFIED`, `REPOSITORY_ERROR`, or `REQUEUE` *unreserves* the entries.

#### Items.push with hashes

Specify metadata or content hashes in the push request. Cloud Search compares these to stored values. If they mismatch, the entry becomes `MODIFIED`. Mismatched IDs that don't exist become `NEW_ITEM`.

### Items.poll

This method retrieves high-priority entries. Each returned entry is reserved until it times out, is reindexed, or is unreserved using `Items.push`.
