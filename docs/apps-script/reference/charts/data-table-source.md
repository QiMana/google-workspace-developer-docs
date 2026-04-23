---
source: https://developers.google.com/apps-script/reference/charts/data-table-source
root: apps-script
fetched_at: 2026-04-23T15:19:17.443Z
---

# Interface DataTableSource

## Page Summary

- DataTableSource is an interface for objects that can represent their data as a DataTable.
- Implementing classes include DataTable and Range, which can be used with DataTableSource.
- The `getDataTable()` method returns the data within an object as a DataTable.
- The provided example demonstrates how to use `getDataTable()` with a Range to create a chart.

Interface for objects that can represent their data as a .

### Implementing classes

## Detailed documentation

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
