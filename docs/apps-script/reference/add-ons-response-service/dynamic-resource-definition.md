---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/dynamic-resource-definition
root: apps-script
fetched_at: 2026-04-23T15:18:37.379Z
---

# Class DynamicResourceDefinition

A DynamicResourceDefinition is a building block for a `ResourceFieldsDefinitionRetrievedAction`, it can contain one or more numbers of `ResourceField` to dynamically define the number of output variables provided by a step in Google Workspace Studio.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
let dynamicResourceDefinition = AddOnsResponseService.newDynamicResourceDefinition()
   .setResourceId("resource_definition_1") // The resource ID must match the one defined in the manifest.
   .addResourceField(
     AddOnsResponseService.newResourceField()
       .setSelector("question_1")
       .setDisplayText("Question 1")
   );
```

## Detailed documentation

### addResourceField(resourceField)

Adds a resource field to the dynamic resource definition.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `resourceField` | `ResourceField` | The resource field to add. |

#### Return

`DynamicResourceDefinition` — This object, for chaining.

---

### setResourceId(resourceId)

Sets the ID for the dynamic resource definition, this ID corresponds to the `workflowResourceDefinitionId` in the manifest.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `resourceId` | `String` | The unique identifier for the dynamic resource definition. |

#### Return

`DynamicResourceDefinition` — This object, for chaining.
