---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printers/batchCreatePrinters
root: workspace
fetched_at: 2026-04-23T15:23:29.922Z
---

# Method: admin.directory.v1.customers.chrome.printers.batchCreatePrinters

Creates printers under given Organization Unit.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/{parent=customers/*}/chrome/printers:batchCreatePrinters`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The name of the customer. Format: customers/{customer_id}</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "requests": [
    {
      object (CreatePrinterRequest)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requests[]</code></td><td><p><code>object (<code>CreatePrinterRequest</code>)</code></p><p>A list of Printers to be created. Max 50 at a time.</p></td></tr></tbody></table>

### Response body

Response for adding new printers in batch.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "printers": [
    {
      
    }
  ],
  "failures": [
    {
      object (FailureInfo)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>printers[]</code></td><td><p>A list of successfully created printers with their IDs populated.</p></td></tr><tr><td><code>failures[]</code></td><td><p><code>object (<code>FailureInfo</code>)</code></p><p>A list of create failures. Printer IDs are not populated, as printer were not created.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.chrome.printers`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## CreatePrinterRequest

Request for adding a new printer.

JSON representation

```
{
  "parent": string,
  "printer": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The name of the customer. Format: customers/{customer_id}</p></td></tr><tr><td><code>printer</code></td><td><p>Required. A printer to create. If you want to place the printer under particular OU then populate printer.org_unit_id filed. Otherwise the printer will be placed under root OU.</p></td></tr></tbody></table>
