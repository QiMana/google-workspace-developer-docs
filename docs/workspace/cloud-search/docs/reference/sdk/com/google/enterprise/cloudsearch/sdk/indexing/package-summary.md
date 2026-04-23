---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/package-summary
root: workspace
fetched_at: 2026-04-23T15:26:49.327Z
---

# com.google.enterprise.cloudsearch.sdk.indexing

### Interfaces

| [BatchingIndexingService](./BatchingIndexingService.md) | Indexing Service for batching multiple API requests. |
| --- | --- |
| [BatchItemRetriever](./BatchItemRetriever.md) | Connector specific implementation for handling a batch of `Item` instances from `PollItemsResponse`. |
| [ContentUploadService](./ContentUploadService.md) | Service for uploading media content using Google Cloud Search ByteStream API. |
| [IndexingConnector](./IndexingConnector.md) | Interface for user-specific implementation details of the connector. |
| [IndexingConnectorContext](./IndexingConnectorContext.md) | Interface for a context object created by the SDK to pass to the `IndexingConnector` code. |
| [IndexingService](./IndexingService.md) | Access point between the connector developer and the indexing service API backend. |
| [ItemRetriever](./ItemRetriever.md) | Connector specific implementation for handling `Item` from `PollItemsResponse`. |

### Classes

| [Acl](./Acl.md) | Represents all aspects of access permissions for an uploaded document. |
| --- | --- |
| [Acl.Builder](./Acl.Builder.md) | Mutable ACL for creating instances of `Acl`. |
| [Acl.GroupPrincipalParser](./Acl.GroupPrincipalParser.md) | Parser used to extract a group principal of either "google" or "external" type. |
| [Acl.UserPrincipalParser](./Acl.UserPrincipalParser.md) | Parser used to extract a user principal of either "google" or "external" type. |
| [BatchingIndexingServiceImpl](./BatchingIndexingServiceImpl.md) | Concrete class implementing `BatchingIndexingService`. |
| [BatchingIndexingServiceImpl.Builder](./BatchingIndexingServiceImpl.Builder.md) | Builder for creating an instance of `BatchingIndexingServiceImpl` |
| [CloudSearchService](./CloudSearchService.md) | Service wrapper for Cloud Search API client. |
| [ConnectorTraverser](./ConnectorTraverser.md) | Handles scheduling and execution of indexing connector traversal related tasks. |
| [ConnectorTraverser.Builder](./ConnectorTraverser.Builder.md) |  |
| [ContentTemplate](./ContentTemplate.md) | Utility to create an HTML template used for formatting content from repository field data (database, CSV, CRM, etc.) for uploading to Cloud Search. |
| [ContentTemplate.Builder](./ContentTemplate.Builder.md) |  |
| [ContentUploadServiceImpl](./ContentUploadServiceImpl.md) | Concrete class implementing `ContentUploadService`  Document content uploads normally occur "in-line" as part of the item's upload request. |
| [ContentUploadServiceImpl.Builder](./ContentUploadServiceImpl.Builder.md) | Builder to create an instance of `ContentUploadServiceImpl`. |
| [DefaultAcl](./DefaultAcl.md) | Common default ACL object that can be used for an entire data repository. |
| [DefaultAcl.Builder](./DefaultAcl.Builder.md) | Builder object for constructing a `DefaultAcl` object. |
| [IndexingApplication](./IndexingApplication.md) | Main object and access point for the SDK. |
| [IndexingApplication.Builder](./IndexingApplication.Builder.md) | Buider for `IndexingApplication` instances. |
| [IndexingItemBuilder](./IndexingItemBuilder.md) | Helper object to build an `Item`. |
| [IndexingItemBuilder.FieldOrValue](./IndexingItemBuilder.FieldOrValue.md) <T> | Construct to specify an actual field value or pointer to a key within the key/values map. |
| [IndexingServiceImpl](./IndexingServiceImpl.md) | Wrapper object for `CloudSearch.Indexing`. |
| [IndexingServiceImpl.Builder](./IndexingServiceImpl.Builder.md) |  |
| [IndexingServiceImpl.ServiceManagerHelper](./IndexingServiceImpl.ServiceManagerHelper.md) |  |
| [MockItem](./MockItem.md) | Generates an Item using `IndexingItemBuilder` with specified values for metadata. |
| [MockItem.Builder](./MockItem.Builder.md) | Builder class to set meta data attributes of an Item. |
| [StructuredData](./StructuredData.md) | Helper utility to generate a `StructuredDataObject`. |
| [StructuredData.ResetStructuredDataRule](./StructuredData.ResetStructuredDataRule.md) | `TestRule` to reset the static `StructuredData` object for unit tests. |
| [StructuredDataHelper](./StructuredDataHelper.md) | Helper class for Mock Connector Structured Data |
| [TestUtils](./TestUtils.md) | Utility methods for integration tests for the indexing SDK. |
| [UrlBuilder](./UrlBuilder.md) | Constructs an URL from a `MessageFormat` -style format string and a set of columns to include in the URL. |
| [UrlBuilder.Builder](./UrlBuilder.Builder.md) | Builder for constructing instances of `UrlBuilder`. |

### Enums

| [Acl.InheritanceType](./Acl.InheritanceType.md) | The enum that presents the type of inheritance. |
| --- | --- |
| [Acl.PrincipalType](./Acl.PrincipalType.md) | Represents type of a `Principal` |
| [ContentTemplate.UnmappedColumnsMode](./ContentTemplate.UnmappedColumnsMode.md) | Defines how to treat extra field data provided to the `apply(Map)` call. |
| [DefaultAcl.DefaultAclMode](./DefaultAcl.DefaultAclMode.md) | Mode setting used to set a default ACL on an `Item`. |
| [IndexingItemBuilder.ItemType](./IndexingItemBuilder.ItemType.md) |  |
| [IndexingService.ContentFormat](./IndexingService.ContentFormat.md) |  |
| [IndexingService.RequestMode](./IndexingService.RequestMode.md) | Request mode for `Item` index and delete requests. |
| [IndexingServiceImpl.Operations](./IndexingServiceImpl.Operations.md) | API Operations |
| [IndexingServiceImpl.PollItemStatus](./IndexingServiceImpl.PollItemStatus.md) | Valid values for poll `Item` status. |
