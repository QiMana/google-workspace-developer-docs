---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels/delete
root: workspace
fetched_at: 2026-04-23T15:28:59.044Z
---

# Method: users.labels.delete

Immediately and permanently deletes the specified label and removes it from any messages and threads that it's applied to. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).

### HTTP request

`DELETE https://gmail.googleapis.com/gmail/v1/users/{userId}/labels/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the label to delete.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body is an empty JSON object.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.labels`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
