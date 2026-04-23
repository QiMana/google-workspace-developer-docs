---
source: https://developers.google.com/apps-script/reference/spreadsheet/sheet
root: apps-script
fetched_at: 2026-04-23T15:22:02.294Z
---

# Class Sheet

## Page Summary

- The `Sheet` object in Google Apps Script provides extensive methods for accessing and modifying individual sheets within a spreadsheet.
- You can perform common operations like activating, hiding/showing, and clearing sheet content and formatting.
- The object allows for detailed manipulation of sheet structure, including inserting, deleting, and moving columns and rows.
- It offers methods to get and set metadata, manage ranges and selections, control formatting and display options, work with groups, and interact with embedded objects like charts and images.
- Many methods require specific authorization scopes to execute successfully.

Access and modify spreadsheet sheets. Common operations are renaming a sheet and accessing range objects from the sheet.

## Detailed documentation

### activate()

Activates this sheet. Does not alter the sheet itself, only the parent's notion of the active sheet.

```
// This example assumes there is a sheet named "first"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('first');
first.activate();
```

#### Return

`Sheet` — The newly active sheet.

---

### addDeveloperMetadata(key)

Adds developer metadata with the specified key to the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds the key 'NAME' to the developer metadata for the sheet.
sheet.addDeveloperMetadata('NAME');

// Gets the updated metadata info and logs it to the console.
console.log(sheet.getDeveloperMetadata()[0].getKey());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The key for the new developer metadata. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addDeveloperMetadata(key, visibility)

Adds developer metadata with the specified key and visibility to the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds the key 'NAME' and sets the developer metadata visibility to PROJECT
// for the sheet.
sheet.addDeveloperMetadata(
    'NAME',
    SpreadsheetApp.DeveloperMetadataVisibility.PROJECT,
);

// Gets the updated metadata info and logs it to the console.
const developerMetaData = sheet.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getVisibility().toString());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The key for the new developer metadata. |
| `visibility` | `DeveloperMetadataVisibility` | The visibility of the new developer metadata. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addDeveloperMetadata(key, value)

Adds developer metadata with the specified key and value to the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds the key 'COMPANY' with the value 'TECH' to the developer metadata for
// the sheet.
sheet.addDeveloperMetadata('COMPANY', 'TECH');

// Gets the updated metadata info and logs it to the console.
const developerMetaData = sheet.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getValue());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The key for the new developer metadata. |
| `value` | `String` | The value for the new developer metadata. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### addDeveloperMetadata(key, value, visibility)

Adds developer metadata with the specified key, value, and visibility to the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds the key 'COMPANY' with the value 'TECH' to the developer metadata and
// sets the visibility to DOCUMENT for the sheet.
sheet.addDeveloperMetadata(
    'COMPANY',
    'TECH',
    SpreadsheetApp.DeveloperMetadataVisibility.DOCUMENT,
);

// Gets the updated metadata info and logs it to the console.
const developerMetaData = sheet.getDeveloperMetadata()[0];
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

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### appendRow(rowContents)

Appends a row to the bottom of the current data region in the sheet. If a cell's content begins with `=`, it's interpreted as a formula.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Appends a new row with 3 columns to the bottom of the current
// data region in the sheet containing the values in the array.
sheet.appendRow(['a man', 'a plan', 'panama']);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowContents` | `Object[]` | An array of values to insert after the last row in the sheet. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### asDataSourceSheet()

Returns the sheet as a `DataSourceSheet` if the sheet is of type `SheetType.DATASOURCE`, or `null` otherwise.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can useSpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the data source sheet value if the sheet is of type
// SpreadsheetApp.SheetType.DATASOURCE, otherwise this returns a null value.
const dataSourceSheet = sheet.asDataSourceSheet();

// Gets the data source sheet value and logs it to the console.
console.log(dataSourceSheet);
console.log(sheet.getType().toString());
```

#### Return

`DataSourceSheet|null` — A data source sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### autoResizeColumn(columnPosition)

Sets the width of the given column to fit its contents.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

sheet.getRange('a1').setValue(
    'Whenever it is a damp, drizzly November in my soul...');

// Sets the first column to a width which fits the text
sheet.autoResizeColumn(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The position of the given column to resize. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### autoResizeColumns(startColumn, numColumns)

Sets the width of all columns starting at the given column position to fit their contents.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Sets the first 15 columns to a width that fits their text.
sheet.autoResizeColumns(1, 15);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startColumn` | `Integer` | The starting column to auto-resize. |
| `numColumns` | `Integer` | The number of columns to auto-resize. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### autoResizeRows(startRow, numRows)

Sets the height of all rows starting at the given row position to fit their contents.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Sets the first 15 rows to a height that fits their text.
sheet.autoResizeRows(1, 15);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startRow` | `Integer` | The starting row to auto-resize. |
| `numRows` | `Integer` | The number of rows to auto-resize. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clear()

Clears the sheet of content and formatting information.

```
// This example assumes there is a sheet named "first"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('first');
first.clear();
```

#### Return

`Sheet` — The cleared sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clear(options)

Clears the sheet of contents and/or format, as specified with the given advanced options.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
sheet.clear({formatOnly: true, contentsOnly: true});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Object` | A JavaScript map containing advanced options, listed below. |

#### Advanced parameters

| Name | Type | Description |
| --- | --- | --- |
| `contentsOnly` | `Boolean` | Whether to clear the content. |
| `formatOnly` | `Boolean` | Whether to clear the format. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearConditionalFormatRules()

Removes all conditional format rules from the sheet. Equivalent to calling `setConditionalFormatRules(rules)` with an empty array as input.

```
const sheet = SpreadsheetApp.getActiveSheet();
sheet.clearConditionalFormatRules();
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearContents()

Clears the sheet of contents, while preserving formatting information.

```
// This example assumes there is a sheet named "first"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('first');
first.clearContents();
```

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearFormats()

Clears the sheet of formatting, while preserving contents.

Formatting refers to how data is formatted as allowed by choices under the "Format" menu (ex: bold, italics, conditional formatting) and not width or height of cells.

```
// This example assumes there is a sheet named "first"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('first');
first.clearFormats();
```

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### clearNotes()

Clears the sheet of all notes.

```
// This example assumes there is a sheet named "first"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('first');
first.clearNotes();
```

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### collapseAllColumnGroups()

Collapses all column groups on the sheet.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All column groups on the sheet are collapsed.
sheet.collapseAllColumnGroups();
```

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### collapseAllRowGroups()

Collapses all row groups on the sheet.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All row groups on the sheet are collapsed.
sheet.collapseAllRowGroups();
```

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### copyTo(spreadsheet)

Copies the sheet to a given spreadsheet, which can be the same spreadsheet as the source. The copied sheet is named "Copy of \[original name\]".

```
const source = SpreadsheetApp.getActiveSpreadsheet();
const sheet = source.getSheets()[0];

const destination = SpreadsheetApp.openById('ID_GOES HERE');
sheet.copyTo(destination);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `spreadsheet` | `Spreadsheet` | The spreadsheet to copy this sheet to, which can be the same spreadsheet as the source. |

#### Return

`Sheet` — The new sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### createDeveloperMetadataFinder()

Returns a `DeveloperMetadataFinder` for finding developer metadata within the scope of this sheet. Metadata is in the scope of a particular sheet if it is either associated with the sheet itself, or associated with a row, column, or range on that sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds developer metadata for testing.
sheet.addDeveloperMetadata('CITY', 'PARIS');

// Creates the developer metadata finder.
const metadatafinder = sheet.createDeveloperMetadataFinder();

// Finds the metadata with value 'PARIS' and displays its key in the console.
console.log(metadatafinder.withValue('PARIS').find()[0].getKey());
```

#### Return

`DeveloperMetadataFinder` — A developer metadata finder to search for metadata in the scope of this sheet.

---

### createTextFinder(findText)

Creates a text finder for the sheet, which can find and replace text within the sheet.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// Creates  a text finder.
const textFinder = sheet.createTextFinder('dog');

// Returns the first occurrence of 'dog' in the sheet.
const firstOccurrence = textFinder.findNext();

// Replaces the last found occurrence of 'dog' with 'cat' and returns the number
// of occurrences replaced.
const numOccurrencesReplaced = firstOccurrence.replaceWith('cat');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `findText` | `String` | The text to search for. |

#### Return

`TextFinder` — The `TextFinder` for the sheet.

---

### deleteColumn(columnPosition)

Deletes the column at the given column position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Columns start at "1" - this deletes the first column
sheet.deleteColumn(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The position of the column, starting at 1 for the first column. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### deleteColumns(columnPosition, howMany)

Deletes a number of columns starting at the given column position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Columns start at "1" - this deletes the first two columns
sheet.deleteColumns(1, 2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The position of the first column to delete. |
| `howMany` | `Integer` | The number of columns to delete. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### deleteRow(rowPosition)

Deletes the row at the given row position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Rows start at "1" - this deletes the first row
sheet.deleteRow(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowPosition` | `Integer` | The position of the row, starting at 1 for the first row. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### deleteRows(rowPosition, howMany)

Deletes a number of rows starting at the given row position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Rows start at "1" - this deletes the first two rows
sheet.deleteRows(1, 2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowPosition` | `Integer` | The position of the first row to delete. |
| `howMany` | `Integer` | The number of rows to delete. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### expandAllColumnGroups()

Expands all column groups on the sheet. This method requires at least one column group.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All column groups on the sheet are expanded.
sheet.expandAllColumnGroups();
```

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### expandAllRowGroups()

Expands all row groups on the sheet. This method requires at least one row group.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All row groups on the sheet are expanded.
sheet.expandAllRowGroups();
```

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### expandColumnGroupsUpToDepth(groupDepth)

Expands all column groups up to the given depth, and collapses all others.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All column groups of depth 2 and lower are expanded, and groups with depth
// 3 and higher are collapsed.
sheet.expandColumnGroupsUpToDepth(2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `groupDepth` | `Integer` | The group depth up to which to expand the column groups. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### expandRowGroupsUpToDepth(groupDepth)

Expands all row groups up to the given depth, and collapses all others.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All row groups of depth 2 and lower are expanded, and groups with depth
// 3 and higher are collapsed.
sheet.expandRowGroupsUpToDepth(2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `groupDepth` | `Integer` | The group depth up to which to expand the row groups. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getActiveCell()

Returns the active cell in this sheet.

**Note:** It's preferable to use `getCurrentCell()`, which returns the current highlighted cell.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Returns the active cell
const cell = sheet.getActiveCell();
```

#### Return

`Range` — The current active cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getActiveRange()

Returns the selected range in the active sheet, or `null` if there is no active range. If multiple ranges are selected this method returns only the last selected range.

The term "active range" refers to the range that a user has selected in the active sheet, but in a custom function it refers to the cell being actively recalculated.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
const activeRange = sheet.getActiveRange();
```

#### Return

`Range` — The active range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

#### See also

- `setActiveRange(range)`

---

### getActiveRangeList()

Returns the list of active ranges in the active sheet or `null` if there are no active ranges.

If there is a single range selected, this behaves as a `getActiveRange()` call.

```
const sheet = SpreadsheetApp.getActiveSheet();
// Returns the list of active ranges.
const activeRangeList = sheet.getActiveRangeList();
```

#### Return

`RangeList|null` — The list of active ranges.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

#### See also

- `setActiveRangeList(rangeList)`

---

### getBandings()

Returns all the bandings in this sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the banding info for the sheet.
const bandings = sheet.getBandings();

// Gets info on the bandings' second row color and logs it to the console.
for (const banding of bandings) {
  console.log(banding.getSecondRowColor());
}
```

#### Return

`Banding[]` — All the bandings in this sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getCharts()

Returns an array of charts on this sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const charts = sheet.getCharts();

for (const i in charts) {
  const chart = charts[i];
  // Do something with the chart
}
```

#### Return

`EmbeddedChart[]` — An array of charts.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getColumnGroup(columnIndex, groupDepth)

Returns the column group at the given index and group depth.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// Returns the group whose control index is at column 2 and has a depth of 1, or
// null if the group doesn’t exist.
const columnGroup = sheet.getColumnGroup(2, 1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The column index of the group control toggle or an index within the group. |
| `groupDepth` | `Integer` | The depth of the group. |

#### Return

`Group|null` — The column group at the control index and depth, or throws an exception if the group doesn’t exist.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getColumnGroupControlPosition()

Returns the `GroupControlTogglePosition` for all column groups on the sheet.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// GroupControlTogglePosition.AFTER if the column grouping control toggle is
// shown after the group.
const columnGroupControlPosition = sheet.getColumnGroupControlPosition();
```

#### Return

`GroupControlTogglePosition` — `true` if the column grouping control toggle is shown after the group on this sheet and `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getColumnGroupDepth(columnIndex)

Returns the group depth of the column at the given index.

The group depth indicates how many groups overlap with the column. This can range between zero and eight.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// 1 if there is a group over columns 1 through 3
const groupDepth = sheet.getColumnGroupDepth(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column. |

#### Return

`Integer` — The group depth of the column at the given index.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getColumnWidth(columnPosition)

Gets the width in pixels of the given column.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Columns start at 1
Logger.log(sheet.getColumnWidth(1));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The position of the column to examine. |

#### Return

`Integer` — Column width in pixels.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getConditionalFormatRules()

Get all conditional format rules in this sheet.

```
// Logs the conditional format rules in a sheet.
const rules = SpreadsheetApp.getActiveSheet().getConditionalFormatRules();
for (let i = 0; i < rules.length; i++) {
  const rule = rules[i];
  Logger.log(rule);
}
```

#### Return

`ConditionalFormatRule[]` — An array of all rules in the sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getCurrentCell()

Returns the current cell in the active sheet or `null` if there is no current cell. The current cell is the cell that has focus in the Google Sheets UI, and is highlighted by a dark border. There is never more than one current cell. When a user selects one or more cell ranges, one of the cells in the selection is the current cell.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
// Returns the current highlighted cell in the one of the active ranges.
const currentCell = sheet.getCurrentCell();
```

#### Return

`Range|null` — The current cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataRange()

Returns a `Range` corresponding to the dimensions in which data is present.

This is functionally equivalent to creating a Range bounded by A1 and (Sheet.getLastColumn(), Sheet.getLastRow()).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This represents ALL the data
const range = sheet.getDataRange();
const values = range.getValues();

// This logs the spreadsheet in CSV format with a trailing comma
for (let i = 0; i < values.length; i++) {
  let row = '';
  for (let j = 0; j < values[i].length; j++) {
    if (values[i][j]) {
      row = row + values[i][j];
    }
    row = \`${row},\`;
  }
  Logger.log(row);
}
```

#### Return

`Range` — A range consisting of all the data in the spreadsheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSourceFormulas()

Gets all the data source formulas.

```
// Opens the spreadsheet by its ID. If you created your script from within a
// Google Sheets file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets an array of the data source formulas on Sheet1.
// To get an array of data source formulas for the entire spreadsheet,
// replace 'sheet' with 'ss'.
const dataSourceFormulas = sheet.getDataSourceFormulas();

// Logs the first data source formula in the array.
console.log(dataSourceFormulas[0].getFormula());
```

#### Return

`DataSourceFormula[]` — A list of data source formulas.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSourcePivotTables()

Gets all the data source pivot tables.

```
// Opens the spreadsheet file by its ID. If you created your script from a
// Google Sheets file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets an array of the data source pivot tables on Sheet1.
// To get an array of data source pivot tables for the entire
// spreadsheet, replace 'sheet' with 'ss'.
const dataSourcePivotTables = sheet.getDataSourcePivotTables();

// Logs the last time that the first pivot table in the array was refreshed.
console.log(dataSourcePivotTables[0].getStatus().getLastRefreshedTime());
```

#### Return

`DataSourcePivotTable[]` — A list of data source pivot tables.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDataSourceTables()

Gets all the data source tables.

```
// Opens the spreadsheet file by its ID. If you created your script from a
// Google Sheets file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets an array of data source tables on Sheet1.
// To get an array of data source tables for the entire spreadsheet,
// replace 'sheet' with 'ss'.
const dataSourceTables = sheet.getDataSourceTables();

// Logs the last completed data execution time on the first data source table.
console.log(dataSourceTables[0].getStatus().getLastExecutionTime());
```

#### Return

`DataSourceTable[]` — A list of data source tables.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDeveloperMetadata()

Get all developer metadata associated with this sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds developer metadata for testing.
sheet.addDeveloperMetadata('CITY', 'PARIS');

// Gets all the developer metadata for the sheet.
const developerMetaDataList = sheet.getDeveloperMetadata();

// Logs the developer metadata to the console.
for (const developerMetaData of developerMetaDataList) {
  console.log(developerMetaData.getKey());
}
```

#### Return

`DeveloperMetadata[]` — The developer metadata associated with this sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDrawings()

Returns an array of drawings on the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets all the drawings from the sheet.
const allDrawings = sheet.getDrawings();

// Logs the number of drawings present on the sheet.
console.log(allDrawings.length);
```

#### Return

`Drawing[]` — The list of drawings on this sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFilter()

Returns the filter in this sheet, or `null` if there is no filter.

```
// Gets the filter on the active sheet.
const ss = SpreadsheetApp.getActiveSheet();
const filter = ss.getFilter();
```

#### Return

`Filter|null` — The filter.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFormUrl()

Returns the URL for the form that sends its responses to this sheet, or `null` if this sheet has no associated form. Throws an exception if the user does not have permission to edit the spreadsheet.

```
const sheet = SpreadsheetApp.getActiveSheet();
const url = sheet.getFormUrl();
```

#### Return

`String|null` — The URL for the form that places its responses in this sheet, or `null` if this sheet doesn't have an associated form.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFrozenColumns()

Returns the number of frozen columns.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

Logger.log('Number of frozen columns: %s', sheet.getFrozenColumns());
```

#### Return

`Integer` — The number of frozen columns.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFrozenRows()

Returns the number of frozen rows.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

Logger.log('Number of frozen rows: %s', sheet.getFrozenRows());
```

#### Return

`Integer` — The number of frozen rows.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getImages()

Returns all over-the-grid images on the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets spreadsheet, you can use
// SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the over-the-grid images from Sheet1.
// To get the over-the-grid images from the entire spreadsheet, use
// ss.getImages() instead.
const images = sheet.getImages();

// For each image, logs the anchor cell in A1 notation.
for (const image of images) {
  console.log(image.getAnchorCell().getA1Notation());
}
```

#### Return

`OverGridImage[]` — An array of over-the-grid images.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getIndex()

Gets the position of the sheet in its parent spreadsheet. Starts at 1.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
// Note that the JavaScript index is 0, but this logs 1
const sheet = ss.getSheets()[0];
// ... because spreadsheets are 1-indexed
Logger.log(sheet.getIndex());
```

#### Return

`Integer` — The position of the sheet in its parent spreadsheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getLastColumn()

Returns the position of the last column that has content.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This logs the value in the very last cell of this sheet
const lastRow = sheet.getLastRow();
const lastColumn = sheet.getLastColumn();
const lastCell = sheet.getRange(lastRow, lastColumn);
Logger.log(lastCell.getValue());
```

#### Return

`Integer` — The last column of the sheet that contains content.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getLastRow()

Returns the position of the last row that has content.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This logs the value in the very last cell of this sheet
const lastRow = sheet.getLastRow();
const lastColumn = sheet.getLastColumn();
const lastCell = sheet.getRange(lastRow, lastColumn);
Logger.log(lastCell.getValue());
```

#### Return

`Integer` — The last row of the sheet that contains content.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getMaxColumns()

Returns the current number of columns in the sheet, regardless of content.

```
// This example assumes there is a sheet named "first"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('first');
Logger.log(first.getMaxColumns());
```

#### Return

`Integer` — The maximum width of the sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getMaxRows()

Returns the current number of rows in the sheet, regardless of content.

```
// This example assumes there is a sheet named "first"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('first');
Logger.log(first.getMaxRows());
```

#### Return

`Integer` — The maximum height of the sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getName()

Returns the name of the sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
Logger.log(sheet.getName());
```

#### Return

`String` — The name of the sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getNamedRanges()

Gets all the named ranges in this sheet.

```
// The code below logs the name of the first named range.
const namedRanges = SpreadsheetApp.getActiveSheet().getNamedRanges();
if (namedRanges.length > 1) {
  Logger.log(namedRanges[0].getName());
}
```

#### Return

`NamedRange[]` — An array of all the named ranges in the sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getParent()

Returns the `Spreadsheet` that contains this sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// parent is identical to ss
const parent = sheet.getParent();
```

#### Return

`Spreadsheet` — The parent spreadsheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getPivotTables()

Returns all the pivot tables on this sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets all the pivot table info for the sheet.
const pivotTables = sheet.getPivotTables();

// Logs the pivot tables to the console.
for (const pivotTable of pivotTables) {
  console.log(pivotTable.getSourceDataRange().getValues());
}
```

#### Return

`PivotTable[]` — The pivot tables on this sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getProtections(type)

Gets an array of objects representing all protected ranges in the sheet, or a single-element array representing the protection on the sheet itself.

```
// Remove all range protections in the spreadsheet that the user has permission
// to edit.
const sheet = SpreadsheetApp.getActiveSheet();
const protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
for (let i = 0; i < protections.length; i++) {
  const protection = protections[i];
  if (protection.canEdit()) {
    protection.remove();
  }
}
```

```
// Remove sheet protection from the active sheet, if the user has permission to
// edit it.
const sheet = SpreadsheetApp.getActiveSheet();
const protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
if (protection?.canEdit()) {
  protection.remove();
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `ProtectionType` | The type of protected area, either `SpreadsheetApp.ProtectionType.RANGE` or `SpreadsheetApp.ProtectionType.SHEET`. |

#### Return

`Protection[]` — An array of objects representing all protected ranges in the sheet, or a single-element array representing the protection on the sheet itself.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRange(row, column)

Returns the range with the top left cell at the given coordinates.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Passing only two arguments returns a "range" with a single cell.
const range = sheet.getRange(1, 1);
const values = range.getValues();
Logger.log(values[0][0]);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `row` | `Integer` | The row index of the cell to return; row indexing starts with 1. |
| `column` | `Integer` | The column index of the cell to return; column indexing starts with 1. |

#### Return

`Range` — A range containing only this cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRange(row, column, numRows)

Returns the range with the top left cell at the given coordinates, and with the given number of rows.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// When the "numRows" argument is used, only a single column of data is
// returned.
const range = sheet.getRange(1, 1, 3);
const values = range.getValues();

// Prints 3 values from the first column, starting from row 1.
for (const row in values) {
  for (const col in values[row]) {
    Logger.log(values[row][col]);
  }
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `row` | `Integer` | The starting row index of the range; row indexing starts with 1. |
| `column` | `Integer` | The column index of the range; column indexing starts with 1. |
| `numRows` | `Integer` | The number of rows to return. |

#### Return

`Range` — A range containing a single column of data with the number of rows specified.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRange(row, column, numRows, numColumns)

Returns the range with the top left cell at the given coordinates with the given number of rows and columns.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange(1, 1, 3, 3);
const values = range.getValues();

// Print values from a 3x3 box.
for (const row in values) {
  for (const col in values[row]) {
    Logger.log(values[row][col]);
  }
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `row` | `Integer` | The starting row index of the range; row indexing starts with 1. |
| `column` | `Integer` | The starting column index of the range; column indexing starts with 1. |
| `numRows` | `Integer` | The number of rows to return. |
| `numColumns` | `Integer` | The number of columns to return. |

#### Return

`Range` — A range corresponding to the area specified.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRange(a1Notation)

Returns the range as specified in A1 notation or R1C1 notation.

```
// Get a range A1:D4 on sheet titled "Invoices"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const range = ss.getRange('Invoices!A1:D4');

// Get cell A1 on the first sheet
const sheet = ss.getSheets()[0];
const cell = sheet.getRange('A1');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `a1Notation` | `String` | The range to return, as specified in A1 notation or R1C1 notation. |

#### Return

`Range` — The range at the location designated.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRangeList(a1Notations)

Returns the `RangeList` collection representing the ranges in the same sheet specified by a non-empty list of A1 notations or R1C1 notations.

```
// Get a list of ranges A1:D4, F1:H4.
const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
const rangeList = sheet.getRangeList(['A1:D4', 'F1:H4']);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `a1Notations` | `String[]` | The list of ranges to return, as specified in A1 notation or R1C1 notation. |

#### Return

`RangeList` — The range list at the location designated.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRowGroup(rowIndex, groupDepth)

Returns the row group at the given index and group depth.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// Returns the group whose control index is at row 2 and has a depth of 1, or
// null if the group doesn’t exist.
const rowGroup = sheet.getRowGroup(2, 1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowIndex` | `Integer` | The row index of the group control toggle or an index within the group. |
| `groupDepth` | `Integer` | The depth of the group. |

#### Return

`Group|null` — The row group at the control index and depth, or throws an exception if the group doesn’t exist.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRowGroupControlPosition()

Returns the `GroupControlTogglePosition` for all row groups on the sheet.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// GroupControlTogglePosition.AFTER if the row grouping control toggle is shown
// after the group.
const rowGroupControlPosition = sheet.getRowGroupControlPosition();
```

#### Return

`GroupControlTogglePosition` — `true` if the row grouping control toggle is shown after the group on this sheet and `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRowGroupDepth(rowIndex)

Returns the group depth of the row at the given index.

The group depth indicates how many groups overlap with the row. This can range between zero and eight.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// 1 if there is a group over rows 1 through 3
const groupDepth = sheet.getRowGroupDepth(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowIndex` | `Integer` | The index of the row. |

#### Return

`Integer` — The group depth of the row at the given index.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getRowHeight(rowPosition)

Gets the height in pixels of the given row.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Rows start at 1
Logger.log(sheet.getRowHeight(1));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowPosition` | `Integer` | The position of the row to examine. |

#### Return

`Integer` — Row height in pixels.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSelection()

Returns the current `Selection` in the spreadsheet.

```
const selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
const currentCell = selection.getCurrentCell();
```

#### Return

`Selection` — The current selection.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSheetId()

Returns the ID of the sheet represented by this object.

This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically increasing integer assigned at sheet creation time that is independent of sheet position. This is useful in conjunction with methods such as `Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)` that take a `gridId` parameter rather than a `Sheet` instance.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

Logger.log(sheet.getSheetId());
```

#### Return

`Integer` — An ID for the sheet unique to the spreadsheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSheetName()

Returns the sheet name.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

Logger.log(sheet.getSheetName());
```

#### Return

`String` — The name of the sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSheetValues(startRow, startColumn, numRows, numColumns)

Returns the rectangular grid of values for this range starting at the given coordinates. A -1 value given as the row or column position is equivalent to getting the very last row or column that has data in the sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// The two samples below produce the same output
let values = sheet.getSheetValues(1, 1, 3, 3);
Logger.log(values);

const range = sheet.getRange(1, 1, 3, 3);
values = range.getValues();
Logger.log(values);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startRow` | `Integer` | The position of the starting row. |
| `startColumn` | `Integer` | The position of the starting column. |
| `numRows` | `Integer` | The number of rows to return values for. |
| `numColumns` | `Integer` | The number of columns to return values for. |

#### Return

`Object[][]` — A two-dimensional array of values.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSlicers()

Returns an array of slicers on the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets all slicers in the spreadsheet.
const slicers = sheet.getSlicers();

// Logs the slicer titles to the console.
for (const slicer of slicers) {
  console.log(slicer.getTitle());
}
```

#### Return

`Slicer[]` — The list of slicers on this sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getTabColorObject()

Gets the sheet tab color, or `null` if the sheet tab has no color.

```
// This example assumes there is a sheet named "Sheet1"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('Sheet1');
const color = first.getTabColorObject();
```

#### Return

`Color|null` — The sheet tab color, or `null` if the sheet tab has no color.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getType()

Returns the type of the sheet.

The default type of sheet is `SheetType.GRID`. A sheet that contains a single embedded object such as an `EmbeddedChart` is an `SheetType.OBJECT` sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
Logger.log(sheet.getType());
```

#### Return

`SheetType` — The type of the sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### hasHiddenGridlines()

Returns `true` if the sheet's gridlines are hidden; otherwise returns `false`. Gridlines are visible by default.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Checks if the spreadsheet has hidden gridelines and logs the result to the
// console.
console.log(sheet.hasHiddenGridlines());
```

#### Return

`Boolean` — `true` if gridlines are hidden; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### hideColumn(column)

Hides the column or columns in the given range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This hides the first column
let range = sheet.getRange('A1');
sheet.hideColumn(range);

// This hides the first 3 columns
range = sheet.getRange('A:C');
sheet.hideColumn(range);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Range` | The column range to hide. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### hideColumns(columnIndex)

Hides a single column at the given index. Use 1-index for this method.

To hide more than one column using an index, use `hideColumns(columnIndex, numColumns)`.

To hide more than one column using a range, use `hideColumn()`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Hides the first column
sheet.hideColumns(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to hide. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### hideColumns(columnIndex, numColumns)

Hides one or more consecutive columns starting at the given index. Use 1-index for this method.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Hides the first three columns
sheet.hideColumns(1, 3);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The starting index of the columns to hide. |
| `numColumns` | `Integer` | The number of columns to hide. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### hideRow(row)

Hides the rows in the given range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This hides the first row
const range = sheet.getRange('A1');
sheet.hideRow(range);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `row` | `Range` | The row range to hide. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### hideRows(rowIndex)

Hides the row at the given index.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Hides the first row
sheet.hideRows(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowIndex` | `Integer` | The index of the row to hide. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### hideRows(rowIndex, numRows)

Hides one or more consecutive rows starting at the given index.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Hides the first three rows
sheet.hideRows(1, 3);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowIndex` | `Integer` | The starting index of the rows to hide. |
| `numRows` | `Integer` | The number of rows to hide. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### hideSheet()

Hides this sheet. Has no effect if the sheet is already hidden. If this method is called on the only visible sheet, it throws an exception.

```
const sheet = SpreadsheetApp.getActiveSheet();
sheet.hideSheet();
```

#### Return

`Sheet` — The current sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertChart(chart)

Adds a new chart to this sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This creates a simple bar chart from the first three rows
// of the first two columns of the spreadsheet
const chart = sheet.newChart()
                  .setChartType(Charts.ChartType.BAR)
                  .addRange(sheet.getRange('A1:B4'))
                  .setPosition(5, 5, 0, 0)
                  .setOption('title', 'Dynamic Chart')
                  .build();
sheet.insertChart(chart);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `chart` | `EmbeddedChart` | The chart to insert. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertColumnAfter(afterPosition)

Inserts a column after the given column position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This inserts a column after the first column position
sheet.insertColumnAfter(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `afterPosition` | `Integer` | The column after which the new column should be added. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertColumnBefore(beforePosition)

Inserts a column before the given column position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This inserts a column in the first column position
sheet.insertColumnBefore(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `beforePosition` | `Integer` | The column before which the new column should be added. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertColumns(columnIndex)

Inserts a blank column in a sheet at the specified location.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Shifts all columns by one
sheet.insertColumns(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index indicating where to insert a column. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertColumns(columnIndex, numColumns)

Inserts one or more consecutive blank columns in a sheet starting at the specified location.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Shifts all columns by three
sheet.insertColumns(1, 3);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index indicating where to insert a column. |
| `numColumns` | `Integer` | The number of columns to insert. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertColumnsAfter(afterPosition, howMany)

Inserts a given number of columns after the given column position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Inserts two columns after the first column on the first sheet of the
// spreadsheet.
sheet.insertColumnsAfter(1, 2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `afterPosition` | `Integer` | The column after which the new column should be added. |
| `howMany` | `Integer` | The number of columns to insert. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertColumnsBefore(beforePosition, howMany)

Inserts a number of columns before the given column position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This inserts five columns before the first column
sheet.insertColumnsBefore(1, 5);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `beforePosition` | `Integer` | The column before which the new column should be added. |
| `howMany` | `Integer` | The number of columns to insert. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertImage(blobSource, column, row)

Inserts a `BlobSource` as an image in the document at a given row and column. The image size is retrieved from the blob contents. The maximum supported blob size is 2MB.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const binaryData = [];  // TODO(developer): Replace with your binary data.
const blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');
sheet.insertImage(blob, 1, 1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blobSource` | `BlobSource` | The blob containing the image contents, MIME type, and (optionally) name. |
| `column` | `Integer` | The column position. |
| `row` | `Integer` | The row position. |

#### Return

`OverGridImage` — The inserted image.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertImage(blobSource, column, row, offsetX, offsetY)

Inserts a `BlobSource` as an image in the document at a given row and column, with a pixel offset. The image size is retrieved from the blob contents. The maximum supported blob size is 2MB.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const binaryData = [];  // TODO(developer): Replace with your binary data.
const blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');
sheet.insertImage(blob, 1, 1, 10, 10);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blobSource` | `BlobSource` | The blob containing the image contents, MIME type, and (optionally) name. |
| `column` | `Integer` | The column position. |
| `row` | `Integer` | The row position. |
| `offsetX` | `Integer` | The horizontal offset from cell corner in pixels. |
| `offsetY` | `Integer` | The vertical offset from cell corner in pixels. |

#### Return

`OverGridImage` — The inserted image.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertImage(url, column, row)

Inserts an image in the document at a given row and column.

The provided URL must be publicly accessible.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

sheet.insertImage('https://www.google.com/images/srpr/logo3w.png', 1, 1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL of the image. |
| `column` | `Integer` | The grid column position. |
| `row` | `Integer` | The grid row position. |

#### Return

`OverGridImage` — The inserted image.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertImage(url, column, row, offsetX, offsetY)

Inserts an image in the document at a given row and column, with a pixel offset.

The provided URL must be publicly accessible.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

sheet.insertImage(
    'https://www.google.com/images/srpr/logo3w.png',
    1,
    1,
    10,
    10,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL for the image. |
| `column` | `Integer` | The column position. |
| `row` | `Integer` | The row position. |
| `offsetX` | `Integer` | The horizontal offset from cell corner in pixels. |
| `offsetY` | `Integer` | The vertical offset from cell corner in pixels. |

#### Return

`OverGridImage` — The Inserted image.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertRowAfter(afterPosition)

Inserts a row after the given row position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This inserts a row after the first row position
sheet.insertRowAfter(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `afterPosition` | `Integer` | The row after which the new row should be added. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertRowBefore(beforePosition)

Inserts a row before the given row position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This inserts a row before the first row position
sheet.insertRowBefore(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `beforePosition` | `Integer` | The row before which the new row should be added. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertRows(rowIndex)

Inserts a blank row in a sheet at the specified location.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Shifts all rows down by one
sheet.insertRows(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowIndex` | `Integer` | The index indicating where to insert a row. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertRows(rowIndex, numRows)

Inserts one or more consecutive blank rows in a sheet starting at the specified location.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Shifts all rows down by three
sheet.insertRows(1, 3);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowIndex` | `Integer` | The index indicating where to insert a row. |
| `numRows` | `Integer` | The number of rows to insert. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertRowsAfter(afterPosition, howMany)

Inserts a number of rows after the given row position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This inserts five rows after the first row
sheet.insertRowsAfter(1, 5);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `afterPosition` | `Integer` | The row after which the new rows should be added. |
| `howMany` | `Integer` | The number of rows to insert. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertRowsBefore(beforePosition, howMany)

Inserts a number of rows before the given row position.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This inserts five rows before the first row
sheet.insertRowsBefore(1, 5);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `beforePosition` | `Integer` | The row before which the new rows should be added. |
| `howMany` | `Integer` | The number of rows to insert. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertSlicer(range, anchorRowPos, anchorColPos)

Adds a new slicer to this sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range of the sheet.
const range = sheet.getRange('A1:D10');

// Inserts the slicer with a random range into the sheet.
const insertSlicers = sheet.insertSlicer(range.randomize(), 1, 10);

// Logs the insert slicer result to the console.
console.log(insertSlicers);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | The range over which slicer slicer is created. |
| `anchorRowPos` | `Integer` | The slicer's top side is anchored in this row. |
| `anchorColPos` | `Integer` | The slicer's top side is anchored in this col. |

#### Return

`Slicer` — The newly inserted slicer.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY)

Adds a new slicer to this sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range.
const range = sheet.getRange('A1:D10');

// Inserts a slicer using the random range function.
const insertSlicers = sheet.insertSlicer(range.randomize(), 1, 10, 0, 0);

// Logs the insert slicer result to the console.
console.log(insertSlicers);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | The range over which slicer slicer is created. |
| `anchorRowPos` | `Integer` | The slicer's top side is anchored in this row. |
| `anchorColPos` | `Integer` | The slicer's top side is anchored in this col. |
| `offsetX` | `Integer` | The horizontal offset from cell corner in pixels. |
| `offsetY` | `Integer` | The vertical offset from cell corner in pixels. |

#### Return

`Slicer` — The newly inserted slicer.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isColumnHiddenByUser(columnPosition)

Returns whether the given column is hidden by the user.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Columns start at 1
Logger.log(sheet.isColumnHiddenByUser(1));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The position of the column to examine. |

#### Return

`Boolean` — `true` if the column is hidden, `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isRightToLeft()

Returns `true` if this sheet layout is right-to-left. Returns `false` if the sheet uses the default left-to-right layout.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Checks if a spreadsheet is ordered from right to left and logs the result to
// the console.
console.log(sheet.isRightToLeft());
```

#### Return

`Boolean` — `true` if right-to-left; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isRowHiddenByFilter(rowPosition)

Returns whether the given row is hidden by a filter (not a filter view).

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Rows start at 1
Logger.log(sheet.isRowHiddenByFilter(1));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowPosition` | `Integer` | The position of the row to examine. |

#### Return

`Boolean` — `true` if the row is hidden, `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isRowHiddenByUser(rowPosition)

Returns whether the given row is hidden by the user.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Rows start at 1
Logger.log(sheet.isRowHiddenByUser(1));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowPosition` | `Integer` | The position of the row to examine. |

#### Return

`Boolean` — `true` if the row is hidden, `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isSheetHidden()

Returns `true` if the sheet is currently hidden.

```
const sheet = SpreadsheetApp.getActiveSheet();
if (sheet.isSheetHidden()) {
  // do something...
}
```

#### Return

`Boolean` — `true` if the sheet is hidden, `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### moveColumns(columnSpec, destinationIndex)

Moves the columns selected by the given range to the position indicated by the `destinationIndex`. The `columnSpec` itself does not have to exactly represent an entire column or group of columns to move—it selects all columns that the range spans.

```
// The code below moves rows A-B to destination index 5.
// This results in those columns becoming columns C-D.
const sheet = SpreadsheetApp.getActiveSheet();
// Selects column A and column B to be moved.
const columnSpec = sheet.getRange('A1:B1');
sheet.moveColumns(columnSpec, 5);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnSpec` | `Range` | A range spanning the columns that should be moved. |
| `destinationIndex` | `Integer` | The index that the columns should be moved to. Note that this index is based on the coordinates before the columns are moved. Existing data is shifted right to make room for the moved columns while the source columns are removed from the grid. Therefore, the data may end up at a different index than originally specified. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### moveRows(rowSpec, destinationIndex)

Moves the rows selected by the given range to the position indicated by the `destinationIndex`. The `rowSpec` itself does not have to exactly represent an entire row or group of rows to move—it selects all rows that the range spans.

```
// The code below moves rows 1-2 to destination index 5.
// This results in those rows becoming rows 3-4.
const sheet = SpreadsheetApp.getActiveSheet();
// Selects row 1 and row 2 to be moved.
const rowSpec = sheet.getRange('A1:A2');
sheet.moveRows(rowSpec, 5);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowSpec` | `Range` | A range spanning the rows that should be moved. |
| `destinationIndex` | `Integer` | The index that the rows should be moved to. Note that this index is based on the coordinates before the rows are moved. Existing data is shifted down to make room for the moved rows while the source rows are removed from the grid. Therefore, the data may end up at a different index than originally specified. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### newChart()

Returns a builder to create a new chart for this sheet.

This example shows how to create a new chart:

```
const sheet = SpreadsheetApp.getActiveSheet();
const range = sheet.getRange('A1:B8');
const chartBuilder = sheet.newChart();
chartBuilder.addRange(range)
    .setChartType(Charts.ChartType.LINE)
    .setPosition(2, 2, 0, 0)
    .setOption('title', 'My Line Chart!');
sheet.insertChart(chartBuilder.build());
```

#### Return

`EmbeddedChartBuilder` — A builder to create a new chart.

---

### protect()

Creates an object that can protect the sheet from being edited except by users who have permission. Until the script actually changes the list of editors for the sheet (by calling `Protection.removeEditor(emailAddress)`, `Protection.removeEditor(user)`, `Protection.removeEditors(emailAddresses)`, `Protection.addEditor(emailAddress)`, `Protection.addEditor(user)`, `Protection.addEditors(emailAddresses)`, or setting a new value for `Protection.setDomainEdit(editable)`), the permissions mirror those of the spreadsheet itself, which effectively means that the sheet remains unprotected. If the sheet is already protected, this method returns an object representing its existing protection settings. A protected sheet may include unprotected regions.

```
// Protect the active sheet, then remove all other users from the list of
// editors.
const sheet = SpreadsheetApp.getActiveSheet();
const protection = sheet.protect().setDescription('Sample protected sheet');

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### removeChart(chart)

Removes a chart from the parent sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This removes all the embedded charts from the spreadsheet
const charts = sheet.getCharts();
for (const i in charts) {
  sheet.removeChart(charts[i]);
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `chart` | `EmbeddedChart` | The chart to remove. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setActiveRange(range)

Sets the specified range as the `active range` in the active sheet, with the top left cell in the range as the `current cell`.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
const range = sheet.getRange('A1:D4');
sheet.setActiveRange(range);

const selection = sheet.getSelection();
// Current cell: A1
const currentCell = selection.getCurrentCell();
// Active Range: A1:D4
const activeRange = selection.getActiveRange();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | The range to set as the active range. |

#### Return

`Range` — The newly active range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setActiveRangeList(rangeList)

Sets the specified list of ranges as the `active ranges` in the active sheet. The last range in the list is set as the `active range`.

```
const sheet = SpreadsheetApp.getActiveSheet();
const rangeList = sheet.getRangeList(['D4', 'B2:C4']);
sheet.setActiveRangeList(rangeList);

const selection = sheet.getSelection();
// Current cell: B2
const currentCell = selection.getCurrentCell();
// Active range: B2:C4
const activeRange = selection.getActiveRange();
// Active range list: [D4, B2:C4]
const activeRangeList = selection.getActiveRangeList();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rangeList` | `RangeList` | The list of ranges to select. |

#### Return

`RangeList` — The newly selected list of ranges.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setActiveSelection(range)

Sets the active selection region for this sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const range = sheet.getRange('A1:D4');
sheet.setActiveSelection(range);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | The range to set as the active selection. |

#### Return

`Range` — The newly active range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setActiveSelection(a1Notation)

Sets the active selection, as specified in A1 notation or R1C1 notation.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

sheet.setActiveSelection('A1:D4');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `a1Notation` | `String` | The range to set as active, as specified in A1 notation or R1C1 notation. |

#### Return

`Range` — The newly active range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setColumnGroupControlPosition(position)

Sets the position of the column group control toggle on the sheet.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
sheet.setColumnGroupControlPosition(
    SpreadsheetApp.GroupControlTogglePosition.AFTER,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | `GroupControlTogglePosition` | The position of the column group control toggle. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setColumnWidth(columnPosition, width)

Sets the width of the given column in pixels.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Sets the first column to a width of 200 pixels
sheet.setColumnWidth(1, 200);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The position of the given column to set. |
| `width` | `Integer` | The width in pixels to set it to. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setColumnWidths(startColumn, numColumns, width)

Sets the width of the given columns in pixels.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Sets the first three columns to a width of 200 pixels
sheet.setColumnWidths(1, 3, 200);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startColumn` | `Integer` | The starting column position to change. |
| `numColumns` | `Integer` | The number of columns to change. |
| `width` | `Integer` | The width in pixels to set it to. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setConditionalFormatRules(rules)

Replaces all currently existing conditional format rules in the sheet with the input rules. Rules are evaluated in their input order.

```
// Remove one of the existing conditional format rules.
const sheet = SpreadsheetApp.getActiveSheet();
const rules = sheet.getConditionalFormatRules();
rules.splice(1, 1);  // Deletes the 2nd format rule.
sheet.setConditionalFormatRules(rules);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rules` | `ConditionalFormatRule[]` | The new conditional format rules. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setCurrentCell(cell)

Sets the specified cell as the `current cell`.

If the specified cell is present in an already selected range, then that range becomes the active range with the cell as the current cell.

If the specified cell is not present in any selected range, then any existing selection is removed and the cell becomes the current cell and the active range.

**Note:**The specified `Range` must consist of one cell, otherwise it throws an exception.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
const cell = sheet.getRange('B5');
sheet.setCurrentCell(cell);

const selection = sheet.getSelection();
// Current cell: B5
const currentCell = selection.getCurrentCell();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `cell` | `Range` | The cell to set as the current cell. |

#### Return

`Range` — The newly set current cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFrozenColumns(columns)

Freezes the given number of columns. If zero, no columns are frozen.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Freezes the first column
sheet.setFrozenColumns(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columns` | `Integer` | The number of columns to freeze. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setFrozenRows(rows)

Freezes the given number of rows. If zero, no rows are frozen.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Freezes the first row
sheet.setFrozenRows(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rows` | `Integer` | The number of rows to freeze. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setHiddenGridlines(hideGridlines)

Hides or reveals the sheet gridlines.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can us eSpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Hides the gridlines in the sheet.
sheet.setHiddenGridlines(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hideGridlines` | `Boolean` | If `true`, hide gridlines in this sheet; otherwise show the gridlines. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setName(name)

Sets the sheet name.

```
// This example assumes there is a sheet named "first"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('first');
first.setName('not first anymore');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The new name for the sheet. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setRightToLeft(rightToLeft)

Sets or unsets the sheet layout to right-to-left.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Sets the sheet layout, so that the sheet is ordered from right to left.
sheet.setRightToLeft(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rightToLeft` | `Boolean` | If `true`, the sheet layout is set to right-to-left, with cell A1 at the top right corner. If `false`, the sheet layout is set to the default left-to-right, with cell A1 at the top left. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setRowGroupControlPosition(position)

Sets the position of the row group control toggle on the sheet.

```
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
sheet.setRowGroupControlPosition(
    SpreadsheetApp.GroupControlTogglePosition.AFTER,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | `GroupControlTogglePosition` | The position of the row group control toggle. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setRowHeight(rowPosition, height)

Sets the row height of the given row in pixels. By default, rows grow to fit cell contents. If you want to force rows to a specified height, use `setRowHeightsForced(startRow, numRows, height)`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Sets the first row to a height of 200 pixels
sheet.setRowHeight(1, 200);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowPosition` | `Integer` | The row position to change. |
| `height` | `Integer` | The height in pixels to set it to. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setRowHeights(startRow, numRows, height)

Sets the height of the given rows in pixels. By default, rows grow to fit cell contents. If you want to force rows to a specified height, use `setRowHeightsForced(startRow, numRows, height)`.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Sets the first three rows to a height of 20 pixels
sheet.setRowHeights(1, 3, 20);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startRow` | `Integer` | The starting row position to change. |
| `numRows` | `Integer` | The number of rows to change. |
| `height` | `Integer` | The height in pixels to set it to. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setRowHeightsForced(startRow, numRows, height)

Sets the height of the given rows in pixels. By default, rows grow to fit cell contents. When you use `setRowHeightsForced`, rows are forced to the specified height even if the cell contents are taller than the row height.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Sets the first three rows to a height of 5 pixels.
sheet.setRowHeightsForced(1, 3, 5);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `startRow` | `Integer` | The starting row position to change. |
| `numRows` | `Integer` | The number of rows to change. |
| `height` | `Integer` | The height in pixels to set it to. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setTabColor(color)

Sets the sheet tab color.

```
// This example assumes there is a sheet named "first"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('first');
first.setTabColor('ff0000');  // Set the color to red.
first.setTabColor(null);      // Unset the color.
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `String` | A color code in CSS notation (like `'#ffffff'` or `'white'`), or `null` to reset the tab color. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setTabColorObject(color)

Sets the sheet tab color.

```
// This example assumes there is a sheet named "Sheet1"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('Sheet1');
const color = SpreadsheetApp.newColor()
                  .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
                  .build();
first.setTabColorObject(color);  // Set the color to theme accent 1.
first.setTabColorObject(null);   // Unset the color.
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `color` | `Color` | The sheet tab color to set. |

#### Return

`Sheet` — This sheet, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### showColumns(columnIndex)

Unhides the column at the given index.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Unhides the first column
sheet.showColumns(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The index of the column to unhide. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### showColumns(columnIndex, numColumns)

Unhides one or more consecutive columns starting at the given index.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Unhides the first three columns
sheet.showColumns(1, 3);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnIndex` | `Integer` | The starting index of the columns to unhide. |
| `numColumns` | `Integer` | The number of columns to unhide. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### showRows(rowIndex)

Unhides the row at the given index.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Unhides the first row
sheet.showRows(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowIndex` | `Integer` | The index of the row to unhide. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### showRows(rowIndex, numRows)

Unhides one or more consecutive rows starting at the given index.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
// Unhides the first three rows
sheet.showRows(1, 3);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rowIndex` | `Integer` | The starting index of the rows to unhide. |
| `numRows` | `Integer` | The number of rows to unhide. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### showSheet()

Makes the sheet visible. Has no effect if the sheet is already visible.

```
const sheet = SpreadsheetApp.getActiveSheet();
sheet.showSheet();
```

#### Return

`Sheet` — The current sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### sort(columnPosition)

Sorts a sheet by column, ascending.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Sorts the sheet by the first column, ascending
sheet.sort(1);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The column to sort by. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### sort(columnPosition, ascending)

Sorts a sheet by column. Takes a parameter to specify ascending or descending.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// Sorts the sheet by the first column, descending
sheet.sort(1, false);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `columnPosition` | `Integer` | The column to sort by. |
| `ascending` | `Boolean` | `true` for ascending sorts, `false` for descending. |

#### Return

`Sheet` — The sheet, useful for method chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### unhideColumn(column)

Unhides the column in the given range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This unhides the first column if it was previously hidden
const range = sheet.getRange('A1');
sheet.unhideColumn(range);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `column` | `Range` | The range to unhide, if hidden. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### unhideRow(row)

Unhides the row in the given range.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This unhides the first row if it was previously hidden
const range = sheet.getRange('A1');
sheet.unhideRow(range);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `row` | `Range` | The range to unhide, if hidden. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### updateChart(chart)

Updates the chart on this sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

// This code is going to loop through all the charts and change them to
// column charts
const charts = sheet.getCharts();
for (const i in charts) {
  const chart = charts[i];
  const newChart = chart.modify().setChartType(Charts.ChartType.COLUMN).build();
  sheet.updateChart(newChart);
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `chart` | `EmbeddedChart` | The chart to update. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

## Deprecated methods

### getSheetProtection()

**Deprecated.** For spreadsheets created in the newer version of Google Sheets, use `getProtections(type)`, which returns the more powerful `Protection` class. Although this method is deprecated, it remains available for compatibility with the older version of Sheets

Returns a `~~PageProtection~~` instance describing the permissions for the current sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const permissions = sheet.getSheetProtection();

permissions.setProtected(true);
permissions.addUser('user@example.com');

// Logs the users that have access to edit this sheet. Note that this
// is different from access to the entire spreadsheet - getUsers()
// only returns users if permissions.isProtected() is set to true.
const users = permissions.getUsers();
Logger.log(users);
```

#### Return

`~~PageProtection~~` — An object describing sheet access permissions.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getTabColor()

**Deprecated.** Replaced by `getTabColorObject()`

Gets the sheet tab color, or `null` if the sheet tab has no color.

```
// This example assumes there is a sheet named "first"
const ss = SpreadsheetApp.getActiveSpreadsheet();
const first = ss.getSheetByName('first');
const color = first.getTabColor();
```

#### Return

`String|null` — Color code in CSS notation (such as `'#ffffff'`).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setSheetProtection(permissions)

**Deprecated.** For spreadsheets created in the newer version of Google Sheets, use `protect()`, which returns the more powerful `Protection` class. Although this method is deprecated, it remains available for compatibility with the older version of Sheets

Sets the permissions for the current sheet.

```
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];

const permissions = sheet.getSheetProtection();

// This copies the permissions on the first sheet to the second sheet
const sheetToClonePermissionsTo = ss.getSheets()[1];
sheetToClonePermissionsTo.setSheetProtection(permissions);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `permissions` | `~~PageProtection~~` | The access permissions object to set on this sheet. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
