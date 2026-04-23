---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder
root: workspace
fetched_at: 2026-04-23T15:26:50.322Z
---

# UrlBuilder

Constructs an URL from a `MessageFormat` -style format string and a set of columns to include in the URL.

Instances are immutable and thread-safe.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder">UrlBuilder.Builder</a></td><td width="100%">Builder for constructing instances of <code>UrlBuilder</code>.</td></tr></tbody></table>

### Constant Summary

| String | [CONFIG\_COLUMNS](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder#CONFIG_COLUMNS) |  |
| --- | --- | --- |
| String | [CONFIG\_COLUMNS\_TO\_ESCAPE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder#CONFIG_COLUMNS_TO_ESCAPE) |  |
| String | [CONFIG\_FORMAT](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder#CONFIG_FORMAT) |  |

### Public Method Summary

| String | [buildUrl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder#buildUrl\(java.util.Map%3Cjava.lang.String,%20?%3E\)) (Map<String,?> allColumnValues)  Builds the escaped URL. |
| --- | --- |
| static [UrlBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder) | [fromConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder#fromConfiguration\(\)) ()  Constructs an `UrlBuilder` from the `Configuration`  Required configuration parameters:  - \- Specifies the column names whose values will be substituted into the format to generate the URL. |
| Set<String> | [getMissingColumns](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder#getMissingColumns\(java.util.Set%3Cjava.lang.String%3E\)) (Set<String> allColumns)  Gets the difference of the configured URL columns and the given set of all columns. |

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

## Constants

#### public static final String CONFIG\_COLUMNS

Constant Value: "url.columns"

#### public static final String CONFIG\_COLUMNS\_TO\_ESCAPE

Constant Value: "url.columnsToEscape"

#### public static final String CONFIG\_FORMAT

Constant Value: "url.format"

## Public Methods

#### public String buildUrl (Map<String,?> allColumnValues)

Builds the escaped URL. The given map of values may contain unneeded columns, but it must contain all of the configured columns.

##### Parameters

| allColumnValues | a map from column names to column values |
| --- | --- |

##### Returns

- the escaped URL, or null if one or more configured column names are missing or have null values in `allColumnValues`

#### public static UrlBuilder fromConfiguration ()

Constructs an `UrlBuilder` from the `Configuration`

Required configuration parameters:

- \- Specifies the column names whose values will be substituted into the format to generate the URL.

Optional configuration parameters:

- \- Specifies the format of the URL. The default value is "{0}".
- \- Specifies the column names whose values will be URL escaped. Must be a subset of .

##### Returns

- an `UrlBuilder`

#### public Set<String> getMissingColumns (Set<String> allColumns)

Gets the difference of the configured URL columns and the given set of all columns. The difference will be empty if all of the URL columns are present in the given set.

##### Parameters

| allColumns | all columns |
| --- | --- |

##### Returns

- the difference of columns
