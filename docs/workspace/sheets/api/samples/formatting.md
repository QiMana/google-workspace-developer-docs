---
source: https://developers.google.com/workspace/sheets/api/samples/formatting
root: workspace
fetched_at: 2026-04-23T15:31:37.018Z
---

# Basic formatting

You can update the formatting of cells and ranges within spreadsheets using the Google Sheets API. The examples on this page illustrate how some common formatting operations can be achieved with the Sheets API. You can find more conditional formatting examples in the [Conditional formatting](./conditional-formatting.md) recipe page.

When updating a spreadsheet, some kinds of requests might return responses. These are returned in an array, with each response occupying the same index as the corresponding request. Some requests don't have responses and for those the response is empty. The response structure for these examples can be found under [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md#response-body).

These examples are presented in the form of HTTP requests to be language neutral. To learn how to implement a batch update in different languages using the Google API client libraries, see [Update spreadsheets](../guides/batchupdate.md#example).

In these examples, the placeholders SPREADSHEET\_ID and SHEET\_ID indicates where you would provide those IDs. You can find the [spreadsheet ID](../guides/concepts.md#spreadsheet) in the spreadsheet URL. You can get the [sheet ID](../guides/concepts.md#sheet) by using the [`spreadsheets.get`](../reference/rest/v4/spreadsheets/get.md) method. The ranges are specified using [A1 notation](../guides/concepts.md#cell). An example range is Sheet1!A1:D5.

In the above video, you learn how to format spreadsheet cells in various ways, including: creating frozen rows, bolding cells, implementing currency formatting, performing cell validation, and restricting cell values.

## Edit cell borders

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`UpdateBordersRequest`](../reference/rest/v4/spreadsheets/request.md#updatebordersrequest) to give each cell in the A1:F10 range a dashed, blue top and bottom border. The `innerHorizontal` field creates horizontal borders on the interior of the range. Omitting the field would result in borders only being added to the top and bottom of the entire range.

![3 by 3 table with each cell having a dashed, blue top and bottom border.](https://developers.google.com/static/workspace/sheets/images/devsite-sheets-api-formatting-samples-1.svg)

Figure 1. Format each cell with a dashed, blue top and bottom border in a sheet.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "updateBorders": {
        "range": {
          "sheetId": SHEET_ID,
          "startRowIndex": 0,
          "endRowIndex": 10,
          "startColumnIndex": 0,
          "endColumnIndex": 6
        },
        "top": {
          "style": "DASHED",
          "width": 1,
          "color": {
            "blue": 1.0
          },
        },
        "bottom": {
          "style": "DASHED",
          "width": 1,
          "color": {
            "blue": 1.0
          },
        },
        "innerHorizontal": {
          "style": "DASHED",
          "width": 1,
          "color": {
            "blue": 1.0
          },
        },
      }
    }
  ]
}
```

## Format a header row

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`RepeatCellRequest`](../reference/rest/v4/spreadsheets/request.md#repeatcellrequest) to format a header row in a sheet. The first request updates the text color, the background color, the text font size, and the text justification and makes the text bold. Omitting the column indices in the `range` field causes the entire row to be formatted. The second request adjusts the sheet properties so that the header row is frozen.

![3 by 3 table with a formatted header row in a sheet.](https://developers.google.com/static/workspace/sheets/images/devsite-sheets-api-formatting-samples-2.svg)

Figure 2. Format the header row in a sheet.

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
          "endRowIndex": 1
        },
        "cell": {
          "userEnteredFormat": {
            "backgroundColor": {
              "red": 0.0,
              "green": 0.0,
              "blue": 0.0
            },
            "horizontalAlignment" : "CENTER",
            "textFormat": {
              "foregroundColor": {
                "red": 1.0,
                "green": 1.0,
                "blue": 1.0
              },
              "fontSize": 12,
              "bold": true
            }
          }
        },
        "fields": "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)"
      }
    },
    {
      "updateSheetProperties": {
        "properties": {
          "sheetId": SHEET_ID,
          "gridProperties": {
            "frozenRowCount": 1
          }
        },
        "fields": "gridProperties.frozenRowCount"
      }
    }
  ]
}
```

## Merge cells

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`MergeCellsRequest`](../reference/rest/v4/spreadsheets/request.md#mergecellsrequest) to merge cells. The first request merges the A1:B2 range into a single cell. The second request merges the columns in A3:B6, while leaving the rows separated.

![3 by 3 table with merged cells in a sheet.](https://developers.google.com/static/workspace/sheets/images/devsite-sheets-api-formatting-samples-3.svg)

Figure 3. Merge cells in a sheet.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "mergeCells": {
        "range": {
          "sheetId": SHEET_ID,
          "startRowIndex": 0,
          "endRowIndex": 2,
          "startColumnIndex": 0,
          "endColumnIndex": 2
        },
        "mergeType": "MERGE_ALL"
      }
    },
    {
      "mergeCells": {
        "range": {
          "sheetId": SHEET_ID,
          "startRowIndex": 2,
          "endRowIndex": 6,
          "startColumnIndex": 0,
          "endColumnIndex": 2
        },
        "mergeType": "MERGE_COLUMNS"
      }
    },
  ]
}
```

## Set a custom datetime or decimal format for a range

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use the [`RepeatCellRequest`](../reference/rest/v4/spreadsheets/request.md#repeatcellrequest) to update cells to have custom datetime and number formats. The first request gives the cells in the range A1:A10 the custom datetime format `hh:mm:ss am/pm, ddd mmm dd yyyy`. An example datetime in this format is: "02:05:07 PM, Sun Apr 03 2016".

The second request gives the cells in B1:B10 the custom number format `#,##0.0000`, which indicates that numbers should be grouped with comma separators, that there should be 4 digits after the decimal, and that all but one leading zero should be dropped. For example, the number "3.14" is rendered as "3.1400", while "12345.12345" is rendered as "12,345.1235".

For more information, see [Date and number formats](../guides/formats.md).

![3 by 3 table with custom datetime and number formats in a sheet.](https://developers.google.com/static/workspace/sheets/images/devsite-sheets-api-formatting-samples-4.svg)

Figure 4. Update cells to have custom datetime and number formats in a sheet.

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
          "startColumnIndex": 0,
          "endColumnIndex": 1
        },
        "cell": {
          "userEnteredFormat": {
            "numberFormat": {
              "type": "DATE",
              "pattern": "hh:mm:ss am/pm, ddd mmm dd yyyy"
            }
          }
        },
        "fields": "userEnteredFormat.numberFormat"
      }
    },
    {
      "repeatCell": {
        "range": {
          "sheetId": SHEET_ID,
          "startRowIndex": 0,
          "endRowIndex": 10,
          "startColumnIndex": 1,
          "endColumnIndex": 2
        },
        "cell": {
          "userEnteredFormat": {
            "numberFormat": {
              "type": "NUMBER",
              "pattern": "#,##0.0000"
            }
          }
        },
        "fields": "userEnteredFormat.numberFormat"
      }
    }
  ]
}
```
