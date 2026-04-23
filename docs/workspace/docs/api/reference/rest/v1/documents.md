---
source: https://developers.google.com/workspace/docs/api/reference/rest/v1/documents
root: workspace
fetched_at: 2026-04-23T15:27:13.273Z
---

# REST Resource: documents

## Resource: Document

A Google Docs document.

JSON representation

```
{
  "documentId": string,
  "title": string,
  "tabs": [
    {
      object (Tab)
    }
  ],
  "revisionId": string,
  "suggestionsViewMode": enum (SuggestionsViewMode),
  "body": {
    object (Body)
  },
  "headers": {
    string: {
      object (Header)
    },
    ...
  },
  "footers": {
    string: {
      object (Footer)
    },
    ...
  },
  "footnotes": {
    string: {
      object (Footnote)
    },
    ...
  },
  "documentStyle": {
    object (DocumentStyle)
  },
  "suggestedDocumentStyleChanges": {
    string: {
      object (SuggestedDocumentStyle)
    },
    ...
  },
  "namedStyles": {
    object (NamedStyles)
  },
  "suggestedNamedStylesChanges": {
    string: {
      object (SuggestedNamedStyles)
    },
    ...
  },
  "lists": {
    string: {
      object (List)
    },
    ...
  },
  "namedRanges": {
    string: {
      object (NamedRanges)
    },
    ...
  },
  "inlineObjects": {
    string: {
      object (InlineObject)
    },
    ...
  },
  "positionedObjects": {
    string: {
      object (PositionedObject)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>documentId</code></td><td><p><code>string</code></p><p>Output only. The ID of the document.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the document.</p></td></tr><tr><td><code>tabs[]</code></td><td><p><code>object (<code>Tab</code>)</code></p><p>Tabs that are part of a document.</p><p>Tabs can contain child tabs, a tab nested within another tab. Child tabs are represented by the <code>Tab.childTabs</code> field.</p></td></tr><tr><td><code>revisionId</code></td><td><p><code>string</code></p><p>Output only. The revision ID of the document. Can be used in update requests to specify which revision of a document to apply updates to and how the request should behave if the document has been edited since that revision. Only populated if the user has edit access to the document.</p><p>The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the document has not changed. Conversely, a changed ID (for the same document and user) usually means the document has been updated. However, a changed ID can also be due to internal factors such as ID format changes.</p></td></tr><tr><td><code>suggestionsViewMode</code></td><td><p><code>enum (<code>SuggestionsViewMode</code>)</code></p><p>Output only. The suggestions view mode applied to the document.</p><p>Note: When editing a document, changes must be based on a document with <code>SUGGESTIONS_INLINE</code>.</p></td></tr><tr><td><code>body</code></td><td><p><code>object (<code>Body</code>)</code></p><p>Output only. The main body of the document.</p><p>Legacy field: Instead, use <code>Document.tabs.documentTab.body</code>, which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>headers</code></td><td><p><code>map (key: string, value: object (<code>Header</code>))</code></p><p>Output only. The headers in the document, keyed by header ID.</p><p>Legacy field: Instead, use <code>Document.tabs.documentTab.headers</code>, which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>footnotes</code></td><td><p><code>map (key: string, value: object (<code>Footnote</code>))</code></p><p>Output only. The footnotes in the document, keyed by footnote ID.</p><p>Legacy field: Instead, use <code>Document.tabs.documentTab.footnotes</code>, which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>documentStyle</code></td><td><p><code>object (<code>DocumentStyle</code>)</code></p><p>Output only. The style of the document.</p><p>Legacy field: Instead, use <code>Document.tabs.documentTab.documentStyle</code>, which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>suggestedDocumentStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedDocumentStyle</code>))</code></p><p>Output only. The suggested changes to the style of the document, keyed by suggestion ID.</p><p>Legacy field: Instead, use <code>Document.tabs.documentTab.suggestedDocumentStyleChanges</code>, which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>namedStyles</code></td><td><p><code>object (<code>NamedStyles</code>)</code></p><p>Output only. The named styles of the document.</p><p>Legacy field: Instead, use <code>Document.tabs.documentTab.namedStyles</code>, which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>suggestedNamedStylesChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedNamedStyles</code>))</code></p><p>Output only. The suggested changes to the named styles of the document, keyed by suggestion ID.</p><p>Legacy field: Instead, use <code>Document.tabs.documentTab.suggestedNamedStylesChanges</code>, which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>lists</code></td><td><p><code>map (key: string, value: object (<code>List</code>))</code></p><p>Output only. The lists in the document, keyed by list ID.</p><p>Legacy field: Instead, use <code>Document.tabs.documentTab.lists</code>, which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>namedRanges</code></td><td><p><code>map (key: string, value: object (<code>NamedRanges</code>))</code></p><p>Output only. The named ranges in the document, keyed by name.</p><p>Legacy field: Instead, use <code>Document.tabs.documentTab.namedRanges</code>, which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>inlineObjects</code></td><td><p><code>map (key: string, value: object (<code>InlineObject</code>))</code></p><p>Output only. The inline objects in the document, keyed by object ID.</p><p>Legacy field: Instead, use <code>Document.tabs.documentTab.inlineObjects</code>, which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr><tr><td><code>positionedObjects</code></td><td><p><code>map (key: string, value: object (<code>PositionedObject</code>))</code></p><p>Output only. The positioned objects in the document, keyed by object ID.</p><p>Legacy field: Instead, use <code>Document.tabs.documentTab.positionedObjects</code>, which exposes the actual document content from all tabs when the <code>includeTabsContent</code> parameter is set to <code>true</code>. If <code>false</code> or unset, this field contains information about the first tab in the document.</p></td></tr></tbody></table>

## Tab

A tab in a document.

JSON representation

```
{
  "tabProperties": {
    object (TabProperties)
  },
  "childTabs": [
    {
      object (Tab)
    }
  ],

  "documentTab": {
    object (DocumentTab)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tabProperties</code></td><td><p><code>object (<code>TabProperties</code>)</code></p><p>The properties of the tab, like ID and title.</p></td></tr><tr><td><code>childTabs[]</code></td><td><p><code>object (<code>Tab</code>)</code></p><p>The child tabs nested within this tab.</p></td></tr><tr><td colspan="2">Union field <code>content</code>. The content of the tab. <code>content</code> can be only one of the following:</td></tr><tr><td><code>documentTab</code></td><td><p><code>object (<code>DocumentTab</code>)</code></p><p>A tab with document contents, like text and images.</p></td></tr></tbody></table>

## TabProperties

Properties of a tab.

JSON representation

```
{
  "tabId": string,
  "title": string,
  "parentTabId": string,
  "index": integer,
  "nestingLevel": integer,
  "iconEmoji": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The immutable ID of the tab.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The user-visible name of the tab.</p></td></tr><tr><td><code>parentTabId</code></td><td><p><code>string</code></p><p>Optional. The ID of the parent tab. Empty when the current tab is a root-level tab, which means it doesn't have any parents.</p></td></tr><tr><td><code>index</code></td><td><p><code>integer</code></p><p>The zero-based index of the tab within the parent.</p></td></tr><tr><td><code>nestingLevel</code></td><td><p><code>integer</code></p><p>Output only. The depth of the tab within the document. Root-level tabs start at 0.</p></td></tr><tr><td><code>iconEmoji</code></td><td><p><code>string</code></p><p>Optional. The emoji icon displayed with the tab. A valid emoji icon is represented by a non-empty Unicode string. Any set of characters that don't represent a single emoji is invalid.</p><p>If an emoji is invalid, a 400 bad request error is returned.</p><p>If this value is unset or empty, the tab will display the default tab icon.</p></td></tr></tbody></table>

## DocumentTab

A tab with document contents.

JSON representation

```
{
  "body": {
    object (Body)
  },
  "headers": {
    string: {
      object (Header)
    },
    ...
  },
  "footers": {
    string: {
      object (Footer)
    },
    ...
  },
  "footnotes": {
    string: {
      object (Footnote)
    },
    ...
  },
  "documentStyle": {
    object (DocumentStyle)
  },
  "suggestedDocumentStyleChanges": {
    string: {
      object (SuggestedDocumentStyle)
    },
    ...
  },
  "namedStyles": {
    object (NamedStyles)
  },
  "suggestedNamedStylesChanges": {
    string: {
      object (SuggestedNamedStyles)
    },
    ...
  },
  "lists": {
    string: {
      object (List)
    },
    ...
  },
  "namedRanges": {
    string: {
      object (NamedRanges)
    },
    ...
  },
  "inlineObjects": {
    string: {
      object (InlineObject)
    },
    ...
  },
  "positionedObjects": {
    string: {
      object (PositionedObject)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>body</code></td><td><p><code>object (<code>Body</code>)</code></p><p>The main body of the document tab.</p></td></tr><tr><td><code>headers</code></td><td><p><code>map (key: string, value: object (<code>Header</code>))</code></p><p>The headers in the document tab, keyed by header ID.</p></td></tr><tr><td><code>footnotes</code></td><td><p><code>map (key: string, value: object (<code>Footnote</code>))</code></p><p>The footnotes in the document tab, keyed by footnote ID.</p></td></tr><tr><td><code>documentStyle</code></td><td><p><code>object (<code>DocumentStyle</code>)</code></p><p>The style of the document tab.</p></td></tr><tr><td><code>suggestedDocumentStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedDocumentStyle</code>))</code></p><p>The suggested changes to the style of the document tab, keyed by suggestion ID.</p></td></tr><tr><td><code>namedStyles</code></td><td><p><code>object (<code>NamedStyles</code>)</code></p><p>The named styles of the document tab.</p></td></tr><tr><td><code>suggestedNamedStylesChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedNamedStyles</code>))</code></p><p>The suggested changes to the named styles of the document tab, keyed by suggestion ID.</p></td></tr><tr><td><code>lists</code></td><td><p><code>map (key: string, value: object (<code>List</code>))</code></p><p>The lists in the document tab, keyed by list ID.</p></td></tr><tr><td><code>namedRanges</code></td><td><p><code>map (key: string, value: object (<code>NamedRanges</code>))</code></p><p>The named ranges in the document tab, keyed by name.</p></td></tr><tr><td><code>inlineObjects</code></td><td><p><code>map (key: string, value: object (<code>InlineObject</code>))</code></p><p>The inline objects in the document tab, keyed by object ID.</p></td></tr><tr><td><code>positionedObjects</code></td><td><p><code>map (key: string, value: object (<code>PositionedObject</code>))</code></p><p>The positioned objects in the document tab, keyed by object ID.</p></td></tr></tbody></table>

## Body

The document body.

The body typically contains the full document contents except for `headers`, `footers`, and `footnotes`.

JSON representation

```
{
  "content": [
    {
      object (StructuralElement)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>content[]</code></td><td><p><code>object (<code>StructuralElement</code>)</code></p><p>The contents of the body.</p><p>The indexes for the body's content begin at zero.</p></td></tr></tbody></table>

## StructuralElement

A StructuralElement describes content that provides structure to the document.

JSON representation

```
{
  "startIndex": integer,
  "endIndex": integer,

  "paragraph": {
    object (Paragraph)
  },
  "sectionBreak": {
    object (SectionBreak)
  },
  "table": {
    object (Table)
  },
  "tableOfContents": {
    object (TableOfContents)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startIndex</code></td><td><p><code>integer</code></p><p>The zero-based start index of this structural element, in UTF-16 code units.</p></td></tr><tr><td><code>endIndex</code></td><td><p><code>integer</code></p><p>The zero-based end index of this structural element, exclusive, in UTF-16 code units.</p></td></tr><tr><td colspan="2">Union field <code>content</code>. The content of the structural element. <code>content</code> can be only one of the following:</td></tr><tr><td><code>paragraph</code></td><td><p><code>object (<code>Paragraph</code>)</code></p><p>A paragraph type of structural element.</p></td></tr><tr><td><code>sectionBreak</code></td><td><p><code>object (<code>SectionBreak</code>)</code></p><p>A section break type of structural element.</p></td></tr><tr><td><code>table</code></td><td><p><code>object (<code>Table</code>)</code></p><p>A table type of structural element.</p></td></tr><tr><td><code>tableOfContents</code></td><td><p><code>object (<code>TableOfContents</code>)</code></p><p>A table of contents type of structural element.</p></td></tr></tbody></table>

## Paragraph

A `StructuralElement` representing a paragraph. A paragraph is a range of content that's terminated with a newline character.

JSON representation

```
{
  "elements": [
    {
      object (ParagraphElement)
    }
  ],
  "paragraphStyle": {
    object (ParagraphStyle)
  },
  "suggestedParagraphStyleChanges": {
    string: {
      object (SuggestedParagraphStyle)
    },
    ...
  },
  "bullet": {
    object (Bullet)
  },
  "suggestedBulletChanges": {
    string: {
      object (SuggestedBullet)
    },
    ...
  },
  "positionedObjectIds": [
    string
  ],
  "suggestedPositionedObjectIds": {
    string: {
      object (ObjectReferences)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>elements[]</code></td><td><p><code>object (<code>ParagraphElement</code>)</code></p><p>The content of the paragraph, broken down into its component parts.</p></td></tr><tr><td><code>paragraphStyle</code></td><td><p><code>object (<code>ParagraphStyle</code>)</code></p><p>The style of this paragraph.</p></td></tr><tr><td><code>suggestedParagraphStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedParagraphStyle</code>))</code></p><p>The suggested paragraph style changes to this paragraph, keyed by suggestion ID.</p></td></tr><tr><td><code>bullet</code></td><td><p><code>object (<code>Bullet</code>)</code></p><p>The bullet for this paragraph. If not present, the paragraph does not belong to a list.</p></td></tr><tr><td><code>suggestedBulletChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedBullet</code>))</code></p><p>The suggested changes to this paragraph's bullet.</p></td></tr><tr><td><code>positionedObjectIds[]</code></td><td><p><code>string</code></p><p>The IDs of the positioned objects tethered to this paragraph.</p></td></tr><tr><td><code>suggestedPositionedObjectIds</code></td><td><p><code>map (key: string, value: object (<code>ObjectReferences</code>))</code></p><p>The IDs of the positioned objects suggested to be attached to this paragraph, keyed by suggestion ID.</p></td></tr></tbody></table>

## ParagraphElement

A ParagraphElement describes content within a `Paragraph`.

JSON representation

```
{
  "startIndex": integer,
  "endIndex": integer,

  "textRun": {
    object (TextRun)
  },
  "autoText": {
    object (AutoText)
  },
  "pageBreak": {
    object (PageBreak)
  },
  "columnBreak": {
    object (ColumnBreak)
  },
  "footnoteReference": {
    object (FootnoteReference)
  },
  "horizontalRule": {
    object (HorizontalRule)
  },
  "equation": {
    object (Equation)
  },
  "inlineObjectElement": {
    object (InlineObjectElement)
  },
  "person": {
    object (Person)
  },
  "richLink": {
    object (RichLink)
  },
  "dateElement": {
    object (DateElement)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startIndex</code></td><td><p><code>integer</code></p><p>The zero-based start index of this paragraph element, in UTF-16 code units.</p></td></tr><tr><td><code>endIndex</code></td><td><p><code>integer</code></p><p>The zero-base end index of this paragraph element, exclusive, in UTF-16 code units.</p></td></tr><tr><td colspan="2">Union field <code>content</code>. The content of the paragraph element. <code>content</code> can be only one of the following:</td></tr><tr><td><code>textRun</code></td><td><p><code>object (<code>TextRun</code>)</code></p><p>A text run paragraph element.</p></td></tr><tr><td><code>autoText</code></td><td><p><code>object (<code>AutoText</code>)</code></p><p>An auto text paragraph element.</p></td></tr><tr><td><code>pageBreak</code></td><td><p><code>object (<code>PageBreak</code>)</code></p><p>A page break paragraph element.</p></td></tr><tr><td><code>columnBreak</code></td><td><p><code>object (<code>ColumnBreak</code>)</code></p><p>A column break paragraph element.</p></td></tr><tr><td><code>footnoteReference</code></td><td><p><code>object (<code>FootnoteReference</code>)</code></p><p>A footnote reference paragraph element.</p></td></tr><tr><td><code>horizontalRule</code></td><td><p><code>object (<code>HorizontalRule</code>)</code></p><p>A horizontal rule paragraph element.</p></td></tr><tr><td><code>equation</code></td><td><p><code>object (<code>Equation</code>)</code></p><p>An equation paragraph element.</p></td></tr><tr><td><code>inlineObjectElement</code></td><td><p><code>object (<code>InlineObjectElement</code>)</code></p><p>An inline object paragraph element.</p></td></tr><tr><td><code>person</code></td><td><p><code>object (<code>Person</code>)</code></p><p>A paragraph element that links to a person or email address.</p></td></tr><tr><td><code>richLink</code></td><td><p><code>object (<code>RichLink</code>)</code></p><p>A paragraph element that links to a Google resource (such as a file in Google Drive, a YouTube video, or a Calendar event.)</p></td></tr><tr><td><code>dateElement</code></td><td><p><code>object (<code>DateElement</code>)</code></p><p>A paragraph element that represents a date.</p></td></tr></tbody></table>

## TextRun

A `ParagraphElement` that represents a run of text that all has the same styling.

JSON representation

```
{
  "content": string,
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "textStyle": {
    object (TextStyle)
  },
  "suggestedTextStyleChanges": {
    string: {
      object (SuggestedTextStyle)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>content</code></td><td><p><code>string</code></p><p>The text of this run.</p><p>Any non-text elements in the run are replaced with the Unicode character U+E907.</p></td></tr><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. A <code>TextRun</code> may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of this run.</p></td></tr><tr><td><code>suggestedTextStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTextStyle</code>))</code></p><p>The suggested text style changes to this run, keyed by suggestion ID.</p></td></tr></tbody></table>

## TextStyle

Represents the styling that can be applied to text.

Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined:

- The TextStyle of text in a `Paragraph` inherits from the paragraph's corresponding `named style type`.
- The TextStyle on a `named style` inherits from the `normal text` named style.
- The TextStyle of the `normal text` named style inherits from the default text style in the Docs editor.
- The TextStyle on a `Paragraph` element that's contained in a table may inherit its text style from the table style.

If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.

JSON representation

```
{
  "bold": boolean,
  "italic": boolean,
  "underline": boolean,
  "strikethrough": boolean,
  "smallCaps": boolean,
  "backgroundColor": {
    object (OptionalColor)
  },
  "foregroundColor": {
    object (OptionalColor)
  },
  "fontSize": {
    object (Dimension)
  },
  "weightedFontFamily": {
    object (WeightedFontFamily)
  },
  "baselineOffset": enum (BaselineOffset),
  "link": {
    object (Link)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bold</code></td><td><p><code>boolean</code></p><p>Whether or not the text is rendered as bold.</p></td></tr><tr><td><code>italic</code></td><td><p><code>boolean</code></p><p>Whether or not the text is italicized.</p></td></tr><tr><td><code>underline</code></td><td><p><code>boolean</code></p><p>Whether or not the text is underlined.</p></td></tr><tr><td><code>strikethrough</code></td><td><p><code>boolean</code></p><p>Whether or not the text is struck through.</p></td></tr><tr><td><code>smallCaps</code></td><td><p><code>boolean</code></p><p>Whether or not the text is in small capital letters.</p></td></tr><tr><td><code>backgroundColor</code></td><td><p><code>object (<code>OptionalColor</code>)</code></p><p>The background color of the text. If set, the color is either an RGB color or transparent, depending on the <code>color</code> field.</p></td></tr><tr><td><code>foregroundColor</code></td><td><p><code>object (<code>OptionalColor</code>)</code></p><p>The foreground color of the text. If set, the color is either an RGB color or transparent, depending on the <code>color</code> field.</p></td></tr><tr><td><code>fontSize</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The size of the text's font.</p></td></tr><tr><td><code>weightedFontFamily</code></td><td><p><code>object (<code>WeightedFontFamily</code>)</code></p><p>The font family and rendered weight of the text.</p><p>If an update request specifies values for both <code>weightedFontFamily</code> and <code>bold</code>, the <code>weightedFontFamily</code> is applied first, then <code>bold</code>.</p><p>If <code>weightedFontFamily#weight</code> is not set, it defaults to <code>400</code>.</p><p>If <code>weightedFontFamily</code> is set, then <code>weightedFontFamily#fontFamily</code> must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.</p></td></tr><tr><td><code>baselineOffset</code></td><td><p><code>enum (<code>BaselineOffset</code>)</code></p><p>The text's vertical offset from its normal position.</p><p>Text with <code>SUPERSCRIPT</code> or <code>SUBSCRIPT</code> baseline offsets is automatically rendered in a smaller font size, computed based on the <code>fontSize</code> field. Changes in this field don't affect the <code>fontSize</code>.</p></td></tr><tr><td><code>link</code></td><td><p><code>object (<code>Link</code>)</code></p><p>The hyperlink destination of the text. If unset, there's no link. Links are not inherited from parent text.</p><p>Changing the link in an update request causes some other changes to the text style of the range:</p><ul><li>When setting a link, the text foreground color will be updated to the default link color and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults.</li><li>Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL.</li><li>Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as <code>"ABC\n123"</code>, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline.</li><li>Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.</li></ul></td></tr></tbody></table>

## OptionalColor

A color that can either be fully opaque or fully transparent.

JSON representation

```
{
  "color": {
    object (Color)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>color</code></td><td><p><code>object (<code>Color</code>)</code></p><p>If set, this will be used as an opaque color. If unset, this represents a transparent color.</p></td></tr></tbody></table>

## Color

A solid color.

JSON representation

```
{
  "rgbColor": {
    object (RgbColor)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rgbColor</code></td><td><p><code>object (<code>RgbColor</code>)</code></p><p>The RGB color value.</p></td></tr></tbody></table>

## RgbColor

An RGB color.

JSON representation

```
{
  "red": number,
  "green": number,
  "blue": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>red</code></td><td><p><code>number</code></p><p>The red component of the color, from 0.0 to 1.0.</p></td></tr><tr><td><code>green</code></td><td><p><code>number</code></p><p>The green component of the color, from 0.0 to 1.0.</p></td></tr><tr><td><code>blue</code></td><td><p><code>number</code></p><p>The blue component of the color, from 0.0 to 1.0.</p></td></tr></tbody></table>

## Dimension

A magnitude in a single direction in the specified units.

JSON representation

```
{
  "magnitude": number,
  "unit": enum (Unit)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>magnitude</code></td><td><p><code>number</code></p><p>The magnitude.</p></td></tr><tr><td><code>unit</code></td><td><p><code>enum (<code>Unit</code>)</code></p><p>The units for magnitude.</p></td></tr></tbody></table>

## Unit

Units of measurement.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNIT_UNSPECIFIED</code></td><td>The units are unknown.</td></tr><tr><td><code>PT</code></td><td>A point, 1/72 of an inch.</td></tr></tbody></table>

## WeightedFontFamily

Represents a font family and weight of text.

JSON representation

```
{
  "fontFamily": string,
  "weight": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fontFamily</code></td><td><p><code>string</code></p><p>The font family of the text.</p><p>The font family can be any font from the Font menu in Docs or from <a href="https://fonts.google.com/">Google Fonts</a>. If the font name is unrecognized, the text is rendered in <code>Arial</code>.</p></td></tr><tr><td><code>weight</code></td><td><p><code>integer</code></p><p>The weight of the font. This field can have any value that's a multiple of <code>100</code> between <code>100</code> and <code>900</code>, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, <a href="https://www.w3.org/TR/CSS21/fonts.html#font-boldness">section 15.6</a>, with non-numerical values disallowed.</p><p>The default value is <code>400</code> ("normal").</p><p>The font weight makes up just one component of the rendered font weight. A combination of the <code>weight</code> and the text style's resolved <code>bold</code> value determine the rendered weight, after accounting for inheritance:</p><ul><li>If the text is bold and the weight is less than <code>400</code>, the rendered weight is 400.</li><li>If the text is bold and the weight is greater than or equal to <code>400</code> but is less than <code>700</code>, the rendered weight is <code>700</code>.</li><li>If the weight is greater than or equal to <code>700</code>, the rendered weight is equal to the weight.</li><li>If the text is not bold, the rendered weight is equal to the weight.</li></ul></td></tr></tbody></table>

## BaselineOffset

The ways in which text can be vertically offset from its normal position.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASELINE_OFFSET_UNSPECIFIED</code></td><td>The text's baseline offset is inherited from the parent.</td></tr><tr><td><code>NONE</code></td><td>The text is not vertically offset.</td></tr><tr><td><code>SUPERSCRIPT</code></td><td>The text is vertically offset upwards (superscript).</td></tr><tr><td><code>SUBSCRIPT</code></td><td>The text is vertically offset downwards (subscript).</td></tr></tbody></table>

## Link

A reference to another portion of a document or an external URL resource.

JSON representation

```
{

  "url": string,
  "tabId": string,
  "bookmark": {
    object (BookmarkLink)
  },
  "heading": {
    object (HeadingLink)
  },
  "bookmarkId": string,
  "headingId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>destination</code>. The link destination. <code>destination</code> can be only one of the following:</td></tr><tr><td><code>url</code></td><td><p><code>string</code></p><p>An external URL.</p></td></tr><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The ID of a tab in this document.</p></td></tr><tr><td><code>bookmark</code></td><td><p><code>object (<code>BookmarkLink</code>)</code></p><p>A bookmark in this document.</p><p>In documents containing a single tab, links to bookmarks within the singular tab continue to return <code>Link.bookmarkId</code> when the <code>includeTabsContent</code> parameter is set to <code>false</code> or unset. Otherwise, this field is returned.</p></td></tr><tr><td><code>heading</code></td><td><p><code>object (<code>HeadingLink</code>)</code></p><p>A heading in this document.</p><p>In documents containing a single tab, links to headings within the singular tab continue to return <code>Link.headingId</code> when the <code>includeTabsContent</code> parameter is set to <code>false</code> or unset. Otherwise, this field is returned.</p></td></tr><tr><td><code>bookmarkId</code></td><td><p><code>string</code></p><p>The ID of a bookmark in this document.</p><p>Legacy field: Instead, set <code>includeTabsContent</code> to <code>true</code> and use <code>Link.bookmark</code> for read and write operations. This field is only returned when <code>includeTabsContent</code> is set to <code>false</code> in documents containing a single tab and links to a bookmark within the singular tab. Otherwise, <code>Link.bookmark</code> is returned.</p><p>If this field is used in a write request, the bookmark is considered to be from the tab ID specified in the request. If a tab ID is not specified in the request, it is considered to be from the first tab in the document.</p></td></tr><tr><td><code>headingId</code></td><td><p><code>string</code></p><p>The ID of a heading in this document.</p><p>Legacy field: Instead, set <code>includeTabsContent</code> to <code>true</code> and use <code>Link.heading</code> for read and write operations. This field is only returned when <code>includeTabsContent</code> is set to <code>false</code> in documents containing a single tab and links to a heading within the singular tab. Otherwise, <code>Link.heading</code> is returned.</p><p>If this field is used in a write request, the heading is considered to be from the tab ID specified in the request. If a tab ID is not specified in the request, it is considered to be from the first tab in the document.</p></td></tr></tbody></table>

## BookmarkLink

A reference to a bookmark in this document.

JSON representation

```
{
  "id": string,
  "tabId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of a bookmark in this document.</p></td></tr><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The ID of the tab containing this bookmark.</p></td></tr></tbody></table>

## HeadingLink

A reference to a heading in this document.

JSON representation

```
{
  "id": string,
  "tabId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of a heading in this document.</p></td></tr><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The ID of the tab containing this heading.</p></td></tr></tbody></table>

## SuggestedTextStyle

A suggested change to a `TextStyle`.

JSON representation

```
{
  "textStyle": {
    object (TextStyle)
  },
  "textStyleSuggestionState": {
    object (TextStyleSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>A <code>TextStyle</code> that only includes the changes made in this suggestion. This can be used along with the <code>textStyleSuggestionState</code> to see which fields have changed and their new values.</p></td></tr><tr><td><code>textStyleSuggestionState</code></td><td><p><code>object (<code>TextStyleSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the base <code>TextStyle</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## TextStyleSuggestionState

A mask that indicates which of the fields on the base `TextStyle` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "boldSuggested": boolean,
  "italicSuggested": boolean,
  "underlineSuggested": boolean,
  "strikethroughSuggested": boolean,
  "smallCapsSuggested": boolean,
  "backgroundColorSuggested": boolean,
  "foregroundColorSuggested": boolean,
  "fontSizeSuggested": boolean,
  "weightedFontFamilySuggested": boolean,
  "baselineOffsetSuggested": boolean,
  "linkSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>boldSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>bold</code>.</p></td></tr><tr><td><code>italicSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>italic</code>.</p></td></tr><tr><td><code>underlineSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>underline</code>.</p></td></tr><tr><td><code>strikethroughSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>strikethrough</code>.</p></td></tr><tr><td><code>smallCapsSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>smallCaps</code>.</p></td></tr><tr><td><code>backgroundColorSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>backgroundColor</code>.</p></td></tr><tr><td><code>foregroundColorSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>foregroundColor</code>.</p></td></tr><tr><td><code>fontSizeSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>fontSize</code>.</p></td></tr><tr><td><code>weightedFontFamilySuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>weightedFontFamily</code>.</p></td></tr><tr><td><code>baselineOffsetSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>baselineOffset</code>.</p></td></tr><tr><td><code>linkSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>link</code>.</p></td></tr></tbody></table>

## AutoText

A `ParagraphElement` representing a spot in the text that's dynamically replaced with content that can change over time, like a page number.

JSON representation

```
{
  "type": enum (Type),
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "textStyle": {
    object (TextStyle)
  },
  "suggestedTextStyleChanges": {
    string: {
      object (SuggestedTextStyle)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of this auto text.</p></td></tr><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. An <code>AutoText</code> may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of this AutoText.</p></td></tr><tr><td><code>suggestedTextStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTextStyle</code>))</code></p><p>The suggested text style changes to this AutoText, keyed by suggestion ID.</p></td></tr></tbody></table>

## Type

The types of auto text.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>An unspecified auto text type.</td></tr><tr><td><code>PAGE_NUMBER</code></td><td>Type for auto text that represents the current page number.</td></tr><tr><td><code>PAGE_COUNT</code></td><td>Type for auto text that represents the total number of pages in the document.</td></tr></tbody></table>

## PageBreak

A `ParagraphElement` representing a page break. A page break makes the subsequent text start at the top of the next page.

JSON representation

```
{
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "textStyle": {
    object (TextStyle)
  },
  "suggestedTextStyleChanges": {
    string: {
      object (SuggestedTextStyle)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. A <code>PageBreak</code> may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of this PageBreak.</p><p>Similar to text content, like text runs and footnote references, the text style of a page break can affect content layout as well as the styling of text inserted next to it.</p></td></tr><tr><td><code>suggestedTextStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTextStyle</code>))</code></p><p>The suggested text style changes to this PageBreak, keyed by suggestion ID.</p></td></tr></tbody></table>

## ColumnBreak

A `ParagraphElement` representing a column break. A column break makes the subsequent text start at the top of the next column.

JSON representation

```
{
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "textStyle": {
    object (TextStyle)
  },
  "suggestedTextStyleChanges": {
    string: {
      object (SuggestedTextStyle)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. A <code>ColumnBreak</code> may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of this ColumnBreak.</p><p>Similar to text content, like text runs and footnote references, the text style of a column break can affect content layout as well as the styling of text inserted next to it.</p></td></tr><tr><td><code>suggestedTextStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTextStyle</code>))</code></p><p>The suggested text style changes to this ColumnBreak, keyed by suggestion ID.</p></td></tr></tbody></table>

## FootnoteReference

A `ParagraphElement` representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.

JSON representation

```
{
  "footnoteId": string,
  "footnoteNumber": string,
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "textStyle": {
    object (TextStyle)
  },
  "suggestedTextStyleChanges": {
    string: {
      object (SuggestedTextStyle)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>footnoteId</code></td><td><p><code>string</code></p><p>The ID of the <code>footnote</code> that contains the content of this footnote reference.</p></td></tr><tr><td><code>footnoteNumber</code></td><td><p><code>string</code></p><p>The rendered number of this footnote.</p></td></tr><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. A <code>FootnoteReference</code> may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of this FootnoteReference.</p></td></tr><tr><td><code>suggestedTextStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTextStyle</code>))</code></p><p>The suggested text style changes to this FootnoteReference, keyed by suggestion ID.</p></td></tr></tbody></table>

## HorizontalRule

A `ParagraphElement` representing a horizontal line.

JSON representation

```
{
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "textStyle": {
    object (TextStyle)
  },
  "suggestedTextStyleChanges": {
    string: {
      object (SuggestedTextStyle)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. A <code>HorizontalRule</code> may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of this HorizontalRule.</p><p>Similar to text content, like text runs and footnote references, the text style of a horizontal rule can affect content layout as well as the styling of text inserted next to it.</p></td></tr><tr><td><code>suggestedTextStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTextStyle</code>))</code></p><p>The suggested text style changes to this HorizontalRule, keyed by suggestion ID.</p></td></tr></tbody></table>

## Equation

A `ParagraphElement` representing an equation.

JSON representation

```
{
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. An <code>Equation</code> may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr></tbody></table>

## InlineObjectElement

A `ParagraphElement` that contains an `InlineObject`.

JSON representation

```
{
  "inlineObjectId": string,
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "textStyle": {
    object (TextStyle)
  },
  "suggestedTextStyleChanges": {
    string: {
      object (SuggestedTextStyle)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>inlineObjectId</code></td><td><p><code>string</code></p><p>The ID of the <code>InlineObject</code> this element contains.</p></td></tr><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. An <code>InlineObjectElement</code> may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of this InlineObjectElement.</p><p>Similar to text content, like text runs and footnote references, the text style of an inline object element can affect content layout as well as the styling of text inserted next to it.</p></td></tr><tr><td><code>suggestedTextStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTextStyle</code>))</code></p><p>The suggested text style changes to this InlineObject, keyed by suggestion ID.</p></td></tr></tbody></table>

## Person

A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.

JSON representation

```
{
  "personId": string,
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "textStyle": {
    object (TextStyle)
  },
  "suggestedTextStyleChanges": {
    string: {
      object (SuggestedTextStyle)
    },
    ...
  },
  "personProperties": {
    object (PersonProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>personId</code></td><td><p><code>string</code></p><p>Output only. The unique ID of this link.</p></td></tr><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>IDs for suggestions that insert this person link into the document. A <code>Person</code> might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn't a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>IDs for suggestions that remove this person link from the document. A <code>Person</code> might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn't suggested for deletion.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of this <code>Person</code>.</p></td></tr><tr><td><code>suggestedTextStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTextStyle</code>))</code></p><p>The suggested text style changes to this <code>Person</code>, keyed by suggestion ID.</p></td></tr><tr><td><code>personProperties</code></td><td><p><code>object (<code>PersonProperties</code>)</code></p><p>Output only. The properties of this <code>Person</code>. This field is always present.</p></td></tr></tbody></table>

## PersonProperties

Properties specific to a linked `Person`.

JSON representation

```
{
  "name": string,
  "email": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the person if it's displayed in the link text instead of the person's email address.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>The email address linked to this <code>Person</code>. This field is always present.</p></td></tr></tbody></table>

## RichLink

A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).

JSON representation

```
{
  "richLinkId": string,
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "textStyle": {
    object (TextStyle)
  },
  "suggestedTextStyleChanges": {
    string: {
      object (SuggestedTextStyle)
    },
    ...
  },
  "richLinkProperties": {
    object (RichLinkProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>richLinkId</code></td><td><p><code>string</code></p><p>Output only. The ID of this link.</p></td></tr><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>IDs for suggestions that insert this link into the document. A <code>RichLink</code> might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn't a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>IDs for suggestions that remove this link from the document. A <code>RichLink</code> might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn't suggested for deletion.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of this <code>RichLink</code>.</p></td></tr><tr><td><code>suggestedTextStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTextStyle</code>))</code></p><p>The suggested text style changes to this <code>RichLink</code>, keyed by suggestion ID.</p></td></tr><tr><td><code>richLinkProperties</code></td><td><p><code>object (<code>RichLinkProperties</code>)</code></p><p>Output only. The properties of this <code>RichLink</code>. This field is always present.</p></td></tr></tbody></table>

## RichLinkProperties

Properties specific to a `RichLink`.

JSON representation

```
{
  "title": string,
  "uri": string,
  "mimeType": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the <code>RichLink</code> as displayed in the link. This title matches the title of the linked resource at the time of the insertion or last update of the link. This field is always present.</p></td></tr><tr><td><code>uri</code></td><td><p><code>string</code></p><p>The URI to the <code>RichLink</code>. This is always present.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/drive/api/v3/mime-types">MIME type</a> of the <code>RichLink</code>, if there's one (for example, when it's a file in Drive).</p></td></tr></tbody></table>

## DateElement

A date instance mentioned in a document.

JSON representation

```
{
  "dateId": string,
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "textStyle": {
    object (TextStyle)
  },
  "suggestedTextStyleChanges": {
    string: {
      object (SuggestedTextStyle)
    },
    ...
  },
  "dateElementProperties": {
    object (DateElementProperties)
  },
  "suggestedDateElementPropertiesChanges": {
    string: {
      object (SuggestedDateElementProperties)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dateId</code></td><td><p><code>string</code></p><p>Output only. The unique ID of this date.</p></td></tr><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>IDs for suggestions that insert this date into the document. A DateElement might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this date isn't a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>IDs for suggestions that remove this date from the document. A DateElement might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this date isn't suggested for deletion.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of this DateElement.</p></td></tr><tr><td><code>suggestedTextStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTextStyle</code>))</code></p><p>The suggested text style changes to this DateElement, keyed by suggestion ID.</p></td></tr><tr><td><code>dateElementProperties</code></td><td><p><code>object (<code>DateElementProperties</code>)</code></p><p>The properties of this DateElement.</p></td></tr><tr><td><code>suggestedDateElementPropertiesChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedDateElementProperties</code>))</code></p><p>The suggested changes to the date element properties, keyed by suggestion ID.</p></td></tr></tbody></table>

## DateElementProperties

Properties of a `DateElement`.

JSON representation

```
{
  "timestamp": string,
  "timeZoneId": string,
  "locale": string,
  "dateFormat": enum (DateFormat),
  "timeFormat": enum (TimeFormat),
  "displayText": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>timeZoneId</code></td><td><p><code>string</code></p><p>The time zone of the DateElement, as defined by the Unicode Common Locale Data Repository (CLDR) project. For example, <code>America/New_York</code>. If unset, the default time zone is <code>etc/UTC</code>.</p></td></tr><tr><td><code>locale</code></td><td><p><code>string</code></p><p>The language code of the DateElement. For example, <code>en</code>. If unset, the default locale is <code>en</code>.</p><p>Limited to the following locales: <code>af</code>, <code>am</code>, <code>ar</code>, <code>as</code>, <code>az</code>, <code>be</code>, <code>bg</code>, <code>bn</code>, <code>ca</code>, <code>cs</code>, <code>da</code>, <code>de</code>, <code>el</code>, <code>en</code>, <code>en-CA</code>, <code>en-GB</code>, <code>es</code>, <code>es-419</code>, <code>et</code>, <code>eu</code>, <code>fa</code>, <code>fi</code>, <code>fil</code>, <code>fr</code>, <code>fr-CA</code>, <code>gl</code>, <code>gu</code>, <code>hi</code>, <code>hr</code>, <code>hu</code>, <code>hy</code>, <code>id</code>, <code>is</code>, <code>it</code>, <code>iw</code>, <code>ja</code>, <code>ka</code>, <code>kk</code>, <code>km</code>, <code>kn</code>, <code>ko</code>, <code>lo</code>, <code>lt</code>, <code>lv</code>, <code>mk</code>, <code>ml</code>, <code>mn</code>, <code>mr</code>, <code>ms</code>, <code>ne</code>, <code>nl</code>, <code>no</code>, <code>or</code>, <code>pa</code>, <code>pl</code>, <code>pt-BR</code>, <code>pt-PT</code>, <code>ro</code>, <code>ru</code>, <code>si</code>, <code>sk</code>, <code>sl</code>, <code>sq</code>, <code>sr</code>, <code>sv</code>, <code>sw</code>, <code>ta</code>, <code>te</code>, <code>th</code>, <code>tr</code>, <code>uk</code>, <code>ur</code>, <code>uz</code>, <code>vi</code>, <code>zh-CN</code>, <code>zh-HK</code>, <code>zh-TW</code>, <code>zu</code>, <code>cy</code>, <code>my</code>.</p></td></tr><tr><td><code>dateFormat</code></td><td><p><code>enum (<code>DateFormat</code>)</code></p><p>Determines how the date part of the DateElement will be displayed in the document.</p><p>If unset, the default value is DATE_FORMAT_MONTH_DAY_YEAR_ABBREVIATED, indicating the DateElement will be formatted as <code>MMM d, y</code> in <code>en</code>, or locale specific equivalent.</p></td></tr><tr><td><code>timeFormat</code></td><td><p><code>enum (<code>TimeFormat</code>)</code></p><p>Determines how the time part of the DateElement will be displayed in the document.</p><p>If unset, the default value is TIME_FORMAT_DISABLED, indicating no time should be shown.</p></td></tr><tr><td><code>displayText</code></td><td><p><code>string</code></p><p>Output only. Indicates how the DateElement is displayed in the document.</p></td></tr></tbody></table>

## DateFormat

The possible date formats of `DateElement`.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DATE_FORMAT_UNSPECIFIED</code></td><td>The date format is unspecified.</td></tr><tr><td><code>DATE_FORMAT_CUSTOM</code></td><td>Output only. The date format is imported from an external source.</td></tr><tr><td><code>DATE_FORMAT_MONTH_DAY_ABBREVIATED</code></td><td>The date format is an abbreviated month followed by the day. For example, "Jan 1".</td></tr><tr><td><code>DATE_FORMAT_MONTH_DAY_FULL</code></td><td>The date format is a month followed by the day. For example, "January 01".</td></tr><tr><td><code>DATE_FORMAT_MONTH_DAY_YEAR_ABBREVIATED</code></td><td>The date format is an abbreviated month followed by the day and the year. For example, "Jan 1, 1970".</td></tr><tr><td><code>DATE_FORMAT_ISO8601</code></td><td>The date format is in ISO 8601 format. For example, "1970-01-01".</td></tr></tbody></table>

## TimeFormat

The possible time formats of `DateElement`.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TIME_FORMAT_UNSPECIFIED</code></td><td>The time format is unspecified.</td></tr><tr><td><code>TIME_FORMAT_DISABLED</code></td><td>Indicates that the date does not have a time.</td></tr><tr><td><code>TIME_FORMAT_HOUR_MINUTE</code></td><td>The time format shows the hour and minute. For example, "Jan 1, 1970 12:00 PM".</td></tr><tr><td><code>TIME_FORMAT_HOUR_MINUTE_TIMEZONE</code></td><td>The time format shows the hour, minute, and timezone. For example, "Jan 1, 1970 12:00 PM UTC".</td></tr></tbody></table>

## SuggestedDateElementProperties

A suggested change to a `DateElementProperties`.

JSON representation

```
{
  "dateElementProperties": {
    object (DateElementProperties)
  },
  "dateElementPropertiesSuggestionState": {
    object (DateElementPropertiesSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dateElementProperties</code></td><td><p><code>object (<code>DateElementProperties</code>)</code></p><p><code>DateElementProperties</code> that only includes the changes made in this suggestion. This can be used along with the <code>dateElementPropertiesSuggestionState</code> to see which fields have changed and their new values.</p></td></tr><tr><td><code>dateElementPropertiesSuggestionState</code></td><td><p><code>object (<code>DateElementPropertiesSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the base <code>DateElementProperties</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## DateElementPropertiesSuggestionState

A mask that indicates which of the fields on the base `DateElementProperties` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "timestampSuggested": boolean,
  "timeZoneIdSuggested": boolean,
  "localeSuggested": boolean,
  "dateFormatSuggested": boolean,
  "timeFormatSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>timeZoneIdSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>timeZoneId</code>.</p></td></tr><tr><td><code>localeSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>locale</code>.</p></td></tr><tr><td><code>dateFormatSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>dateFormat</code>.</p></td></tr><tr><td><code>timeFormatSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>timeFormat</code>.</p></td></tr></tbody></table>

## ParagraphStyle

Styles that apply to a whole paragraph.

Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined:

- The ParagraphStyle on a `Paragraph` inherits from the paragraph's corresponding `named style type`.
- The ParagraphStyle on a `named style` inherits from the `normal text` named style.
- The ParagraphStyle of the `normal text` named style inherits from the default paragraph style in the Docs editor.
- The ParagraphStyle on a `Paragraph` element that's contained in a table may inherit its paragraph style from the table style.

If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.

JSON representation

```
{
  "headingId": string,
  "namedStyleType": enum (NamedStyleType),
  "alignment": enum (Alignment),
  "lineSpacing": number,
  "direction": enum (ContentDirection),
  "spacingMode": enum (SpacingMode),
  "spaceAbove": {
    object (Dimension)
  },
  "spaceBelow": {
    object (Dimension)
  },
  "borderBetween": {
    object (ParagraphBorder)
  },
  "borderTop": {
    object (ParagraphBorder)
  },
  "borderBottom": {
    object (ParagraphBorder)
  },
  "borderLeft": {
    object (ParagraphBorder)
  },
  "borderRight": {
    object (ParagraphBorder)
  },
  "indentFirstLine": {
    object (Dimension)
  },
  "indentStart": {
    object (Dimension)
  },
  "indentEnd": {
    object (Dimension)
  },
  "tabStops": [
    {
      object (TabStop)
    }
  ],
  "keepLinesTogether": boolean,
  "keepWithNext": boolean,
  "avoidWidowAndOrphan": boolean,
  "shading": {
    object (Shading)
  },
  "pageBreakBefore": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>headingId</code></td><td><p><code>string</code></p><p>The heading ID of the paragraph. If empty, then this paragraph is not a heading.</p><p>This property is read-only.</p></td></tr><tr><td><code>namedStyleType</code></td><td><p><code>enum (<code>NamedStyleType</code>)</code></p><p>The named style type of the paragraph.</p><p>Since updating the named style type affects other properties within ParagraphStyle, the named style type is applied before the other properties are updated.</p></td></tr><tr><td><code>alignment</code></td><td><p><code>enum (<code>Alignment</code>)</code></p><p>The text alignment for this paragraph.</p></td></tr><tr><td><code>lineSpacing</code></td><td><p><code>number</code></p><p>The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>direction</code></td><td><p><code>enum (<code>ContentDirection</code>)</code></p><p>The text direction of this paragraph. If unset, the value defaults to <code>LEFT_TO_RIGHT</code> since paragraph direction is not inherited.</p></td></tr><tr><td><code>spacingMode</code></td><td><p><code>enum (<code>SpacingMode</code>)</code></p><p>The spacing mode for the paragraph.</p></td></tr><tr><td><code>spaceAbove</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount of extra space above the paragraph. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>spaceBelow</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount of extra space below the paragraph. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>borderBetween</code></td><td><p><code>object (<code>ParagraphBorder</code>)</code></p><p>The border between this paragraph and the next and previous paragraphs. If unset, the value is inherited from the parent.</p><p>The between border is rendered when the adjacent paragraph has the same border and indent properties.</p><p>Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.</p></td></tr><tr><td><code>borderTop</code></td><td><p><code>object (<code>ParagraphBorder</code>)</code></p><p>The border at the top of this paragraph. If unset, the value is inherited from the parent.</p><p>The top border is rendered when the paragraph above has different border and indent properties.</p><p>Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.</p></td></tr><tr><td><code>borderBottom</code></td><td><p><code>object (<code>ParagraphBorder</code>)</code></p><p>The border at the bottom of this paragraph. If unset, the value is inherited from the parent.</p><p>The bottom border is rendered when the paragraph below has different border and indent properties.</p><p>Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.</p></td></tr><tr><td><code>borderLeft</code></td><td><p><code>object (<code>ParagraphBorder</code>)</code></p><p>The border to the left of this paragraph. If unset, the value is inherited from the parent.</p><p>Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.</p></td></tr><tr><td><code>borderRight</code></td><td><p><code>object (<code>ParagraphBorder</code>)</code></p><p>The border to the right of this paragraph. If unset, the value is inherited from the parent.</p><p>Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.</p></td></tr><tr><td><code>indentFirstLine</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount of indentation for the first line of the paragraph. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>indentStart</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount of indentation for the paragraph on the side that corresponds to the start of the text, based on the current paragraph direction. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>indentEnd</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount of indentation for the paragraph on the side that corresponds to the end of the text, based on the current paragraph direction. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>tabStops[]</code></td><td><p><code>object (<code>TabStop</code>)</code></p><p>A list of the tab stops for this paragraph. The list of tab stops is not inherited.</p><p>This property is read-only.</p></td></tr><tr><td><code>keepLinesTogether</code></td><td><p><code>boolean</code></p><p>Whether all lines of the paragraph should be laid out on the same page or column if possible. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>keepWithNext</code></td><td><p><code>boolean</code></p><p>Whether at least a part of this paragraph should be laid out on the same page or column as the next paragraph if possible. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>avoidWidowAndOrphan</code></td><td><p><code>boolean</code></p><p>Whether to avoid widows and orphans for the paragraph. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>shading</code></td><td><p><code>object (<code>Shading</code>)</code></p><p>The shading of the paragraph. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>pageBreakBefore</code></td><td><p><code>boolean</code></p><p>Whether the current paragraph should always start at the beginning of a page. If unset, the value is inherited from the parent.</p><p>Attempting to update <code>pageBreakBefore</code> for paragraphs in unsupported regions, including <code>Table</code>, <code>Header</code>, <code>Footer</code> and <code>Footnote</code>, can result in an invalid document state that returns a 400 bad request error.</p></td></tr></tbody></table>

## NamedStyleType

The types of named styles.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NAMED_STYLE_TYPE_UNSPECIFIED</code></td><td>The type of named style is unspecified.</td></tr><tr><td><code>NORMAL_TEXT</code></td><td>Normal text.</td></tr><tr><td><code>TITLE</code></td><td>Title.</td></tr><tr><td><code>SUBTITLE</code></td><td>Subtitle.</td></tr><tr><td><code>HEADING_1</code></td><td>Heading 1.</td></tr><tr><td><code>HEADING_2</code></td><td>Heading 2.</td></tr><tr><td><code>HEADING_3</code></td><td>Heading 3.</td></tr><tr><td><code>HEADING_4</code></td><td>Heading 4.</td></tr><tr><td><code>HEADING_5</code></td><td>Heading 5.</td></tr><tr><td><code>HEADING_6</code></td><td>Heading 6.</td></tr></tbody></table>

## Alignment

The types of text alignment for a paragraph.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ALIGNMENT_UNSPECIFIED</code></td><td>The paragraph alignment is inherited from the parent.</td></tr><tr><td><code>START</code></td><td>The paragraph is aligned to the start of the line. Left-aligned for LTR text, right-aligned otherwise.</td></tr><tr><td><code>CENTER</code></td><td>The paragraph is centered.</td></tr><tr><td><code>END</code></td><td>The paragraph is aligned to the end of the line. Right-aligned for LTR text, left-aligned otherwise.</td></tr><tr><td><code>JUSTIFIED</code></td><td>The paragraph is justified.</td></tr></tbody></table>

## ContentDirection

The directions content can flow in.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CONTENT_DIRECTION_UNSPECIFIED</code></td><td>The content direction is unspecified.</td></tr><tr><td><code>LEFT_TO_RIGHT</code></td><td>The content goes from left to right.</td></tr><tr><td><code>RIGHT_TO_LEFT</code></td><td>The content goes from right to left.</td></tr></tbody></table>

## SpacingMode

The different modes for paragraph spacing.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SPACING_MODE_UNSPECIFIED</code></td><td>The spacing mode is inherited from the parent.</td></tr><tr><td><code>NEVER_COLLAPSE</code></td><td>Paragraph spacing is always rendered.</td></tr><tr><td><code>COLLAPSE_LISTS</code></td><td>Paragraph spacing is skipped between list elements.</td></tr></tbody></table>

## ParagraphBorder

A border around a paragraph.

JSON representation

```
{
  "color": {
    object (OptionalColor)
  },
  "width": {
    object (Dimension)
  },
  "padding": {
    object (Dimension)
  },
  "dashStyle": enum (DashStyle)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>color</code></td><td><p><code>object (<code>OptionalColor</code>)</code></p><p>The color of the border.</p></td></tr><tr><td><code>width</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The width of the border.</p></td></tr><tr><td><code>padding</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The padding of the border.</p></td></tr><tr><td><code>dashStyle</code></td><td><p><code>enum (<code>DashStyle</code>)</code></p><p>The dash style of the border.</p></td></tr></tbody></table>

## DashStyle

The kinds of dashes with which linear geometry can be rendered. These values are based on the "ST\_PresetLineDashVal" simple type described in section 20.1.10.49 of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DASH_STYLE_UNSPECIFIED</code></td><td>Unspecified dash style.</td></tr><tr><td><code>SOLID</code></td><td>Solid line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'solid'. This is the default dash style.</td></tr><tr><td><code>DOT</code></td><td>Dotted line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dot'.</td></tr><tr><td><code>DASH</code></td><td>Dashed line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dash'.</td></tr></tbody></table>

## TabStop

A tab stop within a paragraph.

JSON representation

```
{
  "offset": {
    object (Dimension)
  },
  "alignment": enum (TabStopAlignment)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>offset</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The offset between this tab stop and the start margin.</p></td></tr><tr><td><code>alignment</code></td><td><p><code>enum (<code>TabStopAlignment</code>)</code></p><p>The alignment of this tab stop. If unset, the value defaults to <code>START</code>.</p></td></tr></tbody></table>

## TabStopAlignment

The alignment of the tab stop.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TAB_STOP_ALIGNMENT_UNSPECIFIED</code></td><td>The tab stop alignment is unspecified.</td></tr><tr><td><code>START</code></td><td>The tab stop is aligned to the start of the line. This is the default.</td></tr><tr><td><code>CENTER</code></td><td>The tab stop is aligned to the center of the line.</td></tr><tr><td><code>END</code></td><td>The tab stop is aligned to the end of the line.</td></tr></tbody></table>

## Shading

The shading of a paragraph.

JSON representation

```
{
  "backgroundColor": {
    object (OptionalColor)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td><p><code>object (<code>OptionalColor</code>)</code></p><p>The background color of this paragraph shading.</p></td></tr></tbody></table>

## SuggestedParagraphStyle

A suggested change to a `ParagraphStyle`.

JSON representation

```
{
  "paragraphStyle": {
    object (ParagraphStyle)
  },
  "paragraphStyleSuggestionState": {
    object (ParagraphStyleSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>paragraphStyle</code></td><td><p><code>object (<code>ParagraphStyle</code>)</code></p><p>A <code>ParagraphStyle</code> that only includes the changes made in this suggestion. This can be used along with the <code>paragraphStyleSuggestionState</code> to see which fields have changed and their new values.</p></td></tr><tr><td><code>paragraphStyleSuggestionState</code></td><td><p><code>object (<code>ParagraphStyleSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the base <code>ParagraphStyle</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## ParagraphStyleSuggestionState

A mask that indicates which of the fields on the base `ParagraphStyle` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "headingIdSuggested": boolean,
  "namedStyleTypeSuggested": boolean,
  "alignmentSuggested": boolean,
  "lineSpacingSuggested": boolean,
  "directionSuggested": boolean,
  "spacingModeSuggested": boolean,
  "spaceAboveSuggested": boolean,
  "spaceBelowSuggested": boolean,
  "borderBetweenSuggested": boolean,
  "borderTopSuggested": boolean,
  "borderBottomSuggested": boolean,
  "borderLeftSuggested": boolean,
  "borderRightSuggested": boolean,
  "indentFirstLineSuggested": boolean,
  "indentStartSuggested": boolean,
  "indentEndSuggested": boolean,
  "keepLinesTogetherSuggested": boolean,
  "keepWithNextSuggested": boolean,
  "avoidWidowAndOrphanSuggested": boolean,
  "shadingSuggestionState": {
    object (ShadingSuggestionState)
  },
  "pageBreakBeforeSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>headingIdSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>headingId</code>.</p></td></tr><tr><td><code>namedStyleTypeSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>namedStyleType</code>.</p></td></tr><tr><td><code>alignmentSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>alignment</code>.</p></td></tr><tr><td><code>lineSpacingSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>lineSpacing</code>.</p></td></tr><tr><td><code>directionSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>direction</code>.</p></td></tr><tr><td><code>spacingModeSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>spacingMode</code>.</p></td></tr><tr><td><code>spaceAboveSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>spaceAbove</code>.</p></td></tr><tr><td><code>spaceBelowSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>spaceBelow</code>.</p></td></tr><tr><td><code>borderBetweenSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>borderBetween</code>.</p></td></tr><tr><td><code>borderTopSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>borderTop</code>.</p></td></tr><tr><td><code>borderBottomSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>borderBottom</code>.</p></td></tr><tr><td><code>borderLeftSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>borderLeft</code>.</p></td></tr><tr><td><code>borderRightSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>borderRight</code>.</p></td></tr><tr><td><code>indentFirstLineSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>indentFirstLine</code>.</p></td></tr><tr><td><code>indentStartSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>indentStart</code>.</p></td></tr><tr><td><code>indentEndSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>indentEnd</code>.</p></td></tr><tr><td><code>keepLinesTogetherSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>keepLinesTogether</code>.</p></td></tr><tr><td><code>keepWithNextSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>keepWithNext</code>.</p></td></tr><tr><td><code>avoidWidowAndOrphanSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>avoidWidowAndOrphan</code>.</p></td></tr><tr><td><code>shadingSuggestionState</code></td><td><p><code>object (<code>ShadingSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>shading</code> have been changed in this suggestion.</p></td></tr><tr><td><code>pageBreakBeforeSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>pageBreakBefore</code>.</p></td></tr></tbody></table>

## ShadingSuggestionState

A mask that indicates which of the fields on the base `Shading` have been changed in this suggested change. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "backgroundColorSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>backgroundColorSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to the <code>Shading</code>.</p></td></tr></tbody></table>

## Bullet

Describes the bullet of a paragraph.

JSON representation

```
{
  "listId": string,
  "nestingLevel": integer,
  "textStyle": {
    object (TextStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>listId</code></td><td><p><code>string</code></p><p>The ID of the list this paragraph belongs to.</p></td></tr><tr><td><code>nestingLevel</code></td><td><p><code>integer</code></p><p>The nesting level of this paragraph in the list.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The paragraph-specific text style applied to this bullet.</p></td></tr></tbody></table>

## SuggestedBullet

A suggested change to a `Bullet`.

JSON representation

```
{
  "bullet": {
    object (Bullet)
  },
  "bulletSuggestionState": {
    object (BulletSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bullet</code></td><td><p><code>object (<code>Bullet</code>)</code></p><p>A <code>Bullet</code> that only includes the changes made in this suggestion. This can be used along with the <code>bulletSuggestionState</code> to see which fields have changed and their new values.</p></td></tr><tr><td><code>bulletSuggestionState</code></td><td><p><code>object (<code>BulletSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the base <code>Bullet</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## BulletSuggestionState

A mask that indicates which of the fields on the base `Bullet` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "listIdSuggested": boolean,
  "nestingLevelSuggested": boolean,
  "textStyleSuggestionState": {
    object (TextStyleSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>listIdSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to the <code>listId</code>.</p></td></tr><tr><td><code>nestingLevelSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to the <code>nestingLevel</code>.</p></td></tr><tr><td><code>textStyleSuggestionState</code></td><td><p><code>object (<code>TextStyleSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>text style</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## ObjectReferences

A collection of object IDs.

JSON representation

```
{
  "objectIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectIds[]</code></td><td><p><code>string</code></p><p>The object IDs.</p></td></tr></tbody></table>

## SectionBreak

A `StructuralElement` representing a section break. A section is a range of content that has the same `SectionStyle`. A section break represents the start of a new section, and the section style applies to the section after the section break.

The document body always begins with a section break.

JSON representation

```
{
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "sectionStyle": {
    object (SectionStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. A <code>SectionBreak</code> may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr><tr><td><code>sectionStyle</code></td><td><p><code>object (<code>SectionStyle</code>)</code></p><p>The style of the section after this section break.</p></td></tr></tbody></table>

## SectionStyle

The styling that applies to a section.

JSON representation

```
{
  "columnProperties": [
    {
      object (SectionColumnProperties)
    }
  ],
  "columnSeparatorStyle": enum (ColumnSeparatorStyle),
  "contentDirection": enum (ContentDirection),
  "marginTop": {
    object (Dimension)
  },
  "marginBottom": {
    object (Dimension)
  },
  "marginRight": {
    object (Dimension)
  },
  "marginLeft": {
    object (Dimension)
  },
  "marginHeader": {
    object (Dimension)
  },
  "marginFooter": {
    object (Dimension)
  },
  "sectionType": enum (SectionType),
  "defaultHeaderId": string,
  "defaultFooterId": string,
  "firstPageHeaderId": string,
  "firstPageFooterId": string,
  "evenPageHeaderId": string,
  "evenPageFooterId": string,
  "useFirstPageHeaderFooter": boolean,
  "pageNumberStart": integer,
  "flipPageOrientation": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>columnProperties[]</code></td><td><p><code>object (<code>SectionColumnProperties</code>)</code></p><p>The section's columns properties.</p><p>If empty, the section contains one column with the default properties in the Docs editor. A section can be updated to have no more than 3 columns.</p><p>When updating this property, setting a concrete value is required. Unsetting this property will result in a 400 bad request error.</p></td></tr><tr><td><code>columnSeparatorStyle</code></td><td><p><code>enum (<code>ColumnSeparatorStyle</code>)</code></p><p>The style of column separators.</p><p>This style can be set even when there's one column in the section.</p><p>When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.</p></td></tr><tr><td><code>contentDirection</code></td><td><p><code>enum (<code>ContentDirection</code>)</code></p><p>The content direction of this section. If unset, the value defaults to <code>LEFT_TO_RIGHT</code>.</p><p>When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.</p></td></tr><tr><td><code>marginTop</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The top page margin of the section. If unset, the value defaults to <code>marginTop</code> from DocumentStyle.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.</p></td></tr><tr><td><code>marginBottom</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The bottom page margin of the section. If unset, the value defaults to <code>marginBottom</code> from DocumentStyle.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.</p></td></tr><tr><td><code>marginRight</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The right page margin of the section. If unset, the value defaults to <code>marginRight</code> from DocumentStyle. Updating the right margin causes columns in this section to resize. Since the margin affects column width, it's applied before column properties.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.</p></td></tr><tr><td><code>marginLeft</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The left page margin of the section. If unset, the value defaults to <code>marginLeft</code> from DocumentStyle. Updating the left margin causes columns in this section to resize. Since the margin affects column width, it's applied before column properties.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.</p></td></tr><tr><td><code>marginHeader</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The header margin of the section. If unset, the value defaults to <code>marginHeader</code> from DocumentStyle. If updated, <code>useCustomHeaderFooterMargins</code> is set to true on DocumentStyle. The value of useCustomHeaderFooterMargins on DocumentStyle indicates if a header margin is being respected for this section.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.</p></td></tr><tr><td><code>sectionType</code></td><td><p><code>enum (<code>SectionType</code>)</code></p><p>Output only. The type of section.</p></td></tr><tr><td><code>defaultHeaderId</code></td><td><p><code>string</code></p><p>The ID of the default header. If unset, the value inherits from the previous <code>SectionBreak's</code> SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's <code>defaultHeaderId</code>.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>This property is read-only.</p></td></tr><tr><td><code>firstPageHeaderId</code></td><td><p><code>string</code></p><p>The ID of the header used only for the first page of the section. If <code>useFirstPageHeaderFooter</code> is true, this value is used for the header on the first page of the section. If it's false, the header on the first page of the section uses the <code>defaultHeaderId</code>. If unset, the value inherits from the previous <code>SectionBreak's</code> SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's <code>firstPageHeaderId</code>.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>This property is read-only.</p></td></tr><tr><td><code>evenPageHeaderId</code></td><td><p><code>string</code></p><p>The ID of the header used only for even pages. If the value of DocumentStyle's <code>useEvenPageHeaderFooter</code> is true, this value is used for the headers on even pages in the section. If it is false, the headers on even pages use the <code>defaultHeaderId</code>. If unset, the value inherits from the previous <code>SectionBreak's</code> SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's <code>evenPageHeaderId</code>.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>This property is read-only.</p></td></tr><tr><td><code>pageNumberStart</code></td><td><p><code>integer</code></p><p>The page number from which to start counting the number of pages for this section. If unset, page numbering continues from the previous section. If the value is unset in the first <code>SectionBreak</code>, refer to DocumentStyle's <code>pageNumberStart</code>.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.</p></td></tr><tr><td><code>flipPageOrientation</code></td><td><p><code>boolean</code></p><p>Optional. Indicates whether to flip the dimensions of DocumentStyle's <code>pageSize</code> for this section, which allows changing the page orientation between portrait and landscape. If unset, the value inherits from DocumentStyle's <code>flipPageOrientation</code>.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.</p></td></tr></tbody></table>

## SectionColumnProperties

Properties that apply to a section's column.

JSON representation

```
{
  "width": {
    object (Dimension)
  },
  "paddingEnd": {
    object (Dimension)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>width</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>Output only. The width of the column.</p></td></tr><tr><td><code>paddingEnd</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The padding at the end of the column.</p></td></tr></tbody></table>

## ColumnSeparatorStyle

The style of column separators between columns.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COLUMN_SEPARATOR_STYLE_UNSPECIFIED</code></td><td>An unspecified column separator style.</td></tr><tr><td><code>NONE</code></td><td>No column separator lines between columns.</td></tr><tr><td><code>BETWEEN_EACH_COLUMN</code></td><td>Renders a column separator line between each column.</td></tr></tbody></table>

## SectionType

Represents how the start of the current section is positioned relative to the previous section.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SECTION_TYPE_UNSPECIFIED</code></td><td>The section type is unspecified.</td></tr><tr><td><code>CONTINUOUS</code></td><td>The section starts immediately after the last paragraph of the previous section.</td></tr><tr><td><code>NEXT_PAGE</code></td><td>The section starts on the next page.</td></tr></tbody></table>

## Table

A `StructuralElement` representing a table.

JSON representation

```
{
  "rows": integer,
  "columns": integer,
  "tableRows": [
    {
      object (TableRow)
    }
  ],
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "tableStyle": {
    object (TableStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rows</code></td><td><p><code>integer</code></p><p>Number of rows in the table.</p></td></tr><tr><td><code>columns</code></td><td><p><code>integer</code></p><p>Number of columns in the table.</p><p>It's possible for a table to be non-rectangular, so some rows may have a different number of cells.</p></td></tr><tr><td><code>tableRows[]</code></td><td><p><code>object (<code>TableRow</code>)</code></p><p>The contents and style of each row.</p></td></tr><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. A <code>Table</code> may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr><tr><td><code>tableStyle</code></td><td><p><code>object (<code>TableStyle</code>)</code></p><p>The style of the table.</p></td></tr></tbody></table>

## TableRow

The contents and style of a row in a `Table`.

JSON representation

```
{
  "startIndex": integer,
  "endIndex": integer,
  "tableCells": [
    {
      object (TableCell)
    }
  ],
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "tableRowStyle": {
    object (TableRowStyle)
  },
  "suggestedTableRowStyleChanges": {
    string: {
      object (SuggestedTableRowStyle)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startIndex</code></td><td><p><code>integer</code></p><p>The zero-based start index of this row, in UTF-16 code units.</p></td></tr><tr><td><code>endIndex</code></td><td><p><code>integer</code></p><p>The zero-based end index of this row, exclusive, in UTF-16 code units.</p></td></tr><tr><td><code>tableCells[]</code></td><td><p><code>object (<code>TableCell</code>)</code></p><p>The contents and style of each cell in this row.</p><p>It's possible for a table to be non-rectangular, so some rows may have a different number of cells than other rows in the same table.</p></td></tr><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. A <code>TableRow</code> may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr><tr><td><code>tableRowStyle</code></td><td><p><code>object (<code>TableRowStyle</code>)</code></p><p>The style of the table row.</p></td></tr><tr><td><code>suggestedTableRowStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTableRowStyle</code>))</code></p><p>The suggested style changes to this row, keyed by suggestion ID.</p></td></tr></tbody></table>

## TableCell

The contents and style of a cell in a `Table`.

JSON representation

```
{
  "startIndex": integer,
  "endIndex": integer,
  "content": [
    {
      object (StructuralElement)
    }
  ],
  "tableCellStyle": {
    object (TableCellStyle)
  },
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ],
  "suggestedTableCellStyleChanges": {
    string: {
      object (SuggestedTableCellStyle)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startIndex</code></td><td><p><code>integer</code></p><p>The zero-based start index of this cell, in UTF-16 code units.</p></td></tr><tr><td><code>endIndex</code></td><td><p><code>integer</code></p><p>The zero-based end index of this cell, exclusive, in UTF-16 code units.</p></td></tr><tr><td><code>content[]</code></td><td><p><code>object (<code>StructuralElement</code>)</code></p><p>The content of the cell.</p></td></tr><tr><td><code>tableCellStyle</code></td><td><p><code>object (<code>TableCellStyle</code>)</code></p><p>The style of the cell.</p></td></tr><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. A <code>TableCell</code> may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr><tr><td><code>suggestedTableCellStyleChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedTableCellStyle</code>))</code></p><p>The suggested changes to the table cell style, keyed by suggestion ID.</p></td></tr></tbody></table>

## TableCellStyle

The style of a `TableCell`.

Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.

JSON representation

```
{
  "rowSpan": integer,
  "columnSpan": integer,
  "backgroundColor": {
    object (OptionalColor)
  },
  "borderLeft": {
    object (TableCellBorder)
  },
  "borderRight": {
    object (TableCellBorder)
  },
  "borderTop": {
    object (TableCellBorder)
  },
  "borderBottom": {
    object (TableCellBorder)
  },
  "paddingLeft": {
    object (Dimension)
  },
  "paddingRight": {
    object (Dimension)
  },
  "paddingTop": {
    object (Dimension)
  },
  "paddingBottom": {
    object (Dimension)
  },
  "contentAlignment": enum (ContentAlignment)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rowSpan</code></td><td><p><code>integer</code></p><p>The row span of the cell.</p><p>This property is read-only.</p></td></tr><tr><td><code>columnSpan</code></td><td><p><code>integer</code></p><p>The column span of the cell.</p><p>This property is read-only.</p></td></tr><tr><td><code>backgroundColor</code></td><td><p><code>object (<code>OptionalColor</code>)</code></p><p>The background color of the cell.</p></td></tr><tr><td><code>borderLeft</code></td><td><p><code>object (<code>TableCellBorder</code>)</code></p><p>The left border of the cell.</p></td></tr><tr><td><code>borderRight</code></td><td><p><code>object (<code>TableCellBorder</code>)</code></p><p>The right border of the cell.</p></td></tr><tr><td><code>borderTop</code></td><td><p><code>object (<code>TableCellBorder</code>)</code></p><p>The top border of the cell.</p></td></tr><tr><td><code>borderBottom</code></td><td><p><code>object (<code>TableCellBorder</code>)</code></p><p>The bottom border of the cell.</p></td></tr><tr><td><code>paddingLeft</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The left padding of the cell.</p></td></tr><tr><td><code>paddingRight</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The right padding of the cell.</p></td></tr><tr><td><code>paddingTop</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The top padding of the cell.</p></td></tr><tr><td><code>paddingBottom</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The bottom padding of the cell.</p></td></tr><tr><td><code>contentAlignment</code></td><td><p><code>enum (<code>ContentAlignment</code>)</code></p><p>The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Docs editor.</p></td></tr></tbody></table>

## TableCellBorder

A border around a table cell.

Table cell borders cannot be transparent. To hide a table cell border, make its width 0.

JSON representation

```
{
  "color": {
    object (OptionalColor)
  },
  "width": {
    object (Dimension)
  },
  "dashStyle": enum (DashStyle)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>color</code></td><td><p><code>object (<code>OptionalColor</code>)</code></p><p>The color of the border.</p><p>This color cannot be transparent.</p></td></tr><tr><td><code>width</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The width of the border.</p></td></tr><tr><td><code>dashStyle</code></td><td><p><code>enum (<code>DashStyle</code>)</code></p><p>The dash style of the border.</p></td></tr></tbody></table>

## ContentAlignment

The types of content alignment.

Derived from a subset of the values of the "ST\_TextAnchoringType" simple type in section 20.1.10.60 of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CONTENT_ALIGNMENT_UNSPECIFIED</code></td><td>An unspecified content alignment. The content alignment is inherited from the parent if one exists.</td></tr><tr><td><code>CONTENT_ALIGNMENT_UNSUPPORTED</code></td><td>An unsupported content alignment.</td></tr><tr><td><code>TOP</code></td><td>An alignment that aligns the content to the top of the content holder. Corresponds to ECMA-376 ST_TextAnchoringType 't'.</td></tr><tr><td><code>MIDDLE</code></td><td>An alignment that aligns the content to the middle of the content holder. Corresponds to ECMA-376 ST_TextAnchoringType 'ctr'.</td></tr><tr><td><code>BOTTOM</code></td><td>An alignment that aligns the content to the bottom of the content holder. Corresponds to ECMA-376 ST_TextAnchoringType 'b'.</td></tr></tbody></table>

## SuggestedTableCellStyle

A suggested change to a `TableCellStyle`.

JSON representation

```
{
  "tableCellStyle": {
    object (TableCellStyle)
  },
  "tableCellStyleSuggestionState": {
    object (TableCellStyleSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableCellStyle</code></td><td><p><code>object (<code>TableCellStyle</code>)</code></p><p>A <code>TableCellStyle</code> that only includes the changes made in this suggestion. This can be used along with the <code>tableCellStyleSuggestionState</code> to see which fields have changed and their new values.</p></td></tr><tr><td><code>tableCellStyleSuggestionState</code></td><td><p><code>object (<code>TableCellStyleSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the base <code>TableCellStyle</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## TableCellStyleSuggestionState

A mask that indicates which of the fields on the base `TableCellStyle` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "rowSpanSuggested": boolean,
  "columnSpanSuggested": boolean,
  "backgroundColorSuggested": boolean,
  "borderLeftSuggested": boolean,
  "borderRightSuggested": boolean,
  "borderTopSuggested": boolean,
  "borderBottomSuggested": boolean,
  "paddingLeftSuggested": boolean,
  "paddingRightSuggested": boolean,
  "paddingTopSuggested": boolean,
  "paddingBottomSuggested": boolean,
  "contentAlignmentSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rowSpanSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>rowSpan</code>.</p></td></tr><tr><td><code>columnSpanSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>columnSpan</code>.</p></td></tr><tr><td><code>backgroundColorSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>backgroundColor</code>.</p></td></tr><tr><td><code>borderLeftSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>borderLeft</code>.</p></td></tr><tr><td><code>borderRightSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>borderRight</code>.</p></td></tr><tr><td><code>borderTopSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>borderTop</code>.</p></td></tr><tr><td><code>borderBottomSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>borderBottom</code>.</p></td></tr><tr><td><code>paddingLeftSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>paddingLeft</code>.</p></td></tr><tr><td><code>paddingRightSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>paddingRight</code>.</p></td></tr><tr><td><code>paddingTopSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>paddingTop</code>.</p></td></tr><tr><td><code>paddingBottomSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>paddingBottom</code>.</p></td></tr><tr><td><code>contentAlignmentSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>contentAlignment</code>.</p></td></tr></tbody></table>

## TableRowStyle

Styles that apply to a table row.

JSON representation

```
{
  "minRowHeight": {
    object (Dimension)
  },
  "tableHeader": boolean,
  "preventOverflow": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minRowHeight</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The minimum height of the row. The row will be rendered in the Docs editor at a height equal to or greater than this value in order to show all the content in the row's cells.</p></td></tr><tr><td><code>tableHeader</code></td><td><p><code>boolean</code></p><p>Whether the row is a table header.</p></td></tr><tr><td><code>preventOverflow</code></td><td><p><code>boolean</code></p><p>Whether the row cannot overflow across page or column boundaries.</p></td></tr></tbody></table>

## SuggestedTableRowStyle

A suggested change to a `TableRowStyle`.

JSON representation

```
{
  "tableRowStyle": {
    object (TableRowStyle)
  },
  "tableRowStyleSuggestionState": {
    object (TableRowStyleSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableRowStyle</code></td><td><p><code>object (<code>TableRowStyle</code>)</code></p><p>A <code>TableRowStyle</code> that only includes the changes made in this suggestion. This can be used along with the <code>tableRowStyleSuggestionState</code> to see which fields have changed and their new values.</p></td></tr><tr><td><code>tableRowStyleSuggestionState</code></td><td><p><code>object (<code>TableRowStyleSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the base <code>TableRowStyle</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## TableRowStyleSuggestionState

A mask that indicates which of the fields on the base `TableRowStyle` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "minRowHeightSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minRowHeightSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>minRowHeight</code>.</p></td></tr></tbody></table>

## TableStyle

Styles that apply to a table.

JSON representation

```
{
  "tableColumnProperties": [
    {
      object (TableColumnProperties)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableColumnProperties[]</code></td><td><p><code>object (<code>TableColumnProperties</code>)</code></p><p>The properties of each column.</p><p>Note that in Docs, tables contain rows and rows contain cells, similar to HTML. So the properties for a row can be found on the row's <code>tableRowStyle</code>.</p></td></tr></tbody></table>

## TableColumnProperties

The properties of a column in a table.

JSON representation

```
{
  "widthType": enum (WidthType),
  "width": {
    object (Dimension)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>widthType</code></td><td><p><code>enum (<code>WidthType</code>)</code></p><p>The width type of the column.</p></td></tr><tr><td><code>width</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The width of the column. Set when the column's <code>widthType</code> is <code>FIXED_WIDTH</code>.</p></td></tr></tbody></table>

## WidthType

The type of width of the column.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>WIDTH_TYPE_UNSPECIFIED</code></td><td>The column width type is unspecified.</td></tr><tr><td><code>EVENLY_DISTRIBUTED</code></td><td><p>The column width is evenly distributed among the other evenly distributed columns.</p><p>The width of the column is automatically determined and will have an equal portion of the width remaining for the table after accounting for all columns with specified widths.</p></td></tr><tr><td><code>FIXED_WIDTH</code></td><td>A fixed column width. The [width][<code>google.apps.docs.v1.TableColumnProperties.width</code> property contains the column's width.</td></tr></tbody></table>

## TableOfContents

A `StructuralElement` representing a table of contents.

JSON representation

```
{
  "content": [
    {
      object (StructuralElement)
    }
  ],
  "suggestedInsertionIds": [
    string
  ],
  "suggestedDeletionIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>content[]</code></td><td><p><code>object (<code>StructuralElement</code>)</code></p><p>The content of the table of contents.</p></td></tr><tr><td><code>suggestedInsertionIds[]</code></td><td><p><code>string</code></p><p>The suggested insertion IDs. A <code>TableOfContents</code> may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr></tbody></table>

## Footer

JSON representation

```
{
  "footerId": string,
  "content": [
    {
      object (StructuralElement)
    }
  ]
}
```

## Footnote

A document footnote.

JSON representation

```
{
  "footnoteId": string,
  "content": [
    {
      object (StructuralElement)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>footnoteId</code></td><td><p><code>string</code></p><p>The ID of the footnote.</p></td></tr><tr><td><code>content[]</code></td><td><p><code>object (<code>StructuralElement</code>)</code></p><p>The contents of the footnote.</p><p>The indexes for a footnote's content begin at zero.</p></td></tr></tbody></table>

## DocumentStyle

The style of the document.

JSON representation

```
{
  "background": {
    object (Background)
  },
  "defaultHeaderId": string,
  "defaultFooterId": string,
  "evenPageHeaderId": string,
  "evenPageFooterId": string,
  "firstPageHeaderId": string,
  "firstPageFooterId": string,
  "useFirstPageHeaderFooter": boolean,
  "useEvenPageHeaderFooter": boolean,
  "pageNumberStart": integer,
  "marginTop": {
    object (Dimension)
  },
  "marginBottom": {
    object (Dimension)
  },
  "marginRight": {
    object (Dimension)
  },
  "marginLeft": {
    object (Dimension)
  },
  "pageSize": {
    object (Size)
  },
  "marginHeader": {
    object (Dimension)
  },
  "marginFooter": {
    object (Dimension)
  },
  "useCustomHeaderFooterMargins": boolean,
  "flipPageOrientation": boolean,
  "documentFormat": {
    object (DocumentFormat)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>background</code></td><td><p><code>object (<code>Background</code>)</code></p><p>The background of the document. Documents cannot have a transparent background color.</p></td></tr><tr><td><code>defaultHeaderId</code></td><td><p><code>string</code></p><p>The ID of the default header. If not set, there's no default header.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>This property is read-only.</p></td></tr><tr><td><code>evenPageHeaderId</code></td><td><p><code>string</code></p><p>The ID of the header used only for even pages. The value of <code>useEvenPageHeaderFooter</code> determines whether to use the <code>defaultHeaderId</code> or this value for the header on even pages. If not set, there's no even page header.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>This property is read-only.</p></td></tr><tr><td><code>firstPageHeaderId</code></td><td><p><code>string</code></p><p>The ID of the header used only for the first page. If not set then a unique header for the first page does not exist. The value of <code>useFirstPageHeaderFooter</code> determines whether to use the <code>defaultHeaderId</code> or this value for the header on the first page. If not set, there's no first page header.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p><p>This property is read-only.</p></td></tr><tr><td><code>pageNumberStart</code></td><td><p><code>integer</code></p><p>The page number from which to start counting the number of pages.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p></td></tr><tr><td><code>marginTop</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The top page margin.</p><p>Updating the top page margin on the document style clears the top page margin on all section styles.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p></td></tr><tr><td><code>marginBottom</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The bottom page margin.</p><p>Updating the bottom page margin on the document style clears the bottom page margin on all section styles.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p></td></tr><tr><td><code>marginRight</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The right page margin.</p><p>Updating the right page margin on the document style clears the right page margin on all section styles. It may also cause columns to resize in all sections.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p></td></tr><tr><td><code>marginLeft</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The left page margin.</p><p>Updating the left page margin on the document style clears the left page margin on all section styles. It may also cause columns to resize in all sections.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>object (<code>Size</code>)</code></p><p>The size of a page in the document.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p></td></tr><tr><td><code>marginHeader</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount of space between the top of the page and the contents of the header.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p></td></tr><tr><td><code>flipPageOrientation</code></td><td><p><code>boolean</code></p><p>Optional. Indicates whether to flip the dimensions of the <code>pageSize</code>, which allows changing the page orientation between portrait and landscape.</p><p>If [DocumentMode][google.apps.docs.v1.DocumentStyle.document_format.document_mode] is <code>PAGELESS</code>, this property will not be rendered.</p></td></tr><tr><td><code>documentFormat</code></td><td><p><code>object (<code>DocumentFormat</code>)</code></p><p>Specifies document-level format settings, such as the document mode (pages vs pageless).</p></td></tr></tbody></table>

## Background

Represents the background of a document.

JSON representation

```
{
  "color": {
    object (OptionalColor)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>color</code></td><td><p><code>object (<code>OptionalColor</code>)</code></p><p>The background color.</p></td></tr></tbody></table>

## Size

A width and height.

JSON representation

```
{
  "height": {
    object (Dimension)
  },
  "width": {
    object (Dimension)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>height</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The height of the object.</p></td></tr><tr><td><code>width</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The width of the object.</p></td></tr></tbody></table>

## DocumentFormat

Represents document-level format settings.

JSON representation

```
{
  "documentMode": enum (DocumentMode)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>documentMode</code></td><td><p><code>enum (<code>DocumentMode</code>)</code></p><p>Whether the document has pages or is pageless.</p></td></tr></tbody></table>

## DocumentMode

Whether the document has pages or is pageless.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DOCUMENT_MODE_UNSPECIFIED</code></td><td>The document mode is unspecified.</td></tr><tr><td><code>PAGES</code></td><td>The document has pages.</td></tr><tr><td><code>PAGELESS</code></td><td>The document is pageless.</td></tr></tbody></table>

## SuggestedDocumentStyle

A suggested change to the `DocumentStyle`.

JSON representation

```
{
  "documentStyle": {
    object (DocumentStyle)
  },
  "documentStyleSuggestionState": {
    object (DocumentStyleSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>documentStyle</code></td><td><p><code>object (<code>DocumentStyle</code>)</code></p><p>A <code>DocumentStyle</code> that only includes the changes made in this suggestion. This can be used along with the <code>documentStyleSuggestionState</code> to see which fields have changed and their new values.</p></td></tr><tr><td><code>documentStyleSuggestionState</code></td><td><p><code>object (<code>DocumentStyleSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the base <code>DocumentStyle</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## DocumentStyleSuggestionState

A mask that indicates which of the fields on the base `DocumentStyle` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "backgroundSuggestionState": {
    object (BackgroundSuggestionState)
  },
  "defaultHeaderIdSuggested": boolean,
  "defaultFooterIdSuggested": boolean,
  "evenPageHeaderIdSuggested": boolean,
  "evenPageFooterIdSuggested": boolean,
  "firstPageHeaderIdSuggested": boolean,
  "firstPageFooterIdSuggested": boolean,
  "useFirstPageHeaderFooterSuggested": boolean,
  "useEvenPageHeaderFooterSuggested": boolean,
  "pageNumberStartSuggested": boolean,
  "marginTopSuggested": boolean,
  "marginBottomSuggested": boolean,
  "marginRightSuggested": boolean,
  "marginLeftSuggested": boolean,
  "pageSizeSuggestionState": {
    object (SizeSuggestionState)
  },
  "marginHeaderSuggested": boolean,
  "marginFooterSuggested": boolean,
  "useCustomHeaderFooterMarginsSuggested": boolean,
  "flipPageOrientationSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>backgroundSuggestionState</code></td><td><p><code>object (<code>BackgroundSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>background</code> have been changed in this suggestion.</p></td></tr><tr><td><code>defaultHeaderIdSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>defaultHeaderId</code>.</p></td></tr><tr><td><code>evenPageHeaderIdSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>evenPageHeaderId</code>.</p></td></tr><tr><td><code>firstPageHeaderIdSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>firstPageHeaderId</code>.</p></td></tr><tr><td><code>pageNumberStartSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>pageNumberStart</code>.</p></td></tr><tr><td><code>marginTopSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>marginTop</code>.</p></td></tr><tr><td><code>marginBottomSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>marginBottom</code>.</p></td></tr><tr><td><code>marginRightSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>marginRight</code>.</p></td></tr><tr><td><code>marginLeftSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>marginLeft</code>.</p></td></tr><tr><td><code>pageSizeSuggestionState</code></td><td><p><code>object (<code>SizeSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in [size] [google.apps.docs.v1.DocumentStyle.size] have been changed in this suggestion.</p></td></tr><tr><td><code>marginHeaderSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>marginHeader</code>.</p></td></tr><tr><td><code>flipPageOrientationSuggested</code></td><td><p><code>boolean</code></p><p>Optional. Indicates if there was a suggested change to <code>flipPageOrientation</code>.</p></td></tr></tbody></table>

## BackgroundSuggestionState

A mask that indicates which of the fields on the base `Background` have been changed in this suggestion. For any field set to true, the `Backgound` has a new suggested value.

JSON representation

```
{
  "backgroundColorSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>backgroundColorSuggested</code></td><td><p><code>boolean</code></p><p>Indicates whether the current background color has been modified in this suggestion.</p></td></tr></tbody></table>

## SizeSuggestionState

A mask that indicates which of the fields on the base `Size` have been changed in this suggestion. For any field set to true, the `Size` has a new suggested value.

JSON representation

```
{
  "heightSuggested": boolean,
  "widthSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>heightSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>height</code>.</p></td></tr><tr><td><code>widthSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>width</code>.</p></td></tr></tbody></table>

## NamedStyles

The named styles. Paragraphs in the document can inherit their `TextStyle` and `ParagraphStyle` from these named styles.

JSON representation

```
{
  "styles": [
    {
      object (NamedStyle)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>styles[]</code></td><td><p><code>object (<code>NamedStyle</code>)</code></p><p>The named styles.</p><p>There's an entry for each of the possible <code>named style types</code>.</p></td></tr></tbody></table>

## NamedStyle

A named style. Paragraphs in the document can inherit their `TextStyle` and `ParagraphStyle` from this named style when they have the same named style type.

JSON representation

```
{
  "namedStyleType": enum (NamedStyleType),
  "textStyle": {
    object (TextStyle)
  },
  "paragraphStyle": {
    object (ParagraphStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>namedStyleType</code></td><td><p><code>enum (<code>NamedStyleType</code>)</code></p><p>The type of this named style.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of this named style.</p></td></tr><tr><td><code>paragraphStyle</code></td><td><p><code>object (<code>ParagraphStyle</code>)</code></p><p>The paragraph style of this named style.</p></td></tr></tbody></table>

## SuggestedNamedStyles

A suggested change to the `NamedStyles`.

JSON representation

```
{
  "namedStyles": {
    object (NamedStyles)
  },
  "namedStylesSuggestionState": {
    object (NamedStylesSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>namedStyles</code></td><td><p><code>object (<code>NamedStyles</code>)</code></p><p>A <code>NamedStyles</code> that only includes the changes made in this suggestion. This can be used along with the <code>namedStylesSuggestionState</code> to see which fields have changed and their new values.</p></td></tr><tr><td><code>namedStylesSuggestionState</code></td><td><p><code>object (<code>NamedStylesSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the base <code>NamedStyles</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## NamedStylesSuggestionState

The suggestion state of a `NamedStyles` message.

JSON representation

```
{
  "stylesSuggestionStates": [
    {
      object (NamedStyleSuggestionState)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>stylesSuggestionStates[]</code></td><td><p><code>object (<code>NamedStyleSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the corresponding <code>NamedStyle</code> in <code>styles</code> have been changed in this suggestion.</p><p>The order of these named style suggestion states matches the order of the corresponding named style within the <code>named styles</code> suggestion.</p></td></tr></tbody></table>

## NamedStyleSuggestionState

A suggestion state of a `NamedStyle` message.

JSON representation

```
{
  "namedStyleType": enum (NamedStyleType),
  "textStyleSuggestionState": {
    object (TextStyleSuggestionState)
  },
  "paragraphStyleSuggestionState": {
    object (ParagraphStyleSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>namedStyleType</code></td><td><p><code>enum (<code>NamedStyleType</code>)</code></p><p>The named style type that this suggestion state corresponds to.</p><p>This field is provided as a convenience for matching the NamedStyleSuggestionState with its corresponding <code>NamedStyle</code>.</p></td></tr><tr><td><code>textStyleSuggestionState</code></td><td><p><code>object (<code>TextStyleSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>text style</code> have been changed in this suggestion.</p></td></tr><tr><td><code>paragraphStyleSuggestionState</code></td><td><p><code>object (<code>ParagraphStyleSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>paragraph style</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## List

A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that's part of a list has a reference to the list's ID in its `bullet`.

JSON representation

```
{
  "listProperties": {
    object (ListProperties)
  },
  "suggestedListPropertiesChanges": {
    string: {
      object (SuggestedListProperties)
    },
    ...
  },
  "suggestedInsertionId": string,
  "suggestedDeletionIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>listProperties</code></td><td><p><code>object (<code>ListProperties</code>)</code></p><p>The properties of the list.</p></td></tr><tr><td><code>suggestedListPropertiesChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedListProperties</code>))</code></p><p>The suggested changes to the list properties, keyed by suggestion ID.</p></td></tr><tr><td><code>suggestedInsertionId</code></td><td><p><code>string</code></p><p>The suggested insertion ID. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this list.</p></td></tr></tbody></table>

## ListProperties

The properties of a `list` that describe the look and feel of bullets belonging to paragraphs associated with a list.

JSON representation

```
{
  "nestingLevels": [
    {
      object (NestingLevel)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>nestingLevels[]</code></td><td><p><code>object (<code>NestingLevel</code>)</code></p><p>Describes the properties of the bullets at the associated level.</p><p>A list has at most 9 levels of nesting with nesting level 0 corresponding to the top-most level and nesting level 8 corresponding to the most nested level. The nesting levels are returned in ascending order with the least nested returned first.</p></td></tr></tbody></table>

## NestingLevel

Contains properties describing the look and feel of a list bullet at a given level of nesting.

JSON representation

```
{
  "bulletAlignment": enum (BulletAlignment),
  "glyphFormat": string,
  "indentFirstLine": {
    object (Dimension)
  },
  "indentStart": {
    object (Dimension)
  },
  "textStyle": {
    object (TextStyle)
  },
  "startNumber": integer,

  "glyphType": enum (GlyphType),
  "glyphSymbol": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bulletAlignment</code></td><td><p><code>enum (<code>BulletAlignment</code>)</code></p><p>The alignment of the bullet within the space allotted for rendering the bullet.</p></td></tr><tr><td><code>glyphFormat</code></td><td><p><code>string</code></p><p>The format string used by bullets at this level of nesting.</p><p>The glyph format contains one or more placeholders, and these placeholders are replaced with the appropriate values depending on the <code>glyphType</code> or <code>glyphSymbol</code>. The placeholders follow the pattern <code>%[nestingLevel]</code>. Furthermore, placeholders can have prefixes and suffixes. Thus, the glyph format follows the pattern <code><prefix>%[nestingLevel]<suffix></code>. Note that the prefix and suffix are optional and can be arbitrary strings.</p><p>For example, the glyph format <code>%0.</code> indicates that the rendered glyph will replace the placeholder with the corresponding glyph for nesting level 0 followed by a period as the suffix. So a list with a glyph type of <code>UPPER_ALPHA</code> and glyph format <code>%0.</code> at nesting level 0 will result in a list with rendered glyphs</p><p><code>A.</code></p><p><code>B.</code></p><p><code>C.</code></p><p>The glyph format can contain placeholders for the current nesting level as well as placeholders for parent nesting levels. For example, a list can have a glyph format of <code>%0.</code> at nesting level 0 and a glyph format of <code>%0.%1.</code> at nesting level 1. Assuming both nesting levels have <code>DECIMAL</code> glyph types, this would result in a list with rendered glyphs</p><p><code>1.</code></p><p><code>2.</code></p><p><code>2.1.</code></p><p><code>2.2.</code></p><p><code>3.</code></p><p>For nesting levels that are ordered, the string that replaces a placeholder in the glyph format for a particular paragraph depends on the paragraph's order within the list.</p></td></tr><tr><td><code>indentFirstLine</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount of indentation for the first line of paragraphs at this level of nesting.</p></td></tr><tr><td><code>indentStart</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount of indentation for paragraphs at this level of nesting. Applied to the side that corresponds to the start of the text, based on the paragraph's content direction.</p></td></tr><tr><td><code>textStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The text style of bullets at this level of nesting.</p></td></tr><tr><td><code>startNumber</code></td><td><p><code>integer</code></p><p>The number of the first list item at this nesting level.</p><p>A value of 0 is treated as a value of 1 for lettered lists and Roman numeral lists. For values of both 0 and 1, lettered and Roman numeral lists will begin at <code>a</code> and <code>i</code> respectively.</p><p>This value is ignored for nesting levels with unordered glyphs.</p></td></tr><tr><td colspan="2">Union field <code>glyph_kind</code>. The kind of glyph used by bullets. This defines the bullet glyph that replaces the placeholders in the <code>glyph_format</code>. <code>glyph_kind</code> can be only one of the following:</td></tr><tr><td><code>glyphType</code></td><td><p><code>enum (<code>GlyphType</code>)</code></p><p>The type of glyph used by bullets when paragraphs at this level of nesting is ordered.</p><p>The glyph type determines the type of glyph used to replace placeholders within the <code>glyphFormat</code> when paragraphs at this level of nesting are ordered. For example, if the nesting level is 0, the <code>glyphFormat</code> is <code>%0.</code> and the glyph type is <code>DECIMAL</code>, then the rendered glyph would replace the placeholder <code>%0</code> in the glyph format with a number corresponding to the list item's order within the list.</p></td></tr><tr><td><code>glyphSymbol</code></td><td><p><code>string</code></p><p>A custom glyph symbol used by bullets when paragraphs at this level of nesting is unordered.</p><p>The glyph symbol replaces placeholders within the <code>glyphFormat</code>. For example, if the glyphSymbol is the solid circle corresponding to Unicode U+25cf code point and the <code>glyphFormat</code> is <code>%0</code>, the rendered glyph would be the solid circle.</p></td></tr></tbody></table>

## BulletAlignment

The types of alignment for a bullet.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BULLET_ALIGNMENT_UNSPECIFIED</code></td><td>The bullet alignment is unspecified.</td></tr><tr><td><code>START</code></td><td>The bullet is aligned to the start of the space allotted for rendering the bullet. Left-aligned for LTR text, right-aligned otherwise.</td></tr><tr><td><code>CENTER</code></td><td>The bullet is aligned to the center of the space allotted for rendering the bullet.</td></tr><tr><td><code>END</code></td><td>The bullet is aligned to the end of the space allotted for rendering the bullet. Right-aligned for LTR text, left-aligned otherwise.</td></tr></tbody></table>

## GlyphType

The types of glyphs used by bullets when paragraphs at this level of nesting is ordered.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>GLYPH_TYPE_UNSPECIFIED</code></td><td>The glyph type is unspecified or unsupported.</td></tr><tr><td><code>NONE</code></td><td>An empty string.</td></tr><tr><td><code>DECIMAL</code></td><td>A number, like <code>1</code>, <code>2</code>, or <code>3</code>.</td></tr><tr><td><code>ZERO_DECIMAL</code></td><td>A number where single digit numbers are prefixed with a zero, like <code>01</code>, <code>02</code>, or <code>03</code>. Numbers with more than one digit are not prefixed with a zero.</td></tr><tr><td><code>UPPER_ALPHA</code></td><td>An uppercase letter, like <code>A</code>, <code>B</code>, or <code>C</code>.</td></tr><tr><td><code>ALPHA</code></td><td>A lowercase letter, like <code>a</code>, <code>b</code>, or <code>c</code>.</td></tr><tr><td><code>UPPER_ROMAN</code></td><td>An uppercase Roman numeral, like <code>I</code>, <code>II</code>, or <code>III</code>.</td></tr><tr><td><code>ROMAN</code></td><td>A lowercase Roman numeral, like <code>i</code>, <code>ii</code>, or <code>iii</code>.</td></tr></tbody></table>

## SuggestedListProperties

A suggested change to `ListProperties`.

JSON representation

```
{
  "listProperties": {
    object (ListProperties)
  },
  "listPropertiesSuggestionState": {
    object (ListPropertiesSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>listProperties</code></td><td><p><code>object (<code>ListProperties</code>)</code></p><p>A <code>ListProperties</code> that only includes the changes made in this suggestion. This can be used along with the <code>listPropertiesSuggestionState</code> to see which fields have changed and their new values.</p></td></tr><tr><td><code>listPropertiesSuggestionState</code></td><td><p><code>object (<code>ListPropertiesSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the base <code>ListProperties</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## ListPropertiesSuggestionState

A mask that indicates which of the fields on the base `ListProperties` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "nestingLevelsSuggestionStates": [
    {
      object (NestingLevelSuggestionState)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>nestingLevelsSuggestionStates[]</code></td><td><p><code>object (<code>NestingLevelSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the corresponding <code>NestingLevel</code> in <code>nestingLevels</code> have been changed in this suggestion.</p><p>The nesting level suggestion states are returned in ascending order of the nesting level with the least nested returned first.</p></td></tr></tbody></table>

## NestingLevelSuggestionState

A mask that indicates which of the fields on the base `NestingLevel` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "bulletAlignmentSuggested": boolean,
  "glyphTypeSuggested": boolean,
  "glyphFormatSuggested": boolean,
  "glyphSymbolSuggested": boolean,
  "indentFirstLineSuggested": boolean,
  "indentStartSuggested": boolean,
  "textStyleSuggestionState": {
    object (TextStyleSuggestionState)
  },
  "startNumberSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bulletAlignmentSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>bulletAlignment</code>.</p></td></tr><tr><td><code>glyphTypeSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>glyphType</code>.</p></td></tr><tr><td><code>glyphFormatSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>glyphFormat</code>.</p></td></tr><tr><td><code>glyphSymbolSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>glyphSymbol</code>.</p></td></tr><tr><td><code>indentFirstLineSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>indentFirstLine</code>.</p></td></tr><tr><td><code>indentStartSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>indentStart</code>.</p></td></tr><tr><td><code>textStyleSuggestionState</code></td><td><p><code>object (<code>TextStyleSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>text style</code> have been changed in this suggestion.</p></td></tr><tr><td><code>startNumberSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>startNumber</code>.</p></td></tr></tbody></table>

## NamedRanges

A collection of all the `NamedRange` s in the document that share a given name.

JSON representation

```
{
  "name": string,
  "namedRanges": [
    {
      object (NamedRange)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name that all the <code>named ranges</code> share.</p></td></tr><tr><td><code>namedRanges[]</code></td><td><p><code>object (<code>NamedRange</code>)</code></p><p>The <code>NamedRange</code> s that share the same name.</p></td></tr></tbody></table>

## NamedRange

A collection of `Range` s with the same named range ID.

Named ranges allow developers to associate parts of a document with an arbitrary user-defined label so their contents can be programmatically read or edited later. A document can contain multiple named ranges with the same name, but every named range has a unique ID.

A named range is created with a single `Range`, and content inserted inside a named range generally expands that range. However, certain document changes can cause the range to be split into multiple ranges.

Named ranges are not private. All applications and collaborators that have access to the document can see its named ranges.

JSON representation

```
{
  "namedRangeId": string,
  "name": string,
  "ranges": [
    {
      object (Range)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>namedRangeId</code></td><td><p><code>string</code></p><p>The ID of the named range.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the named range.</p></td></tr><tr><td><code>ranges[]</code></td><td><p><code>object (<code>Range</code>)</code></p><p>The ranges that belong to this named range.</p></td></tr></tbody></table>

## Range

Specifies a contiguous range of text.

JSON representation

```
{
  "segmentId": string,
  "startIndex": integer,
  "endIndex": integer,
  "tabId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>segmentId</code></td><td><p><code>string</code></p><p>The ID of the header, footer, or footnote that this range is contained in. An empty segment ID signifies the document's body.</p></td></tr><tr><td><code>startIndex</code></td><td><p><code>integer</code></p><p>The zero-based start index of this range, in UTF-16 code units.</p><p>In all current uses, a start index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges.</p></td></tr><tr><td><code>endIndex</code></td><td><p><code>integer</code></p><p>The zero-based end index of this range, exclusive, in UTF-16 code units.</p><p>In all current uses, an end index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges.</p></td></tr><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The tab that contains this range. When omitted, the request applies to the first tab.</p><p>In a document containing a single tab:</p><ul><li><p>If provided, must match the singular tab's ID.</p></li><li><p>If omitted, the request applies to the singular tab.</p></li></ul><p>In a document containing multiple tabs:</p><ul><li><p>If provided, the request applies to the specified tab.</p></li><li><p>If omitted, the request applies to the first tab in the document.</p></li></ul></td></tr></tbody></table>

## InlineObject

An object that appears inline with text. An InlineObject contains an `EmbeddedObject` such as an image.

JSON representation

```
{
  "objectId": string,
  "inlineObjectProperties": {
    object (InlineObjectProperties)
  },
  "suggestedInlineObjectPropertiesChanges": {
    string: {
      object (SuggestedInlineObjectProperties)
    },
    ...
  },
  "suggestedInsertionId": string,
  "suggestedDeletionIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The ID of this inline object. Can be used to update an object’s properties.</p></td></tr><tr><td><code>inlineObjectProperties</code></td><td><p><code>object (<code>InlineObjectProperties</code>)</code></p><p>The properties of this inline object.</p></td></tr><tr><td><code>suggestedInlineObjectPropertiesChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedInlineObjectProperties</code>))</code></p><p>The suggested changes to the inline object properties, keyed by suggestion ID.</p></td></tr><tr><td><code>suggestedInsertionId</code></td><td><p><code>string</code></p><p>The suggested insertion ID. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr></tbody></table>

## InlineObjectProperties

Properties of an `InlineObject`.

JSON representation

```
{
  "embeddedObject": {
    object (EmbeddedObject)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>embeddedObject</code></td><td><p><code>object (<code>EmbeddedObject</code>)</code></p><p>The embedded object of this inline object.</p></td></tr></tbody></table>

## EmbeddedObject

An embedded object in the document.

JSON representation

```
{
  "title": string,
  "description": string,
  "embeddedObjectBorder": {
    object (EmbeddedObjectBorder)
  },
  "size": {
    object (Size)
  },
  "marginTop": {
    object (Dimension)
  },
  "marginBottom": {
    object (Dimension)
  },
  "marginRight": {
    object (Dimension)
  },
  "marginLeft": {
    object (Dimension)
  },
  "linkedContentReference": {
    object (LinkedContentReference)
  },

  "embeddedDrawingProperties": {
    object (EmbeddedDrawingProperties)
  },
  "imageProperties": {
    object (ImageProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the embedded object. The <code>title</code> and <code>description</code> are both combined to display alt text.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description of the embedded object. The <code>title</code> and <code>description</code> are both combined to display alt text.</p></td></tr><tr><td><code>embeddedObjectBorder</code></td><td><p><code>object (<code>EmbeddedObjectBorder</code>)</code></p><p>The border of the embedded object.</p></td></tr><tr><td><code>size</code></td><td><p><code>object (<code>Size</code>)</code></p><p>The visible size of the image after cropping.</p></td></tr><tr><td><code>marginTop</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The top margin of the embedded object.</p></td></tr><tr><td><code>marginBottom</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The bottom margin of the embedded object.</p></td></tr><tr><td><code>marginRight</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The right margin of the embedded object.</p></td></tr><tr><td><code>marginLeft</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The left margin of the embedded object.</p></td></tr><tr><td><code>linkedContentReference</code></td><td><p><code>object (<code>LinkedContentReference</code>)</code></p><p>A reference to the external linked source content. For example, it contains a reference to the source Google Sheets chart when the embedded object is a linked chart.</p><p>If unset, then the embedded object is not linked.</p></td></tr><tr><td colspan="2">Union field <code>properties</code>. The properties that are specific to each embedded object type. <code>properties</code> can be only one of the following:</td></tr><tr><td><code>embeddedDrawingProperties</code></td><td><p><code>object (<code>EmbeddedDrawingProperties</code>)</code></p><p>The properties of an embedded drawing.</p></td></tr><tr><td><code>imageProperties</code></td><td><p><code>object (<code>ImageProperties</code>)</code></p><p>The properties of an image.</p></td></tr></tbody></table>

## EmbeddedDrawingProperties

This type has no fields.

The properties of an embedded drawing and used to differentiate the object type. An embedded drawing is one that's created and edited within a document. Note that extensive details are not supported.

## ImageProperties

The properties of an image.

JSON representation

```
{
  "contentUri": string,
  "sourceUri": string,
  "brightness": number,
  "contrast": number,
  "transparency": number,
  "cropProperties": {
    object (CropProperties)
  },
  "angle": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>contentUri</code></td><td><p><code>string</code></p><p>A URI to the image with a default lifetime of 30 minutes. This URI is tagged with the account of the requester. Anyone with the URI effectively accesses the image as the original requester. Access to the image may be lost if the document's sharing settings change.</p></td></tr><tr><td><code>sourceUri</code></td><td><p><code>string</code></p><p>The source URI is the URI used to insert the image. The source URI can be empty.</p></td></tr><tr><td><code>brightness</code></td><td><p><code>number</code></p><p>The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.</p></td></tr><tr><td><code>contrast</code></td><td><p><code>number</code></p><p>The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.</p></td></tr><tr><td><code>transparency</code></td><td><p><code>number</code></p><p>The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means transparent.</p></td></tr><tr><td><code>cropProperties</code></td><td><p><code>object (<code>CropProperties</code>)</code></p><p>The crop properties of the image.</p></td></tr><tr><td><code>angle</code></td><td><p><code>number</code></p><p>The clockwise rotation angle of the image, in radians.</p></td></tr></tbody></table>

## CropProperties

The crop properties of an image.

The crop rectangle is represented using fractional offsets from the original content's 4 edges.

- If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the image's original bounding rectangle.
- If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the image's original bounding rectangle.
- If all offsets and rotation angles are 0, the image is not cropped.

JSON representation

```
{
  "offsetLeft": number,
  "offsetRight": number,
  "offsetTop": number,
  "offsetBottom": number,
  "angle": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>offsetLeft</code></td><td><p><code>number</code></p><p>The offset specifies how far inwards the left edge of the crop rectangle is from the left edge of the original content as a fraction of the original content's width.</p></td></tr><tr><td><code>offsetRight</code></td><td><p><code>number</code></p><p>The offset specifies how far inwards the right edge of the crop rectangle is from the right edge of the original content as a fraction of the original content's width.</p></td></tr><tr><td><code>offsetTop</code></td><td><p><code>number</code></p><p>The offset specifies how far inwards the top edge of the crop rectangle is from the top edge of the original content as a fraction of the original content's height.</p></td></tr><tr><td><code>offsetBottom</code></td><td><p><code>number</code></p><p>The offset specifies how far inwards the bottom edge of the crop rectangle is from the bottom edge of the original content as a fraction of the original content's height.</p></td></tr><tr><td><code>angle</code></td><td><p><code>number</code></p><p>The clockwise rotation angle of the crop rectangle around its center, in radians. Rotation is applied after the offsets.</p></td></tr></tbody></table>

## EmbeddedObjectBorder

A border around an `EmbeddedObject`.

JSON representation

```
{
  "color": {
    object (OptionalColor)
  },
  "width": {
    object (Dimension)
  },
  "dashStyle": enum (DashStyle),
  "propertyState": enum (PropertyState)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>color</code></td><td><p><code>object (<code>OptionalColor</code>)</code></p><p>The color of the border.</p></td></tr><tr><td><code>width</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The width of the border.</p></td></tr><tr><td><code>dashStyle</code></td><td><p><code>enum (<code>DashStyle</code>)</code></p><p>The dash style of the border.</p></td></tr><tr><td><code>propertyState</code></td><td><p><code>enum (<code>PropertyState</code>)</code></p><p>The property state of the border property.</p></td></tr></tbody></table>

## PropertyState

The possible states of a property.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RENDERED</code></td><td>If a property's state is RENDERED, then the element has the corresponding property when rendered in the document. This is the default value.</td></tr><tr><td><code>NOT_RENDERED</code></td><td>If a property's state is NOT_RENDERED, then the element does not have the corresponding property when rendered in the document.</td></tr></tbody></table>

## LinkedContentReference

A reference to the external linked source content.

JSON representation

```
{

  "sheetsChartReference": {
    object (SheetsChartReference)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>reference</code>. The reference specific to the type of linked content. <code>reference</code> can be only one of the following:</td></tr><tr><td><code>sheetsChartReference</code></td><td><p><code>object (<code>SheetsChartReference</code>)</code></p><p>A reference to the linked chart.</p></td></tr></tbody></table>

## SheetsChartReference

A reference to a linked chart embedded from Google Sheets.

JSON representation

```
{
  "spreadsheetId": string,
  "chartId": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The ID of the Google Sheets spreadsheet that contains the source chart.</p></td></tr><tr><td><code>chartId</code></td><td><p><code>integer</code></p><p>The ID of the specific chart in the Google Sheets spreadsheet that's embedded.</p></td></tr></tbody></table>

## SuggestedInlineObjectProperties

A suggested change to `InlineObjectProperties`.

JSON representation

```
{
  "inlineObjectProperties": {
    object (InlineObjectProperties)
  },
  "inlineObjectPropertiesSuggestionState": {
    object (InlineObjectPropertiesSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>inlineObjectProperties</code></td><td><p><code>object (<code>InlineObjectProperties</code>)</code></p><p>An <code>InlineObjectProperties</code> that only includes the changes made in this suggestion. This can be used along with the <code>inlineObjectPropertiesSuggestionState</code> to see which fields have changed and their new values.</p></td></tr><tr><td><code>inlineObjectPropertiesSuggestionState</code></td><td><p><code>object (<code>InlineObjectPropertiesSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the base <code>InlineObjectProperties</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## InlineObjectPropertiesSuggestionState

A mask that indicates which of the fields on the base `InlineObjectProperties` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "embeddedObjectSuggestionState": {
    object (EmbeddedObjectSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>embeddedObjectSuggestionState</code></td><td><p><code>object (<code>EmbeddedObjectSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>embeddedObject</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## EmbeddedObjectSuggestionState

A mask that indicates which of the fields on the base `EmbeddedObject` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "embeddedDrawingPropertiesSuggestionState": {
    object (EmbeddedDrawingPropertiesSuggestionState)
  },
  "imagePropertiesSuggestionState": {
    object (ImagePropertiesSuggestionState)
  },
  "titleSuggested": boolean,
  "descriptionSuggested": boolean,
  "embeddedObjectBorderSuggestionState": {
    object (EmbeddedObjectBorderSuggestionState)
  },
  "sizeSuggestionState": {
    object (SizeSuggestionState)
  },
  "marginLeftSuggested": boolean,
  "marginRightSuggested": boolean,
  "marginTopSuggested": boolean,
  "marginBottomSuggested": boolean,
  "linkedContentReferenceSuggestionState": {
    object (LinkedContentReferenceSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>embeddedDrawingPropertiesSuggestionState</code></td><td><p><code>object (<code>EmbeddedDrawingPropertiesSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>embeddedDrawingProperties</code> have been changed in this suggestion.</p></td></tr><tr><td><code>imagePropertiesSuggestionState</code></td><td><p><code>object (<code>ImagePropertiesSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>imageProperties</code> have been changed in this suggestion.</p></td></tr><tr><td><code>titleSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>title</code>.</p></td></tr><tr><td><code>descriptionSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>description</code>.</p></td></tr><tr><td><code>embeddedObjectBorderSuggestionState</code></td><td><p><code>object (<code>EmbeddedObjectBorderSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>embeddedObjectBorder</code> have been changed in this suggestion.</p></td></tr><tr><td><code>sizeSuggestionState</code></td><td><p><code>object (<code>SizeSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>size</code> have been changed in this suggestion.</p></td></tr><tr><td><code>marginLeftSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>marginLeft</code>.</p></td></tr><tr><td><code>marginRightSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>marginRight</code>.</p></td></tr><tr><td><code>marginTopSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>marginTop</code>.</p></td></tr><tr><td><code>marginBottomSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>marginBottom</code>.</p></td></tr><tr><td><code>linkedContentReferenceSuggestionState</code></td><td><p><code>object (<code>LinkedContentReferenceSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>linkedContentReference</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## EmbeddedDrawingPropertiesSuggestionState

This type has no fields.

A mask that indicates which of the fields on the base `EmbeddedDrawingProperties` have been changed in this suggestion. For any field set to true, there's a new suggested value.

## ImagePropertiesSuggestionState

A mask that indicates which of the fields on the base `ImageProperties` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "contentUriSuggested": boolean,
  "sourceUriSuggested": boolean,
  "brightnessSuggested": boolean,
  "contrastSuggested": boolean,
  "transparencySuggested": boolean,
  "cropPropertiesSuggestionState": {
    object (CropPropertiesSuggestionState)
  },
  "angleSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>contentUriSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>contentUri</code>.</p></td></tr><tr><td><code>sourceUriSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to [sourceUri] [google.apps.docs.v1.EmbeddedObject.source_uri].</p></td></tr><tr><td><code>brightnessSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to [brightness] [google.apps.docs.v1.EmbeddedObject.brightness].</p></td></tr><tr><td><code>contrastSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to [contrast] [google.apps.docs.v1.EmbeddedObject.contrast].</p></td></tr><tr><td><code>transparencySuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to [transparency] [google.apps.docs.v1.EmbeddedObject.transparency].</p></td></tr><tr><td><code>cropPropertiesSuggestionState</code></td><td><p><code>object (<code>CropPropertiesSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>cropProperties</code> have been changed in this suggestion.</p></td></tr><tr><td><code>angleSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to [angle] [google.apps.docs.v1.EmbeddedObject.angle].</p></td></tr></tbody></table>

## CropPropertiesSuggestionState

A mask that indicates which of the fields on the base `CropProperties` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "offsetLeftSuggested": boolean,
  "offsetRightSuggested": boolean,
  "offsetTopSuggested": boolean,
  "offsetBottomSuggested": boolean,
  "angleSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>offsetLeftSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>offsetLeft</code>.</p></td></tr><tr><td><code>offsetRightSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>offsetRight</code>.</p></td></tr><tr><td><code>offsetTopSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>offsetTop</code>.</p></td></tr><tr><td><code>offsetBottomSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>offsetBottom</code>.</p></td></tr><tr><td><code>angleSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>angle</code>.</p></td></tr></tbody></table>

## EmbeddedObjectBorderSuggestionState

A mask that indicates which of the fields on the base `EmbeddedObjectBorder` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "colorSuggested": boolean,
  "widthSuggested": boolean,
  "dashStyleSuggested": boolean,
  "propertyStateSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>colorSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to [color] [google.apps.docs.v1.EmbeddedBorderObject.color].</p></td></tr><tr><td><code>widthSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to [width] [google.apps.docs.v1.EmbeddedBorderObject.width].</p></td></tr><tr><td><code>dashStyleSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to [dashStyle] [google.apps.docs.v1.EmbeddedBorderObject.dash_style].</p></td></tr><tr><td><code>propertyStateSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to [propertyState] [google.apps.docs.v1.EmbeddedBorderObject.property_state].</p></td></tr></tbody></table>

## LinkedContentReferenceSuggestionState

A mask that indicates which of the fields on the base `LinkedContentReference` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "sheetsChartReferenceSuggestionState": {
    object (SheetsChartReferenceSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sheetsChartReferenceSuggestionState</code></td><td><p><code>object (<code>SheetsChartReferenceSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>sheetsChartReference</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## SheetsChartReferenceSuggestionState

A mask that indicates which of the fields on the base `SheetsChartReference` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "spreadsheetIdSuggested": boolean,
  "chartIdSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetIdSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>spreadsheetId</code>.</p></td></tr><tr><td><code>chartIdSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>chartId</code>.</p></td></tr></tbody></table>

## PositionedObject

An object that's tethered to a `Paragraph` and positioned relative to the beginning of the paragraph. A PositionedObject contains an `EmbeddedObject` such as an image.

JSON representation

```
{
  "objectId": string,
  "positionedObjectProperties": {
    object (PositionedObjectProperties)
  },
  "suggestedPositionedObjectPropertiesChanges": {
    string: {
      object (SuggestedPositionedObjectProperties)
    },
    ...
  },
  "suggestedInsertionId": string,
  "suggestedDeletionIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The ID of this positioned object.</p></td></tr><tr><td><code>positionedObjectProperties</code></td><td><p><code>object (<code>PositionedObjectProperties</code>)</code></p><p>The properties of this positioned object.</p></td></tr><tr><td><code>suggestedPositionedObjectPropertiesChanges</code></td><td><p><code>map (key: string, value: object (<code>SuggestedPositionedObjectProperties</code>))</code></p><p>The suggested changes to the positioned object properties, keyed by suggestion ID.</p></td></tr><tr><td><code>suggestedInsertionId</code></td><td><p><code>string</code></p><p>The suggested insertion ID. If empty, then this is not a suggested insertion.</p></td></tr><tr><td><code>suggestedDeletionIds[]</code></td><td><p><code>string</code></p><p>The suggested deletion IDs. If empty, then there are no suggested deletions of this content.</p></td></tr></tbody></table>

## PositionedObjectProperties

Properties of a `PositionedObject`.

JSON representation

```
{
  "positioning": {
    object (PositionedObjectPositioning)
  },
  "embeddedObject": {
    object (EmbeddedObject)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>positioning</code></td><td><p><code>object (<code>PositionedObjectPositioning</code>)</code></p><p>The positioning of this positioned object relative to the newline of the <code>Paragraph</code> that references this positioned object.</p></td></tr><tr><td><code>embeddedObject</code></td><td><p><code>object (<code>EmbeddedObject</code>)</code></p><p>The embedded object of this positioned object.</p></td></tr></tbody></table>

## PositionedObjectPositioning

The positioning of a `PositionedObject`. The positioned object is positioned relative to the beginning of the `Paragraph` it's tethered to.

JSON representation

```
{
  "layout": enum (PositionedObjectLayout),
  "leftOffset": {
    object (Dimension)
  },
  "topOffset": {
    object (Dimension)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>layout</code></td><td><p><code>enum (<code>PositionedObjectLayout</code>)</code></p><p>The layout of this positioned object.</p></td></tr><tr><td><code>leftOffset</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The offset of the left edge of the positioned object relative to the beginning of the <code>Paragraph</code> it's tethered to. The exact positioning of the object can depend on other content in the document and the document's styling.</p></td></tr><tr><td><code>topOffset</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The offset of the top edge of the positioned object relative to the beginning of the <code>Paragraph</code> it's tethered to. The exact positioning of the object can depend on other content in the document and the document's styling.</p></td></tr></tbody></table>

## PositionedObjectLayout

The possible layouts of a \[PositionedObject\]\[google.aps.docs.v1.PositionedObject\].

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>POSITIONED_OBJECT_LAYOUT_UNSPECIFIED</code></td><td>The layout is unspecified.</td></tr><tr><td><code>WRAP_TEXT</code></td><td>The text wraps around the positioned object.</td></tr><tr><td><code>BREAK_LEFT</code></td><td>Breaks text such that the positioned object is on the left and text is on the right.</td></tr><tr><td><code>BREAK_RIGHT</code></td><td>Breaks text such that the positioned object is on the right and text is on the left.</td></tr><tr><td><code>BREAK_LEFT_RIGHT</code></td><td>Breaks text such that there's no text on the left or right of the positioned object.</td></tr><tr><td><code>IN_FRONT_OF_TEXT</code></td><td>The positioned object is in front of the text.</td></tr><tr><td><code>BEHIND_TEXT</code></td><td>The positioned object is behind the text.</td></tr></tbody></table>

## SuggestedPositionedObjectProperties

A suggested change to `PositionedObjectProperties`.

JSON representation

```
{
  "positionedObjectProperties": {
    object (PositionedObjectProperties)
  },
  "positionedObjectPropertiesSuggestionState": {
    object (PositionedObjectPropertiesSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>positionedObjectProperties</code></td><td><p><code>object (<code>PositionedObjectProperties</code>)</code></p><p>A <code>PositionedObjectProperties</code> that only includes the changes made in this suggestion. This can be used along with the <code>positionedObjectPropertiesSuggestionState</code> to see which fields have changed and their new values.</p></td></tr><tr><td><code>positionedObjectPropertiesSuggestionState</code></td><td><p><code>object (<code>PositionedObjectPropertiesSuggestionState</code>)</code></p><p>A mask that indicates which of the fields on the base <code>PositionedObjectProperties</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## PositionedObjectPropertiesSuggestionState

A mask that indicates which of the fields on the base `PositionedObjectProperties` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "positioningSuggestionState": {
    object (PositionedObjectPositioningSuggestionState)
  },
  "embeddedObjectSuggestionState": {
    object (EmbeddedObjectSuggestionState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>positioningSuggestionState</code></td><td><p><code>object (<code>PositionedObjectPositioningSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>positioning</code> have been changed in this suggestion.</p></td></tr><tr><td><code>embeddedObjectSuggestionState</code></td><td><p><code>object (<code>EmbeddedObjectSuggestionState</code>)</code></p><p>A mask that indicates which of the fields in <code>embeddedObject</code> have been changed in this suggestion.</p></td></tr></tbody></table>

## PositionedObjectPositioningSuggestionState

A mask that indicates which of the fields on the base `PositionedObjectPositioning` have been changed in this suggestion. For any field set to true, there's a new suggested value.

JSON representation

```
{
  "layoutSuggested": boolean,
  "leftOffsetSuggested": boolean,
  "topOffsetSuggested": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>layoutSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>layout</code>.</p></td></tr><tr><td><code>leftOffsetSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>leftOffset</code>.</p></td></tr><tr><td><code>topOffsetSuggested</code></td><td><p><code>boolean</code></p><p>Indicates if there was a suggested change to <code>topOffset</code>.</p></td></tr></tbody></table>

## SuggestionsViewMode

The suggestions view mode applied to the document that indicates how suggested changes are represented. It provides options for reading the document with all suggestions inline, accepted, or rejected.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DEFAULT_FOR_CURRENT_ACCESS</code></td><td>The SuggestionsViewMode applied to the returned document depends on the user's current access level. If the user only has view access, <code>PREVIEW_WITHOUT_SUGGESTIONS</code> is applied. Otherwise, <code>SUGGESTIONS_INLINE</code> is applied. This is the default suggestions view mode.</td></tr><tr><td><code>SUGGESTIONS_INLINE</code></td><td><p>The returned document has suggestions inline. Suggested changes will be differentiated from base content within the document.</p><p>Requests to retrieve a document using this mode will return a 403 error if the user does not have permission to view suggested changes.</p></td></tr><tr><td><code>PREVIEW_SUGGESTIONS_ACCEPTED</code></td><td><p>The returned document is a preview with all suggested changes accepted.</p><p>Requests to retrieve a document using this mode will return a 403 error if the user does not have permission to view suggested changes.</p></td></tr><tr><td><code>PREVIEW_WITHOUT_SUGGESTIONS</code></td><td>The returned document is a preview with all suggested changes rejected if there are any suggestions in the document.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>batchUpdate</h3></td><td>Applies one or more updates to the document.</td></tr><tr><td><h3>create</h3></td><td>Creates a blank document using the title given in the request.</td></tr><tr><td><h3>get</h3></td><td>Gets the latest version of the specified document.</td></tr></tbody></table>
