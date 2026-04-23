---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printServers/list
root: workspace
fetched_at: 2026-04-23T15:23:30.024Z
---

# Method: admin.directory.v1.customers.chrome.printServers.list

Lists print server configurations.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/{parent=customers/*}/chrome/printServers`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers">unique ID</a> of the customer's Google Workspace account.</p><p>Format: <code>customers/{id}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of objects to return (default <code>100</code>, max <code>100</code>). The service might return fewer than this value.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>A generated token to paginate results (the <code>nextPageToken</code> from a previous call).</p></td></tr><tr><td><code>orgUnitId</code></td><td><p><code>string</code></p><p>If <code>orgUnitId</code> is present in the request, only print servers owned or inherited by the organizational unit (OU) are returned. If the <a href="https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printServers"><code>PrintServer</code></a> resource's <code>orgUnitId</code> matches the one in the request, the OU owns the server.</p><p>If <code>orgUnitId</code> is not specified in the request, all print servers are returned or filtered against.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Search query in <a href="https://github.com/google/cel-spec">Common Expression Language syntax</a>. Supported filters are <code>displayName</code>, <code>description</code>, and <code>uri</code>.</p><p>Example: <code>printServer.displayName=='marketing-queue'</code>.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>string</code></p><p>Sort order for results. Supported values are <code>displayName</code>, <code>description</code>, or <code>createTime</code>.</p><p>Default order is ascending, but descending order can be returned by appending "desc" to the <code>orderBy</code> field. For instance, <code>orderBy=='description desc'</code> returns the print servers sorted by description in descending order.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "printServers": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>printServers[]</code></td><td><p>List of print servers.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token that can be sent as <code>pageToken</code> in a request to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.chrome.printers`
- `           https://www.googleapis.com/auth/admin.chrome.printers.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
