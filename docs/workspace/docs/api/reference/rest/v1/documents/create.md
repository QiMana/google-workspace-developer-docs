---
source: https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/create
root: workspace
fetched_at: 2026-04-23T15:27:09.058Z
---

# Method: documents.create

Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored.

Returns the created document.

### HTTP request

`POST https://docs.googleapis.com/v1/documents`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "documentId": string,
  "title": string,
  "tabs": [
    {
      
    }
  ],
  "revisionId": string,
  "suggestionsViewMode": ,
  "body": {
    
  },
  "headers": {
    string: {
      
    },
    ...
  },
  "footers": {
    string: {
      
    },
    ...
  },
  "footnotes": {
    string: {
      
    },
    ...
  },
  "documentStyle": {
    
  },
  "suggestedDocumentStyleChanges": {
    string: {
      
    },
    ...
  },
  "namedStyles": {
    
  },
  "suggestedNamedStylesChanges": {
    string: {
      
    },
    ...
  },
  "lists": {
    string: {
      
    },
    ...
  },
  "namedRanges": {
    string: {
      
    },
    ...
  },
  "inlineObjects": {
    string: {
      
    },
    ...
  },
  "positionedObjects": {
    string: {
      
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>documentId</code></td><td><p><code>string</code></p><p>Output only. The ID of the document.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the document.</p></td></tr><tr><td><code>tabs[]</code></td><td><p>Tabs that are part of a document.</p><p>Tabs can contain child tabs, a tab nested within another tab. Child tabs are represented by the field.</p></td></tr><tr><td><code>revisionId</code></td><td><p><code>string</code></p><p>Output only. The revision ID of the document. Can be used in update requests to specify which revision of a document to apply updates to and how the request should behave if the document has been edited since that revision. Only populated if the user has edit access to the document.</p><p>The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the document has not changed. Conversely, a changed ID (for the same document and user) usually means the document has been updated. However, a changed ID can also be due to internal factors such as ID format changes.</p></td></tr><tr><td><code>suggestionsViewMode</code></td><td><p>Output only. The suggestions view mode applied to the document.</p><p>Note: When editing a document, changes must be based on a document with .</p></td></tr><tr><td><code>body</code></td><td><p>Output only. The main body of the document.</p><p>Legacy field: Instead, use , which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>headers</code></td><td><p>Output only. The headers in the document, keyed by header ID.</p><p>Legacy field: Instead, use , which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>footnotes</code></td><td><p>Output only. The footnotes in the document, keyed by footnote ID.</p><p>Legacy field: Instead, use , which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>documentStyle</code></td><td><p>Output only. The style of the document.</p><p>Legacy field: Instead, use , which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>suggestedDocumentStyleChanges</code></td><td><p>Output only. The suggested changes to the style of the document, keyed by suggestion ID.</p><p>Legacy field: Instead, use , which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>namedStyles</code></td><td><p>Output only. The named styles of the document.</p><p>Legacy field: Instead, use , which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>suggestedNamedStylesChanges</code></td><td><p>Output only. The suggested changes to the named styles of the document, keyed by suggestion ID.</p><p>Legacy field: Instead, use , which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>lists</code></td><td><p>Output only. The lists in the document, keyed by list ID.</p><p>Legacy field: Instead, use , which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>namedRanges</code></td><td><p>Output only. The named ranges in the document, keyed by name.</p><p>Legacy field: Instead, use , which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>inlineObjects</code></td><td><p>Output only. The inline objects in the document, keyed by object ID.</p><p>Legacy field: Instead, use , which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>positionedObjects</code></td><td><p>Output only. The positioned objects in the document, keyed by object ID.</p><p>Legacy field: Instead, use , which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/documents`
- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
