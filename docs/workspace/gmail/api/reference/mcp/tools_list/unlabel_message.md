---
source: https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/unlabel_message
root: workspace
fetched_at: 2026-04-23T15:28:56.151Z
---

# MCP Tools Reference: gmailmcp.googleapis.com

## Tool: unlabel\_message

Removes one or more labels from a specific message in the authenticated user's Gmail account. To find the message ID, use tools like `search_threads` or `get_thread`. If unsure of a user label's ID, use the `list_labels` tool first to discover available labels and their IDs.

The following sample demonstrate how to use `curl` to invoke the `unlabel_message` MCP tool.

Curl Request

```
curl --location 'https://gmailmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "unlabel_message",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for UnlabelMessage RPC.

### UnlabelMessageRequest

JSON representation

```
{
  "messageId": string,
  "labelIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messageId</code></td><td><p><code>string</code></p><p>Required. The ID of the message to remove the labels from.</p></td></tr><tr><td><code>labelIds[]</code></td><td><p><code>string</code></p><p>Required. The IDs of the labels to remove.</p></td></tr></tbody></table>

## Output Schema

Response message for UnlabelMessage RPC.

### Tool Annotations

Destructive Hint: ✅ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ❌
