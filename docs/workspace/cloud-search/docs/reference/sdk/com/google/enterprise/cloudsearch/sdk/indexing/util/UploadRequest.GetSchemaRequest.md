---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.GetSchemaRequest
root: workspace
fetched_at: 2026-04-23T15:26:59.077Z
---

# UploadRequest.GetSchemaRequest

Request to get the schema from the indexing API for the data source.

An example of GetSchemaRequest is:

```
{
  "type": "schema.get"
}
```

### Inherited Field Summary

From class [com.google.enterprise.cloudsearch.sdk.indexing.util.UploadRequest.AbstractRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.AbstractRequest)

| public String | [type](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.AbstractRequest#type) |  |
| --- | --- | --- |

### Public Constructor Summary

[UploadRequest.GetSchemaRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/UploadRequest.GetSchemaRequest#UploadRequest.GetSchemaRequest\(\)) ()

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
