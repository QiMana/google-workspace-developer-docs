---
source: https://developers.google.com/workspace/admin/licensing/reference/rest/v1/licenseAssignments
root: workspace
fetched_at: 2026-04-23T15:23:58.330Z
---

# REST Resource: licenseAssignments

## Resource: LicenseAssignment

Representation of a license assignment.

JSON representation

```
{
  "kind": string,
  "etags": string,
  "productId": string,
  "userId": string,
  "selfLink": string,
  "skuId": string,
  "skuName": string,
  "productName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies the resource as a LicenseAssignment, which is <code>licensing#licenseAssignment</code>.</p></td></tr><tr><td><code>etags</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>productId</code></td><td><p><code>string</code></p><p>A product's unique identifier. For more information about products in this version of the API, see <a href="https://developers.google.com/workspace/admin/licensing/v1/how-tos/products">Product and SKU IDs</a>.</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's current primary email address. If the user's email address changes, use the new email address in your API requests.<br>Since a <code>userId</code> is subject to change, do not use a <code>userId</code> value as a key for persistent data. This key could break if the current user's email address changes.<br>If the <code>userId</code> is suspended, the license status changes.</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>Link to this page.</p></td></tr><tr><td><code>skuId</code></td><td><p><code>string</code></p><p>A product SKU's unique identifier. For more information about available SKUs in this version of the API, see <a href="https://developers.google.com/workspace/admin/licensing/v1/how-tos/products">Products and SKUs</a>.</p></td></tr><tr><td><code>skuName</code></td><td><p><code>string</code></p><p>Display Name of the sku of the product.</p></td></tr><tr><td><code>productName</code></td><td><p><code>string</code></p><p>Display Name of the product.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Revoke a license.</td></tr><tr><td><h3>get</h3></td><td>Get a specific user's license by product SKU.</td></tr><tr><td><h3>insert</h3></td><td>Assign a license.</td></tr><tr><td><h3>listForProduct</h3></td><td>List all users assigned licenses for a specific product SKU.</td></tr><tr><td><h3>listForProductAndSku</h3></td><td>List all users assigned licenses for a specific product SKU.</td></tr><tr><td><h3>patch</h3></td><td>Reassign a user's product SKU with a different SKU in the same product.</td></tr><tr><td><h3>update</h3></td><td>Reassign a user's product SKU with a different SKU in the same product.</td></tr></tbody></table>
