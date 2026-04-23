---
source: https://developers.google.com/workspace/chat/api/reference/mcp/tools_list/list_messages
root: workspace
fetched_at: 2026-04-23T15:24:59.939Z
---

# MCP Tools Reference: chatmcp.googleapis.com

## Tool: list\_messages

Retrieves messages from a specified Google Chat conversation (Space, direct message (DM) or group DM). Allows filtering by thread, time range, and number of messages. Additionally, the next page of messages can be retrieved to allow for more context. Private messages (messages only visible to a single user) are filtered out.

The following sample demonstrate how to use `curl` to invoke the `list_messages` MCP tool.

Curl Request

```
curl --location 'https://chatmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "list_messages",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for ListMessages RPC.

### ListChatMessagesRequest

JSON representation

```
{
  "conversationId": string,
  "threadId": string,
  "pageSize": integer,
  "pageToken": string,
  "startTime": string,
  "endTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>conversationId</code></td><td><p><code>string</code></p><p>Required. The ID of the conversation. A conversation can either be a space, direct message (DM) or group DM/Chat. Format: spaces/{space}</p></td></tr><tr><td><code>threadId</code></td><td><p><code>string</code></p><p>Optional. The ID of a specific thread within the conversation. If provided, only messages from this thread will be returned. If omitted, messages from all threads in the conversation are considered. Format: spaces/{space}/threads/{thread}</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of messages to return. The service may return fewer than this value. If unspecified, defaults to 20. The maximum allowed value is 50.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. A page token, received from a previous list_messages call. Provide this to retrieve the subsequent page.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string</code></p><p>Optional. ISO 8601 timestamp to filter messages. Only messages created after this time will be returned.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string</code></p><p>Optional. ISO 8601 timestamp to filter messages. Only messages created before this time will be returned.</p></td></tr></tbody></table>

## Output Schema

Response message for ListMessages RPC.

### ListChatMessagesResponse

JSON representation

```
{
  "messages": [
    {
      object (ChatMessage)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messages[]</code></td><td><p><code>object (<code>ChatMessage</code>)</code></p><p>List of messages retrieved, in reverse chronological order (newest first).</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>A token, which can be sent as <code>page_token</code> in a subsequent <code>ListMessagesRequest</code> to retrieve the next page of messages. If this field is empty, there are no more pages.</p></td></tr></tbody></table>

### ChatMessage

JSON representation

```
{
  "messageId": string,
  "threadId": string,
  "plaintextBody": string,
  "sender": {
    object (User)
  },
  "createTime": string,
  "threadedReply": boolean,
  "attachments": [
    {
      object (ChatAttachmentMetadata)
    }
  ],
  "reactionSummaries": [
    {
      object (ReactionSummary)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messageId</code></td><td><p><code>string</code></p><p>Resource name of the message. Format: spaces/{space}/messages/{message}</p></td></tr><tr><td><code>threadId</code></td><td><p><code>string</code></p><p>The thread this message belongs to. This will be empty if the message is unthreaded. Format: spaces/{space}/threads/{thread}</p></td></tr><tr><td><code>plaintextBody</code></td><td><p><code>string</code></p><p>Plain text body of the message.</p></td></tr><tr><td><code>sender</code></td><td><p><code>object (<code>User</code>)</code></p><p>The sender of the message.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string</code></p><p>Output only. Timestamp when the message was created.</p></td></tr><tr><td><code>threadedReply</code></td><td><p><code>boolean</code></p><p>Whether message is a thread reply.</p></td></tr><tr><td><code>attachments[]</code></td><td><p><code>object (<code>ChatAttachmentMetadata</code>)</code></p><p>Attachments included in the message.</p></td></tr><tr><td><code>reactionSummaries[]</code></td><td><p><code>object (<code>ReactionSummary</code>)</code></p><p>The emoji reactions summary included in the message.</p></td></tr></tbody></table>

### User

JSON representation

```
{
  "userId": string,
  "displayName": string,
  "email": string,
  "userType": enum (UserType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Resource name of a Chat user. Format: users/{user}.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The display name of a Chat user.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>The email address of the user. This field is only populated when the user type is HUMAN.</p></td></tr><tr><td><code>userType</code></td><td><p><code>enum (<code>UserType</code>)</code></p><p>The type of the user.</p></td></tr></tbody></table>

JSON representation

```
{
  "attachmentId": string,
  "filename": string,
  "mimeType": string,
  "source": enum (Source)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>attachmentId</code></td><td><p><code>string</code></p><p>Resource name of the attachment. Format: spaces/{space}/messages/{message}/attachments/{attachment}.</p></td></tr><tr><td><code>filename</code></td><td><p><code>string</code></p><p>Name of the attachment.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>Content type (MIME type).</p></td></tr><tr><td><code>source</code></td><td><p><code>enum (<code>Source</code>)</code></p><p>The source of the attachment.</p></td></tr></tbody></table>

### ReactionSummary

JSON representation

```
{
  "emoji": string,
  "count": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>emoji</code></td><td><p><code>string</code></p><p>The emoji unicode string or custom emoji name.</p></td></tr><tr><td><code>count</code></td><td><p><code>integer</code></p><p>The total number of reactions using the associated emoji.</p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
