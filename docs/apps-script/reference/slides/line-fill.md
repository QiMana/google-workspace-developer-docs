---
source: https://developers.google.com/apps-script/reference/slides/line-fill
root: apps-script
fetched_at: 2026-04-23T15:21:08.515Z
---

# Class LineFill

## Page Summary

- LineFill describes the fill of a line or outline.
- You can get the type of line fill using `getFillType()`.
- You can retrieve the solid fill of a line using `getSolidFill()`, which returns `null` if the fill type is not `LineFillType.SOLID`.
- The solid fill can be set using various methods that accept different color representations and an optional alpha value.
- All methods related to LineFill require authorization with either `https://www.googleapis.com/auth/presentations.currentonly` or `https://www.googleapis.com/auth/presentations` scopes.

Describes the fill of a line or outline

## Detailed documentation

### getFillType()

Gets the type of the line fill.

#### Return

`LineFillType`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSolidFill()

Gets the solid fill of the line, or `null` if the fill type is not `LineFillType.SOLID`.

#### Return

`SolidFill|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(color)

Sets the solid fill to the given `Color`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The color to set. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(color, alpha)

Sets the solid fill to the given alpha and `Color`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The color to set. |
| `alpha` | `Number` | The alpha value (transparency). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(red, green, blue)

Sets the solid fill to the given RGB values.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `red` | `Integer` | The red component. |
| `green` | `Integer` | The green component. |
| `blue` | `Integer` | The blue component. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(red, green, blue, alpha)

Sets the solid fill to the given alpha and RGB values.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `red` | `Integer` | The red component. |
| `green` | `Integer` | The green component. |
| `blue` | `Integer` | The blue component. |
| `alpha` | `Number` | The alpha value (transparency). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(hexString)

Sets the solid fill to the given hex color string.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hexString` | `String` | The hex color string. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(hexString, alpha)

Sets the solid fill to the given alpha and hex color string.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hexString` | `String` | The hex color string. |
| `alpha` | `Number` | The alpha value (transparency). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(color)

Sets the solid fill to the given `ThemeColorType`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `ThemeColorType` | The theme color type. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setSolidFill(color, alpha)

Sets the solid fill to the given alpha and `ThemeColorType`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `ThemeColorType` | The theme color type. |
| `alpha` | `Number` | The alpha value (transparency). |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
