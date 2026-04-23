---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printServers/patch
root: workspace
fetched_at: 2026-04-23T15:23:30.159Z
---

# Method: admin.directory.v1.customers.chrome.printServers.patch

Updates a print server's configuration.

### HTTP request

`PATCH https://admin.googleapis.com/admin/directory/v1/{printServer.name=customers/*/chrome/printServers/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>printServer.name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the print server. Leave empty when creating.</p><p>Format: <code>customers/{customer.id}/printServers/{printServer.id}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The list of fields to update. Some fields are read-only and cannot be updated. Values for unspecified fields are patched.</p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.chrome.printers`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
