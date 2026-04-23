---
source: https://developers.google.com/workspace/cloud-search/docs/guides/content-connector
root: workspace
fetched_at: 2026-04-23T15:26:08.739Z
---

# Create a content connector

A *content connector* is a software program that traverses data in an enterprise repository and populates a data source. Google provides the following options for developing content connectors:

- The Content Connector SDK. This is a good option for Java programmers. The SDK is a wrapper around the REST API that lets you quickly create connectors. To create a content connector using the SDK, see [Create a content connector using the Content Connector SDK](#sdk).
- A low-level REST API or API libraries. Use these options if you don't use Java or if your codebase better accommodates a REST API or a library. To create a content connector using the REST API, see [Create a content connector using the REST API](#rest).

A typical content connector performs the following tasks:

1. Reads and processes configuration parameters.
2. Pulls discrete chunks of indexable data, called " *items*," from the third-party repository.
3. Combines ACLs, metadata, and content data into indexable items.
4. Indexes items to the Cloud Search data source.
5. (Optional) Listens for change notifications from the repository. Change notifications convert into indexing requests to keep the Cloud Search data source in sync. The connector only performs this task if the repository supports change detection.

## Create a content connector using the Content Connector SDK

The following sections explain how to create a content connector using the Content Connector SDK.

### Set up dependencies

Include these dependencies in your build file.

### Maven

`xml <dependency>   <groupId>com.google.enterprise.cloudsearch</groupId>   <artifactId>google-cloudsearch-indexing-connector-sdk</artifactId>   <version>v1-0.0.3</version> </dependency>`

### Gradle

`groovy compile group: 'com.google.enterprise.cloudsearch',         name: 'google-cloudsearch-indexing-connector-sdk',         version: 'v1-0.0.3'`

### Create your connector configuration

Every connector uses a configuration file for parameters like your repository ID. Define parameters as *key-value* pairs, such as `api.sourceId=1234567890abcdef`.

The Google Cloud Search SDK includes Google-supplied parameters for all connectors. You must declare the following in your configuration file:

- **Content connector**: Declare `api.sourceId` and `api.serviceAccountPrivateKeyFile`. These identify your repository and the private key needed for access.
- **Identity connector**: Declare `api.identitySourceId` to identify your external identity source. For user syncing, also declare `api.customerId` (the unique ID for your Google Workspace account).

Declare other Google-supplied parameters only to override their default values. For details on generating IDs and keys, see [Google-supplied parameters](../reference/connector-configuration.md).

You can also define repository-specific parameters in your configuration file.

### Pass the configuration file to the connector

Set the `config` system property to pass the configuration file. Use the `-D` argument when starting the connector. For example:

```
java -classpath myconnector.jar -Dconfig=MyConfig.properties MyConnector
```

If you omit this argument, the SDK attempts to use a file named `connector-config.properties` in the local directory.

### Determine your traversal strategy

The primary function of a content connector is to traverse a repository and index its data. You must implement a strategy based on your repository's size and layout. You can design your own or choose a strategy from the SDK:

*Full traversal strategy*

Scans the entire repository and indexes every item. This strategy is best for small repositories where you can afford the overhead of a full traversal during each indexing. Use it for small repositories with mostly static, non-hierarchical data, or when change detection is difficult.

*List traversal strategy*

Scans the entire repository to determine the status of each item, then indexes only new or updated items. Use this for incremental updates to a large, non-hierarchical index when change detection isn't supported.

*Graph traversal*

Scans a parent node to determine the status of its items, then indexes new or updated items in that node. It then recursively processes child nodes. Use this for hierarchical repositories where listing all IDs isn't practical, such as directory structures or websites.

The SDK implements these strategies in template connector classes. These templates can speed up your development. To use a template, see the corresponding section:

### Create a full traversal connector using a template class

This section refers to code from the [FullTraversalSample](https://github.com/googleworkspace/cloud-search-samples/tree/main/indexing/connector/sdk/full-traversal).

#### Implement the connector entry point

The entry point is the `main()` method. It creates an [`Application`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.md) instance and calls [`start()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.md#start()) to run the connector.

Before calling `application.start()`, use the [`IndexingApplication.Builder`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder.md) class to instantiate the [`FullTraversalConnector`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/FullTraversalConnector.md) template. This template accepts a [`Repository`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md) object.

```
/**
 * This sample connector uses the Cloud Search SDK template class for a full
 * traversal connector.
 *
 * @param args program command line arguments
 * @throws InterruptedException thrown if an abort is issued during initialization
 */
public static void main(String[] args) throws InterruptedException {
  Repository repository = new SampleRepository();
  IndexingConnector connector = new FullTraversalConnector(repository);
  IndexingApplication application = new IndexingApplication.Builder(connector, args).build();
  application.start();
}
```

The SDK calls `initConfig()` after your `main()` method calls `Application.build()`. The `initConfig()` method:

1. Ensures the [`Configuration`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.md) is not already initialized.
2. Initializes the `Configuration` object with Google-supplied key-value pairs.

#### Implement the Repository interface

The `Repository` object traverses and indexes repository items. When using a template, you only need to override certain methods in the `Repository` interface. For `FullTraversalConnector`, override:

- [`init()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md#init(com.google.enterprise.cloudsearch.sdk.indexing.template.RepositoryContext)): For repository setup and initialization.
- [`getAllDocs()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md#getAllDocs(byte%5B%5D)): To traverse and index all items. This is called once for each scheduled traversal.
- (Optional) [`getChanges()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md#getChanges(byte%5B%5D)): If your repository supports change detection, override this to retrieve and index modified items.
- (Optional) [`close()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md#close()): For repository cleanup during shutdown.

Each method returns an [`ApiOperation`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation.md) object, which performs indexing using `IndexingService.indexItem()`.

#### Get custom configuration parameters

To handle your connector's configuration, you must retrieve any custom parameters from the [`Configuration`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.md) object. Perform this task in your [`Repository`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md) class's [`init()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md#init(com.google.enterprise.cloudsearch.sdk.indexing.template.RepositoryContext)) method.

The `Configuration` class includes methods to retrieve different data types. Each method returns a `ConfigValue` object. Use the `ConfigValue` object's [`get()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/config/ConfigValue.md#get()) method to retrieve the value. This snippet from [`FullTraversalSample`](https://github.com/googleworkspace/cloud-search-samples/tree/main/indexing/connector/sdk/full-traversal) shows how to retrieve a custom integer value:

```
@Override
public void init(RepositoryContext context) {
  log.info("Initializing repository");
  numberOfDocuments = Configuration.getInteger("sample.documentCount", 10).get();
}
```

To retrieve and parse parameters with multiple values, use one of the `Configuration` class's type parsers. This snippet from the tutorial connector uses [`getMultiValue`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.md#getMultiValue(java.lang.String,%20java.util.List%3CT%3E,%20com.google.enterprise.cloudsearch.sdk.config.Configuration.Parser%3CT%3E)) to retrieve a list of GitHub repository names:

```
ConfigValue<List<String>> repos = Configuration.getMultiValue(
    "github.repos",
    Collections.emptyList(),
    Configuration.STRING_PARSER);
```

#### Perform a full traversal

Override `getAllDocs()` to perform a full traversal. This method accepts a checkpoint to resume indexing if interrupted. For each item:

1. Set permissions.
2. Set metadata.
3. Combine them into a [`RepositoryDoc`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc.md).
4. Package each item into the iterator returned by `getAllDocs()`.

If the item set is too large for one call, use a checkpoint and call `hasMore(true)`.

##### Set the permissions for an item

Repositories use *Access Control Lists (ACLs)* to identify users or groups with access to an item. An ACL lists the IDs of authorized users or groups.

To ensure users only see search results they are authorized to access, you must replicate your repository's ACLs. Include the ACL when indexing an item so Google Cloud Search can provide the correct access level.

The Content Connector SDK includes classes and methods to model the ACLs of most repositories. Analyze your repository's ACLs and create corresponding ACLs for Cloud Search during indexing. Modeling complex ACLs, such as those using inheritance, requires careful planning. For more information, see [Cloud Search ACLs](./acls.md).

Use the [`Acl.Builder`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder.md) class to set access. This snippet from the full traversal sample lets all domain users ([`getCustomerPrincipal()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.md#getCustomerPrincipal())) read all items ([`setReaders()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder.md#setReaders(java.util.Collection))):

```
// Make the document publicly readable within the domain
Acl acl = new Acl.Builder()
    .setReaders(Collections.singletonList(Acl.getCustomerPrincipal()))
    .build();
```

Properly modeling repository ACLs, especially those using inheritance models, requires the information in [Cloud Search ACLs](./acls.md).

##### Set the metadata for an item

Metadata is stored in an `Item` object. To create an `Item`, you need a unique ID, item type, ACL, URL, and version. Use the [`IndexingItemBuilder`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingItemBuilder.md) helper class.

```
// Url is required. Use google.com as a placeholder for this sample.
String viewUrl = "https://www.google.com";

// Version is required, set to current timestamp.
byte[] version = Longs.toByteArray(System.currentTimeMillis());

// Using the SDK item builder class to create the document with appropriate attributes
// (this can be expanded to include metadata fields etc.)
Item item = IndexingItemBuilder.fromConfiguration(Integer.toString(id))
    .setItemType(IndexingItemBuilder.ItemType.CONTENT_ITEM)
    .setAcl(acl)
    .setSourceRepositoryUrl(IndexingItemBuilder.FieldOrValue.withValue(viewUrl))
    .setVersion(version)
    .build();
```

##### Create the indexable item

Use the [`RepositoryDoc.Builder`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc.Builder.md) class.

```
// For this sample, content is just plain text
String content = String.format("Hello world from sample doc %d", id);
ByteArrayContent byteContent = ByteArrayContent.fromString("text/plain", content);

// Create the fully formed document
RepositoryDoc doc = new RepositoryDoc.Builder()
    .setItem(item)
    .setContent(byteContent, IndexingService.ContentFormat.TEXT)
    .build();
```

A `RepositoryDoc` is an `ApiOperation` that performs the `IndexingService.indexItem()` request.

Use the [`setRequestMode()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc.Builder.md#setRequestMode(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode)) method of the `RepositoryDoc.Builder` class to set the indexing request to `ASYNCHRONOUS` or `SYNCHRONOUS`:

`ASYNCHRONOUS`

This mode has longer indexing-to-serving latency but accommodates a larger throughput quota. Use asynchronous mode for initial indexing (backfill) of an entire repository.

`SYNCHRONOUS`

This mode has shorter indexing-to-serving latency but a smaller throughput quota. Use synchronous mode for indexing repository updates and changes. The request mode defaults to `SYNCHRONOUS` if unspecified.

##### Package each indexable item in an iterator

The `getAllDocs()` method returns a [`CheckpointCloseableIterable`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable.md) of `RepositoryDoc` objects. Use the [`CheckpointCloseableIterableImpl.Builder`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterableImpl.Builder.md) class.

```
CheckpointCloseableIterable<ApiOperation> iterator =
  new CheckpointCloseableIterableImpl.Builder<>(allDocs).build();
```

#### Next steps

- (Optional) If indexing throughput is slow, see [Increase indexing rate](./tune-connector.md#increase).
- (Optional) Implement `close()` to release resources.
- (Optional) [Create an identity connector](./identity-connector.md).

### Create a list traversal connector using a template class

The Cloud Search Indexing Queue holds IDs and optional hashes for repository items. A list traversal connector pushes IDs to this queue and retrieves them for indexing. Cloud Search maintains these queues to determine item status, such as deletions. See [The Cloud Search Indexing Queue](./queues.md).

This section refers to the [ListTraversalSample](https://github.com/googleworkspace/cloud-search-samples/tree/main/indexing/connector/sdk/list-traversal).

#### Implement the connector entry point

The `main()` method creates an `Application` instance and calls `start()`. Use `IndexingApplication.Builder` to instantiate the [`ListingConnector`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector.md) template.

```
/**
 * This sample connector uses the Cloud Search SDK template class for a
 * list traversal connector.
 *
 * @param args program command line arguments
 * @throws InterruptedException thrown if an abort is issued during initialization
 */
public static void main(String[] args) throws InterruptedException {
  Repository repository = new SampleRepository();
  IndexingConnector connector = new ListingConnector(repository);
  IndexingApplication application = new IndexingApplication.Builder(connector, args).build();
  application.start();
}
```

#### Implement the Repository interface

Override the following methods for `ListingConnector`:

- `init()`: For repository setup.
- [`getIds()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md#getIds(byte%5B%5D)): To retrieve IDs and hashes for all records.
- [`getDoc()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md#getDoc(com.google.api.services.cloudsearch.v1.model.Item)): To add, update, or delete items from the index.
- (Optional) `getChanges()`: For incremental updates using change detection.
- (Optional) `close()`: For repository cleanup.

#### Perform the list traversal

Override `getIds()` to retrieve IDs and hashes. Override `getDoc()` to handle each item in the Cloud Search Indexing Queue.

##### Push item IDs and hash values

Override `getIds()` to fetch IDs and content hashes. Package them into a [`PushItems`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/PushItems.md) request to the Indexing Queue.

```
PushItems.Builder allIds = new PushItems.Builder();
for (Map.Entry<Integer, Long> entry : this.documents.entrySet()) {
  String documentId = Integer.toString(entry.getKey());
  String hash = this.calculateMetadataHash(entry.getKey());
  PushItem item = new PushItem().setMetadataHash(hash);
  log.info("Pushing " + documentId);
  allIds.addPushItem(documentId, item);
}
```

Use `PushItems.Builder` to package the IDs and hashes.

```
ApiOperation pushOperation = allIds.build();
CheckpointCloseableIterable<ApiOperation> iterator =
  new CheckpointCloseableIterableImpl.Builder<>(
      Collections.singletonList(pushOperation))
  .build();
return iterator;
```

##### Retrieve and handle each item

Override `getDoc()` to handle items in the Indexing Queue. Items can be new, modified, unchanged, or deleted.

1. Check if the item ID exists in the repository. If not, delete it.
2. Poll the index for status. If unchanged (`ACCEPTED`), do nothing.
3. Index changed or new items: set permissions, set metadata, combine into a `RepositoryDoc`, and return it.

##### Handle deleted items

This snippet shows how to determine if an item exists and delete it if not.

```
String resourceName = item.getName();
int documentId = Integer.parseInt(resourceName);

if (!documents.containsKey(documentId)) {
  // Document no longer exists -- delete it
  log.info(() -> String.format("Deleting document %s", item.getName()));
  return ApiOperations.deleteItem(resourceName);
}
```

##### Handle unchanged items

Poll the Indexing Queue to handle unchanged items.

```
String currentHash = this.calculateMetadataHash(documentId);
if (this.canSkipIndexing(item, currentHash)) {
  // Document neither modified nor deleted, ack the push
  log.info(() -> String.format("Document %s not modified", item.getName()));
  PushItem pushItem = new PushItem().setType("NOT_MODIFIED");
  return new PushItems.Builder().addPushItem(resourceName, pushItem).build();
}
```

The example uses a hash to detect changes.

```
/**
 * Checks to see if an item is already up to date
 *
 * @param previousItem Polled item
 * @param currentHash  Metadata hash of the current github object
 * @return PushItem operation
 */
private boolean canSkipIndexing(Item previousItem, String currentHash) {
  if (previousItem.getStatus() == null || previousItem.getMetadata() == null) {
    return false;
  }
  String status = previousItem.getStatus().getCode();
  String previousHash = previousItem.getMetadata().getHash();
  return "ACCEPTED".equals(status)
      && previousHash != null
      && previousHash.equals(currentHash);
}
```

##### Set the permissions for an item

Repositories use *Access Control Lists (ACLs)* to identify users or groups with access to an item. An ACL lists the IDs of authorized users or groups.

To ensure users only see search results they are authorized to access, you must replicate your repository's ACLs. Include the ACL when indexing an item so Google Cloud Search can provide the correct access level.

The Content Connector SDK includes classes and methods to model the ACLs of most repositories. Analyze your repository's ACLs and create corresponding ACLs for Cloud Search during indexing. Modeling complex ACLs, such as those using inheritance, requires careful planning. For more information, see [Cloud Search ACLs](./acls.md).

Use the [`Acl.Builder`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder.md) class to set access. This snippet from the full traversal sample lets all domain users ([`getCustomerPrincipal()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.md#getCustomerPrincipal())) read all items ([`setReaders()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder.md#setReaders(java.util.Collection))):

```
// Make the document publicly readable within the domain
Acl acl = new Acl.Builder()
    .setReaders(Collections.singletonList(Acl.getCustomerPrincipal()))
    .build();
```

Properly modeling repository ACLs, especially those using inheritance models, requires the information in [Cloud Search ACLs](./acls.md).

##### Set the metadata for an item

```
// Url is required. Use google.com as a placeholder for this sample.
String viewUrl = "https://www.google.com";

// Version is required, set to current timestamp.
byte[] version = Longs.toByteArray(System.currentTimeMillis());

// Set metadata hash so queue can detect changes
String metadataHash = this.calculateMetadataHash(documentId);

// Using the SDK item builder class to create the document with
// appropriate attributes. This can be expanded to include metadata
// fields etc.
Item item = IndexingItemBuilder.fromConfiguration(Integer.toString(documentId))
    .setItemType(IndexingItemBuilder.ItemType.CONTENT_ITEM)
    .setAcl(acl)
    .setSourceRepositoryUrl(IndexingItemBuilder.FieldOrValue.withValue(viewUrl))
    .setVersion(version)
    .setHash(metadataHash)
    .build();
```

##### Create an indexable item

```
// For this sample, content is just plain text
String content = String.format("Hello world from sample doc %d", documentId);
ByteArrayContent byteContent = ByteArrayContent.fromString("text/plain", content);

// Create the fully formed document
RepositoryDoc doc = new RepositoryDoc.Builder()
    .setItem(item)
    .setContent(byteContent, IndexingService.ContentFormat.TEXT)
    .build();
```

Use the [`setRequestMode()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc.Builder.md#setRequestMode(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService.RequestMode)) method of the `RepositoryDoc.Builder` class to set the indexing request to `ASYNCHRONOUS` or `SYNCHRONOUS`:

`ASYNCHRONOUS`

This mode has longer indexing-to-serving latency but accommodates a larger throughput quota. Use asynchronous mode for initial indexing (backfill) of an entire repository.

`SYNCHRONOUS`

This mode has shorter indexing-to-serving latency but a smaller throughput quota. Use synchronous mode for indexing repository updates and changes. The request mode defaults to `SYNCHRONOUS` if unspecified.

#### Next steps

Here are a few next steps you might take:

- (optional) Implement the [`close()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md#close()) method to release any resources before shutdown.
- (optional) [Create an identity connector](./identity-connector.md) using the Content Connector SDK.

### Create a graph traversal connector using a template class

The Cloud Search Indexing Queue holds IDs and optional hash values for each item in the repository. A graph traversal connector pushes item IDs to the Google Cloud Search Indexing Queue and retrieves them one at a time for indexing. Google Cloud Search maintains queues and compares queue contents to determine item status, such as whether an item has been deleted from the repository. For more information about the Cloud Search Indexing Queue, see [The Google Cloud Search Indexing Queue](./queues.md).

During indexing, the item content is fetched from the data repository and any child item IDs are pushed to the queue. The connector recursively processes parent and child IDs until all items are handled.

#### Implement the connector's entry point

The entry point to a connector is the `main()` method. This method creates an instance of the [`Application`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.md) class and calls its [`start()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.md#start()) method to run the connector.

Before calling [`application.start()`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/Application.md#start()), use the [`IndexingApplication.Builder`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication.Builder.md) class to instantiate the `ListingConnector` template. The [`ListingConnector`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector.md) accepts a [`Repository`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository.md) object whose methods you implement.

#### Implement the Repository interface

Override `init()`, `getIds()`, `getDoc()`, and optionally `getChanges()` or `close()`.

#### Perform the graph traversal

Override `getIds()` to retrieve initial IDs and `getDoc()` to handle items and push child IDs to the queue.

##### Push item IDs and hash values

```
PushItems.Builder allIds = new PushItems.Builder();
PushItem item = new PushItem();
allIds.addPushItem("root", item);
```

##### Retrieve and handle each item

1. Check if the ID exists in the repository. If not, delete the item.
2. For existing items, set permissions and metadata, and combine them into a `RepositoryDoc`.
3. Push child IDs to the Indexing Queue.
4. Return the `RepositoryDoc`.

##### Handle deleted items

```
String resourceName = item.getName();
if (documentExists(resourceName)) {
  return buildDocumentAndChildren(resourceName);
}
// Document doesn't exist, delete it
log.info(() -> String.format("Deleting document %s", resourceName));
return ApiOperations.deleteItem(resourceName);
```

##### Set metadata and create the item

```
// Url is required. Use google.com as a placeholder for this sample.
String viewUrl = "https://www.google.com";

// Version is required, set to current timestamp.
byte[] version = Longs.toByteArray(System.currentTimeMillis());

// Using the SDK item builder class to create the document with
// appropriate attributes. This can be expanded to include metadata
// fields etc.
Item item = IndexingItemBuilder.fromConfiguration(documentId)
    .setItemType(IndexingItemBuilder.ItemType.CONTENT_ITEM)
    .setAcl(acl)
    .setSourceRepositoryUrl(IndexingItemBuilder.FieldOrValue.withValue(viewUrl))
    .setVersion(version)
    .build();
```

```
// For this sample, content is just plain text
String content = String.format("Hello world from sample doc %s", documentId);
ByteArrayContent byteContent = ByteArrayContent.fromString("text/plain", content);

RepositoryDoc.Builder docBuilder = new RepositoryDoc.Builder()
    .setItem(item)
    .setContent(byteContent, IndexingService.ContentFormat.TEXT);
```

##### Place child IDs in the Indexing Queue

```
// Queue the child nodes to visit after indexing this document
Set<String> childIds = getChildItemNames(documentId);
for (String id : childIds) {
  log.info(() -> String.format("Pushing child node %s", id));
  PushItem pushItem = new PushItem();
  docBuilder.addChildId(id, pushItem);
}

RepositoryDoc doc = docBuilder.build();
```

## Create a content connector using the REST API

The following sections explain how to create a content connector using the REST API.

### Determine your traversal strategy

The strategies (Full, List, and Graph) are conceptually the same as for the SDK. Implement your chosen strategy using the REST API.

### Implement your traversal strategy and index items

Register your schema, then populate the index using:

1. (Optional) [`items.upload`](../reference/rest/v1/indexing.datasources.items/upload.md) for files larger than 100 KiB.
2. (Optional) [`media.upload`](../reference/rest/v1/media/upload.md) for media files.
3. [`items.index`](../reference/rest/v1/indexing.datasources.items.md) to index the item.
	Example indexing request:
	```
	{
	  "name": "datasource/<data_source_id>/items/titanic",
	  "acl": {
	    "readers": [
	      {
	        "gsuitePrincipal": {
	          "gsuiteDomain": true
	        }
	      }
	    ]
	  },
	  "metadata": {
	    "title": "Titanic",
	    "viewUrl": "http://www.imdb.com/title/tt2234155/",
	    "objectType": "movie"
	  },
	  "structuredData": {
	    "object": {
	      "properties": [
	        {
	          "name": "movieTitle",
	          "textValues": { "values": ["Titanic"] }
	        }
	      ]
	    }
	  },
	  "content": {
	    "inlineContent": "A seventeen-year-old aristocrat falls in love...",
	    "contentFormat": "TEXT"
	  },
	  "version": "01",
	  "itemType": "CONTENT_ITEM"
	}
	```
4. (Optional) Use `items.get` to verify indexing.

### Handle repository changes

Periodically reindex the entire repository for full indexing. For list or graph traversal, use the [Google Cloud Indexing Queue](./queues.md) to track changes and only index what has changed. Use `items.push` to add items to the queue.
