---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperations
root: workspace
fetched_at: 2026-04-23T15:26:50.146Z
---

# ApiOperations

This class consists exclusively of static methods that operate on or return specific instances used in template classes (such as `Repository`).

### Public Method Summary

| static [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) | [batch](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperations#batch\(java.util.Iterator%3Ccom.google.enterprise.cloudsearch.sdk.indexing.template.ApiOperation%3E\)) (Iterator< [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) > operations)  Creates a `BatchApiOperation` instance. |
| --- | --- |
| static [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) | [deleteItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperations#deleteItem\(java.lang.String,%20byte[],%20com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode\)) (String id, byte\[\] version, [IndexingService.RequestMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.RequestMode) requestMode)  Creates a `DeleteItem` instance with a custom version. |
| static [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) | [deleteItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperations#deleteItem\(java.lang.String\)) (String id)  Creates a `DeleteItem` instance. |
| static [ApiOperation](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) | [deleteQueueItems](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperations#deleteQueueItems\(java.lang.String\)) (String queueName)  Creates a `DeleteQueueItems` instance. |

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

#### batch

Creates a `BatchApiOperation` instance.

Use this method to batch multiple instances in a single operation.

##### Parameters

| operations | to batch |
| --- | --- |

##### Returns

- `BatchApiOperation`

#### deleteItem (String id, byte\[\] version, IndexingService.RequestMode requestMode)

Creates a `DeleteItem` instance with a custom version.

##### Parameters

| id | to delete |
| --- | --- |
| version | item version for delete |
| requestMode | mode for request |

##### Returns

- `DeleteItem`

#### deleteItem (String id)

Creates a `DeleteItem` instance.

##### Parameters

| id | to delete |
| --- | --- |

##### Returns

- `DeleteItem`

#### deleteQueueItems (String queueName)

Creates a `DeleteQueueItems` instance.

##### Parameters

| queueName | items with this queue name will be deleted |
| --- | --- |

##### Returns

- `DeleteQueueItems`
