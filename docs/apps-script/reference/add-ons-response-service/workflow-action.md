---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/workflow-action
root: apps-script
fetched_at: 2026-04-23T15:18:44.160Z
---

# Class WorkflowAction

A WorkflowAction is a type of `HostAppAction` that is used to perform a specific action in Google Workspace Studio. A WorkflowAction can be one of the following actions:

- `SaveWorkflowAction`
- `ReturnOutputVariablesAction`
- `ReturnElementErrorAction`
- `ResourceRetrievedAction`
- `WorkflowValidationErrorAction`
- `ResourceFieldsDefinitionRetrievedAction`

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const hostAppAction = AddOnsResponseService.newHostAppAction();
hostAppAction.setWorkflowAction(AddOnsResponseService.newSaveWorkflowAction());
```
