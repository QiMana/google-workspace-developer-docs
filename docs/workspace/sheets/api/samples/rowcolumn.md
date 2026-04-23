---
source: https://developers.google.com/workspace/sheets/api/samples/rowcolumn
root: workspace
fetched_at: 2026-04-23T15:31:38.446Z
---

# Row & column operations

The Google Sheets API lets you add, remove, and manipulate rows and columns in sheets. The examples on this page illustrate how some common row and column operations can be achieved with the Sheets API.

These examples are presented in the form of HTTP requests to be language neutral. To learn how to implement a batch update in different languages using the Google API client libraries, see [Update spreadsheets](../guides/batchupdate.md#example).

In these examples, the placeholders `SPREADSHEET_ID` and `SHEET_ID` indicates where you would provide those IDs. You can find the [spreadsheet ID](../guides/concepts.md#spreadsheet) in the spreadsheet URL. You can get the [sheet ID](../guides/concepts.md#sheet) by using the [`spreadsheets.get`](../reference/rest/v4/spreadsheets/get.md) method. The ranges are specified using [A1 notation](../guides/concepts.md#cell). An example range is Sheet1!A1:D5.

## Adjust column width or row height

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`UpdateDimensionPropertiesRequest`](../reference/rest/v4/spreadsheets/request.md#updatedimensionpropertiesrequest) to update the width property of column A to 160 pixels. A second request updates the row height property of the first three rows to be 40 pixels. The `dimension` field determines whether the operation applies to the columns or rows of a sheet.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "updateDimensionProperties": {
        "range": {
          "sheetId": SHEET_ID,
          "dimension": "COLUMNS",
          "startIndex": 0,
          "endIndex": 1
        },
        "properties": {
          "pixelSize": 160
        },
        "fields": "pixelSize"
      }
    },
    {
      "updateDimensionProperties": {
        "range": {
          "sheetId": SHEET_ID,
          "dimension": "ROWS",
          "startIndex": 0,
          "endIndex": 3
        },
        "properties": {
          "pixelSize": 40
        },
        "fields": "pixelSize"
      }
    }
  ]
}
```

## Append empty rows or columns

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`AppendDimensionRequest`](../reference/rest/v4/spreadsheets/request.md#appenddimensionrequest) to append rows and columns. The first request appends three empty rows to the end of a sheet, while the second appends a single empty column. The `dimension` field determines whether the operation applies to the columns or rows of a sheet.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "appendDimension": {
        "sheetId": SHEET_ID,
        "dimension": "ROWS",
        "length": 3
      }
    },
    {
      "appendDimension": {
        "sheetId": SHEET_ID,
        "dimension": "COLUMNS",
        "length": 1
      }
    }
  ]
}
```

## Automatically resize a column

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`AutoResizeDimensionsRequest`](../reference/rest/v4/spreadsheets/request.md#autoresizedimensionsrequest) to resize columns A:C, based on the size of the column content. The `dimension` field indicates that the operation applies to the columns of the sheet.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "autoResizeDimensions": {
        "dimensions": {
          "sheetId": SHEET_ID,
          "dimension": "COLUMNS",
          "startIndex": 0,
          "endIndex": 3
        }
      }
    }
  ]
}
```

## Automatically resize a row

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`AutoResizeDimensionsRequest`](../reference/rest/v4/spreadsheets/request.md#autoresizedimensionsrequest) to clear the row heights of the first three rows. The row heights then grow dynamically based on the content of the cells in each row. The `dimension` field indicates that the operation applies to the rows of the sheet.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "autoResizeDimensions": {
        "dimensions": {
          "sheetId": SHEET_ID,
          "dimension": "ROWS",
          "startIndex": 0,
          "endIndex": 3
        }
      }
    }
  ]
}
```

## Delete rows or columns

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`DeleteDimensionRequest`](../reference/rest/v4/spreadsheets/request.md#deletedimensionrequest) to delete the first three rows in a sheet. A second request deletes columns B:D. The `dimension` field determines whether the operation applies to the columns or rows of a sheet.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "deleteDimension": {
        "range": {
          "sheetId": SHEET_ID,
          "dimension": "ROWS",
          "startIndex": 0,
          "endIndex": 3
        }
      }
    },
    {
      "deleteDimension": {
        "range": {
          "sheetId": SHEET_ID,
          "dimension": "COLUMNS",
          "startIndex": 1,
          "endIndex": 4
        }
      }
    },
  ],
}
```

## Insert an empty row or column

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`InsertDimensionRequest`](../reference/rest/v4/spreadsheets/request.md#insertdimensionrequest) to insert columns or rows at a particular index (such as prepending empty rows at the top of a sheet). The first request inserts two empty columns at column C. A second request inserts three empty rows beginning at row 1.

The `dimension` field determines whether the operation applies to the columns or rows of a sheet.

If true, the `inheritFromBefore` field tells the Sheets API to give the new columns or rows the same properties as the previous row or column and if false, to inherit from the dimensions after the new columns or rows. `inheritFromBefore` cannot be true if inserting a row at row 1 or a column at column A.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "insertDimension": {
        "range": {
          "sheetId": SHEET_ID,
          "dimension": "COLUMNS",
          "startIndex": 2,
          "endIndex": 4
        },
        "inheritFromBefore": true
      }
    },
    {
      "insertDimension": {
        "range": {
          "sheetId": SHEET_ID,
          "dimension": "ROWS",
          "startIndex": 0,
          "endIndex": 3
        },
        "inheritFromBefore": false
      }
    },
  ],
}
```

## Move a row or column

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`MoveDimensionRequest`](../reference/rest/v4/spreadsheets/request.md#movedimensionrequest) to move column A to the column D position. A second request moves rows 5–10 to the row 20 position.

The `dimension` field determines whether the operation applies to the columns or rows of a sheet. The `destinationIndex` field determines where to move the source data using a zero-based start index.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "moveDimension": {
        "source": {
          "sheetId": SHEET_ID,
          "dimension": "COLUMNS",
          "startIndex": 0,
          "endIndex": 1
        },
        "destinationIndex": 3
      }
    },
    {
      "moveDimension": {
        "source": {
          "sheetId": SHEET_ID,
          "dimension": "ROWS",
          "startIndex": 4,
          "endIndex": 10
        },
        "destinationIndex": 19
      }
    },
  ],
}
```
