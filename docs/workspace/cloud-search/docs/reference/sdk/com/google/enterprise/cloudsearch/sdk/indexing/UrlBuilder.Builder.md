---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder
root: workspace
fetched_at: 2026-04-23T15:26:48.415Z
---

# UrlBuilder.Builder

Builder for constructing instances of `UrlBuilder`.

### Public Constructor Summary

[UrlBuilder.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder#UrlBuilder.Builder\(\)) ()

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder#build\(\)) ()  Constructs an instance of `UrlBuilder`. |
| --- | --- |
| [UrlBuilder.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder) | [setColumns](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder#setColumns\(java.util.Set%3Cjava.lang.String%3E\)) (Set<String> columns)  Sets the column names whose values will be substituted into the format to generate the URL. |
| [UrlBuilder.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder) | [setColumnsToEscape](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder#setColumnsToEscape\(java.util.Set%3Cjava.lang.String%3E\)) (Set<String> columnsToEscape)  Sets the column names whose values will be URL escaped. |
| [UrlBuilder.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder) | [setFormat](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder#setFormat\(java.lang.String\)) (String format)  Sets the URL format. |

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

#### public UrlBuilder.Builder ()

## Public Methods

#### build ()

Constructs an instance of `UrlBuilder`.

##### Returns

- an instance of `UrlBuilder`

#### public UrlBuilder.Builder setColumns (Set<String> columns)

Sets the column names whose values will be substituted into the format to generate the URL.

##### Parameters

| columns | a set of column names |
| --- | --- |

#### public UrlBuilder.Builder setColumnsToEscape (Set<String> columnsToEscape)

Sets the column names whose values will be URL escaped. Must be a subset of the URL columns

##### Parameters

| columnsToEscape | a set of column names |
| --- | --- |

#### public UrlBuilder.Builder setFormat (String format)

Sets the URL format.

##### Parameters

| format | a `MessageFormat` -style format string for the URL |
| --- | --- |
