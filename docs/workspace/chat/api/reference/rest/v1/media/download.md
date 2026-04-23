---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/media/download
root: workspace
fetched_at: 2026-04-23T15:25:04.657Z
---

# Method: media.download

## Page Summary

- Downloads uploaded media, excluding Google Drive files, using the `/v1/media/{+name}?alt=media` URI.
- To download, use a GET request specifying the media's resource name in the URL path.
- The response provides the file content as bytes, supporting partial downloads via the `Range` header.
- Authorization requires a Chat scope like `chat.bot`, `chat.messages`, or `chat.messages.readonly`.

Downloads uploaded media, but not Google Drive files. Download is supported on the URI `/v1/media/{+name}?alt=media`. To export bytes from a Google Drive file, see the `files.export` method in Google Drive.

### HTTP request

`GET https://chat.googleapis.com/v1/media/{resourceName=**}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>resourceName</code></td><td><p><code>string</code></p><p>Name of the media that you are downloading. For more information, see <code>spaces.messages.attachments.attachmentDataRef</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, this method returns the file content as bytes.

To download only part of a file, use the `Range` header with a [byte range](https://www.rfc-editor.org/rfc/rfc9110.html#name-byte-ranges). For example: `Range: bytes=500-999`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.bot`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.messages.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
