---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/getProfile
root: workspace
fetched_at: 2026-04-23T15:29:06.225Z
---

# Method: users.getProfile

Gets the current user's Gmail profile.

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/profile`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

JSON representation

```
{
  "emailAddress": string,
  "messagesTotal": integer,
  "threadsTotal": integer,
  "historyId": string
}
```

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.compose`
- `           https://www.googleapis.com/auth/gmail.readonly`
- `           https://www.googleapis.com/auth/gmail.metadata`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
