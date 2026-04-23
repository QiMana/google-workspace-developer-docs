---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/serving/SearchTestUtils
root: workspace
fetched_at: 2026-04-23T15:27:01.605Z
---

# SearchTestUtils

Utility methods to test that indexed items are served correctly.

### Public Constructor Summary

[SearchTestUtils](./SearchTestUtils.md#SearchTestUtils(com.google.enterprise.cloudsearch.sdk.serving.SearchHelper)) ([SearchHelper](./SearchHelper.md) searchHelper)

### Public Method Summary

| static [SearchHelper](./SearchHelper.md) | [getSearchHelper](./SearchTestUtils.md#getSearchHelper(java.lang.String[],%20java.lang.String,%20java.util.Optional%3Cjava.lang.String%3E)) (String\[\] authInfo, String applicationId, Optional<String> rootUrl)  Utility method to return SearchHelper object. |
| --- | --- |
| void | [waitUntilItemNotServed](./SearchTestUtils.md#waitUntilItemNotServed(java.lang.String,%20java.lang.String)) (String itemId, String query) |
| void | [waitUntilItemServed](./SearchTestUtils.md#waitUntilItemServed(java.lang.String,%20java.lang.String)) (String itemId, String query) |

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

#### public SearchTestUtils (SearchHelper searchHelper)

##### Parameters

| searchHelper |  |
| --- | --- |

## Public Methods

#### public static SearchHelper getSearchHelper (String\[\] authInfo, String applicationId, Optional<String> rootUrl)

Utility method to return SearchHelper object.

##### Parameters

| authInfo | string array containing userEmail of the user to client secrets file, credentialsDirectory path containing the StoredCredential file and clientSecrets path to the client secrets JSON file |
| --- | --- |
| applicationId | Id of the serving application |
| rootUrl | URL of the Indexing API |

##### Throws

| IOException |  |
| --- | --- |
| GeneralSecurityException |  |

#### public void waitUntilItemNotServed (String itemId, String query)

##### Parameters

| itemId |  |
| --- | --- |
| query |  |

##### Throws

| IOException |  |
| --- | --- |

#### public void waitUntilItemServed (String itemId, String query)

##### Parameters

| itemId |  |
| --- | --- |
| query |  |

##### Throws

| IOException |  |
| --- | --- |
