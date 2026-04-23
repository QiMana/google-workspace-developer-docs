---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable
root: workspace
fetched_at: 2026-04-23T15:26:24.922Z
---

# CheckpointCloseableIterable

Known Indirect Subclasses

[CheckpointCloseableIterableImpl](./CheckpointCloseableIterableImpl.md) <T>

A `CloseableIterable` that supports pagination while traversing a repository or incremental changes. An implementation can optionally break a large traversal process into smaller pieces, using checkpoints to track progress, and returning `true` from `hasMore()` to indicate more objects are available.

Refer to `CheckpointCloseableIterableImpl` for an implementation.

### Public Method Summary

| abstract byte\[\] | [getCheckpoint](./CheckpointCloseableIterable.md#getCheckpoint()) ()  Get current checkpoint value. |
| --- | --- |
| abstract boolean | [hasMore](./CheckpointCloseableIterable.md#hasMore()) ()  Flag to indicate if more items are available to traverse beyond current set of items returned as part of `Iterable`. |

### Inherited Method Summary

From interface [com.google.enterprise.cloudsearch.sdk.CloseableIterable](./CloseableIterable.md)

| abstract void | [close](./CloseableIterable.md#close()) ()  Performs any actions necessary to stop accessing the repository, such as closing the connection. |
| --- | --- |

From interface java.lang.Iterable

| void | forEach(Consumer<? super T> arg0) |
| --- | --- |
| abstract Iterator<T> | iterator() |
| Spliterator<T> | spliterator() |

From interface java.lang.AutoCloseable

| abstract void | close() |
| --- | --- |

## Public Methods

#### public abstract byte\[\] getCheckpoint ()

Get current checkpoint value. Framework is expected to call this method only after iterating through all objects available.

##### Returns

- checkpoint value to save

##### Throws

| RuntimeException | if computation of checkpoint value fails. |
| --- | --- |

#### public abstract boolean hasMore ()

Flag to indicate if more items are available to traverse beyond current set of items returned as part of `Iterable`. Framework is expected to call this method only after iterating through all objects available.

##### Returns

- True if more objects are available for processing after current batch. False if no more objects available for traversal.
