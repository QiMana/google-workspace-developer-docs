---
source: https://developers.google.com/workspace/drive/api/reference/mcp/tools_list/get_file_metadata
root: workspace
fetched_at: 2026-04-23T15:27:48.055Z
---

# MCP Tools Reference: drivemcp.googleapis.com

## Tool: get\_file\_metadata

Call this tool to find general metadata about a user's Drive file.

If the file is not found, try using other tools like `search_files` to find the file the user is requesting.

The following sample demonstrate how to use `curl` to invoke the `get_file_metadata` MCP tool.

Curl Request

```
curl --location 'https://drivemcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "get_file_metadata",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request to get the file.

### GetFileRequest

JSON representation

```
{
  "fileId": string,

  "excludeContentSnippets": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the file to retrieve.</p></td></tr><tr><td colspan="2"><p>Union field <code>_exclude_content_snippets</code>.</p><p><code>_exclude_content_snippets</code> can be only one of the following:</p></td></tr><tr><td><code>excludeContentSnippets</code></td><td><p><code>boolean</code></p><p>If true, the content snippet will be excluded from the response.</p></td></tr></tbody></table>

## Output Schema

A file resource.

### File

JSON representation

```
{
  "id": string,
  "title": string,
  "parentId": string,

  "mimeType": string

  "fileSize": string

  "description": string

  "fileExtension": string

  "contentSnippet": string

  "viewUrl": string

  "sharedWithMeTime": string

  "createdTime": string

  "modifiedTime": string

  "viewedByMeTime": string

  "owner": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The id of the file that was fetched.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the file.</p></td></tr><tr><td><code>parentId</code></td><td><p><code>string</code></p><p>The (optional) id of the parent of the file.</p></td></tr><tr><td colspan="2"><p>Union field <code>_mime_type</code>.</p><p><code>_mime_type</code> can be only one of the following:</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>The mime type of the file.</p></td></tr><tr><td colspan="2"><p>Union field <code>_file_size</code>.</p><p><code>_file_size</code> can be only one of the following:</p></td></tr><tr><td><code>fileSize</code></td><td><p><code>string (int64 format)</code></p><p>The size in bytes of the file.</p></td></tr><tr><td colspan="2"><p>Union field <code>_description</code>.</p><p><code>_description</code> can be only one of the following:</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description of the file.</p></td></tr><tr><td colspan="2"><p>Union field <code>_file_extension</code>.</p><p><code>_file_extension</code> can be only one of the following:</p></td></tr><tr><td><code>fileExtension</code></td><td><p><code>string</code></p><p>The original file extension of the file, this is only populated for files with content stored in Drive.</p></td></tr><tr><td colspan="2"><p>Union field <code>_content_snippet</code>.</p><p><code>_content_snippet</code> can be only one of the following:</p></td></tr><tr><td><code>contentSnippet</code></td><td><p><code>string</code></p><p>Generated snippet about the content of the file.</p></td></tr><tr><td colspan="2"><p>Union field <code>_view_url</code>.</p><p><code>_view_url</code> can be only one of the following:</p></td></tr><tr><td><code>viewUrl</code></td><td><p><code>string</code></p><p>The URL to view the file.</p></td></tr><tr><td colspan="2"><p>Union field <code>_shared_with_me_time</code>.</p><p><code>_shared_with_me_time</code> can be only one of the following:</p></td></tr><tr><td><code>sharedWithMeTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The time that the file was shared with the requester.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td colspan="2"><p>Union field <code>_created_time</code>.</p><p><code>_created_time</code> can be only one of the following:</p></td></tr><tr><td><code>createdTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The time that the file was created.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td colspan="2"><p>Union field <code>_modified_time</code>.</p><p><code>_modified_time</code> can be only one of the following:</p></td></tr><tr><td><code>modifiedTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The most recent time at which the file was modified.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td colspan="2"><p>Union field <code>_viewed_by_me_time</code>.</p><p><code>_viewed_by_me_time</code> can be only one of the following:</p></td></tr><tr><td><code>viewedByMeTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The most recent time at which the file was viewed by requester.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td colspan="2"><p>Union field <code>_owner</code>.</p><p><code>_owner</code> can be only one of the following:</p></td></tr><tr><td><code>owner</code></td><td><p><code>string</code></p><p>The email address of the owner of the file.</p></td></tr></tbody></table>

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
