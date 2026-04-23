---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels/list
root: workspace
fetched_at: 2026-04-23T15:28:58.629Z
---

# Method: users.labels.list

Lists all labels in the user's mailbox. For more information, see [Manage labels](../../../../guides/labels.md).

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/labels`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "labels": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labels[]</code></td><td><p>List of labels. Note that each label resource only contains an <code>id</code>, <code>name</code>, <code>messageListVisibility</code>, <code>labelListVisibility</code>, and <code>type</code>. The <a href="https://developers.google.com/workspace/gmail/api/v1/reference/users/labels/get"><code>labels.get</code></a> method can fetch additional label details.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`
- `           https://www.googleapis.com/auth/gmail.labels`
- `           https://www.googleapis.com/auth/gmail.metadata`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
