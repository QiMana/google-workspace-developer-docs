---
source: https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/get_thread
root: workspace
fetched_at: 2026-04-23T15:28:54.980Z
---

# MCP Tools Reference: gmailmcp.googleapis.com

## Tool: get\_thread

Retrieves a specific email thread from the authenticated user's Gmail account, including a list of its messages.

The following sample demonstrate how to use `curl` to invoke the `get_thread` MCP tool.

Curl Request

```
curl --location 'https://gmailmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "get_thread",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for GetThread RPC.

### GetThreadRequest

JSON representation

```
{
  "threadId": string,
  "messageFormat": enum (MessageFormat)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>threadId</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the thread to fetch.</p></td></tr><tr><td><code>messageFormat</code></td><td><p><code>enum (<code>MessageFormat</code>)</code></p><p>Optional. Specifies the format of the messages returned within the thread. Defaults to FULL_CONTENT.</p></td></tr></tbody></table>

## Output Schema

Thread containing a list of messages.

### Thread

JSON representation

```
{
  "id": string,
  "messages": [
    {
      object (Message)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique identifier of the thread.</p></td></tr><tr><td><code>messages[]</code></td><td><p><code>object (<code>Message</code>)</code></p><p>A list of messages in the thread, ordered chronologically.</p></td></tr></tbody></table>

### Message

JSON representation

```
{
  "id": string,
  "snippet": string,
  "subject": string,
  "sender": string,
  "toRecipients": [
    string
  ],
  "ccRecipients": [
    string
  ],
  "date": string,
  "plaintextBody": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique identifier of the message.</p></td></tr><tr><td><code>snippet</code></td><td><p><code>string</code></p><p>Snippet of the message body.</p></td></tr><tr><td><code>subject</code></td><td><p><code>string</code></p><p>The message subject extracted from headers:</p></td></tr><tr><td><code>sender</code></td><td><p><code>string</code></p><p>Sender email address.</p></td></tr><tr><td><code>toRecipients[]</code></td><td><p><code>string</code></p><p>To recipient email addresses.</p></td></tr><tr><td><code>ccRecipients[]</code></td><td><p><code>string</code></p><p>CC recipient email addresses.</p></td></tr><tr><td><code>date</code></td><td><p><code>string</code></p><p>Date of the message in ISO 8601 format (YYYY-MM-DD).</p></td></tr><tr><td><code>plaintextBody</code></td><td><p><code>string</code></p><p>Full body content, only populated if MessageFormat was FULL_CONTENT.</p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
