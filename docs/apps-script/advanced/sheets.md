---
source: https://developers.google.com/apps-script/advanced/sheets
root: apps-script
fetched_at: 2026-04-23T15:18:07.084Z
---

# Advanced Sheets Service

## Page Summary

- The Advanced Sheets service allows accessing the Sheets API using Apps Script to read, edit, format, and present data in Google Sheets.
- This advanced service must be enabled before use and provides some features not available in the built-in Google Sheets API service.
- The service uses the same objects, methods, and parameters as the public Sheets API.
- Sample code is provided for common tasks like reading and writing values, adding a new sheet, and creating a pivot table.

from Apps Script to read, edit, format, and present data in Google Sheets.

The Advanced Sheets Service lets you access the [Sheets API](https://developers.google.com/sheets/api) using Google Apps Script. Much like Apps Script's [built-in Google Sheets API service](https://developers.google.com/apps-script/reference/spreadsheet), this API lets scripts read, edit, format and present data in Google Sheets. In most cases, the built-in service is easier to use, but this advanced service provides a few extra features.

This is an advanced service that must be [enabled before use](https://developers.google.com/apps-script/guides/services/advanced).

## Reference

For detailed information on this service, see the [reference documentation](https://developers.google.com/sheets/api/reference/rest) for the Sheets API. Like all advanced services in Apps Script, the advanced Sheets service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](https://developers.google.com/apps-script/guides/services/advanced#how_method_signatures_are_determined).

To report issues and find other support, see the [Sheets support guide](https://developers.google.com/sheets/api/support).

## Sample code

The following sample code uses [version 4](https://developers.google.com/sheets/api/reference/rest) of the API; this is the only version of the Sheets API available as an advanced service in Apps Script.

### Read values from a range

The following example demonstrates how to read data values from a specified range in a sheet with the Sheets advanced service. It is equivalent to the [Read a single range](https://developers.google.com/sheets/api/samples/reading#read_a_single_range) recipe sample.

```
/**
 * Read a range (A1:D5) of data values. Logs the values.
 * @param {string} spreadsheetId The spreadsheet ID to read from.
 * @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
 */
function readRange(spreadsheetId = yourspreadsheetId) {
  try {
    const response = Sheets.Spreadsheets.Values.get(
      spreadsheetId,
      "Sheet1!A1:D5",
    );
    if (response.values) {
      console.log(response.values);
      return;
    }
    console.log("Failed to get range of values from spreadsheet");
  } catch (e) {
    // TODO (developer) - Handle exception
    console.log("Failed with error %s", e.message);
  }
}
```

### Write values to multiple ranges

The following example demonstrates how to write data to different, disjoint ranges in a sheet with one request. It is equivalent to the [Write to multiple ranges](https://developers.google.com/sheets/api/samples/writing#write_to_multiple_ranges) recipe sample.

```
/**
 * Write to multiple, disjoint data ranges.
 * @param {string} spreadsheetId The spreadsheet ID to write to.
 * @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate
 */
function writeToMultipleRanges(spreadsheetId = yourspreadsheetId) {
  // Specify some values to write to the sheet.
  const columnAValues = [["Item", "Wheel", "Door", "Engine"]];
  const rowValues = [
    ["Cost", "Stocked", "Ship Date"],
    ["$20.50", "4", "3/1/2016"],
  ];

  const request = {
    valueInputOption: "USER_ENTERED",
    data: [
      {
        range: "Sheet1!A1:A4",
        majorDimension: "COLUMNS",
        values: columnAValues,
      },
      {
        range: "Sheet1!B1:D2",
        majorDimension: "ROWS",
        values: rowValues,
      },
    ],
  };
  try {
    const response = Sheets.Spreadsheets.Values.batchUpdate(
      request,
      spreadsheetId,
    );
    if (response) {
      console.log(response);
      return;
    }
    console.log("response null");
  } catch (e) {
    // TODO (developer) - Handle  exception
    console.log("Failed with error %s", e.message);
  }
}
```

### Add a new sheet

The following example demonstrates how to create a new sheet with specific size and tab color. It is equivalent to the [Add a sheet](https://developers.google.com/sheets/api/samples/sheet#add_a_sheet) recipe sample.

```
/**
 * Add a new sheet with some properties.
 * @param {string} spreadsheetId The spreadsheet ID.
 * @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate
 */
function addSheet(spreadsheetId = yourspreadsheetId) {
  const requests = [
    {
      addSheet: {
        properties: {
          title: "Deposits",
          gridProperties: {
            rowCount: 20,
            columnCount: 12,
          },
          tabColor: {
            red: 1.0,
            green: 0.3,
            blue: 0.4,
          },
        },
      },
    },
  ];
  try {
    const response = Sheets.Spreadsheets.batchUpdate(
      { requests: requests },
      spreadsheetId,
    );
    console.log(
      \`Created sheet with ID: ${response.replies[0].addSheet.properties.sheetId}\`,
    );
  } catch (e) {
    // TODO (developer) - Handle exception
    console.log("Failed with error %s", e.message);
  }
}
```

### Create a pivot table

The following example demonstrates how to create a pivot table from source data. It is equivalent to the [Add a pivot table](https://developers.google.com/sheets/api/samples/pivot-tables#add_a_pivot_table) recipe sample.

```
/**
 * Add a pivot table.
 * @param {string} spreadsheetId The spreadsheet ID to add the pivot table to.
 * @param {string} pivotSourceDataSheetId The sheet ID to get the data from.
 * @param {string} destinationSheetId The sheet ID to add the pivot table to.
 * @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate
 */
function addPivotTable(
  spreadsheetId = yourspreadsheetId,
  pivotSourceDataSheetId = yourpivotSourceDataSheetId,
  destinationSheetId = yourdestinationSheetId,
) {
  const requests = [
    {
      updateCells: {
        rows: {
          values: [
            {
              pivotTable: {
                source: {
                  sheetId: pivotSourceDataSheetId,
                  startRowIndex: 0,
                  startColumnIndex: 0,
                  endRowIndex: 20,
                  endColumnIndex: 7,
                },
                rows: [
                  {
                    sourceColumnOffset: 0,
                    showTotals: true,
                    sortOrder: "ASCENDING",
                    valueBucket: {
                      buckets: [
                        {
                          stringValue: "West",
                        },
                      ],
                    },
                  },
                  {
                    sourceColumnOffset: 1,
                    showTotals: true,
                    sortOrder: "DESCENDING",
                    valueBucket: {},
                  },
                ],
                columns: [
                  {
                    sourceColumnOffset: 4,
                    sortOrder: "ASCENDING",
                    showTotals: true,
                    valueBucket: {},
                  },
                ],
                values: [
                  {
                    summarizeFunction: "SUM",
                    sourceColumnOffset: 3,
                  },
                ],
                valueLayout: "HORIZONTAL",
              },
            },
          ],
        },
        start: {
          sheetId: destinationSheetId,
          rowIndex: 49,
          columnIndex: 0,
        },
        fields: "pivotTable",
      },
    },
  ];
  try {
    const response = Sheets.Spreadsheets.batchUpdate(
      { requests: requests },
      spreadsheetId,
    );
    // The Pivot table will appear anchored to cell A50 of the destination sheet.
  } catch (e) {
    // TODO (developer) - Handle exception
    console.log("Failed with error %s", e.message);
  }
}
```
