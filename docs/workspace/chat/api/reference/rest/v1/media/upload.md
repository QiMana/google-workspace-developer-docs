---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/media/upload
root: workspace
fetched_at: 2026-04-23T15:25:04.176Z
---

# Method: media.upload

## Page Summary

- Uploads an attachment to a Google Chat space, supporting files up to 200 MB.
- Uses an HTTP POST request to a specific URI with the space ID as a path parameter.
- Requires a JSON request body specifying the filename of the attachment.
- The response includes an `attachmentDataRef` object referencing the uploaded file.
- Requires specific authorization scopes for user authentication.

Uploads an attachment. For an example, see [Upload media as a file attachment](https://developers.google.com/workspace/chat/upload-media-attachments).

Requires user [authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes):

- `https://www.googleapis.com/auth/chat.messages.create`
- `https://www.googleapis.com/auth/chat.messages`
- `https://www.googleapis.com/auth/chat.import` (import mode spaces only)

You can upload attachments up to 200 MB. Certain file types aren't supported. For details, see [File types blocked by Google Chat](https://support.google.com/chat/answer/7651457?&co=GENIE.Platform%3DDesktop#File%20types%20blocked%20in%20Google%20Chat).

### HTTP request

- Upload URI, for media upload requests:  
	`POST https://chat.googleapis.com/upload/v1/{parent=spaces/*}/attachments:upload`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. Resource name of the Chat space in which the attachment is uploaded. Format "spaces/{space}".</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "filename": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>filename</code></td><td><p><code>string</code></p><p>Required. The filename of the attachment, including the file extension.</p></td></tr></tbody></table>

### Response body

Response of uploading an attachment.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "attachmentDataRef": {
    object (AttachmentDataRef)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>attachmentDataRef</code></td><td><p><code>object (<code>AttachmentDataRef</code>)</code></p><p>Reference to the uploaded attachment.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/chat.import`
- `https://www.googleapis.com/auth/chat.messages.create`
- `https://www.googleapis.com/auth/chat.messages`

For more information, see the [Authorization guide](https://developers.google.com/workspace/chat/authenticate-authorize).
