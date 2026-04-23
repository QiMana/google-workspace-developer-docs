---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/trash
root: workspace
fetched_at: 2026-04-23T15:29:00.607Z
---

# Method: users.messages.trash

Moves the specified message to the trash.

### HTTP request

`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/{id}/trash`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the message to Trash.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
