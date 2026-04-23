---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch
root: workspace
fetched_at: 2026-04-23T15:29:06.668Z
---

# Method: users.watch

Set up or update a push notification watch on the given user mailbox. For more information, see [Configure push notifications in Gmail API](https://developers.google.com/workspace/gmail/api/guides/push).

### HTTP request

`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/watch`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "labelIds": [
    string
  ],
  "labelFilterAction": enum (LabelFilterAction),
  "labelFilterBehavior": enum (LabelFilterAction),
  "topicName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labelIds[]</code></td><td><p><code>string</code></p><p>List of labelIds to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated.</p></td></tr><tr><td><code>labelFilterAction<br><b>(deprecated)</b></code></td><td><p><code>enum (<code>LabelFilterAction</code>)</code></p><p>Filtering behavior of <code>labelIds list</code> specified. This field is deprecated because it caused incorrect behavior in some cases; use <code>labelFilterBehavior</code> instead.</p></td></tr><tr><td><code>labelFilterBehavior</code></td><td><p><code>enum (<code>LabelFilterAction</code>)</code></p><p>Filtering behavior of <code>labelIds list</code> specified. This field replaces <code>labelFilterAction</code>; if set, <code>labelFilterAction</code> is ignored.</p></td></tr><tr><td><code>topicName</code></td><td><p><code>string</code></p><p>A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name <strong>must</strong> already exist in Cloud Pub/Sub and you <strong>must</strong> have already granted gmail "publish" permission on it. For example, "projects/my-project-identifier/topics/my-topic-name" (using the Cloud Pub/Sub "v1" topic naming format).</p><p>Note that the "my-project-identifier" portion must exactly match your Google developer project id (the one executing this watch request).</p></td></tr></tbody></table>

### Response body

Push notification watch response.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "historyId": string,
  "expiration": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>historyId</code></td><td><p><code>string</code></p><p>The ID of the mailbox's current history record.</p></td></tr><tr><td><code>expiration</code></td><td><p><code>string (int64 format)</code></p><p>When Gmail will stop sending notifications for mailbox updates (epoch millis). Call <code>watch</code> again before this time to renew the watch.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`
- `           https://www.googleapis.com/auth/gmail.metadata`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## LabelFilterAction

Filtering behavior of labelIds list specified.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>include</code></td><td>Only get push notifications for message changes relating to labelIds specified.</td></tr><tr><td><code>exclude</code></td><td>Get push notifications for all message changes except those relating to labelIds specified.</td></tr></tbody></table>
