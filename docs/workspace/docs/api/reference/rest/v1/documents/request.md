---
source: https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request
root: workspace
fetched_at: 2026-04-23T15:27:15.449Z
---

# Requests

## Request

A single update to apply to a document.

JSON representation

```
{

  "replaceAllText": {
    object (ReplaceAllTextRequest)
  },
  "insertText": {
    object (InsertTextRequest)
  },
  "updateTextStyle": {
    object (UpdateTextStyleRequest)
  },
  "createParagraphBullets": {
    object (CreateParagraphBulletsRequest)
  },
  "deleteParagraphBullets": {
    object (DeleteParagraphBulletsRequest)
  },
  "createNamedRange": {
    object (CreateNamedRangeRequest)
  },
  "deleteNamedRange": {
    object (DeleteNamedRangeRequest)
  },
  "updateParagraphStyle": {
    object (UpdateParagraphStyleRequest)
  },
  "deleteContentRange": {
    object (DeleteContentRangeRequest)
  },
  "insertInlineImage": {
    object (InsertInlineImageRequest)
  },
  "insertTable": {
    object (InsertTableRequest)
  },
  "insertTableRow": {
    object (InsertTableRowRequest)
  },
  "insertTableColumn": {
    object (InsertTableColumnRequest)
  },
  "deleteTableRow": {
    object (DeleteTableRowRequest)
  },
  "deleteTableColumn": {
    object (DeleteTableColumnRequest)
  },
  "insertPageBreak": {
    object (InsertPageBreakRequest)
  },
  "deletePositionedObject": {
    object (DeletePositionedObjectRequest)
  },
  "updateTableColumnProperties": {
    object (UpdateTableColumnPropertiesRequest)
  },
  "updateTableCellStyle": {
    object (UpdateTableCellStyleRequest)
  },
  "updateTableRowStyle": {
    object (UpdateTableRowStyleRequest)
  },
  "replaceImage": {
    object (ReplaceImageRequest)
  },
  "updateDocumentStyle": {
    object (UpdateDocumentStyleRequest)
  },
  "mergeTableCells": {
    object (MergeTableCellsRequest)
  },
  "unmergeTableCells": {
    object (UnmergeTableCellsRequest)
  },
  "createHeader": {
    object (CreateHeaderRequest)
  },
  "createFooter": {
    object (CreateFooterRequest)
  },
  "createFootnote": {
    object (CreateFootnoteRequest)
  },
  "replaceNamedRangeContent": {
    object (ReplaceNamedRangeContentRequest)
  },
  "updateSectionStyle": {
    object (UpdateSectionStyleRequest)
  },
  "insertSectionBreak": {
    object (InsertSectionBreakRequest)
  },
  "deleteHeader": {
    object (DeleteHeaderRequest)
  },
  "deleteFooter": {
    object (DeleteFooterRequest)
  },
  "pinTableHeaderRows": {
    object (PinTableHeaderRowsRequest)
  },
  "addDocumentTab": {
    object (AddDocumentTabRequest)
  },
  "deleteTab": {
    object (DeleteTabRequest)
  },
  "updateDocumentTabProperties": {
    object (UpdateDocumentTabPropertiesRequest)
  },
  "insertPerson": {
    object (InsertPersonRequest)
  },
  "updateNamedStyle": {
    object (UpdateNamedStyleRequest)
  },
  "insertRichLink": {
    object (InsertRichLinkRequest)
  },
  "insertDate": {
    object (InsertDateRequest)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>request</code>. The specific request to apply. Exactly one field is required. <code>request</code> can be only one of the following:</td></tr><tr><td><code>replaceAllText</code></td><td><p><code>object (<code>ReplaceAllTextRequest</code>)</code></p><p>Replaces all instances of the specified text.</p></td></tr><tr><td><code>insertText</code></td><td><p><code>object (<code>InsertTextRequest</code>)</code></p><p>Inserts text at the specified location.</p></td></tr><tr><td><code>updateTextStyle</code></td><td><p><code>object (<code>UpdateTextStyleRequest</code>)</code></p><p>Updates the text style at the specified range.</p></td></tr><tr><td><code>createParagraphBullets</code></td><td><p><code>object (<code>CreateParagraphBulletsRequest</code>)</code></p><p>Creates bullets for paragraphs.</p></td></tr><tr><td><code>deleteParagraphBullets</code></td><td><p><code>object (<code>DeleteParagraphBulletsRequest</code>)</code></p><p>Deletes bullets from paragraphs.</p></td></tr><tr><td><code>createNamedRange</code></td><td><p><code>object (<code>CreateNamedRangeRequest</code>)</code></p><p>Creates a named range.</p></td></tr><tr><td><code>deleteNamedRange</code></td><td><p><code>object (<code>DeleteNamedRangeRequest</code>)</code></p><p>Deletes a named range.</p></td></tr><tr><td><code>updateParagraphStyle</code></td><td><p><code>object (<code>UpdateParagraphStyleRequest</code>)</code></p><p>Updates the paragraph style at the specified range.</p></td></tr><tr><td><code>deleteContentRange</code></td><td><p><code>object (<code>DeleteContentRangeRequest</code>)</code></p><p>Deletes content from the document.</p></td></tr><tr><td><code>insertInlineImage</code></td><td><p><code>object (<code>InsertInlineImageRequest</code>)</code></p><p>Inserts an inline image at the specified location.</p></td></tr><tr><td><code>insertTable</code></td><td><p><code>object (<code>InsertTableRequest</code>)</code></p><p>Inserts a table at the specified location.</p></td></tr><tr><td><code>insertTableRow</code></td><td><p><code>object (<code>InsertTableRowRequest</code>)</code></p><p>Inserts an empty row into a table.</p></td></tr><tr><td><code>insertTableColumn</code></td><td><p><code>object (<code>InsertTableColumnRequest</code>)</code></p><p>Inserts an empty column into a table.</p></td></tr><tr><td><code>deleteTableRow</code></td><td><p><code>object (<code>DeleteTableRowRequest</code>)</code></p><p>Deletes a row from a table.</p></td></tr><tr><td><code>deleteTableColumn</code></td><td><p><code>object (<code>DeleteTableColumnRequest</code>)</code></p><p>Deletes a column from a table.</p></td></tr><tr><td><code>insertPageBreak</code></td><td><p><code>object (<code>InsertPageBreakRequest</code>)</code></p><p>Inserts a page break at the specified location.</p></td></tr><tr><td><code>deletePositionedObject</code></td><td><p><code>object (<code>DeletePositionedObjectRequest</code>)</code></p><p>Deletes a positioned object from the document.</p></td></tr><tr><td><code>updateTableColumnProperties</code></td><td><p><code>object (<code>UpdateTableColumnPropertiesRequest</code>)</code></p><p>Updates the properties of columns in a table.</p></td></tr><tr><td><code>updateTableCellStyle</code></td><td><p><code>object (<code>UpdateTableCellStyleRequest</code>)</code></p><p>Updates the style of table cells.</p></td></tr><tr><td><code>updateTableRowStyle</code></td><td><p><code>object (<code>UpdateTableRowStyleRequest</code>)</code></p><p>Updates the row style in a table.</p></td></tr><tr><td><code>replaceImage</code></td><td><p><code>object (<code>ReplaceImageRequest</code>)</code></p><p>Replaces an image in the document.</p></td></tr><tr><td><code>updateDocumentStyle</code></td><td><p><code>object (<code>UpdateDocumentStyleRequest</code>)</code></p><p>Updates the style of the document.</p></td></tr><tr><td><code>mergeTableCells</code></td><td><p><code>object (<code>MergeTableCellsRequest</code>)</code></p><p>Merges cells in a table.</p></td></tr><tr><td><code>unmergeTableCells</code></td><td><p><code>object (<code>UnmergeTableCellsRequest</code>)</code></p><p>Unmerges cells in a table.</p></td></tr><tr><td><code>createHeader</code></td><td><p><code>object (<code>CreateHeaderRequest</code>)</code></p><p>Creates a header.</p></td></tr><tr><td><code>createFootnote</code></td><td><p><code>object (<code>CreateFootnoteRequest</code>)</code></p><p>Creates a footnote.</p></td></tr><tr><td><code>replaceNamedRangeContent</code></td><td><p><code>object (<code>ReplaceNamedRangeContentRequest</code>)</code></p><p>Replaces the content in a named range.</p></td></tr><tr><td><code>updateSectionStyle</code></td><td><p><code>object (<code>UpdateSectionStyleRequest</code>)</code></p><p>Updates the section style of the specified range.</p></td></tr><tr><td><code>insertSectionBreak</code></td><td><p><code>object (<code>InsertSectionBreakRequest</code>)</code></p><p>Inserts a section break at the specified location.</p></td></tr><tr><td><code>deleteHeader</code></td><td><p><code>object (<code>DeleteHeaderRequest</code>)</code></p><p>Deletes a header from the document.</p></td></tr><tr><td><code>pinTableHeaderRows</code></td><td><p><code>object (<code>PinTableHeaderRowsRequest</code>)</code></p><p>Updates the number of pinned header rows in a table.</p></td></tr><tr><td><code>addDocumentTab</code></td><td><p><code>object (<code>AddDocumentTabRequest</code>)</code></p><p>Adds a document tab.</p></td></tr><tr><td><code>deleteTab</code></td><td><p><code>object (<code>DeleteTabRequest</code>)</code></p><p>Deletes a document tab.</p></td></tr><tr><td><code>updateDocumentTabProperties</code></td><td><p><code>object (<code>UpdateDocumentTabPropertiesRequest</code>)</code></p><p>Updates the properties of a document tab.</p></td></tr><tr><td><code>insertPerson</code></td><td><p><code>object (<code>InsertPersonRequest</code>)</code></p><p>Inserts a person mention.</p></td></tr><tr><td><code>updateNamedStyle</code></td><td><p><code>object (<code>UpdateNamedStyleRequest</code>)</code></p><p>Updates a named style.</p></td></tr><tr><td><code>insertRichLink</code></td><td><p><code>object (<code>InsertRichLinkRequest</code>)</code></p><p>Insert a rich link.</p></td></tr><tr><td><code>insertDate</code></td><td><p><code>object (<code>InsertDateRequest</code>)</code></p><p>Inserts a date.</p></td></tr></tbody></table>

## ReplaceAllTextRequest

Replaces all instances of text matching a criteria with `replace text`.

JSON representation

```
{
  "replaceText": string,
  "tabsCriteria": {
    object (TabsCriteria)
  },

  "containsText": {
    object (SubstringMatchCriteria)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>replaceText</code></td><td><p><code>string</code></p><p>The text that will replace the matched text.</p></td></tr><tr><td><code>tabsCriteria</code></td><td><p><code>object (<code>TabsCriteria</code>)</code></p><p>Optional. The criteria used to specify in which tabs the replacement occurs.</p><p>When omitted, the replacement applies to all tabs.</p><p>In a document containing a single tab:</p><ul><li><p>If provided, must match the singular tab's ID.</p></li><li><p>If omitted, the replacement applies to the singular tab.</p></li></ul><p>In a document containing multiple tabs:</p><ul><li><p>If provided, the replacement applies to the specified tabs.</p></li><li><p>If omitted, the replacement applies to all tabs.</p></li></ul></td></tr><tr><td colspan="2">Union field <code>criteria</code>. The criteria used to match the text to replace. <code>criteria</code> can be only one of the following:</td></tr><tr><td><code>containsText</code></td><td><p><code>object (<code>SubstringMatchCriteria</code>)</code></p><p>Finds text in the document matching this substring.</p></td></tr></tbody></table>

## SubstringMatchCriteria

A criteria that matches a specific string of text in the document.

JSON representation

```
{
  "text": string,
  "matchCase": boolean,
  "searchByRegex": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p><p>The text to search for in the document.</p></td></tr><tr><td><code>matchCase</code></td><td><p><code>boolean</code></p><p>Indicates whether the search should respect case:</p><ul><li><code>True</code>: the search is case sensitive.</li><li><code>False</code>: the search is case insensitive.</li></ul></td></tr><tr><td><code>searchByRegex</code></td><td><p><code>boolean</code></p><p>Optional. True if the find value should be treated as a regular expression. Any backslashes in the pattern should be escaped.</p><ul><li><code>True</code>: the search text is treated as a regular expressions.</li><li><code>False</code>: the search text is treated as a substring for matching.</li></ul></td></tr></tbody></table>

## TabsCriteria

A criteria that specifies in which tabs a request executes.

JSON representation

```
{
  "tabIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tabIds[]</code></td><td><p><code>string</code></p><p>The list of tab IDs in which the request executes.</p></td></tr></tbody></table>

## InsertTextRequest

Inserts text at the specified location.

JSON representation

```
{
  "text": string,

  "location": {
    object (Location)
  },
  "endOfSegmentLocation": {
    object (EndOfSegmentLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p><p>The text to be inserted.</p><p>Inserting a newline character will implicitly create a new at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets.</p><p>Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text style for the inserted text will match the text immediately before the insertion index.</p><p>Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text.</p></td></tr><tr><td colspan="2">Union field <code>insertion_location</code>. The location where the text will be inserted. <code>insertion_location</code> can be only one of the following:</td></tr><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Inserts the text at a specific index in the document.</p><p>Text must be inserted inside the bounds of an existing . For instance, text cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). The text must be inserted in the preceding paragraph.</p></td></tr><tr><td><code>endOfSegmentLocation</code></td><td><p><code>object (<code>EndOfSegmentLocation</code>)</code></p><p>Inserts the text at the end of a header, footer, footnote or the document body.</p></td></tr></tbody></table>

## Location

A particular location in the document.

JSON representation

```
{
  "segmentId": string,
  "index": integer,
  "tabId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>segmentId</code></td><td><p><code>string</code></p><p>The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.</p></td></tr><tr><td><code>index</code></td><td><p><code>integer</code></p><p>The zero-based index, in UTF-16 code units.</p><p>The index is relative to the beginning of the segment specified by <code>segmentId</code>.</p></td></tr><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The tab that the location is in. When omitted, the request is applied to the first tab.</p><p>In a document containing a single tab:</p><ul><li><p>If provided, must match the singular tab's ID.</p></li><li><p>If omitted, the request applies to the singular tab.</p></li></ul><p>In a document containing multiple tabs:</p><ul><li><p>If provided, the request applies to the specified tab.</p></li><li><p>If omitted, the request applies to the first tab in the document.</p></li></ul></td></tr></tbody></table>

## EndOfSegmentLocation

Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.

JSON representation

```
{
  "segmentId": string,
  "tabId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>segmentId</code></td><td><p><code>string</code></p><p>The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.</p></td></tr><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The tab that the location is in. When omitted, the request is applied to the first tab.</p><p>In a document containing a single tab:</p><ul><li><p>If provided, must match the singular tab's ID.</p></li><li><p>If omitted, the request applies to the singular tab.</p></li></ul><p>In a document containing multiple tabs:</p><ul><li><p>If provided, the request applies to the specified tab.</p></li><li><p>If omitted, the request applies to the first tab in the document.</p></li></ul></td></tr></tbody></table>

## UpdateTextStyleRequest

Update the styling of text.

JSON representation

```
{
  "textStyle": {
    
  },
  "fields": string,

  "range": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>textStyle</code></td><td><p>The styles to set on the text.</p><p>If the value for a particular style matches that of the parent, that style will be set to inherit.</p><p>Certain text style changes may cause other changes in order to to mirror the behavior of the Docs editor. See the documentation of for more information.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>textStyle</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example, to update the text style to bold, set <code>fields</code> to <code>"bold"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr><tr><td colspan="2">Union field <code>insertion_location</code>. The type of range used where the text style will be updated. <code>insertion_location</code> can be only one of the following:</td></tr><tr><td><code>range</code></td><td><p>The range of text to style.</p><p>The range may be extended to include adjacent newlines.</p><p>If the range fully contains a paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style.</p><p>Ranges cannot be inserted inside a relative UpdateTextStyleRequest.</p></td></tr></tbody></table>

## CreateParagraphBulletsRequest

Creates bullets for all of the paragraphs that overlap with the given range.

The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text.

If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.

JSON representation

```
{
  "range": {
    
  },
  "bulletPreset": enum (BulletGlyphPreset)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p>The range to apply the bullet preset to.</p></td></tr><tr><td><code>bulletPreset</code></td><td><p><code>enum (<code>BulletGlyphPreset</code>)</code></p><p>The kinds of bullet glyphs to be used.</p></td></tr></tbody></table>

## BulletGlyphPreset

Preset patterns of bullet glyphs for lists.

These patterns use these kinds of bullets:

- `ARROW`: An arrow, corresponding to a Unicode U+2794 code point
- `ARROW3D`: An arrow with 3D shading, corresponding to a Unicode U+27a2 code point
- `CHECKBOX`: A hollow square, corresponding to a Unicode U+274f code point
- `CIRCLE`: A hollow circle, corresponding to a Unicode U+25cb code point
- `DIAMOND`: A solid diamond, corresponding to a Unicode U+25c6 code point
- `DIAMONDX`: A diamond with an 'x', corresponding to a Unicode U+2756 code point
- `HOLLOWDIAMOND`: A hollow diamond, corresponding to a Unicode U+25c7 code point
- `DISC`: A solid circle, corresponding to a Unicode U+25cf code point
- `SQUARE`: A solid square, corresponding to a Unicode U+25a0 code point
- `STAR`: A star, corresponding to a Unicode U+2605 code point
- `ALPHA`: A lowercase letter, like 'a', 'b', or 'c'.
- `UPPERALPHA`: An uppercase letter, like 'A', 'B', or 'C'.
- `DECIMAL`: A number, like '1', '2', or '3'.
- `ZERODECIMAL`: A number where single digit numbers are prefixed with a zero, like '01', '02', or '03'. Numbers with more than one digit are not prefixed a zero.
- `ROMAN`: A lowercase roman numeral, like 'i', 'ii', or 'iii'.
- `UPPERROMAN`: A uppercase roman numeral, like 'I', 'II', or 'III'.
- `LEFTTRIANGLE`: A triangle pointing left, corresponding to a Unicode U+25c4 code point

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BULLET_GLYPH_PRESET_UNSPECIFIED</code></td><td>The bullet glyph preset is unspecified.</td></tr><tr><td><code>BULLET_DISC_CIRCLE_SQUARE</code></td><td>A bulleted list with a <code>DISC</code>, <code>CIRCLE</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_DIAMONDX_ARROW3D_SQUARE</code></td><td>A bulleted list with a <code>DIAMONDX</code>, <code>ARROW3D</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_CHECKBOX</code></td><td>A bulleted list with <code>CHECKBOX</code> bullet glyphs for all list nesting levels.</td></tr><tr><td><code>BULLET_ARROW_DIAMOND_DISC</code></td><td>A bulleted list with a <code>ARROW</code>, <code>DIAMOND</code> and <code>DISC</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_STAR_CIRCLE_SQUARE</code></td><td>A bulleted list with a <code>STAR</code>, <code>CIRCLE</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_ARROW3D_CIRCLE_SQUARE</code></td><td>A bulleted list with a <code>ARROW3D</code>, <code>CIRCLE</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_LEFTTRIANGLE_DIAMOND_DISC</code></td><td>A bulleted list with a <code>LEFTTRIANGLE</code>, <code>DIAMOND</code> and <code>DISC</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE</code></td><td>A bulleted list with a <code>DIAMONDX</code>, <code>HOLLOWDIAMOND</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>BULLET_DIAMOND_CIRCLE_SQUARE</code></td><td>A bulleted list with a <code>DIAMOND</code>, <code>CIRCLE</code> and <code>SQUARE</code> bullet glyph for the first 3 list nesting levels.</td></tr><tr><td><code>NUMBERED_DECIMAL_ALPHA_ROMAN</code></td><td>A numbered list with <code>DECIMAL</code>, <code>ALPHA</code> and <code>ROMAN</code> numeric glyphs for the first 3 list nesting levels, followed by periods.</td></tr><tr><td><code>NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS</code></td><td>A numbered list with <code>DECIMAL</code>, <code>ALPHA</code> and <code>ROMAN</code> numeric glyphs for the first 3 list nesting levels, followed by parenthesis.</td></tr><tr><td><code>NUMBERED_DECIMAL_NESTED</code></td><td>A numbered list with <code>DECIMAL</code> numeric glyphs separated by periods, where each nesting level uses the previous nesting level's glyph as a prefix. For example: '1.', '1.1.', '2.', '2.2.'.</td></tr><tr><td><code>NUMBERED_UPPERALPHA_ALPHA_ROMAN</code></td><td>A numbered list with <code>UPPERALPHA</code>, <code>ALPHA</code> and <code>ROMAN</code> numeric glyphs for the first 3 list nesting levels, followed by periods.</td></tr><tr><td><code>NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL</code></td><td>A numbered list with <code>UPPERROMAN</code>, <code>UPPERALPHA</code> and <code>DECIMAL</code> numeric glyphs for the first 3 list nesting levels, followed by periods.</td></tr><tr><td><code>NUMBERED_ZERODECIMAL_ALPHA_ROMAN</code></td><td>A numbered list with <code>ZERODECIMAL</code>, <code>ALPHA</code> and <code>ROMAN</code> numeric glyphs for the first 3 list nesting levels, followed by periods.</td></tr></tbody></table>

## DeleteParagraphBulletsRequest

Deletes bullets from all of the paragraphs that overlap with the given range.

The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.

JSON representation

```
{
  "range": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p>The range to delete bullets from.</p></td></tr></tbody></table>

## CreateNamedRangeRequest

JSON representation

```
{
  "name": string,
  "range": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the NamedRange. Names do not need to be unique.</p><p>Names must be at least 1 character and no more than 256 characters, measured in UTF-16 code units.</p></td></tr><tr><td><code>range</code></td><td><p>The range to apply the name to.</p></td></tr></tbody></table>

## DeleteNamedRangeRequest

JSON representation

```
{
  "tabsCriteria": {
    object (TabsCriteria)
  },

  "namedRangeId": string,
  "name": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tabsCriteria</code></td><td><p><code>object (<code>TabsCriteria</code>)</code></p><p>Optional. The criteria used to specify which tab(s) the range deletion should occur in. When omitted, the range deletion is applied to all tabs.</p><p>In a document containing a single tab:</p><ul><li><p>If provided, must match the singular tab's ID.</p></li><li><p>If omitted, the range deletion applies to the singular tab.</p></li></ul><p>In a document containing multiple tabs:</p><ul><li><p>If provided, the range deletion applies to the specified tabs.</p></li><li><p>If not provided, the range deletion applies to all tabs.</p></li></ul></td></tr><tr><td colspan="2">Union field <code>named_range_reference</code>. The value that determines which range or ranges to delete. Exactly one must be set. <code>named_range_reference</code> can be only one of the following:</td></tr><tr><td><code>namedRangeId</code></td><td><p><code>string</code></p><p>The ID of the named range to delete.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the range(s) to delete. All named ranges with the given name will be deleted.</p></td></tr></tbody></table>

## UpdateParagraphStyleRequest

Update the styling of all paragraphs that overlap with the given range.

JSON representation

```
{
  "paragraphStyle": {
    
  },
  "fields": string,

  "range": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>paragraphStyle</code></td><td><p>The styles to set on the paragraphs.</p><p>Certain paragraph style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of for more information.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>paragraphStyle</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example, to update the paragraph style's alignment property, set <code>fields</code> to <code>"alignment"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr><tr><td colspan="2">Union field <code>insertion_location</code>. The type of range used where the paragraph style will be updated. <code>insertion_location</code> can be only one of the following:</td></tr><tr><td><code>range</code></td><td><p>The range overlapping the paragraphs to style.</p></td></tr></tbody></table>

## DeleteContentRangeRequest

Deletes content from the document.

JSON representation

```
{
  "range": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p>The range of content to delete.</p><p>Deleting text that crosses a paragraph boundary may result in changes to paragraph styles, lists, positioned objects and bookmarks as the two paragraphs are merged.</p><p>Attempting to delete certain ranges can result in an invalid document structure in which case a 400 bad request error is returned.</p><p>Some examples of invalid delete requests include:</p><ul><li>Deleting one code unit of a surrogate pair.</li><li>Deleting the last newline character of a , , , , or .</li><li>Deleting the start or end of a , or without deleting the entire element.</li><li>Deleting the newline character before a , or without deleting the element.</li><li>Deleting individual rows or cells of a table. Deleting the content within a table cell is allowed.</li></ul></td></tr></tbody></table>

## InsertInlineImageRequest

JSON representation

```
{
  "uri": string,
  "objectSize": {
    
  },

  "location": {
    object (Location)
  },
  "endOfSegmentLocation": {
    object (EndOfSegmentLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>uri</code></td><td><p><code>string</code></p><p>The image URI.</p><p>The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format.</p><p>The provided URI must be publicly accessible and at most 2 kB in length. The URI itself is saved with the image, and exposed via the field.</p></td></tr><tr><td><code>objectSize</code></td><td><p>The size that the image should appear as in the document. This property is optional and the final size of the image in the document is determined by the following rules: * If neither width nor height is specified, then a default size of the image is calculated based on its resolution. * If one dimension is specified then the other dimension is calculated to preserve the aspect ratio of the image. * If both width and height are specified, the image is scaled to fit within the provided dimensions while maintaining its aspect ratio.</p></td></tr><tr><td colspan="2">Union field <code>insertion_location</code>. The location where the image will be inserted. <code>insertion_location</code> can be only one of the following:</td></tr><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Inserts the image at a specific index in the document.</p><p>The image must be inserted inside the bounds of an existing . For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph).</p><p>Inline images cannot be inserted inside a footnote or equation.</p></td></tr><tr><td><code>endOfSegmentLocation</code></td><td><p><code>object (<code>EndOfSegmentLocation</code>)</code></p><p>Inserts the text at the end of a header, footer or the document body.</p><p>Inline images cannot be inserted inside a footnote.</p></td></tr></tbody></table>

## InsertTableRequest

Inserts a table at the specified location.

A newline character will be inserted before the inserted table.

JSON representation

```
{
  "rows": integer,
  "columns": integer,

  "location": {
    object (Location)
  },
  "endOfSegmentLocation": {
    object (EndOfSegmentLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>rows</code></td><td><p><code>integer</code></p><p>The number of rows in the table.</p></td></tr><tr><td><code>columns</code></td><td><p><code>integer</code></p><p>The number of columns in the table.</p></td></tr><tr><td colspan="2">Union field <code>insertion_location</code>. The location where the table will be inserted. <code>insertion_location</code> can be only one of the following:</td></tr><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Inserts the table at a specific model index.</p><p>A newline character will be inserted before the inserted table, therefore the table start index will be at the specified location index + 1.</p><p>The table must be inserted inside the bounds of an existing . For instance, it cannot be inserted at a table's start index (i.e. between an existing table and its preceding paragraph).</p><p>Tables cannot be inserted inside a footnote or equation.</p></td></tr><tr><td><code>endOfSegmentLocation</code></td><td><p><code>object (<code>EndOfSegmentLocation</code>)</code></p><p>Inserts the table at the end of the given header, footer or document body. A newline character will be inserted before the inserted table.</p><p>Tables cannot be inserted inside a footnote.</p></td></tr></tbody></table>

## InsertTableRowRequest

Inserts an empty row into a table.

JSON representation

```
{
  "tableCellLocation": {
    object (TableCellLocation)
  },
  "insertBelow": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableCellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The reference table cell location from which rows will be inserted.</p><p>A new row will be inserted above (or below) the row where the reference cell is. If the reference cell is a merged cell, a new row will be inserted above (or below) the merged cell.</p></td></tr><tr><td><code>insertBelow</code></td><td><p><code>boolean</code></p><p>Whether to insert new row below the reference cell location.</p><ul><li><code>True</code>: insert below the cell.</li><li><code>False</code>: insert above the cell.</li></ul></td></tr></tbody></table>

## TableCellLocation

Location of a single cell within a table.

JSON representation

```
{
  "tableStartLocation": {
    object (Location)
  },
  "rowIndex": integer,
  "columnIndex": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableStartLocation</code></td><td><p><code>object (<code>Location</code>)</code></p><p>The location where the table starts in the document.</p></td></tr><tr><td><code>rowIndex</code></td><td><p><code>integer</code></p><p>The zero-based row index. For example, the second row in the table has a row index of 1.</p></td></tr><tr><td><code>columnIndex</code></td><td><p><code>integer</code></p><p>The zero-based column index. For example, the second column in the table has a column index of 1.</p></td></tr></tbody></table>

## InsertTableColumnRequest

Inserts an empty column into a table.

JSON representation

```
{
  "tableCellLocation": {
    object (TableCellLocation)
  },
  "insertRight": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableCellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The reference table cell location from which columns will be inserted.</p><p>A new column will be inserted to the left (or right) of the column where the reference cell is. If the reference cell is a merged cell, a new column will be inserted to the left (or right) of the merged cell.</p></td></tr><tr><td><code>insertRight</code></td><td><p><code>boolean</code></p><p>Whether to insert new column to the right of the reference cell location.</p><ul><li><code>True</code>: insert to the right.</li><li><code>False</code>: insert to the left.</li></ul></td></tr></tbody></table>

## DeleteTableRowRequest

Deletes a row from a table.

JSON representation

```
{
  "tableCellLocation": {
    object (TableCellLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableCellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The reference table cell location from which the row will be deleted.</p><p>The row this cell spans will be deleted. If this is a merged cell that spans multiple rows, all rows that the cell spans will be deleted. If no rows remain in the table after this deletion, the whole table is deleted.</p></td></tr></tbody></table>

## DeleteTableColumnRequest

Deletes a column from a table.

JSON representation

```
{
  "tableCellLocation": {
    object (TableCellLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableCellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The reference table cell location from which the column will be deleted.</p><p>The column this cell spans will be deleted. If this is a merged cell that spans multiple columns, all columns that the cell spans will be deleted. If no columns remain in the table after this deletion, the whole table is deleted.</p></td></tr></tbody></table>

## InsertPageBreakRequest

Inserts a page break followed by a newline at the specified location.

JSON representation

```
{

  "location": {
    object (Location)
  },
  "endOfSegmentLocation": {
    object (EndOfSegmentLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>insertion_location</code>. The location where the page break will be inserted. <code>insertion_location</code> can be only one of the following:</td></tr><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Inserts the page break at a specific index in the document.</p><p>The page break must be inserted inside the bounds of an existing . For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph).</p><p>Page breaks cannot be inserted inside a table, equation, footnote, header or footer. Since page breaks can only be inserted inside the body, the <code>segment ID</code> field must be empty.</p></td></tr><tr><td><code>endOfSegmentLocation</code></td><td><p><code>object (<code>EndOfSegmentLocation</code>)</code></p><p>Inserts the page break at the end of the document body.</p><p>Page breaks cannot be inserted inside a footnote, header or footer. Since page breaks can only be inserted inside the body, the <code>segment ID</code> field must be empty.</p></td></tr></tbody></table>

## DeletePositionedObjectRequest

JSON representation

```
{
  "objectId": string,
  "tabId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectId</code></td><td><p><code>string</code></p><p>The ID of the positioned object to delete.</p></td></tr><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The tab that the positioned object to delete is in. When omitted, the request is applied to the first tab.</p><p>In a document containing a single tab:</p><ul><li><p>If provided, must match the singular tab's ID.</p></li><li><p>If omitted, the request applies to the singular tab.</p></li></ul><p>In a document containing multiple tabs:</p><ul><li><p>If provided, the request applies to the specified tab.</p></li><li><p>If omitted, the request applies to the first tab in the document.</p></li></ul></td></tr></tbody></table>

## UpdateTableColumnPropertiesRequest

JSON representation

```
{
  "tableStartLocation": {
    object (Location)
  },
  "columnIndices": [
    integer
  ],
  "tableColumnProperties": {
    
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableStartLocation</code></td><td><p><code>object (<code>Location</code>)</code></p><p>The location where the table starts in the document.</p></td></tr><tr><td><code>columnIndices[]</code></td><td><p><code>integer</code></p><p>The list of zero-based column indices whose property should be updated. If no indices are specified, all columns will be updated.</p></td></tr><tr><td><code>tableColumnProperties</code></td><td><p>The table column properties to update.</p><p>If the value of <code>tableColumnProperties#width</code> is less than 5 points (5/72 inch), a 400 bad request error is returned.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>tableColumnProperties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the column width, set <code>fields</code> to <code>"width"</code>.</p></td></tr></tbody></table>

## UpdateTableCellStyleRequest

Updates the style of a range of table cells.

JSON representation

```
{
  "tableCellStyle": {
    
  },
  "fields": string,

  "tableRange": {
    object (TableRange)
  },
  "tableStartLocation": {
    object (Location)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableCellStyle</code></td><td><p>The style to set on the table cells.</p><p>When updating borders, if a cell shares a border with an adjacent cell, the corresponding border property of the adjacent cell is updated as well. Borders that are merged and invisible are not updated.</p><p>Since updating a border shared by adjacent cells in the same request can cause conflicting border updates, border updates are applied in the following order:</p><ul><li><code>borderRight</code></li><li><code>borderLeft</code></li><li><code>borderBottom</code></li><li><code>borderTop</code></li></ul></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>tableCellStyle</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the table cell background color, set <code>fields</code> to <code>"backgroundColor"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset.</p></td></tr><tr><td colspan="2">Union field <code>cells</code>. The cells which will be updated. <code>cells</code> can be only one of the following:</td></tr><tr><td><code>tableRange</code></td><td><p><code>object (<code>TableRange</code>)</code></p><p>The table range representing the subset of the table to which the updates are applied.</p></td></tr><tr><td><code>tableStartLocation</code></td><td><p><code>object (<code>Location</code>)</code></p><p>The location where the table starts in the document. When specified, the updates are applied to all the cells in the table.</p></td></tr></tbody></table>

## TableRange

A table range represents a reference to a subset of a table.

It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this:

```
[   ][   ][   ]
[   ][   ][   ]
[             ]
```

A table range with table cell location = (tableStartLocation, row = 0, column = 0), row span = 3 and column span = 2 specifies the following cells:

```
[ x ][ x ][   ]
[ x ][ x ][   ]
[ x    x    x ]
```

JSON representation

```
{
  "tableCellLocation": {
    object (TableCellLocation)
  },
  "rowSpan": integer,
  "columnSpan": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableCellLocation</code></td><td><p><code>object (<code>TableCellLocation</code>)</code></p><p>The cell location where the table range starts.</p></td></tr><tr><td><code>rowSpan</code></td><td><p><code>integer</code></p><p>The row span of the table range.</p></td></tr><tr><td><code>columnSpan</code></td><td><p><code>integer</code></p><p>The column span of the table range.</p></td></tr></tbody></table>

## UpdateTableRowStyleRequest

JSON representation

```
{
  "tableStartLocation": {
    object (Location)
  },
  "rowIndices": [
    integer
  ],
  "tableRowStyle": {
    
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableStartLocation</code></td><td><p><code>object (<code>Location</code>)</code></p><p>The location where the table starts in the document.</p></td></tr><tr><td><code>rowIndices[]</code></td><td><p><code>integer</code></p><p>The list of zero-based row indices whose style should be updated. If no indices are specified, all rows will be updated.</p></td></tr><tr><td><code>tableRowStyle</code></td><td><p>The styles to be set on the rows.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>tableRowStyle</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the minimum row height, set <code>fields</code> to <code>"minRowHeight"</code>.</p></td></tr></tbody></table>

## ReplaceImageRequest

Replaces an existing image with a new image.

Replacing an image removes some from the existing image in order to mirror the behavior of the Docs editor.

JSON representation

```
{
  "imageObjectId": string,
  "uri": string,
  "imageReplaceMethod": enum (ImageReplaceMethod),
  "tabId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>imageObjectId</code></td><td><p><code>string</code></p><p>The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.</p></td></tr><tr><td><code>uri</code></td><td><p><code>string</code></p><p>The URI of the new image.</p><p>The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format.</p><p>The provided URI can't surpass 2 KB in length. The URI is saved with the image, and exposed through the field.</p></td></tr><tr><td><code>imageReplaceMethod</code></td><td><p><code>enum (<code>ImageReplaceMethod</code>)</code></p><p>The replacement method.</p></td></tr><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The tab that the image to be replaced is in. When omitted, the request is applied to the first tab.</p><p>In a document containing a single tab:</p><ul><li><p>If provided, must match the singular tab's ID.</p></li><li><p>If omitted, the request applies to the singular tab.</p></li></ul><p>In a document containing multiple tabs:</p><ul><li><p>If provided, the request applies to the specified tab.</p></li><li><p>If omitted, the request applies to the first tab in the document.</p></li></ul></td></tr></tbody></table>

## ImageReplaceMethod

The image replace method.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>IMAGE_REPLACE_METHOD_UNSPECIFIED</code></td><td>Unspecified image replace method. This value must not be used.</td></tr><tr><td><code>CENTER_CROP</code></td><td>Scales and centers the image to fill the bounds of the original image. The image may be cropped in order to fill the original image's bounds. The rendered size of the image will be the same as the original image.</td></tr></tbody></table>

## UpdateDocumentStyleRequest

JSON representation

```
{
  "documentStyle": {
    
  },
  "fields": string,
  "tabId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>documentStyle</code></td><td><p>The styles to set on the document.</p><p>Certain document style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of for more information.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>documentStyle</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the background, set <code>fields</code> to <code>"background"</code>.</p></td></tr><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The tab that contains the style to update. When omitted, the request applies to the first tab.</p><p>In a document containing a single tab:</p><ul><li><p>If provided, must match the singular tab's ID.</p></li><li><p>If omitted, the request applies to the singular tab.</p></li></ul><p>In a document containing multiple tabs:</p><ul><li><p>If provided, the request applies to the specified tab.</p></li><li><p>If not provided, the request applies to the first tab in the document.</p></li></ul></td></tr></tbody></table>

## MergeTableCellsRequest

JSON representation

```
{
  "tableRange": {
    object (TableRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableRange</code></td><td><p><code>object (<code>TableRange</code>)</code></p><p>The table range specifying which cells of the table to merge.</p><p>Any text in the cells being merged will be concatenated and stored in the "head" cell of the range. This is the upper-left cell of the range when the content direction is left to right, and the upper-right cell of the range otherwise.</p><p>If the range is non-rectangular (which can occur in some cases where the range covers cells that are already merged or where the table is non-rectangular), a 400 bad request error is returned.</p></td></tr></tbody></table>

## UnmergeTableCellsRequest

JSON representation

```
{
  "tableRange": {
    object (TableRange)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableRange</code></td><td><p><code>object (<code>TableRange</code>)</code></p><p>The table range specifying which cells of the table to unmerge.</p><p>All merged cells in this range will be unmerged, and cells that are already unmerged will not be affected. If the range has no merged cells, the request will do nothing.</p><p>If there is text in any of the merged cells, the text will remain in the "head" cell of the resulting block of unmerged cells. The "head" cell is the upper-left cell when the content direction is from left to right, and the upper-right otherwise.</p></td></tr></tbody></table>

## CreateHeaderRequest

Creates a . The new header is applied to the at the location of the if specified, otherwise it is applied to the .

If a header of the specified type already exists, a 400 bad request error is returned.

JSON representation

```
{
  "type": enum (HeaderFooterType),
  "sectionBreakLocation": {
    object (Location)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>HeaderFooterType</code>)</code></p><p>The type of header to create.</p></td></tr><tr><td><code>sectionBreakLocation</code></td><td><p><code>object (<code>Location</code>)</code></p><p>The location of the which begins the section this header should belong to. If `sectionBreakLocation' is unset or if it refers to the first section break in the document body, the header applies to the</p></td></tr></tbody></table>

## CreateFooterRequest

JSON representation

```
{
  "type": enum (HeaderFooterType),
  "sectionBreakLocation": {
    object (Location)
  }
}
```

## CreateFootnoteRequest

Creates a segment and inserts a new to it at the given location.

The new segment will contain a space followed by a newline character.

JSON representation

```
{

  "location": {
    object (Location)
  },
  "endOfSegmentLocation": {
    object (EndOfSegmentLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>footnote_reference_location</code>. The location to insert the footnote reference. <code>footnote_reference_location</code> can be only one of the following:</td></tr><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Inserts the footnote reference at a specific index in the document.</p><p>The footnote reference must be inserted inside the bounds of an existing . For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph).</p><p>Footnote references cannot be inserted inside an equation, header, footer or footnote. Since footnote references can only be inserted in the body, the <code>segment ID</code> field must be empty.</p></td></tr><tr><td><code>endOfSegmentLocation</code></td><td><p><code>object (<code>EndOfSegmentLocation</code>)</code></p><p>Inserts the footnote reference at the end of the document body.</p><p>Footnote references cannot be inserted inside a header, footer or footnote. Since footnote references can only be inserted in the body, the <code>segment ID</code> field must be empty.</p></td></tr></tbody></table>

## ReplaceNamedRangeContentRequest

Replaces the contents of the specified or with the given replacement content.

Note that an individual may consist of multiple discontinuous . In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted.

In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.

JSON representation

```
{
  "tabsCriteria": {
    object (TabsCriteria)
  },

  "text": string

  "namedRangeId": string,
  "namedRangeName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tabsCriteria</code></td><td><p><code>object (<code>TabsCriteria</code>)</code></p><p>Optional. The criteria used to specify in which tabs the replacement occurs. When omitted, the replacement applies to all tabs.</p><p>In a document containing a single tab:</p><ul><li><p>If provided, must match the singular tab's ID.</p></li><li><p>If omitted, the replacement applies to the singular tab.</p></li></ul><p>In a document containing multiple tabs:</p><ul><li><p>If provided, the replacement applies to the specified tabs.</p></li><li><p>If omitted, the replacement applies to all tabs.</p></li></ul></td></tr><tr><td colspan="2">Union field <code>replacement_content</code>. The content to replace the existing content of the named range with. <code>replacement_content</code> can be only one of the following:</td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><p>Replaces the content of the specified named range(s) with the given text.</p></td></tr><tr><td colspan="2">Union field <code>named_range_reference</code>. A reference to the named range(s) whose content will be replaced. <code>named_range_reference</code> can be only one of the following:</td></tr><tr><td><code>namedRangeId</code></td><td><p><code>string</code></p><p>The ID of the named range whose content will be replaced.</p><p>If there is no named range with the given ID a 400 bad request error is returned.</p></td></tr><tr><td><code>namedRangeName</code></td><td><p><code>string</code></p><p>If there are multiple with the given name, then the content of each one will be replaced. If there are no named ranges with the given name, then the request will be a no-op.</p></td></tr></tbody></table>

## UpdateSectionStyleRequest

JSON representation

```
{
  "range": {
    
  },
  "sectionStyle": {
    
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>range</code></td><td><p>The range overlapping the sections to style.</p><p>Because section breaks can only be inserted inside the body, the field must be empty.</p></td></tr><tr><td><code>sectionStyle</code></td><td><p>The styles to be set on the section.</p><p>Certain section style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of for more information.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>sectionStyle</code> is implied and must not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example to update the left margin, set <code>fields</code> to <code>"marginLeft"</code>.</p></td></tr></tbody></table>

## InsertSectionBreakRequest

Inserts a section break at the given location.

A newline character will be inserted before the section break.

JSON representation

```
{
  "sectionType": ,

  "location": {
    object (Location)
  },
  "endOfSegmentLocation": {
    object (EndOfSegmentLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sectionType</code></td><td><p>The type of section to insert.</p></td></tr><tr><td colspan="2">Union field <code>insertion_location</code>. The location where the break will be inserted. <code>insertion_location</code> can be only one of the following:</td></tr><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Inserts a newline and a section break at a specific index in the document.</p><p>The section break must be inserted inside the bounds of an existing . For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph).</p><p>Section breaks cannot be inserted inside a table, equation, footnote, header, or footer. Since section breaks can only be inserted inside the body, the <code>segment ID</code> field must be empty.</p></td></tr><tr><td><code>endOfSegmentLocation</code></td><td><p><code>object (<code>EndOfSegmentLocation</code>)</code></p><p>Inserts a newline and a section break at the end of the document body.</p><p>Section breaks cannot be inserted inside a footnote, header or footer. Because section breaks can only be inserted inside the body, the <code>segment ID</code> field must be empty.</p></td></tr></tbody></table>

## DeleteHeaderRequest

JSON representation

```
{
  "headerId": string,
  "tabId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>headerId</code></td><td><p><code>string</code></p><p>The id of the header to delete. If this header is defined on , the reference to this header is removed, resulting in no header of that type for the first section of the document. If this header is defined on a , the reference to this header is removed and the header of that type is now continued from the previous section.</p></td></tr><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The tab containing the header to delete. When omitted, the request is applied to the first tab.</p><p>In a document containing a single tab:</p><ul><li><p>If provided, must match the singular tab's ID.</p></li><li><p>If omitted, the request applies to the singular tab.</p></li></ul><p>In a document containing multiple tabs:</p><ul><li><p>If provided, the request applies to the specified tab.</p></li><li><p>If omitted, the request applies to the first tab in the document.</p></li></ul></td></tr></tbody></table>

## DeleteFooterRequest

JSON representation

```
{
  "footerId": string,
  "tabId": string
}
```

## PinTableHeaderRowsRequest

Updates the number of pinned table header rows in a table.

JSON representation

```
{
  "tableStartLocation": {
    object (Location)
  },
  "pinnedHeaderRowsCount": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tableStartLocation</code></td><td><p><code>object (<code>Location</code>)</code></p><p>The location where the table starts in the document.</p></td></tr><tr><td><code>pinnedHeaderRowsCount</code></td><td><p><code>integer</code></p><p>The number of table rows to pin, where 0 implies that all rows are unpinned.</p></td></tr></tbody></table>

## AddDocumentTabRequest

Adds a document tab. When a tab is added at a given index, all subsequent tabs' indexes are incremented.

JSON representation

```
{
  "tabProperties": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tabProperties</code></td><td><p>The properties of the tab to add. All properties are optional.</p></td></tr></tbody></table>

## DeleteTabRequest

Deletes a tab. If the tab has child tabs, they are deleted as well.

JSON representation

```
{
  "tabId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The ID of the tab to delete.</p></td></tr></tbody></table>

## UpdateDocumentTabPropertiesRequest

Update the properties of a document tab.

JSON representation

```
{
  "tabProperties": {
    
  },
  "fields": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>tabProperties</code></td><td><p>The tab properties to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The fields that should be updated.</p><p>At least one field must be specified. The root <code>tabProperties</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p></td></tr></tbody></table>

## InsertPersonRequest

Inserts a person mention.

JSON representation

```
{
  "personProperties": {
    
  },

  "location": {
    object (Location)
  },
  "endOfSegmentLocation": {
    object (EndOfSegmentLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>personProperties</code></td><td><p>The properties of the person mention to insert.</p></td></tr><tr><td colspan="2">Union field <code>insertion_location</code>. The location where the person mention will be inserted. <code>insertion_location</code> can be only one of the following:</td></tr><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Inserts the person mention at a specific index in the document.</p><p>The person mention must be inserted inside the bounds of an existing . For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph).</p><p>Person mentions cannot be inserted inside an equation.</p></td></tr><tr><td><code>endOfSegmentLocation</code></td><td><p><code>object (<code>EndOfSegmentLocation</code>)</code></p><p>Inserts the person mention at the end of a header, footer, footnote or the document body.</p></td></tr></tbody></table>

## UpdateNamedStyleRequest

Updates a named style.

JSON representation

```
{
  "namedStyle": {
    
  },
  "fields": string,
  "tabId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>namedStyle</code></td><td><p>The document style to update.</p></td></tr><tr><td><code>fields</code></td><td><p><code>string (<code>FieldMask</code>
        format)</code></p><p>The NamedStyle fields that should be updated.</p><p>At least <code>namedStyleType</code> must be specified. The root <code>namedStyle</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for listing every field.</p><p>For example, to update the text style to bold, set <code>fields</code> to include <code>"textStyle"</code> and <code>"textStyle.bold"</code>. To update the paragraph style's alignment property, set <code>fields</code> to include <code>"paragraphStyle"</code> and <code>"paragraphStyle.alignment"</code>.</p><p>To reset a property to its default value, include its field name in the field mask but leave the field itself unset. Specifying <code>"textStyle"</code> or <code>"paragraphStyle"</code> with an empty TextStyle or ParagraphStyle will reset all of its nested fields.</p></td></tr><tr><td><code>tabId</code></td><td><p><code>string</code></p><p>The document tab to update. By default, the update is applied to the first tab.</p></td></tr></tbody></table>

## InsertRichLinkRequest

JSON representation

```
{
  "richLinkProperties": {
    
  },

  "location": {
    object (Location)
  },
  "endOfSegmentLocation": {
    object (EndOfSegmentLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>richLinkProperties</code></td><td><p>The properties of the rich link to insert.</p></td></tr><tr><td colspan="2">Union field <code>insertion_location</code>. The location where the rich link will be inserted. <code>insertion_location</code> can be only one of the following:</td></tr><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Inserts the rich link at a specific index in the document.</p><p>The rich link must be inserted inside the bounds of an existing . For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph).</p><p>The rich link cannot be inserted inside an equation.</p></td></tr><tr><td><code>endOfSegmentLocation</code></td><td><p><code>object (<code>EndOfSegmentLocation</code>)</code></p><p>Inserts the rich link at the end of a header, footer, footnote or the document body.</p></td></tr></tbody></table>

## InsertDateRequest

Inserts a date at the specified location.

JSON representation

```
{
  "dateElementProperties": {
    
  },

  "location": {
    object (Location)
  },
  "endOfSegmentLocation": {
    object (EndOfSegmentLocation)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dateElementProperties</code></td><td><p>The properties of the date to insert.</p></td></tr><tr><td colspan="2">Union field <code>insertion_location</code>. The location where the date will be inserted. <code>insertion_location</code> can be only one of the following:</td></tr><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Inserts the date at a specific index in the document.</p><p>The date must be inserted inside the bounds of an existing . For instance, it cannot be inserted at a table's start index (i.e. between an existing table and its preceding paragraph).</p></td></tr><tr><td><code>endOfSegmentLocation</code></td><td><p><code>object (<code>EndOfSegmentLocation</code>)</code></p><p>Inserts the date at the end of the given header, footer or document body.</p></td></tr></tbody></table>
