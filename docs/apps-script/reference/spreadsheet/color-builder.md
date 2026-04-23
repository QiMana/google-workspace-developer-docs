---
source: https://developers.google.com/apps-script/reference/spreadsheet/color-builder
root: apps-script
fetched_at: 2026-04-23T15:21:24.919Z
---

# Class ColorBuilder

## Page Summary

- ColorBuilder is a builder for creating color objects in Apps Script spreadsheets.
- A new ColorBuilder is created using SpreadsheetApp.newColor().
- The builder allows setting a color as either an RGB color using a CSS string or as a theme color using a ThemeColorType.
- Once configured, the build() method creates the final Color object.
- You can also convert a built color object to its RgbColor or ThemeColor representation and get its ColorType.

The builder for `ColorBuilder`. To create a new builder, use `SpreadsheetApp.newColor()`.

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

### build()

Creates a color object from the settings supplied to the builder.

#### Return

---

### getColorType()

Get the type of this color.

#### Return

`ColorType` — The color type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setRgbColor(cssString)

Sets as RGB color.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cssString` | `String` | The RGB color in CSS notation (such as '#ffffff'). |

#### Return

`ColorBuilder` — This builder, for chaining.

---

### setThemeColor(themeColorType)

Sets as theme color.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `themeColorType` | `ThemeColorType` | The theme color type. |

#### Return

`ColorBuilder` — This builder, for chaining.
