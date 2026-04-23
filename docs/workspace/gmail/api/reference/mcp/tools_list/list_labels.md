---
source: https://developers.google.com/workspace/gmail/api/reference/mcp/tools_list/list_labels
root: workspace
fetched_at: 2026-04-23T15:28:56.303Z
---

# MCP Tools Reference: gmailmcp.googleapis.com

## Tool: list\_labels

Lists all user-defined labels available in the authenticated user's Gmail account. Use this tool to discover the `id` of a user label before calling `label_thread`, `unlabel_thread`, `label_message`, or `unlabel_message`. System labels are not returned by this tool but can be used with their well-known IDs: 'INBOX', 'TRASH', 'SPAM', 'STARRED', 'UNREAD', 'IMPORTANT', 'CHAT', 'DRAFT', 'SENT'.

The following sample demonstrate how to use `curl` to invoke the `list_labels` MCP tool.

Curl Request

```
curl --location 'https://gmailmcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "list_labels",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request message for ListLabels RPC.

### ListLabelsRequest

JSON representation

```
{

  "pageSize": integer

  "pageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>_page_size</code>.</p><p><code>_page_size</code> can be only one of the following:</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Optional. The maximum number of labels to return.</p></td></tr><tr><td colspan="2"><p>Union field <code>_page_token</code>.</p><p><code>_page_token</code> can be only one of the following:</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Optional. Page token to retrieve a specific page of results in the list.</p></td></tr></tbody></table>

## Output Schema

Response message for ListLabels RPC.

### ListLabelsResponse

JSON representation

```
{
  "labels": [
    {
      object (Label)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labels[]</code></td><td><p><code>object (<code>Label</code>)</code></p><p>List of user labels in the user's account.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token to retrieve the next page of results in the list.</p></td></tr></tbody></table>

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

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
