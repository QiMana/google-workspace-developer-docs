---
source: https://developers.google.com/workspace/keep/api/guides/retrieve-notes
root: workspace
fetched_at: 2026-04-23T15:30:08.410Z
---

# Retrieve notes and attachments

The following sample shows how to retrieve a note and its attachment:

### REST

Call [`media.download()`](https://developers.google.com/workspace/keep/api/reference/rest/v1/media/download) with the name of the attachment download and the `alt=media` URL parameter. The `alt=media` URL parameter tells the server that a download of content is being requested.

To get the name of the attachment, you must first [retrieve the note](#note).

### Java

```
/**
 * Gets and downloads the attachment of a note.
 *
 * @param note The note whose attachment will be downloaded.
 * @throws IOException
 */
private void getNoteAttachment(Note note) throws IOException {
  // First call is to get the attachment resources on the note.
  List<Attachment> attachments =
      keepService.notes().get(note.getName()).execute().getAttachments();

  if (!attachments.isEmpty()) {
    Attachment attachment = attachments.get(0);
    String mimeType = attachment.getMimeType().get(0);
    // Make a second call to download the attachment with the specified
    // mimeType.
    OutputStream outputStream =
        new FileOutputStream("attachmentFile." + mimeType.split("/")[1]);
    keepService
        .media()
        .download(attachment.getName())
        .setMimeType(mimeType)
        .executeMediaAndDownloadTo(outputStream);
  }
}
```
