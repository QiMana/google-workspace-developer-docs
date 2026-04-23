---
source: https://developers.google.com/workspace/sheets/api/guides/batch
root: workspace
fetched_at: 2026-04-23T15:31:13.890Z
---

# Batch requests

This document shows how to batch API calls together to reduce the number of connections your client has to make. Batching can improve an application's efficiency by decreasing network round trips and increasing throughput.

## Overview

Each connection your client makes results in a certain amount of overhead. The Google Sheets API supports batching to let your client place multiple request objects, each one specifying a single type of request to perform, into a single batch request. A batch request can boost performance by combining multiple subrequests into a single call to the server, retrieving a single response back.

We encourage users to always batch multiple requests together. Here are some examples of situations where you can use batching:

- You've just started using the API and you have lots of data to upload.
- You need to update metadata or properties, such as formatting, on multiple objects.
- You need to delete many objects.

## Limits, authorization, & dependency considerations

Here’s a list of other items to consider when employing batch updating:

- Each batch request, including all subrequests, is counted as one API request toward your [usage limit](https://developers.google.com/workspace/sheets/api/limits).
- A batch request is authenticated once. This single authentication applies to all batch update objects in the request.
- The server processes the subrequests in the same order they appear in the batch request. Latter subrequests can depend on actions taken during earlier subrequests. For example, in the same batch request, users can insert text into an existing document and then style it.

## Batch details

A batch request consists of one `batchUpdate` method call with multiple subrequests to, for example, add and then format a spreadsheet.

Each request is validated before being applied. All subrequests in the batch update are applied atomically. That is, if any request is not valid then the entire update is unsuccessful and none of the (potentially dependent) changes are applied.

Some requests provide responses with information about the applied requests. For example, all batch update requests to add objects return responses so you can access the metadata of the newly added object, such as the ID or title.

With this approach, you can build an entire Google document using one API batch update request with multiple subrequests.

### Format of a batch request

A [request](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request) is a single JSON request containing multiple, nested subrequests with one required property: `requests`. The requests are constructed in an array of individual requests. Each request uses JSON to represent the request object and to contain its properties.

### Format of a batch response

The [response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/response) format for a batch request is similar to the request format. The server's response contains a complete reply of the single response object.

The main JSON object’s property is named `replies`. The responses are returned in an array, with each response to one of the requests occupying the same index order as the corresponding request. Some requests don't have responses and the response at that array index is empty.

## Example

The following example shows the use of batching with the Sheets API.

### Request

This example batch request demonstrates how to:

- Add a [sheet](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets) to an existing spreadsheet, with a `sheetId` of 12345, using the [`AddSheetRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#addsheetrequest).
- Add data to the new sheet, starting with cell A1, using the [`UpdateCellsRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatecellsrequest).
- Add a `namedRange` or [filter view](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#filterview) to the new sheet.

By adding the sheet ID in the request, users can use the sheet ID for other subrequests in the same API call. This improves performance by avoiding a write-read-write cycle.

For a list of batch update request types, grouped into different categories, see the table under [Batch update operations](https://developers.google.com/workspace/sheets/api/guides/batchupdate#batch_update_operations).

```
{
   "requests":[
      {
         "addSheet":{
            "properties":{
               "sheetId":123456
            }
         }
      },
      {
         "updateCells":{
            "start":{
               "sheetId":123456
            },
            "rows":[
               {
                  "values":[
                     {
                        "userEnteredValue":{
                           "stringValue":"hello"
                        }
                     }
                  ]
               },
               {
                  "values":[
                     {
                        "userEnteredValue":{
                           "stringValue":"world"
                        }
                     }
                  ]
               }
            ],
            "fields":"userEnteredValue"
         }
      },
      {
         "addNamedRange":{
            "namedRange":{
               "name":"newRange",
               "range":{
                  "sheetId":123456,
                  "endRowIndex":2
               }
            }
         }
      }
   ]
}
```

### Response

This example batch response displays information on how each subrequest within the batch request was applied. Note the [`UpdateCellsRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatecellsrequest) doesn't contain a response so the index value of the array at `[1]` consists of empty curly braces.

```
"replies":[
   {
      "addSheet":{
         "properties":{
            "sheetId":123456,
            "title":"Sheet3",
            "index":2,
            "sheetType":"GRID",
            "gridProperties":{
               "rowCount":1000,
               "columnCount":26
            }
         }
      }
   },
   {
      
   },
   {
      "addNamedRange":{
         "namedRange":{
            "namedRangeId":"2104325079",
            "name":"newRange",
            "range":{
               "sheetId":123456,
               "startRowIndex":0,
               "endRowIndex":2,
               "startColumnIndex":0,
               "endColumnIndex":26
            }
         }
      }
   }
]
```
