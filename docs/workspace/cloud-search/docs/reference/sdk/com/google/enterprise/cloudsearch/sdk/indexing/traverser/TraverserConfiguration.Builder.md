---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder
root: workspace
fetched_at: 2026-04-23T15:26:53.625Z
---

# TraverserConfiguration.Builder

Optional configuration parameters:

- `traverser.pollRequest.queue` - Specifies the queue names that this traverser polls. Default: Empty string (implies "default")
- `traverser.pollRequest.statuses` - Specifies the specific item status' that this traverser polls. Default: Empty string (implies all status values)
- `traverser.pollRequest.limit` - Specifies the maximum number of items to return from a polling request. Default: 0 (implies API maximum)
- `traverser.timeout` - Specifies the timeout value for interrupting this traverser poll attempt. Default: `60`
- `traverser.timeunit` - Specifies the timeout units. Default: SECONDS
- `traverser.hostload` - Specifies the maximum number of active parallel threads available for polling. Default: `5`

### Constant Summary

| String | [CONFIG\_HOSTLOAD](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#CONFIG_HOSTLOAD) |  |
| --- | --- | --- |
| int | [CONFIG\_HOSTLOAD\_DEFAULT](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#CONFIG_HOSTLOAD_DEFAULT) |  |
| String | [CONFIG\_POLL\_REQUEST\_LIMIT](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#CONFIG_POLL_REQUEST_LIMIT) |  |
| String | [CONFIG\_POLL\_REQUEST\_QUEUE](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#CONFIG_POLL_REQUEST_QUEUE) |  |
| String | [CONFIG\_POLL\_REQUEST\_STATUSES](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#CONFIG_POLL_REQUEST_STATUSES) |  |
| String | [CONFIG\_TIMEOUT](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#CONFIG_TIMEOUT) |  |
| int | [CONFIG\_TIMEOUT\_DEFAULT](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#CONFIG_TIMEOUT_DEFAULT) |  |
| String | [CONFIG\_TIMEUNIT](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#CONFIG_TIMEUNIT) |  |
| String | [TRAVERSER](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#TRAVERSER) |  |

### Public Constructor Summary

|  | [TraverserConfiguration.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#TraverserConfiguration.Builder\(\)) ()  Creates a builder instance with default configuration properties. |
| --- | --- |
|  | (String configKey)  Creates the builder instance and populates the configuration properties using `configKey` as follows:  ``` traverser.[configKey].pollRequest.queue=QueueName traverser.[configKey].pollRequest.statuses=NEW_ITEM,MODIFIED traverser.[configKey].pollRequest.limit=30 traverser.[configKey].timeout=20 traverser.[configKey].timeunit=SECONDS traverser.[configKey].hostload=10 ```  This example indicates that we should scale the traverser up to 10 parallel polling threads and set the timeout to 20 seconds. |

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#build\(\)) () |
| --- | --- |
| [TraverserConfiguration.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder) | [hostLoad](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#hostLoad\(int\)) (int hostLoad)  Sets hostload (number of worker threads) used by `TraverserWorker` |
| [TraverserConfiguration.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder) | [itemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#itemRetriever\(com.google.enterprise.cloudsearch.sdk.indexing.ItemRetriever\)) ([ItemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ItemRetriever) itemRetriever)  Sets the `ItemRetriever` to use for processing poll queue items. |
| [TraverserConfiguration.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder) | [itemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#itemRetriever\(com.google.enterprise.cloudsearch.sdk.indexing.BatchItemRetriever\)) ([BatchItemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchItemRetriever) batchItemRetriever)  Sets `BatchItemRetriever` to use for processing poll queue items. |
| [TraverserConfiguration.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder) | [name](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#name\(java.lang.String\)) (String name)  Sets the name of the worker thread that can be used for logging. |
| [TraverserConfiguration.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder) | [pollRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder#pollRequest\(com.google.api.services.cloudsearch.v1.model.PollItemsRequest\)) (PollItemsRequest pollRequest)  Sets the `PollItemsRequest` that is used to poll queue items. |

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

#### public static final String CONFIG\_HOSTLOAD

Constant Value: ".hostload"

#### public static final int CONFIG\_HOSTLOAD\_DEFAULT

Constant Value: 5

#### public static final String CONFIG\_POLL\_REQUEST\_LIMIT

Constant Value: ".pollRequest.limit"

#### public static final String CONFIG\_POLL\_REQUEST\_QUEUE

Constant Value: ".pollRequest.queue"

#### public static final String CONFIG\_POLL\_REQUEST\_STATUSES

Constant Value: ".pollRequest.statuses"

#### public static final String CONFIG\_TIMEOUT

Constant Value: ".timeout"

#### public static final int CONFIG\_TIMEOUT\_DEFAULT

Constant Value: 60

#### public static final String CONFIG\_TIMEUNIT

Constant Value: ".timeunit"

#### public static final String TRAVERSER

Constant Value: "traverser"

## Public Constructors

#### public TraverserConfiguration.Builder ()

Creates a builder instance with default configuration properties.

The default configuration properties can be overridden:

```
traverser.pollRequest.queue=default
traverser.pollRequest.statuses=
traverser.pollRequest.limit=0
traverser.tiemout=60
traverser.timeunit=SECONDS
traverser.hostload=5
```

#### public TraverserConfiguration.Builder (String configKey)

Creates the builder instance and populates the configuration properties using `configKey` as follows:

```
traverser.[configKey].pollRequest.queue=QueueName
traverser.[configKey].pollRequest.statuses=NEW_ITEM,MODIFIED
traverser.[configKey].pollRequest.limit=30
traverser.[configKey].timeout=20
traverser.[configKey].timeunit=SECONDS
traverser.[configKey].hostload=10
```

This example indicates that we should scale the traverser up to 10 parallel polling threads and set the timeout to 20 seconds. Worker threads use the queue "QueueName" and poll requests with statuses of only "NEW\_ITEM" or "MODIFIED".

If configuration parameters with \[configKey\] are missing, the default parameters are applied:

```
traverser.pollRequest.queue=default
traverser.pollRequest.statuses=
traverser.pollRequest.limit=0
traverser.tiemout=60
traverser.timeunit=SECONDS
traverser.hostload=5
```

The default configuration properties can also be overridden.

##### Parameters

| configKey | the custom configuration key name (see example above) |
| --- | --- |

## Public Methods

#### build ()

#### public TraverserConfiguration.Builder hostLoad (int hostLoad)

Sets hostload (number of worker threads) used by `TraverserWorker`

##### Parameters

| hostLoad | number of worker threads ised by traverser worker |
| --- | --- |

##### Returns

- this builder

#### public TraverserConfiguration.Builder itemRetriever (ItemRetriever itemRetriever)

Sets the `ItemRetriever` to use for processing poll queue items.

Only one of `ItemRetriever` or `BatchItemRetriever` can be defined in a instance.

##### Parameters

| itemRetriever | the item retriever object |
| --- | --- |

##### Returns

- this builder

#### public TraverserConfiguration.Builder itemRetriever (BatchItemRetriever batchItemRetriever)

Sets `BatchItemRetriever` to use for processing poll queue items.

Only one of `ItemRetriever` or `BatchItemRetriever` can be defined in a instance.

##### Parameters

| batchItemRetriever | the item retriever object |
| --- | --- |

##### Returns

- this builder

#### public TraverserConfiguration.Builder name (String name)

Sets the name of the worker thread that can be used for logging.

##### Parameters

| name | the name of the worker thread |
| --- | --- |

##### Returns

- this builder

#### public TraverserConfiguration.Builder pollRequest (PollItemsRequest pollRequest)

Sets the `PollItemsRequest` that is used to poll queue items.

##### Parameters

| pollRequest | the pollRequest object |
| --- | --- |

##### Returns

- this builder
