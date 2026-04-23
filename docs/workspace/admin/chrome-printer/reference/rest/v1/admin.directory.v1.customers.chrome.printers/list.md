---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printers/list
root: workspace
fetched_at: 2026-04-23T15:23:30.524Z
---

# Method: admin.directory.v1.customers.chrome.printers.list

List printers configs.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/{parent=customers/*}/chrome/printers`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of objects to return. The service may return fewer than this value.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>A page token, received from a previous call.</p></td></tr><tr><td><code>orgUnitId</code></td><td><p><code>string</code></p><p>Organization Unit that we want to list the printers for. When org_unit is not present in the request then all printers of the customer are returned (or filtered).</p><p>When org_unit is present in the request then only printers available to this OU will be returned (owned or inherited). You may see if printer is owned or inherited for this OU by looking at Printer.org_unit_id.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Search query. Search syntax is shared between this api and Admin Console printers pages.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>string</code></p><p>The order to sort results by. Must be one of displayName, description, makeAndModel, or createTime. Default order is ascending, but descending order can be returned by appending "desc" to the orderBy field. For instance, "description desc" will return the printers sorted by description in descending order.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response for listing printers.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "printers": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>printers[]</code></td><td><p>List of printers. If <code>orgUnitId</code> was given in the request, then only printers visible for this OU will be returned. If <code>orgUnitId</code> was not given in the request, then all printers will be returned.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token, which can be sent as <code>pageToken</code> to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.chrome.printers`
- `           https://www.googleapis.com/auth/admin.chrome.printers.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
