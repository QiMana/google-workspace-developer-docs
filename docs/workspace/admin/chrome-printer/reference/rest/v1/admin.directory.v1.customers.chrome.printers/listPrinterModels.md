---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printers/listPrinterModels
root: workspace
fetched_at: 2026-04-23T15:23:31.189Z
---

# Method: admin.directory.v1.customers.chrome.printers.listPrinterModels

Lists the supported printer models.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/{parent=customers/*}/chrome/printers:listPrinterModels`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of objects to return. The service may return fewer than this value.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>A page token, received from a previous call.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Filer to list only models by a given manufacturer in format: "manufacturer:Brother". Search syntax is shared between this api and Admin Console printers pages.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response for listing allowed printer models.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "printerModels": [
    {
      object (PrinterModel)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>printerModels[]</code></td><td><p><code>object (<code>PrinterModel</code>)</code></p><p>Printer models that are currently allowed to be configured for ChromeOs. Some printers may be added or removed over time.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token, which can be sent as <code>pageToken</code> to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.chrome.printers`
- `           https://www.googleapis.com/auth/admin.chrome.printers.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## PrinterModel

Printer manufacturer and model

JSON representation

```
{
  "manufacturer": string,
  "displayName": string,
  "makeAndModel": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>manufacturer</code></td><td><p><code>string</code></p><p>Manufacturer. eq. "Brother"</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Display name. eq. "Brother MFC-8840D"</p></td></tr><tr><td><code>makeAndModel</code></td><td><p><code>string</code></p><p>Make and model as represented in "makeAndModel" field in Printer object. eq. "brother mfc-8840d"</p></td></tr></tbody></table>
