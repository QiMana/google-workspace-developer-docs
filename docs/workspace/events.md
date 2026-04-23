---
source: https://developers.google.com/workspace/events
root: workspace
fetched_at: 2026-04-23T15:28:34.586Z
---

# Subscribe to events using the Google Workspace Events API

## Page Summary

- The Google Workspace Events API enables you to subscribe to changes in Google Workspace resources like Google Chat and Google Meet, receiving notifications when resources are created, updated, or deleted.
- Your app receives events through Google Cloud Pub/Sub after subscribing to a specific Google Workspace resource, enabling it to react to changes in real-time.
- You can customize your subscriptions to receive detailed resource data or only resource names, impacting subscription duration and the level of information provided in event notifications.
- Google Workspace events adhere to the CloudEvents standard, providing structured data about the change, including attributes like event type, source, and timestamp.
- Supported Google Workspace events include changes to Chat spaces, messages, memberships, Meet conferences, recordings, and more, offering flexibility in monitoring specific resource activities.

This page provides an overview of the Google Workspace Events API and explains how to use the API to subscribe to events across Google Workspace.

*Google Workspace events* represent changes to Google Workspace resources, such as when resources are created, updated, or deleted. Use the Google Workspace Events API to subscribe to a Google Workspace resource and receive relevant events.

## How your app receives events

To let your app receive Google Workspace events, use the Google Workspace Events API to create subscriptions to Google Workspace resources.

![Illustration of how the Google Workspace Events API delivers events.](https://developers.google.com/static/workspace/events/images/workspace-events-flow.svg)

Figure 1. Example of how the Google Workspace Events API delivers events to a Google Chat app.

The following example describes how the Google Workspace Events API delivers events to a Chat app through a subscription:

1. A Chat app subscribes to a Google Chat space.
2. The Chat space changes. For example, a new message is posted in the space.
3. Chat delivers an event to a topic in [Google Cloud Pub/Sub](https://developers.google.com/pubsub/docs/overview), which serves as the notification endpoint for the subscription. The event contains data about what changed. For example, for an event about a new message, the event contains details about the `Message` resource that's created.
4. The Chat app processes the Google Cloud Pub/Sub message that contains the event, and if necessary, takes action.

## Important terminology

Common terms used in the Google Workspace Events API include:

*Google Workspace event*

A change to a Google Workspace resource. Events are formatted using the [CloudEvents](https://cloudevents.io/) specification, and can be either a *subscription event* or a *lifecycle event*:

*Subscription event*

A change to the Google Workspace resource that you're monitoring, such as a new message in a Chat space. You can specify how much detail you want to receive about the resource that changed. For details, see [Structure of Google Workspace events](#structure).

*Lifecycle event*

An event about your Google Workspace subscription. Lifecycle events notify you about issues and the state of your subscription so that you can avoid missing subscription events. By default, your subscription always receives lifecycle events. For details, see [Lifecycle events for Google Workspace subscriptions](./events/guides/events-lifecycle.md).

*Google Workspace subscription*

A named entity that monitors a resource from a Google Workspace application. A subscription is represented by a [`Subscription`](./events/reference/rest/v1/subscriptions.md) resource. A subscription is defined by the following information:

*Target resource*

The Google Workspace resource that you want to monitor. This resource is represented in the `targetResource` field of the Google Workspace subscription. Each subscription can only monitor one resource. To see which Google Workspace resources the Google Workspace Events API supports, see [Supported Google Workspace events](#supported-events).

*Event types*

The types of changes that you want to be notified about for the target resource. For example, if you've subscribed to a Chat space, you can choose whether to receive events about the space and its child resources, such as memberships and messages.

*Notification endpoint*

The endpoint where the Google Workspace subscription receives events. The Google Workspace Events API supports Google Cloud Pub/Sub topics as a notification endpoint. To learn more about using Google Cloud Pub/Sub, see the [Google Cloud Pub/Sub documentation](https://developers.google.com/pubsub/docs/overview).

*Payload options*

The [event data](#data) that you want to receive about changed resources.

## Supported Google Workspace events

The events that your app can receive events depend on the target resource of your subscription. The following table displays the supported events for each possible target resource.

| **Target resource** | **Supported events** |
| --- | --- |
| Chat spaces | - Messages - Memberships - Reactions - Space |
| Chat users | - Memberships |
| Google Drive files or shared drive files | - Access proposals - Approvals - Comments - Files - Replies |
| Google Meet meeting spaces and users | - Conferences - Participant sessions - Recordings - Smart notes [Developer Preview](./preview.md) - Transcripts |

To learn more, see the following guides:

- [Subscribe to Chat events](./events/guides/events-chat.md)
- [Subscribe to Drive events](./events/guides/events-drive.md)
- [Subscribe to Meet events](./events/guides/events-meet.md)

## Structure of Google Workspace events

Google Workspace events follow the [CloudEvents specification](https://cloudevents.io/), which is an industry-standard way of describing event data. Google Workspace events contain the following:

- [Attributes](#attributes) of the CloudEvent.
- [Data](#data) about the Google Workspace resource that changed as a result of the event

The following section explains the structure of the attributes and data for Google Workspace events.

### CloudEvent attributes

Google Workspace events contain the following required [CloudEvents attributes](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#required-attributes):

| Attribute | Description | Example |
| --- | --- | --- |
| `  datacontenttype  ` | The type of data that has been passed in the event. | `  application/json  ` |
| `  id  ` | An identifier for the CloudEvent. | `  spaces/AAAABBBBBBB/spaceEvents/ABCDEFGHIJKLMNO  ` |
| `  source  ` | The source of the event. For Google Workspace events, this is the full resource name of the subscription. | `  //workspaceevents.googleapis.com/subscriptions/chat-spaces-abcdefg  ` |
| `  specversion  ` | The CloudEvents specification version used for this event. | `  1.0  ` |
| `  subject  ` | The Google Workspace resource where the event occurred. | `  //chat.googleapis.com/spaces/AAAABBBBBBB  ` |
| `  time  ` | The timestamp when the event occurred, in [RFC 3339](https://tools.ietf.org/html/rfc3339) format. | `  2023-09-07T21:37:36.260127Z  ` |
| `  type  ` | The type of Google Workspace event. | `  google.workspace.chat.message.v1.created  ` |

### Event data

Event data is a payload that represents a change to your subscription's target resource, including child resources of the target resource. In your subscription, you can specify whether you want the payload to include data about the changed resource, or just the name of the changed resource.

For example, if you have a subscription to a Chat space, you can receive events about new messages in the space. For events about new messages, the event data contains a payload with the Chat `spaces.message` resource that was created.

When you create a subscription, you can specify how much resource data is included in the events that your app receives.

| Resource data | Payload | Subscription expiration |
| --- | --- | --- |
| Include resource data | Contains some or all fields of the changed resource. | Up to 4 hours, or 24 hours if you use [domain-wide delegation](https://support.google.com/a/answer/162106). |
| Exclude resource data | Contains only the name of the changed resource. | Up to 7 days |

These options for event data are represented in the [`payloadOptions`](./events/reference/rest/v1/subscriptions.md#PayloadOptions) field of your subscription.

### Events as Google Cloud Pub/Sub messages

The Google Workspace Events API subscriptions use Google Cloud Pub/Sub topics as the notification endpoint that receives Google Workspace events. The events are encoded as Google Cloud Pub/Sub messages. Your app can process the Google Cloud Pub/Sub message to take action or respond to the event.

The following example shows a Google Cloud Pub/Sub message that contains an event about an updated message in a Chat space:

```
{
    "message":
    {
        "attributes":
        {
            "ce-datacontenttype": "application/json",
            "ce-id": "spaces/SPACE_ID/spaceEvents/SPACE_EVENT_ID",
            "ce-source": "//workspaceevents.googleapis.com/subscriptions/SUBSCRIPTION_ID",
            "ce-specversion": "1.0",
            "ce-subject": "//chat.googleapis.com/spaces/SPACE_ID",
            "ce-time": "2023-09-07T21:37:53.274191Z",
            "ce-type": "google.workspace.chat.message.v1.updated"
        },
        "data": "EVENT_DATA",
        "messageId": "PUBSUB_MESSAGE_ID",
        "orderingKey": "//workspaceevents.googleapis.com/subscriptions/SUBSCRIPTION_ID",
        "publishTime": "2023-09-07T21:37:53.713Z"
    }
}
```

This example contains the following fields:

- `attributes`: [Attributes for the CloudEvent](#attributes), which include the event type. In this case, the event is about an updated message in the space.
- `data`: The [event data](#data) with details about the updated `spaces.message` resource, formatted as a Base64-encoded string.
- `messageId`: The identifier for the Google Cloud Pub/Sub message.

To learn more about how CloudEvents are specified in Google Cloud Pub/Sub messages, see [Google Cloud Pub/Sub Protocol Binding for CloudEvents](https://github.com/googleapis/google-cloudevents/blob/main/docs/spec/pubsub.md).

## Related topics

- [Choose Google Workspace Events API scopes](./events/guides/auth.md)
- [Create a Google Workspace subscription](./events/guides/create-subscription.md)
