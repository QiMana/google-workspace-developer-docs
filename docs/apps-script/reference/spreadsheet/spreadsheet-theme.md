---
source: https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-theme
root: apps-script
fetched_at: 2026-04-23T15:22:03.459Z
---

# Class SpreadsheetTheme

## Page Summary

- SpreadsheetTheme allows access and modification of existing spreadsheet themes.
- You can set a theme on a spreadsheet using `Spreadsheet.setSpreadsheetTheme(theme)`.
- Methods are available to get and set concrete colors for theme color types and to get and set the font family of a theme.
- Methods like `getConcreteColor` and `getFontFamily` return theme properties, while methods like `setConcreteColor` and `setFontFamily` modify them and return the theme object for chaining.
- Using these methods requires specific authorization scopes related to accessing and modifying spreadsheets.

Access and modify existing themes. To set a theme on a spreadsheet, use .

## Detailed documentation

### getConcreteColor(themeColorType)

Returns the concrete `Color` for a valid theme color type. Throws exception if the theme color type is not set in the current theme.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `themeColorType` | `ThemeColorType` | Theme color type. |

#### Return

`Color` — Concrete color.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontFamily()

Returns the font family of the theme, or `null` if it's a `null` theme.

#### Return

`String|null` — The theme font family.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getThemeColors()

Returns a list of all possible theme color types for the current theme.

#### Return

`ThemeColorType[]` — A list of theme colors.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setConcreteColor(themeColorType, color)

Sets the concrete color associated with the `ThemeColorType` in this color scheme to the given color.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `themeColorType` | `ThemeColorType` | The theme color type. |
| `color` | `Color` | The color. |

#### Return

`SpreadsheetTheme` — The theme, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setConcreteColor(themeColorType, red, green, blue)

Sets the concrete color associated with the `ThemeColorType` in this color scheme to the given color in RGB format.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `themeColorType` | `ThemeColorType` | The theme color type. |
| `red` | `Integer` | The value of red channel. |
| `green` | `Integer` | The value of green channel. |
| `blue` | `Integer` | The value of blue channel. |

#### Return

`SpreadsheetTheme` — The theme, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontFamily(fontFamily)

Sets the font family for the theme.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontFamily` | `String` | The new theme font family. |

#### Return

`SpreadsheetTheme` — This theme, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
