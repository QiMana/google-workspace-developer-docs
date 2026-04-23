---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate
root: workspace
fetched_at: 2026-04-23T15:26:40.375Z
---

# ContentTemplate

Utility to create an HTML template used for formatting content from repository field data (database, CSV, CRM, etc.) for uploading to Cloud Search.

The simplest use case is to define configuration parameters describing the repository's content fields and then calling `fromConfiguration(String)`. This will create an HTML template object that will be used by the repository for calling `apply(Map)` to infuse content field values to generate the HTML content for uploading.

Alternatively, the `ContentTemplate.Builder` can be used directly to create a template from defined content fields and then calling `apply(Map)` as before.

The HTML template is required to have a title field (`setTitle(String)`), and may optionally have "high" (`setHighContent(List)`), "medium" (`setMediumContent(List)`, and "low" (`setLowContent(List)`) search quality fields. These fields will have HTML tags appropriate their respective quality status. Any fields not given a quality settings will be considered "unmapped" fields, and will be included or excluded from the content template depending on the configuration parameter (see `fromConfiguration(String)`).

Sample usage from the repository initialization code:

```
// one time creation of the HTML content template
   ContentTemplate myTemplate = ContentTemplate.fromConfiguration("myTemplateName");
```

And then later during iteration through the repository data:

```
// while looping through the repository data
  ...
  Map<String, Object> dataValues = ... // get the data values for this repository item
  String htmlContent = myTemplate.apply(dataValues);
  // upload the content with this item
  ...
```

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate.Builder">ContentTemplate.Builder</a></td><td width="100%"></td></tr><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate.UnmappedColumnsMode">ContentTemplate.UnmappedColumnsMode</a></td><td width="100%">Defines how to treat extra field data provided to the <code>apply(Map)</code> call.</td></tr></tbody></table>

### Public Method Summary

| String | [apply](./ContentTemplate.md#apply(java.util.Map%3Cjava.lang.String,%20java.lang.Object%3E)) (Map<String, Object> keyValues)  Infuses the passed key value pairs into the previously generated template. |
| --- | --- |
| String | [apply](./ContentTemplate.md#apply(com.google.common.collect.Multimap%3Cjava.lang.String,%20java.lang.Object%3E)) (Multimap<String, Object> keyValues)  Infuses the passed key value pairs into the previously generated template. |
| static [ContentTemplate](./ContentTemplate.md) | [fromConfiguration](./ContentTemplate.md#fromConfiguration(java.lang.String)) (String templateName)  Creates an HTML content template using parameters specified in the connector configuration file. |
| Set<String> | [getHighContent](./ContentTemplate.md#getHighContent()) ()  Returns the previously defined high content fields. |
| Set<String> | [getLowContent](./ContentTemplate.md#getLowContent()) ()  Returns the previously defined low content fields. |
| Set<String> | [getMediumContent](./ContentTemplate.md#getMediumContent()) ()  Returns the previously defined medium content fields. |
| String | [getTitle](./ContentTemplate.md#getTitle()) ()  Returns the title of this template. |

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

#### public String apply (Map<String, Object> keyValues)

Infuses the passed key value pairs into the previously generated template.

##### Parameters

| keyValues | field name/field value pairs |
| --- | --- |

##### Returns

- populated HTML string

#### public String apply (Multimap<String, Object> keyValues)

Infuses the passed key value pairs into the previously generated template.

##### Parameters

| keyValues | field name/field values pairs as `Multimap` |
| --- | --- |

##### Returns

- populated HTML string

#### public static ContentTemplate fromConfiguration (String templateName)

Creates an HTML content template using parameters specified in the connector configuration file.

The configuration file should have parameters in the format of:

- contentTemplate.\[templateName\].title - Specifies the HTML title for the template. Note: This is a required field.
- contentTemplate.\[templateName\].quality.high - Optionally specifies the "high" quality fields.
- contentTemplate.\[templateName\].quality.medium - Optionally specifies the "medium" quality fields.
- contentTemplate.\[templateName\].quality.low - Optionally specifies the "low" quality fields.
- contentTemplate.\[templateName\].includeFieldName - Specifies whether to include the field names along with the field data in the HTML template. The default of `true` will cause the field names to be searchable as part of the content data.
- contentTemplate.\[templateName\].unmappedColumnsMode - Specifies whether fields not designated as high/medium/low should have their data values included in the HTML content. "IGNORE" to exclude extra fields contained in the map passed to `apply(Map)`, or "APPEND" (the default) to include these fields in the HTML content.

Sample configuration file parameters:

```
contentTemplate.myTemplateName.title = tfield1
contentTemplate.myTemplateName.quality.high = hfield1, hfield2
contentTemplate.myTemplateName.quality.medium = mfield1, mfield2
contentTemplate.myTemplateName.quality.low = lfield1, lfield2
contentTemplate.myTemplateName.includeFieldName = true
contentTemplate.myTemplateName.unmappedColumnsMode = APPEND
```

##### Parameters

| templateName | the specific template name within the configuration object |
| --- | --- |

#### public Set<String> getHighContent ()

Returns the previously defined high content fields.

#### public Set<String> getLowContent ()

Returns the previously defined low content fields.

#### public Set<String> getMediumContent ()

Returns the previously defined medium content fields.

#### public String getTitle ()

Returns the title of this template.
