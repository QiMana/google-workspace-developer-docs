---
source: https://developers.google.com/apps-script/reference/spreadsheet/range-list
root: apps-script
fetched_at: 2026-04-23T15:21:44.249Z
---

# Class RangeList

## Page Summary

- RangeList is a collection of one or more Range instances in the same sheet, useful for applying operations on collections of non-adjacent ranges or cells.
- RangeList provides methods to modify the appearance and content of the ranges it contains, such as setting background color, font styles, borders, and number formats.
- You can use a RangeList to manage checkboxes, including inserting, checking, unchecking, and removing them from the specified ranges.
- RangeList methods allow for clearing various aspects of the ranges, such as content, format, data validations, and notes, with options for selective clearing.
- Key methods like `activate()`, `breakApart()`, and `trimWhitespace()` provide functionalities for selecting ranges, unmerging cells, and cleaning up cell content within the RangeList.

A collection of one or more instances in the same sheet. You can use this class to apply operations on collections of non-adjacent ranges or cells.

## Detailed documentation

### activate()

Selects the list of instances. The last range in the list is set as the `active range`.

**Note:** This provides a way to multi-select a number of ranges.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['D4', 'B2:C4']);
rangeList.activate();

const selection = sheet.getSelection();
// Current cell: B2
const currentCell = selection.getCurrentCell();
// Active range: B2:C4
const activeRange = selection.getActiveRange();
// Active range list: [D4, B2:C4]
const activeRangeList = selection.getActiveRangeList();
```

#### Return

`RangeList` — The list of active ranges, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### breakApart()

Break all horizontally- or vertically-merged cells contained within the range list into individual cells again.

Calling this function on a range list is equivalent to selecting a set of ranges and selecting the **Format > Merge > Unmerge** Sheets menu item.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.breakApart();
```

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### check()

Changes the state of the checkboxes in the range to “checked”. Ignores the cells in the range which currently do not contain either the checked or unchecked value configured.

```
// Changes the state of cells which currently contain either the checked or
// unchecked value configured in the ranges D4 and E6 to 'checked'.
const rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);
rangeList.check();
```

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clear()

Clears the range of contents, formats, and data validation rules for each in the range list.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clear();
```

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clear(options)

Clears the range of contents, format, data validation rules, and comments, as specified with the given options. By default all data is cleared.

```
// The code below clears the contents of the following ranges A:A and C:C in the
// active sheet, but preserves the format, data validation rules, and comments.
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clear({contentsOnly: true});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Object` | A JavaScript object that specifies advanced parameters, as listed below. |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `commentsOnly` | `Boolean` | Whether to clear only the comments. |
| `contentsOnly` | `Boolean` | Whether to clear only the contents. |
| `formatOnly` | `Boolean` | Whether to clear only the format; note that clearing format also clears data validation rules. |
| `validationsOnly` | `Boolean` | Whether to clear only data validation rules. |
| `skipFilteredRows` | `Boolean` | Whether to avoid clearing filtered rows. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearContent()

Clears the content of each in the range list, leaving the formatting intact.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clearContent();
```

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearDataValidations()

Clears the data validation rules for each in the range list.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clearDataValidations();
```

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearFormat()

This clears text formatting for each range, but does not reset any number formatting rules.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clearFormat();
```

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearNote()

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clearNote();
```

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRanges()

Returns a list of one or more instances in the same sheet.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertCheckboxes()

Inserts checkboxes into each cell in the range, configured with `true` for checked and `false` for unchecked. Sets the value of all cells in the range to `false`.

```
const rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);

// Inserts checkboxes into each cell in the ranges D4 and E6 configured with
// 'true' for checked and 'false' for unchecked. Also, sets the value of each
// cell in the ranges D4 and E6 to 'false'.
rangeList.insertCheckboxes();
```

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertCheckboxes(checkedValue)

Inserts checkboxes into each cell in the range, configured with a custom value for checked and the empty string for unchecked. Sets the value of each cell in the range to the empty string.

```
const rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);

// Inserts checkboxes into each cell in the ranges D4 and E6 configured with
// 'yes' for checked and the empty string for unchecked. Also, sets the value of
// each cell in the ranges D4 and E6 to the empty string.
rangeList.insertCheckboxes('yes');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `checkedValue` | `Object` | The checked value for the checkbox data validation. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertCheckboxes(checkedValue, uncheckedValue)

Inserts checkboxes into each cell in the range, configured with custom values for the checked and unchecked states. Sets the value of each cell in the range to the custom unchecked value.

```
const rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);

// Inserts checkboxes into each cell in the ranges D4 and E6 configured with
// 'yes' for checked and 'no' for unchecked. Also, sets the value of each cell
// in the ranges D4 and E6 to 'no'.
rangeList.insertCheckboxes('yes', 'no');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `checkedValue` | `Object` | The checked value for the checkbox data validation. |
| `uncheckedValue` | `Object` | The unchecked value for the checkbox data validation. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### removeCheckboxes()

Removes all checkboxes from the range. Clears the data validation of each cell, and additionally clears its value if the cell contains either the checked or unchecked value.

```
const range = SpreadsheetApp.getActive().getRange('A1:B10');

// Inserts checkboxes and sets each cell value to 'no' in the range A1:B10.
range.insertCheckboxes('yes', 'no');

const rangeList1 = SpreadsheetApp.getActive().getRangeList(['A1', 'A3']);
rangeList1.setValue('yes');
// Removes the checkbox data validation in cells A1 and A3 and clears their
// value.
rangeList1.removeCheckboxes();

const rangeList2 = SpreadsheetApp.getActive().getRangeList(['A5', 'A7']);
rangeList2.setValue('random');
// Removes the checkbox data validation in cells A5 and A7 but does not clear
// their value.
rangeList2.removeCheckboxes();
```

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setBackground(color)

Sets the background color for each in the range list. Color is represented in in CSS notation; for example, `'#ffffff'` or `'white'`.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setBackground('red');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The background color code in CSS notation such as `'#ffffff'` or `'white'`; a `null` value resets the color. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setBackgroundRGB(red, green, blue)

Sets the background to the given RGB color. This is a convenience wrapper around a `setBackground(color)` call.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
// Sets the background to red for each range in the range list.
rangeList.setBackgroundRGB(255, 0, 0);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `red` | `Integer` | The red value in RGB notation. |
| `green` | `Integer` | The green value in RGB notation. |
| `blue` | `Integer` | The blue value in RGB notation. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setBorder(top, left, bottom, right, vertical, horizontal)

Sets the border property for each in the range list. The valid values are `true` (on), `false` (off) and `null` (no change).

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A2:B4', 'C1:D4']);
// Sets borders on the top and bottom of the ranges A2:B4 and C1:D4, but leaves
// the left and right unchanged.
rangeList.setBorder(true, null, true, null, false, false);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `top` | `Boolean` | `true` for border, `false` for none, `null` for no change. |
| `left` | `Boolean` | `true` for border, `false` for none, `null` for no change. |
| `bottom` | `Boolean` | `true` for border, `false` for none, `null` for no change. |
| `right` | `Boolean` | `true` for border, `false` for none, `null` for no change. |
| `vertical` | `Boolean` | `true` for internal vertical borders, `false` for none, `null` for no change. |
| `horizontal` | `Boolean` | `true` for internal horizontal borders, `false` for none, `null` for no change. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setBorder(top, left, bottom, right, vertical, horizontal, color, style)

Sets the border property with color and/or style for each in the range list. Valid values are `true` (on), `false` (off) and `null` (no change). Color is represented in CSS notation; for example, `'#ffffff'` or `'white'`.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A2:B4', 'C1:D4']);
// Sets borders on the top and bottom, but leaves the left and right unchanged
// of the ranges A2:B4 and C1:D4. Also sets the color to 'red', and the border
// to 'DASHED'.
rangeList.setBorder(
    true,
    null,
    true,
    null,
    false,
    false,
    'red',
    SpreadsheetApp.BorderStyle.DASHED,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `top` | `Boolean` | `true` for border, `false` for none, `null` for no change. |
| `left` | `Boolean` | `true` for border, `false` for none, `null` for no change. |
| `bottom` | `Boolean` | `true` for border, `false` for none, `null` for no change. |
| `right` | `Boolean` | `true` for border, `false` for none, `null` for no change. |
| `vertical` | `Boolean` | `true` for internal vertical borders, `false` for none, `null` for no change. |
| `horizontal` | `Boolean` | `true` for internal horizontal borders, `false` for none, `null` for no change. |
| `color` | `String` | The border color in CSS notation like `'#ffffff'` or `'white'`, `null` for default color (black). |
| `style` | `BorderStyle` | The style for the borders, `null` for default style (solid). |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontColor(color)

Sets the font color for each in the range list. Color is represented in CSS notation; for example, `'#ffffff'` or `'white'`.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontColor('red');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The font color in CSS notation such as `'#ffffff'` or `'white'`; a `null` value resets the color. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontFamily(fontFamily)

Sets the font family for each in the range list. The font family is described by a string identifier such as `Arial` or `Roboto`.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontFamily('Roboto');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontFamily` | `String` | The font family to set; a `null` value resets the font family. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontLine(fontLine)

Sets the font line style for each in the range list. The line styles options are `'underline'`, `'line-through'`, or `'none'`.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontLine('line-through');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontLine` | `String` | The font line style, either `'underline'`, `'line-through'`, or `'none'`; a `null` value resets the font line style. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontSize(size)

Sets the font size (in points) for each in the range list.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontSize(20);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `size` | `Integer` | A font point size. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontStyle(fontStyle)

Set the font style for each in the range list. The font style options are `'italic'` or `'normal'`.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontStyle('italic');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontStyle` | `String` | The font style, either `'italic'` or `'normal'`; a `null` value resets the font style. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontWeight(fontWeight)

Set the font weight for each in the range list. The font weight options are `'normal'` or `'bold'`.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontWeight('bold');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontWeight` | `String` | The font weight, either `'bold'` or `'normal'`; a `null` value resets the font weight. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFormula(formula)

Updates the formula for each in the range list. The given formula must be in A1 notation.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A11', 'C11']);
rangeList.setFormula('=SUM(B1:B10)');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formula` | `String` | A string representing the formula to set. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFormulaR1C1(formula)

Updates the formula for each in the range list. The given formula must be in R1C1 notation.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A11', 'C11']);
// This sets the formula to be the sum of the 3 rows above B5
rangeList.setFormulaR1C1('=SUM(R[-3]C[0]:R[-1]C[0])');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formula` | `String` | A string formula. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setHorizontalAlignment(alignment)

Set the horizontal alignment for each in the range list. The alignment options are `'left'`, `'center'`, or `'right'`.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setHorizontalAlignment('center');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignment` | `String` | The alignment, either `'left'`, `'center'` or `'normal'`; a `null` value resets the alignment. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setNote(note)

Sets the note text for each in the range list.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setNote('This is a note');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `note` | `String` | The note text to set; a `null` value removes the note. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setNumberFormat(numberFormat)

Sets the number or date format for each in the range list.

The accepted formatting patterns are described in the [Sheets API date and number formatting guide](../../../workspace/sheets/api/guides/formats.md).

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
// Always show 3 decimal points for the specified ranges.
rangeList.setNumberFormat('0.000');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `numberFormat` | `String` | A number format string. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setShowHyperlink(showHyperlink)

Sets whether or not each in the range list should show hyperlinks.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
// Show hyperlinks for all the ranges.
rangeList.setShowHyperlink(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `showHyperlink` | `Boolean` | Whether or not to show the hyperlink. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setTextDirection(direction)

Sets the text direction for the cells in each in the range list. If a specified direction is `null`, the direction is inferred and then set.

```
// Sets right-to-left text direction each range in the range list.
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
rangeList.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `direction` | `TextDirection` | The desired text direction; if `null` the direction is inferred before setting. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setTextRotation(degrees)

Sets the text rotation settings for the cells in each in the range list. The input corresponds to the angle between the standard text orientation and the desired orientation. An input of zero indicates that the text is set to the standard orientation.

For left to right text direction, positive angles are in the counterclockwise direction, whereas for right to left they are in the clockwise direction.

```
// Sets the cells in the ranges A1:A10 and C1:C10 to have text rotated up 45
// degrees.
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
rangeList.setTextRotation(45);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `degrees` | `Integer` | The desired angle between the standard orientation and the desired orientation. For left to right text, positive angles are in the counterclockwise direction. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setValue(value)

Sets the value for each in the range list. The value can be numeric, string, boolean or date. If it begins with '=' it is interpreted as a formula.

```
const sheet = SpreadsheetApp.getActiveSheet();
// Set value of 100 to each range in the range list.
const rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setValue(100);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `Object` | The value for the range. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setVerticalAlignment(alignment)

Set the vertical alignment for each in the range list. The alignment options are `'top'`, `'middle'` or `'bottom'`.

```
// Sets the vertical alignment to middle for the list of ranges.
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['D4', 'B2:C4']);
rangeList.setVerticalAlignment('middle');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignment` | `String` | The alignment, either `'top'`, `'middle'` or `'bottom'`; a `null` value resets the alignment. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setVerticalText(isVertical)

Sets whether or not to stack the text for the cells for each in the range list. If the text is stacked vertically, the degree text rotation setting is ignored.

```
// Sets all cell's in ranges D4 and B2:D4 to have vertically stacked text.
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['D4', 'B2:C4']);
rangeList.setVerticalText(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isVertical` | `Boolean` | Whether or not to stack the text. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setWrap(isWrapEnabled)

Set text wrapping for each in the range list. Cells with wrap enabled resize to display their full content. Cells with wrap disabled display as much as possible in the cell without resizing or running to multiple lines.

```
// Enable text wrap for the list of ranges.
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['D4', 'B2:C4']);
rangeList.setWrap(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isWrapEnabled` | `Boolean` | Whether to wrap text or not. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setWrapStrategy(strategy)

Sets the text wrapping strategy for each in the range list.

```
// Sets the list of ranges to use the clip wrap strategy.
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['D4', 'B2:C4']);
rangeList.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `strategy` | `WrapStrategy` | The desired wrapping strategy. |

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### trimWhitespace()

Trims the whitespace (such as spaces, tabs, or new lines) in every cell in this range list. Removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const range = sheet.getRange('A1:A4');
range.activate();
range.setValues([
  ' preceding space',
  'following space ',
  'two  middle  spaces',
  '   =SUM(1,2)',
]);

const rangeList = sheet.getRangeList(['A1', 'A2', 'A3', 'A4']);
rangeList.trimWhitespace();

const values = range.getValues();
// Values are ['preceding space', 'following space', 'two middle spaces',
// '=SUM(1,2)']
```

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

#### See also

---

### uncheck()

Changes the state of the checkboxes in the range to “unchecked”. Ignores the cells in the range which currently do not contain either the checked or unchecked value configured.

```
// Changes the state of cells which currently contain either the checked or
// unchecked value configured in the ranges D4 and E6 to 'unchecked'.
const rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);
rangeList.uncheck();
```

#### Return

`RangeList` — This range list, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
