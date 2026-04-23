---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings/updateLanguage
root: workspace
fetched_at: 2026-04-23T15:29:05.454Z
---

# Method: users.settings.updateLanguage

Updates language settings. For more information, see [Manage language settings](../../../../guides/language-settings.md).

If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.

### HTTP request

`PUT https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/language`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `LanguageSettings`.

### Response body

If successful, the response body contains an instance of `LanguageSettings`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/gmail.settings.basic`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
