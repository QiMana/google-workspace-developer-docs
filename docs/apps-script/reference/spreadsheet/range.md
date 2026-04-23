---
source: https://developers.google.com/apps-script/reference/spreadsheet/range
root: apps-script
fetched_at: 2026-04-23T15:21:55.278Z
---

# Class Range

## Page Summary

- The `Range` object in spreadsheets enables access and modification of single cells or groups of adjacent cells.
- Methods are available for activating and selecting ranges, retrieving metadata and properties, and manipulating data and values.
- The `Range` object also provides methods for formatting cells, working with formulas, managing data validation, adding notes and links, and interacting with tables, pivot tables, and charts.
- Functionality exists for navigating and modifying cells within a range, managing cell groups, applying filters, creating sparklines, setting conditional formatting, handling hyperlinks, and finding/replacing text.
- Additional methods cover protecting ranges, checking hidden rows/columns, setting row heights and column widths, and accessing various representations of cell values.

Access and modify spreadsheet ranges. A range can be a single cell in a sheet or a group of adjacent cells in a sheet.

## Detailed documentation

### activate()

Sets the specified range as the `active range`, with the top left cell in the range as the `current cell`.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const range = sheet.getRange('A1:D10');
range.activate();

const selection = sheet.getSelection();
// Current cell: A1
const currentCell = selection.getCurrentCell();
// Active Range: A1:D10
const activeRange = selection.getActiveRange();
```

#### Return

`Range` — This range, for chaining.

---

### activateAsCurrentCell()

Sets the specified cell as the `current cell`.

If the specified cell is present in an existing range, then that range becomes the active range with the cell as the current cell.

If the specified cell is not present in any existing range, then the existing selection is removed and the cell becomes the current cell and the active range.

**Note:** The specified `Range` must consist of one cell, otherwise it throws an exception.

```
// Gets the first sheet of the spreadsheet.
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// Gets the cell B5 and sets it as the active cell.
const range = sheet.getRange('B5');
const currentCell = range.activateAsCurrentCell();

// Logs the activated cell.
console.log(currentCell.getA1Notation());
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addDeveloperMetadata(key)

Adds developer metadata with the specified key to the range.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on the sheet.
const range = sheet.getRange('2:2');

// Adds the key 'NAME' to the developer metadata for row 2.
range.addDeveloperMetadata('NAME');

// Gets the metadata and logs it to the console.
const developerMetaData = range.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The key for the new developer metadata. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addDeveloperMetadata(key, visibility)

Adds developer metadata with the specified key and visibility to the range.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on Sheet1.
const range = sheet.getRange('2:2');

// Adds the key 'NAME' and sets the developer metadata visibility to 'DOCUMENT'
// for row 2 on Sheet1.
range.addDeveloperMetadata(
    'NAME',
    SpreadsheetApp.DeveloperMetadataVisibility.DOCUMENT,
);

// Gets the updated metadata info and logs it to the console.
const developerMetaData = range.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getVisibility().toString());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The key for the new developer metadata. |
| `visibility` | `DeveloperMetadataVisibility` | The visibility of the new developer metadata. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addDeveloperMetadata(key, value)

Adds developer metadata with the specified key and value to the range.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 of Sheet1.
const range = sheet.getRange('2:2');

// Adds the key 'NAME' and sets the value to 'GOOGLE' for the metadata of row 2.
range.addDeveloperMetadata('NAME', 'GOOGLE');

// Gets the metadata and logs it to the console.
const developerMetaData = range.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getValue());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The key for the new developer metadata. |
| `value` | `String` | The value for the new developer metadata. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addDeveloperMetadata(key, value, visibility)

Adds developer metadata with the specified key, value, and visibility to the range.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on the sheet.
const range = sheet.getRange('2:2');

// Adds the key 'NAME', sets the value to 'GOOGLE', and sets the visibility
// to PROJECT for row 2 on the sheet.
range.addDeveloperMetadata(
    'NAME',
    'GOOGLE',
    SpreadsheetApp.DeveloperMetadataVisibility.PROJECT,
);

// Gets the updated metadata info and logs it to the console.
const developerMetaData = range.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getValue());
console.log(developerMetaData.getVisibility().toString());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The key for the new developer metadata. |
| `value` | `String` | The value for the new developer metadata. |
| `visibility` | `DeveloperMetadataVisibility` | The visibility of the new developer metadata. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### applyColumnBanding()

Applies a default column banding theme to the range. By default, the banding has header and no footer color.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on the sheet.
const range = sheet.getRange('2:2');

// Applies column banding to row 2.
const colBanding = range.applyColumnBanding();

// Gets the first banding on the sheet and logs the color of the header column.
console.log(
    sheet.getBandings()[0]
        .getHeaderColumnColorObject()
        .asRgbColor()
        .asHexString(),
);

// Gets the first banding on the sheet and logs the color of the second column.
console.log(
    sheet.getBandings()[0]
        .getSecondColumnColorObject()
        .asRgbColor()
        .asHexString(),
);
```

#### Return

`Banding` — The new banding.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### applyColumnBanding(bandingTheme)

Applies a specified column banding theme to the range. By default, the banding has header and no footer color.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on the sheet.
const range = sheet.getRange('2:2');

// Applies the INDIGO color banding theme to the columns in row 2.
const colBanding = range.applyColumnBanding(SpreadsheetApp.BandingTheme.INDIGO);

// Gets the first banding on the sheet and logs the color of the second column.
console.log(
    sheet.getBandings()[0]
        .getSecondColumnColorObject()
        .asRgbColor()
        .asHexString(),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `bandingTheme` | `BandingTheme` | A color theme to apply to the columns in the range. |

#### Return

`Banding` — The new banding.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### applyColumnBanding(bandingTheme, showHeader, showFooter)

Applies a specified column banding theme to the range with specified header and footer settings.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets rows 12-22 on the sheet.
const range = sheet.getRange('12:22');

// Applies the BLUE color banding theme to rows 12-22.
// Sets the header visibility to false and the footer visibility to true.
const colBanding = range.applyColumnBanding(
    SpreadsheetApp.BandingTheme.BLUE,
    false,
    true,
);

// Gets the banding color and logs it to the console.
console.log(
    sheet.getBandings()[0]
        .getSecondColumnColorObject()
        .asRgbColor()
        .asHexString(),
);

// Gets the header color object and logs it to the console. Returns null because
// the header visibility is set to false.
console.log(sheet.getBandings()[0].getHeaderColumnColorObject());

// Gets the footer color and logs it to the console.
console.log(
    sheet.getBandings()[0]
        .getFooterColumnColorObject()
        .asRgbColor()
        .asHexString(),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `bandingTheme` | `BandingTheme` | A color theme to apply to the columns in the range. |
| `showHeader` | `Boolean` | If `true`, the banding theme header color is applied to the first column. |
| `showFooter` | `Boolean` | If `true`, the banding theme footer color is applied to the last column. |

#### Return

`Banding` — The new banding.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### applyRowBanding()

Applies a default row banding theme to the range. By default, the banding has header and no footer color.

```
// Opens the spreadsheet by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets rows 1-30 on Sheet1.
const range = sheet.getRange('1:30');

// Applies row banding to rows 1-30.
range.applyRowBanding();

// Gets the hex color of the second banded row.
const secondRowColor =
    range.getBandings()[0].getSecondRowColorObject().asRgbColor().asHexString();

// Logs the hex color to console.
console.log(secondRowColor);
```

#### Return

`Banding` — The banding.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### applyRowBanding(bandingTheme)

Applies a specified row banding theme to the range. By default, the banding has header and no footer color.

```
// Opens the spreadsheet by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets rows 1-30 on Sheet1.
const range = sheet.getRange('1:30');

// Applies the INDIGO row banding theme to rows 1-30.
range.applyRowBanding(SpreadsheetApp.BandingTheme.INDIGO);

// Gets the hex color of the second banded row.
const secondRowColor =
    range.getBandings()[0].getSecondRowColorObject().asRgbColor().asHexString();

// Logs the hex color to console.
console.log(secondRowColor);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `bandingTheme` | `BandingTheme` | A color theme to apply to the rows in the range. |

#### Return

`Banding` — The new banding.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### applyRowBanding(bandingTheme, showHeader, showFooter)

Applies a specified row banding theme to the range with specified header and footer settings.

```
// Opens the spreadsheet by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets rows 1-30 on Sheet1.
const range = sheet.getRange('1:30');

// Applies the INDIGO row banding to rows 1-30 and
// specifies to hide the header and show the footer.
range.applyRowBanding(SpreadsheetApp.BandingTheme.INDIGO, false, true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `bandingTheme` | `BandingTheme` | A color theme to apply to the rows in the range. |
| `showHeader` | `Boolean` | If `true`, the banding theme header color is applied to the first row. |
| `showFooter` | `Boolean` | If `true`, the banding theme footer color is applied to the last row. |

#### Return

`Banding` — The new banding.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### autoFill(destination, series)

Fills the `destinationRange` with data based on the data in this range. The new values are also determined by the specified `series` type. The destination range must contain this range and extend it in only one direction. For example, the following fills `A1:A20` with a series of increasing numbers based on the current values in `A1:A4`:

```
const sheet = SpreadsheetApp.getActiveSheet();

// Has values [1, 2, 3, 4].
const sourceRange = sheet.getRange('A1:A4');
// The range to fill with values.
const destination = sheet.getRange('A1:A20');

// Inserts new values in A5:A20, continuing the pattern expressed in A1:A4
sourceRange.autoFill(destination, SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `destination` | `Range` | The range to be auto-filled with values. The destination range should contain this range and extend it in only one direction (upwards, downwards, left, or right). |
| `series` | `AutoFillSeries` | The type of autoFill series that should be used to calculate new values. The effect of this series differs based on the type and amount of source data. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### autoFillToNeighbor(series)

Calculates a range to fill with new data based on neighboring cells and automatically fills that range with new values based on the data contained in this range. These new values are also determined by the specified `series` type.

The calculated destination range considers the surrounding data to determine where the new values should be inserted: if there is data to the immediate left or right of a column that is being auto-filled, new values only extend as far as this adjacent data.

For example, if `A1:A20` is filled with a series of increasing numbers and this method is called on the range `B1:B4` which contains a series of dates, new values are only inserted into `B5:B20`. In this way, these new values "stick" to the cells that contain values in column A.

```
const sheet = SpreadsheetApp.getActiveSheet();

// A1:A20 has values [1, 2, 3, ... 20].
// B1:B4 has values [1/1/2017, 1/2/2017, ...]
const sourceRange = sheet.getRange('B1:B4');

// Results in B5:B20 having values [1/5/2017, ... 1/20/2017]
sourceRange.autoFillToNeighbor(SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `series` | `AutoFillSeries` | The type of autoFill series that should be used to calculate new values. The effect of this series differs based on the type and amount of source data. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### breakApart()

Break any multi-column cells in the range into individual cells again.

Calling this function on a range is equivalent to selecting a range and clicking **Format** \> **Merge cells** \> **Unmerge**.

```
// Opens the spreadsheet by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:C6 on Sheet1.
const range = sheet.getRange('A1:C6');

// Unmerges the range A1:C6 into individual cells.
range.breakApart();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### canEdit()

Determines whether the user has permission to edit every cell in the range. The spreadsheet owner is always able to edit protected ranges and sheets.

```
// Opens the spreadsheet by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:C6 on Sheet1.
const range = sheet.getRange('A1:C6');

// Logs whether the user has permission to edit every cell in the range.
console.log(range.canEdit());
```

#### Return

`Boolean` — `true` if the user has permission to edit every cell in the range; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### check()

Changes the state of the checkboxes in the range to “checked”. Ignores the cells in the range which currently do not contain either the checked or unchecked value configured.

```
// Changes the state of cells which currently contain either the checked or
// unchecked value configured in the range A1:B10 to 'checked'.
const range = SpreadsheetApp.getActive().getRange('A1:B10');
range.check();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clear()

Clears the range of contents and formats.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:D10');
range.clear();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clear(options)

Clears the range of contents, format, data validation rules, and/or comments, as specified with the given advanced options. By default all data is cleared.

```
// The code below clears range C2:G7 in the active sheet, but preserves the
// format, data validation rules, and comments.
SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 5).clear({
  contentsOnly: true
});
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

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearContent()

Clears the content of the range, leaving the formatting intact.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:D10');
range.clearContent();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearDataValidations()

Clears the data validation rules for the range.

```
// Clear the data validation rules for cells A1:B5.
const range = SpreadsheetApp.getActive().getRange('A1:B5');
range.clearDataValidations();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearFormat()

Clears formatting for this range.

This clears text formatting for the cell or cells in the range, but does not reset any number formatting rules.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:D10');
range.clearFormat();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearNote()

Clears the note in the given cell or cells.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:D10');
range.clearNote();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### collapseGroups()

Collapses all groups that are wholly contained within the range. If no group is fully within the range, the deepest expanded group that is partially within the range is collapsed.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const range = sheet.getActiveRange();

// All row and column groups within the range are collapsed.
range.collapseGroups();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### copyFormatToRange(gridId, column, columnEnd, row, rowEnd)

Copy the formatting of the range to the given location. If the destination is larger or smaller than the source range then the source is repeated or truncated accordingly. Note that this method copies the formatting only.

For a detailed description of the gridId parameter, see `getGridId()`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const source = ss.getSheets()[0];

const range = source.getRange('B2:D4');

// This copies the formatting in B2:D4 in the source sheet to
// D4:F6 in the sheet with gridId 1555299895. Note that you can get the gridId
// of a sheet by calling sheet.getSheetId() or range.getGridId().
range.copyFormatToRange(1555299895, 4, 6, 4, 6);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `gridId` | `Integer` | The unique ID of the sheet within the spreadsheet, irrespective of position. |
| `column` | `Integer` | The first column of the target range. |
| `columnEnd` | `Integer` | The end column of the target range. |
| `row` | `Integer` | The start row of the target range. |
| `rowEnd` | `Integer` | The end row of the target range. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

#### See also

- `getGridId()`

---

### copyFormatToRange(sheet, column, columnEnd, row, rowEnd)

Copy the formatting of the range to the given location. If the destination is larger or smaller than the source range then the source is repeated or truncated accordingly. Note that this method copies the formatting only.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const source = ss.getSheets()[0];
const destination = ss.getSheets()[1];

const range = source.getRange('B2:D4');

// This copies the formatting in B2:D4 in the source sheet to
// D4:F6 in the second sheet
range.copyFormatToRange(destination, 4, 6, 4, 6);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sheet` | `Sheet` | The target sheet. |
| `column` | `Integer` | The first column of the target range. |
| `columnEnd` | `Integer` | The end column of the target range. |
| `row` | `Integer` | The start row of the target range. |
| `rowEnd` | `Integer` | The end row of the target range. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### copyTo(destination)

Copies the data from a range of cells to another range of cells. Both the values and formatting are copied.

```
// The code below copies the first 5 columns over to the 6th column.
const sheet = SpreadsheetApp.getActiveSheet();
const rangeToCopy = sheet.getRange(1, 1, sheet.getMaxRows(), 5);
rangeToCopy.copyTo(sheet.getRange(1, 6));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `destination` | `Range` | A destination range to copy to; only the top-left cell position is relevant. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### copyTo(destination, copyPasteType, transposed)

Copies the data from a range of cells to another range of cells.

```
// The code below copies only the values of the first 5 columns over to the 6th
// column.
const sheet = SpreadsheetApp.getActiveSheet();
sheet.getRange('A:E').copyTo(
    sheet.getRange('F1'),
    SpreadsheetApp.CopyPasteType.PASTE_VALUES,
    false,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `destination` | `Range` | A destination range to copy to; only the top-left cell position is relevant. |
| `copyPasteType` | `CopyPasteType` | A type that specifies how the range contents are pasted to the destination. |
| `transposed` | `Boolean` | Whether the range should be pasted in its transposed orientation. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### copyTo(destination, options)

Copies the data from a range of cells to another range of cells. By default both the values and formatting are copied, but this can be overridden using advanced arguments.

```
// The code below copies only the values of the first 5 columns over to the 6th
// column.
const sheet = SpreadsheetApp.getActiveSheet();
sheet.getRange('A:E').copyTo(sheet.getRange('F1'), {contentsOnly: true});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `destination` | `Range` | A destination range to copy to; only the top-left cell position is relevant. |
| `options` | `Object` | A JavaScript object that specifies advanced parameters, as listed below. |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `formatOnly` | `Boolean` | designates that only the format should be copied |
| `contentsOnly` | `Boolean` | designates that only the content should be copied |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### copyValuesToRange(gridId, column, columnEnd, row, rowEnd)

Copy the content of the range to the given location. If the destination is larger or smaller than the source range then the source is repeated or truncated accordingly.

For a detailed description of the gridId parameter, see `getGridId()`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const source = ss.getSheets()[0];

const range = source.getRange('B2:D4');

// This copies the data in B2:D4 in the source sheet to
// D4:F6 in the sheet with gridId 0
range.copyValuesToRange(0, 4, 6, 4, 6);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `gridId` | `Integer` | The unique ID of the sheet within the spreadsheet, irrespective of position. |
| `column` | `Integer` | The first column of the target range. |
| `columnEnd` | `Integer` | The end column of the target range. |
| `row` | `Integer` | The start row of the target range. |
| `rowEnd` | `Integer` | The end row of the target range. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

#### See also

- `getGridId()`

---

### copyValuesToRange(sheet, column, columnEnd, row, rowEnd)

Copy the content of the range to the given location. If the destination is larger or smaller than the source range then the source is repeated or truncated accordingly.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const source = ss.getSheets()[0];
const destination = ss.getSheets()[1];

const range = source.getRange('B2:D4');

// This copies the data in B2:D4 in the source sheet to
// D4:F6 in the second sheet
range.copyValuesToRange(destination, 4, 6, 4, 6);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sheet` | `Sheet` | The target sheet. |
| `column` | `Integer` | The first column of the target range. |
| `columnEnd` | `Integer` | The end column of the target range. |
| `row` | `Integer` | The start row of the target range. |
| `rowEnd` | `Integer` | The end row of the target range. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### createDataSourcePivotTable(dataSource)

Creates an empty data source pivot table from the data source, anchored at the first cell in this range.

This example shows how to create and configure a new data source pivot table.

```
const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
const anchorCell = spreadsheet.getSheets()[0].getRange('A1');
const dataSource = spreadsheet.getDataSources()[0];

const pivotTable = anchorCell.createDataSourcePivotTable(dataSource);
pivotTable.addRowGroup('dataColumnA');
pivotTable.addColumnGroup('dataColumnB');
pivotTable.addPivotValue(
    'dataColumnC',
    SpreadsheetApp.PivotTableSummarizeFunction.SUM,
);
pivotTable.addFilter(
    'dataColumnA',
    SpreadsheetApp.newFilterCriteria().whenTextStartsWith('A').build(),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dataSource` | `DataSource` | The data source to create the pivot table from. |

#### Return

`DataSourcePivotTable` — The newly created data source pivot table.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### createDataSourceTable(dataSource)

Creates an empty data source table from the data source, anchored at the first cell in this range.

This example shows how to create and configure a new data source table.

```
const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
const anchorCell = spreadsheet.getSheets()[0].getRange('A1');
const dataSource = spreadsheet.getDataSources()[0];

const dataSourceTable =
    anchorCell.createDataSourceTable(dataSource)
        .addColumns('dataColumnA', 'dataColumnB', 'dataColumnC')
        .addSortSpec('dataColumnA', true)    // ascending=true
        .addSortSpec('dataColumnB', false);  // ascending=false
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dataSource` | `DataSource` | The data source to create the pivot table from. |

#### Return

`DataSourceTable` — The newly created data source table.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### createDeveloperMetadataFinder()

Returns a DeveloperMetadataFinderApi for finding developer metadata within the scope of this range. Metadata is within the scope of the range only if it is wholly contained within that range. For example, metadata associated with the row ‘3:3’ is not in the scope of a range ‘A1:D5’ but is within the scope of a range ‘1:5’.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:C6.
const range = sheet.getRange('A1:C6');

// Creates a developer metadata finder to search for metadata in the scope of
// this range.
const developerMetaDataFinder = range.createDeveloperMetadataFinder();

// Logs information about the developer metadata finder to the console.
const developerMetaData = developerMetaDataFinder.find()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getValue());
console.log(developerMetaData.getVisibility().toString());
```

#### Return

`DeveloperMetadataFinder` — A developer metadata finder to search for metadata in the scope of this range.

---

### createFilter()

Creates a filter and applies it to the specified range on the sheet. You can't create more than one filter on a sheet. To access and modify your filter after you create it, use `getFilter()` or `Sheet.getFilter()`.

```
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');

// Creates a new filter and applies it to the range A1:C20 on the active sheet.
function createFilter() {
  range.createFilter();
}
// Gets the filter and applies criteria that only shows cells that aren't empty.
function getFilterAddCriteria() {
  const filter = range.getFilter();
  const criteria =
      SpreadsheetApp.newFilterCriteria().whenCellNotEmpty().build();
  filter.setColumnFilterCriteria(2, criteria);
}
```

Use this method to create filters for `Grid` sheets, the default type of sheet. Grid sheets are sheets that aren't connected to a database. To create other types of filters, refer to the following:
- Create a pivot table filter with `PivotTable.addFilter(sourceDataColumn, filterCriteria)`
- Create a filter for a sheet connected to a database with `DataSourceSheet.addFilter(columnName, filterCriteria)`
- Create a filter for a pivot table connected to a database with `DataSourcePivotTable.addFilter(columnName, filterCriteria)`

#### Return

`Filter` — The new filter.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### createPivotTable(sourceData)

Creates an empty pivot table from the specified `sourceData` anchored at the first cell in this range.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets cell A1 as a range in order to place the pivot table.
const range = sheet.getRange('A1');

// Gets the range of the source data for the pivot table.
const dataRange = sheet.getRange('E12:G20');

// Creates an empty pivot table from the specified source data.
const pivotTable = range.createPivotTable(dataRange);

// Logs the values from the pivot table's source data to the console.
console.log(pivotTable.getSourceDataRange().getValues());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sourceData` | `Range` | The data to create the pivot table from. |

#### Return

`PivotTable` — The newly created `PivotTable`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### createTextFinder(findText)

Creates a text finder for the range, which can find and replace text in this range.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const range = sheet.getActiveRange();

// Creates  a text finder for the range.
const textFinder = range.createTextFinder('dog');

// Returns the first occurrence of 'dog'.
const firstOccurrence = textFinder.findNext();

// Replaces the last found occurrence of 'dog' with 'cat' and returns the number
// of occurrences replaced.
const numOccurrencesReplaced = textFinder.replaceWith('cat');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `findText` | `String` | The text to search for. |

#### Return

`TextFinder` — The `TextFinder` for the range

---

### deleteCells(shiftDimension)

Deletes this range of cells. Existing data in the sheet along the provided dimension is shifted towards the deleted range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:D10');
range.deleteCells(SpreadsheetApp.Dimension.COLUMNS);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `shiftDimension` | `Dimension` | The dimension along which to shift existing data. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### expandGroups()

Expands the collapsed groups whose range or control toggle intersects with this range. The control toggle location is the index at which the control toggle is shown, directly before or after the group depending on settings. If there is more than one group at the same location, the shallowest group is expanded.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const range = sheet.getActiveRange();

// All row and column groups within the range are expanded.
range.expandGroups();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getA1Notation()

Returns a string description of the range, in A1 notation.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange(1, 1, 2, 5);

// Logs "A1:E2"
Logger.log(range.getA1Notation());
```

#### Return

`String` — The string description of the range in A1 notation.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getBackground()

Returns the background color of the top-left cell in the range (for example, `'#ffffff'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B5');
Logger.log(cell.getBackground());
```

#### Return

`String` — The color code of the background.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getBackgroundObject()

Returns the background color of the top-left cell in the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B5');
Logger.log(cell.getBackgroundObject().asRgbColor().asHexString());
```

#### Return

`Color` — The background color of the top-left cell in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getBackgroundObjects()

Returns the background colors of the cells in the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B5:C6');
const bgColors = range.getBackgroundObjects();
for (const i in bgColors) {
  for (const j in bgColors[i]) {
    Logger.log(bgColors[i][j].asRgbColor().asHexString());
  }
}
```

#### Return

`Color[][]` — A two-dimensional array of background colors.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getBackgrounds()

Returns the background colors of the cells in the range (for example, `'#ffffff'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B5:C6');
const bgColors = range.getBackgrounds();
for (const i in bgColors) {
  for (const j in bgColors[i]) {
    Logger.log(bgColors[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of color codes of the backgrounds.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getBandings()

Returns all the bandings that are applied to any cells in this range.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Sets a range.
const range = sheet.getRange('A1:K50');

// Gets the banding info for the range.
const bandings = range.getBandings();

// Logs the second row color for each banding to the console.
for (const banding of bandings) {
  console.log(banding.getSecondRowColor());
}
```

#### Return

`Banding[]` — All the bandings that are applied to any cells in this range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getCell(row, column)

Returns a given cell within a range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B2:D4');

// The row and column here are relative to the range
// getCell(1,1) in this code returns the cell at B2
const cell = range.getCell(1, 1);
Logger.log(cell.getValue());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `row` | `Integer` | The row of the cell relative to the range. |
| `column` | `Integer` | The column of the cell relative to the range. |

#### Return

`Range` — A range containing a single cell at the specified coordinates.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getColumn()

Returns the starting column position for this range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B2:D4');
// Logs "2.0"
Logger.log(range.getColumn());
```

#### Return

`Integer` — The range's starting column position in the spreadsheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataRegion()

Returns a copy of the range expanded in the four cardinal `Direction` s to cover all adjacent cells with data in them. If the range is surrounded by empty cells not including those along the diagonals, the range itself is returned. This is similar to selecting the range and typing `Ctrl+A` in the editor.

```
// Assume the active spreadsheet is blank.
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
sheet.getRange('C2').setValue(100);
sheet.getRange('B3').setValue(100);
sheet.getRange('D3').setValue(100);
sheet.getRange('C4').setValue(100);
// Logs "B2:D4"
Logger.log(sheet.getRange('C3').getDataRegion().getA1Notation());
```

#### Return

`Range` — The range's data region or a range for the entire spreadsheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataRegion(dimension)

Returns a copy of the range expanded `Direction.UP` and `Direction.DOWN` if the specified dimension is `Dimension.ROWS`, or `Direction.NEXT` and `Direction.PREVIOUS` if the dimension is `Dimension.COLUMNS`. The expansion of the range is based on detecting data next to the range that is organized like a table. The expanded range covers all adjacent cells with data in them along the specified dimension including the table boundaries. If the original range is surrounded by empty cells along the specified dimension, the range itself is returned. This method is similar to selecting the range and typing ` Ctrl+Space` for columns or `Shift+Space` for rows in the editor.

```
// Assume the active spreadsheet is blank.
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
sheet.getRange('C2').setValue(100);
sheet.getRange('B3').setValue(100);
sheet.getRange('D3').setValue(100);
sheet.getRange('C4').setValue(100);
// Logs "C2:C4"
Logger.log(
    sheet.getRange('C3')
        .getDataRegion(SpreadsheetApp.Dimension.ROWS)
        .getA1Notation(),
);
// Logs "B3:D3"
Logger.log(
    sheet.getRange('C3')
        .getDataRegion(SpreadsheetApp.Dimension.COLUMNS)
        .getA1Notation(),
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dimension` | `Dimension` | The dimension along which to expand the range. |

#### Return

`Range` — The range's data region or a range covering each column or each row spanned by the original range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSourceFormula()

Returns the `DataSourceFormula` for the first cell in the range, or `null` if the cell doesn't contain a data source formula.

```
// Opens the spreadsheet file by its ID. If you created your script from a
// Google Sheets file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1 on Sheet1.
const range = sheet.getRange('A1');

// Gets the data source formula from cell A1.
const dataSourceFormula = range.getDataSourceFormula();

// Gets the formula.
const formula = dataSourceFormula.getFormula();

// Logs the formula.
console.log(formula);
```

#### Return

`DataSourceFormula|null` — The `DataSourceFormula` for the cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSourceFormulas()

Returns the `DataSourceFormula` s for the cells in the range.

```
// Opens the spreadsheet file by its ID. If you created your script from a
// Google Sheets file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:B5 on Sheet1.
const range = sheet.getRange('A1:B5');

// Gets an array of the data source formulas in the range A1:B5.
const dataSourceFormulas = range.getDataSourceFormulas();

// Logs the first formula in the array.
console.log(dataSourceFormulas[0].getFormula());
```

#### Return

`DataSourceFormula[]` — An array of `DataSourceFormula` s.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSourcePivotTables()

Gets all the data source pivot tables intersecting with the range.

```
// Opens the spreadsheet file by its ID. If you created your script from a
// Google Sheets file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:G50 on Sheet1.
const range = sheet.getRange('A1:G50');

// Gets an array of the data source pivot tables in the range A1:G50.
const dataSourcePivotTables = range.getDataSourcePivotTables();

// Logs the last time that the first pivot table in the array was refreshed.
console.log(dataSourcePivotTables[0].getStatus().getLastRefreshedTime());
```

#### Return

`DataSourcePivotTable[]` — A list of data source pivot tables.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSourceTables()

Gets all the data source tables intersecting with the range.

```
// Opens the spreadsheet file by its ID. If you created your script from a
// Google Sheets file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:G50 on Sheet1.
const range = sheet.getRange('A1:G50');

// Gets the first data source table in the range A1:G50.
const dataSourceTable = range.getDataSourceTables()[0];

// Logs the time of the last completed data execution on the data source table.
console.log(dataSourceTable.getStatus().getLastExecutionTime());
```

#### Return

`DataSourceTable[]` — A list of data source tables.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSourceUrl()

Returns a URL for the data in this range, which can be used to create charts and queries.

### Code.gs

```
function doGet() {
  const ss = SpreadsheetApp.openById(
      '1khO6hBWTNNyvyyxvob7aoZTI9ZvlqqASNeq0e29Tw2c',
  );
  const sheet = ss.getSheetByName('ContinentData');
  const range = sheet.getRange('A1:B8');

  const template = HtmlService.createTemplateFromFile('piechart');
  template.dataSourceUrl = range.getDataSourceUrl();
  return template.evaluate();
}
```

### piechart.html

```
<!DOCTYPE html>
<html>
  <head>
    <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages': ['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(queryData);

      function queryData() {
        var query = new google.visualization.Query('<?= dataSourceUrl ?>');
        query.send(drawChart);
      }

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart(response) {
        if (response.isError()) {
          alert('Error: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }
        var data = response.getDataTable();

        // Set chart options.
        var options = {
          title: 'Population by Continent',
          width: 400,
          height: 300
        };

        // Instantiate and draw the chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <!-- Div that holds the pie chart. -->
    <div id="chart_div"></div>
  </body>
</html>
```

#### Return

`String` — A URL for this range as a data source that can be passed to other APIs such as charts.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataTable()

Return the data inside this object as a DataTable.

```
// Opens the spreadsheet file by its ID. If you created your script from a
// Google Sheets file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:B7 on Sheet1.
const range = sheet.getRange('A1:B7');

// Gets the range A1:B7 as a data table. The values in each column must be of
// the same type.
const datatable = range.getDataTable();

// Uses the Charts service to build a bar chart from the data table.
// This doesn't build an embedded chart. To do that, use
// sheet.newChart().addRange() instead.
const chart = Charts.newBarChart()
                  .setDataTable(datatable)
                  .setOption('title', 'Your Chart Title Here')
                  .build();
```

#### Return

`DataTable` — the data as a datatable.

---

### getDataTable(firstRowIsHeader)

Return the data inside this range as a DataTable.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('A1:B7');

// Calling this method with "true" sets the first line to be the title of the
// axes
const datatable = range.getDataTable(true);

// Note that this doesn't build an EmbeddedChart, so you can't just use
// Sheet#insertChart(). To do that, use sheet.newChart().addRange() instead.
const chart = Charts.newBarChart()
                  .setDataTable(datatable)
                  .setOption('title', 'Your Title Here')
                  .build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `firstRowIsHeader` | `Boolean` | Whether to treat the first row as a header. |

#### Return

`DataTable` — The data as a datatable.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataValidation()

Returns the data validation rule for the top-left cell in the range. If data validation has not been set on the cell, this method returns `null`.

```
// Log information about the data validation rule for cell A1.
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = cell.getDataValidation();
if (rule != null) {
  const criteria = rule.getCriteriaType();
  const args = rule.getCriteriaValues();
  Logger.log('The data validation rule is %s %s', criteria, args);
} else {
  Logger.log('The cell does not have a data validation rule.');
}
```

#### Return

`DataValidation` — The data validation rule for the top-left cell in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataValidations()

Returns the data validation rules for all cells in the range. If data validation has not been set on a given cell, this method returns `null` for that cell's position in the array.

```
// Change existing data validation rules that require a date in 2013 to require
// a date in 2014.
const oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
const newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
const rules = range.getDataValidations();

for (let i = 0; i < rules.length; i++) {
  for (let j = 0; j < rules[i].length; j++) {
    const rule = rules[i][j];

    if (rule != null) {
      const criteria = rule.getCriteriaType();
      const args = rule.getCriteriaValues();

      if (criteria === SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN &&
          args[0].getTime() === oldDates[0].getTime() &&
          args[1].getTime() === oldDates[1].getTime()) {
        // Create a builder from the existing rule, then change the dates.
        rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
      }
    }
  }
}
range.setDataValidations(rules);
```

#### Return

`DataValidation[][]` — A two-dimensional array of data validation rules associated with the cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDeveloperMetadata()

Gets the developer metadata associated with this range.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on Sheet1.
const range = sheet.getRange('2:2');

// Adds metadata to row 2.
range.addDeveloperMetadata('NAME', 'GOOGLE');

// Logs the metadata to console.
for (const metadata of range.getDeveloperMetadata()) {
  console.log(\`${metadata.getKey()}: ${metadata.getValue()}\`);
}
```

#### Return

`DeveloperMetadata[]` — The developer metadata associated with this range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDisplayValue()

Returns the displayed value of the top-left cell in the range. The value is a `String`. The displayed value takes into account date, time and currency formatting formatting, including formats applied automatically by the spreadsheet's locale setting. Empty cells return an empty string.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets cell A30 and sets its value to 'Test code.'
const cell = sheet.getRange('A30');
cell.setValue('Test code');

// Gets the value and logs it to the console.
console.log(cell.getDisplayValue());
```

#### Return

`String` — The displayed value in this cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDisplayValues()

Returns the rectangular grid of values for this range.

Returns a two-dimensional array of displayed values, indexed by row, then by column. The values are `String` objects. The displayed value takes into account date, time and currency formatting, including formats applied automatically by the spreadsheet's locale setting. Empty cells are represented by an empty string in the array. Remember that while a range index starts at `1, 1`, the JavaScript array is indexed from `[0][0]`.

```
// The code below gets the displayed values for the range C2:G8
// in the active spreadsheet.  Note that this is a JavaScript array.
const values =
    SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getDisplayValues();
Logger.log(values[0][0]);
```

#### Return

`String[][]` — A two-dimensional array of values.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFilter()

Returns the filter on the sheet this range belongs to, or `null` if there is no filter on the sheet.

```
const ss = SpreadsheetApp.getActiveSheet();
const range = ss.getRange('A1:C20');
// Gets the existing filter on the sheet that the given range belongs to.
const filter = range.getFilter();
```

#### Return

`Filter|null` — The filter.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontColorObject()

Returns the font color of the cell in the top-left corner of the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getFontColorObject().asRgbColor().asHexString());
```

#### Return

`Color` — The font color of the top-left cell in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontColorObjects()

Returns the font colors of the cells in the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

const results = range.getFontColorObjects();

for (const i in results) {
  for (const j in results[i]) {
    Logger.log(results[i][j].asRgbColor().asHexString());
  }
}
```

#### Return

`Color[][]` — A two-dimensional array of font colors associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontFamilies()

Returns the font families of the cells in the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

const results = range.getFontFamilies();

for (const i in results) {
  for (const j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of font families associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontFamily()

Returns the font family of the cell in the top-left corner of the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getFontFamily());
```

#### Return

`String` — The font family of the cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontLine()

Gets the line style of the cell in the top-left corner of the range (`'underline'`, `'line-through'`, or `'none'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getFontLine());
```

#### Return

`String` — The font line.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontLines()

Gets the line style of the cells in the range (`'underline'`, `'line-through'`, or `'none'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

const results = range.getFontLines();

for (const i in results) {
  for (const j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of font lines associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontSize()

Returns the font size in point size of the cell in the top-left corner of the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getFontSize());
```

#### Return

`Integer` — The font size in point size.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontSizes()

Returns the font sizes of the cells in the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

const results = range.getFontSizes();

for (const i in results) {
  for (const j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```

#### Return

`Integer[][]` — A two-dimensional array of font sizes of text associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontStyle()

Returns the font style (`'italic'` or `'normal'`) of the cell in the top-left corner of the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getFontStyle());
```

#### Return

`String` — The font style of the text in the cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontStyles()

Returns the font styles of the cells in the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

const results = range.getFontStyles();

for (const i in results) {
  for (const j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of font styles of text associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontWeight()

Returns the font weight (normal/bold) of the cell in the top-left corner of the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getFontWeight());
```

#### Return

`String` — The font weight of the text in the cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontWeights()

Returns the font weights of the cells in the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

const results = range.getFontWeights();

for (const i in results) {
  for (const j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of font weights of text associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFormula()

Returns the formula (A1 notation) for the top-left cell of the range, or an empty string if the cell is empty or doesn't contain a formula.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This assumes you have a function in B5 that sums up
// B2:B4
const range = sheet.getRange('B5');

// Logs the calculated value and the formula
Logger.log(
    'Calculated value: %s Formula: %s',
    range.getValue(),
    range.getFormula(),
);
```

#### Return

`String` — The formula for the cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFormulaR1C1()

Returns the formula (R1C1 notation) for a given cell, or `null` if none.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B5');
const formula = range.getFormulaR1C1();
Logger.log(formula);
```

#### Return

`String` — The formula in R1C1 notation.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFormulas()

Returns the formulas (A1 notation) for the cells in the range. Entries in the 2D array are empty strings for cells with no formula.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B5:C6');
const formulas = range.getFormulas();
for (const i in formulas) {
  for (const j in formulas[i]) {
    Logger.log(formulas[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of formulas in string format.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFormulasR1C1()

Returns the formulas (R1C1 notation) for the cells in the range. Entries in the 2D array are `null` for cells with no formula.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B5:C6');
const formulas = range.getFormulasR1C1();
for (const i in formulas) {
  for (const j in formulas[i]) {
    Logger.log(formulas[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of formulas in R1C1 notation.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getGridId()

Returns the grid ID of the range's parent sheet. IDs are random non-negative int values.

```
// Log the grid ID of the first sheet (by tab position) in the spreadsheet.
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getGridId());
```

#### Return

`Integer` — The grid ID of the parent sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getHeight()

Returns the height of the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B2:D4');
// logs 3.0
Logger.log(range.getHeight());
```

#### Return

`Integer` — The height of the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getHorizontalAlignment()

Returns the horizontal alignment of the text (left/center/right) of the cell in the top-left corner of the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getHorizontalAlignment());
```

#### Return

`String` — The horizontal alignment of the text in the cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getHorizontalAlignments()

Returns the horizontal alignments of the cells in the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

const results = range.getHorizontalAlignments();

for (const i in results) {
  for (const j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of horizontal alignments of text associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getLastColumn()

Returns the end column position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B2:D4');
// Logs "4.0"
Logger.log(range.getLastColumn());
```

#### Return

`Integer` — The range's ending column position in the spreadsheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getLastRow()

Returns the end row position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B2:D4');
// Logs "4.0"
Logger.log(range.getLastRow());
```

#### Return

`Integer` — The range's ending row position in the spreadsheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getMergedRanges()

Returns an array of `Range` objects representing merged cells that either are fully within the current range, or contain at least one cell in the current range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:B3');

const mergedRanges = range.getMergedRanges();
for (let i = 0; i < mergedRanges.length; i++) {
  Logger.log(mergedRanges[i].getA1Notation());
  Logger.log(mergedRanges[i].getDisplayValue());
}
```

#### Return

`Range[]` — An array of `Range` objects, representing merged cells overlapping the range.

---

### getNextDataCell(direction)

Starting at the cell in the first column and row of the range, returns the next cell in the given direction that is the edge of a contiguous range of cells with data in them or the cell at the edge of the spreadsheet in that direction. This is equivalent to typing ` Ctrl+[arrow key]` in the editor.

```
// Assume the active spreadsheet is blank.
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('C3:E5');
// Logs "C1"
Logger.log(range.getNextDataCell(SpreadsheetApp.Direction.UP).getA1Notation());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `direction` | `Direction` | The direction in which to find the next data region edge cell. |

#### Return

`Range` — The data region edge cell or the cell at the edge of the spreadsheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getNote()

Returns the note associated with the given range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getNote());
```

#### Return

`String` — The note associated with the given cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getNotes()

Returns the notes associated with the cells in the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

const results = range.getNotes();

for (const i in results) {
  for (const j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of notes associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getNumColumns()

Returns the number of columns in this range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B2:D5');
Logger.log(range.getNumColumns());
```

#### Return

`Integer` — The number of columns in this range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getNumRows()

Returns the number of rows in this range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B2:D5');
Logger.log(range.getNumRows());
```

#### Return

`Integer` — The number of rows in this range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getNumberFormat()

Get the number or date formatting of the top-left cell of the given range. The returned format patterns are described in the [Sheets API documentation](../../../workspace/sheets/api/guides/formats.md).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('C4');
Logger.log(cell.getNumberFormat());
```

#### Return

`String` — The number format of the top-left cell of the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getNumberFormats()

Returns the number or date formats for the cells in the range. The returned format patterns are described in the [Sheets API documentation](../../../workspace/sheets/api/guides/formats.md).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B5:C6');
const formats = range.getNumberFormats();
for (const i in formats) {
  for (const j in formats[i]) {
    Logger.log(formats[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of number formats.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRichTextValue()

Returns the Rich Text value for the top left cell of the range, or `null` if the cell value is not text.

```
// Gets the Rich Text value of cell D4.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('D4:F6');
const richText = range.getRichTextValue();
console.log(richText.getText());
```

#### Return

`RichTextValue|null` — The Rich Text value of the top left cell in the range, or `null` if the cell value is not text.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRichTextValues()

Returns the Rich Text values for the cells in the range.

```
// Gets the Rich Text values for all cells in range B5:C6
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B5:C6');
const values = range.getRichTextValues();

for (let i = 0; i < values.length; i++) {
  for (let j = 0; j < values[i].length; j++) {
    console.log(values[i][j].getText());
  }
}
```

#### Return

`RichTextValue[][]` — A two-dimensional array of Rich Text values.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRow()

Returns the row position for this range. Identical to [getRowIndex()](./range.md#getrowindex).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B2');
Logger.log(range.getRow());
```

#### Return

`Integer` — The row position of the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRowIndex()

Returns the row position for this range. Identical to [getRow()](./range.md#getrow).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B2');
Logger.log(range.getRowIndex());
```

#### Return

`Integer` — The row position of the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

#### See also

- `getRow()`

---

### getSheet()

Returns the sheet this range belongs to.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Gets the sheet that the range belongs to.
const rangeSheet = range.getSheet();

// Gets the sheet name and logs it to the console.
console.log(rangeSheet.getName());
```

#### Return

`Sheet` — The sheet that this range belongs to.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getTextDirection()

Returns the text direction for the top left cell of the range. Returns `null` if the cell text direction is determined with automatic detection.

```
// Get the text direction of cell B1.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B1:D4');
Logger.log(range.getTextDirection());
```

#### Return

`TextDirection` — The text direction of the top left cell in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getTextDirections()

Returns the text directions for the cells in the range. Entries in the 2D array are `null` for cells using automatic detection.

```
// Get the text directions for all cells in range B5:C6
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B5:C6');
const directions = range.getTextDirections();

for (let i = 0; i < directions.length; i++) {
  for (let j = 0; j < directions[i].length; j++) {
    Logger.log(directions[i][j]);
  }
}
```

#### Return

`TextDirection[][]` — A two-dimensional array of text directions.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getTextRotation()

Returns the text rotation settings for the top left cell of the range.

```
// Log the text rotation settings for a cell.
const sheet = SpreadsheetApp.getActiveSheet();

const cell = sheet.getRange('A1');
Logger.log(cell.getTextRotation());
```

#### Return

`TextRotation` — The text rotation settings.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getTextRotations()

Returns the text rotation settings for the cells in the range.

```
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B2:D4');

const results = range.getTextRotations();

for (const i in results) {
  for (const j in results[i]) {
    const rotation = results[i][j];
    Logger.log('Cell [%s, %s] has text rotation: %v', i, j, rotation);
  }
}
```

#### Return

`TextRotation[][]` — A two-dimensional array of text rotations associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getTextStyle()

Returns the text style for the top left cell of the range.

```
// Get the text style of cell D4.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('D4:F6');
const style = range.getTextStyle();
Logger.log(style);
```

#### Return

`TextStyle` — The text style of the top left cell in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getTextStyles()

Returns the text styles for the cells in the range.

```
// Get the text styles for all cells in range B5:C6
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B5:C6');
const styles = range.getTextStyles();

for (let i = 0; i < styles.length; i++) {
  for (let j = 0; j < styles[i].length; j++) {
    Logger.log(styles[i][j]);
  }
}
```

#### Return

`TextStyle[][]` — A two-dimensional array of text styles.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getValue()

Returns the value of the top-left cell in the range. The value may be of type `Number`, `Boolean`, `Date`, or `String` depending on the value of the cell. Empty cells return an empty string.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Gets the value of the top-left cell in the range and logs it to the console.
console.log(range.getValue());
```

#### Return

`Object` — The value in this cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getValues()

Returns the rectangular grid of values for this range.

Returns a two-dimensional array of values, indexed by row, then by column. The values may be of type `Number`, `Boolean`, `Date`, or `String`, depending on the value of the cell. Empty cells are represented by an empty string in the array. Remember that while a range index starts at `1, 1`, the JavaScript array is indexed from `[0][0]`.

```
// The code below gets the values for the range C2:G8
// in the active spreadsheet.  Note that this is a JavaScript array.
const values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getValues();
Logger.log(values[0][0]);
```

In web apps, a `Date` value isn't a legal parameter. `getValues()` fails to return data to a web app if the range contains a cell with a `Date` value. Instead, transform all the values retrieved from the sheet to a supported JavaScript primitive like a `Number`, `Boolean`, or `String`.

#### Return

`Object[][]` — A two-dimensional array of values.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getVerticalAlignment()

Returns the vertical alignment (top/middle/bottom) of the cell in the top-left corner of the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getVerticalAlignment());
```

#### Return

`String` — The vertical alignment of the text in the cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getVerticalAlignments()

Returns the vertical alignments of the cells in the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

const results = range.getVerticalAlignments();

for (const i in results) {
  for (const j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of vertical alignments of text associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getWidth()

Returns the width of the range in columns.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Gets the width of the range in number of columns and logs it to the console.
console.log(range.getWidth());
```

#### Return

`Integer` — The number of columns in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getWrap()

Returns whether the text in the cell wraps. To get more granular wrap strategy, use `getWrapStrategy()`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getWrap());
```

#### Return

`Boolean` — Whether the text in this cell wraps or not.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getWrapStrategies()

Returns the text wrapping strategies for the cells in the range.

```
// Get the text wrapping strategies for all cells in range B5:C6
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B5:C6');
const strategies = range.getWrapStrategies();

for (let i = 0; i < strategies.length; i++) {
  for (let j = 0; j < strategies[i].length; j++) {
    Logger.log(strategies[i][j]);
  }
}
```

#### Return

`WrapStrategy[][]` — A two-dimensional array of text wrapping strategies.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getWrapStrategy()

Returns the text wrapping strategy for the top left cell of the range.

```
// Get the text wrapping strategy of cell B1.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B1:D4');
Logger.log(range.getWrapStrategy());
```

#### Return

`WrapStrategy` — The text wrapping strategy of the top left cell in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getWraps()

Returns whether the text in the cells wrap. To get more granular wrap strategy, use `getWrapStrategies()`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

const results = range.getVerticalAlignments();

for (const i in results) {
  for (const j in results[i]) {
    const isWrapped = results[i][j];
    if (isWrapped) {
      Logger.log('Cell [%s, %s] has wrapped text', i, j);
    }
  }
}
```

#### Return

`Boolean[][]` — A two-dimensional array of vertical alignments of text associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertCells(shiftDimension)

Inserts empty cells into this range. The new cells retain any formatting present in the cells previously occupying this range. Existing data in the sheet along the provided dimension is shifted away from the inserted range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:D10');
range.insertCells(SpreadsheetApp.Dimension.COLUMNS);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `shiftDimension` | `Dimension` | The dimension along which to shift existing data. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertCheckboxes()

Inserts checkboxes into each cell in the range, configured with `true` for checked and `false` for unchecked. Sets the value of all cells in the range to `false`.

```
const range = SpreadsheetApp.getActive().getRange('A1:B10');

// Inserts checkboxes into each cell in the range A1:B10 configured with 'true'
// for checked and 'false' for unchecked. Also, sets the value of each cell in
// the range A1:B10 to 'false'.
range.insertCheckboxes();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertCheckboxes(checkedValue)

Inserts checkboxes into each cell in the range, configured with a custom value for checked and the empty string for unchecked. Sets the value of each cell in the range to the empty string.

```
const range = SpreadsheetApp.getActive().getRange('A1:B10');

// Inserts checkboxes into each cell in the range A1:B10 configured with 'yes'
// for checked and the empty string for unchecked. Also, sets the value of each
// cell in the range A1:B10 to
//  the empty string.
range.insertCheckboxes('yes');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `checkedValue` | `Object` | The checked value for the checkbox data validation. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertCheckboxes(checkedValue, uncheckedValue)

Inserts checkboxes into each cell in the range, configured with custom values for the checked and unchecked states. Sets the value of each cell in the range to the custom unchecked value.

```
const range = SpreadsheetApp.getActive().getRange('A1:B10');

// Inserts checkboxes into each cell in the range A1:B10 configured with 'yes'
// for checked and 'no' for unchecked. Also, sets the value of each cell in the
// range A1:B10 to 'no'.
range.insertCheckboxes('yes', 'no');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `checkedValue` | `Object` | The checked value for the checkbox data validation. |
| `uncheckedValue` | `Object` | The unchecked value for the checkbox data validation. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isBlank()

Returns `true` if the range is totally blank.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.isBlank());
```

#### Return

`Boolean` — `true` if the range is blank; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isChecked()

Returns whether all cells in the range have their checkbox state as 'checked'. Returns `null` if some cells are checked and the rest unchecked, or if some cells do not have checkbox data validation.

```
const range = SpreadsheetApp.getActive().getRange('A1:A3');

// Inserts checkboxes and sets each cell value to 'no' in the range A1:A3.
range.insertCheckboxes('yes', 'no');

const range1 = SpreadsheetApp.getActive().getRange('A1');
range1.setValue('yes');
// Sets the value of isRange1Checked as true as it contains the checked value.
const isRange1Checked = range1.isChecked();

const range2 = SpreadsheetApp.getActive().getRange('A2');
range2.setValue('no');
// Sets the value of isRange2Checked as false as it contains the unchecked
// value.
const isRange2Checked = range2.isChecked();

const range3 = SpreadsheetApp.getActive().getRange('A3');
range3.setValue('random');
// Sets the value of isRange3Checked as null, as it contains an invalid checkbox
// value.
const isRange3Checked = range3.isChecked();
```

#### Return

`Boolean` — `true`, if all cells in the range are checked, `false` if all cells in the range are unchecked, or `null` if any of the cells are unchecked or do not have checkbox data validation.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isEndColumnBounded()

Determines whether the end of the range is bound to a particular column. For example, for the ranges `A1:B10` or `B:B`, which are bound to columns at the end of the range, this method returns `true`; for the ranges `3:7` or `A1:5`, which are bound only to particular rows at the end of the range, this method returns `false`.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Determines if the end of the range is bound to a particular column and logs
// it to the console.
console.log(range.isEndColumnBounded());
```

#### Return

`Boolean` — `true` if the end of the range is bound to a particular column; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isEndRowBounded()

Determines whether the end of the range is bound to a particular row. For example, for the ranges `A1:B10` or `3:7`, which are bound to rows at the end of the range, this method returns `true`; for the ranges `B:B` or `A1:C`, which are bound only to particular columns at the end of the range, this method returns `false`.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Determines if the end of the range is bound to a particular row and logs it
// to the console.
console.log(range.isEndRowBounded());
```

#### Return

`Boolean` — `true` if the end of the range is bound to a particular row; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isPartOfMerge()

Returns `true` if the cells in the current range overlap any merged cells.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:B3');

// True if any of the cells in A1:B3 is included in a merge.
const isPartOfMerge = range.isPartOfMerge();
```

#### Return

`Boolean` — `true` if the range overlaps any merged cells, otherwise returns `false`.

---

### isStartColumnBounded()

Determines whether the start of the range is bound to a particular column. For example, for the ranges `A1:B10` or `B:B`, which are bound to columns at the start of the range, this method returns `true`; for the range `3:7`, which is bound only to a row at the start of the range, this method returns `false`.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Determines if the start of the range is bound to a particular column and logs
// it to the console.
console.log(range.isStartColumnBounded());
```

#### Return

`Boolean` — `true` if the start of the range is bound to a particular column; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isStartRowBounded()

Determines whether the start of the range is bound to a particular row. For example, for the ranges `A1:B10` or `3:7`, which are bound to rows at the start of the range, this method returns `true`; for the range `B:B`, which is bound only to a particular column at the start of the range, this method returns `false`.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Determines if the start of the range is bound to a particular row and logs it
// to the console.
console.log(range.isStartRowBounded());
```

#### Return

`Boolean` — `true` if the start of the range is bound to a particular row; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### merge()

Merges the cells in the range together into a single block.

```
const sheet = SpreadsheetApp.getActiveSheet();

// The code below 2-dimensionally merges the cells in A1 to B3
sheet.getRange('A1:B3').merge();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### mergeAcross()

Merge the cells in the range across the columns of the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The code below merges cells C5:E5 into one cell
const range1 = sheet.getRange('C5:E5');
range1.mergeAcross();

// The code below creates 2 horizontal cells, F5:H5 and F6:H6
const range2 = sheet.getRange('F5:H6');
range2.mergeAcross();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### mergeVertically()

Merges the cells in the range together.

```
const sheet = SpreadsheetApp.getActiveSheet();

// The code below vertically merges the cells in A1 to A10
sheet.getRange('A1:A10').mergeVertically();

// The code below creates 3 merged columns: B1 to B10, C1 to C10, and D1 to D10
sheet.getRange('B1:D10').mergeVertically();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### moveTo(target)

Cut and paste (both format and values) from this range to the target range.

```
// The code below moves the first 5 columns over to the 6th column
const sheet = SpreadsheetApp.getActiveSheet();
sheet.getRange('A1:E').moveTo(sheet.getRange('F1'));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `target` | `Range` | A target range to copy this range to; only the top-left cell position is relevant. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### offset(rowOffset, columnOffset)

Returns a new range that is offset from this range by the given number of rows and columns (which can be negative). The new range is the same size as the original range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('A1');

// newCell references B2
const newCell = cell.offset(1, 1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowOffset` | `Integer` | The number of rows down from the range's top-left cell; negative values represent rows up from the range's top-left cell. |
| `columnOffset` | `Integer` | The number of columns right from the range's top-left cell; negative values represent columns left from the range's top-left cell. |

#### Return

`Range` — This range, for chaining.

---

### offset(rowOffset, columnOffset, numRows)

Returns a new range that is relative to the current range, whose upper left point is offset from the current range by the given rows and columns, and with the given height in cells.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('A1');

// newCell references B2:B3
const newRange = cell.offset(1, 1, 2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowOffset` | `Integer` | The number of rows down from the range's top-left cell; negative values represent rows up from the range's top-left cell. |
| `columnOffset` | `Integer` | The number of columns right from the range's top-left cell; negative values represent columns left from the range's top-left cell. |
| `numRows` | `Integer` | The height in rows of the new range. |

#### Return

`Range` — This range, for chaining.

---

### offset(rowOffset, columnOffset, numRows, numColumns)

Returns a new range that is relative to the current range, whose upper left point is offset from the current range by the given rows and columns, and with the given height and width in cells.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('A1');

// newCell references B2:C3
const newRange = cell.offset(1, 1, 2, 2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowOffset` | `Integer` | The number of rows down from the range's top-left cell; negative values represent rows up from the range's top-left cell. |
| `columnOffset` | `Integer` | The number of columns right from the range's top-left cell; negative values represent columns left from the range's top-left cell. |
| `numRows` | `Integer` | The height in rows of the new range. |
| `numColumns` | `Integer` | The width in columns of the new range. |

#### Return

`Range` — This range, for chaining.

---

### protect()

Creates an object that can protect the range from being edited except by users who have permission. Until the script actually changes the list of editors for the range (by calling `Protection.removeEditor(emailAddress)`, `Protection.removeEditor(user)`, `Protection.removeEditors(emailAddresses)`, `Protection.addEditor(emailAddress)`, `Protection.addEditor(user)`, `Protection.addEditors(emailAddresses)`, or setting a new value for `Protection.setDomainEdit(editable)`), the permissions mirror those of the spreadsheet itself, which effectively means that the range remains unprotected. If the range is already protected, this method creates a new protected range that overlaps the existing one. If a cell is protected by multiple protected ranges and any of them prevent a particular user from editing the cell, then that user is not permitted to edit the cell.

```
// Protect range A1:B10, then remove all other users from the list of editors.
const ss = SpreadsheetApp.getActive();
const range = ss.getRange('A1:B10');
const protection = range.protect().setDescription('Sample protected range');

// Ensure the current user is an editor before removing others. Otherwise, if
// the user's edit permission comes from a group, the script throws an exception
// upon removing the group.
const me = Session.getEffectiveUser();
protection.addEditor(me);
protection.removeEditors(protection.getEditors());
if (protection.canDomainEdit()) {
  protection.setDomainEdit(false);
}
```

#### Return

`Protection` — An object representing the protection settings.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### randomize()

Randomizes the order of the rows in the given range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('A1:C7');

// Randomizes the range
range.randomize();
```

#### Return

`Range` — This range, for chaining.

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

const range1 = SpreadsheetApp.getActive().getRange('A1');
range1.setValue('yes');
// Removes the checkbox data validation in cell A1 and clears its value.
range1.removeCheckboxes();

const range2 = SpreadsheetApp.getActive().getRange('A2');
range2.setValue('random');
// Removes the checkbox data validation in cell A2 but does not clear its value.
range2.removeCheckboxes();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### removeDuplicates()

Removes rows within this range that contain values that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This method also removes duplicates rows hidden from view (for example, due to a filter). Content outside of this range isn't removed.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B1:D7');

// Remove duplicate rows in the range.
range.removeDuplicates();
```

#### Return

`Range` — The resulting range after removing duplicates. The size of the range is reduced by a row for every row removed.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### removeDuplicates(columnsToCompare)

Removes rows within this range that contain values in the specified columns that are duplicates of values any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This method also removes duplicates rows hidden from view (for example, due to a filter). Content outside of this range isn't removed.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B1:D7');

// Remove rows which have duplicate values in column B.
range.removeDuplicates([2]);

// Remove rows which have duplicate values in both columns B and D.
range.removeDuplicates([2, 4]);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnsToCompare` | `Integer[]` | The columns to analyze for duplicate values. If no columns are provided then all columns are analyzed for duplicates. |

#### Return

`Range` — The resulting range after removing duplicates. The size of the range is reduced by a row for every row removed.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setBackground(color)

Sets the background color of all cells in the range in CSS notation (such as `'#ffffff'` or `'white'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('B2:D5');
range.setBackground('red');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | A color code in CSS notation (such as `'#ffffff'` or `'white'`); a `null` value resets the color. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setBackgroundObject(color)

Sets the background color of all cells in the range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const bgColor = SpreadsheetApp.newColor()
                    .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
                    .build();

const range = sheet.getRange('B2:D5');
range.setBackgroundObject(bgColor);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The background color to set; `null` value resets the background color. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setBackgroundObjects(color)

Sets a rectangular grid of background colors (must match dimensions of this range).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const colorAccent1 = SpreadsheetApp.newColor()
                         .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
                         .build();
const colorAccent2 = SpreadsheetApp.newColor()
                         .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
                         .build();
const colorAccent3 = SpreadsheetApp.newColor()
                         .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
                         .build();
const colorAccent4 = SpreadsheetApp.newColor()
                         .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT4)
                         .build();

const colors = [
  [colorAccent1, colorAccent2],
  [colorAccent3, colorAccent4],
];

const cell = sheet.getRange('B5:C6');
cell.setBackgroundObjects(colors);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color[][]` | A two-dimensional array of colors; `null` values reset the color. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setBackgroundRGB(red, green, blue)

Sets the background to the given color using RGB values (integers between 0 and 255 inclusive).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');

// Sets the background to white
cell.setBackgroundRGB(255, 255, 255);

// Sets the background to red
cell.setBackgroundRGB(255, 0, 0);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `red` | `Integer` | The red value in RGB notation. |
| `green` | `Integer` | The green value in RGB notation. |
| `blue` | `Integer` | The blue value in RGB notation. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setBackgrounds(color)

Sets a rectangular grid of background colors (must match dimensions of this range). The colors are in CSS notation (such as `'#ffffff'` or `'white'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const colors = [
  ['red', 'white', 'blue'],
  ['#FF0000', '#FFFFFF', '#0000FF'],  // These are the hex equivalents
];

const cell = sheet.getRange('B5:D6');
cell.setBackgrounds(colors);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String[][]` | A two-dimensional array of colors in CSS notation (such as `'#ffffff'` or `'white'`); `null` values reset the color. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setBorder(top, left, bottom, right, vertical, horizontal)

Sets the border property. Valid values are `true` (on), `false` (off) and `null` (no change).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
// Sets borders on the top and bottom, but leaves the left and right unchanged
cell.setBorder(true, null, true, null, false, false);
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

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setBorder(top, left, bottom, right, vertical, horizontal, color, style)

Sets the border property with color and/or style. Valid values are `true` (on), `false` (off) and `null` (no change). For color, use Color in CSS notation (such as `'#ffffff'` or `'white'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
// Sets borders on the top and bottom, but leaves the left and right unchanged
// Also sets the color to "red", and the border to "DASHED".
cell.setBorder(
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
| `color` | `String` | A color in CSS notation (such as `'#ffffff'` or `'white'`), `null` for default color (black). |
| `style` | `BorderStyle` | A style for the borders, `null` for default style (solid). |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setDataValidation(rule)

Sets one data validation rule for all cells in the range.

```
// Set the data validation rule for cell A1 to require a value from B1:B10.
const cell = SpreadsheetApp.getActive().getRange('A1');
const range = SpreadsheetApp.getActive().getRange('B1:B10');
const rule =
    SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
cell.setDataValidation(rule);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rule` | `DataValidation` | The data validation rule to set, or `null` to remove data validation. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setDataValidations(rules)

Sets the data validation rules for all cells in the range. This method takes a two-dimensional array of data validations, indexed by row then by column. The array dimensions must correspond to the range dimensions.

```
// Set the data validation rules for Sheet1!A1:B5 to require a value from
// Sheet2!A1:A10.
const destinationRange =
    SpreadsheetApp.getActive().getSheetByName('Sheet1').getRange('A1:B5');
const sourceRange =
    SpreadsheetApp.getActive().getSheetByName('Sheet2').getRange('A1:A10');
const rule =
    SpreadsheetApp.newDataValidation().requireValueInRange(sourceRange).build();
const rules = destinationRange.getDataValidations();
for (let i = 0; i < rules.length; i++) {
  for (let j = 0; j < rules[i].length; j++) {
    rules[i][j] = rule;
  }
}
destinationRange.setDataValidations(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rules` | `DataValidation[][]` | A two-dimensional array of data validation rules to set; `null` values remove data validation. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontColor(color)

Sets the font color in CSS notation (such as `'#ffffff'` or `'white'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
cell.setFontColor('red');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | The font color in CSS notation (such as `'#ffffff'` or `'white'`); a `null` value resets the color. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontColorObject(color)

Sets the font color of the given range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const color = SpreadsheetApp.newColor()
                  .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
                  .build();

const cell = sheet.getRange('B2');
cell.setFontColor(color);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The font color to set; a `null` value resets the color. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontColorObjects(colors)

Sets a rectangular grid of font colors (must match dimensions of this range).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const colorAccent1 = SpreadsheetApp.newColor()
                         .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
                         .build();
const colorAccent2 = SpreadsheetApp.newColor()
                         .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
                         .build();
const colorAccent3 = SpreadsheetApp.newColor()
                         .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
                         .build();
const colorAccent4 = SpreadsheetApp.newColor()
                         .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT4)
                         .build();

const colors = [
  [colorAccent1, colorAccent2],
  [colorAccent3, colorAccent4],
];

const cell = sheet.getRange('B5:C6');
cell.setFontColorObjects(colors);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `colors` | `Color[][]` | A two-dimensional array of colors; `null` values reset the font color. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontColors(colors)

Sets a rectangular grid of font colors (must match dimensions of this range). The colors are in CSS notation (such as `'#ffffff'` or `'white'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const colors = [
  ['red', 'white', 'blue'],
  ['#FF0000', '#FFFFFF', '#0000FF'],  // These are the hex equivalents
];

const cell = sheet.getRange('B5:D6');
cell.setFontColors(colors);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `colors` | `Object[][]` | A two-dimensional array of colors in CSS notation (such as `'#ffffff'` or `'white'`); `null` values reset the color. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontFamilies(fontFamilies)

Sets a rectangular grid of font families (must match dimensions of this range). Examples of font families are "Arial" or "Helvetica".

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const fonts = [
  ['Arial', 'Helvetica', 'Verdana'],
  ['Courier New', 'Arial', 'Helvetica'],
];

const cell = sheet.getRange('B2:D3');
cell.setFontFamilies(fonts);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontFamilies` | `Object[][]` | A two-dimensional array of font families; `null` values reset the font family. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontFamily(fontFamily)

Sets the font family, such as "Arial" or "Helvetica".

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
cell.setFontFamily('Helvetica');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontFamily` | `String` | The font family to set; a `null` value resets the font family. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontLine(fontLine)

Sets the font line style of the given range (`'underline'`, `'line-through'`, or `'none'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
cell.setFontLine('line-through');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontLine` | `String` | The font line style, either `'underline'`, `'line-through'`, or `'none'`; a `null` value resets the font line style. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontLines(fontLines)

Sets a rectangular grid of line styles (must match dimensions of this range).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
const fontLines = [['underline', 'line-through', 'none']];

const range = sheet.getRange('B2:D2');
range.setFontLines(fontLines);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontLines` | `Object[][]` | A two-dimensional array of font line styles (`'underline'`, `'line-through'`, or `'none'`); `null` values reset the font line style. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontSize(size)

Sets the font size, with the size being the point size to use.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
cell.setFontSize(20);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `size` | `Integer` | A font size in point size. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontSizes(sizes)

Sets a rectangular grid of font sizes (must match dimensions of this range). The sizes are in points.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
const fontSizes = [[16, 20, 24]];

const range = sheet.getRange('B2:D2');
range.setFontSizes(fontSizes);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sizes` | `Object[][]` | A two-dimensional array of sizes. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontStyle(fontStyle)

Set the font style for the given range (`'italic'` or `'normal'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
cell.setFontStyle('italic');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontStyle` | `String` | The font style, either `'italic'` or `'normal'`; a `null` value resets the font style. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontStyles(fontStyles)

Sets a rectangular grid of font styles (must match dimensions of this range).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
const fontStyles = [['italic', 'normal']];

const range = sheet.getRange('B2:C2');
range.setFontStyles(fontStyles);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontStyles` | `Object[][]` | A two-dimensional array of font styles, either `'italic'` or `'normal'`; `null` values reset the font style. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontWeight(fontWeight)

Set the font weight for the given range (normal/bold).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
cell.setFontWeight('bold');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontWeight` | `String` | The font weight, either `'bold'` or `'normal'`; a `null` value resets the font weight. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFontWeights(fontWeights)

Sets a rectangular grid of font weights (must match dimensions of this range). An example of a font weight is "bold".

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
const fontStyles = [['bold', 'bold', 'normal']];

const range = sheet.getRange('B2:D2');
range.setFontWeights(fontStyles);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fontWeights` | `Object[][]` | A two-dimensional array of font weights, either `'bold'` or `'normal'`; `null` values reset the font weight. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFormula(formula)

Updates the formula for this range. The given formula must be in A1 notation.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B5');
cell.setFormula('=SUM(B3:B4)');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formula` | `String` | A string representing the formula to set for the cell. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFormulaR1C1(formula)

Updates the formula for this range. The given formula must be in R1C1 notation.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B5');
// This sets the formula to be the sum of the 3 rows above B5
cell.setFormulaR1C1('=SUM(R[-3]C[0]:R[-1]C[0])');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formula` | `String` | A string formula. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFormulas(formulas)

Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas must be in A1 notation. This method takes a two-dimensional array of formulas, indexed by row, then by column. The array dimensions must correspond to the range dimensions.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This sets the formulas to be a row of sums, followed by a row of averages
// right below. The size of the two-dimensional array must match the size of the
// range.
const formulas = [
  ['=SUM(B2:B4)', '=SUM(C2:C4)', '=SUM(D2:D4)'],
  ['=AVERAGE(B2:B4)', '=AVERAGE(C2:C4)', '=AVERAGE(D2:D4)'],
];

const cell = sheet.getRange('B5:D6');
cell.setFormulas(formulas);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formulas` | `String[][]` | A two-dimensional string array of formulas. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFormulasR1C1(formulas)

Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas must be in R1C1 notation.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This creates formulas for a row of sums, followed by a row of averages.
const sumOfRowsAbove = '=SUM(R[-3]C[0]:R[-1]C[0])';
const averageOfRowsAbove = '=AVERAGE(R[-4]C[0]:R[-2]C[0])';

// The size of the two-dimensional array must match the size of the range.
const formulas = [
  [sumOfRowsAbove, sumOfRowsAbove, sumOfRowsAbove],
  [averageOfRowsAbove, averageOfRowsAbove, averageOfRowsAbove],
];

const cell = sheet.getRange('B5:D6');
// This sets the formula to be the sum of the 3 rows above B5.
cell.setFormulasR1C1(formulas);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `formulas` | `String[][]` | A two-dimensional array of formulas in R1C1 format. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setHorizontalAlignment(alignment)

Set the horizontal (left to right) alignment for the given range (left/center/right).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
cell.setHorizontalAlignment('center');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignment` | `String` | The alignment, either `'left'`, `'center'` or `'normal'`; a `null` value resets the alignment. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setHorizontalAlignments(alignments)

Sets a rectangular grid of horizontal alignments. see `setHorizontalAlignment(alignment)`

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
const horizontalAlignments = [['left', 'right', 'center']];

const range = sheet.getRange('B2:D2');
range.setHorizontalAlignments(horizontalAlignments);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignments` | `Object[][]` | A two-dimensional array of alignments, either `'left'`, `'center'` or `'normal'`; a `null` value resets the alignment. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

#### See also

- `setHorizontalAlignment(alignment)`

---

### setNote(note)

Sets the note to the given value.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
cell.setNote('This is a note');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `note` | `String` | The note value to set for the range; a `null` value removes the note. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setNotes(notes)

Sets a rectangular grid of notes (must match dimensions of this range).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
const notes = [
  ['it goes', 'like this', 'the fourth, the fifth'],
  ['the minor fall', 'and the', 'major lift'],
];

const cell = sheet.getRange('B2:D3');
cell.setNotes(notes);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `notes` | `Object[][]` | A two-dimensional array of notes; `null` values remove the note. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

#### See also

- `setNote(note)`

---

### setNumberFormat(numberFormat)

Sets the number or date format to the given formatting string. The accepted format patterns are described in the [Sheets API documentation](../../../workspace/sheets/api/guides/formats.md).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
// Always show 3 decimal points
cell.setNumberFormat('0.000');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `numberFormat` | `String` | A number format string. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setNumberFormats(numberFormats)

Sets a rectangular grid of number or date formats (must match dimensions of this range). The values are format pattern strings as described in the [Sheets API documentation](../../../workspace/sheets/api/guides/formats.md).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
const formats = [['0.000', '0,000,000', '$0.00']];

const range = sheet.getRange('B2:D2');
range.setNumberFormats(formats);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `numberFormats` | `Object[][]` | A two-dimensional array of number formats. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setRichTextValue(value)

Sets the Rich Text value for the cells in the range.

```
// Sets all cells in range B2:D4 to have the text "Hello world", with "Hello"
// bolded.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B2:D4');
const bold = SpreadsheetApp.newTextStyle().setBold(true).build();
const richText = SpreadsheetApp.newRichTextValue()
                     .setText('Hello world')
                     .setTextStyle(0, 5, bold)
                     .build();
range.setRichTextValue(richText);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `RichTextValue` | The desired Rich Text value. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setRichTextValues(values)

Sets a rectangular grid of Rich Text values.

```
// Sets the cells in range A1:A2 to have Rich Text values.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:A2');
const bold = SpreadsheetApp.newTextStyle().setBold(true).build();
const italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
const richTextA1 = SpreadsheetApp.newRichTextValue()
                       .setText('This cell is bold')
                       .setTextStyle(bold)
                       .build();
const richTextA2 = SpreadsheetApp.newRichTextValue()
                       .setText('bold words, italic words')
                       .setTextStyle(0, 11, bold)
                       .setTextStyle(12, 24, italic)
                       .build();
range.setRichTextValues([[richTextA1], [richTextA2]]);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `values` | `RichTextValue[][]` | The desired Rich Text values. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setShowHyperlink(showHyperlink)

Sets whether or not the range should show hyperlinks.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can useSpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets cell A30 and sets its hyperlink value.
const range = sheet.getRange('A30');
range.setValue('https://www.example.com');

// Sets cell A30 to show hyperlinks.
range.setShowHyperlink(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `showHyperlink` | `Boolean` | Whether or not to show the hyperlink. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setTextDirection(direction)

Sets the text direction for the cells in the range. If a specified direction is `null`, the direction is inferred and then set.

```
// Sets right-to-left text direction for the range.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B5:C6');
range.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `direction` | `TextDirection` | The desired text direction; if `null` the direction is inferred before setting. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setTextDirections(directions)

Sets a rectangular grid of text directions. If a specified direction is `null`, the direction is inferred and then set.

```
// Copies all of the text directions from range A1:B2 over to range C5:D6.
const sheet = SpreadsheetApp.getActiveSheet();
const range1 = sheet.getRange('A1:B2');
const range2 = sheet.getRange('C5:D6');

range2.setTextRotations(range1.getTextDirections());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `directions` | `TextDirection[][]` | The desired text directions; if a specified direction is `null` it is inferred before setting. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setTextRotation(degrees)

Sets the text rotation settings for the cells in the range. The input corresponds to the angle between the standard text orientation and the desired orientation. An input of zero indicates that the text is set to the standard orientation.

For left to right text direction, positive angles are in the counterclockwise direction, whereas for right to left they are in the clockwise direction.

```
// Sets all cell's in range B2:D4 to have text rotated up 45 degrees.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B2:D4');

range.setTextRotation(45);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `degrees` | `Integer` | The desired angle between the standard orientation and the desired orientation. For left to right text, positive angles are in the counterclockwise direction. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setTextRotation(rotation)

Sets the text rotation settings for the cells in the range.

```
// Sets all cell's in range B2:D4 to have the same text rotation settings as
// cell A1.
const sheet = SpreadsheetApp.getActiveSheet();

const rotation = sheet.getRange('A1').getTextRotation();

sheet.getRange('B2:D4').setTextRotation(rotation);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rotation` | `TextRotation` | The desired text rotation settings. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setTextRotations(rotations)

Sets a rectangular grid of text rotations.

```
// Copies all of the text rotations from range A1:B2 over to range C5:D6.
const sheet = SpreadsheetApp.getActiveSheet();
const range1 = sheet.getRange('A1:B2');
const range2 = sheet.getRange('C5:D6');

range2.setTextRotations(range1.getTextRotations());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rotations` | `TextRotation[][]` | The desired text rotation settings. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setTextStyle(style)

Sets the text style for the cells in the range.

```
// Sets the cells in range C5:D6 to have underlined size 15 font.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('C5:D6');
const style =
    SpreadsheetApp.newTextStyle().setFontSize(15).setUnderline(true).build();
range.setTextStyle(style);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `style` | `TextStyle` | The desired text style. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setTextStyles(styles)

Sets a rectangular grid of text styles.

```
// Sets text styles for cells in range A1:B2
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B2');
const bold = SpreadsheetApp.newTextStyle().setBold(true).build();
const otherStyle = SpreadsheetApp.newTextStyle()
                       .setBold(true)
                       .setUnderline(true)
                       .setItalic(true)
                       .setForegroundColor('#335522')
                       .setFontSize(44)
                       .build();
range.setTextStyles([
  [bold, otherStyle],
  [otherStyle, bold],
]);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `styles` | `TextStyle[][]` | The desired text styles. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setValue(value)

Sets the value of the range. The value can be numeric, string, boolean or date. If it begins with `'='` it is interpreted as a formula.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
cell.setValue(100);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `Object` | The value for the range. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setValues(values)

Sets a rectangular grid of values (must match dimensions of this range). If a value begins with `=`, it's interpreted as a formula.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
const values = [['2.000', '1,000,000', '$2.99']];

const range = sheet.getRange('B2:D2');
range.setValues(values);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `values` | `Object[][]` | A two-dimensional array of values. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setVerticalAlignment(alignment)

Set the vertical (top to bottom) alignment for the given range (top/middle/bottom).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
cell.setVerticalAlignment('middle');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignment` | `String` | The alignment, either `'top'`, `'middle'` or `'bottom'`; a `null` value resets the alignment. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setVerticalAlignments(alignments)

Sets a rectangular grid of vertical alignments (must match dimensions of this range).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
const alignments = [['top', 'middle', 'bottom']];

const range = sheet.getRange('B2:D2');
range.setVerticalAlignments(alignments);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignments` | `Object[][]` | A two-dimensional array of alignments, either `'top'`, `'middle'` or `'bottom'`; a `null` value resets the alignment. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

#### See also

- `setVerticalAlignment(alignment)`

---

### setVerticalText(isVertical)

Sets whether or not to stack the text for the cells in the range. If the text is stacked vertically, the degree text rotation setting is ignored.

```
// Sets all cell's in range B2:D4 to have vertically stacked text.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B2:D4');

range.setVerticalText(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isVertical` | `Boolean` | Whether or not to stack the text. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setWrap(isWrapEnabled)

Set the cell wrap of the given range.

Cells with wrap enabled (the default) resize to display their full content. Cells with wrap disabled display as much as possible in the cell without resizing or running to multiple lines.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const cell = sheet.getRange('B2');
cell.setWrap(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isWrapEnabled` | `Boolean` | Whether to wrap text or not. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setWrapStrategies(strategies)

Sets a rectangular grid of wrap strategies.

```
// Copies all of the wrap strategies from range A1:B2 over to range C5:D6.
const sheet = SpreadsheetApp.getActiveSheet();
const range1 = sheet.getRange('A1:B2');
const range2 = sheet.getRange('C5:D6');

range2.setWrapStrategies(range1.getWrapStrategies());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `strategies` | `WrapStrategy[][]` | The desired wrapping strategies. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setWrapStrategy(strategy)

Sets the text wrapping strategy for the cells in the range.

```
// Sets all cells in range B2:D4 to use the clip wrap strategy.
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('B2:D4');

range.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `strategy` | `WrapStrategy` | The desired wrapping strategy. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setWraps(isWrapEnabled)

Sets a rectangular grid of word wrap policies (must match dimensions of this range). Cells with wrap enabled (the default) resize to display their full content. Cells with wrap disabled display as much as possible in the cell without resizing or running to multiple lines.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
const wraps = [[true, true, false]];

const range = sheet.getRange('B2:D2');
range.setWraps(wraps);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isWrapEnabled` | `Object[][]` | A two-dimensional array of wrap variables that determine whether to wrap text in a cell or not. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

#### See also

- `setWrap(isWrapEnabled)`

---

### shiftColumnGroupDepth(delta)

Changes the column grouping depth of the range by the specified amount.

This has the effect of creating, modifying, or deleting groups that intersect with the range. For positive deltas, groups are created and/or modified; for negative deltas, groups are destroyed and/or modified.

This has no effect when decreasing the group depth below zero or above eight.

If the `column group control position` is `BEFORE`, this throws an error when attempting to shift the depth of the first row.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const range = sheet.getActiveRange();

// The column grouping depth is increased by 1.
range.shiftColumnGroupDepth(1);

// The column grouping depth is decreased by 1.
range.shiftColumnGroupDepth(-1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `delta` | `Integer` | The amount by which to change the column group depth of this range. |

#### Return

`Range` — This range, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — when attempting to shift the depth of the first column when the control position is `GroupControlTogglePosition.BEFORE`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### shiftRowGroupDepth(delta)

Changes the row grouping depth of the range by the specified amount.

This has the effect of creating, modifying, or deleting groups that intersect with the range. For positive deltas, groups are created and/or modified; for negative deltas, groups are destroyed and/or modified.

This has no effect when decreasing the group depth below zero or above eight.

If the `row group control position` is `BEFORE`, this throws an error when attempting to shift the depth of the first row.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const range = sheet.getActiveRange();

// The row grouping depth is increased by 1.
range.shiftRowGroupDepth(1);

// The row grouping depth is decreased by 1.
range.shiftRowGroupDepth(-1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `delta` | `Integer` | The amount by which to change the row group depth of this range. |

#### Return

`Range` — This range, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — when attempting to shift the depth of the first row when the control position is `GroupControlTogglePosition.BEFORE`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### sort(sortSpecObj)

Sorts the cells in the given range, by column and order specified.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('A1:C7');

// Sorts by the values in the first column (A)
range.sort(1);

// Sorts by the values in the second column (B)
range.sort(2);

// Sorts descending by column B
range.sort({column: 2, ascending: false});

// Sorts descending by column B, then ascending by column A
// Note the use of an array
range.sort([
  {column: 2, ascending: false},
  {column: 1, ascending: true},
]);

// For rows that are sorted in ascending order, the "ascending" parameter is
// optional, and just an integer with the column can be used instead. Note that
// in general, keeping the sort specification consistent results in more
// readable code. You can express the earlier sort as:
range.sort([{column: 2, ascending: false}, 1]);

// Alternatively, if you want all columns to be in ascending order, you can use
// the following (this makes column 2 ascending)
range.sort([2, 1]);
// ... which is equivalent to
range.sort([
  {column: 2, ascending: true},
  {column: 1, ascending: true},
]);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sortSpecObj` | `Object` | The columns to sort by. |

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### splitTextToColumns()

Splits a column of text into multiple columns based on an auto-detected delimiter.

```
// A1:A3 has the following values:
//           A                  B                 C
// 1 |one,one,one      |                 |                 |
// 2 |two,two,two      |                 |                 |
// 3 |three,three,three|                 |                 |

const range = SpreadsheetApp.getActiveSheet().getRange('A1:A3');
range.splitTextToColumns();

// Result after splitting the text to columns:
//           A                  B                 C
// 1 |one              |one              |one              |
// 2 |two              |two              |two              |
// 3 |three            |three            |three            |
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### splitTextToColumns(delimiter)

Splits a column of text into multiple columns using the specified string as a custom delimiter.

```
// A1:A3 has the following values:
//           A                  B                 C
// 1 |one#one#one      |                 |                 |
// 2 |two#two#two      |                 |                 |
// 3 |three#three#three|                 |                 |

const range = SpreadsheetApp.getActiveSheet().getRange('A1:A3');
range.splitTextToColumns('#');

// Result after splitting the text to columns:
//           A                  B                 C
// 1 |one              |one              |one              |
// 2 |two              |two              |two              |
// 3 |three            |three            |three            |
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `delimiter` | `String` | The custom delimiter to split on. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### splitTextToColumns(delimiter)

Splits a column of text into multiple columns based on the specified delimiter.

```
// A1:A3 has the following values:
//           A                  B                 C
// 1 |one;one;one      |                 |                 |
// 2 |two;two;two      |                 |                 |
// 3 |three;three;three|                 |                 |

const range = SpreadsheetApp.getActiveSheet().getRange('A1:A3');
range.splitTextToColumns(SpreadsheetApp.TextToColumnsDelimiter.SEMICOLON);

// Result after splitting the text to columns:
//           A                  B                 C
// 1 |one              |one              |one              |
// 2 |two              |two              |two              |
// 3 |three            |three            |three            |
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `delimiter` | `TextToColumnsDelimiter` | The preset delimiter to split on. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### trimWhitespace()

Trims the whitespace (such as spaces, tabs, or new lines) in every cell in this range. Removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space.

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

range.trimWhitespace();

const values = range.getValues();
// Values are ['preceding space', 'following space', 'two middle spaces',
// '=SUM(1,2)']
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### uncheck()

Changes the state of the checkboxes in the range to “unchecked”. Ignores the cells in the range which currently do not contain either the checked or unchecked value configured.

```
// Changes the state of cells which currently contain either the checked or
// unchecked value configured in the range A1:B10 to 'unchecked'.
const range = SpreadsheetApp.getActive().getRange('A1:B10');
range.uncheck();
```

#### Return

`Range` — This range, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

## Deprecated methods

### getFontColor()

**Deprecated.** Replaced by `getFontColorObject()`

Returns the font color of the cell in the top-left corner of the range, in CSS notation (such as `'#ffffff'` or `'white'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

Logger.log(range.getFontColor());
```

#### Return

`String` — The font color in CSS notation (such as `'#ffffff'` or `'white'`).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFontColors()

**Deprecated.** Replaced by `getFontColorObjects()`

Returns the font colors of the cells in the range in CSS notation (such as `'#ffffff'` or `'white'`).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange('B2:D4');

const results = range.getFontColors();

for (const i in results) {
  for (const j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```

#### Return

`String[][]` — A two-dimensional array of font colors associated with cells in the range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
