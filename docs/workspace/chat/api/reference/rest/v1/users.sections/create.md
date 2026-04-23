---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.sections/create
root: workspace
fetched_at: 2026-04-23T15:25:09.005Z
---

# Method: users.sections.create

Creates a section in Google Chat. Sections help users group conversations and customize the list of spaces displayed in Chat navigation panel. Only sections of type `CUSTOM_SECTION` can be created. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with the [authorization scope](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`

### HTTP request

`POST https://chat.googleapis.com/v1/{parent=users/*}/sections`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent resource name where the section is created.</p><p>Format: <code>users/{user}</code></p></td></tr></tbody></table>

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.sections`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
