---
source: https://developers.google.com/apps-script/reference/spreadsheet/color
root: apps-script
fetched_at: 2026-04-23T15:21:26.056Z
---

# Class Color

## Page Summary

- The Color object represents a color and can be converted to an RgbColor or a ThemeColor.
- You can get the type of the color using the `getColorType()` method.
- Converting to RgbColor or ThemeColor may throw an error if the color is not of that type.
- Using these methods requires specific spreadsheet authorization scopes.

A representation for a color.

## Detailed documentation

### asRgbColor()

Converts this color to an `RgbColor`.

#### Return

`RgbColor` — The RGB color.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the color is not an `RgbColor`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### asThemeColor()

Converts this color to a `ThemeColor`.

#### Return

`ThemeColor` — The theme color.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the color is not a `ThemeColor`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getColorType()

Get the type of this color.

#### Return

`ColorType` — The color type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
