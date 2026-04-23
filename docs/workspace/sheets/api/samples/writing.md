---
source: https://developers.google.com/workspace/sheets/api/samples/writing
root: workspace
fetched_at: 2026-04-23T15:31:38.782Z
---

# Basic writing

The Google Sheets API allows you to write values and formulas to cells, ranges, sets of ranges, and entire sheets. The examples on this page illustrate how some common write operations can be achieved with the [`spreadsheets.values`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values) resource of the Sheets API.

Note that it's also possible to write cell values using the [`spreadsheet.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) method, which can be useful if you want to simultaneously update cell formatting or other properties the [`spreadsheets.values`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values) resource doesn't affect. For example, if you want to copy a range of cells from one sheet to another while overwriting both the cell formula and the cell formatting, you can use the [`UpdateCellsRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatecellsrequest) method with a `spreadsheet.batchUpdate`.

However, for simple value writes it's easier to use the [`spreadsheets.values.update`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/update) method or the [`spreadsheets.values.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate) method.

These examples are presented in the form of HTTP requests to be language neutral. To learn how to implement writes in different languages using the Google API client libraries, see [Read & write cell values](https://developers.google.com/workspace/sheets/api/guides/values#writing).

In these examples, the placeholder `SPREADSHEET_ID` indicates where you would provide the [spreadsheet ID](https://developers.google.com/workspace/sheets/api/guides/concepts#spreadsheet), which can be discovered from the spreadsheet URL. The ranges to write to are specified using [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). An example range is Sheet1!A1:D5.

## Write a single range

Starting with a new, blank spreadsheet, the following [`spreadsheets.values.update`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/update) code sample shows how to write the values to a range. The [`ValueInputOption`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/ValueInputOption) query parameter is required and determines whether the values written are parsed (for example, whether or not a string is converted into a date).

The request body is a [`ValueRange`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values#ValueRange) object that describes range values to write. The [`majorDimension`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values) field indicates that the arrays are lists of values organized by rows. Existing values in the target range are overwritten.

The request protocol is shown below.

```
PUT https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID/values/Sheet1!A1:D5?valueInputOption=VALUE_INPUT_OPTION
```

```
{
  "range": "Sheet1!A1:D5",
  "majorDimension": "ROWS",
  "values": [
    ["Item", "Cost", "Stocked", "Ship Date"],
    ["Wheel", "$20.50", "4", "3/1/2016"],
    ["Door", "$15", "2", "3/15/2016"],
    ["Engine", "$100", "1", "3/20/2016"],
    ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
  ],
}
```

The response consists of an [`UpdateValuesResponse`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/UpdateValuesResponse) object, such as this one:

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "updatedRange": "Sheet1!A1:D5",
  "updatedRows": 5,
  "updatedColumns": 4,
  "updatedCells": 20,
}
```

The resulting sheet looks like the following:

|  | A | B | C | D |
| --- | --- | --- | --- | --- |
| 1 | Item | Cost | Stocked | Ship Date |
| 2 | Wheel | $20.50 | 4 | 3/1/2016 |
| 3 | Door | $15 | 2 | 3/15/2016 |
| 4 | Engine | $100 | 1 | 3/20/2016 |
| 5 | Totals | $135.5 | 7 | 3/20/2016 |

## Write selectively to a range

It's possible, when writing values to a range, to avoid changing some existing cells by setting the corresponding array elements to `null`. It's also possible to clear a cell by writing an empty string (`""`) to it.

Starting with a sheet containing the same data produced by the [above example](#single-range), the following [`spreadsheets.values.update`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/update) code sample shows how to write the values to the range B1:D4, selectively leaving some cells unchanged and clearing others. The [`ValueInputOption`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/ValueInputOption) query parameter is required and determines whether the values written are parsed (for example, whether or not a string is converted into a date).

The request body is a [`ValueRange`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values#ValueRange) object that describes range values to write. The [`majorDimension`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values) field indicates that the arrays are lists of values organized by column.

The request protocol is shown below.

```
PUT https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID/values/Sheet1!B1?valueInputOption=VALUE_INPUT_OPTION
```

```
{
  "range": "Sheet1!B1",
  "majorDimension": "COLUMNS",
  "values": [
    [null,"$1","$2", ""],
    [],
    [null,"4/1/2016", "4/15/2016", ""]
  ]
}
```

The `values` field here lists the changes made to each column in the range. The first array indicates that B1 is to be left unchanged (due to the `null` array element), while B4 is to be cleared (empty string). B2 and B3 have their values updated. The third array performs the same operations on column D, while the second empty array indicates that column C is to be left unchanged.

The response consists of an [`UpdateValuesResponse`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/UpdateValuesResponse) object such as this one:

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "updatedRange": "Sheet1!B1:D5",
  "updatedRows": 3,
  "updatedColumns": 2,
  "updatedCells": 6,
}
```

The resulting sheet looks like the following:

|  | A | B | C | D |
| --- | --- | --- | --- | --- |
| 1 | Item | Cost | Stocked | Ship Date |
| 2 | Wheel | $1.00 | 4 | 4/1/2016 |
| 3 | Door | $2 | 2 | 4/15/2016 |
| 4 | Engine |  | 1 |  |
| 5 | Totals | $3.00 | 7 | 4/15/2016 |

Note that the "Totals" row, while not directly changed by this request, does change because its cells contain formulas that depend on the altered cells.

## Write to multiple ranges

Starting with a blank sheet, the following [`spreadsheets.values.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate) code sample shows how to write the values to the ranges Sheet1!A1:A4 and Sheet1!B1:D2. Existing values in the target range are overwritten. The request body consists of a [`ValueInputOption`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/ValueInputOption) object that shows how to interpret the input data and an array of [`ValueRange`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values#ValueRange) objects corresponding to each range written. The [`majorDimension`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values) field determines if the arrays included are interpreted as arrays of columns or rows.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID/values:batchUpdate
```

```
{
  "valueInputOption": "VALUE_INPUT_OPTION",
  "data": [
    {
      "range": "Sheet1!A1:A4",
      "majorDimension": "COLUMNS",
      "values": [
        ["Item", "Wheel", "Door", "Engine"]
      ]
    },
    {
      "range": "Sheet1!B1:D2",
      "majorDimension": "ROWS",
      "values": [
        ["Cost", "Stocked", "Ship Date"],
        ["$20.50", "4", "3/1/2016"]
      ]
    }
  ]
}
```

The response consists of an object that lists the updated cell statistics and an array of [`UpdateValuesResponse`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/UpdateValuesResponse) objects, one for each updated range. For example:

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "totalUpdatedRows": 4,
  "totalUpdatedColumns": 4,
  "totalUpdatedCells": 10,
  "totalUpdatedSheets": 1,
  "responses": [
    {
      "spreadsheetId": SPREADSHEET_ID,
      "updatedRange": "Sheet1!A1:A4",
      "updatedRows": 4,
      "updatedColumns": 1,
      "updatedCells": 4,
    },
    {
      "spreadsheetId": SPREADSHEET_ID,
      "updatedRange": "Sheet1!B1:D2",
      "updatedRows": 2,
      "updatedColumns": 3,
      "updatedCells": 6,
    }
  ],
}
```

The resulting sheet looks like the following:

|  | A | B | C | D |
| --- | --- | --- | --- | --- |
| 1 | Item | Cost | Stocked | Ship Date |
| 2 | Wheel | $20.50 | 4 | 3/1/2016 |
| 3 | Door |  |  |  |
| 4 | Engine |  |  |  |
| 5 |  |  |  |  |

## Write values without parsing

Starting with a blank sheet, the following [`spreadsheets.values.update`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/update) code sample shows how to write the values to the range Sheet1!A1:E1, but uses the `RAW` [`ValueInputOption`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/ValueInputOption) query parameter to prevent the written strings from being parsed as formulas, booleans, or numbers. They appear as strings and the text alignment is justified in the sheet.

The request body is a [`ValueRange`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values#ValueRange) object that describes range values to write. The [`majorDimension`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values) field indicates that the arrays are lists of values organized by rows. Existing values in the target range are overwritten.

The request protocol is shown below.

```
PUT https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID/values/Sheet1!A1:E1?valueInputOption=RAW
```

```
{
  "range": "Sheet1!A1:E1",
  "majorDimension": "ROWS",
  "values": [
    ["Data", 123.45, true, "=MAX(D2:D4)", "10"]
  ],
}
```

The response consists of an [`UpdateValuesResponse`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/UpdateValuesResponse) object such as this one:

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "updatedRange": "Sheet1!A1:E1",
  "updatedRows": 1,
  "updatedColumns": 5,
  "updatedCells": 5,
}
```

The resulting sheet looks like the following:

|  | A | B | C | D | E |
| --- | --- | --- | --- | --- | --- |
| 1 | Data | 123.45 | TRUE | \=MAX(D2:D4) | 10 |
| 2 |  |  |  |  |  |

Note that "TRUE" is centered and is a boolean value, whereas "123.45" is right justified because it's a number, and "10" is left justified because it's a string. The formula isn't parsed, and also appears as a string.

## Append values

Start with a sheet like the table below:

|  | A | B | C | D |
| --- | --- | --- | --- | --- |
| 1 | Item | Cost | Stocked | Ship Date |
| 2 | Wheel | $20.50 | 4 | 3/1/2016 |
| 3 |  |  |  |  |

The following [`spreadsheets.values.append`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/append) code sample shows how to add two new rows of values starting with row 3. The [`ValueInputOption`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/ValueInputOption) query parameter is required and determines whether the values written are parsed (for example, whether or not a string is converted into a date).

The request body is a [`ValueRange`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values#ValueRange) object that describes range values to write. The [`majorDimension`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values) field indicates that the arrays are lists of values organized by rows.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID/values/Sheet1!A1:E1:append?valueInputOption=VALUE_INPUT_OPTION
```

```
{
  "range": "Sheet1!A1:E1",
  "majorDimension": "ROWS",
  "values": [
    ["Door", "$15", "2", "3/15/2016"],
    ["Engine", "$100", "1", "3/20/2016"],
  ],
}
```

The response consists of an [`AppendValuesResponse`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/append#body.response_body) object such as this one:

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "tableRange": "Sheet1!A1:D2",
  "updates": {
    "spreadsheetId": SPREADSHEET_ID,
    "updatedRange": "Sheet1!A3:D4",
    "updatedRows": 2,
    "updatedColumns": 4,
    "updatedCells": 8,
  }
}
```

The resulting sheet looks like the following:

|  | A | B | C | D |
| --- | --- | --- | --- | --- |
| 1 | Item | Cost | Stocked | Ship Date |
| 2 | Wheel | $20.50 | 4 | 3/1/2016 |
| 3 | Door | $15 | 2 | 3/15/2016 |
| 4 | Engine | $100 | 1 | 3/20/2016 |
| 5 |  |  |  |  |
