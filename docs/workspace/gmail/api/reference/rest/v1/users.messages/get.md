---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get
root: workspace
fetched_at: 2026-04-23T15:28:59.676Z
---

# Method: users.messages.get

Gets the specified message.

### HTTP request

`GET https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/{id}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the message to retrieve. This ID is usually retrieved using <code>messages.list</code>. The ID is also contained in the result when a message is inserted (<code>messages.insert</code>) or imported (<code>messages.import</code>).</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>format</code></td><td><p><code>enum (<code>Format</code>)</code></p><p>The format to return the message in.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://mail.google.com/`
- `           https://www.googleapis.com/auth/gmail.modify`
- `           https://www.googleapis.com/auth/gmail.readonly`
- `           https://www.googleapis.com/auth/gmail.metadata`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
