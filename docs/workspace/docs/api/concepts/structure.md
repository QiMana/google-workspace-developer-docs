---
source: https://developers.google.com/workspace/docs/api/concepts/structure
root: workspace
fetched_at: 2026-04-23T15:27:06.081Z
---

# Structure of a Google Docs document

In order to use the Google Docs API effectively, you must understand the architecture of a Google Docs document and the elements that make up a document, as well as the relationship between them. This page provides a detailed overview of these topics:

- A conceptual model of the document elements
- How the Docs API represents these elements
- The styling properties of the elements

## Top-level elements

The outermost container element in Google Docs is a *document*. This is the unit that can be saved in Google Drive, shared with other users, and updated with text and images.

The top-level elements of a [`documents`](../reference/rest/v1/documents.md) resource include its [`Tab`](../reference/rest/v1/documents.md#Tab) s, [`SuggestionsViewMode`](../reference/rest/v1/documents.md#suggestionsviewmode), and other attributes:

```
document: {
    title: ... ,
    revisionId: ... ,
    documentId: ... ,
    suggestionsViewMode: ... ,
    tabs: ...
}
```

## Tabs

A single document can contain multiple [tabs](../how-tos/tabs.md), which have different text-level contents. The `tabs` property of document is a sequence of `Tab` objects. A `Tab` is made up of the following fields:

- [`TabProperties`](../reference/rest/v1/documents.md#TabProperties): Contains a tab's attributes such as ID, title, and index.
- `childTabs`: Exposes a tab's child tabs (tabs that are nested directly beneath it).
- [`DocumentTab`](../reference/rest/v1/documents.md#DocumentTab): Represents the text content of a tab.
![Structure of a document's tabs.](https://developers.google.com/static/workspace/docs/api/images/tabs.svg)

Figure 1. Structure of a document's tabs.

The later sections give a brief overview of the document tab hierarchy; the [Tab JSON representation](../reference/rest/v1/documents.md#Tab) also provides more detailed information. See [Work with Tabs](../how-tos/tabs.md) for more information on the tabs feature.

To manipulate global document tab features outside of the `Body` content, it's almost always better to use one or more document templates, which you can use as a basis for generating new documents programmatically. For more information, see [Merge text into a document](../how-tos/merge.md).

## Body content

The `Body` typically contains the full contents of a document's tab. Most of the items you can, or would likely want to, use programmatically are elements within the `Body` content:

![Structure of the body content.](https://developers.google.com/static/workspace/docs/api/images/top-classes.svg)

Figure 2. Structure of the body content.

### Structural element

A [`StructuralElement`](../reference/rest/v1/documents.md#structuralelement) describes content that provides structure to the document. The `Body` content is a sequence of `StructuralElement` objects. A content element personalizes each `StructuralElement` object, as shown in the following diagram:

![Structural elements.](https://developers.google.com/static/workspace/docs/api/images/mid-classes.svg)

Figure 3. Structural elements.

Structural elements and their content objects contain all the visual components within the document. This includes the text, inline images, and formatting.

### Paragraph structure

A [`Paragraph`](../reference/rest/v1/documents.md#paragraph) is a `StructuralElement` representing a paragraph. It has a range of content that's terminated with a newline character. It's made up of the following objects:

- [`ParagraphElement`](../reference/rest/v1/documents.md#paragraphelement): Describes content within a paragraph.
- [`ParagraphStyle`](../reference/rest/v1/documents.md#paragraphstyle): An optional element that explicitly sets style properties for the paragraph.
- [`Bullet`](../reference/rest/v1/documents.md#bullet): If the paragraph is part of a list, an optional element that provides the bullet specification.

The `ParagraphElement` works something like a `StructuralElement`. A set of content element types (such as [`ColumnBreak`](../reference/rest/v1/documents.md#columnbreak) and [`Equation`](../reference/rest/v1/documents.md#equation)) personalizes its own `ParagraphElement`, as shown in the following diagram:

![Structure of the paragraph elements.](https://developers.google.com/static/workspace/docs/api/images/para-classes.svg)

Figure 4. Structure of the paragraph elements.

For an example of a complete document structure, see the [document example](../samples/output-json.md) in JSON format. In the output you can see many of the key structural and content elements, as well as the use of start and end indexes as described in a following section.

### Text runs

A [`TextRun`](../reference/rest/v1/documents.md#textrun) is a [`ParagraphElement`](../reference/rest/v1/documents.md#paragraphelement) that represents a contiguous string of text with all the same text style. A paragraph can contain multiple text runs but text runs never cross paragraph boundaries. Contents are split after a newline character to form separate text runs. For example, consider a tiny document like the following:

![Small document with paragraphs and bulleted list.](https://developers.google.com/static/workspace/docs/api/images/simpledoc.png)

Figure 5. A small document.

The following diagram shows how you might visualize the sequence of paragraphs in the preceding document, each with its own `TextRun` and optional `Bullet` settings.

![Structure of a text run.](https://developers.google.com/static/workspace/docs/api/images/textruns.svg)

Figure 6. Structure of a text run.

### AutoText

[`AutoText`](../reference/rest/v1/documents.md#autotext) is a `ParagraphElement` that represents a spot in text that's dynamically replaced with content that can change over time. In Docs, this is used for page numbers.

### Start and end indexes

When you make updates to the content of a document's tab, each update takes place at a location or across a range within the document. These locations and ranges are specified using *indexes*, which represent an offset within a containing document *segment*. A segment is the body, header, footer, or footnote containing structural or content elements. The indexes of the elements within a segment are relative to the beginning of that segment.

Most elements within the body content have the zero-based `startIndex` and `endIndex` properties. These indicate the offset of an element's beginning and end, relative to the beginning of its enclosing segment. For more information about how to order your batch Docs API calls, see [Batch updates](./request-response.md#batch-updates).

Indexes are measured in UTF-16 code units. This means surrogate pairs consume two indexes. For example, the "GRINNING FACE" emoji, 😄, is represented as `\uD83D\uDE00` and it consumes two indexes.

For elements within a document body, indexes represent offsets from the beginning of the body content, which is the "root" element.

The "personalizing" types for structural elements— [`SectionBreak`](../reference/rest/v1/documents.md#sectionbreak), [`TableOfContents`](../reference/rest/v1/documents.md#tableofcontents), [`Table`](../reference/rest/v1/documents.md#table), and `Paragraph` —don't have these indexes because their enclosing `StructuralElement` has these fields. This is also true of the personalizing types contained in a `ParagraphElement`, such as `TextRun`, `AutoText`, and [`PageBreak`](../reference/rest/v1/documents.md#pagebreak).

## Access elements

Many elements are modifiable with the [`documents.batchUpdate`](../reference/rest/v1/documents/batchUpdate.md) method. For example, using [`InsertTextRequest`](../reference/rest/v1/documents/request.md#inserttextrequest), you can change the content of any element containing text. Similarly, you can use [`UpdateTextStyleRequest`](../reference/rest/v1/documents/request.md#updatetextstylerequest) to apply formatting to a range of text contained in one or more elements.

To read elements of the document, use the [`documents.get`](../reference/rest/v1/documents/get.md) method to obtain a JSON dump of the complete document. You can then parse the resulting JSON to find the values of individual elements. For more information, see the [Output document contents as JSON](../samples/output-json.md).

Parsing the content can be beneficial for various use cases. Consider, for example, a document cataloging application listing documents it finds. This app can extract the title, revision ID, and starting page number of a document's tabs, as shown in the following diagram:

![Structure of a document catalog.](https://developers.google.com/static/workspace/docs/api/images/other-nodes.svg)

Figure 7. Structure of a document catalog.

Since there are no methods for reading these settings explicitly, your app needs to get the whole document and then parse the JSON to extract these values.

## Property inheritance

A `StructuralElement` can inherit properties from its parent objects. An object's properties, including those that it defines and those that it inherits, determine its final visual appearance.

Text character formatting determines how text is rendered in a document, such as bold, italic, and underline. The formatting that you apply overrides the default formatting inherited from the underlying paragraph's [`TextStyle`](../reference/rest/v1/documents.md#textstyle). Conversely, any characters whose formatting you don't set continue to inherit from the paragraph's styles.

Paragraph formatting determines how blocks of text are rendered in a document, such as alignment, borders, and indentation. The formatting that you apply overrides the default formatting inherited from the underlying `ParagraphStyle`. Conversely, any formatting features that you don't set continue to inherit from the paragraph style.

## Related topics

- [Requests and responses](./request-response.md)
- [Structural edit rules and behavior](./rules-behavior.md)
