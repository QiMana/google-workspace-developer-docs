---
source: https://developers.google.com/workspace/sheets/api/guides/filters
root: workspace
fetched_at: 2026-04-23T15:31:22.624Z
---

# Manage data visibility with filters

This document is about using filters to sort and filter the data shown in a [spreadsheet](./concepts.md#spreadsheet).

Filters allow you to sort and filter the data that you see when you view a spreadsheet. Filters don't change the data values in your spreadsheet. You can use filters to temporarily hide or sort information. Data that matches the specified [filter criteria](#filter-criteria) doesn't appear while the filter is on. With [filter views](#filter-views), you can also save different named filters and switch between them whenever you like.

To filter data returned in a Google Sheets API request, use the [`DataFilter`](../reference/rest/v4/DataFilter.md) object. For more information, see [Read, write, and search metadata](./metadata.md).

## Filter use cases

The following are some example use cases for filters:

- Sort data by a particular column. For example, sort user records by last name.
- Hide data that meets a specific condition. For example, hide all records older than two years.
- Hide data that matches a certain value. For example, hide all issues with status "closed".

## Basic filter

The [`BasicFilter`](../reference/rest/v4/spreadsheets/sheets.md#basicfilter) object for a spreadsheet is the default filter that's applied whenever anyone views the spreadsheet. A spreadsheet can have only one basic filter per [sheet](./concepts.md#sheet). You can turn off the basic filter by clearing it. This removes the filter and all its settings from the spreadsheet. If you want to turn the same filter back on, you must set the criteria again.

### Manage the basic filter

To set or clear the basic filter, use the [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) method with the appropriate request type:

- To set the basic filter, use the [`SetBasicFilterRequest`](../reference/rest/v4/spreadsheets/request.md#setbasicfilterrequest) method.
- To clear the basic filter, use the [`ClearBasicFilterRequest`](../reference/rest/v4/spreadsheets/request.md#clearbasicfilterrequest) method.

To list the basic filter, use the [`spreadsheets.get`](../reference/rest/v4/spreadsheets/get.md) method and set the `fields` URL parameter to `sheets/basicFilter`. The following `spreadsheets.get` code sample shows a Google Sheets URL with a [field mask](./field-masks.md):

```
GET https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID?fields=sheets/basicFilter
```

## Filter views

A [`FilterView`](../reference/rest/v4/spreadsheets/sheets.md#filterview) is a named filter that you can turn off and on whenever you like. A sheet can have multiple filter views saved, but you can only apply one at a time. A sheet can also contain both a basic filter and multiple filter views, but you cannot apply both simultaneously on the same data range.

### Filter view use cases

The following are some example use cases for filter views:

- You have several different filters that you want to switch between when viewing the data.
- You don't have edit access to a spreadsheet but you still want to apply a filter. In this case, you can create a temporary filter view that's only visible to you.
- You want each person that you share your spreadsheet with to view the data differently. You can specify the filter view you want to apply by providing the [`spreadsheetId`](../reference/rest/v4/spreadsheets.md#Spreadsheet.FIELDS.spreadsheet_id) and [`filterViewId`](../reference/rest/v4/spreadsheets/sheets.md#FilterView.FIELDS.filter_view_id) in the spreadsheet URL. To do so, use the `filterViewId` returned in the response when you create the filter view.
	The following code sample shows a Sheets URL with a filter view:
	```
	https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit#gid=0&fvid=FILTER_VIEW_ID
	```

### Manage filter views

To create, duplicate, modify, or delete filter views, use the [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) method with the appropriate request type:

- To create a filter view, use the [`AddFilterViewRequest`](../reference/rest/v4/spreadsheets/request.md#addfilterviewrequest) method.
- To make a copy of a filter view, use the [`DuplicateFilterViewRequest`](../reference/rest/v4/spreadsheets/request.md#duplicatefilterviewrequest) method.
- To modify the properties of a filter view, use the [`UpdateFilterViewRequest`](../reference/rest/v4/spreadsheets/request.md#updatefilterviewrequest) method.
- To delete a filter view, use the [`DeleteFilterViewRequest`](../reference/rest/v4/spreadsheets/request.md#deletefilterviewrequest) method.

To list all your filter views, use the [`spreadsheets.get`](../reference/rest/v4/spreadsheets/get.md) method and set the `fields` URL parameter to `sheets/filterViews`. The following `spreadsheets.get` code sample shows a Sheets URL with a [field mask](./field-masks.md):

```
GET https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID?fields=sheets/filterViews
```

## JSON representation of a filter

The following code sample shows the JSON representation for a [`FilterView`](../reference/rest/v4/spreadsheets/sheets.md#filterview) object. The [`BasicFilter`](../reference/rest/v4/spreadsheets/sheets.md#basicfilter) object is the same except that it lacks the `filterViewId` and `title` fields, and it can't use a named range.

```
{
  "filterViewId": number,
  "title": string,
  "range": {
    object(GridRange)
  },
  "namedRangeId": string,
  "sortSpecs": [
    {
      object(SortSpec)
    }
  ],
  "criteria": {
    string: {
      object(FilterCriteria)
    },
    ...
  }
}
```

## Sample sales data

The rest of this document references the following sample sales data table:

|  | A | B | C | D | E | F | G |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Item Category | Model Number | Cost | Quantity | Region | Salesperson | Ship Date |
| 2 | Wheel | W-24 | $20.50 | 4 | West | Beth | 3/1/2016 |
| 3 | Door | D-01X | $15.00 | 2 | South | Amir | 3/15/2016 |
| 4 | Frame | FR-0B1 | $34.00 | 8 | East | Hannah | 3/12/2016 |
| 5 | Panel | P-034 | $6.00 | 4 | North | Devyn | 3/15/2016 |
| 6 | Panel | P-052 | $11.50 | 7 | East | Erik | 5/16/2016 |
| 7 | Wheel | W-24 | $20.50 | 11 | South | Sheldon | 4/30/2016 |
| 8 | Engine | ENG-0161 | $330.00 | 2 | North | Jessie | 7/2/2016 |

### Sort specifications

A filter can have multiple sort specifications. These specifications determine how to sort the data and are applied in the specified order. The [`SortSpec.dimensionIndex`](../reference/rest/v4/spreadsheets/other.md#SortSpec.FIELDS.dimension_index) attribute specifies the column index that the sort should be applied to.

The following code sample shows a sort specification:

```
[
  {
    "dimensionIndex": 3,
    "sortOrder": "ASCENDING"
  },
  {
    "dimensionIndex": 6,
    "sortOrder": "ASCENDING"
  }
]
```

When applied to the [sample sales data](#sample-data), this specification sorts by the "Quantity" column first and then, if two rows have the same quantity, by "Ship Date."

|  | A | B | C | D | E | F | G |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Item Category | Model Number | Cost | Quantity | Region | Salesperson | Ship Date |
| 2 | Door | D-01X | $15.00 | 2 | South | Amir | 3/15/2016 |
| 3 | Engine | ENG-0161 | $330.00 | 2 | North | Jessie | 7/2/2016 |
| 4 | Wheel | W-24 | $20.50 | 4 | West | Beth | 3/1/2016 |
| 5 | Panel | P-034 | $6.00 | 4 | North | Devyn | 3/15/2016 |
| 6 | Panel | P-052 | $11.50 | 7 | East | Erik | 5/16/2016 |
| 7 | Frame | FR-0B1 | $34.00 | 8 | East | Hannah | 3/12/2016 |
| 8 | Wheel | W-24 | $20.50 | 11 | South | Sheldon | 4/30/2016 |

### Filter criteria

The [`FilterCriteria`](../reference/rest/v4/spreadsheets/other.md#filtercriteria) object determines what spreadsheet data is shown or hidden in a basic filter or filter view. Each criterion depends on the values in a specific column. You supply the filter criteria as a map where the keys are the column indexes, and the values are the criteria.

For criteria specified using a boolean [`condition`](../reference/rest/v4/spreadsheets/other.md#FilterCriteria.FIELDS.condition), the condition must be `true` for values to be shown. The condition doesn't override [`hiddenValues`](../reference/rest/v4/spreadsheets/other.md#FilterCriteria.FIELDS.hidden_values). If a value is listed under `hiddenValues`, all matches for a value are still hidden.

The following code sample shows a filter criteria map:

```
{
  0: {
    'hiddenValues': ['Panel']
  },
  6: {
    'condition': {
      'type': 'DATE_BEFORE',
      'values': {
        'userEnteredValue': '4/30/2016'
      }
    }
  }
}
```

When applied to the [sample sales data](#sample-data), this criteria only shows rows where the "Item Category" column value isn't "Panel", and where the "Ship Date" column value is before "April 30, 2016".

|  | A | B | C | D | E | F | G |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Item Category | Model Number | Cost | Quantity | Region | Salesperson | Ship Date |
| 2 | Wheel | W-24 | $20.50 | 4 | West | Beth | 3/1/2016 |
| 3 | Door | D-01X | $15.00 | 2 | South | Amir | 3/15/2016 |
| 4 | Frame | FR-0B1 | $34.00 | 8 | East | Hannah | 3/12/2016 |

### Filter view code sample

The following code sample shows how to create a filter view, duplicate it, and then update the duplicated version using the [sample sales data](#sample-data).

### Java

```
/*
 * Dependencies (Maven):
 * com.google.apis:google-api-services-sheets:v4-rev20220927-2.0.0
 * com.google.auth:google-auth-library-oauth2-http:1.19.0
 */

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsScopes;
import com.google.api.services.sheets.v4.model.*;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.*;

public class SheetsFilterViews {

    public static void main(String... args) {
        filterViews("1CM29gwKIzeXsAppeNwrc8lbYaVMmUclprLuLYuHog4k");
    }

    public static void filterViews(String spreadsheetId) {
        try {
            // Load pre-authorized user credentials from the environment.
            // TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2.
            GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
                    .createScoped(Collections.singleton(SheetsScopes.SPREADSHEETS));

            Sheets service = new Sheets.Builder(
                    GoogleNetHttpTransport.newTrustedTransport(),
                    GsonFactory.getDefaultInstance(),
                    new HttpCredentialsAdapter(credentials))
                    .setApplicationName("Sheets Filter Views Sample")
                    .build();

            // --- Step 1: Add Filter View ---
            GridRange myRange = new GridRange()
                    .setSheetId(0)
                    .setStartRowIndex(0)
                    .setStartColumnIndex(0);

            // Construct Criteria for Column 0 (Hidden Values)
            FilterCriteria criteria0 = new FilterCriteria()
                    .setHiddenValues(Collections.singletonList("Panel"));

            // Construct Criteria for Column 6 (Date Condition)
            ConditionValue dateValue = new ConditionValue().setUserEnteredValue("4/30/2016");
            BooleanCondition dateCondition = new BooleanCondition()
                    .setType("DATE_BEFORE")
                    .setValues(Collections.singletonList(dateValue));
            FilterCriteria criteria6 = new FilterCriteria().setCondition(dateCondition);

            // Map criteria to column indices (Note: keys are Strings in Java map)
            Map<String, FilterCriteria> criteriaMap = new HashMap<>();
            criteriaMap.put("0", criteria0);
            criteriaMap.put("6", criteria6);

            FilterView filterView = new FilterView()
                    .setTitle("Sample Filter")
                    .setRange(myRange)
                    .setSortSpecs(Collections.singletonList(
                            new SortSpec().setDimensionIndex(3).setSortOrder("DESCENDING")
                    ))
                    .setCriteria(criteriaMap);

            // --- Step 1: Add Filter View ---
            // (Request construction remains the same)
            // ...
            AddFilterViewRequest addFilterViewRequest = new AddFilterViewRequest().setFilter(filterView);

            BatchUpdateSpreadsheetRequest batchRequest1 = new BatchUpdateSpreadsheetRequest()
                    .setRequests(Collections.singletonList(new Request().setAddFilterView(addFilterViewRequest)));

            BatchUpdateSpreadsheetResponse response1 = service.spreadsheets()
                    .batchUpdate(spreadsheetId, batchRequest1)
                    .execute();

            if (response1.getReplies() == null || response1.getReplies().isEmpty()) {
                System.err.println("Error: No replies returned from AddFilterView request.");
                return;
            }

            Response reply1 = response1.getReplies().get(0);
            if (reply1.getAddFilterView() == null || reply1.getAddFilterView().getFilter() == null) {
                 System.err.println("Error: Response did not contain AddFilterView data.");
                 return;
            }

            int filterId = reply1.getAddFilterView().getFilter().getFilterViewId();

            // --- Step 2: Duplicate Filter View ---
            DuplicateFilterViewRequest duplicateRequest = new DuplicateFilterViewRequest()
                    .setFilterId(filterId);

            BatchUpdateSpreadsheetRequest batchRequest2 = new BatchUpdateSpreadsheetRequest()
                    .setRequests(Collections.singletonList(new Request().setDuplicateFilterView(duplicateRequest)));

            BatchUpdateSpreadsheetResponse response2 = service.spreadsheets()
                    .batchUpdate(spreadsheetId, batchRequest2)
                    .execute();

            if (response2.getReplies() == null || response2.getReplies().isEmpty()) {
                 System.err.println("Error: No replies returned from DuplicateFilterView request.");
                 return;
            }

            Response reply2 = response2.getReplies().get(0);
            if (reply2.getDuplicateFilterView() == null || reply2.getDuplicateFilterView().getFilter() == null) {
                System.err.println("Error: Response did not contain DuplicateFilterView data.");
                return;
            }

            int newFilterId = reply2.getDuplicateFilterView().getFilter().getFilterViewId();

            // --- Step 3: Update Filter View ---
            // Extract the new ID from the duplicate response
            int newFilterId = response2.getReplies().get(0)
                    .getDuplicateFilterView().getFilter().getFilterViewId();

            // Create update criteria
            Map<String, FilterCriteria> updateCriteriaMap = new HashMap<>();
            updateCriteriaMap.put("0", new FilterCriteria()); // Empty criteria

            ConditionValue numValue = new ConditionValue().setUserEnteredValue("5");
            BooleanCondition numCondition = new BooleanCondition()
                    .setType("NUMBER_GREATER")
                    .setValues(Collections.singletonList(numValue));
            updateCriteriaMap.put("3", new FilterCriteria().setCondition(numCondition));

            FilterView updateFilterView = new FilterView()
                    .setFilterViewId(newFilterId)
                    .setTitle("Updated Filter")
                    .setCriteria(updateCriteriaMap);

            UpdateFilterViewRequest updateRequest = new UpdateFilterViewRequest()
                    .setFilter(updateFilterView)
                    .setFields("criteria,title");

            BatchUpdateSpreadsheetRequest batchRequest3 = new BatchUpdateSpreadsheetRequest()
                    .setRequests(Collections.singletonList(new Request().setUpdateFilterView(updateRequest)));

            BatchUpdateSpreadsheetResponse response3 = service.spreadsheets()
                    .batchUpdate(spreadsheetId, batchRequest3)
                    .execute();

            System.out.println(response3.toPrettyString());

        } catch (IOException | GeneralSecurityException e) {
            System.err.println("An error occurred: " + e);
        }
    }
}
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def filter_views(spreadsheet_id):
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

    my_range = {
        "sheetId": 0,
        "startRowIndex": 0,
        "startColumnIndex": 0,
    }
    addfilterviewrequest = {
        "addFilterView": {
            "filter": {
                "title": "Sample Filter",
                "range": my_range,
                "sortSpecs": [{
                    "dimensionIndex": 3,
                    "sortOrder": "DESCENDING",
                }],
                "criteria": {
                    0: {"hiddenValues": ["Panel"]},
                    6: {
                        "condition": {
                            "type": "DATE_BEFORE",
                            "values": {"userEnteredValue": "4/30/2016"},
                        }
                    },
                },
            }
        }
    }

    body = {"requests": [addfilterviewrequest]}
    addfilterviewresponse = (
        service.spreadsheets()
        .batchUpdate(spreadsheetId=spreadsheet_id, body=body)
        .execute()
    )

    duplicatefilterviewrequest = {
        "duplicateFilterView": {
            "filterId": addfilterviewresponse["replies"][0]["addFilterView"][
                "filter"
            ]["filterViewId"]
        }
    }

    body = {"requests": [duplicatefilterviewrequest]}
    duplicatefilterviewresponse = (
        service.spreadsheets()
        .batchUpdate(spreadsheetId=spreadsheet_id, body=body)
        .execute()
    )

    updatefilterviewrequest = {
        "updateFilterView": {
            "filter": {
                "filterViewId": duplicatefilterviewresponse["replies"][0][
                    "duplicateFilterView"
                ]["filter"]["filterViewId"],
                "title": "Updated Filter",
                "criteria": {
                    0: {},
                    3: {
                        "condition": {
                            "type": "NUMBER_GREATER",
                            "values": {"userEnteredValue": "5"},
                        }
                    },
                },
            },
            "fields": {"paths": ["criteria", "title"]},
        }
    }

    body = {"requests": [updatefilterviewrequest]}
    updatefilterviewresponse = (
        service.spreadsheets()
        .batchUpdate(spreadsheetId=spreadsheet_id, body=body)
        .execute()
    )
    print(str(updatefilterviewresponse))
  except HttpError as error:
    print(f"An error occurred: {error}")

if __name__ == "__main__":
  # Pass: spreadsheet_id
  filter_views("1CM29gwKIzeXsAppeNwrc8lbYaVMmUclprLuLYuHog4k")
```

## Related topics

- [Apply filters to your Google Sheets data](./filters-overview.md)
- [Read, write, and search metadata](./metadata.md)
