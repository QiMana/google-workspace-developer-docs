---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/debug.datasources.items/searchByViewUrl
root: workspace
fetched_at: 2026-04-23T15:26:13.533Z
---

# Method: debug.datasources.items.searchByViewUrl

Fetches the item whose viewUrl exactly matches that of the URL provided in the request.

**Note:** This API requires an admin account to execute.

### HTTP request

`POST https://cloudsearch.googleapis.com/v1/debug/{name=datasources/*}/items:searchByViewUrl`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Source name, format: datasources/{sourceId}</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "viewUrl": string,
  "pageToken": string,
  "debugOptions": {
    object (DebugOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>viewUrl</code></td><td><p><code>string</code></p><p>Specify the full view URL to find the corresponding item. The maximum length is 2048 characters.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The nextPageToken value returned from a previous request, if any.</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "items": [
    {
      object (Item)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td><p><code>object (<code>Item</code>)</code></p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results, or empty if there are no more results in the list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.debug`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
