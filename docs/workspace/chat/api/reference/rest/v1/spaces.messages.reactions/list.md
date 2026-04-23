---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/list
root: workspace
fetched_at: 2026-04-23T15:25:06.528Z
---

# Method: spaces.messages.reactions.list

## Page Summary

- Lists reactions for a specific message within a Google Chat space.
- Allows filtering reactions by emoji (unicode or custom) and user, using operators like `AND` and `OR`.
- Supports pagination to retrieve large result sets with `pageSize` and `pageToken` parameters.
- Requires specific authorization scopes related to message and reaction access.
- Returns a list of reactions with details like user and emoji, along with a token for fetching further pages.

Lists reactions to a message. For an example, see [List reactions for a message](../../../../../list-reactions.md).

Requires [user authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following [authorization scopes](../../../../../authenticate-authorize.md#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.messages.reactions.readonly`
- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages.readonly`
- `https://www.googleapis.com/auth/chat.messages`

### HTTP request

`GET https://chat.googleapis.com/v1/{parent=spaces/*/messages/*}/reactions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The message users reacted to.</p><p>Format: <code>spaces/{space}/messages/{message}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of reactions returned. The service can return fewer reactions than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. (If resuming from a previous query.)</p><p>A page token received from a previous list reactions call. Provide this to retrieve the subsequent page.</p><p>When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>You can filter reactions by <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/Emoji">emoji</a> (either <code>emoji.unicode</code> or <code>emoji.custom_emoji.uid</code>) and <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/User">user</a> (<code>user.name</code>).</p><p>To filter reactions for multiple emojis or users, join similar fields with the <code>OR</code> operator, such as <code>emoji.unicode = "🙂" OR emoji.unicode =
                  "👍"</code> and <code>user.name = "users/AAAAAA" OR user.name = "users/BBBBBB"</code>.</p><p>To filter reactions by emoji and user, use the <code>AND</code> operator, such as <code>emoji.unicode = "🙂" AND user.name = "users/AAAAAA"</code>.</p><p>If your query uses both <code>AND</code> and <code>OR</code>, group them with parentheses.</p><p>For example, the following queries are valid:</p><div><pre><code>user.name = "users/{user}"
emoji.unicode = "🙂"
emoji.custom_emoji.uid = "{uid}"
emoji.unicode = "🙂" OR emoji.unicode = "👍"
emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}"
emoji.unicode = "🙂" AND user.name = "users/{user}"
(emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}")
AND user.name = "users/{user}"</code></pre></div><p>The following queries are invalid:</p><div><pre><code>emoji.unicode = "🙂" AND emoji.unicode = "👍"
emoji.unicode = "🙂" AND emoji.custom_emoji.uid = "{uid}"
emoji.unicode = "🙂" OR user.name = "users/{user}"
emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" OR
user.name = "users/{user}"
emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}"
AND user.name = "users/{user}"</code></pre></div><p>Invalid queries are rejected with an <code>INVALID_ARGUMENT</code> error.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response to a list reactions request.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "reactions": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reactions[]</code></td><td><p>List of reactions in the requested (or first) page.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Continuation token to retrieve the next page of results. It's empty for the last page of results.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.readonly`
- `https://www.googleapis.com/auth/chat.messages.reactions`
- `https://www.googleapis.com/auth/chat.messages.reactions.readonly`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
