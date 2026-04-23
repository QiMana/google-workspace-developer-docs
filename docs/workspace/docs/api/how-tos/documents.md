---
source: https://developers.google.com/workspace/docs/api/how-tos/documents
root: workspace
fetched_at: 2026-04-23T15:27:05.517Z
---

# Create and manage documents

This Google Docs API page describes how to perform certain high-level tasks involving Google Docs documents, such as:

- Create a document
- Copy an existing document

The following paragraphs describe these tasks in detail.

## Create a blank document

To create a document, use the [`documents.create`](../reference/rest/v1/documents/create.md) method on the [`documents`](../reference/rest/v1/documents.md) collection.

The following code sample shows how to create a blank document with a specified title:

### Java

```
private static void createDoc(Docs service) throws IOException {
    Document doc = new Document()
            .setTitle("My Document");
    doc = service.documents().create(doc)
            .execute();
    System.out.println("Created document with title: " + doc.getTitle());
}
```

### Node.js

```
const title = 'My Document';
const resource = {
  title,
};
this.service.documents.create({
  resource,
}, (err, response) => {
  if (err) return console.log('The API returned an error: ' + err);
  console.log(\`Created document with title: ${response.data.title}\`);
});
```

### PHP

```
$title = 'My Document';
$document = new Google_Service_Docs_Document(array(
    'title' => $title
));

$document = $service->documents->create($document);
printf("Created document with title: %s\n", $document->title);
```

### Python

```
title = 'My Document'
body = {
    'title': title
}
doc = service.documents() \
    .create(body=body).execute()
print('Created document with title: {0}'.format(
    doc.get('title')))
```

### Work with Google Drive folders

There's no option to create a document directly within a specified Drive folder using the Docs API. By default, the created document is saved to the user's root folder on Drive.

However, there are two alternatives to saving a file to a Drive folder:

- After the document is created, move it to a specific folder using Drive API's [`files.update`](../../../drive/api/reference/rest/v3/files/update.md) method. For more information on moving files, see [Move files between folders](../../../drive/api/guides/folder.md#move-files).
- Add a blank document to a folder using the Drive API's [`files.create`](../../../drive/api/reference/rest/v3/files/create.md) method, specifying `application/vnd.google-apps.document` as the `mimeType`. For more information on creating files, see [Create a file in a specific folder](../../../drive/api/guides/folder.md#create-file).

For either alternative, you'll need to add the appropriate [Drive API scopes](../../../drive/api/reference/rest/v3/files/create.md#authorization-scopes) to authorize the call. For more information on Drive scopes, see [Choose Google Drive API scopes](../../../drive/api/guides/api-specific-auth.md).

To move or create a file within a shared drive folder, see [Implement shared drive support](../../../drive/api/guides/enable-shareddrives.md).

## Copy an existing document

To copy a document, use Drive API's [`files.copy`](../../../drive/api/reference/rest/v3/files/copy.md) method.

Note that you can't use the `files.copy` method to copy a published document. For more information, see [Published documents](../concepts/request-response.md#published-docs).

The following code sample shows how to copy an existing document. You can find the ID to use for the Drive API call in the document URL. For more information, see [Document ID](../concepts/document.md#document-id).

```
https://docs.google.com/document/d/DOCUMENT_ID/edit
```

### Java

```
String copyTitle = "Copy Title";
File copyMetadata = new File().setName(copyTitle);
File documentCopyFile =
        driveService.files().copy(DOCUMENT_ID, copyMetadata).execute();
String documentCopyId = documentCopyFile.getId();
```

### Node.js

```
var copyTitle = "Copy Title";
let request = {
  name: copyTitle,
};
this.driveService.files.copy({
  fileId: DOCUMENT_ID,
  resource: request,
}, (err, driveResponse) => {
  let documentCopyId = driveResponse.id;
});
```

### PHP

```
$copyTitle = 'Copy Title';
$copy = new Google_Service_Drive_DriveFile(array(
    'name' => $copyTitle
));
$driveResponse = $driveService->files->copy(DOCUMENT_ID, $copy);
$documentCopyId = $driveResponse->id;
```

### Python

```
copy_title = 'Copy Title'
body = {
    'name': copy_title
}
drive_response = drive_service.files().copy(
    fileId=DOCUMENT_ID, body=body).execute()
document_copy_id = drive_response.get('id')
```

Note that you need to use an appropriate [Drive API scope](../../../drive/api/reference/rest/v3/files/copy.md#authorization-scopes) to authorize the call. For more information on Drive scopes, see [Choose Google Drive API scopes](../../../drive/api/guides/api-specific-auth.md).

## Related topics

- [Insert, delete, and move text](./move-text.md)
- [Merge text into a document](./merge.md)
- [Document concepts](../concepts/document.md)
