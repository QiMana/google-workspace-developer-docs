---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages/text
root: workspace
fetched_at: 2026-04-23T15:31:53.316Z
---

# Text

### TextContent

The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.

JSON representation

```
{
  "textElements": [
    {
      object (TextElement)
    }
  ],
  "lists": {
    string: {
      object (List)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>textElements[]</code></td><td><p><code>object (<code>TextElement</code>)</code></p><p>The text contents broken down into its component parts, including styling information. This property is read-only.</p></td></tr><tr><td><code>lists</code></td><td><p><code>map (key: string, value: object (
        <code>List</code>))</code></p><p>The bulleted lists contained in this text, keyed by list ID.</p></td></tr></tbody></table>

### TextElement

A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.

JSON representation

```
{
  "startIndex": integer,
  "endIndex": integer,

  "paragraphMarker": {
    object (ParagraphMarker)
  },
  "textRun": {
    object (TextRun)
  },
  "autoText": {
    object (AutoText)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>startIndex</code></td><td><p><code>integer</code></p><p>The zero-based start index of this text element, in Unicode code units.</p></td></tr><tr><td><code>endIndex</code></td><td><p><code>integer</code></p><p>The zero-based end index of this text element, exclusive, in Unicode code units.</p></td></tr><tr><td colspan="2">Union field <code>kind</code>. The kind of text that this element represents. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>paragraphMarker</code></td><td><p><code>object (<code>ParagraphMarker</code>)</code></p><p>A marker representing the beginning of a new paragraph.</p><p>The <code>startIndex</code> and <code>endIndex</code> of this TextElement represent the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.</p></td></tr><tr><td><code>textRun</code></td><td><p><code>object (<code>TextRun</code>)</code></p><p>A TextElement representing a run of text where all of the characters in the run have the same <code>TextStyle</code>.</p><p>The <code>startIndex</code> and <code>endIndex</code> of TextRuns will always be fully contained in the index range of a single <code>paragraphMarker</code> TextElement. In other words, a TextRun will never span multiple paragraphs.</p></td></tr><tr><td><code>autoText</code></td><td><p><code>object (<code>AutoText</code>)</code></p><p>A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.</p></td></tr></tbody></table>

### ParagraphMarker

A TextElement kind that represents the beginning of a new paragraph.

JSON representation

```
{
  "style": {
    object (ParagraphStyle)
  },
  "bullet": {
    object (Bullet)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>style</code></td><td><p><code>object (<code>ParagraphStyle</code>)</code></p><p>The paragraph's style</p></td></tr><tr><td><code>bullet</code></td><td><p><code>object (<code>Bullet</code>)</code></p><p>The bullet for this paragraph. If not present, the paragraph does not belong to a list.</p></td></tr></tbody></table>

### ParagraphStyle

Styles that apply to a whole paragraph.

If this text is contained in a shape with a parent `placeholder`, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists:

- A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder.
- A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder.

Inherited paragraph styles are represented as unset fields in this message.

JSON representation

```
{
  "lineSpacing": number,
  "alignment": enum (Alignment),
  "indentStart": {
    object (Dimension)
  },
  "indentEnd": {
    object (Dimension)
  },
  "spaceAbove": {
    object (Dimension)
  },
  "spaceBelow": {
    object (Dimension)
  },
  "indentFirstLine": {
    object (Dimension)
  },
  "direction": enum (TextDirection),
  "spacingMode": enum (SpacingMode)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>lineSpacing</code></td><td><p><code>number</code></p><p>The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>alignment</code></td><td><p><code>enum (<code>Alignment</code>)</code></p><p>The text alignment for this paragraph.</p></td></tr><tr><td><code>indentStart</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current text direction. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>indentEnd</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text direction. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>spaceAbove</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount of extra space above the paragraph. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>spaceBelow</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount of extra space below the paragraph. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>indentFirstLine</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the parent.</p></td></tr><tr><td><code>direction</code></td><td><p><code>enum (<code>TextDirection</code>)</code></p><p>The text direction of this paragraph. If unset, the value defaults to <code>LEFT_TO_RIGHT</code> since text direction is not inherited.</p></td></tr><tr><td><code>spacingMode</code></td><td><p><code>enum (<code>SpacingMode</code>)</code></p><p>The spacing mode for the paragraph.</p></td></tr></tbody></table>

### Alignment

The types of text alignment for a paragraph.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ALIGNMENT_UNSPECIFIED</code></td><td>The paragraph alignment is inherited from the parent.</td></tr><tr><td><code>START</code></td><td>The paragraph is aligned to the start of the line. Left-aligned for LTR text, right-aligned otherwise.</td></tr><tr><td><code>CENTER</code></td><td>The paragraph is centered.</td></tr><tr><td><code>END</code></td><td>The paragraph is aligned to the end of the line. Right-aligned for LTR text, left-aligned otherwise.</td></tr><tr><td><code>JUSTIFIED</code></td><td>The paragraph is justified.</td></tr></tbody></table>

### TextDirection

The directions text can flow in.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TEXT_DIRECTION_UNSPECIFIED</code></td><td>The text direction is inherited from the parent.</td></tr><tr><td><code>LEFT_TO_RIGHT</code></td><td>The text goes from left to right.</td></tr><tr><td><code>RIGHT_TO_LEFT</code></td><td>The text goes from right to left.</td></tr></tbody></table>

### SpacingMode

The different modes for paragraph spacing.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SPACING_MODE_UNSPECIFIED</code></td><td>The spacing mode is inherited from the parent.</td></tr><tr><td><code>NEVER_COLLAPSE</code></td><td>Paragraph spacing is always rendered.</td></tr><tr><td><code>COLLAPSE_LISTS</code></td><td>Paragraph spacing is skipped between list elements.</td></tr></tbody></table>

### Bullet

Describes the bullet of a paragraph.

JSON representation

```
{
  "listId": string,
  "nestingLevel": integer,
  "glyph": string,
  "bulletStyle": {
    object (TextStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>listId</code></td><td><p><code>string</code></p><p>The ID of the list this paragraph belongs to.</p></td></tr><tr><td><code>nestingLevel</code></td><td><p><code>integer</code></p><p>The nesting level of this paragraph in the list.</p></td></tr><tr><td><code>glyph</code></td><td><p><code>string</code></p><p>The rendered bullet glyph for this paragraph.</p></td></tr><tr><td><code>bulletStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The paragraph specific text style applied to this bullet.</p></td></tr></tbody></table>

### TextStyle

Represents the styling that can be applied to a TextRun.

If this text is contained in a shape with a parent `placeholder`, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists:

- A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder.
- A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder.

Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.

JSON representation

```
{
  "backgroundColor": {
    object (OptionalColor)
  },
  "foregroundColor": {
    object (OptionalColor)
  },
  "bold": boolean,
  "italic": boolean,
  "fontFamily": string,
  "fontSize": {
    object (Dimension)
  },
  "link": {
    object (Link)
  },
  "baselineOffset": enum (BaselineOffset),
  "smallCaps": boolean,
  "strikethrough": boolean,
  "underline": boolean,
  "weightedFontFamily": {
    object (WeightedFontFamily)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td><p><code>object (<code>OptionalColor</code>)</code></p><p>The background color of the text. If set, the color is either opaque or transparent, depending on if the <code>opaqueColor</code> field in it is set.</p></td></tr><tr><td><code>foregroundColor</code></td><td><p><code>object (<code>OptionalColor</code>)</code></p><p>The color of the text itself. If set, the color is either opaque or transparent, depending on if the <code>opaqueColor</code> field in it is set.</p></td></tr><tr><td><code>bold</code></td><td><p><code>boolean</code></p><p>Whether or not the text is rendered as bold.</p></td></tr><tr><td><code>italic</code></td><td><p><code>boolean</code></p><p>Whether or not the text is italicized.</p></td></tr><tr><td><code>fontFamily</code></td><td><p><code>string</code></p><p>The font family of the text.</p><p>The font family can be any font from the Font menu in Slides or from <a href="https://fonts.google.com/">Google Fonts</a>. If the font name is unrecognized, the text is rendered in <code>Arial</code>.</p><p>Some fonts can affect the weight of the text. If an update request specifies values for both <code>fontFamily</code> and <code>bold</code>, the explicitly-set <code>bold</code> value is used.</p></td></tr><tr><td><code>fontSize</code></td><td><p><code>object (<code>Dimension</code>)</code></p><p>The size of the text's font. When read, the <code>fontSize</code> will specified in points.</p></td></tr><tr><td><code>link</code></td><td><p><code>object (<code>Link</code>)</code></p><p>The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text.</p><p>Changing the link in an update request causes some other changes to the text style of the range:</p><ul><li>When setting a link, the text foreground color will be set to <code>ThemeColorType.HYPERLINK</code> and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults.</li><li>Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL.</li><li>Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as <code>"ABC\n123"</code>, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline.</li><li>Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.</li></ul></td></tr><tr><td><code>baselineOffset</code></td><td><p><code>enum (<code>BaselineOffset</code>)</code></p><p>The text's vertical offset from its normal position.</p><p>Text with <code>SUPERSCRIPT</code> or <code>SUBSCRIPT</code> baseline offsets is automatically rendered in a smaller font size, computed based on the <code>fontSize</code> field. The <code>fontSize</code> itself is not affected by changes in this field.</p></td></tr><tr><td><code>smallCaps</code></td><td><p><code>boolean</code></p><p>Whether or not the text is in small capital letters.</p></td></tr><tr><td><code>strikethrough</code></td><td><p><code>boolean</code></p><p>Whether or not the text is struck through.</p></td></tr><tr><td><code>underline</code></td><td><p><code>boolean</code></p><p>Whether or not the text is underlined.</p></td></tr><tr><td><code>weightedFontFamily</code></td><td><p><code>object (<code>WeightedFontFamily</code>)</code></p><p>The font family and rendered weight of the text.</p><p>This field is an extension of <code>fontFamily</code> meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of <code>weightedFontFamily#fontFamily</code> will always be equal to that of <code>fontFamily</code>. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard <code>"*"</code>), their values are reconciled as follows:</p><ul><li>If <code>fontFamily</code> is set and <code>weightedFontFamily</code> is not, the value of <code>fontFamily</code> is applied with weight <code>400</code> ("normal").</li><li>If both fields are set, the value of <code>fontFamily</code> must match that of <code>weightedFontFamily#fontFamily</code>. If so, the font family and weight of <code>weightedFontFamily</code> is applied. Otherwise, a 400 bad request error is returned.</li><li>If <code>weightedFontFamily</code> is set and <code>fontFamily</code> is not, the font family and weight of <code>weightedFontFamily</code> is applied.</li><li>If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other.</li></ul><p>If an update request specifies values for both <code>weightedFontFamily</code> and <code>bold</code>, the <code>weightedFontFamily</code> is applied first, then <code>bold</code>.</p><p>If <code>weightedFontFamily#weight</code> is not set, it defaults to <code>400</code>.</p><p>If <code>weightedFontFamily</code> is set, then <code>weightedFontFamily#fontFamily</code> must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.</p></td></tr></tbody></table>

### OptionalColor

A color that can either be fully opaque or fully transparent.

JSON representation

```
{
  "opaqueColor": {
    object (OpaqueColor)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>opaqueColor</code></td><td><p><code>object (<code>OpaqueColor</code>)</code></p><p>If set, this will be used as an opaque color. If unset, this represents a transparent color.</p></td></tr></tbody></table>

### BaselineOffset

The ways in which text can be vertically offset from its normal position.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASELINE_OFFSET_UNSPECIFIED</code></td><td>The text's baseline offset is inherited from the parent.</td></tr><tr><td><code>NONE</code></td><td>The text is not vertically offset.</td></tr><tr><td><code>SUPERSCRIPT</code></td><td>The text is vertically offset upwards (superscript).</td></tr><tr><td><code>SUBSCRIPT</code></td><td>The text is vertically offset downwards (subscript).</td></tr></tbody></table>

### WeightedFontFamily

Represents a font family and weight used to style a TextRun.

JSON representation

```
{
  "fontFamily": string,
  "weight": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fontFamily</code></td><td><p><code>string</code></p><p>The font family of the text.</p><p>The font family can be any font from the Font menu in Slides or from <a href="https://fonts.google.com/">Google Fonts</a>. If the font name is unrecognized, the text is rendered in <code>Arial</code>.</p></td></tr><tr><td><code>weight</code></td><td><p><code>integer</code></p><p>The rendered weight of the text. This field can have any value that is a multiple of <code>100</code> between <code>100</code> and <code>900</code>, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, <a href="https://www.w3.org/TR/CSS21/fonts.html#font-boldness">section 15.6</a>, with non-numerical values disallowed. Weights greater than or equal to <code>700</code> are considered bold, and weights less than <code>700</code> are not bold. The default value is <code>400</code> ("normal").</p></td></tr></tbody></table>

### TextRun

A TextElement kind that represents a run of text that all has the same styling.

JSON representation

```
{
  "content": string,
  "style": {
    object (TextStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>content</code></td><td><p><code>string</code></p><p>The text of this run.</p></td></tr><tr><td><code>style</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The styling applied to this run.</p></td></tr></tbody></table>

### AutoText

A TextElement kind that represents auto text.

JSON representation

```
{
  "type": enum (Type),
  "content": string,
  "style": {
    object (TextStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The type of this auto text.</p></td></tr><tr><td><code>content</code></td><td><p><code>string</code></p><p>The rendered content of this auto text, if available.</p></td></tr><tr><td><code>style</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The styling applied to this auto text.</p></td></tr></tbody></table>

### Type

The types of auto text

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>An unspecified autotext type.</td></tr><tr><td><code>SLIDE_NUMBER</code></td><td>Type for autotext that represents the current slide number.</td></tr></tbody></table>

### List

A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID.

JSON representation

```
{
  "listId": string,
  "nestingLevel": {
    integer: {
      object (NestingLevel)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>listId</code></td><td><p><code>string</code></p><p>The ID of the list.</p></td></tr><tr><td><code>nestingLevel</code></td><td><p><code>map (key: integer, value: object (
        <code>NestingLevel</code>))</code></p><p>A map of nesting levels to the properties of bullets at the associated level. A list has at most nine levels of nesting, so the possible values for the keys of this map are 0 through 8, inclusive.</p></td></tr></tbody></table>

### NestingLevel

Contains properties describing the look and feel of a list bullet at a given level of nesting.

JSON representation

```
{
  "bulletStyle": {
    object (TextStyle)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bulletStyle</code></td><td><p><code>object (<code>TextStyle</code>)</code></p><p>The style of a bullet at this level of nesting.</p></td></tr></tbody></table>
