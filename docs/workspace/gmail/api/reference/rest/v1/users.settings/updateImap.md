---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings/updateImap
root: workspace
fetched_at: 2026-04-23T15:29:05.523Z
---

# Method: users.settings.updateImap

Updates IMAP settings. For more information, see [Configure POP and IMAP settings with the Gmail API](../../../../guides/pop_imap_settings.md).

### HTTP request

`PUT https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/imap`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `ImapSettings`.

### Response body

If successful, the response body contains an instance of `ImapSettings`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/gmail.settings.basic`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
