---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.datasources/list
root: workspace
fetched_at: 2026-04-23T15:26:17.883Z
---

# Method: settings.datasources.list

Lists datasources.

**Note:** This API requires an admin account to execute.

### HTTP request

`GET https://cloudsearch.googleapis.com/v1/settings/datasources`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Starting index of the results.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Maximum number of datasources to fetch in a request. The max value is 1000.</p><p>The default value is 1000.</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "sources": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sources[]</code></td><td></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results, or empty if there are no more results in the list.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
- `https://www.googleapis.com/auth/cloud_search.settings`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
