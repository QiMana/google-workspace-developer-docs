---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchModify
root: workspace
fetched_at: 2026-04-23T15:28:59.131Z
---

# Method: users.messages.batchModify

Modifies the labels on the specified messages.

### HTTP request

`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/batchModify`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "ids": [
    string
  ],
  "addLabelIds": [
    string
  ],
  "removeLabelIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ids[]</code></td><td><p><code>string</code></p><p>The IDs of the messages to modify. There is a limit of 1000 ids per request.</p></td></tr><tr><td><code>addLabelIds[]</code></td><td><p><code>string</code></p><p>A list of label IDs to add to messages.</p></td></tr><tr><td><code>removeLabelIds[]</code></td><td><p><code>string</code></p><p>A list of label IDs to remove from messages.</p></td></tr></tbody></table>

### Response body

If successful, the response body is empty.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
