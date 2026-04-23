---
source: https://developers.google.com/workspace/sheets/api/guides/tables
root: workspace
fetched_at: 2026-04-23T15:31:24.162Z
---

# Tables

This guide describes how and why to use the Google Sheets API to create tables in your spreadsheets.

## What is a table?

With tables, you can simplify data creation and reduce the need to repeatedly format, input, and update data by automatically applying format and structure to ranges of data.

Tables have many features, such as headers, footers, column types, filters, views, table references, and table names. See more in the [feature announcement](https://workspaceupdates.googleblog.com/2024/05/tables-in-google-sheets.html), and [learn about using tables in Sheets](https://support.google.com/docs/answer/14239833?hl).

You can use tables for tasks such as Project Tracking, Event Planning, and Inventory management.

## Add a table

To add a table, use the [batchUpdate](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) method, supplying an [addTable](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#addtablerequest) request. You use this request to add a table to the spreadsheet.

The following example creates a table named "Project Tracker" at the specified `range` with 2 set columns. A percent column in the first column and a dropdown column type in the second column.

```
{
  "addTable": {
    "table": {
      "name": "Project Tracker",
      "tableId": "123",
      "range": {
        "sheetId": 0,
        "startColumnIndex": 0,
        "endColumnIndex": 5,
        "startRowIndex": 0,
        "endRowIndex": 5,
      },
      "columnProperties": [
        {
          "columnIndex": 0,
          "columnName": "Column 1",
          "columnType": "PERCENT"
        },
        {
          "columnIndex": 1,
          "columnName": "Column 2",
          "columnType": "DROPDOWN",
          "dataValidationRule": {
            "condition": {
              "type": "ONE_OF_LIST",
              "values": [
                {
                  "userEnteredValue": "Not Started"
                },
                {
                  "userEnteredValue": "In Progress"
                },
                {
                  "userEnteredValue": "Complete"
                }
              ]
            }
          }
        }
      ],
    }
  }
}
```

## Column types

Tables have [column types](https://support.google.com/docs/answer/14239833?hl#zippy=%2Ccreate-table-names%2Cset-column-types) such as numeric, date, dropdown, smart chip, checkbox. The rating and checkbox column types populate with default values of 0 and FALSE respectively.

### Dropdown column type

The dropdown column type creates a chip dropdown. If a column type is set as dropdown, the `dataValidationRule` for the column must be set with a ONE\_OF\_LIST condition. Other column types shouldn't set the \`dataValidationRule field.

## Update a table

Use the [`spreadsheets.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) method and supply an [UpdateTableRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#updatetablerequest).

### Modify the table size

Use the [UpdateTableRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#updatetablerequest) method to modify the `range` that the table has to add new rows/columns.

If you need to add a new row or column within the table, use the [InsertRangeRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#insertrangerequest) or the [InsertDimensionRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#insertdimensionrequest)

If you need to delete a table row you can use [DeleteRangeRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#deleterangerequest) otherwise you can use [DeleteDimensionRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#deletedimensionrequest) to delete an entire row from the spreadsheet.

### Toggle the table footer

If you're updating an existing table without a footer to add a footer, the `range` expands by 1 row. If you're updating an existing table with a footer and removing the footer, the `range` shrinks by 1 row.

## Append values to a table

Use [AppendCellsRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#appendcellsrequest) with `tableId` to add rows to the end of a table. This appends the values to the first free row and is aware of full rows and footers. If there are no empty rows, this inserts rows to the end of the table and before any footer, if applicable.

## Delete a table

Use the [`spreadsheets.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) method and supply a [DeleteTableRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#deletetablerequest). Use the [DeleteTableRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#deletetablerequest) to delete the entire table and the contents of the table.

Use the [DeleteBandingRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#deletebandingrequest) to remove the table formatting but keep the data.

## Use tables with other Sheets features

Other API features that support tables being their backing data include [filters](https://developers.google.com/workspace/sheets/api/guides/filters#basic-filter), [filter views](https://developers.google.com/workspace/sheets/api/guides/filters#filter-views), and [protected ranges](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#protectedrange).
