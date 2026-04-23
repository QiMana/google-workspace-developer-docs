---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CloseableIterable
root: workspace
fetched_at: 2026-04-23T15:26:25.216Z
---

# CloseableIterable

Known Indirect Subclasses

Interface that is used to iterate through a set of repository documents.

This interface is useful for repositories that require an explicit call to close access and perform clean-up actions.

### Public Method Summary

| abstract void | [close](./CloseableIterable.md#close()) ()  Performs any actions necessary to stop accessing the repository, such as closing the connection. |
| --- | --- |

### Inherited Method Summary

From interface java.lang.Iterable

| void | forEach(Consumer<? super T> arg0) |
| --- | --- |
| abstract Iterator<T> | iterator() |
| Spliterator<T> | spliterator() |

From interface java.lang.AutoCloseable

| abstract void | close() |
| --- | --- |

## Public Methods

#### public abstract void close ()

Performs any actions necessary to stop accessing the repository, such as closing the connection.
