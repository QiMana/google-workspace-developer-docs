---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl
root: workspace
fetched_at: 2026-04-23T15:26:24.831Z
---

# CheckpointCloseableIterableImpl

implementation which supports lazy initialization of value and .

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder">CheckpointCloseableIterableImpl.Builder</a> <T></td><td width="100%">Builder object for <code>CheckpointCloseableIterableImpl</code></td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule">CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule</a> <T></td><td width="100%">A <code>TestRule</code> to compare two instances of s.</td></tr></tbody></table>

### Public Method Summary

| void | [close](./CheckpointCloseableIterableImpl.md#close()) ()  Performs any actions necessary to stop accessing the repository, such as closing the connection. |
| --- | --- |
| byte\[\] | [getCheckpoint](./CheckpointCloseableIterableImpl.md#getCheckpoint()) ()  Get current checkpoint value. |
| boolean | [hasMore](./CheckpointCloseableIterableImpl.md#hasMore()) ()  Flag to indicate if more items are available to traverse beyond current set of items returned as part of `Iterable`. |
| Iterator<T> | [iterator](./CheckpointCloseableIterableImpl.md#iterator()) () |

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

| abstract byte\[\] | ()  Get current checkpoint value. |
| --- | --- |
| abstract boolean | ()  Flag to indicate if more items are available to traverse beyond current set of items returned as part of `Iterable`. |

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

#### public void close ()

Performs any actions necessary to stop accessing the repository, such as closing the connection.

#### public byte\[\] getCheckpoint ()

Get current checkpoint value. Framework is expected to call this method only after iterating through all objects available.

##### Returns

- checkpoint value to save

#### public boolean hasMore ()

Flag to indicate if more items are available to traverse beyond current set of items returned as part of `Iterable`. Framework is expected to call this method only after iterating through all objects available.

##### Returns

- True if more objects are available for processing after current batch. False if no more objects available for traversal.
