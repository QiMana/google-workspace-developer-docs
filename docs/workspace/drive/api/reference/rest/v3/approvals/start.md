---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/approvals/start
root: workspace
fetched_at: 2026-04-23T15:28:01.415Z
---

# Method: approvals.start

Starts an Approval on a file.

### HTTP request

`POST https://www.googleapis.com/drive/v3/files/{fileId}/approvals:start`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the file the Approval will be created on.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "reviewerEmails": [
    string
  ],
  "dueTime": string,
  "lockFile": boolean,
  "message": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reviewerEmails[]</code></td><td><p><code>string</code></p><p>Required. The emails of the users who are set to review the approval.</p></td></tr><tr><td><code>dueTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional. The time that the Approval is due.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>lockFile</code></td><td><p><code>boolean</code></p><p>Optional. Whether to lock the file when starting the Approval.</p></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>Optional. A message to send to reviewers when notifying them of the Approval request.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
