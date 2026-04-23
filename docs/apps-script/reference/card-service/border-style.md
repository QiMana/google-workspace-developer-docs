---
source: https://developers.google.com/apps-script/reference/card-service/border-style
root: apps-script
fetched_at: 2026-04-23T15:18:58.364Z
---

# Class BorderStyle

## Page Summary

- BorderStyle is a class representing a complete border style for widgets.
- BorderStyle enums are accessed through the parent class, name, and property.
- The BorderStyle class includes methods to set the corner radius, stroke color, and type of the border.

A class that represents a complete border style that can be applied to widgets.

To call an enum, you call its parent class, name, and property. For example, ` CardService.BorderStyle.NO_BORDER`.

## Detailed documentation

### setCornerRadius(radius)

Sets the corner radius of the border, for example 8.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `radius` | `Integer` | The corner radius to be applied to the border. |

#### Return

`BorderStyle` — This object, for chaining.

---

### setStrokeColor(color)

Sets the color of the border.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The color in #RGB format to be applied to the border. |

#### Return

`BorderStyle` — This object, for chaining.

---

### setType(type)

Sets the type of the border.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `BorderType` | The border type. |

#### Return

`BorderStyle` — This object, for chaining.
