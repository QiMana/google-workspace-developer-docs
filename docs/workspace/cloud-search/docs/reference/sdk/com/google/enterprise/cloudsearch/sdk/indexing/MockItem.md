---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/MockItem
root: workspace
fetched_at: 2026-04-23T15:26:47.796Z
---

# MockItem

Generates an Item using `IndexingItemBuilder` with specified values for metadata.

```
MockItem item = new MockItem.Builder("ItemName").setTitle("Title").setMimeType("HTML")
    .setContentLanguage("en-us").setItemType(ItemType.CONTENT_ITEM.toString()).build();
```

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/MockItem.Builder">MockItem.Builder</a></td><td width="100%">Builder class to set meta data attributes of an Item.</td></tr></tbody></table>

### Public Constructor Summary

[MockItem](./MockItem.md#MockItem(java.lang.String,%20com.google.common.collect.Multimap%3Cjava.lang.String,%20java.lang.Object%3E)) (String itemName, Multimap<String, Object> values)

### Public Method Summary

| String | [getContainerName](./MockItem.md#getContainerName()) () |
| --- | --- |
| Item | [getItem](./MockItem.md#getItem()) () |
| String | [getName](./MockItem.md#getName()) () |

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

#### public MockItem (String itemName, Multimap<String, Object> values)

##### Parameters

| itemName |  |
| --- | --- |
| values |  |
