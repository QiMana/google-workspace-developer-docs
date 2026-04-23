---
source: https://developers.google.com/workspace/docs/api/concepts/request-response
root: workspace
fetched_at: 2026-04-23T15:27:06.396Z
---

# Requests and responses

This guide introduces the primary request and response methods that make up the Google Docs API and how you can update a document in batches.

You can invoke the Google Docs API using an HTTP request, or by using a method invocation in a language-specific [client library](https://developers.google.com/workspace/docs/api/how-tos/libraries). These are broadly equivalent.

The Google Docs API returns an HTTP response, which generally includes the result of the request invocation. When using a client library to make requests, the responses are returned in a language-specific way.

## Request methods

The Docs API supports the following methods:

- [`documents.create`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/create): Create a blank Google Docs document.
- [`documents.get`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/get): Return a complete instance of the specified document. You can parse the returned JSON to extract the document content, formatting, and other features.
- [`documents.batchUpdate`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate): Submit a list of editing requests to apply atomically to the document, and return a list of results.

The `documents.get` and `documents.batchUpdate` methods require a `documentId` as a parameter to specify the target document. The `documents.create` method returns an instance of the created document, from which you can read the `documentId`. For more information about `documentId`, see [Document ID](https://developers.google.com/workspace/docs/api/concepts/document#document-id).

## Published documents

You can't use the `documents.get` method to retrieve published documents. Once published, public documents use a different URL format with a distinct, public `documentId`. Attempts to use the public `documentId` with the `documents.get` method return a `404` HTTP status code response.

Similarly, you can't use the Drive API [`files.copy`](https://developers.google.com/workspace/drive/v3/reference/files/copy) method to copy a published document.

To retrieve or copy a published document, you must use the original `documentId`. There are no methods to extract the original `documentId` from a published URL.

For more information, see:

- [Make Google Docs, Sheets, Slides & Forms public](https://support.google.com/docs/answer/183965)
- [Copy an existing document](https://developers.google.com/workspace/docs/api/how-tos/documents#copy-existing-document)

## Batch updates

The [`documents.batchUpdate`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate) method takes a list of [`request`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request) objects, each one specifying a single request to perform. For example, format a paragraph and then add an inline image. Each request is validated before being applied and the requests are processed according to the order they appear in the batch request.

All requests in the batch update are applied atomically. That is, if any request isn't valid, then the entire update is unsuccessful and none of the (potentially dependent) changes are applied.

Some `documents.batchUpdate` methods provide responses with information about the applied requests. These methods return a [response body](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate#response-body) that contains a list of [`response`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/response) objects. Other requests don't need to return information and surface an empty reply. The objects in the response list occupy the same index order as the corresponding request.

A popular pattern for making batch requests looks like this:

```
requests = []
requests.append(first request)
requests.append(second request)
...

body = ... & requests & ...

...batchUpdate(body)
```

See [batch request best practices](https://developers.google.com/workspace/docs/api/how-tos/batch) for full details on how to batch your Docs API calls and the [`documents.batchUpdate`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate) reference documentation for request and response types.

### Batch update operations

There are various types of batch update requests. Here's a breakdown of the [request types](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request), grouped into different categories.

| Object | ADD / INSERT | UPDATE / REPLACE | DELETE |
| --- | --- | --- | --- |
| Text | [InsertTextRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#inserttextrequest) | [ReplaceAllTextRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#replacealltextrequest) |  |
| Styles | [CreateParagraphBulletsRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#createparagraphbulletsrequest) | [UpdateTextStyleRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#updatetextstylerequest)   [UpdateParagraphStyleRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#updateparagraphstylerequest)   [UpdateTableCellStyleRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#updatetablecellstylerequest)   [UpdateTableRowStyleRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#updatetablerowstylerequest)   [UpdateDocumentStyleRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#updatedocumentstylerequest)   [UpdateSectionStyleRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#updatesectionstylerequest) | [DeleteParagraphBulletsRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#deleteparagraphbulletsrequest) |
| [Named Ranges](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#NamedRanges) | [CreateNamedRangeRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#createnamedrangerequest) | [ReplaceNamedRangeContentRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#replacenamedrangecontentrequest) | [DeleteNamedRangeRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#deletenamedrangerequest)   [DeleteContentRangeRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#deletecontentrangerequest) |
| Images | [InsertInlineImageRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#insertinlineimagerequest) | [ReplaceImageRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#replaceimagerequest) |  |
| Tables | [InsertTableRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#inserttablerequest)   [InsertTableRowRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#inserttablerowrequest)   [InsertTableColumnRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#inserttablecolumnrequest) | [UpdateTableColumnPropertiesRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#updatetablecolumnpropertiesrequest)   [MergeTableCellsRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#mergetablecellsrequest)   [UnmergeTableCellsRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#unmergetablecellsrequest)   [PinTableHeaderRowsRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#pintableheaderrowsrequest) | [DeleteTableRowRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#deletetablerowrequest)   [DeleteTableColumnRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#deletetablecolumnrequest) |
| Page objects (including [headers](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#Header) and [footers](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#footer)) | [InsertPageBreakRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#insertpagebreakrequest)   [CreateHeaderRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#createheaderrequest)   [CreateFooterRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#createfooterrequest)   [CreateFootnoteRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#createfootnoterequest)   [InsertSectionBreakRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#insertsectionbreakrequest) |  | [DeletePositionedObjectRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#deletepositionedobjectrequest)   [DeleteHeaderRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#deleteheaderrequest)   [DeleteFooterRequest](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#deletefooterrequest) |

## Related topics

- [Structure of a Google Docs document](https://developers.google.com/workspace/docs/api/concepts/structure)
- [Structural edit rules and behavior](https://developers.google.com/workspace/docs/api/concepts/rules-behavior)
- [Batch requests](https://developers.google.com/workspace/docs/api/how-tos/batch)
