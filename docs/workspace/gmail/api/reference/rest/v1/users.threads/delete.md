---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/delete
root: workspace
fetched_at: 2026-04-23T15:29:05.677Z
---

# Method: users.threads.delete

Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).

### HTTP request

`DELETE https://gmail.googleapis.com/gmail/v1/users/{userId}/threads/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>ID of the Thread to delete.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires the following OAuth scope:

- `https://mail.google.com/`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
