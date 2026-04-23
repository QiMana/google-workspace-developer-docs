---
source: https://developers.google.com/workspace/admin/licensing/reference/rest/v1/licenseAssignments/listForProductAndSku
root: workspace
fetched_at: 2026-04-23T15:23:58.570Z
---

# Method: licenseAssignments.listForProductAndSku

List all users assigned licenses for a specific product SKU.

### HTTP request

`GET https://licensing.googleapis.com/apps/licensing/v1/product/{productId}/sku/{skuId}/users`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>productId</code></td><td><p><code>string</code></p><p>A product's unique identifier. For more information about products in this version of the API, see <a href="https://developers.google.com/workspace/admin/licensing/v1/how-tos/products">Products and SKUs</a>.</p></td></tr><tr><td><code>skuId</code></td><td><p><code>string</code></p><p>A product SKU's unique identifier. For more information about available SKUs in this version of the API, see <a href="https://developers.google.com/workspace/admin/licensing/v1/how-tos/products">Products and SKUs</a>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The customer's unique ID as defined in the Admin console, such as <code>C00000000</code>. If the customer is suspended, the server returns an error.</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer (uint32 format)</code></p><p>The <code>maxResults</code> query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to fetch the next page of data. The <code>maxResults</code> query string is related to the <code>pageToken</code> since <code>maxResults</code> determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `LicenseAssignmentList`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.licensing`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
