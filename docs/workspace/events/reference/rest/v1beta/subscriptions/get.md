---
source: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/get
root: workspace
fetched_at: 2026-04-23T15:28:39.174Z
---

# Method: subscriptions.get

## Page Summary

- This method retrieves details about a specific Google Workspace subscription, providing information like its configuration and status.
- An HTTP GET request is made to a specific URL, requiring the subscription's resource name as a path parameter.
- The request body should be empty, and a successful response includes a `Subscription` object containing the subscription's details.
- Authorization is necessary using one of the listed OAuth scopes, which grant access to various Chat and Meetings features depending on the chosen scope.
- This feature is currently in Developer Preview and available through the Google Workspace Developer Preview Program.

Gets details about a Google Workspace subscription. To learn how to use this method, see [Get details about a Google Workspace subscription](../../../../guides/get-subscription.md).

### HTTP request

`GET https://workspaceevents.googleapis.com/v1beta/{name=subscriptions/*}`

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
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
