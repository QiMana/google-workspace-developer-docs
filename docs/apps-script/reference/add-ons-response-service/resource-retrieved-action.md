---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/resource-retrieved-action
root: apps-script
fetched_at: 2026-04-23T15:18:41.138Z
---

# Class ResourceRetrievedAction

A ResourceRetrievedAction is used to retrieve custom resource content when needed, where the custom resource field is defined in the ResourceData.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
let fieldData_1 = AddOnsResponseService.newVariableData()
   .addStringValue("value_1");
let fieldData_2 = AddOnsResponseService.newVariableData()
   .addStringValue("value_2");

let resourceData = AddOnsResponseService.newResourceData()
   .addVariableData("field_1", fieldData_1)
   .addVariableData("field_2", fieldData_2)

let workflowAction = AddOnsResponseService.newResourceRetrievedAction()
   .setResourceData(resourceData)

let hostAppAction = AddOnsResponseService.newHostAppAction()
   .setWorkflowAction(workflowAction);

return AddOnsResponseService.newRenderActionBuilder()
   .setHostAppAction(hostAppAction)
   .build();
```

## Detailed documentation

### setResourceData(resourceData)

Sets the `ResourceData` to the resource retrieved action to provide values to the dynamic resource fields or custom resource fields.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `resourceData` | `ResourceData` | The `ResourceData` returned by the resource retrieved action. |

#### Return

`ResourceRetrievedAction` — This resource retrieved action, for chaining.
