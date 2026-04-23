---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list
root: workspace
fetched_at: 2026-04-23T15:25:09.221Z
---

# Method: spaces.list

## Page Summary

- Lists spaces (excluding empty group chats and DMs) that the caller is a member of, supporting app and user authentication.
- Allows filtering by space type and pagination for retrieving large result sets.
- Requires specific authorization scopes related to Google Chat spaces and bots.
- Provides details on the HTTP request structure, query parameters, and expected response.
- To list all spaces within a Google Workspace organization, use the `spaces.search()` method with administrator privileges.

Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an example, see [List spaces](https://developers.google.com/workspace/chat/list-spaces).

Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize):

- [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.bot`
- [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.spaces.readonly`
		- `https://www.googleapis.com/auth/chat.spaces`

To list all named spaces by Google Workspace organization, use the [`spaces.search()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search) method using Workspace administrator privileges instead.

### HTTP request

`GET https://chat.googleapis.com/v1/spaces`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of spaces to return. The service might return fewer than this value.</p><p>If unspecified, at most 100 spaces are returned.</p><p>The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page.</p><p>When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>To filter by space type, you must specify valid enum value, such as <code>SPACE</code> or <code>GROUP_CHAT</code> (the <code>spaceType</code> can't be <code>SPACE_TYPE_UNSPECIFIED</code>). To query for multiple space types, use the <code>OR</code> operator.</p><p>For example, the following queries are valid:</p><div><pre><code>spaceType = "SPACE"
spaceType = "GROUP_CHAT" OR spaceType = "DIRECT_MESSAGE"</code></pre></div><p>Invalid queries are rejected by the server with an <code>INVALID_ARGUMENT</code> error.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The response for a list spaces request.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "spaces": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spaces[]</code></td><td><p>List of spaces in the requested (or first) page. Note: The <code>permissionSettings</code> field is not returned in the Space object for list requests.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>You can send a token as <code>pageToken</code> to retrieve the next page of results. If empty, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.spaces`
- `https://www.googleapis.com/auth/chat.spaces.readonly`
- `https://www.googleapis.com/auth/chat.bot`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
