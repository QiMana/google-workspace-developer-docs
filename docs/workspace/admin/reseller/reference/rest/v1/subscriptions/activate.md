---
source: https://developers.google.com/workspace/admin/reseller/reference/rest/v1/subscriptions/activate
root: workspace
fetched_at: 2026-04-23T15:24:40.932Z
---

# Method: subscriptions.activate

Activates a subscription previously suspended by the reseller.

If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.

### HTTP request

`POST https://reseller.googleapis.com/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/activate`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.</p></td></tr><tr><td><code>subscriptionId</code></td><td><p><code>string</code></p><p>This is a required property. The <code>subscriptionId</code> is the subscription identifier and is unique for each customer. Since a <code>subscriptionId</code> changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the <code>subscriptionId</code> can be found using the <a href="https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions">retrieve all reseller subscriptions</a> method.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.order`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
