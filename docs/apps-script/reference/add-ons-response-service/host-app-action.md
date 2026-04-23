---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/host-app-action
root: apps-script
fetched_at: 2026-04-23T15:18:39.105Z
---

# Class HostAppAction

A HostAppAction is a type of Action that is handled by individual host apps. Host Apps include Gmail, Chat, Drive, Calendar, Editor, Sheets, Studio, DuetAI.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const hostAppAction = AddOnsResponseService.newHostAppAction()
.setWorkflowAction(AddOnsResponseService.newWorkflowAction());
```

## Detailed documentation

### setWorkflowAction(workflowAction)

Sets the host app action to Workflow action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `workflowAction` | `WorkflowAction` | The Workflow action. |

#### Return

`HostAppAction` — This object, for chaining.
