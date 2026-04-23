---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printServers/batchDeletePrintServers
root: workspace
fetched_at: 2026-04-23T15:23:29.517Z
---

# Method: admin.directory.v1.customers.chrome.printServers.batchDeletePrintServers

Deletes multiple print servers.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/{parent=customers/*}/chrome/printServers:batchDeletePrintServers`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers">unique ID</a> of the customer's Google Workspace account.</p><p>Format: <code>customers/{customer.id}</code></p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "printServerIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>printServerIds[]</code></td><td><p><code>string</code></p><p>A list of print server IDs that should be deleted (max <code>100</code> per batch).</p></td></tr></tbody></table>

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "printServerIds": [
    string
  ],
  "failedPrintServers": [
    {
      object (PrintServerFailureInfo)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>printServerIds[]</code></td><td><p><code>string</code></p><p>A list of print server IDs that were successfully deleted.</p></td></tr><tr><td><code>failedPrintServers[]</code></td><td><p><code>object (<code>PrintServerFailureInfo</code>)</code></p><p>A list of update failures.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.chrome.printers`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
