---
source: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/create
root: workspace
fetched_at: 2026-04-23T15:28:38.880Z
---

# Method: subscriptions.create

## Page Summary

- Creates a Google Workspace subscription using an HTTP POST request to a specified URL.
- Allows validation and preview of the request without creating a subscription using the `validateOnly` query parameter.
- Requires providing a Subscription object in the request body and returns an Operation object in the response, containing the new subscription details.
- Requires specific authorization scopes, such as chat and meeting related scopes, for access control and permissions.
- Is currently available as part of the Google Workspace Developer Preview Program.

Creates a Google Workspace subscription. To learn how to use this method, see [Create a Google Workspace subscription](https://developers.google.com/workspace/events/guides/create-subscription).

For a subscription on a [Chat target resource](https://developers.google.com/workspace/events/guides/events-chat), you can create a subscription as:

- A Chat app by specifying an authorization scope that begins with `chat.app` and getting one-time administrator approval. To learn more, see [Authorize as a Chat app with administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
- A user by specifying an authorization scope that doesn't include `app` in its name. To learn more, see [Authorize as a Chat user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).

### HTTP request

`POST https://workspaceevents.googleapis.com/v1beta/subscriptions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>validateOnly</code></td><td><p><code>boolean</code></p><p>Optional. If set to <code>true</code>, validates and previews the request, but doesn't create the subscription.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of `Operation`.

- The `metadata` field contains an empty array.
- The `response` field contains a new instance of .

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
