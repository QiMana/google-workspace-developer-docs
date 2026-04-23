---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder
root: workspace
fetched_at: 2026-04-23T15:26:25.125Z
---

# CheckpointCloseableIterableImpl.Builder

### Public Constructor Summary

|  | [CheckpointCloseableIterableImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder#CheckpointCloseableIterableImpl.Builder\(com.google.enterprise.cloudsearch.sdk.CheckpointCloseableIterable%3CT%3E\)) ([CheckpointCloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable) <T> delegate)  Constructs a builder that clones the given `CheckpointCloseableIterable`. |
| --- | --- |
|  | [CheckpointCloseableIterableImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder#CheckpointCloseableIterableImpl.Builder\(com.google.enterprise.cloudsearch.sdk.CloseableIterable%3CT%3E\)) ([CloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CloseableIterable) <T> delegate)  Constructs a `CheckpointCloseableIterableImpl.Builder` that wraps given `CloseableIterable` |
|  | [CheckpointCloseableIterableImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder#CheckpointCloseableIterableImpl.Builder\(java.util.Iterator%3CT%3E\)) (Iterator<T> delegate)  Constructs a `CheckpointCloseableIterableImpl.Builder` that wraps given `Iterator` |
|  | [CheckpointCloseableIterableImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder#CheckpointCloseableIterableImpl.Builder\(java.util.Collection%3CT%3E\)) (Collection<T> operations)  Constructs a `CheckpointCloseableIterableImpl.Builder` that wraps given collection. |

### Public Method Summary

| [CheckpointCloseableIterableImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl) <T> | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder#build\(\)) () |
| --- | --- |
| [Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder) <T> | [setCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder#setCheckpoint\(byte[]\)) (byte\[\] checkpoint)  Sets checkpoint to be committed after processing of all items returned in current iterable. |
| [Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder) <T> | [setCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder#setCheckpoint\(java.util.function.Supplier%3Cbyte[]%3E\)) (Supplier<byte\[\]> checkpoint)  Sets `Supplier` for checkpoint to be committed after processing of all items. |
| [Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder) <T> | [setHasMore](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder#setHasMore\(java.util.function.Supplier%3Cjava.lang.Boolean%3E\)) (Supplier<Boolean> hasMore)  Sets `Supplier` for flag to indicate if more items are available for processing beyond items returned in current `Iterable`. |
| [Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder) <T> | [setHasMore](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder#setHasMore\(boolean\)) (boolean hasMore)  Sets flag to indicate if more items are available for processing beyond items returned in current `Iterable`. |

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

#### public CheckpointCloseableIterableImpl.Builder

Constructs a builder that clones the given `CheckpointCloseableIterable`. This constructor should rarely be needed, but exists to avoid hard-to-debug errors if the `CloseableIterable` overload were used instead, since that would ignore the checkpoint and more items flag.

Changes to `delegate` are reflected in the constructed `CheckpointCloseableIterable` by default, unless the `setCheckpoint(byte[])` or `setHasMore(boolean)` methods are called on this builder.

##### Parameters

| delegate |  |
| --- | --- |

#### public CheckpointCloseableIterableImpl.Builder (CloseableIterable<T> delegate)

Constructs a `CheckpointCloseableIterableImpl.Builder` that wraps given `CloseableIterable`

##### Parameters

| delegate |  |
| --- | --- |

#### public CheckpointCloseableIterableImpl.Builder (Iterator<T> delegate)

Constructs a `CheckpointCloseableIterableImpl.Builder` that wraps given `Iterator`

##### Parameters

| delegate |  |
| --- | --- |

#### public CheckpointCloseableIterableImpl.Builder (Collection<T> operations)

Constructs a `CheckpointCloseableIterableImpl.Builder` that wraps given collection.

##### Parameters

| operations |  |
| --- | --- |

## Public Methods

#### build ()

#### public Builder<T> setCheckpoint (byte\[\] checkpoint)

Sets checkpoint to be committed after processing of all items returned in current iterable.

##### Parameters

| checkpoint | to be committed after processing of all items. |
| --- | --- |

#### public Builder<T> setCheckpoint (Supplier<byte\[\]> checkpoint)

Sets `Supplier` for checkpoint to be committed after processing of all items. `get()` is invoked only after iterating over all items.

##### Parameters

| checkpoint | to be committed after processing of all items. |
| --- | --- |

#### public Builder<T> setHasMore (Supplier<Boolean> hasMore)

Sets `Supplier` for flag to indicate if more items are available for processing beyond items returned in current `Iterable`. `get()` is invoked only after iterating over all items.

##### Parameters

| hasMore | flag to indicate if more items are available for processing. |
| --- | --- |

#### public Builder<T> setHasMore (boolean hasMore)

Sets flag to indicate if more items are available for processing beyond items returned in current `Iterable`.

##### Parameters

| hasMore | flag to indicate if more items are available for processing. |
| --- | --- |
