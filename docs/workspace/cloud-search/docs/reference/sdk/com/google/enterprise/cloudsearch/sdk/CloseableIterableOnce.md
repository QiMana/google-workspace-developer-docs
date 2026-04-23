---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CloseableIterableOnce
root: workspace
fetched_at: 2026-04-23T15:26:25.356Z
---

# CloseableIterableOnce

A that can be iterated over at most once. Additional calls to `iterator()` will throw an `IllegalStateException`.

This class does not override `Object.equals`.

### Public Constructor Summary

[CloseableIterableOnce](./CloseableIterableOnce.md#CloseableIterableOnce(java.util.Iterator%3CT%3E)) (Iterator<T> iterator)

Constructs an instance wrapping the given iterator.

### Public Method Summary

| void | [close](./CloseableIterableOnce.md#close()) ()  Closes any resources associated with this iterator. |
| --- | --- |
| Iterator<T> | [iterator](./CloseableIterableOnce.md#iterator()) ()  Gets the wrapped iterator on the first call, and throws an exception on all subsequent calls. |

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

| abstract void | ()  Performs any actions necessary to stop accessing the repository, such as closing the connection. |
| --- | --- |

From interface java.lang.Iterable

| void | forEach(Consumer<? super T> arg0) |
| --- | --- |
| abstract Iterator<T> | iterator() |
| Spliterator<T> | spliterator() |

From interface java.lang.AutoCloseable

| abstract void | close() |
| --- | --- |

## Public Constructors

#### public CloseableIterableOnce (Iterator<T> iterator)

Constructs an instance wrapping the given iterator.

##### Parameters

| iterator | the iterator to wrap |
| --- | --- |

##### Throws

| NullPointerException | if `iterator` is `null` |
| --- | --- |

## Public Methods

#### public void close ()

Closes any resources associated with this iterator. This implementation invalidates the iterator.

#### public Iterator<T> iterator ()

Gets the wrapped iterator on the first call, and throws an exception on all subsequent calls.

##### Returns

- the wrapped iterator on the first call

##### Throws

| IllegalStateException | if this method has been called on this instance before |
| --- | --- |
