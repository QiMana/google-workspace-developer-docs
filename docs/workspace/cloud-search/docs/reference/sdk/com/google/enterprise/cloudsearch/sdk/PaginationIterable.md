---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable
root: workspace
fetched_at: 2026-04-23T15:26:28.252Z
---

# PaginationIterable

`Iterable` which handles pagination for iterating over set of objects.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable.Page">PaginationIterable.Page</a> <T, Q></td><td width="100%">Represents set of items and optional continuation token to fetch additional items.</td></tr></tbody></table>

### Public Constructor Summary

[PaginationIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable#PaginationIterable\(java.util.Optional%3CQ%3E\)) (Optional<Q> startPage)

Creates an instance of `PaginationIterable`

### Public Method Summary

| abstract [Page](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable.Page) <T, Q> | [getPage](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable#getPage\(java.util.Optional%3CQ%3E\)) (Optional<Q> nextPage)  Return next set of objects based on optional pagination token. |
| --- | --- |
| Iterator<T> | [iterator](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable#iterator\(\)) () |

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

From interface java.lang.Iterable

| void | forEach(Consumer<? super T> arg0) |
| --- | --- |
| abstract Iterator<T> | iterator() |
| Spliterator<T> | spliterator() |

## Public Constructors

#### public PaginationIterable (Optional<Q> startPage)

Creates an instance of `PaginationIterable`

##### Parameters

| startPage |  |
| --- | --- |

## Public Methods

#### public abstract Page<T, Q> getPage (Optional<Q> nextPage)

Return next set of objects based on optional pagination token.

##### Parameters

| nextPage | pagination token |
| --- | --- |

##### Returns

- `PaginationIterable.Page` containing next set of objects and optional continuation token.

##### Throws

| IOException | if fetching next set of objects fails |
| --- | --- |
