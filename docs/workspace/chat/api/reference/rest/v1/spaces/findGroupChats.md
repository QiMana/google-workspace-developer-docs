---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/findGroupChats
root: workspace
fetched_at: 2026-04-23T15:25:08.783Z
---

# Method: spaces.findGroupChats

Returns all spaces with `spaceType == GROUP_CHAT`, whose human memberships contain exactly the calling user, and the users specified in `FindGroupChatsRequest.users`. Only members that have joined the conversation are supported. For an example, see [Find group chats](https://developers.google.com/workspace/chat/find-group-chats).

If the calling user blocks, or is blocked by, some users, and no spaces with the entire specified set of users are found, this method returns spaces that don't include the blocked or blocking users.

The specified set of users must contain only human (non-app) memberships. A request that contains non-human users doesn't return any spaces.

Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.memberships.readonly`
- `https://www.googleapis.com/auth/chat.memberships`

### HTTP request

`GET https://chat.googleapis.com/v1/spaces:findGroupChats`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>users[]</code></td><td><p><code>string</code></p><p>Optional. Resource names of all human users in group chat with the calling user. Chat apps can't be included in the request.</p><p>The maximum number of users that can be specified in a single request is <code>49</code>.</p><p>Format: <code>users/{user}</code>, where <code>{user}</code> is either the <code>id</code> for the <a href="https://developers.google.com/people/api/rest/v1/people">person</a> from the People API, or the <code>id</code> for the <a href="https://developers.google.com/admin-sdk/directory/reference/rest/v1/users">user</a> in the Directory API. For example, to find all group chats with the calling user and two other users, with People API profile IDs <code>123456789</code> and <code>987654321</code>, you can use <code>users/123456789</code> and <code>users/987654321</code>. You can also use the email as an alias for <code>{user}</code>. For example, <code>users/example@gmail.com</code> where <code>example@gmail.com</code> is the email of the Google Chat user.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of spaces to return. The service might return fewer than this value.</p><p>If unspecified, at most 10 spaces are returned.</p><p>The maximum value is 30. If you use a value more than 30, it's automatically changed to 30.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous call to find group chats. Provide this parameter to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the token. Passing different values may lead to unexpected results.</p></td></tr><tr><td><code>spaceView</code></td><td><p><code>enum (<code>SpaceView</code>)</code></p><p>Requested space view type. If unset, defaults to <code>SPACE_VIEW_RESOURCE_NAME_ONLY</code>. Requests that specify <code>SPACE_VIEW_EXPANDED</code> must include scopes that allow reading space data, for example, <a href="https://www.googleapis.com/auth/chat.spaces">https://www.googleapis.com/auth/chat.spaces</a> or <a href="https://www.googleapis.com/auth/chat.spaces.readonly">https://www.googleapis.com/auth/chat.spaces.readonly</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A response containing group chat spaces with exactly the calling user and the requested users.

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spaces[]</code></td><td><p>List of spaces in the requested (or first) page.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token that you can send as <code>pageToken</code> to retrieve the next page of results. If empty, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).

## SpaceView

A view that specifies which fields should be populated on the [`Space`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) resource. To ensure compatibility with future releases, we recommend that your code account for additional values.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SPACE_VIEW_UNSPECIFIED</code></td><td>The default / unset value.</td></tr><tr><td><code>SPACE_VIEW_RESOURCE_NAME_ONLY</code></td><td>Populates only the Space resource name.</td></tr><tr><td><code>SPACE_VIEW_EXPANDED</code></td><td>Populates Space resource fields. Note: the <code>permissionSettings</code> field will not be populated. Requests that specify SPACE_VIEW_EXPANDED must include scopes that allow reading space data, for example, <a href="https://www.googleapis.com/auth/chat.spaces">https://www.googleapis.com/auth/chat.spaces</a> or <a href="https://www.googleapis.com/auth/chat.spaces.readonly">https://www.googleapis.com/auth/chat.spaces.readonly</a>.</td></tr></tbody></table>
