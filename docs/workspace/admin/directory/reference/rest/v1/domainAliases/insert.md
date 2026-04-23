---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/domainAliases/insert
root: workspace
fetched_at: 2026-04-23T15:23:36.731Z
---

# Method: domainAliases.insert

Inserts a domain alias of the customer.

### HTTP request

`POST https://admin.googleapis.com/admin/directory/v1/customer/{customer}/domainaliases`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>Immutable ID of the Google Workspace account.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.domain`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
