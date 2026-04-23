---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/update
root: workspace
fetched_at: 2026-04-23T15:28:57.537Z
---

# Method: users.drafts.update

Replaces a draft's content. For more information, see [Create and send draft emails](../../../../guides/drafts.md).

### HTTP request

- Upload URI, for media upload requests:  
	`PUT https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/drafts/{id}`
- Metadata URI, for metadata-only requests:  
	`PUT https://gmail.googleapis.com/gmail/v1/users/{userId}/drafts/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the draft to update.</p></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.compose`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
