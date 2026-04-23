---
source: https://developers.google.com/workspace/sheets/api/guides/conditional-format
root: workspace
fetched_at: 2026-04-23T15:31:21.489Z
---

# Conditional formatting

Conditional formatting lets you format cells so that their appearance changes dynamically according to the value they contain, or to values in other cells. There are many possible applications of conditional formatting, including these uses:

- Highlight cells above a certain threshold (for example, using bold text for all transactions over $2,000).
- Format cells so their color varies with their value (for example, applying a more intense red background as the amount over $2,000 increases).
- Dynamically format cells based on the content of other cells (for example, highlighting the address of properties whose "time on market" field is > 90 days).

You can even format cells based on their value and those of other cells. For example, you could format a range of cells based on their value compared to the median value of the range:

![Formatting to highlight values above or below the median
age.](https://developers.google.com/static/workspace/sheets/images/cond-format-example.png)

**Figure 1.** Formatting to highlight values above or below the median age.

In this example, the cells in each row are formatted according to how the value in their `age` column compares to the median value of all the ages. Rows whose age is above the median have red text, and those below the median have a red background. Two of the rows have a value for `age` that matches the median age (48) and these cells receive no special formatting. (For the source code that creates this conditional formatting, see the [Example](#example) below.)

## Conditional formatting rules

Conditional formatting is expressed using *formatting rules*. Each spreadsheet stores a list of these rules, and applies them in the same order as they appear in the list. The Google Sheets API lets you add, update, and delete these formatting rules.

Each rule specifies a target range, type of rule, conditions for triggering the rule, and any formatting to apply.

**Target range** —This can be a single cell, a range of cells, or multiple ranges.

**Type of rule** —There are two categories of rules:

- [Boolean rules](#boolean-rules) apply a format only if specific criteria are met.
- [Gradient rules](#gradient-rules) calculate the background color of a cell, based on the value of the cell.

The conditions that are evaluated, and the formats that you can apply, are different for each of these rule types, as detailed in the following sections.

### Boolean rules

A [`BooleanRule`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#booleanrule) defines whether to apply a specific format, based on a [`BooleanCondition`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/other#booleancondition) that evaluates to `true` or `false`. A boolean rule takes the form:

```
{
  "condition": {
    object(BooleanCondition)
  },
  "format": {
    object(CellFormat)
  },
}
```

The condition can use the built-in [`ConditionType`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/other#conditiontype), or it can use a custom formula for more complex evaluations.

**Built-in types** let you apply formatting according to numeric thresholds, text comparison, or whether a cell is populated. For example, `NUMBER_GREATER` means the cell's value must be greater than the condition's value. Rules are always evaluated against the target cell.

**Custom formula** is a special condition type that lets you apply formatting according to an arbitrary expression, which also allows evaluation of any cell, not just the target cell. The condition's formula must evaluate to `true`.

To define the formatting applied by a boolean rule, you use a subset of the [`CellFormat`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/cells#cellformat) type to define:

- Whether the text in the cell is bold, italic, or strikethrough.
- The text color in the cell.
- The background color of the cell.

### Gradient rules

A [`GradientRule`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#gradientrule) defines a range of colors that correspond to a range of values. A gradient rule takes the form:

```
{
  "minpoint": {
    object(InterpolationPoint)
  },
  "midpoint": {
    object(InterpolationPoint)
  },
  "maxpoint": {
    object(InterpolationPoint)
  },
}
```

Each [`InterpolationPoint`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#interpolationpoint) defines a color and its corresponding value. A set of three points defines a color gradient.

## Manage conditional formatting rules

To create, modify, or delete conditional formatting rules, use the [`spreadsheets.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) method with the appropriate request type:

- Add rules to the list at the given index using the [`AddConditionalFormatRuleRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#addconditionalformatrulerequest).
- Replace or reorder rules in the list at the given index using the [`UpdateConditionalFormatRuleRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updateconditionalformatrulerequest).
- Remove rules from the list at the given index using the [`DeleteConditionalFormatRuleRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#deleteconditionalformatrulerequest).

## Example

The following example shows how to create the conditional formatting shown in the screenshot at the top of this page. For additional examples, see the [Conditional formatting](https://developers.google.com/workspace/sheets/api/samples/conditional-formatting) samples page.

### Apps Script

```
/**
 * conditional formatting
 * @param {string} spreadsheetId spreadsheet ID
 * @returns {*} spreadsheet
 */
Snippets.prototype.conditionalFormatting = (spreadsheetId) => {
  try {
    const myRange = Sheets.newGridRange();
    myRange.sheetId = 0;
    myRange.startRowIndex = 0;
    myRange.endRowIndex = 11;
    myRange.startColumnIndex = 0;
    myRange.endColumnIndex = 4;

    // Request 1
    const rule1ConditionalValue = Sheets.newConditionValue();
    rule1ConditionalValue.userEnteredValue = "=GT($D2,median($D$2:$D$11))";

    const rule1ConditionFormat = Sheets.newCellFormat();
    rule1ConditionFormat.textFormat = Sheets.newTextFormat();
    rule1ConditionFormat.textFormat.foregroundColor = Sheets.newColor();
    rule1ConditionFormat.textFormat.foregroundColor.red = 0.8;

    const rule1Condition = Sheets.newBooleanCondition();
    rule1Condition.type = "CUSTOM_FORMULA";
    rule1Condition.values = [rule1ConditionalValue];

    const rule1BooleanRule = Sheets.newBooleanRule();
    rule1BooleanRule.condition = rule1Condition;
    rule1BooleanRule.format = rule1ConditionFormat;

    const rule1 = Sheets.newConditionalFormatRule();
    rule1.ranges = [myRange];
    rule1.booleanRule = rule1BooleanRule;

    const request1 = Sheets.newRequest();
    const addConditionalFormatRuleRequest1 =
      Sheets.newAddConditionalFormatRuleRequest();
    addConditionalFormatRuleRequest1.rule = rule1;
    addConditionalFormatRuleRequest1.index = 0;
    request1.addConditionalFormatRule = addConditionalFormatRuleRequest1;

    // Request 2
    const rule2ConditionalValue = Sheets.newConditionValue();
    rule2ConditionalValue.userEnteredValue = "=LT($D2,median($D$2:$D$11))";

    const rule2ConditionFormat = Sheets.newCellFormat();
    rule2ConditionFormat.textFormat = Sheets.newTextFormat();
    rule2ConditionFormat.textFormat.foregroundColor = Sheets.newColor();
    rule2ConditionFormat.textFormat.foregroundColor.red = 1;
    rule2ConditionFormat.textFormat.foregroundColor.green = 0.4;
    rule2ConditionFormat.textFormat.foregroundColor.blue = 0.4;

    const rule2Condition = Sheets.newBooleanCondition();
    rule2Condition.type = "CUSTOM_FORMULA";
    rule2Condition.values = [rule2ConditionalValue];

    const rule2BooleanRule = Sheets.newBooleanRule();
    rule2BooleanRule.condition = rule2Condition;
    rule2BooleanRule.format = rule2ConditionFormat;

    const rule2 = Sheets.newConditionalFormatRule();
    rule2.ranges = [myRange];
    rule2.booleanRule = rule2BooleanRule;

    const request2 = Sheets.newRequest();
    const addConditionalFormatRuleRequest2 =
      Sheets.newAddConditionalFormatRuleRequest();
    addConditionalFormatRuleRequest2.rule = rule2;
    addConditionalFormatRuleRequest2.index = 0;
    request2.addConditionalFormatRule = addConditionalFormatRuleRequest2;

    // Batch send the requests
    const requests = [request1, request2];
    const batchUpdate = Sheets.newBatchUpdateSpreadsheetRequest();
    batchUpdate.requests = requests;
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
import com.google.api.services.sheets.v4.model.AddConditionalFormatRuleRequest;
import com.google.api.services.sheets.v4.model.BatchUpdateSpreadsheetRequest;
import com.google.api.services.sheets.v4.model.BatchUpdateSpreadsheetResponse;
import com.google.api.services.sheets.v4.model.BooleanCondition;
import com.google.api.services.sheets.v4.model.BooleanRule;
import com.google.api.services.sheets.v4.model.CellFormat;
import com.google.api.services.sheets.v4.model.Color;
import com.google.api.services.sheets.v4.model.ConditionValue;
import com.google.api.services.sheets.v4.model.ConditionalFormatRule;
import com.google.api.services.sheets.v4.model.GridRange;
import com.google.api.services.sheets.v4.model.Request;
import com.google.api.services.sheets.v4.model.TextFormat;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/* Class to demonstrate the use of Spreadsheet Conditional Formatting API */
public class ConditionalFormatting {
  /**
   * Create conditional formatting.
   *
   * @param spreadsheetId - Id of the spreadsheet.
   * @return updated changes count.
   * @throws IOException - if credentials file not found.
   */
  public static BatchUpdateSpreadsheetResponse conditionalFormat(String spreadsheetId)
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

    List<GridRange> ranges = Collections.singletonList(new GridRange()
        .setSheetId(0)
        .setStartRowIndex(1)
        .setEndRowIndex(11)
        .setStartColumnIndex(0)
        .setEndColumnIndex(4)
    );
    List<Request> requests = Arrays.asList(
        new Request().setAddConditionalFormatRule(new AddConditionalFormatRuleRequest()
            .setRule(new ConditionalFormatRule()
                .setRanges(ranges)
                .setBooleanRule(new BooleanRule()
                    .setCondition(new BooleanCondition()
                        .setType("CUSTOM_FORMULA")
                        .setValues(Collections.singletonList(
                            new ConditionValue().setUserEnteredValue(
                                "=GT($D2,median($D$2:$D$11))")
                        ))
                    )
                    .setFormat(new CellFormat().setTextFormat(
                        new TextFormat().setForegroundColor(
                            new Color().setRed(0.8f))
                    ))
                )
            )
            .setIndex(0)
        ),
        new Request().setAddConditionalFormatRule(new AddConditionalFormatRuleRequest()
            .setRule(new ConditionalFormatRule()
                .setRanges(ranges)
                .setBooleanRule(new BooleanRule()
                    .setCondition(new BooleanCondition()
                        .setType("CUSTOM_FORMULA")
                        .setValues(Collections.singletonList(
                            new ConditionValue().setUserEnteredValue(
                                "=LT($D2,median($D$2:$D$11))")
                        ))
                    )
                    .setFormat(new CellFormat().setBackgroundColor(
                        new Color().setRed(1f).setGreen(0.4f).setBlue(0.4f)
                    ))
                )
            )
            .setIndex(0)
        )
    );

    BatchUpdateSpreadsheetResponse result = null;
    try {
      // Execute the requests.
      BatchUpdateSpreadsheetRequest body =
          new BatchUpdateSpreadsheetRequest()
              .setRequests(requests);
      result = service.spreadsheets()
          .batchUpdate(spreadsheetId, body)
          .execute();
      System.out.printf("%d cells updated.", result.getReplies().size());
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
function conditionalFormatting(spreadsheetId, callback) {
  const myRange = {
    sheetId: 0,
    startRowIndex: 1,
    endRowIndex: 11,
    startColumnIndex: 0,
    endColumnIndex: 4,
  };
  const requests = [{
    addConditionalFormatRule: {
      rule: {
        ranges: [myRange],
        booleanRule: {
          condition: {
            type: 'CUSTOM_FORMULA',
            values: [{userEnteredValue: '=GT($D2,median($D$2:$D$11))'}],
          },
          format: {
            textFormat: {foregroundColor: {red: 0.8}},
          },
        },
      },
      index: 0,
    },
  }, {
    addConditionalFormatRule: {
      rule: {
        ranges: [myRange],
        booleanRule: {
          condition: {
            type: 'CUSTOM_FORMULA',
            values: [{userEnteredValue: '=LT($D2,median($D$2:$D$11))'}],
          },
          format: {
            backgroundColor: {red: 1, green: 0.4, blue: 0.4},
          },
        },
      },
      index: 0,
    },
  }];

  const body = {
    requests,
  };
  try {
    gapi.client.sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: body,
    }).then((response) => {
      const result = response.result;
      console.log(\`${result.replies.length} cells updated.\`);
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
 * Applies conditional formatting to a spreadsheet.
 * @param {string} spreadsheetId The ID of the spreadsheet.
 * @return {Promise<object>} The response from the batch update.
 */
async function conditionalFormatting(spreadsheetId) {
  // Authenticate with Google and get an authorized client.
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  // Create a new Sheets API client.
  const service = google.sheets({version: 'v4', auth});

  // The range to apply the conditional formatting to.
  const myRange = {
    sheetId: 0,
    startRowIndex: 1,
    endRowIndex: 11,
    startColumnIndex: 0,
    endColumnIndex: 4,
  };

  // The requests to apply conditional formatting.
  const requests = [
    {
      addConditionalFormatRule: {
        rule: {
          ranges: [myRange],
          booleanRule: {
            condition: {
              type: 'CUSTOM_FORMULA',
              values: [{userEnteredValue: '=GT($D2,median($D$2:$D$11))'}],
            },
            format: {
              textFormat: {foregroundColor: {red: 0.8}},
            },
          },
        },
        index: 0,
      },
    },
    {
      addConditionalFormatRule: {
        rule: {
          ranges: [myRange],
          booleanRule: {
            condition: {
              type: 'CUSTOM_FORMULA',
              values: [{userEnteredValue: '=LT($D2,median($D$2:$D$11))'}],
            },
            format: {
              backgroundColor: {red: 1, green: 0.4, blue: 0.4},
            },
          },
        },
        index: 0,
      },
    },
  ];

  // Create the batch update request.
  const resource = {
    requests,
  };

  // Execute the batch update request.
  const response = await service.spreadsheets.batchUpdate({
    spreadsheetId,
    resource,
  });
  console.log(\`${response.data.replies.length} cells updated.\`);
  return response;
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Drive;
use Google\Service\Sheets\BatchUpdateSpreadsheetRequest;
use Google\Service\Sheets\Request;

function conditionalFormatting($spreadsheetId)
    {
        /* Load pre-authorized user credentials from the environment.
           TODO(developer) - See https://developers.google.com/identity for
            guides on implementing OAuth2 for your application. */
        $client = new Google\Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Google\Service\Drive::DRIVE);
        $service = new Google_Service_Sheets($client);

        try{
            $myRange = [
                'sheetId' => 0,
                'startRowIndex' => 1,
                'endRowIndex' => 11,
                'startColumnIndex' => 0,
                'endColumnIndex' => 4,
            ];
            //execute the request
            $requests = [
                new Google_Service_Sheets_Request([
                'addConditionalFormatRule' => [
                    'rule' => [
                        'ranges' => [ $myRange ],
                        'booleanRule' => [
                            'condition' => [
                                'type' => 'CUSTOM_FORMULA',
                                'values' => [ [ 'userEnteredValue' => '=GT($D2,median($D$2:$D$11))' ] ]
                            ],
                            'format' => [
                                'textFormat' => [ 'foregroundColor' => [ 'red' => 0.8 ] ]
                                ]
                                ]
                            ],
                            'index' => 0
                            ]
                        ]),
                        new Google_Service_Sheets_Request([
                'addConditionalFormatRule' => [
                    'rule' => [
                        'ranges' => [ $myRange ],
                        'booleanRule' => [
                            'condition' => [
                                'type' => 'CUSTOM_FORMULA',
                                'values' => [ [ 'userEnteredValue' => '=LT($D2,median($D$2:$D$11))' ] ]
                            ],
                            'format' => [
                                'backgroundColor' => [ 'red' => 1, 'green' => 0.4, 'blue' => 0.4 ]
                            ]
                            ]
                        ],
                    'index' => 0
                ]
                ])
        ];

        $batchUpdateRequest = new Google_Service_Sheets_BatchUpdateSpreadsheetRequest([
            'requests' => $requests
        ]);
        $response = $service->spreadsheets->batchUpdate($spreadsheetId, $batchUpdateRequest);
        printf("%d cells updated.", count($response->getReplies()));
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

def conditional_formatting(spreadsheet_id):
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
        "startRowIndex": 1,
        "endRowIndex": 11,
        "startColumnIndex": 0,
        "endColumnIndex": 4,
    }
    requests = [
        {
            "addConditionalFormatRule": {
                "rule": {
                    "ranges": [my_range],
                    "booleanRule": {
                        "condition": {
                            "type": "CUSTOM_FORMULA",
                            "values": [
                                {
                                    "userEnteredValue": (
                                        "=GT($D2,median($D$2:$D$11))"
                                    )
                                }
                            ],
                        },
                        "format": {
                            "textFormat": {"foregroundColor": {"red": 0.8}}
                        },
                    },
                },
                "index": 0,
            }
        },
        {
            "addConditionalFormatRule": {
                "rule": {
                    "ranges": [my_range],
                    "booleanRule": {
                        "condition": {
                            "type": "CUSTOM_FORMULA",
                            "values": [
                                {
                                    "userEnteredValue": (
                                        "=LT($D2,median($D$2:$D$11))"
                                    )
                                }
                            ],
                        },
                        "format": {
                            "backgroundColor": {
                                "red": 1,
                                "green": 0.4,
                                "blue": 0.4,
                            }
                        },
                    },
                },
                "index": 0,
            }
        },
    ]
    body = {"requests": requests}
    response = (
        service.spreadsheets()
        .batchUpdate(spreadsheetId=spreadsheet_id, body=body)
        .execute()
    )
    print(f"{(len(response.get('replies')))} cells updated.")
    return response

  except HttpError as error:
    print(f"An error occurred: {error}")
    return error

if __name__ == "__main__":
  # Pass: spreadsheet_id
  conditional_formatting("1CM29gwKIzeXsAppeNwrc8lbYaVMmUclprLuLYuHog4k")
```

### Ruby

```
my_range = {
  sheet_id:           0,
  start_row_index:    1,
  end_row_index:      11,
  start_column_index: 0,
  end_column_index:   4
}
requests = [{
  add_conditional_format_rule: {
    rule:  {
      ranges:       [my_range],
      boolean_rule: {
        condition: {
          type:   'CUSTOM_FORMULA',
          values: [{ user_entered_value: '=GT($D2,median($D$2:$D$11))' }]
        },
        format:    {
          text_format: { foreground_color: { red: 0.8 } }
        }
      }
    },
    index: 0
  }
}, {
  add_conditional_format_rule: {
    rule:  {
      ranges:       [my_range],
      boolean_rule: {
        condition: {
          type:   'CUSTOM_FORMULA',
          values: [{ user_entered_value: '=LT($D2,median($D$2:$D$11))' }]
        },
        format:    {
          background_color: { red: 1, green: 0.4, blue: 0.4 }
        }
      }
    },
    index: 0
  }
}]
body = {
  requests: requests
}
batch_update = Google::Apis::SheetsV4::BatchUpdateSpreadsheetRequest.new
batch_update.requests = requests
result = service.batch_update_spreadsheet(spreadsheet_id, batch_update)
puts "#{result.replies.length} cells updated."
```
