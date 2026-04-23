---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/resource-field
root: apps-script
fetched_at: 2026-04-23T15:18:40.976Z
---

# Class ResourceField

A ResourceField is a basic building block of a `DynamicResourceDefinition`, each resource field corresponds to a output variable of the current step. A single `DynamicResourceDefinition` can contain multiple resource fields.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
function onDynamicDefinitionFunction(e) {
  // ...
  let resourceField = AddOnsResponseService.newResourceField()
    .setSelector("question_1")
    .setDisplayText("Question 1")
    .setDataType(AddOnsResponseService.newDataType()
       .setBasicDataType(AddOnsResponseService.BasicDataType.STRING)
    );

  let resourceDefinitions = AddOnsResponseService.newDynamicResourceDefinition()
    .setResourceId("resource_definition_1")
    .addResourceField(resourceField);
  // ...
}

function onDynamicProviderFunction(e) {
  // ...
  let workflowAction = AddOnsResponseService.newResourceRetrievedAction()
    .setResourceData(
      AddOnsResponseService.newResourceData()
        .addVariableData("question_1", AddOnsResponseService.newVariableData().addStringValue("Answer 1"))
    );
  // ...
}
```

## Detailed documentation

### setDataType(dataType)

Sets the data type of the field, allows other steps to filter the variables by type at selection.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dataType` | `DataType` | A data type object, which can be a basic data type or a custom resource type. |

#### Return

`ResourceField` — This resource field object, for chaining.

---

### setDisplayText(displayText)

Sets the description of the field that is displayed to the end user during variable selection in subsequent steps.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `displayText` | `String` | The description for end users at variable selection. |

#### Return

`ResourceField` — This resource field object, for chaining.

---

### setSelector(selector)

Sets a key for the provider function to provide the value to during the step's execution.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `selector` | `String` | The field's reference key used to retrieve its associated `VariableData` with the same key used in `ResourceData`. |

#### Return

`ResourceField` — This resource field object, for chaining.
