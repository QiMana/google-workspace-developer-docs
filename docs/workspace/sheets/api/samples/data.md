---
source: https://developers.google.com/workspace/sheets/api/samples/data
root: workspace
fetched_at: 2026-04-23T15:31:38.327Z
---

# Data operations

The Google Sheets API lets you manipulate data within spreadsheets in various ways. Most functionality that's available to users working with the Sheets UI is also possible to do with the Sheets API. The examples on this page illustrate how you can achieve some common spreadsheet operations with the Sheets API.

These examples are presented in the form of HTTP requests to be language neutral. To learn how to implement a batch update in different languages using the Google API client libraries, see [Update spreadsheets](../guides/batchupdate.md#example).

In these examples, the placeholders `SPREADSHEET_ID` and `SHEET_ID` indicates where you would provide those IDs. You can find the [spreadsheet ID](../guides/concepts.md#spreadsheet) in the spreadsheet URL. You can get the [sheet ID](../guides/concepts.md#sheet) by using the [`spreadsheets.get`](../reference/rest/v4/spreadsheets/get.md) method. The ranges are specified using [A1 notation](../guides/concepts.md#cell). An example range is Sheet1!A1:D5.

## Apply data validation to a range

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`SetDataValidationRequest`](../reference/rest/v4/spreadsheets/request.md#setdatavalidationrequest) to apply a data validation rule, where "value > 5", to every cell in the range A1:D10.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "setDataValidation": {
        "range": {
          "sheetId": SHEET_ID,
          "startRowIndex": 0,
          "endRowIndex": 10,
          "startColumnIndex": 0,
          "endColumnIndex": 4
        },
        "rule": {
          "condition": {
            "type": "NUMBER_GREATER",
            "values": [
              {
                "userEnteredValue": "5"
              }
            ]
          },
          "inputMessage": "Value must be > 5",
          "strict": true
        }
      }
    }
  ]
}
```

## Copy & paste cell formatting

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`CopyPasteRequest`](../reference/rest/v4/spreadsheets/request.md#copypasterequest) to copy the formatting only in the range A1:D10 and paste it to the F1:I10 range in the same sheet. The method uses the [`PasteType`](../reference/rest/v4/spreadsheets/request.md#pastetype) enum with `PASTE_FORMAT` to paste the formatting and data validation only. The original values in A1:D10 remain unchanged.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "copyPaste": {
        "source": {
          "sheetId": SHEET_ID,
          "startRowIndex": 0,
          "endRowIndex": 10,
          "startColumnIndex": 0,
          "endColumnIndex": 4
        },
        "destination": {
          "sheetId": SHEET_ID,
          "startRowIndex": 0,
          "endRowIndex": 10,
          "startColumnIndex": 5,
          "endColumnIndex": 9
        },
        "pasteType": "PASTE_FORMAT",
        "pasteOrientation": "NORMAL"
      }
    }
  ]
}
```

## Cut & paste cells

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`CutPasteRequest`](../reference/rest/v4/spreadsheets/request.md#cutpasterequest). It cuts the range A1:D10 and uses the [`PasteType`](../reference/rest/v4/spreadsheets/request.md#pastetype) enum with `PASTE_NORMAL` to paste its values, formulas, formatting, and merges to the F1:I10 range in the same sheet. The original source range cell contents are removed.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "cutPaste": {
        "source": {
          "sheetId": SHEET_ID,
          "startRowIndex": 0,
          "endRowIndex": 10,
          "startColumnIndex": 0,
          "endColumnIndex": 4
        },
        "destination": {
          "sheetId": SHEET_ID,
          "rowIndex": 0,
          "columnIndex": 5
        },
        "pasteType": "PASTE_NORMAL"
      }
    }
  ]
}
```

## Repeat a formula over a range

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`RepeatCellRequest`](../reference/rest/v4/spreadsheets/request.md#repeatcellrequest) to copy the formula `=FLOOR(A1*PI())` to the range B1:D10. The formula's range automatically increments for each row and column in the range, starting with the upper left cell. For example, cell B1 has the formula `=FLOOR(A1*PI())`, while cell D6 has the formula `=FLOOR(C6*PI())`.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "repeatCell": {
        "range": {
          "sheetId": SHEET_ID,
          "startRowIndex": 0,
          "endRowIndex": 10,
          "startColumnIndex": 1,
          "endColumnIndex": 4
        },
        "cell": {
          "userEnteredValue": {
              "formulaValue": "=FLOOR(A1*PI())"
          }
        },
        "fields": "userEnteredValue"
      }
    }
  ]
}
```

## Sort a range with multiple sorting specifications

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`SortRangeRequest`](../reference/rest/v4/spreadsheets/request.md#sortrangerequest) to sort the range A1:D10, first by column B in ascending order, then by column C in descending order, then by column D in descending order.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "sortRange": {
        "range": {
          "sheetId": SHEET_ID,
          "startRowIndex": 0,
          "endRowIndex": 10,
          "startColumnIndex": 0,
          "endColumnIndex": 4
        },
        "sortSpecs": [
          {
            "dimensionIndex": 1,
            "sortOrder": "ASCENDING"
          },
          {
            "dimensionIndex": 2,
            "sortOrder": "DESCENDING"
          },
          {
            "dimensionIndex": 3,
            "sortOrder": "DESCENDING"
          }
        ]
      }
    }
  ]
}
```
