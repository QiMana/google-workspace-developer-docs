---
source: https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value
root: apps-script
fetched_at: 2026-04-23T15:22:03.068Z
---

# Class RichTextValue

## Page Summary

- RichTextValue represents cell text with substrings that can have different text styles.
- A "run" is the longest unbroken substring with the same text style.
- The RichTextValue class provides methods to access text content, styling, link URLs, and indices within a cell.
- You can retrieve the text style or link URL for the entire value or a specific range using offset parameters.
- The `getRuns()` method splits the Rich Text string into an array of runs based on consistent text styles.

A stylized text string used to represent cell text. Substrings of the text can have different text styles.

A *run* is the longest unbroken substring having the same text style. For example, the sentence, "This **child** *is carrying* apples" has 4 runs: `['This ', 'child ', 'is carrying ', 'apples']`.

## Detailed documentation

### copy()

Returns a builder for a Rich Text value initialized with the values of this Rich Text value.

#### Return

`RichTextValueBuilder` — A builder for a Rich Text value.

---

### getEndIndex()

Gets the end index of this value in the cell.

#### Return

`Integer` — The end index of this value in the cell.

---

### getLinkUrl()

Returns the link URL for this value.

#### Return

`String|null` — The link URL for this value, or `null` if there is no link or if there are multiple different links.

---

### getLinkUrl(startOffset, endOffset)

Returns the link URL for the text from `startOffset` to `endOffset`. Offsets are 0 based and relative to the cell's text, with the start offset being inclusive and the end offset being exclusive.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startOffset` | `Integer` | The start offset. |
| `endOffset` | `Integer` | The end offset. |

#### Return

`String|null` — The link URL for this value, or `null` if there is no link or if multiple different links are in the given range.

---

### getRuns()

Returns the Rich Text string split into an array of runs, wherein each run is the longest possible substring having a consistent text style.

#### Return

`RichTextValue[]` — An array of runs.

---

### getStartIndex()

Gets the start index of this value in the cell.

#### Return

`Integer` — The start index of this value in the cell.

---

### getText()

Returns the text of this value.

#### Return

`String` — The text of this value.

---

### getTextStyle()

Returns the text style of this value.

#### Return

`TextStyle` — The text style of this value.

---

### getTextStyle(startOffset, endOffset)

Returns the text style of the text from `startOffset` to `endOffset`. Offsets are 0 based and relative to the cell's text, with the start offset being inclusive and the end offset being exclusive.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startOffset` | `Integer` | The start offset. |
| `endOffset` | `Integer` | The end offset. |

#### Return

`TextStyle` — The text style of the given substring of this value.
