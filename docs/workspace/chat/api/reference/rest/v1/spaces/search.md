---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search
root: workspace
fetched_at: 2026-04-23T15:25:08.699Z
---

# Method: spaces.search

## Page Summary

- Returns a paginated list of Google Workspace spaces based on an administrator's search criteria, including parameters like displayName, createTime, and spaceType.
- Requires administrator privileges and the `useAdminAccess` parameter set to `true` in the request.
- Utilizes the `GET https://chat.googleapis.com/v1/spaces:search` HTTP request with query parameters for customization.
- Needs authorization with either the `chat.admin.spaces` or `chat.admin.spaces.readonly` OAuth scope.
- Response body includes an array of spaces, a token for pagination, and an estimate of the total number of matching spaces.

Returns a list of spaces in a Google Workspace organization based on an administrator's search. In the request, set `useAdminAccess` to `true`. For an example, see [Search for and manage spaces](../../../../../search-manage-admin.md).

Requires [user authentication with administrator privileges](../../../../../authenticate-authorize-chat-user.md#admin-privileges) and one of the following [authorization scopes](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.admin.spaces.readonly`
- `https://www.googleapis.com/auth/chat.admin.spaces`

### HTTP request

`GET https://chat.googleapis.com/v1/spaces:search`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>When <code>true</code>, the method runs using the user's Google Workspace administrator privileges.</p><p>The calling user must be a Google Workspace administrator with the <a href="https://support.google.com/a/answer/13369245">manage chat and spaces conversations privilege</a>.</p><p>Requires either the <code>chat.admin.spaces.readonly</code> or <code>chat.admin.spaces</code> <a href="https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes">OAuth 2.0 scope</a>.</p><p>This method currently only supports admin access, thus only <code>true</code> is accepted for this field.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of spaces to return. The service may return fewer than this value.</p><p>If unspecified, at most 100 spaces are returned.</p><p>The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>A token, received from the previous search spaces call. Provide this parameter to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Required. A search query.</p><p>You can search by using the following parameters:</p><ul><li><code>createTime</code></li><li><code>customer</code></li><li><code>displayName</code></li><li><code>externalUserAllowed</code></li><li><code>lastActiveTime</code></li><li><code>spaceHistoryState</code></li><li><code>spaceType</code></li></ul><p><code>createTime</code> and <code>lastActiveTime</code> accept a timestamp in <a href="https://www.rfc-editor.org/rfc/rfc3339">RFC-3339</a> format and the supported comparison operators are: <code>=</code>, <code><</code>, <code>></code>, <code><=</code>, <code>>=</code>.</p><p><code>customer</code> is required and is used to indicate which customer to fetch spaces from. <code>customers/my_customer</code> is the only supported value.</p><p><code>displayName</code> only accepts the <code>HAS</code> (<code>:</code>) operator. The text to match is first tokenized into tokens and each token is prefix-matched case-insensitively and independently as a substring anywhere in the space's <code>displayName</code>. For example, <code>Fun Eve</code> matches <code>Fun event</code> or <code>The
                  evening was fun</code>, but not <code>notFun event</code> or <code>even</code>.</p><p><code>externalUserAllowed</code> accepts either <code>true</code> or <code>false</code>.</p><p><code>spaceHistoryState</code> only accepts values from the <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space.HistoryState"><code>historyState</code></a> field of a <code>space</code> resource.</p><p><code>spaceType</code> is required and the only valid value is <code>SPACE</code>.</p><p>Across different fields, only <code>AND</code> operators are supported. A valid example is <code>spaceType = "SPACE" AND displayName:"Hello"</code> and an invalid example is <code>spaceType = "SPACE" OR displayName:"Hello"</code>.</p><p>Among the same field, <code>spaceType</code> doesn't support <code>AND</code> or <code>OR</code> operators. <code>displayName</code>, 'spaceHistoryState', and 'externalUserAllowed' only support <code>OR</code> operators. <code>lastActiveTime</code> and <code>createTime</code> support both <code>AND</code> and <code>OR</code> operators. <code>AND</code> can only be used to represent an interval, such as <code>lastActiveTime
                  < "2022-01-01T00:00:00+00:00" AND lastActiveTime >
                  "2023-01-01T00:00:00+00:00"</code>.</p><p>The following example queries are valid:</p><div><pre><code>customer = "customers/my_customer" AND spaceType = "SPACE"

customer = "customers/my_customer" AND spaceType = "SPACE" AND
displayName:"Hello World"

customer = "customers/my_customer" AND spaceType = "SPACE" AND
(lastActiveTime < "2020-01-01T00:00:00+00:00" OR lastActiveTime >
"2022-01-01T00:00:00+00:00")

customer = "customers/my_customer" AND spaceType = "SPACE" AND
(displayName:"Hello World" OR displayName:"Fun event") AND
(lastActiveTime > "2020-01-01T00:00:00+00:00" AND lastActiveTime <
"2022-01-01T00:00:00+00:00")

customer = "customers/my_customer" AND spaceType = "SPACE" AND
(createTime > "2019-01-01T00:00:00+00:00" AND createTime <
"2020-01-01T00:00:00+00:00") AND (externalUserAllowed = "true") AND
(spaceHistoryState = "HISTORY_ON" OR spaceHistoryState = "HISTORY_OFF")</code></pre></div></td></tr><tr><td><code>orderBy</code></td><td><p><code>string</code></p><p>Optional. How the list of spaces is ordered.</p><p>Supported attributes to order by are:</p><ul><li><code>membershipCount.joined_direct_human_user_count</code> — Denotes the count of human users that have directly joined a space.</li><li><code>lastActiveTime</code> — Denotes the time when last eligible item is added to any topic of this space.</li><li><code>createTime</code> — Denotes the time of the space creation.</li></ul><p>Valid ordering operation values are:</p><ul><li><p><code>ASC</code> for ascending. Default value.</p></li><li><p><code>DESC</code> for descending.</p></li></ul><p>The supported syntax are:</p><ul><li><code>membershipCount.joined_direct_human_user_count DESC</code></li><li><code>membershipCount.joined_direct_human_user_count ASC</code></li><li><code>lastActiveTime DESC</code></li><li><code>lastActiveTime ASC</code></li><li><code>createTime DESC</code></li><li><code>createTime ASC</code></li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response with a list of spaces corresponding to the search spaces request.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "spaces": [
    {
      
    }
  ],
  "nextPageToken": string,
  "totalSize": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spaces[]</code></td><td><p>A page of the requested spaces.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token that can be used to retrieve the next page. If this field is empty, there are no subsequent pages.</p></td></tr><tr><td><code>totalSize</code></td><td><p><code>integer</code></p><p>The total number of spaces that match the query, across all pages. If the result is over 10,000 spaces, this value is an estimate.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.admin.spaces`
- `https://www.googleapis.com/auth/chat.admin.spaces.readonly`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
