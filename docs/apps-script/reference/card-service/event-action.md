---
source: https://developers.google.com/apps-script/reference/card-service/event-action
root: apps-script
fetched_at: 2026-04-23T15:19:06.439Z
---

# Class EventAction

An EventAction to run when a [CEL expression validation](https://developers.google.com/workspace/add-ons/studio/validate-inputs#cel-validation) condition is met.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const eventAction = CardService.newEventAction().setActionRuleId("CEL_TEXTBOX_EVALUATION_RULE_ID")
.setExpressionDataAction(expressionDataAction)
.addPostEventTrigger(trigger_success)
.addPostEventTrigger(trigger_failure);
```

## Detailed documentation

### addPostEventTrigger(trigger)

Adds a [CEL expression validation](https://developers.google.com/workspace/add-ons/studio/validate-inputs#cel-validation) condition to evaluate after the event action runs.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `trigger` | `Trigger` | The CEL expression validation trigger to add. |

#### Return

`EventAction` — The EventAction, for chaining.

---

### setActionRuleId(actionRuleId)

Sets a unique identifier for the event action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `actionRuleId` | `String` | The unique identifier for the action rule. |

#### Return

`EventAction` — The EventAction, for chaining.

---

### setCommonWidgetAction(commonWidgetAction)

Set the common widget action for widgets.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `commonWidgetAction` | `CommonWidgetAction` | The common widget action. |

#### Return

`EventAction` — The EventAction, for chaining.

---

### setExpressionDataAction(expressionDataAction)

Sets the [CEL expression validation](https://developers.google.com/workspace/add-ons/studio/validate-inputs#cel-validation) data action for widgets.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `expressionDataAction` | `ExpressionDataAction` | The expression data action. |

#### Return

`EventAction` — The EventAction, for chaining.
