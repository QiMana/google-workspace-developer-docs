---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder
root: workspace
fetched_at: 2026-04-23T15:26:44.372Z
---

# IndexingItemBuilder

Helper object to build an `Item`.

Use the setters to provide all desired attributes of an `Item` including the name, ACL, metadata fields, queue, version, and so on. To set the attribute’s value explicitly at build time (value) or derive it from the repository’s map of key/values (field), define the metadata fields as `IndexingItemBuilder.FieldOrValue` objects.

Sample usage:

```
// within Repository method fetching a document
   Multimap<String, Object> multiMapValues = ... // populate the map with repository data
   String documentName = ... // create the specific document name (unique id)
   String documentTitle = ... // set title to a "field" in multiMapValues
   ...
   IndexingItemBuilder indexingItemBuilder =
       IndexingItemBuilder.fromConfiguration(documentName).setValues(multiMapValues);
   ...
   // the title is now set to the value of the title field during the build()
   indexingItemBuilder.setTitle(FieldOrValue.withField(documentTitle));
   ...
   // the URL is now set to the hard-coded URL string
   indexingItemBuilder.setSourceRepositoryUrl(FieldOrValue.withValue("https://www.mycompany.com");
   ...
   // generate the fully built document
   Item documentItem = indexingItemBuilder.build();
   ...
```

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue">IndexingItemBuilder.FieldOrValue</a> <T></td><td width="100%">Construct to specify an actual field value or pointer to a key within the key/values map.</td></tr><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.ItemType">IndexingItemBuilder.ItemType</a></td><td width="100%"></td></tr></tbody></table>

### Constant Summary

| String | [CONTAINER\_NAME\_FIELD](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#CONTAINER_NAME_FIELD) |  |
| --- | --- | --- |
| String | [CONTAINER\_NAME\_VALUE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#CONTAINER_NAME_VALUE) |  |
| String | [CONTENT\_LANGUAGE\_FIELD](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#CONTENT_LANGUAGE_FIELD) |  |
| String | [CONTENT\_LANGUAGE\_VALUE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#CONTENT_LANGUAGE_VALUE) |  |
| String | [CREATE\_TIME\_FIELD](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#CREATE_TIME_FIELD) |  |
| String | [CREATE\_TIME\_VALUE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#CREATE_TIME_VALUE) |  |
| String | [HASH\_FIELD](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#HASH_FIELD) |  |
| String | [HASH\_VALUE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#HASH_VALUE) |  |
| String | [MIME\_TYPE\_FIELD](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#MIME_TYPE_FIELD) |  |
| String | [MIME\_TYPE\_VALUE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#MIME_TYPE_VALUE) |  |
| String | [OBJECT\_TYPE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#OBJECT_TYPE) |  |
| String | [OBJECT\_TYPE\_FIELD](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#OBJECT_TYPE_FIELD) |  |
| String | [OBJECT\_TYPE\_VALUE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#OBJECT_TYPE_VALUE) |  |
| String | [SEARCH\_QUALITY\_METADATA\_QUALITY\_FIELD](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#SEARCH_QUALITY_METADATA_QUALITY_FIELD) |  |
| String | [SEARCH\_QUALITY\_METADATA\_QUALITY\_VALUE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#SEARCH_QUALITY_METADATA_QUALITY_VALUE) |  |
| String | [SOURCE\_REPOSITORY\_URL\_FIELD](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#SOURCE_REPOSITORY_URL_FIELD) |  |
| String | [SOURCE\_REPOSITORY\_URL\_VALUE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#SOURCE_REPOSITORY_URL_VALUE) |  |
| String | [TITLE\_FIELD](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#TITLE_FIELD) |  |
| String | [TITLE\_VALUE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#TITLE_VALUE) |  |
| String | [UPDATE\_TIME\_FIELD](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#UPDATE_TIME_FIELD) |  |
| String | [UPDATE\_TIME\_VALUE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#UPDATE_TIME_VALUE) |  |

### Public Constructor Summary

[IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#IndexingItemBuilder\(java.lang.String\)) (String name)

Constructs an empty `IndexingItemBuilder`.

### Public Method Summary

| Item | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#build\(\)) ()  Builds the `Item` using all of the previously set attributes. |
| --- | --- |
| static [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [fromConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#fromConfiguration\(java.lang.String\)) (String name)  Constructs an `IndexingItemBuilder` from the `Configuration`. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setAcl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setAcl\(com.google.enterprise.cloudsearch.sdk.indexing.Acl\)) ([Acl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl) acl)  Sets the `Acl` instance, which is used to construct the `ItemAcl`. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setContainerName](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setContainerName\(java.lang.String\)) (String containerName)  *This method is deprecated. Use `setContainerName(FieldOrValue)` with `withValue(T)`* |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setContainerName](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setContainerName\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingItemBuilder.FieldOrValue%3Cjava.lang.String%3E\)) ([FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <String> containerName)  Sets the `containerName` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setContentLanguage](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setContentLanguage\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingItemBuilder.FieldOrValue%3Cjava.lang.String%3E\)) ([FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <String> language)  Sets the `contentLanguage` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setCreateTime](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setCreateTime\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingItemBuilder.FieldOrValue%3Ccom.google.api.client.util.DateTime%3E\)) ([FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <DateTime> createTime)  Sets the `createTime` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setHash](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setHash\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingItemBuilder.FieldOrValue%3Cjava.lang.String%3E\)) ([FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <String> hash)  Sets the `hash` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setHash](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setHash\(java.lang.String\)) (String hash)  *This method is deprecated. Use `setHash(FieldOrValue)` with `withValue(T)`* |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setItemType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setItemType\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingItemBuilder.ItemType\)) ([IndexingItemBuilder.ItemType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.ItemType) itemType)  Sets the `itemType` field value for the `Item`. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setMimeType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setMimeType\(java.lang.String\)) (String mimeType)  *This method is deprecated. Use `setMimeType(FieldOrValue)` with `withValue(T)`* |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setMimeType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setMimeType\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingItemBuilder.FieldOrValue%3Cjava.lang.String%3E\)) ([FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <String> mimeType)  Sets the `mimeType` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setObjectType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setObjectType\(java.lang.String\)) (String objectType)  *This method is deprecated. Use `setObjectType(FieldOrValue)` with `withValue(T)`* |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setObjectType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setObjectType\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingItemBuilder.FieldOrValue%3Cjava.lang.String%3E\)) ([FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <String> objectType)  Sets the name of the object definition from the schema to use when constructing the `ItemStructuredData`, either from the given field (or key) in the `values` multimap, or a literal value. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setPayload](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setPayload\(byte[]\)) (byte\[\] payload)  Sets the `payload` field value for the `Item`. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setQueue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setQueue\(java.lang.String\)) (String queue)  Sets the `queue` field value for the `Item`. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setSearchQualityMetadata](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setSearchQualityMetadata\(com.google.api.services.cloudsearch.v1.model.SearchQualityMetadata\)) (SearchQualityMetadata searchQuality)  Sets the `searchQualityMetadata` field value for the `ItemMetadata`. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setSearchQualityMetadataQuality](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setSearchQualityMetadataQuality\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingItemBuilder.FieldOrValue%3Cjava.lang.Double%3E\)) ([FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <Double> quality)  Sets the `searchQualityMetadata.quality` field value for the `ItemMetadata`. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setSourceRepositoryUrl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setSourceRepositoryUrl\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingItemBuilder.FieldOrValue%3Cjava.lang.String%3E\)) ([FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <String> url)  Sets the `sourceRepositoryUrl` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setTitle](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setTitle\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingItemBuilder.FieldOrValue%3Cjava.lang.String%3E\)) ([FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <String> title)  Sets the `title` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setUpdateTime](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setUpdateTime\(com.google.enterprise.cloudsearch.sdk.indexing.IndexingItemBuilder.FieldOrValue%3Ccom.google.api.client.util.DateTime%3E\)) ([FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <DateTime> updateTime)  Sets the `updateTime` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setValues](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setValues\(com.google.common.collect.Multimap%3Cjava.lang.String,%20java.lang.Object%3E\)) (Multimap<String, Object> values)  Sets the repository attributes that may be used for the `ItemMetadata` or `StructuredDataObject` fields, depending on the `FieldOrValue` setters called by the connector as well as the configuration. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | [setVersion](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder#setVersion\(byte[]\)) (byte\[\] version)  Sets the `version` field value for the `Item`. |

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

#### public static final String CONTAINER\_NAME\_FIELD

Constant Value: "itemMetadata.containerName.field"

#### public static final String CONTAINER\_NAME\_VALUE

Constant Value: "itemMetadata.containerName.defaultValue"

#### public static final String CONTENT\_LANGUAGE\_FIELD

Constant Value: "itemMetadata.contentLanguage.field"

#### public static final String CONTENT\_LANGUAGE\_VALUE

Constant Value: "itemMetadata.contentLanguage.defaultValue"

#### public static final String CREATE\_TIME\_FIELD

Constant Value: "itemMetadata.createTime.field"

#### public static final String CREATE\_TIME\_VALUE

Constant Value: "itemMetadata.createTime.defaultValue"

#### public static final String HASH\_FIELD

Constant Value: "itemMetadata.hash.field"

#### public static final String HASH\_VALUE

Constant Value: "itemMetadata.hash.defaultValue"

#### public static final String MIME\_TYPE\_FIELD

Constant Value: "itemMetadata.mimeType.field"

#### public static final String MIME\_TYPE\_VALUE

Constant Value: "itemMetadata.mimeType.defaultValue"

#### public static final String OBJECT\_TYPE

Constant Value: "itemMetadata.objectType"

#### public static final String OBJECT\_TYPE\_FIELD

Constant Value: "itemMetadata.objectType.field"

#### public static final String OBJECT\_TYPE\_VALUE

Constant Value: "itemMetadata.objectType.defaultValue"

#### public static final String SEARCH\_QUALITY\_METADATA\_QUALITY\_FIELD

Constant Value: "itemMetadata.searchQualityMetadata.quality.field"

#### public static final String SEARCH\_QUALITY\_METADATA\_QUALITY\_VALUE

Constant Value: "itemMetadata.searchQualityMetadata.quality.defaultValue"

#### public static final String SOURCE\_REPOSITORY\_URL\_FIELD

Constant Value: "itemMetadata.sourceRepositoryUrl.field"

#### public static final String SOURCE\_REPOSITORY\_URL\_VALUE

Constant Value: "itemMetadata.sourceRepositoryUrl.defaultValue"

#### public static final String TITLE\_FIELD

Constant Value: "itemMetadata.title.field"

#### public static final String TITLE\_VALUE

Constant Value: "itemMetadata.title.defaultValue"

#### public static final String UPDATE\_TIME\_FIELD

Constant Value: "itemMetadata.updateTime.field"

#### public static final String UPDATE\_TIME\_VALUE

Constant Value: "itemMetadata.updateTime.defaultValue"

## Public Constructors

#### public IndexingItemBuilder (String name)

Constructs an empty `IndexingItemBuilder`.

##### Parameters

| name |  |
| --- | --- |

## Public Methods

#### public Item build ()

Builds the `Item` using all of the previously set attributes.

Aside from the `name` and `values` map, all of the attributes are optional. The metadata attributes (`mimeType, title, sourceRepositoryUrl, updateTime, createTime, contentLanguage,  hash, containerName`) can be set explicitly in the setter, from the `values` map, or using the `configuration properties`.

##### Returns

- fully built `Item` object

#### public static IndexingItemBuilder fromConfiguration (String name)

Constructs an `IndexingItemBuilder` from the `Configuration`.

Optional configuration parameters for `ItemMetadata`:

- `itemMetadata.mimeType.field` - The key for the mimeType field in the values map.
- `itemMetadata.title.field` - The key for the title field in the values map.
- `itemMetadata.sourceRepositoryUrl.field` - The key for the URL field in the values map.
- `itemMetadata.updateTime.field` - The key for the update time field in the values map.
- `itemMetadata.createTime.field` - The key for the create time field in the values map.
- `itemMetadata.contentLanguage.field` - The key for the content language field in the values map.
- `itemMetadata.hash.field` - The key for the hash field in the values map.
- `itemMetadata.containerName.field` - The key for the container name field in the values map.
- `itemMetadata.searchQualityMetadata.quality.field` - The key for the SearchQualityMetadata quality field in the values map.
- `itemMetadata.mimeType.defaultValue` - The value for the media type.
- `itemMetadata.title.defaultValue` - The value for the title.
- `itemMetadata.sourceRepositoryUrl.defaultValue` - The value for the URL.
- `itemMetadata.updateTime.defaultValue` - The value for the update time in RFC 3339 format.
- `itemMetadata.createTime.defaultValue` - The value for the create time in RFC 3339 format.
- `itemMetadata.contentLanguage.defaultValue` - The value for the content language.
- `itemMetadata.hash.defaultValue` - The value for the hash.
- `itemMetadata.containerName.defaultValue` - The value for the container name.
- `itemMetadata.searchQualityMetadata.quality.defaultValue` - The value for the SearchQualityMetadata quality.

Optional configuration parameters for `ItemMetadata` and `StructuredData`:

- `itemMetadata.objectType.field` - The key for the object type field in the values map.
- `itemMetadata.objectType.defaultValue` - The value for the object type.
Note: For each `ItemMetadata` field, check the following in order for a non-empty value:
1. A call to the correponding setter method on the returned instance of `IndexingItemBuilder`.
2. A config property with a suffix of `.field`, used as a key into the the `values map`.
3. A config property with a suffix of `.defaultValue`.

##### Parameters

| name |  |
| --- | --- |

#### public IndexingItemBuilder setAcl (Acl acl)

Sets the `Acl` instance, which is used to construct the `ItemAcl`.

##### Parameters

| acl | the `Acl` instance |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setContainerName (String containerName)

**This method is deprecated.**  
Use `setContainerName(FieldOrValue)` with `withValue(T)`

Sets the `containerName` field value for the `ItemMetadata`.

##### Parameters

| containerName | the `containerName` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setContainerName (FieldOrValue<String> containerName)

Sets the `containerName` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value.

##### Parameters

| containerName | the source of the `containerName` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setContentLanguage (FieldOrValue<String> language)

Sets the `contentLanguage` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value.

##### Parameters

| language | the source of the `contentLanguage` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setCreateTime (FieldOrValue<DateTime> createTime)

Sets the `createTime` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value.

##### Parameters

| createTime | the source of the `createTime` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setHash (FieldOrValue<String> hash)

Sets the `hash` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value.

##### Parameters

| hash | the source of the `hash` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setHash (String hash)

**This method is deprecated.**  
Use `setHash(FieldOrValue)` with `withValue(T)`

Sets the `hash` field value for the `ItemMetadata`.

##### Parameters

| hash | the `hash` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setItemType (IndexingItemBuilder.ItemType itemType)

Sets the `itemType` field value for the `Item`.

##### Parameters

| itemType | the `itemType` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setMimeType (String mimeType)

**This method is deprecated.**  
Use `setMimeType(FieldOrValue)` with `withValue(T)`

Sets the `mimeType` field value for the `ItemMetadata`.

##### Parameters

| mimeType | a media type, such as "application/pdf" |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setMimeType (FieldOrValue<String> mimeType)

Sets the `mimeType` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value.

##### Parameters

| mimeType | the source of the media type |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setObjectType (String objectType)

**This method is deprecated.**  
Use `setObjectType(FieldOrValue)` with `withValue(T)`

Sets the name of the object definition from the schema to use when constructing the `ItemStructuredData`

##### Parameters

| objectType | the object definition name |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setObjectType (FieldOrValue<String> objectType)

Sets the name of the object definition from the schema to use when constructing the `ItemStructuredData`, either from the given field (or key) in the `values` multimap, or a literal value.

##### Parameters

| objectType | the source of the object definition name |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setPayload (byte\[\] payload)

Sets the `payload` field value for the `Item`.

##### Parameters

| payload | the `payload` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setQueue (String queue)

Sets the `queue` field value for the `Item`.

##### Parameters

| queue | the `queue` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setSearchQualityMetadata (SearchQualityMetadata searchQuality)

Sets the `searchQualityMetadata` field value for the `ItemMetadata`.

Using this setter will override any value previously set using `setSearchQualityMetadataQuality(FieldOrValue)`.

##### Parameters

| searchQuality | the `SearchQualityMetadata` instance |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setSearchQualityMetadataQuality (FieldOrValue<Double> quality)

Sets the `searchQualityMetadata.quality` field value for the `ItemMetadata`.

Using this setter will override any value previously set using `setSearchQualityMetadata(SearchQualityMetadata)`.

##### Parameters

| quality | the source of the `searchQualityMetadata.quality` value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setSourceRepositoryUrl (FieldOrValue<String> url)

Sets the `sourceRepositoryUrl` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value.

##### Parameters

| url | the source of the `url` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setTitle (FieldOrValue<String> title)

Sets the `title` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value.

##### Parameters

| title | the source of the `title` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setUpdateTime (FieldOrValue<DateTime> updateTime)

Sets the `updateTime` field value for the `ItemMetadata`, either from the given field (or key) in the `values` multimap, or a literal value.

##### Parameters

| updateTime | the source of the `updateTime` field value |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setValues (Multimap<String, Object> values)

Sets the repository attributes that may be used for the `ItemMetadata` or `StructuredDataObject` fields, depending on the `FieldOrValue` setters called by the connector as well as the configuration. The map may have repeated values for a key.

##### Parameters

| values | the repository attribute values |
| --- | --- |

##### Returns

- this instance

#### public IndexingItemBuilder setVersion (byte\[\] version)

Sets the `version` field value for the `Item`.

##### Parameters

| version | the `version` field value |
| --- | --- |

##### Returns

- this instance
