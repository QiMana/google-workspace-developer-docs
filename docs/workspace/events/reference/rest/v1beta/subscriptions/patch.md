---
source: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/patch
root: workspace
fetched_at: 2026-04-23T15:28:38.126Z
---

# Method: subscriptions.patch

## Page Summary

- This API updates or renews a Google Workspace subscription using a PATCH request to the specified URL.
- You can optionally specify an `updateMask` to target specific fields for updating and `validateOnly` to preview the request without applying changes.
- The request body should contain a `Subscription` object and the successful response will include an `Operation` object with the updated `Subscription`.
- Authorization requires specific OAuth scopes related to Google Chat or Google Meet, as detailed in the documentation.

Updates or renews a Google Workspace subscription. To learn how to use this method, see [Update or renew a Google Workspace subscription](https://developers.google.com/workspace/events/guides/update-subscription).

For a subscription on a [Chat target resource](https://developers.google.com/workspace/events/guides/events-chat), you can update a subscription as:

- A Chat app by specifying an authorization scope that begins with `chat.app` andgetting one-time administrator approval. To learn more, see [Authorize as a Chat app with administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
- A user by specifying an authorization scope that doesn't include `app` in its name. To learn more, see [Authorize as a Chat user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).

### HTTP request

`PATCH https://workspaceevents.googleapis.com/v1beta/{subscription.name=subscriptions/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>subscription.name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the subscription.</p><p>Format: <code>subscriptions/{subscription}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Optional. The field to update. If omitted, updates any fields included in the request.</p><p>You can update one of the following fields in a subscription:</p><ul><li>: The timestamp when the subscription expires.</li><li>: The time-to-live (TTL) or duration of the subscription.</li><li>: The list of event types to receive about the target resource.</li></ul><p>When using the <code>*</code> wildcard (equivalent to <code>PUT</code>), omitted fields are set to empty values and rejected if they're invalid.</p></td></tr><tr><td><code>validateOnly</code></td><td><p><code>boolean</code></p><p>Optional. If set to <code>true</code>, validates and previews the request, but doesn't update the subscription.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains an instance of `Operation`.

- The `metadata` field contains an empty array.
- The `response` field contains an updated instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.spaces`
- `           https://www.googleapis.com/auth/chat.spaces.readonly`
- `           https://www.googleapis.com/auth/chat.messages`
- `           https://www.googleapis.com/auth/chat.messages.readonly`
- `           https://www.googleapis.com/auth/chat.messages.reactions`
- `           https://www.googleapis.com/auth/chat.messages.reactions.readonly`
- `           https://www.googleapis.com/auth/chat.memberships`
- `           https://www.googleapis.com/auth/chat.memberships.readonly`
- `           https://www.googleapis.com/auth/chat.app.memberships`
- `           https://www.googleapis.com/auth/chat.app.memberships.readonly`
- `           https://www.googleapis.com/auth/chat.app.messages.readonly`
- `           https://www.googleapis.com/auth/chat.app.spaces`
- `           https://www.googleapis.com/auth/chat.app.spaces.readonly`
- `           https://www.googleapis.com/auth/meetings.space.created`
- `           https://www.googleapis.com/auth/meetings.space.readonly`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
