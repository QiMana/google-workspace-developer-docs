---
source: https://developers.google.com/workspace/docs/api/concepts/request-response
root: workspace
fetched_at: 2026-04-23T15:27:06.396Z
---

# Requests and responses

This guide introduces the primary request and response methods that make up the Google Docs API and how you can update a document in batches.

You can invoke the Google Docs API using an HTTP request, or by using a method invocation in a language-specific [client library](../how-tos/libraries.md). These are broadly equivalent.

The Google Docs API returns an HTTP response, which generally includes the result of the request invocation. When using a client library to make requests, the responses are returned in a language-specific way.

## Request methods

The Docs API supports the following methods:

- [`documents.create`](../reference/rest/v1/documents/create.md): Create a blank Google Docs document.
- [`documents.get`](../reference/rest/v1/documents/get.md): Return a complete instance of the specified document. You can parse the returned JSON to extract the document content, formatting, and other features.
- [`documents.batchUpdate`](../reference/rest/v1/documents/batchUpdate.md): Submit a list of editing requests to apply atomically to the document, and return a list of results.

The `documents.get` and `documents.batchUpdate` methods require a `documentId` as a parameter to specify the target document. The `documents.create` method returns an instance of the created document, from which you can read the `documentId`. For more information about `documentId`, see [Document ID](./document.md#document-id).

## Published documents

You can't use the `documents.get` method to retrieve published documents. Once published, public documents use a different URL format with a distinct, public `documentId`. Attempts to use the public `documentId` with the `documents.get` method return a `404` HTTP status code response.

Similarly, you can't use the Drive API [`files.copy`](../../../drive/api/reference/rest/v3/files/copy.md) method to copy a published document.

To retrieve or copy a published document, you must use the original `documentId`. There are no methods to extract the original `documentId` from a published URL.

For more information, see:

- [Make Google Docs, Sheets, Slides & Forms public](https://support.google.com/docs/answer/183965)
- [Copy an existing document](../how-tos/documents.md#copy-existing-document)

## Batch updates

The [`documents.batchUpdate`](../reference/rest/v1/documents/batchUpdate.md) method takes a list of [`request`](../reference/rest/v1/documents/request.md) objects, each one specifying a single request to perform. For example, format a paragraph and then add an inline image. Each request is validated before being applied and the requests are processed according to the order they appear in the batch request.

All requests in the batch update are applied atomically. That is, if any request isn't valid, then the entire update is unsuccessful and none of the (potentially dependent) changes are applied.

Some `documents.batchUpdate` methods provide responses with information about the applied requests. These methods return a [response body](../reference/rest/v1/documents/batchUpdate.md#response-body) that contains a list of [`response`](../reference/rest/v1/documents/response.md) objects. Other requests don't need to return information and surface an empty reply. The objects in the response list occupy the same index order as the corresponding request.

A popular pattern for making batch requests looks like this:

```
requests = []
requests.append(first request)
requests.append(second request)
...

body = ... & requests & ...

...batchUpdate(body)
```

See [batch request best practices](../how-tos/batch.md) for full details on how to batch your Docs API calls and the [`documents.batchUpdate`](../reference/rest/v1/documents/batchUpdate.md) reference documentation for request and response types.

### Batch update operations

There are various types of batch update requests. Here's a breakdown of the [request types](../reference/rest/v1/documents/request.md), grouped into different categories.

| Object | ADD / INSERT | UPDATE / REPLACE | DELETE |
| --- | --- | --- | --- |
| Text | [InsertTextRequest](../reference/rest/v1/documents/request.md#inserttextrequest) | [ReplaceAllTextRequest](../reference/rest/v1/documents/request.md#replacealltextrequest) |  |
| Styles | [CreateParagraphBulletsRequest](../reference/rest/v1/documents/request.md#createparagraphbulletsrequest) | [UpdateTextStyleRequest](../reference/rest/v1/documents/request.md#updatetextstylerequest)   [UpdateParagraphStyleRequest](../reference/rest/v1/documents/request.md#updateparagraphstylerequest)   [UpdateTableCellStyleRequest](../reference/rest/v1/documents/request.md#updatetablecellstylerequest)   [UpdateTableRowStyleRequest](../reference/rest/v1/documents/request.md#updatetablerowstylerequest)   [UpdateDocumentStyleRequest](../reference/rest/v1/documents/request.md#updatedocumentstylerequest)   [UpdateSectionStyleRequest](../reference/rest/v1/documents/request.md#updatesectionstylerequest) | [DeleteParagraphBulletsRequest](../reference/rest/v1/documents/request.md#deleteparagraphbulletsrequest) |
| [Named Ranges](../reference/rest/v1/documents.md#NamedRanges) | [CreateNamedRangeRequest](../reference/rest/v1/documents/request.md#createnamedrangerequest) | [ReplaceNamedRangeContentRequest](../reference/rest/v1/documents/request.md#replacenamedrangecontentrequest) | [DeleteNamedRangeRequest](../reference/rest/v1/documents/request.md#deletenamedrangerequest)   [DeleteContentRangeRequest](../reference/rest/v1/documents/request.md#deletecontentrangerequest) |
| Images | [InsertInlineImageRequest](../reference/rest/v1/documents/request.md#insertinlineimagerequest) | [ReplaceImageRequest](../reference/rest/v1/documents/request.md#replaceimagerequest) |  |
| Tables | [InsertTableRequest](../reference/rest/v1/documents/request.md#inserttablerequest)   [InsertTableRowRequest](../reference/rest/v1/documents/request.md#inserttablerowrequest)   [InsertTableColumnRequest](../reference/rest/v1/documents/request.md#inserttablecolumnrequest) | [UpdateTableColumnPropertiesRequest](../reference/rest/v1/documents/request.md#updatetablecolumnpropertiesrequest)   [MergeTableCellsRequest](../reference/rest/v1/documents/request.md#mergetablecellsrequest)   [UnmergeTableCellsRequest](../reference/rest/v1/documents/request.md#unmergetablecellsrequest)   [PinTableHeaderRowsRequest](../reference/rest/v1/documents/request.md#pintableheaderrowsrequest) | [DeleteTableRowRequest](../reference/rest/v1/documents/request.md#deletetablerowrequest)   [DeleteTableColumnRequest](../reference/rest/v1/documents/request.md#deletetablecolumnrequest) |
| Page objects (including [headers](../reference/rest/v1/documents.md#Header) and [footers](../reference/rest/v1/documents.md#footer)) | [InsertPageBreakRequest](../reference/rest/v1/documents/request.md#insertpagebreakrequest)   [CreateHeaderRequest](../reference/rest/v1/documents/request.md#createheaderrequest)   [CreateFooterRequest](../reference/rest/v1/documents/request.md#createfooterrequest)   [CreateFootnoteRequest](../reference/rest/v1/documents/request.md#createfootnoterequest)   [InsertSectionBreakRequest](../reference/rest/v1/documents/request.md#insertsectionbreakrequest) |  | [DeletePositionedObjectRequest](../reference/rest/v1/documents/request.md#deletepositionedobjectrequest)   [DeleteHeaderRequest](../reference/rest/v1/documents/request.md#deleteheaderrequest)   [DeleteFooterRequest](../reference/rest/v1/documents/request.md#deletefooterrequest) |

## Related topics

- [Structure of a Google Docs document](./structure.md)
- [Structural edit rules and behavior](./rules-behavior.md)
- [Batch requests](../how-tos/batch.md)
