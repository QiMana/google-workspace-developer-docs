---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule
root: workspace
fetched_at: 2026-04-23T15:26:25.913Z
---

# CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule

A `TestRule` to compare two instances of s. `null` CheckpointCloseableIterable are considered equal. This rule iterates over the `ApiOperation` s before comparing the checkpoint and pagination values.

### Public Method Summary

| Statement | [apply](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule#apply\(org.junit.runners.model.Statement,%20org.junit.runner.Description\)) (Statement base, Description description) |
| --- | --- |
| boolean | [compare](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule#compare\(com.google.enterprise.cloudsearch.sdk.CheckpointCloseableIterable%3CT%3E,%20com.google.enterprise.cloudsearch.sdk.CheckpointCloseableIterable%3CT%3E\)) ([CheckpointCloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable) <T> items1, [CheckpointCloseableIterable](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable) <T> items2) |
| static <T> [CompareCheckpointCloseableIterableRule](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule) <T> | [getCompareRule](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule#getCompareRule\(\)) ()  Gets instance of `CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule`. |

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

From interface org.junit.rules.TestRule

| abstract Statement | apply(Statement arg0, Description arg1) |
| --- | --- |

## Public Methods

#### public Statement apply (Statement base, Description description)

##### Parameters

| base |  |
| --- | --- |
| description |  |

#### public boolean compare

Compares instances of . The comparison exhausts the supplied iterable before comparing checkpoint and hasMore flag.

##### Parameters

| items1 | to compare |
| --- | --- |
| items2 | to compare |

##### Returns

- true if supplied CheckpointCloseableIterable match, false otherwise.

#### public static CompareCheckpointCloseableIterableRule<T> getCompareRule ()

Gets instance of `CheckpointCloseableIterableImpl.CompareCheckpointCloseableIterableRule`.
