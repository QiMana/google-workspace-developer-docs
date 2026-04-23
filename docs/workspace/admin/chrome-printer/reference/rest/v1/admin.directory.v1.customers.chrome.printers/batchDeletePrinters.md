---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printers/batchDeletePrinters
root: workspace
fetched_at: 2026-04-23T15:23:30.614Z
---

# Method: admin.directory.v1.customers.chrome.printers.batchDeletePrinters

Deletes printers in batch.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/{parent=customers/*}/chrome/printers:batchDeletePrinters`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The name of the customer. Format: customers/{customer_id}</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "printerIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>printerIds[]</code></td><td><p><code>string</code></p><p>A list of Printer.id that should be deleted. Max 100 at a time.</p></td></tr></tbody></table>

### Response body

Response for deleting existing printers in batch.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "printerIds": [
    string
  ],
  "failedPrinters": [
    {
      object (FailureInfo)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>printerIds[]</code></td><td><p><code>string</code></p><p>A list of Printer.id that were successfully deleted.</p></td></tr><tr><td><code>failedPrinters[]</code></td><td><p><code>object (<code>FailureInfo</code>)</code></p><p>A list of update failures.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.chrome.printers`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
