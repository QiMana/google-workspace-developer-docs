---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printServers/get
root: workspace
fetched_at: 2026-04-23T15:23:29.841Z
---

# Method: admin.directory.v1.customers.chrome.printServers.get

Returns a print server's configuration.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/{name=customers/*/chrome/printServers/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers">unique ID</a> of the customer's Google Workspace account.</p><p>Format: <code>customers/{id}</code></p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.chrome.printers`
- `           https://www.googleapis.com/auth/admin.chrome.printers.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
