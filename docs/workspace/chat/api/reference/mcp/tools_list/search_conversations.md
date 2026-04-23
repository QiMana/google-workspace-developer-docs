---
source: https://developers.google.com/workspace/chat/api/reference/mcp/tools_list/search_conversations
root: workspace
fetched_at: 2026-04-23T15:25:00.069Z
---

# MCP Tools Reference: chatmcp.googleapis.com

## Tool: search\_conversations

Searches for Google Chat conversations by display name.

If only participants are provided, this tool finds 1:1 direct messages (if one participant is provided) or group chats (if multiple participants are provided) that include the specified participants and the calling user.

If only a query is provided, this tool searches for conversations where the query is a case-insensitive substring of the conversation's display name.

If both participants and query are provided, this tool finds conversations by participants and then filters them by display name.

If neither participants nor query are provided, this tool lists all conversations the calling user is a member of.

This tool only lists conversations the calling user is a member of.

IMPORTANT: An empty 'conversations' list does not mean there are no more results overall. If 'next\_page\_token' is present, more pages can be fetched. If you get an empty list but a 'next\_page\_token', ask the user if you should continue the searching.

The following sample demonstrate how to use `curl` to invoke the `search_conversations` MCP tool.

Curl Request

```
curl --location 'https://chatmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "search_conversations",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for FindConversations RPC.

### SearchConversationsRequest

JSON representation

```
{
  "spaceNameQuery": string,
  "pageSize": integer,
  "pageToken": string,
  "participants": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spaceNameQuery</code></td><td><p><code>string</code></p><p>Optional. The text to search for within the space display names.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of spaces to return. The service may return fewer than this value. If unspecified, at most 100 spaces will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous <code>search_conversations</code> call. Provide this to retrieve the subsequent page.</p></td></tr><tr><td><code>participants[]</code></td><td><p><code>string</code></p><p>Optional. List of email addresses of the participants to filter the conversations, excluding the caller.</p></td></tr></tbody></table>

## Output Schema

Response message for FindConversations RPC.

### SearchConversationsResponse

JSON representation

```
{
  "conversations": [
    {
      object (Conversation)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>conversations[]</code></td><td><p><code>object (<code>Conversation</code>)</code></p><p>List of conversation objects that match the search criteria.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token that can be sent as <code>page_token</code> to retrieve the next page. If this field is omitted, there are no subsequent pages.</p></td></tr></tbody></table>

### Conversation

JSON representation

```
{
  "conversationId": string,
  "displayName": string,
  "conversationType": enum (ConversationType),
  "lastActiveTimestamp": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>conversationId</code></td><td><p><code>string</code></p><p>The ID of the conversation (e.g., "spaces/AAAAAAAAA").</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The display name of the conversation.</p></td></tr><tr><td><code>conversationType</code></td><td><p><code>enum (<code>ConversationType</code>)</code></p><p>The type of conversation (DIRECT_MESSAGE, GROUP_CHAT, or NAMED_SPACE).</p></td></tr><tr><td><code>lastActiveTimestamp</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The last active time of the conversation in ISO 8601 format.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>

JSON representation

```
{
  "seconds": string,
  "nanos": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>seconds</code></td><td><p><code>string (int64 format)</code></p><p>Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be between -62135596800 and 253402300799 inclusive (which corresponds to 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z).</p></td></tr><tr><td><code>nanos</code></td><td><p><code>integer</code></p><p>Non-negative fractions of a second at nanosecond resolution. This field is the nanosecond portion of the duration, not an alternative to seconds. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be between 0 and 999,999,999 inclusive.</p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
