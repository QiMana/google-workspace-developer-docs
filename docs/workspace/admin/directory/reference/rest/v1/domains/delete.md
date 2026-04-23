---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/domains/delete
root: workspace
fetched_at: 2026-04-23T15:23:37.262Z
---

# Method: domains.delete

Deletes a domain of the customer.

### HTTP request

`DELETE https://admin.googleapis.com/admin/directory/v1/customer/{customer}/domains/{domainName}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customer</code></td><td><p><code>string</code></p><p>Immutable ID of the Google Workspace account.</p></td></tr><tr><td><code>domainName</code></td><td><p><code>string</code></p><p>Name of domain to be deleted</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response is a generic HTTP response whose format is defined by the method.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.domain`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
