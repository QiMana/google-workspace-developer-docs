---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/TestUtils
root: workspace
fetched_at: 2026-04-23T15:26:45.782Z
---

# TestUtils

Utility methods for integration tests for the indexing SDK.

### Public Constructor Summary

[TestUtils](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/TestUtils#TestUtils\(com.google.enterprise.cloudsearch.sdk.indexing.CloudSearchService\)) ([CloudSearchService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService) service)

### Public Method Summary

| void | [waitUntilDeleted](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/TestUtils#waitUntilDeleted\(java.lang.String,%20org.awaitility.Duration,%20org.awaitility.Duration\)) (String itemId, Duration timeout, Duration pollInterval)  Waits for the item with the given ID to be deleted. |
| --- | --- |
| void | [waitUntilDeleted](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/TestUtils#waitUntilDeleted\(java.lang.String\)) (String itemId)  Waits for the item with the given ID to be deleted. |
| void | [waitUntilEqual](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/TestUtils#waitUntilEqual\(java.lang.String,%20com.google.api.services.cloudsearch.v1.model.Item\)) (String itemId, Item expectedItem)  Waits until the item with the given ID is equal to the expected item. |

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

#### public TestUtils (CloudSearchService service)

##### Parameters

| service |  |
| --- | --- |

## Public Methods

#### public void waitUntilDeleted (String itemId, Duration timeout, Duration pollInterval)

Waits for the item with the given ID to be deleted.

##### Parameters

| itemId |  |
| --- | --- |
| timeout |  |
| pollInterval |  |

##### Throws

| ConditionTimeoutException | if the item is not deleted before the timeout |
| --- | --- |

#### public void waitUntilDeleted (String itemId)

Waits for the item with the given ID to be deleted.

##### Parameters

| itemId |  |
| --- | --- |

##### Throws

| ConditionTimeoutException | if the item is not deleted before the timeout |
| --- | --- |

#### public void waitUntilEqual (String itemId, Item expectedItem)

Waits until the item with the given ID is equal to the expected item.

##### Parameters

| itemId |  |
| --- | --- |
| expectedItem |  |

##### Throws

| ConditionTimeoutException | \- if the items are not equal before the timeout expires. |
| --- | --- |
