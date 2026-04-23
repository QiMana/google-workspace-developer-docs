---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts.feedback/list
root: workspace
fetched_at: 2026-04-23T15:23:27.571Z
---

# Method: alerts.feedback.list

Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.

### HTTP request

`GET https://alertcenter.googleapis.com/v1beta1/alerts/{alertId}/feedback`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>alertId</code></td><td><p><code>string</code></p><p>Required. The alert identifier. The "-" wildcard could be used to represent all alerts.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The <code>customerId</code> must have the initial "C" stripped (for example, <code>046psxkn</code>). Inferred from the caller identity if not provided. <a href="https://support.google.com/cloudidentity/answer/10070793">Find your customer ID</a>.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query string for filtering alert feedback results. For more details, see <a href="https://developers.google.com/workspace/admin/alertcenter/guides/query-filters">Query filters</a> and <a href="https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.feedback.list">Supported query filter fields</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

JSON representation

```
{
  "feedback": [
    {
      
    }
  ]
}
```

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.alerts`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
