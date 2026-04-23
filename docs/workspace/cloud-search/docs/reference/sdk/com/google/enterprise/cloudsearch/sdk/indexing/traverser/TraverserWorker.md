---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserWorker
root: workspace
fetched_at: 2026-04-23T15:26:55.989Z
---

# TraverserWorker

An interface that performs the method call to poll the Cloud Search queue.

The Cloud Search SDK uses this interface to create polling threads whenever the `Connector` implements the `ItemRetriever` or `BatchItemRetriever` interfaces.

### Public Method Summary

| abstract String | [getName](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserWorker#getName\(\)) ()  Returns the name of the worker thread for use in logging. |
| --- | --- |
| abstract void | [poll](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserWorker#poll\(\)) ()  Performs the Cloud Search queue poll. |
| abstract void | [shutdown](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/traverser/TraverserWorker#shutdown\(\)) ()  Shuts down this worker thread. |

## Public Methods

#### public abstract String getName ()

Returns the name of the worker thread for use in logging.

##### Returns

- name of worker thread

#### public abstract void poll ()

Performs the Cloud Search queue poll.

This method calls the `process(Item)` or `processBatch(List)` method to deliver the queue item to the `Connector` instance.

#### public abstract void shutdown ()

Shuts down this worker thread.
