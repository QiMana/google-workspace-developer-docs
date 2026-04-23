---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/serving/SearchHelper
root: workspace
fetched_at: 2026-04-23T15:27:00.097Z
---

# SearchHelper

Helper class to serving for items indexed by connectors. This class is used to verify that indexed items are served correctly, something that is particularly useful to verify that ACLs are set correctly by connectors and the SDK. Sample usage:

```
SearchAuthInfo userAuthInfo =
    new SearchAuthInfo(clientSecrets, credentialsDirectory, userEmail);
SearchHelper searchHelper = SearchHelper.createSearchHelper(
    userAuthInfo,
    searchApplicationId,
    Optional.of(rootUrl));
SearchResponse response = searchHelper.serving(query);
for (SearchResult result : response.getResults()) {
  // do something with each result
}
```

### Public Method Summary

| static [SearchHelper](./SearchHelper.md) | [createSearchHelper](./SearchHelper.md#createSearchHelper(com.google.enterprise.cloudsearch.sdk.serving.SearchAuthInfo,%20java.lang.String,%20java.util.Optional%3Cjava.lang.String%3E)) ([SearchAuthInfo](./SearchAuthInfo.md) searchAuthInfo, String searchApplicationId, Optional<String> rootUrl)  Factory method for `SearchHelper` objects. |
| --- | --- |
| static void | [main](./SearchHelper.md#main(java.lang.String[])) (String\[\] args) |
| SearchResponse | [search](./SearchHelper.md#search(java.lang.String)) (String query) |

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

## Public Methods

#### public static SearchHelper createSearchHelper (SearchAuthInfo searchAuthInfo, String searchApplicationId, Optional<String> rootUrl)

Factory method for `SearchHelper` objects.

##### Parameters

| searchAuthInfo | object containing the info to authenticate the impersonated user |
| --- | --- |
| searchApplicationId | ID of the serving application linked to the data sourced containing the items to serving (this is can be obtained from the Admin console) |
| rootUrl | URL of the Indexing API |

##### Throws

| GeneralSecurityException |  |
| --- | --- |
| IOException |  |

#### public static void main (String\[\] args)

##### Parameters

| args |  |
| --- | --- |

##### Throws

| GeneralSecurityException |  |
| --- | --- |
| IOException |  |

#### public SearchResponse search (String query)

##### Parameters

| query |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
