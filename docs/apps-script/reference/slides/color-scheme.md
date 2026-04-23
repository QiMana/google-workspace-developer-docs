---
source: https://developers.google.com/apps-script/reference/slides/color-scheme
root: apps-script
fetched_at: 2026-04-23T15:21:02.411Z
---

# Class ColorScheme

## Page Summary

- A ColorScheme maps ThemeColorTypes to actual colors used for rendering.
- You can retrieve the concrete color associated with a ThemeColorType using `getConcreteColor`.
- The available ThemeColorTypes in a scheme can be listed using `getThemeColors`.
- You can set the concrete color for a ThemeColorType using `setConcreteColor` with a Color object, RGB values, or a hex string.

A color scheme defines a mapping from members of `ThemeColorType` to the actual colors used to render them.

## Detailed documentation

### getConcreteColor(theme)

Returns the concrete associated with the `ThemeColorType` in this color scheme.

The returned color is guaranteed to not be an instance of `ThemeColor`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `theme` | `ThemeColorType` | The theme color to derive the concrete color from. |

#### Return

— The concrete color corresponding the theme color type in this scheme.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getThemeColors()

Returns a list of all possible theme color types in a color scheme.

#### Return

`ThemeColorType[]` — The possible theme color types in this scheme.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setConcreteColor(type, color)

Sets the concrete color associated with the `ThemeColorType` in this color scheme to the given color.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `ThemeColorType` | The theme color type. |
| `color` |  | The color to set the theme color type to. |

#### Return

`ColorScheme` — This color scheme, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setConcreteColor(type, red, green, blue)

Sets the concrete color associated with the `ThemeColorType` in this color scheme to the given color in RGB format.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `ThemeColorType` | The theme color type. |
| `red` | `Integer` | The red value of the color to set the theme color type to (between 0 and 255). |
| `green` | `Integer` | The green value of the color to set the theme color type to (between 0 and 255). |
| `blue` | `Integer` | The blue value of the color to set the theme color type to (between 0 and 255). |

#### Return

`ColorScheme` — This color scheme, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setConcreteColor(type, hexColor)

Sets the concrete color associated with the `ThemeColorType` in this color scheme to the given color in HEX format.

The hex string must be in the format '#RRGGBB'.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `ThemeColorType` | The theme color type. |
| `hexColor` | `String` | The hex color to set the theme color type to, such as '#F304a7'. |

#### Return

`ColorScheme` — This color scheme, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
