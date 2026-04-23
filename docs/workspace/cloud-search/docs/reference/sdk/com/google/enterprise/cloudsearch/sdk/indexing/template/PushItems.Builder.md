---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.Builder
root: workspace
fetched_at: 2026-04-23T15:26:52.700Z
---

# PushItems.Builder

### Public Constructor Summary

[PushItems.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.Builder#PushItems.Builder\(\)) ()

### Public Method Summary

| [PushItems.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.Builder) | [addPushItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.Builder#addPushItem\(java.lang.String,%20com.google.api.services.cloudsearch.v1.model.PushItem\)) (String id, PushItem item)  Adds given `PushItem` in list of items to be pushed as part of `ApiOperation` execution. |
| --- | --- |
|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.Builder#build\(\)) () |

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

#### public PushItems.Builder ()

## Public Methods

#### public PushItems.Builder addPushItem (String id, PushItem item)

Adds given `PushItem` in list of items to be pushed as part of `ApiOperation` execution.

##### Parameters

| id | for item to be pushed |
| --- | --- |
| item | to be pushed |

##### Returns

- this instance of `PushItems.Builder`
