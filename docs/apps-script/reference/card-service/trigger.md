---
source: https://developers.google.com/apps-script/reference/card-service/trigger
root: apps-script
fetched_at: 2026-04-23T15:19:11.911Z
---

# Class Trigger

A trigger that runs [CEL expression validation](https://developers.google.com/workspace/add-ons/studio/validate-inputs#cel-validation) widget event actions according to the action rule ID.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
// Define Triggers for each Condition respectively
const trigger_success = CardService.newTrigger()
  .setActionRuleId("CEL_TEXTINPUT_SUCCESS_RULE_ID");

const trigger_failure = CardService.newTrigger()
  .setActionRuleId("CEL_TEXTINPUT_FAILURE_RULE_ID");

const eventAction = CardService.newEventAction()
  .setActionRuleId("CEL_TEXTINPUT_EVALUATION_RULE_ID")
  .setExpressionDataAction(expressionDataAction)
  .addPostEventTrigger(trigger_success)
  .addPostEventTrigger(trigger_failure);
```

## Detailed documentation

### setActionRuleId(actionRuleId)

Sets the action rule id for the trigger.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `actionRuleId` | `String` | The uuid that uniquely identifies an action. |

#### Return

`Trigger` — This object, for chaining.
