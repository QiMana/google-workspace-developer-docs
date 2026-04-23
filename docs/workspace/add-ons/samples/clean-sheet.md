---
source: https://developers.google.com/workspace/add-ons/samples/clean-sheet
root: workspace
fetched_at: 2026-04-23T15:23:09.240Z
---

# Clean up data in a Google Sheets spreadsheet

## Page Summary

- This Google Apps Script add-on automates spreadsheet cleanup tasks like removing empty rows/columns and cropping to the data range.
- It offers functions accessible through a custom menu in Google Sheets under "Extensions".
- The script requires authorization and uses the Spreadsheet Service to interact with spreadsheet data.
- Users need a Google account and web access; setup involves copying and deploying the script as an Editor add-on.
- Limitations include range size restrictions and the impact of space characters within cells on empty row/column detection.

**Coding level**: Intermediate  
**Duration**: 20 minutes  
**Project type**: Editor add-on

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

Clean up spreadsheet data by automatically removing empty rows and columns, cropping the spreadsheet to the edges of the data range, and filling in gaps in the data.

![Demo of add-on formatting a spreadsheet](https://developers.google.com/static/workspace/add-ons/images/clean-sheet-editor-add-on.gif)

![](https://developers.google.com/static/workspace/add-ons/images/clean-sheet-editor-add-on.gif)

### How it works

The script performs the following functions:

- **Delete blank rows** –Within a selected range, the script identifies empty rows and deletes them. If cells within a row contain space characters, the row isn't considered empty.
- **Delete blank columns** –Within a selected range, the script identifies empty columns and deletes them. If cells within a column contain space characters, the column isn't considered empty.
- **Crop sheet to data range** –The script identifies where the data range ends and deletes the excess rows and columns.
- **Fill in blank rows** –The script copies and pastes the content of the selected active cell to the empty cells in the rows below it. The script stops pasting content when it encounters a row that isn't empty or reaches the end of the data range.

### Apps Script services

This solution uses the following service:

- [Spreadsheet Service](https://developers.google.com/apps-script/reference/spreadsheet) –Gets the active sheet and performs all of the cleanup functions.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

1. Click the following button to open the **Clean sheet** Apps Script project.  
	[Open the project](https://script.google.com/d/10bxhn6eGypm20dgRcTbUCbzP4Bz0dyYR6IZTNEA2gIXXxwoy8Zqs06yr/edit?usp=sharing)
2. Click **Overview** .
3. On the overview page, click Make a copy ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg).
4. At the top of your copied project, click **Deploy** \> **Test deployments**.
5. Next to **Select type**, click Enable deployment types ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg) \> **Editor add-on**.
6. Click **Create new test**.
7. Under **Test document**, click **No document selected**.
8. Choose a spreadsheet with data to clean up and click **Insert**. To use a sample document, [make a copy of the **Sample cleanup data** spreadsheet](https://docs.google.com/spreadsheets/d/1ugaMMZ3y47_2yNnDITEWQHWx2Ta_FXuOe7qxPCfG7mI/copy?usp=sharing).
9. Click **Save test**.
10. To open the spreadsheet, select the radio button next to the saved test and click **Execute**.

## Run the script

1. In the spreadsheet, select the range `A1:F20`.
2. Click **Extensions** \> **Copy of Clean sheet** \> **Delete blank rows**.
3. When prompted, click **Continue** and authorize the script.
4. Click **Extensions** \> **Copy of Clean sheet** \> **Delete blank rows** again.
5. Click **Extensions** \> **Copy of Clean sheet** \> **Delete blank columns**.
6. Click **Extensions** \> **Copy of Clean sheet** \> **Crop sheet to data range**.
7. Select cell `C7`.
8. Click **Extensions** \> **Copy of Clean sheet** \> **Fill in blank rows below**.

## Review the code

To review the Apps Script code for this solution, click **View source code** below:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/add-ons/clean-sheet

/*
Copyright 2022 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Application Constants
const APP_TITLE = "Clean sheet";

/**
 * Identifies and deletes empty rows in selected range of active sheet.
 *
 * Cells that contain space characters are treated as non-empty.
 * The entire row, including the cells outside of the selected range,
 * must be empty to be deleted.
 *
 * Called from menu option.
 */
function deleteEmptyRows() {
  const sheet = SpreadsheetApp.getActiveSheet();

  // Gets active selection and dimensions.
  const activeRange = sheet.getActiveRange();
  const rowCount = activeRange.getHeight();
  const firstActiveRow = activeRange.getRow();
  const columnCount = sheet.getMaxColumns();

  // Tests that the selection is a valid range.
  if (rowCount < 1) {
    showMessage("Select a valid range.");
    return;
  }
  // Tests active range isn't too large to process. Enforces limit set to 10k.
  if (rowCount > 10000) {
    showMessage(
      "Selected range too large. Select up to 10,000 rows at one time.",
    );
    return;
  }

  // Utilizes an array of values for efficient processing to determine blank rows.
  const activeRangeValues = sheet
    .getRange(firstActiveRow, 1, rowCount, columnCount)
    .getValues();

  // Checks if array is all empty values.
  const valueFilter = (value) => value !== "";
  const isRowEmpty = (row) => {
    return row.filter(valueFilter).length === 0;
  };

  // Maps the range values as an object with value (to test) and corresponding row index (with offset from selection).
  const rowsToDelete = activeRangeValues
    .map((row, index) => ({ row, offset: index + activeRange.getRowIndex() }))
    .filter((item) => isRowEmpty(item.row)) // Test to filter out non-empty rows.
    .map((item) => item.offset); //Remap to include just the row indexes that will be removed.

  // Combines a sorted, ascending list of indexes into a set of ranges capturing consecutive values as start/end ranges.
  // Combines sequential empty rows for faster processing.
  const rangesToDelete = rowsToDelete.reduce((ranges, index) => {
    const currentRange = ranges[ranges.length - 1];
    if (currentRange && index === currentRange[1] + 1) {
      currentRange[1] = index;
      return ranges;
    }
    ranges.push([index, index]);
    return ranges;
  }, []);

  // Sends a list of row indexes to be deleted to the console.
  console.log(rangesToDelete);

  // Deletes the rows using REVERSE order to ensure proper indexing is used.
  for (const [start, end] of rangesToDelete.reverse()) {
    sheet.deleteRows(start, end - start + 1);
  }
  SpreadsheetApp.flush();
}

/**
 * Removes blank columns in a selected range.
 *
 * Cells containing Space characters are treated as non-empty.
 * The entire column, including cells outside of the selected range,
 * must be empty to be deleted.
 *
 * Called from menu option.
 */
function deleteEmptyColumns() {
  const sheet = SpreadsheetApp.getActiveSheet();

  // Gets active selection and dimensions.
  const activeRange = sheet.getActiveRange();
  const rowCountMax = sheet.getMaxRows();
  const columnWidth = activeRange.getWidth();
  const firstActiveColumn = activeRange.getColumn();

  // Tests that the selection is a valid range.
  if (columnWidth < 1) {
    showMessage("Select a valid range.");
    return;
  }
  // Tests active range is not too large to process. Enforces limit set to 1k.
  if (columnWidth > 1000) {
    showMessage(
      "Selected range too large. Select up to 10,000 rows at one time.",
    );
    return;
  }

  // Utilizes an array of values for efficient processing to determine blank columns.
  const activeRangeValues = sheet
    .getRange(1, firstActiveColumn, rowCountMax, columnWidth)
    .getValues();

  // Transposes the array of range values so it can be processed in order of columns.
  const activeRangeValuesTransposed = activeRangeValues[0].map((_, colIndex) =>
    activeRangeValues.map((row) => row[colIndex]),
  );

  // Checks if array is all empty values.
  const valueFilter = (value) => value !== "";
  const isColumnEmpty = (column) => {
    return column.filter(valueFilter).length === 0;
  };

  // Maps the range values as an object with value (to test) and corresponding column index (with offset from selection).
  const columnsToDelete = activeRangeValuesTransposed
    .map((column, index) => ({ column, offset: index + firstActiveColumn }))
    .filter((item) => isColumnEmpty(item.column)) // Test to filter out non-empty rows.
    .map((item) => item.offset); //Remap to include just the column indexes that will be removed.

  // Combines a sorted, ascending list of indexes into a set of ranges capturing consecutive values as start/end ranges.
  // Combines sequential empty columns for faster processing.
  const rangesToDelete = columnsToDelete.reduce((ranges, index) => {
    const currentRange = ranges[ranges.length - 1];
    if (currentRange && index === currentRange[1] + 1) {
      currentRange[1] = index;
      return ranges;
    }
    ranges.push([index, index]);
    return ranges;
  }, []);

  // Sends a list of column indexes to be deleted to the console.
  console.log(rangesToDelete);

  // Deletes the columns using REVERSE order to ensure proper indexing is used.
  for (const [start, end] of rangesToDelete.reverse()) {
    sheet.deleteColumns(start, end - start + 1);
  }
  SpreadsheetApp.flush();
}

/**
 * Trims all of the unused rows and columns outside of selected data range.
 *
 * Called from menu option.
 */
function cropSheet() {
  const dataRange = SpreadsheetApp.getActiveSheet().getDataRange();
  const sheet = dataRange.getSheet();

  let numRows = dataRange.getNumRows();
  let numColumns = dataRange.getNumColumns();

  const maxRows = sheet.getMaxRows();
  const maxColumns = sheet.getMaxColumns();

  const numFrozenRows = sheet.getFrozenRows();
  const numFrozenColumns = sheet.getFrozenColumns();

  // If last data row is less than maximium row, then deletes rows after the last data row.
  if (numRows < maxRows) {
    numRows = Math.max(numRows, numFrozenRows + 1); // Don't crop empty frozen rows.
    sheet.deleteRows(numRows + 1, maxRows - numRows);
  }

  // If last data column is less than maximium column, then deletes columns after the last data column.
  if (numColumns < maxColumns) {
    numColumns = Math.max(numColumns, numFrozenColumns + 1); // Don't crop empty frozen columns.
    sheet.deleteColumns(numColumns + 1, maxColumns - numColumns);
  }
}

/**
 * Copies value of active cell to the blank cells beneath it.
 * Stops at last row of the sheet's data range if only blank cells are encountered.
 *
 * Called from menu option.
 */
function fillDownData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Gets sheet's active cell and confirms it's not empty.
  const activeCell = sheet.getActiveCell();
  const activeCellValue = activeCell.getValue();

  if (!activeCellValue) {
    showMessage("The active cell is empty. Nothing to fill.");
    return;
  }

  // Gets coordinates of active cell.
  const column = activeCell.getColumn();
  const row = activeCell.getRow();

  // Gets entire data range of the sheet.
  const dataRange = sheet.getDataRange();
  const dataRangeRows = dataRange.getNumRows();

  // Gets trimmed range starting from active cell to the end of sheet data range.
  const searchRange = dataRange.offset(
    row - 1,
    column - 1,
    dataRangeRows - row + 1,
    1,
  );
  const searchValues = searchRange.getDisplayValues();

  // Find the number of empty rows below the active cell.
  let i = 1; // Start at 1 to skip the ActiveCell.
  while (searchValues[i] && searchValues[i][0] === "") {
    i++;
  }

  // If blanks exist, fill the range with values.
  if (i > 1) {
    const fillRange = searchRange.offset(0, 0, i, 1).setValue(activeCellValue);
    //sheet.setActiveRange(fillRange) // Uncomment to test affected range.
  } else {
    showMessage("There are no empty cells below the Active Cell to fill.");
  }
}

/**
 * A helper function to display messages to user.
 *
 * @param {string} message - Message to be displayed.
 * @param {string} caller - {Optional} text to append to title.
 */
function showMessage(message, caller) {
  // Sets the title using the APP_TITLE variable; adds optional caller string.
  let title = APP_TITLE;
  if (caller != null) {
    title += \` : ${caller}\`;
  }

  const ui = SpreadsheetApp.getUi();
  ui.alert(title, message, ui.ButtonSet.OK);
}
```

### Menu.gs

```
/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Creates a menu entry in the Google Sheets Extensions menu when the document is opened.
 *
 * @param {object} e The event parameter for a simple onOpen trigger.
 */
function onOpen(e) {
  // Builds a menu that displays under the Extensions menu in Sheets.
  const menu = SpreadsheetApp.getUi().createAddonMenu();

  menu
    .addItem("Delete blank rows (from selected rows only)", "deleteEmptyRows")
    .addItem(
      "Delete blank columns (from selected columns only)",
      "deleteEmptyColumns",
    )
    .addItem("Crop sheet to data range", "cropSheet")
    .addSeparator()
    .addItem("Fill in blank rows below", "fillDownData")
    .addSeparator()
    .addItem("About", "aboutApp")
    .addToUi();
}

/**
 * Runs when the add-on is installed; calls onOpen() to ensure menu creation and
 * any other initializion work is done immediately. This method is only used by
 * the desktop add-on and is never called by the mobile version.
 *
 * @param {object} e The event parameter for a simple onInstall trigger.
 */
function onInstall(e) {
  onOpen(e);
}

/**
 * About box for context and developer contact information.
 * TODO: Personalize
 */
function aboutApp() {
  const msg = \`
  Name: ${APP_TITLE}
  Version: 1.0
  Contact: <Developer Email Goes Here>\`;

  const ui = SpreadsheetApp.getUi();
  ui.alert("About this application", msg, ui.ButtonSet.OK);
}
```

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Extending Google Sheets with add-ons](https://developers.google.com/workspace/add-ons/editors/sheets)
- [Spreadsheet service reference](https://developers.google.com/apps-script/reference/spreadsheet)
