---
source: https://developers.google.com/workspace/docs/api/how-tos/overview
root: workspace
fetched_at: 2026-04-23T15:27:06.683Z
---

# Google Docs API overview

The Google Docs API lets you create and modify documents in Google Docs.

Applications can integrate with the Docs API to create polished documents from both user and system-provided data. The Docs API lets you:

- Automate processes
- Create documentation in bulk
- Format documents
- Generate invoices or contracts
- Retrieve specific attributes of objects

The following is a list of common terms used in the Docs API:

*Document ID*

The unique identifier for a document. It's a particular string containing letters, numbers, and some special characters that reference a document and it can be derived from the document's URL. Document IDs are stable, even if the document name changes. For more information on how to find the ID, see [Document ID](https://developers.google.com/workspace/docs/api/concepts/document#document-id).

```
https://docs.google.com/document/d/DOCUMENT_ID/edit
```

*Element*

The structure that makes up a document. Top-level elements of a document include the [`Body`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#body), [`DocumentStyle`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#documentstyle), and [`List`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#list).

*Google Workspace document*

A file that a Google Workspace application, like Google Docs, creates. The MIME type format for Docs is `application/vnd.google-apps.document`. For a list of MIME types, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/drive/api/guides/mime-types).

*Index*

Most *elements* within the content body have the `startIndex` and `endIndex` properties. These indicate the offset of an element's beginning and end, relative to the beginning of its enclosing *segment*.

*Inline image*

An image that appears in the flow of text within a document. It's not an attachment.

*Named range*

A contiguous range of text. A [`NamedRange`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#namedrange) is a collection of ranges with the same `namedRangeId`. Named ranges allow developers to associate parts of a document with an arbitrary user-defined label so their contents can be programmatically read or edited later. A document can contain multiple named ranges with the same name, but every named range has a unique ID.

*Segment*

The `Body`, [`Header`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#header), [`Footer`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#footer), or [`Footnote`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#footnote) containing structural or content *elements*. The *indexes* of the elements within a segment are relative to the beginning of that segment.

*Suggestion*

Changes to a document without changing the original text. If the owner approves your suggestions, they replace the original text.

## Related topics

- To learn about developing with Google Workspace APIs, including handling authentication and authorization, refer to [Develop on Google Workspace](https://developers.google.com/workspace/guides/get-started).
- To get a conceptual overview of a document, see [Document](https://developers.google.com/workspace/docs/api/concepts/document).
- To learn how to configure and run a Docs API app, try the [JavaScript quickstart](https://developers.google.com/workspace/docs/api/quickstart/js).
