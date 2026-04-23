---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/send
root: workspace
fetched_at: 2026-04-23T15:29:00.033Z
---

# Method: users.messages.send

Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers. For more information, see [Create and send email messages](../../../../guides/sending.md).

### HTTP request

- Upload URI, for media upload requests:  
	`POST https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/messages/send`
- Metadata URI, for metadata-only requests:  
	`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/send`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.compose`
- `           https://www.googleapis.com/auth/gmail.send`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
