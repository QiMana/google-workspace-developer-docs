---
source: https://developers.google.com/workspace/add-ons/studio/update-cards
root: workspace
fetched_at: 2026-04-23T15:23:19.741Z
---

# Update a configuration card

This guide explains how to dynamically update a configuration card in response to user actions, such as clicking a button or selecting an item from a menu.

You can insert, remove, or replace card sections and widgets to create responsive interfaces that adapt to user input. For example, you can update a card interface to show a validation error message to users who enter a string in an input field that expects an integer, and then update it again to hide the message after the user enters an integer.

## Modify card sections and widgets

To update a card, your widget action (such as `onClickAction`) must call a function that returns a `RenderActions` object containing modification instructions.

On card sections, you can perform the following modifications:

- **Insert a section:** Add a section to the top of the card or beneath an existing section specified by ID with [`setInsertSection`](../../../apps-script/reference/add-ons-response-service/modify-card.md#setInsertSection(InsertSection)).
- **Remove a section:** Remove a section specified by ID with [`setRemoveSection`](../../../apps-script/reference/add-ons-response-service/modify-card.md#setRemoveSection(RemoveSection)).
- **Replace a section:** Replace an existing section with a new section specified by ID with [`setReplaceSection`](../../../apps-script/reference/add-ons-response-service/modify-card.md#setReplaceSection(CardSection)).

On card widgets, you can perform the following modifications:

- **Insert a widget:** Add a widget before or after an existing widget specified by ID with [`setInsertWidget`](../../../apps-script/reference/add-ons-response-service/modify-card.md#setInsertWidget(InsertWidget)).
- **Remove a widget:** Remove a widget specified by ID with [`setRemoveWidget`](../../../apps-script/reference/add-ons-response-service/modify-card.md#setRemoveWidget(RemoveWidget)).
- **Replace a widget:** Replace an existing widget with a new widget with [`setReplaceWidget`](../../../apps-script/reference/add-ons-response-service/modify-card.md#setReplaceWidget(Widget)).

## Example: Insert and remove sections and widgets

The following example builds a configuration card containing buttons that call functions to modify the card by inserting or removing widgets and sections.

### JSON

```
{
  "timeZone": "America/Los_Angeles",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "addOns": {
    "common": {
      "name": "Test Project",
      "logoUrl": "https://www.gstatic.com/images/icons/material/system/1x/pets_black_48dp.png",
      "useLocaleFromApp": true
    },
    "flows": {
      "workflowElements": [
        {
          "id": "modify_card",
          "state": "ACTIVE",
          "name": "Modify Card",
          "workflowAction": {
            "inputs": [
              {
                "id": "value1",
                "description": "The first input",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              },
              {
                "id": "value2",
                "description": "The second number",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              },
              {
                "id": "value3",
                "description": "The third number",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "outputs": [
              {
                "id": "result",
                "description": "Modify Card result",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "onConfigFunction": "onConfig",
            "onExecuteFunction": "onExecute"
          }
        }
      ]
    }
  }
}
```

### Apps Script

```
// Return a configuration Card for the step.
function onConfig() {

  const textInput_1 = CardService.newTextInput()
    .setFieldName("value1")
    .setTitle("First Value!")
    .setId("text_input_1")
    .setHostAppDataSource(
      CardService.newHostAppDataSource()
        .setWorkflowDataSource(
          CardService.newWorkflowDataSource()
            .setIncludeVariables(true)
        )
    );

  const textInput_2 = CardService.newTextInput()
    .setFieldName("value2")
    .setTitle("Second Value!")
    .setId("text_input_2")
    .setHostAppDataSource(
      CardService.newHostAppDataSource()
        .setWorkflowDataSource(
          CardService.newWorkflowDataSource()
            .setIncludeVariables(true)
        )
    );

  // Create buttons that call functions to modify the card.
  const buttonSet = CardService.newButtonSet()
    .setId("card_modification_buttons")
    .addButton(
      CardService.newTextButton()
        .setAltText("Insert Card Section")
        .setText("Insert Card Section")
        .setOnClickAction(
          CardService.newAction()
            .setFunctionName('insertSection')
        )
    )
    .addButton(
      CardService.newTextButton()
        .setAltText("Insert Text Widget")
        .setText("Insert Text Widget")
        .setOnClickAction(
          CardService.newAction()
            .setFunctionName('insertWidget')
        )
    );

  var firstSection =
    CardService.newCardSection()
      .setId("card_section_1")
      .addWidget(textInput_1)
      .addWidget(textInput_2)
      .addWidget(buttonSet);

  var card = CardService.newCardBuilder()
    .addSection(firstSection)
    .build();

  var navigation = AddOnsResponseService.newNavigation()
    .pushCard(card);

  var action = AddOnsResponseService.newAction()
    .addNavigation(navigation);

  return AddOnsResponseService.newRenderActionBuilder()
    .setAction(action)
    .build();
}
// If the step runs, return output variables.
function onExecute(event) {
  var value1 = event.workflow.actionInvocation.inputs["value1"].stringValues[0];
  var value2 = event.workflow.actionInvocation.inputs["value2"].stringValues[0];
  var value3; // Declare value3
  var result;
  // Check if the "value3" key exists in the inputs, which only exists if
  // the third text input is inserted to the Card.
  if (event.workflow.actionInvocation.inputs["value3"]) {
    value3 = event.workflow.actionInvocation.inputs["value3"].stringValues[0];

    result = value1 + "\n" + value2 + "\n" + value3;
  } else {
    result = value1 + "\n" + value2;
  }
  // Output the file ID through a variableData, which can be used by
  // later steps in a workflow.
  const variableData = AddOnsResponseService.newVariableData()
    .addStringValue(result);

  let textFormatElement = AddOnsResponseService.newTextFormatElement()
    .setText("Output: " + JSON.stringify(variableData));

  let workflowTextFormat = AddOnsResponseService.newWorkflowTextFormat()
    .addTextFormatElement(textFormatElement);

  // The string key for each variableData must match with the IDs of the
  // outputs defined in the manifest.
  let returnAction = AddOnsResponseService.newReturnOutputVariablesAction()
    .setVariables({ "result": variableData })
    .setLog(workflowTextFormat);

  let hostAppAction = AddOnsResponseService.newHostAppAction()
    .setWorkflowAction(returnAction);

  return AddOnsResponseService.newRenderActionBuilder()
    .setHostAppAction(hostAppAction).build();
}

/**
 * Inserts a new CardSection with several widgets.
 */
function insertSection(event) {
  console.log("event: " + JSON.stringify(event, null, 3));

  const optionalSection = CardService.newCardSection().setId("card_section_2")
    .addWidget(
      CardService.newTextParagraph().setText("This is a text paragraph inside the new card section")
    )
    .addWidget(
      CardService.newButtonSet().addButton(
        CardService.newTextButton().setText("Remove Card Section").setOnClickAction(CardService.newAction().setFunctionName("removeSection"))))
    .addWidget(
      CardService.newButtonSet().addButton(
        CardService.newTextButton().setText("Replace Card Section").setOnClickAction(CardService.newAction().setFunctionName("replaceSection"))));

  // Insert the new section beneath section "card_section_1".
  // You can also insert at the top of a Card.
  const sectionInsertion = AddOnsResponseService.newInsertSection().insertBelowSection("card_section_1").setSection(optionalSection);

  const modifyAction = AddOnsResponseService.newAction()
    .addModifyCard(AddOnsResponseService.newModifyCard().setInsertSection(sectionInsertion));

  return AddOnsResponseService.newRenderActionBuilder().setAction(modifyAction).build();
}
/**
 * Replaces an existing CardSection with a new CardSection with the same ID.
 */
function replaceSection(event) {
  console.log("event: " + JSON.stringify(event, null, 3));

  const replacementSection = CardService.newCardSection().setId("card_section_2")
    .addWidget(
      CardService.newTextParagraph().setText("Card Section replaced!")
    )
    .addWidget(
      CardService.newButtonSet().addButton(
        CardService.newTextButton().setText("Remove Card Section").setOnClickAction(CardService.newAction().setFunctionName("removeSection"))));

  const modifyAction = AddOnsResponseService.newAction()
    .addModifyCard(AddOnsResponseService.newModifyCard().setReplaceSection(replacementSection));

  return AddOnsResponseService.newRenderActionBuilder().setAction(modifyAction).build();
}

/**
* Replaces an existing CardWidget with a new CardWidget with the same ID.
*/
function replaceWidget(event) {
console.log("event: " + JSON.stringify(event, null, 3));

const replacementWidget = CardService.newTextParagraph().setText("This is a replacement widget!").setId("text_input_3");

const modifyAction = AddOnsResponseService.newAction()
  .addModifyCard(AddOnsResponseService.newModifyCard().setReplaceWidget(replacementWidget));

return AddOnsResponseService.newRenderActionBuilder().setAction(modifyAction).build();
}

/**
 * Inserts an additional text input widget and a button that can remove it.
 */
function insertWidget(event) {
  console.log("event: " + JSON.stringify(event, null, 3));

  const buttonSet = CardService.newButtonSet().setId("widget_1")
    .addButton(
      CardService.newTextButton()
        .setAltText("Remove Widget")
        .setText("Remove Widget")
        .setOnClickAction(
          CardService.newAction().setFunctionName('removeWidget')
        ))
    .addButton(
      CardService.newTextButton()
        .setAltText("Replace Widget")
        .setText("Replace Widget")
        .setOnClickAction(
          CardService.newAction().setFunctionName('replaceWidget')
        ));

  const textInput_3 = CardService.newTextInput().setFieldName("value3").setTitle("Third Value").setId("text_input_3");

  // Widgets can be inserted either before or after another widget.
  // This example inserts a button below a text input, then inserts
  // another text input between the existing text input and the new button.
  const buttonSetInsertion = AddOnsResponseService.newInsertWidget().insertBelowWidget("text_input_2").setWidget(buttonSet);
  const textInputInsertion = AddOnsResponseService.newInsertWidget().insertAboveWidget("widget_1").setWidget(textInput_3);

  const modifyAction = AddOnsResponseService.newAction()
    .addModifyCard(AddOnsResponseService.newModifyCard().setInsertWidget(buttonSetInsertion))
    .addModifyCard(AddOnsResponseService.newModifyCard().setInsertWidget(textInputInsertion));

  return AddOnsResponseService.newRenderActionBuilder().setAction(modifyAction).build();
}

/**
 * Removes one or more existing widgets by ID.
 */
function removeWidget(event) {
  console.log("event: " + JSON.stringify(event, null, 3));

  const textInputDeletion = AddOnsResponseService.newRemoveWidget().setWidgetId("text_input_3");
  const buttonSetDeletion = AddOnsResponseService.newRemoveWidget().setWidgetId("widget_1");

  const modifyAction = AddOnsResponseService.newAction()
    .addModifyCard(
      AddOnsResponseService.newModifyCard().setRemoveWidget(textInputDeletion)
    )
    .addModifyCard(
      AddOnsResponseService.newModifyCard().setRemoveWidget(buttonSetDeletion)
    );

  return AddOnsResponseService.newRenderActionBuilder().setAction(modifyAction).build();
}

/**
 * Removes an existing card section by ID.
 */
function removeSection(event) {
  console.log("event: " + JSON.stringify(event, null, 3));

  const sectionDeletion = AddOnsResponseService.newRemoveSection().setSectionId('card_section_2');

  const modifyAction = AddOnsResponseService.newAction()
    .addModifyCard(
      AddOnsResponseService.newModifyCard().setRemoveSection(sectionDeletion)
    );

  return AddOnsResponseService.newRenderActionBuilder().setAction(modifyAction).build();
}
```

## Related topics

- [Build a step](./build-a-step.md)
- [Build a configuration card](./configuration-cards.md)
- [Input variables](./input-variables.md)
- [Output variables](./output-variables.md)
