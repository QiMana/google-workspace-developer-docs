---
source: https://developers.google.com/apps-script/reference/slides/color
root: apps-script
fetched_at: 2026-04-23T15:21:02.019Z
---

# Class Color

## Page Summary

- The Color class represents an opaque color.
- The `asRgbColor()` method converts the color to an RgbColor.
- The `asThemeColor()` method converts the color to a ThemeColor.
- The `getColorType()` method gets the type of the color.

An opaque color

## Detailed documentation

### asRgbColor()

Converts this color to an `RgbColor`.

#### Return

`RgbColor` — The color as an `RgbColor`.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the color is not an `RgbColor`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### asThemeColor()

Converts this color to a `ThemeColor`.

#### Return

`ThemeColor` — The color as a `ThemeColor`.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the color is not a `ThemeColor`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getColorType()

Get the type of this color.

#### Return

`ColorType` — The color type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
