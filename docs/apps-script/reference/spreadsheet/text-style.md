---
source: https://developers.google.com/apps-script/reference/spreadsheet/text-style
root: apps-script
fetched_at: 2026-04-23T15:22:03.567Z
---

# Class TextStyle

## Page Summary

- TextStyle defines the rendered style of text in a cell and can have a corresponding RichTextValue.
- If a RichTextValue spans multiple text runs with different style values, a method attempting to read that style will return `null`.
- To avoid getting `null` when querying text styles, use the RichTextValue.getRuns() method.
- TextStyle provides methods to retrieve font properties like family, size, color, and boolean states for bold, italic, strikethrough, and underline.
- The getForegroundColor() method is deprecated and has been replaced by getForegroundColorObject().

The rendered style of text in a cell.

Text styles can have a corresponding `RichTextValue`. If the `RichTextValue` spans multiple text runs that have different values for a given text style read method, the method returns `null`. To avoid this, query for text styles using the Rich Text values returned by the `RichTextValue.getRuns()` method.

## Detailed documentation

### copy()

Creates a text style builder initialized with the values of this text style.

#### Return

`TextStyleBuilder` — A builder from this text style.

---

### getFontFamily()

Gets the font family of the text. Returns `null` if the font family isn't set or the corresponding `RichTextValue` has multiple runs with different font families.

#### Return

`String` — The font family of the text (for example, "Arial") or `null`.

---

### getFontSize()

Gets the font size of the text in points. Returns `null` if the font size isn't set or the corresponding `RichTextValue` has multiple runs with different font sizes.

#### Return

`Integer` — The font size of the text or `null`.

---

### getForegroundColorObject()

Gets the font color of the text. Returns `null` if the font color isn't set or the corresponding `RichTextValue` has multiple runs with different font colors.

#### Return

`Color|null` — The font color of the text or `null`.

---

### isBold()

Gets whether or not the text is bold. Returns `null` if bold isn't set or the corresponding `RichTextValue` has multiple runs with different bold settings.

#### Return

`Boolean` — Whether or not the cell is bold, or `null`.

---

### isItalic()

Gets whether or not the cell is italic. Returns `null` if italic isn't set or the corresponding `RichTextValue` has multiple runs with different italic settings.

#### Return

`Boolean` — Whether or not the cell is italic, or `null`.

---

### isStrikethrough()

Gets whether or not the cell has strikethrough. Returns `null` if strikethrough isn't set or the corresponding `RichTextValue` has multiple runs with different strikethrough settings.

#### Return

`Boolean` — Whether or not the cell has strikethrough, or `null`.

---

### isUnderline()

Gets whether or not the cell is underlined. Returns `null` if underline isn't set or the corresponding `RichTextValue` has multiple runs with different underline settings.

#### Return

`Boolean` — Whether or not the cell is underlined, or `null`.

## Deprecated methods

### getForegroundColor()

**Deprecated.** Replaced by `getForegroundColorObject()`

Gets the font color of the text. Returns `null` if the font color isn't set or the corresponding `RichTextValue` has multiple runs with different font colors.

#### Return

`String|null` — The font color of the text as a hex CSS value (for example, "#ff0000") or `null`.
