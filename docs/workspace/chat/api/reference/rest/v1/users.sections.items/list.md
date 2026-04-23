---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.sections.items/list
root: workspace
fetched_at: 2026-04-23T15:25:09.131Z
---

# Method: users.sections.items.list

Lists items in a section.

Only spaces can be section items. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with the [authorization scope](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.users.sections`
- `https://www.googleapis.com/auth/chat.users.sections.readonly`

### HTTP request

`GET https://chat.googleapis.com/v1/{parent=users/*/sections/*}/items`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The parent, which is the section resource name that owns this collection of section items. Only supports listing section items for the calling user.</p><p>When you're filtering by space, use the wildcard <code>-</code> to search across all sections. For example, <code>users/{user}/sections/-</code>.</p><p>Format: <code>users/{user}/sections/{section}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of section items to return. The service may return fewer than this value.</p><p>If unspecified, at most 10 section items will be returned.</p><p>The maximum value is 100. If you use a value more than 100, it's automatically changed to 100.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous list section items call. Provide this to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>Currently only supports filtering by space.</p><p>For example, <code>space = spaces/{space}</code>.</p><p>Invalid queries are rejected with an <code>INVALID_ARGUMENT</code> error.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response message for listing section items.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "sectionItems": [
    {
      object (SectionItem)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sectionItems[]</code></td><td><p><code>object (<code>SectionItem</code>)</code></p><p>The section items from the specified section.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token, which can be sent as <code>pageToken</code> to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.users.sections`
- `https://www.googleapis.com/auth/chat.users.sections.readonly`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
