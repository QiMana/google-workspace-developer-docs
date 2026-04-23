---
source: https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/unlabel_thread
root: workspace
fetched_at: 2026-04-23T15:28:56.441Z
---

# MCP Tools Reference: gmailmcp.googleapis.com

## Tool: unlabel\_thread

Removes labels from an entire thread in the authenticated user's Gmail account. If unsure of the thread ID, use the `search_threads` tool first. If unsure of a user label's ID, use the `list_labels` tool first.

The following sample demonstrate how to use `curl` to invoke the `unlabel_thread` MCP tool.

Curl Request

```
curl --location 'https://gmailmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "unlabel_thread",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for UnlabelThread RPC.

### UnlabelThreadRequest

JSON representation

```
{
  "threadId": string,
  "labelIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>threadId</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the thread to remove labels from.</p></td></tr><tr><td><code>labelIds[]</code></td><td><p><code>string</code></p><p>Required. The unique identifiers of the labels to remove.</p></td></tr></tbody></table>

## Output Schema

Response message for UnlabelThread RPC.

### Tool Annotations

Destructive Hint: ✅ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ❌
