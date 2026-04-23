---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/untrash
root: workspace
fetched_at: 2026-04-23T15:29:06.456Z
---

# Method: users.threads.untrash

Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).

### HTTP request

`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/threads/{id}/untrash`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the thread to remove from Trash.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
