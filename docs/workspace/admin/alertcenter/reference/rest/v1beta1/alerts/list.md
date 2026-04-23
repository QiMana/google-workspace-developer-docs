---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts/list
root: workspace
fetched_at: 2026-04-23T15:23:28.273Z
---

# Method: alerts.list

Lists the alerts.

### HTTP request

`GET https://alertcenter.googleapis.com/v1beta1/alerts`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The <code>customerId</code> must have the initial "C" stripped (for example, <code>046psxkn</code>). Inferred from the caller identity if not provided. <a href="https://support.google.com/cloudidentity/answer/10070793">Find your customer ID</a>.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's <code>nextPageToken</code> field.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query string for filtering alert results. For more details, see <a href="https://developers.google.com/workspace/admin/alertcenter/guides/query-filters">Query filters</a> and <a href="https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.list">Supported query filter fields</a>.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>string</code></p><p>Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using <code>orderBy="createTime desc"</code>. Currently, supported sorting are <code>createTime asc</code>, <code>createTime desc</code>, <code>updateTime desc</code></p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response message for an alert listing request.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "alerts": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>alerts[]</code></td><td><p>The list of alerts.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent <code>ListAlertsRequest</code> to get alerts continuing from last result of the current list call.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.alerts`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
