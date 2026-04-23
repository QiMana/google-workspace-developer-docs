---
source: https://developers.google.com/workspace/cloud-search/docs/reference/connector-configuration
root: workspace
fetched_at: 2026-04-23T15:26:11.174Z
---

# Google-supplied configuration parameters

Every connector has an associated configuration file containing parameters used by the connector, such as the ID for your repository. Parameters are defined as *key-value* pairs, such as `api.sourceId=1234567890abcdef`.

The Google Cloud Search SDK contains several Google-supplied configuration parameters used by different connectors. Of the Google-supplied configuration parameters, only the [Data source access](#datasource) parameters are required to be defined in your configuration file. You do not need to redefine the Google-supplied parameters in your configuration file *unless* you want to override their default values.

This reference describes the Google-supplied configuration parameters.

## Configuration file example

The following example shows a identity configuration file with parameter key-value pairs.

```
#
# Configuration file sample
#
api.sourceId=1234567890abcdef
api.identitySourceId=0987654321lmnopq
api.serviceAccountPrivateKeyFile= ./PrivateKey.json

#
# Traversal schedules
#
schedule.traversalIntervalSecs=7200
schedule.incrementalTraversalIntervalSecs=600
#
# Default ACLs
#
defaultAcl.mode=fallback
defaultAcl.public=true
```

## Commonly set parameters

This section lists required and optional commonly set configuration parameters. If you do not change values for the optional parameters, the connector uses the default values provided by the SDK.

### Data source access

The following table lists all of the parameters that are required to appear in a configuration file. The parameters you use depend on the type of connector you are building (content connector or identity connector).

| Setting | Parameter |
| --- | --- |
| Data source id | `**api.sourceId**=1234567890abcdef`  This parameter is required by a connector to identify the location of your repository. You obtain this value when you [added a data source to search](https://support.google.com/a/answer/7056471). This parameter must be in connector configuration files. |
| Identity source id | `**api.identitySourceId**=0987654321lmnopq`  This parameter is required by identity connectors to identify the location of an external identity source. You obtained this value when you [map user identities in Cloud Search](https://support.google.com/a/answer/9039510). This parameter must be in all identity connector configuration files. |
| Service account private key file | `**api.serviceAccountPrivateKeyFile**=./PrivateKey.json`  This parameteter contains the private key needed to access the repository. You obtained this value when you [configured access to the Google Cloud Search REST API](https://developers.google.com/workspace/cloud-search/guides/project-setup). This parameter must be in all configuration files. |
| Service account ID | `**api.serviceAccountId**=123abcdef4567890`  This parameter specifies the service account ID. The default empty string value is only allowable when the configuration file specifies a private key file parameter. This parameter is required if your private key file is not a JSON key. |
| Google Workspace Account ID | `**api.customerId**=123abcdef4567890`  This parameter specifies the account ID for the enterprise's Google Workspace account. You obtained this value when you [map user identities in Cloud Search](https://support.google.com/a/answer/9039510#customer_id). This parameter is required when syncing users using an identity connector. |
| Root URL | `**api.rootUrl**=baseURLPath`  This parameter specifies the indexing service base URL path.  The default value for this parameter is an empty string which is converted to `https://cloudsearch.googleapis.com`. |

### Traversal schedules

The scheduling parameters determine how often the connector waits between traversals.

| Setting | Parameter |
| --- | --- |
| Full traversal at connector startup | `**schedule.performTraversalOnStart**=true\|false`  The connector performs a full traversal at connector startup, rather than waiting for the first interval to expire. The default value is `true.` |
| Full traversal after an interval | `**schedule.traversalIntervalSecs**=intervalInSeconds`  The connector performs a full traversal after a specified interval. Specify the interval between traversals in seconds. The default value is `86400` (number of seconds in one day). |
| Exit after a single traversal | `**connector.runOnce**=true\|false`  The connector runs a full traversal once, then exits. This parameter should only be set to `true` if you're using a full traversal strategy; listing and graph strategies require multiple traversals to detect changes and index content. The default value is `false` (do not exit after a single traversal). |
| Incremental traversal after an interval | `**schedule.incrementalTraversalIntervalSecs**=intervalInSeconds`  The connector performs an incremental traversal after a specified interval. Specify the interval between traversals in seconds. The default value is `300` (number of seconds in 5 minutes). |
| Scheduled poll queue intervals | `**schedule.pollQueueIntervalSecs**=interval_in_seconds`  The interval between scheduled poll queue intervals (in seconds). This is used only by a listing traversal connector. The default value is `10.` |

### Access control lists

The connector controls access to items by using ACLs. Multiple parameters allow you to protect user access to indexed records with ACLs.

If your repository has individual ACL information associated with each item, upload all ACL information to control item access within Cloud Search. If your repository provides partial or no ACL information, you can supply default ACL information in the following parameters, which the SDK provides to the connector.

| Setting | Parameter |
| --- | --- |
| ACL mode | `**defaultAcl.mode**=mode`  Determines when to apply the default ACL. Valid values:  - `none`: do not use default ACL (in this mode, records are unsearchable unless you define individual ACLs) - `fallback`: use default ACL only if no ACL already present - `append`: add default ACL to existing ACL - `override`: replace existing ACL with default ACL  The default mode is `none`. |
| Default public ACL | `**defaultAcl.public**=true\|false`  The default ACL used for the entire repository is set to public domain access. The default value is `false. ` |
| Common ACL group readers | `**defaultAcl.readers.groups**=**google:**group1@mydomain.com,        group2` |
| Common ACL readers | `**defaultAcl.readers.users**=user1, user2,     **google:**user3@mydomain.com` |
| Common ACL denied group readers | `**defaultAcl.denied.groups**=group3` |
| Common Acl denied readers | `**defaultAcl.denied.users**=user4, user5` |
| Entire domain access | To specify that every indexed record be publicly accessible by every user in the domain, set both of the following parameters with values: - `**defaultAcl.mode**=override` - `**defaultACL.public**=true` |
| Common defined ACL | To specify one ACL for each record of the data repository, set all of the following parameter values: - `**defaultAcl.mode**=fallback` - `**defaultAcl.public**=false` - `**defaultAcl.readers.groups**=**google**:group1@mydomain.com,           group2 ` code> - `**defaultAcl.readers.users**=user1@mydomain.com, user2,           **google:**user3@mydomain.com` - `**defaultAcl.denied.groups**=group3` - `**defaultAcl.denied.users**=user4, user5` 	Every specified user and group is assumed to be a local domain defined user/group unless prefixed with " `google:`" (literal constant). 	The default user or group is an empty string. Supply user and group parameters only if `defaultAcl.public` is set to `false`. To list multiple groups and users, use comma-delimited lists. 	If `defaultAcl.mode` is set to `none`, records are unsearchable without defined individual ACLs. |

### Metadata configuration parameters

Some of the item metadata is configurable. Connectors can set configurable metadata fields during indexing. If the connector doesn't set a field, the parameters in your configuration file are used to set the field.

The configuration file's has a series of named metadata configuration parameters indicated by a `.field` suffix, such as `itemMetadata.title.field=movieTitle`. If there is a value for these parameters, it is used to configure the metadata field. If there is no value for the named metadata parameter, the metadata is configured using an parameter with the `.defaultValue` suffix).

The following table shows metadata configuration parameters.

| **Setting** | **Parameter** |
| --- | --- |
| Title | **`itemMetadata.title.field=movieTitle`**   **`` itemMetadata.title.defaultValue=`Gone with the Wind` ``**   The item title. If the `title.field` isn't set to a value, the value for `title.defaultValue` is used. |
| Source repository URL | **`itemMetadata.sourceRepositoryUrl.field=url`**   **`itemMetadata.sourceRepositoryUrl.defaultValue=https://www.imdb.com/title/tt0031381/`**   The item URL used in search results. You might just set the `defaultValue` to hold a URL for the entire repository, such as if your repsitory is a CSV file and there is only one URL for every item. If the `sourceRepositoryUrl.field` isn't set to a value, the value for `sourceRepositoryUrl.defaultValue` is used. |
| Container name | **`itemMetadata.containerName.field=containerName`**   **`itemMetadata.containerName.defaultValue=myDefaultContainerName`**   The name of the item's container, such as the name of a file system directory or folder. If the `containerName.field` isn't set to a value, the value for `containerName.defaultValue` is used. |
| Object type | **`itemMetadata.objectType.field=type`**   **`` itemMetadata.objectType.defaultValue=`movie` ``**   The object type used by the connector, as defined in the [schema](https://developers.google.com/workspace/cloud-search/docs/guides/schema-guide). The connector won't index any structured data if this property is not specified.   If the `objectType.field` isn't set to a value, the value for `objectType.defaultValue` is used. |
| Create time | **`itemMetadata.createTime.field=releaseDate`**   **`itemMetadata.createTime.defaultValue=1940-01-17`**   The document creation timestamp. If the `createTime.field` isn't set to a value, the value for `createTime.defaultValue` is used. |
| Update time | **`itemMetadata.updateTime.field=releaseDate`**   **`itemMetadata.updateTime.defaultValue=1940-01-17`**   The last modification timestamp for the item. If the `updateTime.field` isn't set to a value, the value for `updateTime.defaultValue` is used. |
| Content language | **`itemMetadata.contentLanguage.field=languageCode`**   **`` itemMetadata.contentLanguage.defaultValue=`en-US` ``**   The content language for documents being indexed. If the `contentLanguage.field` isn't set to a value, the value for `contentLanguage.defaultValue` is used. |
| Mime type | **`itemMetadata.mimeType.field=mimeType`**   **`` itemMetadata.mimeType.defaultValue=`image/bmp` ``**   The original mime-type of ItemContent.content in the source repository. The maximum length is 256 characters. If the `mimeType.field` isn't set to a value, the value for `mimeType.defaultValue` is used. |
| Search quality metadata | **`itemMetadata.searchQualityMetadata.quality.field=quality`**   **`` itemMetadata.searchQualityMetadata.quality.defaultValue=`1` ``**   An indication of the quality of the item, used to influence search quality. Value should be between 0.0 (lowest quality) and 1.0 (highest quality). The default value is 0.0. If the `quality.field` isn't set to a value, the value for `quality.defaultValue` is used. |
| Hash | **`itemMetadata.hash.field=hash`**   **`itemMetadata.hash.defaultValue=f0fda58630310a6dd91a7d8f0a4ceda2`**   Hashing value provided by the API caller. This can be used with the `items.push` method to calculate modified state. The maximum length is 2048 characters. If the `hash.field` isn't set to a value, the value for `hash.defaultValue` is used. |

#### Datetime formats

Datetime formats specify the formats expected in metadata attributes. If the configuration file does not contain this parameter, default values are used. The following table shows this parameter.

| **Setting** | **Parameter** |
| --- | --- |
| Additional datetime formats | **`structuredData.dateTimePatterns=MM/dd/uuuu HH:mm:ssXXX`**   A semicolon-separated list of additional `java.time.format.DateTimeFormatter` patterns. The patterns are used when parsing string values for any date or date-time fields in the metadata or schema. The default value is an empty list, but RFC 3339 and RFC 1123 formats are always supported. |

### Structured data

The Cloud Search Indexing API provides a schema service that you can use to customize how Cloud Search indexes and serves your data. If you are using a local repository schema, you must specify the structured data local schema name.

| Setting | Parameter |
| --- | --- |
| Local schema name | `**structuredData.localSchema**=mySchemaName`  The schema name is read from the data source and used for repository structured data.  The default is an empty string. |

### Content and search quality

For repositories that contain record or field-based content (such as a CRM, CVS, or database), the SDK allows automatic HTML formatting for data fields. Your connector defines the data fields at the beginning of connector execution, and then uses a content template to format each data record before uploading it to Cloud Search.

The content template defines the importance of each field value for searching. The HTML `<title>` field is required and defined as the highest priority. You can designate search quality importance levels for all the other content fields: high, medium or low. Any content field not defined in a specific category defaults to low priority.

| Setting | Parameter |
| --- | --- |
| Content HTML title | `**contentTemplate.templateName.title**=myTitleField`  The content HTML title and highest search quality field. This parameter is required only if you are using an HTML content template. The default value is an empty string. |
| High search quality for content fields | `**contentTemplate.templateName.quality.high**=hField1,hField2`  Content fields given a high search priority. The default is an empty string. |
| Medium search quality for content fields | `**contentTemplate.templateName.quality.medium**=mField1,mField2`  Content fields given a medium search priority. The default is an empty string. |
| Low search quality for content fields | `**contentTemplate.templateName.quality.low**=lField1,lField2`  Content fields given a low search priority. The default is an empty string. |
| Unspecified content fields | `**contentTemplate.templateName.unmappedColumnsMode**=value`  How the connector handles unspecified content fields. Valid values are:  - `APPEND` —append unspecified content fields to the template - `IGNORE` —ignore unspecified content fields 	The default value is `APPEND`. |
| Include field names in HTML template | `**contentTemplate.templateName.includeFieldName**=true\|false`  Specifies whether to include the field names along with the field data in the HTML template. The default is `true` and causes the field names to be searchable as part of the content data. |

## Uncommonly set parameters

You rarely need to set the parameters listed in this section. The parameters's defaults are set for optimal performance. Google does not recommend setting these parameters to values different from their defaults without specific requirements within your repository.

### Proxy configuration

The SDK allows you to configure your connector to use a proxy for outgoing connections.

The `transport.proxy.hostname` and `transport.proxy.port` parameters are required to enable transport through a proxy. The other parameters may be required if your proxy requires authentication or operates over the SOCKS protocol instead of HTTP. If `transport.proxy.hostname` is not set, the SDK will not use a proxy.

| Setting | Parameter |
| --- | --- |
| Hostname | `**transport.proxy.hostname**=hostname`  The hostname for the proxy server. This parameter is required when using a proxy. |
| Port | `**transport.proxy.port**=port`  The port number for the proxy server. This parameter is required when using a proxy. |
| Proxy type | `**transport.proxy.type**=type`  The type of proxy. Valid values are:  - `HTTP` —The proxy accepts and forwards requests over HTTP. - `SOCKS` —The proxy accepts and forwards packets over the SOCKS protocol.  The default value is `HTTP`. |
| Username | `**transport.proxy.username**=username`  The username to use when constructing a proxy authorization token. This parameter is optional, and should only be set if your proxy requires authentication. |
| Password | `**transport.proxy.password**=password`  The password to use when constructing a proxy authorization token. This parameter is optional, and should only be set if your proxy requires authentication. |

### Traversers

The SDK enables you to specify multiple individual traversers to allow for parallel traversals of a data repository. The SDK template connectors use this feature.

| Setting | Parameter |
| --- | --- |
| Thread pool size | `**traverse.threadPoolSize**=size`  Number of threads the connector creates to allow for parallel processing. A single iterator fetches operations serially (typically RepositoryDoc objects), but the API calls processes in parallel using this number of threads.  The default value is `5`. |
| Partition size | `**traverse.partitionSize**=batchSize`  Number of [`ApiOperation()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation) to be processed in batches before fetching additional `APIOperation`.  The default value is `50`. |

### Traverser poll requests

The core of the Cloud Search indexing queue is a priority queue containing an entry for each item known to exist. A listing connector can request to poll items from the indexing API. A poll request gets the highest priority entries from the indexing queue.

The following parameters are used by the SDK listing connector template to define polling parameters.

<table><tbody><tr><th>Setting</th><th>Parameter</th></tr><tr><td>Repository traverser</td><td><code><strong>repository.traversers</strong>=<var>t1, t2, t3, ...</var></code><p>Creates one or more individual traversers where <var>t1</var>, <var>t2</var>, <var>t3</var>, <var>...</var> is the unique name of each. Each named traverser has its own set of settings which are identified using the traverser's unique name, such as <code>traversers.t1.hostload</code> and <code>traversers.t2.hostload</code>.</p></td></tr><tr><td rowspan="2">Queue to be polled</td><td><code><strong>traverser.pollRequest.queue</strong>=<var>mySpecialQueue</var></code><p>Queue names that this traverser polls. The default is empty string (implies "default").</p></td></tr><tr><td><code><strong>traverser.<var>t1</var>.pollRequest.queue</strong>=<var>mySpecialQueue</var></code><p>When you have multiple traversers, set item's statuses for each traverser (where <var>t1</var>, represents a specific traverser).</p></td></tr><tr><td rowspan="2">Polling behavior</td><td><code><strong>traverser.pollRequest.limit</strong>=<var>maxItems</var></code><p>Maximum number of items to return from a polling request. The default value is <code>0</code> (implies the API maximum).</p></td></tr><tr><td><code><strong>traverser.<var>t1</var>.pollRequest.limit</strong>=<var>limit</var></code><p>When you have multiple traversers, set item's statuses for each traverser (where <var>t1</var>, represents a specific traverser).</p></td></tr><tr><td rowspan="2">Item status</td><td><code><strong>traverser.pollRequest.statuses</strong>=<var>statuses</var></code><p>The specific item's statuses that this traverser polls, where <var>statuses</var> can be any combination of <code>MODIFIED, NEW_ITEM</code> (separated by commas), The default is an empty string (implies all status values).</p></td></tr><tr><td><code><strong>traverser.<var>t1</var>.pollRequest.statuses</strong>=<var>statusesForThisTraverser</var></code><p>When you have multiple traversers, set item's statuses for each traverser (where <var>t1</var>, represents a specific traverser).</p></td></tr><tr><td rowspan="2">Host load</td><td><code><strong>traverser.hostload</strong>=<var>threads</var></code><p>Maximum number of active parallel threads available for polling. The default value is <code>5.</code></p></td></tr><tr><td><code><strong>traverser.<var>t1</var>.hostload</strong>=<var>threadsForThisTraverser</var></code><p>When you have multiple traversers, set item's statuses for each traverser (where <var>t1</var>, represents a specific traverser).</p></td></tr><tr><td rowspan="4">Timeout</td><td><code><strong>traverser.timeout</strong>=<var>timeout</var></code><p>Timeout value for interrupting this traverser poll attempt.</p><p>The default value is <code>60</code>.</p></td></tr><tr><td><code><strong>traverser.<var>t1</var>.timeout</strong>=<var>timeoutForThisTraverser</var></code><p>When you have multiple traversers, set item's statuses for each traverser (where <var>t1</var>, represents a specific traverser).</p></td></tr><tr><td><strong>traverser.timeunit</strong> = <code>timeoutUunit</code><p>The timeout units. Valid values are <code>SECONDS, MINUTES, </code></p></td></tr><tr><td><strong>traverser.<var>t1</var>.timeunit</strong> = <code>timeoutUnit</code><p>When you have multiple traversers, set item's statuses for each traverser (where <var>t1</var>, represents a specific traverser).</p></td></tr></tbody></table>

In most cases, a connector using the SDK listing connector template only requires a single set of parameters for polling. In some cases, you may need to define more than one polling criteria if your traversal algorithm requires separating item processing using different queues, for example.

In this case, you have the option of defining multiple sets of polling parameters. Begin by specifying the names of the parameter sets using `repository.traversers`. For each defined traverser name, supply the configuration file with the parameters in the table above replacing the `t1` with the traverser name. This creates a set of polling parameters for each defined traverser.

### Checkpoints

A checkpoint is useful for tracking the state of an incremental traversal.

| Setting | Parameter |
| --- | --- |
| Checkpoint directory | `**connector.checkpointDirectory**=/path/to/checkpoint`  Specifies the path to the local directory to use for the incremental and full traversal checkpoints. |

### Content uploads

Item content is uploaded to Cloud Search with the item when the content's size does not exceeds the specified threshold. If the content's size exceeds the threshold, the content is uploaded separately from the item's metadata and structured data.

| Setting | Parameter |
| --- | --- |
| Content threshold | `**api.contentUploadThresholdBytes**=bytes`  The threshold for content that determines whether it is uploaded "in-line" with the item versus using a separate upload.  The default value is `100000` (~100KB). |

### Containers

The full connector template uses an algorithm involving the concept of a temporary data source queue toggle for detecting deleted records in the database. This means that upon each full traversal, the fetched records, which are in a new queue, replace all the existing Cloud Search records indexed from the previous traversal, which are in an old queue.

| Setting | Parameter |
| --- | --- |
| Container name tag | `**traverse.queueTag**=instance`  To run multiple instances of the connector in parallel to index a common data repository (whether on different data repositories or separate parts of a common data repository) without interfering with each other, assign a unique container name tag to each run of the connector. A unique name tag prevents a connector instance from deleting another's records.  The name tag is appended to the Full Traversal Connector toggle queue id. |
| Disable delete detection | `**traverse.useQueues=true\|false**`  Indicates if connector uses queue toggle logic for delete detection.  The default value is `true`, which specifies that queues should be used.  **Note**: This configuration parameter is only applicable to connectors implementing the `FullTraversalConnector` template. |

### Batch policy

The SDK supports a batch policy that enables you to perform the following actions:

- Batch requests
- Specify the number of requests in a batch queue
- Manage concurrently executing batches
- Flush batched requests

The SDK batches together the connector's requests to speed throughput during uploads. The SDK trigger for uploading a batch of requests is by either the number of requests or the timeout, whichever comes first. For example, if the batch delay time has expired without the batch size being reached, or if the batch size number of items is reached before the delay time expires, then the batch upload is triggered.

| Setting | Parameter |
| --- | --- |
| Batch requests | ``**batch.batchSize`=batchSize`**``  Batch requests together. The default value is `10`. |
| Number of requests in a batch queue | `**batch.maxQueueLength**=maxQueueLength`  Maximum number of requests in a batch queue for execution. The default value is `1000.` |
| Concurrently executing batches | `**batch.maxActiveBatches**=maxActiveBatches`  Number of allowable concurrently executing batches. The default value is `20`. |
| Flush batched requests automatically | `**batch.maxBatchDelaySeconds**=maxBatchDelay`  Number of seconds to wait before batched requests are flushed automatically. The default value is `5`. |
| Flush batched requests on shutdown | `**batch.flushOnShutdown**=true\|false`  Flush batched requests during service shutdown. The default value is `true` |

### Exception handlers

The exception handlers parameters determine how the traverser proceeds after it encounters an exception.

| Setting | Parameter |
| --- | --- |
| Traverser instruction in case of error | `**traverse.exceptionHandler**=exceptions`  How the traverser should proceed after an exception is thrown. Valid values are:  - `0` --always abort the traversal after encountering an exception - num\_exceptions (for example, `10`)--abort after the traverser encounters the specified num\_exceptions. 	The default value is `0` (always abort on error). - `ignore` --ignore the error |
| Wait time between exceptions | `**abortExceptionHander.backoffMilliSeconds**=backoff`  Backoff time in milliseconds to wait between detected handler exceptions (typically used when traversing a repository). The default value is `10`. |
