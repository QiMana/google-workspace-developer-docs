---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.sendAs.smimeInfo/insert
root: workspace
fetched_at: 2026-04-23T15:29:03.871Z
---

# Method: users.settings.sendAs.smimeInfo.insert

Insert (upload) the given S/MIME config for the specified send-as alias. Note that `pkcs12` format is required for the key. For more information, see [Manage S/MIME certificates with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/smime_certs).

### HTTP request

`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr><tr><td><code>sendAsEmail</code></td><td><p><code>string</code></p><p>The email address that appears in the "From:" header for mail sent using this alias.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/gmail.settings.basic`
- `           https://www.googleapis.com/auth/gmail.settings.sharing`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
