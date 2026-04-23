---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService
root: workspace
fetched_at: 2026-04-23T15:26:40.992Z
---

# CloudSearchService

Service wrapper for Cloud Search API client. Example usage:

```
CloudSearchService service = new CloudSearchService(serviceAccountKeyPath, sourceId);
Item item = service.getItem(itemName);
```

### Public Constructor Summary

[CloudSearchService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService#CloudSearchService\(java.lang.String,%20java.lang.String,%20java.util.Optional%3Cjava.lang.String%3E\)) (String serviceAccountKeyPath, String sourceId, Optional<String> rootUrl)

### Public Method Summary

| void | [deleteAllItems](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService#deleteAllItems\(\)) ()  Deletes all items available in the datasource. |
| --- | --- |
| Operation | [deleteItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService#deleteItem\(java.lang.String,%20java.lang.String\)) (String itemName, String version) |
| void | [deleteItemsIfExist](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService#deleteItemsIfExist\(java.util.List%3Cjava.lang.String%3E\)) (List<String> itemIds) |
| void | [deleteItemsIfExist](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService#deleteItemsIfExist\(java.lang.String...\)) (String... itemIds)  Deletes items if they exist in the indexing API. |
| Item | [getItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService#getItem\(java.lang.String\)) (String itemName)  Gets an item from indexing service using item name. |
| Schema | [getSchema](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService#getSchema\(\)) () |
| List<Item> | [listItems](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService#listItems\(\)) ()  Gets all items available in data source. |
| static void | [main](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService#main\(java.lang.String[]\)) (String\[\] args)  The purpose of the main method is to explicitly call utility method deleteAllItems(). |

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

#### public CloudSearchService (String serviceAccountKeyPath, String sourceId, Optional<String> rootUrl)

##### Parameters

| serviceAccountKeyPath |  |
| --- | --- |
| sourceId |  |
| rootUrl |  |

##### Throws

| IOException |  |
| --- | --- |
| GeneralSecurityException |  |

## Public Methods

#### public void deleteAllItems ()

Deletes all items available in the datasource.

##### Throws

| IOException |  |
| --- | --- |

#### public Operation deleteItem (String itemName, String version)

##### Parameters

| itemName |  |
| --- | --- |
| version |  |

##### Throws

| IOException |  |
| --- | --- |

#### public void deleteItemsIfExist (List<String> itemIds)

##### Parameters

| itemIds |  |
| --- | --- |

#### public void deleteItemsIfExist (String... itemIds)

Deletes items if they exist in the indexing API. This method attempts to delete the remaining items in the list even if deletion of one fails.

##### Parameters

| itemIds | \- the IDs of the items to delete. |
| --- | --- |

#### public Item getItem (String itemName)

Gets an item from indexing service using item name.

##### Parameters

| itemName |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |

#### public Schema getSchema ()

##### Throws

| IOException |  |
| --- | --- |

#### public List<Item> listItems ()

Gets all items available in data source.

##### Throws

| IOException |  |
| --- | --- |

#### public static void main (String\[\] args)

The purpose of the main method is to explicitly call utility method deleteAllItems(). Deletes all items from the datasource if they exist in the indexing API. Can be used as periodic cleanup of items in the datasource.

##### Parameters

| args |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
| GeneralSecurityException |  |
