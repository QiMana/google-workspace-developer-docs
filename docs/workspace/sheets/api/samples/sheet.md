---
source: https://developers.google.com/workspace/sheets/api/samples/sheet
root: workspace
fetched_at: 2026-04-23T15:31:38.683Z
---

# Sheet operations

The Google Sheets API lets you create, clear, copy, and delete sheets, and also control their properties. The examples on this page illustrate how you can achieve some common Sheets operations with the Sheets API.

These examples are presented in the form of HTTP requests to be language neutral. To learn how to implement a batch update in different languages using the Google API client libraries, see [Update spreadsheets](../guides/batchupdate.md#example).

In these examples, the placeholders `SPREADSHEET_ID` and `SHEET_ID` indicates where you would provide those IDs. You can find the [spreadsheet ID](../guides/concepts.md#spreadsheet) in the spreadsheet URL. You can get the [sheet ID](../guides/concepts.md#sheet) by using the [`spreadsheets.get`](../reference/rest/v4/spreadsheets/get.md) method. The ranges are specified using [A1 notation](../guides/concepts.md#cell). An example range is Sheet1!A1:D5.

## Add a sheet

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`AddSheetRequest`](../reference/rest/v4/spreadsheets/request.md#addsheetrequest) to add a sheet to a spreadsheet, while also setting the title, grid size, and tab color.

The response consists of a [`AddSheetResponse`](../reference/rest/v4/spreadsheets/response.md#addsheetresponse), which contains an object with the created sheet's properties (such as its `SHEET_ID`).

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "addSheet": {
        "properties": {
          "title": "Deposits",
          "gridProperties": {
            "rowCount": 20,
            "columnCount": 12
          },
          "tabColor": {
            "red": 1.0,
            "green": 0.3,
            "blue": 0.4
          }
        }
      }
    }
  ]
}
```

## Clear a sheet of all values while preserving formats

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`UpdateCellsRequest`](../reference/rest/v4/spreadsheets/request.md#updatecellsrequest) to remove all values from a sheet while leaving the formatting unaltered.

Specifying the [`userEnteredValue`](../reference/rest/v4/spreadsheets/cells.md) field without a corresponding value is interpreted as an instruction to clear values in the range. This setting can be used with other fields as well. For example, changing the `fields` value to [`userEnteredFormat`](../reference/rest/v4/spreadsheets/cells.md) removes all formatting supported by the Sheets API from the sheet, but leaves the cell values unaltered.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "updateCells": {
        "range": {
          "sheetId": SHEET_ID
        },
        "fields": "userEnteredValue"
      }
    }
  ]
}
```

## Copy a sheet from one spreadsheet to another

The following [`spreadsheet.sheets.copyTo`](../reference/rest/v4/spreadsheets.sheets/copyTo.md) code sample shows how to copy a single sheet specified by `SHEET_ID` from one spreadsheet to another spreadsheet.

The `TARGET_SPREADSHEET_ID` variable in the request body specifies the destination spreadsheet. The copy retains all values, formatting, formulas, and other properties of the original. The title of the copied sheet is set to "Copy of \[original sheet title\]".

The response consists of a [`SheetProperties`](../reference/rest/v4/spreadsheets/sheets.md#SheetProperties) object describing the properties of the created sheet.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID/sheets/SHEET_ID:copyTo
```

```
{
  "destinationSpreadsheetId": "TARGET_SPREADSHEET_ID"
}
```

## Delete a sheet

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`DeleteSheetRequest`](../reference/rest/v4/spreadsheets/request.md#deletesheetrequest) to delete a sheet specified by `SHEET_ID`.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "deleteSheet": {
        "sheetId": SHEET_ID
      }
    }
  ]
}
```

## Read sheet data

The following [`spreadsheets.get`](../reference/rest/v4/spreadsheets/get.md) code sample shows how to get [sheet](../guides/concepts.md#sheet) property information from a [spreadsheet](../guides/concepts.md#spreadsheet), specified by `SHEET_ID` and `SPREADSHEET_ID`. This method is often used to determine the metadata of sheets within a specific spreadsheet, so additional operations can target those sheets. The `fields` query parameter specifies only sheet property data should be returned (as opposed to cell value data or data related to the entire spreadsheet).

```
GET https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID?&fields=sheets.properties
```

The response consists of a [`Spreadsheet`](../reference/rest/v4/spreadsheets.md#resource-spreadsheet) resource, which contains a [`Sheet`](../reference/rest/v4/spreadsheets/sheets.md#Sheet) object with [`SheetProperties`](../reference/rest/v4/spreadsheets/sheets.md#SheetProperties) elements. If a given response field is set to the default value, it's omitted from the response.

```
{
  "sheets": [
    {
      "properties": {
        "sheetId": SHEET_ID,
        "title": "Sheet1",
        "index": 0,
        "sheetType": "GRID",
        "gridProperties": {
          "rowCount": 100,
          "columnCount": 20,
          "frozenRowCount": 1
        }
        "tabColor": {
          "blue": 1.0
        }
      },
      ...
  ],
}
```
