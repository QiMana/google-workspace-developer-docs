---
source: https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app
root: apps-script
fetched_at: 2026-04-23T15:21:56.168Z
---

# Class SpreadsheetApp

## Page Summary

- The `SpreadsheetApp` class is used to access and create Google Sheets files and is the parent class for the Spreadsheet service.
- The `SpreadsheetApp` class contains various properties, which are enumerations representing different options or types within a spreadsheet, such as `AutoFillSeries`, `BandingTheme`, and `BorderStyle`.
- The `SpreadsheetApp` class offers methods to manage spreadsheets, including creating new spreadsheets, opening existing ones by ID or URL, and controlling data execution for data sources.
- Methods like `getActive()`, `getActiveRange()`, `getActiveSheet()`, and `getSelection()` allow scripts to interact with the currently active components of a spreadsheet.
- The `SpreadsheetApp` class also provides methods to create builders for various spreadsheet elements like `CellImage`, `Color`, `ConditionalFormatRule`, and `DataValidation`.

Access and create Google Sheets files. This class is the parent class for the [Spreadsheet service](https://developers.google.com/apps-script/reference/spreadsheet).

## Detailed documentation

### create(name)

Creates a new spreadsheet with the given name.

```
// The code below creates a new spreadsheet "Finances" and logs the URL for it
const ssNew = SpreadsheetApp.create('Finances');
Logger.log(ssNew.getUrl());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name for the spreadsheet. |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets`

---

### create(name, rows, columns)

Creates a new spreadsheet with the given name and the specified number of rows and columns.

```
// The code below creates a new spreadsheet "Finances" with 50 rows and 5
// columns and logs the URL for it
const ssNew = SpreadsheetApp.create('Finances', 50, 5);
Logger.log(ssNew.getUrl());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name for the spreadsheet. |
| `rows` | `Integer` | The number of rows for the spreadsheet. |
| `columns` | `Integer` | The number of columns for the spreadsheet. |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets`

---

### enableAllDataSourcesExecution()

Turns data execution on for all types of data sources.

Data execution throws an exception if the data source type isn't turned on. Use this method to turn data execution on for all data source types.

```
// Turns data execution on for all types of data sources.
SpreadsheetApp.enableAllDataSourcesExecution();

// Opens the spreadsheet file by its ID. If you created your script from a
// Google Sheets file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets the first data source sheet in the spreadsheet and refreshes the data.
ss.getDataSourceSheets()[0].refreshData();
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/bigquery.readonly`

---

### enableBigQueryExecution()

Turns data execution on for BigQuery data sources.

Data execution for BigQuery data source throws an exception if not turned on.

```
// Turns data execution on for BigQuery data sources.
SpreadsheetApp.enableBigQueryExecution();

// Opens the spreadsheet file by its ID. If you created your script from a
// Google Sheets file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets the first data source sheet in the spreadsheet and refreshes the
// BigQuery data.
ss.getDataSourceSheets()[0].refreshData();
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/bigquery.readonly`

---

### enableLookerExecution()

Turns data execution on for Looker data sources.

Data execution for Looker data source throws an exception if not turned on.

```
// Turns data execution on for Looker data sources.
SpreadsheetApp.enableLookerExecution();

// Opens the spreadsheet file by its ID. If you created your script from a
// Google Sheets file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets the first data source sheet in the spreadsheet and refreshes the
// associated Looker data.
ss.getDataSourceSheets()[0].refreshData();
```

---

### flush()

Applies all pending Spreadsheet changes.

Spreadsheet operations are sometimes bundled together to improve performance, such as when doing multiple calls to Range.getValue(). However, sometimes you may want to make sure that all pending changes are made right away, for instance to show users data as a script is executing.

```
// The code below changes the background color of cells A1 and B1 twenty times.
// You should be able to see the updates live in the spreadsheet. If flush() is
// not called, the updates may be applied live or may all be applied at once
// when the script completes.
function colors() {
  const sheet = SpreadsheetApp.getActiveSheet();
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      sheet.getRange('A1').setBackground('green');
      sheet.getRange('B1').setBackground('red');
    } else {
      sheet.getRange('A1').setBackground('red');
      sheet.getRange('B1').setBackground('green');
    }
    SpreadsheetApp.flush();
  }
}
```

---

### getActive()

Returns the currently active spreadsheet, or `null` if there is none.

Functions that are run in the context of a spreadsheet can get a reference to the corresponding Spreadsheet object by calling this function.

```
// The code below logs the URL for the active spreadsheet.
Logger.log(SpreadsheetApp.getActive().getUrl());
```

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getActiveRange()

Returns the selected range in the active sheet, or `null` if there is no active range. If multiple ranges are selected this method returns only the last selected range.

This generally means the range that a user has selected in the active sheet, but in a custom function it refers to the cell being actively recalculated.

```
// The code below logs the background color for the active range.
const colorObject = SpreadsheetApp.getActiveRange().getBackgroundObject();
// Assume the color has ColorType.RGB.
Logger.log(colorObject.asRgbColor().asHexString());
```

#### Return

`Range` — The active range.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getActiveRangeList()

Returns the list of active ranges in the active sheet or `null` if there are no ranges selected. The active range containing the current highlighted cell is placed last in the list.

If there is a single range selected, this behaves as a `getActiveRange()` call.

```
// Returns the list of active ranges.
const rangeList = SpreadsheetApp.getActiveRangeList();
```

#### Return

`RangeList|null` — The list of active ranges.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getActiveSheet()

Gets the active sheet in a spreadsheet.

The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet UI.

```
// The code below logs the name of the active sheet.
Logger.log(SpreadsheetApp.getActiveSheet().getName());
```

#### Return

`Sheet` — The active Sheet object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getActiveSpreadsheet()

Returns the currently active spreadsheet, or `null` if there is none.

Functions that are run in the context of a spreadsheet can get a reference to the corresponding object by calling this function.

```
// The code below logs the URL for the active spreadsheet.
Logger.log(SpreadsheetApp.getActiveSpreadsheet().getUrl());
```

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getCurrentCell()

Returns the current (highlighted) cell that is selected in one of the active ranges in the active sheet or `null` if there is no current cell.

```
// Returns the current highlighted cell in the one of the active ranges.
const currentCell = SpreadsheetApp.getCurrentCell();
```

#### Return

`Range|null` — The current cell.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getSelection()

Returns the current `Selection` in the spreadsheet.

```
const selection = SpreadsheetApp.getSelection();
const currentCell = selection.getCurrentCell();
```

#### Return

`Selection` — The current selection.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getUi()

Returns an instance of the spreadsheet's user-interface environment that allows the script to add features like menus, dialogs, and sidebars. A script can only interact with the UI for the current instance of an open spreadsheet, and only if the script is [bound](https://developers.google.com/apps-script/scripts_containers) to the spreadsheet. For more information, see the guides to [menus](https://developers.google.com/apps-script/guides/menus) and [dialogs and sidebars](https://developers.google.com/apps-script/guides/dialogs).

```
// Add a custom menu to the active spreadsheet, including a separator and a
// sub-menu.
function onOpen(e) {
  SpreadsheetApp.getUi()
      .createMenu('My Menu')
      .addItem('My menu item', 'myFunction')
      .addSeparator()
      .addSubMenu(
          SpreadsheetApp.getUi()
              .createMenu('My sub-menu')
              .addItem('One sub-menu item', 'mySecondFunction')
              .addItem('Another sub-menu item', 'myThirdFunction'),
          )
      .addToUi();
}
```

#### Return

`Ui` — An instance of this spreadsheet's user-interface environment.

---

### newCellImage()

Creates a builder for a `CellImage`.

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

// Gets cell A1 on Sheet1.
const range = sheet.getRange('A1');

// Builds an image using a source URL.
const cellImage =
    SpreadsheetApp.newCellImage()
        .setSourceUrl(
            'https://www.gstatic.com/images/branding/productlogos/apps_script/v10/web-64dp/logo_apps_script_color_1x_web_64dp.png',
            )
        .build();

// Sets the image in cell A1.
range.setValue(cellImage);
```

#### Return

`CellImageBuilder` — The new builder.

---

### newColor()

Creates a builder for a `Color`.

```
const rgbColor = SpreadsheetApp.newColor().setRgbColor('#FF0000').build();
```

#### Return

`ColorBuilder` — The new builder.

---

### newConditionalFormatRule()

Creates a builder for a conditional formatting rule.

```
// Adds a conditional format rule to a sheet that causes all cells in range
// A1:B3 to turn red if they contain a number between 1 and 10.
const sheet = SpreadsheetApp.getActive().getActiveSheet();
const range = sheet.getRange('A1:B3');
const rule = SpreadsheetApp.newConditionalFormatRule()
                 .whenNumberBetween(1, 10)
                 .setBackground('#FF0000')
                 .setRanges([range])
                 .build();
const rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```

#### Return

`ConditionalFormatRuleBuilder` — The new builder.

---

### newDataSourceSpec()

Creates a builder for a `DataSourceSpec`.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet()
// instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

// Enables BigQuery.
SpreadsheetApp.enableBigQueryExecution();

// Builds a data source specification.
// TODO (developer): Update the project ID to your own Google Cloud project ID.
const dataSourceSpec = SpreadsheetApp.newDataSourceSpec()
                           .asBigQuery()
                           .setProjectId('project-id-1')
                           .setTableProjectId('bigquery-public-data')
                           .setDatasetId('ncaa_basketball')
                           .setTableId('mbb_historical_teams_games')
                           .build();

// Adds the data source and its data to the spreadsheet.
ss.insertDataSourceSheet(dataSourceSpec);
```

#### Return

`DataSourceSpecBuilder` — The new builder.

---

### newDataValidation()

Creates a builder for a data validation rule.

```
const cell = SpreadsheetApp.getActive().getRange('A1');
const rule = SpreadsheetApp.newDataValidation()
                 .requireNumberBetween(1, 100)
                 .setAllowInvalid(false)
                 .setHelpText('Number must be between 1 and 100.')
                 .build();
cell.setDataValidation(rule);
```

#### Return

`DataValidationBuilder` — The new builder.

---

### newFilterCriteria()

Creates a builder for a `FilterCriteria`.

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

// Sets the range to A1:D20.
const range = sheet.getRange('A1:D20');

// Creates a filter and applies it to the specified range.
range.createFilter();

// Gets the current filter for the range and creates filter criteria that only
// shows cells that aren't empty.
const filter = range.getFilter();
const criteria = SpreadsheetApp.newFilterCriteria().whenCellNotEmpty().build();

// Sets the criteria to  column C.
filter.setColumnFilterCriteria(3, criteria);
```

#### Return

`FilterCriteriaBuilder` — The new builder.

---

### newRichTextValue()

Creates a builder for a Rich Text value.

```
// Sets cell A1 to have the text "Hello world", with "Hello" bolded.
const cell = SpreadsheetApp.getActive().getRange('A1');
const bold = SpreadsheetApp.newTextStyle().setBold(true).build();
const value = SpreadsheetApp.newRichTextValue()
                  .setText('Hello world')
                  .setTextStyle(0, 5, bold)
                  .build();
cell.setRichTextValue(value);
```

#### Return

`RichTextValueBuilder` — The new builder.

---

### newTextStyle()

Creates a builder for a text style.

```
// Sets range A1:B3 to have red, size 22, bolded, underlined text.
const range = SpreadsheetApp.getActive().getRange('A1:B3');
const style = SpreadsheetApp.newTextStyle()
                  .setForegroundColor('red')
                  .setFontSize(22)
                  .setBold(true)
                  .setUnderline(true)
                  .build();
range.setTextStyle(style);
```

#### Return

`TextStyleBuilder` — The new builder.

---

### open(file)

Opens the spreadsheet that corresponds to the given File object.

```
// Get any starred spreadsheets from Google Drive, then open the spreadsheets
// and log the name of the first sheet within each spreadsheet.
const files = DriveApp.searchFiles(
    \`starred = true and mimeType = "${MimeType.GOOGLE_SHEETS}"\`,
);
while (files.hasNext()) {
  const spreadsheet = SpreadsheetApp.open(files.next());
  const sheet = spreadsheet.getSheets()[0];
  Logger.log(sheet.getName());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `file` | `File` | The file to open. |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets`

---

### openById(id)

Opens the spreadsheet with the given ID. A spreadsheet ID can be extracted from its URL. For example, the spreadsheet ID in the URL `https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0` is "abc1234567".

```
// The code below opens a spreadsheet using its ID and logs the name for it.
// Note that the spreadsheet is NOT physically opened on the client side.
// It is opened on the server only (for modification by the script).
const ss = SpreadsheetApp.openById('abc1234567');
Logger.log(ss.getName());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The unique identifier for the spreadsheet. |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets`

---

### openByUrl(url)

Opens the spreadsheet with the given URL. Throws a scripting exception if the URL doesn't exist or the user doesn't have permission to access it.

```
// Opens a spreadsheet by its URL and logs its name.
// Note that the spreadsheet doesn't physically open on the client side.
// It opens on the server only (for modification by the script).
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc1234567/edit',
);
console.log(ss.getName());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL for the spreadsheet. |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets`

---

### setActiveRange(range)

Sets the specified range as the `active range`, with the top left cell in the range as the `current cell`.

The spreadsheet UI displays the sheet that contains the chosen range and selects the cells defined in the chosen range.

```
// The code below sets range C1:D4 in the first sheet as the active range.
const range =
    SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('C1:D4');
SpreadsheetApp.setActiveRange(range);

const selection = SpreadsheetApp.getSelection();
// Current cell: C1
const currentCell = selection.getCurrentCell();
// Active Range: C1:D4
const activeRange = selection.getActiveRange();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `range` | `Range` | The range to be made the active range. |

#### Return

`Range` — The new active Range.

---

### setActiveRangeList(rangeList)

Sets the specified list of ranges as the `active ranges`. The last range in the list is set as the `active range`.

```
// The code below sets ranges [D4, B2:C4] in the active sheet as the active
// ranges.
const rangeList = SpreadsheetApp.getActiveSheet().getRanges(['D4', 'B2:C4']);
SpreadsheetApp.setActiveRangeList(rangeList);

const selection = SpreadsheetApp.getSelection();
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

### setActiveSheet(sheet)

Sets the active sheet in a spreadsheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a different spreadsheet.

```
// The code below makes the 2nd sheet active in the active spreadsheet.
const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[1]);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sheet` | `Sheet` | The new active sheet. |

#### Return

`Sheet` — The sheet that has been made the new active sheet.

---

### setActiveSheet(sheet, restoreSelection)

Sets the active sheet in a spreadsheet, with the option to restore the most recent selection within that sheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a different spreadsheet.

```
const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
const firstSheet = spreadsheet.getSheets()[0];
const secondSheet = spreadsheet.getSheets()[1];
// Set the first sheet as the active sheet and select the range D4:F4.
spreadsheet.setActiveSheet(firstSheet).getRange('D4:F4').activate();

// Switch to the second sheet to do some work.
spreadsheet.setActiveSheet(secondSheet);
// Switch back to first sheet, and restore its selection.
spreadsheet.setActiveSheet(firstSheet, true);

// The selection of first sheet is restored, and it logs D4:F4
const range = spreadsheet.getActiveSheet().getSelection().getActiveRange();
Logger.log(range.getA1Notation());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sheet` | `Sheet` | The new active sheet. |
| `restoreSelection` | `Boolean` | If `true`, the most recent selection of the new active sheet becomes selected again as the new sheet becomes active; if `false`, the new sheet becomes active without changing the current selection. |

#### Return

`Sheet` — The new active sheet.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### setActiveSpreadsheet(newActiveSpreadsheet)

Sets the active spreadsheet.

```
// The code below makes the spreadsheet with key "1234567890" the active
// spreadsheet
const ss = SpreadsheetApp.openById('1234567890');
SpreadsheetApp.setActiveSpreadsheet(ss);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `newActiveSpreadsheet` |  | The Spreadsheet to be made the active spreadsheet. |

---

### setCurrentCell(cell)

Sets the specified cell as the `current cell`.

If the specified cell is present in an already selected range, then that range becomes the active range with the cell as the current cell.

If the specified cell is not present in any selected range, then the existing selection is removed and the cell becomes the current cell and the active range.

**Note:**The specified `Range` must consist of one cell, otherwise this method throws an exception.

```
// The code below sets the cell B5 in the first sheet as the current cell.
const cell =
    SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('B5');
SpreadsheetApp.setCurrentCell(cell);

const selection = SpreadsheetApp.getSelection();
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
