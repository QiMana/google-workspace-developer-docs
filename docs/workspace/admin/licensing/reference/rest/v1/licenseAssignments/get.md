---
source: https://developers.google.com/workspace/admin/licensing/reference/rest/v1/licenseAssignments/get
root: workspace
fetched_at: 2026-04-23T15:23:58.431Z
---

# Method: licenseAssignments.get

licenseAssignments.get a specific user's license by product SKU.

### HTTP request

`GET https://licensing.googleapis.com/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>productId</code></td><td><p><code>string</code></p><p>A product's unique identifier. For more information about products in this version of the API, see <a href="https://developers.google.com/workspace/admin/licensing/v1/how-tos/products">Products and SKUs</a>.</p></td></tr><tr><td><code>skuId</code></td><td><p><code>string</code></p><p>A product SKU's unique identifier. For more information about available SKUs in this version of the API, see <a href="https://developers.google.com/workspace/admin/licensing/v1/how-tos/products">Products and SKUs</a>.</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's current primary email address. If the user's email address changes, use the new email address in your API requests.<br>Since a <code>userId</code> is subject to change, do not use a <code>userId</code> value as a key for persistent data. This key could break if the current user's email address changes.<br>If the <code>userId</code> is suspended, the license status changes.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.licensing`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
