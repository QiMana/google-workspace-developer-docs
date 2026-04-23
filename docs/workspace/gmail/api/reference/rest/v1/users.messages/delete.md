---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/delete
root: workspace
fetched_at: 2026-04-23T15:28:59.347Z
---

# Method: users.messages.delete

Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.

### HTTP request

`DELETE https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the message to delete.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://mail.google.com/`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
