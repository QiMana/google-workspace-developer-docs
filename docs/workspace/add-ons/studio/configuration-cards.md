---
source: https://developers.google.com/workspace/add-ons/studio/configuration-cards
root: workspace
fetched_at: 2026-04-23T15:23:17.459Z
---

# Build a configuration card for a step

This guide explains how to build a configuration card that lets users customize and provide inputs for a step in Google Workspace Studio.

In general, to build a configuration card, you build a card interface like you would for any other Google Workspace add-on. For help building configuration card interfaces, see the following:

- [The Card Builder](https://gw-card-builder.web.app/), an interactive tool that helps you build and define cards.
- [Card](../reference/rpc/google.apps.card.v1.md#card) in the Google Workspace add-ons API reference documentation.
- [Card Service](../../../apps-script/reference/card-service.md), an Apps Script service that lets scripts configure and build cards.
- [Card-based interfaces](https://developers.google.com/workspace/add-ons/how-tos/ui-overview) in the Google Workspace add-ons developer documentation.

Some card widgets have special Workspace Studio-specific functionality and features, detailed in this guide.

## Define a configuration card

Define a configuration card in both the Apps Script manifest and in code.

The following example shows how to build a configuration card that asks users to select a Google Chat space.

### Edit the manifest file

In the manifest file, define `workflowElements`.

### JSON

```
{
  "timeZone": "America/Los_Angeles",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "addOns": {
    "common": {
      "name": "Chat space selector",
      "logoUrl": "https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/web-24dp/logo_gsuite_addons_color_1x_web_24dp.png",
      "useLocaleFromApp": true
    },
    "flows": {
      "workflowElements": [
        {
          "id": "actionElement",
          "state": "ACTIVE",
          "name": "Chat space selector",
          "description": "Lets the user select a space from Google  Chat",
          "workflowAction": {
            "inputs": [
              {
                "id": "chooseSpace",
                "description": "Choose a Chat space",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "onConfigFunction": "onConfigSpacePicker",
            "onExecuteFunction": "onExecuteSpacePicker"
          }
        }
      ]
    }
  }
}
```

### Edit the code

In the application code, return a card.

### Apps Script

```
/**
 * Generates and displays a configuration card to choose a Chat space
 */
function onConfigSpacePicker() {

  const selectionInput = CardService.newSelectionInput()
    .setTitle("First Value")
    .setFieldName("chooseSpace")
    .setType(CardService.SelectionInputType.MULTI_SELECT)
    .setPlatformDataSource(
      CardService.newPlatformDataSource()
        .setHostAppDataSource(
          CardService.newHostAppDataSource()
            .setWorkflowDataSource(
              CardService.newWorkflowDataSource()
                .setIncludeVariables(true)
                .setType(CardService.WorkflowDataSourceType.SPACE)
            )
        )
    );

  const cardSection = CardService.newCardSection()
    .setHeader("Select Chat Space")
    .setId("section_1")
    .addWidget(selectionInput)

  var card = CardService.newCardBuilder()
    .addSection(cardSection)
    .build();

  return card;
}

function onExecuteSpacePicker(e) {
}
```

## Set up autocomplete for input widgets

You can configure autocomplete for [`SelectionInput`](../../../apps-script/reference/card-service/selection-input.md) widgets to help users select from a list of options. For example, if a user starts typing `Atl` for a menu that populates cities in the United States, your element can autosuggest `Atlanta` before the user finishes typing. You can autocomplete up to 100 items.

Autocomplete suggestions can come from the following data sources:

- **Server-side autocomplete:** Suggestions are populated from a third-party or external data source that you define.
- **Google Workspace data:** Suggestions are populated from Google Workspace sources, such as Google Workspace users or Google Chat spaces.

### Server-side autocomplete

You can configure a [`SelectionInput`](../../../apps-script/reference/card-service/selection-input.md) widget to autocomplete suggestions from an external data source. For example, you can help users select from a list of sales leads from a customer relationship management (CRM) system.

To implement server-side autocomplete, you need to:

1. **Define the data source:** In the [`SelectionInput`](../../../apps-script/reference/card-service/selection-input.md) widget, add a [`DataSourceConfig`](../../../apps-script/reference/card-service/data-source-config.md) that specifies a [`RemoteDataSource`](https://developers.google.com/apps-script/reference/card-service/remote-data-source). This configuration points to an Apps Script function that fetches autocomplete suggestions.
2. **Implement the autocomplete function:** This function is triggered when the user types in the input field. The function should query your external data source based on the user's input and return a list of suggestions.

The following example shows how to configure a [`SelectionInput`](../../../apps-script/reference/card-service/selection-input.md) widget for server-side autocomplete:

### Apps Script

```
// In your onConfig function:
var multiSelect1 =
  CardService.newSelectionInput()
    .setFieldName("value1")
    .setTitle("Server Autocomplete")
    .setType(CardService.SelectionInputType.MULTI_SELECT)
    .setMultiSelectMaxSelectedItems(3)
    .addDataSourceConfig(
      CardService.newDataSourceConfig()
        .setRemoteDataSource(
          CardService.newAction().setFunctionName('getAutocompleteResults')
        )
    )
    .addDataSourceConfig(
      CardService.newDataSourceConfig()
        .setPlatformDataSource(
          CardService.newPlatformDataSource()
            .setHostAppDataSource(
              CardService.newHostAppDataSource()
                .setWorkflowDataSource(
                  CardService.newWorkflowDataSource()
                    .setIncludeVariables(true)
                ))
        )
    );

// ... add widget to card ...
```

#### Handle the autocomplete request

The function specified in [`setFunctionName`](../../../apps-script/reference/card-service/action.md#setFunctionName(String)) (e.g., `getAutocompleteResults`) receives an event object when the user types in the field. This function must:

1. Check the `event.workflow.elementUiAutocomplete.invokedFunction` to make sure it matches the expected function name.
2. Get the user's input from `event.workflow.elementUiAutocomplete.query`.
3. Query the external data source using the query.
4. Return up to 100 suggestions in the required format.

The following example shows how to implement the `handleAutocompleteRequest()` function to return suggestions based on the user's query:

### Apps Script

```
function handleAutocompleteRequest(event) {
  var invokedFunction = event.workflow.elementUiAutocomplete.invokedFunction;
  var query = event.workflow.elementUiAutocomplete.query;

  if (invokedFunction != "getAutocompleteResults" || query == undefined || query == "") {
    return {};
  }

  // Query your data source to get results based on the query
  let autocompleteResponse = AddOnsResponseService.newUpdateWidget()
    .addSuggestion(
      query + " option 1",
      query + "_option1",
      false,
      "https://developers.google.com/workspace/add-ons/images/person-icon.png",
      "option 1 bottom text"
    )
    .addSuggestion(
      query + " option 2",
      query + "_option2",
      false,
      "https://developers.google.com/workspace/add-ons/images/person-icon.png",
      "option 2 bottom text"
    ).addSuggestion(
      query + " option 3",
      query + "_option3",
      false,
      "https://developers.google.com/workspace/add-ons/images/person-icon.png",
      "option 3 bottom text"
    );

  const modifyAction = AddOnsResponseService.newAction()
    .addModifyCard(
      AddOnsResponseService.newModifyCard()
        .setUpdateWidget(autocompleteResponse)
    );

  return AddOnsResponseService.newRenderActionBuilder()
    .setAction(modifyAction)
    .build();
}

// In your onConfig function, handle the autocomplete event
function onConfigAutocompleteTest(event) {
  // Handle autocomplete request
  if (event.workflow && event.workflow.elementUiAutocomplete) {
    return handleAutocompleteRequest(event);
  }

  // ... rest of your card building logic ...
}
```

## Card considerations and limitations

- [Card navigation](../how-tos/navigation.md) like [`popCard()`](../../../apps-script/reference/card-service/navigation.md#popcard), [`pushCard()`](../../../apps-script/reference/card-service/navigation.md#pushcard), and [`updateCard()`](../../../apps-script/reference/card-service/navigation.md#updateCard(Card)) aren't supported in add-ons that extend Workspace Studio.

## Related topics

- [Build a step](https://developers.google.com/workspace/add-ons/studio/build-step)
- [Input variables](./input-variables.md)
- [Validate an input variable](./validate-inputs.md)
- [Output variables](./output-variables.md)
- [Log activity and errors](https://developers.google.com/workspace/add-ons/studio/log-activity)
- [Workspace Studio event objects](./event-objects.md)
