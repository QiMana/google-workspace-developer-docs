---
source: https://developers.google.com/workspace/admin/reseller/reference/rest/v1/customers/insert
root: workspace
fetched_at: 2026-04-23T15:24:39.971Z
---

# Method: customers.insert

Orders a new customer's account.

Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](./get.md)

If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described in [order a resold account for an existing customer](../../../../v1/how-tos/manage_customers.md#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](../../../../v1/how-tos/manage_customers.md#create_customer).

After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](../../../../v1/how-tos/manage_customers.md#tos).

### HTTP request

`POST https://reseller.googleapis.com/apps/reseller/v1/customers`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerAuthToken</code></td><td><p><code>string</code></p><p>The <code>customerAuthToken</code> query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the <a href="https://support.google.com/a/bin/answer.py?answer=142336">administrator help center</a>.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.order`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
