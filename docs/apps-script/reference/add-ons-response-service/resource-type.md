---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/resource-type
root: apps-script
fetched_at: 2026-04-23T15:18:42.430Z
---

# Class ResourceType

An application specific resource type, the unique identifier of the resource type should have a corresponding WorkflowResourceDefinition.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const customResourceType = AddOnsResponseService.newResourceType()
   .setWorkflowResourceDefinitionId("sample_resource_type_1");
```

## Detailed documentation

### setWorkflowResourceDefinitionId(resourceType)

Sets the workflow resource definition id.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `resourceType` | `String` | The workflow resource definition id. |

#### Return

`ResourceType` — This ResourceType object.
