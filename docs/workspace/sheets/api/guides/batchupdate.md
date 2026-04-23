---
source: https://developers.google.com/workspace/sheets/api/guides/batchupdate
root: workspace
fetched_at: 2026-04-23T15:31:14.406Z
---

# Update spreadsheets

Aside from the value data contained in its cells, a [spreadsheet](https://developers.google.com/workspace/sheets/api/guides/concepts#spreadsheet) includes many other types of data, such as:

- Dimensions
- Cell formats and borders
- Named ranges
- Protected ranges
- Conditional formatting

These are some of the many kinds of data that control the appearance and operation of a spreadsheet. The `spreadsheets.batchUpdate` method lets you update any of these spreadsheet details. Changes are grouped in a batch so that if one request is unsuccessful, none of the other (potentially dependent) changes are written.

This page describes the basics of using the [`spreadsheets.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) method. If you need to read and write cell value data, you can also use the [`spreadsheets.values`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values) resource described in [Read & write cell values](https://developers.google.com/workspace/sheets/api/guides/values).

## Categories of operation

The particular operations supported by `spreadsheets.batchUpdate` can be grouped into the following broad categories:

| Category | Description |
| --- | --- |
| *Add* (and *Duplicate*) | Add new objects (sometimes based on old ones, as in the Duplicate requests). |
| *Update* (and *Set*) | Update certain properties of an object, usually leaving the old properties alone (whereas a Set request overwrites the prior data). |
| *Delete* | Remove objects. |

These categories are used in the next section to describe the behavior of specific operations.

## Batch update operations

The `spreadsheets.batchUpdate` method works by taking one or more [Request](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request) objects, each one specifying a single kind of request to perform. There are many different kinds of requests. Here's a breakdown on the types of requests, grouped into different categories.

| Object | ADD / DUPLICATE | UPDATE / SET | DELETE |
| --- | --- | --- | --- |
| [Spreadsheet Properties](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets#spreadsheetproperties) |  | [UpdateSpreadsheetPropertiesRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatespreadsheetpropertiesrequest) |  |
| [Sheets](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets) | [AddSheetRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#addsheetrequest)   [DuplicateSheetRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#duplicatesheetrequest) | [UpdateSheetPropertiesRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatesheetpropertiesrequest) | [DeleteSheetRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#deletesheetrequest) |
| [Dimensions](https://developers.google.com/workspace/sheets/api/reference/rest/v4/Dimension) (including [dimension range](https://developers.google.com/workspace/sheets/api/reference/rest/v4/DimensionRange)) | [InsertDimensionRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#insertdimensionrequest)   [AppendDimensionRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#appenddimensionrequest) | [UpdateDimensionPropertiesRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatedimensionpropertiesrequest)   [MoveDimensionRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#movedimensionrequest)   [AutoResizeDimensionsRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#autoresizedimensionsrequest) | [DeleteDimensionRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#deletedimensionrequest) |
| [Cells](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/cells) (including values, formats, data validation, etc.) |  | [RepeatCellRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#repeatcellrequest)   [UpdateCellsRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatecellsrequest)   [AppendCellsRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#appendcellsrequest) |  |
| [Named Ranges](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets#namedrange) | [AddNamedRangeRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#addnamedrangerequest) | [UpdateNamedRangeRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatenamedrangerequest) | [DeleteNamedRangeRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#deletenamedrangerequest) |
| [Borders](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/cells#borders) |  | [UpdateBordersRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatebordersrequest) |  |
| Filters (including [filter views](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#FilterView) and the [basic filter](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#BasicFilter)) | [AddFilterViewRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#addfilterviewrequest)   [DuplicateFilterViewRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#duplicatefilterviewrequest) | [UpdateFilterViewRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatefilterviewrequest)   [SetBasicFilterRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#setbasicfilterrequest) | [ClearBasicFilterRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#clearbasicfilterrequest) |
| [Data Validation](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/cells#datavalidationrule) |  | [SetDataValidationRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#setdatavalidationrequest) |  |
| [Conditional Format Rules](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#conditionalformatrule) | [AddConditionalFormatRuleRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#addconditionalformatrulerequest) | [UpdateConditionalFormatRuleRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updateconditionalformatrulerequest) | [DeleteConditionalFormatRuleRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#deleteconditionalformatrulerequest) |
| [Protected Ranges](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#protectedrange) | [AddProtectedRangeRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#addprotectedrangerequest) | [UpdateProtectedRangeRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updateprotectedrangerequest) | [DeleteProtectedRangeRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#deleteprotectedrangerequest) |
| Embedded Objects (including [charts](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/charts#embeddedchart)) | [AddChartRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#addchartrequest) | [UpdateChartSpecRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatechartspecrequest)   [UpdateEmbeddedObjectPositionRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updateembeddedobjectpositionrequest) | [DeleteEmbeddedObjectRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#deleteembeddedobjectrequest) |
| Merges | [MergeCellsRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#mergecellsrequest) |  | [UnmergeCellsRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#unmergecellsrequest) |

There are also some additional requests that mimic user actions for manipulating data:

- [AutoFillRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#autofillrequest)
- [CutPasteRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#cutpasterequest)
- [CopyPasteRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#copypasterequest)
- [FindReplaceRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#findreplacerequest)
- [PasteDataRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#pastedatarequest)
- [TextToColumnsRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#texttocolumnsrequest)
- [SortRangeRequest](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#sortrangerequest)

### Limits

To learn more about cell and row limits in Google Sheets, see [Files you can store in Google Drive](https://support.google.com/drive/answer/37603).

## Field masks

Many of the "update" requests require field masks. These are a comma-delimited list of fields to update only certain fields in an object while leaving the other fields unchanged. A field mask of `*` is treated like a wildcard and is shorthand for specifying every field in a message (which means a field may revert to its default state if you don't specify a value for it in the request). For more information about field masks, see [Use field masks](https://developers.google.com/workspace/sheets/api/guides/field-masks#update_with_a_field_mask).

The following sample uses the [`UpdateSpreadsheetPropertiesRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatespreadsheetpropertiesrequest) to update only the title of a spreadsheet:

Request:

```
POST .../v4/spreadsheets/spreadsheetId:batchUpdate
```

Request body:

```
{
  "requests": [{
      "updateSpreadsheetProperties": {
          "properties": {"title": "TITLE"},
          "fields": "title"
      }
  }]
}
```

Replace TITLE with the new title of the spreadsheet.

## Responses

When updating a spreadsheet, some kinds of requests might return responses. These are returned in an array, with each response occupying the same index as the corresponding request. Some requests don't have responses and for those the response is empty.

Typically, "add" requests have responses that return information such as the ID of the added object. For the list of supported responses, see [Responses](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/response).

## Example

The following code sample performs these actions:

1. Updates the spreadsheet's title using the `title` variable.
2. Finds and replaces cell values in the spreadsheet using the `find` and `replacement` variables.

### Apps Script

```
/**
 * Updates the specified sheet using advanced sheet services
 * @param {string} spreadsheetId id of the spreadsheet to be updated
 * @param {string} title name of the sheet in the spreadsheet to be updated
 * @param {string} find string to be replaced
 * @param {string} replacement the string to replace the old data
 * @returns {*} the updated spreadsheet
 */
Snippets.prototype.batchUpdate = (spreadsheetId, title, find, replacement) => {
  // This code uses the Sheets Advanced Service, but for most use cases
  // the built-in method SpreadsheetApp.getActiveSpreadsheet()
  //     .getRange(range).setValues(values) is more appropriate.

  try {
    // Change the spreadsheet's title.
    const updateSpreadsheetPropertiesRequest =
      Sheets.newUpdateSpreadsheetPropertiesRequest();
    updateSpreadsheetPropertiesRequest.properties =
      Sheets.newSpreadsheetProperties();
    updateSpreadsheetPropertiesRequest.properties.title = title;
    updateSpreadsheetPropertiesRequest.fields = "title";

    // Find and replace text.
    const findReplaceRequest = Sheets.newFindReplaceRequest();
    findReplaceRequest.find = find;
    findReplaceRequest.replacement = replacement;
    findReplaceRequest.allSheets = true;

    const requests = [Sheets.newRequest(), Sheets.newRequest()];
    requests[0].updateSpreadsheetProperties =
      updateSpreadsheetPropertiesRequest;
    requests[1].findReplace = findReplaceRequest;

    const batchUpdateRequest = Sheets.newBatchUpdateSpreadsheetRequest();
    batchUpdateRequest.requests = requests;

    // Add additional requests (operations)
    const result = Sheets.Spreadsheets.batchUpdate(
      batchUpdateRequest,
      spreadsheetId,
    );
    return result;
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
import com.google.api.services.sheets.v4.model.BatchUpdateSpreadsheetRequest;
import com.google.api.services.sheets.v4.model.BatchUpdateSpreadsheetResponse;
import com.google.api.services.sheets.v4.model.FindReplaceRequest;
import com.google.api.services.sheets.v4.model.FindReplaceResponse;
import com.google.api.services.sheets.v4.model.Request;
import com.google.api.services.sheets.v4.model.SpreadsheetProperties;
import com.google.api.services.sheets.v4.model.UpdateSpreadsheetPropertiesRequest;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/* Class to demonstrate the use of Spreadsheet Batch Update API */
public class BatchUpdate {
  /**
   * Updates spreadsheet's title and cell values.
   *
   * @param spreadsheetId - Id of the spreadsheet.
   * @param title         - New title of the spreadsheet.
   * @param find          - Find cell values
   * @param replacement   - Replaced cell values
   * @return response metadata
   * @throws IOException - if credentials file not found.
   */
  public static BatchUpdateSpreadsheetResponse batchUpdate(String spreadsheetId,
                                                           String title,
                                                           String find,
                                                           String replacement)
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

    List<Request> requests = new ArrayList<>();
    BatchUpdateSpreadsheetResponse response = null;
    try {
      // Change the spreadsheet's title.
      requests.add(new Request()
          .setUpdateSpreadsheetProperties(new UpdateSpreadsheetPropertiesRequest()
              .setProperties(new SpreadsheetProperties()
                  .setTitle(title))
              .setFields("title")));
      // Find and replace text.
      requests.add(new Request()
          .setFindReplace(new FindReplaceRequest()
              .setFind(find)
              .setReplacement(replacement)
              .setAllSheets(true)));

      BatchUpdateSpreadsheetRequest body =
          new BatchUpdateSpreadsheetRequest().setRequests(requests);
      response = service.spreadsheets().batchUpdate(spreadsheetId, body).execute();
      FindReplaceResponse findReplaceResponse = response.getReplies().get(1).getFindReplace();

      System.out.printf("%d replacements made.", findReplaceResponse.getOccurrencesChanged());
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 404) {
        System.out.printf("Spreadsheet not found with id '%s'.\n", spreadsheetId);
      } else {
        throw e;
      }
    }
    return response;
  }
}
```

### JavaScript

```
function batchUpdate(spreadsheetId, title, find, replacement, callback) {
  const requests = [];
  // Change the spreadsheet's title.
  requests.push({
    updateSpreadsheetProperties: {
      properties: {
        title: title,
      },
      fields: 'title',
    },
  });
  // Find and replace text.
  requests.push({
    findReplace: {
      find: find,
      replacement: replacement,
      allSheets: true,
    },
  });
  try {
    // Add additional requests (operations) ...
    const batchUpdateRequest = {requests: requests};
    gapi.client.sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: batchUpdateRequest,
    }).then((response) => {
      const findReplaceResponse = response.result.replies[1].findReplace;
      console.log(\`${findReplaceResponse.occurrencesChanged} replacements made.\`);
      if (callback) callback(response);
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
 * Performs a batch update on a spreadsheet.
 * Updates the spreadsheet title and finds and replaces a string.
 * @param {string} spreadsheetId The ID of the spreadsheet to update.
 * @param {string} title The new title for the spreadsheet.
 * @param {string} find The string to find.
 * @param {string} replacement The string to replace the found string with.
 * @return {Promise<object>} The response from the batch update.
 */
async function batchUpdate(spreadsheetId, title, find, replacement) {
  // Authenticate with Google and get an authorized client.
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  // Create a new Sheets API client.
  const service = google.sheets({version: 'v4', auth});

  // Create a list of requests to be executed in the batch update.
  const requests = [];

  // Request to change the spreadsheet's title.
  requests.push({
    updateSpreadsheetProperties: {
      properties: {
        title,
      },
      fields: 'title',
    },
  });

  // Request to find and replace text.
  requests.push({
    findReplace: {
      find,
      replacement,
      allSheets: true,
    },
  });

  // Add more requests here if needed.

  // Create the batch update request.
  const batchUpdateRequest = {requests};

  // Execute the batch update request.
  const response = await service.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: batchUpdateRequest,
  });

  // Get the response from the find and replace request and log the number of occurrences.
  const findReplaceResponse = response.data.replies[1].findReplace;
  console.log(\`${findReplaceResponse.occurrencesChanged} replacements made.\`);
  return response;
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Drive;
use Google\Service\Sheets\BatchUpdateSpreadsheetRequest;

/**
 * to batch update a spreadsheet
 */
function batchUpdate($spreadsheetId, $title, $find, $replacement)
    {   
        /* Load pre-authorized user credentials from the environment.
           TODO(developer) - See https://developers.google.com/identity for
            guides on implementing OAuth2 for your application. */
        $client = new Google\Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Google\Service\Drive::DRIVE);
        $service = new Google_Service_Sheets($client);
        try{
            //execute the request
            $requests = [
                new Google_Service_Sheets_Request([
              'updateSpreadsheetProperties' => [
                  'properties' => [
                      'title' => $title
                    ],
                    'fields' => 'title'
              ]
          ]),
          new Google_Service_Sheets_Request([
              'findReplace' => [
                  'find' => $find,
                  'replacement' => $replacement,
                  'allSheets' => true
                  ]
                  ])
                ];
                $batchUpdateRequest = new Google_Service_Sheets_BatchUpdateSpreadsheetRequest([
                    'requests' => $requests
                ]);
        $response = $service->spreadsheets->batchUpdate($spreadsheetId, $batchUpdateRequest);
        $findReplaceResponse = $response->getReplies()[1]->getFindReplace();
        printf("%s replacements made.\n",
        $findReplaceResponse->getOccurrencesChanged());
        return $response;
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

def sheets_batch_update(spreadsheet_id, title, find, replacement):
  """
  Update the sheet details in batch, the user has access to.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """

  creds, _ = google.auth.default()
  # pylint: disable=maybe-no-member

  try:
    service = build("sheets", "v4", credentials=creds)

    requests = []
    # Change the spreadsheet's title.
    requests.append(
        {
            "updateSpreadsheetProperties": {
                "properties": {"title": title},
                "fields": "title",
            }
        }
    )
    # Find and replace text
    requests.append(
        {
            "findReplace": {
                "find": find,
                "replacement": replacement,
                "allSheets": True,
            }
        }
    )
    # Add additional requests (operations) ...

    body = {"requests": requests}
    response = (
        service.spreadsheets()
        .batchUpdate(spreadsheetId=spreadsheet_id, body=body)
        .execute()
    )
    find_replace_response = response.get("replies")[1].get("findReplace")
    print(
        f"{find_replace_response.get('occurrencesChanged')} replacements made."
    )
    return response

  except HttpError as error:
    print(f"An error occurred: {error}")
    return error

if __name__ == "__main__":
  sheets_batch_update("spreadsheet_id", "title", "find", "replacement")
```

### Ruby

```
requests = []
# Change the name of sheet ID '0' (the default first sheet on every
# spreadsheet)
requests.push({
                update_sheet_properties: {
                  properties: { sheet_id: 0, title: 'New Sheet Name' },
                  fields:     'title'
                }
              })
# Find and replace text
requests.push({
                find_replace: {
                  find:        find,
                  replacement: replacement,
                  all_sheets:  true
                }
              })
# Add additional requests (operations) ...

body = { requests: requests }
result = service.batch_update_spreadsheet(spreadsheet_id, body, {})
find_replace_response = result.replies[1].find_replace
puts "#{find_replace_response.occurrences_changed} replacements made."
```
