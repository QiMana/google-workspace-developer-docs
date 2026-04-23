---
source: https://developers.google.com/workspace/add-ons/studio/validate-inputs
root: workspace
fetched_at: 2026-04-23T15:23:20.469Z
---

# Validate an input variable

This guide explains how to validate an input variable.

When defining an input variable, as a best practice, validate that the user enters an appropriate value. For example, if you ask the user to input a numeral, verifying that they enter `1` instead of `a` verifies that your step runs without error.

There are two ways to validate an input variable:

- [Client-side validation](#client-side-validation): With client-side validation, you verify the user's input directly on their device. The user receives immediate feedback and can correct any errors in their input while configuring the step.
- [Server-side validation](#server-side-validation): Server-side validation lets you run logic on the server during validation, which is useful when you need to lookup information that the client doesn't have, like data in other systems or databases.

## Client-side validation

There are two ways to implement client-side validation:

- For basic validation, like verifying a widget contains fewer than a certain number of characters or contains the `@` symbol, invoke the `Validation` class of the Google Workspace add-on's Card service.
- For robust validation, like comparing widget values with other widget values, you can add Common Expression Language (CEL) validation to the following supported card widgets using [`CardService`](../../../apps-script/reference/card-service.md).

### Invoke the Validation class

The following example validates that a `TextInput` widget contains 10 or fewer characters:

### Apps Script

```
const validation = CardService.newValidation().setCharacterLimit('10').setInputType(
    CardService.InputType.TEXT);
```

For additional validation options use CEL validation.

### CEL Validation

[Common Expression Language (CEL)](https://cel.dev/) validation offers instant input checks without the latency of server-side validation by offloading input value checks that are not dependent on the lookup of data from other services to the client side.

You can also use CEL to create card behaviors, like displaying or hiding a widget depending on the result of the validation. This kind of behavior is useful for showing or hiding an error message that helps users correct their inputs.

Building a complete CEL validation involves the following components:

- `ExpressionData` in Card: Contains the specified validation logic and widget triggering logic when one of the defined Conditions is met.
	- `Id`: A unique identifier for the `ExpressionData` within the current Card.
		- `Expression`: The CEL string that defines the validation logic (e.g., `"value1 == value2"`).
		- `Conditions`: A list of conditions that contains a selection of predefined validation results (SUCCESS or FAILURE). Conditions are tied to the widget-side `EventAction` through `Triggers` with a shared `actionRuleId`.
		- Card-level `EventAction`: Activates CEL validations in the Card and associates the `ExpressionData` field to result widgets through post-event triggers.
		- `actionRuleId`: Unique ID for this `EventAction`.
				- `ExpressionDataAction`: Set to `START_EXPRESSION_EVALUATION` to indicate this action starts CEL evaluation.
				- `Trigger`: Connects the `Conditions` to Widget-side `EventActions` based on the `actionRuleId`.
- Widget-level `EventAction`: Controls the result widget's behavior when the success or failure condition is met. A result widget, for example, can be a `TextParagraph` that contains an error message which only becomes visible when the validation fails.
	- `actionRuleId`: Matches the `actionRuleId` in the card-side `Trigger`.
		- `CommonWidgetAction`: Defines actions that don't involve evaluations, such as updating widget visibility.
		- `UpdateVisibilityAction`: An action that updates a widget's visibility state (VISIBLE or HIDDEN).

The following example demonstrates how to implement CEL validation to check if two text inputs are equal. An error message is shown if they are not equal.

- ![When the failCondition is met (inputs are not equal), the error message widget is set to VISIBLE and appears.](https://developers.google.com/static/workspace/add-ons/workflows/images/workflow-calculator-CEL-validation-fail.png)
	Figure 1: When the failCondition is met (inputs are not equal), the error message widget is set to VISIBLE and appears.
- ![When the successCondition is met (inputs are equal), the error message widget is set to HIDDEN and doesn't appear.](https://developers.google.com/static/workspace/add-ons/workflows/images/workflow-calculator.png)
	Figure 2: When the successCondition is met (inputs are equal), the error message widget is set to HIDDEN and doesn't appear.

Here're the example application code and JSON manifest file:

### Apps Script

```
function onConfig() {
  // Create a Card
  let cardBuilder = CardService.newCardBuilder();

  const textInput_1 = CardService.newTextInput()
    .setTitle("Input field 1")
    .setFieldName("value1"); // FieldName's value must match a corresponding ID defined in the inputs[] array in the manifest file.
  const textInput_2 = CardService.newTextInput()
    .setTitle("Input field 2")
    .setFieldName("value2"); // FieldName's value must match a corresponding ID defined in the inputs[] array in the manifest file.
  let sections = CardService.newCardSection()
    .setHeader("Enter same values for the two input fields")
    .addWidget(textInput_1)
    .addWidget(textInput_2);

  // CEL Validation

  // Define Conditions
  const condition_success = CardService.newCondition()
    .setActionRuleId("CEL_TEXTINPUT_SUCCESS_RULE_ID")
    .setExpressionDataCondition(
      CardService.newExpressionDataCondition()
      .setConditionType(
        CardService.ExpressionDataConditionType.EXPRESSION_EVALUATION_SUCCESS));
  const condition_fail = CardService.newCondition()
    .setActionRuleId("CEL_TEXTINPUT_FAILURE_RULE_ID")
    .setExpressionDataCondition(
      CardService.newExpressionDataCondition()
      .setConditionType(
        CardService.ExpressionDataConditionType.EXPRESSION_EVALUATION_FAILURE));

  // Define Card-side EventAction
  const expressionDataAction = CardService.newExpressionDataAction()
    .setActionType(
      CardService.ExpressionDataActionType.START_EXPRESSION_EVALUATION);
  // Define Triggers for each Condition respectively
  const trigger_success = CardService.newTrigger()
    .setActionRuleId("CEL_TEXTINPUT_SUCCESS_RULE_ID");
  const trigger_failure = CardService.newTrigger()
    .setActionRuleId("CEL_TEXTINPUT_FAILURE_RULE_ID");

  const eventAction = CardService.newEventAction()
    .setActionRuleId("CEL_TEXTINPUT_EVALUATION_RULE_ID")
    .setExpressionDataAction(expressionDataAction)
    .addPostEventTrigger(trigger_success)
    .addPostEventTrigger(trigger_failure);

  // Define ExpressionData for the current Card
  const expressionData = CardService.newExpressionData()
    .setId("expData_id")
    .setExpression("value1 == value2") // CEL expression
    .addCondition(condition_success)
    .addCondition(condition_fail)
    .addEventAction(eventAction);
  card = card.addExpressionData(expressionData);

  // Create Widget-side EventActions and a widget to display error message
  const widgetEventActionFail = CardService.newEventAction()
    .setActionRuleId("CEL_TEXTINPUT_FAILURE_RULE_ID")
    .setCommonWidgetAction(
      CardService.newCommonWidgetAction()
      .setUpdateVisibilityAction(
        CardService.newUpdateVisibilityAction()
        .setVisibility(
          CardService.Visibility.VISIBLE)));
  const widgetEventActionSuccess = CardService.newEventAction()
    .setActionRuleId("CEL_TEXTINPUT_SUCCESS_RULE_ID")
    .setCommonWidgetAction(
      CardService.newCommonWidgetAction()
      .setUpdateVisibilityAction(
        CardService.newUpdateVisibilityAction()
        .setVisibility(
          CardService.Visibility.HIDDEN)));
  const errorWidget = CardService.newTextParagraph()
    .setText("<font color=\"#FF0000\"><b>Error:</b> Please enter the same values for both input fields.</font>")
    .setVisibility(CardService.Visibility.HIDDEN) // Initially hidden
    .addEventAction(widgetEventActionFail)
    .addEventAction(widgetEventActionSuccess);
  sections = sections.addWidget(errorWidget);

  card = card.addSection(sections);
  // Build and return the Card
  return card.build();
}
```

### JSON manifest file

```
{
  "timeZone": "America/Los_Angeles",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "addOns": {
    "common": {
      "name": "CEL validation example",
      "logoUrl": "https://www.gstatic.com/images/branding/productlogos/calculator_search/v1/web-24dp/logo_calculator_search_color_1x_web_24dp.png",
      "useLocaleFromApp": true
    },
    "flows": {
      "workflowElements": [
        {
          "id": "cel_validation_demo",
          "state": "ACTIVE",
          "name": "CEL Demo",
          "description": "Demonstrates CEL Validation",
          "workflowAction": {
            "inputs": [
              {
                "id": "value1",
                "description": "The first number",
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

#### Supported CEL validation widgets and operations

#### Card widgets that support CEL validation

The following widgets support CEL validation:

- `TextInput`
- `SelectionInput`
- `DateTimePicker`

#### Supported CEL validation operations

- Arithmetic operations
	- `+`: Adds two `int64`, `uint64`, or `double` numbers.
		- `-`: Subtracts two `int64`, `uint64`, or `double` numbers.
		- `*`: Multiplies two `int64`, `uint64`, or `double` numbers.
		- `/`: Divides two `int64`, `uint64`, or `double` numbers (integer division).
		- `%`: Computes the modulo of two `int64` or `uint64` numbers.
		- `-`: Negates an `int64` or `uint64` number.
- Logical operations:
	- `&&`: Performs a logical `AND` operation on two boolean values.
		- `||`: Performs a logical `OR` operation on two boolean values.
		- `!`: Performs a logical `NOT` operation on a boolean value.
- Comparison Operations:
	- `==`: Checks if two values are equal. Supports numbers and lists.
		- `!=`: Checks if two values are not equal. Supports numbers and lists.
		- `<`: Checks if the first `int64`, `uint64`, or `double` number is less than the second.
		- `<=`: Checks if the first `int64`, `uint64`, or `double` number is less than or equal to the second.
		- `>`: Checks if the first `int64`, `uint64`, or `double` number is greater than the second.
		- `>=`: Checks if the first `int64`, `uint64`, or `double` number is greater than or equal to the second.
- List Operations:
	- `in`: Checks if a value is present in a list. Supports numbers, strings and nested lists.
		- `size`: Returns the number of items in a list. Supports numbers and nested lists.

#### Unsupported CEL validation scenarios

- **Incorrect Argument Sizes for Binary Operations**: Binary operations (for example, `add_int64`, equals) require exactly two arguments. Providing a different number of arguments will throw an error.
- **Incorrect Argument Sizes for Unary Operations**: Unary operations (for example, `negate_int64`) require exactly one argument. Providing a different number of arguments will throw an error.
- **Unsupported Types in Numerical Operations**: Numerical binary and unary operations only accept number arguments. Providing other types (for example, boolean) will throw an error.

## Server-side validation

With server-side validation, you can run server-side logic by specifying the `onSaveFunction()` in your step's code. When the user navigates away from the step's configuration card, `onSaveFunction()` runs and lets you verify the user's input.

If the user's input is valid, return `saveWorkflowAction`.

If the user's input is invalid, return a configuration card that displays an error message to the user that explains how to resolve the error.

Because server-side validation is asynchronous, the user might not know about the input error until they publish their flow.

Each validated input's `id` in the manifest file must match a card widget's `name` in the code.

The following example validates that a user text input includes the "@" sign:

### Manifest file

The manifest file excerpt specifies an `onSaveFunction()` named "onSave":

### JSON

```
{
  "timeZone": "America/Los_Angeles",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "addOns": {
    "common": {
      "name": "Server-side validation example",
      "logoUrl": "https://www.gstatic.com/images/branding/productlogos/calculator_search/v1/web-24dp/logo_calculator_search_color_1x_web_24dp.png",
      "useLocaleFromApp": true
    },
    "flows": {
      "workflowElements": [
        {
          "id": "server_validation_demo",
          "state": "ACTIVE",
          "name": "Email address validation",
          "description": "Asks the user for an email address",
          "workflowAction": {
            "inputs": [
              {
                "id": "email",
                "description": "email address",
                "cardinality": "SINGLE",
                "required": true,
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "onConfigFunction": "onConfig",
            "onExecuteFunction": "onExecute",
            "onSaveFunction": "onSave"
          }
        }
      ]
    }
  }
}
```

### Application code

The step's code includes a function called `onSave()`. It validates that a user-inputted string includes @. If it does, it saves the step. If it doesn't, it returns a configuration card with an error message explaining how to fix the error.

### Apps Script

```
// A helper method to push a card interface
function pushCard(card) {
  const navigation = AddOnsResponseService.newNavigation()
    .pushCard(card);

  const action = AddOnsResponseService.newAction()
    .addNavigation(navigation);

  return AddOnsResponseService.newRenderActionBuilder()
    .setAction(action)
    .build();
}

function onConfig() {
  const emailInput = CardService.newTextInput()
    .setFieldName("email")
    .setTitle("User e-mail")
    .setId("email");

  const saveButton = CardService.newTextButton()
    .setText("Save!")
    .setOnClickAction(
      CardService.newAction()
        .setFunctionName('onSave')
    )

  const sections = CardService.newCardSection()
    .setHeader("Server-side validation")
    .setId("section_1")
    .addWidget(emailInput)
    .addWidget(saveButton);

  let card = CardService.newCardBuilder()
    .addSection(sections)
    .build();

  return pushCard(card);
}

function onExecute(event) {
}

/**
* Validates user input asynchronously when the user
* navigates away from a step's configuration card.
*/
function onSave(event) {
  console.log(JSON.stringify(event, null, 2));

  // "email" matches the input ID specified in the manifest file.
  var email = event.formInputs["email"][0];

  console.log(JSON.stringify(email, null, 2));

  // Validate that the email address contains an "@" sign:
  if (email.includes("@")) {
    // If successfully validated, save and proceed.
    const hostAppAction = AddOnsResponseService.newHostAppAction()
      .setWorkflowAction(
        AddOnsResponseService.newSaveWorkflowAction()
      );

    const textDeletion = AddOnsResponseService.newRemoveWidget()
      .setWidgetId("errorMessage");

    const modifyAction = AddOnsResponseService.newAction()
      .addModifyCard(
        AddOnsResponseService.newModifyCard()
          .setRemoveWidget(textDeletion)
      );

    return AddOnsResponseService.newRenderActionBuilder()
      .setHostAppAction(hostAppAction)
      .setAction(modifyAction)
      .build();

  } else {
    // If the input is invalid, return a card with an error message

    const textParagraph = CardService.newTextParagraph()
      .setId("errorMessage")
      .setMaxLines(1)
      .setText("<font color=\"#FF0000\"><b>Error:</b> Email addresses must include the '@' sign.</font>");

    const emailInput = CardService.newTextInput()
      .setFieldName("email")
      .setTitle("User e-mail")
      .setId("email");

    const saveButton = CardService.newTextButton()
      .setText("Save!")
      .setOnClickAction(
        CardService.newAction().setFunctionName('onSave')
      )

    const sections = CardService.newCardSection()
      .setHeader("Server-side validation")
      .setId("section_1")
      .addWidget(emailInput)
      .addWidget(textParagraph) //Insert the error message
      .addWidget(saveButton);

    let card = CardService.newCardBuilder()
      .addSection(sections)
      .build();

    const navigation = AddOnsResponseService.newNavigation()
      .pushCard(card);

    const action = AddOnsResponseService.newAction()
      .addNavigation(navigation);

    const hostAppAction = AddOnsResponseService.newHostAppAction()
      .setWorkflowAction(
        AddOnsResponseService.newWorkflowValidationErrorAction()
          .setSeverity(AddOnsResponseService.ValidationErrorSeverity.CRITICAL)
      );

    return AddOnsResponseService.newRenderActionBuilder()
      .setHostAppAction(hostAppAction)
      .setAction(action)
      .build();
  }
}
```

## Related topics

- [Define an input variable](https://developers.google.com/workspace/add-ons/studio/define-input-variable)
- [Log activity and errors](./activity-logs.md)
- [Workspace Studio event objects](./event-objects.md)
- [Common Expression Language (CEL)](https://cel.dev/)
