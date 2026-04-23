---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/StructuredData
root: workspace
fetched_at: 2026-04-23T15:26:45.515Z
---

# StructuredData

Helper utility to generate a `StructuredDataObject`.

Structured data initialization occurs when `start()` calls `initFromConfiguration(IndexingService)`. Once initialized, `IndexingItemBuilder` calls `getStructuredData(String, Multimap)` to generate a `StructuredDataObject` for each document.

Typically the connector code does not access the structured data objects and methods directly. The `build()` automates the structure data generation using the connector provided data values when creating a document item:

```
String itemName = ... // set the unique ID for the item
 String objectType = ... // set the schema object type (possibly from the config file)
 // build a map that contains structured data values to pass on to the item builder
 Multimap<String, Object> multiMapValues = ... // populate item values from your data repository
 // ... add other item metadata values from your data repository

 // build the item
 Item item = IndexingItemBuilder.fromConfiguration(itemName)
     .setObjectType(objectType)
     .setValues(multiMapValues)
     // set other metadata such as setAcl, setItemType, setSourceRepositoryUrl, and so on
     .build();
```

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/StructuredData.ResetStructuredDataRule">StructuredData.ResetStructuredDataRule</a></td><td width="100%"><code>TestRule</code> to reset the static <code>StructuredData</code> object for unit tests.</td></tr></tbody></table>

### Constant Summary

| String | [DATETIME\_PATTERNS](./StructuredData.md#DATETIME_PATTERNS) |  |
| --- | --- | --- |
| String | [LOCAL\_SCHEMA](./StructuredData.md#LOCAL_SCHEMA) |  |

### Public Method Summary

| static StructuredDataObject | [getStructuredData](./StructuredData.md#getStructuredData(java.lang.String,%20com.google.common.collect.Multimap%3Cjava.lang.String,%20java.lang.Object%3E)) (String objectType, Multimap<String, Object> values)  Generate a `StructuredDataObject` for the given object type using the input values. |
| --- | --- |
| static boolean | [hasObjectDefinition](./StructuredData.md#hasObjectDefinition(java.lang.String)) (String objectType)  Returns true if object definition is available in `Schema` for specified objectType. |
| synchronized static void | [init](./StructuredData.md#init(com.google.api.services.cloudsearch.v1.model.Schema)) (Schema schema)  Initializes the `StructuredData` object as defined by the `Schema`. |
| synchronized static void | [initFromConfiguration](./StructuredData.md#initFromConfiguration(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService)) ([IndexingService](./IndexingService.md) indexingService)  Initializes the `StructuredData` object as defined by a configured or default `Schema`. |
| static boolean | [isInitialized](./StructuredData.md#isInitialized()) ()  Determines whether the `StructuredData` object has been initialized. |

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

#### public static final String DATETIME\_PATTERNS

Constant Value: "structuredData.dateTimePatterns"

#### public static final String LOCAL\_SCHEMA

Constant Value: "structuredData.localSchema"

## Public Methods

#### public static StructuredDataObject getStructuredData (String objectType, Multimap<String, Object> values)

Generate a `StructuredDataObject` for the given object type using the input values.

The object type must be present in the current schema. The structured data properties are populated with the matching named values. `init(Schema)` must be executed before calling this method to initialize the structure data mappings.

##### Parameters

| objectType | object type name as defined in `getName()` |
| --- | --- |
| values | `Multimap` of values to generate the `StructuredDataObject` |

##### Returns

- `StructuredDataObject` structured data

#### public static boolean hasObjectDefinition (String objectType)

Returns true if object definition is available in `Schema` for specified objectType. False if if object definition is not available in `Schema`.

##### Parameters

| objectType | to check if object definition is available in schema. |
| --- | --- |

##### Returns

- true if object definition is available. False otherwise.

##### Throws

|  | IllegalStateException} if structured data object is not initialized yet. |
| --- | --- |

#### public static synchronized void init (Schema schema)

Initializes the `StructuredData` object as defined by the `Schema`.

Build a map of all the structured data objects to their property definitions. This is used during document indexing to populate the document's data values to the appropriate structured data fields. This method must be executed before any other structured data methods can be called.

If called again after initialization, the schema data will be updated to that in the `schema` parameter.

##### Parameters

| schema | the schema defined in the data source |
| --- | --- |

#### public static synchronized void initFromConfiguration (IndexingService indexingService)

Initializes the `StructuredData` object as defined by a configured or default `Schema`.

Build a map of all the structured data objects to their property definitions. This is used during document indexing to populate the document's data values to the appropriate structured data fields. This method must be executed before any other structured data methods can be called.

If called again after initialization, the schema data will be reread from either the configured local schema file or the default schema.

##### Parameters

| indexingService | `IndexingService` instance used to get the default schema |
| --- | --- |

#### public static boolean isInitialized ()

Determines whether the `StructuredData` object has been initialized.

The method `init(Schema)` must be called first to initialize structured data.

##### Returns

- `true` if the `StructuredData` object has been initialized
