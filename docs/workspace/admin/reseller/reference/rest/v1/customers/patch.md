---
source: https://developers.google.com/workspace/admin/reseller/reference/rest/v1/customers/patch
root: workspace
fetched_at: 2026-04-23T15:24:40.181Z
---

# Method: customers.patch

Updates a customer account's settings. This method supports patch semantics.

You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`.

For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).

### HTTP request

`PATCH https://reseller.googleapis.com/apps/reseller/v1/customers/{customerId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.order`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
