---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.sendAs/get
root: workspace
fetched_at: 2026-04-23T15:29:03.992Z
---

# Method: users.settings.sendAs.get

Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection. For more information, see [Manage aliases and signatures with the Gmail API](../../../../guides/alias_and_signature_settings.md).

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr><tr><td><code>sendAsEmail</code></td><td><p><code>string</code></p><p>The send-as alias to be retrieved.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/gmail.settings.basic`
- `           https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
