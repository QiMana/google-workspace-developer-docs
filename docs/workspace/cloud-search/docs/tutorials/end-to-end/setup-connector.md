---
source: https://developers.google.com/workspace/cloud-search/docs/tutorials/end-to-end/setup-connector
root: workspace
fetched_at: 2026-04-23T15:27:03.109Z
---

# Deploy the connector

This page of the Cloud Search tutorial shows how to set up a data source and content connector for indexing data. To start from the beginning of this tutorial, refer to [Cloud Search getting started tutorial](https://developers.google.com/workspace/cloud-search/docs/tutorials/end-to-end)

## Build the connector

Change your working directory to the `cloud-search-samples/end-to-end/connector` directory and run this command:

```
mvn package -DskipTests
```

The command downloads the required dependencies needed for building the content connector and compiles the code.

## Create service account credentials

The connector requires service account credentials to call the Cloud Search APIs. To create the credentials:

1. Return to the [Google Cloud console](https://console.cloud.google.com/).
2. In the left navigation, click **Credentials**. The "Credential" page appears.
3. Click the **\+ CREATE CREDENTIALS** drop-down list and select **Service account**. The "Create service account" page appears.
4. In the **Service account name** field, enter "tutorial".
5. Note the Service account ID value (right after the Service account name). This value is used later.
6. Click **CREATE**. The "Service account permissions (optional)" dialog appears.
7. Click **CONTINUE**. The "Grant users access to this service account (optional)" dialog appears.
8. Click **DONE**. The "Credentials" screen appears.
9. Under Service Accounts, click on the service account email. The "service account details" page appeaers.
10. Under Keys, click the **ADD KEY** drop-down list and select **Create new key**. The "Create private key" dialog appears.
11. Click **CREATE**.
12. (optional) If the "Do you want to allow downloads on console.cloud.google.com?” dialog appears, click **Allow**.
13. A private key file is saved to your computer. Note the location of the downloaded file. This file is used to configure the content connector so it can authenticate itself when calling the Google Cloud Search APIs.

## Initialize third-party support

Initialize third-party support for Google Cloud Search before you call any other Cloud Search APIs.

To initialize third-party support:

1. Create web application credentials in your Cloud Search platform project. See [Create credentials](https://developers.google.com/workspace/guides/create-credentials). You need the client ID and client secret.
2. Obtain an access token using the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/):
	1. Click **OAuth 2.0 Configuration** (settings icon) and check **Use your own OAuth credentials**.
		2. Enter your client ID and client secret.
		3. In the scopes field, enter `https://www.googleapis.com/auth/cloud_search.settings` and click **Authorize APIs**.
		4. Click **Exchange authorization code for tokens**.
3. Run this curl command, replacing `[YOUR_ACCESS_TOKEN]` with your token:
	```
	curl --request POST \
	'https://cloudsearch.googleapis.com/v1:initializeCustomer' \
	  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
	  --header 'Accept: application/json' \
	  --header 'Content-Type: application/json' \
	  --data '{}' \
	  --compressed
	```
	If successful, the response body includes an [`operation`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/operations#Operation). If it fails, contact Cloud Search support.
4. Use [`operations.get`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/operations/get) to verify initialization:
	```
	curl 'https://cloudsearch.googleapis.com/v1/operations/<var>operation_name</var>?key=[YOUR_API_KEY]' \
	--header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
	--header 'Accept: application/json' \
	--compressed
	```
	Initialization is complete when `done` is `true`.

## Create the data source

Next, create a data source in the admin console. The data source provides a namespace for indexing content using the connector.

1. Open the [Google Admin console](https://admin.google.com/).
2. Click the Apps icon. The "Apps administration" page appears.
3. Click **Google Workspace**. The "Apps Google Workspace administration" page appears.
4. Scroll down and Click **Cloud Search**. The "Settings for Google Workspace" page appears.
5. Click **Third-party data sources**. The "Data Sources" page appears.
6. Click the round yellow **+**. The "Add new data source" dialog appears.
7. In the **Display name** field, type "tutorial".
8. In the **Service account email addresses** field, enter the email address of the service account you created in the previous section. If you do not know the email address of the service account, look up the value in the [service accounts](https://console.developers.google.com/iam-admin/serviceaccounts) page.
9. Click **ADD**. The "Successfully created data source" dialog appears.
10. Click \* *OK*. Note the **Source ID** for the newly created data source. The Source ID is used to configure the content connector.

## Generate a personal access token for the GitHub API

The connector requires authenticated access to the GitHub API in order to have sufficient quota. For simplicity, the connector leverages personal access tokens instead of OAuth. Personal tokens allow authenticating as a user with a limited set of permissions similar to OAuth.

1. Log in to GitHub.
2. In the upper-right corner, click on your profile picture. A drop-down menu appears.
3. Click **Settings**.
4. Click **Developer settings**.
5. Click **Personal access tokens**.
6. Click **Generate personal access token**.
7. In the **Note** field, enter "Cloud Search tutorial".
8. Check the **public\_repo** scope.
9. Click **Generate token**.
10. Note the generated token. It is used by the connector to call the GitHub APIs and provides API quota to perform the indexing.

## Configure the connector

After creating the credentials and data source, update the connector configuration to include these values:

1. From the command line, change directory to `cloud-search-samples/end-to-end/connector/`.
2. Open the `sample-config.properties` file with a text editor.
3. Set the `api.serviceAccountPrivateKeyFile` parameter to the file path of the service credentials you previously downloaded.
4. Set the `api.sourceId` parameter to the ID of the data source you previously created.
5. Set the `github.user` parameter to your GitHub username.
6. Set the `github.token` parameter to the access token you previously created.
7. Save the file.

## Update the schema

The connector indexes both structured and unstructured content. Before indexing data, you must update the schema for the data source. Run the following command to update the schema:

```
mvn exec:java -Dexec.mainClass=com.google.cloudsearch.tutorial.SchemaTool \
    -Dexec.args="-Dconfig=sample-config.properties"
```

## Run the connector

To run the connector and begin indexing, run the command:

```
mvn exec:java -Dexec.mainClass=com.google.cloudsearch.tutorial.GithubConnector \
    -Dexec.args="-Dconfig=sample-config.properties"
```

The default configuration for the connector is to index a single repository in the `googleworkspace` organization. Indexing the repository takes about 1 minute. After initial indexing, the connector continues to poll for changes to the repository that need to be reflected in the Cloud Search index.

## Reviewing the code

The remaining sections examine how the connector is built.

### Starting the application

The entry point to the connector is the `GithubConnector` class. The `main` method instantiates the SDK's [`IndexingApplication`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/IndexingApplication) and starts it.

```
/**
 * Main entry point for the connector. Creates and starts an indexing
 * application using the {@code ListingConnector} template and the sample's
 * custom {@code Repository} implementation.
 *
 * @param args program command line arguments
 * @throws InterruptedException thrown if an abort is issued during initialization
 */
public static void main(String[] args) throws InterruptedException {
  Repository repository = new GithubRepository();
  IndexingConnector connector = new ListingConnector(repository);
  IndexingApplication application = new IndexingApplication.Builder(connector, args)
      .build();
  application.start();
}
```

The [`ListingConnector`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector) provided by the SDK implements a traversal strategy that leverages [Cloud Search queues](https://developers.google.com/workspace/cloud-search/docs/guides/queues) for tracking the state of items in the index. It delegates to `GithubRepository`, implemented by the sample connector, for accessing content from GitHub.

### Traversing the GitHub repositories

During full traversals, the [`getIds()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository#getIds\(byte%5B%5D\)) method is called to push items that may need to be index into the queue.

The connector can index multiple repositories or organizations. To miminize the impact of a failure, one GitHub repository is traversed at a time. A checkpoint is returned with the results of the traversal containing the list of repositories to be index in subsequent calls to `getIds()`. If an error occurs, indexing is resumed at the current repository instead of starting from the beginning.

```
/**
 * Gets all of the existing item IDs from the data repository. While
 * multiple repositories are supported, only one repository is traversed
 * per call. The remaining repositories are saved in the checkpoint
 * are traversed on subsequent calls. This minimizes the amount of
 * data that needs to be reindex in the event of an error.
 *
 * <p>This method is called by {@link ListingConnector#traverse()} during
 * <em>full traversals</em>. Every document ID and metadata hash value in
 * the <em>repository</em> is pushed to the Cloud Search queue. Each pushed
 * document is later polled and processed in the {@link #getDoc(Item)} method.
 * <p>
 * The metadata hash values are pushed to aid document change detection. The
 * queue sets the document status depending on the hash comparison. If the
 * pushed ID doesn't yet exist in Cloud Search, the document's status is
 * set to <em>new</em>. If the ID exists but has a mismatched hash value,
 * its status is set to <em>modified</em>. If the ID exists and matches
 * the hash value, its status is unchanged.
 *
 * <p>In every case, the pushed content hash value is only used for
 * comparison. The hash value is only set in the queue during an
 * update (see {@link #getDoc(Item)}).
 *
 * @param checkpoint value defined and maintained by this connector
 * @return this is typically a {@link PushItems} instance
 */
@Override
public CheckpointCloseableIterable<ApiOperation> getIds(byte[] checkpoint)
    throws RepositoryException {
  List<String> repositories;
  // Decode the checkpoint if present to get the list of remaining
  // repositories to index.
  if (checkpoint != null) {
    try {
      FullTraversalCheckpoint decodedCheckpoint = FullTraversalCheckpoint
          .fromBytes(checkpoint);
      repositories = decodedCheckpoint.getRemainingRepositories();
    } catch (IOException e) {
      throw new RepositoryException.Builder()
          .setErrorMessage("Unable to deserialize checkpoint")
          .setCause(e)
          .build();
    }
  } else {
    // No previous checkpoint, scan for repositories to index
    // based on the connector configuration.
    try {
      repositories = scanRepositories();
    } catch (IOException e) {
      throw toRepositoryError(e, Optional.of("Unable to scan repositories"));
    }
  }

  if (repositories.isEmpty()) {
    // Nothing left to index. Reset the checkpoint to null so the
    // next full traversal starts from the beginning
    Collection<ApiOperation> empty = Collections.emptyList();
    return new CheckpointCloseableIterableImpl.Builder<>(empty)
        .setCheckpoint((byte[]) null)
        .setHasMore(false)
        .build();
  }

  // Still have more repositories to index. Pop the next repository to
  // index off the list. The remaining repositories make up the next
  // checkpoint.
  String repositoryToIndex = repositories.get(0);
  repositories = repositories.subList(1, repositories.size());

  try {
    log.info(() -> String.format("Traversing repository %s", repositoryToIndex));
    Collection<ApiOperation> items = collectRepositoryItems(repositoryToIndex);
    FullTraversalCheckpoint newCheckpoint = new FullTraversalCheckpoint(repositories);
    return new CheckpointCloseableIterableImpl.Builder<>(items)
        .setHasMore(true)
        .setCheckpoint(newCheckpoint.toBytes())
        .build();
  } catch (IOException e) {
    String errorMessage = String.format("Unable to traverse repo: %s",
        repositoryToIndex);
    throw toRepositoryError(e, Optional.of(errorMessage));
  }
}
```

The method `collectRepositoryItems()` handles the traversal of a single GitHub repo. This method returns a collection of [`ApiOperations`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) representing the items to be pushed into the queue. Items are pushed as a resource name and a hash value representing the current state of the item.

The hash value is used in subsequent traversals of the GitHub repositories. This value provides a lightweight check to determine if the content has changed without having to upload additional content. The connector blindly queues all items. If the item is new or the hash value has changed, it is made available for polling in the queue. Otherwise the item is considered unmodified.

```
/**
 * Fetch IDs to  push in to the queue for all items in the repository.
 * Currently captures issues & content in the master branch.
 *
 * @param name Name of repository to index
 * @return Items to push into the queue for later indexing
 * @throws IOException if error reading issues
 */
private Collection<ApiOperation> collectRepositoryItems(String name)
    throws IOException {
  List<ApiOperation> operations = new ArrayList<>();
  GHRepository repo = github.getRepository(name);

  // Add the repository as an item to be indexed
  String metadataHash = repo.getUpdatedAt().toString();
  String resourceName = repo.getHtmlUrl().getPath();
  PushItem repositoryPushItem = new PushItem()
      .setMetadataHash(metadataHash);
  PushItems items = new PushItems.Builder()
      .addPushItem(resourceName, repositoryPushItem)
      .build();

  operations.add(items);
  // Add issues/pull requests & files
  operations.add(collectIssues(repo));
  operations.add(collectContent(repo));
  return operations;
}
```

### Processing the queue

After the full traversal completes, the connector begins polling the queue for items that need to be indexed. The [`getDoc()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/Repository#getDoc\(com.google.api.services.cloudsearch.v1.model.Item\)) method is called for each item pulled from the queue. The method reads the item from GitHub and converts it into the proper representation for indexing.

As the connector is running against live data that may be changed at any time, `getDoc()` also verifies that the item in the queue is still valid and deletes any items from the index that no longer exist.

```
/**
 * Gets a single data repository item and indexes it if required.
 *
 * <p>This method is called by the {@link ListingConnector} during a poll
 * of the Cloud Search queue. Each queued item is processed
 * individually depending on its state in the data repository.
 *
 * @param item the data repository item to retrieve
 * @return the item's state determines which type of
 * {@link ApiOperation} is returned:
 * {@link RepositoryDoc}, {@link DeleteItem}, or {@link PushItem}
 */
@Override
public ApiOperation getDoc(Item item) throws RepositoryException {
  log.info(() -> String.format("Processing item: %s ", item.getName()));
  Object githubObject;
  try {
    // Retrieve the item from GitHub
    githubObject = getGithubObject(item.getName());
    if (githubObject instanceof GHRepository) {
      return indexItem((GHRepository) githubObject, item);
    } else if (githubObject instanceof GHPullRequest) {
      return indexItem((GHPullRequest) githubObject, item);
    } else if (githubObject instanceof GHIssue) {
      return indexItem((GHIssue) githubObject, item);
    } else if (githubObject instanceof GHContent) {
      return indexItem((GHContent) githubObject, item);
    } else {
      String errorMessage = String.format("Unexpected item received: %s",
          item.getName());
      throw new RepositoryException.Builder()
          .setErrorMessage(errorMessage)
          .setErrorType(RepositoryException.ErrorType.UNKNOWN)
          .build();
    }
  } catch (FileNotFoundException e) {
    log.info(() -> String.format("Deleting item: %s ", item.getName()));
    return ApiOperations.deleteItem(item.getName());
  } catch (IOException e) {
    String errorMessage = String.format("Unable to retrieve item: %s",
        item.getName());
    throw toRepositoryError(e, Optional.of(errorMessage));
  }
}
```

For each of the GitHub objects the connector indexes, the corresponding `indexItem()` method handles building the item representation for Cloud Search. For example, to build the representation for content items:

```
/**
 * Build the ApiOperation to index a content item (file).
 *
 * @param content      Content item to index
 * @param previousItem Previous item state in the index
 * @return ApiOperation (RepositoryDoc if indexing,  PushItem if not modified)
 * @throws IOException if unable to create operation
 */
private ApiOperation indexItem(GHContent content, Item previousItem)
    throws IOException {
  String metadataHash = content.getSha();

  // If previously indexed and unchanged, just requeue as unmodified
  if (canSkipIndexing(previousItem, metadataHash)) {
    return notModified(previousItem.getName());
  }

  String resourceName = new URL(content.getHtmlUrl()).getPath();
  FieldOrValue<String> title = FieldOrValue.withValue(content.getName());
  FieldOrValue<String> url = FieldOrValue.withValue(content.getHtmlUrl());

  String containerName = content.getOwner().getHtmlUrl().getPath();
  String programmingLanguage = FileExtensions.getLanguageForFile(content.getName());

  // Structured data based on the schema
  Multimap<String, Object> structuredData = ArrayListMultimap.create();
  structuredData.put("organization", content.getOwner().getOwnerName());
  structuredData.put("repository", content.getOwner().getName());
  structuredData.put("path", content.getPath());
  structuredData.put("language", programmingLanguage);

  Item item = IndexingItemBuilder.fromConfiguration(resourceName)
      .setTitle(title)
      .setContainerName(containerName)
      .setSourceRepositoryUrl(url)
      .setItemType(IndexingItemBuilder.ItemType.CONTAINER_ITEM)
      .setObjectType("file")
      .setValues(structuredData)
      .setVersion(Longs.toByteArray(System.currentTimeMillis()))
      .setHash(content.getSha())
      .build();

  // Index the file content too
  String mimeType = FileTypeMap.getDefaultFileTypeMap()
      .getContentType(content.getName());
  AbstractInputStreamContent fileContent = new InputStreamContent(
      mimeType, content.read())
      .setLength(content.getSize())
      .setCloseInputStream(true);
  return new RepositoryDoc.Builder()
      .setItem(item)
      .setContent(fileContent, IndexingService.ContentFormat.RAW)
      .setRequestMode(IndexingService.RequestMode.SYNCHRONOUS)
      .build();
}
```

Next, deploy the search interface.
