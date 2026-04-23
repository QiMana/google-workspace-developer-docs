---
source: https://developers.google.com/workspace/admin/reseller/v1/how-tos/create-subscription
root: workspace
fetched_at: 2026-04-23T15:24:44.728Z
---

# Create or transfer a subscription

After you [order a customer's account](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers), you can create a number of different subscriptions:

- An annual commitment subscription
- A flexible subscription
- A 30-day free trial
- A subscription at a discount

For more information about the products that these subscriptions use, see [Products & SKUs](https://developers.google.com/workspace/admin/reseller/v1/how-tos/products).

If you didn't order the customer's account, you can [transfer a subscription](#transfer_a_subscription).

Customers with `customerType = 'team'` can only purchase Google Workspace Essentials and Google Workspace Enterprise Essentials editions of Google Workspace. If you try to purchase any other Google Workspace subscriptions, you get the error: `Customer is not eligible to purchase this subscription`. Customers purchasing Essentials or usage-based subscriptions might not be able to use annual commitment plans and have limited upgrade and downgrade options.

## Create a subscription

To create a subscription for a new customer's account, use the following `POST` HTTP request and include the authorization token:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions
```

The `CUSTOMER_ID` is either the customer's primary domain name or the customer's unique identifier returned when [retrieving a resold customer's account](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers).

### Create an annual commitment plan

For annual commitment plan subscriptions, not all SKUs have the same default renewal settings. We recommend always passing `renewalSettings`. Create an annual commitment subscription with 10 seats:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions
```

```
{
  "kind": "reseller#subscription",
  "customerId": "CUSTOMER_ID",
  "skuId": "SKU_ID",
  "plan": {
    "planName": "ANNUAL_MONTHLY_PAY"
  },
  "seats": {
    "kind": "subscriptions#seats",
    "numberOfSeats": 10
  },
  "renewalSettings": {
    "renewalType": "RENEW_CURRENT_USERS_MONTHLY_PAY"
  },
  "purchaseOrderId": "PURCHASE_ORDER_ID"
}
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SKU_ID`: The unique stock keeping unit (SKU) identifier. For more information, see [Products & SKU IDs](https://developers.google.com/workspace/admin/reseller/v1/how-tos/products).
- `PURCHASE_ORDER_ID`: An optional purchase order ID that you can use to track usage.

A successful response returns an HTTP `200` status and the new subscription's settings for an annual commitment plan. `ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses.

The following is an example of an annual plan response:

```
{
  "kind": "reseller#subscription",
  "customerId": "C0123456",
  "subscriptionId": "123",
  "billingMethod": "ONLINE",
  "skuId": "1010020028",
  "creationTime": "1331647980142",
  "plan": {
    "planName": "ANNUAL",
    "isCommitmentPlan": true,
    "commitmentInterval": {
      "startTime": "1331647980142",
      "endTime": "1363183980142"
    }
  },
  "seats": {
    "kind": "subscriptions#seats",
    "numberOfSeats": 10,
    "licensedNumberOfSeats": 10
  },
  "trialSettings": {
    "isInTrial": false
  },
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "SWITCH_TO_PAY_AS_YOU_GO"
  },
  "purchaseOrderId": "my_example.com_annual_1",
  "status": "ACTIVE",
  "customerDomain": "my_example.com",
  "skuName": "Google Workspace Business Standard"
}
```

### Create a flexible plan

To create a flexible subscription for a new customer's account, use the following `POST` HTTP request and include the authorization token:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions
```

```
{
  "kind": "reseller#subscription",
  "customerId": "CUSTOMER_ID",
  "skuId": "SKU_ID",
  "plan": {
    "planName": "FLEXIBLE"
  },
  "seats": {
    "kind": "subscriptions#seats",
    "maximumNumberOfSeats": 10
  },
  "purchaseOrderId": "PURCHASE_ORDER_ID"
}
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SKU_ID`: The unique stock keeping unit (SKU) identifier. For more information, see [Products & SKU IDs](https://developers.google.com/workspace/admin/reseller/v1/how-tos/products).
- `PURCHASE_ORDER_ID`: An optional purchase order ID that you can use to track usage.

The following is an example of a flexible plan response:

```
{
  "kind": "reseller#subscription",
  "customerId": "C0123456",
  "subscriptionId": "123",
  "billingMethod": "ONLINE",
  "skuId": "1010020028",
  "creationTime": "1331647980142",
  "plan": {
    "planName": "FLEXIBLE",
    "isCommitmentPlan": false
  },
  "seats": {
    "kind": "subscriptions#seats",
    "maximumNumberOfSeats": 10,
    "licensedNumberOfSeats": 0
  },
  "trialSettings": {
    "isInTrial": false
  },
  "purchaseOrderId": "my_example_flex_1",
  "status": "ACTIVE",
  "customerDomain": "my_example.com",
  "skuName": "Google Workspace Business Standard"
}
```

### Create a free trial

To create a 30-day free trial subscription for a new customer's account, use the following `POST` HTTP request and include the authorization token:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions
```

```
{
  "kind": "reseller#subscription",
  "customerId": "CUSTOMER_ID",
  "skuId": "SKU_ID",
  "plan": {
    "planName": "TRIAL"
  },
  "seats": {
    "kind": "subscriptions#seats",
    "maximumNumberOfSeats": 10
  },
  "purchaseOrderId": "PURCHASE_ORDER_ID"
}
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SKU_ID`: The unique stock keeping unit (SKU) identifier. For more information, see [Products & SKU IDs](https://developers.google.com/workspace/admin/reseller/v1/how-tos/products).
- `PURCHASE_ORDER_ID`: An optional purchase order ID that you can use to track usage.

The following is an example of a 30-day free trial plan response:

```
{
  "kind": "reseller#subscription",
  "customerId": "C0123456",
  "subscriptionId": "123",
  "billingMethod": "ONLINE",
  "skuId": "1010020028",
  "creationTime": "1331647980142",
  "plan": {
    "planName": "TRIAL",
    "isCommitmentPlan": false
  },
  "seats": {
    "kind": "subscriptions#seats",
    "maximumNumberOfSeats": 10,
    "licensedNumberOfSeats": 0
  },
  "trialSettings": {
    "isInTrial": true,
    "trialEndTime": "1331648420142"
  },
  "purchaseOrderId": "my_example_trial_1",
  "status": "ACTIVE",
  "customerDomain": "my_example.com",
  "skuName": "Google Workspace Business Standard"
}
```

### Create a discount subscription

Google might provide a deal code for creating subscriptions at a discounted rate. To discount a subscription, you must provide the deal code in the subscription `insert` call. If the customer changes their original SKU, the discount is removed.

To create a discount annual commitment subscription for a new customer's account, use the following `POST` HTTP request and include the authorization token:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions
```

```
{
  "kind": "reseller#subscription",
  "customerId": "CUSTOMER_ID",
  "skuId": "SKU_ID",
  "plan": {
    "planName": "ANNUAL_MONTHLY_PAY"
  },
  "seats": {
    "kind": "subscriptions#seats",
    "numberOfSeats": 10
  },
  "renewalSettings": {
    "renewalType": "RENEW_CURRENT_USERS_MONTHLY_PAY"
  },
  "purchaseOrderId": "PURCHASE_ORDER_ID",
  "dealCode": "GOOGLE_CONTRACT_DEAL_CODE"
}
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SKU_ID`: The unique stock keeping unit (SKU) identifier. For more information, see [Products & SKU IDs](https://developers.google.com/workspace/admin/reseller/v1/how-tos/products).
- `PURCHASE_ORDER_ID`: An optional purchase order ID that you can use to track usage.
- `GOOGLE_CONTRACT_DEAL_CODE`: A discount code available from Google.

The following is an example of a discount annual plan response:

```
{
  "kind": "reseller#subscription",
  "customerId": "C0123456",
  "subscriptionId": "123",
  "billingMethod": "ONLINE",
  "skuId": "1010020028",
  "creationTime": "1331647980142",
  "plan": {
    "planName": "ANNUAL",
    "isCommitmentPlan": true,
    "commitmentInterval": {
      "startTime": "1331647980142",
      "endTime": "1363183980142"
    }
  },
  "seats": {
    "kind": "subscriptions#seats",
    "numberOfSeats": 10,
    "licensedNumberOfSeats": 10
  },
  "trialSettings": {
    "isInTrial": false
  },
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "SWITCH_TO_PAY_AS_YOU_GO"
  },
  "purchaseOrderId": "my_example.com_annual_1",
  "status": "ACTIVE",
  "customerDomain": "my_example.com",
  "dealCode": "GOOGLE_CONTRACT_DEAL_CODE",
  "skuName": "Google Workspace Business Standard"
}
```

## Transfer a subscription

If you didn't order the customer's account using the [order a new customer account](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers) operation, use the customer's transfer token when creating a subscription for that customer.

To create a subscription for a customer account that you didn't order, use the following `POST` HTTP request:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions?customerAuthToken=TOKEN_VALUE
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `TOKEN_VALUE`: A transfer token provided by your customer. After the customer generates the token, it's valid for 30 days.

For more information about how customers get a transfer token, see the [Admin Help Center](https://support.google.com/a/answer/7643791).

To transfer the subscription of an annual commitment plan customer, use the following `POST` HTTP request and include the authorization token:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/C0123456/subscriptions?customerAuthToken=auth token
```

```
{
  "customerId": "CUSTOMER_ID",
  "skuId": "SKU_ID",
  "plan": {
    "planName": "ANNUAL_MONTHLY_PAY"
  },
  "seats": {
    "numberOfSeats": 10,
    "licensedNumberOfSeats": 10
  },
  "purchaseOrderId": "PURCHASE_ORDER_ID"
}
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SKU_ID`: The unique stock keeping unit (SKU) identifier. For more information, see [Products & SKU IDs](https://developers.google.com/workspace/admin/reseller/v1/how-tos/products).
- `PURCHASE_ORDER_ID`: An optional purchase order ID that you can use to track usage.

A successful response returns an HTTP `200` status code and the transferred subscription's settings for an annual commitment plan:

```
{
  "kind": "reseller#subscription",
  "customerId": "C0123456",
  "subscriptionId": "123",
  "billingMethod": "ONLINE",
  "skuId": "1010020028",
  "creationTime": "1331647980142",
  "plan": {
    "planName": "ANNUAL",
    "isCommitmentPlan": true,
    "commitmentInterval": {
      "startTime": "1331647980142",
      "endTime": "1363183980142"
    }
  },
  "seats": {
    "kind": "subscriptions#seats",
    "numberOfSeats": 10,
    "licensedNumberOfSeats": 10
  },
  "trialSettings": {
    "isInTrial": false
  },
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "SWITCH_TO_PAY_AS_YOU_GO"
  },
  "purchaseOrderId": "example.com_annual_1",
  "status": "ACTIVE",
  "resourceUiUrl": "URL to customer's Admin console dashboard",
  "skuName": "Google Workspace Business Standard"
}
```

### Transfer limitations

If transferring a Google Workspace subscription with an associated Google Drive or Google Vault subscription, use the [`batch` operation](https://developers.google.com/workspace/admin/reseller/v1/how-tos/batch) to transfer all subscriptions with an `ACTIVE` status. Transferring each subscription one by one results in an error.

Transfer of suspended subscriptions is allowed only if the suspension reason is `PENDING_TOS_ACCEPTANCE`, `TRIAL_ENDED`, or `RENEWAL_WITH_TYPE_CANCEL`.

When transferring a legacy SKU, `subscriptions.list` returns a `skuId` of the SKU that needs to be transferred. The `skuId` of the SKU that the customer actually has is returned as `transferInfo.currentLegacySkuId`. For a complete list of `skuIds` and which products are used by these plans, see [Products & SKUs](https://developers.google.com/workspace/admin/reseller/v1/how-tos/products).

Transfers don't work with discount deal codes.
