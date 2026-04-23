---
source: https://developers.google.com/workspace/events/reference/rest/v1beta/operations/get
root: workspace
fetched_at: 2026-04-23T15:28:38.816Z
---

# Method: operations.get

## Page Summary

- This API endpoint retrieves the latest state of a long-running operation, allowing clients to poll for results.
- It uses a `GET` request with the URL `https://workspaceevents.googleapis.com/v1beta/{name=operations/**}`, where `{name}` specifies the operation resource.
- The request body should be empty and a successful response returns an `Operation` object detailing the operation's status.
- Authorization requires one of the listed OAuth scopes related to Google Chat or Google Meet, providing varying levels of access.

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### HTTP request

`GET https://workspaceevents.googleapis.com/v1beta/{name=operations/**}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the operation resource.</p></td></tr></tbody></table>

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
- `           https://www.googleapis.com/auth/meet.space.created`
- `           https://www.googleapis.com/auth/meetings.space.created`
- `           https://www.googleapis.com/auth/meetings.space.readonly`
- `           https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`
- `           https://www.googleapis.com/auth/drive.metadata.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
