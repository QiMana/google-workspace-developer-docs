---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.sendAs.smimeInfo/list
root: workspace
fetched_at: 2026-04-23T15:29:04.090Z
---

# Method: users.settings.sendAs.smimeInfo.list

Lists S/MIME configs for the specified send-as alias. For more information, see [Manage S/MIME certificates with the Gmail API](../../../../guides/smime_certs.md).

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr><tr><td><code>sendAsEmail</code></td><td><p><code>string</code></p><p>The email address that appears in the "From:" header for mail sent using this alias.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "smimeInfo": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>smimeInfo[]</code></td><td><p>List of SmimeInfo.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/gmail.settings.basic`
- `           https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`
- `           https://www.googleapis.com/auth/gmail.settings.sharing`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
