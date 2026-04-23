---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/DocsDestination
root: workspace
fetched_at: 2026-04-23T15:30:29.042Z
---

# DocsDestination

Google Docs location where the transcript file is saved.

JSON representation

```
{
  "document": string,
  "exportUri": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>document</code></td><td><p><code>string</code></p><p>Output only. The document ID for the underlying Google Docs transcript file. For example, "1kuceFZohVoCh6FulBHxwy6I15Ogpc4hP". Use the <code>documents.get</code> method of the Google Docs API (<a href="https://developers.google.com/docs/api/reference/rest/v1/documents/get">https://developers.google.com/docs/api/reference/rest/v1/documents/get</a>) to fetch the content.</p></td></tr><tr><td><code>exportUri</code></td><td><p><code>string</code></p><p>Output only. URI for the Google Docs transcript file. Use <code>https://docs.google.com/document/d/{$DocumentId}/view</code> to browse the transcript in the browser.</p></td></tr></tbody></table>
