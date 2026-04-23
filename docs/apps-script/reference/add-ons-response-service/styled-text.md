---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/styled-text
root: apps-script
fetched_at: 2026-04-23T15:18:41.751Z
---

# Class StyledText

Text element with styles such as bold, italic and color.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const styledText = AddOnsResponseService.newStyledText()
  .setText("Styled Text!")
  .addStyle(AddOnsResponseService.TextStyle.ITALIC)
  .addStyle(AddOnsResponseService.TextStyle.UNDERLINE)
  .setFontWeight(AddOnsResponseService.FontWeight.BOLD)
  .setColor(
    AddOnsResponseService.newColor()
      .setRed(0.1)
      .setBlue(0.3)
      .setGreen(0.1)
      .setAlpha(0.78)
  );
```

## Detailed documentation

### addStyle(style)

Sets the style of the styled text, can apply multiple styles to a single styled text.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `style` | `TextStyle` | The `TextStyle` of the styled text. |

#### Return

`StyledText` — This styled text object, for chaining.

---

### setColor(color)

Sets the color of the styled text.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The `Color` of the styled text. |

#### Return

`StyledText` — This styled text object, for chaining.

---

### setFontWeight(fontWeight)

Sets the font weight of the styled text.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontWeight` | `FontWeight` | The `FontWeight` of the styled text. |

#### Return

`StyledText` — This styled text object, for chaining.

---

### setText(text)

Sets the main content of the styled text.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The text message in the styled text. |

#### Return

`StyledText` — This styled text object, for chaining.
