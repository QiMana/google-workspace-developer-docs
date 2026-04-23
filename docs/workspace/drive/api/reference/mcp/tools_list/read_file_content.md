---
source: https://developers.google.com/workspace/drive/api/reference/mcp/tools_list/read_file_content
root: workspace
fetched_at: 2026-04-23T15:27:47.552Z
---

# MCP Tools Reference: drivemcp.googleapis.com

## Tool: read\_file\_content

Call this tool to fetch a natural language representation of a Drive file.

The file content may be incomplete for very large files. The text representation will change over time, so don't make assumptions about the particular format of the text returned by this tool.

Supported Mime Types:

- `application/vnd.google-apps.document`
- `application/vnd.google-apps.presentation`
- `application/vnd.google-apps.spreadsheet`
- `application/pdf`
- `application/msword`
- `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
- `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- `application/vnd.openxmlformats-officedocument.presentationml.presentation`
- `application/vnd.oasis.opendocument.spreadsheet`
- `application/vnd.oasis.opendocument.presentation`
- `application/x-vnd.oasis.opendocument.text`
- `image/png`
- `image/jpeg`
- `image/jpg`

If the file is not found, try using other tools like `search_files` to find the file the user is requesting using keywords.

The following sample demonstrate how to use `curl` to invoke the `read_file_content` MCP tool.

Curl Request

```
curl --location 'https://drivemcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "read_file_content",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request to read file content.

### ReadFileContentRequest

JSON representation

```
{
  "fileId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the file to retrieve.</p></td></tr></tbody></table>

## Output Schema

Response to read file content.

### ReadFileContentResponse

JSON representation

```
{

  "fileContent": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>_file_content</code>.</p><p><code>_file_content</code> can be only one of the following:</p></td></tr><tr><td><code>fileContent</code></td><td><p><code>string</code></p><p>Drive file content returned in text format.</p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
