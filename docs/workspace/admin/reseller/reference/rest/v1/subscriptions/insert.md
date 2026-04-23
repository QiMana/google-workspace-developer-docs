---
source: https://developers.google.com/workspace/admin/reseller/reference/rest/v1/subscriptions/insert
root: workspace
fetched_at: 2026-04-23T15:24:42.062Z
---

# Method: subscriptions.insert

Creates or transfer a subscription.

Create a subscription for a customer's account that you ordered using the [Order a new customer account](../customers/insert.md) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](../../../../v1/how-tos/manage_subscriptions.md#create_subscription).\\

If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer.

If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](../../../../v1/how-tos/concepts.md) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](../../../../v1/how-tos/manage_subscriptions.md#transfer_a_subscription).

### HTTP request

`POST https://reseller.googleapis.com/apps/reseller/v1/customers/{customerId}/subscriptions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerAuthToken</code></td><td><p><code>string</code></p><p>The <code>customerAuthToken</code> query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the <a href="https://support.google.com/a/bin/answer.py?answer=142336">administrator help center</a>.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.order`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
