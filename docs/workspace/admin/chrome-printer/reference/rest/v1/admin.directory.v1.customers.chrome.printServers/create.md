---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printServers/create
root: workspace
fetched_at: 2026-04-23T15:23:30.408Z
---

# Method: admin.directory.v1.customers.chrome.printServers.create

Creates a print server.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/{parent=customers/*}/chrome/printServers`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers">unique ID</a> of the customer's Google Workspace account.</p><p>Format: <code>customers/{id}</code></p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.chrome.printers`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
