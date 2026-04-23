---
source: https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/create_label
root: workspace
fetched_at: 2026-04-23T15:28:54.752Z
---

# MCP Tools Reference: gmailmcp.googleapis.com

## Tool: create\_label

Creates a new label in the authenticated user's Gmail account.

The following sample demonstrate how to use `curl` to invoke the `create_label` MCP tool.

Curl Request

```
curl --location 'https://gmailmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "create_label",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for CreateLabel RPC.

### CreateLabelRequest

JSON representation

```
{
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Required. The display name of the label to create.</p></td></tr></tbody></table>

## Output Schema

Details of a label.

### Label

JSON representation

```
{
  "labelId": string,
  "name": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labelId</code></td><td><p><code>string</code></p><p>The unique identifier of the label.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The human-readable display name of the label.</p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ❌ | Open World Hint: ❌
