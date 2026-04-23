---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printers/get
root: workspace
fetched_at: 2026-04-23T15:23:30.349Z
---

# Method: admin.directory.v1.customers.chrome.printers.get

Returns a `Printer` resource (printer's config).

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/{name=customers/*/chrome/printers/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The name of the printer to retrieve. Format: customers/{customer_id}/chrome/printers/{printerId}</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.chrome.printers`
- `           https://www.googleapis.com/auth/admin.chrome.printers.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
