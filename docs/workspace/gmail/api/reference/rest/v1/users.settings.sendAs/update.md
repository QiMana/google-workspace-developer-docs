---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.sendAs/update
root: workspace
fetched_at: 2026-04-23T15:29:04.507Z
---

# Method: users.settings.sendAs.update

Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. For more information, see [Manage aliases and signatures with the Gmail API](../../../../guides/alias_and_signature_settings.md).

Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.

### HTTP request

`PUT https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr><tr><td><code>sendAsEmail</code></td><td><p><code>string</code></p><p>The send-as alias to be updated.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/gmail.settings.basic`
- `           https://www.googleapis.com/auth/gmail.settings.sharing`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
