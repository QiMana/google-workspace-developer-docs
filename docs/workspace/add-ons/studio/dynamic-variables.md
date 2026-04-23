---
source: https://developers.google.com/workspace/add-ons/studio/dynamic-variables
root: workspace
fetched_at: 2026-04-23T15:23:17.223Z
---

# Define a dynamic variable

This guide explains how to create a dynamic variable.

When possible, a variable should be statically defined in the manifest file as either an [input variable](./input-variables.md), [output variable](./output-variables.md), or [custom resource](./custom-resources.md). However, some situations require a variable that can only be defined when the user configures the flow because the nature of the input varies. For example, the number of questions and answers (and their content) for a Google Forms can't be determined until a specific form is selected during flow configuration.

Dynamic variables account for these cases by letting you define an input that produces a dynamic set of outputs in the manifest file and in the step's code.

## Define the output variable in the manifest file

In the manifest file, follow these steps:

- In `inputs[]`, specify an input variable that accepts a dynamic input value.
- In `outputs[]`, specify an output variable that returns a dynamic set of output variables. Give this output a `dataType` of `"workflowResourceDefinitionId": "dynamic_resource_id"`.
- Define a custom resource to handle the dynamic variable. Specify `workflowResourceDefinitions` with `"resourceType": "DYNAMIC"` and `"providerFunction": "onDynamicProviderFunction"`. The `id` must match the `workflowResourceDefinitionId` set in `outputs[]`. To learn more about custom resources, see [Define a custom resource](https://developers.google.com/workspace/add-ons/studio/custom-resource).
- Set `dynamicResourceDefinitionProvider` to the name of a corresponding function in the step's code, in this example `onDynamicDefinitionFunction()`, that defines and returns a configuration card that accepts a dynamic input value and returns a custom resource.

### JSON

```
"flows": {
  "workflowElements" : [{
    "id": "getDynamicVariable",
    "state": "ACTIVE",
    "name": "Get Dynamic Variable",
    "description": "Get Dynamic Variable",
    "workflowAction": {
    "inputs": [
      {
          "id": "dynamic_resource_input",
          "description": "Dynamic Resource Input",
          "cardinality": "SINGLE",
          "dataType": {
            "basicType": "INTEGER"
          }
       }
      ],
      "outputs": [
        {
          "id": "dynamic_resource_output",
          "description": "Dynamic Data",
          "cardinality": "SINGLE",
          "dataType": {
            "resourceType": {
              "workflowResourceDefinitionId": "resource_definition_1"
            }
          }
        }
      ],
      "onConfigFunction": "onDynamicVariableConfigFunction",
      "onExecuteFunction": "onDynamicVariableExecuteFunction"
    }
  }],
  "workflowResourceDefinitions": [{
    "id": "resource_definition_1",
    "name": "Dynamic Resource",
    "providerFunction": "onDynamicProviderFunction",
    "resourceType" : "DYNAMIC"
  }],
  "dynamicResourceDefinitionProvider" : "onDynamicDefinitionFunction",
}
```

## Define the output variable in code

The step's code includes these functions:

- `onDynamicVariableConfigFunction()`, which builds and returns a configuration card with a dynamic input widget. The name of this function must match the value of `onConfigFunction()` in the manifest file. The dynamic input widget's name must match the `id` set in the manifest file. This dynamic input widget lets users set a dynamic variable when configuring their step, like choosing a Google Form.
- `onDynamicVariableExecuteFunction()`, which returns the dynamic variable data as output when the step runs. The name of this function must match the value of `onExecuteFunction()` in the manifest file. The key of `variableData` in `returnOutputVariablesAction` must match the output variable's `id` set in the manifest file. The dynamic resource is found on the event object at `e.workflow.resourceFieldsDefinitionRetrieval`. The input can't reference variables because all the inputs for a dynamic resource must be available at config time.
- `onDynamicDefinitionFunction()`, which retrieves the dynamic variable data from the event object, specifically `resourceFieldsDefinitionRetrieval`, and returns `resourceFieldsDefinitionRetrievedAction` which provides the name of the output variables for later steps, and also the selectors so that the `onDynamicProviderFunction()` can provide the corresponding value to each output variable. The `resourceId` must match the `id` of an item in the `workflowResourceDefinitions[]` array set in the manifest file.
- `onDynamicProviderFunction()`, which provides a value for each output variable using selectors as keys by accessing the `resourceId` and the `workflowResourceDefinitionId`.

### Apps Script

```
function onDynamicVariableConfigFunction() {
  let section = CardService.newCardSection()
    .addWidget(
      CardService.newTextInput()
        .setFieldName("dynamic_resource_input")
        .setTitle("Dynamic Resource Input")
        .setHint("Input a Integer value between 1 and 3\(inclusive\) for corresponding number of output variables")
    );

  const card = CardService.newCardBuilder()
    .addSection(section)
    .build();

  return card;
}

function onDynamicDefinitionFunction(e) {
  console.log("Payload in onDynamicDefinitionFunction: ", JSON.stringify(e));
  var input_value = e.workflow.resourceFieldsDefinitionRetrieval.inputs.dynamic_resource_input.integerValues[0];

  let resourceDefinitions = AddOnsResponseService.newDynamicResourceDefinition()
    .setResourceId("resource_definition_1")
    .addResourceField(
      AddOnsResponseService.newResourceField()
        .setSelector("question_1")
        .setDisplayText("Question 1")
    );

  if (input_value == 2 || input_value == 3) {
    resourceDefinitions = resourceDefinitions
      .addResourceField(
        AddOnsResponseService.newResourceField()
          .setSelector("question_2")
          .setDisplayText("Question 2")
      );
  }
  if (input_value == 3) {
    resourceDefinitions = resourceDefinitions
      .addResourceField(
        AddOnsResponseService.newResourceField()
          .setSelector("question_3")
          .setDisplayText("Question 3")
      );
  }

  let workflowAction = AddOnsResponseService.newResourceFieldsDefinitionRetrievedAction()
    .addDynamicResourceDefinition(resourceDefinitions);

  let hostAppAction = AddOnsResponseService.newHostAppAction()
    .setWorkflowAction(workflowAction);

  let renderAction = AddOnsResponseService.newRenderActionBuilder()
    .setHostAppAction(hostAppAction)
    .build();

  return renderAction;
}

function onDynamicVariableExecuteFunction(e) {
  console.log("Payload in onDynamicVariableExecuteFunction: ", JSON.stringify(e));

  let workflowAction = AddOnsResponseService.newReturnOutputVariablesAction()
    .setVariableDataMap({
      "dynamic_resource_output": AddOnsResponseService.newVariableData()
        .addResourceReference("my_dynamic_resource_id")
    });

  let hostAppAction = AddOnsResponseService.newHostAppAction()
    .setWorkflowAction(workflowAction);

  let renderAction = AddOnsResponseService.newRenderActionBuilder()
    .setHostAppAction(hostAppAction)
    .build();

  return renderAction;
}

function onDynamicProviderFunction(e) {
  console.log("Payload in onDynamicProviderFunction: ", JSON.stringify(e));

  // resourceId == "my_dynamic_resource_id"
  var resourceId = e.workflow.resourceRetrieval.resourceReference.resourceId;
  // workflowResourceDefinitionId == "resource_definition_1"
  var workflowResourceDefinitionId = e.workflow.resourceRetrieval.resourceReference.resourceType.workflowResourceDefinitionId;

  const workflowAction = AddOnsResponseService.newResourceRetrievedAction()
    .setResourceData(
      AddOnsResponseService.newResourceData()
        .addVariableData("question_1", AddOnsResponseService.newVariableData().addStringValue("Answer 1"))
        .addVariableData("question_2", AddOnsResponseService.newVariableData().addStringValue("Answer 2"))
        .addVariableData("question_3", AddOnsResponseService.newVariableData().addStringValue("Answer 3"))
    );

  const hostAppAction = AddOnsResponseService.newHostAppAction()
    .setWorkflowAction(workflowAction);

  const renderAction = AddOnsResponseService.newRenderActionBuilder()
    .setHostAppAction(hostAppAction)
    .build();

  return renderAction;
}
```

## Related topics

- [Input variables](./input-variables.md)
- [Validate an input variable](./validate-inputs.md)
- [Output variables](./output-variables.md)
- [Define a custom resource](https://developers.google.com/workspace/add-ons/studio/custom-resource)
- [Log activity and errors](https://developers.google.com/workspace/add-ons/studio/log-activity)
- [Workspace Studio event objects](./event-objects.md)
