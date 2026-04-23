---
source: https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/response
root: workspace
fetched_at: 2026-04-23T15:27:08.868Z
---

# Responses

## Response

A single response from an update.

JSON representation

```
{

  "replaceAllText": {
    object (ReplaceAllTextResponse)
  },
  "createNamedRange": {
    object (CreateNamedRangeResponse)
  },
  "insertInlineImage": {
    object (InsertInlineImageResponse)
  },
  "insertInlineSheetsChart": {
    object (InsertInlineSheetsChartResponse)
  },
  "createHeader": {
    object (CreateHeaderResponse)
  },
  "createFooter": {
    object (CreateFooterResponse)
  },
  "createFootnote": {
    object (CreateFootnoteResponse)
  },
  "addDocumentTab": {
    object (AddDocumentTabResponse)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>response</code>. The response for the corresponding request. May have no fields set if the request had no response. <code>response</code> can be only one of the following:</td></tr><tr><td><code>replaceAllText</code></td><td><p><code>object (<code>ReplaceAllTextResponse</code>)</code></p><p>The result of replacing text.</p></td></tr><tr><td><code>createNamedRange</code></td><td><p><code>object (<code>CreateNamedRangeResponse</code>)</code></p><p>The result of creating a named range.</p></td></tr><tr><td><code>insertInlineImage</code></td><td><p><code>object (<code>InsertInlineImageResponse</code>)</code></p><p>The result of inserting an inline image.</p></td></tr><tr><td><code>insertInlineSheetsChart</code></td><td><p><code>object (<code>InsertInlineSheetsChartResponse</code>)</code></p><p>The result of inserting an inline Google Sheets chart.</p></td></tr><tr><td><code>createHeader</code></td><td><p><code>object (<code>CreateHeaderResponse</code>)</code></p><p>The result of creating a header.</p></td></tr><tr><td><code>createFootnote</code></td><td><p><code>object (<code>CreateFootnoteResponse</code>)</code></p><p>The result of creating a footnote.</p></td></tr><tr><td><code>addDocumentTab</code></td><td><p><code>object (<code>AddDocumentTabResponse</code>)</code></p><p>The result of adding a document tab.</p></td></tr></tbody></table>

## ReplaceAllTextResponse

The result of replacing text.

JSON representation

```
{
  "occurrencesChanged": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>occurrencesChanged</code></td><td><p><code>integer</code></p><p>The number of occurrences changed by replacing all text.</p></td></tr></tbody></table>

## CreateNamedRangeResponse

The result of creating a named range.

JSON representation

```
{
  "namedRangeId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>namedRangeId</code></td><td><p><code>string</code></p><p>The ID of the created named range.</p></td></tr></tbody></table>

## InsertInlineImageResponse

The result of inserting an inline image.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p></td></tr></tbody></table>

## InsertInlineSheetsChartResponse

The result of inserting an embedded Google Sheets chart.

JSON representation

```
{
  "objectId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The object ID of the inserted chart.</p></td></tr></tbody></table>

## CreateHeaderResponse

JSON representation

```
{
  "headerId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>headerId</code></td><td><p><code>string</code></p><p>The ID of the created header.</p></td></tr></tbody></table>

## CreateFooterResponse

JSON representation

```
{
  "footerId": string
}
```

## CreateFootnoteResponse

The result of creating a footnote.

JSON representation

```
{
  "footnoteId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>footnoteId</code></td><td><p><code>string</code></p><p>The ID of the created footnote.</p></td></tr></tbody></table>

## AddDocumentTabResponse

The result of adding a document tab.

JSON representation

```
{
  "tabProperties": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tabProperties</code></td><td><p>The properties of the newly added tab.</p></td></tr></tbody></table>
