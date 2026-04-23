---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/color
root: apps-script
fetched_at: 2026-04-23T15:18:36.830Z
---

# Class Color

A Color object which represents a color in the RGBA color space.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const errorStyledText = AddOnsResponseService.newStyledText()
  .setText("Styled Text!")
  .addStyle(AddOnsResponseService.TextStyle.UNDERLINE)
  .setColor(
    AddOnsResponseService.newColor()
      .setRed(0.1)
      .setBlue(1.0)
      .setGreen(1.0)
      .setAlpha(0.78)
  )
```

## Detailed documentation

### setAlpha(alpha)

Sets the alpha component of the color.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alpha` | `Number` | The alpha component of the color. |

#### Return

`Color` — This object, for chaining.

---

### setBlue(blue)

Sets the blue component of the color.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blue` | `Number` | The blue component of the color. |

#### Return

`Color` — This object, for chaining.

---

### setGreen(green)

Sets the green component of the color.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `green` | `Number` | The green component of the color. |

#### Return

`Color` — This object, for chaining.

---

### setRed(red)

Sets the red component of the color.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `red` | `Number` | The red component of the color. |

#### Return

`Color` — This object, for chaining.
