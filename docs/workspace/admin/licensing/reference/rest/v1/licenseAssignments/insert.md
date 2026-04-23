---
source: https://developers.google.com/workspace/admin/licensing/reference/rest/v1/licenseAssignments/insert
root: workspace
fetched_at: 2026-04-23T15:23:58.845Z
---

# Method: licenseAssignments.insert

Assign a license.

### HTTP request

`POST https://licensing.googleapis.com/apps/licensing/v1/product/{productId}/sku/{skuId}/user`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>productId</code></td><td><p><code>string</code></p><p>A product's unique identifier. For more information about products in this version of the API, see <a href="https://developers.google.com/workspace/admin/licensing/v1/how-tos/products">Products and SKUs</a>.</p></td></tr><tr><td><code>skuId</code></td><td><p><code>string</code></p><p>A product SKU's unique identifier. For more information about available SKUs in this version of the API, see <a href="https://developers.google.com/workspace/admin/licensing/v1/how-tos/products">Products and SKUs</a>.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `LicenseAssignmentInsert`.

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.licensing`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## LicenseAssignmentInsert

Representation of a license assignment.

JSON representation

```
{
  "userId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Email id of the user</p></td></tr></tbody></table>
