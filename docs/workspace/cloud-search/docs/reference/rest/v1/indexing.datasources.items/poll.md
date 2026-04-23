---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/poll
root: workspace
fetched_at: 2026-04-23T15:26:15.370Z
---

# Method: indexing.datasources.items.poll

Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority `ItemStatus`. The priority order is as follows:

`ERROR`

`MODIFIED`

`NEW_ITEM`

`ACCEPTED`

Reserving items ensures that polling from other threads cannot create overlapping sets.

After handling the reserved items, the client should put items back into the unreserved state, either by calling `index,` or by calling `push` with the type `REQUEUE.`

Items automatically become available (unreserved) after 4 hours even if no update or push method is called.

This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### HTTP request

`POST https://cloudsearch.googleapis.com/v1/indexing/{name=datasources/*}/items:poll`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the data Source to poll items. Format: datasources/{sourceId}</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "connectorName": string,
  "statusCodes": [
    enum (ItemStatus.Code)
  ],
  "limit": integer,
  "queue": string,
  "debugOptions": {
    object (DebugOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>connectorName</code></td><td><p><code>string</code></p><p>The name of connector making this call.</p><p>Format: datasources/{sourceId}/connectors/{id}</p></td></tr><tr><td><code>statusCodes[]</code></td><td><p><code>enum (<code>ItemStatus.Code</code>)</code></p><p>Limit the items polled to the ones with these statuses.</p></td></tr><tr><td><code>limit</code></td><td><p><code>integer</code></p><p>Maximum number of items to return.</p><p>The maximum value is 100 and the default value is 20.</p></td></tr><tr><td><code>queue</code></td><td><p><code>string</code></p><p>Queue name to fetch items from. If unspecified, items.poll will fetch from 'default' queue. The maximum length is 100 characters.</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "items": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td><p>Set of items from the queue available for connector to process.</p><p>These items have the following subset of fields populated:</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.indexing`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
