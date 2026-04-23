---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/return-element-error-action
root: apps-script
fetched_at: 2026-04-23T15:18:41.344Z
---

# Class ReturnElementErrorAction

A ReturnElementErrorAction indicates that an error occurred during element invocation.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const workflowAction = AddOnsResponseService.newReturnElementErrorAction()
.setErrorActionability(
  AddOnsResponseService.ErrorActionability.NOT_ACTIONABLE
)
.setErrorRetryability(
  AddOnsResponseService.ErrorRetryability.NOT_RETRYABLE
)
// Set the user-facing error log
.setErrorLog(
  AddOnsResponseService.newWorkflowTextFormat()
    .addTextFormatElement(
      AddOnsResponseService.newTextFormatElement()
        .setText("Failed to create Google Doc.")
    )
);
```

## Detailed documentation

### setErrorActionability(errorActionability)

Sets the error actionability, an error should be actionable if it can be resolved by re-configuring the step. A "Fix it" link is displayed to the user to re-configure the step.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `errorActionability` | `ErrorActionability` | The error actionability. |

#### Return

`ReturnElementErrorAction` — This return element error action, for chaining.

---

### setErrorLog(log)

Sets the error log to be displayed to the end user at Workflow's activity feed.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `log` | `WorkflowTextFormat` | The error log for the end user. |

#### Return

`ReturnElementErrorAction` — This return element error action, for chaining.

---

### setErrorRetryability(errorRetryability)

Sets the error retry-ability, the flow terminates after the first try if an error is not retryable. Otherwise, Workflow is going to try to execute the Step for up to 5 times.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `errorRetryability` | `ErrorRetryability` | The `ErrorRetryability`. |

#### Return

`ReturnElementErrorAction` — This return element error action, for chaining.
