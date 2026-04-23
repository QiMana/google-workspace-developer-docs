---
source: https://developers.google.com/workspace/admin/reseller/v1/how-tos/change-subscription-status
root: workspace
fetched_at: 2026-04-23T15:24:44.410Z
---

# Change a subscription status

You can suspend, activate, or cancel a subscription for your customers. To change the subscription plan, see [Retrieve & update a subscription](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions).

## Suspend a subscription

You can suspend paid subscriptions with a status of `ACTIVE` for up to 60 days. You can't suspend `TRIAL` subscriptions and other free subscription types. When you suspend a `FLEXIBLE` subscription, billing is paused.

When you suspend `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions, note the following:

- Suspending the subscription doesn't change the renewal date.
- A suspended subscription doesn't renew. If you activate the subscription after the original renewal date, a new annual subscription is created, starting on the day of activation.

To suspend a subscription, use the following `POST` HTTP request:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions/SUBSCRIPTION_ID/suspend
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SUBSCRIPTION_ID`: The subscription identifier that is unique for each customer. You can retrieve this value using the [Retrieve all reseller subscriptions method](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions).

## Activate a subscription

You can activate a suspended subscription if it's within the 60-day suspension window. You can't activate a subscription that's suspended for abuse or for pending terms of service acceptance.

To activate a suspended subscription, use the following `POST` HTTP request:

```
POST https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions/SUBSCRIPTION_ID/activate
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SUBSCRIPTION_ID`: The subscription identifier that is unique for each customer. You can retrieve this value using the [Retrieve all reseller subscriptions method](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions).

## Cancel a Google Workspace subscription

When you cancel a customer's subscription, the customer is immediately transferred to a direct billing relationship with Google and is given a short amount of time with no service interruption. The customer can then choose to either set up billing directly with Google by using a credit card or transfer to another reseller.

If a customer contains multiple subscriptions, you must cancel all subscriptions as a batch request so that they can be processed in a single transaction.

To immediately cancel a Google Workspace subscription, use the following `DELETE` HTTP request with a `deletionType='transfer_to_direct'`:

```
DELETE https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions/SUBSCRIPTION_ID?deletionType=transfer_to_direct
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SUBSCRIPTION_ID`: The subscription identifier that is unique for each customer. You can retrieve this value using the [Retrieve all reseller subscriptions method](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions).

## Delete a subscription (deprecated)

To immediately delete a non-Google Workspace subscription, use the following `DELETE` HTTP request:

```
DELETE https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID/subscriptions/SUBSCRIPTION_ID?deletionType=cancel
```

Replace the following:

- `CUSTOMER_ID`: Either the customer's primary domain name or the customer's unique identifier.
- `SUBSCRIPTION_ID`: The subscription identifier that is unique for each customer. You can retrieve this value using the [Retrieve all reseller subscriptions method](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions).
