---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.sections/patch
root: workspace
fetched_at: 2026-04-23T15:25:09.813Z
---

# Method: users.sections.patch

Updates a section. Only sections of type `CUSTOM_SECTION` can be updated. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with the [authorization scope](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`

### HTTP request

`PATCH https://chat.googleapis.com/v1/{section.name=users/*/sections/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>section.name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the section.</p><p>For system sections, the section ID is a constant string:</p><ul><li>DEFAULT_DIRECT_MESSAGES: <code>users/{user}/sections/default-direct-messages</code></li><li>DEFAULT_SPACES: <code>users/{user}/sections/default-spaces</code></li><li>DEFAULT_APPS: <code>users/{user}/sections/default-apps</code></li></ul><p>Format: <code>users/{user}/sections/{section}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. The mask to specify which fields to update.</p><p>Currently supported field paths:</p><ul><li><code>displayName</code></li></ul></td></tr></tbody></table>

### Request body

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.sections`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
