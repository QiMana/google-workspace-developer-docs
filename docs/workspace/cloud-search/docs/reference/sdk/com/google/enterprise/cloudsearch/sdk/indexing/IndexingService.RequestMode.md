---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.RequestMode
root: workspace
fetched_at: 2026-04-23T15:26:44.533Z
---

# IndexingService.RequestMode

Request mode for `Item` index and delete requests.

### Inherited Method Summary

From class java.lang.Enum

| final int | compareTo(E arg0) |
| --- | --- |
| int | compareTo(Object arg0) |
| final boolean | equals(Object arg0) |
| final Class<E> | getDeclaringClass() |
| final int | hashCode() |
| final String | name() |
| final int | ordinal() |
| String | toString() |
| static <T extends Enum<T>> T | valueOf(Class<T> arg0, String arg1) |

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

From interface java.lang.Comparable

| abstract int | compareTo(E extends Enum<E> arg0) |
| --- | --- |

## Enum Values

#### public static final IndexingService.RequestMode ASYNCHRONOUS

For changes that are executed after the response is sent back to the caller.

#### public static final IndexingService.RequestMode SYNCHRONOUS

For real-time updates.

#### public static final IndexingService.RequestMode UNSPECIFIED

Priority is not specified in the update request. Leaving priority unspecified results in an update failure.
