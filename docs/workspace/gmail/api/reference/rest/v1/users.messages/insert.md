---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert
root: workspace
fetched_at: 2026-04-23T15:28:59.931Z
---

# Method: users.messages.insert

Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message. For more information, see [Create and send email messages](https://developers.google.com/workspace/gmail/api/guides/sending).

### HTTP request

- Upload URI, for media upload requests:  
	`POST https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/messages`
- Metadata URI, for metadata-only requests:  
	`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>internalDateSource</code></td><td><p><code>enum (<code>InternalDateSource</code>)</code></p><p>Source for Gmail's internal date of the message.</p></td></tr><tr><td><code>deleted</code></td><td><p><code>boolean</code></p><p>Mark the email as permanently deleted (not TRASH) and only visible in <a href="http://support.google.com/vault/">Google Vault</a> to a Vault administrator. Only used for Google Workspace accounts.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.insert`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
