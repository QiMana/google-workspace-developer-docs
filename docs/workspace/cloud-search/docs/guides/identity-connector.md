---
source: https://developers.google.com/workspace/cloud-search/docs/guides/identity-connector
root: workspace
fetched_at: 2026-04-23T15:26:09.257Z
---

# Create an identity connector

By default, Google Cloud Search only recognizes Google identities in Google Cloud Directory. Use *identity connectors* to sync enterprise identities to the Google identities Cloud Search uses.

Google provides these options for developing identity connectors:

- The Identity Connector SDK: Best for Java programmers. The SDK is a wrapper around the REST API that lets you quickly create connectors. To use the SDK, see [Create an identity connector using the Identity Connector SDK](#sdk).
- A low-level REST API and API libraries: Best for non-Java programmers. To create an identity connector using the REST API, see [Directory API: User Accounts](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users) for mapping users and [Google Cloud Identity documentation](https://cloud.google.com/identity/docs/) for mapping groups.

## Create an identity connector using the Identity Connector SDK

A typical identity connector performs these tasks:

1. Configures the connector.
2. Retrieves users from your identity system and sends them to Google.
3. Retrieves groups from your identity system and sends them to Google.

### Set up dependencies

Include these dependencies in your build file.

### Maven

```
<dependency>
  <groupId>com.google.enterprise.cloudsearch</groupId>
  <artifactId>google-cloudsearch-identity-connector-sdk</artifactId>
  <version>v1-0.0.3</version>
</dependency>
```

### Gradle

```
compile group: 'com.google.enterprise.cloudsearch',
        name: 'google-cloudsearch-identity-connector-sdk',
        version: 'v1-0.0.3'
```

### Create your connector configuration

Every connector uses a configuration file for parameters like your repository ID. Define parameters as *key-value* pairs, such as `api.sourceId=1234567890abcdef`.

The Google Cloud Search SDK includes Google-supplied parameters for all connectors. You must declare the following in your configuration file:

- **Content connector**: Declare `api.sourceId` and `api.serviceAccountPrivateKeyFile`. These identify your repository and the private key needed for access.
- **Identity connector**: Declare `api.identitySourceId` to identify your external identity source. For user syncing, also declare `api.customerId` (the unique ID for your Google Workspace account).

Declare other Google-supplied parameters only to override their default values. For details on generating IDs and keys, see [Google-supplied parameters](https://developers.google.com/workspace/cloud-search/docs/reference/connector-configuration).

You can also define repository-specific parameters in your configuration file.

### Pass the configuration file to the connector

Set the `config` system property to pass the configuration file. Use the `-D` argument when starting the connector. For example:

```
java -classpath myconnector.jar -Dconfig=MyConfig.properties MyConnector
```

If you omit this argument, the SDK attempts to use a file named `connector-config.properties` in the local directory.

## Create a full sync identity connector using a template class

The SDK includes a `FullSyncIdentityConnector` template to sync all users and groups from your repository. This section explains how to use it.

This section refers to code from the `IdentityConnectorSample.java` sample, which reads identities from CSV files.

### Implement the connector entry point

The entry point is the `main()` method. It creates an [`Application`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application) instance and calls [`start()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/Application#start\(\)) to run the connector.

Before calling `application.start()`, use [`IdentityApplication.Builder`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityApplication.Builder) to instantiate the `FullSyncIdentityConnector` template.

```
/**
 * This sample connector uses the Cloud Search SDK template class for a full
 * sync connector. In the full sync case, the repository is responsible
 * for providing a snapshot of the complete identity mappings and
 * group rosters. This is then reconciled against the current set
 * of mappings and groups in Cloud Directory.
 *
 * @param args program command line arguments
 * @throws InterruptedException thrown if an abort is issued during initialization
 */
public static void main(String[] args) throws InterruptedException {
  Repository repository = new CsvRepository();
  IdentityConnector connector = new FullSyncIdentityConnector(repository);
  IdentityApplication application = new IdentityApplication.Builder(connector, args).build();
  application.start();
}
```

The SDK calls `initConfig()` after your `main()` method calls `Application.build()`. The `initConfig()` method:

1. Ensures the [`Configuration`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration) is not already initialized.
2. Initializes the `Configuration` object with Google-supplied key-value pairs.

### Implement the Repository interface

The `Repository` object syncs repository identities to Google identities. When using a template, you only need to override certain methods. For `FullSyncIdentityConnector`, override these methods:

- [`init()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository#init\(com.google.enterprise.cloudsearch.sdk.identity.RepositoryContext\)): For setup and initialization.
- [`listUsers()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository#listUsers\(byte%5B%5D\)): To sync all users.
- [`listGroups()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository#listGroups\(byte%5B%5D\)): To sync all groups.
- (Optional) [`close()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository#close\(\)): For cleanup during shutdown.

### Get custom configuration parameters

Retrieve custom parameters from the `Configuration` object, typically in the `init()` method. The following snippet shows how to retrieve CSV paths:

```
/**
 * Initializes the repository once the SDK is initialized.
 *
 * @param context Injected context, contains convenienve methods
 *                for building users & groups
 * @throws IOException if unable to initialize.
 */
@Override
public void init(RepositoryContext context) throws IOException {
  log.info("Initializing repository");
  this.context = context;
  userMappingCsvPath = Configuration.getString(
      "sample.usersFile", "users.csv").get().trim();
  groupMappingCsvPath = Configuration.getString(
      "sample.groupsFile", "groups.csv").get().trim();
}
```

To get and parse a parameter containing several values, use one of the `Configuration` class's type parsers to parse the data into discrete chunks. The following snippet, from the tutorial connector, uses the [`getMultiValue`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#getMultiValue\(java.lang.String,%20java.util.List%3CT%3E,%20com.google.enterprise.cloudsearch.sdk.config.Configuration.Parser%3CT%3E\)) method to get a list of GitHub repository names:

```
ConfigValue<List<String>> repos = Configuration.getMultiValue(
    "github.repos",
    Collections.emptyList(),
    Configuration.STRING_PARSER);
```

### Get the mapping for all users

Override `listUsers()` to retrieve user mappings. This method accepts a checkpoint to resume syncing if interrupted. For each user:

1. Get the mapping between the Google identity and the external identity.
2. Package the pair into the iterator returned by `listUsers()`.

### Get a user mapping

This snippet demonstrates retrieving identity mappings from a CSV file:

```
/**
 * Retrieves all user identity mappings for the identity source. For the
 * full sync connector, the repository must provide a complete snapshot
 * of the mappings. This is reconciled against the current mappings
 * in Cloud Directory. All identity mappings returned here are
 * set in Cloud Directory. Any previously mapped users that are omitted
 * are unmapped.
 *
 * The connector does not create new users. All users are assumed to
 * exist in Cloud Directory.
 *
 * @param checkpoint Saved state if paging over large result sets. Not used
 *                   for this sample.
 * @return Iterator of user identity mappings
 * @throws IOException if unable to read user identity mappings
 */
@Override
public CheckpointCloseableIterable<IdentityUser> listUsers(byte[] checkpoint)
    throws IOException {
  List<IdentityUser> users = new ArrayList<>();
  try (Reader in = new FileReader(userMappingCsvPath)) {
    // Read user mappings from CSV file
    CSVParser parser = CSVFormat.RFC4180
        .withIgnoreSurroundingSpaces()
        .withIgnoreEmptyLines()
        .withCommentMarker('#')
        .parse(in);
    for (CSVRecord record : parser.getRecords()) {
      // Each record is in form: "primary_email", "external_id"
      String primaryEmailAddress = record.get(0);
      String externalId = record.get(1);
      if (primaryEmailAddress.isEmpty() || externalId.isEmpty()) {
        // Skip any malformed mappings
        continue;
      }
      log.info(() -> String.format("Adding user %s/%s",
          primaryEmailAddress, externalId));

      // Add the identity mapping
      IdentityUser user = context.buildIdentityUser(
          primaryEmailAddress, externalId);
      users.add(user);
    }
  }
  // ...
}
```

### Package a user mapping into an iterator

The `listUsers()` method returns a [`CheckpointCloseableIterable`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/CheckpointCloseableIterable) of [`IdentityUser`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityUser) objects.

```
CheckpointCloseableIterable<IdentityUser> iterator =
  new CheckpointCloseableIterableImpl.Builder<IdentityUser>(users)
      .setHasMore(false)
      .setCheckpoint((byte[])null)
      .build();
```

### Get a group

Override `listGroups()` to retrieve groups and their members. This method accepts a checkpoint. For each group:

1. Get the group and its members.
2. Package them into the iterator returned by `listGroups()`.

### Get the group identity

This snippet demonstrates retrieving groups and members from a CSV file:

```
/**
 * Retrieves all group rosters for the identity source. For the
 * full sync connector, the repository must provide a complete snapshot
 * of the rosters. This is reconciled against the current rosters
 * in Cloud Directory. All groups and members  returned here are
 * set in Cloud Directory. Any previously created groups or members
 * that are omitted are removed.
 *
 * @param checkpoint Saved state if paging over large result sets. Not used
 *                   for this sample.
 * @return Iterator of group rosters
 * @throws IOException if unable to read groups
 */    @Override
public CheckpointCloseableIterable<IdentityGroup> listGroups(byte[] checkpoint)
    throws IOException {
  List<IdentityGroup> groups = new ArrayList<>();
  try (Reader in = new FileReader(groupMappingCsvPath)) {
    // Read group rosters from CSV
    CSVParser parser = CSVFormat.RFC4180
        .withIgnoreSurroundingSpaces()
        .withIgnoreEmptyLines()
        .withCommentMarker('#')
        .parse(in);
    for (CSVRecord record : parser.getRecords()) {
      // Each record is in form: "group_id", "member"[, ..., "memberN"]
      String groupName = record.get(0);
      log.info(() -> String.format("Adding group %s", groupName));
      // Parse the remaining columns as group memberships
      Supplier<Set<Membership>> members = new MembershipsSupplier(record);
      IdentityGroup group = context.buildIdentityGroup(groupName, members);
      groups.add(group);
    }
  }
  // ...

}
```

### Package the group and members into an iterator

The `listGroups()` method returns a `CheckpointCloseableIterable` of [`IdentityGroup`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityGroup) objects.

```
CheckpointCloseableIterable<IdentityGroup> iterator =
   new CheckpointCloseableIterableImpl.Builder<IdentityGroup>(groups)
      .setHasMore(false)
      .setCheckpoint((byte[])null)
      .build();
```

## Next Steps

- (Optional) Implement [`close()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/Repository#close\(\)) to release resources.
- (Optional) [Create a content connector](https://developers.google.com/workspace/cloud-search/docs/guides/content-connector).
