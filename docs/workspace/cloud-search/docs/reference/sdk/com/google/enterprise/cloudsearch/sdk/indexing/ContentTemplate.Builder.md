---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate.Builder
root: workspace
fetched_at: 2026-04-23T15:26:41.727Z
---

# ContentTemplate.Builder

### Public Constructor Summary

[ContentTemplate.Builder](./ContentTemplate.Builder.md#ContentTemplate.Builder()) ()

### Public Method Summary

|  | [build](./ContentTemplate.Builder.md#build()) ()  Gets the generated HTML template based on the passed field data. |
| --- | --- |
| [ContentTemplate.Builder](./ContentTemplate.Builder.md) | [setHighContent](./ContentTemplate.Builder.md#setHighContent(java.util.List%3Cjava.lang.String%3E)) (List<String> highFields)  Adds high priority content fields. |
| [ContentTemplate.Builder](./ContentTemplate.Builder.md) | [setIncludeFieldName](./ContentTemplate.Builder.md#setIncludeFieldName(boolean)) (boolean include)  Determines whether to include the field name within the content for that field. |
| [ContentTemplate.Builder](./ContentTemplate.Builder.md) | [setLowContent](./ContentTemplate.Builder.md#setLowContent(java.util.List%3Cjava.lang.String%3E)) (List<String> lowFields)  Adds low priority content fields. |
| [ContentTemplate.Builder](./ContentTemplate.Builder.md) | [setMediumContent](./ContentTemplate.Builder.md#setMediumContent(java.util.List%3Cjava.lang.String%3E)) (List<String> mediumFields)  Adds medium priority content fields. |
| [ContentTemplate.Builder](./ContentTemplate.Builder.md) | [setTitle](./ContentTemplate.Builder.md#setTitle(java.lang.String)) (String title)  Sets the "title" of the HTML. |
| [ContentTemplate.Builder](./ContentTemplate.Builder.md) | [setUnmappedColumnMode](./ContentTemplate.Builder.md#setUnmappedColumnMode(com.google.enterprise.cloudsearch.sdk.indexing.ContentTemplate.UnmappedColumnsMode)) ([ContentTemplate.UnmappedColumnsMode](./ContentTemplate.UnmappedColumnsMode.md) mode)  Sets the mode (APPEND or IGNORE) for unmapped columns. |

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

#### public ContentTemplate.Builder ()

## Public Methods

#### build ()

Gets the generated HTML template based on the passed field data.

After building the template, merge the content fields into a single array to simplify template substitution in .

##### Returns

- HTML template

#### public ContentTemplate.Builder setHighContent (List<String> highFields)

Adds high priority content fields.

##### Parameters

| highFields | the field names |
| --- | --- |

##### Returns

- builder

#### public ContentTemplate.Builder setIncludeFieldName (boolean include)

Determines whether to include the field name within the content for that field.

If set to true (default), the format in the content will be "field:value" instead of just "value". This may be desirable for search results, but may not be desired if the field name is different from the field's repository display name or is not descriptive to the user.

##### Parameters

| include | `true` to include field name in content. |
| --- | --- |

##### Returns

- builder

#### public ContentTemplate.Builder setLowContent (List<String> lowFields)

Adds low priority content fields.

##### Parameters

| lowFields | the field names |
| --- | --- |

##### Returns

- builder

#### public ContentTemplate.Builder setMediumContent (List<String> mediumFields)

Adds medium priority content fields.

##### Parameters

| mediumFields | the field names |
| --- | --- |

##### Returns

- builder

#### public ContentTemplate.Builder setTitle (String title)

Sets the "title" of the HTML. This will be the highest priority for indexing.

##### Parameters

| title | main HTML title |
| --- | --- |

##### Returns

- builder

#### public ContentTemplate.Builder setUnmappedColumnMode (ContentTemplate.UnmappedColumnsMode mode)

Sets the mode (APPEND or IGNORE) for unmapped columns.

##### Parameters

| mode | UnmappedColumnsMode |
| --- | --- |

##### Returns

- builder
