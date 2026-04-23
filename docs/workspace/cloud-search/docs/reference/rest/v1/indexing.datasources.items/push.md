---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/push
root: workspace
fetched_at: 2026-04-23T15:26:15.204Z
---

# Method: indexing.datasources.items.push

Pushes an item onto a queue for later polling and updating.

This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### HTTP request

`POST https://cloudsearch.googleapis.com/v1/indexing/{item.name=datasources/*/items/*}:push`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>item.name</code></td><td><p><code>string</code></p><p>The name of the to push into the indexing queue.</p><p>Format: datasources/{sourceId}/items/{id}</p><p>This is a required field. The maximum length is 1536 characters.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "item": {
    "name": string,
    "type": enum (PushItem.Type),
    "metadataHash": string,
    "structuredDataHash": string,
    "contentHash": string,
    "payload": string,
    "queue": string,
    "repositoryError": {
      "type": ,
      "httpStatusCode": integer,
      "errorMessage": string
    }
  },
  "connectorName": string,
  "debugOptions": {
    object (DebugOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>item.type</code></td><td><p><code>enum (<code>PushItem.Type</code>)</code></p><p>The type of the push operation that defines the push behavior.</p></td></tr><tr><td><code>item.structuredDataHash</code></td><td><p><code>string</code></p><p>Structured data hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the <code>type</code> field results in argument error. The maximum length is 2048 characters.</p></td></tr><tr><td><code>item.contentHash</code></td><td><p><code>string</code></p><p>Content hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the <code>type</code> field results in argument error. The maximum length is 2048 characters.</p></td></tr><tr><td><code>item.payload</code></td><td><p><code>string (bytes format)</code></p><p>Provides additional document state information for the connector, such as an alternate repository id and other metadata. The maximum length is 8192 bytes.</p><p>A base64-encoded string.</p></td></tr><tr><td><code>item.queue</code></td><td><p><code>string</code></p><p>Queue to which this item belongs. The <code>default</code> queue is chosen if this field is not specified. The maximum length is 512 characters.</p></td></tr><tr><td><code>item.repositoryError</code></td><td><p>Populate this field to store Connector or repository error details. This information is displayed in the Admin Console. This field may only be populated when the <code>type</code> is <code>REPOSITORY_ERROR</code>.</p></td></tr><tr><td><code>connectorName</code></td><td><p><code>string</code></p><p>The name of connector making this call.</p><p>Format: datasources/{sourceId}/connectors/{id}</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.indexing`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## PushItem

Represents an item to be pushed to the indexing queue.

JSON representation

```
{
  "name": string,
  "type": enum (PushItem.Type),
  "metadataHash": string,
  "structuredDataHash": string,
  "contentHash": string,
  "payload": string,
  "queue": string,
  "repositoryError": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the to push into the indexing queue.</p><p>Format: datasources/{sourceId}/items/{id}</p><p>This is a required field. The maximum length is 1536 characters.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>PushItem.Type</code>)</code></p><p>The type of the push operation that defines the push behavior.</p></td></tr><tr><td><code>structuredDataHash</code></td><td><p><code>string</code></p><p>Structured data hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the <code>type</code> field results in argument error. The maximum length is 2048 characters.</p></td></tr><tr><td><code>contentHash</code></td><td><p><code>string</code></p><p>Content hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the <code>type</code> field results in argument error. The maximum length is 2048 characters.</p></td></tr><tr><td><code>payload</code></td><td><p><code>string (bytes format)</code></p><p>Provides additional document state information for the connector, such as an alternate repository id and other metadata. The maximum length is 8192 bytes.</p><p>A base64-encoded string.</p></td></tr><tr><td><code>queue</code></td><td><p><code>string</code></p><p>Queue to which this item belongs. The <code>default</code> queue is chosen if this field is not specified. The maximum length is 512 characters.</p></td></tr><tr><td><code>repositoryError</code></td><td><p>Populate this field to store Connector or repository error details. This information is displayed in the Admin Console. This field may only be populated when the <code>type</code> is <code>REPOSITORY_ERROR</code>.</p></td></tr></tbody></table>

## PushItem.Type

The type of the push operation that defines the push behavior.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED</code></td><td>Default UNSPECIFIED. Specifies that the push operation should not modify</td></tr><tr><td><code>MODIFIED</code></td><td>Indicates that the repository document has been modified or updated since the previous <code>update</code> call. This changes status to <code>MODIFIED</code> state for an existing item. If this is called on a non existing item, the status is changed to <code>NEW_ITEM</code>.</td></tr><tr><td><code>NOT_MODIFIED</code></td><td>Item in the repository has not been modified since the last update call. This push operation will set status to <code>ACCEPTED</code> state.</td></tr><tr><td><code>REPOSITORY_ERROR</code></td><td>Connector is facing a repository error regarding this item. Change status to <code>REPOSITORY_ERROR</code> state. Item is unreserved and rescheduled at a future time determined by exponential backoff.</td></tr><tr><td><code>REQUEUE</code></td><td>Call push with REQUEUE only for items that have been reserved. This action unreserves the item and resets its available time to the wall clock time.</td></tr></tbody></table>
