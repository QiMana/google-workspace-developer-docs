---
source: https://developers.google.com/workspace/events/guides/events-lifecycle
root: workspace
fetched_at: 2026-04-23T15:28:36.200Z
---

# Receive and respond to lifecycle events for Google Workspace subscriptions

## Page Summary

- This page describes Google Workspace subscription lifecycle events, including suspension, expiration reminders, and expiration, which are used to maintain active subscriptions.
- The Google Workspace Events API sends lifecycle events as structured CloudEvents to notify you about subscription suspensions, upcoming expirations, and actual expirations.
- Upon receiving suspension events, you can investigate the cause, resolve errors, and reactivate the subscription; expiration reminder events allow you to update the subscription's expiration time before it's deleted.
- When a Google Workspace subscription expires, you receive an expiration event and need to create a new subscription as the expired one is permanently deleted.

This page explains the lifecycle events that you receive for Google Workspace subscriptions, and how to use the events to maintain an active subscription.

The Google Workspace Events API sends the following types of lifecycle events:

- [Suspension events](#suspension) that notify you when your subscription is suspended due to an error.
- [Expiration reminder events](#expiration-reminder) that notify you that your subscription is expiring soon.
- [Expired events](#expired) that notify you when your subscription expires.

Your app should explicitly handle these lifecycle event types and ignore new event types that might appear in the future.

Lifecycle events from the Google Workspace Events API are structured according to the CloudEvents specification. To learn more, see [Structure of Google Workspace events](../../events.md#structure-events).

## Suspension events

When an error occurs for a Google Workspace subscription, the Google Workspace Events API suspends the subscription and prevents it from receiving events. Resolve any errors with the subscription before reactivating it.

To notify you of a suspension, the Google Workspace Events API sends a lifecycle event with the event type `google.workspace.events.subscription.v1.suspended`.

After you receive a suspension event, you can learn about the reason for the suspension, resolve any errors, and reactivate the subscription. For details, see [Resolve errors and reactivate a Google Workspace subscription](./reactivate-subscription.md).

The following shows a CloudEvent for a lifecycle event about a Google Workspace subscription that was suspended due to the error `ENDPOINT_PERMISSION_DENIED`:

```
{
  "id": "EVENT_UUID",
  "source": "//workspaceevents.googleapis.com/subscriptions/SUBSCRIPTION_ID",
  "subject": "//workspaceevents.googleapis.com/subscriptions/SUBSCRIPTION_ID",
  "type": "google.workspace.events.subscription.v1.suspended",
  "time": "2023-06-08T06:50:43.641299Z",
  "spec_version": '1.0',
  "datacontenttype": "application/json",
  "data": {
    "subscription":{
      "name": "subscriptions/SUBSCRIPTION_ID",
      "suspension_reason": "ENDPOINT_PERMISSION_DENIED",
      ...
    }
  }
}
```

## Expiration reminder events

After a subscription expires, the Google Workspace Events API permanently deletes it, and you can't renew or reactivate it.

To notify you of an expiring subscription, the Google Workspace Events API sends lifecycle events 12 hours and one hour before the expiration time. The event type for lifecycle events is `google.workspace.events.subscription.v1.expirationReminder`.

When you receive an expiration reminder event, use the `subscriptions.update()` method to update the expire time. For details, see [Update or renew a Google Workspace subscription](./update-subscription.md).

The following shows a CloudEvent for a lifecycle event about an expiring Google Workspace subscription:

```
{
  "id": "EVENT_UUID",
  "source": "//workspaceevents.googleapis.com/subscriptions/SUBSCRIPTION_ID",
  "subject": "//workspaceevents.googleapis.com/subscriptions/SUBSCRIPTION_ID",
  "type": "google.workspace.events.subscription.v1.expirationReminder",
  "time": "2023-06-08T06:50:43.641299Z",
  "spec_version": '1.0',
  "datacontenttype": "application/json",
  "data": {
    "subscription":{
      "name": "subscriptions/SUBSCRIPTION_ID",
      "expire_time": "2023-06-08T18:50:43.641299Z",
      ...
    }
  }
}
```

## Subscription expired events

The Google Workspace Events API sends you a lifecycle event when the subscription expires. The event type for this lifecycle event is `google.workspace.events.subscription.v1.expired`.

The Google Workspace Events API permanently deletes expired subscriptions. If your subscription expires, use the `subscriptions.create()` method to create another subscription. For details, see [Create a Google Workspace subscription](./create-subscription.md).

The following shows a CloudEvent for a lifecycle event about an expired Google Workspace subscription:

```
{
  "id": "EVENT_UUID",
  "source": "//workspaceevents.googleapis.com/subscriptions/SUBSCRIPTION_ID",
  "subject": "//workspaceevents.googleapis.com/subscriptions/SUBSCRIPTION_ID",
  "type": "google.workspace.events.subscription.v1.expired",
  "time": "2023-06-08T07:00:00.000000Z",
  "spec_version": '1.0',
  "datacontenttype": "application/json",
  "data": {
    "subscription":{
      "name": "subscriptions/SUBSCRIPTION_ID",
      "expire_time": "2023-06-08T07:00:00.000000Z",
      ...
    }
  }
}
```

## Related topics

- [Resolve errors and reactivate a subscription](./reactivate-subscription.md)
- [Update or renew a subscription](./update-subscription.md)
