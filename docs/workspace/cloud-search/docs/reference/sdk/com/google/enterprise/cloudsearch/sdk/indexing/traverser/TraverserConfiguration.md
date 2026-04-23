---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration
root: workspace
fetched_at: 2026-04-23T15:26:55.865Z
---

# TraverserConfiguration

Object that defines a Cloud Search queue polling task.

The `Connector` uses this method when it implements the `ItemRetriever` interface. Each instance defines the parameters of a polling request.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration.Builder">TraverserConfiguration.Builder</a></td><td width="100%">Builder for <code>TraverserConfiguration</code> class.</td></tr></tbody></table>

### Public Method Summary

| [BatchItemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/BatchItemRetriever) | [getBatchItemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration#getBatchItemRetriever\(\)) ()  Returns the `BatchItemRetriever` object that is used for issuing `processBatch(List)` calls. |
| --- | --- |
| int | [getHostload](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration#getHostload\(\)) ()  Returns the number of polling threads allowed to run in parallel. |
| [ItemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/ItemRetriever) | [getItemRetriever](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration#getItemRetriever\(\)) ()  Returns the `ItemRetriever` object that is used for issuing `process(Item)` calls. |
| String | [getName](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration#getName\(\)) ()  Returns the traverser configuration name that is used for logging. |
| PollItemsRequest | [getPollRequest](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration#getPollRequest\(\)) ()  Returns the `PollItemsRequest` object that contains all the parameters that define the polling task. |
| long | [getTimeout](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration#getTimeout\(\)) ()  Returns the timeout value that specifies when the polling task interrupts its request. |
| TimeUnit | [getTimeunit](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserConfiguration#getTimeunit\(\)) ()  Returns the timeout unit value that specifies when the polling task interrupts its request. |

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

## Public Methods

#### public BatchItemRetriever getBatchItemRetriever ()

Returns the `BatchItemRetriever` object that is used for issuing `processBatch(List)` calls.

This is similar to the item retriever object, except that multiple queued items are polled instead of one at a time. Exactly one of either an item retriever or batch item retriever object must be defined.

##### Returns

- the batch item retriever object

#### public int getHostload ()

Returns the number of polling threads allowed to run in parallel.

Each thread works on a polled document in parallel with up to the defined maximum setting, returned from this method. A higher maximum host load value processes more documents in parallel, with a similar increase in system resources used.

If multiple `TraverserConfiguration` instances are defined within a connector, defining differing host load values for each configuration sets the relative resource priorities of each configuration. If very few documents are polled at any given time, it is likely that increasing the host load would have no effect on processing throughput.

##### Returns

- the maximum number of allowable active polling threads for this configuration

#### public ItemRetriever getItemRetriever ()

#### public String getName ()

Returns the traverser configuration name that is used for logging.

##### Returns

- the name

#### public PollItemsRequest getPollRequest ()

Returns the `PollItemsRequest` object that contains all the parameters that define the polling task.

##### Returns

- the pollRequest

#### public long getTimeout ()

Returns the timeout value that specifies when the polling task interrupts its request.

##### Returns

- the timeout value

#### public TimeUnit getTimeunit ()

Returns the timeout unit value that specifies when the polling task interrupts its request.

##### Returns

- the time unit of the `timeout` parameter
