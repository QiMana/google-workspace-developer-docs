---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.sections/list
root: workspace
fetched_at: 2026-04-23T15:25:10.333Z
---

# Method: users.sections.list

Lists sections available to the Chat user. Sections help users group their conversations and customize the list of spaces displayed in Chat navigation panel. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with the [authorization scope](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`
- `https://www.googleapis.com/auth/chat.users.sections.readonly`

### HTTP request

`GET https://chat.googleapis.com/v1/{parent=users/*}/sections`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent, which is the user resource name that owns this collection of sections. Only supports listing sections for the calling user. To refer to the calling user, set one of the following:</p><ul><li><p>The <code>me</code> alias. For example, <code>users/me</code>.</p></li><li><p>Their Workspace email address. For example, <code>users/user@example.com</code>.</p></li><li><p>Their user id. For example, <code>users/123456789</code>.</p></li></ul><p>Format: <code>users/{user}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of sections to return. The service may return fewer than this value.</p><p>If unspecified, at most 10 sections will be returned.</p><p>The maximum value is 100. If you use a value more than 100, it's automatically changed to 100.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous list sections call. Provide this to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response message for listing sections.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "sections": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sections[]</code></td><td><p>The sections from the specified user.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token, which can be sent as <code>pageToken</code> to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.users.sections`
- `https://www.googleapis.com/auth/chat.users.sections.readonly`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
