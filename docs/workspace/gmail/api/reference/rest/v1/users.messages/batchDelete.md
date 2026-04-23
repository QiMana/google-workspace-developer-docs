---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchDelete
root: workspace
fetched_at: 2026-04-23T15:28:59.591Z
---

# Method: users.messages.batchDelete

Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.

### HTTP request

`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/batchDelete`

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
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ids[]</code></td><td><p><code>string</code></p><p>The IDs of the messages to delete.</p></td></tr></tbody></table>

### Response body

If successful, the response body is empty.

### Authorization scopes

Requires the following OAuth scope:

- `https://mail.google.com/`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
