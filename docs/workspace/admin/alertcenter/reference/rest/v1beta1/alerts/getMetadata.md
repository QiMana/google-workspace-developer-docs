---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts/getMetadata
root: workspace
fetched_at: 2026-04-23T15:23:28.082Z
---

# Method: alerts.getMetadata

## Method: alerts.getMetadata

Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.

### HTTP request

`GET https://alertcenter.googleapis.com/v1beta1/alerts/{alertId}/metadata`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>alertId</code></td><td><p><code>string</code></p><p>Required. The identifier of the alert this metadata belongs to.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Optional. The unique identifier of the Google Workspace account of the customer the alert metadata is associated with. The <code>customerId</code> must have the initial "C" stripped (for example, <code>046psxkn</code>). Inferred from the caller identity if not provided. <a href="https://support.google.com/cloudidentity/answer/10070793">Find your customer ID</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.alerts`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
