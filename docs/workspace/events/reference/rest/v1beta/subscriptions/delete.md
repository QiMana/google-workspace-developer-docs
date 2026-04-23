---
source: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/delete
root: workspace
fetched_at: 2026-04-23T15:28:38.215Z
---

# Method: subscriptions.delete

## Page Summary

- This document describes how to delete a Google Workspace subscription using the `DELETE` method.
- The request requires specifying the subscription name in the URL path and can optionally include query parameters for validation, error handling, and Etag verification.
- An empty request body is required, and a successful response will return an Operation object indicating the deletion process.
- To authorize this request, you need one of the listed OAuth scopes, such as `https://www.googleapis.com/auth/chat.bot` or those related to Chat, Meetings, and Spaces.
- This feature is part of the Google Workspace Developer Preview Program and may be subject to change.

Deletes a Google Workspace subscription. To learn how to use this method, see [Delete a Google Workspace subscription](../../../../guides/delete-subscription.md).

### HTTP request

`DELETE https://workspaceevents.googleapis.com/v1beta/{name=subscriptions/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the subscription to delete.</p><p>Format: <code>subscriptions/{subscription}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>validateOnly</code></td><td><p><code>boolean</code></p><p>Optional. If set to <code>true</code>, validates and previews the request, but doesn't delete the subscription.</p></td></tr><tr><td><code>allowMissing</code></td><td><p><code>boolean</code></p><p>Optional. If set to <code>true</code> and the subscription isn't found, the request succeeds but doesn't delete the subscription.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>Optional. Etag of the subscription.</p><p>If present, it must match with the server's etag. Otherwise, request fails with the status <code>ABORTED</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `Operation`.

- The `metadata` field contains an empty array.
- The `response` field is empty.

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
