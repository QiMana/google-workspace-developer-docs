---
source: https://developers.google.com/workspace/admin/reseller/v1/how-tos/push
root: workspace
fetched_at: 2026-04-23T15:24:45.637Z
---

# Push notifications

This page describes how to use push notifications with the Reseller API.

## Overview

The Reseller API uses the Pub/Sub API to deliver push notifications about Google Workspace [subscription events](#event_types). For example, you can set up push notifications to be notified when customer subscription statuses change.

## Prerequisites

- Enable the [Pub/Sub API](https://cloud.google.com/pubsub/docs/reference/rest) for your Google Cloud project.
- Grant Pub/Sub IAM roles to your service account on your Cloud project. Granting the `roles/pubsub.editor` role is recommended, but you can use more specific [Pub/Sub permissions](https://cloud.google.com/pubsub/docs/access-control).

## Create a topic

To create a topic, register with the Reseller API using the [`resellernotify.register`](../../reference/rest/v1/resellernotify/register.md) method. This method takes a service account email address as a parameter. Only service accounts authorized by this method can subscribe to your topic.

```
POST https://reseller.googleapis.com/apps/reseller/v1/resellernotify/register
{
  "serviceAccountEmailAddress": "reseller@reseller-project.iam.gserviceaccount.com"
}
```

A successful response returns an HTTP `200` status code and a JSON response containing your Pub/Sub topic name.

Example response:

```
{
  "topicName": "projects/partner-watch/topics/C0abcdefg"
}
```

To authorize more service accounts, call `resellernotify.register` again.

## Revoke access for a service account

The Reseller API can unregister service accounts using the `resellernotify.unregister` endpoint:

```
POST https://reseller.googleapis.com/apps/reseller/v1/resellernotify/unregister
{
  "serviceAccountEmailAddress": "reseller@reseller-project.iam.gserviceaccount.com"
}
```

## Subscribe to a topic

After creating the Pub/Sub topic, set up how your application consumes change events. Choose one of the following:

- **Push subscription**: You supply an HTTP `POST` callback. Pub/Sub uses this callback to notify your application about new events.
- **Pull subscription**: Your application periodically makes an HTTP call to get queued changes.

Example request to subscribe to a topic:

```
PUT https://pubsub.googleapis.com/v1/projects/PROJECT/subscriptions/SUBSCRIPTION_NAME
{
  "topic": "TOPIC_NAME"
  // Only needed for push configurations
  "pushConfig": {
    "pushEndpoint": "PUSH_NOTIFICATION_ENDPOINT"
  },
}
```

Replace the following:

- `PROJECT`: Your Google Cloud project.
- `SUBSCRIPTION_NAME`: An identifying name for your subscription.
- `TOPIC_NAME`: The Pub/Sub topic you previously created.
- `PUSH_NOTIFICATION_ENDPOINT`: Your push notification handler endpoint.

A successful response returns an HTTP `200` status code. Example response:

```
{
  "name": "projects/PROJECT/subscriptions/SUBSCRIPTION_NAME",
  "topic": "TOPIC_NAME",
  "pushConfig": {
    "pushEndpoint": "PUSH_NOTIFICATION_ENDPOINT"
    },
  "ackDeadlineSeconds": 10
}
```

## Notification formats

The following is an example Pub/Sub notification. The message data is a base64-encoded JSON string.

```
{
  "message": {
    "attributes": {},
    "data": "eyJza3VfaWQiOiAiR29vZ2xlLUFwcHMtVW5saW1pdGVkIiwgImV2ZW50X3R5cGUiOiAiU1VCU0NSSVBUSU9OX0NBTkNFTExFRCIsICJjdXN0b21lcl9kb21haW5fbmFtZSI6ICJkb21haW4uY29tIiwgInN1YnNjcmlwdGlvbl9pZCI6ICIxMjM0NTY3IiwgImN1c3RvbWVyX2lkIjogIkMwYWJjZGVmIiwgIm1lc3NhZ2VfaWQiOiAiODY3NTMwOSIsICJwdWJsaXNoX3RpbWUiOiB7InNlY29uZHMiOiAxNDU3NzMxODQ2LCAibmFub3MiOiAzNDkwMDAwMDB9LCAicmVzZWxsZXJfY3VzdG9tZXJfaWQiOiAiQzByZXNlbGxlciJ9",
    "message_id": 1234567891012131
  },
  "subscription": "projects/PROJECT/subscriptions/SUBSCRIPTION_NAME"
}
```

Example `message.data` object after decoding:

```
{
  "customer_id": "C0abcdef",
  "customer_domain_name": "domain.com",
  "event_type": "SUBSCRIPTION_CANCELLED",
  "sku_id": "Google-Apps-Unlimited",
  "subscription_id": "1234567",
  // Optional fields dependent on event_type
  "subscription_suspension_reasons": [],
  "subscription_cancellation_reason": "REASON"
}
```

### Event types

Possible event types:

- `NEW_SUBSCRIPTION_CREATED`: A new subscription was created.
- `SUBSCRIPTION_TRIAL_ENDED`: Trial ended for a subscription.
- `PRICE_PLAN_SWITCHED`: Customer converted from a flexible plan to an annual plan. This event isn't triggered if the customer converts from an annual plan to a flexible plan as part of a renewal.
- `COMMITMENT_CHANGED`: Annual commitment was increased or decreased.
- `SUBSCRIPTION_RENEWED`: An annual subscription was renewed.
- `SUBSCRIPTION_SUSPENDED`: Subscription is suspended. See `subscription_suspension_reasons`.
- `SUBSCRIPTION_SUSPENSION_REVOKED`: Suspension was revoked.
- `SUBSCRIPTION_CANCELLED`: Subscription was canceled. See `subscription_cancellation_reason`. Can also detect transfers.
- `SUBSCRIPTION_CONVERTED`: Subscription was converted. Example cases:
	- Convert direct subscription to reseller subscription.
		- Convert paid subscription to grace offer.
		- Convert online subscription to offline subscription.
- `SUBSCRIPTION_UPGRADE`: Subscription SKU was upgraded. Example: Google Workspace Business Starter to Business Standard.
- `SUBSCRIPTION_DOWNGRADE`: Subscription SKU was downgraded. Example: Google Workspace Business Standard to Business Starter.
- `LICENSE_ASSIGNMENT_CHANGED`: License was assigned or revoked. Use to track seat count changes for Flexible subscriptions.

### Subscription cancellation reasons

The cancellation reason is populated when `event_type` is `SUBSCRIPTION_CANCELLED`. Possible reasons:

- `TRANSFERRED_OUT`: The customer transferred to direct billing or another reseller.
- `PURCHASE_OF_SUBSUMING_SKU`: The customer upgraded to a SKU that overrides another. Example: A customer with Google Workspace Business Starter and Vault upgrades to Business Plus, which includes Vault.
- `RESELLER_INITIATED`: The reseller canceled the subscription.
- `OTHER`: The subscription was canceled for another reason.

### Subscription suspension reasons

The suspension reason is populated when `event_type` is `SUBSCRIPTION_SUSPENDED`. Possible reasons:

- `PENDING_TOS_ACCEPTANCE`: The customer hasn't accepted the Google Workspace Resold Terms of Service.
- `RENEWAL_WITH_TYPE_CANCEL`: The customer's commitment ended and service was canceled.
- `RESELLER_INITIATED`: The reseller manually suspended the subscription.
- `TRIAL_ENDED`: The customer's trial expired without a non-trial plan selection.
- `OTHER`: The customer is suspended for an internal Google reason, such as abuse.

## Pub/Sub limitations

Push notification ordering isn't always sequential. Messages might be delivered multiple times or not at all. We recommend using `reseller.subscriptions.get` on changed subscriptions to pull the current state.
