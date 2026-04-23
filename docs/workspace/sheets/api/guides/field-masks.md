---
source: https://developers.google.com/workspace/sheets/api/guides/field-masks
root: workspace
fetched_at: 2026-04-23T15:31:21.978Z
---

# Use field masks

Field masks are a way for API callers to list the fields that a request should return or update. Using a [FieldMask](https://protobuf.dev/reference/protobuf/google.protobuf/#field-mask) allows the API to avoid unnecessary work and improves performance. A field mask is used for both the read and update methods in the Google Sheets API.

## Read with a field mask

Spreadsheets can be large, and often you don't need every part of the [`Spreadsheet`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets#resource:-spreadsheet) resource returned by a read request. You can limit what's returned in a Sheets API response, using the `fields` URL parameter. For best performance, [explicitly list only the fields you need](https://developers.google.com/workspace/sheets/api/guides/performance#partial-response) in the reply.

The format of the fields parameter is the same as the [JSON encoding of a FieldMask](https://protobuf.dev/reference/protobuf/google.protobuf/#json-encoding-field-masks). Stated briefly, multiple different fields are comma-separated and subfields are dot-separated. Field names can be specified in **camelCase** or **separated\_by\_underscores**. For convenience, multiple subfields from the same type can be listed within parentheses.

The following [`spreadsheets.get`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/get) request example uses a field mask of `sheets.properties(sheetId,title,sheetType,gridProperties)` to fetch only the sheet ID, title, [`SheetType`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#SheetType), and [`GridProperties`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#GridProperties) of a [`SheetProperties`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#SheetProperties) object on all sheets in a spreadsheet:

```
GET https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId?fields=sheets.properties(sheetId,title,sheetType,gridProperties)
```

The response to this method call is a [`Spreadsheet`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets#resource:-spreadsheet) object containing the components requested in the field mask. Note that `sheetType=OBJECT` doesn't contain `gridProperties`:

```
{
  "sheets": [
    {
      "properties": {
        "sheetId": SHEET_ID,
        "title": "TITLE",
        "sheetType": "GRID",
        "gridProperties": {
          "rowCount": 1000,
          "columnCount": 25
        }
      }
    },
    {
      "properties": {
        "sheetId": SHEET_ID,
        "title": "TITLE",
        "sheetType": "OBJECT"
      }
    }
  ]
}
```

## Update with a field mask

Sometimes you need to update only certain fields in an object while leaving the other fields unchanged. Update requests inside a [`spreadsheets.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) operation use field masks to tell the API which fields are being changed. The update request ignores any fields that aren't specified in the field mask, leaving them with their current values.

You can also unset a field by not specifying it in the updated message, but adding the field to the mask. This clears whatever value the field previously had.

The syntax for update field masks is the same as read field masks.

The following example uses the [`AddSheetRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#addsheetrequest) to add a new sheet of type `Grid`, freeze the first row, and color the new sheet's tab red:

```
POST https://sheets.googleapis.com/v1/spreadsheets/spreadsheetId:batchUpdate
```

```
{
  "spreadsheetId": "SPREADSHEET_ID",
  "replies": [
    {
      "addSheet": {
        "properties": {
          "sheetId": SHEET_ID,
          "title": "TITLE",
          "index": 6,
          "sheetType": "GRID",
          "gridProperties": {
            "rowCount": 1000,
            "columnCount": 26,
            "frozenRowCount": 1
          },
          "tabColor": {
            "red": 0.003921569
          },
          "tabColorStyle": {
            "rgbColor": {
              "red": 0.003921569
            }
          }
        }
      }
    }
  ]
}
```
