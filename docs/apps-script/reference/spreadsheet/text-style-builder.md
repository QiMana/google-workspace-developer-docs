---
source: https://developers.google.com/apps-script/reference/spreadsheet/text-style-builder
root: apps-script
fetched_at: 2026-04-23T15:22:06.993Z
---

# Class TextStyleBuilder

## Page Summary

- TextStyleBuilder is used to create text styles.
- It provides methods to set properties like bold, italic, underline, strikethrough, font family, font size, and foreground color.
- The `build()` method creates the final TextStyle object from the builder.
- Most methods return the TextStyleBuilder itself, allowing for method chaining.

A builder for text styles.

## Detailed documentation

### build()

Creates a text style from this builder.

#### Return

---

### setBold(bold)

Sets whether or not the text is bold.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `bold` | `Boolean` | Whether or not the text is bold. |

#### Return

`TextStyleBuilder` — The builder for chaining.

---

### setFontFamily(fontFamily)

Sets the text font family, such as "Arial".

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontFamily` | `String` | The desired font family. |

#### Return

`TextStyleBuilder` — The builder for chaining.

---

### setFontSize(fontSize)

Sets the text font size in points.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontSize` | `Integer` | The desired font size. |

#### Return

`TextStyleBuilder` — The builder for chaining.

---

### setForegroundColor(cssString)

Sets the text font color.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cssString` | `String` | The desired font color in CSS notation (such as `'#ffffff'` or `'white'`). |

#### Return

`TextStyleBuilder` — The builder for chaining.

---

### setForegroundColorObject(color)

Sets the text font color.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The desired font color. |

#### Return

`TextStyleBuilder` — The builder for chaining.

---

### setItalic(italic)

Sets whether or not the text is italic.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `italic` | `Boolean` | Whether or not the text is italic. |

#### Return

`TextStyleBuilder` — The builder for chaining.

---

### setStrikethrough(strikethrough)

Sets whether or not the text has strikethrough.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `strikethrough` | `Boolean` | Whether or not the text has strikethrough. |

#### Return

`TextStyleBuilder` — The builder for chaining.

---

### setUnderline(underline)

Sets whether or not the text is underlined.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `underline` | `Boolean` | Whether or not the text is underlined. |

#### Return

`TextStyleBuilder` — The builder for chaining.
