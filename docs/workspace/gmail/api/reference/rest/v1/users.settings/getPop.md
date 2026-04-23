---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings/getPop
root: workspace
fetched_at: 2026-04-23T15:29:05.232Z
---

# Method: users.settings.getPop

Gets POP settings. For more information, see [Configure POP and IMAP settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings).

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/pop`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `PopSettings`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/gmail.settings.basic`
- `           https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
