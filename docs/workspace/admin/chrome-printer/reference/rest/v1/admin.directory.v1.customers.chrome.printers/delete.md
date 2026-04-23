---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printers/delete
root: workspace
fetched_at: 2026-04-23T15:23:30.293Z
---

# Method: admin.directory.v1.customers.chrome.printers.delete

Deletes a `Printer`.

### HTTP request

`DELETE https://admin.googleapis.com/admin/directory/v1/{name=customers/*/chrome/printers/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The name of the printer to be updated. Format: customers/{customer_id}/chrome/printers/{printerId}</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.chrome.printers`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
