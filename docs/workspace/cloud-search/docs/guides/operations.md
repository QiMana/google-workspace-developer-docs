---
source: https://developers.google.com/workspace/cloud-search/docs/guides/operations
root: workspace
fetched_at: 2026-04-23T15:26:10.227Z
---

# Handle revisions after manual deletes

When Google Cloud Search receives a request to delete an item, it doesn't immediately remove the entire item. Instead, Cloud Search performs a *soft delete* by marking the item as deleted and removing a subset of information, such as ACLs, content, and metadata. Other information, like the item version, is retained.

If a reindexing request provides a version greater than the existing value while the item is in a soft delete state, Cloud Search restores the item.

Cloud Search keeps an item marked as deleted for 7-10 days before performing a *hard delete* to permanently remove it. After a hard delete, the item ceases to exist and its version number no longer refers to it.

## Maintain consistent item versions

Your content connector should handle item versioning. However, if you delete an item outside of your connector logic using [`items.delete`](../reference/rest/v1/indexing.datasources.items/delete.md), ensure successful reindexing by doing one of the following:

- Reindex your content *after* the hard delete (7-10 days).
- When manually deleting an item, use the actual item version obtained using [`items.get`](../reference/rest/v1/indexing.datasources.items/get.md).

Failure to follow these suggestions results in indexing errors.
