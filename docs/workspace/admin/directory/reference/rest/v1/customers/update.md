---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers/update
root: workspace
fetched_at: 2026-04-23T15:23:36.675Z
---

# Method: customers.update

## Method: customers.update

Updates a customer.

### HTTP request

`PUT https://admin.googleapis.com/admin/directory/v1/customers/{customerKey}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerKey</code></td><td><p><code>string</code></p><p>Id of the customer to be updated</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `Customer`.

### Response body

If successful, the response body contains an instance of `Customer`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.directory.customer`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
