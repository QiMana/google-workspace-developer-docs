---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest
root: workspace
fetched_at: 2026-04-23T15:26:53.328Z
---

# UploadRequest

This class defines the schema of request to upload to cloud search API.

```
sourceId - Specifies the data source Id.
requests - List of requests to be upload to cloud search API.
```

An example of a file containing requests is:

```
{
  "sourceId" : "source id",
  "requests" : [
      {
          "name": "deleteItemName",
          "type": "items.delete"
      }
  ]
}
```

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.AbstractNameRequest">UploadRequest.AbstractNameRequest</a></td><td width="100%">Abstract class of the request which has its name as the json key.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.AbstractRequest">UploadRequest.AbstractRequest</a></td><td width="100%">Abstract class of the request sent to the indexing API.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DatasourcesListRequest">UploadRequest.DatasourcesListRequest</a></td><td width="100%">Request to list data sources in the indexing API.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DeleteQueueItemsRequest">UploadRequest.DeleteQueueItemsRequest</a></td><td width="100%">Request to delete items from a given queue.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DeleteRequest">UploadRequest.DeleteRequest</a></td><td width="100%">Request to delete an Item from the indexing API.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.DeleteSchemaRequest">UploadRequest.DeleteSchemaRequest</a></td><td width="100%">Request to delete the schema from the indexing API for the data source.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.GetRequest">UploadRequest.GetRequest</a></td><td width="100%">Request to get an Item from the indexing API.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.GetSchemaRequest">UploadRequest.GetSchemaRequest</a></td><td width="100%">Request to get the schema from the indexing API for the data source.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.IndexItemAndContentRequest">UploadRequest.IndexItemAndContentRequest</a></td><td width="100%">Request to index an Item and its content to the indexing API.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.IndexItemRequest">UploadRequest.IndexItemRequest</a></td><td width="100%">Request to index an Item to the indexing API.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.ListRequest">UploadRequest.ListRequest</a></td><td width="100%">Request to list all items or search items by its attributes specified by filter criteria.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.MediaContent">UploadRequest.MediaContent</a></td><td width="100%">MediaContent supports media content from either a url or a string.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.PollItemsRequest">UploadRequest.PollItemsRequest</a></td><td width="100%">Request to poll items from the indexing API.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.PushItemRequest">UploadRequest.PushItemRequest</a></td><td width="100%">Request to push item to the indexing API.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.UnreserveRequest">UploadRequest.UnreserveRequest</a></td><td width="100%">Request to unreserve polled <code>Item</code> instances in a specific queue.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.UpdateSchemaRequest">UploadRequest.UpdateSchemaRequest</a></td><td width="100%">Request to register schema for the data source in the indexing API.</td></tr></tbody></table>

### Field Summary

| public List<? extends [UploadRequest.AbstractRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.AbstractRequest) > | [requests](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest#requests) |  |
| --- | --- | --- |
| public String | [sourceId](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest#sourceId) |  |

### Public Constructor Summary

[UploadRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest#UploadRequest\(\)) ()

### Inherited Method Summary

From class com.google.api.client.json.GenericJson

| Object | clone() |
| --- | --- |
| final JsonFactory | getFactory() |
| GenericData | set(String arg0, Object arg1) |
| final void | setFactory(JsonFactory arg0) |
| String | toPrettyString() |
| String | toString() |

From class com.google.api.client.util.GenericData

| Object | clone() |
| --- | --- |
| Set<Entry<String, Object>> | entrySet() |
| final Object | get(Object arg0) |
| final ClassInfo | getClassInfo() |
| final Map<String, Object> | getUnknownKeys() |
| Object | put(Object arg0, Object arg1) |
| final Object | put(String arg0, Object arg1) |
| final void | putAll(Map<? extends String,?> arg0) |
| final Object | remove(Object arg0) |
| GenericData | set(String arg0, Object arg1) |
| final void | setUnknownKeys(Map<String, Object> arg0) |

From class java.util.AbstractMap

| void | clear() |
| --- | --- |
| boolean | containsKey(Object arg0) |
| boolean | containsValue(Object arg0) |
| abstract Set<Entry<String, Object>> | entrySet() |
| boolean | equals(Object arg0) |
| Object | get(Object arg0) |
| int | hashCode() |
| boolean | isEmpty() |
| Set<String> | keySet() |
| Object | put(String arg0, Object arg1) |
| void | putAll(Map<? extends K,? extends V> arg0) |
| Object | remove(Object arg0) |
| int | size() |
| String | toString() |
| Collection<Object> | values() |

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

From interface java.util.Map

| abstract void | clear() |
| --- | --- |
| Object | compute(String arg0, BiFunction<? super K,? super V,? extends V> arg1) |
| Object | computeIfAbsent(String arg0, Function<? super K,? extends V> arg1) |
| Object | computeIfPresent(String arg0, BiFunction<? super K,? super V,? extends V> arg1) |
| abstract boolean | containsKey(Object arg0) |
| abstract boolean | containsValue(Object arg0) |
| static <K, V> Map<String, Object> | copyOf(Map<? extends K,? extends V> arg0) |
| static <K, V> Entry<String, Object> | entry(String arg0, Object arg1) |
| abstract Set<Entry<String, Object>> | entrySet() |
| abstract boolean | equals(Object arg0) |
| void | forEach(BiConsumer<? super K,? super V> arg0) |
| abstract Object | get(Object arg0) |
| Object | getOrDefault(Object arg0, Object arg1) |
| abstract int | hashCode() |
| abstract boolean | isEmpty() |
| abstract Set<String> | keySet() |
| Object | merge(String arg0, Object arg1, BiFunction<? super V,? super V,? extends V> arg2) |
| static <K, V> Map<String, Object> | of(String arg0, Object arg1, String arg2, Object arg3, String arg4, Object arg5, String arg6, Object arg7, String arg8, Object arg9) |
| static <K, V> Map<String, Object> | of(String arg0, Object arg1, String arg2, Object arg3, String arg4, Object arg5, String arg6, Object arg7) |
| static <K, V> Map<String, Object> | of(String arg0, Object arg1) |
| static <K, V> Map<String, Object> | of(String arg0, Object arg1, String arg2, Object arg3, String arg4, Object arg5, String arg6, Object arg7, String arg8, Object arg9, String arg10, Object arg11, String arg12, Object arg13, String arg14, Object arg15) |
| static <K, V> Map<String, Object> | of(String arg0, Object arg1, String arg2, Object arg3) |
| static <K, V> Map<String, Object> | of(String arg0, Object arg1, String arg2, Object arg3, String arg4, Object arg5) |
| static <K, V> Map<String, Object> | of() |
| static <K, V> Map<String, Object> | of(String arg0, Object arg1, String arg2, Object arg3, String arg4, Object arg5, String arg6, Object arg7, String arg8, Object arg9, String arg10, Object arg11, String arg12, Object arg13, String arg14, Object arg15, String arg16, Object arg17) |
| static <K, V> Map<String, Object> | of(String arg0, Object arg1, String arg2, Object arg3, String arg4, Object arg5, String arg6, Object arg7, String arg8, Object arg9, String arg10, Object arg11) |
| static <K, V> Map<String, Object> | of(String arg0, Object arg1, String arg2, Object arg3, String arg4, Object arg5, String arg6, Object arg7, String arg8, Object arg9, String arg10, Object arg11, String arg12, Object arg13) |
| static <K, V> Map<String, Object> | of(String arg0, Object arg1, String arg2, Object arg3, String arg4, Object arg5, String arg6, Object arg7, String arg8, Object arg9, String arg10, Object arg11, String arg12, Object arg13, String arg14, Object arg15, String arg16, Object arg17, String arg18, Object arg19) |
| static <K, V> Map<String, Object> | ofEntries(Entry...<? extends K,? extends V> arg0) |
| abstract Object | put(String arg0, Object arg1) |
| abstract void | putAll(Map<? extends K,? extends V> arg0) |
| Object | putIfAbsent(String arg0, Object arg1) |
| boolean | remove(Object arg0, Object arg1) |
| abstract Object | remove(Object arg0) |
| boolean | replace(String arg0, Object arg1, Object arg2) |
| Object | replace(String arg0, Object arg1) |
| void | replaceAll(BiFunction<? super K,? super V,? extends V> arg0) |
| abstract int | size() |
| abstract Collection<Object> | values() |
