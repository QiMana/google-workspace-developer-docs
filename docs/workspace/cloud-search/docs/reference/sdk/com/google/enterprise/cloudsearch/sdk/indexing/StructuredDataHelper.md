---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/StructuredDataHelper
root: workspace
fetched_at: 2026-04-23T15:26:46.602Z
---

# StructuredDataHelper

Helper class for Mock Connector Structured Data

### Public Constructor Summary

[StructuredDataHelper](./StructuredDataHelper.md#StructuredDataHelper()) ()

### Public Method Summary

| static void | [assertStructuredData](./StructuredDataHelper.md#assertStructuredData(com.google.api.services.cloudsearch.v1.model.Item,%20com.google.api.services.cloudsearch.v1.model.Item,%20java.lang.String)) (Item actualItem, Item expectedItem, String schemaObjectType) |
| --- | --- |
| static void | [verifyMockContentDatasourceSchema](./StructuredDataHelper.md#verifyMockContentDatasourceSchema(com.google.api.services.cloudsearch.v1.model.Schema)) (Schema actualSchema)  Verify data source is set up with correct schema. |

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

#### public StructuredDataHelper ()

## Public Methods

#### public static void assertStructuredData (Item actualItem, Item expectedItem, String schemaObjectType)

##### Parameters

| actualItem |  |
| --- | --- |
| expectedItem |  |
| schemaObjectType |  |

##### Throws

| IOException |  |
| --- | --- |

#### public static void verifyMockContentDatasourceSchema (Schema actualSchema)

Verify data source is set up with correct schema.

##### Parameters

| actualSchema |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
