---
source: https://developers.google.com/apps-script/reference/spreadsheet/banding
root: apps-script
fetched_at: 2026-04-23T15:21:19.545Z
---

# Class Banding

## Page Summary

- Banding refers to the color patterns applied to rows or columns of a range within a spreadsheet.
- Each banding is defined by a range and specific colors for its rows, columns, headers, and footers.
- You can access and modify various color properties of a banding for the first and second alternating rows/columns, as well as header and footer rows/columns.
- Banding provides methods to copy, remove, and set the range for the banding.
- Some methods for getting color properties by returning a String color code are deprecated and replaced by methods that return a Color object.

Access and modify bandings, the color patterns applied to rows or columns of a range. Each banding consists of a range and a set of colors for rows, columns, headers, and footers.

## Detailed documentation

### copyTo(range)

Copies this banding to another range.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | The range to copy this banding to. |

#### Return

`Banding` — The new banding.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFirstColumnColorObject()

Returns the first alternating column color in the banding, or `null` if no color is set.

#### Return

`Color|null` — The first alternating column color in the banding, or `null` if no color is set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFirstRowColorObject()

Returns the first alternating row color, or `null` if no color is set.

#### Return

`Color|null` — The first alternating row color in the banding, or `null` if no color is set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRange()

Returns the range for this banding.

#### Return

`Range` — The range for this banding.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSecondColumnColorObject()

Returns the second alternating column color in the banding, or `null` if no color is set.

#### Return

`Color|null` — The second alternating column color in the banding, or `null` if no color is set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSecondRowColorObject()

Returns the second alternating row color, or `null` if no color is set.

#### Return

`Color|null` — The second alternating row color in the banding, or `null` if no color is set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### remove()

Removes this banding.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFirstColumnColor(color)

Sets the first column color that is alternating.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The color code in CSS notation (such as `'#ffffff'` or `'white'`), or `null` to clear the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFirstColumnColorObject(color)

Sets the first alternating column color in the banding.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The new first alternating column color in the banding; setting to `null` clears the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFirstRowColor(color)

Sets the first row color that is alternating.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The color code in CSS notation (such as `'#ffffff'` or `'white'`), or `null` to clear the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFirstRowColorObject(color)

Sets the first alternating row color in the banding.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The new first alternating color in the banding; setting to `null` clears the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setHeaderColumnColor(color)

Sets the color of the header column.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The color code in CSS notation (such as `'#ffffff'` or `'white'`), or `null` to clear the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setHeaderColumnColorObject(color)

Sets the color of the header column.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The new header column color; setting to `null` clears the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setHeaderRowColor(color)

Sets the color of the header row.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The color code in CSS notation (such as `'#ffffff'` or `'white'`), or `null` to clear the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setHeaderRowColorObject(color)

Sets the color of the header row.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The new header row color; setting to `null` clears the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setRange(range)

Sets the range for this banding.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | The new range for this banding. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setSecondColumnColor(color)

Sets the second column color that is alternating.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The color code in CSS notation (such as `'#ffffff'` or `'white'`), or `null` to clear the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setSecondColumnColorObject(color)

Sets the second alternating column color in the banding.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The new second alternating column color in the banding; setting to `null` clears the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setSecondRowColor(color)

Sets the second row color that is alternating.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The color code in CSS notation (such as `'#ffffff'` or `'white'`), or `null` to clear the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setSecondRowColorObject(color)

Sets the second alternating color in the banding.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The new second alternating color in the banding; setting to `null` clears the color. |

#### Return

`Banding` — This banding, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

## Deprecated methods

### getFirstColumnColor()

**Deprecated.** Replaced by `getFirstColumnColorObject()`

Returns the first column color that is alternating, or `null` if no color is set.

#### Return

`String|null` — The color code in CSS notation (such as `'#ffffff'` or `'white'`), or `null` if no color is set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFirstRowColor()

**Deprecated.** Replaced by `getFirstRowColorObject()`

Returns the first row color that is alternating or `null` if no color is set.

#### Return

`String|null` — The color code in CSS notation (such as `'#ffffff'` or `'white'`), or `null` if no color is set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSecondColumnColor()

**Deprecated.** Replaced by `getSecondColumnColorObject()`

Returns the second column color that is alternating, or `null` if no color is set.

#### Return

`String|null` — The HEX color or `null` if no color is set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSecondRowColor()

**Deprecated.** Replaced by `getSecondRowColorObject()`

Returns the second row color that is alternating or `null` if no color is set.

#### Return

`String|null` — The color code in CSS notation (such as `'#ffffff'` or `'white'`), or `null` if no color is set.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
