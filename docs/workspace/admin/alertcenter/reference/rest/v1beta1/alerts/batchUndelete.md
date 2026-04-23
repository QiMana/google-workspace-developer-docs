---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts/batchUndelete
root: workspace
fetched_at: 2026-04-23T15:23:27.745Z
---

# Method: alerts.batchUndelete

Performs batch undelete operation on alerts.

### HTTP request

`POST https://alertcenter.googleapis.com/v1beta1/alerts:batchUndelete`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "customerId": string,
  "alertId": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The <code>customerId</code> must have the initial "C" stripped (for example, <code>046psxkn</code>). Inferred from the caller identity if not provided. <a href="https://support.google.com/cloudidentity/answer/10070793">Find your customer ID</a>.</p></td></tr><tr><td><code>alertId[]</code></td><td><p><code>string</code></p><p>Required. The list of alert IDs to undelete.</p></td></tr></tbody></table>

### Response body

Response to batch undelete operation on alerts.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "successAlertIds": [
    string
  ],
  "failedAlertStatus": {
    string: {
      object (google.rpc.Status)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>successAlertIds[]</code></td><td><p><code>string</code></p><p>The successful list of alert IDs.</p></td></tr><tr><td><code>failedAlertStatus</code></td><td><p><code>map (key: string, value: object (<code>google.rpc.Status</code>))</code></p><p>The status details for each failed <code>alertId</code>.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.alerts`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
