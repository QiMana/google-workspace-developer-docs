---
source: https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions
root: workspace
fetched_at: 2026-04-23T15:24:42.002Z
---

# Retrieve & update a subscription

After you retrieve a subscription, you can use the information from the successful response to [change the status of the subscription](https://developers.google.com/workspace/admin/reseller/v1/how-tos/change-subscription-status) or update the subscription. This page focuses on how to retrieve and update a subscription.

## Retrieve a subscription

To retrieve a successfully ordered or transferred subscription, use the following `GET` HTTP request:

```
GET https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions/SUBSCRIPTION_ID
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SUBSCRIPTION_ID`: The subscription identifier that is unique for each customer. You can retrieve this value using the [Retrieve all reseller subscriptions method](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions).

This operation has no parameters in the request body.

A successful response returns an HTTP `200` status code and the subscription's settings. In the following example response, the `isInTrial` property is `false` but there is no `trialEndTime` property, meaning this customer has never been in a 30-day free trial with this plan.

```
{
  "kind": "reseller#subscription",
  "customerId": "C0123456",
  "subscriptionId": "123",
  "skuId": "1010020028",
  "billingMethod": "ONLINE",
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
    "renewalType": "RENEW_CURRENT_USERS_MONTHLY_PAY"
  },
  "purchaseOrderId": "example.com_annual_1",
  "status": "ACTIVE",
  "resourceUiUrl": "URL to customer's Subscriptions page in the Admin console",
  "skuName": "Google Workspace Business Standard"
}
```

## Retrieve all subscriptions for a customer

To retrieve all of a specific reseller customer's subscriptions that have been successfully ordered or transferred, use the following `GET` HTTP request and include the authorization token:

```
GET https://reseller.googleapis.com/apps/reseller/v1/subscriptions?customerId=CUSTOMER_ID&pageToken=START_DATE&maxResults=MAX_NUMBER
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `START_DATE`: The start date in the format `YYYY-MM-DD`.
- `MAX_NUMBER`: The maximum number of results returned on a response page.

This operation has no parameters in the request body.

A successful response returns a HTTP `200` status code and a list of the customer's subscriptions and settings. The list of subscriptions might include products that aren't managed in this version of the Reseller API.

If you don't manage the customer, a `403 Forbidden` error is returned.

## Retrieve all transferable subscriptions for a customer

To retrieve all of a customer's subscriptions that potentially could be transferred to the reseller's management, use the following `GET` HTTP request and include the authorization token. The `customerId` is required and is the customer's unique identifier returned when [retrieving a resold customer's account](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers). The `customerAuthToken` is a transfer token provided by your customer that is specific to your reseller ID. After the customer generates the token, it is valid for 30 days. For more information about how customers generate the token, see [Transfer your Google Workspace account to a reseller](https://support.google.com/a/answer/7643790).

```
GET https://reseller.googleapis.com/apps/reseller/v1/subscriptions?customerId=CUSTOMER_ID&customerAuthToken=AUTH_TOKEN&pageToken=START_DATE&maxResults=MAX_NUMBER
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `AUTH_TOKEN`: A transfer token provided by your customer that's specific to your reseller ID. After the customer generates the token, it's valid for 30 days. For more information about how customers generate the token, see [Transfer your Google Workspace account to a reseller](https://support.google.com/a/answer/7643790). If this value isn't valid or has expired, the API response returns a `403 Forbidden` error.
- `START_DATE`: The start date in the format `YYYY-MM-DD`.
- `MAX_NUMBER`: The maximum number of results returned on a response page.

This operation has no parameters in the request body.

A successful response returns a HTTP `200` status code and a list of the customer's transferable subscriptions with the expiration date of the transfer token and the minimum number of seats needed in the transfer order. A customer might hold additional subscriptions that aren't transferable.

```
{
  "kind": "reseller#subscriptions",
  "subscriptions": [
    {
      "kind": "subscriptions#subscription",
      "customerId": "custId-6543",
      "subscriptionId": "432",
      "skuId": "1010020028",
      "billingMethod": "ONLINE",
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
        "maximumNumberOfSeats": 500,
        "licensedNumberOfSeats": 10
      },
      "trialSettings": {
        "isInTrial": false
      },
      "renewalSettings": {
        "kind": "subscriptions#renewalSettings",
        "renewalType": "SWITCH_TO_PAY_AS_YOU_GO"
      },
      "transferInfo": {
        "transferabilityExpirationTime": "1333183980142",
        "minimumTransferableSeats": "20"
      },
      "purchaseOrderId": "PO_890",
      "status": "ACTIVE",
      "resourceUiUrl": "URL to customer's Subscriptions page in the Admin console",
      "skuName": "Google Workspace Business Standard"
    },
    {
      "kind": "subscriptions#subscription",
      "customerId": "custId-6543",
      "subscriptionId": "140",
      "skuId": "1010020028",
      "creationTime": "1329389322728",
      "plan": {
        "planName": "FLEXIBLE",
        "isCommitmentPlan": false
      },
      "seats": {
        "kind": "subscriptions#seats",
        "maximumNumberOfSeats": 50,
        "licensedNumberOfSeats": 10
      },
      "trialSettings": {
        "isInTrial": false,
        "trialEndTime": "1331877480016"
      },
      "renewalSettings": {
        "kind": "subscriptions#renewalSettings",
        "renewalType": "SWITCH_TO_PAY_AS_YOU_GO"
      },
      "transferInfo": {
        "transferabilityExpirationTime": "1333183780159",
        "minimumTransferableSeats": "10"
      },
      "purchaseOrderId": "",
      "status": "ACTIVE",
      "resourceUiUrl": "URL to customer's Subscriptions page in the Admin console",
      "skuName": "Google Workspace Business Standard"
    },
  ],
  "nextPageToken": "token"
}
```

If you plan to transfer these subscriptions using the batch operation,transfer all subscriptions. Transferring subscriptions one by one results in an error. In addition, the batch operation only transfers subscriptions with an `ACTIVE` status. For more information, see [Transfer a subscription](https://developers.google.com/workspace/admin/reseller/v1/how-tos/create-subscription#transfer_a_subscription).

## Retrieve all reseller subscriptions

To retrieve all of a reseller's successfully ordered or transferred subscriptions, use the following `GET` HTTP request and include the authorization token:

```
GET https://reseller.googleapis.com/apps/reseller/v1/subscriptions?customerNamePrefix=PREFIX&pageToken=TOKEN&maxResults=MAX_NUMBER
```

Replace the following:

- `PREFIX`: The beginning of the customer's name whose subscriptions you're looking for.
- `TOKEN`: A token identifying a specific page of results the server should return.
- `MAX_NUMBER`: The maximum number of results returned on a response page.

This operation can use the OAuth read-only access scope. The `customerNamePrefix`, `pageToken`, and `maxResults` are optional query strings.

The following example retrieves all of a reseller's subscriptions belonging to customers whose name begins with 'exam':

```
GET https://reseller.googleapis.com/apps/reseller/v1/subscriptions?customerNamePrefix=exam
```

```
{
  "kind": "reseller#subscriptions",
  "subscriptions": [
    {
      "kind": "subscriptions#subscription",
      "customerId": "C0123456",
      "subscriptionId": "123",
      "skuId": "1010020028",
      "creationTime": "1331647980142",
      "billingMethod": "ONLINE",
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
      "purchaseOrderId": "PO_135",
      "status": "ACTIVE",
      "resourceUiUrl": "URL to customer's Subscriptions page in the Admin console",
      "skuName": "Google Workspace Business Standard"
    },
    {
      "kind": "subscriptions#subscription",
      "customerId": "custId-5678",
      "subscriptionId": "1404686",
      "skuId": "1010020028",
      "billingMethod": "ONLINE",
      "creationTime": "1329389322728",
      "plan": {
        "planName": "FLEXIBLE",
        "isCommitmentPlan": false
      },
      "seats": {
        "kind": "subscriptions#seats",
        "maximumNumberOfSeats": 50,
        "licensedNumberOfSeats": 10
      },
      "trialSettings": {
        "isInTrial": false,
        "trialEndTime": "1331877480016"
      },
      "renewalSettings": {
        "kind": "subscriptions#renewalSettings",
        "renewalType": "AUTO_RENEW"
      },
      "purchaseOrderId": "",
      "status": "ACTIVE",
      "resourceUiUrl": "URL to customer's Subscriptions page in the Admin console",
      "skuName": "Google Workspace Business Standard"
    },
  ],
  "nextPageToken": "token"
}
```

## Update a subscription plan

Updating Google Workspace plans differs depending on the plan. Before you update a plan, consider the following:

- When you create a subscription and the customer qualifies, the subscription's plan can be a 30-day trial. Both the flexible and annual commitment payment plans can be 30-day free trials. During the trial, you can change the subscription's payment plan to either flexible or annual commitment plans as often as needed. After the trial ends and the plan becomes active, updating the plan follows the same rules as other subscriptions' active plans. To immediately move a trial subscription to an active plan, [start a paid service from a 30-day free trial subscription](#start_paid_service_from_a_free_trial_subscription). For more 30-day trial information and customer qualification rules, see the [Admin Help Center](https://support.google.com/a#topic=7570177).
- You can update a flexible plan to an annual commitment plan.
- You can't update an annual commitment plan.
- Not all plans work with all products. For more information about which products are used by these plans, see [Products & SKUs](https://developers.google.com/workspace/admin/reseller/v1/how-tos/products).

To update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan, use the following `POST` HTTP request:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions/SUBSCRIPTION_ID/changePlan
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SUBSCRIPTION_ID`: The subscription identifier that is unique for each customer. You can retrieve this value by using the [Retrieve all reseller subscriptions method](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions).

The following example updates the subscription with the `subscriptionId` value of 123. The `customerId` is C0123456.

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/C0123456/subscriptions/123/changePlan
```

The request body has the following:

```
{
  "kind": "reseller#changePlanRequest",
  "planName": "ANNUAL_MONTHLY_PAY",
  "seats": {
    "kind": "subscriptions#seats",
    "numberOfSeats": 10
  },
  "purchaseOrderId": "123_March2012"
}
```

A successful response returns an HTTP `201` status code and the updated subscription plan settings:

```
{
  "kind": "reseller#subscription",
  "customerId": "C0123456",
  "subscriptionId": "123",
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
  "purchaseOrderId": "123_March2012",
  "status": "ACTIVE",
  "skuName": "Google Workspace Business Standard"
}
```

## Update a subscription's seats

Updating an annual commitment plan subscription uses different subscription properties than updating a Google Workspace flexible plan's subscription.

### Update seats for an annual plan's subscription

To update an annual plan subscription's user license settings, use the following `POST` HTTP request:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions/SUBSCRIPTION_ID/changeSeats
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SUBSCRIPTION_ID`: The subscription identifier that is unique for each customer. You can retrieve this value by using the [Retrieve all reseller subscriptions method](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions).

The following example updates the subscription with the 123 `subscriptionId`. The `customerId` is C0123456. The body of the request differs depending on the plan type:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/C0123456/subscriptions/123/changeSeats
```

A Google Workspace annual commitment plan's subscription uses this request body to update the number of user licenses. The `numberOfSeats` value is a total. For example, if you previously had 10 user licenses and you have a customer order for 5 new licenses, the total in the request's body for `numberOfSeats` is 15, as shown in the following example:

```
{
    "kind": "subscriptions#seats",
    "numberOfSeats": 15
}
```

### Update seats for a flexible plan's subscription

A Google Workspace flexible plan's subscription uses the request body to update the user licenses. The `maximumNumberOfSeats` value is the total of existing licenses and new licenses. This is the maximum number of user licenses the account can provision.

```
{
  "kind": "subscriptions#seats",
  "maximumNumberOfSeats": 15
}
```

A successful response returns a HTTP `201` status code and the updated subscription license settings:

```
{
  "kind": "reseller#subscription",
  "customerId": "C0123456",
  "subscriptionId": "123",
  "skuId": "1010020028",
  "creationTime": "1331647980142",
  "plan": {
    "planName": "FLEXIBLE",
    "isCommitmentPlan": false
  },
  "seats": {
    "kind": "subscriptions#seats",
    "maximumNumberOfSeats": 15,
    "licensedNumberOfSeats": 10
  },
  "trialSettings": {
    "isInTrial": false
  },
  "skuName": "Google Workspace Business Standard"
}
```

## Update a subscription's renewal settings

To update an annual commitment subscription's renewal settings, use the following `POST` HTTP request:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions/SUBSCRIPTION_ID/changeRenewalSettings
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SUBSCRIPTION_ID`: The subscription identifier that is unique for each customer. You can retrieve this value by using the [Retrieve all reseller subscriptions method](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions).

The following is an example request body:

```
{
  "kind": "subscriptions#renewalSettings",
  "renewalType": "SWITCH_TO_PAY_AS_YOU_GO"
}
```

The `renewalType` property's value can be any of the following:

- `AUTO_RENEW_YEARLY_PAY`: At the end of an annual commitment plan's interval, automatically renew the subscription's plan as `ANNUAL_YEARLY_PAY` with the same `numberOfSeats`.
- `AUTO_RENEW_MONTHLY_PAY`: At the end of an annual commitment plan's interval, automatically renew the subscriptions's plan as `ANNUAL_MONTHLY_PAY` with the same `numberOfSeats`.
- `RENEW_CURRENT_USERS_YEARLY_PAY`: At the end of an annual commitment plan's interval, renew the subscription's plan as `ANNUAL_YEARLY_PAY` but use the total number of current active user licenses. This is the default setting for active annual commitment plans (paid yearly).
- `RENEW_CURRENT_USERS_MONTHLY_PAY`: At the end of an annual commitment plan's interval, renew the subscription's plan as `ANNUAL_MONTHLY_PAY` but use the total number of current active user licenses. This is the default setting for active annual commitment plans (paid monthly).
- `RENEW_ON_PROPOSED_OFFER`: At the end of the current commitment plan's interval, renew on the latest renewal proposal with numberOfSeats as number of current active user licenses or proposed offer commitment whichever is higher.
- `SWITCH_TO_PAY_AS_YOU_GO`: At the end of an annual commitment plan's interval, change the annual commitment plan to a flexible plan.
- `CANCEL`: At the end of an annual commitment plan interval, the subscription is suspended. To understand how to lift a suspension, see the [Admin Help Center](https://support.google.com/a/answer/2523116?topic=1247359&ctx=topic).

A successful response returns a HTTP `201` status code and the updated subscription renewal settings:

```
{
  "kind": "reseller#subscription",
  "customerId": "C0123456",
  "subscriptionId": "123",
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
    "numberOfSeats": 15,
    "licensedNumberOfSeats": 15
  },
  "trialSettings": {
    "isInTrial": false
  },
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "SWITCH_TO_PAY_AS_YOU_GO"
  },
  "skuName": "Google Workspace Business Standard"
}
```

## Start paid service from a free trial subscription

To immediately move a 30-day free trial subscription to a paid service subscription, if a payment plan has already been set up for the trial subscription, use the following `POST` HTTP request:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions/SUBSCRIPTION_ID/startPaidService
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SUBSCRIPTION_ID`: The subscription identifier that is unique for each customer. You can retrieve this value by using the [Retrieve all reseller subscriptions method](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions).

The following example has C0123456 as the `customerId` and the `subscriptionId` value of 123:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/C0123456/subscriptions/123/startPaidService
```

This operation has no parameters in the request body.

A successful response returns a HTTP `201` status code and the updated subscription settings:

```
{
  "kind": "reseller#subscription",
  "customerId": "C0123456",
  "subscriptionId": "123",
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
    "numberOfSeats": 15,
    "licensedNumberOfSeats": 15
  },
  "trialSettings": {
    "isInTrial": false
  },
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "SWITCH_TO_PAY_AS_YOU_GO"
  },
  "skuName": "Google Workspace Business Standard"
}
```

## Upgrade or downgrade a subscription

You can't downgrade annual plans in the middle of their term, and you can't schedule a downgrade using renewal settings. We recommend setting renewal settings to switch to `FLEXIBLE` and then downgrade after renewal time.

To upgrade or downgrade a subscription, create a new subscription with the `skuId` you want to upgrade or downgrade to.

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.

This call terminates the previous subscription and creates a new one.

Find more information about [upgrades and downgrades](https://developers.google.com/workspace/admin/reseller/v1/how-tos/products#upgrades_and_downgrades) on the Products & SKUs page.
