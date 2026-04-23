---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.sendAs/list
root: workspace
fetched_at: 2026-04-23T15:29:04.313Z
---

# Method: users.settings.sendAs.list

Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings).

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/settings/sendAs`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>User's email address. The special value "me" can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response for the sendAs.list method.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "sendAs": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sendAs[]</code></td><td><p>List of send-as aliases.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/gmail.settings.basic`
- `           https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
