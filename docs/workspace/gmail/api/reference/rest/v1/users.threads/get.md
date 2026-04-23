---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/get
root: workspace
fetched_at: 2026-04-23T15:29:05.939Z
---

# Method: users.threads.get

Gets the specified thread. For more information, see [Manage threads](../../../../guides/threads.md).

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/threads/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the thread to retrieve.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>format</code></td><td><p><code>enum (<code>Format</code>)</code></p><p>The format to return the messages in.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`
- `           https://www.googleapis.com/auth/gmail.metadata`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## Format

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>full</code></td><td>Returns the full email message data with body content parsed in the <code>payload</code> field; the <code>raw</code> field is not used. Format cannot be used when accessing the api using the gmail.metadata scope.</td></tr><tr><td><code>minimal</code></td><td>Returns only email message IDs and labels; does not return the email headers, body, or payload.</td></tr></tbody></table>
