---
source: https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/label_message
root: workspace
fetched_at: 2026-04-23T15:28:55.383Z
---

# MCP Tools Reference: gmailmcp.googleapis.com

## Tool: label\_message

Adds one or more labels to a specific message in the authenticated user's Gmail account.

To find the message ID, use tools like `search_threads` or `get_thread`. If unsure of a user label's ID, use the `list_labels` tool first to discover available labels and their IDs.

The following sample demonstrate how to use `curl` to invoke the `label_message` MCP tool.

Curl Request

```
curl --location 'https://gmailmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "label_message",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for LabelMessage RPC.

### LabelMessageRequest

JSON representation

```
{
  "messageId": string,
  "labelIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messageId</code></td><td><p><code>string</code></p><p>Required. The ID of the message to add the labels to.</p></td></tr><tr><td><code>labelIds[]</code></td><td><p><code>string</code></p><p>Required. The IDs of the labels to add.</p></td></tr></tbody></table>

## Output Schema

Response message for LabelMessage RPC.

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ❌
