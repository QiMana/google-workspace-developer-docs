---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list
root: workspace
fetched_at: 2026-04-23T15:25:05.846Z
---

# Method: spaces.members.list

## Page Summary

- Lists memberships in a Google Chat space, including details like member roles and types.
- Supports both app and user authentication, with an option for administrator privileges.
- Allows filtering memberships by role, type, and other criteria using query parameters.
- Provides pagination to retrieve large lists of memberships in manageable chunks.
- Requires specific OAuth scopes for authorization, as detailed in the documentation.

Lists memberships in a space. For an example, see [List users and Google Chat apps in a space](../../../../../list-members.md). Listing memberships with [app authentication](../../../../../authenticate-authorize-chat-app.md) lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with [User authentication](../../../../../authenticate-authorize-chat-user.md) lists memberships in spaces that the authenticated user has access to.

Supports the following types of [authentication](../../../../../authenticate-authorize.md):

- [App authentication](../../../../../authenticate-authorize-chat-app.md) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.bot`
		- `https://www.googleapis.com/auth/chat.app.memberships` (requires [administrator approval](https://support.google.com/a?p=chat-app-auth))
- [User authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.memberships.readonly`
		- `https://www.googleapis.com/auth/chat.memberships`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
		- User authentication grants administrator privileges when an administrator account authenticates, `useAdminAccess` is `true`, and one of the following authorization scopes is used:
		- `https://www.googleapis.com/auth/chat.admin.memberships.readonly`
				- `https://www.googleapis.com/auth/chat.admin.memberships`

### HTTP request

`GET https://chat.googleapis.com/v1/{parent=spaces/*}/members`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The resource name of the space for which to fetch a membership list.</p><p>Format: spaces/{space}</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of memberships to return. The service might return fewer than this value.</p><p>If unspecified, at most 100 memberships are returned.</p><p>The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>You can filter memberships by a member's role (<a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members#membershiprole"><code>role</code></a>) and type (<a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/User#type"><code>member.type</code></a>).</p><p>To filter by role, set <code>role</code> to <code>ROLE_MEMBER</code> or <code>ROLE_MANAGER</code>.</p><p>To filter by type, set <code>member.type</code> to <code>HUMAN</code> or <code>BOT</code>. You can also filter for <code>member.type</code> using the <code>!=</code> operator.</p><p>To filter by both role and type, use the <code>AND</code> operator. To filter by either role or type, use the <code>OR</code> operator.</p><p>Either <code>member.type = "HUMAN"</code> or <code>member.type != "BOT"</code> is required when <code>useAdminAccess</code> is set to true. Other member type filters will be rejected.</p><p>For example, the following queries are valid:</p><div><pre><code>role = "ROLE_MANAGER" OR role = "ROLE_MEMBER"
member.type = "HUMAN" AND role = "ROLE_MANAGER"

member.type != "BOT"</code></pre></div><p>The following queries are invalid:</p><div><pre><code>member.type = "HUMAN" AND member.type = "BOT"
role = "ROLE_MANAGER" AND role = "ROLE_MEMBER"</code></pre></div><p>Invalid queries are rejected by the server with an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>showGroups</code></td><td><p><code>boolean</code></p><p>Optional. When <code>true</code>, also returns memberships associated with a , in addition to other types of memberships. If a <code>filter</code> is set, memberships that don't match the filter criteria aren't returned.</p></td></tr><tr><td><code>showInvited</code></td><td><p><code>boolean</code></p><p>Optional. When <code>true</code>, also returns memberships associated with members, in addition to other types of memberships. If a filter is set, memberships that don't match the filter criteria aren't returned.</p><p>Currently requires <a href="https://developers.google.com/workspace/chat/authenticate-authorize-chat-user">user authentication</a>.</p></td></tr><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Optional. When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires either the <code>chat.admin.memberships.readonly</code> or <code>chat.admin.memberships</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p><p>Listing app memberships in a space isn't supported when using admin access.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response to list memberships of the space.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "memberships": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>memberships[]</code></td><td><p>Unordered list. List of memberships in the requested (or first) page.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token that you can send as <code>pageToken</code> to retrieve the next page of results. If empty, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.admin.memberships`
- `https://www.googleapis.com/auth/chat.admin.memberships.readonly`
- `https://www.googleapis.com/auth/chat.app.memberships`
- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.memberships`
- `https://www.googleapis.com/auth/chat.memberships.readonly`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
