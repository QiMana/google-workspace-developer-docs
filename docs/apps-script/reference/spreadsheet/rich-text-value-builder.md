---
source: https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value-builder
root: apps-script
fetched_at: 2026-04-23T15:22:03.216Z
---

# Class RichTextValueBuilder

## Page Summary

- `RichTextValueBuilder` is used to create Rich Text values.
- The builder includes methods to set text, apply text styles, and set link URLs.
- Styles and link URLs can be applied to the entire value or specific substrings using offsets.
- The `build()` method finalizes the creation of the `RichTextValue`.

A builder for Rich Text values.

## Detailed documentation

### build()

Creates a Rich Text value from this builder.

#### Return

---

### setLinkUrl(startOffset, endOffset, linkUrl)

Sets the link URL for the given substring of this value, or clears it if `linkUrl` is `null`.

```
// Creates a Rich Text value for the text "foo no baz" with "foo" pointing to
// "https://bar.foo" and "baz" to "https://abc.xyz".
// "foo" is underlined with the default link color, whereas "baz" has its text
// style overridden by a call to \`setTextStyle\`, and is therefore black and bold
// with no underlining.
const boldStyle = SpreadsheetApp.newTextStyle()
                      .setUnderline(false)
                      .setBold(true)
                      .setForegroundColor('#000000')
                      .build();
const value = SpreadsheetApp.newRichTextValue()
                  .setText('foo no baz')
                  .setLinkUrl(0, 3, 'https://bar.foo')
                  .setLinkUrl(7, 10, 'https://abc.xyz')
                  .setTextStyle(7, 10, boldStyle)
                  .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startOffset` | `Integer` | The start offset for the substring, inclusive. |
| `endOffset` | `Integer` | The end offset for the substring, exclusive. |
| `linkUrl` | `String` | The link URL being set. |

#### Return

`RichTextValueBuilder` — This builder, for chaining.

---

### setLinkUrl(linkUrl)

Sets the link URL for the entire value, or clears it if `linkUrl` is `null`.

```
// Creates a Rich Text value for the text "Foo" which points to
// "https://bar.foo".
const value = SpreadsheetApp.newRichTextValue()
                  .setText('Foo')
                  .setLinkUrl('https://bar.foo')
                  .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `linkUrl` | `String` | The link URL being set. |

#### Return

`RichTextValueBuilder` — This builder, for chaining.

---

### setText(text)

Sets the text for this value and clears any existing text style. When creating a new Rich Text value, this should be called before `setTextStyle(startOffset, endOffset, textStyle)`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text for this value. |

#### Return

`RichTextValueBuilder` — This builder, for chaining.

---

### setTextStyle(startOffset, endOffset, textStyle)

Applies a text style to the given substring of this value. Offsets are 0 based and are relative to the cell's text value. Does nothing if `textStyle` is `null`.

```
// Creates a Rich Text value for the text "HelloWorld", with "Hello" bolded, and
// "World" italicized.
const bold = SpreadsheetApp.newTextStyle().setBold(true).build();
const italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
const value = SpreadsheetApp.newRichTextValue()
                  .setText('HelloWorld')
                  .setTextStyle(0, 5, bold)
                  .setTextStyle(5, 10, italic)
                  .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startOffset` | `Integer` | The start offset for the substring, inclusive. |
| `endOffset` | `Integer` | The end offset for the substring, exclusive. |
| `textStyle` | `TextStyle` | The text style being set. |

#### Return

`RichTextValueBuilder` — This builder, for chaining.

---

### setTextStyle(textStyle)

Applies a text style to the entire value. Previously set text styles are only affected if they are directly overwritten by values within `textStyle`. Does nothing if `textStyle` is `null`.

```
// Creates a Rich Text value for the text "HelloWorld" with "Hello" bolded and
// italicized, and "World" only italicized.
const bold = SpreadsheetApp.newTextStyle().setBold(true).build();
const italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
const value = SpreadsheetApp.newRichTextValue()
                  .setText('HelloWorld')
                  .setTextStyle(0, 5, bold)
                  .setTextStyle(italic)
                  .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `textStyle` | `TextStyle` | The text style being set. |

#### Return

`RichTextValueBuilder` — This builder, for chaining.
