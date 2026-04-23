---
source: https://developers.google.com/workspace/gmail/api/guides/push
root: workspace
fetched_at: 2026-04-23T15:28:53.039Z
---

# Configure push notifications in Gmail API

This document explains how to manage push notifications in Gmail API.

The Gmail API provides server push notifications that let you watch for changes to Gmail mailboxes. Use this feature to improve your application's performance. It eliminates the extra network and compute costs of polling resources to determine if they've changed. Whenever a mailbox changes, the Gmail API notifies your backend server application.

## Initial Cloud Pub/Sub setup

The Gmail API uses the [Cloud Pub/Sub API](https://cloud.google.com/pubsub/docs/overview) to deliver push notifications. This allows notifications using various methods including webhooks and polling on a single subscription endpoint.

### Prerequisites

To complete this setup, fulfill the [Cloud Pub/Sub prerequisites](https://cloud.google.com/pubsub/docs/push) and then [set up a Cloud Pub/Sub client](https://cloud.google.com/pubsub/docs/reference/libraries).

### Create a topic

Using your Cloud Pub/Sub client, [create the topic](https://cloud.google.com/pubsub/docs/create-topic) that the Gmail API should send notifications to. The topic name can be any name you choose under your project (for example, matching `projects/myproject/topics/*`, where `myproject` is the Project ID listed for your project in the Google Cloud console).

### Create a subscription

To set up a subscription to the topic you created, follow the [Cloud Pub/Sub subscription type](https://cloud.google.com/pubsub/docs/subscriber) guide. Configure the subscription type to be either a webhook push (that is, an HTTP POST callback) or a pull (that is, initiated by your app). This is how your application receives notifications for updates.

### Grant publish rights on your topic

Cloud Pub/Sub requires that you grant Gmail privileges to publish notifications to your topic.

To do this, grant `publish` privileges to `gmail-api-push@system.gserviceaccount.com`. You can do this using the [Cloud Pub/Sub permissions console](https://console.cloud.google.com/project/_/cloudpubsub/topicList) in the Google Cloud console by following these [access control instructions](https://docs.cloud.google.com/pubsub/docs/access-control#console).

Your organization's [domain restricted sharing](https://cloud.google.com/resource-manager/docs/organization-policy/domain-restricted-sharing#how-drs-works) configuration might prevent you from granting publish permissions. To resolve this, you can [configure an exception](https://cloud.google.com/resource-manager/docs/organization-policy/restricting-domains#configure-exceptions) for this service account.

## Get Gmail mailbox updates

After the initial Cloud Pub/Sub setup is finished, configure Gmail accounts to send notifications for mailbox updates.

### Watch request

To configure Gmail accounts to send notifications to your Cloud Pub/Sub topic, use your Gmail API client to call the [`watch`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch) method on the Gmail user mailbox. This is similar to any other Gmail API call. Provide the topic name you created and any other options in your `watch` request, such as [`labels`](https://developers.google.com/workspace/gmail/api/guides/labels) to filter on. For example, use the following request to be notified any time a change is made to the inbox:

### Protocol

```
POST "https://www.googleapis.com/gmail/v1/users/me/watch"
Content-type: application/json

{
  topicName: "projects/myproject/topics/mytopic",
  labelIds: ["INBOX"],
  labelFilterBehavior: "INCLUDE",
}
```

### Python

```
request = {
  'labelIds': ['INBOX'],
  'topicName': 'projects/myproject/topics/mytopic',
  'labelFilterBehavior': 'INCLUDE'
}
gmail.users().watch(userId='me', body=request).execute()
```

### Watch response

If the [`watch`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch) request is successful, you receive a response like the following:

{ historyId: 1234567890 expiration: 1431990098200 }

The response contains the current mailbox `historyId` for the user. Your client receives notifications for all changes after that `historyId`. If you need to process changes prior to this `historyId`, refer to the [Synchronize clients with Gmail API](https://developers.google.com/workspace/gmail/api/guides/sync).

Additionally, a successful `watch` call causes a notification to be immediately sent to your Cloud Pub/Sub topic.

If you receive an error from the `watch` call, the details should explain the source of the problem. This is typically an issue with the setup of the Cloud Pub/Sub topic and subscription. Refer to the [Cloud Pub/Sub documentation](https://cloud.google.com/pubsub/docs) to confirm that the setup is correct and for help debugging topic and subscription issues.

### Renew mailbox watch

You must call the [`watch`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch) at least once every 7 days or you'll stop receiving updates for the user. We recommend calling `watch` once per day. The `watch` method response also has an [`expiration`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch#body.WatchResponse.FIELDS.expiration) field with the timestamp for the `watch` expiration.

## Receive notifications

Whenever a mailbox update occurs that matches your `watch`, your application receives a notification message describing the change.

If you configured a push subscription, a webhook notification to your server conforms to a [`PubsubMessage`](https://cloud.google.com/pubsub/docs/reference/rest/v1/PubsubMessage):

```
POST https://yourserver.example.com/yourUrl
Content-type: application/json

{
  message:
  {
    // This is the actual notification data, as Base64URL-encoded JSON.
    data: "eyJlbWFpbEFkZHJlc3MiOiAidXNlckBleGFtcGxlLmNvbSIsICJoaXN0b3J5SWQiOiAiMTIzNDU2Nzg5MCJ9",

    // This is a Cloud Pub/Sub message id, unrelated to Gmail messages.
    "messageId": "2070443601311540",

    // This is the publish time of the message.
    "publishTime": "2021-02-26T19:13:55.749Z",
  }

  subscription: "projects/myproject/subscriptions/mysubscription"
}
```

The HTTP POST body is JSON and the actual Gmail notification payload is in the `message.data` field. The `message.data` field is a Base64URL-encoded string that decodes to a JSON object containing the email address and the new mailbox history ID for the user:

```
{"emailAddress": "user@example.com", "historyId": "9876543210"}
```

You can then use the [`history.list`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list) method to get the change details for the user since their *last known* `historyId`, as described in the [Synchronize clients with Gmail API](https://developers.google.com/workspace/gmail/api/guides/sync#partial-sync).

For example, use the [`history.list`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list) method to identify changes that occurred between your initial [`watch`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch) request and the receipt of the notification message shared in the previous example. Pass `1234567890` as the `startHistoryId` to `history.list`. Afterward, you can persist `9876543210` as the *last known* `historyId` for future use cases.

If you configured a pull subscription instead, refer to the code samples in Cloud Pub/Sub's [pull subscriptions](https://cloud.google.com/pubsub/docs/pull) guide for more details on receiving messages.

### Respond to notifications

All notifications must be acknowledged. If you use webhook [push delivery](https://cloud.google.com/pubsub/docs/push), then responding successfully (for example, HTTP 200) acknowledges the notification.

If you use pull delivery ([REST Pull](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions/pull), [RPC Pull](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#google.pubsub.v1.PullRequest), or [RPC StreamingPull](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#streamingpullrequest)), you must follow up with an acknowledge call ([REST](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions/acknowledge) or [RPC](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#acknowledgerequest)). Refer to the code samples in Cloud Pub/Sub's [pull subscriptions](https://cloud.google.com/pubsub/docs/pull) guide for more details on acknowledging messages either [asynchronously](https://cloud.google.com/pubsub/docs/pull#asynchronous_pull_mode) or [synchronously](https://cloud.google.com/pubsub/docs/pull#synchronous_pull_mode) using the official RPC-based client libraries.

If you don't acknowledge the notifications (for example, if your webhook callback returns an error or times out), Cloud Pub/Sub retries the notification at a later time.

## Stop mailbox updates

To stop receiving updates on a mailbox, call the [`stop`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/stop) method. All new notifications should stop within a few minutes.

## Limitations

The following are the limitations of working with server push notifications:

### Maximum notification rate

Each Gmail user being watched has a maximum notification rate of one event per second. Any user notifications exceeding that rate are dropped. When handling notifications, be careful not to trigger another notification, which can start a notification loop.

### Reliability

Typically, all notifications are delivered reliably within a few seconds; however, in some extreme situations, notifications might be delayed or dropped. Handle this possibility gracefully so that the application still syncs even if no push messages are received. For example, fall back to periodically calling the [`history.list`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list) method after a period with no notifications for a user.

### Cloud Pub/Sub limitations

The Cloud Pub/Sub API also has its own limitations, which are detailed in its [pricing](https://cloud.google.com/pubsub/pricing) and [quotas](https://cloud.google.com/pubsub/quotas) documentation.
