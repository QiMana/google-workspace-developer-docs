---
source: https://developers.google.com/workspace/admin/reseller/reference/rest/v1/subscriptions/suspend
root: workspace
fetched_at: 2026-04-23T15:24:41.461Z
---

# Method: subscriptions.suspend

Suspends an active subscription.

You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state.

- For `FLEXIBLE` subscriptions, billing is paused.
- For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions:
	- Suspending the subscription does not change the renewal date that was originally committed to.
		- A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation.

We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.

### HTTP request

`POST https://reseller.googleapis.com/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/suspend`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.</p></td></tr><tr><td><code>subscriptionId</code></td><td><p><code>string</code></p><p>This is a required property. The <code>subscriptionId</code> is the subscription identifier and is unique for each customer. Since a <code>subscriptionId</code> changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the <code>subscriptionId</code> can be found using the <a href="https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions">retrieve all reseller subscriptions</a> method.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.order`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
