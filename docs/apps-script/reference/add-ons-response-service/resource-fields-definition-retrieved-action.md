---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/resource-fields-definition-retrieved-action
root: apps-script
fetched_at: 2026-04-23T15:18:41.866Z
---

# Class ResourceFieldsDefinitionRetrievedAction

A `ResourceFieldsDefinitionRetrievedAction` is a type of `ResourceFieldsDefinitionRetrievedAction` that is used to retrieve the definition of a list of resource fields through the `dynamicResourceDefinitionProvider` function specified in the manifest. A `ResourceFieldsDefinitionRetrievedAction` can contain one or more `DynamicResourceDefinition`.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
let resourceDefinitions = AddOnsResponseService.newDynamicResourceDefinition()
   .setResourceId("resource_definition_1")
   .addResourceField(AddOnsResponseService.newResourceField()
     .setSelector("question_1")
     .setDisplayText("Question 1"))

let workflowAction = AddOnsResponseService.newResourceFieldsDefinitionRetrievedAction()
   .addDynamicResourceDefinition(resourceDefinitions)

let hostAppAction = AddOnsResponseService.newHostAppAction()
   .setWorkflowAction(workflowAction);

return AddOnsResponseService.newRenderActionBuilder()
   .setHostAppAction(hostAppAction)
   .build();
```

## Detailed documentation

### addDynamicResourceDefinition(dynamicResourceDefinition)

Adds a `DynamicResourceDefinition` to the resource fields definition retrieved action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dynamicResourceDefinition` | `DynamicResourceDefinition` | The dynamic resource definition to add to the action. |

#### Return

`ResourceFieldsDefinitionRetrievedAction` — This resource fields definition retrieved action, for chaining.
