---
source: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/create
root: workspace
fetched_at: 2026-04-23T15:28:37.130Z
---

# Method: subscriptions.create

## Page Summary

- This method creates a Google Workspace subscription and provides instructions on how to use it through a provided link.
- The request can be previewed without creating a subscription by setting the `validateOnly` query parameter to `true`.
- A successful response includes an `Operation` object containing the newly created `Subscription` details.
- Authorization requires one of the listed OAuth scopes, such as `https://www.googleapis.com/auth/chat.spaces` or others related to chat, messages, memberships, and meetings, with more information available in the Authorization guide.

Creates a Google Workspace subscription. To learn how to use this method, see [Create a Google Workspace subscription](https://developers.google.com/workspace/events/guides/create-subscription).

For a subscription on a [Chat target resource](https://developers.google.com/workspace/events/guides/events-chat), you can create a subscription as:

- A Chat app by specifying an authorization scope that begins with `chat.app` and getting one-time administrator approval. To learn more, see [Authorize as a Chat app with administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
- A user by specifying an authorization scope that doesn't include `app` in its name. To learn more, see [Authorize as a Chat user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).

### HTTP request

`POST https://workspaceevents.googleapis.com/v1/subscriptions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>validateOnly</code></td><td><p><code>boolean</code></p><p>Optional. If set to <code>true</code>, validates and previews the request, but doesn't create the subscription.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of `Operation`.

- The `metadata` field contains an empty array.
- The `response` field contains a new instance of `Subscription`.

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

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
