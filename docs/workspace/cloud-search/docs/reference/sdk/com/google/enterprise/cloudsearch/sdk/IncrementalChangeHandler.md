---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/IncrementalChangeHandler
root: workspace
fetched_at: 2026-04-23T15:26:27.351Z
---

# IncrementalChangeHandler

Known Indirect Subclasses

[FullTraversalConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/FullTraversalConnector), [ListingConnector](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ListingConnector)

Interface for handling repository changes.

The main benefit for having the `Connector` implement this interface is that it enables the framework to schedule polling of incremental changes.

### Public Method Summary

| abstract void | [handleIncrementalChanges](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/IncrementalChangeHandler#handleIncrementalChanges\(\)) ()  Handles the `Connector` specific implementation of incremental change notifications. |
| --- | --- |

## Public Methods

#### public abstract void handleIncrementalChanges ()

Handles the `Connector` specific implementation of incremental change notifications.

##### Throws

| IOException | if getting changes fails |
| --- | --- |
| InterruptedException | if an IO operations throws it |
