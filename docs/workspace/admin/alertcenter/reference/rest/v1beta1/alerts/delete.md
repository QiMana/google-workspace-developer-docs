---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts/delete
root: workspace
fetched_at: 2026-04-23T15:23:27.961Z
---

# Method: alerts.delete

Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.

### HTTP request

`DELETE https://alertcenter.googleapis.com/v1beta1/alerts/{alertId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>alertId</code></td><td><p><code>string</code></p><p>Required. The identifier of the alert to delete.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The <code>customerId</code> must have the initial "C" stripped (for example, <code>046psxkn</code>). Inferred from the caller identity if not provided. <a href="https://support.google.com/cloudidentity/answer/10070793">Find your customer ID</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.alerts`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
