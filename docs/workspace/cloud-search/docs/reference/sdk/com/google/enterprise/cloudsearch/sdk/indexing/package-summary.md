---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/package-summary
root: workspace
fetched_at: 2026-04-23T15:26:49.327Z
---

# com.google.enterprise.cloudsearch.sdk.indexing

### Interfaces

| [BatchingIndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingService) | Indexing Service for batching multiple API requests. |
| --- | --- |
| [BatchItemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchItemRetriever) | Connector specific implementation for handling a batch of `Item` instances from `PollItemsResponse`. |
| [ContentUploadService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadService) | Service for uploading media content using Google Cloud Search ByteStream API. |
| [IndexingConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnector) | Interface for user-specific implementation details of the connector. |
| [IndexingConnectorContext](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingConnectorContext) | Interface for a context object created by the SDK to pass to the `IndexingConnector` code. |
| [IndexingService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService) | Access point between the connector developer and the indexing service API backend. |
| [ItemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ItemRetriever) | Connector specific implementation for handling `Item` from `PollItemsResponse`. |

### Classes

| [Acl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl) | Represents all aspects of access permissions for an uploaded document. |
| --- | --- |
| [Acl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder) | Mutable ACL for creating instances of `Acl`. |
| [Acl.GroupPrincipalParser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.GroupPrincipalParser) | Parser used to extract a group principal of either "google" or "external" type. |
| [Acl.UserPrincipalParser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.UserPrincipalParser) | Parser used to extract a user principal of either "google" or "external" type. |
| [BatchingIndexingServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl) | Concrete class implementing `BatchingIndexingService`. |
| [BatchingIndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchingIndexingServiceImpl.Builder) | Builder for creating an instance of `BatchingIndexingServiceImpl` |
| [CloudSearchService](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/CloudSearchService) | Service wrapper for Cloud Search API client. |
| [ConnectorTraverser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser) | Handles scheduling and execution of indexing connector traversal related tasks. |
| [ConnectorTraverser.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ConnectorTraverser.Builder) |  |
| [ContentTemplate](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate) | Utility to create an HTML template used for formatting content from repository field data (database, CSV, CRM, etc.) for uploading to Cloud Search. |
| [ContentTemplate.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate.Builder) |  |
| [ContentUploadServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadServiceImpl) | Concrete class implementing `ContentUploadService`  Document content uploads normally occur "in-line" as part of the item's upload request. |
| [ContentUploadServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentUploadServiceImpl.Builder) | Builder to create an instance of `ContentUploadServiceImpl`. |
| [DefaultAcl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl) | Common default ACL object that can be used for an entire data repository. |
| [DefaultAcl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder) | Builder object for constructing a `DefaultAcl` object. |
| [IndexingApplication](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication) | Main object and access point for the SDK. |
| [IndexingApplication.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder) | Buider for `IndexingApplication` instances. |
| [IndexingItemBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder) | Helper object to build an `Item`. |
| [IndexingItemBuilder.FieldOrValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.FieldOrValue) <T> | Construct to specify an actual field value or pointer to a key within the key/values map. |
| [IndexingServiceImpl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl) | Wrapper object for `CloudSearch.Indexing`. |
| [IndexingServiceImpl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Builder) |  |
| [IndexingServiceImpl.ServiceManagerHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.ServiceManagerHelper) |  |
| [MockItem](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/MockItem) | Generates an Item using `IndexingItemBuilder` with specified values for metadata. |
| [MockItem.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/MockItem.Builder) | Builder class to set meta data attributes of an Item. |
| [StructuredData](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/StructuredData) | Helper utility to generate a `StructuredDataObject`. |
| [StructuredData.ResetStructuredDataRule](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/StructuredData.ResetStructuredDataRule) | `TestRule` to reset the static `StructuredData` object for unit tests. |
| [StructuredDataHelper](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/StructuredDataHelper) | Helper class for Mock Connector Structured Data |
| [TestUtils](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/TestUtils) | Utility methods for integration tests for the indexing SDK. |
| [UrlBuilder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder) | Constructs an URL from a `MessageFormat` -style format string and a set of columns to include in the URL. |
| [UrlBuilder.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/UrlBuilder.Builder) | Builder for constructing instances of `UrlBuilder`. |

### Enums

| [Acl.InheritanceType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.InheritanceType) | The enum that presents the type of inheritance. |
| --- | --- |
| [Acl.PrincipalType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.PrincipalType) | Represents type of a `Principal` |
| [ContentTemplate.UnmappedColumnsMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ContentTemplate.UnmappedColumnsMode) | Defines how to treat extra field data provided to the `apply(Map)` call. |
| [DefaultAcl.DefaultAclMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.DefaultAclMode) | Mode setting used to set a default ACL on an `Item`. |
| [IndexingItemBuilder.ItemType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.ItemType) |  |
| [IndexingService.ContentFormat](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.ContentFormat) |  |
| [IndexingService.RequestMode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingService.RequestMode) | Request mode for `Item` index and delete requests. |
| [IndexingServiceImpl.Operations](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.Operations) | API Operations |
| [IndexingServiceImpl.PollItemStatus](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingServiceImpl.PollItemStatus) | Valid values for poll `Item` status. |
