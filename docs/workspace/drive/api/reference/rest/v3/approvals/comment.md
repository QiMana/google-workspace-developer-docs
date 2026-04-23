---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/approvals/comment
root: workspace
fetched_at: 2026-04-23T15:27:59.332Z
---

# Method: approvals.comment

Comments on an Approval. This sends a notification to the initiator and reviewers with a message that is also added to the Approval activity log.

### HTTP request

`POST https://www.googleapis.com/drive/v3/files/{fileId}/approvals/{approvalId}:comment`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the file the Approval is on.</p></td></tr><tr><td><code>approvalId</code></td><td><p><code>string</code></p><p>Required. The ID of the Approval to comment on.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "message": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>string</code></p><p>Required. A message to comment on the Approval. This message will be included in notifications for the action and in the Approval activity log.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
