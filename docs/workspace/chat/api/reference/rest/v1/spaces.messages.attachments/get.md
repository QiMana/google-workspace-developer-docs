---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments/get
root: workspace
fetched_at: 2026-04-23T15:25:05.688Z
---

# Method: spaces.messages.attachments.get

## Page Summary

- Retrieves metadata of a message attachment, with the actual attachment data fetched separately using the media API.
- Requires the `chat.bot` OAuth scope and app authentication for access.
- Uses a `GET` request to the specified URL with the attachment's resource name as a path parameter.
- Returns an `Attachment` object in the response body upon successful execution.
- Refer to the provided links for a practical example and further details on media download and authorization.

Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/workspace/chat/api/reference/rest/v1/media/download). For an example, see [Get metadata about a message attachment](https://developers.google.com/workspace/chat/get-media-attachments).

Requires [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.bot`

### HTTP request

`GET https://chat.googleapis.com/v1/{name=spaces/*/messages/*/attachments/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Resource name of the attachment, in the form <code>spaces/{space}/messages/{message}/attachments/{attachment}</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/chat.bot`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
