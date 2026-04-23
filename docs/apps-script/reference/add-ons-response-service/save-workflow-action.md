---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/save-workflow-action
root: apps-script
fetched_at: 2026-04-23T15:18:41.417Z
---

# Class SaveWorkflowAction

## Class SaveWorkflowAction

This action indicates that the host app (Google Workspace Studio) should save the agent.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const workflowClientAction = AddOnsResponseService.newWorkflowClientAction()
    .setSaveWorkflowAction(
       AddOnsResponseService.newSaveWorkflowAction()
    );
```
