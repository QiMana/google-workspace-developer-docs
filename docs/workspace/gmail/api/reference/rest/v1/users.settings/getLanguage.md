---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings/getLanguage
root: workspace
fetched_at: 2026-04-23T15:29:05.298Z
---

# Method: users.settings.getLanguage

Gets language settings. For more information, see [Manage language settings](https://developers.google.com/workspace/gmail/api/guides/language-settings).

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/language`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `LanguageSettings`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/gmail.settings.basic`
- `           https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
