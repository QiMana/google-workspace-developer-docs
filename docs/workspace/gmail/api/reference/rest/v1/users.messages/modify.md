---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/modify
root: workspace
fetched_at: 2026-04-23T15:28:59.839Z
---

# Method: users.messages.modify

Modifies the labels on the specified message.

### HTTP request

`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/{id}/modify`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the message to modify.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "addLabelIds": [
    string
  ],
  "removeLabelIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addLabelIds[]</code></td><td><p><code>string</code></p><p>A list of IDs of labels to add to this message. You can add up to 100 labels with each update.</p></td></tr><tr><td><code>removeLabelIds[]</code></td><td><p><code>string</code></p><p>A list IDs of labels to remove from this message. You can remove up to 100 labels with each update.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
