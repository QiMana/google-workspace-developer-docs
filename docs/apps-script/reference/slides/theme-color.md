---
source: https://developers.google.com/apps-script/reference/slides/theme-color
root: apps-script
fetched_at: 2026-04-23T15:21:18.539Z
---

# Class ThemeColor

## Page Summary

- ThemeColor refers to a color based on an entry in the page's ColorScheme.
- The `getColorType()` method returns the type of the color as a ColorType.
- The `getThemeColorType()` method returns the theme color type of the color as a ThemeColorType.
- Both methods require specific authorization scopes to be used in scripts.

A color that refers to an entry in the page's `ColorScheme`.

## Detailed documentation

### getColorType()

Get the type of this color.

#### Return

`ColorType` — The color type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getThemeColorType()

Get the theme color type of this color.

#### Return

`ThemeColorType`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
