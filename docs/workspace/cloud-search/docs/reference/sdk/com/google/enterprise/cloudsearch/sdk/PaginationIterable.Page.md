---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable.Page
root: workspace
fetched_at: 2026-04-23T15:26:28.352Z
---

# PaginationIterable.Page

Represents set of items and optional continuation token to fetch additional items.

### Public Constructor Summary

[PaginationIterable.Page](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/PaginationIterable.Page#PaginationIterable.Page\(java.util.List%3CT%3E,%20java.util.Optional%3CQ%3E\)) (List<T> results, Optional<Q> nextPageToken)

Creates `PaginationIterable.Page` with given set of items and continuation token

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

#### public PaginationIterable.Page (List<T> results, Optional<Q> nextPageToken)

Creates `PaginationIterable.Page` with given set of items and continuation token

##### Parameters

| results | set of items part of current page |
| --- | --- |
| nextPageToken | optional continuation token to fetch next page |
