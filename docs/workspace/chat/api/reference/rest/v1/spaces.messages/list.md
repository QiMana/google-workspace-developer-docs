---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/list
root: workspace
fetched_at: 2026-04-23T15:25:07.115Z
---

# Method: spaces.messages.list

## Page Summary

- Lists messages in a Google Chat space, including those from blocked members and spaces, with pagination support.
- Allows filtering messages by creation date, thread, and whether they are deleted, with customizable ordering.
- Requires authorization with specific scopes for accessing and managing chat messages.
- Provides an HTTP request structure and details on path and query parameters for interacting with the API.
- The response body contains a list of messages and a token for retrieving subsequent pages, if available.

Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. System messages, like those announcing new space members, aren't included. If you list messages from a space with no messages, the response is an empty object. When using a REST/HTTP interface, the response contains an empty JSON object, `{}`. For an example, see [List messages](../../../../../list-messages.md).

Supports the following types of [authentication](../../../../../authenticate-authorize.md):

- [App authentication](../../../../../authenticate-authorize-chat-app.md) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the authorization scope:
	- `https://www.googleapis.com/auth/chat.app.messages.readonly`. When using this authentication scope, this method only returns public messages in a space. It doesn't include private messages.
- [User authentication](../../../../../authenticate-authorize-chat-user.md) with one of the following authorization scopes:
	- `https://www.googleapis.com/auth/chat.messages.readonly`
		- `https://www.googleapis.com/auth/chat.messages`
		- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

### HTTP request

`GET https://chat.googleapis.com/v1/{parent=spaces/*}/messages`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The resource name of the space to list messages from.</p><p>Format: <code>spaces/{space}</code></p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of messages returned. The service might return fewer messages than this value.</p><p>If unspecified, at most 25 are returned.</p><p>The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.</p><p>Negative values return an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A page token received from a previous list messages call. Provide this parameter to retrieve the subsequent page.</p><p>When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. A query filter.</p><p>You can filter messages by date (<code>createTime</code>) and thread (<code>thread.name</code>).</p><p>To filter messages by the date they were created, specify the <code>createTime</code> with a timestamp in <a href="https://www.rfc-editor.org/rfc/rfc3339">RFC-3339</a> format and double quotation marks. For example, <code>"2023-04-21T11:30:00-04:00"</code>. You can use the greater than operator <code>></code> to list messages that were created after a timestamp, or the less than operator <code><</code> to list messages that were created before a timestamp. To filter messages within a time interval, use the <code>AND</code> operator between two timestamps.</p><p>To filter by thread, specify the <code>thread.name</code>, formatted as <code>spaces/{space}/threads/{thread}</code>. You can only specify one <code>thread.name</code> per query.</p><p>To filter by both thread and date, use the <code>AND</code> operator in your query.</p><p>For example, the following queries are valid:</p><div><pre><code>createTime > "2012-04-21T11:30:00-04:00"

createTime > "2012-04-21T11:30:00-04:00" AND
  thread.name = spaces/AAAAAAAAAAA/threads/123

createTime > "2012-04-21T11:30:00+00:00" AND

createTime < "2013-01-01T00:00:00+00:00" AND
  thread.name = spaces/AAAAAAAAAAA/threads/123

thread.name = spaces/AAAAAAAAAAA/threads/123</code></pre></div><p>Invalid queries are rejected by the server with an <code>INVALID_ARGUMENT</code> error.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>string</code></p><p>Optional. How the list of messages is ordered. Specify a value to order by an ordering operation. Valid ordering operation values are as follows:</p><ul><li><p><code>ASC</code> for ascending.</p></li><li><p><code>DESC</code> for descending.</p></li></ul><p>The default ordering is <code>createTime ASC</code>.</p></td></tr><tr><td><code>showDeleted</code></td><td><p><code>boolean</code></p><p>Optional. Whether to include deleted messages. Deleted messages include deleted time and metadata about their deletion, but message content is unavailable.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response message for listing messages.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "messages": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messages[]</code></td><td><p>List of messages.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>You can send a token as <code>pageToken</code> to retrieve the next page of results. If empty, there are no subsequent pages.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.readonly`
- `https://www.googleapis.com/auth/chat.app.messages.readonly`

For more information, see the [Authorization guide](../../../../../authenticate-authorize.md).
