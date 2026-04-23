---
source: https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/label_thread
root: workspace
fetched_at: 2026-04-23T15:28:55.429Z
---

# MCP Tools Reference: gmailmcp.googleapis.com

## Tool: label\_thread

Adds labels to an entire thread in the authenticated user's Gmail account. This operation affects all messages currently in the thread and any future messages added to it.

If unsure of the thread ID, use the `search_threads` tool first.

If unsure of a user label's ID, use the `list_labels` tool first to discover available labels and their IDs.

The following sample demonstrate how to use `curl` to invoke the `label_thread` MCP tool.

Curl Request

```
curl --location 'https://gmailmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "label_thread",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for LabelThread RPC.

### LabelThreadRequest

JSON representation

```
{
  "threadId": string,
  "labelIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>threadId</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the thread to add labels to.</p></td></tr><tr><td><code>labelIds[]</code></td><td><p><code>string</code></p><p>Required. The unique identifiers of the labels to add. Can be a system label ID (e.g., 'INBOX', 'TRASH', 'SPAM', 'STARRED', 'UNREAD') or a user-defined label ID.</p></td></tr></tbody></table>

## Output Schema

Response message for LabelThread RPC.

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ❌
