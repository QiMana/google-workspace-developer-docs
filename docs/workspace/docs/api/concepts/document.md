---
source: https://developers.google.com/workspace/docs/api/concepts/document
root: workspace
fetched_at: 2026-04-23T15:27:06.449Z
---

# Document

This guide introduces concepts such as the primary methods that make up the Google Docs API, how to access a document, and the workflow when creating a document.

## API methods

The [`documents`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents) resource provides methods you use to invoke the Docs API. The following methods let you create, read, and update Docs documents:

- Use the [`documents.create`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/create) method to create a document.
- Use the [`documents.get`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/get) method to retrieve the contents of a specified document.
- Use the [`documents.batchUpdate`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate) method to atomically perform a set of updates on a specified document.

The `documents.get` and `documents.batchUpdate` methods require a `documentId` as a parameter to specify the target document. The `documents.create` method returns an instance of the created document, from which you can read the `documentId`. For more information about Docs API requests and response methods, see [Requests and responses](https://developers.google.com/workspace/docs/api/concepts/request-response).

## Document ID

The `documentId` is the unique identifier for the document and it can be derived from a document's URL. It's a particular string containing letters, numbers, and some special characters. Document IDs are stable, even if the document name changes.

```
https://docs.google.com/document/d/DOCUMENT_ID/edit
```

The following regular expression can be used to extract the `documentId` from a Google Docs URL:

```
/document/d/([a-zA-Z0-9-_]+)
```

If you're familiar with the Google Drive API, the `documentId` corresponds to `id` in the [`files`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files) resource.

## Manage documents in Google Drive

Docs files are stored in Google Drive, our cloud-based storage service. While Docs API has its own standalone methods, it's often necessary to also use Google Drive API methods to interact with a user's Docs files. For example, to copy Docs files, use Drive API's [`files.copy`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/copy) method. For more information, see [Copy an existing document](https://developers.google.com/workspace/docs/api/how-tos/documents#copy_an_existing_document).

By default, when using the Docs API a new document is saved to the user's root folder on Drive. There are options for saving a file to a Drive folder. For more information, see [Work with Google Drive folders](https://developers.google.com/workspace/docs/api/how-tos/documents#work_with_folders).

### Work with Docs files

To retrieve a document from a user's My Drive, it's often necessary to first use Drive's [`files.list`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/list) method to retrieve the ID for a file. Calling the method without any parameters returns a list of all files and folders, including the IDs, for the user.

A document's MIME type indicates the data type and format. The MIME type format for Docs is `application/vnd.google-apps.document`. For a list of MIME types, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types).

To search by MIME type for just Docs files within My Drive, append the following query string filter:

```
q: mimeType = 'application/vnd.google-apps.document'
```

For more information about query string filters, see [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files).

Once you know the `documentId`, use the [`documents.get`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/get) method to retrieve a complete instance of the specified document. For more information, see [Requests and responses](https://developers.google.com/workspace/docs/api/concepts/request-response).

To export Google Workspace document byte content, use Drive's [`files.export`](https://developers.google.com/drive/api/v3/reference/files/export) method with the `documentId` of the file to export and the correct [export MIME type](https://developers.google.com/workspace/drive/api/guides/ref-export-formats). For more information, see [Export Google Workspace document content](https://developers.google.com/workspace/drive/api/guides/manage-downloads#export-content).

### Compare the Get and List methods

The following table describes the differences between the Drive and Docs methods, and the data that's returned with each:

| Operator | Description | Usage |
| --- | --- | --- |
| [`drive.files.get`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/get) | Gets a file's metadata by ID. Returns an instance of the [`files`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files) resource. | Get the metadata for a specific file. |
| [`drive.files.list`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/list) | Gets a user's files. Returns a list of files. | Get a list of user files when you're unsure which file you must modify. |
| [`docs.documents.get`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/get) | Gets the latest version of the specified document, including all formatting and text. Returns an instance of the [`documents`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents) resource. | Get the document for a specific document ID. |

## Document creation workflow

Creating and populating a new document is straightforward, since there's no existing content to worry about and there are no collaborators who can alter the document state. Conceptually, this works as shown in the following sequence diagram:

![Workflow to create and
populate a new document.](https://developers.google.com/static/workspace/docs/api/images/create-sequence.svg)

Figure 1. Workflow to create and populate a new document.

In the Figure 1., a user interacting with the [`documents`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents) resource has the following flow of information:

1. An app calls the [`documents.create`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/create) method on a web server.
2. The web server sends an HTTP response that contains an instance of the created document as a `documents` resource.
3. Optionally, the app calls the [`documents.batchUpdate`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate) method to atomically perform a set of edit requests to populate the document with data.
4. The web server sends an HTTP response. Some `documents.batchUpdate` methods provide a response body with information about the applied requests, whereas others surface an empty response.

## Document update workflow

Updating an existing document is more complex. Before you can make meaningful calls to update a document, you must know its current state: what elements make it up, what content is in those elements, and the order of the elements within the document. The following sequence diagram shows how this works:

![Workflow to update a
document.](https://developers.google.com/static/workspace/docs/api/images/update-sequence.svg)

Figure 2. Workflow to update a document.

In the Figure 2., a user interacting with the `documents` resource has the following flow of information:

1. An app calls the [`documents.get`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/get) method on a web server, with the `documentId` of the file to find.
2. The web server sends an HTTP response that contains an instance of the specified document as a `documents` resource. The returned JSON contains the document content, formatting, and other features.
3. The app parses the JSON so the user can determine what content or format to update.
4. The app calls the `documents.batchUpdate` method to atomically perform a set of edit requests to update the document.
5. The web server sends an HTTP response. Some `documents.batchUpdate` methods provide a response body with information about the applied requests, whereas others surface an empty response.

This diagram doesn't consider workflows where concurrent updates by other collaborators are made in the same document. For more information, see the best practices section [Plan for collaboration](https://developers.google.com/workspace/docs/api/how-tos/best-practices#plan-for-collaboration).

## Related topics

- [Structure of a Google Docs document](https://developers.google.com/workspace/docs/api/concepts/structure)
- [Requests and responses](https://developers.google.com/workspace/docs/api/concepts/request-response)
- [Structural edit rules and behavior](https://developers.google.com/workspace/docs/api/concepts/rules-behavior)
- [Best practices for best results](https://developers.google.com/workspace/docs/api/how-tos/best-practices)
