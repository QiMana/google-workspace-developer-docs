---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/Settings
root: workspace
fetched_at: 2026-04-23T15:23:26.028Z
---

# Settings

Customer-level settings.

JSON representation

```
{
  "notifications": [
    {
      object (Notification)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>notifications[]</code></td><td><p><code>object (<code>Notification</code>)</code></p><p>The list of notifications.</p></td></tr></tbody></table>

## Notification

Settings for callback notifications. For more details see [Google Workspace Alert Notification](../../../guides/notifications.md).

JSON representation

```
{

  "cloudPubsubTopic": {
    object (CloudPubsubTopic)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>destination</code>. Exactly one destination to be specified. <code>destination</code> can be only one of the following:</td></tr><tr><td><code>cloudPubsubTopic</code></td><td><p><code>object (<code>CloudPubsubTopic</code>)</code></p><p>A Google Cloud Pub/sub topic destination.</p></td></tr></tbody></table>

## CloudPubsubTopic

A reference to a Cloud Pubsub topic.

To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.

JSON representation

```
{
  "topicName": string,
  "payloadFormat": enum (PayloadFormat)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>topicName</code></td><td><p><code>string</code></p><p>The <code>name</code> field of a Cloud Pubsub <a href="https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic">Topic</a>.</p></td></tr><tr><td><code>payloadFormat</code></td><td><p><code>enum (<code>PayloadFormat</code>)</code></p><p>Optional. The format of the payload that would be sent. If not specified the format will be JSON.</p></td></tr></tbody></table>

## PayloadFormat

The format of the payload.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PAYLOAD_FORMAT_UNSPECIFIED</code></td><td>Payload format is not specified (will use JSON as default).</td></tr><tr><td><code>JSON</code></td><td>Use JSON.</td></tr></tbody></table>
