---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/workflow-validation-error-action
root: apps-script
fetched_at: 2026-04-23T15:18:44.897Z
---

# Class WorkflowValidationErrorAction

This action indicates that the host app (Google Workspace Studio) should display a validation error.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const hostAppAction = AddOnsResponseService.newHostAppAction()
   .setWorkflowAction(
     AddOnsResponseService.newWorkflowValidationErrorAction()
       .setSeverity(AddOnsResponseService.ValidationErrorSeverity.CRITICAL)
   );
```

## Detailed documentation

### setSeverity(severity)

Sets the severity of the validation error.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `severity` | `ValidationErrorSeverity` | The severity of the validation error. |

#### Return

`WorkflowValidationErrorAction` — This workflow validation error action.
