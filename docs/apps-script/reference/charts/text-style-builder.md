---
source: https://developers.google.com/apps-script/reference/charts/text-style-builder
root: apps-script
fetched_at: 2026-04-23T15:19:20.821Z
---

# Class TextStyleBuilder

## Page Summary

- TextStyleBuilder is used to create TextStyle objects and configure text properties like name, color, and size.
- The `build()` method finalizes the configuration and returns a TextStyle object.
- Methods like `setColor()`, `setFontName()`, and `setFontSize()` allow setting specific text style attributes.
- These setter methods return the TextStyleBuilder itself, enabling method chaining.

A builder used to create objects. It allows configuration of the text's properties such as name, color, and size.

The following example shows how to create a text style using the builder. For a more complete example, refer to the documentation for .

```
// Creates a new text style that uses 26-point, blue, Ariel font.
const textStyleBuilder =
    Charts.newTextStyle().setColor('#0000FF').setFontName('Ariel').setFontSize(
        26);
const style = textStyleBuilder.build();
```

## Detailed documentation

### build()

Builds and returns a text style configuration object that was built using this builder.

```
// Creates a new text style that uses 26-point blue font.
const textStyleBuilder =
    Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
const style = textStyleBuilder.build();
```

#### Return

---

### setColor(cssValue)

Sets the color of the text style.

```
// Creates a new text style that uses blue font.
const textStyleBuilder = Charts.newTextStyle().setColor('#0000FF');
const style = textStyleBuilder.build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cssValue` | `String` | The CSS value for the color (such as `"blue"` or `"#00f"`). |

#### Return

`TextStyleBuilder` — This builder, useful for chaining.

---

### setFontName(fontName)

Sets the font name of the text style.

```
// Creates a new text style that uses Ariel font.
const textStyleBuilder = Charts.newTextStyle().setFontName('Ariel');
const style = textStyleBuilder.build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontName` | `String` | The font name to use for the text style. |

#### Return

`TextStyleBuilder` — This builder, useful for chaining.

---

### setFontSize(fontSize)

Sets the font size of the text style.

```
// Creates a new text style that uses 26-point font.
const textStyleBuilder = Charts.newTextStyle().setFontSize(26);
const style = textStyleBuilder.build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontSize` | `Number` | The font size in pixels to use for the text style. |

#### Return

`TextStyleBuilder` — This builder, useful for chaining.
