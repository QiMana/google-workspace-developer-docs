---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import
root: workspace
fetched_at: 2026-04-23T15:29:00.793Z
---

# Method: users.messages.import

Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message. Note that the maximum size of the message is 150 MB.

### HTTP request

- Upload URI, for media upload requests:  
	`POST https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/messages/import`
- Metadata URI, for metadata-only requests:  
	`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/import`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>internalDateSource</code></td><td><p><code>enum (<code>InternalDateSource</code>)</code></p><p>Source for Gmail's internal date of the message.</p></td></tr><tr><td><code>neverMarkSpam</code></td><td><p><code>boolean</code></p><p>Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.</p></td></tr><tr><td><code>processForCalendar</code></td><td><p><code>boolean</code></p><p>Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.</p></td></tr><tr><td><code>deleted</code></td><td><p><code>boolean</code></p><p>Mark the email as permanently deleted (not TRASH) and only visible in <a href="http://support.google.com/vault/">Google Vault</a> to a Vault administrator. Only used for Google Workspace accounts.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.insert`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
