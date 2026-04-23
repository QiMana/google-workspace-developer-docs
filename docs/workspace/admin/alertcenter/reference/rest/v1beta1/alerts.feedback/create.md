---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts.feedback/create
root: workspace
fetched_at: 2026-04-23T15:23:27.634Z
---

# Method: alerts.feedback.create

## Method: alerts.feedback.create

Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns \`FAILED\_PRECONDITION' error.

### HTTP request

`POST https://alertcenter.googleapis.com/v1beta1/alerts/{alertId}/feedback`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>alertId</code></td><td><p><code>string</code></p><p>Required. The identifier of the alert this feedback belongs to.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The <code>customerId</code> must have the initial "C" stripped (for example, <code>046psxkn</code>). Inferred from the caller identity if not provided. <a href="https://support.google.com/cloudidentity/answer/10070793">Find your customer ID</a>.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.alerts`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
