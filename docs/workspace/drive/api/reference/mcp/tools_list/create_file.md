---
source: https://developers.google.com/workspace/drive/api/reference/mcp/tools_list/create_file
root: workspace
fetched_at: 2026-04-23T15:27:45.948Z
---

# MCP Tools Reference: drivemcp.googleapis.com

## Tool: create\_file

Call this tool to create or upload a File to Google Drive.

If uploading a file, the content needs to be base64 encoded into the `content` field regardless of the mimetype of the file being uploaded.

Returns a single File object upon successful creation.

The following Google Drive first-party mime types can be created without providing content:

- `application/vnd.google-apps.document`
- `application/vnd.google-apps.spreadsheet`
- `application/vnd.google-apps.presentation`

By default, the following conversions will be made for the following mime types:

- `text/plain` to `application/vnd.google-apps.document`
- `text/csv` to `application/vnd.google-apps.spreadsheet`

To disable conversions for first-party mime types, set `disable_conversion_to_google_type` to true.

Folders can be created by setting the mime type to `application/vnd.google-apps.folder`.

The following sample demonstrate how to use `curl` to invoke the `create_file` MCP tool.

Curl Request

```
curl --location 'https://drivemcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "create_file",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Request to upload a file.

### CreateFileRequest

JSON representation

```
{
  "title": string,
  "mimeType": string,
  "content": string,
  "parentId": string,
  "disableConversionToGoogleType": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the file.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>The mime type of the file to upload.</p></td></tr><tr><td><code>content</code></td><td><p><code>string</code></p><p>The content of the file encoded as base64. The content field should always be base64 encoded regardless of the mime type of the file.</p></td></tr><tr><td><code>parentId</code></td><td><p><code>string</code></p><p>The parent id of the file.</p></td></tr><tr><td><code>disableConversionToGoogleType</code></td><td><p><code>boolean</code></p><p>If true, the file will not be converted to a Google type. Has no effect for mime types that do not have a Google equivalent.</p></td></tr></tbody></table>

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

Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ❌ | Open World Hint: ✅
