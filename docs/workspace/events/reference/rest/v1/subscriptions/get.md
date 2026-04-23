---
source: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/get
root: workspace
fetched_at: 2026-04-23T15:28:37.538Z
---

# Method: subscriptions.get

## Page Summary

- This method retrieves details about a specific Google Workspace subscription using an HTTP GET request.
- The request requires a path parameter specifying the subscription's resource name in the format `subscriptions/{subscription}`.
- A successful response includes a `Subscription` object containing the subscription details.
- Authorization requires one of the listed OAuth scopes, providing access to various Chat and Meetings features.
- You can refer to the provided links for detailed usage instructions and authorization guidance.

Gets details about a Google Workspace subscription. To learn how to use this method, see [Get details about a Google Workspace subscription](https://developers.google.com/workspace/events/guides/get-subscription).

### HTTP request

`GET https://workspaceevents.googleapis.com/v1/{name=subscriptions/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the subscription.</p><p>Format: <code>subscriptions/{subscription}</code></p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.bot`
- `           https://www.googleapis.com/auth/chat.spaces`
- `           https://www.googleapis.com/auth/chat.spaces.readonly`
- `           https://www.googleapis.com/auth/chat.messages`
- `           https://www.googleapis.com/auth/chat.messages.readonly`
- `           https://www.googleapis.com/auth/chat.messages.reactions`
- `           https://www.googleapis.com/auth/chat.messages.reactions.readonly`
- `           https://www.googleapis.com/auth/chat.memberships`
- `           https://www.googleapis.com/auth/chat.memberships.readonly`
- `           https://www.googleapis.com/auth/meetings.space.created`
- `           https://www.googleapis.com/auth/meetings.space.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
