---
source: https://developers.google.com/apps-script/reference/slides/fill
root: apps-script
fetched_at: 2026-04-23T15:21:05.543Z
---

# Class Fill

## Page Summary

- Fill describes the background of a page element.
- You can get the solid fill, fill type, and visibility status of a fill.
- Solid fills can be set using Color objects, RGB values, hex strings, or ThemeColorType.
- You can set the fill to transparent.

Describes the page element's background

## Detailed documentation

### getSolidFill()

Get the solid fill of this background, or `null` if the fill type is not `FillType.SOLID`.

#### Return

`SolidFill|null` — The solid fill setting, or `null` if this fill type is not solid.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getType()

Get the type of this fill.

#### Return

`FillType` — The type of this fill.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### isVisible()

Whether the background is visible.

#### Return

`Boolean` — `true` if the background is visible; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setTransparent()

Sets the background to transparent.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
