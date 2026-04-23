---
source: https://developers.google.com/workspace/add-ons/studio/output-variables
root: workspace
fetched_at: 2026-04-23T15:23:18.763Z
---

# Pass data between steps with an output variable

This guide explains how to create an output variable.

Output variables are returned by steps and can be sent to another step. For example, pass an email address to another step which uses it to specify the recipient of an email.

Define the output variable in two places: the add-on's manifest file, and in code with a function that returns the output variable.

The following example returns a calculated mathematical result from three input variables: two numbers and an arithmetic operation.

## Define the output variable in the manifest file

In the Apps Script manifest file, specify an `outputs[]` array and an `onExecuteFunction()`.

Each item in the `outputs[]` array has these properties:

- `id`: Unique identifier for an output variable.
- `description`: A description of the output variable to display to end users.
- `cardinality`: How many values are permitted. Possible values are:
	- `"SINGLE"`: Only one value is permitted.
- `dataType`: The type of values accepted. `dataType` has the property `basicType` which defines the type of data. Valid values include:
	- `"STRING"`: An alphanumeric string.
		- `"INTEGER"`: A number.
		- `TIMESTAMP`: A timestamp in the "milliseconds since Unix epoch" format. For example, November 27, 2025, 16:49:02 UTC is represented as `1764262142988`.
		- `"BOOLEAN"`: Either true or false.
		- `"EMAIL_ADDRESS"`: An email address in the format `dana@example.com`.

The following example defines an output variable for a calculator step. The output variable is an integer.

### JSON

```
{
  "timeZone": "America/Los_Angeles",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "addOns": {
    "common": {
      "name": "Calculator",
      "logoUrl": "https://www.gstatic.com/images/branding/productlogos/calculator_search/v1/web-24dp/logo_calculator_search_color_1x_web_24dp.png",
      "useLocaleFromApp": true
    },
    "flows": {
      "workflowElements": [
        {
          "id": "calculatorDemo",
          "state": "ACTIVE",
          "name": "Calculate",
          "description": "Asks the user for two values and a math operation, then performs the math operation on the values and outputs the result.",
          "workflowAction": {
            "inputs": [
              {
                "id": "value1",
                "description": "value1",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "INTEGER"
                }
              },
              {
                "id": "value2",
                "description": "value2",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "INTEGER"
                }
              },
              {
                "id": "operation",
                "description": "operation",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "STRING"
                }
              }
            ],
            "outputs": [
              {
                "id": "result",
                "description": "Calculated result",
                "cardinality": "SINGLE",
                "dataType": {
                  "basicType": "INTEGER"
                }
              }
            ],
            "onConfigFunction": "onConfigCalculate",
            "onExecuteFunction": "onExecuteCalculate"
          }
        }
      ]
    }
  }
}
```

## Define the output variable in code

The step's code includes a function called `onExecuteCalculate()`, which is the `onExecuteFunction` defined in the manifest. It performs arithmetic on two user-inputted values, and returns the result as an output variable with a function called `outputVariables()`.

To return an output variable, return JSON with the following requirements:

- The `variableId` of each output variable must match its corresponding output variable's `id` in the manifest file.
- The `variableData` of the output variable must match the `dataType` and `cardinality` of the corresponding output variable in the manifest file.

The following example returns an output variable which is the arithmetic value of two input numbers:

### Apps Script

```
/**
 * Executes the calculation step based on the inputs from a flow event.
 *
 * This function retrieves input values and the operation from the flow event,
 * performs the calculation, and returns the result as an output variable.
 * The function logs the event for debugging purposes.
 */
function onExecuteCalculate(event) {
  console.log("output: " + JSON.stringify(event));
  var calculatedValue = 0;
  var value1 = event.workflow.actionInvocation.inputs["value1"];
  var value2 = event.workflow.actionInvocation.inputs["value2"];
  var operation = event.workflow.actionInvocation.inputs["operation"].stringValues[0];

  if (operation == "+") {
    calculatedValue = value1 + value2;
  } else if (operation == "-") {
    calculatedValue = value1 - value2;
  } else if (operation == "x") {
    calculatedValue = value1 * value2;
  } else if (operation == "/") {
    calculatedValue = value1 / value2;
  }
  const variableData = AddOnsResponseService.newVariableData()
    .addIntegerValue(calculatedValue);
  
  const workflowAction = AddOnsResponseService.newReturnOutputVariablesAction()
    .addVariableData("result", variableData);

  const hostAppAction = AddOnsResponseService.newHostAppAction()
    .setWorkflowAction(workflowAction);

  return AddOnsResponseService.newRenderActionBuilder()
    .setHostAppAction(hostAppAction)
    .build();
}
```

## Related topics

- [Input variables](./input-variables.md)
- [Dynamic variables](./dynamic-variables.md)
- [Log activity and errors](./activity-logs.md)
- [Workspace Studio event objects](./event-objects.md)
