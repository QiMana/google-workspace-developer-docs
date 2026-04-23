---
source: https://developers.google.com/apps-script/reference/card-service/workflow-data-source-type
root: apps-script
fetched_at: 2026-04-23T15:19:14.343Z
---

# Enum WorkflowDataSourceType

## Enum WorkflowDataSourceType

An enum that represents the type of the workflow data source.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const workflowDataSource = CardService.newWorkflowDataSource().setIncludeVariables(true)
.setType(CardService.WorkflowDataSourceType.USER);
```
