---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.watches
root: workspace
fetched_at: 2026-04-23T15:28:43.907Z
---

# REST Resource: forms.watches

## Resource: Watch

A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type.

Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed.

A watch expires seven days after it is created unless it is renewed with `watches.renew`

JSON representation

```
{
  "id": string,
  "target": {
    object (WatchTarget)
  },
  "eventType": enum (EventType),
  "createTime": string,
  "expireTime": string,
  "errorType": enum (ErrorType),
  "state": enum (State)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Output only. The ID of this watch. See notes on <code>CreateWatchRequest.watch_id</code>.</p></td></tr><tr><td><code>target</code></td><td><p><code>object (<code>WatchTarget</code>)</code></p><p>Required. Where to send the notification.</p></td></tr><tr><td><code>eventType</code></td><td><p><code>enum (<code>EventType</code>)</code></p><p>Required. Which event type to watch for.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp of when this was created.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>expireTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp for when this will expire. Each <code>watches.renew</code> call resets this to seven days in the future.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>errorType</code></td><td><p><code>enum (<code>ErrorType</code>)</code></p><p>Output only. The most recent error type for an attempted delivery. To begin watching the form again a call can be made to <code>watches.renew</code> which also clears this error information.</p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>State</code>)</code></p><p>Output only. The current state of the watch. Additional details about suspended watches can be found by checking the <code>errorType</code>.</p></td></tr></tbody></table>

## WatchTarget

The target for notification delivery.

JSON representation

```
{

  "topic": {
    object (CloudPubsubTopic)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>target</code>. Required. The target for notification delivery. <code>target</code> can be only one of the following:</td></tr><tr><td><code>topic</code></td><td><p><code>object (<code>CloudPubsubTopic</code>)</code></p><p>A Pub/Sub topic. To receive notifications, the topic must grant publish privileges to the Forms service account <code>serviceAccount:forms-notifications@system.gserviceaccount.com</code>. Only the project that owns a topic may create a watch with it.</p><p>Pub/Sub delivery guarantees should be considered.</p></td></tr></tbody></table>

## CloudPubsubTopic

A Pub/Sub topic.

JSON representation

```
{
  "topicName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>topicName</code></td><td><p><code>string</code></p><p>Required. A fully qualified Pub/Sub topic name to publish the events to. This topic must be owned by the calling project and already exist in Pub/Sub.</p></td></tr></tbody></table>

## EventType

Possible event types that can be watched.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>EVENT_TYPE_UNSPECIFIED</code></td><td>Unspecified event type. This value should not be used.</td></tr><tr><td><code>SCHEMA</code></td><td>The schema event type. A watch with this event type will be notified about changes to form content and settings.</td></tr><tr><td><code>RESPONSES</code></td><td>The responses event type. A watch with this event type will be notified when form responses are submitted.</td></tr></tbody></table>

## ErrorType

Possible error types.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ERROR_TYPE_UNSPECIFIED</code></td><td>Unspecified error type.</td></tr><tr><td><code>PROJECT_NOT_AUTHORIZED</code></td><td>The cloud project does not have access to the form being watched. This occurs if the user has revoked the authorization for your project to access their form(s). Watches with this error will not be retried. To attempt to begin watching the form again a call can be made to <code>watches.renew</code></td></tr><tr><td><code>NO_USER_ACCESS</code></td><td>The user that granted access no longer has access to the form being watched. Watches with this error will not be retried. To attempt to begin watching the form again a call can be made to <code>watches.renew</code></td></tr><tr><td><code>OTHER_ERRORS</code></td><td>Another type of error has occurred. Whether notifications will continue depends on the watch <code>state</code>.</td></tr></tbody></table>

## State

Possible Watch states.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>Unspecified state.</td></tr><tr><td><code>ACTIVE</code></td><td>Watch is active.</td></tr><tr><td><code>SUSPENDED</code></td><td>The watch is suspended due to an error that may be resolved. The watch will continue to exist until it expires. To attempt to reactivate the watch a call can be made to <code>watches.renew</code></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Create a new watch.</td></tr><tr><td><h3>delete</h3></td><td>Delete a watch.</td></tr><tr><td><h3>list</h3></td><td>Return a list of the watches owned by the invoking project.</td></tr><tr><td><h3>renew</h3></td><td>Renew an existing watch for seven days.</td></tr></tbody></table>
