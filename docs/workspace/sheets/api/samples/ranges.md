---
source: https://developers.google.com/workspace/sheets/api/samples/ranges
root: workspace
fetched_at: 2026-04-23T15:31:37.476Z
---

# Named & protected ranges

The Google Sheets API lets you create, modify, and delete named or protected ranges. The examples on this page illustrate how you can achieve some common Sheets operations with the Sheets API.

These examples are presented in the form of HTTP requests to be language neutral. To learn how to implement a batch update in different languages using the Google API client libraries, see [Update spreadsheets](../guides/batchupdate.md#example).

In these examples, the placeholders `SPREADSHEET_ID` and `SHEET_ID` indicates where you would provide those IDs. You can find the [spreadsheet ID](../guides/concepts.md#spreadsheet) in the spreadsheet URL. You can get the [sheet ID](../guides/concepts.md#sheet) by using the [`spreadsheets.get`](../reference/rest/v4/spreadsheets/get.md) method. The ranges are specified using [A1 notation](../guides/concepts.md#cell). An example range is Sheet1!A1:D5.

Additionally, the placeholders `NAMED_RANGE_ID` and `PROTECTED_RANGE_ID` provide the IDs for the named and protected ranges. The `namedRangeId` and `protectedRangeId` are used when making requests to update or delete the associated ranges. The ID is returned in the response to a Sheets API request that creates a named or protected range. You can get the IDs of existing ranges with the [`spreadsheets.get`](../reference/rest/v4/spreadsheets/get.md) method, in the [`Spreadsheet`](../reference/rest/v4/spreadsheets.md#resource-spreadsheet) response body.

## Add named or protected ranges

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use 2 request objects. The first uses the [`AddNamedRangeRequest`](../reference/rest/v4/spreadsheets/request.md#addnamedrangerequest) to assign the range A1:E3 the name "Counts". The second uses the [`AddProtectedRangeRequest`](../reference/rest/v4/spreadsheets/request.md#addprotectedrangerequest) to attach a warning-level protection to the range A4:E4. This level protection still allows cells within the range to be edited, but prompts a warning before making the change.

These requests return an [`AddNamedRangeResponse`](../reference/rest/v4/spreadsheets/response.md#addnamedrangeresponse) and an [`AddProtectedRangeResponse`](../reference/rest/v4/spreadsheets/response.md#addprotectedrangeresponse), containing the range IDs and properties.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "addNamedRange": {
        "namedRange": {
          "name": "Counts",
          "range": {
            "sheetId": SHEET_ID,
            "startRowIndex": 0,
            "endRowIndex": 3,
            "startColumnIndex": 0,
            "endColumnIndex": 5,
          },
        }
      }
    },
    {
      "addProtectedRange": {
        "protectedRange": {
          "range": {
            "sheetId": SHEET_ID,
            "startRowIndex": 3,
            "endRowIndex": 4,
            "startColumnIndex": 0,
            "endColumnIndex": 5,
          },
          "description": "Protecting total row",
          "warningOnly": true
        }
      }
    }
  ]
}
```

## Delete named or protected ranges

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use 2 request objects. The first uses the [`DeleteNamedRangeRequest`](../reference/rest/v4/spreadsheets/request.md#deletenamedrangerequest) to delete an existing named range, using the `NAMED_RANGE_ID` from a previous API call. The second uses the [`DeleteProtectedRangeRequest`](../reference/rest/v4/spreadsheets/request.md#deleteprotectedrangerequest) to delete an existing range protection, using the `PROTECTED_RANGE_ID` from a previous API call.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "deleteNamedRange": {
          "namedRangeId": "NAMED_RANGE_ID",
      }
    },
    {
      "deleteProtectedRange": {
        "protectedRangeId": PROTECTED_RANGE_ID,
      }
    }
  ]
}
```

## Update named or protected ranges

The following [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) code sample shows how to use 2 request objects. The first uses the [`UpdateNamedRangeRequest`](../reference/rest/v4/spreadsheets/request.md#updatenamedrangerequest) to update the name of an existing named range to "InitialCounts", using the `NAMED_RANGE_ID` from a previous API call. The second uses the [`UpdateProtectedRangeRequest`](../reference/rest/v4/spreadsheets/request.md#updateprotectedrangerequest) to update an existing protected range so that it now protects the same named range. The [`Editors`](../reference/rest/v4/spreadsheets/sheets.md#Editors) method allows only the listed users to edit those cells. This request uses the `NAMED_RANGE_ID` and `PROTECTED_RANGE_ID` from previous API calls.

The request protocol is shown below.

```
POST https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID:batchUpdate
```

```
{
  "requests": [
    {
      "updateNamedRange": {
        "namedRange": {
          "namedRangeId": NAMED_RANGE_ID,
          "name": "InitialCounts",
        },
        "fields": "name",
      }
    },
    {
      "updateProtectedRange": {
        "protectedRange": {
          "protectedRangeId": PROTECTED_RANGE_ID,
          "namedRangeId": NAMED_RANGE_ID,
          "warningOnly": false,
          "editors": {
            "users": [
              "charlie@example.com",
              "sasha@example.com"
            ]
          }
        },
        "fields": "namedRangeId,warningOnly,editors"
      }
    }
  ]
}
```
