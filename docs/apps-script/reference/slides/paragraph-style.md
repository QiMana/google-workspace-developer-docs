---
source: https://developers.google.com/apps-script/reference/slides/paragraph-style
root: apps-script
fetched_at: 2026-04-23T15:21:11.496Z
---

# Class ParagraphStyle

## Page Summary

- ParagraphStyle applies text styles to entire paragraphs.
- Reading methods for ParagraphStyle return null if the TextRange spans paragraphs with different styles.
- To avoid issues with reading styles across multiple paragraphs, query using the TextRange returned by Paragraph.getRange().
- Editing text fit within a shape deactivates any autofit settings on paragraph styles.
- ParagraphStyle provides methods to get and set indentation, line spacing, alignment, spacing above and below, spacing mode, and text direction.

The styles of text that apply to entire paragraphs.

Read methods in this class return `null` if the corresponding `TextRange` spans multiple paragraphs, and those paragraphs have different values for the read method being called. To avoid this, query for paragraph styles using the `TextRange` returned by the method.

If you use methods that edit how text fits within a shape, any autofit settings applied to the paragraph styles are deactivated.

## Detailed documentation

### getIndentEnd()

Returns the text end indentation for paragraphs in the `TextRange` in points, or `null` if there are multiple paragraph styles on the given text.

The side that corresponds to the end of the text is based on the current text direction.

#### Return

`Number|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getIndentFirstLine()

Returns the indentation for the first line of paragraphs in the `TextRange` in points, or `null` if there are multiple paragraph styles on the given text.

#### Return

`Number|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getIndentStart()

Returns the text start indentation for paragraphs in the `TextRange` in points, or `null` if there are multiple paragraph styles on the given text.

The side that corresponds to the start of the text is based on the current text direction.

#### Return

`Number|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getLineSpacing()

Returns the line spacing, or `null` if there are multiple paragraph styles on the given text.

This is a value that corresponds to the space between lines, as a percentage of normal. Normal is represented as 100.0.

#### Return

`Number|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getParagraphAlignment()

Returns the `ParagraphAlignment` of paragraphs in the `TextRange`, or `null` if there are multiple paragraph styles on the given text.

#### Return

`ParagraphAlignment|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSpaceAbove()

Returns the extra space above paragraphs in the `TextRange` in points, or `null` if there are multiple paragraph styles on the given text.

#### Return

`Number|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSpaceBelow()

Returns the extra space below paragraphs in the `TextRange` in points, or `null` if there are multiple paragraph styles on the given text.

#### Return

`Number|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSpacingMode()

Returns the `SpacingMode` for paragraphs in the `TextRange`, or `null` if there are multiple paragraph styles on the given text.

#### Return

`SpacingMode|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getTextDirection()

Returns the `TextDirection` for paragraphs in the `TextRange`, or `null` if there are multiple paragraph styles on the given text.

#### Return

`TextDirection|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setIndentEnd(indent)

Sets the text end indentation for paragraphs in the `TextRange` in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `indent` | `Number` | The indentation to set. |

#### Return

`ParagraphStyle` — This `ParagraphStyle`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setIndentFirstLine(indent)

Sets the indentation for the first line of paragraphs in the `TextRange` in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `indent` | `Number` | The indentation to set. |

#### Return

`ParagraphStyle` — This `ParagraphStyle`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setIndentStart(indent)

Sets the text start indentation for paragraphs in the `TextRange` in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `indent` | `Number` | The indentation to set. |

#### Return

`ParagraphStyle` — This `ParagraphStyle`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setLineSpacing(spacing)

Sets the line spacing.

This is a value that corresponds to the space between lines, as a percentage of normal.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `spacing` | `Number` | The spacing to set. |

#### Return

`ParagraphStyle` — This `ParagraphStyle`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setParagraphAlignment(alignment)

Sets the `ParagraphAlignment` of paragraphs in the `TextRange`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignment` | `ParagraphAlignment` | The alignment to set. |

#### Return

`ParagraphStyle` — This `ParagraphStyle`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSpaceAbove(space)

Sets the extra space above paragraphs in the `TextRange` in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `space` | `Number` | The space above to set. |

#### Return

`ParagraphStyle` — This `ParagraphStyle`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSpaceBelow(space)

Sets the extra space below paragraphs in the `TextRange` in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `space` | `Number` | The space below to set. |

#### Return

`ParagraphStyle` — This `ParagraphStyle`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSpacingMode(mode)

Sets the `SpacingMode` for paragraphs in the `TextRange`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `mode` | `SpacingMode` | The spacing mode to set. |

#### Return

`ParagraphStyle` — This `ParagraphStyle`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setTextDirection(direction)

Sets the `TextDirection` for paragraphs in the `TextRange`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `direction` | `TextDirection` | The text direction to set. |

#### Return

`ParagraphStyle` — This `ParagraphStyle`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
