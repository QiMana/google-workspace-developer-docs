---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments
root: workspace
fetched_at: 2026-04-23T15:25:05.623Z
---

# REST Resource: spaces.messages.attachments

## Page Summary

- An `Attachment` resource represents a file attached to a Google Chat message, containing metadata such as file name, content type, and source.
- `Attachment` includes URLs for thumbnail preview and user download, but Chat apps should utilize the `data_ref` field for accessing content.
- The `data_ref` field can point to either uploaded content within Chat (`AttachmentDataRef`) or a Google Drive file (`DriveDataRef`).
- `AttachmentDataRef` is used by Chat apps to create/update messages with attachments or to download attachment data via the media API.
- Developers can use the `get` method to retrieve metadata for a specific message attachment.

## Resource: Attachment

An attachment in Google Chat.

JSON representation

```
{
  "name": string,
  "contentName": string,
  "contentType": string,
  "thumbnailUri": string,
  "downloadUri": string,
  "source": enum (Source),

  "attachmentDataRef": {
    object (AttachmentDataRef)
  },
  "driveDataRef": {
    object (DriveDataRef)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the attachment.</p><p>Format: <code>spaces/{space}/messages/{message}/attachments/{attachment}</code>.</p></td></tr><tr><td><code>contentName</code></td><td><p><code>string</code></p><p>Output only. The original file name for the content, not the full path.</p></td></tr><tr><td><code>contentType</code></td><td><p><code>string</code></p><p>Output only. The content type (MIME type) of the file.</p></td></tr><tr><td><code>thumbnailUri</code></td><td><p><code>string</code></p><p>Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content.</p></td></tr><tr><td><code>downloadUri</code></td><td><p><code>string</code></p><p>Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content.</p></td></tr><tr><td><code>source</code></td><td><p><code>enum (<code>Source</code>)</code></p><p>Output only. The source of the attachment.</p></td></tr><tr><td colspan="2">Union field <code>data_ref</code>. The data reference to the attachment. <code>data_ref</code> can be only one of the following:</td></tr><tr><td><code>attachmentDataRef</code></td><td><p><code>object (<code>AttachmentDataRef</code>)</code></p><p>Optional. A reference to the attachment data. This field is used to create or update messages with attachments, or with the media API to download the attachment data.</p></td></tr><tr><td><code>driveDataRef</code></td><td><p><code>object (<code>DriveDataRef</code>)</code></p><p>Output only. A reference to the Google Drive attachment. This field is used with the Google Drive API.</p></td></tr></tbody></table>

### AttachmentDataRef

A reference to the attachment data.

JSON representation

```
{
  "resourceName": string,
  "attachmentUploadToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>resourceName</code></td><td><p><code>string</code></p><p>Optional. The resource name of the attachment data. This field is used with the media API to download the attachment data.</p></td></tr><tr><td><code>attachmentUploadToken</code></td><td><p><code>string</code></p><p>Optional. Opaque token containing a reference to an uploaded attachment. Treated by clients as an opaque string and used to create or update Chat messages with attachments.</p></td></tr></tbody></table>

### Source

The source of the attachment.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SOURCE_UNSPECIFIED</code></td><td>Reserved.</td></tr><tr><td><code>DRIVE_FILE</code></td><td>The file is a Google Drive file.</td></tr><tr><td><code>UPLOADED_CONTENT</code></td><td>The file is uploaded to Chat.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets the metadata of a message attachment.</td></tr></tbody></table>
