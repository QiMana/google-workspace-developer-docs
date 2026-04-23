---
source: https://developers.google.com/workspace/add-ons/studio/handle-errors
root: workspace
fetched_at: 2026-04-23T15:23:18.265Z
---

# Handle errors

This guide explains how to manage Workspace Studio errors that occur when a step runs. Errors are displayed on the [**Activity** tab](https://studio.workspace.google.com/manage?tab=activity).

When an error occurs, you can specify whether the step should:

- **Return an actionable error**: Append a button to the [error log](./activity-logs.md) that directs the user to the step's configuration card, letting them modify their inputs to resolve the error. To mark an error as actionable, return `AddOnsResponseService.ErrorActionability.ACTIONABLE`. To mark an error as unactionable, return `AddOnsResponseService.ErrorActionability.NOT_ACTIONABLE`.
- **Retry the step after an error**: The flow attempts to run the step again up to 5 times before halting. To mark an error as one that can be retried, return `AddOnsResponseService.ErrorRetryability.RETRYABLE`. To mark an error that can't be retried, return `AddOnsResponseService.ErrorRetryability.NOT_RETRYABLE`.

You can also [create custom error logs](./activity-logs.md) with chips, hyperlinks, and styled text to provide users with more detailed context about the error.

## Return an actionable error

The following example builds a step that asks a user for a negative number. If the user enters a positive number, the step returns an actionable error on the [**Activity** tab](https://studio.workspace.google.com/manage?tab=activity) that prompts the user to correct their input.

The following manifest file defines the step's inputs, outputs, and the functions to call for configuration and execution.

### JSON

```
{
  "timeZone": "America/Toronto",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "addOns": {
    "common": {
      "name": "Retry Errors Example",
      "logoUrl": "https://www.gstatic.com/images/icons/material/system/1x/pets_black_48dp.png",
      "useLocaleFromApp": true
    },
    "flows": {
      "workflowElements": [
        {
          "id": "handle_error_action",
          "state": "ACTIVE",
          "name": "Handle Error Action",
          "description": "To notify the user that some error has occurred",
          "workflowAction": {
            "inputs": [
              {
                "id": "value1",
                "description": "The input from the user",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "outputs": [
              {
                "id": "output_1",
                "description": "The output",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "onConfigFunction": "onConfiguration",
            "onExecuteFunction": "onExecution"
          }
        }
      ]
    }
  }
}
```

The following code builds the configuration card and handles the execution logic, including error handling.

### Apps Script

```
/**
 * Returns a configuration card for the step.
 * This card contains a text input field for the user.
 */
function onConfiguration() {
  let section = CardService.newCardSection()
    .addWidget(CardService.newTextInput()
      .setFieldName("value1")
      .setId("value1")
      .setTitle("Please input negative numbers!"));
  const card = CardService.newCardBuilder().addSection(section).build();
  return card;
}

/**
 * Gets an integer value from variable data, handling both string and integer formats.
 * @param {Object} variableData The variable data object from the event.
 * @return {number} The extracted integer value.
 */
function getIntValue(variableData) {
  if (variableData.stringValues) {
    return parseInt(variableData.stringValues[0]);
  }
  return variableData.integerValues[0];
}

/**
 * Executes the step.
 * If the user input is a positive number, it throws an error and returns an
 * actionable error message. Otherwise, it returns the input as an output variable.
 * @param {Object} e The event object.
 */
function onExecution(e) {
  try {
    var input_value = getIntValue(e.workflow.actionInvocation.inputs["value1"]);
    if (input_value > 0) {
      throw new Error('Found invalid positive input value!');
    }

    // If execution is successful, return the output variable and a log.
    const styledText_1 = AddOnsResponseService.newStyledText()
      .setText("Execution completed, the number you entered was: ")
      .addStyle(AddOnsResponseService.TextStyle.ITALIC)
      .addStyle(AddOnsResponseService.TextStyle.UNDERLINE)

    const styledText_2 = AddOnsResponseService.newStyledText()
      .setText(input_value)
      .setFontWeight(AddOnsResponseService.FontWeight.BOLD)

    const workflowAction = AddOnsResponseService.newReturnOutputVariablesAction()
      .setVariableDataMap(
        {
          "output_1": AddOnsResponseService.newVariableData()
            .addStringValue(input_value)
        }
      )
      .setLog(AddOnsResponseService.newWorkflowTextFormat()
        .addTextFormatElement(
          AddOnsResponseService.newTextFormatElement()
            .setStyledText(styledText_1)
        ).addTextFormatElement(
          AddOnsResponseService.newTextFormatElement()
            .setStyledText(styledText_2)
        ));

    let hostAppAction = AddOnsResponseService.newHostAppAction()
      .setWorkflowAction(workflowAction);

    return AddOnsResponseService.newRenderActionBuilder()
      .setHostAppAction(hostAppAction)
      .build();

  } catch (err) {
    Logger.log('An error occurred: ' + err.message);

    // If an error occurs, return an actionable error action.
    const workflowAction = AddOnsResponseService.newReturnElementErrorAction()
      // Sets the user-facing error message.
      .setErrorLog(
        AddOnsResponseService.newWorkflowTextFormat()
          .addTextFormatElement(
            AddOnsResponseService.newTextFormatElement()
              .setText("Failed due to invalid input values!"))
      )
      // Makes the error actionable, allowing the user to correct the input.
      .setErrorActionability(AddOnsResponseService.ErrorActionability.ACTIONABLE)
      // Specifies that the error is not automatically retried.
      .setErrorRetryability(AddOnsResponseService.ErrorRetryability.NOT_RETRYABLE)

    let hostAppAction = AddOnsResponseService.newHostAppAction()
      .setWorkflowAction(workflowAction);

    return AddOnsResponseService.newRenderActionBuilder()
      .setHostAppAction(hostAppAction).build();

  } finally {
    console.log("Execution completed")
  }
}
```

## Retry the step after an error

The following example builds a step that simulates a temporary failure. If an error occurs, the step returns an error that can be retried, which causes the flow to rerun the step.

The manifest file defines the step.

### JSON

```
{
  "timeZone": "America/Toronto",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "addOns": {
    "common": {
      "name": "Retry Errors Example",
      "logoUrl": "https://www.gstatic.com/images/icons/material/system/1x/pets_black_48dp.png",
      "useLocaleFromApp": true
    },
    "flows": {
      "workflowElements": [
        {
          "id": "retryError",
          "state": "ACTIVE",
          "name": "Retry an error",
          "description": "Simulates a temporary failure and retries the step.",
          "workflowAction": {
            "inputs": [
              {
                "id": "value1",
                "description": "Any input value",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "outputs": [
              {
                "id": "output_1",
                "description": "The output",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "onConfigFunction": "onRetryConfiguration",
            "onExecuteFunction": "onRetryExecution"
          }
        }
      ]
    }
  }
}
```

The following code builds the configuration card and handles the retry logic.

### Apps Script

```
/**
 * Returns a configuration card for the step.
 * This card contains a text input field for the user.
 */
function onRetryConfiguration() {
  let section = CardService.newCardSection()
    .addWidget(CardService.newTextInput()
      .setFieldName("value1")
      .setId("value1")
      .setTitle("Enter any value"));
  const card = CardService.newCardBuilder().addSection(section).build();
  return card;
}

/**
 * Executes the step and simulates a transient error.
 * This function fails 80% of the time. When it fails, it returns an
 * error that can be retried.
 * @param {Object} e The event object.
 */
function onRetryExecution(e) {
  try {
    // Simulate a transient error that fails 80% of the time.
    if (Math.random() < 0.8) {
      throw new Error('Simulated transient failure!');
    }

    // If execution is successful, return the output variable and a log.
    var input_value = e.workflow.actionInvocation.inputs["value1"].stringValues[0];

    const styledText = AddOnsResponseService.newStyledText()
      .setText(\`Execution succeeded for input: ${input_value}\`);

    const workflowAction = AddOnsResponseService.newReturnOutputVariablesAction()
      .setVariables({
        "output_1": AddOnsResponseService.newVariableData()
          .addStringValue(input_value)
      })
      .setLog(AddOnsResponseService.newWorkflowTextFormat()
        .addTextFormatElement(
          AddOnsResponseService.newTextFormatElement()
            .setStyledText(styledText)
        ));

    let hostAppAction = AddOnsResponseService.newHostAppAction()
      .setWorkflowAction(workflowAction);

    return AddOnsResponseService.newRenderActionBuilder()
      .setHostAppAction(hostAppAction)
      .build();

  } catch (err) {
    // If a transient error occurs, return an error message saying the step tries to run again.
    Logger.log('A error occurred, trying to run the step again: ' + err.message);

    const workflowAction = AddOnsResponseService.newReturnElementErrorAction()
      // Sets the user-facing error message.
      .setErrorLog(
        AddOnsResponseService.newWorkflowTextFormat()
          .addTextFormatElement(
            AddOnsResponseService.newTextFormatElement()
              .setText("A temporary error occurred. The step will be retried."))
      )
      // Makes the error not actionable by the user.
      .setErrorActionability(AddOnsResponseService.ErrorActionability.NOT_ACTIONABLE)
      // Specifies that the error is automatically retried.
      .setErrorRetryability(AddOnsResponseService.ErrorRetryability.RETRYABLE);

    let hostAppAction = AddOnsResponseService.newHostAppAction()
      .setWorkflowAction(workflowAction);

    return AddOnsResponseService.newRenderActionBuilder()
      .setHostAppAction(hostAppAction)
      .build();
  } finally {
    console.log("Execution completed")
  }
}
```

## Related topics

- [Build a step](./build-a-step.md)
- [Log activity and errors](./activity-logs.md)
- [Update a configuration card](./update-cards.md)
