---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels/create
root: workspace
fetched_at: 2026-04-23T15:28:58.454Z
---

# Method: users.labels.create

Creates a label. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).

### HTTP request

`POST https://gmail.googleapis.com/gmail/v1/users/{userId}/labels`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.labels`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
