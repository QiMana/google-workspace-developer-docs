---
source: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions
root: workspace
fetched_at: 2026-04-23T15:28:37.325Z
---

# REST Resource: subscriptions

## Page Summary

- Google Workspace Subscriptions deliver events about changes to specified resources, like Google Chat messages, to a notification endpoint, such as a Pub/Sub topic.
- Subscriptions require a target resource, event types to monitor, and a notification endpoint for event delivery.
- You can customize event payloads to include resource data and specific fields, particularly for Google Chat events.
- Subscriptions can be managed through various methods like creation, deletion, updating, and reactivation, allowing for control over event monitoring.
- Subscriptions have states (active, suspended, deleted) and potential error types that impact event delivery and require management.

## Resource: Subscription

A subscription to receive events about a Google Workspace resource. To learn more about subscriptions, see the [Google Workspace Events API overview](../../../../events.md).

JSON representation

```
{
  "name": string,
  "uid": string,
  "targetResource": string,
  "eventTypes": [
    string
  ],
  "payloadOptions": {
    object (PayloadOptions)
  },
  "notificationEndpoint": {
    object (NotificationEndpoint)
  },
  "state": enum (State),
  "suspensionReason": enum (ErrorType),
  "authority": string,
  "createTime": string,
  "updateTime": string,
  "reconciling": boolean,
  "etag": string,

  // Union field authority_info can be only one of the following:
  "userAuthority": string,
  "serviceAccountAuthority": string
  // End of list of possible types for union field authority_info.

  // Union field authority_info can be only one of the following:
  "userAuthority": string,
  "serviceAccountAuthority": string
  // End of list of possible types for union field authority_info.

  "expireTime": string,
  "ttl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the subscription.</p><p>Format: <code>subscriptions/{subscription}</code></p></td></tr><tr><td><code>uid</code></td><td><p><code>string</code></p><p>Output only. System-assigned unique identifier for the subscription.</p></td></tr><tr><td><code>targetResource</code></td><td><p><code>string</code></p><p>Required. Immutable. The Google Workspace resource that's monitored for events, formatted as the <a href="https://google.aip.dev/122#full-resource-names">full resource name</a>. To learn about target resources and the events that they support, see <a href="https://developers.google.com/workspace/events#supported-events">Supported Google Workspace events</a>.</p><p>A user can only authorize your app to create one subscription for a given target resource. If your app tries to create another subscription with the same user credentials, the request returns an <code>ALREADY_EXISTS</code> error.</p></td></tr><tr><td><code>eventTypes[]</code></td><td><p><code>string</code></p><p>Required. Unordered list. Input for creating a subscription. Otherwise, output only. One or more types of events to receive about the target resource. Formatted according to the CloudEvents specification.</p><p>The supported event types depend on the target resource of your subscription. For details, see <a href="https://developers.google.com/workspace/events/guides#supported-events">Supported Google Workspace events</a>.</p><p>By default, you also receive events about the <a href="https://developers.google.com/workspace/events/guides/events-lifecycle">lifecycle of your subscription</a>. You don't need to specify lifecycle events for this field.</p><p>If you specify an event type that doesn't exist for the target resource, the request returns an HTTP <code>400 Bad Request</code> status code.</p></td></tr><tr><td><code>payloadOptions</code></td><td><p><code>object (<code>PayloadOptions</code>)</code></p><p>Optional. Options about what data to include in the event payload. Only supported for Google Chat events.</p></td></tr><tr><td><code>notificationEndpoint</code></td><td><p><code>object (<code>NotificationEndpoint</code>)</code></p><p>Required. Immutable. The endpoint where the subscription delivers events, such as a Pub/Sub topic.</p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>State</code>)</code></p><p>Output only. The state of the subscription. Determines whether the subscription can receive events and deliver them to the notification endpoint.</p></td></tr><tr><td><code>suspensionReason</code></td><td><p><code>enum (<code>ErrorType</code>)</code></p><p>Output only. The error that suspended the subscription.</p><p>To reactivate the subscription, resolve the error and call the <code><code>subscriptions.reactivate</code></code> method.</p></td></tr><tr><td><code>authority</code></td><td><p><code>string</code></p><p>Output only. The user who authorized the creation of the subscription.</p><p>When a user authorizes the subscription, this field and the <code>userAuthority</code> field have the same value and the format is:</p><p>Format: <code>users/{user}</code></p><p>For Google Workspace users, the <code>{user}</code> value is the <a href="https://developers.google.com/admin-sdk/directory/reference/rest/v1/users#User.FIELDS.ids"><code>user.id</code></a> field from the Directory API.</p><p>When a Chat app authorizes the subscription, only <code>serviceAccountAuthority</code> field populates and this field is empty.</p></td></tr><tr><td colspan="2">Union field <code>authority_info</code>. The identity that authorized the creation of the subscription. <code>authority_info</code> can be only one of the following:</td></tr><tr><td><code>userAuthority</code></td><td><p><code>string</code></p><p>Output only. The user who authorized the creation of the subscription. The user must be able to view the <code><code>targetResource</code></code>.</p><p>For Google Workspace users, the <code>{user}</code> value is the <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/users#User.FIELDS.id"><code>user.id</code></a> field from the Directory API.</p><p>Format: <code>users/{user}</code></p></td></tr><tr><td><code>serviceAccountAuthority</code></td><td><p><code>string</code></p><p>Output only. The service account that was used to authorize the creation of the subscription. This service account must be owned by the same Google Cloud project where you created this subscription.</p><p>Format: <code>projects/{projectId}/serviceAccounts/{service_account_id}</code></p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time when the subscription is created.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The last time that the subscription is updated.</p></td></tr><tr><td><code>reconciling</code></td><td><p><code>boolean</code></p><p>Output only. If <code>true</code>, the subscription is in the process of being updated.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>Optional. This checksum is computed by the server based on the value of other fields, and might be sent on update requests to ensure the client has an up-to-date value before proceeding.</p></td></tr><tr><td colspan="2"><p>Union field <code>expiration</code>. The time when the subscription expires.</p><p>The maximum expiration time depends on whether your subscription includes resource data in event payloads (specified in the <code>PayloadOptions</code> field):</p><ul><li>If payloads omit resource data, up to 7 days.</li><li>If payloads include resource data, up to 4 hours. If your Google Workspace organization grants access to the resource through <a href="https://support.google.com/a/answer/162106">domain-wide delegation</a>, you can extend the subscription's expiration time to up to 24 hours.</li></ul><p>After a subscription expires, it's deleted automatically. You receive lifecycle events to the <code>notification_endpoint</code> 12 hours and one hour before the subscription expires. For details, see <a href="https://developers.google.com/workspace/events/guides/events-lifecycle">Receive and respond to lifecycle events</a>.</p><p>To prevent a subscription from expiring, you can use the <code><code>UpdateSubscription</code></code> method to extend its expiration date. For details, see <a href="https://developers.google.com/workspace/events/guides/update-subscription">Update or renew a subscription</a>. <code>expiration</code> can be only one of the following:</p></td></tr><tr><td><code>expireTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Non-empty default. The timestamp in UTC when the subscription expires. Always displayed on output, regardless of what was used on input.</p></td></tr><tr><td><code>ttl</code></td><td><p><code>string (<code>Duration</code> format)</code></p><p>Input only. The time-to-live (TTL) or duration for the subscription. If unspecified or set to <code>0</code>, uses the maximum possible duration.</p></td></tr></tbody></table>

## PayloadOptions

Options about what data to include in the event payload. Only supported for Google Chat events.

JSON representation

```
{
  "includeResource": boolean,
  "fieldMask": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>includeResource</code></td><td><p><code>boolean</code></p><p>Optional. Whether the event payload includes data about the resource that changed. For example, for an event where a Google Chat message was created, whether the payload contains data about the <a href="https://developers.google.com/chat/api/reference/rest/v1/spaces.messages"><code>Message</code></a> resource. If false, the event payload only includes the name of the changed resource.</p></td></tr><tr><td><code>fieldMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Optional. If <code>includeResource</code> is set to <code>true</code>, the list of fields to include in the event payload. Separate fields with a comma. For example, to include a Google Chat message's sender and create time, enter <code>message.sender,message.createTime</code>. If omitted, the payload includes all fields for the resource.</p><p>If you specify a field that doesn't exist for the resource, the system ignores the field.</p></td></tr></tbody></table>

## NotificationEndpoint

The endpoint where the subscription delivers events.

JSON representation

```
{

  "pubsubTopic": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>endpoint</code>.</p><p><code>endpoint</code> can be only one of the following:</p></td></tr><tr><td><code>pubsubTopic</code></td><td><p><code>string</code></p><p>Immutable. The Pub/Sub topic that receives events for the subscription.</p><p>Format: <code>projects/{project}/topics/{topic}</code></p><p>You must create the topic in the same Google Cloud project where you create this subscription.</p><p>Note: The Google Workspace Events API uses <a href="https://cloud.google.com/pubsub/docs/ordering">ordering keys</a> for the benefit of sequential events. If the Cloud Pub/Sub topic has a <a href="https://cloud.google.com/pubsub/docs/resource-location-restriction#exceptions">message storage policy</a> configured to exclude the nearest Google Cloud region, publishing events with ordering keys will fail.</p><p>When the topic receives events, the events are encoded as Pub/Sub messages. For details, see the <a href="https://github.com/googleapis/google-cloudevents/blob/main/docs/spec/pubsub.md">Google Cloud Pub/Sub Protocol Binding for CloudEvents</a>.</p></td></tr></tbody></table>

## State

Possible states for the subscription.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>Default value. This value is unused.</td></tr><tr><td><code>ACTIVE</code></td><td>The subscription is active and can receive and deliver events to its notification endpoint.</td></tr><tr><td><code>SUSPENDED</code></td><td>The subscription is unable to receive events due to an error. To identify the error, see the <code><code>suspensionReason</code></code> field.</td></tr><tr><td><code>DELETED</code></td><td>The subscription is deleted.</td></tr></tbody></table>

## ErrorType

Possible errors for a subscription.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ERROR_TYPE_UNSPECIFIED</code></td><td>Default value. This value is unused.</td></tr><tr><td><code>USER_SCOPE_REVOKED</code></td><td>The authorizing user has revoked the grant of one or more OAuth scopes. To learn more about authorization for Google Workspace, see <a href="https://developers.google.com/workspace/guides/configure-oauth-consent#choose-scopes">Configure the OAuth consent screen</a>.</td></tr><tr><td><code>APP_SCOPE_REVOKED</code></td><td>The domain administrator has revoked the grant of one or more OAuth scopes for the app.</td></tr><tr><td><code>RESOURCE_DELETED</code></td><td>The target resource for the subscription no longer exists.</td></tr><tr><td><code>USER_AUTHORIZATION_FAILURE</code></td><td>The user that authorized the creation of the subscription no longer has access to the subscription's target resource.</td></tr><tr><td><code>APP_AUTHORIZATION_FAILURE</code></td><td>The app that authorized the creation of the subscription no longer has access to the subscription's target resource.</td></tr><tr><td><code>ENDPOINT_PERMISSION_DENIED</code></td><td>The Google Workspace application doesn't have access to deliver events to your subscription's notification endpoint.</td></tr><tr><td><code>ENDPOINT_NOT_FOUND</code></td><td>The subscription's notification endpoint doesn't exist, or the endpoint can't be found in the Google Cloud project where you created the subscription.</td></tr><tr><td><code>ENDPOINT_RESOURCE_EXHAUSTED</code></td><td>The subscription's notification endpoint failed to receive events due to insufficient quota or reaching rate limiting.</td></tr><tr><td><code>OTHER</code></td><td>An unidentified error has occurred.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a Google Workspace subscription.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a Google Workspace subscription.</td></tr><tr><td><h3>get</h3></td><td>Gets details about a Google Workspace subscription.</td></tr><tr><td><h3>list</h3></td><td>Lists Google Workspace subscriptions.</td></tr><tr><td><h3>patch</h3></td><td>Updates or renews a Google Workspace subscription.</td></tr><tr><td><h3>reactivate</h3></td><td>Reactivates a suspended Google Workspace subscription.</td></tr></tbody></table>
