---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/list
root: workspace
fetched_at: 2026-04-23T15:26:15.280Z
---

# Method: indexing.datasources.items.list

This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/indexing/{name=datasources/*}/items`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the data Source to list Items. Format: datasources/{sourceId}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>connectorName</code></td><td><p><code>string</code></p><p>The name of connector making this call.</p><p>Format: datasources/{sourceId}/connectors/{id}</p></td></tr><tr><td><code>brief</code></td><td><p><code>boolean</code></p><p>When set to true, the indexing system only populates the following fields: , , . , , , , , , , , , , , , , ,</p><p>If this value is false, then all the fields are populated in Item.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The nextPageToken value returned from a previous List request, if any.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false.</p><p>The default value is 10</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "items": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results, or empty if there are no more results in the list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.indexing`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
