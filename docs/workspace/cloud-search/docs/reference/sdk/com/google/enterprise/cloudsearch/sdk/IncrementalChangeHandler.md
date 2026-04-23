---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/IncrementalChangeHandler
root: workspace
fetched_at: 2026-04-23T15:26:27.351Z
---

# IncrementalChangeHandler

Known Indirect Subclasses

[FullTraversalConnector](./indexing/template/FullTraversalConnector.md), [ListingConnector](./indexing/template/ListingConnector.md)

Interface for handling repository changes.

The main benefit for having the `Connector` implement this interface is that it enables the framework to schedule polling of incremental changes.

### Public Method Summary

| abstract void | [handleIncrementalChanges](./IncrementalChangeHandler.md#handleIncrementalChanges()) ()  Handles the `Connector` specific implementation of incremental change notifications. |
| --- | --- |

## Public Methods

#### public abstract void handleIncrementalChanges ()

Handles the `Connector` specific implementation of incremental change notifications.

##### Throws

| IOException | if getting changes fails |
| --- | --- |
| InterruptedException | if an IO operations throws it |
