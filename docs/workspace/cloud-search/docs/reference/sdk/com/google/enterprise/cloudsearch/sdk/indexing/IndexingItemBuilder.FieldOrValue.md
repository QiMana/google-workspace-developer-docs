---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue
root: workspace
fetched_at: 2026-04-23T15:26:42.699Z
---

# IndexingItemBuilder.FieldOrValue

Construct to specify an actual field value or pointer to a key within the key/values map.

### Public Method Summary

| boolean | [equals](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue#equals\(java.lang.Object\)) (Object other) |
| --- | --- |
| int | [hashCode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue#hashCode\(\)) () |
| String | [toString](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue#toString\(\)) ()  Gets a string suitable for unit tests. |
| static <T> [FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <T> | [withField](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue#withField\(java.lang.String\)) (String field)  Looks up value for the property from for the given field. |
| static <T> [FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <T> | [withValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue#withValue\(T\)) (T value)  Uses the provided value for the property. |

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

#### public boolean equals (Object other)

##### Parameters

| other |  |
| --- | --- |

#### public int hashCode ()

#### public String toString ()

Gets a string suitable for unit tests.

#### public static FieldOrValue<T> withField (String field)

Looks up value for the property from for the given field.

##### Returns

- `IndexingItemBuilder.FieldOrValue` instance pointing to field

#### public static FieldOrValue<T> withValue (T value)

Uses the provided value for the property.

##### Parameters

| value | the value for the property |
| --- | --- |

##### Returns

- `IndexingItemBuilder.FieldOrValue` instance pointing to value
