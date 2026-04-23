---
source: https://developers.google.com/workspace/sheets/api/guides/pivot-tables
root: workspace
fetched_at: 2026-04-23T15:31:25.154Z
---

# Pivot tables

This guide describes how and why to use the Google Sheets API to create pivot tables in your spreadsheets.

## What is a pivot table?

Pivot tables provide a way to summarize data in your spreadsheet, automatically aggregating, sorting, counting, or averaging the data while displaying the summarized results in a new table. A pivot table acts as a sort of query against a source dataset. This source data exists at some other location in the spreadsheet, and the pivot table presents a processed view of the data.

For example, consider the following sales dataset:

|  | A | B | C | D | E | F | G |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Item Category | Model Number | Cost | Quantity | Region | Salesperson | Ship Date |
| 2 | Wheel | W-24 | $20.50 | 4 | West | Beth | 3/1/2016 |
| 3 | Door | D-01X | $15.00 | 2 | South | Amir | 3/15/2016 |
| 4 | Engine | ENG-0134 | $100.00 | 1 | North | Carmen | 3/20/2016 |
| 5 | Frame | FR-0B1 | $34.00 | 8 | East | Hannah | 3/12/2016 |
| 6 | Panel | P-034 | $6.00 | 4 | North | Devyn | 4/2/2016 |
| 7 | Panel | P-052 | $11.50 | 7 | East | Erik | 5/16/2016 |
| 8 | Wheel | W-24 | $20.50 | 11 | South | Sheldon | 4/30/2016 |
| 9 | Engine | ENG-0161 | $330.00 | 2 | North | Jessie | 7/2/2016 |
| 10 | Door | D-01Y | $29.00 | 6 | West | Armando | 3/13/2016 |
| 11 | Frame | FR-0B1 | $34.00 | 9 | South | Yuliana | 2/27/2016 |
| 12 | Panel | P-102 | $3.00 | 15 | West | Carmen | 4/18/2016 |
| 13 | Panel | P-105 | $8.25 | 13 | West | Jessie | 6/20/2016 |
| 14 | Engine | ENG-0211 | $283.00 | 1 | North | Amir | 6/21/2016 |
| 15 | Door | D-01X | $15.00 | 2 | West | Armando | 7/3/2016 |
| 16 | Frame | FR-0B1 | $34.00 | 6 | South | Carmen | 7/15/2016 |
| 17 | Wheel | W-25 | $20.00 | 8 | South | Hannah | 5/2/2016 |
| 18 | Wheel | W-11 | $29.00 | 13 | East | Erik | 5/19/2016 |
| 19 | Door | D-05 | $17.70 | 7 | West | Beth | 6/28/2016 |
| 20 | Frame | FR-0B1 | $34.00 | 8 | North | Sheldon | 3/30/2016 |

You could use a pivot table to create a report showing how many of each model number were sold in each region:

![screenshot of a pivot table showing count of model number by region](https://developers.google.com/static/workspace/sheets/images/ptable-result.png)

For the source code used to generate this pivot table, see the [Example](#example) section below.

Once a pivot table is placed in a spreadsheet, users can interactively change the summary's structure and details using the Sheets UI.

## Working with pivot tables

A pivot table definition is associated with a single cell on a sheet. Although its rendered appearance is many cells in both height and width, programmatically it's located at a single cell coordinate. This cell becomes the top-left corner of the rendered pivot table, with its horizontal and vertical extent determined by its definition.

### Adding a pivot table

To add a pivot table, use the [batchUpdate](../reference/rest/v4/spreadsheets/batchUpdate.md) method, supplying an [updateCells](../reference/rest/v4/spreadsheets/request.md#updatecellsrequest) request. You use this request to supply a [PivotTable](../reference/rest/v4/spreadsheets/pivot-tables.md#PivotTable) definition as the content of a cell as shown below:

```
{
  "updateCells": {
    "rows": {
      "values": [
        {
          "pivotTable": "MyPivotTable"
        }
      ],
      "start": {
        "sheetId": "sheetId",
        "rowIndex": 0,
        "columnIndex": 0
      },
      "fields": "pivotTable"
    }
  }
}
```

This places the pivot table described by `MyPivotTable` on the specified sheet, with the top-left corner at cell `A1`. (The height and width of the pivot table are dynamic; you specify only the origin.)

The [PivotTable](../reference/rest/v4/spreadsheets/pivot-tables.md#PivotTable) type lets you specify:

- Source data range
- One or more fields whose data will form the rows of the pivot table
- One or more fields whose data will form the columns of the pivot table
- Filtering and aggregation criteria
- Pivot table layout

### Modifying and deleting pivot tables

There are no explicit requests to modify or delete a pivot table. Instead, use an [updateCells](../reference/rest/v4/spreadsheets/request.md#updatecellsrequest) request with different cell contents:

- To modify a pivot table, create a modified [PivotTable](../reference/rest/v4/spreadsheets/pivot-tables.md#PivotTable) definition and update the cell using it, similar to adding a new pivot table.
- To delete a pivot table, update the cell with empty values. For an example, see the [Delete a pivot table](../samples/pivot-tables.md#delete_a_pivot_table) sample.

## Use cases

There are many different uses for pivot tables, across a broad range of areas including statistical analysis, ERP applications, financial reporting, and others. Classic pivot table use cases include items like:

- Total sales by region and quarter
- Average salary by title and location
- Count of incidents by product and time of day

The number of potential applications of pivot tables is vast, and the ability to generate them *programmatically* is powerful. You can generate pivot tables that support interactive exploration but are tailored to specific circumstances, for example:

- Explore incident data for the most recent 24-hour period
- View or analyze aggregated data corresponding to the selected account
- Examine sales data for territories belonging to the current user

## Example

This example creates a pivot table from a dataset to produce the "model number by region" report shown in the introduction of this page. For additional examples, see the [pivot table sample](../samples/pivot-tables.md) page.

### Apps Script

```
/**
 * Create pivot table
 * @param {string} spreadsheetId spreadsheet ID
 * @returns {*} pivot table's spreadsheet
 */
Snippets.prototype.pivotTable = (spreadsheetId) => {
  try {
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);

    // Create two sheets for our pivot table, assume we have one.
    const sheet = spreadsheet.getSheets()[0];
    sheet.copyTo(spreadsheet);

    const sourceSheetId = spreadsheet.getSheets()[0].getSheetId();
    const targetSheetId = spreadsheet.getSheets()[1].getSheetId();

    // Create pivot table
    const pivotTable = Sheets.newPivotTable();

    const gridRange = Sheets.newGridRange();
    gridRange.sheetId = sourceSheetId;
    gridRange.startRowIndex = 0;
    gridRange.startColumnIndex = 0;
    gridRange.endRowIndex = 20;
    gridRange.endColumnIndex = 7;
    pivotTable.source = gridRange;

    const pivotRows = Sheets.newPivotGroup();
    pivotRows.sourceColumnOffset = 1;
    pivotRows.showTotals = true;
    pivotRows.sortOrder = "ASCENDING";
    pivotTable.rows = pivotRows;

    const pivotColumns = Sheets.newPivotGroup();
    pivotColumns.sourceColumnOffset = 4;
    pivotColumns.sortOrder = "ASCENDING";
    pivotColumns.showTotals = true;
    pivotTable.columns = pivotColumns;

    const pivotValue = Sheets.newPivotValue();
    pivotValue.summarizeFunction = "COUNTA";
    pivotValue.sourceColumnOffset = 4;
    pivotTable.values = [pivotValue];

    // Create other metadata for the updateCellsRequest
    const cellData = Sheets.newCellData();
    cellData.pivotTable = pivotTable;

    const rows = Sheets.newRowData();
    rows.values = cellData;

    const start = Sheets.newGridCoordinate();
    start.sheetId = targetSheetId;
    start.rowIndex = 0;
    start.columnIndex = 0;

    const updateCellsRequest = Sheets.newUpdateCellsRequest();
    updateCellsRequest.rows = rows;
    updateCellsRequest.start = start;
    updateCellsRequest.fields = "pivotTable";

    // Batch update our spreadsheet
    const batchUpdate = Sheets.newBatchUpdateSpreadsheetRequest();
    const updateCellsRawRequest = Sheets.newRequest();
    updateCellsRawRequest.updateCells = updateCellsRequest;
    batchUpdate.requests = [updateCellsRawRequest];
    const response = Sheets.Spreadsheets.batchUpdate(
      batchUpdate,
      spreadsheetId,
    );

    return response;
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log("Failed with error %s", err.message);
  }
};
```

### Java

```
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsScopes;
import com.google.api.services.sheets.v4.model.AddSheetRequest;
import com.google.api.services.sheets.v4.model.BatchUpdateSpreadsheetRequest;
import com.google.api.services.sheets.v4.model.BatchUpdateSpreadsheetResponse;
import com.google.api.services.sheets.v4.model.CellData;
import com.google.api.services.sheets.v4.model.GridCoordinate;
import com.google.api.services.sheets.v4.model.GridRange;
import com.google.api.services.sheets.v4.model.PivotGroup;
import com.google.api.services.sheets.v4.model.PivotTable;
import com.google.api.services.sheets.v4.model.PivotValue;
import com.google.api.services.sheets.v4.model.Request;
import com.google.api.services.sheets.v4.model.RowData;
import com.google.api.services.sheets.v4.model.UpdateCellsRequest;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.common.collect.Lists;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/* Class to demonstrate the use of Spreadsheet Create Pivot Tables API */
public class PivotTables {
  /**
   * Create pivot table.
   *
   * @param spreadsheetId - Id of the spreadsheet.
   * @return pivot table's spreadsheet
   * @throws IOException - if credentials file not found.
   */
  public static BatchUpdateSpreadsheetResponse pivotTables(String spreadsheetId)
      throws IOException {
        /* Load pre-authorized user credentials from the environment.
           TODO(developer) - See https://developers.google.com/identity for
            guides on implementing OAuth2 for your application. */
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(Collections.singleton(SheetsScopes.SPREADSHEETS));
    HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(
        credentials);

    // Create the sheets API client
    Sheets service = new Sheets.Builder(new NetHttpTransport(),
        GsonFactory.getDefaultInstance(),
        requestInitializer)
        .setApplicationName("Sheets samples")
        .build();

    // Create two sheets for our pivot table.
    List<Request> sheetsRequests = new ArrayList<>();
    BatchUpdateSpreadsheetResponse result = null;
    try {
      sheetsRequests.add(new Request().setAddSheet(new AddSheetRequest()));
      sheetsRequests.add(new Request().setAddSheet(new AddSheetRequest()));

      BatchUpdateSpreadsheetRequest createSheetsBody = new BatchUpdateSpreadsheetRequest()
          .setRequests(sheetsRequests);
      BatchUpdateSpreadsheetResponse createSheetsResponse = service.spreadsheets()
          .batchUpdate(spreadsheetId, createSheetsBody).execute();
      int sourceSheetId = createSheetsResponse.getReplies().get(0).getAddSheet().getProperties()
          .getSheetId();
      int targetSheetId = createSheetsResponse.getReplies().get(1).getAddSheet().getProperties()
          .getSheetId();

      PivotTable pivotTable = new PivotTable()
          .setSource(
              new GridRange()
                  .setSheetId(sourceSheetId)
                  .setStartRowIndex(0)
                  .setStartColumnIndex(0)
                  .setEndRowIndex(20)
                  .setEndColumnIndex(7)
          )
          .setRows(Collections.singletonList(
              new PivotGroup()
                  .setSourceColumnOffset(1)
                  .setShowTotals(true)
                  .setSortOrder("ASCENDING")
          ))
          .setColumns(Collections.singletonList(
              new PivotGroup()
                  .setSourceColumnOffset(4)
                  .setShowTotals(true)
                  .setSortOrder("ASCENDING")
          ))
          .setValues(Collections.singletonList(
              new PivotValue()
                  .setSummarizeFunction("COUNTA")
                  .setSourceColumnOffset(4)
          ));
      List<Request> requests = Lists.newArrayList();
      Request updateCellsRequest = new Request().setUpdateCells(new UpdateCellsRequest()
          .setFields("*")
          .setRows(Collections.singletonList(
              new RowData().setValues(
                  Collections.singletonList(
                      new CellData().setPivotTable(pivotTable))
              )
          ))
          .setStart(new GridCoordinate()
              .setSheetId(targetSheetId)
              .setRowIndex(0)
              .setColumnIndex(0)

          ));

      requests.add(updateCellsRequest);
      BatchUpdateSpreadsheetRequest updateCellsBody = new BatchUpdateSpreadsheetRequest()
          .setRequests(requests);
      result = service.spreadsheets().batchUpdate(spreadsheetId, updateCellsBody).execute();
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 404) {
        System.out.printf("Spreadsheet not found with id '%s'.\n", spreadsheetId);
      } else {
        throw e;
      }
    }
    return result;
  }
}
```

### JavaScript

```
function pivotTable(spreadsheetId, callback) {
  // Create two sheets for our pivot table
  const requests = [{
    addSheet: {},
  }, {
    addSheet: {},
  }];
  const batchUpdateRequest = {requests: requests};
  try {
    gapi.client.sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: batchUpdateRequest,
    }).then((response) => {
      const sourceSheetId = response.result.replies[0].addSheet.properties.sheetId;
      const targetSheetId = response.result.replies[1].addSheet.properties.sheetId;

      const requests = [{
        updateCells: {
          rows: {
            values: [{
              pivotTable: {
                source: {
                  sheetId: sourceSheetId,
                  startRowIndex: 0,
                  startColumnIndex: 0,
                  endRowIndex: 20,
                  endColumnIndex: 7,
                },
                rows: [{
                  sourceColumnOffset: 1,
                  showTotals: true,
                  sortOrder: 'ASCENDING',
                }],
                columns: [{
                  sourceColumnOffset: 4,
                  sortOrder: 'ASCENDING',
                  showTotals: true,
                }],
                values: [{
                  summarizeFunction: 'COUNTA',
                  sourceColumnOffset: 4,
                }],
                valueLayout: 'HORIZONTAL',
              },
            },
            ],
          },
          start: {
            sheetId: targetSheetId,
            rowIndex: 0,
            columnIndex: 0,
          },
          fields: 'pivotTable',
        },
      }];

      const body = {
        requests,
      };
      gapi.client.sheets.spreadsheets.batchUpdate({
        spreadsheetId: spreadsheetId,
        resource: body,
      }).then((response) => {
        if (callback) callback(response);
      });
    });
  } catch (err) {
    document.getElementById('content').innerText = err.message;
    return;
  }
}
```

### Node.js

```
import {GoogleAuth} from 'google-auth-library';
import {google} from 'googleapis';

/**
 * Creates a pivot table in a spreadsheet.
 * @param {string} spreadsheetId The ID of the spreadsheet.
 * @return {Promise<object>} The response from the batch update.
 */
async function pivotTable(spreadsheetId) {
  // Authenticate with Google and get an authorized client.
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  const service = google.sheets({version: 'v4', auth});

  // Create two new sheets for the pivot table.
  // One for the source data and one for the pivot table itself.
  let requests = [
    {
      addSheet: {},
    },
    {
      addSheet: {},
    },
  ];
  let resource = {requests};
  let response = await service.spreadsheets.batchUpdate({
    spreadsheetId,
    resource,
  });

  // Get the IDs of the newly created sheets.
  const sourceSheetId = response.data.replies[0].addSheet.properties.sheetId;
  const targetSheetId = response.data.replies[1].addSheet.properties.sheetId;

  // Add a pivot table to the new sheet.
  requests = [
    {
      updateCells: {
        rows: {
          values: [
            {
              pivotTable: {
                // The source data for the pivot table.
                source: {
                  sheetId: sourceSheetId,
                  startRowIndex: 0,
                  startColumnIndex: 0,
                  endRowIndex: 20,
                  endColumnIndex: 7,
                },
                // The rows of the pivot table.
                rows: [
                  {
                    sourceColumnOffset: 1,
                    showTotals: true,
                    sortOrder: 'ASCENDING',
                  },
                ],
                // The columns of the pivot table.
                columns: [
                  {
                    sourceColumnOffset: 4,
                    sortOrder: 'ASCENDING',
                    showTotals: true,
                  },
                ],
                // The values to display in the pivot table.
                values: [
                  {
                    summarizeFunction: 'COUNTA',
                    sourceColumnOffset: 4,
                  },
                ],
                valueLayout: 'HORIZONTAL',
              },
            },
          ],
        },
        // The location to place the pivot table.
        start: {
          sheetId: targetSheetId,
          rowIndex: 0,
          columnIndex: 0,
        },
        fields: 'pivotTable',
      },
    },
  ];
  resource = {
    requests,
  };

  // Send the batch update request to create the pivot table.
  response = service.spreadsheets.batchUpdate({
    spreadsheetId,
    resource,
  });
  return response;
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Drive;
use Google\Service\Sheets\BatchUpdateSpreadsheetRequest;

function pivotTables($spreadsheetId)
    {
        /* Load pre-authorized user credentials from the environment.
           TODO(developer) - See https://developers.google.com/identity for
            guides on implementing OAuth2 for your application. */
        $client = new Google\Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Google\Service\Drive::DRIVE);
        $service = new Google_Service_Sheets($client);
        try{
            $requests = [
                new Google_Service_Sheets_Request([
                    'addSheet' => [
                        'properties' => [
                            'title' => 'Sheet 1'
                            ]
                ]
            ]),
            new Google_Service_Sheets_Request([
                'addSheet' => [
                    'properties' => [
                        'title' => 'Sheet 2'
                        ]
                        ]
                        ])
                    ];
                    // Create two sheets for our pivot table
                    $batchUpdateRequest = new Google_Service_Sheets_BatchUpdateSpreadsheetRequest([
                        'requests' => $requests
                    ]);
        $batchUpdateResponse = $service->spreadsheets->batchUpdate($spreadsheetId, $batchUpdateRequest);
        $sourceSheetId = $batchUpdateResponse->replies[0]->addSheet->properties->sheetId;
        $targetSheetId = $batchUpdateResponse->replies[1]->addSheet->properties->sheetId;
        $requests = [
            'updateCells' => [
                'rows' => [
                    'values' => [
                        [
                            'pivotTable' => [
                                'source' => [
                                    'sheetId' => $sourceSheetId,
                                    'startRowIndex' => 0,
                                    'startColumnIndex' => 0,
                                    'endRowIndex' => 20,
                                    'endColumnIndex' => 7
                                ],
                                'rows' => [
                                    [
                                        'sourceColumnOffset' => 1,
                                        'showTotals' => true,
                                        'sortOrder' => 'ASCENDING',
                                    ],
                                ],
                                'columns' => [
                                    [
                                        'sourceColumnOffset' => 4,
                                        'sortOrder' => 'ASCENDING',
                                        'showTotals' => true,
                                    ]
                                ],
                                'values' => [
                                    [
                                        'summarizeFunction' => 'COUNTA',
                                        'sourceColumnOffset' => 4
                                        ]
                                    ],
                                'valueLayout' => 'HORIZONTAL'
                            ]
                        ]
                        ]
                ],
                'start' => [
                    'sheetId' => $targetSheetId,
                    'rowIndex' => 0,
                    'columnIndex' => 0
                ],
                'fields' => 'pivotTable'
            ]
        ];
        return $batchUpdateResponse;
    }
        catch(Exception $e) {
            // TODO(developer) - handle error appropriately
            echo 'Message: ' .$e->getMessage();
        }
    }
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def pivot_tables(spreadsheet_id):
  """
  Creates the batch_update the user has access to.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()
  # pylint: disable=maybe-no-member
  try:
    service = build("sheets", "v4", credentials=creds)
    # Create two sheets for our pivot table.
    body = {"requests": [{"addSheet": {}}, {"addSheet": {}}]}
    batch_update_response = (
        service.spreadsheets()
        .batchUpdate(spreadsheetId=spreadsheet_id, body=body)
        .execute()
    )
    source_sheet_id = (
        batch_update_response.get("replies")[0]
        .get("addSheet")
        .get("properties")
        .get("sheetId")
    )
    target_sheet_id = (
        batch_update_response.get("replies")[1]
        .get("addSheet")
        .get("properties")
        .get("sheetId")
    )
    requests = []
    requests.append(
        {
            "updateCells": {
                "rows": {
                    "values": [
                        {
                            "pivotTable": {
                                "source": {
                                    "sheetId": source_sheet_id,
                                    "startRowIndex": 0,
                                    "startColumnIndex": 0,
                                    "endRowIndex": 20,
                                    "endColumnIndex": 7,
                                },
                                "rows": [
                                    {
                                        "sourceColumnOffset": 1,
                                        "showTotals": True,
                                        "sortOrder": "ASCENDING",
                                    },
                                ],
                                "columns": [{
                                    "sourceColumnOffset": 4,
                                    "sortOrder": "ASCENDING",
                                    "showTotals": True,
                                }],
                                "values": [{
                                    "summarizeFunction": "COUNTA",
                                    "sourceColumnOffset": 4,
                                }],
                                "valueLayout": "HORIZONTAL",
                            }
                        }
                    ]
                },
                "start": {
                    "sheetId": target_sheet_id,
                    "rowIndex": 0,
                    "columnIndex": 0,
                },
                "fields": "pivotTable",
            }
        }
    )
    body = {"requests": requests}
    response = (
        service.spreadsheets()
        .batchUpdate(spreadsheetId=spreadsheet_id, body=body)
        .execute()
    )
    return response

  except HttpError as error:
    print(f"An error occurred: {error}")
    return error

if __name__ == "__main__":
  # Pass: spreadsheet_id
  pivot_tables("1CM29gwKIzeXsAppeNwrc8lbYaVMmUclprLuLYuHog4k")
```

### Ruby

```
requests = [{
  update_cells: {
    rows:   {
      values: [
        {
          pivot_table: {
            source:       {
              sheet_id:           source_sheet_id,
              start_row_index:    0,
              start_column_index: 0,
              end_row_index:      20,
              end_column_index:   7
            },
            rows:         [
              {
                source_column_offset: 1,
                show_totals:          true,
                sort_order:           'ASCENDING',
              },
            ],
            columns:      [
              {
                source_column_offset: 4,
                sort_order:           'ASCENDING',
                show_totals:          true,
              }
            ],
            values:       [
              {
                summarize_function:   'COUNTA',
                source_column_offset: 4
              }
            ],
            value_layout: 'HORIZONTAL'
          }
        }
      ]
    },
    start:  {
      sheet_id:     target_sheet_id,
      row_index:    0,
      column_index: 0
    },
    fields: 'pivotTable'
  }
}]
result = service.batch_update_spreadsheet(spreadsheet_id, body, {})
```
