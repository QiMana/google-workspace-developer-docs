---
source: https://developers.google.com/workspace/admin/reseller/reference/rest/v1/subscriptions/changePlan
root: workspace
fetched_at: 2026-04-23T15:24:41.138Z
---

# Method: subscriptions.changePlan

Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments.

How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).

### HTTP request

`POST https://reseller.googleapis.com/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changePlan`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.</p></td></tr><tr><td><code>subscriptionId</code></td><td><p><code>string</code></p><p>This is a required property. The <code>subscriptionId</code> is the subscription identifier and is unique for each customer. Since a <code>subscriptionId</code> changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the <code>subscriptionId</code> can be found using the <a href="https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions">retrieve all reseller subscriptions</a> method.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `ChangePlanRequest`.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.order`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## ChangePlanRequest

JSON template for the subscriptions.changePlan rpc request.

JSON representation

```
{
  "kind": string,
  "planName": string,
  "seats": {
    
  },
  "purchaseOrderId": string,
  "dealCode": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies the resource as a subscription change plan request. Value: <code>subscriptions#changePlanRequest</code></p></td></tr><tr><td><code>planName</code></td><td><p><code>string</code></p><p>The <code>planName</code> property is required. This is the name of the subscription's payment plan. For more information about the Google payment plans, see <a href="https://developers.google.com/workspace/admin/reseller/v1/how-tos/concepts.html">API concepts</a>.<br><br>Possible values are:</p><ul><li><code>ANNUAL_MONTHLY_PAY</code> - The annual commitment plan with monthly payments</li><li><code>ANNUAL_YEARLY_PAY</code> - The annual commitment plan with yearly payments</li><li><code>FLEXIBLE</code> - The flexible plan</li><li><code>TRIAL</code> - The 30-day free trial plan</li></ul></td></tr><tr><td><code>seats</code></td><td><p>This is a required property. The seats property is the number of user seat licenses.</p></td></tr><tr><td><code>purchaseOrderId</code></td><td><p><code>string</code></p><p>This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a <code>purchaseOrderId</code> value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.</p></td></tr><tr><td><code>dealCode</code></td><td><p><code>string</code></p><p>Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in <code>changePlan</code> request in order to receive discounted rate. This property is optional. If a deal code has already been added to a subscription, this property may be left empty and the existing discounted rate will still apply (if not empty, only provide the deal code that is already present on the subscription). If a deal code has never been added to a subscription and this property is left blank, regular pricing will apply.</p></td></tr></tbody></table>
