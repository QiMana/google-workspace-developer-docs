---
source: https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/get
root: workspace
fetched_at: 2026-04-23T15:27:09.276Z
---

# Method: documents.get

Gets the latest version of the specified document.

### HTTP request

`GET https://docs.googleapis.com/v1/documents/{documentId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>documentId</code></td><td><p><code>string</code></p><p>The ID of the document to retrieve.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>suggestionsViewMode</code></td><td><p>The suggestions view mode to apply to the document. This allows viewing the document with all suggestions inline, accepted or rejected. If one is not specified, is used.</p></td></tr><tr><td><code>includeTabsContent</code></td><td><p><code>boolean</code></p><p>Whether to populate the field instead of the text content fields like <code>body</code> and <code>documentStyle</code> on .</p><ul><li><p>When <code>True</code>: Document content populates in the field instead of the text content fields in .</p></li><li><p>When <code>False</code>: The content of the document's first tab populates the content fields in excluding . If a document has only one tab, then that tab is used to populate the document content. will be empty.</p></li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/documents`
- `https://www.googleapis.com/auth/documents.readonly`
- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.readonly`
- `https://www.googleapis.com/auth/drive.file`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
