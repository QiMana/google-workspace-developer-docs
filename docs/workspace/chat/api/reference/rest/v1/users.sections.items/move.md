---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.sections.items/move
root: workspace
fetched_at: 2026-04-23T15:25:08.869Z
---

# Method: users.sections.items.move

Moves an item from one section to another. For example, if a section contains spaces, this method can be used to move a space to a different section. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`

### HTTP request

`POST https://chat.googleapis.com/v1/{name=users/*/sections/*/items/*}:move`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the section item to move.</p><p>Format: <code>users/{user}/sections/{section}/items/{item}</code></p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "targetSection": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>targetSection</code></td><td><p><code>string</code></p><p>Required. The resource name of the section to move the section item to.</p><p>Format: <code>users/{user}/sections/{section}</code></p></td></tr></tbody></table>

### Response body

Response message for moving a section item.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "sectionItem": {
    object (SectionItem)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sectionItem</code></td><td><p><code>object (<code>SectionItem</code>)</code></p><p>The updated section item.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.users.sections`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
