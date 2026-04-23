---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts/undelete
root: workspace
fetched_at: 2026-04-23T15:23:28.797Z
---

# Method: alerts.undelete

Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

### HTTP request

`POST https://alertcenter.googleapis.com/v1beta1/alerts/{alertId}:undelete`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>alertId</code></td><td><p><code>string</code></p><p>Required. The identifier of the alert to undelete.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "customerId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The <code>customerId</code> must have the initial "C" stripped (for example, <code>046psxkn</code>). Inferred from the caller identity if not provided. <a href="https://support.google.com/cloudidentity/answer/10070793">Find your customer ID</a>.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.alerts`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
