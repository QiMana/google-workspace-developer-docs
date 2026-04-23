---
source: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/reactivate
root: workspace
fetched_at: 2026-04-23T15:28:37.589Z
---

# Method: subscriptions.reactivate

## Page Summary

- Reactivates a suspended Google Workspace subscription, resetting its state to `ACTIVE` after the suspension error is resolved.
- Requires a `POST` request to `https://workspaceevents.googleapis.com/v1/{name=subscriptions/*}:reactivate`, with the subscription name provided as a path parameter.
- The request body should be empty, and a successful response includes an `Operation` object with the updated `Subscription` details.
- Authorization requires one of the specified OAuth scopes, such as `https://www.googleapis.com/auth/chat.spaces` or similar, for access and interaction with Google Workspace resources.

Reactivates a suspended Google Workspace subscription.

This method resets your subscription's `State` field to `ACTIVE`. Before you use this method, you must fix the error that suspended the subscription. This method will ignore or reject any subscription that isn't currently in a suspended state. To learn how to use this method, see [Reactivate a Google Workspace subscription](../../../../guides/reactivate-subscription.md).

For a subscription on a [Chat target resource](../../../../guides/events-chat.md), you can reactivate a subscription as:

- A Chat app by specifying an authorization scope that begins with `chat.app` and getting one-time administrator approval. To learn more, see [Authorize as a Chat app with administrator approval](../../../../../chat/authenticate-authorize-chat-app.md).
- A user by specifying an authorization scope that doesn't include `app` in its name. To learn more, see [Authorize as a Chat user](../../../../../chat/authenticate-authorize-chat-user.md).

### HTTP request

`POST https://workspaceevents.googleapis.com/v1/{name=subscriptions/*}:reactivate`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the subscription.</p><p>Format: <code>subscriptions/{subscription}</code></p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `Operation`.

- The `metadata` field contains an empty array.
- The `response` field contains an updated instance of `Subscription`.

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

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
